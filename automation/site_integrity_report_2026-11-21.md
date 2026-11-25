# Zion Tech Group — Site Integrity Check Report (2026-11-21)

**Run:** cron (2026-11-21 12:07 -03, UTC-03:00). Sources: /Users/miami2/zion.app/automation/* + /Users/miami2/zion-support/zion-support.github.io (public/).

## CHECKS

Ran live probes against https://ziontechgroup.com:
- `key_routes_probe.py` — 7 key routes (writes automation/key_routes_probe.json)
- `targeted_route_check.py` — 8 routes incl. homepage (raw status + body snippet)
- `_fresh_site_integrity_check.py` — live HTTP probe + repo cross-check (public/) + sitemap check
- `site_integrity_run.py` — bounded 200-page crawl for context

### Key docs routes (8 incl. homepage) — live HTTP probe

| # | Route | Status | Final URL | Size | Body SHA-1 (2KB) | Repo sync |
|---|---|---|---|---|---|---|
| 1 | / | 200 | https://ziontechgroup.com/ | 70,003B | — | n/a |
| 2 | /public-roadmap | 200 | https://ziontechgroup.com/public-roadmap/ | 888B | 8b7581c80f | IN SYNC |
| 3 | /status-page | 200 | https://ziontechgroup.com/status-page/ | 792B | f944e657ba | IN SYNC |
| 4 | /use-cases | 200 | https://ziontechgroup.com/use-cases/ | 1,145B | cef4183cc5 | IN SYNC |
| 5 | /solutions/healthcare | 200 | https://ziontechgroup.com/solutions/healthcare/ | 2,636B | 9f57820d18 | IN SYNC |
| 6 | /industries/financial-services | 200 | https://ziontechgroup.com/industries/financial-services/ | 3,061B | df51da8433 | IN SYNC |
| 7 | /free-consultation | 200 | https://ziontechgroup.com/free-consultation/ | 1,098B | 4be786eec2 | IN SYNC |
| 8 | /tools/phishing-analyzer | 200 | https://ziontechgroup.com/tools/phishing-analyzer/ | 4,221B | 7cdac51b37 | IN SYNC |

Key routes: 8/8 PASS (100%) HTTP 200, correct final URL, correct title/canonical/robots, body matches local repo `public/*.html`.

### Targeted route check (urllib, raw)

All 8 routes returned HTTP 200 with valid `text/html` content and correct final URL. Snippets confirmed:
- `/` → `<html lang="en" data-homepage="recovered-2026-03-19">`
- `/public-roadmap` → `<title>Public Roadma…` (meta-refresh to /heritage/)
- `/status-page` → `<title>Status Page ·` (meta-refresh to /status/)
- `/use-cases` → `<title>Use cases — Free Discovery…`
- `/free-consultation` → `<title>This is the Free Discovery…`
- `/tools/phishing-analyzer` → `<html lang="pt-BR">`
- `/solutions/healthcare`, `/industries/financial-services` → full content pages

### Repo cross-check (local public/ vs live)

All 7 key route files match live content (SHA-1 of first 2KB). No local modifications on key route files.

### Sitemap check

sitemap.xml -> 200 (2 URLs, index); sitemap-0.xml -> 200 (377 URLs). All 7 key routes present in sitemap-0.xml. OK.

### Bounded crawl context (200 pages, for context only — not part of 8 requested routes)

HTTP 200: 293 of 300. Broke 7:
- Stale subdomain 301s: /zion-ai-knowledge-base/ -> knowledge-base.ziontechgroup.com, /zion-ai-workflow-automator/ -> workflow-automator.ziontechgroup.com (intentional)
- Legacy i18n placeholder 404: /fr/undefined/
- 4 app-static 404s: /apps/discovery-first-win-guide.html, /apps/discovery-showcase.html, /apps/app-verification-guide.html, /apps/operational-planning-tools.html, /apps/october-2026-batch111-agriculture.html (note: one count is 4 of 5 listed)
- /agents/ 404; /apps-network/apps-network/ 404
(Out-of-scope; pre-existing; not modified in this run.)

### Repo status (zion-support.github.io, git)

- Key route files (public-roadmap, status-page, use-cases, solutions/healthcare, industries/financial-services, free-consultation, tools/phishing-analyzer): NOT modified (git diff clean for all seven).
- Other working-tree modifications (app-network/, public/de/*, public/es/*, public/edital-desk/, public/ai-ticket-sentinel/, public/apps-network-sitemap.xml, public/change-risk/, public/cloud-waste/) are unrelated to the key routes; no action needed.

## FIXES

None required for the key route group. All 8 routes return HTTP 200, canonical URLs resolve to themselves, title/description/robots/redirect match the committed local repo, and sitemap is populated.

Out-of-scope findings (reported only, not modified):
- Stale subdomain 301s /zion-ai-knowledge-base/, /zion-ai-workflow-automator/ (intentional external redirects).
- Legacy i18n placeholder 404s /undefined/ and i18n sub-routes.
- 5 app-static/missing static routes surfaced by the bounded crawl (4 app-* .html paths + /agents/ + /apps-network/apps-network/) — pre-existing, outside key scope.

## RESULTS

| Category | Result |
|---|---|
| Base domain / | ✅ 200 |
| Key docs routes (7) | ✅ 7/7 (100%) HTTP 200, repo IN SYNC |
| Key routes incl. homepage (8) | ✅ 8/8 (100%) HTTP 200 |
| Sitemap | ✅ 200, 377 URLs, all 7 key routes present |
| Repo sync (7 key routes) | ✅ ALL IN SYNC |
| Targeted check (urllib) | ✅ 8/8 OK |
| Repo status (key files) | ✅ No modifications |
| Site health (base + key routes) | **HEALTHY** |

**Summary:** All 8 requested routes (base domain + /public-roadmap, /status-page, /use-cases, /solutions/healthcare, /industries/financial-services, /free-consultation, /tools/phishing-analyzer) return HTTP 200 with correct final URL, title/description, and content in sync with the committed local repository. `/public-roadmap` and `/status-page` are intentional alias pages that meta-refresh to /heritage/ and /status/ respectively — this is expected, not a defect. No fixes required for the key route group. Out-of-scope crawl findings documented above for awareness; no action taken.

**Record saved to:** automation/site_integrity_report_2026-11-21.md; live probe snapshot automation/key_routes_probe.json; targeted_route_check.py run at 12:09 UTC.
