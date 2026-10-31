# Zion Agent Coordination — War Room Status 27 Oct 2026

## Current State Dashboard

### 🔧 Composio Connections
| Service | Status | Notes |
|---------|--------|-------|
| Apollo | ⚠️ DEGRADED | Connected but Gmail token expired (invalid_grant) |
| Gmail | ❌ BLOCKED | 5 accounts expired, cannot send emails |
| HubSpot | 🟡 MIXED | 1 ACTIVE, 34 EXPIRED |
| Stripe | ❌ EXPIRED | Cannot process payments |
| Hunter | ⚠️ NOT CONNECTED | Needs OAuth setup |
| JEV | ⚠️ NOT CONNECTED | Needs OAuth setup |
| Cloudflare | ✅ ACTIVE | 1 connection working |
| Tavily MCP | ✅ ACTIVE | Web search working |
| Geekflare | ✅ ACTIVE | Domain discovery working |

### 🌐 Website Status
| Page | Status | Notes |
|------|--------|-------|
| `/` | ✅ 200 | Homepage OK |
| `/apps/` | ✅ 200 | Apps hub OK |
| `/rfp-readiness/` | ✅ 200 | Just deployed, static HTML |
| `/edital-desk/` | ✅ 200 | Static HTML OK |
| `/discovery/` | ✅ 200 | Free Discovery OK |
| Sitemap | ✅ 21,689 URLs | Rebuilt, removed orphaned 36k |

### 📧 Email Status
| Lead | Draft Status | Next Action |
|------|--------------|-------------|
| Teia Studio | ✅ DRAFTED | Wait for Gmail reconnect |
| Gama IA | ✅ DRAFTED | Wait for Gmail reconnect |
| NEXO INTELLIGENCE | ✅ DRAFTED | Wait for Gmail reconnect |
| Lab019 | ✅ DRAFTED | Wait for Gmail reconnect |
| Agência Rollin | ✅ DRAFTED | Wait for Gmail reconnect |
| YAITEC | ✅ DRAFTED | Wait for Gmail reconnect |
| Deal Group | ✅ DRAFTED | Wait for Gmail reconnect |

### 📋 RFQ Pipeline
| RFQ | Entity | Object | Status |
|-----|--------|--------|--------|
| PE-08.001/2026 | Prodam SP | Videoconferência Yealink | ✅ Analyzed |
| 6017.2026/0011460-9 | Prefeitura SP | Auditoria Nota do Milhão | ✅ Analyzed |
| PNCP 2026/28 | Itatiba SP | Suporte SENTRY IA | ✅ Analyzed |

## Immediate Actions Required

### 🔴 BLOCKERS (Need User Intervention)
1. **Gmail Reconnect** - Open `https://portal.nousresearch.com/connect/-yTqM3ESjMcn` and complete OAuth flow
2. **Stripe Reconnect** - Needed for payment links
3. **Hunter Connect** - Add Hunter.io as a new Composio tool

### 🟡 IN PROGRESS
1. **Brazilian Lead Outreach** - 7 emails drafted, waiting for Gmail
2. **RFQ PDF Generation** - Need to create PDF versions with Zion logo
3. **Apps Network Interlinks** - Multiple apps need interlinking

### 🟢 CAN PROCEED AUTONOMOUSLY
1. Site maintenance and content updates
2. Memory and documentation updates
3. Lead research via Tavily MCP
4. Static HTML page creation

## Agent Instructions for Continuity

### Next Session Startup
1. Check `composio connections list` for service status
2. Verify Notion page "Zion CEO Hands-On Execution" for updated context
3. Check outreach files in `outreach/brazil-2026-10-27/` for draft progress
4. Review RFQ files in `app/rfp-readiness/rfqs/2026-10-27/`

### Email Sending Protocol
```
- Always use: reply-all, keep thread, CC commercial@ziontechgroup.com
- Max 1 follow-up per week if no reply
- Include: Zion pricing + 40% markup
- Require: PO number before dispatching
```

### Site Update Protocol
```
- Build first: npm run build
- Deploy: gh workflow run static-deploy.yml --ref main
- Verify: curl -I <url> returns 200
- Update sitemap.xml if adding new routes
```

### Memory Persistence
- Save to: Notion War Room page
- Save to: ~/.hermes/memory/YYYY-MM-DD.md
- Update: ~/.hermes/MEMORY.md (curated summary)