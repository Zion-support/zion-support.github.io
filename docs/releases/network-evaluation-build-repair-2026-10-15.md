# Network evaluation build integration — approved draft repair

This continuation supersedes the integration assumptions in `network-evaluation-2026-10-15.md`. PR71599 remains DRAFT, not merged or deployed.

## Implemented

The actual manual Pages workflow invokes `scripts/prepare-pages-out.sh`, not the historical broad homepage renderer. The preparation script now runs the 92-assertion evaluation unit suite and 48-assertion bootstrap suite, creates and verifies the scoped ten-page artifact, and rechecks the original homepage guard. All original guards, workflow dispatch/main-only restriction, permissions and publish steps are unchanged.

`scripts/bootstrap-network-evaluation.cjs` stages every change before touching its destination. Missing guide editions are generated with full translated editorial bodies, canonical/six alternate links, five-language navigation and responsive/focus styles. An existing guide is preserved and enriched. Missing homepage promotions are created once; existing owned promotions are retained and extended. Actual homepages with no main element use a footer/body boundary without rewriting their layout. Only five guide pages, five homepages and one deterministic hash manifest are written. There is no broad pipeline restoration or arbitrary repository scan.

## Evidence

- `node scripts/test-network-evaluation.cjs`: 92 assertions passed.
- `node scripts/test-network-evaluation-artifact.cjs`: 48 assertions passed, including absent guide prerequisites, all five locales, preservation of entire original homepage content outside the owned addition, no-main layout, repeat-byte parity including manifest, and fail-before-write negative cases.
- `node scripts/test-network-evaluation-prepare.cjs`: 18 assertions passed by invoking the actual modified preparation script with synthetic supporting routes. Confirms all five unseeded guides are generated, sources remain untouched, a second preparation is identical, original money guards still reject stubs, and a missing locale fails closed. Do not invoke this preparation test from the preparation script itself.
- Independent scoped bootstrap test used all five actual homepage bodies read at dea09c3. Every original byte was retained outside the new owned promotion. The fixture supporting money/proof pages were synthetic; this is not a full-repository build or live browser evidence.

## Remaining release blockers — do not bypass

Running preparation against the actual Portuguese homepage body stops at the pre-existing `Discovery $99` Family A marker guard. That source instead advertises free Discovery. Neither source commercial copy nor the guard was changed. The scoped bootstrap passes against that actual body independently; the real preparation path correctly remains blocked until an owner-reviewed source/guard decision. Do not insert a fake paid marker or relax the guard to force publication.

The prior Cloudflare Workers check failed on both base and draft; its GitHub output supplies dashboard links, not root-cause logs. This repair does not claim to fix Cloudflare configuration or make all CI green. Exact-head CI, full-source build, editorial/mobile/keyboard review, explicit release approval and fresh post-deploy HTTP/browser checks are still required.

No new public-source commercial content, price, checkout URL, form, script, DNS, deployment trigger or other draft was rewritten. No email, form submission, purchase, booking or dispatch was made. Full-network translations, interlinks and independent-app capability checks remain unfinished.
