export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  imageUrl: string;
  slug: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  images: string[];
  featured: boolean;
  aiScore: number;
  tags: string[];
  benefits: string[];
  features: string[];
  useCases: string[];
  technologies: string[];
  deliveryTime: string;
  support: string;
  reviews: {
    rating: number;
    count: number;
  };
}

export const NEW_BLOG_POSTS_2027: BlogPost[] = [
  {
    id: 9901,
    title: "AI-Powered Business Transformation: The Complete 2027 Guide",
    excerpt: "Discover how artificial intelligence is revolutionizing business operations, from automated decision-making to predictive analytics and beyond.",
    content: "The business landscape has been fundamentally transformed by artificial intelligence, and 2027 represents the pinnacle of this revolution. Companies worldwide are leveraging AI to achieve unprecedented levels of efficiency, innovation, and competitive advantage. Our comprehensive guide covers the complete AI transformation framework, from assessment and strategy to continuous innovation.",
    author: "Dr. Alexandra Thompson",
    authorRole: "Chief AI Strategist",
    publishDate: "2025-01-17",
    readTime: "15 min read",
    category: "AI Transformation",
    tags: ["AI Strategy", "Business Transformation", "Machine Learning", "Digital Innovation"],
    featured: true,
    imageUrl: "/images/blog/ai-business-transformation-2027.jpg",
    slug: "ai-powered-business-transformation-2027-guide"
  },
  {
    id: 9902,
    title: "Quantum Computing Revolution: What Every Executive Needs to Know",
    excerpt: "A comprehensive executive guide to quantum computing, its business implications, and how to prepare your organization for the quantum future.",
    content: "Quantum computing represents the next frontier in computational power, promising to solve problems that are currently impossible for classical computers. This guide covers quantum phenomena, business applications, industry impact timeline, and how to prepare your organization for the quantum revolution.",
    author: "Prof. Michael Chen",
    authorRole: "Quantum Computing Research Director",
    publishDate: "2025-01-17",
    readTime: "18 min read",
    category: "Quantum Computing",
    tags: ["Quantum Computing", "Executive Strategy", "Technology Innovation", "Future Computing"],
    featured: true,
    imageUrl: "/images/blog/quantum-computing-revolution-2027.jpg",
    slug: "quantum-computing-revolution-executive-guide"
  },
  {
    id: 9903,
    title: "Cybersecurity in the AI Era: Protecting Digital Assets in 2027",
    excerpt: "Comprehensive cybersecurity strategies for the AI-powered world, covering emerging threats, advanced protection methods, and future-proof security frameworks.",
    content: "As artificial intelligence becomes increasingly integrated into business operations, cybersecurity has evolved into a complex battlefield where AI-powered attacks meet AI-powered defenses. Learn about zero trust architecture, quantum-safe security, and advanced protection technologies.",
    author: "Sarah Mitchell",
    authorRole: "Chief Information Security Officer",
    publishDate: "2025-01-17",
    readTime: "20 min read",
    category: "Cybersecurity",
    tags: ["Cybersecurity", "AI Security", "Quantum Computing", "Digital Protection"],
    featured: true,
    imageUrl: "/images/blog/cybersecurity-ai-era-2027.jpg",
    slug: "cybersecurity-ai-era-2027"
  }
];

export const NEW_SERVICES_2027: Service[] = [
  {
    id: "ai-transformation-consulting-2027",
    title: "AI Business Transformation Consulting 2027",
    description: "Comprehensive AI transformation consulting service that guides organizations through complete digital transformation using cutting-edge artificial intelligence technologies.",
    category: "AI Consulting",
    price: 150000,
    currency: "$",
    images: ["/images/services/ai-transformation-consulting.jpg"],
    featured: true,
    aiScore: 98,
    tags: ["AI Strategy", "Digital Transformation", "Business Consulting", "Innovation"],
    benefits: [
      "Complete AI strategy development",
      "50% reduction in operational costs",
      "300% increase in process efficiency",
      "Future-proof technology roadmap"
    ],
    features: [
      "AI readiness assessment",
      "Strategic roadmap development",
      "Technology implementation planning",
      "Change management support",
      "Performance monitoring",
      "Continuous optimization"
    ],
    useCases: [
      "Enterprise digital transformation",
      "Process automation",
      "Data-driven decision making",
      "Customer experience enhancement",
      "Operational efficiency improvement"
    ],
    technologies: [
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "Robotic Process Automation"
    ],
    deliveryTime: "6-12 months",
    support: "24/7 dedicated support team",
    reviews: { rating: 4.9, count: 47 }
  },
  {
    id: "quantum-security-implementation-2027",
    title: "Quantum-Safe Security Implementation",
    description: "Advanced quantum-resistant security implementation service that prepares organizations for the post-quantum computing era with military-grade encryption and security protocols.",
    category: "Cybersecurity",
    price: 250000,
    currency: "$",
    images: ["/images/services/quantum-security.jpg"],
    featured: true,
    aiScore: 99,
    tags: ["Quantum Security", "Cryptography", "Future-Proof", "Military-Grade"],
    benefits: [
      "Quantum-resistant encryption",
      "Future-proof security architecture",
      "Compliance with emerging standards",
      "Enhanced data protection"
    ],
    features: [
      "Post-quantum cryptography implementation",
      "Quantum key distribution systems",
      "Lattice-based encryption",
      "Security architecture redesign",
      "Migration planning",
      "Compliance framework"
    ],
    useCases: [
      "Government agencies",
      "Financial institutions",
      "Healthcare organizations",
      "Critical infrastructure",
      "High-value data protection"
    ],
    technologies: [
      "Lattice-based Cryptography",
      "Hash-based Signatures",
      "Code-based Cryptography",
      "Quantum Key Distribution",
      "Multi-party Computation"
    ],
    deliveryTime: "8-15 months",
    support: "Specialized quantum security team",
    reviews: { rating: 5.0, count: 23 }
  }
];