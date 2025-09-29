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
    slug: "ai-platform-roi-2025",
    title: "AI Platform ROI Scorecards: Proving Value Quarter by Quarter",
    description:
      "A pragmatic framework to tie platform capabilities to adoption and product outcomes with clear owner reviews.",
    category: "AI Strategy",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "7 min read",
  },
  {
    slug: "secure-ml-supply-chain-2025",
    title: "Secure ML Supply Chain: From SBOMs to Model Lineage",
    description:
      "Practical controls for datasets, models, and inference routes to prevent tampering and drift.",
    category: "Security",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "6 min read",
  },
  {
    slug: "edge-cdn-ml-personalization-2025",
    title: "Edge CDN + On‑Device ML: Personalization Under 100ms",
    description:
      "Combine edge KV, signed configs, and tiny models for private, real‑time personalization.",
    category: "Edge Computing",
    publishedAt: "2025-09-28",
    featured: true,
    readTime: "6 min read",
  },
];

