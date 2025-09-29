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
    slug: "ai-safety-budgets-2026",
    title: "AI Safety Budgets 2026: Guardrails That Don’t Block Velocity",
    description:
      "Design safety budgets, PR checks, and rollback triggers that let teams ship fast while staying compliant.",
    category: "AI Governance",
    publishedAt: "2025-10-13",
    featured: true,
    readTime: "7 min read",
  },
  {
    slug: "edge-personalization-2026",
    title: "Edge Personalization 2026: <100ms Experiences with On‑Device Intelligence",
    description:
      "Patterns for private, real‑time personalization using edge KV, signed configs, and tiny models.",
    category: "Edge Computing",
    publishedAt: "2025-10-13",
    featured: true,
    readTime: "8 min read",
  },
  {
    slug: "ai-reliable-rag-ops-2026",
    title: "Reliable RAG Ops 2026: Freshness Windows, Drift Alerts, Budgets",
    description: "Keep RAG quality high with TTL windows, drift detectors, and KPI‑tied quality budgets.",
    category: "GenAI",
    publishedAt: "2025-10-12",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "platform-engineering-kpis-2026",
    title: "Platform Engineering KPIs 2026: Adoption, Golden Paths, SLOs",
    description: "Scorecards that shift the convo from costs to shipped value—adoption, TTFX, SLOs.",
    category: "Platform Engineering",
    publishedAt: "2025-10-12",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "ai-incident-budget-playbooks-2026",
    title: "AI Incident Budgets: Playbooks That Contain in <60s",
    description: "Budget risky actions, approvals, and rollback triggers for safe, fast incident response.",
    category: "Security",
    publishedAt: "2025-10-12",
    featured: false,
    readTime: "6 min read"
  },
  {
    slug: "platform-engineering-scorecards-2026",
    title: "Platform Engineering Scorecards 2026: From Golden Paths to Outcomes",
    description: "Measure what matters: adoption, golden-path TTFX, SLOs, and shipped value—without slowing delivery.",
    category: "Platform Engineering",
    publishedAt: "2025-10-09",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "ai-cybersecurity-automation-2025",
    title: "AI Cybersecurity Automation: From Detections to Autonomic Response",
    description: "Behavioral detections, policy tests, and runbooks that auto-contain incidents under 60 seconds.",
    category: "Security",
    publishedAt: "2025-10-09",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "edge-ai-blueprint-2026",
    title: "Edge AI Blueprint 2026: Private, Real‑Time Intelligence at Scale",
    description: "Signed configs, tiny models, and geo budgets for <100ms on‑device decisions with privacy by design.",
    category: "Edge Computing",
    publishedAt: "2025-10-09",
    featured: true,
    readTime: "9 min read"
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
    description:
      "Reference architecture for prompts, tools, evals, and policy tests that let teams move fast safely.",
    category: "GenAI",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "8 min read",
  },
  {
    slug: "cost-optimized-vector-search",
    title: "Cost‑Optimized Vector Search: Hybrid, Caching, and Freshness",
    description:
      "Design decisions to cut retrieval cost 40%+ while improving answer quality with hybrid search and freshness windows.",
    category: "Architecture",
    publishedAt: "2025-09-29",
    featured: false,
    readTime: "6 min read",
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
    readTime: "7 min read",
  },
  {
    slug: "llm-policy-testing-2025",
    title: "LLM Policy Testing in CI: Ship Fast, Stay Safe",
    description: "Automate governance with lightweight policy tests on every PR and release train.",
    category: "AI Governance",
    publishedAt: "2025-10-08",
    readTime: "7 min read"
  },
  {
    slug: "ai-roadmaps",
    title: "Designing High-Impact AI Roadmaps",
    description:
      "A practical framework to align AI investments with measurable business outcomes and reduce time-to-value.",
    category: "AI Strategy",
    publishedAt: "2025-09-15",
    featured: false,
    readTime: "6 min read",
  },
  {
    slug: "cloud-finops-tactics",
    title: "Cutting Cloud Spend Without Slowing Teams",
    description:
      "Proven tactics for right-sizing, demand shaping, and engineering-friendly guardrails that keep velocity high.",
    category: "Cloud FinOps",
    publishedAt: "2025-09-22",
    featured: false,
    readTime: "6 min read",
  },
  {
    slug: "zero-trust-for-saas",
    title: "Zero-Trust in Practice for SaaS",
    description:
      "A pragmatic guide to rolling out least-privilege, continuous verification, and blast radius controls.",
    category: "Security",
    publishedAt: "2025-09-25",
    featured: false,
    readTime: "7 min read",
  },
  {
    slug: "generative-ai-enterprise",
    title: "Generative AI in Enterprise: Real-World Success Stories",
    description:
      "Case studies from Fortune 500 companies showing how GenAI is transforming customer service, content creation, and business operations.",
    category: "AI Innovation",
    publishedAt: "2025-01-20",
    featured: false,
    readTime: "9 min read",
  },
  {
    slug: "cloud-migration-best-practices",
    title: "Cloud Migration Best Practices: Lessons from 100+ Projects",
    description:
      "Essential strategies for successful cloud migration, including risk mitigation, cost optimization, and timeline management.",
    category: "Cloud Strategy",
    publishedAt: "2025-01-18",
    featured: false,
    readTime: "7 min read",
  },
  {
    slug: "cybersecurity-2025-trends",
    title: "Cybersecurity Trends 2025: What Every CISO Needs to Know",
    description:
      "Emerging threats, new defense strategies, and the latest security technologies shaping the cybersecurity landscape.",
    category: "Cybersecurity",
    publishedAt: "2025-01-15",
    featured: false,
    readTime: "8 min read",
  },
  {
    slug: "data-analytics-automation",
    title: "Automating Data Analytics: From Insight to Action",
    description:
      "How AI-powered analytics platforms are revolutionizing business intelligence and enabling real-time decision making.",
    category: "Data Science",
    publishedAt: "2025-01-12",
    featured: false,
    readTime: "8 min read",
  },
  {
    slug: "devops-automation-guide",
    title: "The Complete Guide to DevOps Automation",
    description:
      "Comprehensive strategies for automating CI/CD pipelines, infrastructure management, and deployment processes.",
    category: "DevOps",
    publishedAt: "2025-01-10",
    featured: false,
    readTime: "10 min read",
  },
  {
    slug: "microservices-architecture",
    title: "Microservices Architecture: Design Patterns and Best Practices",
    description:
      "Essential patterns for building scalable, maintainable microservices architectures in modern applications.",
    category: "Software Architecture",
    publishedAt: "2025-01-08",
    featured: false,
    readTime: "9 min read",
  },
  {
    slug: "ai-ethics-compliance",
    title: "AI Ethics and Compliance: Building Responsible AI Systems",
    description:
      "Framework for developing AI systems that are fair, transparent, and compliant with emerging regulations.",
    category: "AI Governance",
    publishedAt: "2025-01-05",
    featured: false,
    readTime: "8 min read",
  },
  // removed conflicting branch entries
  {
    slug: "finops-scorecards-2025",
    title: "FinOps Scorecards: Guardrails Engineers Actually Use",
    description: "Budgets, PR checks, and alerts that cut cloud waste 25–40% without slowing teams.",
    category: "Cloud",
    publishedAt: "2025-10-08",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "enterprise-rag-blueprint-2025",
    title: "Enterprise RAG Blueprint v2: Freshness, Hybrid Search, Auth",
    description: "A pragmatic blueprint for RAG at scale with freshness windows and layered evals.",
    category: "GenAI",
    publishedAt: "2025-10-08",
    featured: true,
    readTime: "9 min read"
  }
  ,
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
  }
  ,
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
  }
  ,
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
  }
];
