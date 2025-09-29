export interface Post {
  id: string;
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  content: string;
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

export const posts: Post[] = [
  {
    id: "ai-neural-interfaces-2026",
    slug: "ai-neural-interfaces-2026",
    title: "AI Neural Interfaces 2026: Brain-Computer Integration Revolution",
    description: "Revolutionary AI neural interfaces achieving 95% accuracy with real-time brain-computer communication, transforming human-AI interaction.",
    excerpt: "Explore the groundbreaking world of AI neural interfaces that are revolutionizing human-computer interaction with 95% accuracy and real-time processing.",
    content: "Full content about AI neural interfaces...",
    author: "Zion Tech Group",
    date: "2026-01-15",
    category: "AI Innovation",
    tags: ["neural interfaces", "brain-computer", "AI", "2026", "revolutionary"],
    featured: true,
    readTime: "8 min read",
    image: "/images/neural-interfaces-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-space-tech-2026",
    slug: "ai-space-tech-2026",
    title: "AI Space Technology 2026: Autonomous Space Exploration",
    description: "Autonomous space operations with 99.9% mission success rates and interplanetary AI systems enabling advanced space exploration.",
    excerpt: "Delve into the future of space exploration with AI-powered autonomous systems achieving 99.9% mission success rates.",
    content: "Full content about AI space technology...",
    author: "Zion Tech Group",
    date: "2026-01-14",
    category: "Space Technology",
    tags: ["space AI", "autonomous", "exploration", "2026", "technology"],
    featured: true,
    readTime: "10 min read",
    image: "/images/space-tech-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-synthetic-data-2026",
    slug: "ai-synthetic-data-2026",
    title: "AI Synthetic Data 2026: Privacy-Preserving AI Training",
    description: "Train robust AI models with privacy-preserving synthetic data, overcoming data scarcity and regulatory hurdles.",
    excerpt: "Discover how synthetic data generation is revolutionizing AI training while maintaining privacy and regulatory compliance.",
    content: "Full content about AI synthetic data...",
    author: "Zion Tech Group",
    date: "2026-01-13",
    category: "Data Science",
    tags: ["synthetic data", "privacy", "AI training", "2026", "compliance"],
    featured: true,
    readTime: "7 min read",
    image: "/images/synthetic-data-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-quantum-computing-2026",
    slug: "ai-quantum-computing-2026",
    title: "AI Quantum Computing 2026: 1000x Faster Optimization",
    description: "Revolutionary quantum computing integration with AI delivering 1000x faster optimization and breakthrough capabilities.",
    excerpt: "Harness the power of quantum computing to accelerate AI model training and optimization by up to 1000x.",
    content: "Full content about AI quantum computing...",
    author: "Zion Tech Group",
    date: "2026-01-12",
    category: "Quantum Computing",
    tags: ["quantum computing", "AI optimization", "1000x faster", "2026", "breakthrough"],
    featured: true,
    readTime: "9 min read",
    image: "/images/quantum-computing-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-autonomous-enterprise-2026",
    slug: "ai-autonomous-enterprise-2026",
    title: "AI Autonomous Enterprise 2026: Self-Managing Operations",
    description: "Fully autonomous AI systems that manage, optimize, and heal themselves, achieving 99.9% uptime and significant cost reductions.",
    excerpt: "Implement fully autonomous AI systems that manage, optimize, and heal themselves with 99.9% uptime.",
    content: "Full content about AI autonomous enterprise...",
    author: "Zion Tech Group",
    date: "2026-01-11",
    category: "Enterprise AI",
    tags: ["autonomous systems", "enterprise", "self-managing", "2026", "automation"],
    featured: true,
    readTime: "8 min read",
    image: "/images/autonomous-enterprise-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-business-transformation-2026",
    slug: "ai-business-transformation-2026",
    title: "AI Business Transformation 2026: $50M+ ROI Success Stories",
    description: "Comprehensive AI transformation strategies delivering $50M+ ROI across Fortune 500 companies with proven methodologies.",
    excerpt: "Discover how Fortune 500 companies are achieving $50M+ ROI through comprehensive AI transformation strategies.",
    content: "Full content about AI business transformation...",
    author: "Zion Tech Group",
    date: "2026-01-10",
    category: "Business Transformation",
    tags: ["business transformation", "ROI", "Fortune 500", "2026", "success"],
    featured: true,
    readTime: "12 min read",
    image: "/images/business-transformation-2026.jpg",
    newBadge: true,
    trending: true
  }
];