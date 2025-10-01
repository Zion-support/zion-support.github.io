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
    id: "ai-2025-oct-edge-inference-patterns-production-guide",
    title: "Edge Inference Patterns: Production-Ready AI Deployment Guide 2025",
    summary:
      "Master production-ready edge inference with real-world deployment strategies, performance optimization, and cost-effective scaling for enterprise AI.",
    category: "Edge AI",
    date: "2025-10-01",
    readMinutes: 12,
  },
  {
    id: "ai-2025-oct-northstar-metrics-ai-product-success",
    title: "North Star Metrics for AI Product Success: The Complete 2025 Framework",
    summary:
      "Learn the proven framework used by top AI companies to measure product success. Discover metrics that correlate with revenue and retention.",
    category: "AI Strategy",
    date: "2025-10-01",
    readMinutes: 10,
  },
  {
    id: "observability-otel-traces-that-matter",
    title: "OpenTelemetry in Production: Traces That Engineers Actually Use",
    summary:
      "Sampling strategies, semantic conventions, and dashboards that shrink MTTR for complex stacks.",
    category: "Observability",
    date: "2025-09-29",
    readMinutes: 6,
  },
  {
    id: "edge-inference-patterns",
    title: "Edge Inference Patterns That Actually Reduce Latency",
    summary:
      "Concrete deployment topologies, batching tricks, and cache strategies that cut P95 by 40%.",
    category: "AI Infrastructure",
    date: "2025-09-28",
    readMinutes: 7,
  },
  {
    id: "secure-ml-pipelines",
    title: "Securing Machine Learning Pipelines in Production",
    summary:
      "Practical steps to harden data flows, model registries, and deployment targets for ML systems.",
    category: "Security",
    date: "2025-08-20",
    readMinutes: 7,
  },
  {
    id: "north-star-engineering-metrics",
    title: "North‑Star Engineering Metrics: Fewer KPIs, Better Outcomes",
    summary:
      "How to pick three metrics that align delivery, reliability, and cost without dashboard bloat.",
    category: "Leadership",
    date: "2025-08-30",
    readMinutes: 5,
  },
  {
    id: "cloud-cost-optimization",
    title: "Cloud Cost Optimization: 9 Wins in 90 Days",
    summary:
      "How we helped three clients reduce cloud spend by 32% on average without sacrificing performance.",
    category: "Cloud",
    date: "2025-08-05",
    readMinutes: 5,
  },
  {
    id: "data-governance-starter",
    title: "Data Governance Starter Guide for Mid‑Market Teams",
    summary:
      "A no‑nonsense playbook for data quality, lineage, and access controls you can adopt this quarter.",
    category: "Data",
    date: "2025-07-18",
    readMinutes: 8,
  },
];

