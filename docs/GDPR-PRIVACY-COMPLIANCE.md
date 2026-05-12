# Autonomous GDPR/Privacy Compliance Scanner

> Automated privacy compliance audit: cookie consent, tracking scripts, privacy policy links, form opt-in, data disclosures. Self-hosted.

## Overview

GDPR and privacy compliance are now monitored automatically. This system:

- **Visits pages** (via Playwright) to inspect live DOM
- **Checks for cookie consent banner** presence and visibility
- **Detects tracking scripts** (Google Analytics, Facebook Pixel, Hotjar, etc.) and verifies they only load after consent
- **Verifies privacy policy link** in footer
- **Audits forms** with email inputs — requires explicit unchecked consent checkbox
- **Looks for data collection disclosures** in page text
- **Checks for IP anonymization** in Google Analytics
- **Scores compliance** 0–100
- **Alerts** — Telegram weekly summary, GitHub issues for critical violations
- **Fully autonomous** — no external services

---

## Architecture

```
┌──────────────────────────────┐
│ GitHub Actions               │
│ Weekly Sunday 19:00 UTC      │
│ + On PR (content changes)    │
└──────────┬───────────────────┘
           │
           ▼
┌─────────────────────────────────────────────┐
│ automation/gdpr-privacy-audit.cjs           │
│  1. Fetch sitemap URLs (up to 20)           │
│  2. Launch headless Chromium (Playwright)   │
│  3. For each page:                          │
│     - Check consent banner visibility       │
│     - Scan <script src> for tracking IDs    │
│     - Look for privacy policy link in footer│
│     - Find email forms, check consent checkbox|
│     - Detect data disclosure statements     │
│     - Check for GA IP anonymization         │
│  4. Compute compliance score (0-100)        │
│  5. Flag critical issues                    │
│  6. Alert + Issue                           │
└──────────┬───────────────────────────────────┘
           │
           ▼
    ┌──────┴───────┐
    │              │
    ▼              ▼
┌──────────────┐ ┌─────────────────────┐
│ PR Comment   │ │ Telegram Weekly     │
│ (score)      │ │ Summary             │
│              │ │                     │
│ 🛡️ Score: 72 │ │ 📊 Compliance: 72/100|
│ ⚠️ Issues:   │ │ 🚨 Missing banner:  │
│ - Missing    │ │   5 pages           │
│   consent    │ │                     │
└──────────────┘ └─────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────┐
│ GitHub Issue (if score < 70 or ≥2 critical) │
│ - Missing consent banner                     │
│ - Tracking without consent                  │
│ - No privacy policy link                    │
└─────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────┐
│ State persisted                              │
│ .hermes/memory/gdpr-privacy/                 │
│  - history.json (90-day scores)             │
│  - latest-report.json                        │
│  - privacy-audit.log                         │
└─────────────────────────────────────────────┘
```

---

## Components

| File | Purpose |
|------|---------|
| `automation/gdpr-privacy-audit.cjs` | Playwright-based DOM inspector for privacy compliance |
| `.github/workflows/gdpr-privacy-audit.yml` | Weekly + PR workflow |
| `.hermes/memory/gdpr-privacy/history.json` | 90-day compliance score history |
| `docs/GDPR-PRIVACY-COMPLIANCE.md` | This file |

---

## What Gets Checked

### 1. Cookie Consent Banner
- **Selector check:** Looks for common consent banner elements (`#onetrust-consent-sdk`, `.cookie-banner`, `[aria-label*="cookie"]`, etc.)
- **Visibility:** Banner must be visible (not `display:none` or hidden)
- **Pages checked:** Homepage + key landing pages from sitemap

**Pass:** Banner visible on page  
**Fail:** No banner or hidden

### 2. Tracking Scripts (Pre-Consent)
Detects if these load **before** user consent:

| Tracker | Detection pattern |
|---------|-------------------|
| Google Analytics | `google-analytics.com`, `gtag`, `analytics.js` |
| Google Tag Manager | `googletagmanager.com` |
| Facebook Pixel | `facebook.net/fr/`, `fbq(` |
| Hotjar | `hotjar.com` |
| Microsoft Clarity | `clarity.ms` |
| Mixpanel | `mixpanel.com` |
| Segment | `segment.com` |

**Pass:** No tracking scripts, or they load only after consent (via lazy-load or consent manager)  
**Fail:** Tracking scripts present in DOM without consent banner visible

### 3. Privacy Policy Link
- Searches footer for link containing "privacy" in text or URL
- Link must be present and accessible

**Pass:** Privacy link found  
**Fail:** No privacy policy link

### 4. Forms with Personal Data
- Finds `<input type="email">` or inputs with `name="email"`/`placeholder` containing "email"
- Checks for a **consent checkbox** (type=checkbox with name containing "consent" or "marketing")
- **Checkbox must be unchecked by default** (not pre-checked)

**Pass:** Every email form has explicit unchecked consent checkbox  
**Fail:** Email form without checkbox, or checkbox pre-checked (not explicit opt-in)

### 5. Data Collection Disclosure
- Scans page text for phrases like "we collect", "personal data", "third party", "processing of data"
- Must have some disclosure statement visible

**Pass:** Disclosure text present  
**Fail:** No mention of data collection

### 6. IP Anonymization (Google Analytics)
- Checks inline scripts for `anonymize_ip` or `anonymizeIp`
- Recommended for GDPR compliance

**Pass:** IP anonymization enabled  
**Fail:** GA present but no anonymization (warning, not critical)

---

## Compliance Score (0–100)

Weighted sum:

| Component | Weight | Pass condition |
|-----------|--------|----------------|
| Consent banner on key pages | 25 pts | ≥80% pages have visible banner |
| Privacy policy linked | 25 pts | Footer link present on homepage |
| Form explicit opt-in | 25 pts | All email forms have unchecked consent checkbox |
| Tracking blocked pre-consent | 15 pts | No tracking scripts load before consent |
| IP anonymization (if GA used) | 10 pts | `anonymize_ip` detected |

**Interpretation:**
- **90–100:** Fully compliant
- **80–89:** Minor improvements needed
- **70–79:** Some gaps — address within 30 days
- **<70:** Non-compliant — critical risk, fix immediately

---

## Thresholds & Actions

| Condition | Severity | Action |
|-----------|----------|--------|
| No consent banner detected | Critical | Telegram alert + GitHub issue |
| Tracking scripts load without banner | Critical | Telegram alert + GitHub issue |
| No privacy policy link | Critical | Telegram alert + GitHub issue |
| Email form without consent checkbox | Critical | Telegram alert + GitHub issue |
| Consent checkbox pre-checked | Warning | PR comment + weekly summary |
| No data disclosure text | Warning | Weekly summary |
| GA without IP anonymization | Info | Weekly summary |

**GitHub issue triggered when:**
- Compliance score < 70, OR
- ≥2 critical violations found

---

## Telegram Weekly Summary

```
🛡️ GDPR/Privacy Compliance Audit — May 12, 2026
Site: https://ziontechgroup.com

📊 Compliance Score: 72/100

⚠️ Issues found:
• Missing consent banner on 5/20 pages
• No privacy policy link in footer
• 2 email forms lack explicit consent checkbox

🔍 Tracking: scripts detected on 8 pages (should be consent-gated)
📄 Data disclosure present on 12/20 pages

 Remediation: https://github.com/org/repo/issues/123

Details: .hermes/memory/gdpr-privacy/latest-report.json
```

---

## PR Comment

**On PR that might affect privacy:**
```
🛡️ GDPR/Privacy audit — score 72/100

Issues:
- Missing consent banner on affected pages
- Email form without explicit opt-in

See artifact. Fix before merge to maintain compliance.
```

**On clean PR:**
```
✅ GDPR/Privacy audit passed — compliance score 90/100.
```

---

## GitHub Issue Example

**Title:** `🚨 GDPR/Privacy Compliance Issues — 05/12/2026 — 3 critical violations`

**Body includes:**
- Compliance score breakdown
- List of pages with missing banner
- Forms needing consent checkbox
- Missing privacy policy link
- Step-by-step remediation guide
- Links to GDPR Article 7 (consent) and WP29 guidelines

**Labels:** `automation`, `gdpr`, `privacy`, `compliance`

---

## Configuration

| Env Var | Required | Notes |
|---------|---------|-------|
| `APP_URL` | Yes | Production site URL |
| `TELEGRAM_BOT_TOKEN` | For alerts | |
| `TELEGRAM_CHAT_ID` | For alerts | Default `8435383377` |
| `GITHUB_TOKEN` | For issues | Auto-injected |

**Custom consent selectors:** If your site uses a different consent manager, add its CSS selector to `CONSENT_SELECTORS` array in the script (or future env var).

---

## Storage

```
.hermes/memory/gdpr-privacy/
├── privacy-audit.log
├── history.json   # { "2026-05-12": { score, pagesScanned, issues... } }
└── latest-report.json
```

---

## GitHub Workflow

| Trigger | Behavior |
|---------|----------|
| `schedule` weekly (Sun 19:00 UTC) | Full site scan, score, issue if <70 or critical issues |
| `pull_request` (content files) | Runs on PR, comments with score and issues |
| `workflow_dispatch` | Manual run |

---

## Testing Locally

```bash
node automation/gdpr-privacy-audit.cjs
```

Expected output:
```
🔐 Starting GDPR/Privacy Compliance Audit...
📄 Scanning 20 pages from sitemap
🧪 Running Playwright scan...
📊 Compliance score: 85/100
   Banner present: 16/20
   Privacy link: ✅ Yes
   Forms with consent: 3/3
✅ GDPR/Privacy audit complete
```

**To test failures:**
- Temporarily remove privacy link from footer
- Add a tracking script (e.g., GA) without consent manager
- Add an email form without checkbox
- Re-run — should detect issues

---

## Remediation Checklist

### 1. Add Cookie Consent Banner
Use a compliant solution:
- **OneTrust** (enterprise)
- **Cookiebot** (SaaS)
- **Custom React component** that:
  - Appears on first visit
  - Blocks non-essential cookies until accepted
  - Stores consent in `localStorage`
  - Respects "Reject" option

### 2. Privacy Policy Link
```tsx
// In Footer component
<Link href="/privacy-policy" className="footer-link">
  Privacy Policy
</Link>
```
Ensure accessible and visible.

### 3. Form Explicit Opt-In
```tsx
<form>
  <input type="email" name="email" required />
  <label>
    <input type="checkbox" name="marketing_consent" />
    I agree to receive marketing emails
  </label>
  <button type="submit">Subscribe</button>
</form>
```
**Checkbox must NOT be `defaultChecked`**.

### 4. Gate Tracking Scripts
```typescript
// Only load GA after consent
useEffect(() => {
  if (consentGiven) {
    const script = document.createElement('script');
    script.src = 'https://www.google-analytics.com/analytics.js';
    document.head.appendChild(script);
  }
}, [consentGiven]);
```

### 5. Add Data Disclosure
In footer or near forms:
```text
We collect personal data to provide and improve our services. By using our site, you consent to our data practices as described in our Privacy Policy.
```

### 6. Enable IP Anonymization
```javascript
// GA4
gtag('config', 'G-XXXXXX', { 'anonymize_ip': true });

// Universal Analytics
ga('create', 'UA-XXXXX-Y', { 'anonymizeIp': true });
```

---

## Privacy by Design Principles

This audit checks for:

1. **Lawfulness, fairness, transparency** — clear notices, legitimate purpose
2. **Purpose limitation** — data collected only for specified purposes
3. **Data minimization** — only collect what's necessary
4. **Accuracy** — keep data accurate
5. **Storage limitation** — retention policies (not checked here)
6. **Integrity & confidentiality** — security measures (headers, HTTPS)
7. **Accountability** — records of processing (documentation)

---

## Future Enhancements

- **Deep form analysis** — check for data retention notices, right to withdraw consent
- **Cookie inspection** — enumerate actual cookies set before/after consent
- **Third-party data sharing disclosure** — detect mentions of "shared with partners"
- **Right to erasure** — check for "delete my data" mechanism
- **Data portability** — check for data export option
- **Age verification** — for services targeting children (COPPA)
- **Multi-language support** — check disclosures in all supported languages
- **Automated fix suggestions** — generate PR adding missing consent checkbox or privacy link
- **Compliance dashboard** — `/admin/privacy` with score trend, page-by-page breakdown
- **Integration with Cookiebot/OneTrust APIs** — verify actual consent status server-side

---

## Why This Matters

- **Legal risk:** GDPR fines up to €20M or 4% global revenue — automated guardrail prevents oversights
- **User trust:** Transparent privacy practices increase sign-ups and retention
- **Ad ecosystem:** Many ad networks require consent before tracking; non-compliant sites get suspended
- **Enterprise sales:** B2B customers often require GDPR compliance certifications
- **Free & autonomous:** No external privacy counsel needed for basic checks; continuous monitoring

---

*Created: 2026-05-12 — Autonomous implementation via OpenClaw (Task #32)*
