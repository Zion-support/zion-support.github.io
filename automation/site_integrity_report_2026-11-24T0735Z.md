# Zion Tech Group — Site Integrity Check Report

**Run:** 2026-11-24 07:35 -03 (UTC-03)
**Base URL:** https://ziontechgroup.com
**Scope:** Base domain + 7 key docs routes (8 target URLs)
**Tooling:** key_routes_probe.py (requests), targeted_route_check.py (urllib), repo git cross-check

---

## 1. CHECKS

### 1a. Key docs routes — live HTTP probe (2 independent scripts)

| # | Route | Status | Final URL | OK |
|---|-------|--------|-----------|----|
| 1 | /public-roadmap | 200 | https://ziontechgroup.com/public-roadmap/ | ✅ |
| 2 | /status-page | 200 | https://ziontechgroup.com/status-page/ | ✅ |
| 3 | /use-cases | 200 | https://ziontechgroup.com/use-cases/ | ✅ |
| 4 | /solutions/healthcare | 200 | https://ziontechgroup.com/solutions/healthcare/ | ✅ |
| 5 | /industries/financial-services | 200 | https://ziontechgroup.com/industries/financial-services/ | ✅ |
| 6 | /free-consultation | 200 | https://ziontechgroup.com/free-consultation/ | ✅ |
| 7 | /tools/phishing-analyzer | 200 | https://ziontechgroup.com/tools/phishing-analyzer/ | ✅ |

**Key routes result: 7/7 PASS** — every route returns HTTP 200 with correct final URL and `text/html` content type.

### 1b. Base domain

| Route | Status | Final URL | Content-Type | OK |
|-------|--------|-----------|--------------|----|
| / | 200 | https://ziontechgroup.com/ | text/html; charset=utf-8 | ✅ |

### 1c. Repo cross-check (`zion-support/zion-support.github.io`, branch `main`)

All 7 key route files exist under `public/` (index.html present):

- public/public-roadmap/index.html — EXISTS
- public/status-page/index.html — EXISTS
- public/use-cases/index.html — EXISTS
- public/solutions/healthcare/index.html — EXISTS
- public/industries/financial-services/index.html — EXISTS
- public/free-consultation/index.html — EXISTS
- public/tools/phishing-analyzer/index.html — EXISTS

`committed_public_routes.json` tracks all 7 as keys: public-roadmap, status-page, use-cases, solutions/healthcare, industries/financial-services, free-consultation, tools/phishing-analyzer.

**Head-sync spot-check `/public-roadmap`:**
- Repo file sha256: `fc40a16c048b890b8a4b4f92b2b8d6a5589a0511b8a44ee67e9db21111e60bae`
- Live title: "Public Roadmap · Zion Tech Group" — matches repo
- Live description/robots/meta-refresh to /heritage/ — matches repo
- **Result: IN SYNC** — no outstanding head-diff item.

### 1d. Broader crawl context (prior run)

Broader crawl: 200 pages → 184 HTTP 200, 16 broken (stale 301 redirects + 404s) across apps/other areas. **None of the 16 broken URLs are among the 7 key routes.**

---

## 2. FIXES

| # | Item | Prior status | This run | Action |
|---|------|--------------|----------|--------|
| 1 | Base + 7 key routes | 8/8 PASS | 8/8 PASS | None required |
| 2 | Repo key-route files | 7/7 present | 7/7 present | None required |
| 3 | /public-roadmap head sync | IN SYNC | IN SYNC | Confirmed closed — no changes |
| 4 | Broader crawl | 16 broken elsewhere | 16 broken elsewhere | Tracked separately (broken-links work), not part of key-route sweep |

**No content written to live or repo this run.**

---

## 3. RESULTS

| Category | Result |
|----------|--------|
| Base domain | ✅ 200 |
| Key docs routes (7) | ✅ 7/7 (100%) HTTP 200, correct final URL + text/html |
| Base + key routes (8) | ✅ 8/8 (100%) HTTP 200 |
| Repo key-route files | ✅ 7/7 present under `public/` |
| committed_public_routes.json tracking | ✅ 7/7 present |
| /public-roadmap head sync | ✅ IN SYNC |
| Broader crawl | ✅ 184/200 healthy; 16 broken outside key-route scope (tracked separately) |
| **Site health (key routes)** | **HEALTHY** |

**Summary:** All 8 target URLs (base + 7 key docs routes) return HTTP 200 with correct final URLs and `text/html`. All 7 key route files exist in the repo under `public/`. The prior outstanding `/public-roadmap` head-sync item is confirmed closed (live head matches the committed repo file). No fixes were required this run.

**Record saved to:** `key_routes_probe.json`; report saved as `site_integrity_report_2026-11-24T0735Z.md`.
