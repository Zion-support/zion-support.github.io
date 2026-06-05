# Audit Report: zion-app Browser Automation + API Keys
**Date:** 2026-05-31 02:17 GMT-3  
**Scope:** public app surface, local runtime, auth and credential exposure, browser automation via OpenClaw.

---

## 1) Entrypoint / Route Map

### Primary entry
- `/app/page.tsx` — client-side homepage.
- `/app/layout.tsx` — root shell with Navigation, Footer, AccessibilityEnhancer.

### Public reachable routes (static export)
Under `app/`, all routes are statically exported by `next.config.js` (`output: export`).
The compile map includes at least:
- `/`, `/about`, `/services`, `/services/[id]`, `/services/stage`, `/solutions`, `/products`, `/pricing`, `/pricing-calculator`
- `/blog`, `/blog/[slug]`, `/careers`, `/contact`, `/contact/*`, `/privacy`, `/terms`, `/press`, `/testimonials`
- `/partners`, `/search`, `/proposals`, `/proposals/view`, `/proposal-generator`
- `/ai`, `/ai-lab`, `/ai-services`, `/ai/demo`, `/ai/solutions-configurator`, `/ai/url-audit-assistant`
- `/industry-solutions`, `/5g-solutions`, `/blockchain-solutions`, `/service-comparison`, `/services-explorer`
- `/tools/ai-service-router`, `/tools/analytics`, `/tools/health-check`, `/tools/port-scanner`, `/tools/roi-calculator`, `/tools/service-comparison`, `/tools/service-recommender`, `/tools/ssl-checker`? not strictly confirmed under app/tools/*
- `/status`, `/status/service-health`
- `/portal`, `/portal/tickets`, `/portal/billing`, `/portal/kb`, `/portal/projects`
- `/zion-ai-*` feature pages (dozens of subapps mapped from filesystem only)
- `/cookies`

### Deduced searchable index files
- `/app/page.tsx` lists categories and services from `app/data/servicesData`.
- `/data/workspace_index.json` is referenced as a workspace index artifact.
- `/public/api/automation-health.json` and `/public/api/automation-health-history.json` exist.

### Confirmed dead API surface in static export
- `next.config.js` sets `output: export`; Node API routes (app/api/**/route.ts) are not collected unless explicitly rewritten into static files.
- There is no `/app/api/**` or `/app/actions/**` directory.  
- `/app/api-development` is a regular page folder, not an API route collection.

### Important redirect
- `/consultation` → `/contact`, permanent, in `next.config.js`.

---

## 2) Required environment variables and secrets

Sources:
- `/root/.openclaw/workspace/zion-app/.env.example`
- `/root/.openclaw/workspace/zion-app/.env.template`

### App/runtime vars
| Variable | Purpose | Required for build? | Required for runtime auth? |
|---|---|---|---|
| `NODE_ENV` | environment branch | No | No |
| `APP_URL` | site URL | No | No |
| `API_BASE_URL` | API base | No | No |
| `VITE_APP_TITLE` | build-time metadata | No | No |
| `VITE_APP_DESCRIPTION` | build-time metadata | No | No |
| `REACT_APP_GA_TRACKING_ID` | analytics | No | No |

### AI provider keys
| Variable | Notes |
|---|---|
| `OPENAI_API_KEY` | primary paid LLM |
| `ANTHROPIC_API_KEY` | primary paid LLM |
| `GROQ_API_KEY` | free fallback |
| `GEMINI_API_KEY` | free fallback |
| `HUGGINGFACE_HUB_TOKEN` | free fallback |
| `CEREBRAS_API_KEY` | free fallback |
| `CLOUDFLARE_ACCOUNT_ID` | free fallback |
| `CLOUDFLARE_API_TOKEN` | free fallback |
| `DEEPSEEK_API_KEY` | free fallback |
| `MISTRAL_API_KEY` | free fallback |
| `TOGETHER_API_KEY` | free fallback |
| `COHERE_API_KEY` | free fallback |
| `OPENROUTER_API_KEY` | aggregator / client-side fallback |

### Notifications/social/email
| Variable | Notes |
|---|---|
| `TELEGRAM_BOT_TOKEN` | bot integration |
| `LINKEDIN_ACCESS_TOKEN` | automation |
| `IG_ACCESS_TOKEN` | automation |
| `TWITTER_ACCESS_TOKEN` | automation |
| `EMAIL_USER` | automation |
| `EMAIL_PASS` | automation |
| `EMAIL_SERVICE` | automation |

### Client-side exposed values
- `NEXT_PUBLIC_OPENROUTER_API_KEY` is documented in `.env.example` as the client-side fallback. In production static builds this becomes bundled JS unless explicitly excluded.

### Observability/security
| Variable | Notes |
|---|---|
| `SENTRY_DSN` | if enabled |
| `STRIPE_PUBLIC_KEY` / `STRIPE_...` | payment surface |
| `JWT_SECRET`, `ENCRYPTION_KEY` | present in template only |

---

## 3) Auth / credential loading / integration endpoints

### Auth
- No auth framework found in `app/`:
  - No `next-auth`, no `AuthProvider`, no login pages.
- `/app/portal/**` pages are static and do not enforce authentication at route level.
- App-level portal pages reference external routes with `/href`, but no token, cookie, param, or `protected` logic was detected.
- `app/layout.tsx` shows no session/bootstrap auth machinery.

### Credential loading
- `app/page.tsx` and `app/lib`/`components` do not call any protected integration APIs.
- Dependency list includes `nodemailer`, `mailparser`, `imap`, `imapflow`, but `app/api` is absent; no routed handler imports or credential paths were located by keyword search.
- Credentials discovered in repo-adjacent/artifact locations:
  - `/root/.openclaw/workspace/zion-app/credentials_backup.csv`
  - No `.env` checked in; `.env.example` present, `.env` unlikely in repo because missing in file listing.
- SystemOpenClaw credential paths under `/root/.openclaw/credentials` contain Telegram pairing files only; no app `API_KEY` material there.

### Integration endpoints
- Static files only; no server-side route handlers under `app/api/**` or `app/actions/**`.
- Public JSON datasets at `/public/api/automation-health*.json` are static artifacts, not dynamic endpoints.
- Earlier code markers hinting `@send-email`/`/predict-conversion` are from non-app note files and do not bundle into this Next.js app.

### Runtime mode
- Build is configured for static site hosting on Netlify/GitHub Pages.
- `next.config.js` sets `output: export`, which means API routes are invalid unless it was changed retroactively.

---

## 4) Credential exposure findings

### High priority
- `/root/.openclaw/workspace/zion-app/credentials_backup.csv` is at repository root and could leak into deployment or backup transport.
- `.env.template` includes production-looking placeholder docs.  
- Although not confirmed as actual values, numerous client-side `NEXT_PUBLIC_OPENROUTER_API_KEY`-style variables in template increase risk if committed.

### Low priority
- System credentials inside `/root/.openclaw/credentials` are not the app’s origin; limited exposure risk for the web app specifically.

---

## 5) Browser automation findings

### Findings from attempted execution
| Target | Result |
|---|---|
| `git -> /root/.openclaw/workspace` | Blocked by policy: `browser navigation blocked by policy`. |
| Host browser navigation to `http://localhost:3000` | Blocked by policy. |
| Host browser `browser open https://ziontechgroup.com` | Opened tab `t1`. |
| Host browser screenshot of tab | Executed, but screenshot output is not supported in current runtime context; tool returns no image payload here, so no visual confirmation. |
| Localhost not reachable in host browser | No success. Source: the browser tool did bootstrap a tab on the live URL but local navigation attempts were policy-blocked. |

### Public production
- Production URL is `https://ziontechgroup.com`, based on `CNAME`, metadata, and `docs/DEPLOYMENT.md`.
- Successfully opened by browser tool. This means the browser itself is functional on the sandbox side for remote HTTPS; only localhost navigation is blocked in this environment policy.

---

## 6) API key inventory

### Confirmed placeholder keys (owner-provided .env.example)
- `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`
- `GROQ_API_KEY`, `GEMINI_API_KEY`, `HUGGINGFACE_HUB_TOKEN`, `CEREBRAS_API_KEY`
- `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_TOKEN`, `DEEPSEEK_API_KEY`, `MISTRAL_API_KEY`
- `TOGETHER_API_KEY`, `COHERE_API_KEY`, `OPENROUTER_API_KEY`
- `OLLAMA_BASE_URL`, `OLLAMA_MODEL`
- `TELEGRAM_BOT_TOKEN`, `LINKEDIN_ACCESS_TOKEN`, `IG_ACCESS_TOKEN`, `TWITTER_ACCESS_TOKEN`
- `EMAIL_USER`, `EMAIL_PASS`, `EMAIL_SERVICE`
- `REACT_APP_GA_TRACKING_ID`
- `SENTRY_DSN`, `SENTRY_ENVIRONMENT`
- `STRIPE_PUBLIC_KEY`, `STRIPE_...`, `JWT_SECRET`, `ENCRYPTION_KEY`

### Confirmed placeholders from .env.template
- `OPENROUTER_API_KEY`, `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, `TELEGRAM_BOT_TOKEN`
- `JWT_SECRET`, `ENCRYPTION_KEY`
- `GOOGLE_ANALYTICS_ID`, `MIXPANEL_TOKEN`, `SENTRY_DSN`
- `STRIPE_PUBLIC_KEY`, `STRIPE_...`

### Not found as real values
- `NEXT_PUBLIC_OPENROUTER_API_KEY` is referenced as example text (`sk-or-…here`).
- Under `/root/.openclaw/credentials` and `/root/.openclaw/workspace/zion-app`, no file named `.env` was detected.
- No `.env.local`, `.env.production`, `.env.test` found.

### Coverage assessment
- **All values are placeholders.**  
- No evidence of any live key being present in the scanned project tree.  
- No production secret leak was observed inside `.env.*` or bundled source in this audit scope.

---

## 7) App/auth readiness verdict

### Authentication readiness
- **NOT READY for auth flows.**  
  The app has no auth middleware, no client-side auth page, and no confirmed `/api/**` route capable of issuing or validating sessions for the portal.
  `/portal/billing` and `/portal/tickets` are purely static pages at present; exposing them as production dashboards would require real access control.

### API readiness
- **NOT READY for backend-driven browser automation or AI chat integration under the current static export.**  
  Grid/API endpoints are either entirely absent or reduced to static JSON at `/public/api/`.  
  Any AI chat behaviour implied by the repo needs either:
  - Action handlers under `/app/actions` exposed by a page, or
  - Re-enabling Node-backed routes outside `output: export`, or
  - Re-hosting on Netlify Functions / Next.js full build.

### Browser automation
- **PARTIALLY AVAILABLE.**  
  Direct OpenClaw host browser automation can reach the production site.  
  Localhost host browser navigation is blocked in this runtime policy, so local verify/build-browser flows cannot be done via host browser here.

---

## 8) Recommended next steps ordered by dependency

1. **Stop treating portal pages as unauthenticated**
   - Implement real access control for `/portal/*`, especially `/portal/tickets` and `/portal/billing`.
   - Add Next.js middleware for `/portal/**` requiring a provider session.

2. **Resolve API surface before reopening AI integrations**
   - Choose either static-only app or Next.js Node runtime.
   - If AI chat and webhook integrations are needed, switch back from `output: export` to `next start` or add Netlify Function equivalents.

3. **Rotate and harden secrets before exposing the actual client-side key**
   - Never ship a real key in `NEXT_PUBLIC_*`.
   - Replace client-side LLM fallback with a server proxy that can gate and rotate keys.

4. **Move `credentials_backup.csv` out of the repo**
   - Rename it, place it in admin-only storage, or scrub secret columns.

5. **Fix local browser automation workflow**
   - If local UI testing is required, run browser tasks inside `sandbox` target or a subagent profile that allows localhost navigation.
   - Alternatively deploy the built export folder to a staging subtree and automate via live domain.

6. **Document missing local envs**
   - Create a verified list of which keys are actually active in production (even if partially redacted from source).  
   - The inventory above shows placeholders only; an operator confirmation pass will turn this from a placeholder inventory into a coverage triplet.

---

## 9) Appendix: Scripted evidence snippets

- `next.config.js` confirms `output: export`.
- `package.json` dependencies show AI/email libs but no server router.
- `/credentials_backup.csv` exists at repo root.
- `docs/DEPLOYMENT.md` confirms Netlify/static export model.
- No route handlers found under `/app/api` or `/app/actions`.
- System credentials contain only Telegram material.

---

*End of audit.*
