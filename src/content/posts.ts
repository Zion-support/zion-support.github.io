export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  featured?: boolean;
  readTime?: string;
  image?: string;
  tags?: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "ai-platform-engineering-2025",
    title: "AI Platform Engineering 2025: From Golden Paths to Live Evals",
    description:
      "A pragmatic blueprint for platform teams: paved roads, product-aligned scorecards, and online evals that correlate with outcomes.",
    category: "AI Strategy",
    publishedAt: "2025-10-03",
    featured: true,
    readTime: "9 min read",
    image: "/images/ai-platform-engineering-2025.jpg",
    tags: ["Platform", "Golden Paths", "Evals", "ROI"]
  },
  {
    slug: "ai-platform-roi-2025",
    title: "AI Platform ROI Scorecards: Proving Value Quarter by Quarter",
    description:
      "Lightweight scorecards that connect capabilities to adoption, reliability SLOs, and product outcomes.",
    category: "AI Strategy",
    publishedAt: "2025-10-03",
    featured: true,
    readTime: "7 min read",
    image: "/images/ai-platform-roi.jpg",
    tags: ["Platform", "ROI", "Scorecards"]
  },
  {
    slug: "secure-ml-supply-chain-2025",
    title: "Secure ML Supply Chain: From SBOMs to Model Lineage",
    description:
      "Provenance for datasets and models, signed artifacts, and runtime egress controls to prevent tampering and drift.",
    category: "Security",
    publishedAt: "2025-10-03",
    featured: true,
    readTime: "6 min read",
    image: "/images/secure-ml-supply-chain.jpg",
    tags: ["ML", "Security", "SBOM", "Lineage"]
  },
  {
    slug: "enterprise-rag-blueprint-v2",
    title: "Enterprise RAG Blueprint v2: Freshness, Hybrid Search, Evals",
    description:
      "Patterns that make RAG work in production: chunking, freshness SLAs, hybrid retrieval, and evals tied to business KPIs.",
    category: "GenAI",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "8 min read",
    image: "/images/enterprise-rag-v2.jpg",
    tags: ["RAG", "Search", "GenAI", "Quality"]
  },
  {
    slug: "edge-cdn-ml-personalization-2025",
    title: "Edge CDN + On‑Device ML: Personalization Under 100ms",
    description:
      "Combine edge KV, signed configs, and tiny device models for private, real‑time personalization.",
    category: "Edge Computing",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "6 min read",
    image: "/images/edge-personalization.jpg",
    tags: ["Edge", "Personalization", "On‑Device ML"]
  },
  {
    slug: "feature-flags-at-the-edge-2025",
    title: "Feature Flags at the Edge: <100ms Global Releases",
    description:
      "Consistency models, cache strategies, and validation circuits for instant global rollouts without stale configs.",
    category: "Architecture",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "7 min read",
    image: "/images/edge-flags.jpg",
    tags: ["Edge", "Feature Flags", "Architecture"]
  }
];

export default posts;

