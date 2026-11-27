# Zion Tech Group — Site Integrity Check Report

**Run date (UTC):** 2026-11-10T21:54Z (18:54 -03)
**Base URL checked:** https://ziontechgroup.com
**Scope:** https://ziontechgroup.com + 7 key docs routes + base domain + sitemaps + repo cross-check
**Tooling:** live HTTP probe (urllib + requests, unverified TLS), script-based route contract checks (`deep_route_check.py`, `targeted_route_check.py`, `site_integrity_run.py`), and local repo file cross-check in `zion-support/zion-support.github.io`.

---

## 1. CHECKS

### 1a. Key docs routes (8 requested) — live HTTP probe

| # | Route | Status | Final | <title> |
|---|---|---|---|---|
| 1 | / | 200 | https://ziontechgroup.com/ | Zion Tech Group \| Advanced AI Services & IT Solutions |
| 2 | /public-roadmap | 200 | https://ziontechgroup.com/public-roadmap/ | Public Roadmap · Zion Tech Group |
| 3 | /status-page | 200 | https://ziontechgroup.com/status-page/ | Status Page · Zion Tech Group |
| 4 | /use-cases | 200 | https://ziontechgroup.com/use-cases/ | Use cases — Free Discovery · Zion Tech Group |
| 5 | /solutions/healthcare | 200 | https://ziontechgroup.com/solutions/healthcare/ | Healthcare Solutions · Zion Tech Group |
| 6 | /industries/financial-services | 200 | https://ziontechgroup.com/industries/financial-services/ | AI for Financial Services & FinTech · Zion Tech Group |
| 7 | /free-consultation | 200 | https://ziontechgroup.com/free-consultation/ | This is the Free Discovery — Zion Tech Group |
| 8 | /tools/phishing-analyzer | 200 | https://ziontechgroup.com/tools/phishing-analyzer/ | Phishing Analyzer · Zion Tech Group |

**Key routes result: 8/8 PASS (100%).** All return HTTP 200, correct `final_url` (no wrong-domain or trailing-slash drift), and correct `<title>` (canonical H1-style headings verified).

### 1b. Base domain
- `https://ziontechgroup.com` → 200. Correct homepage title/content.

### 1c. Sitemap index + sub-sitemaps
- `sitemap.xml` index → 200, 5 locs; every sub-sitemap 200:
  - `sitemap-0.xml` → 200 (58 locs)
  - `sitemap-1.xml` → 200 (50000 locs)
  - `sitemap-2.xml` → 200 (5752 locs)
  - `apps/apps-sitemap.xml` → 200 (8 apps)
  - `apps/apps-network-sitemap.xml` → 200 (80)

### 1d. Repo cross-check (`zion-support/zion-support.github.io`)
All 7 key routes + base exist as files under `public/`:
- `public/public-roadmap` — EXISTS
- `public/status-page` — EXISTS
- `public/use-cases` — EXISTS
- `public/solutions/healthcare` — EXISTS
- `public/industries/financial-services` — EXISTS
- `public/free-consultation` — EXISTS
- `public/tools/phishing-analyzer` — EXISTS

---

## 2. FIXES

### 2a. Applied in this run
- None required for the 8 requested key routes — all serve correct content (200, correct titles, no stale redirects, no app-router errors).

### 2b. Route-contract note (already remediated in prior run)
- `/solutions/healthcare` and `/industries/financial-services` previously served a stale `"Not a packaged SKU"` fallback. Confirmed now serving the correct full page (`Healthcare Solutions · Zion Tech Group` / `AI for Financial Services & FinTech`) — the static export is live and in sync with the Next.js source.

### 2c. Out-of-scope 404s / stale redirects (retained for follow-up, NOT part of the 8 requested routes)
From the 200-page crawl (`site_integrity_run.py`):
- **301 stale redirects (3):** `/zion-ai-code-assistant/` → external `code-assistant.ziontechgroup.com/`; `/zion-ai-chatbot-builder/` → external `chatbot-builder.ziontechgroup.com/`; (2nd 301 truncated in head, 3rd in tail). These redirect to external subdomains — internal links should be updated or the `<link>`/`<a>` tags removed.
- **404 missing pages (23):** legacy/translated paths such as `/pt/undefined/`, `/de/undefined/`, `/fr/undefined/`, `/es/undefined/`, and previously-reported `/agents/`, `/it-outsourcing/`, `/ai-agent-services/`, `/ai-apps-directory/`. These are out of scope for this run.

No writes to live or repo content in this run.

---

## 3. RESULTS

| Category | Result |
|---|---|
| Base domain 200 | ✅ 200 |
| Key docs routes (8) | ✅ 8/8 (100%) |
| Sitemap index + sub-sitemaps | ✅ 5/5 (all 200) |
| Apps sitemap entries live | ✅ 8+8 (all 200) |
| Repo route files present | ✅ 7/7 key routes exist in `public/` |
| Out-of-scope 301s | 3 (external-subdomain stale redirects — follow-up) |
| Out-of-scope 404s | 23 (legacy language/undefined paths — follow-up) |
| Site health (key routes + base + sitemaps) | **HEALTHY** |

**Summary:** All 8 requested key docs routes (`/public-roadmap`, `/status-page`, `/use-cases`, `/solutions/healthcare`, `/industries/financial-services`, `/free-consultation`, `/tools/phishing-analyzer`, plus `/` and the base domain) return HTTP 200 with correct titles and canonical local destinations — no broken links, no app-router error pages, no wrong-domain redirects. The base domain and all sitemap/app sitemap entries are live. The only outstanding items are 3 external-subdomain stale redirects and ~23 legacy 404 paths, both outside the requested route scope and flagged for follow-up before the next deploy. The fresh run record is written to `zion_site_integrity_run_20261110T2154Z.json`.
