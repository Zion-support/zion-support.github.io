# Zion CEO ops memory — 15 Sep 2026

Internal runbook for Kleber (CEO) and Carlos (Commercial Director). Do not publish. No invoice values, CPFs, or contract prices in this file.

## Mail rules

- Always CC `carlos@ziontechgroup.com` and `commercial@ziontechgroup.com` on commercial mail.
- One follow-up per client per week if they do not reply. If they reply, answer the same day.
- Closed / old cases: restart with a **new** offer (Free Discovery + 1h AI consulting trial). Never re-quote the old part or PO.
- Live tickets (diagnosis in progress): do **not** send generic Discovery on that thread.

## Gmail labels (keep visible)

| Label | Use |
| --- | --- |
| `CEO/1-Action Required` | Needs Carlos or Kleber this week |
| `CEO/2-Replied` | We answered; waiting on the other side |
| `CEO/3-Noise Trashed` | Confirmed junk / bounce DSN |
| `Zion/Carlos` | Anything that helps Carlos close |
| `Zion/Won` | Delivered work (no $ on the label) |
| `Zion/24x7-Contracts` | Live coverage (ASSEFAZ, FAJ, SKY-class) |
| `Zion/Finance` | Nibo, Agilize, carrier bills |
| `Zion/Legal` | NDA / Clicksign |
| `LICITACAO` | Public-sector bid support |

Hidden (do not delete; they still tag old mail): `Zion` parent nest, `Client`, `Zion/Action`, `Zion/Keep`, `Zion/Noise`, `Zion/RFQ-archive`, Newsletters-old, Airbnb, To-Respond-old, Leads-old, GitHub, SaneCC, Human-Review, Meetings, `System/Bounces`.

Deleted 15 Sep: empty `Zion/Leads`. Empty `1: to respond` may remain if Gmail rejected delete.

Gmail **filter create** needs settings scope — 403 in this agent. Until filters exist, trash Zapier / Wincher / CasaTemporada / Messari / TikTok / WPBeginner / Figma ToS / GitHub bot comments as noise.

## Live this week (Carlos)

1. **Agilize / PRAIA DIGITAL IMOVEIS LTDA** — CNPJ 66.652.895/0001-57. Victoria tickets **#2423990** (canonical) and **#2424853** (same subject). 3 open invoices (competências 07/08/09 2026). Auto-cancel after 3 invoices; she cannot suspend. Checkout: `https://checkout.agilize.com.br/faturas/20a7594f-de28-f25a-ff0f-cc5a5c38db4e`. Signal Victoria **after** payment with the receipt on #2423990. Carlos was mailed twice 15 Sep to pay now. Keep `CEO/1` on the Carlos URGENTE thread until paid.
2. **Clicksign Ilha Capital** — envelope `20260915 - NDA Ilha Capital x Zion tech`. Kleber signed. Carlos is witness — sign in the portal only.
3. **FUNCATE / Somatica** — Paulo Blotto `pauloblotto@somaticabrasil.com` + `comercial@somaticabrasil.com`. Carlos PDF (CIF, 21 ddl, no DIFAL) must go out. Do not paste price in email.
4. **FAJ Saúde** — Gyovanna Dantas, Wesley Santos, Vanessa. Contract extension: yes/no on covered park. No third follow-up this week after 15 Sep asks.
5. **ASSEFAZ** — José Roberto / Glauber Arrighi. ~6-year coverage. Open diagnostic ticket is late. **SDM priority. No commercial restart on the NetApp thread.**
6. **Caloi** — `caloi.com` 550-blocked `imanso@`, `vsjardim@`, `jcampos@`, `mrabela@`. Only `pagamentosti@caloi.com` did not bounce in the 15 Sep batch. Do not retry the 550s.
7. **Park Place** — Erick Mendes / Mathias Pellissari. Conference accepted; waiting 2–3 new slots.
8. **Tech Domain** — Ali Naqi. **Thu 17 Sep 10:00 BRT** Meet `https://meet.google.com/kzm-zsfm-efd` (Carlos + commercial invited). Duplicate event without Carlos cancelled.
9. **Cockroach Labs** — Rohit Singh paid Discovery. **Tue 22 Sep 14:00 BRT** Meet `https://meet.google.com/iwn-nmbs-kxb`.
10. **São Bernardo do Campo** — Waldir Silva `waldir.silva@saobernardo.sp.gov.br` + Jeferson Loredo. Replied **15 Sep**: old Dell/EMC extension aborted; process restarted June 2026 as “Garantia e Manutenção do Data Center”. Kleber already answered same day. **Live. Do not send generic Discovery this week.** Also Claudio/Leonel LTO parts thread last mailed 5 Sep.
11. **FGV** — Live 2026 renewal `SDCOMPRASTIC-6963` (Patrícia / Mauro Faria). Discovery already sent to Mauro 15 Sep. Edson Correia 3PAR last mailed 12 Sep. **Do not third-ping this week.**

## Contacts restarted 15 Sep (Free Discovery + AI trial — new thread)

Do not mail again before **22 Sep** unless they reply. Evening batch (this run) also sent: Vibra, SANASA, TRF1, Câmara SP, Nova Engevix, TRF2, SMSA-BH. Parallel agents also sent Raia Drogasil, SENAI-SP, Wobben, UNICAMP FCM, Denso, Ativa1, Server-on.

| Org | People | Notes |
| --- | --- | --- |
| Intergriffes | André Inocêncio `andre.inocencio@intergriffes.com.br` | Closed LTO PowerVault depot 2023; NF received. |
| Tangará / TGRS | Rodrigo Schossler `rodrigo.schossler@tangarafoods.com.br` | IBM x3550 M4 Estrela/RS 2022 quote. |
| EFD Embalagens Diadema | Adriana Arroyo `adriana@efd.com.br`, Fabio `fmarquetti@efd.com.br` | Dell 24x7 / SSD spare-kit proposals 2020–2023. |
| TRT2 | `aquisicoes-ti@trt2.jus.br` | Substitute mailbox from 2022 medical-leave auto-reply. Do not reopen 11843/2022. |
| Defensoria SP | `orcamento@defensoria.sp.def.br`, `licitacao@defensoria.sp.def.br` | New offer; do not re-quote PA 2022/0011238 EqualLogic battery. |
| APAS | `adriana.pereira@apas.com.br` | Won IBM TS3100 in 2022. `rodrigo.soares@` and `anderson.santos@` **550-blocked** 15 Sep. Do not retry those two. Do not second-mail Adriana this week. |
| Alcoa | Laura Carvalho `laura.carvalho@alcoa.com` | New offer. Lost 2025 hardware RFP; do not re-quote that RFP. |
| Canção Nova | Nildo Silva `nildo.silva@cancaonova.com` | New offer. João Murad declined tape in Jun 2022. |
| SEFAZ-MG | Elisa Lustosa `elisa.lustosa@fazenda.mg.gov.br` | New offer; do not re-quote Quantum iScalar i40. |
| TJPE | Luciano Valença `luciano.valenca@tjpe.jus.br` | New offer; Dell R610/R710/R900 2021 RFQ. |
| AGENERSA | `lcmesquita@agenersa.rj.gov.br` | New offer; Dispensa 02800/2022. |
| Synchro | Compras ADS `compras.ads@synchro.com.br`, Lucas Fernando | Thaís Santos OOO maternity 15 Sep — redirected here. New offer; not the old SSD-case RFQ. |
| Funcional | `emachado@funcionalcorp.com.br` | New offer; not the old storage-disk RFQ. |
| Sicoob | Américo Batista `americo.batista@sicoob.com.br` | New offer to the 2022 AD-SICOOB contact (generic AI blast on 6 Sep went to other mailboxes). |
| Ativa1 | Francisco `francisco@ativa1.com.br` | New offer; not the old SAS kit quote. Thread `1a0a6d44d6c57290`. |
| Server-on | Michael Pereira `michael.pereira@server-on.com.br` | New offer; not the old LTO6 drive quote. Thread `1a0a6d471651341c`. |
| Vibra Energia | Daniel Bahiense `dbahiense@vibraenergia.com.br`, Renato `rpalmeida@vibraenergia.com.br`, Michel Torres `mtorres@vibraenergia.com.br` | New offer; **do not** re-quote 2022 IBM HMC / x3550 motherboard repair (delivered — anonymized on `/cases/`). Thread `1a0a6d925b1af0ac`. |
| SANASA | Tatiane Paiva `tatiane.paiva@sanasa.com.br` | New offer; not orçamento 2022/670. Also known: Renan Costa, Maury Brasca (older). Thread `1a0a6d928e5ef2c9`. |
| TRF1 | Rafael Moraes `rafael.moraes@trf1.jus.br`, Luiz Costa `luiz.costa@trf1.jus.br` | New offer; not Huawei RAS 2023 bid. Thread `1a0a6d92b4bab7fc`. |
| Câmara Municipal de São Paulo | Denis Moreira `denismoreira@saopaulo.sp.leg.br` | New offer; not 2022 TI support quote. **Not** Câmara Santos. Thread `1a0a6d9b486a1e79`. |
| Nova Engevix | Marcos Maciel `marcos.maciel@novaengevix.com.br` | New offer after delivered repair (CNPJ moved to Florianópolis). Thread `1a0a6d9b8fe80b62`. |
| TRF2 | `compras@trf2.jus.br` | New offer; not IBM hardware support 2020. Thread `1a0a6d9bba9e8dce`. |
| SMSA-BH / PBH | Marcus Vinícius `marcuspbh@gmail.com`, `nucleoinvestimentosmsa@pbh.gov.br` | New offer; not nobreak/network RFQ. Thread `1a0a6da730dae0ab`. |
| Raia Drogasil | Allan Ribeiro `alribeiro@rd.com.br` | Parallel agent; not 2022 Field Service RFP. |
| SENAI-SP | Fábio Castro `fabio.castro@sp.senai.br` | Parallel agent; not old storage NF. |
| Wobben | `infoit@wobben.com.br`, Alessandra Theodoro `alessandra.theodoro@wobben.com.br` | Parallel agent; field contract known. |
| UNICAMP FCM | Aline `absilva@unicamp.br`, `compras@fcm.unicamp.br` | Parallel agent; P2000 process closed 2024 with other vendor. |
| Denso | Jaclinton Silva `jaclinton.silva@denso-ts.it`, Marcel Mesquita `marcel.mesquita@denso-ts.it` | Parallel agent; not old server coverage addendum. |

## Do not restart / do not mail again this week

- Metodista — contract rescinded (Carlos).
- Parts Carlos already refused (“estou fora”).
- Otávio Fonseca TJMSP — SAN HPE follow-up already this week.
- Josilene Souza IMA — OceanStor follow-up 13 Sep.
- Câmara Santos — mailed 14 Sep; wait until **21 Sep**.
- CGDF Michelle Santiago — mailed 14 Sep; wait until **21 Sep**.
- Copa Energia — Discovery/RFQ mail 5 Sep; Leonardo Nakashima OOO until **21 Sep**; Amauri Custodio paternity until **28 Sep**. Next mail after they return.
- INPI — Daniele redirected to `compras@inpi.gov.br` in 2022; last follow-up **14 Sep**. Wait until 21 Sep.
- Anyone who already received Discovery on 15 Sep (CODERP Camila `crprieto@coderp.ribeiraopreto.sp.gov.br`, PRODAM, BANESE, SJC, Suzano including Valdir Soldera, PRODEMGE, ACSP, BBP, Bottero, TV Iguaçu, Don Paco, Zoom, Unicamp, Accor certificate thread, FGV Mauro, plus the 15 Sep evening batch above).
- PGE-SP `pge-apoiodsat2@sp.gov.br` — last mailed **13 Sep**. Wait until **20 Sep**.
- GVS Pedro Cavalcanti `pedro.cavalcanti@gvs.com` — last mailed **13 Sep**. Wait until **20 Sep**.
- IPSOS Dell TL4000 — Carlos closed (“não vamos mais perder tempo”); charge diagnostic only. Do **not** send Discovery.
- Ricardo (`ricardo.cgid@gmail.com`) LTO6 diagnostic-fee dispute 2023 — closed billing, not a Discovery restart.
- Otávio Fonseca TJMSP — **declined 15 Sep** (park renewed Dell 5yr). Kleber already acknowledged. Do not restart.
- Speedware / Amílcar — live: schedule 3PAR 8200 FGV (proposal already with Carlos). DL380 cage closed. Carlos was mailed 15 Sep 20:44. **Do not third-ping Carlos tonight.**
- State Grid `jeff.chien@` and `camilla.fischer@` — bounced 15 Sep. Felipe Figueiredo already mailed. Do not retry the 550s.

## Bounces / dead mailboxes

- `marlene@figwal.com.br` — 550 user unknown.
- Several `@caloi.com` — Google 550 blocked.
- Don Paco Felipe / Marisa — left the company; Cesar / Gislene / Thays used instead.
- `rodrigo.soares@apas.com.br` — 550 blocked 15 Sep.
- `anderson.santos@apas.com.br` — 550 blocked 15 Sep.
- `lcmesquita@agenersa.rj.gov.br` — address not found 15 Sep. Do not retry that mailbox.
- `jeff.chien@stategrid.com.br` / `camilla.fischer@stategrid.com.br` — mailbox does not exist / mail flow rule. Use Felipe Figueiredo only.

Gmail **filter create** still 403 (settings scope). Deleted empty `Zion/Leads` (Label_979). Visible set remains CEO/1–3 + Zion/Carlos, Won, 24x7, Finance, Legal, LICITACAO. Inbox empty as of 15 Sep ~20:55 UTC.

Public site: anonymized **energy-sector IBM HMC / x3550 motherboard repair** card on `/`, `/cases/`, `/success-stories/` (no Vibra name, no prices). Static `/zion-email-automation/` describes commercial mail ops and sells only the four official SKUs.

## Public site

Official SKUs only: Discovery $99 / Consulting $499 / Starter $2,500 / Growth $8,000/mo. Stripe links live on `/` and `/plans/`. `/cases/` is anonymized — no client names, POs, or prices.

Cloudflare Workers Builds must serve `public/` via `wrangler.toml` + `src/index.js` (ASSETS). `npm run build` is `bash scripts/cf-static-build.sh` (not Next). Dashboard **MUST** set build variable `SKIP_DEPENDENCY_INSTALL=true` — wrangler `[vars]` is runtime only. The GitHub check `Workers Builds: ziontechgroup` is the Cloudflare GitHub App; it currently fails in 0s on **main** as well as PR branches (dashboard/API, not missing wrangler.toml). Never deploy a stub worker. GitHub Action `wrangler-static` dry-run is the repo-controlled check.
