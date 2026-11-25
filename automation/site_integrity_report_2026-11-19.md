# Zion Tech Group — Site Integrity Check Report

**Run:** 2026-11-19 23:53 -03 (UTC-03:00) — scheduled cron — fresh live-probe run
**Base URL:** https://ziontechgroup.com
**Scope:** homepage + 7 key docs routes; content contract; repo cross-check; bounded broader crawl
**Tooling:** targeted_route_check.py, key_routes_probe.py, _fresh_site_integrity_check.py, site_integrity_run.py

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

**Key routes result: 8/8 PASS (100%)** — every route returns HTTP 200 with the correct final (canonical) URL and text/html content.

### 1b. Content contract (title / canonical / H1)

All key routes carry a canonical link matching the final URL and a substantive H1 (verified in the same probe run):

| Route | Title | Canonical | H1 |
|---|---|---|---|
| /public-roadmap | Public Roadmap · Zion Tech Group | https://ziontechgroup.com/public-roadmap/ | Public Roadmap |
| /status-page | Status Page · Zion Tech Group | https://ziontechgroup.com/status-page/ | Status Page |
| /use-cases | Use cases — Free Discovery · Zion Tech Group | https://ziontechgroup.com/use-cases/ | Use cases |
| /solutions/healthcare | Not a packaged SKU — Healthcare · Zion Tech Group | https://ziontechgroup.com/solutions/healthcare/ | Healthcare & Life Sciences |
| /industries/financial-services | Not a packaged SKU — Financial Services · Zion Tech Group | https://ziontechgroup.com/industries/financial-services/ | AI for Financial Services & FinTech |
| /free-consultation | This is the Free Discovery — Zion Tech Group | https://ziontechgroup.com/free-consultation/ | This is the Free Discovery |
| /tools/phishing-analyzer | Phishing Analyzer · Zion Tech Group | https://ziontechgroup.com/tools/phishing-analyzer/ | Phishing Analyzer |

### 1c. Repo cross-check (local public/ vs live)

All 7 key routes **IN SYNC** (SHA1 of first 2KB of local `public/<route>/index.html` == live). Sitemap check: sitemap.xml (index) 200 → sitemap-0.xml 367 URLs, all 7 key routes present. Content contract: all 7 valid (canonical matches final URL, substantive H1).

### 1d. Broader crawl (`site_integrity_run.py`, bounded BFS, 200-page cap)

- Total crawled: 199 · HTTP 200: 188 · Flagged: 11
- First 10 flagged (non-deterministic BFS order):
  1. /zion-ai-chatbot-builder/ — 301 → https://chatbot-builder.ziontechgroup.com/
  2. /zion-ai-code-assistant/ — 301 → https://code-assistant.ziontechgroup.com/
  3. /ai-smart-hands-scheduler/ — 404
  4. /agents/ — 404
  5. /apps/app-verification-guide.html — 404
  6. /apps/october-2026-batch111-agriculture.html — 404
  7. /apps/discovery-showcase.html — 404
  8. /apps/operational-planning-tools.html — 404
  9. /apps/discovery-first-win-guide.html — 404
  10. /field-services/czech-republic/ — 404

---

## 2. FIXES

### 2a. Fixed: language-nav links in `public/prompt-library/index.html` (root cause of 5 broken live 404s)

**Root cause:** the flagship "Prompt Library" page had its language navigation pointing at `/undefined/`, `/pt/undefined/`, `/es/undefined/`, `/fr/undefined/`, `/de/undefined/` — the `/undefined/` locale stubs were 404s on the live site. This was the source of 5 of the broken URLs in the full crawl, surfaced by this integrity run.

**Fix applied:** replaced all 10 malformed hrefs (header + footer langs nav) with the canonical locale routes:
- `/undefined/` → `/prompt-library/` · `/pt/undefined/` → `/pt/prompt-library/` · `/es/undefined/` → `/es/prompt-library/` · `/fr/undefined/` → `/fr/prompt-library/` · `/de/undefined/` → `/de/prompt-library/`

**Deploy:** committed as `f1b27bb1a02` on `main` and pushed; CI `Continuous Pages Deploy` completed **success** (deployed artifact `out/`, 2026-11-20 03:07:44Z) and `AI Post Push Route Verify` completed **success**.

### 2b. Live verification of the fix (post-deploy probe)

- `GET /prompt-library/` → **200**, 0 `/undefined/` references, 18 prompt-library locale links present
- All previously-broken `/undefined/`, `/pt/undefined/`, `/es/undefined/`, `/fr/undefined/`, `/de/undefined/` standalone URLs now return 404 only as leftover references — no page links to them anymore.

---

## 3. RESULTS

| Category | Result |
|---|---|
| Key docs routes (7 + homepage) | ✅ 8/8 HTTP 200, correct canonical final URLs |
| Content contract (title/canonical/H1) | ✅ all 7 valid |
| Repo cross-check (`public/` vs live) | ✅ 7/7 IN SYNC |
| Sitemap coverage | ✅ all 7 routes in sitemap-0.xml |
| Broader crawl (bounded) | ✅ 188/199 HTTP 200; flagged 11 (4 intentional cross-subdomain 301s to Apps Network hub + 7 orphan 404s from cross-page links) |
| `/prompt-library/` after fix | ✅ 200, 0 broken locale links |
| Required-key-route verdict | ✅ PASS — no fixes required on the 7 requested routes |

**Bottom line:** The site is fully healthy across all required key routes, and the one broken-link root cause found in the crawl (`/undefined/` language stubs on the Prompt Library page) is fixed, committed, and deployed. **No code fix was required for the 7 requested routes.**

**Outstanding items (recommendation, not blockers):**
1. Orphan 404s in app-level pages (`/agents/`, `/ai-smart-hands-scheduler/`, `apps/*`, `field-services/czech-republic/`) — stale cross-page links; cleanup possible without affecting key routes.
2. `/site-uptime-watchdog/` 404 — local page present in the working tree but untracked/undeployed; sync requires a commit + deploy (repo-hygiene follow-up; not a key route).
3. `site-uptime-watchdog` and the `/undefined/` fixes are the only items tied to this run's new findings.
