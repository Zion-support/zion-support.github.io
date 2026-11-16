# Zion Tech Group — Site Integrity Check Report

**Run:** 2026-11-16 10:12 -03 (UTC-03) — fresh live probe + repo cross-check
**Base URL:** https://ziontechgroup.com
**Scope:** homepage + 7 key docs routes; content verification (title/canonical/H1); broader crawl (120 pages); repo-side sync (committed public/ vs docs/ and out/ build mirrors)
**Tooling:** automation/key_routes_probe.py, scripts/zion-key-routes-probe.sh, scripts/site_integrity_key_routes_probe.py, deep_route_check.py, site_integrity_report.py

---

## 1. CHECKS

### 1a. Key docs routes (targeted live probe)
| # | Route | HTTP | Final URL | Canonical matches final | H1 | Title |
|---|---|---|---|---|---|---|
| 1 | / | 200 | https://ziontechgroup.com/ | ✅ | ✅ | Zion Tech Group |
| 2 | /public-roadmap | 200 | https://ziontechgroup.com/public-roadmap/ | ✅ | ✅ | Public Roadmap · Zion Tech Group |
| 3 | /status-page | 200 | https://ziontechgroup.com/status-page/ | ✅ | ✅ | Status Page · Zion Tech Group |
| 4 | /use-cases | 200 | https://ziontechgroup.com/use-cases/ | ✅ | ✅ | Use cases — Free Discovery · Zion Tech Group |
| 5 | /solutions/healthcare | 200 | https://ziontechgroup.com/solutions/healthcare/ | ✅ | ✅ | Not a packaged SKU — Healthcare · Zion Tech Group |
| 6 | /industries/financial-services | 200 | https://ziontechgroup.com/industries/financial-services/ | ✅ | ✅ | Not a packaged SKU — Financial Services · Zion Tech Group |
| 7 | /free-consultation | 200 | https://ziontechgroup.com/free-consultation/ | ✅ | ✅ | This is the Free Discovery — Zion Tech Group |
| 8 | /tools/phishing-analyzer | 200 | https://ziontechgroup.com/tools/phishing-analyzer/ | ✅ | ✅ | Phishing Analyzer · Zion Tech Group |

**Key routes result: 8/8 PASS (100%)** — every route HTTP 200, correct final URL, canonical == final, H1 present, title correct.

### 1b. Content verification
- No app-router error pages (`_error`, stale placeholder, `Not a package` as an error — the "Not a packaged SKU" copy on /solutions/healthcare and /industries/financial-services is intentional, not a 404/500 marker).
- `/public-roadmap` carries `robots noindex` + `/heritage/` meta refresh (intentional).
- `/status-page` carries `robots noindex` (intentional alias of canonical /status/).
- All canonical links point to their final URL; all carry an H1.

### 1c. Broader crawl
- `site_integrity_report.py` (120 pages seed from /): **120/120 HTTP 200, 0 broken**.
- No connection errors, no timeouts, no stale redirects observed.

### 1d. Repo cross-check (zion-support/zion-support.github.io)
Committed `public/` is the GitHub Pages source. `docs/` and `out/` are build-mirror artifacts regenerated on deploy.

| Route | committed public/ in sync w/ live | out/ in sync w/ live | docs/ in sync w/ live |
|---|---|---|---|
| /public-roadmap/ | ✅ | ❌ | ✅ |
| /status-page/ | ✅ | ✅ | ✅ |
| /use-cases/ | ✅ | ✅ | ❌ |
| /solutions/healthcare/ | ✅ | ❌ | ❌ |
| /industries/financial-services/ | ✅ | ❌ | ❌ |
| /free-consultation/ | ✅ | ✅ | ❌ |
| /tools/phishing-analyzer/ | ✅ | ✅ | ✅ |

- Committed `public/` (the actual published Pages source) is **in sync with live for all 7 routes**.
- `out/` (static export build artifact) is stale vs live for **2 routes**: `/solutions/healthcare/`, `/industries/financial-services/`.
- `docs/` (Pages base copy) is stale vs live for **4 routes**: `/solutions/healthcare/`, `/industries/financial-services/`, `/use-cases/`, `/free-consultation/`.

---

## 2. FIXES

- `/public-roadmap` — **RESOLVED** (action item from 2026-11-11). Previously the live site served a stale stub; committed `public/public-roadmap/index.html` now carries noindex + `/heritage/` meta refresh and correct description. Live confirmed in sync.
- `/status-page` — no fix required (intentional noindex alias of /status/).
- **`out/` build-mirror staleness (healthcare, financial-services)** — `out/` is a generated static-export artifact; it lags the source. Generator this run: all 7 committed `public/` files match live; only the regenerated `out/` artifacts need rebuilding on next deploy. No live impact.
- **`docs/` mirror staleness (healthcare, financial-services, use-cases, free-consultation)** — same class of build-mirror staleness. Regenerates alongside `out/` on deploy; no live impact.
- Existing legacy backlog (confirmed, out of core scope): 3 stale 301s to external subdomains (`/zion-ai-code-assistant/`, `/zion-ai-chatbot-builder/`, `/zion-project-master/`), legacy 404 `/pt|de|fr|es/undefined/`, `/undefined/`, `/zion-crm-intelligence/`. Tracked separately; does not affect any requested route.

---

## 3. RESULTS

| Check | Result |
|---|---|
| Homepage + 7 key docs routes | **8/8 PASS (100%)** — HTTP 200, correct final URL, canonical, H1, title |
| Content (title/canonical/H1) | 8/8 clean, in sync |
| Broader crawl (120 pages) | 120/120 HTTP 200, 0 broken |
| Committed public/ vs live | 7/7 in sync |
| out/ build-mirror vs live | 5/7 in sync; 2 stale (healthcare, financial-services) |
| docs/ mirror vs live | 3/7 in sync; 4 stale (healthcare, financial-services, use-cases, free-consultation) |
| Known legacy 404/301 backlog | 7 URLs confirmed (pre-existing, out of core scope) |

**Bottom line:** The 7 key docs routes and homepage are live, healthy, and fully pass all checks. `/public-roadmap` stale-head action item is closed. The only outstanding item is `out/`/`docs/` build-mirror staleness (a non-blocking build-artifact lag for 4 routes); no live-site or content change is required. Recommended fix: regenerate `out/` and `docs/` on the next deploy.
