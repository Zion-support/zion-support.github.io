# Zion email automations

Last audited: 2026-09-11 (Kleber inbox + continuous agent).

## Continuous loop (what runs every ~20 minutes)

Three layers, all **draft-only** until Kleber sets `ZION_EMAIL_SEND_ENABLED=1`:

| Layer | How | What it does |
| --- | --- | --- |
| GitHub Actions | `.github/workflows/zion-continuous-agent.yml` cron `12,32,52 * * * *` | Tests + `email_autopilot.py`. Commits memory/content if the run wrote files. Needs secret `GOG_TOKENS_JSON` for live Gmail. |
| Termux / Hermes | `bash scripts/run-zion-continuous-agent.sh` | **Script-only** (no LLM). Avoids `HTTP 400: local is not a valid model ID`. |
| This cloud agent / Grok | Gmail drafts + classifier | Same rules: never auto-send; never reply to Grok/GitHub/newsletters. |

```bash
python3 automation/tests/test_email_autopilot.py
python3 automation/scripts/email_autopilot.py --max 25 --hot-max 8
bash scripts/run-zion-continuous-agent.sh
```

Default is dry-run: Gmail **drafts** (`ZION_EMAIL_GMAIL_DRAFTS=1`), plus:

- `automation/email_memory/latest_summary.json` — last scan counts
- `automation/email_memory/known_deals.json` — Clara, Fergus, Prudential, Kenlo, Elastic
- `automation/email_memory/agent_state.json` — 7-day cooldown so the same thread is not re-drafted
- `automation/email_memory/success_history.jsonl` — wins / RFQs / inbound replies
- `Zion-Tech-Group/MEMORY.md` — block between `<!-- ZION-EMAIL-OPS:BEGIN -->` / `END`
- `automation/content/generated/YYYY-MM-DD-*.md` — rotating service articles
- `outreach_monitor/processed/pending_ceo_drafts.jsonl` — local draft queue

Live Gmail in Actions: store the gog token blob as repo secret **`GOG_TOKENS_JSON`**. Without it, the job still writes content + memory from `known_deals.json` and skips the inbox API.

Do **not** live-send. `ZION_EMAIL_SEND_ENABLED` stays `0` unless Kleber turns it on.

## What was broken

1. **Grok “Zion Client Email Agent”** emailed Kleber on every quiet run (`Quiet inbox, no replies needed`). That mail landed in Inbox unread, so the agent spent the next run skipping its own reports.
2. **Hot follow-up scan** targeted label `!!!!HOT FOLLOW-UP` (~8.6k threads) with no recency cap.
3. **Classifier** treated GitHub/`ticket`, newsletters, and x.ai mail as “support” or “other”.
4. **CTA** used `/discovery/` while that URL was a Pages stub. **`/discovery/` is live again** (Family A + Stripe). Drafts still include **`https://ziontechgroup.com/book/`** as the canonical calendar CTA.
5. **Send scripts** hardcoded `/Users/miami2/zion.app`.
6. Inbox load: ~57k unread. Noise: GitHub, Samsung, Bluehost, TikTok, Automailer, PN California WTS, Grok quiet reports.
7. High-frequency monitor used a hardcoded Termux `REPO` path and counted GitHub/`x.ai` threads as “interest”.

## Commercial memory (do not nag daily)

| Thread / party | Status | Agent action |
| --- | --- | --- |
| Clara `meajuda@clara.com.br` ticket **1039168** | Partnership received 2026-09-10 | Gmail **draft** follow-up (not sent) |
| Fergus Martin `fmartin@ilha.capital` | Discovery accepted 10 Sep 16:00 BRT, **PAGO $99** | Store as `success_win`; Gmail **draft** post-Discovery follow-up |
| Calendly / Google calendar-notification | Same Discovery paid | Store history only — **never reply** to calendar bots |
| Prudential `assistente.cliente@prudential.com` | Partnerships only via Trabalhe Conosco | `needs_human` |
| Kenlo contract `64709043508` | Waiting | `needs_human` |
| Elastic Partner DD | Questionnaire sent 2026-09-10 | `needs_human` (Smartsheet) |
| Zenvia `atendimento@zenvia.com` | Bounce | Store, do not retry |

## What still needs a human

| Item | Why |
| --- | --- |
| Stripe “unrecognized device” (2026-09-11) | Security — confirm it was Kleber |
| Goto voicemail from (13) 98137-0461 | Real inbound call |
| TikTok Shop verification code | Auth — do not auto-archive |
| Kenlo / Elastic / Prudential | Facts or process Kleber owns |
| Copa Energia / DirecTV / ASSEFAZ / Transportes RJ RFQs | Open, facts needed |
| Clara + Fergus Gmail drafts | Review and send from Gmail if the copy is right |

## Gmail labels

- `Zion/Grok-Automations` (`Label_959`)
- `Zion/Finance` (`Label_960`)
- `Zion/Leads` (`Label_961`)

Filter catalog: `automation/gmail_filters.json`. Gmail’s filter-create API is 403 for this connection. Paste the catalog into Gmail Settings → Filters.

## Paste into Grok: Zion Client Email Agent

Replace the current task prompt with:

```
You are Zion Client Email Agent for Kleber Garcia Alcatrão (kleber@ziontechgroup.com), CEO of Zion Tech Group.

GOAL: Reply only to real humans (clients, inbound leads, partners, Airbnb guests). Max 5 sends per run.
Prefer Gmail drafts. Do not send unless Kleber has enabled live send.

QUIET RUNS: do not email kleber@. No “Quiet inbox” / “No new replies” report. Log to Notion if needed and exit.

SKIP forever (never reply, never report as Needs Kleber):
- noreply@x.ai / grok.com (including this agent's own status mail)
- GitHub, GitLab, Cloudflare, StackBlitz, Kilo Code bots
- Newsletters and promos (Samsung, Bluehost, TikTok, NVIDIA GTC, Automailer, LinkedIn, Agilize, Dell, B3, Serasa, VALR, Brevo)
- Mailer-daemon / undeliverable from cold outreach
- Nibo / Contábil Vieira accounting PDFs
- PN California and other WTS hardware offers to luiz@
- TikTok/social “someone posted” notifications
- calendar-notification@ / Calendly bots (store Discovery paid as a win, do not reply)

KEEP for Kleber (do not auto-reply):
- Stripe/Google security alerts
- Goto voicemail
- Verification codes
- Unanswered RFQ that needs a price or SOW he has not approved
- Prudential Trabalhe Conosco / Kenlo waiting contracts

When you DO draft or send:
- Match language (PT/ES/EN)
- CTA: https://ziontechgroup.com/book/  and https://ziontechgroup.com/discovery/ (both live)
- Include SAIR / STOP opt-out
- Email kleber@ ONLY if you sent ≥1 message or something needs his facts
- Subject must be “SENT (n/5) …” or “NEEDS KLEBER: …” — never “Quiet …”
- Store wins (Discovery booked/paid, inbound partnership acks) in automation/email_memory/
```

## Paste into Grok: weekday Discovery send nudge

```
Weekday Discovery nudge for Zion Tech Group.

Check HTTP + body (not just status) for:
- https://ziontechgroup.com/book/     (canonical booking — must mention Calendly or Discovery)
- https://ziontechgroup.com/plans/
- https://ziontechgroup.com/discovery/ (must NOT contain “temporarily unavailable”)

If money pages are healthy: prepare a 5-lead paste pack with CTA https://ziontechgroup.com/book/ and Stripe $99 https://buy.stripe.com/3cIdRa6FO5dt0D53hm4ZG05

Do not email Kleber unless a money page failed the body check or you actually queued sends.
Do not create Stripe products.
Do not send cold mail yourself.
```
