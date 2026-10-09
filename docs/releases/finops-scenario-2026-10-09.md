# FinOps scenario release — 9 October 2026

Five translated local calculators and five pilot guides (EN/PT-BR/ES/FR/DE); translated labels, outputs, errors, methodology, limitations and three FAQs. Canonical and five locales + x-default. Five homepage promotions, 15 tool return links, five learning-guide links and a responsive learning-grid repair. Existing forms preserved.

Legacy `/finops-estimator/` remains a consulting redirect. New routes: `/apps/finops-scenario-estimator.html`, `/apps/finops-pilot-guide.html` and `/pt/`, `/es/`, `/fr/`, `/de/` equivalents. Manifest: `/apps/finops-scenario-publication.json`.

Local scenario math, not cloud scanning or AI forecasting. No transmission, storage, account connection, billing action or guaranteed savings. USD throughout, without FX conversion. Gross = baseline × reduction / 100; net monthly = gross − recurring cost; horizon = net monthly × months − implementation; payback = implementation / positive net monthly. Example 10000 / 15 / 200 / 3000 / 12 yields 1500 / 1300 / 12600 / about 2.31 months. Taxes, discounting, growth and migration disruption excluded.

Scoped offline tests passed: math/bounds, zero/negative cases, localized DOM output/error/reset, no transmission/storage APIs, metadata, form preservation, repeat-render uniqueness. Full pipeline and live/browser QA must be verified after deployment. Full-network translation/interlink completion and Discovery email receipt are not claimed.

Hook: final require in existing render-network-home-ad.cjs, after prior renderers and tests. Preserve concurrent edits. Rollback removes this require rather than reverting unrelated work.
