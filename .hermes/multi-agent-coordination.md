# Shared Task Board — Zion Tech Group Multi-Agent
> Source of truth for all 6 bots. Update on status change.
> Location: ~/.hermes/multi-agent-coordination.md (synced by @Kilo)
> Last updated: 2026-06-13T03:00:00-03:00

## Bot Roster
| Bot | Role | Status | Current Task |
|-----|------|--------|-------------|
| @windows_carol_bot | 🖥️ DevOps & Infrastructure | 🟢 Active | CI/CD workflows, wave integration, accessibility |
| @Kilo_openclaw_kleber_bot | 🧠 Intelligence & Orchestration | 🟢 Active | Coordination lead, quality audits |
| @tablet_kleber_bot | 📱 Content & Research | 🟢 Active | Wave research, content creation |
| @Windows_quel_bot | 🔧 Code & Implementation | 🔵 Available | Site quality improvements |
| @Rocket_Kleber_bot | 🚀 Integration & Delivery | 🔵 Available | Build/deploy automation |
| @OWL | 🦉 Wave Integration & Deploy | 🟢 Active | Wave integration, dashboard, link fixes |

## Active Tasks (P0)
None — all clear ✅

## In Progress (P1)
| ID | Task | Owner | Status |
|-----|------|-------|--------|
| P1-2 | Site quality pass — thin pages, empty benefits | @Windows_quel | ⚠️ STALE >72h — needs kickstart |
| P1-5 | Wave 210 integration | @tablet + @OWL | 🔬 Researched — needs integration |

## Backlog (P2) — Prioritized for Delegation
| ID | Task | Owner | Notes |
|-----|------|-------|-------|
| B1 | Wave 211 research | @tablet | Next wave after 210 — find 5 new services |
| B2 | Wave 210 integration | @OWL | PostgreSQL, Nextcloud, Jellyfin, Terraform, Appwrite |
| B3 | CI/CD pipeline hardening | @Rocket | Optimize deploy workflow |
| B4 | Site quality pass — thin pages | @Windows_quel | Enrich thin service pages |
| B5 | Service page auto-generation | @tablet | Automated via postbuild |
| B6 | Thin page content enrichment | @Kilo | Ongoing audits |
| B7 | Site navigation/design improvements | @Windows_quel | Reorganize nav, improve layout |
| B8 | Agent self-improvement plan | @Kilo | Review learning log, update skills |
| B9 | GitHub auth for Actions triage | @windows_carol | Needs gh auth on remote |

## Blocked
| ID | Task | What's Needed |
|-----|------|---------------|
| X1 | Email responder live | Kleber: Gmail app password |
| X2 | GitHub Actions triage | Kleber: gh auth on remote machine |
| X3 | CI/CD deploy completing | Deploy runs timing out — need to investigate timeout config |

## Wave Integration Status
| Wave | Services | Status |
|------|----------|--------|
| 174-209 | ~790 services | ✅ Integrated |
| **210** | **5 services** | **🔬 Researched — PostgreSQL, Nextcloud, Jellyfin, Terraform, Appwrite. Awaiting integration** |
| **Total** | **~795 services** | **✅ Pushed — CI/CD building** |

## Schema Rules (MUST FOLLOW)
1. **Category values**: always lowercase (`ai`, `micro-saas`, `it`, `security`, `cloud`, `data`, `automation`)
2. **Service interface**: define locally in wave file OR import from servicesData — both work, but local interface is preferred to avoid circular dep
3. **Required fields**: `id`, `title`, `description`, `features[]`, `benefits[]`, `pricing`, `contactInfo`, `icon`, `href`, `category`, `industry`
4. **Optional fields**: `popular?`, `stage?: 'published' | 'beta' | 'planned'`
5. **Contact info**: use `website: 'https://ziontechgroup.com'` for consistency
6. **Always include features AND benefits** — service detail page crashes without them
7. **CRLF check**: ensure wave files use LF line endings, not CRLF (causes SWC wasm compiler crash on Node v26)

## Site State
- **Build**: ✅ CI/CD deployed
- **Type-check**: ✅ Clean
- **Services**: ~795 in servicesData.ts (waves 174-210)
- **Site**: 200 OK — https://ziontechgroup.com
- **Dashboard**: ✅ 200 OK — /dashboard/ live with v5
- **Deep crawl**: ✅ 15/15 pages OK, 41/41 internal links OK
- **Sitemap**: ⚠️ Stale — 599 URLs (missing wave 209+210 service detail pages)
- **Wave 209 pages**: ❌ All 5 return 404 (Kafka, Meilisearch, Plane, Playwright, Kong Gateway) — not in sitemap
- **Wave 210 pages**: ❌ All 5 return 404 (PostgreSQL, Nextcloud, Jellyfin, Terraform, Appwrite) — not in sitemap
- **Root cause**: Sitemap not regenerated since wave 209+210 integration. Needs fresh `next build` to regenerate.
- **Cron jobs**: 4 active (link-monitor, org-health, wave-research, email-readiness)
- **⚡ ALL AGENTS: Check this dashboard when restarted** — review task board, update status, pick up queued tasks
- **Ops View**: Fleet status, wave integration grid, task board, delegation log with category filters, system metrics, cron job health, quick links
- **Client View**: Public-facing metrics, agent fleet showcase, recent activity feed, wave progress grid, CTA to configurator
- **Data**: Update BOT_ROSTER, DELEGATION_LOG, ALL_TASKS, WAVE_STATUS in AgentDashboard.tsx when status changes
- **Public monitoring page**: /agents-monitoring — always accessible, no auth needed
- **Floating agent widget**: Bottom-right on ALL pages — shows live agent count, click to expand
- **Footer links**: "📊 Agent Monitoring" in Services + Company columns
- **Homepage banner**: "This Website is Built by AI Agents" — between hero and quiz sections

## Delegation Log (recent)
| Time | Bot | Action | Result |
|------|-----|--------|--------|
| 2026-06-13 03:00 | @Kilo | ORGANIZE #6 | Rebalanced tasks. Wave 210 → @OWL. Wave 211 research → @tablet. Quality pass → @Windows_quel. CI/CD → @Rocket. |
| 2026-06-13 02:00 | @OWL | Wave 210 integration | 5 new services: PostgreSQL, Nextcloud, Jellyfin, Terraform, Appwrite. 5 new categories. Pushed and rebased. |
| 2026-06-13 01:30 | @OWL | Sitemap config fix | Added missing next-sitemap.config.cjs. Dashboard v5 + homepage banner now live. |
| 2026-06-13 01:00 | @OWL | Dashboard v5 + homepage banner | Tabbed interface, system metrics, category breakdown, agent uptime. Ops + Client views. |
| 2026-06-13 00:00 | @tablet | Wave 210 research | 5 new services: PostgreSQL, Nextcloud, Jellyfin, Terraform, Appwrite |
| 2026-06-12 21:15 | @OWL | CI/CD CHECK | ❌ ALL "Deploy on Push" runs cancelled at 20min timeout. |
| 2026-06-12 07:00 | @Kilo | ORGANIZE | Fleet health check. Site 200 OK. Rebalanced tasks. |

## Communication Protocol
1. **Read this file at session start** — all bots
2. **Update on status change** — don't wait
3. **Format:** `[DONE/BLOCKED/PROGRESS/OFFERING] — description`
4. **Channel:** Zion Agents group for coordination, DMs for task assignment
5. **@Kilo** maintains this file, but any bot can append to Delegation Log

## Fleet Coordination Notes
- **Carol force-pushes frequently** — always fetch+reset before adding new waves
- **Wave files get deleted** by Carol's force-pushes — re-create and re-apply imports each time
- **Build takes 10-15+ min** locally due to memory pressure — CI/CD is ONLY deploy path
- **Node v26 ESM issue** with CJS postbuild scripts — GitHub Actions uses Node 20 (works fine)
- **SWC wasm compiler** chokes on CRLF line endings — always convert to LF
- **Service detail page** requires features[] and benefits[] — crashes without them
- **@Kilo** should pull --rebase before any coord doc update (Carol may have pushed)
- **Delegation rules**: @tablet=research/content, @Windows_quel=code quality, @Rocket=CI/CD, @Carol=infra, @Kilo=coordination, @OWL=wave integration
- **⚠️ CI/CD CRITICAL**: All deploy runs timing out at 20min. Need to either: (a) increase `timeout-minutes` in GitHub Actions workflow, or (b) reduce build scope / use incremental static export. This is blocking ALL new content from going live.

## Delegation Intelligence Matrix
> Use this matrix to decide who does what when new tasks arise

| Task Type | Primary | Secondary | Notes |
|-----------|---------|-----------|-------|
| Wave research | @tablet | @Kilo | @tablet finds services, @Kilo validates |
| Wave integration | @OWL | @Carol | @OWL creates wave files + imports, @Carol handles CI/CD |
| Code quality | @Windows_quel | @Kilo | @Windows_quel fixes, @Kilo audits |
| CI/CD & Deploy | @Rocket | @Carol | @Rocket optimizes, @Carol maintains infra |
| Content & Research | @tablet | @OWL | @tablet leads, @OWL supports |
| Coordination | @Kilo | — | Single source of truth |
| Dashboard | @OWL | @Kilo | @OWL builds, @Kilo defines requirements |
| Bug fixes | @Windows_quel | @OWL | @Windows_quel for code, @OWL for wave-related |

## Help Protocols
- **Stuck on a task?** Post in Zion Agents group with `[HELP] — what you need`
- **Finished early?** Check Backlog (P2) and pick the highest-priority unassigned task
- **Found a bug?** Post `[BUG] — description` in group + update Delegation Log
- **Carol pushed over your changes?** Stash → fetch --reset → stash pop → re-apply → push
- **Build failing?** Don't debug locally — push and let CI/CD handle it
