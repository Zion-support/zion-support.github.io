# Resource comparison content — 16 October 2026

Draft-source update in existing PR71571 only. Not merged, deployed or live.

Based on inspected head 5a554d8ba40e156128c62d540a3441db717b7b37. Adds one resource-comparison section to each generated EN/PT-BR/ES/FR/DE map: localized heading, introductory paragraph and three evaluation steps. No added links or new promotional section. Original href sequence, protected forms and scripts preserved by existing checks. No pricing, payment, recipient or publisher edits.

Files: scripts/use-case-map-link-copy.py; scripts/test-use-case-map-link-copy.py; docs/releases/resource-comparison-2026-10-16.md. Existing PR71571 only. Preserve concurrent changes and draft status.

Evidence before commit: four original input blobs independently Git-SHA verified. Original localization suite 14/14 PASS. Expanded offline suite 17/17 PASS, including actual source renderer, all five locales, incomplete copy rejection and escaping. Five real-source previews rendered, all original href sequences retained. Command: python scripts/test-use-case-map-link-copy.py.

Limitations: not full production artifact build, remote CI success, native-language review, browser/mobile/accessibility audit, live destination or app functionality verification. No new content online.

Release blocker: main public/discovery/index.html blob 6e4762ce6b861010694b59323d90ad846028dd50 retains $99 Offer/Stripe CTAs while hub source promotes Free Discovery. Do not change pricing or expand that promotion without canonical-owner reconciliation. Main publisher invokes scripts/prepare-pages-out.sh; inspect that script before assuming which renderers production executes.

Continuation: recovered Supermemory/Mem0 and Notion CEO Dashboard 3e8b94b0-eaf7-811b-9e58-fcd12dd736fd. User confirmed the three-file draft batch, existing Notion dashboard progress update and Supermemory checkpoint. Main writes, merges, production deployment, pricing and payment changes are outside this batch.
