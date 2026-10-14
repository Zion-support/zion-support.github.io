# SQL integration v2 — branch implementation, NOT LIVE

This owner-approved integration repair supersedes the initial SQL finalizer's incompatible homepage-marker assumptions. It remains on `fix/sql-review-five-locales-2026-10-14`; no merge or deployment dispatch is authorized by this document.

## Implementation
`render-sql-review-integration.cjs` reuses the tested local SQL matcher and five complete guide translations. It generates missing resource editions from the maintained Batch91 module and validates existing editions rather than blindly replacing them. Supports the real homepages with one closing main tag or PT's body-only layout. Twenty owned return/promotion blocks and five guides cover 25 hashed HTML outputs. Unknown SQL runtimes, locale mismatches, redirects, ambiguous boundaries, guide collisions and missing shared stylesheet fail during preflight, before writes. `--check` is read-only. Manifest `/apps/sql-review-integration.json` records output and asset SHA256 hashes, created paths, capability limits and fullNetworkComplete=false.

Existing homepage bytes outside the owned block, forms, non-owned scripts and protected commercial pages remain unchanged. Newly generated pages omit Discovery CTAs to avoid asserting free/paid conditions from mismatched source copy. Missing verification/catalog entry links in new editions point to their self-contained localized review guide; existing pages are not silently rewritten. Independent app-repository and hub-catalog reconciliation still remain.

`prepare-pages-out.sh` receives only an additive three-command block AFTER ALL existing commercial guards and before its final summary: original SQL tests, real-source integration tests, integration renderer. No workflow, schedule, trigger, permission, guard, price, recipient or source HTML changed.

## Executed verification
- Re-ran 110 localized SQL runtime cases.
- New tests use all FIVE REAL public homepage sources, the actual stylesheet and protected source pages. PASS 20 generated editions, 25 hashed HTML pages, read-only preflight, original-byte/form/script preservation, repeated-output byte-idempotence, known manual-note preservation and fail-closed cases.
- Executed the integration stage separately on a scoped artifact copied from immutable real source inputs. All five protected commercial files matched their source hashes afterward. Output/asset hashes verified. 270 internal link/fragment checks across the 20 new editions passed.
- This is a scoped source/artifact regression, NOT the full repository artifact, browser/editorial review or production verification.

## IMPORTANT baseline release blocker
Running the actual preparation script on this real-source fixture passed the three money-path checks but STOPPED at the PRE-EXISTING Family A homepage guard: `out/index.html missing Family A marker Discovery $99`. The new SQL block occurs later and was not reached. The guard was NOT weakened, moved or bypassed in committed code; pricing/source text was NOT changed. Earlier sandbox archive-copy permission errors were resolved by running in a local temporary filesystem; they are not diagnosed as production failures.

The later independent offline renderer run proves only our stage's behavior, not successful end-to-end preparation. Commercial policy/source-marker reconciliation requires factual owner review before any release. This is separate from the undiagnosed Cloudflare Workers failure. Authentication or an actual provider error log is still needed for that diagnosis.

## Resume / release gates
Refresh exact branch head/checks, reconcile commercial source vs guard without inventing price or policy, reconcile independent SQL source and canonical hub catalog, run complete artifact/regressions and native-language/mobile/keyboard review, obtain reviewed release clearance, THEN fresh no-cache checks for the five guide routes, 15 resources, five homepage blocks, stylesheet and integration manifest. No whole-network, native-interaction, AI-functionality or email-receipt certification. New content is NOT deployed.
