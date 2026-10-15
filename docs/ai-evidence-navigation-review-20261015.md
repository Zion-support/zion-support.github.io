# Evidence tools: accessible reciprocal navigation review — 15 October 2026

Status: DRAFT / UNMERGED / NOT PRODUCTION INTEGRATED / NOT VERIFIED LIVE.

Continues existing PR71573 at cb52cf0337f8cf02328a08bd09a3b2400ab00f47. Preserve the concurrent five-language renderer, safe worked examples, strict graph flags and clipboard fallbacks; do not recreate those releases or replace current homepage content.

## Scoped changes

The review renderer adds a focusable main skip target, visible main focus, reduced-motion override, 44px language-link/button targets and wrapping for related links to all 15 EN/PT-BR/ES/FR/DE review pages. No inline tool script, arithmetic, form, delivery recipient, source app or production workflow is changed. A new 17-case offline contract checks exact reciprocal alternates and generated destinations, language attributes/current state, unique IDs and resolving label/ARIA/fragment references, safe URI schemes, source drift and idempotence.

## Reproduce

`node --test scripts/test-ai-evidence-satellites.cjs scripts/test-ai-evidence-locales.cjs scripts/test-ai-evidence-review-hardening.cjs scripts/test-ai-evidence-fallbacks.cjs scripts/test-ai-evidence-navigation.cjs`

Local Node20.20.2: 83 tests passed, zero failures/skips. Original 66-case baseline also passed. Inputs were 11 immutable GitHub source responses checked against Git blob hashes. This is offline review QA, not browser/native-language/assistive-technology certification or production destination verification. The new suite is explicitly invoked by the command above; no CI workflow wiring is added in this commit.

## Release controls

No main write, force push, merge or dispatch. Keep manual production release hold. Required: exact-head readback/CI/provider diagnosis, full artifact integration and human editorial/mobile/keyboard review, then separate scoped merge/deploy approval and fresh HTTPS/content/interactive acceptance. Related service resources outside these three tools are not certified translated. Discovery dual-recipient inbox delivery and whole-network completeness remain unverified.
