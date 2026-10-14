# Use-case map artifact integration — draft only, not deployed

Follow-on to the five-language generator in existing PR71571. This candidate adds `finalize-use-case-map-artifact.py` and its integration test, not a competing promotional section or pull request.

## Implemented

The local finalizer builds the EN/PT-BR/ES/FR/DE map bodies and inserts one localized contextual paragraph into each homepage's EXISTING `home-app-paths` block, with the inspected `zion-network-home` block as a compatibility fallback. It does not add another section/banner. Repeated execution replaces its owned paragraph exactly once. Original homepage links, forms and scripts are preserved. Missing/wrong-language homepages, duplicate/missing insertion markers, missing internal map destinations, missing cross-page fragments and unsafe paths stop semantic preflight before artifact writes. An unavailable standalone GitHub Pages app route will also stop this local gate: it needs separately verified delivery evidence, not a fabricated placeholder.

## Offline review commands

```
python3 scripts/test-use-case-map-locales.py
python3 scripts/test-use-case-map-artifact.py
node scripts/test-guided-app-navigation.cjs
python3 scripts/finalize-use-case-map-artifact.py --out out
```

The final command requires a COMPLETE staged site produced by the existing renderers. Do not run it against `public/`; keep the immutable source outside output. The integration tests explicitly seed synthetic target files, so their success is NOT full artifact, HTTP, mobile, app functionality or translation certification. The finalizer does not certify homepage input quality beyond its scoped preservation/language/slot checks.

## Controlled workflow integration still pending

No workflow file, trigger, permission, checkout ref, deployment action or privacy gate is changed here. After exact approval, a maintainer can add the unit tests and finalizer after all content/homepage renderers and before final publication checks/upload. Preserve main-only manual dispatch and the existing automatic publication pause. Review interactions with PR71565/71577 and full route-family manifest ownership. Do not treat this source-only change as production integration or restoration of automatic publishing.

Release prerequisites remain: exact-head CI passes, full artifact + private-publication checks, human language/mobile/accessibility review, independently verified destinations and separately approved deployment. Target URLs are not live release receipts. No external email/API call, submission, price, checkout, recipient or payment changes are made.
