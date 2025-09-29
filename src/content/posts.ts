export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  featured?: boolean;
  readTime?: string;
  body?: string;
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
    slug: "agentops-slo-handbook-2025",
    title: "AgentOps SLO Handbook: Keeping Autonomous Systems Reliable",
    description: "Define SLOs, budgets, and rollback-ready canaries for agent workflows in production.",
    category: "GenAI",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "7 min read"
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
    slug: "privacy-preserving-rag-2026",
    title: "Privacy‑Preserving RAG: Redaction, Scoping, and Audit Trails",
    description: "Protect sensitive data in RAG with redaction, auth‑scoped corpora, and audit trails.",
    category: "AI Architecture",
    publishedAt: "2025-10-09",
    featured: true,
    readTime: "6 min read"
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
    slug: "zero-trust-ai-pipelines-2025",
    title: "Zero‑Trust for AI Pipelines: Auth, Policy Tests, and Attestations",
    description: "Harden datasets, prompts, and tools with signed artifacts and CI policy gates.",
    category: "Security",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "edge-rag-cdn-2025",
    title: "Edge RAG + CDN: Fresh Answers with Sub‑100ms Latency",
    description: "Hybrid retrieval at the edge with freshness windows, signed configs, and tiered caches.",
    category: "Architecture",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "genai-evals-bluebook-2025",
    title: "GenAI Evals Bluebook: KPIs, Canaries, and Policy Tests",
    description: "Build eval suites that predict outcomes and prevent regressions across teams.",
    category: "GenAI",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "9 min read"
  },
  {
    slug: "llm-policy-testing-2025",
    title: "LLM Policy Testing in CI: Ship Fast, Stay Safe",
    description: "Automate governance with lightweight policy tests on every PR and release train.",
    category: "GenAI",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "ai-ml-observability-2025",
    title: "AI/ML Observability: Traces, Metrics, and Business Impact",
    description: "Monitor model performance, data drift, and business KPIs with unified telemetry.",
    category: "AI Operations",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "rag-architecture-patterns-2025",
    title: "RAG Architecture Patterns: Hybrid Retrieval and Multi‑Agent Orchestration",
    description: "Build production RAG with hybrid retrieval, reranking, and multi‑agent workflows.",
    category: "Architecture",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "10 min read"
  },
  {
    slug: "ai-security-compliance-2025",
    title: "AI Security & Compliance: SOC2, ISO27001, and Custom Frameworks",
    description: "Audit AI systems for compliance with enterprise security frameworks and regulations.",
    category: "Security",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "vector-database-optimization-2025",
    title: "Vector Database Optimization: Indexing, Caching, and Query Performance",
    description: "Optimize vector search performance with proper indexing, caching, and query strategies.",
    category: "Infrastructure",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "9 min read"
  },
  {
    slug: "ai-workflow-automation-2025",
    title: "AI Workflow Automation: Orchestration, Monitoring, and Error Handling",
    description: "Build robust AI workflows with proper orchestration, monitoring, and error recovery.",
    category: "AI Operations",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "multi-modal-ai-systems-2025",
    title: "Multi‑Modal AI Systems: Vision, Language, and Audio Integration",
    description: "Design and implement multi‑modal AI systems that handle text, images, and audio seamlessly.",
    category: "AI Architecture",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "11 min read"
  }
  ,
  {
    slug: "genai-platform-blueprint-2025",
    title: "GenAI Platform Blueprint: Shipping Weekly With Guardrails",
    description: "Reference architecture for safe, scalable GenAI with policy tests, eval canaries, and golden paths.",
    category: "GenAI",
    publishedAt: "2025-10-10",
    featured: true,
    readTime: "10 min read",
    body: "This blueprint outlines a pragmatic GenAI platform: policy-first guardrails, eval canaries, golden paths, and platform trains that keep teams shipping safely week over week."
  },
  {
    slug: "cloud-finops-guardrails-2025",
    title: "Cloud FinOps Guardrails: Budgets, Unit Economics, and Scorecards",
    description: "Practical cost guardrails that preserve velocity: budgets, SLO-aware policies, and transparent scorecards.",
    category: "Cloud",
    publishedAt: "2025-10-10",
    featured: false,
    readTime: "7 min read",
    body: "Implement FinOps guardrails that align teams on budgets and unit economics without slowing delivery. Includes actionable scorecards and automation hooks."
  },
  {
    slug: "hybrid-vector-search-2025",
    title: "Hybrid Vector Search: Freshness, Filters, and Reranking",
    description: "Cut retrieval costs 40%+ while improving relevance using hybrid search with freshness windows and rerankers.",
    category: "AI Architecture",
    publishedAt: "2025-10-10",
    featured: false,
    readTime: "9 min read",
    body: "A practical guide to combining BM25, dense vectors, metadata filters, and rerankers to deliver relevant, fresh results at lower cost."
  },
  {
    slug: "agentic-workflows-blueprint-2025",
    title: "Agentic Workflows Blueprint: Tools, Memory, and SLOs",
    description: "Design agent workflows with explicit tools, scoped memory, and SLOs tied to business KPIs.",
    category: "GenAI",
    publishedAt: "2025-10-10",
    featured: true,
    readTime: "8 min read",
    body: "From tool definitions to rollback-ready canaries, this blueprint shows how to make agent workflows observable, reliable, and cost-aware."
  },
  {
    slug: "edge-llm-caching-2025",
    title: "Edge LLM Caching: Latency Budgets Without Quality Regressions",
    description: "Use tiered caches and response normalization to hit P95 targets while controlling costs.",
    category: "Architecture",
    publishedAt: "2025-10-10",
    featured: false,
    readTime: "6 min read",
    body: "Learn when and how to cache LLM responses at the edge, including invalidation strategies and safety considerations."
  }
];