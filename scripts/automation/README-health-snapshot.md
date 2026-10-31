# Automation health snapshot evidence

The collector reads GitHub; it never dispatches, commits, merges, deploys, creates
issues or closes incidents. Its only writes are local JSON files.

## Scope

It reads up to five newest-created runs on the configured production branch for
`gh-pages.yml`, `static-deploy.yml` and `deploy-on-push.yml`. Creation time and
run ID determine order, not update time or a success-only filter. Candidates
are evaluated newest first using their latest-attempt jobs and the Pages API.

Only a completed cancelled **first attempt** with a successful, complete jobs
response containing zero jobs is excluded. Its workflow, run/attempt/SHA,
timestamps, zero-job source and reason are recorded in
`collection.excludedRuns`. Any job, an earlier attempt, failed API request,
partial response, real failure, active attempt or skipped/unknown outcome
prevents that exclusion. A job with no steps still counts as a job.

`collection.maxRunsPerWorkflow` records the fixed five-run bound. If a workflow's
fetched history is exhausted by these exclusions while older runs are omitted,
selection fails closed: an omitted run might outrank an older candidate from
another workflow. A newer candidate already proven before that frontier can
still be selected. No success-only search or unbounded history scan is used.

- `checks.build`: the reviewed static preparation, rendering, verification and
  artifact-upload steps. The retired CI/CD Pipeline and optional Next.js
  diagnostic build are not evidence for this check.
- `checks.deploy`: the actual Pages deployment step for that same run.
- `checks.pages`: whether the Pages API reports the configured site as built.
  This is configuration/build-state evidence, not an HTTP, DNS or live-content
  probe.

Each check is true, false or null. Its details include a state, reason and
observed job/step IDs and timestamps. The publisher includes workflow/run IDs,
attempt, source SHA and API run timestamps. Raw API responses, authorization
headers, exception messages, SLO scores and incident counts are not published.

This scope does not prove which SHA is currently served by the CDN. A rerun of
an older-created run can publish after a newer-created run; this collector does
not enumerate all historic reruns to reconstruct the live deployment.

## Outcomes and freshness

- **ok** requires observed successful static gates, deployment and Pages state,
  plus a completed successful publisher.
- **degraded** records an observed failed step, failed publisher or Pages error.
- **pending** records a verified queued/running attempt, never an older success.
- **unknown**, **unavailable** and **stale** preserve the existing public snapshot.
  Examples include skipped/cancelled attempts, changed/missing step contracts,
  missing credentials, HTTP denial, timeouts, malformed/partial API data, wrong
  SHA/attempt evidence and old source timestamps.

The internal attempt report at
`automation/reports/automation-health-latest.json` is always written.
`public/api/automation-health.json` changes only when collection is complete;
a complete degraded or pending observation can be published, but is not healthy.
A partial degraded result (an observed failure together with any unknown,
unavailable or stale check) remains internal: the public snapshot is still
preserved. A detected failure alone does not prove complete current evidence.
Incomplete collection keeps the public file byte-for-byte unchanged and leaves
the existing freshness guard meaningful. A nonzero exit means the result is not
healthy, even when a measured degraded/pending report was written.

`timestamp` is the completed observation time, not a deployment time.
`generatedAt` records the collection attempt. Incomplete reports have a null
timestamp and stay internal. Both files use atomic replacement.

## Run and test

Requires Node 22 or newer, `GITHUB_REPOSITORY=owner/repo` and
`GITHUB_TOKEN` (or `GH_TOKEN`). Use a GitHub Actions token with **Actions: read**
and **Pages: read**; checkout separately needs **Contents: read**. Never print
the token or pass it as a command-line argument.

`AUTOMATION_HEALTH_BRANCH` defaults to `main`.
`AUTOMATION_HEALTH_MAX_RUN_AGE_HOURS` defaults to 24; an explicit invalid,
nonpositive value fails closed. Requests use an eight-second timeout, no retry
and a fixed GitHub API origin. Four independent reads precede at most fifteen
jobs reads (five candidates for each of three workflows), with no retries.
Unexpected job pagination or incomplete history pages are unavailable, not
silently truncated. An unresolved history bound preserves the public snapshot.

Run:

    node scripts/automation/generate-automation-health-snapshot.cjs

Test without credentials or network:

    node --test scripts/automation/generate-automation-health-snapshot.test.cjs

## Remaining production integration

This change does not update the July public snapshot, restore report-push
helpers, alter publisher gates or claim recovery of the production freshness
incident.

At the inspected revision, Deploy on Push invokes collection after its Pages
artifact has already been uploaded, with no API token mapped into those steps.
Its report-push helper is a no-op and workflow contents permission is read-only.
A local report generated there cannot repair the already-uploaded artifact or
the snapshot checked out by the scheduled repository freshness guard.

A reviewed pre-assembly integration can include a validated local JSON in the
normal Pages artifact without relying on the report-push helper. It must supply
the token/read permissions and run before `prepare-pages-out.sh`, then verify
the resulting `out/api/automation-health.json`. However, collecting inside the
publisher observes that same publisher as pending. It cannot certify its own
future deployment or permanently mark its artifact healthy.

For a completed-publisher observation, collect in a separate read-only job after
the publisher completes and hand off that exact validated report to a reviewed
publication/persistence mechanism. The repository's guard also requires that
report to be persisted in its source branch; a CDN-only update is insufficient.
Coordinate ownership of both flows before editing shared publisher workflows.
