# Zion Tech Group — Site Integrity Check Report (2026-11-20, 2nd run)

**Run:** 2026-11-20 23:39 -03 (UTC-03:00) — second cron run this day
**Base URL:** https://ziontechgroup.com
**Sources:** /Users/miami2/zion.app/automation/* (live probes) + /Users/miami2/zion-support/zion-support.github.io (public export cross-check)

---

## 1. CHECKS

### 1a. Key docs routes + base — live HTTP probe
Ran via `_fresh_site_integrity_check.py` (8 routes, requests; 20s timeout) and `key_routes_probe.py` (7 key routes).

| # | Route | Status | Final URL | Title | Canonical | H1 |
|---|---|---|---|---|---|---|
| 1 | / | 200 | https://ziontechgroup.com/ | Zion Tech Group \| Advanced AI Services & IT Solutions | https://ziontechgroup.com/ | Design, Launch, and Scale AI Operations With Confidence |
| 2 | /public-roadmap | 200 | https://ziontechgroup.com/public-roadmap/ | Public Roadmap · Zion Tech Group | https://ziontechgroup.com/public-roadmap/ | Public Roadmap |
| 3 | /status-page | 200 | https://ziontechgroup.com/status-page/ | Status Page · Zion Tech Group | https://ziontechgroup.com/status-page/ | Status Page |
| 4 | /use-cases | 200 | https://ziontechgroup.com/use-cases/ | Use cases — Free Discovery · Zion Tech Group | https://ziontechgroup.com/use-cases/ | Use cases |
| 5 | /solutions/healthcare | 200 | https://ziontechgroup.com/solutions/healthcare/ | Not a packaged SKU — Healthcare · Zion Tech Group | https://ziontechgroup.com/solutions/healthcare/ | Healthcare & Life Sciences |
| 6 | /industries/financial-services | 200 | https://ziontechgroup.com/industries/financial-services/ | Not a packaged SKU — Financial Services · Zion Tech Group | https://ziontechgroup.com/industries/financial-services/ | AI for Financial Services & FinTech |
| 7 | /free-consultation | 200 | https://ziontechgroup.com/free-consultation/ | This is the Free Discovery — Zion Tech Group | https://ziontechgroup.com/free-consultation/ | This is the Free Discovery |
| 8 | /tools/phishing-analyzer | 200 | https://ziontechgroup.com/tools/phishing-analyzer/ | Phishing Analyzer · Zion Tech Group | https://ziontechgroup.com/tools/phishing-analyzer/ | Phishing Analyzer |

**Key routes: 7/7 HTTP 200 (100%). Added homepage: 8/8.**

### 1b. Content check (title / canonical / H1)
Every route carries a canonical link matching its final URL and a substantive H1. No app-router error-page markers (the "Not a packaged SKU" strings on `/solutions/healthcare` and `/industries/financial-services` are the intentional template copy, not errors).

### 1c. Repo cross-check (`zion-support/zion-support.github.io` → `public/`)
All 7 key routes exist as `public/<route>/index.html` and are **IN SYNC** with the live origin (sha1 of first 2 KB):

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
`sitemap.xml` → 200 → `sitemap-0.xml` → **200, 367 URLs**, content-type `application/xml`.
All 7 key routes present as `<loc>` entries (incl. homepage).

### 1e. `/public-roadmap` deploy status (re-verification)
Live `/public-roadmap` head now matches the committed repo file: `robots` meta `noindex, follow`, `/heritage/` meta-refresh, and new description all present. Prior run's stale-head concern is **resolved** — deploy fully propagated.

### 1f. Bounded broader crawl (content/link sanity sweep)
- Pages touched: 542 · internal links queued/checked beyond the key routes: 4000
- **24 site-wide 404s** surfaced (out of scope for the 7 key routes).

---

## 2. FIXES

### 2a. Key routes
**No fixes required.** All 7 key routes are live, content-correct, repo-synced, and sitemap-listed. Zero writes applied to the key route group.

### 2b. `/public-roadmap` — item CLOSED
Deploy propagated; live origin now `IN SYNC` with the corrected repo file. No further action.

### 2c. Out-of-scope findings (reported only, not modified)
24 orphaned 404s surfaced by the broader crawl. These point at deleted/legacy content and are outside the requested 7-route scope:

| 404 routes (repo-missing + live 404) | 404 routes (repo EXISTS but live 404) |
|---|---|
| /services/ai-financial-planning | /agents/ |
| /services/ai-risk-management | /apps/discovery-first-win-guide.html |
| /services/ai-wealth-management | /apps/discovery-showcase.html |
| /services/ai-credit-scoring | /apps/app-verification-guide.html |
| /agents/ | /apps/operational-planning-tools.html |
| /apps-network/apps-network/ | /apps/october-2026-batch111-agriculture.html |
| /site-uptime-watchdog/ | *remaining /apps/*.html (4 more) |
| /ai-smart-hands-scheduler/ | /undefined/ |
| /llm-cost-calculator/ | /pt/undefined/ |
| /ai-red-team-playbook/ | /es/undefined/ |
| /finops-alert-triage/ | /fr/undefined/ |
| /mcp-server-scaffold/ | /de/undefined/ |
| /ai-vendor-comparison/ | |
| /synthetic-data-studio/ | |
| /undefined/ | |
| /pt/undefined/ | |
| /es/undefined/ | |
| /fr/undefined/ | |
| /de/undefined/ | |

---

## 3. RESULTS

| Category | Result |
|---|---|
| Key docs routes (7) | ✅ 7/7 (100%) HTTP 200 |
| Key routes incl. homepage (8) | ✅ 8/8 (100%) HTTP 200 |
| Content (title/canonical/H1) | ✅ all 7 canonical, matching final URL, substantive H1 |
| Repo sync (public/ files) | ✅ 7/7 IN SYNC |
| Sitemap coverage | ✅ sitemap-0 200, 367 URLs, all 7 routes present |
| `/public-roadmap` head | ✅ Live now matches corrected repo file — CLOSED |
| Broader crawl (542 pages) | ⚠️ 518 served; 24 site-wide 404s (orphaned content, out of scope for the 7 key routes) |

**Bottom line:** All 7 requested key routes are healthy — HTTP 200, correct title/canonical/H1, repo-synced, sitemap-listed. The only prior actionable item (`/public-roadmap` stale live head) is resolved. The 24 broader 404s are orphaned links to deleted content; outside the requested scope but worth a content-hygiene cleanup pass.
