# Gmail label policy (Zion CEO)

Keep the sidebar small. Nested agent labels stay hidden. Filters skip the inbox for noise when settings scope allows (create_filter currently 403).

## Visible (operating set)

| Label | Use |
| --- | --- |
| CEO/1-Action Required | Needs Kleber or Carlos this week |
| CEO/2-Replied | We sent a CEO reply |
| CEO/3-Noise Trashed | Show if unread only |
| Zion/Carlos | Anything Carlos must sign, quote, or chase |
| Zion/Won | Closed commercial |
| Zion/Legal | NDA / Clicksign / contracts |
| Zion/24x7-Contracts | FAJ, Caloi, ASSEFAZ-class coverage |
| Zion/Action | Internal commercial follow-through |
| Zion/Keep | Do not trash (finance, HAB, Agilize) |
| Zion/Finance | Collections |
| 🔴 1. Unanswered RFQ | Genuine RFQs only |
| 📅 Meetings | Calendar |
| LICITACAO | Public-sector bids |
| Client | Named customers |
| Zion Grow/Action | Partner / grow queue |
| Needs Kleber | Escalation |

## Hidden (do not delete — high volume or duplicates)

Nest under `Zion/Archive-Agents/` and hide: Hot-Follow-Up, No-Hurry, Legacy-Urgent, CEO-Replied-old, Action-Required-old, To-Follow-Up, Notification-old, Marketing, Newsletters-old, Promotion, SaneArchive, SaneCC, Auto, Zapier, Auto-Replied, Human-Review, GitHub, Grow-Promo, Bulk-Archived, Grow/Partners.

`Zion/Finance/Cobranca-2` is the old COBRANCA 2 label (hidden).

Parent `Zion` and `Zion Grow` stay as nest roots even at 0 threads.

## Deleted

Empty agent labels (Routing-*, Language/*, Predictive-Reply, Needs-Response, Intent-unclear, PRIORITY clones, Zion CI/CD empty, Grok-Automations empty).

## Filters (apply when Gmail settings scope allows — currently 403)

- `from:semrush.com` → skip inbox, label CEO/3-Noise
- `from:notifications@github.com` → skip inbox, label CEO/3-Noise
- `from:falecom@portaldecompraspublicas.com.br` → skip inbox, label CEO/3-Noise (keep LICITACAO on real RFQs only)
- `from:carlos@ziontechgroup.com to:kleber@ziontechgroup.com` → Zion/Carlos + CEO/1-Action Required
- `from:(agilize.com.br OR riviera OR bradescosaude OR e-pass)` → Zion/Keep, never trash

Never auto-trash Finance, LICITACAO RFQs, FAJ, Clicksign, or Client.
