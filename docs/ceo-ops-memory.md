# CEO ops memory (Zion Tech Group)

Operational notes for Carlos (`carlos@ziontechgroup.com`) and commercial (`commercial@ziontechgroup.com`). No NF values, no CPF, no client contract prices.

## Mail rules

- CC **carlos@** and **commercial@** on every outbound commercial message.
- Old / closed cases: new idea only — free Discovery + 1h AI/ops trial. Do not re-quote old NFs.
- Max **one follow-up per client per week** if they do not reply. If they reply, answer the same day.
- Inbox zero: reply or trash. Do not leave Zendesk/finance threads unread.
- Do not reply to `no-reply@` (Crypto.com, banks). Forward internally to Carlos.

## Label map (keep small)

| Label | Use |
| --- | --- |
| `CEO/1-Action Required` | Needs a human today (Carlos, SDM, payment). |
| `CEO/2-Replied` | We sent the weekly note or answered. |
| `CEO/3-Noise Trashed` | Promo / newsletter already in Trash. |
| `Zion/Carlos` | Anything Carlos must execute. |
| `Zion/Finance` | Agilize, Nibo, Crypto.com, invoices, checkout. |
| `Zion/Won` | Closed hardware/depot work (e.g. Intergriffes PowerVault). |
| `Zion/Legal` | NDA / Clicksign / contracts. |
| `Zion/24x7-Contracts` | Live coverage (ASSEFAZ NetApp, SKY). |
| `LICITACAO` | Public-sector quotes and editais. |
| `Client` | Named commercial accounts. |
| `Zion/Keep` | Security / domain — not spam. |
| `Zion/Noise` | Bulk promo (hidden). |
| `Zion/Archive-Agents/SaneArchive` | Historical bulk archive. |

Empty `Zion/Leads` deleted 15/09/2026. Do not delete parent `Zion`. Do not put suppliers (WorldTech, DCM) on `Zion/Noise`. Gmail filter API is 403 — trash at the thread until filters can be created in the account UI. Oldest-mail cursor after 12 Sep 2023 promo pass: page token `14775071693864199238`.

## Contacts (CRM)

| Account | People | Mail |
| --- | --- | --- |
| TJMSP | Otávio Fonseca, Anderson Ciocca. **15/09/2026:** parque renovado 2024/2025 para Dell com garantia 5 anos — sem demanda HPE blade agora. Stay in touch only. | otavio.fonseca@tjmsp.jus.br, anderson.ciocca@tjmsp.jus.br |
| FIESP | Samuel Nogueira | samuel.nogueira@fiesp.com.br (cc fpaganini@, jgermano@) |
| Pref. Votorantim | Cristina Dias | adm.ti@votorantim.sp.gov.br |
| CTI Cachoeiro | Thaís / cotações | cti.cotacoes@cachoeiro.es.gov.br |
| State Grid | Felipe Figueiredo (compras). Jeff Chien / Camilla Fischer **bounced 15/09/2026** — do not reuse. | felipe.figueiredo@stategrid.com.br |
| TRT20 | SECT | sect@trt20.jus.br |
| TRT1 | Paulus Marques Pedro (DCTIC) | paulus.marques@trt1.jus.br (cc dctic@trt1.jus.br) |
| FDE-SP | Pesquisa de preços | pesquisapreco@fde.sp.gov.br |
| Cataguá | Adriano Gimenes | adriano.gimenes@catagua.com.br |
| TRE-SP | Milena Monchelato, Fernando Colpas, SEPEC | milena.monchelato@tre-sp.jus.br, fernando.colpas@tre-sp.jus.br, sepec@tre-sp.jus.br |
| SGB | Regina Fátima da C. Siebra (DIINFO) | regina.siebra@sgb.gov.br |
| Acelen | Vânia Bonfim Ferreira, Robson Veras | vania.ferreira.ext@acelen.com, rveras@acelen.com |
| INEA-RJ | Compras | compras@inea.rj.gov.br |
| SEM-RJ | Joana Soares | joana.soares@mulher.rj.gov.br |
| DBS Eng TV | Dino | dino@dbsengtv.com.br |
| BBP Telecom | Márcio Araújo, E. Silva | maraujo@bbptelecom.com.br, esilva@bbptelecom.com.br |
| CIASC | COLIC | colic@ciasc.sc.gov.br (cc laercio@, nholiveira@) — edital OceanStor 5800 V5 previsto outubro/2026 |
| Jiliti | Subcontracting desk (Patricia Clevy left) | subcontracting@jiliti-group.com — no open LATECOERE renewal |
| WorldTech | Cris Dantier (supplier, not client) | cdantier@worldtechsolutions.net — 3PAR 8450 PN 792655-001 quoted 18/02/2026; Compellent 2023 closed |
| DCM | Daniel Pechmann (supplier) | daniel@dcmtech.com.br |
| Agilize | Victoria (Unique) | suporte@agilize.zendesk.com — PRAIA DIGITAL IMOVEIS LTDA CNPJ 66.652.895/0001-57 — **canonical ticket #2423990** (merged #2424853 / #2425417 / #2425418) |
| Intersoftkk | Marcello Rodrigues | marcello.rodrigues@intersoftkk.com (EUC BGV) |
| Crypto.com | Kleber account (BRL Cash) | no-reply@serviceinfo.crypto.com — BRL Cash closes **25 Oct 2026**; withdraw/convert; leftover BRL → USDC |

## Open for Carlos (do not mail the client again this week)

1. **Agilize** — pay R$ 1.350 (competências 07–09/2026) at https://checkout.agilize.com.br/faturas/20a7594f-de28-f25a-ff0f-cc5a5c38db4e ; then Kleber posts the receipt on #2423990. Do not claim payment until the receipt exists.
2. **Crypto.com BRL** — withdraw or convert BRL before 25/10/2026; cancel Limit/Recurring/TWAP on Cash Account. Anti-phishing code 261284.
3. **WorldTech 3PAR** — confirm if we still buy PN 792655-001; do not re-open Compellent HDD 2023 with Cris.
4. **Clicksign Ilha Capital** — Carlos is witness; sign in the portal only.
5. **FUNCATE** — attach the PDF on the existing thread.
6. **Intersoftkk BGV** — SDM status this week; Marcello already acknowledged 14/09.
7. **ASSEFAZ** — open NetApp call is late; diagnose. Do not send another generic restart to José Roberto.
8. **CIASC** — wait for October edital; do not Discovery-pitch over the OceanStor thread.
9. **NB Tech / Suzano nobreaks** — Carlos must confirm brand/model of the 15x 1.2 kVA units.

## Homepage (public)

Official Stripe menu only: Discovery $99, Consulting $499, Starter $2,500, Growth $8,000/mo. Field cases: SKY/DirecTV, ASSEFAZ, Intersoftkk EUC, 3PAR/HPE, tape library/LTO/Compellent/Data Domain, public-sector HPE blade/SAN — no prices, no serials, no NF.

## Skip this week (already mailed 15/09 or last 7 days)

Intergriffes, TRT2, INPI, Eletronuclear, UERJ, Cachoeiro Nilson DELL, ZE Techno Break, Accor, Bottero, ASSEFAZ contratos, PRODEMGE, BANESE, BBP Telecom, Suzano (Jonas/Matheus/Limeira HDD), Cyrela/RJZ, LATECOERE/Jiliti, CIASC OceanStor, plus the 15/09 Discovery batch (TJMSP, FIESP, Votorantim, Cachoeiro CTI, State Grid, TRT20, FDE, Cataguá, TRE-SP, SGB, Acelen, INEA, SEM-RJ, DBS Eng TV, TRT1 Paulus).
