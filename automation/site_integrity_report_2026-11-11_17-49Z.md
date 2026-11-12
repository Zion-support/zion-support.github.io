# Zion Tech Group — Site Integrity Check Report

**Run:** 2026-11-11 17:49 UTC (14:49 -03) — fresh live-probe run
**Base URL:** https://ziontechgroup.com
**Scope:** Base domain + 7 key docs routes
**Tooling:** key_routes_probe.py (requests), targeted_route_check.py (urllib), live-head diff vs committed repo file

---

## 1. CHECKS

### 1a. Key docs routes (8 incl. base) — live HTTP probe

| # | Route | Status | Final URL | Canonical | H1 / title |
|---|---|---|---|---|---|
| 1 | / | 200 | https://ziontechgroup.com/ | https://ziontechgroup.com/ | Zion Tech Group |
| 2 | /public-roadmap | 200 | https://ziontechgroup.com/public-roadmap/ | https://ziontechgroup.com/public-roadmap/ | Public Roadmap · Zion Tech Group |
| 3 | /status-page | 200 | https://ziontechgroup.com/status-page/ | https://ziontechgroup.com/status-page/ | Status Page · Zion Tech Group |
| 4 | /use-cases | 200 | https://ziontechgroup.com/use-cases/ | https://ziontechgroup.com/use-cases/ | Use cases — Free Discovery · Zion Tech Group |
| 5 | /solutions/healthcare | 200 | https://ziontechgroup.com/solutions/healthcare/ | https://ziontechgroup.com/solutions/healthcare/ | Healthcare Solutions · Zion Tech Group |
| 6 | /industries/financial-services | 200 | https://ziontechgroup.com/industries/financial-services/ | https://ziontechgroup.com/industries/financial-services/ | AI for Financial Services & FinTech · Zion Tech Group |
| 7 | /free-consultation | 200 | https://ziontechgroup.com/free-consultation/ | https://ziontechgroup.com/free-consultation/ | This is the Free Discovery — Zion Tech Group |
| 8 | /tools/phishing-analyzer | 200 | https://ziontechgroup.com/tools/phishing-analyzer/ | https://ziontechgroup.com/tools/phishing-analyzer/ | Phishing Analyzer · Zion Tech Group |

**Key routes result: 8/8 PASS (100%)** — every route returns HTTP 200 with correct final URL and canonical H1/title.

### 1b. Repo cross-check (`zion-support/zion-support.github.io`)

All 7 key route files exist under `public/`:

- public/public-roadmap/index.html — EXISTS (corrected head + body)
- public/status-page/index.html — EXISTS
- public/use-cases/index.html — EXISTS
- public/solutions/healthcare/index.html — EXISTS
- public/industries/financial-services/index.html — EXISTS
- public/free-consultation/index.html — EXISTS
- public/tools/phishing-analyzer/index.html — EXISTS

### 1c. `/public-roadmap` head diff (live vs committed)

- **Live (curl):** meta description = "Not a packaged SKU. Zion scopes work after the Free AI/IT Discovery."; meta refresh = `0; url=/services/`
- **Committed (`public/public-roadmap/index.html`):** meta description = "No leftover product roadmap. Heritage is on /heritage/. New work is scoped after the $99 Discovery."; meta refresh = `0; url=/heritage/`

The visible body and `<title>` are correct on live; only the `<head>` meta description + redirect are stale.

---

## 2. FIXES

### 2a. Applied in this run
None required — no content writes. All 8 routes serve HTTP 200 with correct titles/canonical and no app-router error pages.

### 2b. `/public-roadmap` — still NOT remediated (outstanding, prior action re-opened)
- **Repo state:** `public/public-roadmap/index.html` already carries the corrected head + body (committed `ed081be0dd1`).
- **Live site:** STILL serves the old `<head>` (stale meta description "Not a packaged SKU…" + redirect `0; url=/services/`) even though the visible body is the corrected page.
- **Cause:** GitHub Pages rebuild of `Zion-support/zion-support.github.io` (main) has not propagated to the live origin as of this run (17:49 UTC).
- **Action:** verify GitHub Pages rebuild propagation; re-probe `/public-roadmap` until the live `<head>` matches the committed file (robots meta `noindex, follow` + `/heritage/` refresh + new description), then close this item.

### 2c. Out-of-scope items (retained from prior runs, NOT part of the 8 requested routes)
- Stale 301 redirects to external subdomains (`/zion-ai-code-assistant/`, `/zion-ai-chatbot-builder/`).
- Legacy 404 paths (e.g. `/pt/undefined/`, `/de/undefined/`, `/fr/undefined/`, `/es/undefined/`, `/agents/`, previously-reported `/agents/`).

No writes to live or repo content in this run.

---

## 3. RESULTS

| Category | Result |
|---|---|
| Base domain | ✅ 200 |
| Key docs routes (7) | ✅ 7/7 (100%) HTTP 200, correct final URL + title |
| Key routes incl. homepage (8) | ✅ 8/8 (100%) HTTP 200 |
| Repo route files | ✅ 7/7 present in `public/` |
| `/public-roadmap` head in sync | ⚠️ 200 + correct body/title, but stale meta description + `/services/` refresh (deploy rebuild pending) |
| Site health (base + key routes) | **HEALTHY** |

**Summary:** All 8 requested routes (base domain + /public-roadmap, /status-page, /use-cases, /solutions/healthcare, /industries/financial-services, /free-consultation, /tools/phishing-analyzer) return HTTP 200 with correct final URLs and canonical H1 titles. The only actionable item is `/public-roadmap`, where the repository is fixed but the GitHub Pages origin has not rebuilt — the stale `<head>` meta description and redirect are still live. Verify rebuild propagation and re-probe `/public-roadmap` until the live `<head>` matches the committed file.

**Record saved to:** `key_routes_probe.json`; this report saved as `site_integrity_report_2026-11-11_17-49Z.md`.
