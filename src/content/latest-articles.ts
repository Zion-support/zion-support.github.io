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
    id: "ai-platform-engineering-2025",
    slug: "ai-platform-engineering-2025",
    title: "AI Platform Engineering 2025: The Complete Guide to Building Scalable AI Infrastructure",
    description: "Comprehensive guide to building enterprise-grade AI platforms that scale. Learn about MLOps, model governance, and infrastructure best practices.",
    excerpt: "Building AI platforms that can handle enterprise-scale workloads requires careful planning, robust infrastructure, and proven engineering practices. This guide covers everything from initial architecture to production deployment.",
    author: "Zion Tech Group Team",
    date: "2025-01-17",
    category: "Platform Engineering",
    tags: ["AI", "Platform Engineering", "MLOps", "Infrastructure", "Scalability"],
    featured: true,
    readTime: "15 min read",
    image: "/images/ai-platform-engineering.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "enterprise-rag-blueprint-v2",
    slug: "enterprise-rag-blueprint-v2",
    title: "Enterprise RAG Blueprint v2: Advanced Retrieval-Augmented Generation for Business",
    description: "Next-generation RAG implementation strategies for enterprise applications. Learn advanced techniques for document retrieval, context management, and response generation.",
    excerpt: "Retrieval-Augmented Generation (RAG) has evolved significantly. This blueprint covers advanced techniques for enterprise-scale RAG implementations with improved accuracy and performance.",
    author: "Zion Tech Group Team",
    date: "2025-01-16",
    category: "AI Strategy",
    tags: ["RAG", "Enterprise AI", "Document Processing", "NLP", "Knowledge Management"],
    featured: true,
    readTime: "12 min read",
    image: "/images/enterprise-rag-v2.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-autonomous-operations-guide",
    slug: "ai-autonomous-operations-guide",
    title: "AI Autonomous Operations: Building Self-Healing Infrastructure Systems",
    description: "Learn how to implement AI-driven autonomous operations that can self-heal, self-optimize, and self-scale without human intervention.",
    excerpt: "Autonomous operations represent the future of infrastructure management. This guide shows you how to build systems that can manage themselves with minimal human oversight.",
    author: "Zion Tech Group Team",
    date: "2025-01-15",
    category: "AI Operations",
    tags: ["Autonomous Operations", "Infrastructure", "AI", "Self-Healing", "Automation"],
    featured: true,
    readTime: "10 min read",
    image: "/images/ai-autonomous-ops.jpg",
    newBadge: true,
    trending: false
  },
  {
    id: "quantum-computing-business-guide",
    slug: "quantum-computing-business-guide",
    title: "Quantum Computing for Business: Practical Applications and ROI Analysis",
    description: "Explore real-world quantum computing applications for business. Learn about quantum advantage, implementation strategies, and measurable ROI.",
    excerpt: "Quantum computing is moving from research to practical business applications. Discover how forward-thinking companies are already using quantum solutions to solve complex problems.",
    author: "Zion Tech Group Team",
    date: "2025-01-14",
    category: "Quantum Computing",
    tags: ["Quantum Computing", "Business Applications", "ROI", "Optimization", "Technology"],
    featured: false,
    readTime: "11 min read",
    image: "/images/quantum-business.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "edge-ai-implementation-guide",
    slug: "edge-ai-implementation-guide",
    title: "Edge AI Implementation Guide: Bringing Intelligence to the Edge",
    description: "Complete guide to implementing AI at the edge for real-time processing, reduced latency, and enhanced privacy.",
    excerpt: "Edge AI is revolutionizing how we deploy artificial intelligence. Learn the strategies, tools, and best practices for successful edge AI implementation.",
    author: "Zion Tech Group Team",
    date: "2025-01-13",
    category: "Edge Computing",
    tags: ["Edge AI", "Real-time Processing", "IoT", "Latency", "Privacy"],
    featured: false,
    readTime: "13 min read",
    image: "/images/edge-ai-guide.jpg",
    newBadge: true,
    trending: false
  },
  {
    id: "zero-trust-security-implementation",
    slug: "zero-trust-security-implementation",
    title: "Zero Trust Security Implementation: A Complete Enterprise Guide",
    description: "Comprehensive guide to implementing Zero Trust security architecture in enterprise environments. Learn best practices and implementation strategies.",
    excerpt: "Zero Trust is no longer optional for enterprise security. This guide provides a complete roadmap for implementing Zero Trust architecture in your organization.",
    author: "Zion Tech Group Team",
    date: "2025-01-12",
    category: "Cybersecurity",
    tags: ["Zero Trust", "Security", "Enterprise", "Architecture", "Implementation"],
    featured: false,
    readTime: "14 min read",
    image: "/images/zero-trust-guide.jpg",
    newBadge: false,
    trending: true
  },
  {
    id: "ai-content-generation-best-practices",
    slug: "ai-content-generation-best-practices",
    title: "AI Content Generation: Best Practices for Quality and Brand Consistency",
    description: "Learn how to use AI for content generation while maintaining quality, brand voice, and SEO optimization.",
    excerpt: "AI content generation can transform your content strategy, but success requires careful planning and execution. Discover the best practices for AI-generated content.",
    author: "Zion Tech Group Team",
    date: "2025-01-11",
    category: "Content AI",
    tags: ["Content Generation", "AI", "SEO", "Brand Consistency", "Marketing"],
    featured: false,
    readTime: "8 min read",
    image: "/images/ai-content-generation.jpg",
    newBadge: true,
    trending: false
  },
  {
    id: "mlops-reliability-patterns",
    slug: "mlops-reliability-patterns",
    title: "MLOps Reliability Patterns: Building Robust Machine Learning Systems",
    description: "Essential patterns and practices for building reliable, production-ready machine learning systems with proper monitoring and governance.",
    excerpt: "MLOps reliability requires more than just deploying models. Learn the essential patterns for building robust, production-ready ML systems.",
    author: "Zion Tech Group Team",
    date: "2025-01-10",
    category: "MLOps",
    tags: ["MLOps", "Reliability", "Machine Learning", "Production", "Monitoring"],
    featured: false,
    readTime: "9 min read",
    image: "/images/mlops-reliability.jpg",
    newBadge: false,
    trending: true
  }
];

export const featuredArticles = latestArticles.filter(article => article.featured);
export const trendingArticles = latestArticles.filter(article => article.trending);
export const newArticles = latestArticles.filter(article => article.newBadge);