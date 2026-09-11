#!/usr/bin/env python3
"""Write first-wave commercial briefs for the content loop."""

from __future__ import annotations

import json
from pathlib import Path

OUT = Path(__file__).resolve().parents[2] / "content-loop" / "briefs"
DATE = "2026-09-11"


def dump(brief: dict) -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    path = OUT / f"{brief['slug']}.json"
    path.write_text(json.dumps(brief, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print("wrote", path.name)


ARTICLES = [
    {
        "slug": "ai-agents-for-msps-first-workflow",
        "lang": "en",
        "cluster": "AI Agents & MSPs",
        "title": "AI Agents for MSPs: Pick the First Workflow Without Creating Incidents",
        "h1": "AI Agents for MSPs: Pick the First Workflow Without Creating Incidents",
        "description": "How MSPs should choose the first AI agent workflow: intake, classify, draft, stop. Isolation, PSA/RMM gates, and Discovery $99 — no fake ticket-cut percentages.",
        "keywords": [
            "ai agents for msps",
            "MSP AI agent workflow",
            "multi-tenant AI helpdesk",
            "PSA RMM agent automation",
        ],
        "date": DATE,
        "read_minutes": 9,
        "tags": "MSP, Agents, Helpdesk",
        "excerpt": "The first MSP agent is a queued job with stop rules. If it can write to a customer tenant without a human gate, it is not a first workflow.",
        "primary_keyword": "ai agents for msps",
        "intro": [
            "Search Console still shows <strong>ai agents for msps</strong> as a real query with almost no clicks. That is not a content gap in the abstract. It is a buyer asking whether an agent can sit on a PSA queue without becoming an incident.",
            "Zion does not sell a packaged “AI helpdesk SKU.” The live offer is a <a href=\"/book/\">$99 AI/IT Discovery</a> that maps one workflow: the queue, the tools, the tenant boundary, and who owns exceptions. Implementation is scoped after that map exists.",
                        "If you already run an MSP desk, start with intake. Do not start with unsupervised remediations. The longer version of the operating model is in <a href=\"/blog/ai-automation-for-msps/\">AI automation for MSPs</a> and <a href=\"/blog/ai-helpdesk-automation/\">helpdesk automation</a>.",
            "A technician should be able to answer three questions after the first week: which queue is in scope, which tool the agent is allowed to call, and what happens when confidence is low. If any of those answers is “it depends on the model,” you do not have a workflow. You have a chat window attached to production.",
            "Most MSPs already have the ingredients: a PSA with categories, an RMM with alerts, a runbook that is half-written in someone’s head. The agent’s job is to sit on that, not to replace the technician’s judgment on irreversible work. Write the stop before you write the prompt.",
        ],
        "sections": [
            {
                "h2": "What “first workflow” actually means",
                "paras": [
                    "A first workflow is a job an agent can finish or stop. It has a system of record (usually the PSA), a tool list, and a definition of done that a technician can audit. “Handle the helpdesk” is not a workflow. It is a slogan that hides write access.",
                    "For most MSPs the first job is the front of the queue: read the ticket, attach customer and asset context if the PSA allows it, classify severity, draft an internal note or a reply, and stop. Closing a customer-facing ticket or changing production access is later — and only with a human gate.",
                    "Run the first workflow on a single customer or a synthetic queue before you touch the rest of the tenant list. Watch for accidental cross-tenant retrieval (“similar tickets”) — that is the fastest way to turn a demo into an incident report. Isolation is cheaper to design on day one than to retrofit after a leak.",
                ],
                "bullets": [
                    "<strong>In:</strong> classify, enrich, draft, route, page a human on severity rules.",
                    "<strong>Out until written:</strong> password resets that change identity, firewall changes, backup job edits, cross-tenant “similar ticket” lookup.",
                    "<strong>Test:</strong> can a tech see the step log and pick up the thread in under a minute?",
                ],
            },
            {
                "h2": "Isolation is the product",
                "paras": [
                    "Multi-tenant is the constraint generic “AI for ITSM” decks skip. The agent may only call the PSA, RMM, or documentation for the customer on that ticket. Prompt history and retrieval stay inside the tenant boundary.",
                ],
                "h3s": [
                    {
                        "h3": "Minimum controls before any write",
                        "paras": [
                            "Least privilege by default: read and draft. Writes and remote actions behind HITL. A kill switch that disables the agent without taking down the PSA. A step log you can show in a QBR.",
                        ],
                        "bullets": [
                            "Per-tenant tool tokens — not one shared PSA key for every customer.",
                            "No shared memory across tenants.",
                            "Exception queue owned by a named person, not “the AI.”",
                        ],
                    }
                ],
            },
            {
                "h2": "Cost without invented savings",
                "paras": [
                    "We will not invent a percentage of tickets deflected. Cost is two layers: model and tool usage that scales with volume, and the managed layer (design, tenant-safe integration, monitoring, exception queue). Usage should be tagged per workflow so a noisy loop is visible.",
                    "Discovery at $99 produces the map, not a retainer. See <a href=\"/plans/\">live plans</a>. The ops stack those tickets sit on is <a href=\"/managed-it-services/\">managed IT</a>.",
                ],
            },
            {
                "h2": "How Discovery scopes the first agent",
                "paras": [
                    "Book a 30-minute Google Meet via <a href=\"/book/\">/book/</a>. You leave with a first-agent sketch: queue, tools, stop rules, and a yes/no on whether consulting or a managed agent is the next track. There is no free consultation. Older “30 minute meeting” Calendly links are inactive.",
                ],
                "bullets": [
                    "Bring one queue name and which PSA/RMM it lives in.",
                    "Bring the action you are afraid the agent might take.",
                    "If isolation cannot be written, do not build yet.",
                ],
            },
        ],
        "faqs": [
            {
                "q": "Will an MSP agent close tickets without a technician?",
                "a": "Only when the job, tools, and stop rules say so — and the first workflow almost never does. Classify, enrich, draft, and route. Closing customer-facing work or changing production access without a human gate creates incidents.",
            },
            {
                "q": "How do you keep tenants separate?",
                "a": "Per-tenant context, tool permissions, and no shared prompt memory. The agent may use an approved runbook. It must not pull another customer’s tickets, credentials, or monitoring into the same step.",
            },
            {
                "q": "What does the $99 Discovery produce?",
                "a": "A first-agent map: the queue, the system of record, the tool list, the approval gates, and who owns exceptions. It is not an implementation and it does not include a promised ticket-volume cut.",
            },
        ],
        "cta": {
            "h2": "Map the first MSP agent — Discovery $99",
            "p": "We map the queue, the tenant boundary, and the human gates. Then you decide whether a managed agent is the right next step.",
        },
        "related": [
            {"href": "/blog/ai-automation-for-msps/", "label": "AI automation for MSPs"},
            {"href": "/blog/ai-helpdesk-automation/", "label": "Helpdesk automation"},
            {"href": "/blog/enterprise-ai-agent-risk-checklist/", "label": "Agent risk checklist"},
        ],
        "satellites": [
            {
                "slug": "msp-psa-agent-isolation-checklist",
                "title": "PSA Agent Isolation Checklist for Multi-Tenant MSPs",
                "angle": "Control list a NOC lead can print before connecting an agent to ConnectWise, Autotask, or Halo.",
                "primary_keyword": "MSP PSA AI agent isolation",
            },
            {
                "slug": "after-hours-msp-agent-paging-rules",
                "title": "After-Hours MSP Agents: Capture Context, Page a Human",
                "angle": "Severity rules and paging, not unsupervised remediations at 2 a.m.",
                "primary_keyword": "after hours MSP AI agent",
            },
            {
                "slug": "msp-agent-cost-model-usage-vs-managed-layer",
                "title": "MSP Agent Cost Model: Usage vs the Managed Layer",
                "angle": "How to tag model spend per queue without fake deflection percentages.",
                "primary_keyword": "MSP AI agent cost",
            },
        ],
    },
    {
        "slug": "ai-finops-for-growing-companies",
        "lang": "en",
        "cluster": "FinOps & Cloud",
        "title": "AI FinOps for Growing Companies: Govern Model Spend Before It Surprises Finance",
        "h1": "AI FinOps for Growing Companies: Govern Model Spend Before It Surprises Finance",
        "description": "AI FinOps for growing companies: tag model and cloud spend, kill noisy loops, and map the first control with Discovery $99. No invented savings percentages.",
        "keywords": ["ai finops", "GenAI cost optimization", "LLM spend governance", "cloud cost AI workloads"],
        "date": DATE,
        "read_minutes": 8,
        "tags": "FinOps, GenAI, Cloud",
        "excerpt": "AI FinOps is tagging, stop rules, and a person who owns the bill — not a dashboard that promises a percentage saved.",
        "primary_keyword": "ai finops",
        "intro": [
            "Google already shows impressions for <strong>ai finops</strong> on this domain. Buyers are not looking for another cloud-waste infographic. They are looking for who owns model invoices when a loop retries the same context on every ticket update.",
                "Zion’s live commercial path is still <a href=\"/book/\">Discovery at $99</a>. We do not quote a fake hours-saved figure or a guaranteed cloud reduction. We map which workloads are in scope, how usage will be tagged, and what stays human. Deeper cost design lives in <a href=\"/blog/genai-cost-optimization/\">GenAI cost optimization</a> and <a href=\"/blog/finops-consulting-services/\">FinOps consulting</a>.",
            "If finance cannot see which workflow caused yesterday’s spike, the model is not the problem. The missing dimension is. Tagging is a design choice: keys, projects, customer ids, environment. Without that, every optimization meeting becomes a guess.",
            "Growing companies also confuse eval spend with production spend. The gold set that replays last week’s tickets should live on a separate key. Otherwise a well-meaning engineer can 10× the bill while “improving quality” and nobody can prove it.",
        ],
        "sections": [
            {
                "h2": "Two bills, one owner",
                "paras": [
                    "Growing companies usually discover AI cost as two invoices that nobody reconciled: cloud (GPU, egress, logging) and model/API usage. If those sit on a shared key, finance sees a blob. Engineering sees a feature. Nobody can kill the noisy path.",
                ],
                "bullets": [
                    "Tag by workflow, environment, and customer — not one key for “the AI project.”",
                    "Cap retries and context window by default. Chatty agents are a cost bug.",
                    "Separate eval spend from production spend so experiments cannot hide in prod.",
                ],
            },
            {
                "h2": "What to measure before you optimize",
                "paras": [
                    "Measure unit cost against an operational unit you already trust: per ticket classified, per document extracted, per overnight batch. If you cannot name the unit, you do not have a FinOps problem yet. You have an undefined product.",
                    "Cloud waste still matters — idle GPU, unattached disks, log ingestion from debug flags left on. Treat that as classic FinOps. Model spend is a new line, not a replacement.",
                ],
            },
            {
                "h2": "Controls that survive the first month",
                "paras": [
                    "Budgets without a kill switch are slideshows. The first controls are boring: per-workflow keys, daily spend alerts, a named owner, and a rule that a new agent cannot go to production without a cost tag. See also <a href=\"/blog/genai-finops-at-scale/\">GenAI FinOps at scale</a>.",
                ],
            },
            {
                "h2": "Discovery path",
                "paras": [
                    "Bring last month’s model invoice (or the shared key statement) and one production workflow. Discovery maps what to tag first and whether consulting or a Starter implementation is next. Prices: <a href=\"/plans/\">/plans/</a>. Book: <a href=\"/book/\">/book/</a>.",
                ],
            },
        ],
        "faqs": [
            {
                "q": "Is AI FinOps different from cloud FinOps?",
                "a": "Same discipline, extra invoice. Cloud FinOps still covers compute, storage, and egress. AI FinOps adds model/API usage, eval traffic, and agent loops that can retry without a human noticing.",
            },
            {
                "q": "Can you promise a percentage saved?",
                "a": "No. Anyone quoting a guaranteed cut before seeing your keys, retries, and workloads is selling a slide. We map tags, caps, and owners first.",
            },
            {
                "q": "What does Discovery include?",
                "a": "A 30-minute working session plus a written follow-up: which workflow to tag first, what to cap, and whether to proceed. It is $99. It is not an implementation.",
            },
        ],
        "cta": {
            "h2": "Map the first cost control — Discovery $99",
            "p": "Bring the invoice. We map tags, caps, and the owner of the bill.",
        },
        "related": [
            {"href": "/blog/genai-cost-optimization/", "label": "GenAI cost optimization"},
            {"href": "/blog/finops-consulting-services/", "label": "FinOps consulting"},
            {"href": "/blog/cloud-cost-optimization-for-growing-startups/", "label": "Startup cloud cost"},
        ],
        "satellites": [
            {
                "slug": "tag-llm-spend-per-workflow",
                "title": "How to Tag LLM Spend Per Workflow",
                "angle": "Key layout and naming so finance can see noisy agents.",
                "primary_keyword": "tag LLM spend per workflow",
            },
            {
                "slug": "kill-noisy-agent-loops-finops",
                "title": "Kill Noisy Agent Loops Before They Become the Bill",
                "angle": "Retry caps and context-window defaults.",
                "primary_keyword": "agent loop cost control",
            },
            {
                "slug": "ai-finops-for-msps",
                "title": "AI FinOps for MSPs: Pass Through Usage Without Surprising Tenants",
                "angle": "Per-tenant usage tags on a managed desk.",
                "primary_keyword": "AI FinOps MSP",
            },
        ],
    },
]


def more_articles():
    return [
        {
            "slug": "adaptive-ai-agents-for-business",
            "lang": "en",
            "cluster": "AI Agents",
            "title": "Adaptive AI Agents for Business: Change the Workflow, Not the Goal",
            "h1": "Adaptive AI Agents for Business: Change the Workflow, Not the Goal",
            "description": "Adaptive AI agents for business should change steps when the job changes — with stop rules, evals, and a human owner. Map the first agent with Discovery $99.",
            "keywords": ["adaptive ai agents for business", "adaptive agents", "agent evaluation", "business AI agents"],
            "date": DATE,
            "read_minutes": 8,
            "tags": "Agents, Governance",
            "excerpt": "Adaptive does not mean unsupervised. It means the agent can pick the next approved step — and stop when the map ends.",
            "primary_keyword": "adaptive ai agents for business",
            "intro": [
                "“Adaptive AI agents for business” shows up in search with almost no useful landing. Most pages treat adaptive as a personality: the bot that “learns your company.” That is how you get prompt drift and a silent policy change.",
                "An adaptive agent is allowed to choose among written steps when inputs change. It is not allowed to invent a new write to production because the last ticket looked similar. Product detail: <a href=\"/autonomous-ai-agents/\">autonomous AI agents</a>. Risk list: <a href=\"/blog/enterprise-ai-agent-risk-checklist/\">enterprise agent risk checklist</a>.",
            ],
            "sections": [
                {
                    "h2": "Adaptive vs autonomous vs chatbot",
                    "paras": [
                        "A chatbot answers. An autonomous agent takes a job, uses tools, and stops. Adaptive means the next tool call can depend on what the last tool returned — still inside a graph you can draw on a whiteboard.",
                    ],
                    "bullets": [
                        "Chatbot: retrieve and reply. No production writes.",
                        "Scripted agent: fixed sequence. Easy to audit, brittle when the ticket is missing a field.",
                        "Adaptive agent: branches that are pre-approved. Missing branch → escalate.",
                    ],
                },
                {
                    "h2": "Where adaptation earns its keep",
                    "paras": [
                        "Intake forms that are incomplete. Vendors that return three different error shapes. Languages on the same queue. The agent should request the missing field, pick the parser that matched, or route to a human — not “figure it out.”",
                    ],
                },
                {
                    "h2": "Evals before you let it branch",
                    "paras": [
                        "If you cannot replay last week’s tickets through the graph and see where it would have branched, you do not have an adaptive agent. You have a prompt. Keep a gold set. Change the graph in version control. See <a href=\"/blog/ai-agent-governance-enterprise/\">agent governance</a>.",
                    ],
                },
                {
                    "h2": "Commercial path",
                    "paras": [
                        "Discovery ($99) maps one job and whether any branch is justified. We will not promise that the agent “learns” your business in a week. Book via <a href=\"/book/\">/book/</a>. Plans: <a href=\"/plans/\">/plans/</a>. Consulting context: <a href=\"/ai-consulting-services/\">AI consulting services</a>.",
                    ],
                },
            ],
            "faqs": [
                {
                    "q": "Does adaptive mean the agent trains on our data overnight?",
                    "a": "Not in a first deployment. Adaptation here is branching among approved steps. Weight updates, fine-tunes, or memory across customers are separate projects with their own isolation rules.",
                },
                {
                    "q": "When should a branch escalate instead of continuing?",
                    "a": "When the next tool is a write, when confidence is below the written threshold, when the tenant is unknown, or when the gold-set eval for that branch is missing.",
                },
                {
                    "q": "What do we walk out of Discovery with?",
                    "a": "A one-page graph: start, tools, branches, stop, owner. Then a yes/no on whether to implement.",
                },
            ],
            "cta": {
                "h2": "Draw the first graph — Discovery $99",
                "p": "We write the branches and the stops. Learning later is optional. Isolation is not.",
            },
            "related": [
                {"href": "/blog/autonomous-ai-agents-for-business/", "label": "Autonomous agents for business"},
                {"href": "/blog/ai-agent-governance-enterprise/", "label": "Agent governance"},
                {"href": "/blog/enterprise-ai-agent-risk-checklist/", "label": "Risk checklist"},
            ],
            "satellites": [
                {"slug": "agent-eval-gold-set-for-smes", "title": "Build a Gold-Set Eval for SME Agents", "angle": "Replay last week’s tickets.", "primary_keyword": "AI agent evaluation gold set"},
                {"slug": "when-agents-should-not-adapt", "title": "When Business Agents Should Not Adapt", "angle": "Writes, identity, payments.", "primary_keyword": "agent stop rules"},
                {"slug": "adaptive-agents-vs-rpa", "title": "Adaptive Agents vs RPA: Different Failure Modes", "angle": "Brittleness vs silent drift.", "primary_keyword": "adaptive agents vs RPA"},
            ],
        },
        {
            "slug": "building-ai-agent-workflows-for-small-business",
            "lang": "en",
            "cluster": "AI Agents",
            "title": "Building AI Agent Workflows for Small Business Without Hiring a Platform Team",
            "h1": "Building AI Agent Workflows for Small Business Without Hiring a Platform Team",
            "description": "A practical path to the first AI agent workflow for small business: one job, approved tools, stop rules, and Discovery $99. Skip the platform shopping spree.",
            "keywords": ["building AI agent workflows for small business", "small business AI agents", "SME automation"],
            "date": DATE,
            "read_minutes": 8,
            "tags": "SMB, Agents",
            "excerpt": "Small businesses do not need an agent platform. They need one job that already happens every day, with a stop rule a owner can explain.",
            "primary_keyword": "building AI agent workflows for small business",
            "intro": [
                "If you run a small company, you do not have a platform team. You have a WhatsApp thread, a spreadsheet, and a person who already does the work. An agent that cannot sit on that work with a stop rule is a chatbot with a new invoice.",
                "Zion maps the first workflow in a <a href=\"/book/\">$99 Discovery</a>. There is no free consultation. We will not tell you the agent will “run the business.” Related: <a href=\"/blog/ai-consulting-services-for-business/\">what consulting actually delivers</a>.",
            ],
            "sections": [
                {
                    "h2": "Pick work that already has a definition of done",
                    "paras": [
                        "Good first jobs: classify inbound email, draft a reply from an approved script, copy a confirmed order into the spreadsheet, remind a human that a document is missing. Bad first jobs: refunds, identity changes, anything that sends money or legally binds the company without a person.",
                    ],
                    "bullets": [
                        "Name the queue (inbox, WhatsApp, form).",
                        "Name the system of record (Sheet, ERP, PSA).",
                        "Name the irreversible action — and keep it human.",
                    ],
                },
                {
                    "h2": "Tools before models",
                    "paras": [
                        "The model is the cheap part. Auth to Gmail, WhatsApp, the ERP, or the calendar is the work. If the agent cannot call the tool with a least-privilege token, you are pasting screenshots into ChatGPT. That is fine for a pilot. It is not a workflow.",
                    ],
                },
                {
                    "h2": "A one-page operating brief",
                    "paras": [
                        "Write: trigger, tools, draft vs send, stop, owner, how to disable. If you cannot disable it without calling a vendor, do not connect production inboxes. Governance patterns: <a href=\"/blog/ai-agent-governance-enterprise/\">enterprise governance</a> still apply at SME scale — just shorter.",
                    ],
                },
                {
                    "h2": "What you buy from Zion",
                    "paras": [
                        "Discovery maps the job. Consulting ($499) or Starter ($2,500) is only after that map. Growth retainers exist for companies that already have a first workflow in production. See <a href=\"/plans/\">plans</a>.",
                    ],
                },
            ],
            "faqs": [
                {
                    "q": "Do we need LangGraph, CrewAI, or a custom platform?",
                    "a": "Not for the first workflow. You need a trigger, a tool with scoped auth, a draft/send policy, and a log. Frameworks come after the job is written.",
                },
                {
                    "q": "Can the agent talk to customers on day one?",
                    "a": "Draft, don’t send, until a human has accepted a gold set of replies. Customer-facing send is a later branch.",
                },
                {
                    "q": "Is Discovery an implementation?",
                    "a": "No. It is a 30-minute working session plus a written follow-up. Implementation is a separate, priced scope.",
                },
            ],
            "cta": {
                "h2": "Map the first SME workflow — $99",
                "p": "Bring the inbox or the WhatsApp. We write the job, the tools, and the stop.",
            },
            "related": [
                {"href": "/blog/ai-consulting-services-for-business/", "label": "AI consulting for business"},
                {"href": "/blog/agente-de-ia-para-whatsapp-empresas/", "label": "Agente de IA para WhatsApp"},
                {"href": "/blog/pay-vs-consulte-ai-automation/", "label": "Pay vs consulte"},
            ],
            "satellites": [
                {"slug": "small-business-agent-draft-dont-send", "title": "Draft-Don’t-Send: The Default for SME Agents", "angle": "Customer-facing policy.", "primary_keyword": "AI agent draft don't send"},
                {"slug": "connect-gmail-agent-least-privilege", "title": "Connect Gmail to an Agent With Least Privilege", "angle": "OAuth scopes that are not the whole mailbox.", "primary_keyword": "Gmail AI agent OAuth"},
                {"slug": "sme-agent-disable-switch", "title": "Your SME Agent Needs a Disable Switch", "angle": "Kill without calling a vendor.", "primary_keyword": "disable AI agent"},
            ],
        },
        {
            "slug": "zero-trust-for-smbs-implementation-checklist",
            "lang": "en",
            "cluster": "Cybersecurity",
            "title": "Zero Trust for SMBs: An Implementation Checklist You Can Finish",
            "h1": "Zero Trust for SMBs: An Implementation Checklist You Can Finish",
            "description": "Zero Trust for SMBs is identity, device, and least privilege — not a SASE RFP. A finishable checklist, then Discovery $99 if you want it mapped to your stack.",
            "keywords": ["zero trust for SMBs", "SMB zero trust checklist", "MFA device posture small business"],
            "date": DATE,
            "read_minutes": 8,
            "tags": "Security, SMB",
            "excerpt": "Zero Trust for a 20-person company is MFA everywhere, no shared admin, and a device that can be refused. It is not a new acronym on a slide.",
            "primary_keyword": "zero trust for SMBs",
            "intro": [
                "SMBs get sold Zero Trust as a fabric. What they need is a list they can finish this quarter without a security team of eight. Identity first. Devices second. Network last.",
                "Zion will not pretend leftover catalog URLs are a Zero Trust product. If you want the work scoped against your Microsoft 365, Google Workspace, or VPN mess, start at <a href=\"/book/\">Discovery $99</a>. Brazilian distributed-team variant: <a href=\"/blog/zero-trust-sase-equipes-ti-distribuidas-brasil/\">Zero Trust e SASE</a>.",
            ],
            "sections": [
                {
                    "h2": "Identity before network",
                    "paras": [
                        "If people share an admin password in a WhatsApp group, no SASE overlay will save you. Inventory identities. Kill shared mailboxes used as admin. MFA on every privileged login. Separate admin accounts from daily email.",
                    ],
                    "bullets": [
                        "One person, one identity provider account.",
                        "Phishing-resistant MFA for admins. SMS is a last resort, not a plan.",
                        "Joiner/mover/leaver: a ticket, not a verbal “please remove João.”",
                    ],
                },
                {
                    "h2": "Device posture you can actually enforce",
                    "paras": [
                        "Require a managed device for admin and finance. Disk encryption on. OS updates not optional. If a contractor must use a personal laptop, give them a browser-isolated path, not the domain admin.",
                    ],
                },
                {
                    "h2": "Least privilege on the tools that matter",
                    "paras": [
                        "ERP, bank, email, cloud console. Most SMB breaches are token reuse and over-broad OAuth apps — including AI agents that requested the whole mailbox. If you add an agent, it gets its own identity. See <a href=\"/blog/ai-agent-governance-enterprise/\">agent governance</a>.",
                    ],
                },
                {
                    "h2": "Network last, not first",
                    "paras": [
                        "Split tunnel vs full tunnel arguments waste months. After identity and device, lock remote admin to SSO and a small allowlist. VPN is a tool, not the architecture.",
                    ],
                },
            ],
            "faqs": [
                {
                    "q": "Do we need SASE to say we have Zero Trust?",
                    "a": "No. SASE can help distributed teams later. Start with identity, MFA, device posture, and least privilege on the four systems that would hurt if they leaked.",
                },
                {
                    "q": "What about employees on personal phones?",
                    "a": "Mail and chat can live in a managed container or web access. Admin of finance, cloud, or identity should not.",
                },
                {
                    "q": "Can Discovery implement Zero Trust?",
                    "a": "Discovery maps the gap. Implementation is a scoped project after that. There is no free consultation.",
                },
            ],
            "cta": {
                "h2": "Map identity and device gaps — $99",
                "p": "Bring your identity provider and the four systems that would hurt. We write the finishable list.",
            },
            "related": [
                {"href": "/blog/hipaa-compliant-it-services/", "label": "HIPAA-compliant IT"},
                {"href": "/blog/managed-it-for-ai-first-companies/", "label": "Managed IT for AI-first"},
                {"href": "/blog/enterprise-ai-agent-risk-checklist/", "label": "Agent risk"},
            ],
            "satellites": [
                {"slug": "smb-mfa-admin-accounts", "title": "SMB Admin Accounts: MFA and No Shared Passwords", "angle": "The first Zero Trust hour.", "primary_keyword": "SMB MFA admin accounts"},
                {"slug": "oauth-app-review-for-smes", "title": "Review OAuth Apps Before You Add an AI Agent", "angle": "Mailbox-wide scopes.", "primary_keyword": "OAuth app review SME"},
                {"slug": "contractor-laptop-access-smb", "title": "Contractor Laptops in an SMB Zero Trust Model", "angle": "Browser isolation vs domain join.", "primary_keyword": "contractor device access SMB"},
            ],
        },
        {
            "slug": "cloud-cost-optimization-for-growing-startups",
            "lang": "en",
            "cluster": "FinOps & Cloud",
            "title": "Cloud Cost Optimization for Growing Startups: Fix the Bill Without Slowing Shipping",
            "h1": "Cloud Cost Optimization for Growing Startups: Fix the Bill Without Slowing Shipping",
            "description": "Cloud cost optimization for growing startups: tags, idle resources, log waste, and owner. Honest FinOps — no guaranteed savings percentage. Start with Discovery $99.",
            "keywords": ["cloud cost optimization for growing startups", "startup FinOps", "AWS Azure GCP waste"],
            "date": DATE,
            "read_minutes": 8,
            "tags": "FinOps, Startups",
            "excerpt": "Startup cloud waste is usually idle environments, debug logs, and nobody named on the invoice — not a missing reserved-instance priest.",
            "primary_keyword": "cloud cost optimization for growing startups",
            "intro": [
                "Growing startups do not fail FinOps because they skipped a multi-cloud strategy. They fail because staging clones production, logs are on debug, and the bill lands on a founder’s card.",
                "We will not invent a savings percentage. We map tags, idle resources, and an owner. Then you decide whether a <a href=\"/blog/finops-consulting-services/\">FinOps consulting</a> engagement is worth it. Book: <a href=\"/book/\">Discovery $99</a>. AI-specific spend: <a href=\"/blog/ai-finops-for-growing-companies/\">AI FinOps</a>.",
            ],
            "sections": [
                {
                    "h2": "The first week, not the first framework",
                    "paras": [
                        "Turn on tags. Kill unattached disks and leftover load balancers. Right-size the one always-on GPU nobody uses after the demo. Put a budget alert on the account that actually pays.",
                    ],
                    "bullets": [
                        "One billing account owner with a deputy.",
                        "Non-prod sleeps. Prod does not share the same unrestricted key as CI.",
                        "Logs: keep what you query. Debug is not an architecture.",
                    ],
                },
                {
                    "h2": "Commitments come after shape",
                    "paras": [
                        "Reserved instances and savings plans punish you if the footprint is still changing every sprint. Get the shape stable, then commit. Startups that buy three-year RIs in month four usually pay twice.",
                    ],
                },
                {
                    "h2": "Engineering guardrails that do not block deploys",
                    "paras": [
                        "A cost check in CI that fails on a new untagged resource is cheaper than a monthly shame meeting. Autoscaling without a max is a blank check. Preview environments need TTLs.",
                    ],
                },
                {
                    "h2": "When to bring a partner",
                    "paras": [
                        "If the bill is now material to runway and nobody can explain last month’s spike, map it in Discovery. Implementation is scoped. Plans: <a href=\"/plans/\">/plans/</a>.",
                    ],
                },
            ],
            "faqs": [
                {
                    "q": "Should we multi-cloud to save money?",
                    "a": "Usually no. Two clouds without tags is two messy bills. Optimize the one you are on until a real constraint (region, customer, GPU availability) forces the second.",
                },
                {
                    "q": "Will you guarantee 30% savings?",
                    "a": "No. Guarantees without seeing idle resources, log volume, and commitments are marketing. We map the waste, then you choose what to turn off.",
                },
                {
                    "q": "Does Discovery include a full FinOps practice?",
                    "a": "No. It is a 30-minute map plus written follow-up. A practice is a later retainer if you want one.",
                },
            ],
            "cta": {
                "h2": "Map the spike — Discovery $99",
                "p": "Bring last month’s invoice. We name the idle, the logs, and the owner.",
            },
            "related": [
                {"href": "/blog/finops-consulting-services/", "label": "FinOps consulting"},
                {"href": "/blog/ai-finops-for-growing-companies/", "label": "AI FinOps"},
                {"href": "/blog/genai-cost-optimization/", "label": "GenAI cost"},
            ],
            "satellites": [
                {"slug": "preview-environment-ttl-finops", "title": "Preview Environments Need a TTL", "angle": "CI cost leaks.", "primary_keyword": "preview environment cost TTL"},
                {"slug": "startup-log-ingestion-waste", "title": "Debug Logs Are Eating the Cloud Bill", "angle": "Ingestion vs query.", "primary_keyword": "cloud log ingestion cost"},
                {"slug": "when-startups-should-buy-savings-plans", "title": "When Startups Should Buy Savings Plans", "angle": "After shape stabilizes.", "primary_keyword": "startup AWS savings plans"},
            ],
        },
    ]


def pt_articles():
    return [
        {
            "slug": "agente-de-ia-para-whatsapp-empresas",
            "lang": "pt-BR",
            "cluster": "Brazilian Market (PT-BR)",
            "title": "Agente de IA para WhatsApp: o que mapear antes de ligar o bot",
            "h1": "Agente de IA para WhatsApp: o que mapear antes de ligar o bot",
            "description": "Agente de IA para WhatsApp em empresas: rascunho, não fechamento; LGPD; fila humana. Discovery US$ 99 — sem consulta grátis e sem percentual mágico de atendimento.",
            "keywords": ["agente de IA para WhatsApp", "WhatsApp bot empresas", "automação WhatsApp LGPD"],
            "date": DATE,
            "read_minutes": 9,
            "tags": "WhatsApp, PME, Brasil",
            "excerpt": "O primeiro agente de WhatsApp classifica, pede o dado que falta e rascunha. Ele não fecha contrato, não marca procedimento clínico e não inventa preço.",
            "primary_keyword": "agente de IA para WhatsApp",
            "intro": [
                "No Brasil, “agente de IA para WhatsApp” lidera busca por um motivo simples: a fila já está no aplicativo. Clínicas, imobiliárias e escritórios querem resposta rápida. O erro é ligar um bot que fala como humano e escreve no CRM sem dono.",
                "A Zion não vende um SKU de chatbot. O caminho vivo é o <a href=\"/book/\">Discovery de US$ 99</a> (sessão de 30 minutos). Não há consulta grátis. Guias irmãos: <a href=\"/blog/planilha-erp-whatsapp/\">planilha, ERP e WhatsApp</a> e <a href=\"/blog/whatsapp-clinica-odontologica-no-show/\">no-show em clínica</a>.",
            ],
            "sections": [
                {
                    "h2": "O que o agente pode fazer no dia um",
                    "paras": [
                        "Ler a mensagem, identificar intenção grosseira (preço, horário, humano), pedir o dado que falta, rascunhar resposta a partir de um script aprovado, abrir ticket. Enviar ao cliente só depois que um humano aceitou um conjunto-ouro de respostas.",
                    ],
                    "bullets": [
                        "Dentro: horário de funcionamento, pedir documento, encaminhar para a fila certa.",
                        "Fora até haver regra escrita: desconto, diagnóstico, confirmação de cirurgia, dados de terceiro.",
                        "Teste: dá para desligar o agente sem cair o número da empresa?",
                    ],
                },
                {
                    "h2": "LGPD não é um rodapé",
                    "paras": [
                        "WhatsApp carrega dado pessoal no padrão. Base legal, retenção, quem vê o histórico, e o que o modelo pode guardar em memória. Se o agente “aprende o cliente” misturando conversas, você criou um arquivo pessoal sem contrato. Saúde: <a href=\"/blog/hipaa-lgpd-automacao-dados-pacientes-guia-healthtechs/\">HIPAA, LGPD e dados de pacientes</a>.",
                    ],
                },
                {
                    "h2": "Integração com a planilha e o ERP",
                    "paras": [
                        "Se o fechamento ainda vive em planilha, o agente não deve ser a fonte da verdade. Ele rascunha a linha; um humano confirma. Quando a cópia manual for o problema, leia <a href=\"/blog/planilha-erp-whatsapp/\">quando parar de copiar dados</a>.",
                    ],
                },
                {
                    "h2": "Como a Zion entra",
                    "paras": [
                        "No Discovery você traz um número, um script atual e a ação irreversível que te preocupa. Saímos com o mapa do primeiro fluxo. Implementação é escopo à parte — <a href=\"/plans/\">planos</a>.",
                    ],
                },
            ],
            "faqs": [
                {
                    "q": "O agente pode atender 24 horas sozinho?",
                    "a": "Pode capturar e classificar 24 horas. Envio ao cliente e qualquer escrita em sistema de registro dependem da regra. Madrugada sem humano na exceção é risco, não cobertura.",
                },
                {
                    "q": "Precisa de API oficial do WhatsApp?",
                    "a": "Para operação séria, sim. Extensão de navegador e número pessoal não são arquitetura. Discovery mapeia o caminho; não inclui o contrato com a Meta.",
                },
                {
                    "q": "Consulta é grátis?",
                    "a": "Não. O único agendamento ativo é o Discovery pago. Links antigos de “30 minute meeting” estão inativos.",
                },
            ],
            "cta": {
                "h2": "Mapear o primeiro fluxo de WhatsApp — US$ 99",
                "p": "Traga o número e o script. Escrevemos o que o agente pode dizer e onde ele para.",
            },
            "related": [
                {"href": "/blog/agentes-telegram-para-empresas/", "label": "Agentes Telegram"},
                {"href": "/blog/automacao-clinicas-lgpd/", "label": "Automação e LGPD em clínicas"},
                {"href": "/blog/building-ai-agent-workflows-for-small-business/", "label": "Workflows for small business"},
            ],
            "satellites": [
                {"slug": "whatsapp-oficial-api-vs-numero-pessoal", "title": "API oficial do WhatsApp vs número pessoal", "angle": "Arquitetura, não gato.", "primary_keyword": "WhatsApp Business API empresas", "lang": "pt-BR"},
                {"slug": "lgpd-historico-whatsapp-agente", "title": "LGPD no histórico do agente de WhatsApp", "angle": "Retenção e memória.", "primary_keyword": "LGPD WhatsApp bot", "lang": "pt-BR"},
                {"slug": "agente-whatsapp-imobiliaria-primeiro-atendimento", "title": "Primeiro atendimento de imobiliária com agente", "angle": "Lead, não proposta.", "primary_keyword": "agente IA imobiliária WhatsApp", "lang": "pt-BR"},
            ],
        },
        {
            "slug": "agente-de-ia-para-vendas-pme",
            "lang": "pt-BR",
            "cluster": "Brazilian Market (PT-BR)",
            "title": "Agente de IA para vendas em PMEs: rascunho, qualificação, stop",
            "h1": "Agente de IA para vendas em PMEs: rascunho, qualificação, stop",
            "description": "Agente de IA para vendas em PMEs brasileiras: qualifica e rascunha. Não fecha, não dá desconto solto. Discovery US$ 99, sem consulta grátis.",
            "keywords": ["agente de IA para vendas", "IA vendas PME", "SDR com IA Brasil"],
            "date": DATE,
            "read_minutes": 8,
            "tags": "Vendas, PME, Brasil",
            "excerpt": "Vendas com agente começa na qualificação. Fechamento sem humano é como deixar o estagiário assinar o contrato.",
            "primary_keyword": "agente de IA para vendas",
            "intro": [
                "Buscas por agente de IA para vendas cresceram no Brasil junto com WhatsApp. O padrão que funciona em PME é o mesmo do helpdesk: classificar, pedir o que falta, rascunhar. Não é um closer autônomo.",
                "A Zion mapeia o primeiro fluxo no <a href=\"/book/\">Discovery de US$ 99</a>. Contexto de consultoria: <a href=\"/blog/ai-bdr-sdr-roi-and-cost-model/\">BDR/SDR cost model</a> (sem percentuais inventados de pipeline).",
            ],
            "sections": [
                {
                    "h2": "Onde o agente ajuda um comercial pequeno",
                    "paras": [
                        "Triagem de inbound, enriquecer o card no CRM se a API existir, rascunhar o primeiro follow-up a partir de um script, lembrar o humano do SLA. Ele não inventa desconto nem promete prazo de entrega.",
                    ],
                },
                {
                    "h2": "CRM ou planilha",
                    "paras": [
                        "Se o funil é planilha, o agente não vira CRM. Ele sugere a linha. Duplicar lead é pior que responder tarde. Defina a chave (telefone/e-mail) antes de qualquer escrita automática.",
                    ],
                },
                {
                    "h2": "Compliance comercial",
                    "paras": [
                        "Não treine o modelo com conversas de clientes misturadas. Não grave áudio sem aviso. Se o setor é regulado (saúde, financeiro), o script precisa de revisão humana sempre — não “na maioria das vezes.”",
                    ],
                },
                {
                    "h2": "Caminho comercial da Zion",
                    "paras": [
                        "Discovery escreve o job. Starter só depois. Preços em <a href=\"/plans/\">/plans/</a>. Não há comissão de afiliado público.",
                    ],
                },
            ],
            "faqs": [
                {
                    "q": "O agente substitui o SDR?",
                    "a": "Não no primeiro fluxo. Ele reduz trabalho repetitivo de triagem. Conversas que mudam preço, prazo ou escopo continuam humanas.",
                },
                {
                    "q": "Pode disparar prospecção fria sozinho?",
                    "a": "Não como padrão. Volume sem lista consentida e sem opt-out é risco de reputação e de LGPD. Discovery não inclui campanha fria.",
                },
                {
                    "q": "Quanto custa começar?",
                    "a": "Discovery é US$ 99. Implementação é escopo escrito depois. Não cotamos “pipeline gerado.”",
                },
            ],
            "cta": {
                "h2": "Mapear o primeiro fluxo de vendas — US$ 99",
                "p": "Traga o inbound e o script. Definimos o que o agente rascunha e o que só o humano fecha.",
            },
            "related": [
                {"href": "/blog/agente-de-ia-para-whatsapp-empresas/", "label": "Agente WhatsApp"},
                {"href": "/blog/ai-consulting-services-for-business/", "label": "AI consulting"},
                {"href": "/blog/how-much-does-ai-consultant-cost-2026/", "label": "AI consultant cost"},
            ],
            "satellites": [
                {"slug": "qualificacao-inbound-agente-pme", "title": "Qualificação de inbound com agente em PME", "angle": "Campos mínimos.", "primary_keyword": "qualificação inbound IA", "lang": "pt-BR"},
                {"slug": "agente-vendas-nao-da-desconto", "title": "Por que o agente não deve dar desconto", "angle": "Política comercial.", "primary_keyword": "IA desconto vendas", "lang": "pt-BR"},
                {"slug": "crm-planilha-agente-vendas", "title": "CRM vs planilha quando entra o agente", "angle": "Fonte da verdade.", "primary_keyword": "CRM agente vendas PME", "lang": "pt-BR"},
            ],
        },
        {
            "slug": "empresa-de-ti-terceirizada-pme-brasil",
            "lang": "pt-BR",
            "cluster": "Brazilian Market (PT-BR)",
            "title": "Empresa de TI terceirizada para PME: MSP, co-managed e o primeiro SLA",
            "h1": "Empresa de TI terceirizada para PME: MSP, co-managed e o primeiro SLA",
            "description": "Como uma PME brasileira escolhe empresa de TI terceirizada em 2026: MSP vs co-managed, SLA honesto, LGPD. Discovery US$ 99 — sem consulta grátis.",
            "keywords": ["empresa de TI terceirizada", "MSP para PME", "TI terceirizada Brasil"],
            "date": DATE,
            "read_minutes": 9,
            "tags": "MSP, PME, Brasil",
            "excerpt": "Terceirizar TI não é “alguém no WhatsApp.” É um SLA, um dono da identidade e um caminho para desligar o contrato.",
            "primary_keyword": "empresa de TI terceirizada",
            "intro": [
                "PME brasileira busca empresa de TI terceirizada quando o sócio virou helpdesk. O mercado oferece MSP, co-managed, field service e vCISO no mesmo folder. Você precisa de um modelo, não de um catálogo.",
                "A Zion não opera field service nacional. Mapeamos o que você realmente precisa — desk, cloud, identidade, automação com agentes — no <a href=\"/book/\">Discovery de US$ 99</a>. Comparação em inglês: <a href=\"/blog/co-managed-it-vs-msp/\">co-managed vs MSP</a>.",
            ],
            "sections": [
                {
                    "h2": "MSP vs co-managed",
                    "paras": [
                        "MSP assume operação com SLA. Co-managed divide: você fica com prioridade de negócio, o parceiro fica com patch, backup, identidade. PME com um analista interno quase sempre deveria ser co-managed, não “substitui o rapaz.”",
                    ],
                },
                {
                    "h2": "SLA que dá para auditar",
                    "paras": [
                        "Tempo de resposta por severidade, janela de patch, RPO/RTO de backup, quem é o admin do tenant Microsoft/Google. Multa no contrato sem métrica mensurável é teatro.",
                    ],
                    "bullets": [
                        "Quem tem a senha break-glass?",
                        "O backup foi restaurado de verdade no último trimestre?",
                        "O agente de IA, se existir, tem kill switch?",
                    ],
                },
                {
                    "h2": "LGPD e suboperadores",
                    "paras": [
                        "Terceirizar TI é transferir operação, não responsabilidade. Lista de suboperadores, DPA, e o que acontece com o histórico de tickets no encerramento. Sem isso, não assine.",
                    ],
                },
                {
                    "h2": "Onde a Zion entra",
                    "paras": [
                        "Discovery esclarece se o próximo passo é consultoria, um primeiro fluxo de agente, ou um modelo gerenciado. Preços: <a href=\"/plans/\">/plans/</a>. Managed IT em inglês: <a href=\"/blog/managed-it-services-pricing/\">pricing</a>.",
                    ],
                },
            ],
            "faqs": [
                {
                    "q": "A Zion substitui um MSP com técnico nas capitais?",
                    "a": "Não. Não vendemos field service nacional. Se você precisa de visita presencial, o Discovery pode dizer isso com clareza em vez de forçar um agente.",
                },
                {
                    "q": "Consulta de 30 minutos é grátis?",
                    "a": "Não. O evento ativo no Calendly é o Discovery pago. Links antigos estão inativos.",
                },
                {
                    "q": "Dá para começar só com backup e identidade?",
                    "a": "Sim, e costuma ser o primeiro SLA honesto. Automação com agentes vem depois da casa mínima.",
                },
            ],
            "cta": {
                "h2": "Mapear o modelo — US$ 99",
                "p": "MSP, co-managed ou só o primeiro SLA. Escrevemos o que você realmente precisa.",
            },
            "related": [
                {"href": "/blog/co-managed-it-vs-msp/", "label": "Co-managed vs MSP"},
                {"href": "/blog/managed-it-for-ai-first-companies/", "label": "Managed IT for AI-first"},
                {"href": "/blog/zero-trust-for-smbs-implementation-checklist/", "label": "Zero Trust SMB"},
            ],
            "satellites": [
                {"slug": "sla-helpdesk-pme-brasil", "title": "SLA de helpdesk que uma PME consegue medir", "angle": "Severidade e relógio.", "primary_keyword": "SLA helpdesk PME", "lang": "pt-BR"},
                {"slug": "dpa-msp-lgpd-encerramento", "title": "DPA e encerramento com MSP", "angle": "Tickets e backups na saída.", "primary_keyword": "DPA MSP LGPD", "lang": "pt-BR"},
                {"slug": "co-managed-com-um-analista-interno", "title": "Co-managed quando você já tem um analista", "angle": "Divisão de responsabilidades.", "primary_keyword": "co-managed TI PME", "lang": "pt-BR"},
            ],
        },
    ]


def remaining():
    return [
        {
            "slug": "hermes-agent-uninterrupted-ops-loop",
            "lang": "en",
            "cluster": "Hermes & Automation",
            "title": "Hermes Agent for IT Companies: An Uninterrupted Ops and Content Loop",
            "h1": "Hermes Agent for IT Companies: An Uninterrupted Ops and Content Loop",
            "description": "How IT companies use Hermes Agent cron, skills, and Git-native publishing for an uninterrupted ops and SEO content loop. Honest limits, then Discovery $99.",
            "keywords": ["Hermes Agent", "Hermes Agent cron", "Nous Research agent", "AI content operations"],
            "date": DATE,
            "read_minutes": 9,
            "tags": "Hermes, Ops, SEO",
            "excerpt": "Hermes is useful when cron, git, and quality gates exist. It is harmful when it publishes thin pages or runs with model=local.",
            "primary_keyword": "Hermes Agent",
            "intro": [
                "Hermes Agent (Nous Research) is a self-improving agent with cron, skills, and delivery to Telegram or Slack. IT companies try to use it as an unpaid intern that “does SEO.” Unsupervised publishing of thin pages is how you burn crawl budget. This site already learned that the hard way with leftover catalog URLs.",
                "The loop that works: research → brief → quality gate → git commit → GitHub Pages. Cron on Hermes or GitHub Actions. Never <code>model=local</code> on Nous — that ID returns HTTP 400 and silently burns hundreds of runs. Pin a live model such as <code>stepfun/step-3.7-flash:free</code>.",
            ],
            "sections": [
                {
                    "h2": "What belongs on cron",
                    "paras": [
                        "Daily: pick the next brief, render HTML, run the quality gate, commit if it passes. Weekly: Search Console queries, refresh queue, internal-link pass. Never: invent SKUs, send leftover outreach lists, or quote fake ROI.",
                    ],
                    "bullets": [
                        "Pass <code>--workdir</code> at the repo root. Cron jobs do not load project files unless you set it.",
                        "Keep browser and delegation off tiny jobs so tool schema does not eat the context window.",
                        "Deliver a short Telegram summary, not a 4k-token status loop.",
                    ],
                },
                {
                    "h2": "Quality gates beat volume",
                    "paras": [
                        "Google’s 2026 bar punishes template farms. A page publishes here only if it clears word count, unique slug, FAQ schema, canonical, and a CTA to <a href=\"/book/\">/book/</a> — and fails on stub markers like “Not a packaged SKU.” Exponential growth is satellite topics spawned from a good parent, not 500 near-duplicate service URLs.",
                    ],
                },
                {
                    "h2": "Composio, GSC, and the rest of the toolkit",
                    "paras": [
                        "Hermes plus Composio can pull Search Console, draft LinkedIn, and notify Slack. Connections expire. Do not invent CRM numbers when HubSpot is dark. SerpAPI 429s are a stop, not a retry storm. This is the same honesty rule as <a href=\"/llms.txt\">llms.txt</a>.",
                    ],
                },
                {
                    "h2": "Want it mapped on your stack?",
                    "paras": [
                        "Discovery ($99) maps which jobs are safe on cron: content, integrity, lead follow-up. Implementation is separate. <a href=\"/plans/\">Plans</a>. Related reading: <a href=\"/blog/ai-agent-governance-enterprise/\">governance</a>.",
                    ],
                },
            ],
            "faqs": [
                {
                    "q": "Can Hermes publish to GitHub Pages unattended?",
                    "a": "Yes if the quality gate is in CI and the job has git credentials. Unattended without a gate is how thin pages land in the sitemap.",
                },
                {
                    "q": "Which model should cron use?",
                    "a": "A live Nous/OpenRouter id. Never model=local. Pin jobs when the catalog moves; see the repo pin script.",
                },
                {
                    "q": "Is this a packaged Hermes product?",
                    "a": "No. Zion uses Hermes internally and will map a loop for you after Discovery. There is no free consultation.",
                },
            ],
            "cta": {
                "h2": "Map a safe cron loop — Discovery $99",
                "p": "We write which jobs can run unattended and which still need a human.",
            },
            "related": [
                {"href": "/blog/ai-agent-governance-enterprise/", "label": "Agent governance"},
                {"href": "/blog/composio-vs-zapier-for-ai-agents-2026/", "label": "Composio vs Zapier"},
                {"href": "/hermes-agent-introducao/", "label": "Hermes introdução"},
            ],
            "satellites": [
                {"slug": "hermes-cron-model-pin-guide", "title": "Pin Hermes Cron Off model=local", "angle": "HTTP 400 failure mode.", "primary_keyword": "Hermes cron model local"},
                {"slug": "hermes-skills-for-seo-briefs", "title": "Hermes Skills for SEO Briefs, Not Thin Pages", "angle": "Skill design.", "primary_keyword": "Hermes SEO skill"},
                {"slug": "git-native-content-loop-github-actions", "title": "Git-Native Content Loop on GitHub Actions", "angle": "CI publisher.", "primary_keyword": "GitHub Actions SEO content loop"},
            ],
        },
        {
            "slug": "composio-vs-zapier-for-ai-agents-2026",
            "lang": "en",
            "cluster": "Integrations",
            "title": "Composio vs Zapier for AI Agents in 2026: Auth, Tools, and Stop Rules",
            "h1": "Composio vs Zapier for AI Agents in 2026: Auth, Tools, and Stop Rules",
            "description": "Composio vs Zapier for AI agents: managed auth and LLM tool calling vs iPaaS zaps. Honest fit, then Discovery $99 — not a packaged integration SKU.",
            "keywords": ["Composio vs Zapier", "Composio AI agents", "Zapier vs agent toolkits 2026"],
            "date": DATE,
            "read_minutes": 8,
            "tags": "Composio, Zapier, Agents",
            "excerpt": "Zapier is a zap. Composio is an action layer for agents that already have a job and stop rules. Pick the layer you are actually buying.",
            "primary_keyword": "Composio vs Zapier",
            "intro": [
                "Teams shopping “AI automation” mix two products. Zapier (and Make, n8n) run predetermined zaps. Composio exposes authenticated tools to an agent that chooses the next call. If you do not have a job graph, Zapier is simpler. If you have an agent, zaps become a second brain that fights the first.",
                "Zion runs live agents against Composio toolkits. That is not a public tool hub and not a free connector pack. Comparison landing: <a href=\"/composio-vs-zapier/\">/composio-vs-zapier/</a>. Commercial map: <a href=\"/book/\">Discovery $99</a>.",
            ],
            "sections": [
                {
                    "h2": "What you are actually paying for",
                    "paras": [
                        "Zapier: trigger → steps you drew. Good for “invoice paid → Slack.” Weak for “read the ticket, then maybe draft, then maybe route.” Composio: OAuth lifecycle and LLM-ready tools so the agent can call Gmail, HubSpot, or GitHub without your code owning refresh tokens.",
                    ],
                },
                {
                    "h2": "Auth is the hard part",
                    "paras": [
                        "Agents fail on expired connections, not on prompts. If HubSpot is dark, do not invent pipeline numbers. If SerpAPI 429s, stop. The same honesty belongs in cron summaries. See <a href=\"/blog/hermes-agent-uninterrupted-ops-loop/\">Hermes ops loop</a>.",
                    ],
                },
                {
                    "h2": "When to stay on Zapier",
                    "paras": [
                        "Fixed, low-risk, human-defined sequences. No tenant isolation problem. No model choosing a write. If a non-technical ops person must edit the flow this week, a zap is kinder than an agent graph.",
                    ],
                },
                {
                    "h2": "When an agent layer wins",
                    "paras": [
                        "Variable inputs, many tools, need for a step log and a kill switch. You still write stop rules. Composio does not remove governance. <a href=\"/blog/ai-agent-governance-enterprise/\">Governance</a>.",
                    ],
                },
            ],
            "faqs": [
                {
                    "q": "Is Composio a Zapier killer?",
                    "a": "No. Different layer. Many companies will keep zaps for deterministic ops and use an agent toolkit for jobs that branch.",
                },
                {
                    "q": "Does Zion resell Composio?",
                    "a": "We use it. Discovery maps whether your first workflow needs zaps, an agent toolkit, or neither. There is no public affiliate program.",
                },
                {
                    "q": "Can we mix both?",
                    "a": "Yes. A zap can trigger a job; the agent should not silently rewrite the zap. Name the system of record.",
                },
            ],
            "cta": {
                "h2": "Map the integration layer — $99",
                "p": "Zap, agent toolkit, or a spreadsheet. We write which one matches the job.",
            },
            "related": [
                {"href": "/composio-vs-zapier/", "label": "Composio vs Zapier landing"},
                {"href": "/composio-vs-n8n-make/", "label": "Composio vs n8n / Make"},
                {"href": "/blog/hermes-agent-uninterrupted-ops-loop/", "label": "Hermes loop"},
            ],
            "satellites": [
                {"slug": "composio-vs-make-n8n-for-agents", "title": "Composio vs Make vs n8n for Agents", "angle": "Three layers.", "primary_keyword": "Composio vs Make vs n8n"},
                {"slug": "expired-oauth-kills-agents", "title": "Expired OAuth Kills Agents Faster Than Bad Prompts", "angle": "Connection health.", "primary_keyword": "OAuth expired AI agent"},
                {"slug": "when-to-keep-zapier-with-agents", "title": "Keep Zapier for Deterministic Steps Beside Agents", "angle": "Hybrid.", "primary_keyword": "Zapier plus AI agents"},
            ],
        },
        {
            "slug": "what-you-get-from-99-ai-it-discovery",
            "lang": "en",
            "cluster": "Commercial",
            "title": "What You Get From a $99 AI/IT Discovery (and What You Don’t)",
            "h1": "What You Get From a $99 AI/IT Discovery (and What You Don’t)",
            "description": "Zion’s $99 AI/IT Discovery is a 30-minute Google Meet plus written follow-up. No free consultation, no implementation, no fake ROI. Book the live Calendly event.",
            "keywords": ["$99 AI discovery", "AI IT discovery Zion", "paid discovery call"],
            "date": DATE,
            "read_minutes": 7,
            "tags": "Discovery, Pricing",
            "excerpt": "Discovery is a map. It is not a free consult, not a retainer, and not a promise that an agent will run the company.",
            "primary_keyword": "$99 AI discovery",
            "intro": [
                "Public 2026 AI-consulting writeups price discovery in the thousands. Zion’s live Discovery is $99 for a 30-minute Google Meet with Kleber Alcatrao. The only active Calendly event is <code>zion-tech-group-ai-it-discovery-1</code>. Older consultation links are inactive.",
                "Pay optional Stripe first or book the slot. Either way you are buying a map, not a build. Plans: <a href=\"/plans/\">/plans/</a>. Book: <a href=\"/book/\">/book/</a>. Compare tracks: <a href=\"/blog/discovery-vs-starter-zion/\">Discovery vs Starter</a>.",
            ],
            "sections": [
                {
                    "h2": "What the 30 minutes are for",
                    "paras": [
                        "One workflow. The system of record. The irreversible action. Whether isolation can be written. You should leave with a recommended track: stop, consulting ($499), Starter ($2,500), or a later Growth retainer — not a 40-page deck.",
                    ],
                },
                {
                    "h2": "What Discovery is not",
                    "paras": [
                        "Not implementation. Not a free hour. Not a packaged RPA catalog. Not leftover <code>/services/*</code> URLs. Those pages are honest closers, not products. The only $99 offer is this Discovery.",
                    ],
                    "bullets": [
                        "No invented ticket-deflection or cloud-savings percentage.",
                        "No obligation to buy Starter.",
                        "No access to expired CRM numbers we do not have.",
                    ],
                },
                {
                    "h2": "How to prepare",
                    "paras": [
                        "Bring the queue name, the tool that would hurt if the agent wrote to it, and last month’s relevant invoice if cost is the issue. If you are in Brazil and the queue is WhatsApp, say so — the map changes. <a href=\"/blog/agente-de-ia-para-whatsapp-empresas/\">Agente de IA para WhatsApp</a>.",
                    ],
                },
                {
                    "h2": "After the call",
                    "paras": [
                        "Written follow-up: first-workflow sketch, constraints, yes/no. If we should not work together, that is a successful Discovery. Stripe success currently routes through <a href=\"/success-stories/\">/success-stories/</a>.",
                    ],
                },
            ],
            "faqs": [
                {
                    "q": "Is there a free consultation?",
                    "a": "No. Older Calendly “30 Minute Meeting” and /consultation links are inactive. The live event is paid Discovery.",
                },
                {
                    "q": "Can I pay the $99 after the call?",
                    "a": "You can book the Meet first or pay Stripe first. The product is the same map. Implementation is always a separate scope.",
                },
                {
                    "q": "Will you sign an NDA on the call?",
                    "a": "Say so when you book. Do not paste secrets into a form. Discovery does not require production credentials.",
                },
            ],
            "cta": {
                "h2": "Book the live Discovery",
                "p": "30 minutes, Google Meet, written follow-up. $99. No free consultation.",
            },
            "related": [
                {"href": "/book/", "label": "Book"},
                {"href": "/blog/discovery-vs-starter-zion/", "label": "Discovery vs Starter"},
                {"href": "/blog/how-much-does-ai-consultant-cost-2026/", "label": "Consultant cost 2026"},
            ],
            "satellites": [
                {"slug": "prepare-for-zion-discovery-call", "title": "How to Prepare for the Zion Discovery Call", "angle": "Artifacts to bring.", "primary_keyword": "prepare AI discovery call"},
                {"slug": "discovery-vs-499-consulting", "title": "Discovery $99 vs Consulting $499", "angle": "When the longer session is worth it.", "primary_keyword": "AI consulting 499 vs 99"},
                {"slug": "why-zion-discovery-is-paid", "title": "Why Zion Discovery Is Paid", "angle": "Filter and written work.", "primary_keyword": "paid discovery call AI"},
            ],
        },
        {
            "slug": "measuring-ai-roi-frameworks-for-enterprises",
            "lang": "en",
            "cluster": "Digital Transformation",
            "title": "Measuring AI ROI: A Framework That Survives a Board Packet",
            "h1": "Measuring AI ROI: A Framework That Survives a Board Packet",
            "description": "Measure AI ROI with a unit of work, cost tags, and a human baseline — not a vendor percentage. Framework for enterprises, then Discovery $99 to map the first metric.",
            "keywords": ["measuring AI ROI", "AI ROI framework enterprises", "AI business case"],
            "date": DATE,
            "read_minutes": 8,
            "tags": "ROI, Board, AI",
            "excerpt": "AI ROI is unit cost versus a human baseline you already trust. If you cannot name the unit, you do not have ROI. You have a demo.",
            "primary_keyword": "measuring AI ROI",
            "intro": [
                "Boards are done with transformation decks. They want the unit: cost per ticket classified, per contract extracted, per overnight batch — against the human baseline and the new model invoice.",
                "Zion will not invent a return percentage. We will map the first metric in <a href=\"/book/\">Discovery $99</a>. Longer case writeup: <a href=\"/blog/ai-consulting-roi-board/\">ROI for the board</a> and <a href=\"/blog/ai-roi-calculator-business-case/\">ROI calculator</a>.",
            ],
            "sections": [
                {
                    "h2": "Name the unit before the model",
                    "paras": [
                        "If the workflow is “customer support,” you cannot measure it. If the workflow is “classify severity and draft the first internal note,” you can count. Pair that count with tagged usage. <a href=\"/blog/ai-finops-for-growing-companies/\">AI FinOps</a>.",
                    ],
                },
                {
                    "h2": "Baseline without theater",
                    "paras": [
                        "Sample last month’s queue. Time-to-first-response, error rate, rework. Do not use a vendor’s “industry average.” If you do not have the sample, Discovery’s job is to say so.",
                    ],
                },
                {
                    "h2": "Costs the slide forgets",
                    "paras": [
                        "Eval traffic, retries, human exception queue, integration auth, and the week you pause because OAuth expired. Those belong in the denominator. Governance: <a href=\"/blog/ai-agent-governance-enterprise/\">agent governance</a>.",
                    ],
                },
                {
                    "h2": "What goes in the packet",
                    "paras": [
                        "One workflow, unit, baseline, cost tags, stop rules, decision: scale, iterate, or kill. Not a five-year NPV with a made-up adoption curve.",
                    ],
                },
            ],
            "faqs": [
                {
                    "q": "Can you calculate ROI on the Discovery call?",
                    "a": "We can sketch the unit and whether data exists. A board-ready number needs the sample and the invoice. Discovery does not include a full model.",
                },
                {
                    "q": "What if the baseline is embarrassing?",
                    "a": "Then that is the finding. Shipping an agent on top of an unmeasured queue just automates the mess.",
                },
                {
                    "q": "Is there a free ROI workshop?",
                    "a": "No. Paid Discovery is the entry. Implementation and retainers are separate.",
                },
            ],
            "cta": {
                "h2": "Map the first metric — $99",
                "p": "Bring the queue sample and the invoice if you have them. We write the unit.",
            },
            "related": [
                {"href": "/blog/ai-consulting-roi-board/", "label": "ROI for the board"},
                {"href": "/blog/ai-roi-calculator-business-case/", "label": "ROI calculator"},
                {"href": "/blog/how-much-does-ai-consultant-cost-2026/", "label": "Consultant cost"},
            ],
            "satellites": [
                {"slug": "ai-roi-unit-of-work-examples", "title": "AI ROI Units of Work You Can Actually Count", "angle": "Tickets, docs, batches.", "primary_keyword": "AI ROI unit of work"},
                {"slug": "include-exception-queue-in-ai-roi", "title": "Put the Exception Queue in the ROI Denominator", "angle": "Hidden human cost.", "primary_keyword": "AI exception queue cost"},
                {"slug": "kill-criteria-for-ai-pilots", "title": "Kill Criteria for AI Pilots", "angle": "When to stop.", "primary_keyword": "AI pilot kill criteria"},
            ],
        },
    ]


FIELD_NOTES = {
    "ai-agents-for-msps-first-workflow": [
        "A PSA category named “other” is not a workflow. Split it before you connect a model. The first month of an MSP agent is almost always taxonomy work: severity, customer, asset, and whether this is a request or an incident. Skip that and the model will sound confident while routing password resets into the network queue.",
        "Ask the service desk which tickets they already copy-paste between tools. That glue is the agent candidate. If nobody can show you a repeated copy-paste, you do not have volume — you have a political request for “AI” on a slide.",
        "Keep a rollback: disable the agent, leave the PSA up. Practice that rollback once before go-live. Cron jobs that cannot be paused are not automation. They are a second outage domain.",
    ],
    "ai-finops-for-growing-companies": [
        "Put a daily cap on the production key that is slightly above last week’s p95. Caps are not punishment. They are how you notice a retry storm at 2 a.m. instead of on the credit-card statement.",
        "If you use more than one model vendor, normalize the unit to tokens or to workflow completions — not to “calls.” A call that stuffed the entire ticket history into context is not the same product as a classify-only call.",
        "Finance should see a line for eval/replay separate from serving. Otherwise every quality improvement looks like a production regression in the bill, and teams stop measuring.",
    ],
    "adaptive-ai-agents-for-business": [
        "Draw the graph on one page before any framework. Boxes are tools. Diamonds are branches that already have an owner. If you need a second page, the first workflow is too big.",
        "Adaptation that rewrites the graph from production traces without review is just unsupervised policy change. Keep the gold set in git. Promote a new branch the same way you promote code.",
        "Language switching, missing fields, and vendor error shapes are legitimate adaptive cases. Refunds, identity, and wire transfers are not. Write that list on the wall.",
    ],
    "building-ai-agent-workflows-for-small-business": [
        "Your first agent should be allowed to fail closed: draft sits in a folder the owner already checks. If the owner does not already check that folder, you added a silent queue, not automation.",
        "Count how many times the same reply was sent last week. If the number is small, a snippet in the helpdesk is cheaper than an agent. Agents earn their keep on repetition plus tool calls, not on novelty.",
        "Write the disable switch in the same password manager as the domain registrar. When a loop goes wrong on a Friday, you will not want to open a vendor ticket.",
    ],
    "zero-trust-for-smbs-implementation-checklist": [
        "Inventory browser extensions and OAuth apps that already have mail or drive scope. Several “AI assistants” ask for the whole mailbox. That is a bigger hole than the VPN you have been arguing about.",
        "Shared admin via a password manager group is still a shared admin. Break-glass should be a named, monitored account with hardware MFA — not a Slack message with a TOTP screenshot.",
        "Contractors get a workspace account you can disable in one click. Personal Gmail plus a forwarding rule is not Zero Trust. It is hope.",
    ],
    "cloud-cost-optimization-for-growing-startups": [
        "The first dashboard you need is not a FinOps platform. It is the native bill grouped by service and tag, exported to a sheet the founder actually opens. Fancy allocation comes after that habit exists.",
        "CI that builds a full production-shaped stack on every pull request is a classic leak. Cache images. TTL the preview. Fail the pipeline if a resource has no owner tag.",
        "GPU demos left on over the weekend are still the funniest line item we see. Calendar a shutdown. Treat “I’ll turn it off later” as a production incident waiting for a weekend.",
    ],
    "agente-de-ia-para-whatsapp-empresas": [
        "Escreva o script como se fosse um funcionário novo: o que pode dizer, o que deve perguntar, quando chama um humano. Se o script não cabe em uma página, o bot vai improvisar — e improvisar em clínica ou imobiliária é risco jurídico, não inovação.",
        "Separe o número oficial do número da dona. Agente em número pessoal mistura família, cliente e LGPD. API oficial existe por um motivo.",
        "Meça fila: tempo até primeira resposta humana depois do rascunho, não “mensagens do bot.” Bot falador com humano ausente só treina o cliente a desistir.",
    ],
    "agente-de-ia-para-vendas-pme": [
        "Defina três campos mínimos antes de qualquer escrita no CRM: nome, telefone ou e-mail, e origem. Sem isso o agente duplica lead e o comercial perde fé no funil.",
        "Desconto, prazo e escopo são verbos humanos. O agente pode dizer “vou encaminhar.” Não pode dizer “fica em dez por cento.” Grave isso no script, não só no prompt.",
        "Se a prospecção fria entrar na conversa, pare. Lista sem base legal e sem opt-out queima o domínio e o WhatsApp Business. Discovery não inclui campanha fria.",
        "Combine um horário em que um humano revisa os rascunhos. Sem essa janela o comercial acorda com dezenas de mensagens já enviadas e nenhum contexto. Rascunho sem revisão não é velocidade. É dívida.",
    ],
    "empresa-de-ti-terceirizada-pme-brasil": [
        "Peça o último teste de restore, não o slide de backup. PME perde dados em ransomware com backup “verde” que nunca restaurou o arquivo que importa.",
        "Pergunte quem é o admin do tenant Microsoft 365 no dia da rescisão. Se a resposta for “a gente vê depois,” você está comprando um sequestro suave de identidade.",
        "Field service nacional e agente de IA não são o mesmo produto. Se você precisa de visita na loja, diga isso no Discovery. Forçar automação em cima de cabo solto não reduz chamado.",
    ],
    "hermes-agent-uninterrupted-ops-loop": [
        "Cron without workdir starts in a random home directory and then “cannot find the repo.” Set workdir. Pin the model. Deliver a short summary. Status-loop language wastes the channel and hides failures.",
        "A content loop that cannot fail a quality gate will eventually publish a stub. The gate is the product. Volume is a side effect of a full brief folder, not a goal by itself.",
        "When Composio connections expire, the job should say so and stop — not invent HubSpot counts. Honesty in cron is the same honesty as llms.txt.",
    ],
    "composio-vs-zapier-for-ai-agents-2026": [
        "If a non-technical operator must change the flow this week, a zap (or n8n) is usually kinder. Agents shine when the next tool call depends on messy input you refuse to fully standardize yet — still with a written stop.",
        "Count expired OAuth before you blame the prompt. A brilliant graph with a dead Gmail token is a brick. Connection health belongs on the same board as uptime.",
        "Do not let the agent edit the zap that triggers it. Two writers, one production path, no log. Name a system of record.",
    ],
    "what-you-get-from-99-ai-it-discovery": [
        "Bring constraints, not a vision deck. The useful artifacts are: the queue name, the tool that would hurt, and whether anyone can disable a future agent. Vision without those three becomes a complimentary-sounding workshop we do not sell.",
        "If we tell you not to build yet, that is the deliverable. Paying $99 to avoid a $2,500 wrong Starter is a successful Discovery.",
        "Credentials stay with you. We do not need production admin on the call. Screenshare the map, not the break-glass password.",
    ],
    "measuring-ai-roi-frameworks-for-enterprises": [
        "Pick a sample size you can actually label: fifty tickets, twenty contracts, one overnight batch window. A year of unlabelled history is not a baseline. It is a pile.",
        "Put exception-queue hours in the denominator. If a human still touches every item, you bought a draft assistant. Price it like one.",
        "Kill criteria belong in the packet: error rate, cost per unit, or time-to-first-response worse than baseline for two consecutive weeks. Without kill criteria, the pilot cannot fail — and therefore cannot succeed.",
        "If two departments cannot agree on the unit, you do not have an ROI problem. You have a product-definition problem. Discovery should say that out loud before anyone buys GPUs.",
    ],
    "zero-trust-for-smbs-implementation-checklist": [
        "Start with the four systems that would hurt: identity, email, bank/ERP, cloud console. Ignore the rest of the acronym list until those four refuse unmanaged devices and shared passwords.",
        "Phone MFA for admins is better than nothing and worse than a hardware key. Budget the keys. They cost less than one incident.",
        "Document joiner/mover/leaver as a ticket template. Verbal offboarding is how ex-employees keep a shared Drive link.",
    ],
}


def enrich(brief: dict) -> dict:
    notes = FIELD_NOTES.get(brief["slug"]) or [
        "Write the job, the tools, and the stop before you pick a model. Discovery exists to force that order.",
        "Implementation is a separate priced scope. The live bookable offer remains the $99 map.",
        "Do not index a page that cannot name a unit of work and a human owner.",
    ]
    keyword = brief.get("primary_keyword") or brief["title"]
    lang = brief.get("lang", "en")
    if lang.startswith("pt"):
        closing = {
            "h2": "Como usar este guia no Discovery",
            "paras": [
                f"Se você chegou aqui buscando “{keyword}”, o próximo passo não é um RFP de plataforma. É nomear a fila, a ferramenta que dói se o agente escrever nela, e a pessoa que desliga o fluxo. Traga esses três itens para o <a href=\"/book/\">Discovery de US$ 99</a>.",
                "Implementação, retainer e integração com WhatsApp, CRM ou PSA são escopos depois do mapa. Não há sessão gratuita. Links antigos de Calendly estão inativos. Preços vivos ficam em <a href=\"/plans/\">/plans/</a>.",
                "Recuse qualquer parceiro que precise inventar percentual de economia ou de tickets para justificar o trabalho. Unidade de trabalho, custo etiquetado e regra de parada cabem em uma página. Se não cabem, o projeto ainda não existe.",
                "A Zion é uma firma de TI em Delaware com agentes em produção em dezenas de toolkits Composio. Isso não vira catálogo de SKU. O único produto agendável hoje é o mapa pago. O restante se escreve depois, ou não se escreve.",
                "Depois do mapa, o critério de sucesso é operacional: o humano vê o passo, o stop, e retoma o fio. Se isso não for demonstrável, não publique o agente — e não publique a página fingindo que o agente já existe.",
            ],
        }
    else:
        closing = {
            "h2": "How to use this guide in Discovery",
            "paras": [
                f"If you arrived on this page for “{keyword}”, the next step is not a platform RFP. Name the queue, the tool that would hurt if an agent wrote to it, and the person who can disable the flow. Bring those three to <a href=\"/book/\">Discovery at $99</a>.",
                "Implementation, retainers, and PSA/WhatsApp/CRM wiring are scoped after the map. There is no complimentary session. Older Calendly links are inactive. Live prices sit on <a href=\"/plans/\">/plans/</a>.",
                "Refuse a partner who needs an invented savings or ticket percentage to justify the work. A unit of work, tagged cost, and a stop rule fit on one page. If they do not, the project does not exist yet.",
                "Zion is a Delaware IT firm with production agents on dozens of Composio toolkits. That is not a SKU catalog. The only bookable product today is the paid map. Everything else is written after — or not at all.",
                "After the map, success is operational: a human can see the step, the stop, and pick up the thread. If that is not demonstrable, do not ship the agent — and do not publish a page that pretends the agent already exists.",
            ],
        }
    brief.setdefault("intro", [])
    brief["intro"] = list(brief["intro"]) + notes[:1]
    brief.setdefault("sections", [])
    brief["sections"] = list(brief["sections"]) + [
        {"h2": "Field notes from scoping calls" if not lang.startswith("pt") else "Notas de campo", "paras": notes},
        closing,
    ]
    return brief


def main() -> None:
    for article in ARTICLES + more_articles() + pt_articles() + remaining():
        dump(enrich(article))


if __name__ == "__main__":
    main()
