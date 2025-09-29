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
  {
    id: "realtime-data-pipelines",
    title: "Building Reliable Real-Time Data Pipelines",
    summary:
      "Patterns and trade-offs for event-driven architectures that scale, stay observable, and minimize latency.",
    category: "Data Engineering",
    date: "2025-09-20",
    readMinutes: 8,
  },
  {
    id: "north-star-metrics-growth",
    title: "North-Star Metrics That Actually Drive Growth",
    summary:
      "How to define actionable metrics, avoid vanity traps, and align teams around measurable outcomes.",
    category: "Product Analytics",
    date: "2025-09-22",
    readMinutes: 6,
  },
  {
    id: "zerotrust-saas-practice",
    title: "Zero-Trust in Practice for SaaS",
    summary:
      "A pragmatic guide to rolling out least-privilege, continuous verification, and blast radius controls.",
    category: "Security",
    date: "2025-09-24",
    readMinutes: 7,
  },
  {
    id: "operationalizing-genai-scale",
    title: "Operationalizing GenAI Safely and at Scale",
    summary:
      "Practical blueprints for evaluation, monitoring, and guardrails across the GenAI lifecycle.",
    category: "MLOps",
    date: "2025-09-26",
    readMinutes: 9,
  },
];

