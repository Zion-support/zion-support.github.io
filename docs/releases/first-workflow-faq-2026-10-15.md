# First-workflow FAQ — approved draft batch, 15 October 2026

Adds three original question/answer pairs to each existing EN, pt-BR, ES, FR and DE first-workflow guide: explore without system integration, exclude confidential inputs, and verify before real-world action. Uses the existing definition-list layout inside one named section before the evidence checklist. No additional homepage promotion, destination or commercial claim is introduced.

Exactly four files: first-workflow-copy.json, render-first-workflow.cjs, test-first-workflow.cjs, and this release note. Existing draft PR71575 only. Inspected pre-change head f8d2c3e9c81afafafdd3b54ab18a08213e032a9a.

Run `node --check scripts/render-first-workflow.cjs`, `node --check scripts/test-first-workflow.cjs`, and `node scripts/test-first-workflow.cjs`. Original tests remain intact. Added checks cover fifteen FAQ pairs, single named section, unchanged H1/alternates, escaping, twenty incomplete-copy preflight cases, and missing-section artifact rejection. Existing idempotence, protected forms/scripts/original hrefs, unowned-page collision and untouched Discovery checks still run.

Tests use the existing explicitly synthetic artifact fixtures. Five separately generated guide previews retain the original href list exactly. These are not full production artifact, browser/mobile/accessibility, native-language editorial, inbox-delivery or app-functionality certification.

No workflow, main branch, merge, dispatch, recipient, pricing, calculator runtime or independent app repository changes. No deployment. Preserve production hold: refresh current-head checks, reconcile the existing branch with current main and renderer ordering, resolve provider build failures, complete full artifact/privacy/alias and human QA, obtain separate scoped release approval, then verify actual HTTPS content and links. FAQ source presence is not proof that the website is updated.
