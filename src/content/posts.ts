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
  {
    slug: "genai-evals-in-production-2025",
    title: "GenAI Evals in Production: Policy Tests That Scale",
    description:
      "From offline suites to online canaries: patterns that keep quality high as usage grows.",
    category: "GenAI",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "8 min read",
  },
  {
    slug: "feature-flags-edge-2025",
    title: "Feature Flags at the Edge: <100ms Global Releases",
    description:
      "Consistency models, cache strategies, and validation flows for instant global rollouts.",
    category: "Architecture",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "7 min read",
  },
  {
    slug: "north-star-metrics-anti-patterns",
    title: "North‑Star Metrics: 7 Anti‑Patterns to Avoid",
    description:
      "Common traps that derail metric-driven product development and how to fix them.",
    category: "Product Analytics",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "6 min read",
  },
  {
    slug: "mlops-reliability-2025",
    title: "MLOps Reliability: Shipping GenAI Changes Safely",
    description:
      "Canary evals, shadow deploys, and rollback patterns to keep quality high while iterating fast.",
    category: "MLOps",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "9 min read",
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
    slug: "ai-product-launch-checklist-2025",
    title: "AI Product Launch Checklist: From Pilot to Production",
    description:
      "A pragmatic checklist for hardening pilots, proving ROI, and launching AI features safely.",
    category: "Product",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "7 min read",
  },
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
    slug: "prompt-engineering-playbook-v2",
    title: "Prompt Engineering Playbook v2: Patterns That Survive Production",
    description:
      "Composable prompts, eval‑driven iteration, and telemetry for robust GenAI applications.",
    category: "GenAI",
    publishedAt: "2025-09-27",
    featured: true,
    readTime: "8 min read",
  },
  {
    slug: "north-star-metrics-framework",
    title: "North‑Star Metrics: A Field‑Tested Framework",
    description:
      "A practical method to align teams to measurable outcomes and avoid vanity KPIs.",
    category: "Product Analytics",
    publishedAt: "2025-09-27",
    featured: false,
    readTime: "6 min read",
  },
  {
    slug: "ai-workflow-automation-2025-guide",
    title: "The Complete Guide to AI Workflow Automation in 2025",
    description:
      "Discover how AI workflow automation is revolutionizing business operations. Learn implementation strategies, benefits, and real-world case studies.",
    category: "AI & Automation",
    publishedAt: "2025-01-17",
    featured: true,
    readTime: "8 min read",
  },
];

