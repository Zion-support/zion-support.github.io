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
    slug: "mlops-in-45-days",
    title: "MLOps in 45 Days: Shipping Reliable Models Fast",
    description:
      "Reference pipelines, eval gates, and rollout patterns to move from notebook to prod quickly.",
    category: "MLOps",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "8 min read",
  },
  {
    slug: "practical-rag-architecture",
    title: "Practical RAG Architecture That Scales",
    description:
      "Chunking, indexing, and retrieval strategies that actually improve answer quality at lower cost.",
    category: "GenAI",
    publishedAt: "2025-09-29",
    featured: false,
    readTime: "6 min read",
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
    slug: "realtime-feature-flags-edge",
    title: "Real‑Time Feature Flags at the Edge",
    description:
      "Architect, cache, and validate flags globally for instant rollouts and safe rollbacks.",
    category: "Architecture",
    publishedAt: "2025-09-28",
    featured: false,
    readTime: "6 min read",
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
    slug: "platform-scorecards-that-stick",
    title: "Platform Scorecards That Actually Drive Adoption",
    description:
      "Define capabilities, golden paths, and product metrics that align platform work with outcomes.",
    category: "Platform Engineering",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "9 min read",
  },
  {
    slug: "genai-guardrails-in-the-wild",
    title: "GenAI Guardrails in the Wild: Evals, Policies, and Drift Control",
    description:
      "A field guide to combining offline suites with online policy tests to keep quality high.",
    category: "GenAI",
    publishedAt: "2025-09-29",
    featured: false,
    readTime: "7 min read",
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
  {
    slug: "genai-eval-systems",
    title: "Shipping with Confidence: Evaluation Systems for GenAI Apps",
    description:
      "Offline + online evals, policy tests, and guardrails to keep quality high as you scale.",
    category: "GenAI",
    publishedAt: "2025-09-26",
    featured: false,
    readTime: "7 min read",
  },
  {
    slug: "opentelemetry-tracing-primer",
    title: "OpenTelemetry Tracing That Engineers Actually Use",
    description:
      "Sampling strategies, semantic conventions, and dashboards that shrink MTTR for complex stacks.",
    category: "Observability",
    publishedAt: "2025-09-26",
    featured: false,
    readTime: "8 min read",
  },
  {
    slug: "ai-virtual-assistant-best-practices",
    title: "Best Practices for Implementing AI Virtual Assistants in 2025",
    description:
      "Learn how to successfully implement AI virtual assistants in your business. Discover strategies for training, deployment, and optimization.",
    category: "AI & Automation",
    publishedAt: "2025-01-15",
    featured: true,
    readTime: "10 min read",
  },
  {
    slug: "data-analytics-ai-transformation",
    title: "How AI is Transforming Data Analytics in 2025",
    description:
      "Explore the revolutionary impact of AI on data analytics. Learn about predictive analytics, automated insights, and real-time decision making.",
    category: "Data Analytics",
    publishedAt: "2025-01-12",
    featured: false,
    readTime: "12 min read",
  },
  {
    slug: "micro-saas-platform-advantages",
    title: "Why Micro SAAS Platforms Are the Future of Business Software",
    description:
      "Discover the advantages of micro SAAS platforms and how they're transforming how businesses consume and implement software solutions.",
    category: "Technology",
    publishedAt: "2025-01-10",
    featured: false,
  readTime: "9 min read",
  }
];

