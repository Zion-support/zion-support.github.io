# Autonomous Lighthouse Performance Monitor

> Tracks Core Web Vitals and Lighthouse scores daily; detects regressions (>10% drop); sends Telegram alerts and creates GitHub issues.

## Overview

Performance directly impacts SEO, conversions, and user experience. This automation runs Lighthouse on the production site and tracks scores over time.

## What It Monitors

**Lighthouse Categories:**
- Performance (0–100)
- Accessibility (0–100)
- Best Practices (0–100)
- SEO (0–100)

**Core Web Vitals (from Lighthouse audits):**
- **LCP** (Largest Contentful Paint): ≤ 2500ms ✅
- **CLS** (Cumulative Layout Shift): ≤ 0.10 ✅
- **FID** (First Input Delay): ≤ 100ms ✅

## Architecture

```
┌─────────────────────────────────────┐
│  GitHub Actions: lighthouse-monitor │
│  (schedule: 10:00 UTC daily)        │
│  + runs on PRs to main              │
└──────────┬──────────────────────────┘
           │
           ▼
┌─────────────────────────────────────┐
│  npm install -g lighthouse           │
│  npx lighthouse <URL> --output=json  │
└──────────┬──────────────────────────┘
           │
           ▼
┌─────────────────────────────────────┐
│  Parse report → extract scores       │
│  Append to lighthouse-history.json   │
│  Compare to 7-day average            │
└──────────┬──────────────────────────┘
           │
           ▼
┌─────────────────────────────────────┐
│  Regression? (>10% drop)             │
│  → Create GitHub issue               │
│  → Send Telegram alert               │
└─────────────────────────────────────┘
```

## Files

| File | Purpose |
|------|---------|
| `automation/lighthouse-monitor.cjs` | Main logic — runs LH, analyzes scores, alerts |
| `.github/workflows/lighthouse-monitor.yml` | Daily 10:00 UTC + PR runs |
| `.hermes/memory/lighthouse-history.json` | Last 30 days of scores (for trend analysis) |
| `automation/reports/lighthouse/lighthouse-latest.json` | Most recent full report |
| `automation/reports/lighthouse/lh-<timestamp>.json` | Archived per-run reports |

## Triggers

| Condition | Action |
|-----------|--------|
| Performance < 85 | 🟡 Telegram alert |
| Any category >10% below 7-day avg | 🔴 Telegram alert + GitHub issue |
| LCP > 2500ms | 🟡 Telegram alert |
| CLS > 0.10 | 🟡 Telegram alert |
| FID > 100ms | 🟡 Telegram alert |

## Configuration

| Env Var | Default | Notes |
|---------|---------|-------|
| `APP_URL` | `https://ziontechgroup.com` | Target URL |
| `TELEGRAM_BOT_TOKEN` | (required) | Bot token |
| `TELEGRAM_CHAT_ID` | `8435383377` | Chat ID |
| `GITHUB_TOKEN` | (required) | For issue creation |
| `LH_TIMEOUT_MS` | `180000` | 3 minute timeout |

## Sample Telegram Message

```
📊 Lighthouse Performance Report — May 12, 2026
URL: https://ziontechgroup.com

📈 Scores:
  • Performance: 92
  • Accessibility: 100
  • Best Practices: 100
  • SEO: 100

⚠️ Threshold Alerts:
  • LCP: 2680ms (> 2500ms)

Generated: 2026-05-12T10:00:00.000Z
```

## GitHub Issue Format

Title: `📉 Performance Regression Detected — 05/12/2026`

Body includes:
- Regressed categories with before/after scores
- Current full score breakdown
- Link to latest Lighthouse report artifact

Labels: `automation`, `performance`, `regression` (created automatically)

## Notes

- Uses `npx lighthouse` with `--chrome-flags="--headless"` (no display needed)
- Falls back to stub report (zeros) if Lighthouse fails — ensures workflow doesn't crash
- History limited to last 30 runs (sliding window)
- 7-day average requires ≥3 runs before regression detection activates

---

*Status: Deployed 2026-05-12 (Task #23). Part of autonomous monitoring suite alongside Build Size Guardian, Storybook Snapshot, Daily Digest, and Link Health Checker.*