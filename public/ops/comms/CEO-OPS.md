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
1. FAJ minuta — STOP extra mail. Carlos 18 Sep 16:00 BRT (1a0b5e4855e96af9): proposta já encaminhada ao cliente; cancelar mensagem extra neste trial. Confirmed internally to Carlos+commercial (1a0b5f2dae4c7ca3). Do **not** mail Gyovanna / FAJ / Dante again. Carlos owns the minuta (vence 07/10). Instant Client Sender OFF.
2. FUNCATE PDF to Paulo Blotto on the live thread.
3. Agilize Praia Digital Imóveis ticket #2423990 (3 competências) — PIX / contract risk. Amount stays off this public page. Victoria 18 Sep 15:40 BRT: “Entendido! Aguardamos o seu retorno.” No Reply-All this tick (Unique/pay is Carlos). Do not nag. Checkout https://checkout.agilize.com.br/faturas/41c96ab5-fcaf-4a9f-5cf1-4e43592ce08d. Unique da Praia Digital NÃO cobre Zion Comércio CNPJ 08.933.804/0001-55 — Carlos confirma se contrata Unique separado. Sem pré-venda/WhatsApp. Carlos clicks pay.
4. Clicksign Ilha envelope 20260915 — Carlos is missing witness.
5. Crypto.com BRL withdraw/convert before 25/10.
6. HPE Gen11 SKU list / R760XA PO for Diego (IT Creations). Do not guess SKUs.

WAIT: Carlos reactivation wave 22:48–22:59 UTC already sent (Cosentino / Hamburg / Curacao / Techsub / TQI / Unicamp / Don Paco) — do **not** clone · Clicksign Ilha NDA still Carlos (1a0b6b53006c208e) · HeyGen Sam 22:53 UTC labeled Meetings — do not reply · Microsoft bounce on 1a0b6b8d279e9fd2 labeled System/Bounces — do not re-mail · Altinex 22:44 UTC new-thread SENT copies 1a0b6b0fe6725767 (Hammad) + 1a0b6b102c0c2475 (Malik) already sent — do **not** clone, do not invent FE, do not add Discovery on this live ticket · Altinex internal 1a0b69dd4ab15719 (22:23 UTC Kleber→Carlos+SDM) already sent — do **not** nag again this calendar day · Agilize Victoria 18 Sep 15:40 BRT ticket #2423990 — “Entendido, aguardamos retorno”; WAIT Carlos Unique/pay (do not nag; amounts off this page) · HeyGen John Dahlem Fri 18 Sep 14:00–14:30 BRT (Meet yqf-pnuu-ipv) — window ended 17:30 UTC; Kleber attended. Read.ai report + Sam auto-route labeled Meetings (do not reply; do not publish amounts) · Elastic ticket 02151891 (do not mail admin@partners.elastic.co) · TDS Ron T7-2 alternative vs T8-4 — Carlos confirms FC 16/32 and QLogic/Emulex (supplier price stays off this page) · Altinex Hammad 18 Sep 21:35 UTC (1a0b671f3d51455a): FE details needed TODAY for Zeltiq site access — Monday 22 Sep too late. Reply-All 1a0b67bf946f0268: no invented FE name; Carlos+SDM post Pleasanton name/contact today. Pleasanton 23 Sep 10:00 AM LT still locked; Cincinnati 3941/5000 two visits week of 28 Sep. Carlos named FE/rates · Tacladders Archana waiting city/ZIP · LD NFs 95/96 baixa · TechDomain Field Services Mon 21 Sep 20:00 BRT · TeslerLab Tue 22 Sep 09:00 BRT · OMC Zoom Wed 23 Sep 10:00 · Microsoft Sergio recap 18 Sep 16:51 UTC (7-3HOQQ35Y4B) — receipt confirmed Reply-All 1a0b577e6ec9053e; up to 3 partner intros; no Copilot buy; Carlos evaluates · Suzano Coupa 6800-GT0-00007 — Carlos already mailed Andrielly 18 Sep 14:57 UTC (do not nag) · SSNUS Alan Veloz 18 Sep 20:00 UTC off-market HPE SSD/memory snapshot (1a0b61b422dab3d0) — labeled Carlos/Action; no RFQ (Carlos owns HPE SKUs; supplier list stays off this page) · FGV HPC SEDE — Carlos resent Edson+Felipe 18 Sep 17:09 BRT (1a0b623491233c76) after grupo.infra.app bounce; do **not** Reply-All; no Discovery (FGV Won) · ASSEFAZ José Roberto OOO until 06/10 (1a0b6509b3fb0178) — HARD SKIP, do not mail; Carlos owns NetApp · Carlos → sergioramos1 HP DL380 Gen10 disco (1a0b64e0739df2ac) — already sent; do not clone · Carlos → Erick Mendes Park Place meeting 22/09 or 23/09 10–12 BRT (1a0b65afc67bab98 / thread 1a0b6586bd423666) — already sent; do not clone · Carlos → kleber.silva@zoomtech.com.br + ofinirg@gmail.com Telefônica DC -48V urgente (1a0b65afa2072182 / 1a0b6586dd8b5bc0) — already sent; do not clone.

Pulse on main still v2 (git-commit log.json) — failing non-fast-forward. Fix is merge PR #71365 Pulse v3.4 (no git writes). Cloudflare Workers Builds: ziontechgroup is dashboard off-PR — ignore.

HubSpot live named contacts only — IDs live on #71361, not here.

## Agent lanes (2026-09-18 20:00 -03) — RUNNING only
Do not leave work claimed on IDLE bots. Harper / Lucas / Benjamin / Quel / Rocket / Carol remain IDLE — released. Protocol flipped RUNNING this tick — Pulse merge-watch is back on Protocol. Hermes CHECK-IN is a clone; watch-only URL HEAD; unload launchd; no STATUS.md to main.

- Protocol (RUNNING https://cursor.com/agents/bc-027ecb16-8fa7-4098-ab86-df2a68d9a69b): Pulse #71365 merge-watch. Do **not** merge. Hermes STATUS.md take-theirs only.
- Comms (RUNNING https://cursor.com/agents/bc-246a34f6-0e79-42a9-857b-324a9170e678): CEO-ops + mail. Catalog.js already on the PR. EN LinkedIn DRAFT holds until 19 Sep. Instant Client Sender OFF. Carlos reactivation wave 22:48–22:59 UTC (Cosentino / Hamburg / Curacao / Techsub / TQI / Unicamp / Don Paco / Clicksign) already sent — do **not** clone. Altinex WAIT named Pleasanton FE; 22:44 new-thread copies already sent — do not invent, do not Discovery-spam, do not nag. HeyGen Sam auto-route — do not reply. Do **not** merge.
- Grok (ACTIVE on #71361, not this environment): lead/watch only. Do **not** merge.
- Composio (connections, online): Do **not** merge #71365. Kleber merges. Live `https://ziontechgroup.com/assets/js/zion-catalog.js` is still HTTP 404 until Pages. After Kleber merges, curl that URL for HTTP 200 + `Discovery $99`. Slack HEARTBEAT + Gmail labels. Instant Client Sender OFF. Firecrawl credits are 0. Do not restore the old catalog-health must-strings (WhatsApp/CPA). `b7fc6fe` is not the site restore — that is `51aad16` on this PR.
- DONE: homepage titles; cloud-and-automation; Canva square/portrait; catalog.js on the PR (official four SKUs — do not take main `a1e22ca` Telegram/FinOps SKU list or 25% estimator); PT home + `/catalogo/` now mount `#catalog-grid` so catalog.js paints; TDS Ron “Sounds good” WAIT Carlos T7-2 vs T8-4; Altinex two-visit + Pleasanton 10:00 AM LT Reply-All 1a0b584c3468440b; leftover `Field` chrome spelled out + lang-matched; #71365 vs latest main: sitemap union (simple) + STATUS.md left to Hermes (timestamp-only take-theirs) + homepage Catálogo vivo links union (Discovery/Academia/FinOps page; no invented %); main `a37ea311` Pulse rebase-retry git-push is conflicting intent — this PR keeps v3.4 no git writes (`contents: read`); Microsoft Sergio receipt confirmed; Victoria Agilize 15:40 BRT read — no Reply-All (Carlos Unique/pay); Carlos FAJ cancel — no more mail on that trial; FGV HPC bounce reroute is Carlos (do not clone); main `ce477445` case-studies named highlights take-theirs (Kleber authored on main; no prices); Park Place + Telefônica already sent by Carlos (do not clone).
- BLOCKED OPEN: LinkedIn company page (`r_organization_admin`). Kleber merge of #71365. Pulse on main still v2 (failed 18:48 UTC) until that merge.
- Instant Client Sender OFF. Ignore Hermes-Dispatch LANE clones and Watchdog OFFLINE roster.
