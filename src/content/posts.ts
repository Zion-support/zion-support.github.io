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
  }
  ,
  {
    slug: "guardrails-scorecards-evals-2025",
    title: "Guardrails Engineers Adopt: Scorecards, PR Gates, Online Canaries",
    description: "Outcome‑linked guardrails that accelerate delivery and reduce risk.",
    category: "AI Strategy",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "edge-flags-blueprint-2025",
    title: "Edge Flags Blueprint: Zero‑Regret Rollouts",
    description: "<100ms global flags with segmented canaries, budgets, and instant rollback.",
    category: "Architecture",
    publishedAt: "2025-09-29",
    featured: false,
    readTime: "6 min read"
  },
  {
    slug: "rag-freshness-ttl-2025",
    title: "RAG Freshness: TTL Budgets and Versioned Corpora",
    description: "Prevent stale answers with freshness windows and warm caches.",
    category: "GenAI",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "8 min read"
  }
  ,
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
  }
  ,
  {
    slug: "ai-risk-register-checklist-2025",
    title: "AI Risk Register Checklist: Owners, Policy Tests, Dashboards",
    description: "Make AI risk real with accountable owners, measurable policies, and visible scorecards.",
    category: "AI Governance",
    publishedAt: "2025-10-06",
    featured: true,
    readTime: "5 min read"
  },
  {
    slug: "rag-freshness-strategies-2025",
    title: "RAG Freshness Strategies: Versioned Chunks, TTLs, Async Warmups",
    description: "Keep retrieval results fresh with versioned corpora, TTL budgets, and background warmups.",
    category: "GenAI",
    publishedAt: "2025-10-06",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "edge-feature-flags-zero-regret-2025",
    title: "Edge Feature Flags: Zero‑Regret Rollouts with Instant Rollback",
    description: "Segmented canaries by geo and account with budget caps and telemetry at the edge.",
    category: "Architecture",
    publishedAt: "2025-10-06",
    featured: false,
    readTime: "6 min read"
  }
];

