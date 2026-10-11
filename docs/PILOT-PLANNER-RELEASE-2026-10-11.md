# Pilot Planner — additive consolidation, 11 October 2026

Final release `2026-10-11-pilot-planner-v1` preserves prior renderer release `pilot-planner-locales-2026-10-11-v1`, its complete EN/PT-BR/ES/FR/DE runtime, usage/privacy/accessibility layer and guide contracts.

## Correction
Initial replacement 8b819ce unintentionally collided with an already existing renderer API. Activation run 38150233568 failed before upload (`locales is not iterable`); no partial release was published. Original renderer blob 4f29af692043251af0c30dfdb8b5670714229ccc restored byte-for-byte. Do not characterize that failure as pre-existing.

## Canonical URLs preserved
Portuguese `/automation-pilot-planner/`; EN/ES/FR/DE `/automation-pilot-planner/{en,es,fr,de}/`. New locale-prefix URLs from initial documentation are redirect aliases, not replacement canonical pages.

## Additive improvements
Consolidated translated homepage promotions and reciprocal Discovery/Field Guide/learning-path entry links; local-only publication manifest; source-aware canonical route registry; final compatibility gate verifies original API, five-language local plans, copy/download fallback, guide returns and translated accessible usage layers. Full field-guide aliases refreshed after canonical-guide additions. Forms, runtime scripts, delivery, calculations and approval gates preserved.

## Offline evidence
Original committed renderer QA PASS, guide contract PASS, usage/accessibility QA PASS, two clean fixture runs across 20 peer pages with exact forms/scripts preserved and idempotent promotions. Earlier isolated draft QA is not current-source evidence. Native browser and live matrix require separate verification. Whole-network translations/interlinks remain incomplete.

Commands: `node scripts/render-pilot-planner-locales.cjs out`; `node scripts/test-pilot-planner-locales.cjs out`; `node scripts/test-pilot-planner-live.cjs` (GET only).
