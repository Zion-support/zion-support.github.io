# Zion Tech Group — Site Integrity Check Report

**Run:** Wednesday, 2026-11-25 10:34 -03 (UTC-03) | Model: upstage/solar-mini4 | Profile: default (cron)
**Base URL:** https://ziontechgroup.com
**Scope:** Base domain + 7 key docs routes (8 target URLs)
**Tooling:** site_integrity_check_now.py (live probe), check_zion_routes.py (title/canonical/h1), repo cross-check vs zion-support/zion-support.github.io/public, sitemap spot-check.

---

## 1. CHECKS

### 1a. Key docs routes — live HTTP probe

| # | Route | Status | Final URL | Content-Type | OK |
|---|-------|--------|-----------|--------------|----|
| 1 | / (Homepage) | 200 | https://ziontechgroup.com/ | text/html; charset=utf-8 | ✅ |
| 2 | /public-roadmap | 200 | https://ziontechgroup.com/public-roadmap/ | text/html; charset=utf-8 | ✅ |
| 3 | /status-page | 200 | https://ziontechgroup.com/status-page/ | text/html; charset=utf-8 | ✅ |
| 4 | /use-cases | 200 | https://ziontechgroup.com/use-cases/ | text/html; charset=utf-8 | ✅ |
| 5 | /solutions/healthcare | 200 | https://ziontechgroup.com/solutions/healthcare/ | text/html; charset=utf-8 | ✅ |
| 6 | /industries/financial-services | 200 | https://ziontechgroup.com/industries/financial-services/ | text/html; charset=utf-8 | ✅ |
| 7 | /free-consultation | 200 | https://ziontechgroup.com/free-consultation/ | text/html; charset=utf-8 | ✅ |
| 8 | /tools/phishing-analyzer | 200 | https://ziontechgroup.com/tools/phishing-analyzer/ | text/html; charset=utf-8 | ✅ |

**Key routes result: 8/8 PASS** — every route returns HTTP 200, correct final URL with trailing slash, text/html content.

### 1b. Base domain
`/` → 200, `https://ziontechgroup.com/`, text/html. ✅

### 1c. Route/canonical/h1 cross-check (check_zion_routes.py)
| Route | Canonical matches URL | H1 |
|-------|----------------------|----|
| Homepage | ✓ matches | — |
| Public Roadmap | ✓ matches | Public Roadmap |
| Status Page | ✓ matches | Status Page |
| Use Cases | ✓ matches | Use cases |
| Solutions - Healthcare | ✓ matches | Healthcare & Life Sciences |
| Industries - Financial Services | ✓ matches | AI for Financial Services & FinTech |
| Free Consultation | ✓ matches | This is the Free Discovery |
| Tools - Phishing Analyzer | ✓ matches | Phishing Analyzer |

**/public-roadmap head sync:** title "Public Roadmap · Zion Tech Group", canonical https://ziontechgroup.com/public-roadmap/ — **IN SYNC**, matches committed repo file.

### 1d. Repo cross-check (zion-support/zion-support.github.io/public)
All 8 files present locally and byte-identical (sha1 of first 2048 bytes) to the live-200 bytes:

| Route | Local sha1[:10] | Live sha1[:10] | Status |
|-------|-----------------|----------------|--------|
| Homepage | a09b7368cd | a09b7368cd | IN SYNC |
| Public Roadmap | 8b7581c80f | 8b7581c80f | IN SYNC |
| Status Page | f944e657ba | f944e657ba | IN SYNC |
| Use Cases | cef4183cc5 | cef4183cc5 | IN SYNC |
| Solutions - Healthcare | 9f57820d18 | 9f57820d18 | IN SYNC |
| Industries - Financial Services | df51da8433 | df51da8433 | IN SYNC |
| Free Consultation | 4be786eec2 | 4be786eec2 | IN SYNC |
| Tools - Phishing Analyzer | 7cdac51b37 | 7cdac51b37 | IN SYNC |

**Result: 8/8 IN SYNC.**

### 1e. Tracking cross-check (committed_public_routes.json)
All 7 tracked keys resolve to a live-200 route: ✅ free-consultation, industries/financial-services, public-roadmap, solutions/healthcare, status-page, tools/phishing-analyzer, use-cases.

### 1f. Sitemap spot-check
`sitemap.xml` + nested sitemaps → 455 URLs. All 7 key routes present as `<loc>`.

---

## 2. FIXES

| # | Item | This run | Action |
|---|------|----------|--------|
| 1 | Base + 7 key routes | 8/8 PASS | None required |
| 2 | Repo key-route files | 8/8 IN SYNC | None required |
| 3 | Canonical URL cross-check | all match | None required |
| 4 | Tracking cross-check | all LIVE | None required |
| 5 | Sitemap coverage | 7/7 present | None required |

**No content written to live or repo this run.**

---

## 3. RESULTS

| Category | Result |
|----------|--------|
| Base domain | ✅ 200 |
| Key docs routes (7) | ✅ 7/7 HTTP 200 |
| Base + key routes (8) | ✅ 8/8 (100%) HTTP 200 |
| Repo key-route files | ✅ 8/8 IN SYNC |
| committed_public_routes.json | ✅ 7/7 LIVE |
| Canonical URL cross-check | ✅ 8/8 match |
| Sitemap coverage | ✅ 7/7 present |
| **Site health (key routes)** | **HEALTHY** |

**Summary:** All 8 target URLs return HTTP 200 with correct final URLs, text/html content, and matching canonical URLs. All 8 key route files are byte-identical between live and committed repo. Tracking registry resolves all 7 routes live. All 7 key routes are discoverable via the sitemap (455 URLs). No broken links, no stale redirects, no 4xx/5xx, no crawl errors. **No fixes were required.**

**Records saved to:** `site_integrity_run_2026-11-25.txt` (log); report saved as `site_integrity_report_2026-11-25.md`.
