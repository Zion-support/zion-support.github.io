# Zion Tech Group — Site Integrity Check Report

**Run:** 2026-11-11 15:42 UTC (12:42 -03) — fresh live-probe run
**Base URL:** https://ziontechgroup.com
**Scope:** 7 key docs routes + homepage, content verification, repo cross-check, broader crawl
**Tooling:** key_routes_probe.py, deep_route_check.py, targeted_route_check.py, site_content_check.py, site_integrity_run.py, repo file cross-check

---

## 1. CHECKS

### 1a. Key docs routes (targeted HTTP probe)

| # | Route | Status | Final URL | Title |
|---|---|---|---|---|
| 1 | / | 200 | https://ziontechgroup.com/ | Zion Tech Group |
| 2 | /public-roadmap | 200 | https://ziontechgroup.com/public-roadmap/ | Public Roadmap · Zion Tech Group |
| 3 | /status-page | 200 | https://ziontechgroup.com/status-page/ | Status Page · Zion Tech Group |
| 4 | /use-cases | 200 | https://ziontechgroup.com/use-cases/ | Use cases — Free Discovery · Zion Tech Group |
| 5 | /solutions/healthcare | 200 | https://ziontechgroup.com/solutions/healthcare/ | Healthcare Solutions · Zion Tech Group |
| 6 | /industries/financial-services | 200 | https://ziontechgroup.com/industries/financial-services/ | AI for Financial Services & FinTech · Zion Tech Group |
| 7 | /free-consultation | 200 | https://ziontechgroup.com/free-consultation/ | This is the Free Discovery — Zion Tech Group |
| 8 | /tools/phishing-analyzer | 200 | https://ziontechgroup.com/tools/phishing-analyzer/ | Phishing Analyzer · Zion Tech Group |

**Key routes result: 8/8 PASS (100%)** — every route returns HTTP 200 with the correct final URL and a canonical H1-style `<title>`.

### 1b. Content check (title / canonical / H1)

All 7 key routes carry a canonical link matching the final URL and a substantive H1:

| Route | Title | Canonical | H1 |
|---|---|---|---|
| /public-roadmap | Public Roadmap · Zion Tech Group | https://ziontechgroup.com/public-roadmap/ | Public Roadmap |
| /status-page | Status Page · Zion Tech Group | https://ziontechgroup.com/status-page/ | Status Page |
| /use-cases | Use cases — Free Discovery · Zion Tech Group | https://ziontechgroup.com/use-cases/ | Use cases |
| /solutions/healthcare | Healthcare Solutions · Zion Tech Group | https://ziontechgroup.com/solutions/healthcare/ | Healthcare & Life Sciences |
| /industries/financial-services | AI for Financial Services & FinTech · Zion Tech Group | https://ziontechgroup.com/industries/financial-services/ | AI for Financial Services & FinTech |
| /free-consultation | This is the Free Discovery — Zion Tech Group | https://ziontechgroup.com/free-consultation/ | This is the Free Discovery |
| /tools/phishing-analyzer | Phishing Analyzer · Zion Tech Group | https://ziontechgroup.com/tools/phishing-analyzer/ | Phishing Analyzer |

### 1c. Broader crawl (site_integrity_run.py, 120 pages)

- Total crawled: 120 · HTTP 200: 119 · Broken: 1
- Only breakage: `/agents/` → 404 (missing page) — out of scope for the 7 requested routes.
- Note: a prior wider crawl also surfaced ~23 legacy 404 paths (e.g. `/pt/undefined/`, `/de/undefined/`, `/fr/undefined/`, `/es/undefined/`) and 3 stale 301s to external subdomains — both flagged as out-of-scope follow-ups.

### 1d. Repo cross-check (`zion-support/zion-support.github.io`)

All 7 key routes exist as files under `public/`:

- public/public-roadmap — EXISTS
- public/status-page — EXISTS
- public/use-cases — EXISTS
- public/solutions/healthcare — EXISTS
- public/industries/financial-services — EXISTS
- public/free-consultation — EXISTS
- public/tools/phishing-analyzer — EXISTS

---

## 2. FIXES

### 2a. /public-roadmap — repo fixed, live site still stale (ACTION REQUIRED on deploy)

- **Repo state:** `public/public-roadmap/index.html` now carries the correct page (863 B): `<meta name="robots" content="noindex, follow">`, description "No leftover product roadmap. Heritage is on /heritage/. New work is scoped after the $99 Discovery.", meta refresh → /heritage/, and the corrected visible body ("There is no leftover product roadmap…"). Commit `ed081be0dd1`.
- **Live site:** still serves the old stub in the `<head>` — description "Not a packaged SKU…" and meta refresh `0; url=/services/` — even though the visible body is the corrected page. A visitor's browser is therefore still redirected to `/services/` instead of `/heritage/`, and the meta description is stale.
- **Cause:** GitHub Pages rebuild of the `main` branch has not propagated to the live origin as of this run. The repo is fixed; the deploy pipeline needs the rebuild confirmed.
- **Action:** verify GitHub Pages rebuild propagation for `Zion-support/zion-support.github.io` (main), re-probe /public-roadmap until the live `<head>` matches the committed file (robots meta + /heritage/ refresh + new description), then close this item.

### 2b. No fixes required

- All other key routes are live and in sync with the repo (200, correct titles/canonical/H1, no app-router error pages).
- `/tools/phishing-analyzer` and `/services/` flagged "placeholder/TODO" by legacy scanners were false positives (HTML `placeholder` attribute and substring "Todos" in "Todos os Serviços").

---

## 3. RESULTS

| Category | Result |
|---|---|
| Key docs routes (7) | ✅ 7/7 (100%) HTTP 200 |
| Key routes incl. homepage (8) | ✅ 8/8 (100%) HTTP 200 |
| Content (title/canonical/H1) | ✅ all 7 canonical, substantive H1 |
| Broader crawl (120 pages) | ✅ 119/120 (99.2%) — /agents/ 404 only, out of scope |
| Repo route files | ✅ 7/7 present in `public/` |
| Live `/public-roadmap` | ⚠️ 200 + correct body/title, but stale meta description + /services/ refresh (deploy rebuild pending) |

**Bottom line:** The site is healthy across all 7 requested key routes; every route returns HTTP 200 with correct content and no broken links. The only actionable item is `/public-roadmap`, where the repository is already fixed but the live GitHub Pages origin has not yet rebuilt — verify propagation and re-probe until the live `<head>` matches the committed file.
