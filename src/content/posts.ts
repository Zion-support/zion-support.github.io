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
    slug: "ai-autonomous-operations-2025",
    title: "AI Autonomous Operations: Self‑Healing, Self‑Optimizing Infra",
    description: "Design SLO‑driven controllers, safe remediations, and policy‑guarded runbooks.",
    category: "Infrastructure",
    publishedAt: "2025-10-04",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "enterprise-ai-roadmap-2025",
    title: "Enterprise AI Roadmap 2025: From Pilots to Platform",
    description: "Operating model, platform capabilities, and productized use‑cases that compound.",
    category: "Strategy",
    publishedAt: "2025-10-04",
    featured: true,
    readTime: "9 min read"
  },
  {
    slug: "cloud-native-ai-platforms-2025",
    title: "Cloud‑Native AI Platforms: Multi‑Region, Cost‑Aware, Governed",
    description: "Reference architecture for elastic GPUs, feature stores, evals, and guardrails.",
    category: "Cloud",
    publishedAt: "2025-10-04",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "quantum-computing-business-applications-2025",
    title: "Quantum Computing: Practical Business Applications in 2025",
    description: "Where quantum adds value today: portfolio, routing, scheduling, and pricing.",
    category: "Quantum",
    publishedAt: "2025-10-04",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "ai-platform-roi-2025",
    title: "AI Platform ROI Scorecards: Proving Value Quarter by Quarter",
    description: "Lightweight scorecards that link capabilities to adoption, golden paths, SLOs, and outcomes.",
    category: "AI Strategy",
    publishedAt: "2025-10-03",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "secure-ml-supply-chain-2025",
    title: "Secure ML Supply Chain: From SBOMs to Model Lineage",
    description: "End-to-end provenance and controls for datasets, models, and inference routes.",
    category: "Security",
    publishedAt: "2025-10-03",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "edge-cdn-ml-personalization-2025",
    title: "Edge CDN + On‑Device ML: Personalization Under 100ms",
    description: "Combine edge KV, signed configs, and tiny models for private, real‑time personalization.",
    category: "Edge Computing",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "ai-sales-copilot-2025",
    title: "AI Sales Copilot: Grounded Prompts, CRM Context, Reliable Evals",
    description: "Wire CRMs, build prompt libraries, and add evals that correlate with win‑rates.",
    category: "AI Strategy",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "genai-evals-in-production-2025",
    title: "GenAI Evals in Production: Policy Tests That Scale",
    description: "Layered evaluation: offline suites, pre-merge checks, and online canaries tied to KPIs.",
    category: "GenAI",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "feature-flags-edge-2025",
    title: "Feature Flags at the Edge: <100ms Global Releases",
    description: "Consistency models, cache strategies, and validation flows for instant global rollouts.",
    category: "Architecture",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "7 min read"
  }
];

