# Manufacturing / HR showcase repair — review only

Release candidate: `industry89-hr106-2026-10-14-v1`.

Two showcase families, ten complete EN/PT-BR/ES/FR/DE editions and five owned homepage insertions inside existing network promotions. Product names remain proper names; all editorial descriptions, navigation, limits and pilot instructions are translated. Existing Construction106 guides/promotions are intentionally preserved, not regenerated.

## Evidence and honesty
- Talent Acquisition repository contains only a README at the refreshed inspection. The four HR repository targets exist; existence is not implementation verification.
- Original OEE Intelligence Copilot repository returned 404. Related `oee-analytics-copilot` and `oee-dashboard-ai` repositories exist but are not asserted to be the same product. Original eight manufacturing use cases remain as editorial concepts, without unverified Live/Repo links.
- No machinery control, safety monitoring, hiring/ranking/dismissal, HRIS integration, labor-law guarantee or email delivery claim.
- Synthetic/authorized minimized data, accountable owner, baseline, qualified human review, stop rule and reversible fallback are required.

## Local tests
`node --check scripts/render-industry89-hr106.cjs`
`node scripts/test-industry89-hr106.cjs`

## Release hold
This candidate is NOT LIVE. The renderer is deliberately NOT wired into any workflow or current chained build hook. `.github/workflows/static-deploy.yml` and all existing renderer/hooks are unchanged. Do not lift the manual-only production hold or merge/deploy without review, complete artifact/alias/previous-manifest checks, required CI clearance and explicit release approval.

After those gates, reconcile this additive command after the existing homepage promotion producer: `node scripts/render-industry89-hr106.cjs out`. Run the tests and full artifact regressions, then independently verify ten page SHA256 values, six language alternates per page, all destinations and five homepage insertions. Do not count source publication as production proof. Real mobile/desktop/keyboard/accessibility and native-speaker QA remain open.

No form, email, payment, procurement or account action is included. Whole-network translations/interlinks/functionality remain incomplete.
