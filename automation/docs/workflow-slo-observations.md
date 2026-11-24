# Workflow SLO observations

`automation/ai-workflow-slo-monitor.cjs` replaces the successful no-op that left the
scheduled workflow without its two required artifacts. It reads GitHub Actions
metadata and writes JSON and Markdown under `automation/reports`. It does not
change workflows, schedules, code, issues or production content.

## Scope and definitions

The default sample contains runs created in the last 14 days on `main`. Each run
is represented by its latest API state and attempt; earlier attempts are not
reconstructed. Failure rate is the number of `failure`, `timed_out`,
`action_required`, `startup_failure` and `stale` conclusions divided by those
conclusions plus `success`. Cancelled, skipped, neutral and active runs are counted
separately and excluded from both measured rates and durations.

The duration is `updated_at - run_started_at`. Its nearest-rank p95 is an API
timestamp elapsed-time proxy, not summed job time. Later changes to a workflow run
can change `updated_at`. These workflow metrics do not measure production uptime
or prove a customer incident. The existing thresholds remain: at least 5 eligible
completed runs, failure rate at least 15%, or elapsed p95 at least 20 minutes.

Filtered GitHub Actions searches return at most 1,000 results. The collector splits
time windows until each has fewer than 1,000, then reads every page and checks its
count and run identities. Every split must cover at least the count and all visible
run IDs already observed in its parent response. It fails on incomplete/changing pagination, unknown
states, invalid timestamps, API errors, an unsplittable one-second window, or the
bounded request/time budget. An incomplete report contains null metrics and cannot
be used as recovery evidence. Closure requires every observed workflow to have a
sufficient sample; an empty or partially under-sampled population cannot close an
incident. This conservative gate can require manual review for infrequent workflows.
It describes only the observed population, not proof of recovery for a previously
flagged workflow that has disappeared from the current window. Eligible measured
regressions still generate alerts even when another workflow is under-sampled.

The existing issue step is allowed only after successful collection and artifact
upload on `main`. PR validation is an offline contract job with `contents: read`;
a manual topic-branch run can collect read-only evidence but cannot run the issue
step. Paused issue/push helpers are unchanged.

Concurrency is scoped by pull request number or ref, keeping
`cancel-in-progress: false`. This prevents an unrelated PR from replacing a
pending read-only manual run in the old repository-wide concurrency group.

## Verification

Run `node --test scripts/checks/workflow-slo.test.cjs`. Fixtures cover complete
artifact production, rates and threshold boundaries, status exclusions,
workflow identity, multi-page and capped searches, incomplete API data, limits,
credential/error redaction, insufficient recovery evidence and output symlinks.

The live workflow requires `GITHUB_TOKEN` (or `GH_TOKEN`) with Actions read access
and `GITHUB_REPOSITORY`. It keeps the existing scheduled and manual triggers.
No extra production schedule is added.

Reference: <https://docs.github.com/en/rest/actions/workflow-runs#list-workflow-runs-for-a-repository>.
