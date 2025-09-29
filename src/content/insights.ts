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
    id: "vector-search-in-production",
    title: "Vector Search in Production: Patterns That Actually Scale",
    summary:
      "What we learned implementing vector databases and retrieval for real-world, high-traffic applications.",
    category: "AI Engineering",
    date: "2025-09-29",
    readMinutes: 7,
  },
  {
    id: "llm-evals-that-matter",
    title: "LLM Evals That Matter: From Demos to Reliable Systems",
    summary:
      "A practical evaluation stack for GenAI systems across quality, safety, latency, and cost.",
    category: "MLOps",
    date: "2025-09-29",
    readMinutes: 9,
  },
  {
    id: "finops-guardrails",
    title: "FinOps Guardrails: Cut 30% Cloud Spend Without Slowing Teams",
    summary:
      "Engineering-friendly cost controls: autoscaling defaults, workload tagging, and policy-as-code.",
    category: "Cloud FinOps",
    date: "2025-09-29",
    readMinutes: 6,
  },
  {
    id: "zero-trust-rollout",
    title: "Zero-Trust Rollout for SaaS: A 6-Week Plan",
    summary:
      "Least-privilege, continuous verification, and telemetry-driven detection with minimal friction.",
    category: "Security",
    date: "2025-09-29",
    readMinutes: 8,
  },
];

