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
    slug: "ai-autonomous-operations-2025",
    title: "AI Autonomous Operations: Self‑Healing, Self‑Optimizing Infra",
    description: "Design SLO‑driven controllers, safe remediations, and policy‑guarded runbooks.",
    category: "Infrastructure",
    publishedAt: "2025-10-04",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "enterprise-ai-roadmap-2025",
    title: "Enterprise AI Roadmap 2025: From Pilots to Platform",
    description: "Operating model, platform capabilities, and productized use‑cases that compound.",
    category: "Strategy",
    publishedAt: "2025-10-04",
    featured: true,
    readTime: "9 min read"
  },
  {
    slug: "cloud-native-ai-platforms-2025",
    title: "Cloud‑Native AI Platforms: Multi‑Region, Cost‑Aware, Governed",
    description: "Reference architecture for elastic GPUs, feature stores, evals, and guardrails.",
    category: "Cloud",
    publishedAt: "2025-10-04",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "quantum-computing-business-applications-2025",
    title: "Quantum Computing: Practical Business Applications in 2025",
    description: "Where quantum adds value today: portfolio, routing, scheduling, and pricing.",
    category: "Quantum",
    publishedAt: "2025-10-04",
    featured: true,
    readTime: "6 min read"
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
    slug: "serverless-ai-inference-cost-playbook-2025",
    title: "Serverless AI Inference: The Cost Optimization Playbook",
    description: "Cut inference spend 40–70% with adaptive batching, warm pools, and tiered quality without hurting P95.",
    category: "AI Strategy",
    publishedAt: "2025-10-04",
    featured: true,
    readTime: "9 min read"
  },
  {
    slug: "production-rag-architectures-that-work-2025",
    title: "RAG Architectures That Actually Work in Production",
    description: "Proven patterns for chunking, freshness, hybrid search, and evals that keep quality high.",
    category: "GenAI",
    publishedAt: "2025-10-04",
    featured: true,
    readTime: "12 min read"
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
    slug: "ai-governance-blueprint-2025",
    title: "AI Governance Blueprint 2025: Practical Guardrails That Ship",
    description: "Scorecards, policy tests, and change-control that keep AI initiatives fast and compliant.",
    category: "AI Strategy",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "9 min",
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

