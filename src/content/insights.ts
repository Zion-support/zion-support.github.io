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
    id: "genai-policy-tests-canaries",
    title: "GenAI Policy Tests: From Offline Suites to Online Canaries",
    summary:
      "How to combine offline evals with live canaries to catch regressions before customers do.",
    category: "GenAI",
    date: "2025-09-29",
    readMinutes: 6,
  },
  {
    id: "edge-flags-validation",
    title: "Edge Flags: Validation Circuits That Prevent Bad Rolls",
    summary:
      "Design health checks, signed payloads, and roll-forward playbooks to keep flags safe.",
    category: "Architecture",
    date: "2025-09-29",
    readMinutes: 5,
  },
  {
    id: "north-star-metrics-pitfalls",
    title: "North‑Star Metrics Pitfalls: Fixing Vanity and Ambiguity",
    summary:
      "Replace vanity KPIs with leading indicators and consistent instrumentation.",
    category: "Product Analytics",
    date: "2025-09-29",
    readMinutes: 5,
  },
  {
    id: "platform-blueprints-golden-paths",
    title: "Golden Paths That Actually Get Used",
    summary:
      "How to design developer workflows, templates, and scorecards that reduce cognitive load.",
    category: "Platform Engineering",
    date: "2025-09-29",
    readMinutes: 6,
  },
  {
    id: "ai-governance-rubric",
    title: "A Lightweight Rubric for AI Governance Decisions",
    summary:
      "Decision criteria for when to add controls, how to validate, and who owns risk.",
    category: "Risk & Compliance",
    date: "2025-09-29",
    readMinutes: 6,
  },
  {
    id: "reliable-real-time-pipelines",
    title: "Building Reliable Real‑Time Data Pipelines",
    summary:
      "Exactly‑once semantics, schema evolution, and backpressure handling in streaming systems.",
    category: "Data Engineering",
    date: "2025-09-29",
    readMinutes: 7,
  },
  {
    id: "llm-guardrails-prod",
    title: "Shipping LLM Guardrails Without Killing Velocity",
    summary:
      "Policy-as-code, prompt hygiene, and eval gates that scale from POC to prod.",
    category: "GenAI",
    date: "2025-09-29",
    readMinutes: 7,
  },
  {
    id: "edge-ai-case-studies",
    title: "How Edge AI Is Powering Real‑Time Experiences",
    summary:
      "A look at on‑device models, streaming pipelines, and cost/perf trade‑offs from deployments.",
    category: "AI Engineering",
    date: "2025-09-29",
    readMinutes: 7,
  },
  {
    id: "data-contracts-in-practice",
    title: "Data Contracts in Practice: Stop Breaking Your Dashboards",
    summary:
      "Contract-first schemas, change management, and lineage that make analytics reliable again.",
    category: "Data Engineering",
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
      "How we helped teams reduce cloud spend by 32% on average without hurting performance.",
    category: "Cloud",
    date: "2025-08-05",
    readMinutes: 5,
  },
  {
    id: "data-governance-starter",
    title: "Data Governance Starter Guide for Mid‑Market Teams",
    summary:
      "A no‑nonsense playbook for data quality, lineage, and access controls.",
    category: "Data",
    date: "2025-07-18",
    readMinutes: 8,
  },
];

export default latestInsights;

