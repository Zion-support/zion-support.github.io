# Evidence tools: worked examples and edited-input review

Status: DRAFT / PREVIEW ONLY / NOT VERIFIED LIVE.

This continuation builds on PR #71573 head ba6b5d5ecad5dfa891f0dc695f52ba1df2fab7f7. The earlier five-language rendering, navigation and main reconciliation already exist and are preserved, not repeated. No production source page, homepage, renderer hook, prepare-pages script or production deployment workflow is changed by this batch.

## Content and behavior

The review renderer adds one localized worked-example section to each of the 15 EN/PT-BR/ES/FR/DE previews. Trace: two synthetic spans, 180 input and 90 output tokens, with coverage and privacy limits. Field: 2 sequential sites, 1 simultaneous site and 1.5 nominal hours of headroom; all-in supplier cost 100+25 gives internal minimum 175 with 40% markup, never an authorized quote. Dependency graph: gpu-cluster has four transitive impacted dependents ending at customer-portal, four hops away. Examples are assumptions, not measured client outcomes.

Editing trace or graph inputs immediately clears the previous summaries; graph simulation cannot reuse the old validated topology until validation is repeated. Numeric input changes reassess the field evidence. Empty fields, fractional site/technician counts, values outside displayed maximums, negative or nonfinite values block readiness export and clear old commercial results. Original public source files remain unchanged; these repairs apply to generated review editions only. Existing localized language/tool interlinks and five nonduplicate homepage promotion fragments are preserved, not deployed.

## Reproduce and evidence

```
node scripts/render-ai-evidence-review.cjs public /tmp/zion-evidence-preview
node --test scripts/test-ai-evidence-satellites.cjs scripts/test-ai-evidence-locales.cjs scripts/test-ai-evidence-review-hardening.cjs
```

Local Node20.20.2: 51/51 tests passed, including 21 new cases and 75 invalid numeric fixtures across five locales. Removing the hardening call made 20 of the 21 new tests fail; restoring it returned the suite to green. The PR-only read-only pinned Node22 QA workflow now runs the new suite. Remote current-head CI is separate evidence, not implied by local success. Tests use a simulated DOM; no native-speaker, mobile, visual, screen-reader or complete production artifact certification.

## Release and CEO queue

- Source/QA: review immutable committed bytes and current-head checks; obtain actual Workers build logs rather than infer a cause from failure status.
- Editorial/design: native-language, real desktop/mobile, keyboard and assistive-technology review remains open.
- Architecture/admin: reconcile standalone repository/Pages requirements in issue #71574 and coordinate the production artifact/homepage hook. No competing CNAME or DNS edits.
- Release: keep PR draft/unmerged and manual-only production hold; separate exact merge/deploy confirmation is still required after gates pass. Then independent HTTPS/status/content/interaction checks, Notion evidence and durable memory.

No deployment, email, form submission, payment, booking, dispatch, billing change or full-network readiness claim. Do not duplicate completed Batch91 compatibility repairs or existing homepage promotions.
