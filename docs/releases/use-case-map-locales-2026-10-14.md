# Five-language use-case map — review candidate, not live

Extends existing guided-pathways draft PR #71571, without a competing PR or promotion banner. Ten original categories and all original app/resource destinations are retained. Fifty localized decision questions help users compare evidence before testing. Shared responsive layout, visible keyboard focus, skip link, ten category jumps, canonical/six language alternates and reciprocal language switching cover en, pt-BR, es, fr and de. Project names remain identifiers; linked interfaces may use other languages.

## Offline commands

Python 3.9+; no external packages or network access:

```
python3 scripts/test-use-case-map-locales.py
python3 scripts/render-use-case-map-locales.py --out /tmp/zion-use-case-preview
```

Open the generated `apps/app-network-use-case-map.html` and locale variants through a local HTTP server for review. Root-relative links require a full staged site; the isolated preview does not certify destination functionality. Manifest status is STAGED_NOT_LIVE.

## Integration remains gated

The renderer is NOT wired into the deployment workflow in this candidate. A maintainer must review renderer ordering, apply it after existing content renderers to the complete `out` artifact, verify every linked destination there, and review final bytes alongside PRs #71543, #71565, #71571 and #71577. Homepage advertising is owned by those existing lanes; no duplicate section is introduced here. Do not claim these new locale routes are live from source existence or synthetic tests.

Preserve main's manual-only release pause. No merge, manual dispatch, automatic trigger restoration, recipient change, price, checkout, API submission, email test or paid inference is part of this change. Human native-language, mobile and assistive-technology review and exact-head CI are pending. No whole-network translation/functionality certification is made.

Rollback: a reviewed revert of these three added files; existing two entrypoint edits and tests in #71571 are unchanged.
