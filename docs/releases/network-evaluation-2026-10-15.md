# Network evaluation checklist — DRAFT, not deployed

## Scope

Add four fully authored questions and explanations in English, Portuguese (Brazil), Spanish, French and German to the existing Network Start Here guide. The rubric distinguishes implementation evidence, input sensitivity, a measured baseline and human approval/stop rules. It does not implement an AI app or certify existing tools.

The five existing homepage promotions receive one same-language checklist link, inside their current wrapper. No new promotional card, page family or duplicate banner is added. Each guide links back to its matching homepage section and to the multilingual network catalog. Existing guide cards remain intact.

Integration appends one call to `scripts/render-network-home-ad.cjs`; all previous hooks are preserved. No deployment workflow, permissions, trigger, manual-release hold, form, recipient, calculator, commercial logic or payment behavior is modified.

## Verification

Run `node scripts/test-network-evaluation.cjs`.

92 assertions passed against synthetic fixtures for ten pages: complete localized question/answer blocks, same-language links, reciprocal homepage/catalog links, unique IDs, preservation of existing promotion copy and SEO head, forms/scripts, byte-identical repeat rendering, and fail-before-write preflight for missing routes, wrong language, duplicate promotions, missing main and conflicting IDs. Node syntax checks passed for renderer and integration source.

These are local fixture checks, not a complete production build, live HTTP check, browser interaction, mobile/screen-reader audit or native-speaker review. Exact-head full-artifact CI and owner review are required before any release. Future renderers that replace the owned homepage section or regenerate the guide must run this finalizer again or preserve its owned blocks.

## Review URLs after an authorized deployment

English `/apps/network-start-here.html#network-evaluation`; Portuguese `/pt/apps/network-start-here.html#network-evaluation`; Spanish `/es/apps/network-start-here.html#network-evaluation`; French `/fr/apps/network-start-here.html#network-evaluation`; German `/de/apps/network-start-here.html#network-evaluation`.

Matching homepage paths: `/en/`, `/`, `/es/`, `/fr/`, `/de/`. These are intended acceptance targets, not newly verified live content.

## Queue and collision handling

Keep draft #71571 (guided public-page navigation/use-case map) and #71543 (deployment/curated-network repair) unchanged. Reconcile this appended homepage hook against other open homepage drafts before merging. Main snapshot used for preparation: `5c64c2de6de0b2d1e708b104325ea0bd4f4bb2b3`; existing homepage renderer blob: `4523794e1b94d4d1eb64a90fe99ed614443336bf`.

Production remains unchanged. Full-network translations, independently hosted repository readiness and all-app interlinks are unfinished. No form submission, outbound email, purchase, booking or dispatch was made.
