# Discovery publishing contract

Discovery is free and online. The questionnaire creates an instant browser report and submits the same report through FormSubmit to commercial@ziontechgroup.com, with the validated client address and Carlos copied. Provider acceptance is not inbox-delivery proof. Preserve copy/download/manual-email fallbacks.

## Canonical content and design

`content/discovery-showcase.json` is the shared EN/PT-BR/ES/FR/DE content source. `scripts/render-discovery-showcase.cjs` produces five `/apps/discovery-showcase*.html` pages and inserts the same localized benefits and communications cards into the five homepages in the assembled `out/` artifact. The renderer preserves existing homepage content and uses `/assets/css/site.css`, semantic headings, a skip link, keyboard-focus styles, canonical URLs and reciprocal hreflang links.

Run after `scripts/prepare-pages-out.sh`, before uploading the Pages artifact. All publishers must use this step to retain the new content. Do not rebuild or replace the homepage from the unrelated Next.js source without reviewing the current static publisher.

## Quality gates

- Six benefit bullets and four communications cards in each locale.
- One language-appropriate questionnaire CTA per journey.
- No draft banners, guaranteed savings or guaranteed inbox-delivery claims.
- `DISCOVERY_HTML=out/discovery/index.html node --test scripts/test-discovery-delivery-contract.cjs` uses mocked fetch and sends no email.
- A completed deployment and fresh public-content verification are required before claiming the release is live.

## Remaining program work

Merge the communications catalog supplement into both master catalogs without duplicates; reconcile hub legacy Discovery claims; inventory all app repositories before claiming universal reciprocal navigation or complete translation coverage. New showcase translations do not certify translation of every existing app or questionnaire. An end-to-end receipt test requires a designated client test inbox.
