export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Enterprise: 2025 Trends and Predictions",
    slug: "future-ai-enterprise-2025-trends",
    excerpt: "Explore the latest AI trends transforming enterprise operations and how businesses can leverage these technologies for competitive advantage.",
    content: "# The Future of AI in Enterprise: 2025 Trends and Predictions\n\nArtificial Intelligence continues to revolutionize enterprise operations...",
    author: "Dr. Sarah Chen",
    publishedAt: "2025-01-15",
    readTime: "8",
    category: "AI & Machine Learning",
    tags: ["AI", "Enterprise", "Technology"],
    featured: true
  },
  {
    id: 2,
    title: "Quantum Computing Breakthrough: What It Means for Your Business",
    slug: "quantum-computing-breakthrough-business",
    excerpt: "Understanding the latest quantum computing advances and their practical applications in solving complex business problems.",
    content: "# Quantum Computing Breakthrough: What It Means for Your Business\n\nQuantum computing represents a paradigm shift...",
    author: "Prof. Michael Rodriguez",
    publishedAt: "2025-01-12",
    readTime: "12",
    category: "Quantum Computing",
    tags: ["Quantum", "Computing", "Innovation"],
    featured: true
  },
  {
    id: 3,
    title: "Micro SaaS Revolution: Building Scalable Solutions",
    slug: "micro-saas-revolution-scalable-solutions",
    excerpt: "How micro SaaS platforms are changing the software landscape and creating new opportunities for businesses.",
    content: "# Micro SaaS Revolution: Building Scalable Solutions\n\nMicro SaaS represents a new approach to software development...",
    author: "Alex Thompson",
    publishedAt: "2025-01-10",
    readTime: "6",
    category: "Micro SaaS",
    tags: ["SaaS", "Software", "Business"],
    featured: false
  },
  {
    id: 4,
    title: "Cybersecurity in the Age of AI: New Threats and Solutions",
    slug: "cybersecurity-ai-threats-solutions",
    excerpt: "Examining how AI is both creating new security challenges and providing innovative solutions to protect enterprise data.",
    content: "# Cybersecurity in the Age of AI: New Threats and Solutions\n\nAs artificial intelligence becomes more prevalent...",
    author: "Lisa Park",
    publishedAt: "2025-01-08",
    readTime: "10",
    category: "Cybersecurity",
    tags: ["Security", "AI", "Enterprise"],
    featured: false
  },
  {
    id: 5,
    title: "Digital Transformation: A Complete Guide for 2025",
    slug: "digital-transformation-guide-2025",
    excerpt: "Comprehensive strategies for successful digital transformation initiatives in modern enterprises.",
    content: "# Digital Transformation: A Complete Guide for 2025\n\nDigital transformation is no longer optional...",
    author: "David Kumar",
    publishedAt: "2025-01-05",
    readTime: "15",
    category: "Digital Transformation",
    tags: ["Digital", "Transformation", "Strategy"],
    featured: false
  },
  {
    id: 6,
    title: "Cloud Infrastructure Best Practices for Global Enterprises",
    slug: "cloud-infrastructure-best-practices",
    excerpt: "Essential guidelines for designing and managing cloud infrastructure that scales with your business needs.",
    content: "# Cloud Infrastructure Best Practices for Global Enterprises\n\nCloud infrastructure has become the backbone...",
    author: "Maria Santos",
    publishedAt: "2025-01-03",
    readTime: "9",
    category: "Cloud Computing",
    tags: ["Cloud", "Infrastructure", "Enterprise"],
    featured: false
  }
];