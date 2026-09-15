# Zion CEO operations memory (Kleber Garcia Alcatrão)

Last updated: 2026-09-15 ~18:45 UTC (loop 5). Help **carlos@ziontechgroup.com** first on every commercial loop.

## Public-site rule
Success stories and homepage “inbox wins” are sector-level only. Never publish PO numbers, account codes, contract end dates, asset model lists, named logos, or named contract rates on case pages. SKU prices and Stripe links stay on product cards and service pages. **Returning clients: Free Discovery + AI consulting trial (Calendly, $0). New logos: Discovery $99 Stripe.** Live contacts: `docs/ceo-live-contacts.json`. Labels: `docs/ceo-label-policy.md`.

## Open for Carlos (now)
- **Ilha Capital Clicksign**: Camila 18:14 UTC — only Carlos witness signature left. Envelope 20260915. Sign in portal today. Do not re-ping Camila.
- **FUNCATE workstation PDF**: attach today (CIF, 21 ddl, no DIFAL, no prices in body).
- **FAJ minuta**: blocked on Aldo (dantepazzanese.org.br) yes/no for extra storages. Kleber asked 2026-09-15. After yes/no, Carlos issues minuta to Gyovanna.
- **Tech Domain**: Thu 17/09 10:00–10:30 BRT.
- **Caloi**: phone if needed; only pagamentosti@ is a live mailbox.
- **Cooper backup**: Paulo asked interest; wait for model/capacity; Carlos prices. Do not invent tape prices. Do not resend garbled Parceria mail to Leonel.
- **Inbound Free Discovery CCs (2026-09-15)**: CODERP Camila, PRODAM Wesley, BANESE Emily, SJC Joana, PRODEMGE compras, Suzano Jonas. Carlos owns any PDF.

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
- Do not mix sales into the SKY/DIRECTV PO thread.
- Do not send generic AI-audit pitches to Intersoftkk (John).
- Do not resend Caloi 550 boxes (imanso/vsjardim/jcampos/mrabela).
- Do not resend garbled “Parceria” AI mail to Cooper Leonel.

## Gmail label model (keep visible)
- CEO/1-Action Required (Label_967, red)
- CEO/2-Replied (Label_965, green)
- CEO/3-Noise Trashed (Label_966, gray, show if unread)
- Zion/Carlos (Label_968, blue) — anything Carlos needs
- Zion/Won (Label_969, green)
- Zion/Legal (Label_970, purple)
- Zion/24x7-Contracts (Label_971, orange)
- Zion/Archive-Agents (Label_972, hidden) — nest leftover agent/archive labels here
- 🔴 1. Unanswered RFQ (Label_5006635053068921286)
- LICITACAO, Zion Grow/Action, Zion/Finance, Zion/Keep, Client, Meetings, !RENEWABLE'S, Needs Kleber

## Cloudflare Workers Builds
Dashboard must set `SKIP_DEPENDENCY_INSTALL=true`. Workers Builds ignores wrangler `[build]` and otherwise npm-ci’s Next/Storybook (20 min timeout). wrangler.toml: `no_bundle = true`, assets `./public`. GitHub workflow `cloudflare-workers-static.yml` dry-runs wrangler without npm ci. Gmail `create_filter` is 403 (settings scope).

## Calendar
- Rohit Singh (Cockroach Labs) Discovery: Tue 2026-09-22 13:00 ET / 14:00 BRT — already confirmed. Do not resend.
- Tech Domain Ali Naqi: Thu 2026-09-17 10:00–10:30 BRT.

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
