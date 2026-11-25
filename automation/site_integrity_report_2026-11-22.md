# Zion Tech Group — Site Integrity Check Report (2026-11-22, 23:47 -03)

**Run:** fresh live probe + repo cross-check + sitemap check + bounded crawl
**Base URL:** https://ziontechgroup.com
**Scope:** Base domain + key docs routes; local repo `zion-support/zion-support.github.io` (`public/`); sitemap; broad internal crawl.

---

## 1. CHECKS

### 1a. Key docs routes (8 incl. base) — live HTTP probe
Probe: `key_routes_probe.py` / `targeted_route_check.py` / `_fresh_site_integrity_check.py`

| # | Route | Status | Final URL | Size | Title | Canonical | H1 |
|---|---|---|---|---|---|---|---|
| 1 | / | 200 | https://ziontechgroup.com/ | 70,784B | Zion Tech Group | Advanced AI Services & IT Solutions | Design, Launch, and Scale AI Operations... |
| 2 | /public-roadmap | 200 | https://ziontechgroup.com/public-roadmap/ | 888B | Public Roadmap · Zion Tech Group | https://ziontechgroup.com/public-roadmap/ | Public Roadmap |
| 3 | /status-page | 200 | https://ziontechgroup.com/status-page/ | 792B | Status Page · Zion Tech Group | https://ziontechgroup.com/status-page/ | Status Page |
| 4 | /use-cases | 200 | https://ziontechgroup.com/use-cases/ | 1,145B | Use cases — Free Discovery · Zion Tech Group | https://ziontechgroup.com/use-cases/ | Use cases |
| 5 | /solutions/healthcare | 200 | https://ziontechgroup.com/solutions/healthcare/ | 2,636B | Not a packaged SKU — Healthcare · Zion Tech Group | https://ziontechgroup.com/solutions/healthcare/ | Healthcare & Life Sciences |
| 6 | /industries/financial-services | 200 | https://ziontechgroup.com/industries/financial-services/ | 3,061B | Not a packaged SKU — Financial Services · Zion Tech Group | https://ziontechgroup.com/industries/financial-services/ | AI for Financial Services & FinTech |
| 7 | /free-consultation | 200 | https://ziontechgroup.com/free-consultation/ | 1,098B | This is the Free Discovery — Zion Tech Group | https://ziontechgroup.com/free-consultation/ | This is the Free Discovery |
| 8 | /tools/phishing-analyzer | 200 | https://ziontechgroup.com/tools/phishing-analyzer/ | 4,221B | Phishing Analyzer · Zion Tech Group | https://ziontechgroup.com/tools/phishing-analyzer/ | Phishing Analyzer |

**Key routes result: 8/8 PASS (100%)** — every route returns HTTP 200, resolves to the canonical trailing-slash URL, carries a canonical link matching the final URL, and carries a substantive H1.

### 1b. Redirect/HEAD stub (bare vs trailing-slash)
All 8 routes (bare and with `/`) return HTTP 200 to the same canonical trailing-slash URL. No redirect chains or stale-group redirects on the requested routes.

### 1c. Repo cross-check (`zion-support/zion-support.github.io` — `public/`)
All 7 key route files exist under `public/` and are IN SYNC with live content (SHA-1 of first 2KB matched):

- public/public-roadmap/index.html — EXISTS (888 B) — IN SYNC
- public/status-page/index.html — EXISTS (792 B) — IN SYNC
- public/use-cases/index.html — EXISTS (1,145 B) — IN SYNC
- public/solutions/healthcare/index.html — EXISTS (2,636 B) — IN SYNC
- public/industries/financial-services/index.html — EXISTS (3,061 B) — IN SYNC
- public/free-consultation/index.html — EXISTS (1,098 B) — IN SYNC
- public/tools/phishing-analyzer/index.html — EXISTS (4,221 B) — IN SYNC

### 1d. Repo working-tree status (git)
`git status --porcelain public/<key>` → clean for all 7 key route files. No local modifications.

### 1e. Sitemap check
- sitemap.xml (index) → 200, 2 URLs, primary: https://ziontechgroup.com/sitemap-0.xml
- sitemap-0.xml → 200, 377 URLs
- All 7 key routes present in sitemap-0.xml: ✅ YES

### 1f. Broader crawl context (bounded)
- `site_integrity_check.py` (200-page crawl): **200/200 HTTP 200 · 0 broken**
- `deep_route_check.py` (titles/markers for the 7 key routes): all OK, no error/404/under-construction markers

---

## 2. FIXES

**None required for the key route group.** All routes return HTTP 200 in sync with the repo; no redirect, content, or sitemap changes needed.

Notes:
- `/public-roadmap` and `/status-page` are canonical, self-resolving pages (888 B and 792 B) with correct titles/canonical/H1 — they do not redirect to `/heritage/` or `/status/` in this run.
- The support repo's latest commit (`955aa97d4e9 "fix(site): retire stale redirects to external domains"`) already swept the leftover external-domain stale redirects; the requested routes are unaffected.

---

## 3. RESULTS

| Category | Result |
|---|---|
| Base domain / | ✅ 200 |
| Key docs routes (7) | ✅ 7/7 (100%) HTTP 200, repo IN SYNC |
| Key routes incl. homepage (8) | ✅ 8/8 (100%) HTTP 200 |
| Content (title/canonical/H1) | ✅ all 7 canonical, substantive H1 |
| Repo route files present | ✅ 7/7 present in `public/` |
| Repo vs live sync | ✅ IN SYNC (7/7) |
| Repo working-tree (key files) | ✅ clean — no local modifications |
| Sitemap coverage | ✅ all 7 routes present |
| Broader crawl (200-page) | ✅ 200/200 HTTP 200, 0 broken |
| Titles/markers deep check | ✅ all OK |

**Overall site status: HEALTHY** on all requested routes. No action required.

---

## Artifacts
- `site_integrity_run_20261122.json` — live probe + repo sync + summary (this run)
- `site_integrity_check.py` — broad internal crawl (200 pages)
- `deep_route_check.py` — titles/markers deep check
- `key_routes_probe.py`, `targeted_route_check.py`, `_fresh_site_integrity_check.py` — live probe / redirect / content scripts
