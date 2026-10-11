# App verification guide — 10 October 2026

## Scope
Five translated editorial guides (en, pt-BR, es, fr, de), one consolidated owned network promotion per localized homepage, and reciprocal links from directory, map, existing learning guides and four hosted tools. Distinguishes working tools, prototypes and documented concepts without asserting whole-network readiness.

## Production integration
`render-network-home-ad.cjs` retains its earlier implementation and hooks, then calls `render-app-verification.cjs`. The existing Simple Static Deploy path filter watches this integration file. Artifact generation writes under `out/`; legacy root HTML is not edited. No deployment schedule, delivery service, pricing, form or recipient change.

## Verification
Before publication: JavaScript syntax checks, five-language canonical/alternate/switcher/source/safety assertions, 21 single-block integrations, form/script byte preservation during each update, and second-render byte identity on fresh public artifact snapshots. This is not a full browser or all-network functional certification. Production deployment and fresh live GET checks must pass separately.

Run: `node scripts/test-app-verification.cjs out` or `node scripts/test-app-verification.cjs out --live`. Live mode is read-only.

## Routes
- `/apps/app-verification-guide.html`
- `/pt/apps/app-verification-guide.html`
- `/es/apps/app-verification-guide.html`
- `/fr/apps/app-verification-guide.html`
- `/de/apps/app-verification-guide.html`
- `/apps/app-verification-publication.json`

Destinations may use another language. Existing network-wide translation and capability gaps remain out of scope.
