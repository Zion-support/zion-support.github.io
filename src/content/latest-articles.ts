export interface LatestArticle {
  id: string;
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  featured: boolean;
  readTime: string;
  image?: string;
  newBadge?: boolean;
  trending?: boolean;
}

export const latestArticles: LatestArticle[] = [
  {
    id: "ai-neural-interfaces-2026",
    slug: "ai-neural-interfaces-2026",
    title: "AI Neural Interfaces 2026: Brain-Computer Integration Revolution",
    description: "Revolutionary AI neural interfaces achieving 95% accuracy with real-time brain-computer communication, transforming human-AI interaction.",
    excerpt: "Explore the groundbreaking world of AI neural interfaces that are revolutionizing human-computer interaction with 95% accuracy and real-time processing.",
    author: "Zion Tech Group",
    date: "2026-01-15",
    category: "AI Innovation",
    tags: ["neural interfaces", "brain-computer", "AI", "2026", "revolutionary"],
    featured: true,
    readTime: "12 min read",
    image: "/images/ai-neural-interfaces-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-space-tech-2026",
    slug: "ai-space-tech-2026",
    title: "AI Space Technology 2026: Autonomous Space Operations & Deep Space Intelligence",
    description: "Revolutionary AI space technology for autonomous missions, deep space exploration, and orbital operations with 99.9% reliability.",
    excerpt: "Discover how AI is revolutionizing space exploration with autonomous operations and deep space intelligence systems.",
    author: "Zion Tech Group",
    date: "2026-01-10",
    category: "Space Technology",
    tags: ["space technology", "autonomous operations", "AI", "2026", "space exploration"],
    featured: true,
    readTime: "15 min read",
    image: "/images/ai-space-tech-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-quantum-computing-2026",
    slug: "ai-quantum-computing-2026",
    title: "AI Quantum Computing 2026: Next-Generation Intelligence",
    description: "Harness quantum computing for AI breakthroughs with 1000x faster optimization and revolutionary capabilities.",
    excerpt: "Explore the convergence of quantum computing and AI, delivering unprecedented processing power and optimization capabilities.",
    author: "Zion Tech Group",
    date: "2026-01-05",
    category: "Quantum Computing",
    tags: ["quantum computing", "AI", "optimization", "2026", "breakthrough"],
    featured: true,
    readTime: "18 min read",
    image: "/images/ai-quantum-computing-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-2026-mega-breakthrough",
    slug: "ai-2026-mega-breakthrough",
    title: "AI 2026 Mega Breakthrough: Revolutionary Technologies Reshaping the Future",
    description: "Discover the most groundbreaking AI technologies of 2026 that are transforming industries and creating unprecedented opportunities for businesses worldwide.",
    excerpt: "Explore the most revolutionary AI technologies reshaping our world in 2026, from brain-computer interfaces to space exploration AI.",
    author: "Zion Tech Group",
    date: "2026-01-20",
    category: "AI Innovation",
    tags: ["AI breakthrough", "revolutionary technology", "2026", "transformation", "innovation"],
    featured: true,
    readTime: "25 min read",
    image: "/images/ai-2026-mega-breakthrough.jpg",
    newBadge: true,
    trending: true
  }
];