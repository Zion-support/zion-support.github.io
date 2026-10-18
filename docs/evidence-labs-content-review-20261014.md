# Evidence labs content review — 14 October 2026

Continuation verified 15 October 2026. Status: DRAFT REVIEW ONLY / NOT PUBLISHED. Approved scope: exactly this document and evidence-labs-review-copy-20261014.json on existing PR #71573. No runtime, homepage, renderer, workflow, billing, DNS, form, recipient or production changes.

## Current source correction
The earlier review package inspected original head d613a30e13f79b85fdfd3b6391dc18b872d9a10b. That snapshot is historical, not the current branch. Fresh pre-write branch head is b45983ca017a64d29a54a22673f0db49a55dc368; PR #71573 is open/draft/unmerged. Existing localization and fallback work must be preserved, not recreated. See [existing localization review](ai-evidence-localization-review-20261014.md) and [hardening review](ai-evidence-review-hardening-20261014.md).

The existing review renderer stages 15 EN/PT-BR/ES/FR/DE editions of Agent Trace Evidence Lab, Field SLA Acceptance Matrix and AI Dependency Blast-Radius Canvas. Root tool HTML remains English; translated preview output is produced by renderers. Do not infer deployed language coverage from source HTML or a preview.

Fresh main b1e9c8e13236dea79f2de5331bae03f05117ae14 differs from old f117fc0. Its static-deploy.yml blob 74aff349c5ef102f0e5fa26b5bee773488ea5d94 is dispatch-only, with a main-ref job guard and prepare-pages-out.sh. It no longer matches the earlier long renderer workflow. This lane does not change or certify its full production build chain.

## New editorial content
The companion JSON supplies five consistent promotional-copy sets: heading, introduction, three use-case cards, CTA and limitations. Product names remain stable. Review URLs point to immutable GitHub source, not unverified live app routes. These are optional editorial inputs, not loaded by production. Review alongside existing review-promotions fragments; do not append duplicate homepage sections. Use a one-for-one replacement of the existing owned promotion ID after owner review.

The copy describes local deterministic heuristics, not hosted AI or guaranteed privacy, availability, compliance or automatic field dispatch. Service-readiness calculations are internal guidance, not binding customer quotations. Use anonymized examples; never paste production secrets. Existing service-resource language limits must remain disclosed.

## Consistent publishing pattern
- Purpose, supported inputs, concrete output, evidence requirements and limitations on every tool.
- Reuse shared site tokens and semantic components. Test keyboard focus, labelled inputs, live results/errors, stale-state clearing, reduced motion and 320px overflow; do not introduce a competing stylesheet.
- Reciprocal home, catalog, relevant peer-tool and related-resource links. Verify every destination. Prefer useful topic paths over all-to-all link clutter.
- Translate headings, metadata, controls, help, errors, results, report/copy/reset feedback and privacy text. Keep technical JSON keys stable.
- Add correct self-canonical, reciprocal EN/PT-BR/ES/FR/DE hreflang and x-default only for editions actually generated and verified. English fallback is not a complete translation.
- Keep algorithm changes separate; test locale fixture parity and rendering idempotence. Re-read current branch before each write; never force push or compete with incident-fix lanes.
- Native editorial review, desktop/mobile/keyboard/accessibility checks, current-head CI/provider checks and owner release approval remain required.
- Following authorized deployment, verify HTTPS, expected release marker, metadata, reciprocal links and interactions independently. HTTP 200 alone does not certify interactions or Discovery email receipt.

## CI evidence and remaining gates
At reviewed head b45983c, 32 latest check runs returned: 20 success, 7 cancelled, 3 skipped, 1 neutral CodeQL SARIF-processing error, 1 Workers failure. This is not all-green CI. The new documentation commit will have a different head and requires separate checks; these counts must not be attributed to it.

Standalone-repository/Pages requirements remain tracked in issue #71574. No separate new repositories, certificates, production hooks, merge, dispatch or live publication are claimed here. Discovery must remain online and free; preserve its existing privacy/delivery owner lane rather than duplicating patches. Provider acceptance or Gmail SENT does not establish paired inbox receipt.

## Coverage and ownership
This is a three-tool editorial batch, not a complete network audit or proof that every published page is translated. Maintainer: existing PR #71573 owner / Zion Website QA. Next: compare new copy to staged localized previews, perform native/editorial/browser review, resolve current-head CI and provider failures, approve a precise integration patch and a separate production release. Existing concurrent content and release holds are preserved.
