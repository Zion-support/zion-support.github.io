export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  featured: boolean;
  readTime: string;
  image?: string;
  newBadge?: boolean;
  trending?: boolean;
}

export const posts: BlogPost[] = [
  {
    slug: "ai-incident-command-center-2026",
    title: "AI Incident Command Center 2026: Faster Containment, Fewer Surprises",
    description: "Budgeted actions, live traces, and rollback‑ready playbooks for <60s containment.",
    category: "Security",
    publishedAt: "2025-10-29",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "edge-privacy-playbooks-2026",
    title: "Edge Privacy Playbooks 2026: Scoped IDs, Local Filters, DP Noise",
    description: "Practical patterns for signal‑rich analytics without PII using scoped IDs and on‑device filters.",
    category: "Edge Computing",
    publishedAt: "2025-10-29",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "ai-sre-blueprints-2026",
    title: "AI SRE Blueprints 2026: Observability, Reliability, and Incident Response",
    description: "Comprehensive SRE practices for AI systems with advanced monitoring and automated incident response.",
    category: "AI Operations",
    publishedAt: "2025-10-28",
    featured: true,
    readTime: "12 min read"
  },
  {
    slug: "ai-neural-interfaces-2026",
    title: "AI Neural Interfaces 2026: Brain-Computer Integration Revolution",
    description: "Revolutionary AI neural interfaces achieving 95% accuracy with real-time brain-computer communication.",
    category: "AI Innovation",
    publishedAt: "2026-01-15",
    featured: true,
    readTime: "12 min read",
    newBadge: true,
    trending: true
  },
  {
    slug: "ai-space-tech-2026",
    title: "AI Space Technology 2026: Autonomous Space Operations",
    description: "Revolutionary AI space technology for autonomous missions and deep space exploration.",
    category: "Space Technology",
    publishedAt: "2026-01-10",
    featured: true,
    readTime: "15 min read",
    newBadge: true,
    trending: true
  },
  {
    slug: "ai-quantum-computing-2026",
    title: "AI Quantum Computing 2026: Next-Generation Intelligence",
    description: "Harness quantum computing for AI breakthroughs with 1000x faster optimization.",
    category: "Quantum Computing",
    publishedAt: "2026-01-05",
    featured: true,
    readTime: "18 min read",
    newBadge: true,
    trending: true
  },
  {
    slug: "ai-2026-mega-breakthrough",
    title: "AI 2026 Mega Breakthrough: Revolutionary Technologies Reshaping the Future",
    description: "Discover the most groundbreaking AI technologies of 2026 that are transforming industries worldwide.",
    category: "AI Innovation",
    publishedAt: "2026-01-20",
    featured: true,
    readTime: "25 min read",
    newBadge: true,
    trending: true
  }
];