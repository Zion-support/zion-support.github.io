# Field Performance & Real User Web Vitals Monitor

> Autonomous real user monitoring (RUM) for Core Web Vitals. Captures LCP, FID, CLS, FCP, TTFB from actual visitors; aggregates daily; detects regressions; alerts via Telegram and GitHub issues. 100% self-hosted.

## Overview

This guardrail complements synthetic Lighthouse tests with **real user monitoring** (RUM):

- **Measures** Core Web Vitals from actual browser sessions (LCP, FID, CLS, FCP, TTFB)
- **Stores** raw submissions + daily aggregates in `.hermes/memory/field-performance/`
- **Compares** to 7-day moving average baseline; detects regressions (>15% worsening)
- **Alerts** via Telegram daily summary; creates GitHub issues on critical degradation
- **Tracks** per-page 90-day history; computes overall site health score (0–100)
- **Privacy-safe:** No PII sent; URL query params stripped before storage
- **Cost:** Zero — uses existing infrastructure, no external SaaS

---

## Why Field Performance?

- **SEO impact:** Google Search uses real field Core Web Vitals as ranking signals
- **Real-world conditions:** Captures slow 3G, old devices, varied locations — what users actually experience
- **Regression detection:** Finds issues that don’t appear in synthetic Lighthouse runs (e.g., CDN edge degradations, A/B test impacts)
- **Complete picture:** Lab data (Lighthouse) + field data (RUM) = full performance visibility

---

## Architecture

```
Browser (visitor)
   ↓
FieldPerformanceCollector (React component, web-vitals lib)
   ↓
POST /api/field-performance (Next.js API route)
   ↓
Store raw: .hermes/memory/field-performance/raw/YYYY-MM-DD.jsonl
   ↓
Daily 11:00 UTC: automation/field-performance-aggregator.cjs
   ↓
Compute p75/p90 per page/metric; detect regressions vs 7d baseline
   ↓
Telegram alert (daily summary) + GitHub issue (if critical)
   ↓
State: daily-aggregates.json (90d), history.json (90d)
```

---

## Components

| File | Purpose |
|------|---------|
| `app/components/FieldPerformanceCollector.tsx` | Client-side RUM collector using `web-vitals` |
| `app/api/field-performance/route.ts` | API endpoint — stores submissions |
| `automation/field-performance-aggregator.cjs` | Daily aggregator, trend detection, alerts |
| `.github/workflows/field-performance-aggregator.yml` | Workflow — daily 11:00 UTC + manual |
| `.hermes/memory/field-performance/raw/` | Raw submissions (30d retention) |
| `.hermes/memory/field-performance/daily-aggregates.json` | Daily aggregates (90d) |
| `.hermes/memory/field-performance/history.json` | Site-wide score history (90d) |

---

## Metrics & Thresholds

All values in **seconds** (except CLS which is unitless):

| Metric | What it measures | Warning threshold | Critical threshold | Weight |
|--------|------------------|-------------------|-------------------|--------|
| **LCP** | Largest Contentful Paint — when largest element renders | > 2.5 s | > 4.0 s | 30% |
| **FID** | First Input Delay — interactivity latency | > 0.1 s (100 ms) | > 0.3 s (300 ms) | 20% |
| **CLS** | Cumulative Layout Shift — visual stability | > 0.1 | > 0.25 | 20% |
| **FCP** | First Contentful Paint — first paint | > 1.8 s | > 3.0 s | 15% |
| **TTFB** | Time to First Byte — server response | > 0.8 s (800 ms) | > 2.0 s | 15% |

**Overall score** = weighted average across all pages and metrics (0–100).

---

## Behaviour

### Data Collection
- Every pageview triggers measurements (web-vitals library)
- Metrics sent via `navigator.sendBeacon` to `/api/field-performance`
- Payload includes: metric name, value, rating (good/needs-improvement/poor), delta, page path (query params stripped), connection type, device memory
- Submissions batched per day; stored as JSONL

### Aggregation (daily 11:00 UTC)
1. **Read** raw submissions for previous day (full dataset)
2. **Group** by page URL + metric name
3. **Compute** p50, p75, p90, p99 percentiles per page/metric
4. **Calculate** overall site score (weighted 0–100)
5. **Build baseline:** 7-day moving average (excluding current day)
6. **Detect regressions:** Any metric/page where p75 worsened >15% vs baseline
7. **Identify critical pages:** LCP >4s OR FID >0.3s OR CLS >0.25
8. **Telegram summary:** Worst pages by LCP, regression count, overall score
9. **GitHub issue:** If >5% of pages are critical OR any metric shows >20% regression

### Retention
- Raw submissions: 30 days (per-day directories)
- Daily aggregates: 90 days rolling window
- History: 90 days rolling window
- Artifact: Workflow uploads report (retention 30 days)

---

## Configuration

### Environment variables
None required for basic operation. Optional for alerts:
- `TELEGRAM_BOT_TOKEN` — for Telegram notifications
- `TELEGRAM_CHAT_ID` — defaults to `8435383377`
- `GITHUB_TOKEN` — for auto-creating issues on critical events

### Schedule
Workflow cron: `0 11 * * *` → **Daily 11:00 UTC**
- After Daily Automation Digest (08:00)
- Before midday — gives time to react to same-day issues

### Disabling / Customization
- Edit `.github/workflows/field-performance-aggregator.yml` to change schedule or disable
- Adjust `THRESHOLDS` and `REGRESSION_THRESHOLD` in `automation/field-performance-aggregator.cjs`
- Modify weightings in `computeOverallScore()` function

---

## Alerting

### Telegram Daily Summary (always sent)
```
📊 Field Performance Report — Mon, May 11
📈 Overall Score: 87/100
📄 Pages analyzed: 142
📊 Submissions: 1,247

🔴 Top slowest pages (LCP p75):
🔴 /pricing — 4.2s
🟡 /contact — 2.8s
...

⚠️ Regressions detected (vs 7d baseline): 5 metric/page combos
• /pricing — LCP +18.2% (3.6s → 4.2s)
...

Details: .hermes/memory/field-performance/daily-aggregates.json
```

### GitHub Issue (threshold conditions)
- More than 5% of pages have critical LCP/FID/CLS values
- Any metric/page regression exceeds 20%
- Title: `[Field Performance] Critical issues detected — YYYY-MM-DD`
- Labels: `automation`, `performance`, `field-web-vitals`, `bug`

---

## Troubleshooting

### No data appearing
- Check `app/layout.tsx` includes `<FieldPerformanceCollector />`
- Verify `web-vitals` is installed (`npm list web-vitals`)
- Ensure client JavaScript is not blocked by ad blockers (some block `sendBeacon`)
- Confirm API route `app/api/field-performance/route.ts` exists and compiles

### Aggregator not running
- Check workflow run in GitHub Actions (`Actions` tab)
- Verify `TELEGRAM_BOT_TOKEN` secret exists in repository
- Review logs: `.hermes/memory/field-performance/aggregator.log`

### High false-positive regressions
- Normal during initial rollout as baseline stabilizes (first 7–10 days)
- Adjust `REGRESSION_THRESHOLD` from 0.15 to 0.20 if needed
- Consider excluding known outlier pages (e.g., heavy admin routes)

---

## Privacy & Ethics

- **No personal data:** Only performance metrics and sanitized page path (query params kept but no sensitive keys filtered yet — future: strip known PII keys like `?email=`, `?token=`)
- **No tracking across sites:** Purely first-party, per-page measurement
- **Transparent:** Open-source, self-hosted, no third parties
- **Compliant:** Aligns with GDPR/privacy by minimizing data collected; can add opt-out if needed

---

## Future Enhancements

- [ ] **Bot traffic filtering:** Exclude known crawlers/monitoring agents from submissions
- [ ] **Geo breakdown:** Aggregate by country/region (via IP geolocation — needs careful PII handling)
- [ ] **Device segmentation:** Separate mobile vs desktop vs tablet trends
- [ ] **Connection-aware thresholds:** Adjust thresholds based on `navigator.connection.effectiveType` (e.g., LCP expectations differ on 4G vs WiFi)
- [ ] **A/B experiment overlay:** Tag pages with experiment IDs to measure performance impact
- [ ] **Alert suppression:** Cooldown window after issue creation to prevent spam

---

## Cost & Maintenance

**Cost:** $0.00 — uses GitHub Actions free minutes (~2 min/day), self-hosted storage (~few MB/month)

**Maintenance:**
- Weekly check: Review Telegram summary for anomalies
- Monthly: Verify aggregation script still compatible with web-vitals API
- Quarterly: Prune old raw data beyond 30d if disk pressure arises

---

## Deployment Checklist

- [x] `web-vitals` in devDependencies
- [x] `FieldPerformanceCollector` component created
- [x] API route created at `app/api/field-performance/route.ts`
- [x] Aggregator script created (`automation/field-performance-aggregator.cjs`)
- [x] Workflow file created (`.github/workflows/field-performance-aggregator.yml`)
- [x] Root layout updated to include `<FieldPerformanceCollector />`
- [x] Coordination files updated (`coordination/active-tasks.md`, `HEARTBEAT.md`)
- [x] Commit message: `feat(performance): add autonomous field performance & real user web vitals monitor (#34)`
- [ ] Push to `main` and verify workflow run

---

## Related Guardrails

- **#9 Lighthouse Performance Monitor** — synthetic lab tests (10:00 UTC daily)
- **#11 Error Tracking & Aggregation** — client-side errors
- **#12 API Health & Latency Monitor** — backend endpoint health
- **#26 (future)** — Could cross-reference field performance errors with API latency spikes for root cause correlation

---

**#34 completes the performance monitoring stack:** Lab + field = full observability into user experience.
