# Gmail label policy (Zion CEO)

Keep the sidebar small. Nested agent labels stay hidden. Filters skip the inbox for noise.

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
| 🟡 5. Waiting On | Ball in their court |
| 📅 Meetings | Calendar |
| LICITACAO | Public-sector bids |
| 💰 Finance - Cobrança | Collections |
| !RENEWABLE'S | Renewals |
| Client | Named customers |
| Zion Grow/Action | Partner / grow queue |
| Zion Grow/Finance | Grow finance |
| Zion Grow/Partners | Partners |

## Hidden (do not delete — high volume or duplicates)

Nest under `Zion/Archive-Agents/` and hide: Hot-Follow-Up, No-Hurry, Legacy-Urgent, CEO-Replied-old, Action-Required-old, To-Follow-Up, Notification-old, plus Marketing, Newsletters, Promotion, SaneArchive, Zapier, Auto-Replied, Human Review, GitHub/Archived.

`Zion/Finance/Cobranca-2` is the old COBRANCA 2 label (hidden).

Visible operating set stays: CEO/1, CEO/2, Zion/Carlos, Won, Legal, 24x7, Action, Keep, Finance, Unanswered RFQ, Meetings, LICITACAO, Cobrança, !RENEWABLE'S, Client, Zion Grow/Action, Zion Grow/Partners, Needs Kleber Input.

## Deleted

Empty agent labels (Routing-*, Language/*, Predictive-Reply, Needs-Response, Intent-unclear, PRIORITY clones, Zion CI/CD empty, Grok-Automations empty). Parent `Zion` and `Zion Grow` stay as nest roots even at 0 threads. `Zion/Archive-Agents` stays as the nest for leftover V*/Autonomous-* names.

## Filters (apply when Gmail settings scope allows)

- `from:semrush.com` → skip inbox, label CEO/3-Noise
- `from:(notifications@github.com OR github.com)` subject bot/PR → skip inbox
- `from:carlos@ziontechgroup.com to:kleber@ziontechgroup.com` → Zion/Carlos + CEO/1-Action Required
- `from:(agilize.com.br OR riviera OR bradescosaude OR e-pass)` → Zion/Keep, never trash

Never auto-trash Finance, LICITACAO, FAJ, Clicksign, or Client.
