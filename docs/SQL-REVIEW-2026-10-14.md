# SQL review repair — review candidate, NOT LIVE

Release `sql-review-2026-10-14-v1`. The owner approved the bounded SQL repair, five-language guide, existing-homepage promotion, interlinks, Notion and memory checkpoint. A fresh handoff revealed the production hold and other open draft releases; this candidate preserves that hold.

## Reproduced defect
The maintained Batch91 renderer matches keywords inside strings and comments. `SELECT 'JOIN WHERE GROUP BY' AS note; -- LIMIT 10` incorrectly reports JOIN, WHERE, GROUP BY and LIMIT. The new local matcher masks common comments, quoted strings and identifiers; handles nested block comments and dollar-quoted strings; keeps leading-wildcard LIKE hints; uses keyword boundaries and whitespace-aware clauses. Unclosed quotes/comments produce localized guidance. This is still a limited heuristic, not a SQL parser or execution-plan analyzer.

## Implemented scope
- Five SQL runtimes and complete guide editions: EN, pt-BR, ES, FR, DE.
- Guide routes: `/apps/sql-pattern-review-guide.html` and matching `/pt/`, `/es/`, `/fr/`, `/de/` prefixes.
- Five existing Batch91 homepage promotions enhanced in place; no new competing section.
- Fifteen reciprocal guide returns: SQL, observability scorecard and technician preparation, in five languages.
- Four-step editorial process, shared site stylesheet, responsive layout, skip/focus navigation, canonical metadata, six language alternates and reciprocal language navigation.
- No database, AI, email, external account, purchase or dispatch calls. Original forms and non-owned scripts preserved.

## Executed QA
`node --check scripts/render-sql-review-release.cjs`
`node scripts/test-sql-review-release.cjs`
PASS: 110 localized runtime cases; five guide structures; 25 scoped output pages; form and original-href preservation; two-render byte-idempotence; no partial writes on failed preflight. These are generated-page fixture tests, not native browser or full production artifact verification.

## Integration and release gate
The new finalizer is deliberately NOT wired into deployment in this draft. Run only on an owner-reviewed artifact after its Batch91 renderer and all existing promotion writers finish:
`node scripts/test-sql-review-release.cjs`
`node scripts/render-sql-review-release.cjs out`
All fifteen existing resource pages and five existing homepage promotion anchors are preconditions. Do not overwrite source pages or invoke this before later writers that regenerate them. Review existing manifests/hashes, aliases, final coverage accounting and regressions before integrating. No workflow, schedule, trigger, production branch, pricing, Discovery form or recipient changed.

Main's `static-deploy.yml` is dispatch-only. Other publishing workflows exist; their source presence does not establish enabled state or release clearance. Do not merge, dispatch or enable publishing without cleared relevant checks and release review. Independent app repositories and the canonical hub catalog are still pending reconciliation, not claimed repaired by this PR.

## Resource catalog / review targets
For each of `en` (no URL prefix), `pt`, `es`, `fr`, `de`, review the guide with the matching-language `sql-query-explainer/`, `zion-agent-observability/`, `technician-scheduler-ai/` and `apps/app-verification-guide.html` routes. Home routes are `/en/`, `/`, `/es/`, `/fr/`, `/de/`. Existing hub catalog source: `Zion-support/zion-app-network/CATALOG-DEVOPS-REVIEW.md`; do not assume every generated HTML alias exists in source.

After an approved deployment, fresh no-cache GETs must verify all five guide routes and `/apps/sql-review-publication.json`, correct locale/canonical/alternates, exactly one guide link in each of the twenty existing target pages, and stylesheet reachability. Test native keyboard/mobile behavior and have translations editorially reviewed. No whole-network translation/interlink certification, uptime guarantee or email-receipt claim.
