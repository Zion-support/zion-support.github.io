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
  featured?: boolean;
  readTime: string;
  image?: string;
  newBadge?: boolean;
  trending?: boolean;
}

export const latestArticles: LatestArticle[] = [
  {
    id: "ai-cognitive-computing-2026",
    slug: "ai-cognitive-computing-2026",
    title: "AI Cognitive Computing 2026: Brain-Inspired Intelligence",
    description: "Next-generation brain-inspired intelligence with human-level reasoning and $20M+ enterprise value creation.",
    excerpt: "Discover cognitive computing systems that achieve human-level decision-making capabilities.",
    author: "Zion Tech Group Team",
    date: "2026-01-26",
    category: "Cognitive AI",
    tags: ["Cognitive Computing", "Brain-Inspired AI", "Human-Level Reasoning", "Enterprise AI"],
    featured: true,
    readTime: "32 min read",
    image: "/images/ai-cognitive-computing-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-next-generation-autonomous-systems-2026",
    slug: "ai-next-generation-autonomous-systems-2026",
    title: "AI Next-Generation Autonomous Systems 2026",
    description: "Self-managing enterprise infrastructure with 99.9% autonomy and $15M+ operational savings.",
    excerpt: "Discover how next-generation autonomous AI systems are revolutionizing enterprise infrastructure.",
    author: "Zion Tech Group Team",
    date: "2026-01-26",
    category: "Autonomous Systems",
    tags: ["Autonomous Systems", "Self-Managing", "Enterprise Infrastructure", "AI Operations"],
    featured: true,
    readTime: "28 min read",
    image: "/images/ai-next-generation-autonomous-systems-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-agent-orchestration-2026",
    slug: "ai-agent-orchestration-2026",
    title: "AI Agent Orchestration 2026: Multi-Agent System Architecture",
    description: "Master multi-agent systems with 95% automation efficiency and $5M+ ROI through advanced orchestration patterns.",
    excerpt: "Learn enterprise-grade AI agent coordination strategies that scale and deliver unprecedented automation efficiency.",
    author: "Zion Tech Group Team",
    date: "2026-01-26",
    category: "AI Orchestration",
    tags: ["AI Agents", "Orchestration", "Automation", "Enterprise"],
    featured: true,
    readTime: "22 min read",
    image: "/images/ai-agent-orchestration-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-quantum-computing-2026",
    slug: "ai-quantum-computing-2026",
    title: "AI Quantum Computing 2026: Next-Generation Intelligence",
    description: "Harness quantum computing for AI breakthroughs with 1000x faster optimization and revolutionary capabilities.",
    excerpt: "Learn how quantum-AI integration is transforming enterprise computing with unprecedented performance gains.",
    author: "Zion Tech Group Team",
    date: "2026-01-26",
    category: "Quantum Computing",
    tags: ["Quantum AI", "Quantum Computing", "Optimization", "Performance"],
    featured: true,
    readTime: "25 min read",
    image: "/images/ai-quantum-computing-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-sustainability-green-tech-2026",
    slug: "ai-sustainability-green-tech-2026",
    title: "AI Sustainability & Green Tech 2026: Carbon-Neutral Operations",
    description: "Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings through sustainable technology.",
    excerpt: "Learn how forward-thinking companies are implementing green AI strategies for environmental and business benefits.",
    author: "Zion Tech Group Team",
    date: "2026-01-26",
    category: "Sustainability",
    tags: ["Green AI", "Sustainability", "Carbon Neutral", "Energy Efficiency"],
    featured: true,
    readTime: "18 min read",
    image: "/images/ai-sustainability-green-tech-2026.jpg",
    newBadge: true,
    trending: true
  }
];