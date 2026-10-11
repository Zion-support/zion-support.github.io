# Bilingual app showcase release — 2026-10-11

## Source and delivery
Production publishes `public/` plus artifact-only renderers. The new `scripts/render-network-showcase-release.cjs` is invoked by the existing `render-network-home-ad.cjs` deployment step after all its previous hooks, followed by scoped QA. No original renderer hook is removed.

## Changed public routes
- `/apps/network.html` — English showcase.
- `/pt/apps/network.html` — matching Portuguese showcase.
- `/en/` and `/` — localized promotion within the existing network section, not a duplicate section.
- `/apps/network-showcase-release.json` — generated scope/check manifest; not an independent live certification.

## Editorial contract
Use consistent Home / Network / Discovery / language navigation, reciprocal canonical alternates, shared site CSS, keyboard focus visibility and matching translated headings. Keep all 34 earlier GitHub source links and existing same-origin catalog links. Do not equate a repository, page or self-reported checklist with a working AI model, compliance certification or production readiness. Source-reviewed featured tools are ROI Calculator, SLA Calculator and AI Governance Checklist; existing tool languages are labeled. FinOps Estimator was not advertised as a calculator because its source redirects to consulting.

## Validation
The new renderer was locally tested with current homepage/tool source plus scoped dependency fixtures: syntax, repeat-render idempotence, locale/heading/canonical checks, all earlier source links, preserved homepage forms/scripts, and rejection of missing stylesheet/home-section anchors. The committed scoped QA additionally rejects malformed alternate locale and injected form fixtures. Full existing deployment chain and fresh live delivery require separate CI/HTTP evidence after commit.

## Boundaries and continuation
Only this showcase and its two homepage promotions are EN/PT-complete. Existing EN/PT/ES/FR/DE content is preserved, not certified network-wide. Repository inventory, full body/navigation translation matrix, interactive browser behavior and whole-network coverage remain unfinished. No Discovery submission, email send, purchase, dispatch, payment, deletion, new schedule or existing repair PR merge is part of this release.
