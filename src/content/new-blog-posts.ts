export interface NewBlogPost {
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

export const newBlogPosts: NewBlogPost[] = [
  {
    id: "ai-autonomous-infrastructure-2025",
    slug: "ai-autonomous-infrastructure-2025",
    title: "AI Autonomous Infrastructure: Self-Healing Systems That Scale",
    description: "Revolutionary AI infrastructure that automatically heals, optimizes, and scales without human intervention. Learn how to build truly autonomous systems.",
    excerpt: "Discover the future of infrastructure management with AI-powered autonomous systems that can self-heal, self-optimize, and self-scale in real-time.",
    author: "Zion Tech Group Team",
    date: "2025-01-17",
    category: "AI Infrastructure",
    tags: ["Autonomous Systems", "Infrastructure", "AI", "Self-Healing", "Scalability"],
    featured: true,
    readTime: "12 min read",
    image: "/images/ai-autonomous-infrastructure.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "quantum-ai-hybrid-computing-2025",
    slug: "quantum-ai-hybrid-computing-2025",
    title: "Quantum-AI Hybrid Computing: The Next Frontier of Business Intelligence",
    description: "Explore how quantum computing combined with AI is revolutionizing business intelligence, optimization, and decision-making processes.",
    excerpt: "Quantum-AI hybrid systems are unlocking unprecedented computational power for business optimization, machine learning, and complex problem solving.",
    author: "Zion Tech Group Team",
    date: "2025-01-17",
    category: "Quantum Computing",
    tags: ["Quantum Computing", "AI", "Business Intelligence", "Optimization", "Hybrid Systems"],
    featured: true,
    readTime: "15 min read",
    image: "/images/quantum-ai-hybrid.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-cybersecurity-zero-trust-2025",
    slug: "ai-cybersecurity-zero-trust-2025",
    title: "AI-Powered Zero Trust Cybersecurity: Next-Generation Threat Protection",
    description: "Advanced AI-driven zero trust security architecture that provides comprehensive protection against evolving cyber threats with real-time adaptation.",
    excerpt: "Learn how AI-powered zero trust security creates dynamic, adaptive protection that evolves with threats and provides comprehensive enterprise security.",
    author: "Zion Tech Group Team",
    date: "2025-01-17",
    category: "Cybersecurity",
    tags: ["Zero Trust", "AI Security", "Threat Protection", "Enterprise Security", "Real-time Defense"],
    featured: true,
    readTime: "11 min read",
    image: "/images/ai-zero-trust-security.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-content-generation-automation-2025",
    slug: "ai-content-generation-automation-2025",
    title: "AI Content Generation Automation: Scaling Content Production 10x",
    description: "Revolutionary AI content automation platform that generates high-quality, brand-consistent content at scale while maintaining SEO optimization.",
    excerpt: "Discover how AI content generation automation can transform your content strategy, producing 10x more content while maintaining quality and brand consistency.",
    author: "Zion Tech Group Team",
    date: "2025-01-17",
    category: "Content AI",
    tags: ["Content Generation", "AI Automation", "SEO", "Brand Consistency", "Content Strategy"],
    featured: false,
    readTime: "9 min read",
    image: "/images/ai-content-automation.jpg",
    newBadge: true,
    trending: false
  },
  {
    id: "ai-customer-experience-transformation-2025",
    slug: "ai-customer-experience-transformation-2025",
    title: "AI Customer Experience Transformation: Personalization at Scale",
    description: "Transform customer experiences with AI-powered personalization, predictive analytics, and intelligent automation across all touchpoints.",
    excerpt: "Learn how AI is revolutionizing customer experience through intelligent personalization, predictive analytics, and seamless automation.",
    author: "Zion Tech Group Team",
    date: "2025-01-17",
    category: "Customer Experience",
    tags: ["Customer Experience", "AI Personalization", "Predictive Analytics", "Automation", "Customer Journey"],
    featured: false,
    readTime: "8 min read",
    image: "/images/ai-customer-experience.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-supply-chain-optimization-2025",
    slug: "ai-supply-chain-optimization-2025",
    title: "AI Supply Chain Optimization: Intelligent Logistics and Predictive Analytics",
    description: "Revolutionary AI solutions for supply chain optimization, featuring predictive analytics, intelligent routing, and automated inventory management.",
    excerpt: "Explore how AI is transforming supply chain management with predictive analytics, intelligent optimization, and automated logistics solutions.",
    author: "Zion Tech Group Team",
    date: "2025-01-17",
    category: "Supply Chain",
    tags: ["Supply Chain", "AI Optimization", "Predictive Analytics", "Logistics", "Inventory Management"],
    featured: false,
    readTime: "10 min read",
    image: "/images/ai-supply-chain.jpg",
    newBadge: true,
    trending: false
  }
];

export const featuredNewPosts = newBlogPosts.filter(post => post.featured);
export const trendingNewPosts = newBlogPosts.filter(post => post.trending);
export const latestNewPosts = newBlogPosts.slice(0, 3);