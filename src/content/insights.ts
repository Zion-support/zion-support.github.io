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
    id: "ai-platform-roadmap-2025",
    title: "Our AI Platform Roadmap for 2025",
    summary:
      "A transparent look at the capabilities, milestones, and enterprise features we are shipping next year.",
    category: "Product",
    date: "2025-09-01",
    readMinutes: 6,
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
];

