# Zion email automations

Last audited: 2026-09-11 (Kleber inbox + continuous agent).

## Continuous loop (what runs every ~20 minutes)

Three layers, **live send on** (max 5 per run; noise/GitHub/Grok never sent):

| Layer | How | What it does |
| --- | --- | --- |
| GitHub Actions | `.github/workflows/zion-continuous-agent.yml` cron `12,32,52 * * * *` + push to `main` | Tests + `email_autopilot.py` with `ZION_EMAIL_SEND_ENABLED=1`. Needs secret `GOG_TOKENS_JSON` for Gmail. |
| Termux / Hermes | `bash scripts/run-zion-continuous-agent.sh` | **Script-only** (no LLM). Send defaults **on**. |
| This cloud agent / Grok | Gmail send + classifier | Same skip list: never reply to Grok/GitHub/newsletters. |

```bash
python3 automation/tests/test_email_autopilot.py
python3 automation/scripts/email_autopilot.py --max 25 --hot-max 8
bash scripts/run-zion-continuous-agent.sh
```

Live send is **on**: `ZION_EMAIL_SEND_ENABLED=1`, cap `ZION_EMAIL_MAX_SENDS=5`. Cooldown 7 days per thread. GitHub/Grok/newsletters/security never send.

Live Gmail in Actions still needs repo secret **`GOG_TOKENS_JSON`**. Without it the job writes memory/content only.

Sent 2026-09-11 (not drafts): Clara ticket 1039168 and Fergus Discovery follow-up.

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
| Clara `meajuda@clara.com.br` ticket **1039168** | Partnership received 2026-09-10 | Follow-up **SENT** 2026-09-11 |
| Fergus Martin `fmartin@ilha.capital` | Discovery accepted 10 Sep 16:00 BRT, **PAGO $99** | `success_win`; post-Discovery follow-up **SENT** 2026-09-11 |
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
| Clara + Fergus follow-ups | **SENT** 2026-09-11 — wait for their reply |

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
