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
    slug: "enterprise-rag-blueprint-2025",
    title: "Enterprise RAG Blueprint v2: From Toy Demos to Production",
    description: "Document stores, retrieval policies, and online evals that correlate to CSAT and deflection.",
    category: "GenAI",
    publishedAt: "2025-10-04",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "ai-governance-scorecards-2025",
    title: "AI Governance Scorecards: Enabling Speed with Guardrails",
    description: "Policy tests in CI, approval trails, and runtime observability that unlock faster delivery.",
    category: "AI Governance",
    publishedAt: "2025-10-04",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "observability-for-agents-2025",
    title: "Observability for AI Agents: Spans, Policies, and Red Teams",
    description: "Trace tool calls, capture prompts, and run policy checks with automated red teaming.",
    category: "GenAI",
    publishedAt: "2025-10-04",
    featured: false,
    readTime: "7 min read"
  }
];

