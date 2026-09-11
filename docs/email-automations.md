# Zion email automations

Last audited: 2026-09-11 (Kleber inbox + repo scripts).

## What was broken

1. **Grok “Zion Client Email Agent”** emailed Kleber on every quiet run (`Quiet inbox, no replies needed`). That mail landed in Inbox unread, so the agent spent the next run skipping its own reports. Several runs per day.
2. **Hot follow-up scan** targeted label `!!!!HOT FOLLOW-UP` (~8.6k threads) with no recency cap. Autopilot could queue spam follow-ups.
3. **Classifier** treated GitHub/`ticket`, newsletters, and x.ai mail as “support” or “other” instead of noise. Last run (2026-09-07) created **0 drafts**.
4. **CTA in drafts** pointed at `/discovery/` and Calendly. Live `/discovery/` still serves “This page is temporarily unavailable”. Use **`https://ziontechgroup.com/book/`**.
5. **Send scripts** (`send_cold_outreach_v2.py`, `send_discovery_*.py`, `reply_followup_loop.py`) hardcoded `/Users/miami2/zion.app` and could not run on this repo checkout.
6. Inbox load at audit: ~57k Inbox threads, ~57k unread. Noise: GitHub, Samsung, Bluehost, TikTok, Automailer, PN California WTS, Grok quiet reports.
7. Cold outreach was sending to generic locals (`ti@`, `contact@`) and dumping mailer-daemon failures back into Inbox.

## What still needs a human

| Item | Why |
| --- | --- |
| Stripe “unrecognized device” (2026-09-11) | Security — confirm it was Kleber |
| Goto voicemail from (13) 98137-0461 | Real inbound call |
| TikTok Shop verification code | Auth — do not auto-archive |
| Kenlo contract `64709043508` | Waiting, do not nag daily |
| Elastic Partner DD questionnaire | Sent 2026-09-10; complete in Smartsheet |
| Copa Energia / DirecTV / ASSEFAZ / Transportes RJ RFQs | Open, facts needed |

Do **not** live-send cold outreach from autopilot. `ZION_EMAIL_SEND_ENABLED` stays `0` unless Kleber turns it on.

## Repo autopilot

```bash
python3 automation/scripts/email_autopilot.py --max 25 --hot-max 8
python3 automation/tests/test_email_autopilot.py
```

Default is dry-run: writes `automation/email_memory/latest_summary.json` and `outreach_monitor/processed/pending_ceo_drafts.jsonl`.

## Gmail labels created this pass

- `Zion/Grok-Automations` (`Label_959`)
- `Zion/Finance` (`Label_960`)
- `Zion/Leads` (`Label_961`)

Filter catalog: `automation/gmail_filters.json`.

Gmail’s filter-create API is denied for this connection (HTTP 403). Labels were created and recent noise was archived by thread. Paste the catalog into Gmail Settings → Filters so new mail is sorted automatically.

## Paste into Grok: Zion Client Email Agent

Replace the current task prompt with:

```
You are Zion Client Email Agent for Kleber Garcia Alcatrão (kleber@ziontechgroup.com), CEO of Zion Tech Group.

GOAL: Reply only to real humans (clients, inbound leads, partners, Airbnb guests). Max 5 sends per run.

QUIET RUNS: do not email kleber@. No “Quiet inbox” / “No new replies” report. Log to Notion if needed and exit.

SKIP forever (never reply, never report as Needs Kleber):
- noreply@x.ai / grok.com (including this agent's own status mail)
- GitHub, GitLab, Cloudflare, StackBlitz bots
- Newsletters and promos (Samsung, Bluehost, TikTok, NVIDIA GTC, Automailer, LinkedIn, Agilize, Dell, etc.)
- Mailer-daemon / undeliverable from cold outreach
- Nibo / Contábil Vieira accounting PDFs
- PN California and other WTS hardware offers to luiz@
- TikTok/social “someone posted” notifications

KEEP for Kleber (do not auto-reply):
- Stripe/Google security alerts
- Goto voicemail
- Verification codes
- Unanswered RFQ that needs a price or SOW he has not approved

When you DO send:
- Match language (PT/ES/EN)
- Short, one CTA: https://ziontechgroup.com/book/  (not /discovery/ — that URL is a stub on Pages)
- Include SAIR / STOP opt-out
- Email kleber@ ONLY if you sent ≥1 message or something needs his facts
- Subject must be “SENT (n/5) …” or “NEEDS KLEBER: …” — never “Quiet …”
```

## Paste into Grok: weekday Discovery send nudge

```
Weekday Discovery nudge for Zion Tech Group.

Check HTTP + body (not just status) for:
- https://ziontechgroup.com/book/     (canonical booking — must mention Calendly or Discovery)
- https://ziontechgroup.com/plans/
- https://ziontechgroup.com/discovery/ (if body contains “temporarily unavailable”, treat as FAIL even if 200)

If /book/ is healthy: prepare a 5-lead paste pack with CTA https://ziontechgroup.com/book/ and Stripe $99 https://buy.stripe.com/3cIdRa6FO5dt0D53hm4ZG05

Do not email Kleber unless a money page failed the body check or you actually queued sends.
Do not create Stripe products.
Do not send cold mail yourself.
```
