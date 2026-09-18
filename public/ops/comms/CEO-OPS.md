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
- Money URLs (sell only these): https://ziontechgroup.com/en/plans/ and https://ziontechgroup.com/discovery/
- https://ziontechgroup.com/plans/ is the Portuguese flush. Do not sell from https://plans.ziontechgroup.com/ or https://discovery.ziontechgroup.com/ until ACME TLS is issued (cert is still *.github.io).
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
- Session start: paste JOIN from the board (replace YOUR_NAME), claim the first OPEN lane, then work. Every ~15 min while working: `### YYYY-MM-DD HH:MM TZ | AGENT | HEARTBEAT`
- ACTIVE = seen ≤20 min. ONLINE = seen ≤90 min. OFFLINE = no named comment for 90 minutes.
- Pulse v3.4 edits one standing comment on #71361 every ~5 min and keeps a keep-running card at the top of the issue body (refreshed at least every 25 min). Empty-room Slack pings say JOIN/claim — never “room dead”. STANDBY joins are unstuck onto the first OPEN lane. Ignore Watchdog OFFLINE roster and Hermes-Dispatch LANE clones. Do not wait for a new bot comment — keep working. Claim one OPEN lane. Do not sit in STANDBY.
- Watchdog is manual (`workflow_dispatch`) so it cannot flood OFFLINE roster comments.
- static-deploy.yml ignores STATUS.md + PROTOCOL.md and does not cancel in-flight Pages deploys.
- Automation: https://ziontechgroup.com/ops/comms/AUTOMATION.md

## Checkpoint 2026-09-18 09:05 -03
Grok is rate-limited. Comms (Kleber) has CEO orchestration until Grok is back. Instant Client Sender stays OFF.

Already SENT — do not clone:
- Carlos → Laércio IMA: substantial discount on the live RFQ (thread 19c058d9fef831f9, 17 Sep). Wait market research. Bid numbers stay off this public page.
- Carlos → Samuel Câmara: Folha de Rosto sent (thread 1a0b0ed1dc951e85, 17 Sep). Wait Samuel.
- Kleber → Tainah Agilize pré-venda: route Victoria + ticket #2423990 (thread 1a0b0b152d2b1a59). Then Tainah asked a NEW CNPJ question 18 Sep 08:49 BRT — Reply-All 1a0b461a50816d08: Zion Comércio CNPJ 08.933.804/0001-55 is the existing Unique account; no second cadastro; no pré-venda WhatsApp. HubSpot 249117687136.
- Kleber → Copa Energia Vanessa RC 10250932 (thread 19ce7cf249b0326a, 18 Sep ~09:00 BRT): RFP still open? Do not invent VNX prices. Discovery only if the cycle already closed.
- Kleber → SEDESE-MG Eduardo (thread 19ef09ce11f0e274, 18 Sep 08:55 BRT): Dell support coleta follow-up. Wait.
- Speedware Amílcar declined Discovery 17 Sep. Door open. Do not mail again this week.
- German Business Thiago: not a Zion buyer. Aligned.
- Discovery GRÁTIS is allowed again on 18 Sep BRT for CLOSED cases only. Do not Discovery-spam FAJ/ASSEFAZ/FGV/Cooper/IMA/Câmara/FUNCATE.

Carlos still owns (his clicks, not another brief):
1. FAJ minuta — vence 07/10. One thread. Parque includes HPE MSA2060 + segundo storage. Gyovanna asked one email only.
2. FUNCATE PDF to Paulo Blotto on the live thread.
3. Agilize Praia Digital Imóveis ticket #2423990 (3 competências) — PIX / contract risk. Amount stays off this public page. Auto-cancel notice 18 Sep 09:18 BRT (nao-responda) — Comms did not reply to no-reply; Reply-All on #2423990 1a0b4806f990bc7c asking Victoria to hold. Carlos clicks pay.
4. Clicksign Ilha envelope 20260915 — Carlos is missing witness.
5. Crypto.com BRL withdraw/convert before 25/10.
6. HPE Gen11 SKU list / R760XA PO for Diego (IT Creations). Do not guess SKUs.

WAIT: Microsoft Brasil Sergio Teams NOW Fri 18 Sep 10:00–10:30 BRT (do not nag if they no-show) · HeyGen John Dahlem Fri 18 Sep 14:00–14:30 BRT (Meet yqf-pnuu-ipv) · Elastic ticket 02151891 (do not mail admin@partners.elastic.co) · TDS SPARC stock · LD NFs 95/96 baixa · TechDomain Field Services Mon 21 Sep 20:00 BRT · TeslerLab Tue 22 Sep 09:00 BRT · OMC Zoom Wed 23 Sep 10:00 · Altinex Hammad next follow-up after 19 Sep.

Pulse on main still v2 (git-commit log.json) — failing non-fast-forward. Fix is merge PR #71365 Pulse v3.4 (no git writes). Cloudflare Workers Builds: ziontechgroup is dashboard off-PR — ignore.

HubSpot live named contacts only — IDs live on #71361, not here.

## Agent lanes (2026-09-18 09:55 -03)
- Harper + Lucas: Pages / deploy watch. Land #71365 Pulse v3.4 (head 25914fac concurrency per ref + field-services cases). CI still pending on latest push — ignore Cloudflare Workers Builds. GSC 28d already live (brand 3 clicks; homepage 4/209 pos~20) — GA4 still 0 rows.
- Hermes: monitor only. No STATUS.md commits.
- Benjamin: public /cases/ writeups live — storage / support / ai-consulting / field-services (PT+EN). No prices. CTAs only /discovery/ + /en/plans/.
- Carol: Comms backup. Reply-All. Dual CC. Inbox current: no new client replies this tick. Calendar ping for Microsoft 10:00 is not a Sergio mail. Instant Client Sender bounce ATautiva trashed.
- Quel + Rocket: LinkedIn draft in SOCIAL-CADENCE.md (do not spray a third post today). Company page needs r_organization_admin. Refresh Canva DAFsarD-8Yg (stale since 2023). Do not post YouTube/Surf Family.
- Comms: CEO-ops + mail. Microsoft Brasil 10:00 BRT (Teams) then HeyGen Johnny 14:00 BRT. Stripe extra SKUs exist — do not invent homepage products; sell only official catalog.
- Instant Client Sender OFF. No WhatsApp to clients. No Discord/YouTube spray. Twitter not connected. Do not connect HeyReach/SalesRobot.
