# Planning resources — reviewed release candidate, 14 October 2026

Status: review branch only; NOT deployed or production-verified. Preserve the security release hold introduced by main commit f117fc0dca7d32505c744707189b7cb36c142c8c. This change does not restore triggers, dispatch deployment, alter permissions or bypass CI.

## Scope

- Fifteen EN/PT-BR/ES/FR/DE editions: ten-control Governance Checklist, six-question Readiness Assessment and a substantive four-stage 30-day Implementation Roadmap.
- Original governance thresholds and readiness percentage formula retained. High scores do not certify compliance or authorize implementation. Labels, controls, answers, errors, stages, recommendations, privacy, milestones and navigation translated.
- Shared responsive component styling, visible focus, native labeled controls, polite result announcements, skip links, self-canonical URLs, six alternates and reciprocal resource links.
- Five additive same-language homepage promotions; existing form and script blocks asserted unchanged. One final offline build-hook extension in ticket-support-release.cjs; no workflow edit and no live-check mutation.
- Generated artifact manifest /apps/planning-locales-release.json records exact page hashes, not proof of publication. Whole-network coverage remains open.

## Canonical source finding

The served root /ai-readiness-assessment/ is byte-identical to Zion-support/ai-readiness-assessment/index.html (Git blob 9d22f9b9bdc7c0171628901328d05a0677dd523a), NOT the stale service-page source in this repository public/ai-readiness-assessment/index.html. Preserve the independently hosted original quiz. The new main-site English edition uses /en/ai-readiness-assessment/ intentionally; other editions use /pt/, /es/, /fr/, /de/. Do not claim the separate root project has been updated or redirect it without a separate source review.

Governance and Roadmap English editions retain their existing root routes; translations use /pt/, /es/, /fr/, /de/. Portuguese homepage remains /. The three resources link the corresponding homepage #planning-resources, each other and the app-network hub.

## Review and test

Run node --check scripts/render-planning-locales.cjs and node scripts/test-planning-locales.cjs. Then run the existing full approved artifact pipeline in a controlled checkout. This scoped test uses synthetic Node DOM fixtures and actual homepage source when present; it is not native browser/mobile/assistive-technology or native-speaker certification. Readiness preserves six 1–3 answers, a 0–100 range and boundaries at 35/70. No model, account access, mail submission, storage or production dispatch.

After reviewed PR approval and required CI gates, use the existing authorized release process. Independently verify generated manifest hashes, all 15 live routes, declared languages, alternates, runtime controls, same-language links, five homepage promotions and absence of changes to forms/pricing/recipients. Until that succeeds, mark publication PENDING, not LIVE.
