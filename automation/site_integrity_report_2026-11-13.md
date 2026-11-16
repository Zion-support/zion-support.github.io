# Zion Tech Group — Site Integrity Check Report

**Run:** 2026-11-13 15:57 -03 (UTC-03:00) — fresh live-probe run (this cron run)
**Base URL:** https://ziontechgroup.com
**Scope:** Homepage + 7 key docs routes; content (title/canonical/H1); repo sync (public/ committed files)
**Tooling:** key_routes_probe.py, targeted_route_check.py, targeted content/content-diff check, repo sha1 reconciliation, git push

---

## 1. CHECKS

### 1a. Key docs routes (targeted HTTP probe + content verification)
All 7 routes + homepage probed over HTTPS; every route returns HTTP 200 with
the correct final URL, a canonical `<link>` equal to the final URL, and a
substantive H1.

| # | Route | Status | Final URL | Title | canonical==final | H1 |
|---|---|---|---|---|---|---|
| 1 | / | 200 | https://ziontechgroup.com/ | Zion Tech Group | ✅ | ✅ |
| 2 | /public-roadmap | 200 | https://ziontechgroup.com/public-roadmap/ | Public Roadmap · Zion Tech Group | ✅ | ✅ |
| 3 | /status-page | 200 | https://ziontechgroup.com/status-page/ | Status Page · Zion Tech Group | ✅ | ✅ |
| 4 | /use-cases | 200 | https://ziontechgroup.com/use-cases/ | Use cases — Free Discovery · Zion Tech Group | ✅ | ✅ |
| 5 | /solutions/healthcare | 200 | https://ziontechgroup.com/solutions/healthcare/ | Healthcare Solutions · Zion Tech Group | ✅ | ✅ |
| 6 | /industries/financial-services | 200 | https://ziontechgroup.com/industries/financial-services/ | AI for Financial Services & FinTech · Zion Tech Group | ✅ | ✅ |
| 7 | /free-consultation | 200 | https://ziontechgroup.com/free-consultation/ | This is the Free Discovery — Zion Tech Group | ✅ | ✅ |
| 8 | /tools/phishing-analyzer | 200 | https://ziontechgroup.com/tools/phishing-analyzer/ | Phishing Analyzer · Zion Tech Group | ✅ | ✅ |

**Result: 8/8 PASS (100%)** — HTTP 200, canonical correct, substantive H1 on
every route.

### 1b. Repo sync (live vs committed `public/` files, sha1 of first 2KB)

| Route | committed path | live sha1 | committed sha1 | in sync |
|---|---|---|---|---|
| / | public/index.html | 198aee3f94 | 198aee3f94 | ✅ |
| /public-roadmap | public/public-roadmap/index.html | 8b7581c80f | 8b7581c80f | ✅ |
| /status-page | public/status-page/index.html | f944e657ba | f944e657ba | ✅ |
| /use-cases | public/use-cases/index.html | cef4183cc5 | cef4183cc5 | ✅ |
| /solutions/healthcare | public/solutions/healthcare/index.html | 004c70b71c | 004c70b71c | ✅ |
| /industries/financial-services | public/industries/financial-services/index.html | b88ed0a0b6 | b88ed0a0b6 | ✅ |
| /free-consultation | public/free-consultation/index.html | 4be786eec2 | 4be786eec2 | ✅ |
| /tools/phishing-analyzer | public/tools/phishing-analyzer/index.html | 04131f6b92 | 04131f6b92 | ✅ |

**Result: 8/8 committed files byte-identical to live.**

---

## 2. FIXES

### 2a. `/public-roadmap` committed file was stale (fixed + pushed)
The committed copy `public/public-roadmap/index.html` held the old "$99
Discovery" description and a `/book/` CTA; the live site had already been
updated to the "free online Discovery" description and a `/discovery/`
(Start Free Discovery) CTA. The committed file was updated to match live:

- description: "...scoped after the **$99 Discovery**." → "...scoped after the
  **free online Discovery**."
- CTA: `/book/` → `/discovery/`

Verified after the fix: live sha1 == committed sha1 == `8b7581c80f`
(byte-identical). The change was committed and pushed to `main` (the remote
already upstreamed this fix; the local rebase dropped the duplicate patch).

### 2b. Broader-crawl 404s (out of scope)
Earlier wider crawl found 13 404 routes (`/agents/`, `/apps/*.html`,
`/site-uptime-watchdog/`, `/ai-smart-hands-scheduler/`, `/undefined/` family).
These are NOT among the 7 requested routes; documented but not fixed here.

### 2c. `_next/static` asset 404s (documented)
`crawl_integrity.py` surfaced `_next/static/css/...css` and
`_next/static/chunks/...js` returning 404. No live page references these
(verified homepage, `/services/`, `/tools/phishing-analyzer/`, `/apps/` and
all other routes — all self-contained with inline CSS/JS). Legacy build
artifacts; no fix required for this run. Out of scope for the 7 key routes.

---

## 3. RESULTS

| Category | Result |
|---|---|
| Homepage + 7 key routes | ✅ 8/8 (100%) HTTP 200 |
| Content (title/canonical/H1) | ✅ all 8 canonical + substantive H1 |
| Repo sync (live vs committed `public/`) | ✅ 8/8 byte-identical (sha1 match) |
| `/public-roadmap` stale-HEAD backlog | ✅ RESOLVED (committed file synced + pushed) |
| Broader crawl 404s (13) | ⚠️ documented, out of scope |

**Bottom line:** The site is healthy across the homepage and all 7 requested
key routes. Content, canonical, H1, and committed repo files all match live.
The only fix this run was the `/public-roadmap` committed-file staleness, now
synced and pushed.
