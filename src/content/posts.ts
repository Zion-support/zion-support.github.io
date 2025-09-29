export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  featured?: boolean;
  readTime?: string;
}

export const posts: BlogPost[] = [
  {
    slug: "agent-blue-green-releases-2026",
    title: "Agent Blue‑Green Releases 2026: Safe, Reversible Automation",
    description: "Deploy agent updates with canaries, budgeted tool actions, and trace‑driven rollbacks.",
    category: "GenAI",
    publishedAt: "2025-10-16",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "edge-llm-safety-caching-2026",
    title: "Edge LLM Safety Caching 2026: Sub‑100ms Prompts with Guardrails",
    description: "Tiered KV, signed configs, and inline filters that keep prompts fast and safe at the edge.",
    category: "Architecture",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "platform-slo-guardrails-2026",
    title: "Platform SLO Guardrails 2026: Scorecards that Prevent Regressions",
    description: "Wire golden paths to SLOs with pre‑merge policy tests and live canaries that keep teams fast.",
    category: "Platform Engineering",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "ai-breach-drills-2026",
    title: "AI Breach Drills 2026: Practicing Safe Autonomy Under Budget",
    description: "Run realistic breach simulations with budgeted actions, approval gates, and instant rollback.",
    category: "Security",
    publishedAt: "2025-10-29",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "ai-governance-scorecards-quickstart-2026",
    title: "AI Governance Scorecards Quickstart 2026: Ship Fast, Stay Safe",
    description: "Lightweight scorecards, PR checks, and canaries that predict outcomes without slowing teams.",
    category: "AI Strategy",
    publishedAt: "2025-10-16",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "edge-agent-observability-2026",
    title: "Edge Agent Observability 2026: Live Traces, Budgets, and Fallbacks",
    description: "Observe multi‑tool agents with user‑centric traces, budgeted actions, and deterministic fallbacks at the edge.",
    category: "Edge Computing",
    publishedAt: "2025-10-16",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "privacy-preserving-feature-flags-2026",
    title: "Privacy‑Preserving Feature Flags 2026: Geo Budgets and On‑Device Filters",
    description: "Sub‑100ms, zero‑regret rollouts using scoped IDs, local filters, and telemetry‑driven rollback.",
    category: "Architecture",
    publishedAt: "2025-10-16",
    featured: false,
    readTime: "7 min read"
  },
  {
    slug: "privacy-first-insights-telemetry-2026",
    title: "Privacy‑First Insights 2026: DP Telemetry Without PII Risk",
    description: "Scoped IDs, field‑level redaction, and aggregation windows for signal‑rich product analytics.",
    category: "Observability",
    publishedAt: "2025-10-16",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "ai-governance-routing-blueprint-2026",
    title: "AI Governance Routing Blueprint 2026: Policy Tests, Canaries, SLAs",
    description: "A practical system to keep AI features fast and safe with policy tests in CI, KPI-linked canaries, and service-level objectives.",
    category: "AI Strategy",
    publishedAt: "2025-10-15",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "privacy-first-feature-flags-2026",
    title: "Privacy‑First Feature Flags 2026: Global Rolls Without PII Risk",
    description: "Scoped IDs, edge filters, and health checks for instant, safe rollouts under 100ms.",
    category: "Architecture",
    publishedAt: "2025-10-14",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "reliable-agent-actions-2026",
    title: "Reliable Agent Actions 2026: Deterministic Tools and Live Traces",
    description: "Design agent tools that are testable, auditable, and budget‑controlled for production reliability.",
    category: "GenAI",
    publishedAt: "2025-10-14",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "ai-cost-aware-inference-2026",
    title: "Cost‑Aware Inference 2026: Warm Pools, Tiers, and SLAs",
    description: "Cut inference cost 30–60% with adaptive batching, warm pools, and quality tiers under SLAs.",
    category: "GenAI",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "ai-risk-budgets-2026",
    title: "AI Risk Budgets 2026: Ship Automation Safely at Scale",
    description: "Budget risky actions, approvals, and rollbacks to move fast without surprises.",
    category: "AI Governance",
    publishedAt: "2025-10-14",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "production-rag-ops-2026",
    title: "Production RAG Ops 2026: Freshness Windows and Drift Guards",
    description: "Operate RAG reliably with TTL freshness windows, drift detection, and KPI‑linked budgets.",
    category: "GenAI",
    publishedAt: "2025-09-29",
    featured: false,
    readTime: "9 min read"
  },
  {
    slug: "zero-trust-for-genai-2026",
    title: "Zero‑Trust for GenAI 2026: Prompt Firewalls and Signed Outputs",
    description: "Production patterns: egress control, prompt firewalls, and signed artifacts for safe GenAI.",
    category: "Security",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "quantum-ai-hybrid-blueprint-2026",
    title: "Quantum‑AI Hybrid Blueprint 2026: Practical Near‑Term Wins",
    description: "Blend quantum libraries with AI orchestration to unlock optimization wins today.",
    category: "Quantum",
    publishedAt: "2025-09-29",
    featured: false,
    readTime: "9 min read"
  },
  {
    slug: "secure-ml-supply-chain-2026",
    title: "Secure ML Supply Chain 2026: SBOMs, Lineage, and Policy Gates",
    description: "Continuous SBOMs for models, datasets, and prompts with attestations and CI policy checks.",
    category: "AI Security",
    publishedAt: "2025-10-13",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "genai-routing-under-budgets-2026",
    title: "Quality‑Tiered GenAI Routing: SLAs Without Bill Shock",
    description: "Route prompts across model tiers with budgets, caches, and eval signals to control cost.",
    category: "AI Operations",
    publishedAt: "2025-10-13",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "platform-golden-paths-kpis-2026",
    title: "Golden Paths That Move KPIs: Platform Engineering That Pays",
    description: "Adoption metrics, TTFX, and SLOs as leading indicators of platform ROI in 2026.",
    category: "Platform Engineering",
    publishedAt: "2025-10-13",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "agent-evals-scorecards-2026",
    title: "Agent Evals 2026: Scorecards That Predict Outcomes",
    description: "Design online evals and KPI‑linked scorecards that correlate with revenue and CSAT.",
    category: "GenAI",
    publishedAt: "2025-10-13",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "privacy-preserving-agents-2026",
    title: "Privacy‑Preserving Agents: Scoped IDs, Redaction, and On‑Device Caches",
    description: "Ship assistant workflows that are insight‑rich without PII risk using scoped IDs and local caches.",
    category: "AI Security",
    publishedAt: "2025-10-13",
    featured: false,
    readTime: "7 min read"
  },
  {
    slug: "agentic-workflows-blueprint-2026",
    title: "Agentic Workflows Blueprint 2026: Tools, Traces, and Safety Budgets",
    description: "Design reliable multi‑tool agents with deterministic tools, live traces, and risk budgets.",
    category: "GenAI",
    publishedAt: "2025-10-10",
    featured: true,
    readTime: "9 min read"
  },
  {
    slug: "privacy-first-observability-2026",
    title: "Privacy‑First Observability: User‑Centric Traces Without PII Leaks",
    description: "Implement privacy filters, scoped IDs, and retention policies that keep signals rich and safe.",
    category: "Observability",
    publishedAt: "2025-10-10",
    featured: false,
    readTime: "7 min read"
  },
  {
    slug: "on-device-agents-2026",
    title: "On‑Device Agents 2026: Private Tools That Work Offline",
    description: "Ship fast, privacy‑first assistants with on‑device tools, local caches, and fallback routes.",
    category: "Edge Computing",
    publishedAt: "2025-10-11",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "genai-budgets-and-quality-tiers-2026",
    title: "GenAI Budgets and Quality Tiers: Control Cost Without Hurting UX",
    description: "Tier models, cache prompts, and budget traffic by SLA to cut spend 30–60%.",
    category: "AI Operations",
    publishedAt: "2025-10-11",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "secure-tools-marketplace-2026",
    title: "Secure Tools Marketplace: Vetting, Sandboxes, and Attestations",
    description: "Bring third‑party tools safely with policy checks, sandboxes, and signed attestations.",
    category: "Security",
    publishedAt: "2025-10-11",
    featured: false,
    readTime: "8 min read"
  },
  {
    slug: "risk-budgets-for-agent-releases-2026",
    title: "Risk Budgets for Agent Releases: Ship Fast Without Surprises",
    description: "Budget risky actions, add PR checks, and wire rollbacks for reliable agent releases.",
    category: "AI Engineering",
    publishedAt: "2025-10-11",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "privacy-first-telemetry-2026",
    title: "Privacy‑First Telemetry: Signal‑Rich, PII‑Safe Observability",
    description: "Scoped IDs, field‑level filters, and retention policies that keep insights high and risk low.",
    category: "Observability",
    publishedAt: "2025-10-11",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "cost-aware-inference-routing-2026",
    title: "Cost‑Aware Inference Routing: Quality Tiers Under Budget",
    description: "Dynamically route prompts across model tiers based on budgets, SLAs, and eval signals.",
    category: "Architecture",
    publishedAt: "2025-10-11",
    featured: false,
    readTime: "8 min read"
  },
  {
    slug: "ai-governance-scorecards-quickstart-2025",
    title: "AI Governance Scorecards Quickstart: Ship Fast, Stay Safe",
    description: "A practical starter for scorecards, PR checks, and KPI‑linked canaries teams adopt in weeks.",
    category: "AI Strategy",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "edge-llm-caching-blueprint-2026",
    title: "Edge LLM Caching Blueprint 2026: Sub‑100ms at Scale",
    description: "Tiered caches, signed configs, and freshness windows for fast, affordable prompts.",
    category: "Architecture",
    publishedAt: "2025-10-10",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "ai-agent-slo-playbooks-2026",
    title: "AI Agent SLO Playbooks: Budgets, Rollbacks, and Live Traces",
    description: "Turn agent incidents into fast, measurable recoveries with SLOs and budgeted actions.",
    category: "AI Operations",
    publishedAt: "2025-10-12",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "hybrid-vector-search-patterns-2026",
    title: "Hybrid Vector Search Patterns: Quality Under Cost and Freshness Budgets",
    description: "Blend sparse + dense retrieval with TTL windows to improve answer quality at lower cost.",
    category: "GenAI",
    publishedAt: "2025-10-12",
    featured: false,
    readTime: "6 min read"
  },
  {
    slug: "ai-autonomous-incident-runbooks-2025",
    title: "AI Autonomous Incident Runbooks: Budgeted Actions and Instant Rollback",
    description: "Design incident playbooks with explicit budgets, approvals, and safe automated rollback.",
    category: "AI Operations",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "privacy-first-feature-flags-2025",
    title: "Privacy‑First Feature Flags: Zero‑Regret Rollouts at the Edge",
    description: "Scoped IDs, on‑device filters, and geo budgets for safe global releases under 100ms.",
    category: "Architecture",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "platform-roi-scorecards-quickstart-2025",
    title: "Platform ROI Scorecards: A Practical Quickstart",
    description: "Link platform telemetry to adoption and revenue with scorecards engineers actually use.",
    category: "AI Strategy",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "ai-supply-chain-optimization-2025",
    title: "AI Supply Chain Optimization: 65% Faster Deliveries Under Budget",
    description: "From demand sensing to route optimization—AI patterns that cut costs and boost OTIF.",
    category: "Applied AI",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "privacy-first-observability-quickstart-2025",
    title: "Privacy‑First Observability Quickstart: Scoped IDs and Redaction",
    description: "Ship signal‑rich telemetry without PII risk using scoped identifiers and field‑level filters.",
    category: "Observability",
    publishedAt: "2025-09-29",
    featured: false,
    readTime: "6 min read"
  },
  {
    slug: "ai-sre-blueprints-2026",
    title: "AI SRE Blueprints 2026: Error Budgets, Rollbacks, and Live Traces",
    description: "Design SRE guardrails for AI systems: quality/error budgets, rollback triggers, and trace-driven remediation.",
    category: "AI Operations",
    publishedAt: "2025-10-29",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "privacy-first-ab-testing-2026",
    title: "Privacy‑First A/B Testing 2026: Insights Without PII",
    description: "Scoped IDs, on‑device metrics, and DP noise for compliant experiments that still drive decisions.",
    category: "Analytics",
    publishedAt: "2025-10-29",
    featured: false,
    readTime: "7 min read"
  },
  {
    slug: "ai-threat-hunting-with-llms-2026",
    title: "AI Threat Hunting with LLMs 2026: Signals, Sandboxes, and Speed",
    description: "Operational playbooks to augment analysts with safe LLM tooling, live traces, and budgeted actions.",
    category: "Security",
    publishedAt: "2025-10-13",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "llm-production-runbooks-2026",
    title: "LLM Production Runbooks 2026: Rollbacks, Budgets, and Canary Evals",
    description: "Battle-tested runbooks for safe LLM releases—risk budgets, rollback triggers, and KPI-linked canaries.",
    category: "AI Operations",
    publishedAt: "2025-10-13",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "production-rag-quality-budgets-2026",
    title: "Production RAG: Quality Budgets, Freshness Windows, and SLAs",
    description: "Keep answers accurate and on‑budget with freshness windows, async warmups, and layered evals.",
    category: "GenAI",
    publishedAt: "2025-10-10",
    featured: true,
    readTime: "9 min read"
  }
];
