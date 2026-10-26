# Next autonomous improvement ideas (backlog)

This is an unexecuted engineering backlog. It does not enable automations, authorize publication, contact prospects or approve spending. Prioritize real client incidents and existing owners before starting a new lane.

## Contribution context
Use CTO-OPERATING-PHILOSOPHY.md and AGENT-QUICKSTART.md as companion documentation after their reviewed changes are integrated. The quickstart currently has a separate draft repair; do not duplicate or merge that lane from this document.

## 1. Restore meaningful preflight checks
Inventory package scripts and distinguish implemented checks from placeholders that only echo success. Propose one bounded replacement at a time, with positive and negative fixtures, actionable errors and an assigned review owner. Run npm run lint:check in the prepared repository environment; a script's presence does not prove it passes.

## 2. Diagnose smoke failures without weakening gates
Keep file-presence, nonempty and content-contract checks. Report the exact missing anchor and path rather than an unexplained exit code. Propose workflow diagnostics in a separate review; this documentation-only change does not modify workflows or schedules.

## 3. Review merge-conflict validation
The legacy backlog smoke expects the literal check-merge-conflict-markers.cjs. The root scripts/check-merge-conflict-markers.cjs path was not found in the inspected main snapshot. Do not describe that tool as installed or run a nonexistent command. An owner should locate any maintained equivalent, then propose a real validator with clean and conflicted fixtures before wiring it into a gate.

## 4. Preserve concurrent releases
Reconcile target-file overlap, exact-head CI and owner permissions before integration. Preserve the existing Tailwind, PostCSS/PM2 and agent-quickstart draft repairs. Do not dispatch weekly workflows, merge, deploy or start PM2 processes merely to make a historical run appear green.

## 5. Close production assurance gaps
Investigate the failed Cloudflare Workers build independently of successful GitHub Pages deployment. Inspect source/runtime ownership and native build logs; do not assume the two deployment products are interchangeable. Budget-blocked background agents require an explicit spending decision, not a silent limit increase.

## Completion evidence
For each implemented item record owner, exact files/commit, tests, limitations, release approval and live readback where applicable. Keep a backlog item pending until its evidence exists; documentation anchors alone do not implement its proposal.
