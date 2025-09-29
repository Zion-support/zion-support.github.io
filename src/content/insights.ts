export type InsightArticle = {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string; // ISO date string
  readMinutes: number;
};

export const latestInsights: InsightArticle[] = [
  {
    id: "ai-platform-roi-scorecards",
    title: "AI Platform ROI Scorecards: Ship Value Every Quarter",
    summary:
      "Tie platform work to adoption, golden paths, and business KPIs with simple scorecards.",
    category: "AI Strategy",
    date: "2025-10-06",
    readMinutes: 5,
  },
  {
    id: "secure-ml-supply-chain",
    title: "Secure ML Supply Chain: SBOMs, Lineage, Egress Controls",
    summary:
      "Proven controls for datasets, models, and inference—track provenance and lock egress.",
    category: "Security",
    date: "2025-10-06",
    readMinutes: 6,
  },
  {
    id: "enterprise-rag-blueprint-v2",
    title: "Enterprise RAG v2: Freshness, Hybrid Search, Reliable Evals",
    summary:
      "Blueprint for stable quality: versioned chunks, hybrid retrievers, KPI‑linked evals.",
    category: "GenAI",
    date: "2025-10-06",
    readMinutes: 7,
  },
];

export default latestInsights;

