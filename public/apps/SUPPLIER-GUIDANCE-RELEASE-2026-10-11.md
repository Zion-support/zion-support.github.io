# Supplier quote review guidance — 11 October 2026

Scoped additive release: five complete editorial guides in English, Brazilian Portuguese, Spanish, French and German. Existing supplier calculator, translated runtime, safeguards and prior releases are preserved.

Generated routes: `/apps/supplier-quote-review-guide.html`, `.pt-br.html`, `.es.html`, `.fr.html`, `.de.html`. Each guide includes a fictional USD example, markup-versus-margin explanation, tax separation, authorization gates and internal-report privacy. Five existing workbenches and five canonical homepages receive one same-language guide link each.

Single translation authority: `scripts/render-supplier-guidance.cjs`, invoked additively by the existing supplier release module. Canonical URLs, five-language navigation and six alternates per page. No form submission, order, booking, dispatch, persistent storage or email behavior is added.

Prepublication QA: existing five-locale calculator regression passed on 22 fresh production fixtures; guide rendering, preserved forms/scripts and two-pass idempotence passed. Live publication must be verified separately using `node scripts/test-supplier-guidance-live.cjs`. Full-network translation and functional verification remain incomplete.
