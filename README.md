### Operator Reminder Workflow

Automated email nudges to improve activation and engagement based on inactivity and stalled milestones.

#### What it does
- Scheduled or on-demand run
- Queries user activity from Supabase
- Applies conditions:
  - 72h inactivity AND Talent with <3 milestones → onboarding nudge
  - 72h inactivity AND Client posted a job but 0 invites → invite reminder
  - 72h inactivity AND Client viewed talent but 0 quotes → quote nudge
- Generates email via OpenAI (optional) with templates fallback
- Sends via Resend or SendGrid
- Logs to `reminder_log` to prevent repeats during cooldown

#### Setup
1. Copy `.env.example` to `.env` and fill values.
2. Apply SQL (adjust table names if needed):
   - `sql/001_reminder_log.sql`
3. Install deps and run:

```bash
npm i
npm run dev      # dry-run
npm run run      # live (if DRY_RUN is false)
```

CLI flags:
- `--dry-run` force dry mode
- `--limit=50` limit number of users
- `--user-id=<uuid>` run for one user

#### Scheduling
- Cron (e.g., GitHub Actions/Vercel Cron/Supabase Scheduler) to run daily.
- Example crontab (server): `0 13 * * * cd /path && npm run run | ts --no-ts`.

#### Security
- Service Role key kept secret server-side only
- Emails include only name and public info
- Opt-out via `profiles.receive_reminders = false`

#### Deep links
- Talent: `DASHBOARD_DEEP_LINK_TALENT`
- Client: `DASHBOARD_DEEP_LINK_CLIENT`

### Maintenance Commands
- `npm run git:sync` – Advanced git sync
- `npm run automation:cloud` – Run cloud orchestrator locally
- `npm run sitemap` – Regenerate sitemap
- `npm run readme:generate` – Refresh this README

---
This README is auto-generated. Do not edit manually.
## 🤖 Automation Engine

This project includes a comprehensive automation engine with the following features:

### Scheduled Functions
- **homepage_advertiser**: Auto-advertise homepage features and links
- **front-enhancer**: Run front improvements continuously
- **cloud_orchestrator**: Coordinate broader agents and git sync
- **sitemap_runner**: Keep sitemap fresh for SEO
- **marketing-and-features-promo**: Regenerate promos and deep links

### Automation Scripts
- Master automation orchestrator
- Workflow health monitoring
- Dependency health checking
- Performance optimization
- Content generation

### Reports
All automation activities generate detailed reports in the `automation/reports/` directory.

---

**Zion Tech Group** - Innovative Micro SaaS, AI Services & IT Solutions





---
Automation summary: README refreshed 2025-09-04T22:05:10.580Z
