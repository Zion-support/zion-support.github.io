# Zion CEO-ops — standing orders (always on)

Record every durable instruction, reply, and feedback on issue #71361.
Board: https://ziontechgroup.com/ops/comms/
Log: https://github.com/Zion-support/zion-support.github.io/issues/71361

## Help Carlos first
- carlos@ziontechgroup.com is Commercial Director.
- Always CC carlos@ziontechgroup.com AND commercial@ziontechgroup.com on every outgoing email.
- Reply-All. Same thread. Do not start a new thread when one exists.

## Mail rules
- Analyze inbox PLUS all labels, oldest → newest.
- Reply as CEO until threads that need a response are answered.
- One follow-up per silent client per week. If they reply, answer the same day.
- Closed/old cases only: offer Discovery GRÁTIS + 1h AI consulting trial. Do not re-quote old POs/NFs/prices.
- Never invent hardware prices, SLAs, CPF, or contract terms.
- Official public paid menu only: Discovery $99 / Consulting $499 / Starter $2,500 / Growth $8,000/mo.
- Money URLs: https://ziontechgroup.com/en/plans/ and https://ziontechgroup.com/plans/
- Do not sell from https://plans.ziontechgroup.com/ until ACME TLS is issued (cert is still *.github.io).
- Never publish client prices or confidential data on /cases/ or this file.

## HARD SKIP (do not email)
- ALL @caloi.com
- jose.roberto@assefaz.org.br and glauber.arrighi@assefaz.org.br (Carlos owns the open NetApp ticket)
- Bounce list / System/Bounces — includes admin@partners.elastic.co and jeff.chien@stategrid.com.br
- Do not send Discovery to live tickets: FAJ/Gyovanna, ASSEFAZ chamado, FGV Won, Cooper active, IMA RFQ, Câmara TR, FUNCATE PDF
- Do not nag Carlos with a duplicate status brief the same calendar day
- Instant Client Sender stays OFF unless Kleber turns it on

## Labels to keep
CEO/1-Action Required, CEO/2-Replied, CEO/3-Noise Trashed, Zion/Carlos, Zion/Finance, Zion/Legal, Zion/Won, Zion/Keep, Zion/Contracts, Zion/Licitacao, Zion/Meetings, System/Bounces, Zion/Noise
Do not create extra labels.

## Heartbeat / offline
- Session start + every ~15 min: `### YYYY-MM-DD HH:MM TZ | AGENT | HEARTBEAT`
- Offline = no named comment for 90 minutes (watchdog checks every 5 min)
- Watchers: agent-presence-watchdog.yml + Pulse 8f51ca5f + Worker 2ff9fef3
- static-deploy.yml paths-ignores STATUS.md so Hermes Monitor does not cancel Pages (commit e3dc41fb)
- #71361 comments locked at 2500 (last comment 2026-09-25 01:34 UTC). New lanes log on this file and the issue body.

## Checkpoint 2026-09-17 17:26 -03
Already SENT today — do not clone:
- Carlos → Laércio IMA: substantial discount on the live RFQ (thread 19c058d9fef831f9, 17:12 BRT). Wait market research. Bid numbers stay off this public page.
- Carlos → Samuel Câmara: Folha de Rosto sent (thread 1a0b0ed1dc951e85, 16:51 BRT). Wait Samuel.
- Kleber → Tainah Agilize: not pré-venda; route to Victoria + ticket #2423990 (thread 1a0b0b152d2b1a59). Two Zion replies already — no third.
- German Business Thiago: not a Zion buyer. Aligned.
- Discovery cap used (Ledervin) through 18 Sep 2026. Cap date has passed (board patched 2026-10-03). Do not auto-send free Discovery. Closed/old cases still follow mail rules; never re-quote old POs/NFs/prices.

Carlos still owns (his clicks, not another brief):
1. FAJ minuta — vence 07/10. One thread. Parque includes HPE MSA2060 + segundo storage. Gyovanna asked one email only.
2. FUNCATE PDF to Paulo Blotto on the live thread.
3. Agilize Praia Digital Imóveis ticket #2423990 (3 competências) — PIX / contract risk. Amount stays off this public page.
4. Clicksign Ilha envelope 20260915 — Carlos is missing witness.
5. Crypto.com BRL withdraw/convert before 25/10.

WAIT: HeyGen John · Elastic ticket 02151891 (do not mail admin@partners.elastic.co) · TDS stock · Microsoft Sergio Fri 10:00 BRT · LD NFs 95/96 baixa.

HubSpot live named contacts only — IDs live on #71361, not here.

## JEV Growth Strategy (2026-10-02)
- JEV evaluate state: OPTIMIZE (93% confidence)
- Priorities: FIX_BLOCKERS (98%), SERVICE_PAGES (97%), OPTIMIZE_PIPELINE (96%), DIVERSIFY_CHANNELS (80%)
- All API blockers UNLOCKED: Apollo ✅, Hunter.io ✅, Gmail ✅, Stripe ✅
- Service catalog synced at 35,932 services
- 0 new pages generated (catalog fully synced)
- Fernanda leads: 119 outreach emails sent across batches 2-19
- Batches #16-19 pending deduplication outreach
- Wave #12 UK MSPs staged, held pending duplicate-check
- Waves #13-#17 labeled; backlog #10-#17 held
- Kleber sent 8 personalized emails (batches #45/#46) — CC carlos@, commercial@, fernanda@
- Waves #18-19 executed overnight: ~25 emails to Nordics + South Africa MSPs
- Lead batch #99 UK: 10 leads sent, Ireland 6 skipped
- Batch #15 duplicate sends flagged to Carlos & Fernanda
- Inbox triaged: 42 noise trashed, ~59 Carlos copies marked read
- JEV deal decisions: Markham HOLD (100%), TDS requote (84%), Assefaz Plano B (60%), Fernanda wait (74%), HubSpot upgrade (60%)
- Market-verified pricing: R660 $23,299→$32,619, SPARC T8-4 $6,600→$9,240, IBM 43V7070 $9.99-$29.90→TDS $287/$329/$357, FE Bay Area $22.88-$80/hr→$84/hr
- War Room migrated to Notion: Zion War Room — CEO HQ
- API keys sourced from Google Sheet "API KEYS" spreadsheet (ID: 1UMZYaN13T_UdkER2xi7PDMqiNgT8gPBH_3FJ2qrlZq8)

## Dispatch 2026-10-04 04:13 -03 | Hermes-Dispatch | room
### 2026-10-04 04:13 -03 | Hermes-Dispatch | room
Hermes: take this one task. Do not clone Pulse/NightWatch/Helper.

Lane (hour 4 % 5 = 4): room.
Stale live fact: https://ziontechgroup.com/ops/comms/ still says last heartbeat 2026-10-01 18:20 UTC and live status 2026-09-20. Published CEO-OPS.md still showed Dispatch 2026-10-03 19:11; main already had 2026-10-04 02:10 carlos. Patched this file only. index.html not rewritten. static-deploy was not queued and not in progress at dispatch.

- #71361 comment create returned 403 (commenting disabled above 2500 comments; last comment 2026-09-25T01:34:15Z). Lane logged here instead. No client email sent.
- Backup: Lucas. Last HEARTBEAT on #71361 is 2026-09-17 19:29 UTC, older than 90 min. Grok last HEARTBEAT 2026-09-25 01:12 UTC and Harper 2026-09-17 16:40 -03 are also stale. Do not flag Carol/Kilo/Tablet.
- Prior lane: 2026-10-04 02:10 -03 | Hermes-Dispatch | carlos (also 403). Carlos items unchanged: FAJ 07/10, FUNCATE PDF, Agilize #2423990, Clicksign Ilha, Crypto.com before 25/10. Do not nag Carlos.
- Instant Client Sender OFF. Never orange-cloud. Never CREATE apps. DNS. Never colliding CNAME.
- Sell only https://ziontechgroup.com/en/plans/ and https://ziontechgroup.com/discovery/
