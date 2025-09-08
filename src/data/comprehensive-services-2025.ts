export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  targetAudience: string[];
  marketPrice: string;
  website: string;
  contactEmail: string;
  tags: string[];
  aiScore: number;
  rating: number;
  reviewCount: number;
  featured: boolean;
  location: string;
  availability: string;
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
    verified: boolean;
  };
  images: string[];
  createdAt: string;
}

export const COMPREHENSIVE_SERVICES_2025: Service[] = [
  // AI & Machine Learning Services
  {
    id: "ai-chatbot-builder-pro",
    title: "AI Chatbot Builder Pro",
    description: "No-code AI chatbot creation platform with advanced NLP, multi-language support, and seamless integrations. Perfect for customer service, sales, and support automation.",
    category: "AI Services",
    subcategory: "Chatbots & Conversational AI",
    price: 99,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Drag & drop chatbot builder",
      "Advanced NLP processing",
      "Multi-language support (50+ languages)",
      "CRM integrations (Salesforce, HubSpot)",
      "Analytics dashboard",
      "Custom branding",
      "API access",
      "24/7 support"
    ],
    benefits: [
      "Reduce customer service costs by 60%",
      "24/7 customer support availability",
      "Instant response times",
      "Scalable customer interactions",
      "Data-driven insights"
    ],
    targetAudience: ["E-commerce", "SaaS companies", "Customer service teams", "Marketing agencies"],
    marketPrice: "$99-299/month",
    website: "https://ziontechgroup.com/ai-chatbot-builder",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["AI Chatbot", "NLP", "Customer Service", "Automation"],
    aiScore: 95,
    rating: 4.8,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z"
  },
  {
    id: "ai-content-generator-suite",
    title: "AI Content Generator Suite",
    description: "Advanced AI-powered content creation platform for blogs, social media, marketing copy, and product descriptions. Includes SEO optimization and brand voice customization.",
    category: "AI Services",
    subcategory: "Content Creation",
    price: 79,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered content generation",
      "SEO optimization tools",
      "Brand voice customization",
      "Multi-format output (blog, social, email)",
      "Plagiarism checker",
      "Content calendar",
      "Team collaboration",
      "Analytics & performance tracking"
    ],
    benefits: [
      "10x faster content creation",
      "Improved SEO rankings",
      "Consistent brand voice",
      "Reduced content costs",
      "Higher engagement rates"
    ],
    targetAudience: ["Content creators", "Marketing teams", "Agencies", "E-commerce businesses"],
    marketPrice: "$79-199/month",
    website: "https://ziontechgroup.com/ai-content-generator",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["AI Content", "SEO", "Marketing", "Automation"],
    aiScore: 92,
    rating: 4.7,
    reviewCount: 203,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T10:00:00.000Z"
  },
  {
    id: "ai-video-generation-platform",
    title: "AI Video Generation Platform",
    description: "Create professional videos from text descriptions using advanced AI algorithms. Supports multiple video formats, styles, and customization options.",
    category: "AI Services",
    subcategory: "Video Generation",
    price: 149,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Text-to-video generation",
      "Multiple video styles",
      "Custom branding options",
      "Voice-over generation",
      "Background music library",
      "Export in multiple formats",
      "Collaborative editing",
      "Analytics dashboard"
    ],
    benefits: [
      "90% reduction in video production time",
      "Professional quality output",
      "Cost-effective video creation",
      "Scalable video production",
      "Consistent brand messaging"
    ],
    targetAudience: ["Marketing teams", "Content creators", "Agencies", "E-learning platforms"],
    marketPrice: "$149-399/month",
    website: "https://ziontechgroup.com/ai-video-generator",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["AI Video", "Content Creation", "Marketing", "Automation"],
    aiScore: 94,
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T10:00:00.000Z"
  },

  // Business Automation Services
  {
    id: "hr-automation-suite",
    title: "HR Automation Suite",
    description: "Complete HR management automation including recruitment, onboarding, performance tracking, and employee engagement. Streamline your HR processes with AI-powered insights.",
    category: "Business Automation",
    subcategory: "Human Resources",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated recruitment workflows",
      "Onboarding automation",
      "Performance tracking",
      "Employee engagement surveys",
      "Time and attendance",
      "Payroll integration",
      "Compliance monitoring",
      "Analytics dashboard"
    ],
    benefits: [
      "50% reduction in HR administrative tasks",
      "Improved employee satisfaction",
      "Better compliance management",
      "Data-driven HR decisions",
      "Reduced hiring costs"
    ],
    targetAudience: ["HR departments", "Small businesses", "Enterprises", "Recruitment agencies"],
    marketPrice: "$199-499/month",
    website: "https://ziontechgroup.com/hr-automation",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["HR Automation", "Recruitment", "Employee Management", "Compliance"],
    aiScore: 88,
    rating: 4.6,
    reviewCount: 134,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T10:00:00.000Z"
  },
  {
    id: "financial-analytics-platform",
    title: "Financial Analytics Platform",
    description: "Real-time financial reporting and analytics with AI-powered insights and forecasting. Monitor your business performance and make data-driven financial decisions.",
    category: "Business Automation",
    subcategory: "Financial Management",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time financial dashboards",
      "AI-powered forecasting",
      "Budget tracking",
      "Expense management",
      "Revenue analytics",
      "Cash flow monitoring",
      "Financial reporting",
      "Integration with accounting software"
    ],
    benefits: [
      "Improved financial visibility",
      "Better cash flow management",
      "Data-driven decision making",
      "Reduced financial risks",
      "Automated reporting"
    ],
    targetAudience: ["CFOs", "Financial controllers", "Small businesses", "Enterprises"],
    marketPrice: "$299-799/month",
    website: "https://ziontechgroup.com/financial-analytics",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["Financial Analytics", "Forecasting", "Reporting", "Automation"],
    aiScore: 91,
    rating: 4.8,
    reviewCount: 167,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T10:00:00.000Z"
  },

  // Cybersecurity Services
  {
    id: "soc2-compliance-automation",
    title: "SOC2 Compliance Automation",
    description: "Automated SOC2 compliance monitoring and reporting for enterprise security. Streamline your compliance process and maintain continuous monitoring.",
    category: "Cybersecurity",
    subcategory: "Compliance",
    price: 499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated compliance monitoring",
      "Real-time security alerts",
      "Compliance reporting",
      "Risk assessment",
      "Policy management",
      "Audit trail",
      "Integration with security tools",
      "Expert consultation"
    ],
    benefits: [
      "Automated compliance management",
      "Reduced audit preparation time",
      "Continuous compliance monitoring",
      "Lower compliance costs",
      "Improved security posture"
    ],
    targetAudience: ["Enterprises", "Financial services", "Healthcare", "SaaS companies"],
    marketPrice: "$499-1,999/month",
    website: "https://ziontechgroup.com/soc2-compliance",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["SOC2", "Compliance", "Security", "Automation"],
    aiScore: 89,
    rating: 4.7,
    reviewCount: 78,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T10:00:00.000Z"
  },

  // Emerging Technology Services
  {
    id: "quantum-neural-network-platform",
    title: "Quantum Neural Network Platform",
    description: "Quantum computing-powered neural networks for advanced AI applications. Leverage quantum computing to solve complex machine learning problems.",
    category: "Emerging Technology",
    subcategory: "Quantum Computing",
    price: 999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum neural network training",
      "Quantum algorithm optimization",
      "Hybrid classical-quantum computing",
      "Real-time quantum simulations",
      "API access",
      "Expert consultation",
      "Custom algorithm development",
      "Performance analytics"
    ],
    benefits: [
      "Exponential speed improvements",
      "Solving previously intractable problems",
      "Competitive advantage",
      "Future-proof technology",
      "Research and development support"
    ],
    targetAudience: ["Research institutions", "Pharmaceutical companies", "Financial services", "Technology companies"],
    marketPrice: "$999-5,000/month",
    website: "https://ziontechgroup.com/quantum-neural-network",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["Quantum Computing", "Neural Networks", "AI", "Research"],
    aiScore: 98,
    rating: 4.9,
    reviewCount: 23,
    featured: true,
    location: "Global",
    availability: "Limited",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T10:00:00.000Z"
  },
  {
    id: "5g-enterprise-solutions",
    title: "5G Enterprise Solutions",
    description: "Enterprise-grade 5G infrastructure and application development services. Build next-generation applications that leverage the power of 5G networks.",
    category: "Emerging Technology",
    subcategory: "5G & Telecommunications",
    price: 799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "5G network planning",
      "Application development",
      "Edge computing solutions",
      "IoT integration",
      "Network optimization",
      "Security implementation",
      "Performance monitoring",
      "24/7 support"
    ],
    benefits: [
      "Ultra-fast connectivity",
      "Low latency applications",
      "Massive IoT support",
      "Enhanced mobile broadband",
      "Future-ready infrastructure"
    ],
    targetAudience: ["Telecommunications", "Manufacturing", "Healthcare", "Transportation"],
    marketPrice: "$799-2,999/month",
    website: "https://ziontechgroup.com/5g-enterprise",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["5G", "Telecommunications", "IoT", "Edge Computing"],
    aiScore: 93,
    rating: 4.8,
    reviewCount: 45,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T10:00:00.000Z"
  }
];

// Service categories for easy filtering
export const SERVICE_CATEGORIES = [
  "AI Services",
  "Business Automation", 
  "Cybersecurity",
  "Emerging Technology",
  "Cloud Services",
  "Data Analytics",
  "Digital Transformation",
  "IT Infrastructure"
];

// Pricing tiers
export const PRICING_TIERS = [
  {
    name: "Starter",
    price: 99,
    features: [
      "Access to 50+ Core Services",
      "Basic AI Solutions",
      "Email Support",
      "Standard Security"
    ]
  },
  {
    name: "Professional", 
    price: 299,
    features: [
      "Access to 200+ Services",
      "Advanced AI & ML Solutions",
      "Priority Support",
      "Enhanced Security",
      "Custom Integrations"
    ]
  },
  {
    name: "Enterprise",
    price: 999,
    features: [
      "Access to ALL Services",
      "Quantum & Emerging Tech",
      "24/7 Dedicated Support",
      "Enterprise Security",
      "Custom Development"
    ]
  }
];