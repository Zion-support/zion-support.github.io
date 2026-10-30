# Multilingual evidence preview output safety — 15 October 2026

Status: DRAFT / NOT DEPLOYED / NOT VERIFIED LIVE.

Immutable starting head: 897668446f35e6113936f9dba3315e063e44afb7, existing PR #71573. All 95 existing offline tests passed on Node 20.20.2.

## Reproduced defect
On a disposable copy of the three app sources, the documented review entrypoint accepted output inside its source directory and wrote 20 HTML files (15 app editions plus five promotion fragments). This could pollute authoritative public/ during a mistaken local review command. No production source was modified by this experiment.

## Scoped correction
The review entrypoint now checks explicit, disjoint source/output directories before base rendering. It rejects identical, nested and ancestor outputs, dot-segment aliases, resolved source aliases, output-root and descendant symlinks, dangling aliases and file outputs. Validation itself creates no files. Existing disjoint preview output remains reusable. New guard and tests are covered by the existing read-only PR workflow with SHA-pinned actions and all-suite execution.

All 105 local offline tests passed, including ten new no-write/path regressions and the existing five-language rendering/navigation/runtime tests. This is not current-head remote CI, browser QA, native-language editorial review or a production artifact build.

The guard is at render-ai-evidence-review.cjs, the documented review entrypoint. Direct use of the lower-level locale renderer is not newly guarded. The filesystem check is not a sandbox against concurrent hostile filesystem mutation. Use a trusted, dedicated preview directory.

No production renderer hook, homepage integration, static-deploy change, merge, deployment, form POST, email recipient, pricing or automation cadence change. Preserve the release hold and separately review exact-head CI/provider checks and deployment approval.
