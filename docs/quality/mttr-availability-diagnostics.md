# MTTR availability diagnostics

## Current behavior and scope

The issue-index collector, fingerprint regression guard, SLO guard and arbitration
digest are not implemented in the checked-in source. Their earlier placeholders
returned exit 0 without producing any report. The workflows then appeared to pass
the collection/guard steps before failing during `git add` with missing-file errors.

The repair reports the missing implementation at the generator step. Each invoked
component writes a separate JSON availability diagnostic, appends a short GitHub
job summary when available, and exits 1. Existing workflow dependencies therefore
skip later guard, staging and commit steps. The always-run artifact upload preserves
the diagnostic. This is diagnostic hardening, **not restoration of an MTTR service**.

Observed main failures on 31 October 2026:

- [Arbitration digest 41218505588](https://github.com/Zion-support/zion-support.github.io/actions/runs/41218505588).
- [Fingerprint guard 41218167718](https://github.com/Zion-support/zion-support.github.io/actions/runs/41218167718).
- [SLO guard 41216887171](https://github.com/Zion-support/zion-support.github.io/actions/runs/41216887171).

The collector is also called by `ai-automation-issue-index-weekly.yml`. This shared
caller now fails at the missing collector and uploads the same diagnostic.
In the two daily guard workflows, the collector fails first, so **the downstream
guard is skipped**. An issue-index diagnostic is not evidence that a guard ran.

## Artifact contract

Diagnostics live under `automation/reports/mttr-availability/`, separate from the
existing metric, history, Prometheus, cooldown and state paths. Component names
are a fixed allowlist:

| Component | Diagnostic file |
| --- | --- |
| Issue index | `issue-index.json` |
| Fingerprint regression | `fingerprint-regression.json` |
| SLO guard | `slo-guard.json` |
| Arbitration digest | `arbitration-digest.json` |

Every diagnostic has schema `zion.mttr.availability.v1`, `status: unavailable`,
`success: false`, `reasonCode: IMPLEMENTATION_MISSING`, `implemented: false`,
`collectionComplete: false` and `metrics: null`. It identifies the invoked
component, its expected output paths and a current observation timestamp.
Only validated repository, commit SHA, run ID and attempt fields are copied from
the environment. Tokens, routing keys, arbitrary environment fields and raw
exceptions are never serialized.

The helper writes the diagnostic through a temporary file and rename. A write
failure remains unsuccessful and emits a bounded error code. Existing reports
are not refreshed, deleted or accepted as outputs from this invocation. No zero
MTTR, empty incident population, healthy state, cooldown, completed guard result
or operational coverage is invented.

## Preserved controls

This change does not alter existing schedules, workflow permissions, concurrency,
action pins, job time limits, MTTR policy thresholds or the shared
`scripts/automation/commit-and-push-main.sh` writer. It does not enable issue,
PagerDuty, deployment or any other outbound activity. The existing commit steps
remain dependent on earlier success.

The new `MTTR availability contract` workflow is read-only and PR-only. It has no
schedule, push trigger or dispatch trigger, needs no package installation, and
runs the built-in Node test runner against the exact reviewed source.

## Requirements for a later real implementation

Workflow parameters alone are not a complete incident-metric specification.
Before replacing this explicit unavailable state, establish and review:

1. The incident population and authoritative source, including pagination,
   permissions, transport failures and inclusion/exclusion of pull requests.
2. Definitions of incident start, resolution, reopenings and deduplication, and
   the relationship between issue closure and actual recovery evidence.
3. Sampling/window rules, minimum sample treatment and aggregation by
   fingerprint. Missing data must stay distinguishable from a measured zero.
4. Versioned report and state schemas, consumers, prior-state validation and
   durable state across runs. The shared writer is currently a no-op; this PR
   does not reactivate it.
5. Warning/critical streaks, cooldown and arbitration semantics, with separately
   controlled issue/notification mutations and replay tests.
6. End-to-end proof of required artifacts, freshness, actual evaluation and the
   workflow gate before any notification is treated as resolved.

A green availability-contract test only proves the diagnostic behavior. The
three operational daily workflows and weekly collector remain unavailable until
their actual implementations and evidence are accepted.

## Verification

Run `node --test tests/ci/test_mttr_unavailable.cjs`. The suite invokes all four
real CLIs in isolated temporary directories and checks nonzero exit, honest
diagnostics, stale metric preservation, current invocation identity, redaction,
unknown-component rejection and write/summary failure handling. It performs no
network or external mutations.
