#!/usr/bin/env python3
"""Generate all missing app pages for the Zion Apps Network."""
import os
import json

REPO = "/Users/miami2/zion-support.github.io"
APP_DIR = os.path.join(REPO, "app")

# All missing apps with their content
APPS = [
    # Money & FinOps
    {"slug": "llm-gateway", "name": "LLM Gateway", "group": "ai", "desc": "Smart model routing, caching & failover for LLM deployments.", "related": ["token-cost", "model-observatory", "prompt-shield", "finops-estimator"], "icon": "🧠", "features": ["Multi-provider routing (OpenAI, Anthropic, local)", "Response caching & deduplication", "Automatic failover on rate limits", "Cost-aware model selection", "Latency optimization"]},
    {"slug": "prompt-shield", "name": "Prompt Shield", "group": "ai", "desc": "LLM security testing & prompt-injection defense.", "related": ["ai-governance-checklist", "secrets-sentinel", "llm-gateway", "stack-audit"], "icon": "🛡️", "features": ["Prompt injection attack simulation", "Jailbreak detection & blocking", "Output filtering & sanitization", "Security audit reporting", "Compliance scoring"]},
    {"slug": "model-observatory", "name": "Model Observatory", "group": "ai", "desc": "ML/LLM observability, drift detection, cost telemetry.", "related": ["llm-gateway", "token-cost", "finops-autopilot", "prompt-shield"], "icon": "🔭", "features": ["Model performance tracking", "Data drift detection", "Cost telemetry & attribution", "Alert configuration", "A/B testing support"]},
    {"slug": "finops-autopilot", "name": "FinOps Autopilot", "group": "money", "desc": "Cloud cost anomaly detection & rightsizing.", "related": ["cloud-waste", "finops-estimator", "cloud-cost-estimator", "token-cost"], "icon": "💰", "features": ["Anomaly detection on cloud spend", "Rightsizing recommendations", "Reserved instance planning", "Budget alerts & forecasting", "Multi-cloud cost comparison"]},
    {"slug": "cloud-waste", "name": "Cloud Waste", "group": "money", "desc": "Idle / over-provision sketch for cloud + model lines.", "related": ["finops-estimator", "finops-autopilot", "cloud-cost-estimator", "roi-calc"], "icon": "☁️", "features": ["Idle resource identification", "Over-provisioning analysis", "Storage tier optimization", "Compute rightsizing", "Savings opportunity scoring"]},
    {"slug": "cloud-cost-estimator", "name": "Cloud Cost Estimator", "group": "money", "desc": "Multi-cloud compute & serverless price comparison.", "related": ["cloud-waste", "finops-estimator", "finops-autopilot", "roi-calc"], "icon": "💸", "features": ["AWS vs Azure vs GCP pricing", "Serverless cost modeling", "Compute & storage comparison", "Network egress estimation", "TCO analysis"]},

    # Ops & Incidents
    {"slug": "ops-runbook-ai", "name": "Ops Runbook AI", "group": "ops", "desc": "Operational runbooks generated from incidents.", "related": ["zion-ai-incident-commander", "incident-cost", "change-risk", "patch-window"], "icon": "📋", "features": ["Auto-generate runbooks from incidents", "Step-by-step remediation guides", "Integration with monitoring tools", "Version control & history", "Team collaboration"]},
    {"slug": "ai-tender-scout", "name": "AI Tender Scout", "group": "govern", "desc": "Public-sector bid discovery & proposal support.", "related": ["licitacao-radar", "rfp-readiness", "edital-desk", "ai-governance-checklist"], "icon": "🎯", "features": ["Public tender monitoring", "Bid deadline alerts", "Proposal template generation", "Compliance requirement tracking", "Win/loss analytics"]},
    {"slug": "depot-stock-balancer", "name": "Depot Stock Balancer", "group": "field", "desc": "Balance inventory across depots with recommendations.", "related": ["zion-ai-spare-parts-matcher", "warranty-lens", "zion-ai-field-dispatch-optimizer", "zion-ai-rma-tracker"], "icon": "📦", "features": ["Multi-depot inventory visibility", "Stock level optimization", "Rebalancing recommendations", "Transfer order automation", "Demand forecasting"]},

    # Governance & Bids
    {"slug": "edital-desk", "name": "Edital Desk", "group": "work", "desc": "RFQ / TR brief. No invented hardware prices.", "related": ["rfp-readiness", "licitacao-radar", "ai-tender-scout", "agent-brief"], "icon": "📝", "features": ["Edital & TR parsing", "Requirement extraction", "Compliance checklist", "Response template generation", "Submission tracking"]},
    {"slug": "licitacao-radar", "name": "Licitação Radar", "group": "govern", "desc": "Monitoramento de licitações públicas no Brasil.", "related": ["rfp-readiness", "edital-desk", "ai-tender-scout", "zion-ai-trade-compliance-checker"], "icon": "📡", "features": ["Real-time bid monitoring", "Category & keyword filtering", "Deadline alerts", "Document download", "Bid status tracking"]},
    {"slug": "rfp-readiness", "name": "RFP Readiness", "group": "govern", "desc": "Score an edital / RFQ before you bid.", "related": ["edital-desk", "licitacao-radar", "ai-tender-scout", "stack-audit"], "icon": "📊", "features": ["Automated RFP scoring", "Compliance gap analysis", "Win probability estimation", "Resource planning", "Bid/no-bid recommendation"]},
    {"slug": "incident-cost", "name": "Incident Cost", "group": "ops", "desc": "Revenue + users + hours down → a Discovery number.", "related": ["sla-calculator", "change-risk", "zion-ai-incident-commander", "ops-runbook-ai"], "icon": "💥", "features": ["Revenue impact calculation", "User disruption metrics", "SLA penalty estimation", "Root cause analysis", "Trend reporting"]},
    {"slug": "change-risk", "name": "Change Risk", "group": "ops", "desc": "Score change risk before a patch window.", "related": ["patch-window", "incident-cost", "stack-audit", "ops-runbook-ai"], "icon": "⚠️", "features": ["Change risk scoring", "Impact assessment", "Rollback planning", "Approval workflow integration", "Historical analysis"]},
    {"slug": "patch-window", "name": "Patch Window", "group": "ops", "desc": "Maintenance nights for a patch batch.", "related": ["change-risk", "incident-cost", "sla-calculator", "ops-runbook-ai"], "icon": "🔧", "features": ["Patch scheduling", "Conflict detection", "Rollback planning", "Notification automation", "Compliance tracking"]},
    {"slug": "token-cost", "name": "Token Cost", "group": "money", "desc": "LLM spend envelope before you ship an agent.", "related": ["llm-gateway", "finops-estimator", "roi-calc", "model-observatory"], "icon": "🪙", "features": ["Token usage tracking", "Cost per request analysis", "Model comparison", "Budget forecasting", "Optimization suggestions"]},
    {"slug": "sla-calculator", "name": "SLA Calculator", "group": "ops", "desc": "Allowed downtime and penalty exposure.", "related": ["incident-cost", "change-risk", "patch-window", "zion-ai-sla-breach-sentinel"], "icon": "⏱️", "features": ["Uptime/downtime calculation", "Penalty exposure modeling", "SLA tier comparison", "Credit calculation", "Compliance reporting"]},
    {"slug": "roi-calc", "name": "ROI Calculator", "group": "money", "desc": "Hours leaked vs official SKUs.", "related": ["token-cost", "finops-estimator", "cloud-waste", "agent-brief"], "icon": "📈", "features": ["Hours saved calculation", "Cost-benefit analysis", "Payback period", "TCO comparison", "Executive summary"]},
    {"slug": "finops-estimator", "name": "FinOps Estimator", "group": "money", "desc": "Compute, storage, egress and model spend sketch.", "related": ["cloud-waste", "finops-autopilot", "cloud-cost-estimator", "roi-calc"], "icon": "💹", "features": ["Compute cost estimation", "Storage tier analysis", "Egress cost modeling", "Model spend tracking", "Optimization recommendations"]},
    {"slug": "stack-audit", "name": "Stack Audit", "group": "govern", "desc": "Ten yes/no checks that pick the next SKU.", "related": ["ai-governance-checklist", "agent-brief", "rfp-readiness", "prompt-library"], "icon": "🔍", "features": ["10-point infrastructure audit", "Cloud readiness scoring", "Security posture assessment", "Cost optimization opportunities", "Roadmap recommendations"]},
    {"slug": "ai-governance-checklist", "name": "AI Governance Checklist", "group": "govern", "desc": "Ten controls. Live readiness score.", "related": ["prompt-shield", "stack-audit", "secrets-sentinel", "model-observatory"], "icon": "✅", "features": ["10 governance controls", "Live readiness score", "Compliance tracking", "Risk assessment", "Remediation planning"]},
    {"slug": "prompt-library", "name": "Prompt Library", "group": "work", "desc": "Ten enterprise IT-ops prompts, copy-ready.", "related": ["agent-brief", "prompt-shield", "llm-gateway", "ai-governance-checklist"], "icon": "📚", "features": ["10 copy-ready prompts", "IT-ops specific templates", "Best practices guide", "Prompt versioning", "Team sharing"]},
    {"slug": "agent-brief", "name": "Agent Brief", "group": "work", "desc": "One-pager for Discovery. Nothing stored.", "related": ["prompt-library", "stack-audit", "llm-gateway", "ai-governance-checklist"], "icon": "📋", "features": ["One-page process map", "Stakeholder identification", "Pain point documentation", "Goal definition", "Discovery session prep"]},

    # Field & Support
    {"slug": "zion-ai-field-dispatch-optimizer", "name": "AI Field Dispatch Optimizer", "group": "field", "desc": "Roteirização e despacho inteligente de técnicos.", "related": ["zion-ai-spare-parts-matcher", "warranty-lens", "zion-ai-rma-tracker", "depot-stock-balancer"], "icon": "🚚", "features": ["Intelligent technician routing", "Skills-based dispatch", "Real-time tracking", "SLA compliance", "Multi-site optimization"]},
    {"slug": "zion-ai-spare-parts-matcher", "name": "AI Spare Parts Matcher", "group": "field", "desc": "Match spare parts by part number, photo, and equivalence.", "related": ["zion-ai-field-dispatch-optimizer", "warranty-lens", "depot-stock-balancer", "zion-ai-rma-tracker"], "icon": "🔩", "features": ["Part number matching", "Photo-based identification", "Cross-vendor equivalence", "Compatibility verification", "Availability checking"]},
    {"slug": "warranty-lens", "name": "Warranty Lens", "group": "field", "desc": "Warranty lookup by serial with coverage history.", "related": ["zion-ai-spare-parts-matcher", "zion-ai-rma-tracker", "zion-ai-field-dispatch-optimizer", "zion-ai-warranty-tracker"], "icon": "🔎", "features": ["Serial number lookup", "Coverage history", "Expiry alerts", "Claim tracking", "Multi-vendor support"]},
    {"slug": "zion-ai-rma-tracker", "name": "AI RMA Tracker", "group": "field", "desc": "RMA tracking with status, deadlines, and alerts.", "related": ["warranty-lens", "zion-ai-field-dispatch-optimizer", "zion-ai-spare-parts-matcher", "depot-stock-balancer"], "icon": "📦", "features": ["End-to-end RMA lifecycle", "Status tracking", "Deadline alerts", "Approval workflows", "Reporting & analytics"]},
    {"slug": "zion-ai-incident-commander", "name": "AI Incident Commander", "group": "ops", "desc": "Incident response orchestration and automation.", "related": ["incident-cost", "ops-runbook-ai", "change-risk", "patch-window"], "icon": "🚨", "features": ["Incident orchestration", "Automated response playbooks", "Stakeholder notification", "Timeline tracking", "Post-incident analysis"]},
    {"slug": "secrets-sentinel", "name": "Secrets Sentinel", "group": "govern", "desc": "Secret scanning and leak response.", "related": ["prompt-shield", "ai-governance-checklist", "stack-audit", "model-observatory"], "icon": "🔐", "features": ["Automated secret scanning", "Leak detection & alerting", "Revocation workflows", "Compliance reporting", "Integration with vaults"]},
    {"slug": "zion-ai-warranty-tracker", "name": "AI Warranty Tracker", "group": "field", "desc": "Hardware warranty & EOSL tracking with renewal alerts.", "related": ["warranty-lens", "zion-ai-warranty-lifecycle", "zion-ai-rma-tracker", "zion-ai-spare-parts-matcher"], "icon": "📅", "features": ["Multi-vendor warranty tracking", "EOSL/EOL monitoring", "Renewal alerts", "Coverage gap analysis", "Budget planning"]},
    {"slug": "zion-ai-warranty-lifecycle", "name": "AI Warranty Lifecycle", "group": "field", "desc": "AI-powered warranty & EOL/EOSL lifecycle tracker for enterprise hardware.", "related": ["zion-ai-warranty-tracker", "warranty-lens", "zion-ai-rma-tracker", "zion-ai-spare-parts-matcher"], "icon": "🔄", "features": ["Full lifecycle tracking", "EOL/EOSL forecasting", "Refresh planning", "Compliance documentation", "Cost optimization"]},
    {"slug": "zion-ai-site-survey-planner", "name": "AI Site Survey Planner", "group": "field", "desc": "Pre-visit checklists, site access docs and deployment readiness packs.", "related": ["zion-ai-site-survey-brief", "zion-ai-field-dispatch-optimizer", "warranty-lens", "zion-ai-spare-parts-matcher"], "icon": "📋", "features": ["Pre-visit checklists", "Site access documentation", "Deployment readiness packs", "Safety requirements", "Logistics planning"]},
    {"slug": "zion-ai-site-survey-brief", "name": "AI Site Survey Brief", "group": "field", "desc": "AI-generated pre-visit briefs for data-center and field deployments.", "related": ["zion-ai-site-survey-planner", "zion-ai-field-dispatch-optimizer", "warranty-lens", "zion-ai-spare-parts-matcher"], "icon": "📄", "features": ["AI-generated site briefs", "Power & cooling assessment", "Rack & network planning", "Access & safety documentation", "Parts & tools checklist"]},
    {"slug": "zion-ai-sla-breach-sentinel", "name": "AI SLA Breach Sentinel", "group": "ops", "desc": "SLA monitoring, breach early-warning and credit calculation.", "related": ["sla-calculator", "incident-cost", "change-risk", "patch-window"], "icon": "⚡", "features": ["Real-time SLA monitoring", "Breach early-warning", "Credit calculation", "Penalty tracking", "Compliance reporting"]},
    {"slug": "zion-ai-trade-compliance-checker", "name": "AI Trade Compliance Checker", "group": "govern", "desc": "Import/export classification (HS/ECCN), duties estimation.", "related": ["licitacao-radar", "rfp-readiness", "ai-tender-scout", "edital-desk"], "icon": "🌐", "features": ["HS/ECCN classification", "Duties estimation", "Documentation checklist", "Compliance screening", "Audit trail"]},
    {"slug": "zion-chatbot-builder", "name": "AI Chatbot Builder", "group": "ai", "desc": "Build custom AI chatbots for customer service and support.", "related": ["llm-gateway", "prompt-shield", "model-observatory", "ai-governance-checklist"], "icon": "🤖", "features": ["Visual chatbot builder", "Multi-platform deployment", "Custom training & fine-tuning", "Analytics dashboard", "Integration APIs"]},
    {"slug": "zion-edge-ai-platform", "name": "Edge AI Deployment Platform", "group": "ai", "desc": "Deploy and manage AI models at the edge for low-latency inference.", "related": ["llm-gateway", "model-observatory", "finops-autopilot", "ai-governance-checklist"], "icon": "📡", "features": ["Edge model deployment", "Low-latency inference", "Device management", "OTA updates", "Monitoring & alerting"]},
]

def create_page(app):
    slug = app["slug"]
    name = app["name"]
    desc = app["desc"]
    group = app["group"]
    icon = app["icon"]
    features = app["features"]
    related = app["related"]

    # Create directory
    page_dir = os.path.join(APP_DIR, slug)
    os.makedirs(page_dir, exist_ok=True)

    # Create page.tsx
    page_content = f'''import Link from 'next/link';
import type {{ Metadata }} from 'next';
import {{ APPS_NETWORK_HUB, appsNetworkBySlug, relatedApps }} from '../data/appsNetwork';

export const metadata: Metadata = {{
  title: '{name} — Zion Tech Group',
  description: '{desc}',
  alternates: {{ canonical: 'https://ziontechgroup.com/{slug}/' }},
}};

const FEATURES = {json.dumps(features, ensure_ascii=False)};

export default function Page() {{
  const related = relatedApps('{slug}', 4);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-b from-slate-950 via-purple-950/25 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-400">
            {icon} {group.capitalize()} · Zion Apps Network
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            {desc}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/apps-network/"
              className="rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-200 hover:bg-purple-500/20 transition-colors"
            >
              Apps Network hub
            </Link>
            <Link
              href="/discovery/"
              className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-2 text-sm font-semibold text-white"
            >
              Discovery $99
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-3">Capabilities</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {{FEATURES.map((f) => (
            <div key={{f}} className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 hover:border-purple-500/30 transition-colors">
              <p className="text-sm text-slate-300">{{f}}</p>
            </div>
          ))}}
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-950/80">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-3">Related apps</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {{related.map((r) => (
              <Link
                key={{r.slug}}
                href={{r.href}}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 hover:border-pink-500/30 transition-colors"
              >
                <h3 className="font-semibold text-white">{{r.name}}</h3>
                <p className="text-xs text-slate-500 mt-2">{{r.description}}</p>
              </Link>
            ))}}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-950/40 to-slate-900 p-6">
            <h3 className="text-xl font-semibold text-white">Need this capability in production?</h3>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl">
              Start with a $99 Discovery — one process, one report, one 30-minute session — then
              Consulting, Starter, or Growth.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/discovery/" className="text-purple-300 font-semibold hover:text-pink-300">
                Book Discovery →
              </Link>
              <Link href="/en/plans/" className="text-slate-400 hover:text-white">
                Official plans
              </Link>
              <Link href="/apps-network/" className="text-slate-400 hover:text-white">
                Apps Network hub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}}
'''

    page_path = os.path.join(page_dir, "page.tsx")
    with open(page_path, "w") as f:
        f.write(page_content)

    print(f"✓ Created {slug}/page.tsx")

# Create all pages
for app in APPS:
    create_page(app)

print(f"\n✓ Created {len(APPS)} app pages")
