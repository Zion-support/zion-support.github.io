# Apps Network and Free Discovery content — draft review

DRAFT ONLY. No merge, deployment, real questionnaire submission or email receipt is asserted.

## Scope
- Three static English planning guides, reciprocal guide links, homepage and catalog promotion.
- Deterministic build-time navigation across the catalog's existing root pages and existing locale subsets; no fake app or translated-form generation.
- Homepage output corrections for privacy, catalog-count/readiness claims, free questionnaire links and the malformed primary CTA; embedded growth content is preserved.
- Existing paid URLs and all original money/contact/legacy-route gates remain unchanged; money checks run again after navigation generation.

## Validation
Node 24.22.1: eight offline generator tests pass, including a 70-page synthetic ring, repeat-run idempotence, content preservation, missing-page refusal, locale subsets, traversal/symlink refusal and homepage repair. Shell syntax passes. These fixtures are not proof of the full site build or production app functionality. A reversed-marker defect found by the tests was corrected, not ignored.

## Coordination / release holds
Coordinate with #71958, #71970, #71972, #71921, #72016 and #72009. This focused PR does not replace their form work or copy stale homepage files over current main. The current-form guarded candidate passed 59 mocked scenarios locally and is retained in the separate review artifact; it is not part of this content/navigation commit.

Canonical shared multilingual Discovery runtime/forms/tests remain unresolved in main; restore them without weakening the mirror/publication gates. Client plus commercial@ziontechgroup.com inbox receipt remains unverified. A controlled real test needs separate explicit approval and an exact client test address. The generator fails closed if a listed root source page or real guide is missing; full preparation/build, fresh hosted CI, browser/mobile journeys and deployed-byte verification remain required before release.

Notion business data and memory records are intentionally excluded from this public PR. Private CEO setup requires the user-selected parent page.
