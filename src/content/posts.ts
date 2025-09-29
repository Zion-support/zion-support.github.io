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
    slug: "ai-autonomous-enterprise-2026",
    title: "The Future of Autonomous Enterprise: AI That Runs Itself",
    description: "Discover how autonomous AI systems are revolutionizing enterprise operations, reducing costs by 60% while increasing efficiency by 300%.",
    category: "AI Engineering",
    publishedAt: "2026-01-15",
    featured: true,
    readTime: "12 min read"
  },
  {
    slug: "ai-quantum-optimization-2026",
    title: "Quantum AI: 1000x Faster Processing Revolution",
    description: "Explore how quantum computing is accelerating AI processing, enabling real-time decision making for complex enterprise problems.",
    category: "Quantum Computing",
    publishedAt: "2026-01-12",
    featured: true,
    readTime: "15 min read"
  },
  {
    slug: "ai-agent-orchestration-2026",
    title: "AI Agent Orchestration: The Future of Work",
    description: "Learn how intelligent agent systems are revolutionizing enterprise workflows and business processes.",
    category: "AI Agents",
    publishedAt: "2026-01-10",
    featured: true,
    readTime: "10 min read"
  },
  {
    slug: "ai-platform-architecture-2026",
    title: "AI Platform Architecture: Building for Scale",
    description: "Learn how to design AI platforms that can handle enterprise-scale workloads and deliver consistent performance.",
    category: "Architecture",
    publishedAt: "2026-01-08",
    featured: true,
    readTime: "14 min read"
  },
  {
    slug: "ai-sre-blueprints-2026",
    title: "AI SRE Blueprints 2026: Reliability Budgets, Rollbacks, and Live Traces",
    description: "Operational patterns to keep AI systems reliable: explicit budgets, instant rollbacks, and user‑centric traces.",
    category: "AI Operations",
    publishedAt: "2025-10-29",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "ai-neural-interfaces-2026",
    title: "AI Neural Interfaces 2026: The Next Frontier",
    description: "Explore the cutting-edge neural interface technologies that are bridging the gap between human cognition and AI systems.",
    category: "Neural Interfaces",
    publishedAt: "2026-01-05",
    featured: true,
    readTime: "11 min read"
  },
  {
    slug: "ai-space-tech-2026",
    title: "AI Space Technology 2026: Beyond Earth's Boundaries",
    description: "Discover how AI is revolutionizing space exploration, satellite operations, and interplanetary missions.",
    category: "Space Technology",
    publishedAt: "2026-01-03",
    featured: true,
    readTime: "13 min read"
  },
  {
    slug: "ai-synthetic-data-2026",
    title: "AI Synthetic Data 2026: Privacy-Preserving Intelligence",
    description: "Learn how synthetic data generation is enabling AI development while protecting privacy and ensuring compliance.",
    category: "Privacy & Security",
    publishedAt: "2026-01-01",
    featured: true,
    readTime: "9 min read"
  }
];