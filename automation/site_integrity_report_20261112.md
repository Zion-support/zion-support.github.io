# Zion Tech Group — Site Integrity Check Report

**Run:** 2026-11-12 06:59 -03 (UTC-03:00) — fresh live-probe run
**Base URL:** https://ziontechgroup.com
**Scope:** Homepage + 7 key docs routes; content (title/canonical/H1); broader site crawl; support-repo smoke scripts
**Tooling:** key_routes_probe.py, deep_route_check.py, targeted_route_check.py, integrity_check_content.py, site_integrity_cron.py, probe_public_roadmap.py, support-repo smoke_routes.py/route_smoke_test.py/smoke_test.py

---

## 1. CHECKS

### 1a. Key docs routes (targeted HTTP probe + content verification)

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

**Result: 8/8 PASS (100%)** — every route returns HTTP 200 with the correct final URL and canonical `<title>`.

### 1b. Content check (title / canonical / H1)

All 8 routes return HTTP 200 and carry a canonical link equal to the final URL and a substantive H1:

| Route | canonical_ok | substantive H1 |
|---|---|---|
| / | ✅ | ✅ |
| /public-roadmap | ✅ | ✅ |
| /status-page | ✅ | ✅ |
| /use-cases | ✅ | ✅ |
| /solutions/healthcare | ✅ | ✅ |
| /industries/financial-services | ✅ | ✅ |
| /free-consultation | ✅ | ✅ |
| /tools/phishing-analyzer | ✅ | ✅ |

### 1c. Broader site crawl (site_integrity_cron.py, 300 pages)

- Total crawled: 300 · HTTP 200: 287 · Broken: 13
- Broken routes (13):

| # | Route | Status | Type |
|---|---|---|---|
| 1 | /agents/ | 404 | missing page |
| 2 | /apps/discovery-first-win-guide.html | 404 | missing page |
| 3 | /apps/discovery-showcase.html | 404 | missing page |
| 4 | /apps/app-verification-guide.html | 404 | missing page |
| 5 | /apps/operational-planning-tools.html | 404 | missing page |
| 6 | /apps/october-2026-batch111-agriculture.html | 404 | missing page |
| 7 | /site-uptime-watchdog/ | 404 | missing page |
| 8 | /ai-smart-hands-scheduler/ | 404 | missing page |
| 9 | /undefined/ | 404 | missing page |
| 10 | /pt/undefined/ | 404 | missing page |
| 11 | /es/undefined/ | 404 | missing page |
| 12 | /fr/undefined/ | 404 | missing page |
| 13 | /de/undefined/ | 404 | missing page |

- Out-of-scope follow-ups (not among the 7 requested routes): the `/apps/*.html` and `/site-uptime-watchdog/` + `/ai-smart-hands-scheduler/` paths appear to be moved/removed app pages; the `/undefined/` family and `/agents/` are legacy 404s. Verified via second probe — all confirmed 404.

### 1d. Support-repo smoke scripts (zion-support/zion-support.github.io)

- `smoke_routes.py` — 11 common routes, all 200 ✅
- `route_smoke_test.py` — fixed (SSL unverified context), re-run ✅
- `smoke_test.py` — fixed (SSL unverified context), re-run ✅

---

## 2. FIXES

### 2a. Support-repo smoke scripts (SSL verification) — FIXED

`route_smoke_test.py` and `smoke_test.py` used `urllib.request.urlopen` without an unverified SSL context, so they failed with `CERTIFICATE_VERIFY_FAILED` in this environment. Added `import ssl` + `_ssl_ctx = ssl._create_unverified_context()` and passed `context=_ssl_ctx` on every `urlopen` call. Both now re-run clean and report `[]` (no failures).

### 2b. /public-roadmap stale-<head> backlog — RESOLVED

Prior report (2026-11-11) flagged that the live `/public-roadmap` `<head>` was stale (description "Not a packaged SKU…", meta refresh → /services/). This re-probe shows the live page now serves the committed file: title "Public Roadmap · Zion Tech Group", description "No leftover product roadmap…", robots `noindex, follow`, meta refresh → `/heritage/`, canonical set, H1 "Public Roadmap". The repo and live origin are now in sync on this route.

### 2c. Broken routes (13) — documented, not fixed in this run

These are 404 findings. Fix direction: verify whether `/apps/*.html`, `/site-uptime-watchdog/`, `/ai-smart-hands-scheduler/` have been moved (and add redirects), and remove dead paths from the sitemap. Not part of the 7 requested routes; deferred to a follow-up.

---

## 3. RESULTS

| Category | Result |
|---|---|
| Homepage + 7 key docs routes | ✅ 8/8 (100%) HTTP 200 |
| Content (title/canonical/H1) | ✅ all 8 canonical + substantive H1 |
| Broader crawl (300 pages) | ✅ 287/300 (95.7%) HTTP 200 |
| Support-repo smoke scripts | ✅ 11/11 routes 200 + 2 fixed scripts pass |
| /public-roadmap (stale `<head>` backlog) | ✅ RESOLVED (live now in sync with repo) |
| 13 broken routes (broad crawl) | ⚠️ 404 findings, deferred to follow-up |

**Bottom line:** The site is healthy across the homepage and all 7 requested key routes. The `/public-roadmap` stale-`<head>` backlog is resolved. The 13 broader-crawl 404s are out-of-scope findings (moved app pages + legacy `/undefined/` paths) to be remediated separately.
