# Zion Tech Group — Site Integrity Check Report

**Run:** 2026-11-21 22:32 -03 (Saturday)
**Base URL:** https://ziontechgroup.com
**Scope:** Base domain + 7 key docs routes
**Tooling:** key_routes_probe.py, content_verify_fresh.py, repo file cross-check (zion-support/zion-support.github.io)

---

## 1. CHECKS

### 1a. Live HTTP probe (8 routes)

| # | Route | Status | Final URL | Content-Type |
|---|---|---|---|---|
| 1 | / | 200 | https://ziontechgroup.com/ | text/html; charset=utf-8 |
| 2 | /public-roadmap | 200 | https://ziontechgroup.com/public-roadmap/ | text/html; charset=utf-8 |
| 3 | /status-page | 200 | https://ziontechgroup.com/status-page/ | text/html; charset=utf-8 |
| 4 | /use-cases | 200 | https://ziontechgroup.com/use-cases/ | text/html; charset=utf-8 |
| 5 | /solutions/healthcare | 200 | https://ziontechgroup.com/solutions/healthcare/ | text/html; charset=utf-8 |
| 6 | /industries/financial-services | 200 | https://ziontechgroup.com/industries/financial-services/ | text/html; charset=utf-8 |
| 7 | /free-consultation | 200 | https://ziontechgroup.com/free-consultation/ | text/html; charset=utf-8 |
| 8 | /tools/phishing-analyzer | 200 | https://ziontechgroup.com/tools/phishing-analyzer/ | text/html; charset=utf-8 |

**Live HTTP: 8/8 PASS (100%)** — every route returns HTTP 200 with correct final URL and text/html content-type.

### 1b. Content verification (title / canonical / H1)

| Route | Title | Canonical | H1 | Canonical match |
|---|---|---|---|---|
| /public-roadmap | Public Roadmap · Zion Tech Group | /public-roadmap/ | Public Roadmap | yes |
| /status-page | Status Page · Zion Tech Group | /status-page/ | Status Page | yes |
| /use-cases | Use cases — Free Discovery · Zion Tech Group | /use-cases/ | Use cases | yes |
| /solutions/healthcare | Not a packaged SKU — Healthcare · Zion Tech Group | /solutions/healthcare/ | Healthcare & Life Sciences | yes |
| /industries/financial-services | Not a packaged SKU — Financial Services · Zion Tech Group | /industries/financial-services/ | AI for Financial Services & FinTech | yes |
| /free-consultation | This is the Free Discovery — Zion Tech Group | /free-consultation/ | This is the Free Discovery | yes |
| /tools/phishing-analyzer | Phishing Analyzer · Zion Tech Group | /tools/phishing-analyzer/ | Phishing Analyzer | yes |

### 1c. Repo cross-check (`zion-support/zion-support.github.io`, `public/` vs live)

| Route | public/ file | Title match | H1 match | Text similarity |
|---|---|---|---|---|
| /public-roadmap | EXISTS | ✓ | ✓ | 1.0 |
| /status-page | EXISTS | ✓ | ✓ | 1.0 |
| /use-cases | EXISTS | ✓ | ✓ | 1.0 |
| /solutions/healthcare | EXISTS | ✓ | ✓ | 1.0 |
| /industries/financial-services | EXISTS | ✓ | ✓ | 1.0 |
| /free-consultation | EXISTS | ✓ | ✓ | 1.0 |
| /tools/phishing-analyzer | EXISTS | ✓ | ✓ | 1.0 |

**Repo sync: 7/7 files present and IN SYNC.**

### 1d. Broader crawl (site_integrity_run.py, 200-page sweep, background)

- Total crawled: 200 · HTTP 200: 195 · Broken: 5
- Out of scope for the 7 requested routes; tracked for follow-up:
  - Stale 301s → /zion-ai-code-assistant/, /zion-ai-chatbot-builder/ (redirect to external subdomains)
  - Missing pages → /undefined/, /fr/undefined/, /pt/undefined/

---

## 2. FIXES

No fixes were required for the 7 key routes — all are live, synced, and valid.

Tracked background items (out of scope for this run, for follow-up if desired):
- 2 stale 301 redirects to external subdomains.
- 3 missing /undefined/ locale pages.

---

## 3. RESULTS

**Key routes: 8/8 PASS (100%)**
- Live: HTTP 200 + correct canonical final URL on all 8 routes.
- Content: title / canonical / H1 present and consistent on all 7 key routes.
- Repo: 7/7 public/ files exist and are byte-aligned with live content.

**No action taken on the site** — nothing broken for the requested scope. Background crawl defects (5) are separate from the 7 requested routes and do not affect the key docs routes.
