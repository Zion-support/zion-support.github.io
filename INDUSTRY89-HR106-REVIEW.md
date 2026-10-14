# Manufacturing / HR showcase repair — review only

Release candidate: `industry89-hr106-2026-10-14-v1`.

Two showcase families, ten complete EN/PT-BR/ES/FR/DE editions and five owned homepage insertions inside existing network promotions. Product names remain proper names; all editorial descriptions, navigation, limits and pilot instructions are translated. Existing Construction106 guides/promotions are intentionally preserved, not regenerated.

## Evidence and honesty
- Talent Acquisition was README-only before documentation repair commit `4eee19096c15bf1a8ba9f43859e90fa43cf094e1`, which corrected capability claims and added NETWORK.md. The four HR repository targets exist; existence is not implementation verification.
- Original OEE Intelligence Copilot repository returned 404. Related `oee-analytics-copilot` and `oee-dashboard-ai` repositories exist but are not asserted to be the same product. Original eight manufacturing use cases remain as editorial concepts, without unverified Live/Repo links.
- No machinery control, safety monitoring, hiring/ranking/dismissal, HRIS integration, labor-law guarantee or email delivery claim.
- Synthetic/authorized minimized data, accountable owner, baseline, qualified human review, stop rule and reversible fallback are required.

## Local tests
`node --check scripts/render-industry89-hr106.cjs`
`node scripts/test-industry89-hr106.cjs`

## Release hold
This candidate is NOT LIVE. The approved draft integration adds one explicit renderer/test step after the existing homepage producer and before final route-coverage verification and artifact upload. Existing renderer/hook bytes are unchanged. The manual-only trigger, main-only guard, permissions, cancellation policy and prior steps remain intact. No merge, workflow dispatch, deployment or release-hold removal is included. Required review, complete artifact/alias/previous-manifest checks, CI clearance and explicit release approval remain mandatory.

The draft workflow explicitly runs `node scripts/test-industry89-hr106-integration.cjs && node scripts/test-industry89-hr106.cjs && node scripts/render-industry89-hr106.cjs out`. The integration regression rejects missing/duplicate steps, skipped tests, incorrect ordering and removal of the manual/main/cancellation safeguards. This does not rebuild the entire production artifact or validate all prior manifests. After the release gates, independently verify ten page SHA256 values, six language alternates per page, all destinations and five homepage insertions. Do not count source publication as production proof. Real mobile/desktop/keyboard/accessibility and native-speaker QA remain open.

No form, email, payment, procurement or account action is included. Whole-network translations/interlinks/functionality remain incomplete.
