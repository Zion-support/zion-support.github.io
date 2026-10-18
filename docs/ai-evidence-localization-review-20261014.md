# Evidence tools — five-language review batch, 14 October 2026

Status: **DRAFT / NOT PRODUCTION INTEGRATED / NOT VERIFIED LIVE**. This supersedes older PR homepage snapshots; it does not reopen the already finished Batch91 compatibility repair.

## Source and scope

PR #71573 retains its three original tool source files and original functional contracts. A non-force two-parent reconciliation preserves the current main tree and the six draft-added files. Current main homepage and apps-directory files are retained byte-for-byte rather than overwriting concurrent content with an older draft. Production `static-deploy.yml`, `prepare-pages-out.sh`, forms, recipients, prices and billing are untouched.

`node scripts/render-ai-evidence-review.cjs public /tmp/zion-evidence-preview`

Generates 15 review editions: EN `/slug/`, PT-BR `/pt/slug/`, ES `/es/slug/`, FR `/fr/slug/`, DE `/de/slug/` for `agent-trace-evidence-lab`, `field-sla-acceptance-matrix`, `ai-dependency-blast-radius`. These are preview/target routes, NOT live-link claims. Five `review-promotions/{en,pt,es,fr,de}.html` fragments reuse the existing owned promotion ID for a future one-for-one replacement; do not append duplicate sections.

Translated controls, guidance, privacy limits, known runtime messages, report headings, clipboard feedback and locale number formatting; language switcher, canonical plus six alternates, matching-language reciprocal tool/Discovery links. Stable product names, JSON schema keys, IDs, PO/POC/OEM/FRU and HOLD are technical names/codes, not untranslated prose. Existing service-resource links explicitly disclose English-only content outside scope.

Invalid trace/graph inputs clear stale summaries. Invalid field inputs clear the prior brief and cannot copy stale evidence. Arithmetic remains verified all-in cost × 1.40; that is 40% markup, not 40% gross margin or an approved quote. No dispatch is authorized.

## QA and release gates

Run `node --test scripts/test-ai-evidence-satellites.cjs scripts/test-ai-evidence-locales.cjs`. Tests cover five locales, privacy/static routes, trace/token patterns, field PO/concurrency/math/copied-report gates, dependency transitivity/cycles, invalid-state clearing, promotions and repeat-render byte idempotence. Automated tests are not native-language, mobile, keyboard or assistive-technology certification. Visual/editorial review and current-head CI remain required.

No production renderer hook is added. Maintainer must review the artifacts and exact-head CI/provider failure, choose an owner-coordinated integration preserving existing homepage sections, reconcile standalone-repository/Pages requirements, then obtain separate merge/deploy confirmation. Only report publication after successful authorized deployment and independent HTTPS/HTTP200/content/interaction readback. Full network localization and inbox delivery remain unverified.
