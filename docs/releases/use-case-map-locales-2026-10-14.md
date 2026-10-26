# Five-language use-case map — review candidate, not live

Extends existing guided-pathways draft PR #71571, without a competing PR or promotion banner. Ten original categories and all original app/resource destinations are retained. Fifty localized decision questions help users compare evidence before testing. Shared responsive layout, keyboard focus, skip link, ten category jumps, canonical/six language alternates and reciprocal language switching cover en, pt-BR, es, fr and de. Project names remain identifiers; linked interfaces may use other languages.

## Offline commands

Python 3.9+; no external packages or network access:

```
python3 scripts/test-use-case-map-workflow.py
python3 scripts/test-use-case-map-locales.py
python3 scripts/test-use-case-map-artifact.py
python3 scripts/test-use-case-map-artifact-paths.py
node scripts/test-guided-app-navigation.cjs
python3 scripts/render-use-case-map-locales.py --out /tmp/zion-use-case-preview
```

The isolated preview does not certify destination functionality. For a complete real staged artifact, use `python3 scripts/finalize-use-case-map-artifact.py --out out`. Root-relative links require the full site. Unit integration fixtures are synthetic.

## Approved draft integration

The user confirmed a two-step offline test/finalizer insertion into the draft deployment workflow, after existing content/homepage renderers and before final publication checks/upload. See `use-case-map-artifact-2026-10-14.md` for exact commands and the byte-preservation guard. Homepage advertising is integrated as one localized contextual paragraph within existing promotion slots, not another section/banner. Scope still requires owner-reviewed reconciliation with PR71543/71565/71571/71577.

Main's manual-only publication pause remains unchanged. No merge, workflow dispatch, automatic-trigger restoration, recipient change, price, checkout, API submission, email test or paid inference was performed. Source integration is NOT a deployment receipt. Human native-language/mobile/accessibility review, exact-head CI, complete artifact/privacy checks and fresh live verification remain pending. No whole-network translation/functionality certification is made.
