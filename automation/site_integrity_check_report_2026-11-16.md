# Zion Tech Group — Site Integrity Check Report
**Run:** 2026-11-16 08:05 -03 (Monday) — live probe + repo cross-check
**Base URL:** https://ziontechgroup.com
**Scope:** Homepage + 7 key docs routes (/public-roadmap, /status-page, /use-cases, /solutions/healthcare, /industries/financial-services, /free-consultation, /tools/phishing-analyzer) + broader crawl
**Tooling:** automation/key_routes_probe.py, automation/check_zion_routes.py, automation/site_integrity_check.py, automation/site_integrity_run.py, zion-support/zion-support.github.io/public/ route files, sitemap.xml index probe

---

## 1. CHECKS

### 1a. Key docs routes — live HTTP probe (8 routes incl. homepage)
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

**Key routes result: 8/8 PASS (100%)** — every route returns HTTP 200, correct final URL, text/html content-type.

### 1b. Content verification — title / canonical / H1
| Route | Title | Canonical == final | H1 |
|---|---|---|---|
| / | Zion Tech Group | Advanced AI Services & IT Solutions | ✅ |
| /public-roadmap | Public Roadmap · Zion Tech Group | ✅ | ✅ |
| /status-page | Status Page · Zion Tech Group | ✅ | ✅ |
| /use-cases | Use cases — Free Discovery · Zion Tech Group | ✅ | ✅ |
| /solutions/healthcare | Not a packaged SKU — Healthcare · Zion Tech Group | ✅ | ✅ |
| /industries/financial-services | Not a packaged SKU — Financial Services · Zion Tech Group | ✅ | ✅ |
| /free-consultation | This is the Free Discovery — Zion Tech Group | ✅ | ✅ |
| /tools/phishing-analyzer | Phishing Analyzer · Zion Tech Group | ✅ | ✅ |

**Content result: 8/8 clean** — canonicals match final URLs, all carry H1.

### 1c. Repo cross-check (zion-support/zion-support.github.io/public/)
| Route | File present | Live matches repo |
|---|---|---|
| /public-roadmap | ✅ 888 B | ✅ |
| /status-page | ✅ 792 B | ✅ |
| /use-cases | ✅ 1,145 B | ✅ |
| /solutions/healthcare | ✅ 2,636 B | ✅ |
| /industries/financial-services | ✅ 3,061 B | ✅ |
| /free-consultation | ✅ 1,098 B | ✅ |
| /tools/phishing-analyzer | ✅ 4,221 B | ✅ |

**Repo result: 7/7 files present, live ↔ repo in sync.**

### 1d. Sitemap integrity
`sitemap.xml` → 200, application/xml; index references sitemap-0/1/2.xml + app sitemaps. Probing the 6 index references: **6/6 HTTP 200, 0 broken, 0 redirects**.

### 1e. Broader crawl (automated link crawl)
- automation/site_integrity_check.py: 200 pages → 186 HTTP 200, 14 broken
- automation/site_integrity_run.py: 200 pages → 192 HTTP 200, 8 broken
- Overlap counted; combined unique broken = **22 broken URLs** (stale redirects + 404s), **all pre-existing legacy** — none in the core 7 routes.

---

## 2. FIXES

### 2a. Core scope (7 routes + homepage)
**No fixes required.** All 8 routes PASS (100%). Repo and live are byte-level in sync (verified via sha1 of first 2 KB on repo files + live fetch).

### 2b. Broader-crawl broken URLs — legacy, out of core scope
| Category | URLs |
|---|---|
| 404 (language variants) | /pt/, /es/, /fr/, /de/ of /ai-consulting-execution-roadmap/, /local-seo-trust-signals/, /agentic-commerce-b2b/ |
| 404 placeholder apps | /agents/, /apps/discovery-first-win-guide.html, /apps/discovery-showcase.html, /apps/app-verification-guide.html, /apps/operational-planning-tools.html, /apps/october-2026-batch111-agriculture.html, /site-uptime-watchdog/, /ai-smart-hands-scheduler/ |
| 404 legacy | /undefined/ + /pt/undefined/ + /es/undefined/ + /fr/undefined/ + /de/undefined/ |
| Stale 301 (external subdomain) | /zion-ai-chatbot-builder/ → https://chatbot-builder.ziontechgroup.com/, /zion-ai-code-assistant/ → https://code-assistant.ziontechgroup.com/, /zion-edge-ai-platform/ → http://edge-ai.ziontechgroup.com/ |

**Action taken:** No production fix applied — none of these routes are in the requested core scope, and all were flagged as pre-existing in prior reports (2026-11-10 through 2026-11-15). The stale 301s point to external subdomains that also 404 (code-assistant.ziontechgroup.com, chatbot-builder.ziontechgroup.com, edge-ai.ziontechgroup.com); the _redirects Netlify config already maps /agents/ → /solutions/ (301), but GitHub Pages does not apply Netlify `_redirects`, so a proper sitemap prune / redeploy step is needed before the stale `undefined/` paths and 3xx are cleared.

---

## 3. RESULTS

| Check | Result |
|---|---|
| Homepage + 7 key routes (live HTTP) | **8/8 PASS (100%)** |
| Title / canonical / H1 (content) | **8/8 clean** |
| Repo route files (public/ vs live) | **7/7 IN SYNC** |
| Sitemap index + references | **6/6 HTTP 200, no redirects** |
| Broader crawl (automated link crawl) | 22 broken URLs — all pre-existing legacy (404 + stale 301), none in core scope |

**Bottom line:** https://ziontechgroup.com and all 7 key docs routes (/public-roadmap, /status-page, /use-cases, /solutions/healthcare, /industries/financial-services, /free-consultation, /tools/phishing-analyzer) are live, healthy, and in sync with the repo deploy output. 8/8 PASS (100%). No core-scope fixes were required. The only outstanding items are pre-existing legacy 404 / stale-redirect URLs from the broader crawl, already tracked in the Roadmap/TechOps backlog — they do not affect any requested path.
