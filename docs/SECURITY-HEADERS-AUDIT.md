# Autonomous Security Headers & HTTPS Enforcement Auditor

> Monitors production site for security headers, HTTPS redirects, mixed content, and cookie security flags. Self-hosted.

## Overview

HTTP security compliance is now checked automatically. This system:

- **Probes production** (`APP_URL`) for security headers
- **Validates HTTPS enforcement** (HTTP → HTTPS redirect)
- **Checks critical headers:**
  - `Strict-Transport-Security` (HSTS) — max-age ≥ 1 year, includeSubDomains
  - `Content-Security-Policy` (CSP) — present and non-empty
  - `X-Frame-Options` — DENY or SAMEORIGIN
  - `X-Content-Type-Options` — nosniff
  - `Referrer-Policy` — strict origin policies
  - `Permissions-Policy` — recommended
- **Detects mixed content** — any `http://` resources on HTTPS pages
- **Audits cookies** — `Secure`, `HttpOnly`, `SameSite` flags
- **Alerts** — Telegram daily summary, GitHub issues for critical failures
- **History tracking** — 90-day trend per header
- **Fully autonomous** — all local HTTP requests; no external API

---

## Architecture

```
┌──────────────────────────────┐
│ GitHub Actions               │
│ Daily 18:00 UTC             │
└──────────┬───────────────────┘
           │
           ▼
┌────────────────────────────────────────────┐
│ automation/security-headers-audit.cjs       │
│  1. HTTP GET BASE_URL (follow redirects)   │
│  2. Inspect response headers               │
│  3. Check HTTPS enforcement:               │
│     - HTTP root → should 301/302 → HTTPS   │
│  4. Validate each security header:         │
│     - Presence                              │
│     - Value constraints (HSTS max-age,      │
│       CSP length, X-Frame-Options values)   │
│  5. Check Set-Cookie flags                  │
│  6. Parse HTML for mixed content (http://) │
│  7. Compare to baseline (expected config)  │
│  8. Alert + GitHub issue                    │
└──────────┬───────────────────────────────────┘
           │
           ▼
    ┌──────┴───────┐
    │              │
    ▼              ▼
┌──────────────┐ ┌─────────────────────┐
│ Telegram     │ │ GitHub Issue        │
│ Daily Summary│ │ (critical failures) │
│              │ │                     │
│ 📊 Header   │ │ ❌ Missing HSTS     │
│ status      │ │ ❌ CSP missing      │
│ 🔐 Mixed    │ │ ❌ No HTTPS redirect│
│ content count│ │                    │
└──────────────┘ └─────────────────────┘
           │
           ▼
┌────────────────────────────────────────────┐
│ State persisted                             │
│ .hermes/memory/security-headers/            │
│  - history.json (90-day per-date snapshots)│
│  - latest-report.json                       │
│  - security-audit.log                       │
└────────────────────────────────────────────┘
```

---

## Components

| File | Purpose |
|------|---------|
| `automation/security-headers-audit.cjs` | HTTP probe + header validator + mixed content scanner |
| `.github/workflows/security-headers-audit.yml` | Daily workflow |
| `.hermes/memory/security-headers/history.json` | 90-day header history |
| `docs/SECURITY-HEADERS-AUDIT.md` | This file |

---

## What Gets Checked

### 1. HTTPS Enforcement
- **Test:** `http://ziontechgroup.com` → expect 301/302 redirect to `https://`
- **Fail:** No redirect, or redirect to non-HTTPS

### 2. Security Headers

| Header | Required? | Validation |
|--------|-----------|------------|
| `strict-transport-security` | ✅ | `max-age≥31536000` (1 year), `includeSubDomains` present |
| `content-security-policy` | ✅ | Non-empty string; min 20 chars |
| `x-frame-options` | ✅ | `DENY` or `SAMEORIGIN` |
| `x-content-type-options` | ✅ | `nosniff` |
| `x-xss-protection` | ⚠️ | Optional, but if present should be `1; mode=block` |
| `referrer-policy` | ✅ | `no-referrer`, `origin`, `strict-origin`, `strict-origin-when-cross-origin` |
| `permissions-policy` | ⚠️ | Recommended (no strict value check) |

### 3. Cookie Security
- **Secure:** cookie only over HTTPS
- **HttpOnly:** inaccessible to JavaScript (XSS protection)
- **SameSite:** `Strict` or `Lax` (prevents CSRF)

### 4. Mixed Content
- Scans response HTML for `<img src="http://...">`, `<script src="http://...">`, etc.
- Any `http://` URL on an HTTPS page is a **critical** issue

---

## Thresholds & Actions

| Issue | Severity | Action |
|-------|----------|--------|
| HTTP → HTTPS redirect missing | Critical | Daily Telegram alert + GitHub issue |
| HSTS missing or weak max-age | Critical | Daily alert + issue |
| CSP missing | Critical | Daily alert + issue |
| X-Frame-Options missing/invalid | Critical | Daily alert + issue |
| Mixed content found (any) | Critical | Daily alert + issue |
| X-Content-Type-Options missing | Warning | Telegram summary |
| Referrer-Policy missing/invalid | Warning | Telegram summary |
| Cookies missing Secure/HttpOnly/SameSite | Warning | Summary (not critical if no sensitive cookies) |

---

## Report Format

### Telegram Daily Summary
```
🔐 Security Headers & HTTPS Audit — May 12, 2026
Base: https://ziontechgroup.com

✅ HTTPS redirect: working (HTTP 301 → HTTPS)
📋 Security headers: 5/7 OK

🚨 Missing/critical:
- strict-transport-security (weak: max-age=86400)
- content-security-policy (missing)
- x-frame-options (missing)

🔗 Mixed content (HTTP resources): 2
   Examples: http://legacy.example.com/script.js, http://fonts.googleapis.com/...

🍪 Cookie flags: Secure✅ HttpOnly✅ SameSite✅

Details: .hermes/memory/security-headers/latest-report.json
```

### GitHub Issue
**Title:** `🚨 Security Headers & HTTPS Issues — 05/12/2026 — 3 critical`

**Body includes:**
- HTTPS redirect status
- Table of each header with status and actual values
- Mixed content list (if any)
- Cookie flag checklist
- Remedification commands (nginx/Apache/Next.js middleware snippets)
- References to OWASP and Mozilla guidelines

**Labels:** `automation`, `security`, `headers`

---

## Configuration

| Env Var | Default | Notes |
|---------|---------|-------|
| `APP_URL` | `https://ziontechgroup.com` | Production URL to probe |
| `SECURITY_EXPECTED_HEADERS` | (built-in defaults) | JSON override of expected header values |
| `TELEGRAM_BOT_TOKEN` | — | For alerts |
| `TELEGRAM_CHAT_ID` | `8435383377` | |
| `GITHUB_TOKEN` | — | Auto-injected |

**Customizing expected headers:**
```bash
export SECURITY_EXPECTED_HEADERS='{
  "strict-transport-security": { "required": true, "minMaxAge": 31536000, "value": "max-age=31536000; includeSubDomains; preload" },
  "content-security-policy": { "required": true, "minLength": 30 },
  "referrer-policy": { "required": true, "allowed": ["strict-origin", "no-referrer"] }
}'
```

---

## Storage

```
.hermes/memory/security-headers/
├── security-audit.log
├── history.json   # { "2026-05-12": { httpsEnforce: bool, headers: {...}, mixedContentCount: 0 } }
└── latest-report.json
```

---

## GitHub Workflow

| Trigger | Behavior |
|---------|----------|
| `schedule` daily 18:00 UTC | Full security probe, Telegram summary, issue if critical |
| `workflow_dispatch` | Manual run |

---

## Testing Locally

```bash
node automation/security-headers-audit.cjs
```

Expected console output:
```
🔐 Starting Security Headers & HTTPS Audit...
🌐 Checking HTTPS enforcement...
   HTTP → 301 → https://ziontechgroup.com
📥 Fetching homepage headers...
   Headers: 7 checked, 0 missing critical
🔍 Scanning for mixed content...
   Found 0 insecure resource references
✅ Security audit complete
```

**Force failures to test alerts:**
- Temporarily remove `Strict-Transport-Security` from your server config
- Add an `<img src="http://example.com/image.jpg">` to a page
- Run again — should detect issues

---

## Interpreting Results

### Header Statuses
- **`ok`** — present and valid
- **`missing`** — not present (critical if required)
- **`invalid`** — present but value not in allowed set
- **`weak`** — present but below threshold (e.g., HSTS max-age too short)
- **`too_short`** — CSP or similar too short to be effective

### Mixed Content
Any `http://` URL in page HTML is flagged. Examples:
- Images from non-HTTPS CDNs
- Scripts loaded over HTTP
- CSS links with `http://`
- Iframes with `http://`

Fix: Serve everything over HTTPS or use protocol-relative `//` URLs (better: always `https://`).

### Cookie Flags
- **Secure** — ensures cookie only sent over HTTPS
- **HttpOnly** — prevents JavaScript access (XSS mitigation)
- **SameSite** — prevents cross-site request forgery (CSRF)

Expected for all authentication/session cookies.

---

## Remediation Guide

### 1. Enable HTTPS Redirect (nginx example)
```nginx
server {
  listen 80;
  server_name ziontechgroup.com;
  return 301 https://$server_name$request_uri;
}
```

### 2. Add HSTS
```nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
```

### 3. Add CSP
Start with a strict baseline, adjust for needs:
```nginx
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://trusted.cdn.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';" always;
```

### 4. X-Frame-Options
```nginx
add_header X-Frame-Options "DENY" always;
# or SAMEORIGIN if you need iframes from same domain
```

### 5. X-Content-Type-Options
```nginx
add_header X-Content-Type-Options "nosniff" always;
```

### 6. Referrer-Policy
```nginx
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
```

### 7. Set Cookie flags (Express/Next.js)
```javascript
// In your auth or session middleware
res.cookie('session', token, {
  secure: true,      // HTTPS only
  httpOnly: true,    // not accessible via JS
  sameSite: 'strict', // CSRF protection
  maxAge: 7 * 24 * 60 * 60 * 1000,
});
```

### 8. Fix Mixed Content
- Replace `http://` with `https://` in all asset URLs
- If external resource doesn't support HTTPS → remove or replace
- For images: use Next.js `<Image>` with HTTPS URLs

---

## Next.js-Specific Configuration

If using Next.js middleware (recommended):

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Security headers
  response.headers.set('x-frame-options', 'DENY');
  response.headers.set('x-content-type-options', 'nosniff');
  response.headers.set('referrer-policy', 'strict-origin-when-cross-origin');
  response.headers.set('permissions-policy', 'geolocation=(), microphone=(), camera=()');
  
  // CSP
  response.headers.set('content-security-policy', 
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;"
  );

  // HSTS (only on HTTPS)
  if (request.nextUrl.protocol === 'https:') {
    response.headers.set('strict-transport-security', 'max-age=31536000; includeSubDomains; preload');
  }

  return response;
}

export const config = {
  matcher: '/:path*',
};
```

---

## Future Enhancements

- **CSP directive analysis** — parse CSP and flag dangerous `unsafe-inline` or `unsafe-eval`
- **HSTS preload check** — verify domain is in `hstspreload.org` list (could query API)
- **Expect-CT / Expect-Staple** — certificate transparency headers
- **Feature-Policy** deep validation
- **Public key pinning** (deprecated but some legacy)
- **Automated fix PRs** — generate PR to add missing headers via middleware
- **Dashboard view** — `/admin/security` with header history graph
- **Integration with daily digest** — include security score (headers count)
- **Multi-URL scan** — check API endpoints, admin pages individually

---

## Why This Matters

- **XSS mitigation:** CSP + X-XSS-Protection reduce cross-site scripting risk
- **Clickjacking defense:** X-Frame-Options prevents embedding in malicious iframes
- **MIME sniffing protection:** X-Content-Type-Options stops browser MIME confusion
- **HTTPS enforcement:** HSTS + redirect prevent downgrade attacks
- **Cookie theft prevention:** Secure/HttpOnly/SameSite flags
- **Compliance:** Many frameworks (PCI DSS, NIST, GDPR) require these headers
- **User trust:** No "Not Secure" warnings in browser

---

*Created: 2026-05-12 — Autonomous implementation via OpenClaw (Task #31)*
