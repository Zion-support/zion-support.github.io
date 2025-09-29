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
    id: "ai-autonomous-enterprise-2026",
    slug: "ai-autonomous-enterprise-2026",
    title: "The Future of Autonomous Enterprise: AI That Runs Itself",
    description: "Discover how autonomous AI systems are revolutionizing enterprise operations, reducing costs by 60% while increasing efficiency by 300%.",
    excerpt: "How self-managing AI systems are transforming enterprise operations, delivering unprecedented efficiency and cost savings.",
    author: "Dr. Sarah Chen, AI Research Director",
    date: "2026-01-15",
    category: "AI Engineering",
    tags: ["Autonomous AI", "Enterprise", "Automation"],
    featured: true,
    readTime: "12 min read",
    image: "/images/ai-autonomous-enterprise-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-quantum-optimization-2026",
    slug: "ai-quantum-optimization-2026",
    title: "Quantum AI: 1000x Faster Processing Revolution",
    description: "Explore how quantum computing is accelerating AI processing, enabling real-time decision making for complex enterprise problems.",
    excerpt: "How quantum computing is revolutionizing AI processing, enabling real-time solutions to previously impossible problems.",
    author: "Dr. Michael Rodriguez, Quantum AI Lead",
    date: "2026-01-12",
    category: "Quantum Computing",
    tags: ["Quantum AI", "Optimization", "Performance"],
    featured: true,
    readTime: "15 min read",
    image: "/images/ai-quantum-optimization-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-agent-orchestration-2026",
    slug: "ai-agent-orchestration-2026",
    title: "AI Agent Orchestration: The Future of Work",
    description: "Learn how intelligent agent systems are revolutionizing enterprise workflows and business processes.",
    excerpt: "Discover how AI agents work together to automate complex business processes and drive efficiency.",
    author: "Zion Tech Group Team",
    date: "2026-01-10",
    category: "AI Agents",
    tags: ["AI Agents", "Orchestration", "Automation"],
    featured: true,
    readTime: "10 min read",
    image: "/images/ai-agent-orchestration-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-platform-architecture-2026",
    slug: "ai-platform-architecture-2026",
    title: "AI Platform Architecture: Building for Scale",
    description: "Learn how to design AI platforms that can handle enterprise-scale workloads and deliver consistent performance.",
    excerpt: "Comprehensive guide to building scalable AI platforms that can handle enterprise demands.",
    author: "Zion Tech Group Team",
    date: "2026-01-08",
    category: "Architecture",
    tags: ["Platform", "Architecture", "Scalability"],
    featured: true,
    readTime: "14 min read",
    image: "/images/ai-platform-architecture-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-sre-blueprints-2026",
    slug: "ai-sre-blueprints-2026",
    title: "AI SRE Blueprints 2026: Reliability Budgets, Rollbacks, and Live Traces",
    description: "Operational patterns to keep AI systems reliable: explicit budgets, instant rollbacks, and user‑centric traces.",
    excerpt: "Ship AI safely with SRE playbooks: budgets, traces, and deterministic fallbacks.",
    author: "Zion Tech Group Team",
    date: "2025-10-29",
    category: "AI Operations",
    tags: ["SRE", "Reliability", "Traces", "Budgets"],
    featured: true,
    readTime: "7 min read",
    image: "/images/ai-sre-blueprints-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-neural-interfaces-2026",
    slug: "ai-neural-interfaces-2026",
    title: "AI Neural Interfaces 2026: The Next Frontier",
    description: "Explore the cutting-edge neural interface technologies that are bridging the gap between human cognition and AI systems.",
    excerpt: "Revolutionary neural interface technologies that enable direct brain-computer interaction.",
    author: "Dr. Elena Vasquez, Neural Interface Specialist",
    date: "2026-01-05",
    category: "Neural Interfaces",
    tags: ["Neural Interfaces", "Brain-Computer", "AI"],
    featured: true,
    readTime: "11 min read",
    image: "/images/ai-neural-interfaces-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-space-tech-2026",
    slug: "ai-space-tech-2026",
    title: "AI Space Technology 2026: Beyond Earth's Boundaries",
    description: "Discover how AI is revolutionizing space exploration, satellite operations, and interplanetary missions.",
    excerpt: "How artificial intelligence is transforming space technology and enabling new frontiers of exploration.",
    author: "Dr. James Mitchell, Space AI Lead",
    date: "2026-01-03",
    category: "Space Technology",
    tags: ["Space AI", "Satellites", "Exploration"],
    featured: true,
    readTime: "13 min read",
    image: "/images/ai-space-tech-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-synthetic-data-2026",
    slug: "ai-synthetic-data-2026",
    title: "AI Synthetic Data 2026: Privacy-Preserving Intelligence",
    description: "Learn how synthetic data generation is enabling AI development while protecting privacy and ensuring compliance.",
    excerpt: "Revolutionary approaches to generating synthetic data that preserves privacy while enabling AI innovation.",
    author: "Dr. Maria Santos, Privacy AI Expert",
    date: "2026-01-01",
    category: "Privacy & Security",
    tags: ["Synthetic Data", "Privacy", "Compliance"],
    featured: true,
    readTime: "9 min read",
    image: "/images/ai-synthetic-data-2026.jpg",
    newBadge: true,
    trending: true
  }
];