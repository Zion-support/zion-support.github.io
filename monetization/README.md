# Zion Tech Group — Monetization (live)

## Stack (2026 research → decision)

Compared Polar (best for AI usage/meters, MoR), Lemon Squeezy (digital + affiliates, MoR), Rewardful (Stripe affiliates), and Stripe.

**Shipped on Stripe** because Zion already has a live account (`acct_1U8rFeJRA2AketBh`) with Payment Links. Polar remains the follow-on for token-metered APIs. Lemon Squeezy is unnecessary while Stripe Billing works.

## New live SKUs (created 2026-09-11)

| SKU | Amount | Payment Link |
|-----|--------|--------------|
| Prompt Pack | $29 | https://buy.stripe.com/dRmcN6d4ceO30D53hm4ZR0P |
| AI Ops Playbook | $49 | https://buy.stripe.com/bJe6oIggo5dt0D56ty4ZR0O |
| WhatsApp Sales Kit | $79 | https://buy.stripe.com/dRmbJ2aW40Xd85xdW04ZR0Q |
| AI Credits pack | $99 | https://buy.stripe.com/4gM4gAc08cFV85x5pu4ZR0R |
| Kickoff deposit | $1,000 | https://buy.stripe.com/eVq14ofck35ldpRdW04ZR0S |
| AI Ops Desk | $299/mo + 7-day trial | https://buy.stripe.com/cNi28sd4cfS74Tl8BG4ZR0T |
| AI Ops Desk annual | $2,990/yr | https://buy.stripe.com/dRm3cw8NW0XdbhJf044ZR0V |
| Founder Office Hours | $149/mo | https://buy.stripe.com/8x23cw0hqgWb85x3hm4ZR0U |

Promo code **ZIONLAUNCH10** — 10% off first purchase.

## Existing core (unchanged)

- Discovery $99 — https://buy.stripe.com/3cIdRa6FO5dt0D53hm4ZG05
- Consulting $499 — https://buy.stripe.com/4gM14ofck0Xd1H94lq4ZG08
- Starter $2,500 — https://buy.stripe.com/7sY00k7JScFV99Bf044ZG06
- Growth $8,000/mo — https://buy.stripe.com/aFa5kEd4c21h3PhdW04ZG07

## Site routes

- `/store/` — digital kits + credits + deposit
- `/subscribe/` — Ops Desk + Founder Hours (this is not the newsletter)
- `/affiliate/` — 20% referral with `?ref=` → Stripe `client_reference_id`
- `/pricing/` — live buttons only (placeholder `of_demo_*` URLs removed)
- `/payment-success/` — SKU-aware fulfillment
- `/library/*` — digital deliverables

Catalog JSON: `public/data/self-serve-catalog.json`
Checkout JS: `public/assets/js/zion-checkout.js`
