<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export interface Service {
=======
export interface ComprehensiveService {
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
=======
export interface ComprehensiveService {
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
  id: string;
  title: string;
  description: string;
  category: string;
<<<<<<< HEAD
<<<<<<< HEAD
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
=======
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'monthly' | 'hourly' | 'project-based';
  features: string[];
  benefits: string[];
<<<<<<< HEAD
  targetAudience: string[];
=======
  useCases: string[];
  marketPrice: string;
  contactLink: string;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
  tags: string[];
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
  };
  images: string[];
  createdAt: string;
  aiScore: number;
  rating: number;
  reviewCount: number;
  estimatedDelivery: string;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

<<<<<<< HEAD
export const COMPREHENSIVE_SERVICES: Service[] = [
  {
    id: "ai-autonomous-business-manager",
    title: "AI Autonomous Business Manager",
    description: "Intelligent business management platform that autonomously handles day-to-day operations",
    category: "AI & Machine Learning",
    price: 2999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Autonomous decision making",
      "Process automation",
      "Performance monitoring",
      "Predictive analytics"
    ],
    useCases: [
      "Business process optimization",
      "Operational efficiency",
      "Strategic planning",
      "Resource management"
    ],
    targetAudience: [
      "Enterprise businesses",
      "Medium-sized companies",
      "Operations managers",
      "Business consultants"
    ],
    tags: ["AI", "Business Management", "Automation", "Decision Making"],
=======
export const comprehensiveServices: ComprehensiveService[] = [
  // AI & Machine Learning Services
  {
    id: "ai-chatbot-development",
    title: "AI Chatbot Development & Integration",
    description: "Custom AI-powered chatbots for customer service, sales, and support. Built with advanced NLP and machine learning for natural conversations.",
    category: "AI Services",
    subcategory: "Chatbot Development",
    price: 2500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Natural Language Processing (NLP)",
      "Multi-language support",
      "Integration with CRM systems",
      "Analytics dashboard",
      "24/7 availability",
      "Custom training data"
    ],
    benefits: [
      "Reduce customer service costs by 30%",
      "Improve response time to seconds",
      "Handle multiple conversations simultaneously",
      "Scalable customer support solution"
    ],
    targetAudience: ["E-commerce", "SaaS companies", "Customer service teams", "Small businesses"],
    tags: ["AI", "Chatbot", "NLP", "Customer Service", "Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 156,
    estimatedDelivery: "2-3 weeks",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
<<<<<<< HEAD
    id: "ai-business-intelligence-suite",
    title: "AI Business Intelligence Suite",
    description: "Comprehensive BI platform powered by artificial intelligence for data-driven insights",
    category: "Data & Analytics",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time analytics",
      "Predictive modeling",
      "Interactive dashboards",
      "Data visualization"
    ],
    useCases: [
      "Business reporting",
      "Market analysis",
      "Performance tracking",
      "Strategic planning"
    ],
    targetAudience: [
      "Data analysts",
      "Business managers",
      "Executives",
      "Consultants"
    ],
    tags: ["AI", "Business Intelligence", "Analytics", "Data Visualization"],
=======
    id: "ai-content-generation",
    title: "AI Content Generation & Marketing",
    description: "AI-powered content creation for blogs, social media, and marketing campaigns. Generate engaging, SEO-optimized content at scale.",
    category: "AI Services",
    subcategory: "Content Generation",
    price: 800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Blog post generation",
      "Social media content",
      "Email marketing copy",
      "SEO optimization",
      "Brand voice consistency",
      "Content calendar management"
    ],
    benefits: [
      "Save 20+ hours per week on content creation",
      "Improve SEO rankings with optimized content",
      "Maintain consistent brand messaging",
      "Scale content production without hiring"
    ],
    targetAudience: ["Marketing agencies", "Content creators", "Small businesses", "E-commerce"],
    tags: ["AI", "Content Creation", "Marketing", "SEO", "Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    aiScore: 88,
    rating: 4.7,
    reviewCount: 89,
    estimatedDelivery: "1-2 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-process-automation",
    title: "AI Business Process Automation",
    description: "Intelligent automation solutions that streamline business processes using AI and machine learning for maximum efficiency.",
    category: "AI Services",
    subcategory: "Process Automation",
    price: 3500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Process mining and analysis",
      "Workflow automation",
      "Intelligent document processing",
      "Decision automation",
      "Performance monitoring",
      "ROI tracking"
    ],
    benefits: [
      "Increase operational efficiency by 40%",
      "Reduce manual errors by 90%",
      "Accelerate process completion",
      "Lower operational costs"
    ],
    targetAudience: ["Manufacturing", "Healthcare", "Financial services", "Logistics"],
    tags: ["AI", "Automation", "Process Optimization", "Workflow", "Efficiency"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    aiScore: 92,
    rating: 4.8,
    reviewCount: 124,
    estimatedDelivery: "4-6 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // Cybersecurity Services
  {
    id: "cybersecurity-audit",
    title: "Comprehensive Cybersecurity Audit",
    description: "Full security assessment including penetration testing, vulnerability analysis, and compliance review for enterprise organizations.",
    category: "Cybersecurity",
    subcategory: "Security Audit",
    price: 5000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Penetration testing",
      "Vulnerability assessment",
      "Security architecture review",
      "Compliance audit",
      "Risk assessment",
      "Remediation roadmap"
    ],
    benefits: [
      "Identify security gaps before attackers do",
      "Meet compliance requirements",
      "Improve security posture",
      "Protect customer data and trust"
    ],
    targetAudience: ["Financial services", "Healthcare", "E-commerce", "Government"],
    tags: ["Cybersecurity", "Security Audit", "Penetration Testing", "Compliance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 78,
    estimatedDelivery: "3-4 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "zero-trust-security",
    title: "Zero Trust Security Implementation",
    description: "Implement modern zero trust security framework with continuous verification and least privilege access controls.",
    category: "Cybersecurity",
    subcategory: "Zero Trust",
    price: 8000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Identity verification",
      "Device trust assessment",
      "Network segmentation",
      "Continuous monitoring",
      "Access control policies",
      "Security analytics"
    ],
    benefits: [
      "Reduce attack surface by 60%",
      "Improve compliance posture",
      "Enhanced security visibility",
      "Better user experience"
    ],
    targetAudience: ["Enterprise organizations", "Remote work environments", "High-security facilities"],
    tags: ["Cybersecurity", "Zero Trust", "Identity Management", "Network Security"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 92,
    estimatedDelivery: "6-8 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // Cloud Services
  {
    id: "cloud-migration",
    title: "Cloud Migration & Optimization",
    description: "Seamless migration to cloud platforms with optimization strategies for cost, performance, and security.",
    category: "Cloud Services",
    subcategory: "Migration",
    price: 12000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Cloud readiness assessment",
      "Migration planning",
      "Data migration",
      "Application modernization",
      "Performance optimization",
      "Cost optimization"
    ],
    benefits: [
      "Reduce infrastructure costs by 40%",
      "Improve scalability and flexibility",
      "Enhanced disaster recovery",
      "Better security and compliance"
    ],
    targetAudience: ["Medium to large businesses", "Traditional enterprises", "Growing startups"],
    tags: ["Cloud", "Migration", "AWS", "Azure", "GCP", "Optimization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    aiScore: 89,
    rating: 4.7,
    reviewCount: 156,
    estimatedDelivery: "8-12 weeks",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // Data & Analytics
  {
<<<<<<< HEAD
    id: "quantum-machine-learning-platform",
    title: "Quantum Machine Learning Platform",
    description: "Advanced quantum computing platform for complex machine learning tasks",
    category: "Quantum Technology",
    price: 15000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum processors",
      "ML algorithm library",
      "Hybrid computing",
      "Real-time visualization"
    ],
    useCases: [
      "Drug discovery",
      "Financial modeling",
      "Climate research",
      "Cryptography"
    ],
    targetAudience: [
      "Research institutions",
      "Pharmaceutical companies",
      "Financial services",
      "Government agencies"
    ],
    tags: ["Quantum Computing", "Machine Learning", "Research", "Advanced Technology"],
=======
    id: "data-analytics-platform",
    title: "Advanced Data Analytics Platform",
    description: "Comprehensive data analytics solution with real-time dashboards, predictive modeling, and business intelligence tools.",
    category: "Data & Analytics",
    subcategory: "Analytics Platform",
    price: 6000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Data integration",
      "Real-time dashboards",
      "Predictive analytics",
      "Machine learning models",
      "Data visualization",
      "Automated reporting"
    ],
    benefits: [
      "Make data-driven decisions",
      "Identify business opportunities",
      "Improve operational efficiency",
      "Predict future trends"
    ],
    targetAudience: ["Retail", "Manufacturing", "Healthcare", "Financial services"],
    tags: ["Data Analytics", "Business Intelligence", "Predictive Analytics", "Dashboards"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    aiScore: 91,
    rating: 4.8,
    reviewCount: 134,
    estimatedDelivery: "6-8 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // Digital Transformation
  {
    id: "digital-transformation",
    title: "Digital Transformation Strategy",
    description: "End-to-end digital transformation consulting to modernize your business operations and technology infrastructure.",
    category: "Digital Transformation",
    subcategory: "Strategy Consulting",
    price: 15000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Digital maturity assessment",
      "Transformation roadmap",
      "Technology selection",
      "Change management",
      "Implementation support",
      "ROI measurement"
    ],
    benefits: [
      "Modernize business operations",
      "Improve customer experience",
      "Increase operational efficiency",
      "Gain competitive advantage"
    ],
    targetAudience: ["Traditional businesses", "Manufacturing", "Retail", "Service companies"],
    tags: ["Digital Transformation", "Strategy", "Consulting", "Process Optimization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T09:00:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 78,
    estimatedDelivery: "8-12 weeks",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

<<<<<<< HEAD
export const SERVICE_CATEGORIES = [
  "AI & Machine Learning",
  "Cybersecurity", 
  "Cloud & Infrastructure",
  "Data & Analytics",
  "Digital Transformation",
  "Web & Mobile Development",
  "IT Support & Consulting",
  "Blockchain & Web3",
  "Voice AI",
  "Quantum Security",
  "Content Creation",
  "Identity Management",
  "Sales Intelligence",
  "Incident Response",
  "Customer Analytics",
  "Supply Chain",
  "HR Technology",
  "Financial Security",
  "Storage Solutions",
  "Customer Experience",
  "Zero Trust Security",
  "NFT Platform",
  "DeFi Services",
  "Security Testing",
  "Process Automation"
];
=======
export const serviceCategories = [
  {
    id: "ai-services",
    name: "AI Services",
    description: "Artificial Intelligence and Machine Learning solutions",
    icon: "🤖",
    count: 3
=======
import { ProductListing } from "@/types/listings";

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "ai-services",
    name: "AI & Machine Learning",
    description: "Cutting-edge artificial intelligence and machine learning solutions",
    icon: "🤖",
    color: "from-purple-500 to-indigo-600"
  },
  {
    id: "it-services",
    name: "IT & Infrastructure",
    description: "Comprehensive IT support and infrastructure management",
    icon: "💻",
    color: "from-blue-500 to-cyan-600"
  },
  {
    id: "cloud-services",
    name: "Cloud & DevOps",
    description: "Cloud migration, management, and DevOps automation",
    icon: "☁️",
    color: "from-cyan-500 to-teal-600"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-63f3
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
<<<<<<< HEAD
    description: "Security solutions and compliance services",
    icon: "🔒",
    count: 2
  },
  {
    id: "cloud-services",
    name: "Cloud Services",
    description: "Cloud migration and optimization",
    icon: "☁️",
    count: 1
  },
  {
    id: "data-analytics",
    name: "Data & Analytics",
    description: "Business intelligence and analytics platforms",
    icon: "📊",
    count: 1
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    description: "Business modernization and strategy",
    icon: "🚀",
    count: 1
  }
];

export const serviceSubcategories = {
  "ai-services": ["Chatbot Development", "Content Generation", "Process Automation"],
  "cybersecurity": ["Security Audit", "Zero Trust", "Compliance"],
  "cloud-services": ["Migration", "Optimization", "Management"],
  "data-analytics": ["Analytics Platform", "Business Intelligence", "Predictive Analytics"],
  "digital-transformation": ["Strategy Consulting", "Process Optimization", "Technology Selection"]
};
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
=======
    description: "Advanced security solutions and threat protection",
    icon: "🔒",
    color: "from-red-500 to-pink-600"
  },
  {
    id: "data-services",
    name: "Data & Analytics",
    description: "Data engineering, analytics, and business intelligence",
    icon: "📊",
    color: "from-green-500 to-emerald-600"
  },
  {
    id: "web-development",
    name: "Web & Mobile Development",
    description: "Custom web and mobile application development",
    icon: "🌐",
    color: "from-orange-500 to-amber-600"
  },
  {
    id: "business-solutions",
    name: "Business Solutions",
    description: "Digital transformation and business process optimization",
    icon: "💼",
    color: "from-indigo-500 to-purple-600"
  },
  {
    id: "consulting",
    name: "IT Consulting",
    description: "Strategic technology consulting and advisory services",
    icon: "🎯",
    color: "from-teal-500 to-green-600"
  }
];

=======
import { ProductListing } from "@/types/listings";

>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
export const COMPREHENSIVE_SERVICES: ProductListing[] = [
=======
  supportLevel: 'basic' | 'premium' | 'enterprise';
}

export const COMPREHENSIVE_SERVICES: ComprehensiveService[] = [
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
  // AI & Machine Learning Services
  {
    id: "ai-chatbot-development",
    title: "Custom AI Chatbot Development",
<<<<<<< HEAD
<<<<<<< HEAD
    description: "Intelligent chatbot solutions powered by GPT-4, Claude, or custom models. Includes natural language processing, multi-language support, and seamless integration with your existing systems. Perfect for customer service, sales, and internal operations.",
    category: "AI & Machine Learning",
    subcategory: "Chatbots",
    price: 2999,
    currency: "$",
    tags: ["AI Chatbot", "GPT-4", "Customer Service", "NLP", "Integration"],
=======
    description: "Intelligent chatbot solutions powered by GPT-4, Claude, or custom models. Includes training on your business data, multi-language support, and seamless integration with your existing systems.",
    category: "AI Development",
    subcategory: "Chatbots & Conversational AI",
    price: 2500,
    currency: "$",
    tags: ["AI Chatbot", "GPT-4", "Customer Service", "Automation"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
=======
import { ProductListing } from "@/types/listings";

// Comprehensive Micro SAAS Services & Solutions
=======
import { ProductListing } from "@/types/listings";

// Comprehensive Micro SAAS Services and Solutions
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e931
export const COMPREHENSIVE_SERVICES: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-chatbot-enterprise",
    title: "Enterprise AI Chatbot Platform",
<<<<<<< HEAD
    description: "Custom AI chatbot solution with enterprise-grade security, multi-language support, and seamless CRM integration. Includes analytics dashboard and 24/7 support.",
    category: "AI Services",
    subcategory: "Chatbots & Virtual Assistants",
    price: 2999,
    currency: "$",
    tags: ["AI Chatbot", "Enterprise", "CRM Integration", "Multi-language"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8a54
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
<<<<<<< HEAD
<<<<<<< HEAD
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
=======
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
=======
    description: "Custom AI chatbot solution for enterprise customer service, sales, and support. Features multi-language support, sentiment analysis, and seamless CRM integration. Includes training data preparation and ongoing optimization.",
    category: "AI & Machine Learning",
    subcategory: "Chatbots & Conversational AI",
    price: 2999,
    currency: "$",
    tags: ["AI Chatbot", "Customer Service", "CRM Integration", "Multi-language"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e931
    },
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
<<<<<<< HEAD
<<<<<<< HEAD
    reviewCount: 47,
    aiScore: 95,
    location: "Global",
    availability: "2-3 weeks"
  },
  {
    id: "ai-content-generation",
    title: "AI Content Generation Suite",
    description: "Complete AI-powered content creation platform for blogs, social media, marketing materials, and technical documentation. Features multiple AI models, content optimization, SEO integration, and multi-language support. Includes API access and white-label options.",
    category: "AI & Machine Learning",
    subcategory: "Content Creation",
    price: 1499,
    currency: "$",
    tags: ["Content Generation", "AI Writing", "SEO", "Marketing", "Multi-language"],
=======
=======
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8a54
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e931
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 96
  },
  {
<<<<<<< HEAD
<<<<<<< HEAD
    id: "ai-content-generation",
    title: "AI Content Generation & Marketing Suite",
    description: "Complete content creation platform using advanced AI models. Generate blog posts, social media content, product descriptions, and marketing copy. Includes SEO optimization and brand voice training.",
=======
    id: "ai-content-generation-pro",
    title: "AI Content Generation Suite Pro",
    description: "Advanced AI-powered content creation platform for blogs, social media, marketing copy, and technical documentation. Includes SEO optimization and brand voice training.",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8a54
    category: "AI Services",
    subcategory: "Content Creation",
    price: 899,
    currency: "$",
<<<<<<< HEAD
    tags: ["Content Generation", "Marketing", "SEO", "Copywriting"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
=======
    tags: ["Content Generation", "SEO", "Marketing", "Brand Voice"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8a54
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
<<<<<<< HEAD
<<<<<<< HEAD
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8a54
=======
    id: "ai-content-generation-suite",
    title: "AI Content Generation Suite Pro",
    description: "Complete AI-powered content creation platform for blogs, social media, marketing copy, and technical documentation. Features SEO optimization, brand voice consistency, and plagiarism detection. Includes 50,000 words/month and API access.",
    category: "AI & Machine Learning",
    subcategory: "Content Creation",
    price: 199,
    currency: "$",
    tags: ["Content Generation", "SEO", "Marketing", "Blog Writing"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e931
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    rating: 4.8,
<<<<<<< HEAD
<<<<<<< HEAD
    reviewCount: 89,
<<<<<<< HEAD
    aiScore: 92,
    location: "Global",
    availability: "Immediate"
  },
  {
    id: "machine-learning-models",
    title: "Custom Machine Learning Model Development",
    description: "End-to-end development of custom ML models for predictive analytics, image recognition, natural language processing, and more. Includes data preparation, model training, deployment, and ongoing monitoring. Perfect for businesses looking to leverage their data for competitive advantage.",
    category: "AI & Machine Learning",
    subcategory: "Model Development",
    price: 7999,
    currency: "$",
    tags: ["Machine Learning", "Custom Models", "Predictive Analytics", "Data Science", "Deployment"],
=======
=======
    reviewCount: 234,
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8a54
=======
    reviewCount: 89,
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e931
    location: "Global",
    availability: "Immediate",
    aiScore: 94
  },
  {
<<<<<<< HEAD
<<<<<<< HEAD
    id: "ai-data-analytics",
    title: "AI-Powered Business Intelligence Platform",
    description: "Advanced analytics platform with predictive modeling, automated reporting, and real-time dashboards. Includes data visualization, trend analysis, and actionable insights for business growth.",
    category: "AI Services",
    subcategory: "Data Analytics",
    price: 1800,
    currency: "$",
    tags: ["Business Intelligence", "Predictive Analytics", "Data Visualization", "Reporting"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
=======
    id: "ai-data-analytics-platform",
    title: "AI-Powered Business Intelligence Platform",
    description: "Comprehensive data analytics solution with predictive insights, automated reporting, and real-time dashboards. Integrates with major business systems and databases.",
    category: "AI Services",
    subcategory: "Data Analytics",
    price: 1999,
    currency: "$",
    tags: ["Business Intelligence", "Predictive Analytics", "Real-time", "Integration"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8a54
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
<<<<<<< HEAD
<<<<<<< HEAD
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T09:15:00.000Z",
    rating: 4.9,
    reviewCount: 34,
    aiScore: 96,
    location: "Global",
    availability: "4-6 weeks"
  },
  {
    id: "ai-automation-workflows",
    title: "AI-Powered Workflow Automation",
    description: "Intelligent automation solutions that streamline business processes using AI. Automate repetitive tasks, document processing, data entry, and decision-making workflows. Includes process analysis, implementation, and optimization services.",
    category: "AI & Machine Learning",
    subcategory: "Automation",
    price: 4499,
    currency: "$",
    tags: ["Workflow Automation", "Process Optimization", "AI Integration", "Business Efficiency", "RPA"],
=======
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8a54
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:15:00.000Z",
    rating: 4.9,
<<<<<<< HEAD
    reviewCount: 234,
    featured: true,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 97
  },
  {
    id: "ai-automation-workflow",
    title: "AI Workflow Automation Platform",
    description: "Intelligent process automation using AI to streamline business operations. Automate repetitive tasks, document processing, customer interactions, and decision-making workflows.",
    category: "AI Services",
    subcategory: "Process Automation",
    price: 3200,
    currency: "$",
    tags: ["Workflow Automation", "Process Optimization", "RPA", "Business Efficiency"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
<<<<<<< HEAD
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T11:45:00.000Z",
    rating: 4.7,
    reviewCount: 56,
    aiScore: 89,
    location: "Global",
    availability: "3-4 weeks"
  },

  // IT & Infrastructure Services
  {
    id: "it-infrastructure-audit",
    title: "IT Infrastructure Assessment & Audit",
    description: "Comprehensive evaluation of your current IT infrastructure, identifying bottlenecks, security vulnerabilities, and optimization opportunities. Includes detailed reporting, recommendations, and implementation roadmap. Essential for businesses planning digital transformation.",
    category: "IT & Infrastructure",
    subcategory: "Assessment",
    price: 2499,
    currency: "$",
    tags: ["Infrastructure Audit", "IT Assessment", "Security Review", "Optimization", "Digital Transformation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T08:00:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    aiScore: 87,
    location: "Global",
    availability: "1-2 weeks"
  },
  {
    id: "network-security-setup",
    title: "Network Security Implementation",
    description: "Complete network security setup including firewalls, VPNs, intrusion detection systems, and security monitoring. Features advanced threat protection, 24/7 monitoring, and compliance with industry standards. Includes staff training and documentation.",
    category: "IT & Infrastructure",
    subcategory: "Security",
    price: 5999,
    currency: "$",
    tags: ["Network Security", "Firewall", "VPN", "Threat Protection", "Compliance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T13:20:00.000Z",
    rating: 4.9,
    reviewCount: 42,
    aiScore: 91,
    location: "Global",
    availability: "2-3 weeks"
  },
  {
    id: "hardware-procurement",
    title: "IT Hardware Procurement & Setup",
    description: "End-to-end hardware procurement service including needs assessment, vendor selection, purchasing, installation, and configuration. Covers workstations, servers, networking equipment, and peripherals. Includes warranty management and support setup.",
    category: "IT & Infrastructure",
    subcategory: "Hardware",
    price: 1999,
    currency: "$",
    tags: ["Hardware Procurement", "Vendor Management", "Installation", "Configuration", "Support"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T15:10:00.000Z",
    rating: 4.7,
    reviewCount: 38,
    aiScore: 84,
    location: "Global",
    availability: "1-3 weeks"
=======
    description: "Build intelligent chatbots powered by GPT-4, Claude, or custom models for customer service, sales, and support automation.",
    category: "AI & Machine Learning",
    subcategory: "Chatbots & Conversational AI",
    price: 2500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Multi-platform integration (Web, WhatsApp, Telegram, Discord)",
      "Custom training on your business data",
      "Multi-language support",
      "Analytics dashboard",
      "API integration capabilities",
      "24/7 monitoring and maintenance"
    ],
    benefits: [
      "Reduce customer service costs by 60%",
      "24/7 customer support availability",
      "Scalable customer interactions",
      "Data-driven insights and analytics",
      "Improved customer satisfaction scores"
    ],
    useCases: [
      "E-commerce customer support",
      "Lead qualification and sales",
      "HR and recruitment",
      "Technical support automation",
      "Booking and appointment scheduling"
    ],
    marketPrice: "$2,000 - $8,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["AI Chatbot", "GPT-4", "Customer Service", "Automation", "Multi-platform"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 87,
    estimatedDelivery: "2-4 weeks",
    supportLevel: "premium"
  },
  {
    id: "ai-content-generation",
    title: "AI-Powered Content Generation Suite",
    description: "Automated content creation for blogs, social media, marketing materials, and technical documentation using advanced AI models.",
    category: "AI & Machine Learning",
    subcategory: "Content Generation",
    price: 1500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Blog post generation with SEO optimization",
      "Social media content calendar",
      "Email marketing campaigns",
      "Technical documentation",
      "Multilingual content creation",
      "Brand voice customization"
    ],
    benefits: [
      "10x faster content creation",
      "Consistent brand messaging",
      "SEO-optimized content",
      "Cost-effective content marketing",
      "Scalable content operations"
    ],
    useCases: [
      "Marketing agencies",
      "E-commerce businesses",
      "SaaS companies",
      "Educational platforms",
      "News and media outlets"
    ],
    marketPrice: "$1,200 - $3,500/month",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Content Generation", "AI Writing", "SEO", "Marketing", "Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    aiScore: 92,
    rating: 4.8,
    reviewCount: 156,
    estimatedDelivery: "1-2 weeks",
    supportLevel: "premium"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
  },

  // Cloud & DevOps Services
  {
<<<<<<< HEAD
    id: "cloud-migration-strategy",
    title: "Cloud Migration Strategy & Implementation",
    description: "Comprehensive cloud migration service covering strategy development, infrastructure design, data migration, and application deployment. Supports AWS, Azure, and Google Cloud. Includes cost optimization, security implementation, and performance monitoring.",
    category: "Cloud & DevOps",
    subcategory: "Migration",
    price: 8999,
    currency: "$",
    tags: ["Cloud Migration", "AWS", "Azure", "GCP", "Cost Optimization"],
=======
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T11:45:00.000Z",
    rating: 4.7,
    reviewCount: 67,
    location: "Global",
    availability: "4-5 Weeks",
    aiScore: 93
=======
    id: "aws-cost-optimization",
    title: "AWS Cost Optimization & Management",
    description: "Comprehensive AWS cost analysis, optimization strategies, and ongoing monitoring to reduce cloud spending by 30-50%.",
    category: "Cloud & DevOps",
    subcategory: "Cost Optimization",
    price: 3000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Detailed cost analysis and reporting",
      "Reserved instance optimization",
      "Spot instance strategies",
      "Auto-scaling configuration",
      "Cost alerting and monitoring",
      "Monthly optimization reports"
    ],
    benefits: [
      "Reduce AWS costs by 30-50%",
      "Improved resource utilization",
      "Predictable monthly spending",
      "Performance optimization",
      "Compliance and governance"
    ],
    useCases: [
      "Startups and scale-ups",
      "Enterprise organizations",
      "E-commerce platforms",
      "SaaS applications",
      "Media and gaming companies"
    ],
    marketPrice: "$2,500 - $8,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["AWS", "Cost Optimization", "Cloud Management", "DevOps", "FinOps"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T09:15:00.000Z",
    aiScore: 89,
    rating: 4.7,
    reviewCount: 203,
    estimatedDelivery: "3-5 weeks",
    supportLevel: "enterprise"
  },
  {
    id: "kubernetes-cluster-management",
    title: "Kubernetes Cluster Management & Optimization",
    description: "Professional Kubernetes cluster setup, management, monitoring, and optimization for production environments.",
    category: "Cloud & DevOps",
    subcategory: "Container Orchestration",
    price: 4500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-cluster management",
      "Auto-scaling configuration",
      "Monitoring and alerting setup",
      "Security hardening",
      "Backup and disaster recovery",
      "Performance optimization"
    ],
    benefits: [
      "99.9% uptime guarantee",
      "Automated scaling and management",
      "Enhanced security posture",
      "Reduced operational overhead",
      "Cost-effective resource utilization"
    ],
    useCases: [
      "Microservices architectures",
      "Cloud-native applications",
      "High-traffic web services",
      "Data processing pipelines",
      "IoT platforms"
    ],
    marketPrice: "$3,500 - $12,000/month",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Kubernetes", "DevOps", "Container Management", "Cloud Native", "Microservices"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T11:45:00.000Z",
    aiScore: 91,
    rating: 4.8,
    reviewCount: 134,
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise"
  },

  // Cybersecurity Services
  {
    id: "penetration-testing",
    title: "Comprehensive Penetration Testing",
    description: "Full-stack security assessment including web applications, mobile apps, APIs, and infrastructure penetration testing.",
    category: "Cybersecurity",
    subcategory: "Security Testing",
    price: 5000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Web application security testing",
      "Mobile app security assessment",
      "API security testing",
      "Infrastructure penetration testing",
      "Social engineering assessment",
      "Detailed remediation report"
    ],
    benefits: [
      "Identify security vulnerabilities",
      "Meet compliance requirements",
      "Protect customer data",
      "Reduce security risks",
      "Build customer trust"
    ],
    useCases: [
      "Financial services",
      "Healthcare organizations",
      "E-commerce platforms",
      "SaaS applications",
      "Government agencies"
    ],
    marketPrice: "$4,000 - $15,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Penetration Testing", "Security Assessment", "Compliance", "Vulnerability", "Cybersecurity"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T16:20:00.000Z",
    aiScore: 94,
    rating: 4.9,
    reviewCount: 178,
    estimatedDelivery: "2-3 weeks",
    supportLevel: "enterprise"
  },
  {
    id: "security-monitoring",
    title: "24/7 Security Monitoring & Incident Response",
    description: "Round-the-clock security monitoring, threat detection, and rapid incident response for your digital assets.",
    category: "Cybersecurity",
    subcategory: "Monitoring & Response",
    price: 2500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time threat detection",
      "SIEM implementation and management",
      "Incident response automation",
      "Security event correlation",
      "Threat intelligence feeds",
      "Monthly security reports"
    ],
    benefits: [
      "Proactive threat detection",
      "Reduced incident response time",
      "Compliance with security standards",
      "Peace of mind for business owners",
      "Cost-effective security operations"
    ],
    useCases: [
      "Critical infrastructure",
      "Financial institutions",
      "Healthcare providers",
      "E-commerce businesses",
      "Technology companies"
    ],
    marketPrice: "$2,000 - $8,000/month",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Security Monitoring", "SIEM", "Incident Response", "Threat Detection", "24/7 Support"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T13:10:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 245,
    estimatedDelivery: "1-2 weeks",
    supportLevel: "premium"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
=======
    id: "ai-data-analytics-platform",
    title: "AI-Powered Business Analytics Platform",
    description: "Advanced analytics solution with predictive modeling, automated insights, and interactive dashboards. Features real-time data processing, anomaly detection, and automated reporting. Integrates with major databases and cloud platforms.",
    category: "AI & Machine Learning",
    subcategory: "Data Analytics",
    price: 1499,
    currency: "$",
    tags: ["Business Intelligence", "Predictive Analytics", "Dashboard", "Real-time"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:15:00.000Z",
    rating: 4.7,
    reviewCount: 67,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 92
  },
  {
    id: "ai-image-recognition-api",
    title: "Custom Image Recognition API",
    description: "Tailored computer vision API for industry-specific image analysis. Supports object detection, facial recognition, quality inspection, and document processing. Includes model training on your data and 99.5% accuracy guarantee.",
    category: "AI & Machine Learning",
    subcategory: "Computer Vision",
    price: 3999,
    currency: "$",
    tags: ["Computer Vision", "Object Detection", "Custom Training", "API"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1624355834900-99cd2071585b?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T11:45:00.000Z",
    rating: 4.9,
    reviewCount: 43,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 95
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e931
  },

  // Cloud & Infrastructure Services
  {
<<<<<<< HEAD
<<<<<<< HEAD
    id: "cloud-migration-consulting",
    title: "Cloud Migration & Optimization Consulting",
    description: "Expert guidance for migrating your infrastructure to AWS, Azure, or Google Cloud. Includes cost optimization, security implementation, and performance tuning. 24/7 monitoring included.",
    category: "Cloud Services",
    subcategory: "Migration & Consulting",
    price: 4500,
    currency: "$",
    tags: ["Cloud Migration", "AWS", "Azure", "Cost Optimization"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
<<<<<<< HEAD
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-12T10:30:00.000Z",
    rating: 4.9,
    reviewCount: 73,
    aiScore: 93,
    location: "Global",
    availability: "6-8 weeks"
=======
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T08:00:00.000Z",
    rating: 4.8,
    reviewCount: 178,
    location: "Global",
    availability: "2-4 Weeks",
    aiScore: 91
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
  },
  {
    id: "devops-automation",
    title: "DevOps Automation & CI/CD Pipeline",
<<<<<<< HEAD
    description: "Complete DevOps automation setup including continuous integration, continuous deployment, automated testing, and infrastructure as code. Features Docker containerization, Kubernetes orchestration, and monitoring tools. Includes team training and best practices implementation.",
    category: "Cloud & DevOps",
    subcategory: "Automation",
    price: 6499,
=======
    description: "Complete DevOps automation setup with GitHub Actions, Jenkins, or GitLab CI. Includes containerization with Docker, Kubernetes orchestration, and automated testing frameworks.",
    category: "Cloud Services",
    subcategory: "DevOps",
    price: 2800,
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
    currency: "$",
    tags: ["DevOps", "CI/CD", "Docker", "Kubernetes", "Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
<<<<<<< HEAD
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T16:45:00.000Z",
    rating: 4.8,
    reviewCount: 51,
    aiScore: 90,
    location: "Global",
    availability: "4-5 weeks"
  },
  {
    id: "cloud-cost-optimization",
    title: "Cloud Cost Optimization & Management",
    description: "Comprehensive cloud cost analysis and optimization service. Identifies cost-saving opportunities, implements resource scheduling, and provides ongoing monitoring and reporting. Includes rightsizing recommendations, reserved instance planning, and cost allocation strategies.",
    category: "Cloud & DevOps",
    subcategory: "Cost Management",
    price: 3499,
    currency: "$",
    tags: ["Cost Optimization", "Resource Management", "Cloud Monitoring", "Cost Analysis", "Savings"],
=======
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T13:20:00.000Z",
    rating: 4.9,
    reviewCount: 145,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 95
  },
  {
    id: "serverless-architecture",
    title: "Serverless Architecture Design & Implementation",
    description: "Modern serverless solutions using AWS Lambda, Azure Functions, or Google Cloud Functions. Includes API Gateway setup, database integration, and cost optimization strategies.",
    category: "Cloud Services",
    subcategory: "Serverless",
    price: 2200,
    currency: "$",
    tags: ["Serverless", "AWS Lambda", "API Development", "Cost Optimization"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
<<<<<<< HEAD
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T12:15:00.000Z",
    rating: 4.7,
    reviewCount: 29,
    aiScore: 88,
    location: "Global",
    availability: "2-3 weeks"
=======
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T16:10:00.000Z",
    rating: 4.7,
    reviewCount: 92,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 89
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
  },

  // Cybersecurity Services
  {
<<<<<<< HEAD
    id: "security-audit-assessment",
    title: "Comprehensive Security Audit & Assessment",
    description: "In-depth security evaluation including penetration testing, vulnerability assessment, compliance review, and risk analysis. Covers network, application, and physical security. Includes detailed reporting, remediation guidance, and ongoing security monitoring setup.",
    category: "Cybersecurity",
    subcategory: "Audit",
    price: 7499,
    currency: "$",
    tags: ["Security Audit", "Penetration Testing", "Vulnerability Assessment", "Compliance", "Risk Analysis"],
=======
    id: "cybersecurity-audit",
    title: "Comprehensive Cybersecurity Audit & Assessment",
    description: "Full security assessment including penetration testing, vulnerability scanning, compliance review (GDPR, HIPAA, SOC2), and security policy development. Includes detailed remediation plan.",
    category: "Cybersecurity",
    subcategory: "Audit & Assessment",
    price: 3800,
    currency: "$",
    tags: ["Security Audit", "Penetration Testing", "Compliance", "Vulnerability Assessment"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
<<<<<<< HEAD
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T09:00:00.000Z",
    rating: 4.9,
    reviewCount: 61,
    aiScore: 94,
    location: "Global",
    availability: "3-4 weeks"
  },
  {
    id: "incident-response-planning",
    title: "Incident Response Planning & Training",
    description: "Complete incident response program development including plan creation, team training, tabletop exercises, and ongoing maintenance. Features automated threat detection, response playbooks, and communication protocols. Essential for business continuity and compliance.",
    category: "Cybersecurity",
    subcategory: "Incident Response",
    price: 5499,
    currency: "$",
    tags: ["Incident Response", "Security Training", "Threat Detection", "Business Continuity", "Compliance"],
=======
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-12T12:00:00.000Z",
    rating: 4.9,
    reviewCount: 203,
    featured: true,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 96
  },
  {
    id: "zero-trust-security",
    title: "Zero Trust Security Implementation",
    description: "Implement modern zero trust security architecture with multi-factor authentication, identity management, network segmentation, and continuous monitoring. Includes staff training and documentation.",
    category: "Cybersecurity",
    subcategory: "Zero Trust",
    price: 5200,
    currency: "$",
    tags: ["Zero Trust", "Identity Management", "MFA", "Network Security"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
<<<<<<< HEAD
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T14:20:00.000Z",
    rating: 4.8,
    reviewCount: 35,
    aiScore: 89,
    location: "Global",
    availability: "4-5 weeks"
  },
  {
    id: "compliance-framework",
    title: "Compliance Framework Implementation",
    description: "Implementation of industry-standard compliance frameworks including SOC 2, ISO 27001, GDPR, HIPAA, and PCI DSS. Includes gap analysis, policy development, control implementation, and audit preparation. Ensures regulatory compliance and builds customer trust.",
    category: "Cybersecurity",
    subcategory: "Compliance",
    price: 9999,
    currency: "$",
    tags: ["Compliance", "SOC 2", "ISO 27001", "GDPR", "HIPAA", "PCI DSS"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T11:30:00.000Z",
    rating: 4.9,
    reviewCount: 28,
    aiScore: 92,
    location: "Global",
    availability: "8-12 weeks"
=======
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T10:30:00.000Z",
=======
    id: "cloud-migration-consulting",
    title: "Cloud Migration & Optimization Consulting",
    description: "End-to-end cloud migration services for AWS, Azure, and Google Cloud. Includes architecture design, cost optimization, security implementation, and performance tuning. 24/7 monitoring and support included.",
    category: "Cloud & Infrastructure",
    subcategory: "Migration & Consulting",
    price: 5999,
    currency: "$",
    tags: ["Cloud Migration", "AWS", "Azure", "Cost Optimization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T13:20:00.000Z",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e931
    rating: 4.8,
    reviewCount: 78,
    location: "Global",
    availability: "4-6 Weeks",
<<<<<<< HEAD
    aiScore: 94
  },
  {
    id: "incident-response",
    title: "24/7 Security Incident Response Service",
    description: "Round-the-clock security monitoring and incident response. Includes threat detection, rapid response protocols, forensic analysis, and recovery assistance. Available globally with local response teams.",
    category: "Cybersecurity",
    subcategory: "Incident Response",
    price: 1500,
    currency: "$",
    tags: ["Incident Response", "24/7 Monitoring", "Threat Detection", "Forensics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T14:15:00.000Z",
    rating: 4.9,
    reviewCount: 156,
    location: "Global",
    availability: "Immediate",
    aiScore: 97
=======
    id: "data-pipeline-engineering",
    title: "Data Pipeline Engineering & ETL Development",
    description: "Build robust, scalable data pipelines for real-time data processing, analytics, and business intelligence.",
    category: "Data & Analytics",
    subcategory: "Data Engineering",
    price: 6000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Real-time data streaming pipelines",
      "ETL/ELT process development",
      "Data warehouse optimization",
      "Data quality monitoring",
      "Performance optimization",
      "Documentation and training"
    ],
    benefits: [
      "Real-time business insights",
      "Improved data quality",
      "Faster decision-making",
      "Scalable data infrastructure",
      "Reduced data processing costs"
    ],
    useCases: [
      "E-commerce analytics",
      "Financial reporting",
      "Customer behavior analysis",
      "IoT data processing",
      "Marketing attribution"
    ],
    marketPrice: "$5,000 - $20,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Data Engineering", "ETL", "Data Pipelines", "Real-time", "Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T10:30:00.000Z",
    aiScore: 90,
    rating: 4.7,
    reviewCount: 167,
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise"
  },
  {
    id: "business-intelligence-dashboard",
    title: "Interactive Business Intelligence Dashboards",
    description: "Custom BI dashboards and reporting solutions to visualize key business metrics and drive data-driven decisions.",
    category: "Data & Analytics",
    subcategory: "Business Intelligence",
    price: 3500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Custom dashboard design",
      "Real-time data integration",
      "Interactive visualizations",
      "Automated reporting",
      "Mobile-responsive design",
      "User access management"
    ],
    benefits: [
      "Data-driven decision making",
      "Improved operational efficiency",
      "Real-time business insights",
      "Reduced reporting time",
      "Better stakeholder communication"
    ],
    useCases: [
      "Executive reporting",
      "Sales performance tracking",
      "Marketing campaign analysis",
      "Financial reporting",
      "Operational metrics"
    ],
    marketPrice: "$3,000 - $12,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Business Intelligence", "Dashboards", "Data Visualization", "Reporting", "Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T14:15:00.000Z",
    aiScore: 88,
    rating: 4.6,
    reviewCount: 98,
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
  },

  // Web & Mobile Development
  {
    id: "progressive-web-app",
    title: "Progressive Web App (PWA) Development",
<<<<<<< HEAD
    description: "Modern PWA development with offline functionality, push notifications, and app-like experience. Includes responsive design, performance optimization, and cross-platform compatibility.",
    category: "Web Development",
    subcategory: "PWA",
    price: 2800,
    currency: "$",
    tags: ["PWA", "Offline First", "Push Notifications", "Responsive Design"],
=======
    reviewCount: 189,
    featured: true,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 95
  },

  // IT Infrastructure & Cloud Services
  {
    id: "cloud-migration-expert",
    title: "Cloud Migration & Optimization Expert",
    description: "End-to-end cloud migration services for AWS, Azure, and Google Cloud. Includes cost optimization, security implementation, and performance tuning.",
    category: "IT Services",
    subcategory: "Cloud Solutions",
    price: 4999,
    currency: "$",
    tags: ["Cloud Migration", "AWS", "Azure", "Cost Optimization"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8a54
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
<<<<<<< HEAD
    images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T09:30:00.000Z",
    rating: 4.8,
    reviewCount: 134,
=======
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T11:45:00.000Z",
    rating: 4.8,
    reviewCount: 127,
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8a54
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 92
  },
  {
<<<<<<< HEAD
    id: "mobile-app-development",
    title: "Cross-Platform Mobile App Development",
    description: "Native-quality mobile apps for iOS and Android using React Native or Flutter. Includes backend API development, database design, and app store submission support.",
    category: "Mobile Development",
    subcategory: "Cross-Platform",
    price: 4200,
    currency: "$",
    tags: ["React Native", "Flutter", "Mobile Apps", "iOS", "Android"],
=======
    id: "cybersecurity-audit-complete",
    title: "Complete Cybersecurity Audit & Implementation",
    description: "Comprehensive security assessment including penetration testing, vulnerability scanning, compliance review, and security infrastructure implementation.",
    category: "IT Services",
    subcategory: "Cybersecurity",
    price: 3999,
    currency: "$",
    tags: ["Cybersecurity", "Penetration Testing", "Compliance", "Security Implementation"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8a54
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
<<<<<<< HEAD
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T11:45:00.000Z",
    rating: 4.9,
    reviewCount: 189,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 95
  },
  {
    id: "ecommerce-platform",
    title: "Custom E-commerce Platform Development",
    description: "Full-featured e-commerce solution with payment processing, inventory management, order tracking, and customer analytics. Includes mobile optimization and multi-language support.",
    category: "Web Development",
    subcategory: "E-commerce",
    price: 5800,
    currency: "$",
    tags: ["E-commerce", "Payment Processing", "Inventory Management", "Customer Analytics"],
=======
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T13:20:00.000Z",
    rating: 4.9,
    reviewCount: 98,
=======
    aiScore: 88
  },
  {
    id: "devops-automation-platform",
    title: "DevOps Automation Platform",
    description: "Complete CI/CD automation solution with infrastructure as code, automated testing, and deployment pipelines. Features GitOps workflows, Kubernetes management, and comprehensive monitoring. Reduces deployment time by 80%.",
    category: "Cloud & Infrastructure",
    subcategory: "DevOps",
    price: 2499,
    currency: "$",
    tags: ["CI/CD", "Kubernetes", "Automation", "GitOps"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T15:30:00.000Z",
    rating: 4.7,
    reviewCount: 54,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 90
  },
  {
    id: "serverless-architecture-design",
    title: "Serverless Architecture Design & Implementation",
    description: "Design and implement scalable serverless solutions using AWS Lambda, Azure Functions, and Google Cloud Functions. Includes cost optimization, performance monitoring, and auto-scaling configuration.",
    category: "Cloud & Infrastructure",
    subcategory: "Serverless",
    price: 3499,
    currency: "$",
    tags: ["Serverless", "AWS Lambda", "Auto-scaling", "Cost Optimization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T10:15:00.000Z",
    rating: 4.6,
    reviewCount: 32,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 87
  },

  // Cybersecurity Services
  {
    id: "cybersecurity-audit-complete",
    title: "Comprehensive Cybersecurity Audit & Assessment",
    description: "Full security assessment including penetration testing, vulnerability scanning, compliance review, and security policy development. Covers GDPR, HIPAA, SOC2, and industry-specific regulations. Includes remediation roadmap.",
    category: "Cybersecurity",
    subcategory: "Audit & Assessment",
    price: 7999,
    currency: "$",
    tags: ["Security Audit", "Penetration Testing", "Compliance", "GDPR"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T16:45:00.000Z",
    rating: 4.9,
    reviewCount: 91,
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e931
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 93
  },
  {
<<<<<<< HEAD
    id: "devops-automation-suite",
    title: "DevOps Automation & CI/CD Suite",
    description: "Complete DevOps automation solution with CI/CD pipelines, infrastructure as code, monitoring, and automated testing. Supports all major cloud platforms.",
    category: "IT Services",
    subcategory: "DevOps",
    price: 3499,
    currency: "$",
    tags: ["DevOps", "CI/CD", "Automation", "Infrastructure as Code"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8a54
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
<<<<<<< HEAD
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T15:20:00.000Z",
    rating: 4.8,
    reviewCount: 167,
    location: "Global",
    availability: "8-10 Weeks",
    aiScore: 93
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
=======
    id: "zero-trust-security-implementation",
    title: "Zero Trust Security Architecture Implementation",
    description: "Implement modern zero trust security model with identity verification, micro-segmentation, and continuous monitoring. Includes multi-factor authentication, privileged access management, and security awareness training.",
    category: "Cybersecurity",
    subcategory: "Zero Trust",
    price: 12999,
    currency: "$",
    tags: ["Zero Trust", "Identity Management", "Micro-segmentation", "MFA"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-25T12:00:00.000Z",
    rating: 4.8,
    reviewCount: 45,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 89
  },
  {
    id: "incident-response-planning",
    title: "Incident Response Planning & Training",
    description: "Develop comprehensive incident response plans and conduct tabletop exercises. Includes threat hunting, forensics capabilities, and 24/7 incident response team setup. Customized for your industry and compliance requirements.",
    category: "Cybersecurity",
    subcategory: "Incident Response",
    price: 5499,
    currency: "$",
    tags: ["Incident Response", "Threat Hunting", "Forensics", "Training"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T14:30:00.000Z",
    rating: 4.7,
    reviewCount: 38,
    location: "Global",
    availability: "4-5 Weeks",
    aiScore: 86
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e931
  },

  // Data & Analytics Services
  {
    id: "data-warehouse-design",
<<<<<<< HEAD
    title: "Data Warehouse Design & Implementation",
<<<<<<< HEAD
    description: "End-to-end data warehouse solution including architecture design, ETL pipeline development, data modeling, and analytics dashboard creation. Features real-time data processing, advanced analytics, and business intelligence tools. Perfect for data-driven decision making.",
    category: "Data & Analytics",
    subcategory: "Data Warehouse",
    price: 12999,
    currency: "$",
    tags: ["Data Warehouse", "ETL", "Data Modeling", "Analytics", "Business Intelligence"],
=======
    description: "Enterprise data warehouse design using modern cloud solutions like Snowflake, BigQuery, or Redshift. Includes ETL pipeline development, data modeling, and business intelligence integration.",
    category: "Data Services",
    subcategory: "Data Warehousing",
    price: 6500,
    currency: "$",
    tags: ["Data Warehouse", "ETL", "Snowflake", "BigQuery", "Business Intelligence"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
<<<<<<< HEAD
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T13:45:00.000Z",
    rating: 4.9,
    reviewCount: 44,
    aiScore: 95,
    location: "Global",
    availability: "8-10 weeks"
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics & Machine Learning",
    description: "Advanced predictive analytics solutions using machine learning algorithms for forecasting, trend analysis, and pattern recognition. Includes data preparation, model development, validation, and deployment. Applications in sales forecasting, risk assessment, and operational optimization.",
    category: "Data & Analytics",
    subcategory: "Predictive Analytics",
    price: 8999,
    currency: "$",
    tags: ["Predictive Analytics", "Machine Learning", "Forecasting", "Risk Assessment", "Pattern Recognition"],
=======
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T13:00:00.000Z",
    rating: 4.9,
    reviewCount: 98,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 96
  },
  {
    id: "real-time-analytics",
    title: "Real-Time Analytics & Streaming Platform",
    description: "Real-time data processing and analytics using Apache Kafka, Apache Flink, or AWS Kinesis. Includes dashboard development, alerting systems, and performance optimization.",
    category: "Data Services",
    subcategory: "Real-Time Analytics",
    price: 4200,
    currency: "$",
    tags: ["Real-Time Analytics", "Apache Kafka", "Streaming", "Dashboard", "Alerting"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
<<<<<<< HEAD
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T15:30:00.000Z",
    rating: 4.8,
    reviewCount: 52,
    aiScore: 93,
    location: "Global",
    availability: "6-8 weeks"
  },
  {
    id: "data-visualization",
    title: "Interactive Data Visualization & Dashboards",
    description: "Custom data visualization solutions including interactive dashboards, charts, and reports. Features real-time data updates, drill-down capabilities, and mobile-responsive design. Integrates with various data sources and provides actionable insights for stakeholders.",
    category: "Data & Analytics",
    subcategory: "Visualization",
    price: 3999,
    currency: "$",
    tags: ["Data Visualization", "Interactive Dashboards", "Real-time", "Mobile-responsive", "Insights"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-03T10:15:00.000Z",
    rating: 4.7,
    reviewCount: 38,
    aiScore: 87,
    location: "Global",
    availability: "3-4 weeks"
  },

  // Web & Mobile Development Services
  {
    id: "custom-web-application",
    title: "Custom Web Application Development",
    description: "Full-stack web application development using modern technologies like React, Node.js, and cloud-native architecture. Includes responsive design, user experience optimization, and integration with existing systems. Features scalable architecture and performance optimization.",
    category: "Web & Mobile Development",
    subcategory: "Web Applications",
    price: 15999,
    currency: "$",
    tags: ["Web Development", "React", "Node.js", "Full-stack", "Responsive Design"],
=======
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T16:45:00.000Z",
    rating: 4.7,
    reviewCount: 76,
    location: "Global",
    availability: "5-6 Weeks",
    aiScore: 91
  },
  {
    id: "data-governance",
    title: "Data Governance & Compliance Framework",
    description: "Comprehensive data governance implementation including data quality, privacy controls, compliance monitoring, and audit trails. Supports GDPR, CCPA, HIPAA, and industry-specific regulations.",
    category: "Data Services",
    subcategory: "Data Governance",
    price: 3800,
    currency: "$",
    tags: ["Data Governance", "Compliance", "GDPR", "Data Quality", "Privacy"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T12:15:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    location: "Global",
    availability: "4-5 Weeks",
    aiScore: 93
=======
    description: "Convert your existing website into a powerful Progressive Web App with offline capabilities and native app-like experience.",
    category: "Web & Mobile Development",
    subcategory: "Progressive Web Apps",
    price: 4000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Offline functionality",
      "Push notifications",
      "App-like navigation",
      "Service worker implementation",
      "Performance optimization",
      "Cross-platform compatibility"
    ],
    benefits: [
      "Improved user engagement",
      "Faster loading times",
      "Offline functionality",
      "Reduced development costs",
      "Better user experience"
    ],
    useCases: [
      "E-commerce platforms",
      "News and media sites",
      "Social networking apps",
      "Business applications",
      "Educational platforms"
    ],
    marketPrice: "$3,500 - $15,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["PWA", "Web Development", "Mobile", "Offline", "Performance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-08T11:00:00.000Z",
    aiScore: 87,
    rating: 4.5,
    reviewCount: 112,
    estimatedDelivery: "4-5 weeks",
    supportLevel: "premium"
  },
  {
    id: "react-native-app",
    title: "React Native Mobile App Development",
    description: "Cross-platform mobile app development using React Native for iOS and Android with native performance and look.",
    category: "Web & Mobile Development",
    subcategory: "Mobile Apps",
    price: 8000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Cross-platform development",
      "Native performance",
      "Custom UI/UX design",
      "API integration",
      "Push notifications",
      "App store deployment"
    ],
    benefits: [
      "Single codebase for both platforms",
      "Native performance",
      "Faster development time",
      "Cost-effective solution",
      "Easy maintenance"
    ],
    useCases: [
      "Business applications",
      "E-commerce apps",
      "Social networking",
      "Utility apps",
      "Entertainment platforms"
    ],
    marketPrice: "$7,000 - $25,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["React Native", "Mobile Development", "iOS", "Android", "Cross-platform"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T15:45:00.000Z",
    aiScore: 89,
    rating: 4.7,
    reviewCount: 203,
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise"
  },

  // Digital Transformation & Consulting
  {
    id: "digital-transformation-strategy",
    title: "Digital Transformation Strategy & Implementation",
    description: "Comprehensive digital transformation consulting to modernize your business processes, technology stack, and customer experience.",
    category: "Digital Transformation",
    subcategory: "Strategy & Consulting",
    price: 12000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Current state assessment",
      "Digital maturity evaluation",
      "Technology roadmap planning",
      "Change management strategy",
      "Implementation support",
      "Success metrics definition"
    ],
    benefits: [
      "Improved operational efficiency",
      "Enhanced customer experience",
      "Competitive advantage",
      "Cost reduction",
      "Future-ready business model"
    ],
    useCases: [
      "Traditional businesses",
      "Manufacturing companies",
      "Retail organizations",
      "Financial services",
      "Healthcare providers"
    ],
    marketPrice: "$10,000 - $50,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Digital Transformation", "Strategy", "Consulting", "Change Management", "Technology"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-12T09:20:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 89,
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise"
=======
    title: "Enterprise Data Warehouse Design & Implementation",
    description: "Design and build scalable data warehouses using modern cloud technologies. Features data modeling, ETL pipeline development, and business intelligence integration. Includes data governance and quality assurance.",
    category: "Data & Analytics",
    subcategory: "Data Warehousing",
    price: 15999,
    currency: "$",
    tags: ["Data Warehouse", "ETL", "Business Intelligence", "Data Governance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-05T09:15:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    location: "Global",
    availability: "8-10 Weeks",
    aiScore: 91
  },
  {
    id: "real-time-streaming-analytics",
    title: "Real-Time Streaming Analytics Platform",
    description: "Build real-time data processing and analytics solutions using Apache Kafka, Apache Flink, and modern streaming technologies. Features real-time dashboards, alerting, and machine learning model integration.",
    category: "Data & Analytics",
    subcategory: "Streaming Analytics",
    price: 8999,
    currency: "$",
    tags: ["Real-time Analytics", "Apache Kafka", "Streaming", "ML Integration"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-10T11:45:00.000Z",
    rating: 4.6,
    reviewCount: 29,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 88
  },
  {
    id: "data-governance-framework",
    title: "Data Governance & Compliance Framework",
    description: "Establish comprehensive data governance policies, procedures, and controls. Includes data classification, privacy impact assessments, and compliance monitoring. Covers GDPR, CCPA, and industry-specific regulations.",
    category: "Data & Analytics",
    subcategory: "Data Governance",
    price: 6999,
    currency: "$",
    tags: ["Data Governance", "Compliance", "GDPR", "Privacy"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-15T13:20:00.000Z",
    rating: 4.7,
    reviewCount: 42,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 85
  },

  // Digital Transformation Services
  {
    id: "digital-transformation-strategy",
    title: "Digital Transformation Strategy & Roadmap",
    description: "Comprehensive digital transformation consulting including current state assessment, future state vision, and detailed implementation roadmap. Covers technology, processes, culture, and change management.",
    category: "Digital Transformation",
    subcategory: "Strategy & Consulting",
    price: 19999,
    currency: "$",
    tags: ["Digital Transformation", "Strategy", "Change Management", "Roadmap"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-20T15:00:00.000Z",
    rating: 4.9,
    reviewCount: 78,
    location: "Global",
    availability: "10-12 Weeks",
    aiScore: 94
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e931
  },
  {
    id: "legacy-system-modernization",
    title: "Legacy System Modernization & Migration",
<<<<<<< HEAD
    description: "Transform your outdated systems into modern, cloud-native applications with improved performance and maintainability.",
    category: "Digital Transformation",
    subcategory: "System Modernization",
    price: 15000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Legacy system analysis",
      "Modernization strategy",
      "Cloud migration planning",
      "Data migration services",
      "Testing and validation",
      "Training and documentation"
    ],
    benefits: [
      "Improved system performance",
      "Reduced maintenance costs",
      "Enhanced security",
      "Better scalability",
      "Modern user experience"
    ],
    useCases: [
      "Enterprise applications",
      "Financial systems",
      "Healthcare systems",
      "Government applications",
      "Manufacturing systems"
    ],
    marketPrice: "$12,000 - $75,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Legacy Modernization", "Cloud Migration", "Digital Transformation", "System Integration", "Migration"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T13:30:00.000Z",
    aiScore: 92,
    rating: 4.8,
    reviewCount: 156,
    estimatedDelivery: "16-24 weeks",
    supportLevel: "enterprise"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
=======
    description: "Modernize legacy applications and systems with cloud-native technologies. Includes code refactoring, database migration, and API development. Features automated testing and zero-downtime deployment.",
    category: "Digital Transformation",
    subcategory: "System Modernization",
    price: 24999,
    currency: "$",
    tags: ["Legacy Modernization", "Cloud Native", "API Development", "Zero Downtime"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-25T10:30:00.000Z",
    rating: 4.8,
    reviewCount: 56,
    location: "Global",
    availability: "12-16 Weeks",
    aiScore: 90
  },
  {
    id: "workflow-automation-platform",
    title: "Business Process Automation Platform",
    description: "Design and implement automated workflows for business processes using RPA, BPM, and AI technologies. Features process mining, optimization, and continuous improvement. Includes training and change management support.",
    category: "Digital Transformation",
    subcategory: "Process Automation",
    price: 12999,
    currency: "$",
    tags: ["Process Automation", "RPA", "BPM", "Workflow"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-30T14:15:00.000Z",
    rating: 4.7,
    reviewCount: 34,
    location: "Global",
    availability: "8-10 Weeks",
    aiScore: 87
  },

  // Mobile & Web Development Services
  {
    id: "progressive-web-app-development",
    title: "Progressive Web App (PWA) Development",
    description: "Build modern, responsive progressive web applications with offline capabilities, push notifications, and native app-like experience. Features cross-platform compatibility, performance optimization, and SEO best practices.",
    category: "Mobile & Web Development",
    subcategory: "Progressive Web Apps",
    price: 8999,
    currency: "$",
    tags: ["PWA", "Offline Capabilities", "Push Notifications", "Cross-platform"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-01T09:00:00.000Z",
    rating: 4.8,
    reviewCount: 45,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 89
  },
  {
    id: "cross-platform-mobile-app",
    title: "Cross-Platform Mobile App Development",
    description: "Develop native-quality mobile applications for iOS and Android using React Native or Flutter. Features offline functionality, push notifications, analytics integration, and app store optimization.",
    category: "Mobile & Web Development",
    subcategory: "Mobile Apps",
    price: 15999,
    currency: "$",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-05T11:30:00.000Z",
    rating: 4.7,
    reviewCount: 67,
    location: "Global",
    availability: "10-12 Weeks",
    aiScore: 88
  },
  {
    id: "ecommerce-platform-development",
    title: "Custom E-commerce Platform Development",
    description: "Build scalable e-commerce solutions with advanced features including inventory management, payment processing, order fulfillment, and customer analytics. Features mobile-first design and multi-channel integration.",
    category: "Mobile & Web Development",
    subcategory: "E-commerce",
    price: 19999,
    currency: "$",
    tags: ["E-commerce", "Inventory Management", "Payment Processing", "Multi-channel"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-10T13:45:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    location: "Global",
    availability: "12-16 Weeks",
    aiScore: 91
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e931
  },

  // Blockchain & Web3 Services
  {
    id: "smart-contract-development",
    title: "Smart Contract Development & Audit",
<<<<<<< HEAD
<<<<<<< HEAD
    description: "Ethereum, Solana, and Polygon smart contract development with comprehensive security auditing. Includes DeFi protocols, NFT marketplaces, and blockchain integration services.",
    category: "Blockchain",
    subcategory: "Smart Contracts",
    price: 3500,
    currency: "$",
    tags: ["Smart Contracts", "Ethereum", "DeFi", "NFT", "Blockchain Security"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
<<<<<<< HEAD
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T12:00:00.000Z",
    rating: 4.9,
    reviewCount: 67,
    aiScore: 91,
    location: "Global",
    availability: "10-12 weeks"
  },
  {
    id: "mobile-app-development",
    title: "Cross-Platform Mobile App Development",
    description: "Native-quality mobile applications for iOS and Android using React Native or Flutter. Includes user interface design, backend integration, testing, and app store deployment. Features offline functionality, push notifications, and analytics integration.",
    category: "Web & Mobile Development",
    subcategory: "Mobile Apps",
    price: 19999,
    currency: "$",
    tags: ["Mobile Development", "React Native", "Flutter", "iOS", "Android", "Cross-platform"],
=======
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 94
  },
  {
    id: "web3-integration",
    title: "Web3 Integration & Wallet Development",
    description: "Web3 integration services including wallet development, DApp frontends, and blockchain API integration. Supports multiple chains and includes user experience optimization.",
    category: "Blockchain",
    subcategory: "Web3",
    price: 2800,
    currency: "$",
    tags: ["Web3", "DApp", "Wallet Integration", "Blockchain API", "Multi-Chain"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
<<<<<<< HEAD
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T16:30:00.000Z",
    rating: 4.8,
    reviewCount: 41,
    aiScore: 89,
    location: "Global",
    availability: "12-16 weeks"
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform Development",
    description: "Custom e-commerce solutions with advanced features including inventory management, payment processing, order fulfillment, and customer relationship management. Features mobile-responsive design, SEO optimization, and integration with popular payment gateways.",
    category: "Web & Mobile Development",
    subcategory: "E-commerce",
    price: 24999,
    currency: "$",
    tags: ["E-commerce", "Payment Processing", "Inventory Management", "CRM", "SEO"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T14:45:00.000Z",
    rating: 4.9,
    reviewCount: 33,
    aiScore: 92,
    location: "Global",
    availability: "14-18 weeks"
  },

  // Business Solutions Services
  {
    id: "digital-transformation",
    title: "Digital Transformation Strategy & Implementation",
    description: "Comprehensive digital transformation program including strategy development, process optimization, technology implementation, and change management. Covers all aspects of modernizing business operations for the digital age. Includes ROI analysis and success metrics.",
    category: "Business Solutions",
    subcategory: "Digital Transformation",
    price: 29999,
    currency: "$",
    tags: ["Digital Transformation", "Process Optimization", "Change Management", "Technology Implementation", "ROI"],
=======
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T15:30:00.000Z",
    rating: 4.7,
    reviewCount: 145,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 91
  },

  // Business Process Automation
  {
    id: "workflow-automation-platform",
    title: "Business Workflow Automation Platform",
    description: "Intelligent workflow automation platform that streamlines business processes, reduces manual work, and improves operational efficiency across departments.",
    category: "Business Solutions",
    subcategory: "Process Automation",
    price: 2499,
    currency: "$",
    tags: ["Workflow Automation", "Business Processes", "Efficiency", "Integration"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T10:15:00.000Z",
    rating: 4.8,
    reviewCount: 167,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 89
  },
  {
    id: "customer-support-automation",
    title: "AI-Powered Customer Support Automation",
    description: "Intelligent customer support system with automated ticket routing, knowledge base management, and AI-powered response suggestions for faster resolution.",
    category: "Business Solutions",
    subcategory: "Customer Support",
    price: 1799,
    currency: "$",
    tags: ["Customer Support", "Automation", "AI", "Ticket Management"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8a54
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
<<<<<<< HEAD
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T11:00:00.000Z",
    rating: 4.9,
    reviewCount: 25,
    aiScore: 94,
    location: "Global",
    availability: "16-20 weeks"
  },
  {
    id: "business-process-automation",
    title: "Business Process Automation & Optimization",
    description: "End-to-end business process automation using RPA, workflow management, and AI-powered decision engines. Identifies automation opportunities, implements solutions, and provides ongoing optimization. Results in increased efficiency, reduced costs, and improved accuracy.",
    category: "Business Solutions",
    subcategory: "Process Automation",
    price: 12999,
    currency: "$",
    tags: ["Process Automation", "RPA", "Workflow Management", "Efficiency", "Cost Reduction"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T13:15:00.000Z",
    rating: 4.8,
    reviewCount: 38,
    aiScore: 90,
    location: "Global",
    availability: "8-10 weeks"
  },
  {
    id: "customer-experience-optimization",
    title: "Customer Experience Optimization & Analytics",
    description: "Comprehensive customer experience improvement program including journey mapping, user research, interface optimization, and analytics implementation. Features A/B testing, user feedback collection, and performance measurement. Results in increased customer satisfaction and retention.",
    category: "Business Solutions",
    subcategory: "Customer Experience",
    price: 8999,
    currency: "$",
    tags: ["Customer Experience", "User Research", "Journey Mapping", "A/B Testing", "Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T15:30:00.000Z",
    rating: 4.7,
    reviewCount: 31,
    aiScore: 88,
    location: "Global",
    availability: "6-8 weeks"
  },

  // IT Consulting Services
  {
    id: "technology-strategy-consulting",
    title: "Technology Strategy & Roadmap Consulting",
    description: "Strategic technology consulting including current state assessment, future state vision, technology roadmap development, and implementation planning. Covers emerging technologies, vendor selection, and investment prioritization. Essential for technology-driven business growth.",
    category: "IT Consulting",
    subcategory: "Strategy",
    price: 14999,
    currency: "$",
    tags: ["Technology Strategy", "Roadmap Planning", "Vendor Selection", "Investment Planning", "Emerging Tech"],
=======
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-03T14:30:00.000Z",
    rating: 4.7,
    reviewCount: 45,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 90
  },

  // IoT & Hardware Services
  {
    id: "iot-platform-development",
    title: "IoT Platform Development & Integration",
    description: "Complete IoT solution including device management, data collection, real-time monitoring, and analytics. Supports multiple protocols and includes mobile app for device control.",
    category: "IoT Services",
    subcategory: "Platform Development",
    price: 4800,
    currency: "$",
    tags: ["IoT", "Device Management", "Real-Time Monitoring", "Data Collection", "Mobile App"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
=======
    },
    images: ["https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T12:00:00.000Z",
    rating: 4.7,
    reviewCount: 134,
    location: "Global",
    availability: "Immediate",
    aiScore: 90
  },

  // E-commerce & Digital Marketing
  {
    id: "ecommerce-ai-optimization",
    title: "E-commerce AI Optimization Suite",
    description: "AI-powered e-commerce optimization including personalized recommendations, dynamic pricing, inventory management, and customer behavior analysis.",
    category: "Digital Solutions",
    subcategory: "E-commerce",
    price: 3999,
    currency: "$",
    tags: ["E-commerce", "AI Optimization", "Personalization", "Dynamic Pricing"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8a54
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
<<<<<<< HEAD
<<<<<<< HEAD
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-12T09:30:00.000Z",
    rating: 4.9,
    reviewCount: 42,
    aiScore: 93,
    location: "Global",
    availability: "4-6 weeks"
  },
  {
    id: "vendor-management",
    title: "IT Vendor Management & Procurement",
    description: "Comprehensive vendor management service including vendor evaluation, contract negotiation, performance monitoring, and relationship management. Covers software, hardware, and service providers. Includes cost optimization, SLA management, and risk mitigation strategies.",
    category: "IT Consulting",
    subcategory: "Vendor Management",
    price: 7999,
    currency: "$",
    tags: ["Vendor Management", "Contract Negotiation", "Performance Monitoring", "Cost Optimization", "SLA Management"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T12:45:00.000Z",
    rating: 4.8,
    reviewCount: 29,
    aiScore: 87,
    location: "Global",
    availability: "3-4 weeks"
=======
    description: "Develop, test, and audit smart contracts for DeFi, NFTs, and enterprise blockchain applications. Features security best practices, gas optimization, and comprehensive testing. Includes formal verification and audit reports.",
    category: "Blockchain & Web3",
    subcategory: "Smart Contracts",
    price: 12999,
    currency: "$",
    tags: ["Smart Contracts", "DeFi", "NFTs", "Security Audit"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-15T15:20:00.000Z",
    rating: 4.6,
    reviewCount: 23,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 85
  },
  {
    id: "defi-protocol-development",
    title: "DeFi Protocol Development & Integration",
    description: "Build decentralized finance protocols including lending platforms, DEXs, and yield farming solutions. Features liquidity management, risk assessment, and cross-chain interoperability. Includes security audits and testing.",
    category: "Blockchain & Web3",
    subcategory: "DeFi",
    price: 29999,
    currency: "$",
    tags: ["DeFi", "Lending", "DEX", "Yield Farming"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-20T10:15:00.000Z",
    rating: 4.7,
    reviewCount: 18,
    location: "Global",
    availability: "12-16 Weeks",
    aiScore: 87
  },

  // IoT & Edge Computing Services
  {
    id: "iot-platform-development",
    title: "IoT Platform Development & Management",
    description: "Build comprehensive IoT solutions with device management, data collection, real-time analytics, and remote monitoring. Features edge computing capabilities, security protocols, and scalable architecture.",
    category: "IoT & Edge Computing",
    subcategory: "IoT Platforms",
    price: 24999,
    currency: "$",
    tags: ["IoT", "Edge Computing", "Device Management", "Real-time Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-25T14:30:00.000Z",
    rating: 4.5,
    reviewCount: 15,
    location: "Global",
    availability: "16-20 Weeks",
    aiScore: 83
  },
  {
    id: "edge-computing-solutions",
    title: "Edge Computing Solutions & Optimization",
    description: "Design and implement edge computing architectures for low-latency applications. Features edge node deployment, data processing optimization, and hybrid cloud integration. Includes performance monitoring and scaling.",
    category: "IoT & Edge Computing",
    subcategory: "Edge Computing",
    price: 18999,
    currency: "$",
    tags: ["Edge Computing", "Low Latency", "Hybrid Cloud", "Performance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-30T12:00:00.000Z",
    rating: 4.6,
    reviewCount: 12,
    location: "Global",
    availability: "12-16 Weeks",
    aiScore: 84
  },

  // Enterprise Software Services
  {
    id: "erp-system-implementation",
    title: "ERP System Implementation & Customization",
    description: "Implement and customize enterprise resource planning systems for manufacturing, distribution, and service industries. Features process mapping, data migration, user training, and ongoing support.",
    category: "Enterprise Software",
    subcategory: "ERP",
    price: 49999,
    currency: "$",
    tags: ["ERP", "Process Mapping", "Data Migration", "Training"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-05-01T09:45:00.000Z",
    rating: 4.8,
    reviewCount: 156,
    location: "Global",
    availability: "20-24 Weeks",
    aiScore: 90
  },
  {
    id: "crm-system-development",
    title: "Custom CRM System Development",
    description: "Build tailored customer relationship management systems with sales automation, marketing tools, and customer analytics. Features lead scoring, pipeline management, and integration with existing systems.",
    category: "Enterprise Software",
    subcategory: "CRM",
    price: 29999,
    currency: "$",
    tags: ["CRM", "Sales Automation", "Lead Scoring", "Integration"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f500"],
    createdAt: "2024-05-05T11:20:00.000Z",
    rating: 4.7,
    reviewCount: 89,
    location: "Global",
    availability: "16-20 Weeks",
    aiScore: 88
  },

  // Managed IT Services
  {
    id: "managed-it-support-24-7",
    title: "24/7 Managed IT Support & Monitoring",
    description: "Comprehensive managed IT services including help desk support, network monitoring, backup management, and security updates. Features proactive maintenance, SLA guarantees, and dedicated support team.",
    category: "Managed IT Services",
    subcategory: "Support & Monitoring",
    price: 2999,
    currency: "$",
    tags: ["24/7 Support", "Network Monitoring", "Backup Management", "SLA"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-05-10T13:15:00.000Z",
    rating: 4.9,
    reviewCount: 234,
    location: "Global",
    availability: "Immediate",
    aiScore: 92
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e931
  },
  {
    id: "disaster-recovery-planning",
    title: "Disaster Recovery & Business Continuity Planning",
<<<<<<< HEAD
    description: "Comprehensive disaster recovery and business continuity planning including risk assessment, recovery strategy development, testing procedures, and ongoing maintenance. Features automated backup systems, failover procedures, and recovery time objectives. Essential for business resilience.",
    category: "IT Consulting",
    subcategory: "Disaster Recovery",
    price: 11999,
    currency: "$",
    tags: ["Disaster Recovery", "Business Continuity", "Risk Assessment", "Backup Systems", "Failover"],
=======
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T09:15:00.000Z",
    rating: 4.8,
    reviewCount: 78,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 92
  },
  {
    id: "hardware-prototyping",
    title: "Hardware Prototyping & PCB Design",
    description: "Custom hardware development including PCB design, component selection, and prototyping. Includes firmware development, testing, and manufacturing support for small to medium production runs.",
    category: "IoT Services",
    subcategory: "Hardware Development",
    price: 3200,
    currency: "$",
    tags: ["PCB Design", "Hardware Prototyping", "Firmware", "Component Selection", "Manufacturing"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
<<<<<<< HEAD
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-02T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 23,
    aiScore: 91,
    location: "Global",
    availability: "6-8 weeks"
  }
];

// Service pricing tiers for different business sizes
export const SERVICE_PRICING_TIERS = {
  startup: {
    name: "Startup",
    description: "Perfect for small businesses and startups",
    discount: 0.15, // 15% discount
    features: ["Basic support", "Standard delivery", "Documentation included"]
  },
  smb: {
    name: "Small & Medium Business",
    description: "Ideal for growing businesses",
    discount: 0.05, // 5% discount
    features: ["Priority support", "Fast delivery", "Training included", "30-day support"]
  },
  enterprise: {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    discount: 0, // No discount
    features: ["Dedicated support", "Custom delivery", "Full training", "90-day support", "Custom features"]
  }
};

// Contact information
export const CONTACT_INFO = {
  mobile: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com",
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
  emergencySupport: "24/7 emergency IT support available"
};

// Service guarantees
export const SERVICE_GUARANTEES = [
  "100% satisfaction guarantee",
  "30-day money-back guarantee",
  "Free consultation and assessment",
  "Transparent pricing with no hidden fees",
  "Certified professionals and experts",
  "Ongoing support and maintenance",
  "Compliance with industry standards",
  "Data security and confidentiality"
];
>>>>>>> origin/cursor/expand-services-and-deploy-updates-63f3
=======
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T11:00:00.000Z",
    rating: 4.7,
    reviewCount: 56,
    location: "Global",
    availability: "8-10 Weeks",
    aiScore: 89
  },

  // Enterprise & Business Solutions
  {
    id: "erp-system-integration",
    title: "ERP System Integration & Customization",
    description: "Enterprise resource planning system integration with existing business processes. Includes custom module development, data migration, user training, and ongoing support.",
    category: "Enterprise Solutions",
    subcategory: "ERP",
    price: 8500,
    currency: "$",
    tags: ["ERP", "System Integration", "Custom Modules", "Data Migration", "Training"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T08:30:00.000Z",
    rating: 4.9,
    reviewCount: 234,
    featured: true,
    location: "Global",
    availability: "10-12 Weeks",
    aiScore: 95
  },
  {
    id: "crm-customization",
    title: "CRM System Customization & Automation",
    description: "Customer relationship management system customization with automated workflows, lead scoring, and advanced reporting. Includes integration with marketing tools and sales automation.",
    category: "Enterprise Solutions",
    subcategory: "CRM",
    price: 4200,
    currency: "$",
    tags: ["CRM", "Workflow Automation", "Lead Scoring", "Sales Automation", "Marketing Integration"],
=======
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-25T14:45:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 94
  },
  {
    id: "digital-marketing-automation",
    title: "Digital Marketing Automation Platform",
    description: "Comprehensive marketing automation platform with email marketing, social media management, lead scoring, and campaign analytics all in one solution.",
    category: "Digital Solutions",
    subcategory: "Marketing Automation",
    price: 2999,
    currency: "$",
    tags: ["Marketing Automation", "Email Marketing", "Social Media", "Lead Scoring"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8a54
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
<<<<<<< HEAD
    images: ["https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T13:45:00.000Z",
    rating: 4.8,
    reviewCount: 167,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 93
  },

  // Digital Marketing & SEO
  {
    id: "seo-optimization",
    title: "Comprehensive SEO & Digital Marketing Strategy",
    description: "Full-service SEO optimization including technical SEO, content strategy, link building, and performance monitoring. Includes competitor analysis and monthly reporting.",
    category: "Digital Marketing",
    subcategory: "SEO",
    price: 1800,
    currency: "$",
    tags: ["SEO", "Digital Marketing", "Content Strategy", "Link Building", "Performance Monitoring"],
=======
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T09:30:00.000Z",
    rating: 4.8,
    reviewCount: 203,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 92
  },

  // Healthcare & FinTech Solutions
  {
    id: "healthcare-ai-platform",
    title: "Healthcare AI Diagnostic Platform",
    description: "AI-powered healthcare platform for diagnostic assistance, patient data analysis, and medical image processing. HIPAA compliant with enterprise security.",
    category: "Specialized Solutions",
    subcategory: "Healthcare",
    price: 8999,
    currency: "$",
    tags: ["Healthcare", "AI Diagnostics", "HIPAA Compliant", "Medical Imaging"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-05T11:15:00.000Z",
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 97
  },
  {
    id: "fintech-compliance-suite",
    title: "FinTech Compliance & Security Suite",
    description: "Comprehensive financial technology compliance solution including KYC/AML automation, fraud detection, regulatory reporting, and audit trail management.",
    category: "Specialized Solutions",
    subcategory: "FinTech",
    price: 5999,
    currency: "$",
    tags: ["FinTech", "Compliance", "KYC/AML", "Fraud Detection"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-10T16:00:00.000Z",
    rating: 4.8,
    reviewCount: 112,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 93
  },

  // IoT & Smart Solutions
  {
    id: "iot-platform-enterprise",
    title: "Enterprise IoT Management Platform",
    description: "Scalable IoT platform for device management, data collection, real-time monitoring, and predictive maintenance across industrial and commercial applications.",
    category: "IoT Solutions",
    subcategory: "Platform",
    price: 4999,
    currency: "$",
    tags: ["IoT", "Device Management", "Real-time Monitoring", "Predictive Maintenance"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8a54
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
<<<<<<< HEAD
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T10:15:00.000Z",
    rating: 4.8,
    reviewCount: 189,
    location: "Global",
    availability: "Immediate",
    aiScore: 91
  },
  {
    id: "social-media-automation",
    title: "Social Media Management & Automation Platform",
    description: "Complete social media management solution with automated posting, content scheduling, analytics, and engagement monitoring. Supports all major platforms and includes AI-powered content suggestions.",
    category: "Digital Marketing",
    subcategory: "Social Media",
    price: 1200,
    currency: "$",
    tags: ["Social Media", "Automation", "Content Scheduling", "Analytics", "AI Content"],
=======
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-15T13:45:00.000Z",
    rating: 4.7,
    reviewCount: 78,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 91
  },
  {
    id: "smart-building-automation",
    title: "Smart Building Automation System",
    description: "Intelligent building management system with energy optimization, security integration, occupancy monitoring, and automated climate control.",
    category: "IoT Solutions",
    subcategory: "Smart Buildings",
    price: 3499,
    currency: "$",
    tags: ["Smart Buildings", "Energy Optimization", "Security", "Automation"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8a54
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
<<<<<<< HEAD
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T15:45:00.000Z",
    rating: 4.7,
    reviewCount: 134,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 88
  },

  // Training & Consulting
  {
    id: "tech-training-programs",
    title: "Custom Technology Training Programs",
    description: "Tailored training programs for your team covering AI, cloud computing, cybersecurity, and modern development practices. Includes hands-on workshops, certification preparation, and ongoing support.",
    category: "Training & Consulting",
    subcategory: "Technology Training",
    price: 2500,
    currency: "$",
    tags: ["Training Programs", "AI Training", "Cloud Computing", "Cybersecurity", "Workshops"],
=======
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-20T10:30:00.000Z",
    rating: 4.8,
    reviewCount: 95,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 90
  },

  // Education & Training Solutions
  {
    id: "ai-learning-platform",
    title: "AI-Powered Learning Management System",
    description: "Intelligent LMS with personalized learning paths, adaptive assessments, progress tracking, and AI tutoring for corporate training and education.",
    category: "Education Solutions",
    subcategory: "Learning Management",
    price: 2499,
    currency: "$",
    tags: ["Learning Management", "AI Tutoring", "Personalized Learning", "Corporate Training"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8a54
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=500"],
<<<<<<< HEAD
    createdAt: "2024-01-22T11:30:00.000Z",
    rating: 4.9,
    reviewCount: 98,
    location: "Global",
    availability: "Flexible",
    aiScore: 94
  },
  {
    id: "digital-transformation-consulting",
    title: "Digital Transformation Strategy & Implementation",
    description: "Comprehensive digital transformation consulting including technology assessment, roadmap development, change management, and implementation support. Focuses on ROI and business value.",
    category: "Training & Consulting",
    subcategory: "Digital Transformation",
    price: 6800,
    currency: "$",
    tags: ["Digital Transformation", "Strategy", "Change Management", "Technology Assessment", "ROI"],
=======
    createdAt: "2024-03-25T15:15:00.000Z",
    rating: 4.8,
    reviewCount: 156,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 92
  },
  {
    id: "virtual-reality-training",
    title: "VR/AR Training & Simulation Platform",
    description: "Immersive training platform using virtual and augmented reality for skill development, safety training, and complex procedure simulation.",
    category: "Education Solutions",
    subcategory: "VR/AR Training",
    price: 5999,
    currency: "$",
    tags: ["VR/AR", "Training", "Simulation", "Immersive Learning"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8a54
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
<<<<<<< HEAD
    images: ["https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T14:00:00.000Z",
    rating: 4.9,
    reviewCount: 145,
    featured: true,
    location: "Global",
    availability: "8-10 Weeks",
    aiScore: 96
  }
];

// Service categories for filtering
export const SERVICE_CATEGORIES = [
  { label: 'AI Development', value: 'ai-development' },
  { label: 'AI Services', value: 'ai-services' },
  { label: 'Cloud Services', value: 'cloud-services' },
  { label: 'Cybersecurity', value: 'cybersecurity' },
  { label: 'Web Development', value: 'web-development' },
  { label: 'Mobile Development', value: 'mobile-development' },
  { label: 'Data Services', value: 'data-services' },
  { label: 'Blockchain', value: 'blockchain' },
  { label: 'IoT Services', value: 'iot-services' },
  { label: 'Enterprise Solutions', value: 'enterprise-solutions' },
  { label: 'Digital Marketing', value: 'digital-marketing' },
  { label: 'Training & Consulting', value: 'training-consulting' }
];

// Service subcategories for detailed filtering
export const SERVICE_SUBCATEGORIES = {
  'ai-development': ['Chatbots & Conversational AI', 'Machine Learning', 'Computer Vision', 'Natural Language Processing'],
  'ai-services': ['Content Creation', 'Data Analytics', 'Process Automation', 'Predictive Analytics'],
  'cloud-services': ['Migration & Consulting', 'DevOps', 'Serverless', 'Container Orchestration'],
  'cybersecurity': ['Audit & Assessment', 'Zero Trust', 'Incident Response', 'Compliance'],
  'web-development': ['PWA', 'E-commerce', 'CMS', 'API Development'],
  'mobile-development': ['Cross-Platform', 'Native iOS', 'Native Android', 'Hybrid Apps'],
  'data-services': ['Data Warehousing', 'Real-Time Analytics', 'Data Governance', 'ETL Development'],
  'blockchain': ['Smart Contracts', 'Web3', 'DeFi', 'NFT Development'],
  'iot-services': ['Platform Development', 'Hardware Development', 'Edge Computing', 'Sensor Integration'],
  'enterprise-solutions': ['ERP', 'CRM', 'HR Systems', 'Financial Systems'],
  'digital-marketing': ['SEO', 'Social Media', 'Content Marketing', 'PPC Management'],
  'training-consulting': ['Technology Training', 'Digital Transformation', 'Change Management', 'Process Optimization']
};
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
=======
    images: ["https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-30T12:00:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 95
  }
];

// Service Categories for filtering
export const SERVICE_CATEGORIES = [
  { id: "ai-services", name: "AI Services", description: "Artificial Intelligence & Machine Learning Solutions" },
  { id: "it-services", name: "IT Services", description: "Infrastructure, Cloud & Cybersecurity" },
  { id: "business-solutions", name: "Business Solutions", description: "Process Automation & Optimization" },
  { id: "digital-solutions", name: "Digital Solutions", description: "E-commerce & Marketing" },
  { id: "specialized-solutions", name: "Specialized Solutions", description: "Healthcare, FinTech & Industry-Specific" },
  { id: "iot-solutions", name: "IoT Solutions", description: "Internet of Things & Smart Systems" },
  { id: "education-solutions", name: "Education Solutions", description: "Learning & Training Platforms" }
];

// Service Subcategories
export const SERVICE_SUBCATEGORIES = {
  "ai-services": ["Chatbots & Virtual Assistants", "Content Creation", "Data Analytics", "Computer Vision", "Natural Language Processing"],
  "it-services": ["Cloud Solutions", "Cybersecurity", "DevOps", "Infrastructure", "Network Management"],
  "business-solutions": ["Process Automation", "Customer Support", "Project Management", "HR Solutions", "Financial Management"],
  "digital-solutions": ["E-commerce", "Marketing Automation", "Web Development", "Mobile Apps", "Digital Transformation"],
  "specialized-solutions": ["Healthcare", "FinTech", "Manufacturing", "Retail", "Logistics"],
  "iot-solutions": ["Platform", "Smart Buildings", "Industrial IoT", "Connected Devices", "Data Analytics"],
  "education-solutions": ["Learning Management", "VR/AR Training", "Skill Assessment", "Content Creation", "Analytics"]
};

// Pricing Tiers
export const PRICING_TIERS = {
  "starter": { min: 500, max: 1999, label: "Starter Solutions" },
  "professional": { min: 2000, max: 4999, label: "Professional Solutions" },
  "enterprise": { min: 5000, max: 15000, label: "Enterprise Solutions" }
};
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8a54
=======
    description: "Secure smart contract development for DeFi, NFTs, and blockchain applications with comprehensive security auditing.",
    category: "Blockchain & Web3",
    subcategory: "Smart Contracts",
    price: 7000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Smart contract development",
      "Security audit and testing",
      "Gas optimization",
      "Multi-chain deployment",
      "Documentation and testing",
      "Ongoing support"
    ],
    benefits: [
      "Secure and audited contracts",
      "Gas cost optimization",
      "Multi-chain compatibility",
      "Reduced security risks",
      "Professional development standards"
    ],
    useCases: [
      "DeFi applications",
      "NFT marketplaces",
      "DAO governance",
      "Supply chain tracking",
      "Gaming platforms"
    ],
    marketPrice: "$5,000 - $25,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Smart Contracts", "Blockchain", "DeFi", "NFTs", "Security Audit"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-18T16:15:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 78,
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium"
  },

  // IoT & Edge Computing
  {
    id: "iot-platform-development",
    title: "IoT Platform Development & Management",
    description: "End-to-end IoT solution development including device management, data collection, analytics, and remote monitoring.",
    category: "IoT & Edge Computing",
    subcategory: "Platform Development",
    price: 10000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "IoT device management",
      "Real-time data collection",
      "Edge computing implementation",
      "Dashboard and analytics",
      "Alert and notification system",
      "Scalable architecture"
    ],
    benefits: [
      "Real-time monitoring and control",
      "Predictive maintenance",
      "Operational efficiency",
      "Data-driven insights",
      "Cost reduction"
    ],
    useCases: [
      "Industrial monitoring",
      "Smart buildings",
      "Agriculture automation",
      "Healthcare monitoring",
      "Logistics tracking"
    ],
    marketPrice: "$8,000 - $35,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["IoT", "Edge Computing", "Device Management", "Real-time", "Monitoring"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T10:45:00.000Z",
    aiScore: 91,
    rating: 4.7,
    reviewCount: 134,
    estimatedDelivery: "10-14 weeks",
    supportLevel: "enterprise"
  },

  // Emerging Technologies
  {
    id: "quantum-computing-consulting",
    title: "Quantum Computing Strategy & Consulting",
    description: "Strategic consulting for quantum computing adoption, algorithm development, and quantum-ready application design.",
    category: "Emerging Technologies",
    subcategory: "Quantum Computing",
    price: 25000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Quantum readiness assessment",
      "Algorithm optimization strategies",
      "Hybrid classical-quantum solutions",
      "Quantum software development",
      "Partnership recommendations",
      "ROI analysis and planning"
    ],
    benefits: [
      "Future-proof technology strategy",
      "Competitive advantage in research",
      "Optimization of complex problems",
      "Access to cutting-edge technology",
      "Strategic technology positioning"
    ],
    useCases: [
      "Pharmaceutical research",
      "Financial modeling",
      "Logistics optimization",
      "Cryptography and security",
      "Machine learning acceleration"
    ],
    marketPrice: "$20,000 - $100,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Quantum Computing", "Emerging Tech", "Strategy", "Algorithm Development", "Future Tech"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-25T14:20:00.000Z",
    aiScore: 98,
    rating: 4.9,
    reviewCount: 45,
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise"
  },
  {
    id: "metaverse-development",
    title: "Metaverse Platform Development",
    description: "Complete metaverse platform development including 3D environments, avatar systems, social interactions, and virtual commerce.",
    category: "Emerging Technologies",
    subcategory: "Metaverse & VR",
    price: 35000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "3D virtual world creation",
      "Avatar customization system",
      "Social interaction features",
      "Virtual commerce integration",
      "Cross-platform compatibility",
      "Analytics and user tracking"
    ],
    benefits: [
      "Immersive brand experiences",
      "New revenue streams",
      "Enhanced customer engagement",
      "Virtual event hosting",
      "Innovative marketing platform"
    ],
    useCases: [
      "Virtual events and conferences",
      "Brand experiences",
      "Educational platforms",
      "Gaming and entertainment",
      "Virtual real estate"
    ],
    marketPrice: "$30,000 - $150,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Metaverse", "VR/AR", "3D Development", "Virtual Worlds", "Social VR"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-28T11:30:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 67,
    estimatedDelivery: "16-24 weeks",
    supportLevel: "enterprise"
  },
  {
    id: "ai-ethics-compliance",
    title: "AI Ethics & Compliance Framework",
    description: "Comprehensive AI ethics and compliance framework development to ensure responsible AI deployment and regulatory adherence.",
    category: "AI & Machine Learning",
    subcategory: "AI Ethics & Governance",
    price: 8000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "AI ethics framework development",
      "Bias detection and mitigation",
      "Transparency and explainability",
      "Regulatory compliance assessment",
      "Ethics training and guidelines",
      "Ongoing monitoring and auditing"
    ],
    benefits: [
      "Regulatory compliance",
      "Reduced legal risks",
      "Enhanced brand reputation",
      "Ethical AI deployment",
      "Stakeholder trust"
    ],
    useCases: [
      "Financial services AI",
      "Healthcare AI systems",
      "HR and recruitment AI",
      "Autonomous vehicles",
      "Facial recognition systems"
    ],
    marketPrice: "$6,000 - $25,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["AI Ethics", "Compliance", "Responsible AI", "Governance", "Regulatory"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T16:45:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 89,
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium"
  }
];

export const SERVICE_CATEGORIES = [
  "AI & Machine Learning",
  "Cloud & DevOps",
  "Cybersecurity",
  "Data & Analytics",
  "Web & Mobile Development",
  "Digital Transformation",
  "Blockchain & Web3",
  "IoT & Edge Computing",
  "Emerging Technologies"
];

export const SERVICE_SUBCATEGORIES = {
  "AI & Machine Learning": [
    "Chatbots & Conversational AI",
    "Content Generation",
    "Computer Vision",
    "Natural Language Processing",
    "Predictive Analytics",
    "AI Ethics & Governance"
  ],
  "Cloud & DevOps": [
    "Cost Optimization",
    "Container Orchestration",
    "Infrastructure as Code",
    "CI/CD Pipelines",
    "Cloud Migration"
  ],
  "Cybersecurity": [
    "Security Testing",
    "Monitoring & Response",
    "Compliance & Governance",
    "Identity & Access Management",
    "Threat Intelligence"
  ],
  "Data & Analytics": [
    "Data Engineering",
    "Business Intelligence",
    "Machine Learning",
    "Data Visualization",
    "Data Governance"
  ],
  "Web & Mobile Development": [
    "Progressive Web Apps",
    "Mobile Apps",
    "Web Applications",
    "API Development",
    "E-commerce Solutions"
  ],
  "Digital Transformation": [
    "Strategy & Consulting",
    "System Modernization",
    "Process Automation",
    "Change Management",
    "Technology Assessment"
  ],
  "Blockchain & Web3": [
    "Smart Contracts",
    "DeFi Development",
    "NFT Marketplaces",
    "Blockchain Integration",
    "Web3 Applications"
  ],
  "IoT & Edge Computing": [
    "Platform Development",
    "Device Management",
    "Edge Analytics",
    "Sensor Integration",
    "Remote Monitoring"
  ],
  "Emerging Technologies": [
    "Quantum Computing",
    "Metaverse & VR",
    "AI Ethics & Governance",
    "Augmented Reality",
    "Extended Reality (XR)"
  ]
};
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
=======
    description: "Develop comprehensive disaster recovery and business continuity plans. Includes risk assessment, recovery procedures, testing protocols, and ongoing maintenance. Features cloud-based backup solutions and failover systems.",
    category: "Managed IT Services",
    subcategory: "Disaster Recovery",
    price: 15999,
    currency: "$",
    tags: ["Disaster Recovery", "Business Continuity", "Risk Assessment", "Cloud Backup"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-05-15T15:30:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    location: "Global",
    availability: "8-10 Weeks",
    aiScore: 89
  }
];

// Service Categories for better organization
export const SERVICE_CATEGORIES = [
  {
    id: "ai-machine-learning",
    name: "AI & Machine Learning",
    description: "Advanced artificial intelligence and machine learning solutions",
    icon: "🤖",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "AI & Machine Learning")
  },
  {
    id: "cloud-infrastructure",
    name: "Cloud & Infrastructure",
    description: "Cloud migration, DevOps, and infrastructure management",
    icon: "☁️",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Cloud & Infrastructure")
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "Comprehensive security solutions and compliance",
    icon: "🔒",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Cybersecurity")
  },
  {
    id: "data-analytics",
    name: "Data & Analytics",
    description: "Data warehousing, analytics, and business intelligence",
    icon: "📊",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Data & Analytics")
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    description: "Strategic consulting and system modernization",
    icon: "🚀",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Digital Transformation")
  },
  {
    id: "mobile-web-development",
    name: "Mobile & Web Development",
    description: "Custom applications and digital solutions",
    icon: "💻",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Mobile & Web Development")
  },
  {
    id: "blockchain-web3",
    name: "Blockchain & Web3",
    description: "Decentralized applications and smart contracts",
    icon: "⛓️",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Blockchain & Web3")
  },
  {
    id: "iot-edge-computing",
    name: "IoT & Edge Computing",
    description: "Internet of Things and edge computing solutions",
    icon: "🌐",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "IoT & Edge Computing")
  },
  {
    id: "enterprise-software",
    name: "Enterprise Software",
    description: "ERP, CRM, and enterprise system solutions",
    icon: "🏢",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Enterprise Software")
  },
  {
    id: "managed-it-services",
    name: "Managed IT Services",
    description: "24/7 support and managed IT solutions",
    icon: "🛠️",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Managed IT Services")
  }
];

// Featured Services for homepage display
export const FEATURED_SERVICES = COMPREHENSIVE_SERVICES.filter(service => service.featured);

// Services by price range
export const SERVICES_BY_PRICE = {
  budget: COMPREHENSIVE_SERVICES.filter(s => s.price && s.price < 5000),
  midRange: COMPREHENSIVE_SERVICES.filter(s => s.price && s.price >= 5000 && s.price < 15000),
  enterprise: COMPREHENSIVE_SERVICES.filter(s => s.price && s.price >= 15000)
};
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e931
