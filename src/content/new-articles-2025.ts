export interface NewArticle {
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
  featuredInHomepage?: boolean;
}

export const newArticles2025: NewArticle[] = [
  {
    id: "ai-autonomous-infrastructure-2025",
    slug: "ai-autonomous-infrastructure-2025",
    title: "AI Autonomous Infrastructure: The Future of Self-Managing Systems",
    description: "Discover how AI-powered autonomous infrastructure is revolutionizing enterprise operations with self-healing, self-optimizing, and self-scaling capabilities.",
    excerpt: "Transform your infrastructure management with AI that never sleeps, never makes mistakes, and continuously optimizes performance.",
    author: "Zion Tech Group Team",
    date: "2025-01-30",
    category: "AI Operations",
    tags: ["Autonomous Infrastructure", "AI", "Self-Healing", "Automation"],
    featured: true,
    readTime: "12 min read",
    image: "/images/ai-autonomous-infrastructure.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: true
  },
  {
    id: "quantum-ai-hybrid-computing-2025",
    slug: "quantum-ai-hybrid-computing-2025",
    title: "Quantum-AI Hybrid Computing: Breaking Computational Barriers",
    description: "Explore the revolutionary combination of quantum computing and artificial intelligence, delivering unprecedented processing power for complex business problems.",
    excerpt: "Unlock exponential computational power with quantum-AI hybrid systems that solve problems impossible for traditional computers.",
    author: "Zion Tech Group Team",
    date: "2025-01-29",
    category: "Quantum Computing",
    tags: ["Quantum Computing", "AI", "Hybrid Systems", "Computational Power"],
    featured: true,
    readTime: "15 min read",
    image: "/images/quantum-ai-hybrid.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: true
  },
  {
    id: "ai-cybersecurity-next-generation-2025",
    slug: "ai-cybersecurity-next-generation-2025",
    title: "Next-Generation AI Cybersecurity: Zero-Trust with Intelligence",
    description: "Learn how advanced AI cybersecurity systems are creating impenetrable digital fortresses with zero-trust architecture and behavioral analytics.",
    excerpt: "Build an unbreachable security perimeter with AI that learns, adapts, and evolves to counter emerging threats in real-time.",
    author: "Zion Tech Group Team",
    date: "2025-01-28",
    category: "Cybersecurity",
    tags: ["AI Security", "Zero Trust", "Behavioral Analytics", "Threat Detection"],
    featured: true,
    readTime: "10 min read",
    image: "/images/ai-cybersecurity-next-gen.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: true
  },
  {
    id: "edge-ai-real-time-intelligence-2025",
    slug: "edge-ai-real-time-intelligence-2025",
    title: "Edge AI: Real-Time Intelligence at the Network Edge",
    description: "Discover how Edge AI is bringing real-time intelligence to IoT devices, autonomous vehicles, and smart cities with sub-millisecond response times.",
    excerpt: "Experience the power of AI processing at the edge, delivering instant decisions without cloud dependency.",
    author: "Zion Tech Group Team",
    date: "2025-01-27",
    category: "Edge Computing",
    tags: ["Edge AI", "Real-time Processing", "IoT", "Autonomous Systems"],
    featured: true,
    readTime: "11 min read",
    image: "/images/edge-ai-real-time.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: false
  },
  {
    id: "ai-content-generation-enterprise-2025",
    slug: "ai-content-generation-enterprise-2025",
    title: "Enterprise AI Content Generation: Scale Your Content Strategy",
    description: "Master enterprise-grade AI content generation that maintains brand voice, ensures quality, and scales content production by 1000%.",
    excerpt: "Transform your content strategy with AI that understands your brand, maintains consistency, and delivers quality at scale.",
    author: "Zion Tech Group Team",
    date: "2025-01-26",
    category: "Content AI",
    tags: ["Content Generation", "AI Writing", "Brand Voice", "Content Strategy"],
    featured: true,
    readTime: "9 min read",
    image: "/images/ai-content-enterprise.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: false
  },
  {
    id: "ai-customer-insights-advanced-2025",
    slug: "ai-customer-insights-advanced-2025",
    title: "Advanced AI Customer Insights: Predicting Behavior Before It Happens",
    description: "Unlock the power of predictive customer analytics with AI that anticipates needs, predicts churn, and personalizes experiences at scale.",
    excerpt: "Stay ahead of customer needs with AI that predicts behavior patterns and delivers personalized experiences before customers even ask.",
    author: "Zion Tech Group Team",
    date: "2025-01-25",
    category: "Customer Analytics",
    tags: ["Customer Insights", "Predictive Analytics", "Personalization", "Churn Prediction"],
    featured: false,
    readTime: "8 min read",
    image: "/images/ai-customer-insights-advanced.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: false
  },
  {
    id: "genai-evals-production-2025",
    slug: "genai-evals-production-2025",
    title: "GenAI Evals in Production: Quality Gates That Actually Work",
    description: "Implement production-ready GenAI evaluation systems with automated quality gates, performance monitoring, and continuous improvement loops.",
    excerpt: "Ensure your GenAI systems deliver consistent quality with automated evaluation pipelines that catch issues before users do.",
    author: "Zion Tech Group Team",
    date: "2025-01-24",
    category: "GenAI Quality",
    tags: ["GenAI", "Quality Gates", "Evaluation", "Production Monitoring"],
    featured: true,
    readTime: "7 min read",
    image: "/images/genai-evals-production.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: false
  },
  {
    id: "ai-platform-roi-measurement-2025",
    slug: "ai-platform-roi-measurement-2025",
    title: "AI Platform ROI Measurement: Quantifying Business Impact",
    description: "Learn how to measure and maximize ROI from AI platform investments with proven frameworks and success metrics.",
    excerpt: "Turn AI investments into measurable business outcomes with comprehensive ROI frameworks and success tracking.",
    author: "Zion Tech Group Team",
    date: "2025-01-23",
    category: "AI Strategy",
    tags: ["AI ROI", "Business Metrics", "Platform Investment", "Success Measurement"],
    featured: true,
    readTime: "6 min read",
    image: "/images/ai-platform-roi.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: false
  }
];

export const featuredNewArticles = newArticles2025.filter(article => article.featured);
export const trendingNewArticles = newArticles2025.filter(article => article.trending);
export const homepageFeaturedArticles = newArticles2025.filter(article => article.featuredInHomepage);
export const latestNewArticles = newArticles2025.slice(0, 6);