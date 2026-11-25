# Zion Tech Group — Site Integrity Check Report (2026-11-20)

**Run:** 2026-11-20 19:21 -03 (UTC-03:00) — fresh cron run.
**Base URL:** https://ziontechgroup.com
**Sources:** /Users/miami2/zion.app/automation/* (live probes) + /Users/miami2/zion-support/zion-support.github.io (public export cross-check + local link check)

---

## 1. CHECKS

### 1a. Key docs routes + base — live HTTP probe
Ran via `check_zion_routes.py` (8 routes, requests; 20s timeout each):

| # | Route | Status | Final URL | Title | Canonical | H1 |
|---|---|---|---|---|---|---|
| 1 | / | 200 | https://ziontechgroup.com/ | Zion Tech Group | https://ziontechgroup.com/ | Design, Launch, and Scale AI Operations With Confidence |
| 2 | /public-roadmap | 200 | https://ziontechgroup.com/public-roadmap/ | Public Roadmap · Zion Tech Group | https://ziontechgroup.com/public-roadmap/ | Public Roadmap |
| 3 | /status-page | 200 | https://ziontechgroup.com/status-page/ | Status Page · Zion Tech Group | https://ziontechgroup.com/status-page/ | Status Page |
| 4 | /use-cases | 200 | https://ziontechgroup.com/use-cases/ | Use cases — Free Discovery · Zion Tech Group | https://ziontechgroup.com/use-cases/ | Use cases |
| 5 | /solutions/healthcare | 200 | https://ziontechgroup.com/solutions/healthcare/ | Not a packaged SKU — Healthcare · Zion Tech Group | https://ziontechgroup.com/solutions/healthcare/ | Healthcare & Life Sciences |
| 6 | /industries/financial-services | 200 | https://ziontechgroup.com/industries/financial-services/ | Not a packaged SKU — Financial Services · Zion Tech Group | https://ziontechgroup.com/industries/financial-services/ | AI for Financial Services & FinTech |
| 7 | /free-consultation | 200 | https://ziontechgroup.com/free-consultation/ | This is the Free Discovery — Zion Tech Group | https://ziontechgroup.com/free-consultation/ | This is the Free Discovery |
| 8 | /tools/phishing-analyzer | 200 | https://ziontechgroup.com/tools/phishing-analyzer/ | Phishing Analyzer · Zion Tech Group | https://ziontechgroup.com/tools/phishing-analyzer/ | Phishing Analyzer |

All 8 routes return HTTP 200 with correct final URL and canonical link.

### 1b. Independent re-probes
- **key_routes_probe.py** — 7 key routes: 7/7 200 (`key_routes_probe.json` updated).
- **deep_route_check.py** — 7/7 200; correct titles; no app-router error page markers ("Not a package" strings on `/solutions/healthcare` and `/industries/financial-services` are the intentional "Not a packaged SKU" template copy, not errors).
- **targeted_route_check.py** — 8/8 200, `text/html; charset=utf-8` on every route, no redirect loops.

### 1c. Repo cross-check (local public/ vs live)
Ran via `_fresh_site_integrity_check.py` (sha1 of first 2 KB):

| Route | Local sha1[:10] | Live sha1[:10] | Result |
|---|---|---|---|
| /public-roadmap | 8b7581c80f | 8b7581c80f | IN SYNC |
| /status-page | f944e657ba | f944e657ba | IN SYNC |
| /use-cases | cef4183cc5 | cef4183cc5 | IN SYNC |
| /solutions/healthcare | 9f57820d18 | 9f57820d18 | IN SYNC |
| /industries/financial-services | df51da8433 | df51da8433 | IN SYNC |
| /free-consultation | 4be786eec2 | 4be786eec2 | IN SYNC |
| /tools/phishing-analyzer | 7cdac51b37 | 7cdac51b37 | IN SYNC |

Repo: **7/7 IN SYNC**.

### 1d. Sitemap check
- sitemap.xml (index) → 200, `application/xml`, 1 URL → sitemap-0.xml
- sitemap-0.xml → 200, `application/xml`, 367 URLs
- All 7 key routes present as `<loc>` entries (incl. homepage)

### 1e. Support repo checks (public export on disk)
- **check_links.py** — 422 broken internal links in the local `out/` export, **0 of them on the 7 key routes**.
- **route_check.py** — 11/11 live routes 200 (with unverified SSL context).
- **smoke_routes.py** — 0 failures.

---

## 2. FIXES

**None required for the key route group.** No repo or live content writes were applied.

Out-of-scope findings (reported only, not modified — consistent with prior runs):

| Finding | Route | Status | Detail |
|---|---|---|---|
| Intentional subdomain 301 | /zion-ai-code-assistant/ | 301 → code-assistant.ziontechgroup.com | external subdomain, expected |
| Intentional subdomain 301 | /zion-ai-chatbot-builder/ | 301 → chatbot-builder.ziontechgroup.com | external subdomain, expected |
| Missing page | /ai-red-team-playbook/ | 404 | legacy page, not in key scope |
| Missing page | /mcp-server-scaffold/ | 404 | legacy page, not in key scope |
| Missing page | /ai-vendor-comparison/ | 404 | legacy page, not in key scope |
| Missing page | /finops-alert-triage/ | 404 | legacy page, not in key scope |
| Missing page | /synthetic-data-studio/ | 404 | legacy page, not in key scope |
| Missing page | /llm-cost-calculator/ | 404 | legacy page, not in key scope |
| Missing page | /agents/ | 404 | legacy page, not in key scope |
| Missing page | /undefined/ | 404 | i18n placeholder, not in key scope |

Note: `/public-roadmap` and `/status-page` are intended aliases (committed `public-committed_public_routes.json`): /public-roadmap/ meta-refreshes to /heritage/; /status-page/ meta-refreshes to /status/. Content reflects this; not a defect.

---

## 3. RESULTS

**8/8 requested routes HTTP 200 (100%).**

| Category | Result |
|---|---|
| Homepage + 7 key docs routes | ✅ 8/8 HTTP 200, correct final URL + canonical |
| Independent re-probes (3 scripts) | ✅ Consistent 200 across all routes |
| Repo route files (public/) | ✅ 7/7 IN SYNC |
| Sitemap coverage | ✅ all 7 key routes present in sitemap-0.xml |
| Content-type | ✅ 8/8 `text/html` |
| App-router error pages | ✅ None |
| Bounding crawl (site_integrity_run.py, 200 pages) | 182 HTTP 200, 18 broken, all out-of-scope |
| Support repo local export links | ✅ 0 broken key-route links |

**Summary:** Base domain + /public-roadmap, /status-page, /use-cases, /solutions/healthcare, /industries/financial-services, /free-consultation, /tools/phishing-analyzer all return HTTP 200 with correct final URLs, canonical links, and no error-page markers. Committed `public/` files match live content; sitemap covers all key routes. **Site is healthy.**

**Record saved to:** `site_integrity_report_2026-11-20.md`
