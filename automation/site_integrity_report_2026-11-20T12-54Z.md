# Zion Tech Group — Site Integrity Check Report

**Run:** 2026-11-20 12:54 -03 (15:54 UTC)
**Base URL:** https://ziontechgroup.com
**Scope:** Base domain + 7 key docs routes
**Tooling:** _fresh_site_integrity_check.py, key_routes_probe.py, targeted_route_check.py, site_integrity_check.py, probe2 (title/canonical/H1 + repo mirror)

---

## 1. CHECKS

### 1a. Key docs routes + base — live HTTP probe

| # | Route | Status | Final URL | Title | Size |
|---|---|---|---|---|---|
| 1 | / | 200 | https://ziontechgroup.com/ | Zion Tech Group \| Advanced AI Services & IT Solutions | 69,555B |
| 2 | /public-roadmap | 200 | https://ziontechgroup.com/public-roadmap/ | Public Roadmap · Zion Tech Group | 888B |
| 3 | /status-page | 200 | https://ziontechgroup.com/status-page/ | Status Page · Zion Tech Group | 792B |
| 4 | /use-cases | 200 | https://ziontechgroup.com/use-cases/ | Use cases — Free Discovery · Zion Tech Group | 1,145B |
| 5 | /solutions/healthcare | 200 | https://ziontechgroup.com/solutions/healthcare/ | Not a packaged SKU — Healthcare · Zion Tech Group | 2,636B |
| 6 | /industries/financial-services | 200 | https://ziontechgroup.com/industries/financial-services/ | Not a packaged SKU — Financial Services · Zion Tech Group | 3,061B |
| 7 | /free-consultation | 200 | https://ziontechgroup.com/free-consultation/ | This is the Free Discovery — Zion Tech Group | 1,098B |
| 8 | /tools/phishing-analyzer | 200 | https://ziontechgroup.com/tools/phishing-analyzer/ | Phishing Analyzer · Zion Tech Group | 4,221B |

**Result: 8/8 (100%) HTTP 200**, correct final URL and canonical H1/title on every route.

### 1b. Title / canonical / H1 verification

| Route | Canonical | H1 |
|---|---|---|
| / | https://ziontechgroup.com/ | Design, Launch, and Scale AI Operations With Confidence |
| /public-roadmap/ | https://ziontechgroup.com/public-roadmap/ | Public Roadmap |
| /status-page/ | https://ziontechgroup.com/status-page/ | Status Page |
| /use-cases/ | https://ziontechgroup.com/use-cases/ | Use cases |
| /solutions/healthcare/ | https://ziontechgroup.com/solutions/healthcare/ | Healthcare & Life Sciences |
| /industries/financial-services/ | https://ziontechgroup.com/industries/financial-services/ | AI for Financial Services & FinTech |
| /free-consultation/ | https://ziontechgroup.com/free-consultation/ | This is the Free Discovery |
| /tools/phishing-analyzer/ | https://ziontechgroup.com/tools/phishing-analyzer/ | Phishing Analyzer |

All canonical URLs match the final URL (no redirect target mismatch); all routes carry a real H1.

### 1c. Repo cross-check (committed `public/` vs live content)

| Route | Local sha1 (first 2KB) | Live sha1 (first 2KB) | Result |
|---|---|---|---|
| /public-roadmap | 8b7581c80f | 8b7581c80f | IN SYNC |
| /status-page | f944e657ba | f944e657ba | IN SYNC |
| /use-cases | cef4183cc5 | cef4183cc5 | IN SYNC |
| /solutions/healthcare | 9f57820d18 | 9f57820d18 | IN SYNC |
| /industries/financial-services | df51da8433 | df51da8433 | IN SYNC |
| /free-consultation | 4be786eec2 | 4be786eec2 | IN SYNC |
| /tools/phishing-analyzer | 7cdac51b37 | 7cdac51b37 | IN SYNC |

**Result: 7/7 IN SYNC** — committed `public/` files match live origin. (public/: 7,721 files; out/: 7,721 files mirror.)

### 1d. Sitemap coverage

- sitemap.xml (index) → 200, `application/xml`, 1 URL, primary sitemap-0.xml
- sitemap-0.xml → 200, 367 URLs, `application/xml`
- All 7 key routes present as `<loc>` entries ✅

### 1e. Crawl health (context)

- Crawled 200 internal pages: **198 HTTP 200**, **2 broken** (pre-existing, outside requested scope):
  - /apps/discovery-first-win-guide.html → 404
  - /apps/discovery-showcase.html → 404

---

## 2. FIXES

- **None required for the requested routes** — no repo or live content writes applied.
- Outstanding items carried forward:
  - /public-roadmap stale-head item → **CLOSED** in the 2026-11-20 06:22 UTC run; re-verified stable (200, 888B, canonical + title correct) on this run.
  - Legacy 404s on /apps/discovery-first-win-guide.html and /apps/discovery-showcase.html → flagged for a follow-up fix run; they are pre-existing and out of scope for this key-route check.

---

## 3. RESULTS

| Category | Result |
|---|---|
| Base domain | ✅ 200 |
| Key docs routes (7) | ✅ 7/7 (100%) HTTP 200, correct final URL + canonical + H1 |
| Key routes incl. homepage (8) | ✅ 8/8 (100%) HTTP 200 |
| Repo route files (`public/` mirror) | ✅ 7/7 IN SYNC |
| Sitemap coverage | ✅ all 7 routes present in sitemap-0.xml |
| Crawl health (context) | ✅ 198/200 200 (2 pre-existing 404s, out of scope) |
| **Site health (requested scope)** | **HEALTHY** |

**Summary:** All 8 requested routes (base domain + /public-roadmap, /status-page, /use-cases, /solutions/healthcare, /industries/financial-services, /free-consultation, /tools/phishing-analyzer) return HTTP 200 with correct final URLs, canonical URLs and H1 titles. Committed `public/` files match the live origin for all 7 key routes, and sitemap-0.xml covers all of them. **No fixes applied; site is healthy on the requested scope.**

**Run saved to:** `site_integrity_report_2026-11-20T12-54Z.md`
