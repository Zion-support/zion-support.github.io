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
    slug: "ai-2027-operational-trust-blueprint",
    title: "AI 2027: Operational Trust Blueprint",
    description:
      "SLIs wired to KPIs with budgets, canaries, and instant rollback.",
    category: "AI Strategy",
    publishedAt: "2027-02-07",
    featured: true,
    readTime: "8 min read",
  },
  {
    slug: "ai-2027-enterprise-rag-quality-budgets",
    title: "AI 2027: Enterprise RAG Quality Budgets",
    description:
      "Freshness windows, retrieval tiers, and semantic caches that raise answer quality while reducing cost.",
    category: "RAG",
    publishedAt: "2027-02-07",
    featured: true,
    readTime: "9 min read",
  },
  {
    slug: "ai-2027-genai-cost-optimization-v7",
    title: "AI 2027: GenAI Cost Optimization v7",
    description:
      "Cut inference spend 60–85% with tiered routing, request coalescing, and selective distillation.",
    category: "GenAI",
    publishedAt: "2027-02-07",
    featured: true,
    readTime: "9 min read",
  },
];

export const getFeaturedPosts = (): BlogPost[] => {
  return posts.filter((post) => post.featured);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return posts.filter((post) => post.category === category);
};
