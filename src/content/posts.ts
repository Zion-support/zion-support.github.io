export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  featured?: boolean;
  readTime?: string;
}

export const posts: BlogPost[] = [
  // New posts (today)
  {
    slug: "shipping-genai-safely-weekly",
    title: "Ship GenAI Changes Weekly—Safely",
    description:
      "Eval gates, canary cohorts, and rollback triggers that let you move fast without breaking trust.",
    category: "MLOps",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "8 min read",
  },
  {
    slug: "edge-experiences-under-100ms",
    title: "Under 100ms: Designing Edge Experiences",
    description:
      "Latency budgets, on-device inference, and cache strategies for delightful real-time UX.",
    category: "Architecture",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "7 min read",
  },
  {
    slug: "north-star-metrics-that-matter",
    title: "North‑Star Metrics That Actually Drive Product Decisions",
    description:
      "Leading indicators, instrumentation plans, and governance to avoid vanity traps.",
    category: "Product Analytics",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "6 min read",
  },

  // Existing highlights
  {
    slug: "edge-inference-patterns-2025",
    title: "Edge Inference Patterns for Sub‑100ms Experiences",
    description:
      "Latency budgets, on‑device models, and caching strategies for lightning‑fast AI UX at the edge.",
    category: "Architecture",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "7 min read",
  },
  {
    slug: "ai-governance-checklist-2025",
    title: "AI Governance Checklist 2025: Ship Fast Without Breaking Policy",
    description:
      "Practical guardrails, review rituals, and approval flows to keep GenAI initiatives compliant and on‑track.",
    category: "AI Governance",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "5 min read",
  },
  {
    slug: "realtime-data-pipelines-2025",
    title: "Reliable Real‑Time Data Pipelines in 2025",
    description:
      "Exactly‑once semantics, backpressure control, and pragmatic observability for streaming systems.",
    category: "Data Engineering",
    publishedAt: "2025-09-28",
    featured: true,
    readTime: "7 min read",
  },
  {
    slug: "prompt-engineering-playbook-v2",
    title: "Prompt Engineering Playbook v2: Patterns That Survive Production",
    description:
      "Composable prompts, eval‑driven iteration, and telemetry for robust GenAI applications.",
    category: "GenAI",
    publishedAt: "2025-09-27",
    featured: true,
    readTime: "8 min read",
  }
];

