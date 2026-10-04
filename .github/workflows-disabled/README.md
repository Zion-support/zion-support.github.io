# Disabled workflows (2026-10-04)

GitHub Actions only runs files in `.github/workflows/`. Everything in this folder is
parked and does NOT run. Moved here by PR `ops/workflows-hardening-1004` because these
workflows were committing straight to `main` (content bursts, thin `/services/*` page
generators, war-room pulse, Hermes dispatch, report/digest writers), failing on almost
every run, or flooding the Actions queue (~40k runs, 385 failures in 48h).

Active workflows after the cleanup: `static-deploy.yml`, `gh-pages.yml`,
`secret-scan.yml`, `workflow-lint.yml`, `codeql-analysis.yml`, `dependency-review.yml`,
`money-paths-stub-guard.yml`, `pages-watchdog.yml`, `stale.yml`.

To re-enable one: move it back to `.github/workflows/` in a PR, give it
`permissions: contents: read` by default, a `timeout-minutes`, a `concurrency` group, and
make it open a PR instead of pushing to `main`. Do not re-enable content generators or
anything that publishes `ops/` content.
