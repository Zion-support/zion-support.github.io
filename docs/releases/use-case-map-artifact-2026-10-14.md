# Use-case map artifact integration — approved draft workflow edit, not deployed

Follow-on to the five-language generator in existing PR71571. The user specifically approved adding offline tests/finalizer steps AFTER content rendering and BEFORE publication checks, while retaining the production release pause.

## Implemented

The local finalizer builds EN/PT-BR/ES/FR/DE map bodies and inserts one translated contextual paragraph into each homepage's EXISTING `home-app-paths` block; the inspected `zion-network-home` block is a compatibility fallback. No duplicate banner/section is introduced. Original homepage links, forms and scripts are preserved. Missing/wrong-language homepages, duplicate/missing slots, missing internal destinations/fragments, unsafe paths, symlinks and manifest/file collisions reject semantic preflight before writes. Filesystem I/O failure during writes is not a transactional rollback. Missing standalone project routes require actual delivery evidence, not fabricated placeholders.

## Exact draft workflow integration

Two steps are inserted in `.github/workflows/static-deploy.yml`, after `ticket-support-release.cjs out` and before `verify-network-publication.cjs` / route checks / artifact upload:

```
python3 scripts/test-use-case-map-workflow.py
node scripts/test-guided-app-navigation.cjs
python3 scripts/test-use-case-map-locales.py
python3 scripts/test-use-case-map-artifact.py
python3 scripts/test-use-case-map-artifact-paths.py
python3 scripts/finalize-use-case-map-artifact.py --out out
```

The workflow guard strips those exact steps and requires the original Git blob `1d74c2bc2712b72a6244a3a1341288f353fd905e`. All other workflow bytes, triggers, permissions, checkout, main-only job condition, existing renderers/privacy checks, upload/deployment actions and live checks must remain unchanged. This guard intentionally needs owner review if a future approved change modifies the baseline.

## What this does NOT establish

Integration exists only in the draft source. The PR is not merged, the manual main workflow has not been dispatched, and no production release is claimed. Unit integration fixtures explicitly use synthetic target pages: they are not a complete real artifact build, native-speaker/mobile/accessibility review, HTTPS uptime, app-functionality proof or inbox delivery. Run finalization against the COMPLETE real staged site, not `public/`, preserving immutable source outside output.

## Release prerequisites

Reconcile existing PR71565/71577 content lanes and renderer ordering. Require exact-head CI, complete artifact/privacy/link checks, human language/mobile/accessibility review, separately approved deployment and independently verified live routes. Address actual review findings without suppressing security checks. Preserve automatic-publication pause. No recipient, price, checkout, API submission, email test or paid-inference change is part of this batch.
