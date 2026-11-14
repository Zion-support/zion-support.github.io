# Zion Tech Group — Site Integrity Check Report

**Run:** 2026-11-12 22:59 -03 (cron, fresh live probe)
**Base URL:** https://ziontechgroup.com
**Repo:** /Users/miami2/zion-support/zion-support.github.io (GitHub Pages)
**Scripts used:** key_routes_probe.py, targeted_route_check.py, content check (requests+BeautifulSoup), site_integrity_run.py, repo git ls-files cross-check, sitemap index/sub-locator check.

---

## 1. CHECKS

### 1a. Key docs routes (live HTTPS probe, requests+urllib, TLS verified-open)
| # | Route | Status | Final URL | Canonical | H1 |
|---|---|---|---|---|---|
| 1 | / | 200 | https://ziontechgroup.com/ | matches | Zion Tech Group |
| 2 | /public-roadmap | 200 | https://ziontechgroup.com/public-roadmap/ | matches | Public Roadmap |
| 3 | /status-page | 200 | https://ziontechgroup.com/status-page/ | matches | Status Page |
| 4 | /use-cases | 200 | https://ziontechgroup.com/use-cases/ | matches | Use cases |
| 5 | /solutions/healthcare | 200 | https://ziontechgroup.com/solutions/healthcare/ | matches | Healthcare & Life Sciences |
| 6 | /industries/financial-services | 200 | https://ziontechgroup.com/industries/financial-services/ | matches | AI for Financial Services & FinTech |
| 7 | /free-consultation | 200 | https://ziontechgroup.com/free-consultation/ | matches | This is the Free Discovery |
| 8 | /tools/phishing-analyzer | 200 | https://ziontechgroup.com/tools/phishing-analyzer/ | matches | Phishing Analyzer |

**Result: 8/8 PASS (100%) HTTP 200** — every key route resolves over HTTPS, no 3xx/4xx/5xx, correct final URL.

### 1b. Content contract (title / canonical / H1)
All 7 key routes carry a `<link rel="canonical">` pointing at the final URL and a substantive single H1. No app-router error placeholders ("Not a package", "There was an error", "Under construction") on any route.

### 1c. /public-roadmap live-head diff vs committed repo file
- **Repo (committed):** `public/public-roadmap/index.html` carries `robots: noindex, follow`, description "No leftover product roadmap. Heritage is on /heritage/...", and `<meta http-equiv="refresh" content="0; url=/heritage/">`.
- **Live (fresh probe):** the live `<head>` now matches the committed file exactly — same robots meta, same description, same `/heritage/` refresh.
- **Cause/state:** GitHub Pages rebuild of `main` (commit `ed081be0dd1`) has propagated. **This stale-head item is now CLOSED.**

### 1d. Repo cross-check (`zion-support/zion-support.github.io`)
All 7 key routes exist as committed files under `public/` (all `index.html`):
- public/public-roadmap/index.html ✓
- public/status-page/index.html ✓
- public/use-cases/index.html ✓
- public/solutions/healthcare/index.html ✓
- public/industries/financial-services/index.html ✓
- public/free-consultation/index.html ✓
- public/tools/phishing-analyzer/index.html ✓

### 1e. Sitemap verification
- `sitemap.xml` index → 200, `application/xml`
- `sitemap-0.xml` → 200 (68 locs) includes /public-roadmap, /status-page, /use-cases, /free-consultation
- `sitemap-1.xml` → 200 (50,000 locs) includes /use-cases, /solutions/healthcare, /industries/financial-services, /free-consultation, /tools/phishing-analyzer
- `sitemap-2.xml` → 200 (5,752 locs)
All sub-sitemaps serve the key routes; no 4xx/5xx on the index or any sub-sitemap.

---

## 2. FIXES

### 2a. /public-roadmap — FIX VERIFIED (closed)
The legacy stale-head issue (old meta description + `/services/` refresh) is resolved: live origin now mirrors the committed repo file after the GitHub Pages rebuild. Re-probe confirms the live `<head>` matches the commit (`ed081be0dd1`).

### 2b. No other fixes required
All remaining 4xx/5xx / stale-redirect hits on the crawl fall outside the 7 requested routes and are pre-existing legacy build artifacts:
- Legacy localized 404s (`/undefined/`, `/de/undefined/`, `/fr/undefined/`, `/es/undefined/`, `/pt/undefined/`)
- Stale 301s to removed product subdomains (`/zion-project-master/`, `/zion-crm-intelligence/`)
- Missing legacy app-product HTML pages (`/apps/*.html`)
These do not affect any key docs route and are tracked as separate backlog items (i18n build fix, stale-product-redirect watchlist, app-product page removal).

---

## 3. RESULTS

| Category | Result |
|---|---|
| Key docs routes (7) | ✅ 7/7 (100%) HTTP 200 |
| Key routes incl. homepage (8) | ✅ 8/8 (100%) HTTP 200 |
| Content contract (canonical + H1) | ✅ all 7 canonical, substantive H1 |
| /public-roadmap live-head | ✅ matches committed repo file (stale-head item CLOSED) |
| Repo route files | ✅ 7/7 present under public/ |
| Sitemap (index + sub-sitemaps) | ✅ all 200, key routes located |
| Broader crawl (site_integrity_run.py, 300 pages) | ✅ 286/300 (95.3%); 14 broken = pre-existing legacy 404s / redirects, none on key routes |

**Bottom line:** The site is healthy across all 7 requested key docs routes plus the homepage. Every route returns HTTP 200 over HTTPS with correct canonical/H1 and no error placeholders. The only previously-open item — stale `/public-roadmap` live head — is closed after the GitHub Pages rebuild propagated. No field-level fix is required from the repo on the 7 routes.
