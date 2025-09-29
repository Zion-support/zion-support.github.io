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
    id: "observability-otel-traces-that-matter",
    title: "OpenTelemetry in Production: Traces That Engineers Actually Use",
    summary:
      "Sampling strategies, semantic conventions, and dashboards that shrink MTTR for complex stacks.",
    category: "Observability",
    date: "2025-09-29",
    readMinutes: 6,
  },
  {
    id: "north-star-metrics-that-drive-growth",
    title: "North‑Star Metrics That Actually Drive Growth",
    summary:
      "Define actionable metrics, avoid vanity traps, and align teams to measurable outcomes.",
    category: "Product Analytics",
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
  {
    id: "edge-inference-sub-100ms",
    title: "Edge Inference Patterns for Sub‑100ms Experiences",
    summary:
      "On‑device models, caching, and streaming to deliver instant AI UX at the edge.",
    category: "Architecture",
    date: "2025-09-29",
    readMinutes: 6,
  },
  {
    id: "platform-engineering-golden-paths",
    title: "Platform Engineering Golden Paths That Unblock Teams",
    summary:
      "Opinionated templates, scorecards, and docs that accelerate delivery across orgs.",
    category: "Platform Engineering",
    date: "2025-09-27",
    readMinutes: 9,
  },
];

