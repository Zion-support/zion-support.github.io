# Autonomous Error Tracking & Aggregation

> Client-side JavaScript error collector with hourly aggregation, GitHub issue creation, and Telegram alerts. Fully self-hosted — no third-party services.

## Overview

Uncaught exceptions and console errors in production are now captured automatically. This system:

- **Injects** a lightweight client script into every page
- **Captures**: `window.onerror`, `unhandledrejection`, `console.error`
- **Posts** to `/api/errors` endpoint (Next.js serverless)
- **Aggregates** hourly → groups by fingerprint (message + stack + location)
- **Alerts** via Telegram for new/critical errors
- **Creates** GitHub issues when new error types appear or frequency spikes >50%

---

## Architecture

```
┌─────────────────┐
│  Client (browser)│
│  error-tracker.js│
│  - captures errors│
│  - sendBeacon →  │
└────────┬────────┘
         │
         ▼
┌─────────────────────────────────┐
│  Next.js API Route: /api/errors │
│  - receives JSON payload        │
│  - appends to daily .jsonl file │
└────────┬────────────────────────┘
         │
         ▼
┌─────────────────────────────────┐
│  Hourly Aggregator (Actions)    │
│  - reads today's .jsonl         │
│  - groups by fingerprint        │
│  - compares to historical count │
│  - detects new/spike            │
│  → Telegram alert               │
│  → GitHub issue (if threshold)  │
└─────────────────────────────────┘
```

---

## Components

| File | Purpose |
|------|---------|
| `public/error-tracker.js` | Client-side capture library (~1KB) |
| `app/components/ErrorTracker.tsx` | React wrapper that injects the script |
| `app/layout.tsx` | Root layout — includes `<ErrorTracker />` |
| `app/api/errors/route.ts` | Next.js API endpoint — stores errors in `automation/reports/errors/` |
| `automation/error-aggregator.cjs` | Hourly aggregator — groups, alerts, creates issues |
| `.github/workflows/error-aggregator.yml` | Runs hourly + manual trigger |

---

## Data Flow

1. **Error occurs** in user's browser (uncaught exception, promise rejection, or console.error)
2. **Tracker captures** details: message, stack, type, timestamp, URL, user agent
3. **Fingerprint generated** — deterministic key: `message::firstStackLine::location`
4. **POST to `/api/errors`** via `navigator.sendBeacon` (guaranteed delivery even on page unload)
5. **API appends** to daily JSONL file: `automation/reports/errors/errors-YYYY-MM-DD.jsonl`
6. **Hourly aggregator**:
   - Reads today's JSONL
   - Groups by fingerprint
   - Compares counts to previous day (stored in `.hermes/memory/error-tracker/error-history.json`)
   - Identifies:
     - **New errors** (fingerprint first seen)
     - **Spikes** (>50% increase vs yesterday, and count ≥ 5)
   - For critical (unhandled/promise) or high-count spikes → send Telegram
   - For new errors or significant spikes (count ≥ 10) → create GitHub issue
7. **State persisted** so duplicate issues aren't created for the same fingerprint

---

## Configuration

| Env Var | Default / Required | Purpose |
|---------|-------------------|---------|
| `TELEGRAM_BOT_TOKEN` | Required (when alerting) | Bot token for error alerts |
| `TELEGRAM_CHAT_ID` | `8435383377` | Chat ID for alerts |
| `GITHUB_TOKEN` | Required (when creating issues) | GitHub CLI auth token |

---

## Storage

```
automation/reports/errors/
└── errors-2026-05-12.jsonl   # Raw errors, one JSON per line

.hermes/memory/error-tracker/
├── error-aggregator.log      # Execution logs
├── error-history.json        # Fingerprint → last count/seentime
└── error-issues.json         # Tracks which fingerprints already have GitHub issues
```

---

## GitHub Workflow

**Name:** Error Aggregator  
**Schedule:** Every hour (`0 * * * *`)  
**Timeout:** 10 minutes

**Steps:**
1. Checkout + Node 20 + `npm ci`
2. Run `node automation/error-aggregator.cjs`
3. Upload artifacts (reports + memory state, 30-day retention)

---

## Telegram Alert Format

```
🐛 Runtime Error Alert — May 12, 2026
2 new/spiking error(s) detected:

• [unhandled] Cannot read property 'foo' of undefined
  Count: 15 (new)

• [promise] Uncaught (in promise): TypeError: Invalid config
  Count: 23 (spike)
```

---

## GitHub Issue Format

**Title:** `🚨 Runtime Error — unhandled — 05/12/2026`

**Body includes:**
- Error type, message, fingerprint
- Occurrence count (today)
- Spike indicator if applicable
- Stack trace (first few lines)
- Action guidance: review in production

**Labels:** `automation`, `bug`, `error-tracker`

---

## Thresholds

| Condition | Action |
|-----------|--------|
| New fingerprint (first occurrence) | Logged; Telegram alert if type = unhandled/promise; Issue created if count ≥ 10 |
| Existing fingerprint count increases >50% vs previous day | Flagged as spike; Telegram alert if count > 20; Issue if count ≥ 10 |
| Console.error spam | Captured but no alert unless frequency high (same thresholds) |

---

## Privacy & Safety

- **No PII collected** — stack traces and messages only
- **User agent** stored for debugging context (browser/device)
- **URL captured** — includes path, but no query params by default (stripped in tracker)
- **GDPR compliance** — data stored internally only, no external services
- **Opt-out?** Add `window.ErrorTracker = null` before script loads to disable

---

## Testing Locally

1. Start dev server: `npm run dev`
2. Visit any page
3. Open browser console and trigger:
   ```js
   throw new Error('Test error');
   // or
   Promise.reject(new Error('Test promise rejection'));
   ```
4. Wait a few seconds — error should be sent to `/api/errors`
5. Check `automation/reports/errors/errors-today.jsonl` for new entries
6. Manually run aggregator:
   ```bash
   node automation/error-aggregator.cjs
   ```
   Should log summary and possibly send Telegram if configured.

---

## Troubleshooting

**"Failed to send error"** — Check browser console for CORS or network errors. The endpoint must be accessible from client.

**"No errors in daily file"** — Verify `/api/errors` route deployed. Test with `curl`:
```bash
curl -X POST http://localhost:3000/api/errors \
  -H "Content-Type: application/json" \
  -d '{"errors":[{"message":"test","stack":"test","type":"unhandled"}],"sessionId":"test","url":"http://localhost:3000"}'
```

**Aggregator not creating issues** — Ensure `GITHUB_TOKEN` is set in workflow secrets. Also check the `count >= 10` threshold; lower if needed.

**Telegram not sending** — Verify `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` are set.

**High volume of errors** — Consider adding filtering (ignore known benign errors) or increasing threshold.

---

## Future Enhancements

- **Dashboard UI** (`/admin/errors`) to browse recent errors (protected)
- **Error grouping refinement** (include file name, line number more precisely)
- **Source map deobfuscation** for minified production stacks
- **User session replay** (optional, privacy-conscious)
- **Auto-assign** to GitHub project board based on error type
- **Snooze** — mark issues resolved, stop future issue creation for same fingerprint until reoccurrence

---

*Created: 2026-05-12 — Autonomous implementation via OpenClaw (Task #25)*
