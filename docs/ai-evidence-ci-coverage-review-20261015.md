# Evidence app regression coverage — 15 October 2026

Status: DRAFT / NOT DEPLOYED / NOT VERIFIED LIVE.

Reviewed immutable PR #71573 head d4166caf77487ff544b6922f92676ec50cac2918. The existing shared renderers already generate 15 EN/PT-BR/ES/FR/DE app editions and five homepage promotion fragments. Do not duplicate those translations or overwrite concurrent homepage content.

## Gap and correction
The existing offline workflow ran satellites, locales and review-hardening tests, but omitted fallback and navigation suites. It also omitted PR path filters for the fallback/accessibility modules and their test files.

This patch adds five explicit path filters, runs all scripts/test-ai-evidence-*.cjs suites, and adds two workflow-contract tests. Guards reject missing filters, partial suite execution, masked failures, publication permissions, unpinned standard actions, and push/schedule triggers. Existing PR/manual triggers, pinned actions, contents-read permission and five-minute timeout are preserved. No production deploy workflow, homepage or app logic is edited.

## Local evidence
- Node v20.20.2: original five suites 93/93 PASS.
- Patched six suites: 95/95 PASS; zero skipped or cancelled.
- Separate review rendering: 15 app pages and five promotion fragments produced.
- An initial local test-string escaping mistake was corrected before commit. An initial 30-second preview render timed out; a later render completed with a 90-second command limit. These are not remote CI results.

Reproduce: node --test scripts/test-ai-evidence-*.cjs
Preview: node scripts/render-ai-evidence-review.cjs public /tmp/zion-evidence-preview

Still required: exact committed-head remote CI, full production artifact checks, native-language copy review, actual browser/mobile/keyboard/accessibility QA, standalone repository/Pages admin decisions, and separate merge/deploy approval. No live links, full-network certification or Discovery inbox-delivery verification is claimed.
