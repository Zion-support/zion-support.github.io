# Evidence tool pathways — 16 October 2026

Status: REVIEW ONLY / NOT MERGED / NOT DEPLOYED / NOT VERIFIED LIVE.

Based on immutable PR #71573 head `46facd3b9c367bbf70d22d54938c67be35bd5978`.

## Content and navigation
- Add a shared choose-the-tool panel to 15 generated EN/PT-BR/ES/FR/DE review editions. All three tools are described with their actual input and capability limits.
- Add three translated evidence-review steps per edition and reciprocal same-language links to the comparison panel in the other two tools. Brand names and schema keys stay unchanged.
- Add translated decision-support copy to the existing five homepage promotion fragments, without injecting sections into the production homepage.
- Original source app HTML, calculations, form destinations, payments, production workflow and publisher are unchanged.

## Verification
Local Node v20.20.2: `node --test scripts/test-ai-evidence-*.cjs` — **117 passed, 0 failed, 0 skipped** (105 existing + 12 new tests). Full output retained in the review artifact. New tests cover all locales, generated fragment resolution, tool limits/checklist text, unchanged inline scripts, duplicate/ambiguous insertion rejection and read-only CI path coverage. GitHub Node22/current-head CI remains independently required.

Reproduce: `node scripts/render-ai-evidence-review.cjs public /tmp/zion-evidence-preview`. Review pages are generated outside public/; no production renderer hook was added.

## Release gates
Keep existing PR draft. Maintainer must review exact-head CI/provider results, browser/mobile/keyboard/accessibility and native-language copy; resolve standalone repository/Pages requirements in issue #71574; reconcile current production integration; obtain separate exact merge/deploy approval and independently verify HTTPS, HTTP200, correct locale content and interactions before announcing live URLs. This batch does not certify the full apps network or all destination translations.
