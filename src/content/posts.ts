export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
}

export const posts: BlogPost[] = [
  {
    slug: "genai-observability-essentials",
    title: "GenAI Observability: Metrics, Traces, and Evals That Matter",
    description:
      "A concise starter for monitoring LLM systems across quality, safety, latency, and cost with actionable dashboards.",
    category: "AI Engineering",
    publishedAt: "2025-09-29",
  },
  {
    slug: "platform-engineering-starter-kit",
    title: "Platform Engineering Starter Kit: Golden Paths in 30 Days",
    description:
      "How to ship paved roads, templates, and guardrails that boost developer velocity without sacrificing security.",
    category: "Platform Engineering",
    publishedAt: "2025-09-28",
  },
  {
    slug: "kubernetes-cost-guardrails",
    title: "Kubernetes Cost Guardrails: Save 30% Without Rewrites",
    description:
      "Practical policies, autoscaling defaults, and right-sizing tactics to control spend while keeping SLOs green.",
    category: "Cloud FinOps",
    publishedAt: "2025-09-27",
  },
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
];

