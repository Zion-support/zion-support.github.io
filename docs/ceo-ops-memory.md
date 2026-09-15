# Zion CEO operations memory (Kleber Garcia Alcatrão)

Last updated: 2026-09-15 (evening). Help **carlos@ziontechgroup.com** first on every commercial loop.

## Public-site rule
Success stories and homepage “inbox wins” are sector-level only. Never publish PO numbers, account codes, contract end dates, asset model lists, or named contract rates on case pages. SKU prices and Stripe links stay on product cards and service pages. Live contacts: `docs/ceo-live-contacts.json`. Labels: `docs/ceo-label-policy.md`.

## Identity
- CEO: Kleber Garcia Alcatrão — kleber@ziontechgroup.com — +1 302 464 0950
- Commercial Director: Carlos dos Santos Alcatrão — carlos@ziontechgroup.com — +55 11 97614-0810 — +1 646 681 1651
- Legal entity BR: Zion Comércio e Serviços de Informática Ltda — CNPJ 08.933.804/0001-55
- US: 364 E Main St STE 1008, Middletown DE 19709
- Calendly: https://calendly.com/kleber-ziontechgroup
- WhatsApp: +1 302 464 0950
- Stripe live account: acct_1NOurtJPiDPdradq
- Site source of truth: `public/` (GitHub Pages via `scripts/prepare-pages-out.sh`; Cloudflare Workers must stay static, not Next.js)

## Hard rules
- Never invent CPFs. Never put CPF in e-mail. Clicksign collects CPF in the signer flow.
- Never invent TR / hardware / OEM list prices. Point at consulting $499, sourcing $199, bid $350, or Carlos’s PDF.
- Never invent a Clicksign signature. Kleber and Carlos sign in the portal.
- Do not trash personal finance: Agilize, Riviera associação, Santa Bárbara, Bradesco Saúde, E-PASS, HAB.
- Do not trash FAJ / legal / PO threads.

## Gmail label model (keep visible)
- CEO/1-Action Required (Label_967, red)
- CEO/2-Replied (Label_965, green)
- CEO/3-Noise Trashed (Label_966, gray, show if unread)
- Zion/Carlos (Label_968, blue) — anything Carlos needs
- Zion/Won (Label_969, green)
- Zion/Legal (Label_970, purple)
- Zion/24x7-Contracts (Label_971, orange)
- Zion/Archive-Agents (Label_972, hidden) — nest V* / Autonomous-* / Processed-V* here
- 🔴 1. Unanswered RFQ (Label_5006635053068921286)
- LICITACAO, Zion Grow/Action, Zion Grow/Finance, 💰 Finance - Cobrança

## Live Stripe SKUs (livemode)
- Miami RH BH $149.74 — https://buy.stripe.com/eVq6oI7JqetS60j9qlcMM17
- Miami OOH $224.61 — https://buy.stripe.com/9B64gA4xefxWcoHbytcMM18
- Miami 5-pack $748.70 — https://buy.stripe.com/8x23cw6FmfxWcoHaupcMM19
- US L2 weekend $480 — https://buy.stripe.com/3cI4gAe7O71qbkD461cMM1a
- US L2 hourly $60 — https://buy.stripe.com/3cI4gAaVCclK2O75a5cMM1b
- InfoSec Starter $2500 — https://buy.stripe.com/dRm9AUd3K1H61K39qlcMM1c
- China DC $3175/mo — https://buy.stripe.com/8x2eVe6Fm71qfATaupcMM1d
- Workstation consulting $499 — https://buy.stripe.com/eVqeVe4xe1H688rdGBcMM1e
- GPU Cloud LATAM Sprint $2500 — https://buy.stripe.com/dRm3cw2p6gC02O7cCxcMM1f
- Voice AI White-Label $2500 — https://buy.stripe.com/7sY28s6Fm4TicoHdGBcMM1g
- Spare parts sourcing $199 — https://buy.stripe.com/dRmaEYd4c35l85xbNS4ZR1m
- Maintenance 24x7 $990/mo — https://buy.stripe.com/bJedRa0hqbBR71t2di4ZR1l
- Licitação / bid $350 — https://buy.stripe.com/4gM6oIaW4cFV99BcRW4ZR1o
- Discovery $99 — https://buy.stripe.com/8x214o8NW35l5Xp3hm4ZG0b

## Open / won commercial (as of 2026-09-15)
- **Ilha Capital NDA**: Clicksign envelope `20260915 - NDA Ilha Capital x Zion tech.pdf`. Kleber signed. Carlos is witness — must sign in portal. Deadline 15/10/2026. Do not forward token.
- **FAJ (Fundação Adib Jatene)**: vigência até 07/10/2026. Gyovanna wants minuta. Park extras (Buffalo LS441D, MSA2060, Qnap TS-431P) need Rodrigo/Rogerio (dantepazzanese.org.br) yes/no. MSA2060 HDD 14TB already swapped (imported). Thread restored from Trash.
- **FUNCATE workstations**: Carlos has PDF with Zion margin. Paulo/Somatica resent Dell quote to Fabio Pontes. Carlos must attach Zion PDF (CIF, 21 ddl, no DIFAL). No prices in body.
- **Caloi 24x7**: Google 550 on imanso, vsjardim, jcampos, and mrabela. Do not resend those. pagamentosti@caloi.com had no bounce on the same send. Carlos to phone if needed. Historical 2023 invoices SP + Manaus.
- **Park Place**: Erick Mendes / Mathias — reschedule Teams; they sell to us, we also sell Brazil field to them.
- **Tech Domain**: Ali Naqi accepted calendar. Thu 17/09/2026 10:00–10:30 BRT.
- **SKY/DIRECTV EC**: CW2629606 / OCB 4700350631 registered. Won/document complete.
- **China DC Intersoftkk**: Band 2 won at $3,175. Wayne hibbert@ 550 in the past — don’t rely on that mailbox.
- **SEDESE-MG Dell maintenance coleta**: form attached; Carlos fills; use $990/$350/$199 SKUs, no invented parts.
- **HPE DL380 Gen11**: 8SFF P60636-B21 cannot take 3.5" in front cage. 2LFF family P51095-B21 pending QuickSpecs/serial. Do not invent a kit.

## Homepage commercial
`public/index.html` + dual-path landings. Cloudflare `wrangler.toml` must deploy `public/` as static assets (Workers Builds was auto-detecting Next.js).
