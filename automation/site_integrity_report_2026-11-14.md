# Zion Tech Group — Site Integrity Check Report

**Run:** 2026-11-14 23:51 UTC (-03) — fresh live-probe run
**Base URL:** https://ziontechgroup.com
**Scope:** Base domain + 7 key docs routes (plus broader crawl)
**Tooling:** key_routes_probe.py (requests), targeted head-diff vs committed repo, integrity crawl

---

## 1. CHECKS

### 1a. Key docs routes (7) — live HTTP probe (requests)

| # | Route | Status | Final URL | Content-Type | OK |
|---|---|---|---|---|---|
| 1 | /public-roadmap | 200 | https://ziontechgroup.com/public-roadmap/ | text/html | ✅ |
| 2 | /status-page | 200 | https://ziontechgroup.com/status-page/ | text/html | ✅ |
| 3 | /use-cases | 200 | https://ziontechgroup.com/use-cases/ | text/html | ✅ |
| 4 | /solutions/healthcare | 200 | https://ziontechgroup.com/solutions/healthcare/ | text/html | ✅ |
| 5 | /industries/financial-services | 200 | https://ziontechgroup.com/industries/financial-services/ | text/html | ✅ |
| 6 | /free-consultation | 200 | https://ziontechgroup.com/free-consultation/ | text/html | ✅ |
| 7 | /tools/phishing-analyzer | 200 | https://ziontechgroup.com/tools/phishing-analyzer/ | text/html | ✅ |

**Key routes result: 7/7 PASS (100%)** — every route returns HTTP 200 with correct final URL and text/html content.

### 1b. Base domain

| Route | Status | Final URL | Content-Type | OK |
|---|---|---|---|---|
| / | 200 | https://ziontechgroup.com/ | text/html | ✅ |

### 1c. Repo cross-check (`zion-support/zion-support.github.io`)

All 7 key route files exist under `public/`:

- public/public-roadmap/index.html — EXISTS
- public/status-page/index.html — EXISTS
- public/use-cases/index.html — EXISTS
- public/solutions/healthcare/index.html — EXISTS
- public/industries/financial-services/index.html — EXISTS
- public/free-consultation/index.html — EXISTS
- public/tools/phishing-analyzer/index.html — EXISTS

### 1d. `/public-roadmap` head diff (live vs committed repo)

| Element | Live (ziontechgroup.com) | Committed (`public/public-roadmap/index.html`) | Match |
|---|---|---|---|
| meta description | No leftover product roadmap. Heritage is on /heritage/. New work is scoped after the free online Discovery. | (same) | ✅ |
| meta robots | noindex, follow | (same) | ✅ |
| meta refresh | 0; url=/heritage/ | (same) | ✅ |
| title | Public Roadmap · Zion Tech Group | (same) | ✅ |

**Result: IN SYNC.** Previously the outstanding item from 2026-11-11 (stale meta description + `/services/` refresh); GitHub Pages rebuild has propagated — live head now matches the committed file.

### 1e. Broader crawl (site_integrity_report.py)

- Pages visited: 120
- HTTP 200: 120
- Broken: 0
- Report: `/tmp/site_integrity_report.json` → {"total": 120, "ok": 120, "broken_count": 0, "broken": []}

---

## 2. FIXES

| # | Item | Prior status | This run | Action |
|---|---|---|---|---|
| 1 | /public-roadmap stale head | ⚠️ Live head out of sync with committed repo (stale meta description + `/services/` refresh) | ✅ Live head now in sync with committed repo | None required — GitHub Pages rebuild propagated; outstanding item CLOSED |
| 2 | Other 7 key routes | ✅ 7/7 PASS | ✅ 7/7 PASS | No changes needed |
| 3 | Repo route files | ✅ 7/7 present | ✅ 7/7 present | No changes needed |
| 4 | Broader crawl | — | ✅ 120/120 (0 broken) | No changes needed |

No content written to live or repo. All issues resolved or already healthy.

---

## 3. RESULTS

| Category | Result |
|---|---|
| Base domain | ✅ 200 |
| Key docs routes (7) | ✅ 7/7 (100%) HTTP 200, correct final URL + text/html |
| Base + key routes (8) | ✅ 8/8 (100%) HTTP 200 |
| Repo route files | ✅ 7/7 present in `public/` |
| /public-roadmap head in sync | ✅ NOW IN SYNC (previously ⚠️) |
| Broader crawl | ✅ 120/120 (0 broken) |
| **Site health** | **HEALTHY** |

**Summary:** All 7 key docs routes (plus base domain) return HTTP 200 with correct final URLs. All 7 repo route files exist under `public/`. The `/public-roadmap` outstanding head-sync item from 2026-11-11 is now CLOSED — the live site head matches the committed repo file. Broader crawl: 120/120 pages HTTP 200, 0 broken.

**Record saved to:** `key_routes_probe.json`; this report saved as `site_integrity_report_2026-11-14.md`. Repo cross-check and head diff performed against `zion-support/zion-support.github.io` (main branch).
