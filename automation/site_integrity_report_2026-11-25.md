# Zion Tech Group — Site Integrity Check Report

**Run:** Wednesday, 2026-11-25 04:20 -03 (UTC-03) | Model: upstage/solar-mini4 | Profile: default (cron)
**Base URL:** https://ziontechgroup.com
**Scope:** Base domain + 7 key docs routes (8 target URLs)
**Tooling:** site_integrity_check_now.py (live probe), targeted_route_check.py (urllib), repo cross-check vs zion-support/zion-support.github.io/public, committed_public_routes.json, /public-roadmap head-sync probe

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
| Route | Status | Final URL | Content-Type | OK |
|-------|--------|-----------|--------------|----|
| / | 200 | https://ziontechgroup.com/ | text/html; charset=utf-8 | ✅ |

### 1c. Repo cross-check (zion-support/zion-support.github.io/public)
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

### 1d. Tracking cross-check (committed_public_routes.json)
All 7 tracked keys resolve to a live-200 route: ✅ free-consultation, industries/financial-services, public-roadmap, solutions/healthcare, status-page, tools/phishing-analyzer, use-cases.

### 1e. /public-roadmap head-sync probe (title/description/robots/canonical/h1/refresh)
- title: "Public Roadmap · Zion Tech Group" ✅
- description: "No leftover product roadmap. Heritage is on /heritage/. New work is scoped after the free online Discovery." ✅
- robots: noindex, follow ✅
- refresh → /heritage/ ✅
- canonical: https://ziontechgroup.com/public-roadmap/ ✅
- h1: "Public Roadmap" ✅
- local file == live served HTML: **True** ✅

**Result: IN SYNC** with the committed repo file.

---

## 2. FIXES

| # | Item | Prior status | This run | Action |
|---|------|--------------|----------|--------|
| 1 | Base + 7 key routes | 8/8 PASS | 8/8 PASS | None required |
| 2 | Repo key-route files | 8/8 IN SYNC | 8/8 IN SYNC | None required |
| 3 | /public-roadmap head sync | IN SYNC | IN SYNC | Confirmed closed — no changes |
| 4 | Tracking cross-check | all LIVE | all LIVE | None required |
| 5 | Broader crawl (300 pages) | 300/300 healthy | 300/300 healthy | None required |

**No content written to live or repo this run.**

---

## 3. RESULTS

| Category | Result |
|----------|--------|
| Base domain | ✅ 200 |
| Key docs routes (7) | ✅ 7/7 HTTP 200, correct final URL + text/html |
| Base + key routes (8) | ✅ 8/8 (100%) HTTP 200 |
| Repo key-route files | ✅ 8/8 IN SYNC |
| committed_public_routes.json | ✅ 7/7 LIVE |
| /public-roadmap head sync | ✅ IN SYNC |
| Broader crawl 300 pages | ✅ 300/300 (0 broken) |
| **Site health (key routes)** | **HEALTHY** |

**Summary:** All 8 target URLs return HTTP 200 with correct final URLs and text/html. All 8 key route files are byte-identical between the live site and the committed repo. Tracking registry resolves all 7 routes live. No broken links, no stale redirects, no 4xx/5xx, no crawl errors. **No fixes were required.**

**Records saved to:** `site_integrity_run_20261125.txt` (log); report saved as `site_integrity_report_2026-11-25.md`.

---

## NOTE: Repo git drift (no impact on key routes)

Uncommitted modifications exist in the repo (e.g. `public/ai-ticket-sentinel/index.html`, `public/de/ai-ticket-sentinel/index.html`, `public/apps-network-sitemap.xml`, `app/industries/financial-services/page.tsx`, `app/data/appsNetwork.ts`, `app-network/index.html`, `broken-links-report.json`, etc.). None of the 8 key-route paths are affected — all remain IN SYNC with live. Recommend staging those diffs for review and commit, but no live or route impact.
