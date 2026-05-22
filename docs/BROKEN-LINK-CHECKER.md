# Broken Link & Sitemap Health Checker

> Autonomous site crawler that validates every internal link, detects broken URLs (404/500), redirect chains, and orphaned pages. Sends daily Telegram summary and creates GitHub issues when problems are found.

## Overview

SEO and user experience depend on working links. This automation:

- **Fetches** `sitemap.xml` → extracts all published URLs
- **Crawls** the site (BFS, depth 1, max 50 pages) → collects internal links
- **Validates** every link (HTTP status check)
- **Reports** broken links, redirects, and orphaned pages
- **Alerts** via Telegram daily
- **Creates** GitHub issues when ≥3 new broken links detected

## Architecture

```
┌─────────────────────┐
│   sitemap.xml fetch │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────────────────────┐
│  Crawl (concurrency=5, timeout=15s) │
│  → collect all internal links        │
└──────────┬──────────────────────────┘
           │
           ▼
┌─────────────────────────────────────┐
│  Validate every link (HEAD/GET)      │
│  - 404/500 → broken                  │
│  - 3xx → redirect chain              │
└──────────┬──────────────────────────┘
           │
           ▼
┌─────────────────────────────────────┐
│  Compare with history                │
│  - New broken → issue (if ≥3)        │
│  - Orphaned (in sitemap only)        │
│  - Persist state                     │
└──────────┬──────────────────────────┘
           │
           ▼
┌─────────────────────────────────────┐
│  Telegram daily summary              │
│  GitHub issue on threshold breach    │
└─────────────────────────────────────┘
```

## Components

| File | Purpose |
|------|---------|
| `automation/link-health-checker.cjs` | Main script — sitemap fetch, crawl, validate, report |
| `.github/workflows/link-health-checker.yml` | Daily 06:00 UTC + manual trigger |
| `.hermes/memory/link-checker/history.json` | Persistent state (broken links, last seen) |
| `automation/reports/link-checker/*.json` | Daily run reports |

## Configuration

| Env Var | Default | Purpose |
|---------|---------|---------|
| `APP_URL` | `https://ziontechgroup.com` | Base URL for internal link detection |
| `SITEMAP_URL` | `${APP_URL}/sitemap.xml` | Sitemap location |
| `TELEGRAM_BOT_TOKEN` | (required) | Bot token for alerts |
| `TELEGRAM_CHAT_ID` | `8435383377` | Chat ID for Telegram |
| `GITHUB_TOKEN` | (required) | Token for issue creation |
| `MAX_CONCURRENCY` | `5` | Parallel HTTP requests |
| `TIMEOUT_MS` | `15000` | Request timeout (ms) |

## Behavior

### Sitemap Parsing
- Fetches `sitemap.xml` via HTTP GET
- Extracts all `<loc>` entries (absolute URLs)
- Normalizes (removes trailing slashes except root)

### Crawling
- Starts from sitemap URLs
- Extracts internal links from HTML (`href` attributes)
- Breadth-first search limited to first 50 pages
- Concurrency limited to 5 parallel requests
- Respects same-origin (only links under `APP_URL`)

### Validation
- Each link checked with HEAD request (falls back to GET)
- Status categories:
  - **Broken**: 404, 500, network error, timeout → logged + reported
  - **Redirect**: 3xx → logged (chain not followed deeply)
  - **OK**: 200 → ignored

### Issue Creation
- Threshold: **≥3 new broken links** in a single run
- Creates GitHub issue with:
  - Title: `🚨 Broken Links Detected — N new issues`
  - Body: list of broken URLs, status codes, first-seen timestamps
- Labels: `automation`, `seo`, `broken-links`
- State persistance: `link-checker/broken-issues.json` tracks known issues to avoid duplicates

### Telegram Summary
```
🔗 Link Health Check — May 12, 2026
Total links scanned: 127

✅ Broken: 4
🔀 Redirects: 2
🚫 Orphaned (in sitemap): 1

⚠️ 4 new broken links — check automation/reports/link-checker/
```

## Storage

```
.hermes/memory/link-checker/
├── history.json          # All discovered broken/redirect/orphan records
├── broken-issues.json    # Tracks GitHub issues created (dedupe)
└── link-checker.log      # Execution log

automation/reports/link-checker/
└── link-check-<timestamp>.json  # Daily report snapshots
```

## GitHub Workflow

**Schedule:** Daily 06:00 UTC
**Triggers:** `workflow_dispatch` (manual) + scheduled
**Timeout:** 20 minutes

**Steps:**
1. Checkout + Node 20 setup
2. `npm ci` install dependencies
3. Run `link-health-checker.cjs`
4. Upload report artifacts (30-day retention)

## Troubleshooting

**"Sitemap fetch failed"** — Verify `SITEMAP_URL` accessible, no auth required. For local testing, set `APP_URL` and `SITEMAP_URL` in `.env`.

**"Too many broken links flooding issues"** — Adjust threshold in script (`if (newBroken.length < 3) return`). Increase to create issues only for larger batches.

**Crawl too slow?** — Reduce `MAX_CONCURRENCY` (default 5). Also consider lowering crawl depth (currently hardcoded to first 50 pages only).

**False positive (200 but content says 404)** — Some sites return 200 with "Not Found" page; this script only checks HTTP status, not content. Consider adding content validation if needed.

**Orphaned pages appearing frequently** — Orphans are pages in sitemap but not linked from any discovered page. These may be legit (e.g., landing pages with external-only links). Review before removing from sitemap.

## Future Enhancements

- **Content-based validation** (check page content for "404" or "Not Found" even on 200)
- **Crawl depth configurable** via env (currently depth=1)
- **Priority queue** (crawl sitemap URLs first, then discovered links)
- **Auto-fix suggestions** (propose redirects for common broken patterns)
- **Weekly summary** with trend (broken links increasing/decreasing)
- **Integration with Google Search Console API** for external broken link detection

---

*Created: 2026-05-12 — Autonomous implementation via OpenClaw (Task #24)*
