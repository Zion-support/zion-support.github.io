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
    date: "2025-01-20",
    readMinutes: 6,
  },
  {
    id: "secure-ml-pipelines",
    title: "Securing Machine Learning Pipelines in Production",
    summary:
      "Practical steps to harden data flows, model registries, and deployment targets for ML systems.",
    category: "Security",
    date: "2025-01-18",
    readMinutes: 7,
  },
  {
    id: "cloud-cost-optimization",
    title: "Cloud Cost Optimization: 9 Wins in 90 Days",
    summary:
      "How we helped three clients reduce cloud spend by 32% on average without sacrificing performance.",
    category: "Cloud",
    date: "2025-01-15",
    readMinutes: 5,
  },
  {
    id: "data-governance-starter",
    title: "Data Governance Starter Guide for Mid‑Market Teams",
    summary:
      "A no‑nonsense playbook for data quality, lineage, and access controls you can adopt this quarter.",
    category: "Data",
    date: "2025-01-12",
    readMinutes: 8,
  },
  {
    id: "genai-operations-guide",
    title: "Operationalizing GenAI Safely and at Scale",
    summary:
      "Best practices for deploying generative AI in production environments with proper monitoring and governance.",
    category: "AI/ML",
    date: "2025-01-10",
    readMinutes: 9,
  },
  {
    id: "north-star-metrics",
    title: "North-Star Metrics That Actually Drive Growth",
    summary:
      "How to identify and implement metrics that align teams and drive meaningful business outcomes.",
    category: "Product Analytics",
    date: "2025-01-08",
    readMinutes: 6,
  },
  {
    id: "realtime-data-pipelines",
    title: "Building Reliable Real-Time Data Pipelines",
    summary:
      "Architecture patterns and implementation strategies for robust streaming data infrastructure.",
    category: "Data Engineering",
    date: "2025-01-05",
    readMinutes: 10,
  },
  {
    id: "zero-trust-security",
    title: "Implementing Zero Trust Security Architecture",
    summary:
      "A comprehensive guide to modern security frameworks that protect against evolving cyber threats.",
    category: "Security",
    date: "2025-01-03",
    readMinutes: 8,
  },
  {
    id: "microservices-best-practices",
    title: "Microservices Architecture: Lessons from 100+ Deployments",
    summary:
      "Real-world insights on designing, implementing, and maintaining microservices at scale.",
    category: "Architecture",
    date: "2025-01-01",
    readMinutes: 7,
  },
];

