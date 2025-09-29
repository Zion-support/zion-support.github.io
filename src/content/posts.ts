export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
}

export const posts: BlogPost[] = [
  {
    slug: "ai-roadmaps",
    title: "Designing High-Impact AI Roadmaps",
    description:
      "A practical framework to align AI investments with measurable business outcomes and reduce time-to-value.",
    category: "AI Strategy",
    publishedAt: "2025-09-15",
  },
  {
    slug: "cloud-finops-tactics",
    title: "Cutting Cloud Spend Without Slowing Teams",
    description:
      "Proven tactics for right-sizing, demand shaping, and engineering-friendly guardrails that keep velocity high.",
    category: "Cloud FinOps",
    publishedAt: "2025-09-22",
  },
  {
    slug: "zero-trust-for-saas",
    title: "Zero-Trust in Practice for SaaS",
    description:
      "A pragmatic guide to rolling out least-privilege, continuous verification, and blast radius controls.",
    category: "Security",
    publishedAt: "2025-09-25",
  },
  {
    slug: "genai-evals-guardrails-monitoring",
    title: "Production-Grade GenAI: Evals, Guardrails, and Monitoring",
    description:
      "A field-tested approach to shipping GenAI safely: evaluate quality, enforce policy, and observe drift.",
    category: "AI",
    publishedAt: "2025-09-29",
  },
  {
    slug: "vector-search-patterns",
    title: "Vector Search in Production: Patterns That Actually Scale",
    description:
      "What we learned implementing vector databases and retrieval for real-world, high-traffic applications.",
    category: "AI Engineering",
    publishedAt: "2025-09-29",
  },
  {
    slug: "cloud-cost-optimization-90-days",
    title: "Cloud Cost Optimization: 9 Wins in 90 Days",
    description:
      "How we helped three clients reduce cloud spend by 32% on average without sacrificing performance.",
    category: "Cloud",
    publishedAt: "2025-09-29",
  },
  {
    slug: "zero-trust-rollout-6-weeks",
    title: "Zero-Trust Rollout for SaaS: A 6-Week Plan",
    description:
      "Least-privilege, continuous verification, and telemetry-driven detection with minimal friction.",
    category: "Security",
    publishedAt: "2025-09-29",
  },
];

