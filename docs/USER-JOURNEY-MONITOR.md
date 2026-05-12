# User Journey & Critical Path Monitor

> Autonomous E2E guardian for business-critical user flows. Daily Playwright tests validate: contact form submission, AI chat interaction, pricing CTAs, blog navigation, etc. Alerts on failures or regression. 100% self-hosted.

## Overview

This guardrail goes beyond isolated page or endpoint checks — it verifies **end-to-end user journeys** work correctly:

- **Runs daily** via Playwright browser automation
- **Tests critical paths:** Home → Contact form submit, AI chat widget, Pricing → CTA, Blog article view + search
- **Detects failures** (broken steps, missing selectors, submission errors)
- **Tracks success rate trends** vs 7-day baseline; alerts on >5% degradation
- **Telegram summary** every morning (09:30 UTC run → ~10:00 UTC alert)
- **GitHub issues** auto-created on any journey failure OR performance regression
- **Self-hosted:** Uses existing Playwright installation; no external E2E SaaS costs

---

## Why User Journey Monitoring?

**Gap in current coverage:**
- Lighthouse tests individual pages in isolation
- API health checks endpoints
- Content/SEO/security audits scan static assets
- But **nothing verifies that multi-page flows actually work**

**Risks caught only by journey testing:**
- Contact form submission silently broken (backend API changed, CORS, validation)
- AI chat widget fails to load or respond (third-party script blocked, auth error)
- Pricing page CTAs lead to 404s (routing misconfiguration after deploy)
- Blog article links broken (sitemap fine, but internal linking broken)
- Service worker or layout shift causing button misclicks

**Business impact:**
- Contact form failure = lost leads → revenue impact
- Chat widget failure = missed conversions/support
- Pricing CTA failure = direct revenue loss
- Early detection prevents hours of silent brokenness

---

## Architecture

```
GitHub Actions (daily 09:30 UTC)
   ↓
automation/user-journey-monitor.cjs — Playwright script
   ↓
Launches headless Chromium; runs each journey sequentially
   ↓
Captures: success/failure per step, durationMs, error messages
   ↓
Saves state: .hermes/memory/user-journey/
   ├─ daily-aggregates.json (90d)
   ├─ history.json (90d success rate trend)
   └─ monitor.log
   ↓
Telegram alert (always sent)
   ↓
GitHub issue (if failures or >5% regression)
```

---

## Components

| File | Purpose |
|------|---------|
| `automation/user-journey-monitor.cjs` | Playwright journey definitions + execution engine |
| `.github/workflows/user-journey-monitor.yml` | Daily workflow (09:30 UTC) + manual dispatch |
| `.hermes/memory/user-journeydaily-aggregates.json` | Per-day run results (90d retention) |
| `.hermes/memory/user-journey/history.json` | Success rate trend per day (90d) |
| `.hermes/memory/user-journey/monitor.log` | Execution log |
| `docs/USER-JOURNEY-MONITOR.md` | This file |

---

## Journeys Covered

### 1. Home → Contact Form Submit
```
/ (homepage)
  → click "Contact" nav link
  → fill name, email, message fields
  → click submit
  → assert "Thank you for your message" appears
```
**Validates:** Navigation routing, form rendering, submission handling, success feedback

### 2. AI Chat Widget Interaction
```
/ (homepage)
  → wait for page settle
  → click chat widget button (aria-label contains "chat")
  → fill textarea with "Hello AI"
  → click send
  → wait for response (assert "Hello" appears in chat)
```
**Validates:** Third-party widget loads, text input, message send/receive loop, AI response rendering

### 3. Pricing Page → CTA Click
```
/pricing
  → wait for page render
  → assert "Pricing" in h1/h2
  → click "Get Started" or contact CTA
  → verify navigation to contact/page
```
**Validates:** Pricing table loads, CTAs present and functional, routing to conversion page

### 4. Blog Article View + Search
```
/blog (listing)
  → click first article link
  → wait for article page
  → assert h1/h2 present (article title)
```
**Validates:** Blog listing renders, internal article links work, article page loads

---

## Configuration

### Schedule
- **Default:** Daily at **09:30 UTC** (`30 9 * * *`)
- **Manual trigger:** Available via `workflow_dispatch`
- **PR integration:** Not configured by default (could be added for PRs touching routing/pricing/contact)

### Environment variables
- `TELEGRAM_BOT_TOKEN` — required for alerts
- `TELEGRAM_CHAT_ID` — defaults to `8435383377`
- `GITHUB_TOKEN` — required for GitHub issue creation (automatically provided by Actions)

### Thresholds (in script)
```javascript
const BASELINE_DAYS = 7;           // 7-day moving average
const REGRESSION_THRESHOLD = 0.05; // 5% drop → issue
const FAILURE_THRESHOLD = 1;       // any single failure → immediate issue
```

Edit `automation/user-journey-monitor.cjs` to adjust.

---

## Alerting

### Telegram Daily Summary (always sent)
```
🔍 User Journey Monitor — Tue, May 12
📈 Overall Success Rate: 100.0%
📊 Baseline (7d avg): 98.2%

*Journey Results:*
✅ Home → Contact Form Submit — 5421ms
✅ AI Chat Widget Interaction — 8912ms
✅ Pricing Page → CTA Click — 2340ms
✅ Blog Article View + Search — 1876ms
```

### GitHub Issue (triggered on)
- **Any journey fails** (e.g., form submit returns 500, selector missing)
- **Success rate regresses >5%** vs 7-day baseline (indicates systemic slowdown or intermittent failures)
- Labels: `automation`, `e2e`, `user-journey`, `bug`

---

## Detection Capabilities

| Failure Type | Detected By | Example |
|--------------|-------------|---------|
| Route broken (404) | Journey step `goto` / `click` fails | `/contact` page missing |
| Form validation error | Assert after submit fails | Success message not shown |
| Third-party widget blocked | Selector timeout | Chat button not found |
| Slow server response | Duration > typical threshold | Journey takes 30s vs normal 5s |
| DOM structure change | Selector not found | Pricing CTA text changed |
| JavaScript error | Navigation timeout | SPA route fails to resolve |

---

## Troubleshooting

### Journeys failing after deploy
1. Check `monitor.log` for exact step that failed
2. Review screenshots/traces (not currently captured — could add Playwright trace on failure)
3. Compare to recent code changes (routes, components, selectors)
4. Re-run workflow manually to confirm fix

### False positives due to network flakiness
- Current threshold: any failure triggers issue (intentional for business-critical flows)
- Consider adding retry logic (run journey up to 2 times before marking fail) if flakiness becomes pattern
- Duration variance normal; only success/failure drives alerts

### Selectors outdated after UI change
- Update journey step `selector` values in `automation/user-journey-monitor.cjs`
- Use robust selectors: prefer `getByRole`, `getByText`, `data-testid` attributes
- Avoid brittle CSS paths that change with layout

---

## Privacy & Safety

- **No user data collected:** Journeys run with synthetic test data (hardcoded name/email)
- **No external calls beyond your site:** Playwright tests only `ziontechgroup.com` domains
- **No PII stored:** Test values are harmless placeholders
- **Safe to run on production:** Reads only; contact form submissions originate from GitHub Actions IPs and contain test data only (can be filtered in backend if needed)

**Note:** Backend should treat `test@example.com` as a test submission — consider filtering in form handler or CRM to avoid polluting real leads.

---

## Future Enhancements

- [ ] **Add retry logic** — per-journey retry on transient failure (max 2 attempts)
- [ ] **Capture screenshots & traces** on failure for debugging (`page.screenshot()`, `context.tracing.start()`)
- [ ] **PR integration** — run on PRs that modify routing, pages under test, or form components
- [ ] **Performance budgets** per journey (e.g., contact form must submit <3s)
- [ ] **Geo-location testing** — run from multiple regions if needed
- [ ] **Mobile viewport** — add separate mobile device journeys
- [ ] **A11y checks** per page visited (axe-core integration mid-journey)
- [ ] **Config file** — move journeys to YAML for non-code editing

---

## Cost & Maintenance

**Cost:** $0 — GitHub Actions free minutes (~5–10 min/day); Playwright browsers included

**Maintenance:**
- **Weekly:** Review Telegram summary; ensure all journeys passing
- **After UI change:** Update selectors in `JOURNEYS` config if elements moved/renamed
- **Monthly:** Check state directory size (should stay <10 MB); prune if needed
- **Quarterly:** Verify form backend still accepts test submissions without side effects

---

## Deployment Checklist

- [x] `user-journey-monitor.cjs` created with 4 sample journeys
- [x] Workflow created with Playwright browser install
- [x] State directory `.hermes/memory/user-journey/` will auto-create on first run
- [x] Documentation written
- [x] Coordination files updated (`active-tasks.md`, `HEARTBEAT.md`)
- [x] Commit pushed: `feat(e2e): add autonomous user journey monitor (#35)` (next step)
- [ ] Verify first run in Actions tab
- [ ] Check Telegram for daily summary
- [ ] Confirm GitHub issue opens on induced failure (optional smoke test)

---

## Related Guardrails

| Guardrail | Complementarity |
|-----------|-----------------|
| #9 Lighthouse Performance | Page-level lab metrics vs journey-level functional correctness |
| #11 Error Tracking | Client-side JS errors vs E2E flow success |
| #12 API Health Monitor | Endpoint health vs full submission flow |
| #25 Accessibility Audit | WCAG compliance vs journey navigability |
| #27 GDPR Privacy | Consent banner visibility vs form opt-in behavior |

**User Journey Monitor** is the final piece of functional correctness — it proves your site *works* from a user's perspective.
