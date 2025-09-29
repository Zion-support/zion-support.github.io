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
    title: "AI Platform ROI Scorecards: Ship Value Every Quarter",
    description:
      "Tie platform work to adoption, golden paths, and business KPIs with simple scorecards.",
    category: "AI Strategy",
    publishedAt: "2025-10-06",
    featured: true,
    readTime: "5 min read",
  },
  {
    slug: "secure-ml-supply-chain-2025",
    title: "Secure ML Supply Chain: SBOMs, Lineage, Egress Controls",
    description:
      "Proven controls for datasets, models, and inference—track provenance and lock egress.",
    category: "Security",
    publishedAt: "2025-10-06",
    featured: true,
    readTime: "6 min read",
  },
  {
    slug: "enterprise-rag-v2-2025",
    title: "Enterprise RAG v2: Freshness, Hybrid Search, Reliable Evals",
    description:
      "Blueprint for stable quality: versioned chunks, hybrid retrievers, KPI‑linked evals.",
    category: "GenAI",
    publishedAt: "2025-10-06",
    featured: true,
    readTime: "7 min read",
  },
  {
    slug: "genai-evals-in-production-2025",
    title: "Online GenAI Evals: Canary Checks That Keep You Fast",
    description:
      "Lightweight online evals tied to KPIs to prevent regressions while shipping weekly.",
    category: "GenAI",
    publishedAt: "2025-10-05",
    featured: false,
    readTime: "6 min read",
  },
];

