# Satellite planner validation - scoped continuation

Parent: `3c1a23b8ca55fc8460a323fea779ef3dba04ab2f`, existing PR #71584.

## Defects and repair

The Canary planner previously returned a complete checklist and a zero-user rollout when all boxes were selected but user count/threshold were blank or negative. It now rejects malformed numbers, requires 1-100000000 whole users and a 0.1-100 percentage with at most one decimal, and clears cohort results whenever scenario inputs are invalid. Unknown values remain null. Every applicable evidence declaration is required.

MCP previously scored HTTP-only controls even when local stdio was selected, and its access-level selection did not affect applicability. Local stdio excludes TLS/audience/PKCE checks from this manual worksheet; read-only excludes high-impact-write approval. Remote transport and write/admin access restore the respective requirements. Tenant isolation, scoped access, audit and secret handling remain required. This is a planning convention, not an exhaustive MCP security certification.

Both tools now return `authorized: false` and label complete input as owner review only. Form submission is prevented, errors are exposed through aria-invalid and custom validity, and copy/export re-evaluate current input. No live AI, external service calls, deployment or dispatch is introduced.

## Localization preservation

The renderer pins the two reviewed new source hashes; the custody runtime remains unchanged. A supplemental EN/PT-BR/ES/FR/DE dictionary contains nine new status/error messages. Exact string translation preserves machine keys, calculations and authorization semantics. Display numbers use the selected locale. Original locale dictionary, HTML source, homepage source and production deployment workflow are unchanged by this continuation.

## Tests executed locally

- 13 existing Python methods passed, generating 20 editions and testing locale metadata, owned homepage fixtures, idempotence and invalid paths/collisions.
- 90 Node cases passed: 30 existing localized runtime/custody cases plus 60 new manual-gate cases across five languages. Existing 50,000 cent comparisons are comparisons inside tests, not independent cases.
- Chromium checks passed across all 15 tools and five guides: 30 viewport checks, keyboard skip paths, five Canary invalid/export/reset flows, five MCP applicability/export flows and five custody export/PO/reset flows. No observed JS errors or unexpected network requests.
- Browser checks used local document injection and two disjoint locale subsets (EN/PT/ES and FR/DE), not public hosted routes or TLS. Native-speaker and complete production artifact certification are not claimed.

Commands:

```sh
python3 tests/satellite-suite.test.py
python3 scripts/render-satellite-suite.py --source public --out preview --without-homepages
node --test tests/satellite-suite-runtime.test.cjs tests/satellite-manual-gates.test.cjs
SATELLITE_LOCALES=en,pt,es python3 tests/satellite-suite-browser.py
SATELLITE_LOCALES=fr,de python3 tests/satellite-suite-browser.py
```

The existing read-only locale contract workflow now includes the new regression suite and supplementary translation file in its scoped checkout. No schedule, credential persistence, permission expansion or production workflow change.

## Hosted verification and release boundaries

At the parent commit, hosted five-language run 38828728392 and custody run 38828728340 succeeded, including checkout and tests. This does not certify the new commit; inspect its own runs after branch update.

The live free-Discovery homepage versus paid canonical Discovery page mismatch remains assigned to existing PRs #71582/#71595 and their related owners. This patch does not merge them, change prices, bypass commercial guards, change DNS/Pages settings or dispatch publication. Current merge-candidate artifacts, provider checks, standalone route ownership and live HTTP/content/interaction verification remain required. Main and production are untouched.
