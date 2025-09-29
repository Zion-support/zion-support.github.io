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
    slug: "ai-risk-register-2025",
    title: "AI Risk Register That Actually Drives Action",
    description:
      "Turn AI risks into tracked mitigations with owners, SLAs, and policy tests that stick.",
    category: "AI Governance",
    publishedAt: "2025-10-03",
    featured: true,
    readTime: "7 min",
  },
  {
    slug: "practical-evals-scorecards-2025",
    title: "Practical AI Evals That Predict Business Outcomes",
    description:
      "Design eval scorecards tied to revenue, CSAT, and retention—not toy benchmarks.",
    category: "GenAI",
    publishedAt: "2025-10-02",
    featured: true,
    readTime: "6 min",
  },
  {
    slug: "cloud-finops-guardrails-2025",
    title: "Cloud FinOps Guardrails Engineers Actually Use",
    description:
      "Budgets, alerts, and PR gates that reduce waste 25–40% without blocking delivery.",
    category: "Cloud Economics",
    publishedAt: "2025-10-01",
    featured: false,
    readTime: "8 min",
  },
  {
    slug: "practical-rag-in-production-2025",
    title: "RAG Architectures That Work in Production",
    description:
      "Freshness, hybrid search, and evals that scale beyond demos—production patterns inside.",
    category: "GenAI",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "8 min",
  },
  {
    slug: "serverless-inference-cost-playbook-2025",
    title: "Serverless Inference Cost Playbook",
    description:
      "Adaptive batching, warm pools, and quality tiers to cut cost without P95 pain.",
    category: "Architecture",
    publishedAt: "2025-09-30",
    featured: false,
    readTime: "7 min",
  },
  {
    slug: "ai-sales-copilot-playbook-2025",
    title: "AI Sales Copilot: A 90‑Day Plan",
    description:
      "Workflows, guardrails, and KPIs to lift win‑rates with an AI copilot.",
    category: "AI Strategy",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "8 min",
  },
  {
    slug: "ai-platform-engineering-2025",
    title: "AI Platform Engineering 2025",
    description:
      "Golden paths, eval systems, and governance for safe, fast AI delivery at scale.",
    category: "Platform Engineering",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "10 min",
  },
  {
    slug: "ai-agent-observability-2025",
    title: "AI Agent Observability",
    description:
      "Traces, policy tests, and human feedback loops that keep quality high in prod.",
    category: "GenAI",
    publishedAt: "2025-09-28",
    featured: false,
    readTime: "7 min",
  },
  {
    slug: "secure-rag-2025",
    title: "Secure RAG 2025",
    description:
      "Authorization‑aware retrieval and prompt firewalls for enterprise RAG.",
    category: "Security",
    publishedAt: "2025-09-27",
    featured: false,
    readTime: "8 min",
  },
  // New posts
  {
    slug: "enterprise-rag-blueprint-2025",
    title: "Enterprise RAG Blueprint v2: Freshness, Security, and Evals",
    description: "A practical architecture for production RAG with recency, authorization-aware retrieval, and layered evaluation.",
    category: "GenAI",
    publishedAt: "2025-10-04",
    featured: true,
    readTime: "9 min",
  },
  {
    slug: "finops-scorecards-2025",
    title: "Cloud FinOps Scorecards Engineers Actually Use",
    description: "Guardrails, PR gates, and budgets that reduce waste 25–40% without blocking product velocity.",
    category: "Cloud",
    publishedAt: "2025-10-04",
    featured: true,
    readTime: "6 min",
  },
  {
    slug: "ai-platform-roi-2025",
    title: "AI Platform ROI Scorecards: Proving Value Quarter by Quarter",
    description: "A pragmatic framework to tie platform capabilities to adoption, golden paths, reliability SLOs, and outcomes.",
    category: "AI Strategy",
    publishedAt: "2025-10-03",
    featured: true,
    readTime: "7 min",
  },
  {
    slug: "secure-ml-supply-chain-2025",
    title: "Secure ML Supply Chain: From SBOMs to Model Lineage",
    description: "Practical controls for datasets, models, and inference routes to prevent tampering and drift.",
    category: "Security",
    publishedAt: "2025-10-03",
    featured: true,
    readTime: "6 min",
  },
  {
    slug: "edge-cdn-ml-personalization-2025",
    title: "Edge CDN + On‑Device ML: Personalization Under 100ms",
    description: "Combine edge KV, signed configs, and tiny models for private, real‑time personalization.",
    category: "Edge Computing",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "6 min",
  }
];

