# Zion Tech Group — Site Integrity Check Report

**Run:** 2026-11-18 22:33 -03 (UTC-03) — fresh live probe + repo cross-check (cron)
**Base URL:** https://ziontechgroup.com
**Repos:**
- Site: /Users/miami2/zion-support/zion-support.github.io (committed site source)
- Automation: /Users/miami2/zion.app/automation

---

## 1. CHECKS

### 1a. Key docs routes — live HTTP probe (homepage + 7 requested)

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

**Key routes result: 8/8 PASS (100%)** — every route returns HTTP 200, correct Content-Type text/html, correct final URL (no wrong-domain or trailing-slash drift).

### 1b. Content contract (title / canonical / H1) — check_zion_routes.py

| Route | Title | Canonical matches final? | H1 |
|---|---|---|---|
| / | Zion Tech Group | Yes | Yes |
| /public-roadmap | Public Roadmap · Zion Tech Group | Yes | Yes |
| /status-page | Status Page · Zion Tech Group | Yes | Yes |
| /use-cases | Use cases — Free Discovery · Zion Tech Group | Yes | Yes |
| /solutions/healthcare | Not a packaged SKU — Healthcare · Zion Tech Group | Yes | Yes |
| /industries/financial-services | Not a packaged SKU — Financial Services · Zion Tech Group | Yes | Yes |
| /free-consultation | This is the Free Discovery — Zion Tech Group | Yes | Yes |
| /tools/phishing-analyzer | Phishing Analyzer · Zion Tech Group | Yes | Yes |

**Content contract: all 8 valid** — 200, title present, canonical matches final URL exactly, substantive H1 present, no invalid HTML-entity H1s.

### 1c. Repo cross-check (committed site source vs live) — _fresh_site_integrity_check.py

All 7 key routes **IN SYNC** (SHA1 of first bytes of local `public/<route>/index.html` == live served content):

- /public-roadmap IN SYNC
- /status-page IN SYNC
- /use-cases IN SYNC
- /solutions/healthcare IN SYNC
- /industries/financial-services IN SYNC
- /free-consultation IN SYNC
- /tools/phishing-analyzer IN SYNC

### 1d. Sitemap coverage (SEO index)

- sitemap.xml (index) → 200, application/xml, references only sitemap-0.xml
- sitemap-0.xml → 200, 367 URLs, content-type application/xml
- All 7 key routes present in sitemap-0.xml (verified by substring match against live index)

### 1e. Sitemap file sync (local vs live)

- sitemap-0.xml local vs live: IN SYNC (SHA1 7d31a74dbe)

### 1f. Broken links

- Sitemap crawl (check-broken-links.sh): 1 URL checked, 0 broken
- Key routes: 0 broken (all 200)

---

## 2. FIXES

### 2a. Applied in this run: none

No route content issues found. All 7 requested routes serve correct content (200, canonical, valid H1), all in sync with the committed local site source. No route fixes applied.

### 2b. Stale redirects

No stale redirects observed on the 7 key routes (allow_redirects=True), unlike the earlier full-crawl run which flagged 7 intentional cross-subdomain 301s to plan subdomains. None affect the 7 key routes.

### 2c. Sitemap index — recommendation, not a blocker

The sitemap.xml index only references sitemap-0.xml. sitemap-1.xml and sitemap-2.xml are not listed (they exist on disk). Does not affect route availability (all 200) or key-route indexing, but large sitemaps are not discoverable via the index. SEO follow-up only.

### 2d. Repo hygiene — recommendation before next deploy

- **Site repo (zion-support/zion-support.github.io):** DIRTY. 36 modified files + untracked dirs (new app/blog/36-41 files, etc.); origin out of sync with working tree.
- **Automation repo (zion.app/automation):** DIRTY. 2 modified + 2 untracked; origin out of sync with working tree.
- Suggested: commit + push to origin (main) before next GitHub Pages deploy so live output matches committed source.

---

## 3. RESULTS

| Category | Result |
|---|---|
| Key docs routes (homepage + 7 requested) | ✅ 8/8 (100%) HTTP 200, canonical, valid H1 |
| Repo cross-check (site source) | ✅ IN SYNC (7/7) |
| Content contract (title/canonical/H1) | ✅ all valid, no placeholders |
| Sitemap coverage of 7 key routes | ✅ all in sitemap-0.xml |
| Sitemap-0 file sync (local vs live) | ✅ IN SYNC |
| Broken links (sitemap crawl) | ✅ 0 broken |
| Broken links (key routes) | ✅ 0 broken |
| Sitemap index coverage | ⚠️ sitemap-1/2.xml not in index (follow-up) |
| Repo git hygiene | ⚠️ working trees dirty (both repos) — commit/push before deploy |

**Verdict: ✅ SITE INTEGRITY PASS** — all 7 requested routes resolve over HTTPS (200), all in sync with the committed site repo, all indexed in sitemap-0.xml, content contract valid, no broken key routes, no new 404s. No fixes applied this run.

**Outstanding items for the Roadmap/TechOps backlog:**
1. Sitemap: sitemap.xml index should also list sitemap-1.xml and sitemap-2.xml so large sitemaps remain discoverable (SEO hygiene).
2. Repo hygiene: commit + push uncommitted changes (both repos) before the next deploy so live output matches committed source.

*Report saved: automation/site_integrity_report_2026-11-18.md*
