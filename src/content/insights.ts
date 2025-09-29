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
    id: "genai-evals-guardrails",
    title: "Production-Grade GenAI: Evals, Guardrails, and Monitoring",
    summary:
      "A field-tested approach to shipping GenAI safely: evaluate quality, enforce policy, and observe drift.",
    category: "AI",
    date: "2025-09-28",
    readMinutes: 8,
  },
  {
    id: "serverless-cost-controls",
    title: "Taming Serverless Costs at Scale",
    summary:
      "Practical levers for keeping Lambda, Cloud Functions, and event systems fast without surprise bills.",
    category: "Cloud",
    date: "2025-09-26",
    readMinutes: 6,
  },
  {
    id: "zero-trust-blueprint",
    title: "Zero-Trust Blueprint for SaaS Platforms",
    summary:
      "A pragmatic rollout plan covering identity, least-privilege, continuous verification, and segmentation.",
    category: "Security",
    date: "2025-09-24",
    readMinutes: 7,
  },
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
  {
    id: "ai-transformation-roadmap",
    title: "AI Transformation Roadmap: From Pilot to Production",
    summary:
      "Strategic framework for scaling AI initiatives across enterprise organizations with measurable ROI.",
    category: "AI Strategy",
    date: "2025-01-22",
    readMinutes: 10,
  },
  {
    id: "cloud-native-security",
    title: "Cloud-Native Security: Protecting Modern Applications",
    summary:
      "Essential security patterns for containerized applications, serverless functions, and microservices architectures.",
    category: "Cloud Security",
    date: "2025-01-20",
    readMinutes: 7,
  },
  {
    id: "data-governance-2025",
    title: "Data Governance in the Age of AI: 2025 Framework",
    summary:
      "Comprehensive approach to data quality, privacy, and compliance for AI-powered organizations.",
    category: "Data Governance",
    date: "2025-01-18",
    readMinutes: 9,
  },
  {
    id: "automation-roi-metrics",
    title: "Measuring Automation ROI: Beyond Cost Savings",
    summary:
      "Advanced metrics for quantifying the business impact of automation initiatives across operations.",
    category: "Business Intelligence",
    date: "2025-01-15",
    readMinutes: 6,
  },
  {
    id: "edge-computing-strategy",
    title: "Edge Computing Strategy: Bringing AI Closer to Data",
    summary:
      "Strategic considerations for deploying AI workloads at the edge for improved performance and privacy.",
    category: "Edge Computing",
    date: "2025-01-12",
    readMinutes: 8,
  },
  {
    id: "digital-transformation-playbook",
    title: "Digital Transformation Playbook for Mid-Market Companies",
    summary:
      "Proven strategies for accelerating digital transformation initiatives in resource-constrained environments.",
    category: "Digital Strategy",
    date: "2025-01-10",
    readMinutes: 11,
  },
  {
    id: "api-security-best-practices",
    title: "API Security Best Practices: Protecting Your Digital Assets",
    summary:
      "Comprehensive guide to securing APIs in modern applications with authentication, authorization, and monitoring.",
    category: "API Security",
    date: "2025-01-08",
    readMinutes: 7,
  },
  {
    id: "machine-learning-ops",
    title: "MLOps in Production: Scaling Machine Learning Systems",
    summary:
      "Operational excellence for machine learning systems: deployment, monitoring, and continuous improvement.",
    category: "MLOps",
    date: "2025-01-05",
    readMinutes: 9,
  },
  {
    id: "blockchain-business-applications",
    title: "Blockchain Beyond Crypto: Business Applications in 2025",
    summary:
      "Real-world blockchain use cases in supply chain, identity management, and smart contracts for enterprises.",
    category: "Blockchain",
    date: "2025-01-03",
    readMinutes: 8,
  },
];

