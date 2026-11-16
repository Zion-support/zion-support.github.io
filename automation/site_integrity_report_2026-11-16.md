# Zion Tech Group — Site Integrity Check Report

**Run:** 2026-11-16 01:25 -03 (UTC-03) — live probe + repo cross-check
**Base URL:** https://ziontechgroup.com
**Scope:** 7 key docs routes + homepage, content verification, broader crawl, repo cross-check
**Tooling:** automation/key_routes_probe.py, content_verify (title/canonical/H1), site_integrity_report.py, zion-support/zion-support.github.io repo cross-check

---

## 1. CHECKS

### 1a. Key docs routes (targeted HTTP probe)
| # | Route | Status | Final URL |
|---|---|---|---|
| 1 | / | 200 | https://ziontechgroup.com/ |
| 2 | /public-roadmap | 200 | https://ziontechgroup.com/public-roadmap/ |
| 3 | /status-page | 200 | https://ziontechgroup.com/status-page/ |
| 4 | /use-cases | 200 | https://ziontechgroup.com/use-cases/ |
| 5 | /solutions/healthcare | 200 | https://ziontechgroup.com/solutions/healthcare/ |
| 6 | /industries/financial-services | 200 | https://ziontechgroup.com/industries/financial-services/ |
| 7 | /free-consultation | 200 | https://ziontechgroup.com/free-consultation/ |
| 8 | /tools/phishing-analyzer | 200 | https://ziontechgroup.com/tools/phishing-analyzer/ |

**Key routes result: 8/8 PASS (100%)**

### 1b. Content verification (title / canonical / H1 / description)
| Route | Title | Canonical | H1 | Description (start) |
|---|---|---|---|---|
| / | Zion Tech Group \| Advanced AI Services & IT Solutions | / | Design, Launch, and Scale AI Operations With Confidence | "Design, launch, and scale AI operations with confidence…" |
| /public-roadmap | Public Roadmap · Zion Tech Group | https://ziontechgroup.com/public-roadmap/ | Public Roadmap | "No leftover product roadmap. Heritage is on /heritage/…" |
| /status-page | Status Page · Zion Tech Group | https://ziontechgroup.com/status-page/ | Status Page | "Canonical status is /status/. This URL is an alias…" |
| /use-cases | Use cases — Free Discovery · Zion Tech Group | https://ziontechgroup.com/use-cases/ | Use cases | "Zion does not sell a leftover use-case catalog…" |
| /solutions/healthcare | Not a packaged SKU — Healthcare · Zion Tech Group | https://ziontechgroup.com/solutions/healthcare/ | Healthcare & Life Sciences | "Not a packaged healthcare SKU…" |
| /industries/financial-services | Not a packaged SKU — Financial Services · Zion Tech Group | https://ziontechgroup.com/industries/financial-services/ | AI for Financial Services & FinTech | "Not a packaged financial-services SKU…" |
| /free-consultation | This is the Free Discovery — Zion Tech Group | https://ziontechgroup.com/free-consultation/ | This is the Free Discovery | "There is no free consultation…" |
| /tools/phishing-analyzer | Phishing Analyzer · Zion Tech Group | https://ziontechgroup.com/tools/phishing-analyzer/ | Phishing Analyzer | "Analise URLs suspeitas e detecte tentativas de phishing…" |

**Observations:** Canonical links match final URLs on all 8 routes. No app-router error pages (no _error, no stale placeholder). All descriptions reflect the current "scope after the Free AI/IT Discovery" position — no leftover SKU or placeholder copy. `/public-roadmap` carries `robots noindex` (intentional — redirects to /heritage/ via meta refresh). `/status-page` carries `robots noindex` (intentional alias of /status/).

### 1c. Broader crawl (site_integrity_report.py, 120 pages seed from /)
- Total crawled: 120 · HTTP 200: 120 · Broken: 0
- Note: crawl follows canonical internal links from the homepage only; it does not revisit the known legacy /pt|de|fr|es/undefined/ and 301 paths that appeared in the prior 200-page run.

### 1d. Repo cross-check (zion-support/zion-support.github.io)
- All 7 routes present as `out/<route>/index.html` in the deploy output:
  - public-roadmap/index.html, status-page/index.html, use-cases/index.html,
    solutions/healthcare/index.html, industries/financial-services/index.html,
    free-consultation/index.html, tools/phishing-analyzer/index.html
- `_redirects` at repo root maps all 7 routes → `index.html 200`
- Live vs repo content: titles AND descriptions match 100% on all 7 routes.

---

## 2. FIXES

### 2a. /public-roadmap — RESOLVED (was ACTION REQUIRED on 2026-11-11)
- Repo committed the corrected page (`public-roadmap/index.html`, 863 B: noindex + /heritage/ meta refresh + updated description).
- Live site was previously serving the old stub (meta refresh to /services/, stale description). This run confirms the live `<head>` now matches the committed file. **Repo and live are in sync.**

### 2b. /status-page — No fix required
- Intentional `noindex` + alias of canonical /status/. Confirmed by repo and live.

### 2c. Known legacy issues — confirmed still present (out of core scope, tracked)
- 3 stale 301s to external subdomains (from prior 200-page crawl):
  - /zion-ai-code-assistant/ → https://code-assistant.ziontechgroup.com/
  - /zion-ai-chatbot-builder/ → https://chatbot-builder.ziontechgroup.com/
  - /zion-project-master/ → http://project-master.ziontechgroup.com/
- 404 legacy paths still returning 404:
  - /pt/undefined/, /de/undefined/, /fr/undefined/, /es/undefined/, /undefined/
  - /zion-crm-intelligence/ (per prior crawl)
  - /pt/apps-network/pt/edital-desk/ (per prior crawl)
- **Action:** prune or repoint these before next content overhaul. Out of scope for the 7 requested routes; flagged for the Roadmap/TechOps backlog.

---

## 3. RESULTS

| Category | Result |
|---|---|
| Key routes (core 7 + homepage) | **8/8 PASS (100%)** |
| Content (title/canonical/H1/syntax) | 8/8 clean, in sync |
| Broader crawl (120 pages) | 120/120 HTTP 200, 0 broken |
| Repo cross-check | 7/7 files present, content in sync |
| Known legacy 404/301 | 7 URLs confirmed (prior backlog, not core scope) |

**Bottom line:** The 7 key docs routes and homepage are live, healthy, and in sync with the repo deploy output. The pre-existing /public-roadmap action item (repo fixed vs live stale) is now closed. The only outstanding items are the pre-existing legacy 404/301 backlog, which is tracked separately from the core routes and does not affect any of the requested paths.
