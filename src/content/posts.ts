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
    slug: "ai-autonomous-infrastructure-2026",
    title: "AI Autonomous Infrastructure 2026: Self‑Healing, Self‑Optimizing, Self‑Scaling",
    description: "Blueprints and scorecards to operate self‑healing platforms with budgets and safe automation.",
    category: "Platform Engineering",
    publishedAt: "2025-10-12",
    featured: true,
    readTime: "9 min read"
  },
  {
    slug: "ai-platform-slos-2026",
    title: "AI Platform SLOs 2026: Budgets, Rollbacks, Live Canaries",
    description: "Design SLOs and risk budgets for AI systems with instant rollbacks and KPI‑linked canaries.",
    category: "AI Operations",
    publishedAt: "2025-10-12",
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
    title: "Privacy‑First Insights 2026: Signal‑Rich Telemetry Without PII",
    description: "Scoped IDs, field‑level filters, and edge redaction for high‑quality analytics at low risk.",
    category: "Observability",
    publishedAt: "2025-10-29",
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
    title: "Secure ML Supply Chain 2026: SBOMs, Attestations, and Drift Guards",
    description: "Continuously track models, datasets, and prompts with signed SBOMs and policy checks.",
    category: "Security",
    publishedAt: "2025-10-13",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "genai-routing-blueprint-2026",
    title: "GenAI Routing Blueprint 2026: Quality Tiers, Caches, and Budgets",
    description: "Route traffic by SLA with tiered models, edge caches, and KPI‑linked budgets.",
    category: "GenAI",
    publishedAt: "2025-10-13",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "golden-paths-roi-2026",
    title: "Golden Paths ROI 2026: Scorecards that Prove Platform Value",
    description: "Link developer journeys to SLOs, adoption, and revenue with actionable scorecards.",
    category: "Platform Engineering",
    publishedAt: "2025-10-13",
    featured: true,
    readTime: "7 min read"
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
    slug: "edge-feature-flags-2026",
    title: "Edge Feature Flags 2026: <100ms Global Releases with Budgets",
    description: "Geo/account targeting, budgets, and instant rollback using edge compute and KV.",
    category: "Architecture",
    publishedAt: "2025-10-12",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "ai-incident-response-playbooks-2025",
    title: "AI Incident Response Playbooks: Contain in <60s with Confidence",
    description: "From detections to safe actions: policy-tested playbooks and rollback-ready automations.",
    category: "Cybersecurity",
    publishedAt: "2025-10-12",
    featured: true,
    readTime: "9 min read"
  },
  {
    slug: "quantum-ai-hybrid-blueprint-2026",
    title: "Quantum‑AI Hybrid Blueprint 2026: Practical Wins in 12 Months",
    description: "Near‑term plays that combine QC libraries with AI orchestration for measurable ROI.",
    category: "Quantum Computing",
    publishedAt: "2025-10-12",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "zero-trust-for-genai-2026",
    title: "Zero‑Trust for GenAI: Prompt Firewalls, Egress Policies, and Audit Trails",
    description: "Contain risks with auth‑aware retrieval, policy gates, and signed outputs at scale.",
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
  ,
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
  }
  ,
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
  }
  ,
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
  }
];

// Newly added content (auto-advertised on Home via latest sort)
posts.push(
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
  // Additional fresh content (conflict resolved)
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
    slug: "agent-blue-green-releases-2026",
    title: "Agent Blue‑Green Releases 2026: Safe, Reversible Automation",
    description: "Deploy agent updates with canaries, budgeted tool actions, and trace‑driven rollbacks.",
    category: "GenAI",
    publishedAt: "2025-10-16",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "ai-platform-scorecards-roi-2026",
    title: "AI Platform Scorecards 2026: Proving ROI with Leading Indicators",
    description: "Link platform telemetry to adoption, retention, and revenue with actionable scorecards.",
    category: "AI Strategy",
    publishedAt: "2025-10-10",
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
);
