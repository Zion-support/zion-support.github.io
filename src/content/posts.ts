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
    slug: "ai-incident-response-2026",
    title: "AI Incident Response 2026: Playbooks, Canaries, and SLAs",
    description: "Practical incident response for AI features with on-call playbooks and KPI-linked canaries.",
    category: "AI Operations",
    publishedAt: "2025-10-09",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "ai-platform-engineering-2025",
    title: "AI Platform Engineering 2025: Scorecards, Trains, and Golden Paths",
    description: "Practical platform patterns that link capabilities to adoption, SLOs, and ROI.",
    category: "Platform Engineering",
    publishedAt: "2025-10-08",
    featured: true,
    readTime: "9 min read"
  },
  {
    slug: "serverless-inference-cost-playbook-2025",
    title: "Serverless Inference Cost Playbook: Latency Budgets Without Bill Shock",
    description: "Concurrency shaping, tiered models, and result caching to cut spend 35–60%.",
    category: "GenAI",
    publishedAt: "2025-10-08",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "cloud-finops-guardrails-2025",
    title: "Cloud FinOps Guardrails Engineers Actually Use",
    description: "PR checks, budgets, and alerts that reduce waste while keeping teams fast.",
    category: "Cloud",
    publishedAt: "2025-10-08",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "enterprise-rag-v2-2025",
    title: "Enterprise RAG v2: Freshness Windows, Guardrails, and KPIs",
    description: "Design RAG that stays accurate with freshness TTLs, evals, and safe tools.",
    category: "GenAI",
    publishedAt: "2025-10-08",
    featured: true,
    readTime: "9 min read"
  },
  {
    slug: "edge-flags-blueprint-2026",
    title: "Edge Flags Blueprint 2026: <100ms Global Releases",
    description: "Consistency, rollout strategies, and instant rollback with edge compute and KV.",
    category: "Architecture",
    publishedAt: "2025-10-08",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "platform-observability-scorecards-2026",
    title: "Platform Observability Scorecards: Tie Telemetry to Business Outcomes",
    description: "Connect traces, errors, and latency to adoption, retention, and revenue with actionable scorecards.",
    category: "Platform Engineering",
    publishedAt: "2025-10-09",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "privacy-preserving-rag-2026",
    title: "Privacy‑Preserving RAG: Redaction, Scoping, and Audit Trails",
    description: "Protect sensitive data in RAG with redaction, auth‑scoped corpora, and audit trails.",
    category: "AI Security",
    publishedAt: "2025-10-09",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "ai-platform-roi-2025",
    title: "AI Platform ROI Scorecards: Proving Value Quarter by Quarter",
    description: "Lightweight scorecards that link capabilities to adoption, golden paths, SLOs, and outcomes.",
    category: "AI Strategy",
    publishedAt: "2025-10-03",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "secure-ml-supply-chain-2025",
    title: "Secure ML Supply Chain: From SBOMs to Model Lineage",
    description: "End-to-end provenance and controls for datasets, models, and inference routes.",
    category: "Security",
    publishedAt: "2025-10-03",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "edge-cdn-ml-personalization-2025",
    title: "Edge CDN + On‑Device ML: Personalization Under 100ms",
    description: "Combine edge KV, signed configs, and tiny models for private, real‑time personalization.",
    category: "Edge Computing",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "ai-sales-copilot-2025",
    title: "AI Sales Copilot: Grounded Prompts, CRM Context, Reliable Evals",
    description: "Wire CRMs, build prompt libraries, and add evals that correlate with win‑rates.",
    category: "AI Strategy",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "genai-evals-in-production-2025",
    title: "GenAI Evals in Production: Policy Tests That Scale",
    description: "Layered evaluation: offline suites, pre-merge checks, and online canaries tied to KPIs.",
    category: "GenAI",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "feature-flags-edge-2025",
    title: "Feature Flags at the Edge: <100ms Global Releases",
    description: "Consistency models, cache strategies, and validation flows for instant global rollouts.",
    category: "Architecture",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "secure-agents-runtime-2026",
    title: "Secure AI Agents Runtime: Sandboxes, Egress Policies, and Traces",
    description: "A production checklist for running AI agents safely with isolation, policy gates, and observability.",
    category: "AI Security",
    publishedAt: "2025-10-09",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "edge-e2e-observability-2026",
    title: "Edge E2E Observability: User-Centric Tracing and <100ms Telemetry",
    description: "Blueprint for capturing user-centric telemetry across edge, CDN, and app layers without latency tax.",
    category: "Architecture",
    publishedAt: "2025-10-09",
    featured: false,
    readTime: "7 min read"
  },
  {
    slug: "ai-cost-controllers-2026",
    title: "AI Cost Controllers: Budgets, Tiered Quality, and Guardrails",
    description: "Keep GenAI spend predictable with dynamic budgets, tiered models, and policy‑backed routes.",
    category: "Cloud",
    publishedAt: "2025-10-09",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "ai-governance-blueprint-2025",
    title: "AI Governance Blueprint 2025: Practical Guardrails That Ship",
    description: "Scorecards, policy tests, and change-control that keep AI initiatives fast and compliant.",
    category: "AI Strategy",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "9 min read"
  },
  {
    slug: "real-time-genai-guardrails-2025",
    title: "Real‑Time GenAI Guardrails: Inline Filters, Canaries, and Evals",
    description: "How to run fast with live canaries, inline moderation, and KPI‑linked evals at scale.",
    category: "GenAI",
    publishedAt: "2025-09-29",
    featured: false,
    readTime: "8 min read"
  },
  {
    slug: "ai-governance-scorecards-2026",
    title: "AI Governance 2026: Scorecards Engineers Actually Use",
    description: "Guardrails wired to product KPIs with PR checks and online canaries that speed teams up.",
    category: "AI Strategy",
    publishedAt: "2025-10-07",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "freshness-aware-rag-v2",
    title: "Freshness‑Aware RAG v2: TTL Budgets and Versioned Corpora",
    description: "Keep answers accurate with freshness windows, async warmups, and KPI‑aligned evaluation.",
    category: "GenAI",
    publishedAt: "2025-10-07",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "ai-platform-roadmaps-2026",
    title: "AI Product Roadmaps 2026: From Bet to Business Impact",
    description: "Outcome-led roadmaps that connect bets to scorecards, trains, and shipped value.",
    category: "AI Strategy",
    publishedAt: "2025-10-06",
    featured: true,
    readTime: "9 min read"
  },
  {
    slug: "genai-guardrails-blueprints-2026",
    title: "GenAI Guardrails Blueprints: Policy Tests, Canaries, and SLAs",
    description: "Composable guardrail patterns that scale across products without slowing teams.",
    category: "GenAI",
    publishedAt: "2025-10-06",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "cloud-finops-scorecards-2026",
    title: "Cloud FinOps Scorecards: Guardrails Engineers Actually Use",
    description: "PR gates, alerts, and budgets that cut waste 25–40% while keeping velocity high.",
    category: "Cloud",
    publishedAt: "2025-10-06",
    featured: false,
    readTime: "6 min read"
  },
  {
    slug: "genai-platform-blueprint-2025",
    title: "GenAI Platform Blueprint: Shipping Weekly With Guardrails",
    description: "Reference architecture for prompts, tools, evals, and policy tests that let teams move fast safely.",
    category: "GenAI",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "cost-optimized-vector-search",
    title: "Cost‑Optimized Vector Search: Hybrid, Caching, and Freshness",
    description: "Design decisions to cut retrieval cost 40%+ while improving answer quality with hybrid search and freshness windows.",
    category: "Architecture",
    publishedAt: "2025-09-29",
    featured: false,
    readTime: "6 min read"
  },
  {
    slug: "ai-risk-register-outcomes-2025",
    title: "AI Risk Register That Drives Outcomes: Owners, SLAs, and Policy Tests",
    description: "Make risk programs actionable with owned mitigations, CI policy checks, and measurable SLAs.",
    category: "AI Governance",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "zero-regret-rollouts-edge-flags-2025",
    title: "Zero‑Regret Rollouts: Edge Flags with Budgets and Instant Rollback",
    description: "Segmented rollouts with risk budgets, telemetry, and rollback triggers under 100ms.",
    category: "Architecture",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "online-genai-evals-canaries-2025",
    title: "Online GenAI Evals: Canary Checks That Keep Velocity High",
    description: "Run lightweight, KPI‑linked canaries in prod to prevent regressions while shipping weekly.",
    category: "GenAI",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "llm-policy-testing-2025",
    title: "LLM Policy Testing in CI: Ship Fast, Stay Safe",
    description: "Automate governance with policy tests on every PR, tied to KPIs and SLAs.",
    category: "GenAI",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "7 min read"
  }
];

