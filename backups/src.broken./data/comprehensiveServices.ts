export interface ComprehensiveService {
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
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

<<<<<<< HEAD
export const COMPREHENSIVE_SERVICES: ComprehensiveService[] = [
  // AI & Machine Learning Services
  {
    id: "ai-powered-crm",
    title: "AI-Powered Customer Relationship Management",
    description: "Intelligent CRM system that uses machine learning to predict customer behavior, automate follow-ups, and optimize sales strategies.",
    category: "AI & Machine Learning",
    subcategory: "Business Applications",
=======
// Comprehensive Micro SAAS Services, IT Services, and AI Services
export const COMPREHENSIVE_SERVICES: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-chatbot-enterprise",
    title: "Enterprise AI Chatbot Development",
    description: "Custom AI-powered chatbots for customer service, sales, and support. Integrates with CRM, knowledge bases, and existing systems. Includes training, deployment, and ongoing optimization.",
    category: "AI Services",
    subcategory: "Chatbots & Virtual Assistants",
    price: 8999,
    currency: "$",
    tags: ["AI Chatbot", "Customer Service", "CRM Integration", "Natural Language Processing"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1633412802999-5ea7c61b2107?auto=format&fit=crop&w=800&h=500"],
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 95,
    pricingTier: "Professional"
  },
  {
    id: "ai-content-generation",
    title: "AI Content Generation Suite Pro",
    description: "AI-powered content creation for blogs, social media, and marketing campaigns. Generate engaging, SEO-optimized content at scale.",
    category: "AI Services",
    subcategory: "Content Generation",
    price: 800,
    currency: "$",
    tags: ["AI", "Content Creation", "Marketing", "SEO", "Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 96,
    pricingTier: "Starter"
  },
  {
    id: "ai-business-intelligence",
    title: "AI-Powered Business Intelligence Platform",
    description: "Advanced analytics and business intelligence platform with AI-driven insights, predictive analytics, and real-time dashboards.",
    category: "AI Services",
    subcategory: "Business Intelligence",
    price: 4500,
    currency: "$",
    tags: ["AI", "Business Intelligence", "Analytics", "Predictive", "Dashboard"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 234,
    featured: true,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 98,
    pricingTier: "Enterprise"
  },
  // IT Infrastructure & Cloud Services
  {
    id: "cloud-migration-expert",
    title: "Cloud Migration & Optimization Expert",
    description: "Complete cloud migration services with cost optimization, security implementation, and performance tuning for AWS, Azure, and Google Cloud.",
    category: "IT Services",
    subcategory: "Cloud Services",
    price: 3500,
    currency: "$",
    tags: ["Cloud Migration", "AWS", "Azure", "Optimization", "Security"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.7,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "3-5 Weeks",
    aiScore: 92,
    pricingTier: "Professional"
  },
  {
    id: "cybersecurity-audit",
    title: "Complete Cybersecurity Audit & Implementation",
    description: "Comprehensive security assessment, penetration testing, and security infrastructure implementation with compliance reporting.",
    category: "IT Services",
    subcategory: "Cybersecurity",
    price: 6000,
    currency: "$",
    tags: ["Cybersecurity", "Audit", "Penetration Testing", "Compliance", "Security"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 189,
    featured: true,
    location: "Global",
    availability: "4-8 Weeks",
    aiScore: 97,
    pricingTier: "Enterprise"
  },
  {
    id: "devops-automation",
    title: "DevOps Automation & CI/CD Suite",
    description: "Complete DevOps automation with CI/CD pipelines, infrastructure as code, monitoring, and deployment automation.",
    category: "IT Services",
    subcategory: "DevOps",
    price: 2800,
    currency: "$",
    tags: ["DevOps", "CI/CD", "Automation", "Infrastructure", "Monitoring"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.8,
    availability: "4-6 Weeks",
    aiScore: 96
  },
  {
    id: "ai-content-generation-suite",
    title: "AI Content Generation Suite",
    description: "Complete content creation platform for blogs, social media, marketing copy, and technical documentation. Supports 15+ languages, SEO optimization, and brand voice consistency.",
    category: "AI Services",
    subcategory: "Content Creation",
    price: 299,
    currency: "$",
    tags: ["Content Generation", "SEO", "Multi-language", "Brand Voice"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    rating: 4.7,
    reviewCount: 89,
    location: "Global",
    availability: "Immediate",
    aiScore: 92
  },
  {
    id: "ai-data-analytics-platform",
    title: "AI-Powered Business Analytics Platform",
    description: "Advanced analytics platform with predictive modeling, automated insights, and customizable dashboards. Integrates with major data sources and provides actionable business intelligence.",
    category: "AI Services",
    subcategory: "Data Analytics",
    price: 1499,
    currency: "$",
    tags: ["Business Intelligence", "Predictive Analytics", "Data Visualization", "Automated Insights"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T09:15:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 94
  },

  // IT Infrastructure Services
  {
    id: "cloud-migration-consulting",
    title: "Cloud Migration & Optimization Consulting",
    description: "End-to-end cloud migration services for AWS, Azure, and Google Cloud. Includes assessment, planning, migration execution, and cost optimization strategies.",
    category: "IT Services",
    subcategory: "Cloud Solutions",
    price: 5999,
    currency: "$",
    tags: ["Cloud Migration", "AWS", "Azure", "Cost Optimization", "DevOps"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T11:45:00.000Z",
    rating: 4.9,
    reviewCount: 134,
    featured: true,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 94,
    pricingTier: "Professional"
  },
  // Business Process Automation
  {
    id: "workflow-automation",
    title: "Business Workflow Automation Platform",
    description: "Custom workflow automation solution to streamline business processes, reduce manual work, and improve efficiency.",
    category: "Business Solutions",
    subcategory: "Automation",
    price: 2200,
    currency: "$",
    tags: ["Workflow", "Automation", "Business Process", "Efficiency", "Productivity"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.7,
    reviewCount: 98,
    featured: true,
    location: "Global",
    availability: "2-4 Weeks",
    aiScore: 93,
    pricingTier: "Professional"
  },
  {
    id: "customer-support-ai",
    title: "AI-Powered Customer Support Automation",
    description: "Intelligent customer support system with ticket routing, automated responses, and customer satisfaction tracking.",
    category: "Business Solutions",
    subcategory: "Customer Support",
    price: 1800,
    currency: "$",
    tags: ["Customer Support", "AI", "Automation", "Ticket Management", "Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.6,
    reviewCount: 76,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 91,
    pricingTier: "Starter"
  },
  // E-commerce & Digital Marketing
  {
    id: "ecommerce-ai-optimization",
    title: "E-commerce AI Optimization Suite",
    description: "AI-powered e-commerce optimization including product recommendations, pricing optimization, and customer behavior analysis.",
    category: "E-commerce",
    subcategory: "AI Optimization",
    price: 3200,
    currency: "$",
    tags: ["E-commerce", "AI", "Optimization", "Recommendations", "Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 145,
    featured: true,
    location: "Global",
    availability: "3-5 Weeks",
    aiScore: 95,
    pricingTier: "Professional"
  },
  {
    id: "digital-marketing-automation",
    title: "Digital Marketing Automation Platform",
    description: "Comprehensive marketing automation platform with email campaigns, social media management, and lead nurturing.",
    category: "Digital Marketing",
    subcategory: "Automation",
>>>>>>> origin/chore/fix-links-and-build
    price: 1500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Predictive customer analytics",
      "Automated lead scoring",
      "Smart email campaigns",
      "Sales forecasting",
      "Customer sentiment analysis",
      "Integration with existing tools"
    ],
    benefits: [
      "Increase sales conversion by 35%",
      "Reduce manual follow-up time by 60%",
      "Improve customer retention",
      "Data-driven decision making",
      "Scalable automation"
    ],
    useCases: [
      "Sales teams",
      "Marketing departments",
      "Customer service",
      "E-commerce businesses",
      "B2B companies"
    ],
    targetAudience: [
      "Sales teams",
      "Marketing teams",
      "Customer service managers",
      "Business owners",
      "Sales managers"
    ],
    tags: ["AI", "CRM", "Sales Automation", "Customer Analytics", "Machine Learning"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$1,500 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-computing-simulation",
    title: "Quantum Computing Simulation Platform",
    description: "Advanced quantum computing simulation and optimization platform for research institutions and enterprises exploring quantum algorithms.",
    category: "AI & Machine Learning",
    subcategory: "Quantum Computing",
    price: 5000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum circuit simulator",
      "Algorithm optimization tools",
      "Performance benchmarking",
      "Multi-qubit support",
      "Cloud-based access",
      "Real-time collaboration"
    ],
    benefits: [
      "Accelerate quantum research",
      "Reduce hardware costs",
      "Faster algorithm development",
      "Collaborative development",
      "Scalable simulations",
      "Future-proof technology"
    ],
    useCases: [
      "Academic research",
      "Pharmaceutical development",
      "Financial modeling",
      "Cryptography research",
      "Material science",
      "Climate modeling"
    ],
    targetAudience: [
      "Research institutions",
      "Universities",
      "Pharmaceutical companies",
      "Financial services",
      "Government agencies",
      "Technology companies"
    ],
    tags: ["Quantum Computing", "Simulation", "Research", "Algorithm Development", "Cloud Platform"],
    estimatedDelivery: "2-4 weeks",
    supportLevel: "standard",
    marketPrice: "$5,000 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-ethics-compliance",
    title: "AI Ethics & Compliance Framework",
    description: "Comprehensive framework for ensuring ethical AI deployment, regulatory compliance, and responsible AI development across organizations.",
    category: "AI & Machine Learning",
    subcategory: "Ethics & Compliance",
    price: 8000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Ethical AI guidelines",
      "Compliance monitoring",
      "Bias detection tools",
      "Audit trails",
      "Training modules",
      "Risk assessment"
    ],
    benefits: [
      "Ensure regulatory compliance",
      "Build trust with stakeholders",
      "Reduce legal risks",
      "Improve AI transparency",
      "Ethical decision making"
    ],
    useCases: [
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Technology companies",
      "Autonomous vehicles"
    ],
    targetAudience: [
      "AI ethics officers",
      "Compliance managers",
      "Legal teams",
      "Data scientists",
      "Executives"
    ],
    tags: ["AI Ethics", "Compliance", "Regulatory", "Risk Management", "Transparency"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$8,000 - $20,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "edge-ai-platform",
    title: "Edge AI Computing Platform",
    description: "Distributed AI computing platform that brings machine learning capabilities to edge devices, IoT sensors, and mobile applications.",
    category: "AI & Machine Learning",
    subcategory: "Edge Computing",
    price: 12000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Edge device optimization",
      "Real-time inference",
      "Offline AI capabilities",
      "Device management",
      "Model compression",
      "Security protocols"
    ],
    benefits: [
      "Reduce latency",
      "Lower bandwidth costs",
      "Enhanced privacy",
      "Offline functionality",
      "Scalable deployment"
    ],
    useCases: [
      "Autonomous vehicles",
      "Smart cities",
      "Industrial IoT",
      "Mobile applications",
      "Healthcare devices"
    ],
    targetAudience: [
      "IoT companies",
      "Automotive manufacturers",
      "Smart city planners",
      "Healthcare providers",
      "Manufacturing companies"
    ],
    tags: ["Edge AI", "IoT", "Real-time", "Mobile", "Distributed Computing"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$12,000 - $30,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // NEW INNOVATIVE AI SERVICES
  {
    id: "ai-consciousness-platform",
    title: "AI Consciousness & Self-Learning Platform",
    description: "Revolutionary AI platform that develops self-awareness, continuous learning, and autonomous decision-making capabilities for advanced applications.",
    category: "AI & Machine Learning",
    subcategory: "Consciousness & Self-Learning",
    price: 25000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Self-awareness algorithms",
      "Continuous learning systems",
      "Autonomous decision making",
      "Emotional intelligence",
      "Creative problem solving",
      "Ethical reasoning"
    ],
    benefits: [
      "Unprecedented AI capabilities",
      "Reduced human intervention",
      "Innovative problem solving",
      "Adaptive learning",
      "Future-proof technology"
    ],
    useCases: [
      "Advanced robotics",
      "Autonomous systems",
      "Creative industries",
      "Research & development",
      "Space exploration"
    ],
    targetAudience: [
      "Research institutions",
      "Technology companies",
      "Government agencies",
      "Space organizations",
      "Innovation labs"
    ],
    tags: ["AI Consciousness", "Self-Learning", "Autonomous Systems", "Innovation", "Future Tech"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$25,000 - $50,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "neuromorphic-computing",
    title: "Neuromorphic Computing Infrastructure",
    description: "Brain-inspired computing systems that mimic neural networks for ultra-efficient AI processing and cognitive computing applications.",
    category: "AI & Machine Learning",
    subcategory: "Neuromorphic Computing",
    price: 18000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Brain-inspired architecture",
      "Spiking neural networks",
      "Ultra-low power consumption",
      "Real-time learning",
      "Cognitive computing",
      "Hardware acceleration"
    ],
    benefits: [
      "1000x more efficient than traditional AI",
      "Real-time learning capabilities",
      "Minimal power consumption",
      "Cognitive computing power",
      "Future of AI hardware"
    ],
    useCases: [
      "Autonomous vehicles",
      "Robotics",
      "IoT devices",
      "Healthcare monitoring",
      "Smart cities"
    ],
    targetAudience: [
      "Technology companies",
      "Automotive industry",
      "Healthcare providers",
      "Smart city planners",
      "Research institutions"
    ],
    tags: ["Neuromorphic", "Brain-Inspired", "Cognitive Computing", "Efficiency", "Future Tech"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$18,000 - $35,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-content-factory-pro",
    title: "AI Content Factory Pro",
    description: "Advanced AI-powered content creation platform that generates high-quality, engaging content across all media types with human-like creativity.",
    category: "AI & Machine Learning",
    subcategory: "Content Creation",
    price: 800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-format content generation",
      "Brand voice consistency",
      "SEO optimization",
      "Multi-language support",
      "Content scheduling",
      "Performance analytics"
    ],
    benefits: [
      "10x faster content creation",
      "Consistent brand messaging",
      "SEO-optimized content",
      "Multi-language reach",
      "Cost-effective marketing"
    ],
    useCases: [
      "Marketing agencies",
      "E-commerce businesses",
      "Content creators",
      "Social media managers",
      "Bloggers"
    ],
    targetAudience: [
      "Marketing professionals",
      "Content creators",
      "Business owners",
      "Agencies",
      "Entrepreneurs"
    ],
    tags: ["Content Creation", "AI Writing", "Marketing", "SEO", "Automation"],
    estimatedDelivery: "1-2 weeks",
    supportLevel: "standard",
    marketPrice: "$800 - $2,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Cybersecurity Services
  {
    id: "cyber-threat-intelligence",
    title: "Cyber Threat Intelligence Platform",
    description: "Real-time threat detection and response platform that provides comprehensive cybersecurity intelligence and automated incident response.",
    category: "Cybersecurity",
    subcategory: "Threat Intelligence",
    price: 10000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time threat monitoring",
      "Automated incident response",
      "Threat hunting tools",
      "Vulnerability assessment",
      "Security analytics",
      "Compliance reporting"
    ],
    benefits: [
      "Proactive threat detection",
      "Reduced response time",
      "Compliance adherence",
      "Cost savings",
      "Enhanced security posture"
    ],
    useCases: [
      "Security operations centers",
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Enterprise networks"
    ],
    targetAudience: [
      "CISOs",
      "Security analysts",
      "IT managers",
      "Compliance officers",
      "Security teams"
    ],
    tags: ["Cybersecurity", "Threat Intelligence", "Incident Response", "Compliance", "Security Analytics"],
    estimatedDelivery: "3-5 weeks",
    supportLevel: "premium",
    marketPrice: "$10,000 - $25,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "zero-trust-security",
    title: "Zero Trust Security Architecture",
    description: "Comprehensive zero trust security implementation that verifies every user, device, and network request before granting access.",
    category: "Cybersecurity",
    subcategory: "Access Control",
    price: 25000,
    currency: "$",
    pricingModel: "project",
    features: [
      "Identity verification",
      "Device trust scoring",
      "Network segmentation",
      "Continuous monitoring",
      "Policy enforcement",
      "Audit logging"
    ],
    benefits: [
      "Enhanced security",
      "Reduced attack surface",
      "Compliance achievement",
      "Improved visibility",
      "Scalable security"
    ],
    useCases: [
      "Enterprise networks",
      "Cloud environments",
      "Critical infrastructure",
      "Financial services",
      "Healthcare systems"
    ],
    targetAudience: [
      "Enterprise security teams",
      "Cloud architects",
      "Compliance officers",
      "IT directors",
      "Security consultants"
    ],
    tags: ["Zero Trust", "Security Architecture", "Access Control", "Compliance", "Enterprise Security"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$25,000 - $100,000/project",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // NEW ADVANCED CYBERSECURITY SERVICES
  {
    id: "quantum-cryptography",
    title: "Quantum Cryptography & Post-Quantum Security",
    description: "Next-generation cryptographic solutions using quantum mechanics to provide unbreakable encryption and future-proof security.",
    category: "Cybersecurity",
    subcategory: "Quantum Security",
    price: 15000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum key distribution",
      "Post-quantum algorithms",
      "Quantum-resistant encryption",
      "Secure communication channels",
      "Quantum random number generation",
      "Future-proof security"
    ],
    benefits: [
      "Unbreakable encryption",
      "Future-proof security",
      "Quantum advantage",
      "Regulatory compliance",
      "Competitive advantage"
    ],
    useCases: [
      "Government communications",
      "Financial transactions",
      "Healthcare data",
      "Military applications",
      "Critical infrastructure"
    ],
    targetAudience: [
      "Government agencies",
      "Financial institutions",
      "Healthcare organizations",
      "Defense contractors",
      "Technology companies"
    ],
    tags: ["Quantum Cryptography", "Post-Quantum Security", "Encryption", "Future-Proof", "Government"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$15,000 - $40,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-threat-hunting",
    title: "AI-Powered Threat Hunting & Response",
    description: "Intelligent cybersecurity platform that uses AI to proactively hunt for threats, predict attacks, and automate response actions.",
    category: "Cybersecurity",
    subcategory: "AI Security",
    price: 12000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI threat detection",
      "Predictive analytics",
      "Automated response",
      "Behavioral analysis",
      "Threat intelligence",
      "Incident automation"
    ],
    benefits: [
      "Proactive threat prevention",
      "Reduced false positives",
      "Faster incident response",
      "24/7 monitoring",
      "Cost-effective security"
    ],
    useCases: [
      "Security operations centers",
      "Large enterprises",
      "Financial services",
      "Healthcare organizations",
      "Government agencies"
    ],
    targetAudience: [
      "Security analysts",
      "CISOs",
      "IT security teams",
      "Managed security providers",
      "Security consultants"
    ],
    tags: ["AI Security", "Threat Hunting", "Automated Response", "Predictive Analytics", "SOC"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$12,000 - $30,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // NEW MICRO SAAS SOLUTIONS
  {
    id: "quantum-crm-intelligence",
    title: "Quantum CRM Intelligence Suite",
    description: "Revolutionary CRM platform that leverages quantum computing principles for ultra-fast customer insights and predictive analytics.",
    category: "Micro SAAS Solutions",
    subcategory: "Customer Intelligence",
    price: 1200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum-powered analytics",
      "Predictive customer behavior",
      "Real-time insights",
      "AI-driven recommendations",
      "Multi-channel integration",
      "Advanced reporting"
    ],
    benefits: [
      "100x faster data processing",
      "Accurate predictions",
      "Real-time insights",
      "Competitive advantage",
      "Scalable growth"
    ],
    useCases: [
      "Sales teams",
      "Marketing departments",
      "Customer service",
      "E-commerce",
      "B2B companies"
    ],
    targetAudience: [
      "Sales managers",
      "Marketing professionals",
      "Business owners",
      "Customer success teams",
      "Growth hackers"
    ],
    tags: ["Quantum CRM", "Customer Intelligence", "Predictive Analytics", "Sales", "Marketing"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$1,200 - $3,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-hr-platform",
    title: "AI Autonomous HR Platform",
    description: "Intelligent human resources platform that automates recruitment, employee management, and organizational development with AI.",
    category: "Micro SAAS Solutions",
    subcategory: "Human Resources",
    price: 900,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI recruitment automation",
      "Employee performance tracking",
      "Skills gap analysis",
      "Automated onboarding",
      "Compliance management",
      "Predictive analytics"
    ],
    benefits: [
      "Reduce hiring time by 70%",
      "Improve candidate quality",
      "Automated compliance",
      "Data-driven decisions",
      "Cost savings"
    ],
    useCases: [
      "HR departments",
      "Recruitment agencies",
      "Small businesses",
      "Enterprise companies",
      "Startups"
    ],
    targetAudience: [
      "HR professionals",
      "Recruiters",
      "Business owners",
      "HR managers",
      "Talent acquisition teams"
    ],
    tags: ["AI HR", "Recruitment", "Employee Management", "Automation", "Compliance"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "standard",
    marketPrice: "$900 - $2,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-financial-intelligence",
    title: "Quantum Financial Intelligence Platform",
    description: "Advanced financial analytics platform using quantum computing for real-time market analysis, risk assessment, and investment optimization.",
    category: "Micro SAAS Solutions",
    subcategory: "Financial Technology",
    price: 2000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum market analysis",
      "Real-time risk assessment",
      "Portfolio optimization",
      "Predictive modeling",
      "Regulatory compliance",
      "Multi-asset support"
    ],
    benefits: [
      "Superior market insights",
      "Real-time risk management",
      "Optimized portfolios",
      "Regulatory compliance",
      "Competitive advantage"
    ],
    useCases: [
      "Investment firms",
      "Banks",
      "Hedge funds",
      "Financial advisors",
      "Trading desks"
    ],
    targetAudience: [
      "Portfolio managers",
      "Financial analysts",
      "Risk managers",
      "Investment advisors",
      "Traders"
    ],
    tags: ["Quantum Finance", "Financial Analytics", "Risk Management", "Investment", "Trading"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$2,000 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-education-platform",
    title: "AI Autonomous Education Platform",
    description: "Revolutionary learning platform that personalizes education using AI, adapts to individual learning styles, and provides real-time feedback.",
    category: "Micro SAAS Solutions",
    subcategory: "Education Technology",
    price: 600,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Personalized learning paths",
      "AI tutoring systems",
      "Adaptive assessments",
      "Progress tracking",
      "Multi-language support",
      "Interactive content"
    ],
    benefits: [
      "Personalized learning experience",
      "Improved student outcomes",
      "Reduced learning time",
      "Scalable education",
      "Cost-effective training"
    ],
    useCases: [
      "Educational institutions",
      "Corporate training",
      "Online learning",
      "Skill development",
      "Language learning"
    ],
    targetAudience: [
      "Educational institutions",
      "Corporate trainers",
      "Online educators",
      "Students",
      "Learning professionals"
    ],
    tags: ["AI Education", "Personalized Learning", "EdTech", "Training", "Adaptive Learning"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "standard",
    marketPrice: "$600 - $1,800/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // NEW SPACE TECHNOLOGY SERVICES
  {
    id: "space-tech-satellite",
    title: "Space Technology & Satellite Solutions",
    description: "Advanced space technology solutions including satellite deployment, space data analytics, and orbital infrastructure management.",
    category: "Space Technology",
    subcategory: "Satellite Solutions",
    price: 50000,
    currency: "$",
    pricingModel: "project",
    features: [
      "Satellite design & deployment",
      "Orbital infrastructure",
      "Space data analytics",
      "Ground station management",
      "Space traffic control",
      "Satellite communications"
    ],
    benefits: [
      "Access to space technology",
      "Global connectivity",
      "Advanced data collection",
      "Competitive advantage",
      "Future-ready infrastructure"
    ],
    useCases: [
      "Telecommunications",
      "Earth observation",
      "Navigation systems",
      "Scientific research",
      "Defense applications"
    ],
    targetAudience: [
      "Telecom companies",
      "Government agencies",
      "Research institutions",
      "Defense contractors",
      "Space companies"
    ],
    tags: ["Space Technology", "Satellites", "Orbital Infrastructure", "Space Data", "Future Tech"],
    estimatedDelivery: "12-18 months",
    supportLevel: "enterprise",
    marketPrice: "$50,000 - $500,000/project",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-internet-backbone",
    title: "Quantum Internet Backbone Infrastructure",
    description: "Next-generation quantum internet infrastructure providing ultra-secure, high-speed global communications with quantum entanglement.",
    category: "Space Technology",
    subcategory: "Quantum Communications",
    price: 75000,
    currency: "$",
    pricingModel: "project",
    features: [
      "Quantum entanglement networks",
      "Ultra-secure communications",
      "Global quantum infrastructure",
      "Quantum repeaters",
      "Quantum key distribution",
      "Future-proof technology"
    ],
    benefits: [
      "Unhackable communications",
      "Instant global connectivity",
      "Quantum advantage",
      "Future-proof infrastructure",
      "Competitive edge"
    ],
    useCases: [
      "Government communications",
      "Financial networks",
      "Healthcare systems",
      "Defense applications",
      "Research institutions"
    ],
    targetAudience: [
      "Government agencies",
      "Financial institutions",
      "Defense contractors",
      "Technology companies",
      "Research organizations"
    ],
    tags: ["Quantum Internet", "Quantum Communications", "Infrastructure", "Security", "Future Tech"],
    estimatedDelivery: "18-24 months",
    supportLevel: "enterprise",
    marketPrice: "$75,000 - $1,000,000/project",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // NEW HEALTHCARE AI SOLUTIONS
  {
    id: "healthcare-ai-diagnostics",
    title: "AI Healthcare Diagnostics Pro",
    description: "Advanced AI-powered healthcare diagnostic platform that provides accurate disease detection, treatment recommendations, and patient monitoring.",
    category: "Industry Solutions",
    subcategory: "Healthcare AI",
    price: 15000,
    currency: "$",
<<<<<<< HEAD
    pricingModel: "monthly",
    features: [
      "AI disease detection",
      "Treatment recommendations",
      "Patient monitoring",
      "Medical image analysis",
      "Predictive diagnostics",
      "HIPAA compliance"
    ],
    benefits: [
      "Improved diagnostic accuracy",
      "Faster treatment decisions",
      "Reduced healthcare costs",
      "Better patient outcomes",
      "24/7 monitoring"
    ],
    useCases: [
      "Hospitals",
      "Clinics",
      "Diagnostic centers",
      "Telemedicine",
      "Research institutions"
    ],
    targetAudience: [
      "Healthcare providers",
      "Medical professionals",
      "Hospital administrators",
      "Research institutions",
      "Health tech companies"
    ],
    tags: ["Healthcare AI", "Medical Diagnostics", "Patient Monitoring", "HIPAA", "Medical Imaging"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$15,000 - $40,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
=======
    tags: ["Healthcare", "AI", "Diagnostics", "Medical", "Image Analysis"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    location: "Global",
    availability: "8-12 Weeks",
    aiScore: 99,
    pricingTier: "Enterprise"
  },
  {
    id: "fintech-compliance-security",
    title: "FinTech Compliance & Security Suite",
    description: "Complete financial technology compliance solution with security protocols, regulatory reporting, and audit trails.",
    category: "FinTech",
    subcategory: "Compliance & Security",
    price: 7200,
    currency: "$",
    tags: ["FinTech", "Compliance", "Security", "Regulatory", "Audit"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "6-10 Weeks",
    aiScore: 96,
    pricingTier: "Enterprise"
  },
  // IoT & Smart Solutions
  {
    id: "iot-management-platform",
    title: "Enterprise IoT Management Platform",
    description: "Comprehensive IoT platform for device management, data collection, and real-time monitoring across multiple locations.",
    category: "IoT Solutions",
    subcategory: "Management Platform",
    price: 5500,
    currency: "$",
    tags: ["IoT", "Device Management", "Monitoring", "Real-time", "Enterprise"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.7,
    reviewCount: 123,
    featured: true,
    location: "Global",
    availability: "5-8 Weeks",
    aiScore: 94,
    pricingTier: "Professional"
  },
  {
    id: "smart-building-automation",
    title: "Smart Building Automation System",
    description: "Intelligent building management system with energy optimization, security monitoring, and automated controls.",
    category: "IoT Solutions",
    subcategory: "Building Automation",
    price: 4200,
    currency: "$",
    tags: ["Smart Building", "Automation", "Energy", "Security", "IoT"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.6,
    reviewCount: 87,
    featured: true,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 93,
    pricingTier: "Professional"
  },
  // Education & Training Solutions
  {
    id: "ai-learning-management",
    title: "AI-Powered Learning Management System",
    description: "Intelligent LMS with personalized learning paths, adaptive assessments, and progress tracking for educational institutions.",
    category: "Education",
    subcategory: "Learning Management",
    price: 3800,
    currency: "$",
    tags: ["Education", "AI", "LMS", "Personalized Learning", "Assessment"],
    aiScore: 91
  },
  {
    id: "cybersecurity-audit-compliance",
    title: "Cybersecurity Audit & Compliance",
    description: "Comprehensive security assessments, penetration testing, and compliance audits for SOC 2, ISO 27001, GDPR, and industry-specific regulations. Includes remediation planning and ongoing monitoring.",
    category: "IT Services",
    subcategory: "Cybersecurity",
    price: 7999,
    currency: "$",
    tags: ["Cybersecurity", "Compliance", "Penetration Testing", "SOC 2", "GDPR"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
>>>>>>> origin/chore/fix-links-and-build
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "manufacturing-ai-optimization",
    title: "Manufacturing AI Optimization Suite",
    description: "Comprehensive AI platform for manufacturing optimization, predictive maintenance, quality control, and supply chain management.",
    category: "Industry Solutions",
    subcategory: "Manufacturing AI",
    price: 12000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Predictive maintenance",
      "Quality control automation",
      "Supply chain optimization",
      "Production planning",
      "Energy optimization",
      "Real-time monitoring"
    ],
    benefits: [
      "Reduce downtime by 40%",
      "Improve quality by 25%",
      "Optimize energy usage",
      "Increase productivity",
      "Cost savings"
    ],
    useCases: [
      "Manufacturing plants",
      "Industrial facilities",
      "Production lines",
      "Quality control",
      "Supply chain management"
    ],
    targetAudience: [
      "Manufacturing managers",
      "Operations directors",
      "Quality managers",
      "Supply chain professionals",
      "Industrial engineers"
    ],
    tags: ["Manufacturing AI", "Predictive Maintenance", "Quality Control", "Supply Chain", "Industry 4.0"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$12,000 - $30,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // NEW EMERGING TECHNOLOGY SERVICES
  {
    id: "holographic-data-center",
    title: "Holographic Data Center Platform",
    description: "Revolutionary holographic data storage and processing platform that provides massive storage capacity and ultra-fast data access.",
    category: "Emerging Technology",
    subcategory: "Holographic Computing",
    price: 30000,
    currency: "$",
<<<<<<< HEAD
    pricingModel: "monthly",
    features: [
      "Holographic data storage",
      "3D data visualization",
      "Massive storage capacity",
      "Ultra-fast access",
      "Energy efficient",
      "Future-proof technology"
    ],
    benefits: [
      "1000x more storage capacity",
      "Faster data access",
      "Energy efficiency",
      "3D data visualization",
      "Future-ready infrastructure"
    ],
    useCases: [
      "Big data centers",
      "Research institutions",
      "Media companies",
      "Scientific computing",
      "Government agencies"
    ],
    targetAudience: [
      "Data center operators",
      "Research institutions",
      "Technology companies",
      "Government agencies",
      "Media companies"
    ],
    tags: ["Holographic Computing", "Data Storage", "3D Visualization", "Big Data", "Future Tech"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$30,000 - $80,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
=======
    tags: ["Inventory Management", "Barcode Scanning", "Automated Reordering", "Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "4-7 Weeks",
    aiScore: 95,
    pricingTier: "Professional"
>>>>>>> origin/chore/fix-links-and-build
  },
  {
    id: "bio-computing-infrastructure",
    title: "Bio-Computing Infrastructure Platform",
    description: "Cutting-edge biological computing systems that use DNA, proteins, and living cells for ultra-efficient information processing and storage.",
    category: "Emerging Technology",
    subcategory: "Bio-Computing",
    price: 40000,
    currency: "$",
<<<<<<< HEAD
    pricingModel: "monthly",
    features: [
      "DNA-based computing",
      "Protein processing",
      "Cellular computing",
      "Biological algorithms",
      "Bio-storage systems",
      "Living technology"
    ],
    benefits: [
      "Unprecedented efficiency",
      "Biological processing power",
      "Sustainable technology",
      "Revolutionary computing",
      "Future of technology"
    ],
    useCases: [
      "Scientific research",
      "Drug discovery",
      "Climate modeling",
      "Complex simulations",
      "Biological research"
    ],
    targetAudience: [
      "Research institutions",
      "Pharmaceutical companies",
      "Biotech firms",
      "Universities",
      "Government labs"
    ],
    tags: ["Bio-Computing", "DNA Computing", "Biological Technology", "Research", "Future Tech"],
    estimatedDelivery: "10-14 weeks",
    supportLevel: "enterprise",
    marketPrice: "$40,000 - $100,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
=======
    tags: ["VR", "AR", "Training", "Simulation", "Immersive"],
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T10:30:00.000Z",
    rating: 4.6,
    reviewCount: 45,
    location: "Global",
    availability: "Immediate",
    aiScore: 87
  },
  {
    id: "project-management-tool",
    title: "AI-Powered Project Management Platform",
    description: "Intelligent project management tool with task automation, resource optimization, risk assessment, and predictive analytics. Integrates with popular tools like Slack, Jira, and Microsoft Teams.",
    category: "Micro SAAS",
    subcategory: "Project Management",
    price: 299,
    currency: "$",
    tags: ["Project Management", "Task Automation", "Resource Optimization", "Risk Assessment"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T15:45:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 93
  },
  {
    id: "customer-support-automation",
    title: "Customer Support Automation Suite",
    description: "Automated customer support system with ticket routing, knowledge base management, chatbot integration, and performance analytics. Reduces response time and improves customer satisfaction.",
    category: "Micro SAAS",
    subcategory: "Customer Support",
    price: 399,
    currency: "$",
    tags: ["Customer Support", "Ticket Routing", "Knowledge Base", "Chatbot Integration"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T12:00:00.000Z",
    rating: 4.7,
    reviewCount: 89,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 90
>>>>>>> origin/chore/fix-links-and-build
  },

  // NEW AUTONOMOUS SYSTEMS
  {
    id: "ai-autonomous-legal-research",
    title: "AI Autonomous Legal Research Assistant",
    description: "Intelligent legal research platform that autonomously analyzes case law, statutes, and legal documents to provide comprehensive legal insights.",
    category: "AI & Autonomous Systems",
    subcategory: "Legal Technology",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Autonomous legal research",
      "Case law analysis",
      "Statute interpretation",
      "Legal document review",
      "Precedent identification",
      "Legal insights generation"
    ],
    benefits: [
      "Reduce research time by 80%",
      "Comprehensive legal analysis",
      "Accurate precedent identification",
      "Cost-effective research",
      "24/7 availability"
    ],
    useCases: [
      "Law firms",
      "Legal departments",
      "Courts",
      "Legal researchers",
      "Law students"
    ],
    targetAudience: [
      "Lawyers",
      "Legal researchers",
      "Law firms",
      "Corporate legal teams",
      "Legal professionals"
    ],
    tags: ["AI Legal", "Legal Research", "Case Law", "Legal Technology", "Automation"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$1,800 - $4,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
<<<<<<< HEAD
      website: "https://ziontechgroup.com"
    }
=======
    },
    images: ["https://images.unsplash.com/photo-1624355834900-99cd2071585b?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T09:30:00.000Z",
    images: ["https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 78,
    featured: true,
    location: "Global",
    availability: "6-10 Weeks",
    aiScore: 97,
    pricingTier: "Enterprise"
  }
];

export const SERVICE_CATEGORIES = [
  "AI Services",
  "IT Services", 
  "Business Solutions",
  "E-commerce",
  "Digital Marketing",
  "Healthcare",
  "FinTech",
  "IoT Solutions",
  "Education"
];

export const SERVICE_SUBCATEGORIES = {
  "AI Services": ["Chatbots & Virtual Assistants", "Content Generation", "Business Intelligence", "Computer Vision", "Natural Language Processing"],
  "IT Services": ["Cloud Services", "Cybersecurity", "DevOps", "Infrastructure", "Data Management"],
  "Business Solutions": ["Automation", "Customer Support", "Workflow Management", "Analytics", "Integration"],
  "E-commerce": ["AI Optimization", "Platform Development", "Payment Systems", "Inventory Management", "Customer Experience"],
  "Digital Marketing": ["Automation", "SEO", "Social Media", "Content Strategy", "Analytics"],
  "Healthcare": ["AI Diagnostics", "Patient Management", "Telemedicine", "Medical Imaging", "Clinical Support"],
  "FinTech": ["Compliance & Security", "Payment Processing", "Risk Management", "Trading Platforms", "Digital Banking"],
  "IoT Solutions": ["Management Platform", "Building Automation", "Industrial IoT", "Smart Cities", "Connected Devices"],
  "Education": ["Learning Management", "VR/AR Training", "Assessment Tools", "Student Analytics", "Content Creation"]
};

export const PRICING_TIERS = {
  "Starter": { min: 500, max: 2000, label: "Starter ($500 - $2,000)" },
  "Professional": { min: 2000, max: 5000, label: "Professional ($2,000 - $5,000)" },
  "Enterprise": { min: 5000, max: 10000, label: "Enterprise ($5,000 - $10,000)" }
};
    availability: "1-2 Weeks",
    aiScore: 95
>>>>>>> origin/chore/fix-links-and-build
  },
  {
    id: "ai-autonomous-financial-risk",
    title: "AI Autonomous Financial Risk Manager",
    description: "Intelligent financial risk management platform that autonomously monitors, analyzes, and manages financial risks in real-time.",
    category: "AI & Autonomous Systems",
    subcategory: "Financial Risk Management",
    price: 2500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time risk monitoring",
      "Autonomous risk assessment",
      "Portfolio optimization",
      "Regulatory compliance",
      "Stress testing",
      "Risk reporting"
    ],
    benefits: [
      "24/7 risk monitoring",
      "Proactive risk management",
      "Regulatory compliance",
      "Optimized portfolios",
      "Reduced losses"
    ],
    useCases: [
      "Investment firms",
      "Banks",
      "Hedge funds",
      "Insurance companies",
      "Financial advisors"
    ],
    targetAudience: [
      "Risk managers",
      "Portfolio managers",
      "Financial analysts",
      "Compliance officers",
      "Investment professionals"
    ],
    tags: ["AI Risk Management", "Financial Risk", "Portfolio Management", "Compliance", "Automation"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$2,500 - $6,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-autonomous-supply-chain",
    title: "AI Autonomous Supply Chain Optimizer",
    description: "Intelligent supply chain platform that autonomously optimizes logistics, inventory, and distribution networks for maximum efficiency.",
    category: "AI & Autonomous Systems",
    subcategory: "Supply Chain Management",
    price: 2000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Autonomous optimization",
      "Real-time monitoring",
      "Predictive analytics",
      "Inventory management",
      "Route optimization",
      "Demand forecasting"
    ],
    benefits: [
      "Reduce costs by 30%",
      "Improve efficiency",
      "Real-time visibility",
      "Predictive insights",
      "Automated optimization"
    ],
    useCases: [
      "Manufacturing",
      "Retail",
      "Logistics",
      "E-commerce",
      "Distribution"
    ],
    targetAudience: [
      "Supply chain managers",
      "Logistics professionals",
      "Operations directors",
      "Business owners",
      "E-commerce companies"
    ],
    tags: ["AI Supply Chain", "Logistics", "Inventory Management", "Optimization", "Automation"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$2,000 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-autonomous-cybersecurity-sentinel",
    title: "AI Autonomous Cybersecurity Sentinel",
    description: "Intelligent cybersecurity platform that autonomously protects networks, detects threats, and responds to security incidents without human intervention.",
    category: "AI & Autonomous Systems",
    subcategory: "Autonomous Security",
    price: 3000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Autonomous threat detection",
      "Self-healing networks",
      "Intelligent response",
      "Behavioral analysis",
      "Threat hunting",
      "Incident automation"
    ],
    benefits: [
      "24/7 autonomous protection",
      "Zero human intervention",
      "Instant threat response",
      "Self-healing capabilities",
      "Cost-effective security"
    ],
    useCases: [
      "Enterprise networks",
      "Cloud environments",
      "Critical infrastructure",
      "Financial services",
      "Healthcare systems"
    ],
    targetAudience: [
      "Security teams",
      "CISOs",
      "IT managers",
      "Security consultants",
      "Managed security providers"
    ],
    tags: ["Autonomous Security", "AI Cybersecurity", "Self-Healing", "Threat Response", "Zero Trust"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$3,000 - $8,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // TRADITIONAL IT SERVICES
  {
    id: "network-infrastructure-management",
    title: "Network Infrastructure Management & Optimization",
    description: "Comprehensive network infrastructure management including design, implementation, monitoring, and optimization for enterprise networks.",
    category: "IT Support & Consulting",
    subcategory: "Network Management",
    price: 2500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Network design and architecture",
      "24/7 network monitoring",
      "Performance optimization",
      "Security implementation",
      "Disaster recovery planning",
      "Bandwidth management",
      "VPN setup and management",
      "Network documentation"
    ],
    benefits: [
      "Improved network reliability",
      "Enhanced security posture",
      "Reduced downtime",
      "Better performance",
      "Cost optimization",
      "Scalable infrastructure"
    ],
    useCases: [
      "Enterprise networks",
      "Multi-site organizations",
      "Data centers",
      "Cloud connectivity",
      "Remote work infrastructure"
    ],
    targetAudience: [
      "IT managers",
      "Network administrators",
      "System administrators",
      "Business owners",
      "Operations directors"
    ],
    tags: ["Network Management", "Infrastructure", "Monitoring", "Security", "Optimization"],
    estimatedDelivery: "2-4 weeks",
    supportLevel: "premium",
    marketPrice: "$2,500 - $6,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "system-administration-support",
    title: "System Administration & Technical Support",
    description: "Professional system administration services including server management, user support, and technical infrastructure maintenance.",
    category: "IT Support & Consulting",
    subcategory: "System Administration",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Server management and maintenance",
      "User account management",
      "Backup and recovery",
      "System updates and patches",
      "Performance monitoring",
      "Technical support desk",
      "Documentation and training",
      "Security hardening"
    ],
    benefits: [
      "Reduced system downtime",
      "Improved user productivity",
      "Enhanced security",
      "Cost-effective IT management",
      "Professional expertise",
      "24/7 support availability"
    ],
    useCases: [
      "Windows/Linux servers",
      "Active Directory management",
      "File and print services",
      "Email systems",
      "Database administration"
    ],
    targetAudience: [
      "Small to medium businesses",
      "Educational institutions",
      "Healthcare organizations",
      "Non-profit organizations",
      "Professional services firms"
    ],
    tags: ["System Administration", "Technical Support", "Server Management", "User Support", "Infrastructure"],
    estimatedDelivery: "1-2 weeks",
    supportLevel: "standard",
    marketPrice: "$1,800 - $4,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "help-desk-support",
    title: "Professional Help Desk & IT Support",
    description: "Comprehensive help desk services providing technical support, troubleshooting, and user assistance for all IT-related issues.",
    category: "IT Support & Consulting",
    subcategory: "Help Desk Support",
    price: 1200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "24/7 help desk support",
      "Multi-channel support (phone, email, chat)",
      "Ticket management system",
      "Remote desktop support",
      "Software installation assistance",
      "Hardware troubleshooting",
      "User training and guidance",
      "Knowledge base management"
    ],
    benefits: [
      "Faster issue resolution",
      "Improved user satisfaction",
      "Reduced IT workload",
      "Consistent support quality",
      "Better user productivity",
      "Cost-effective support"
    ],
    useCases: [
      "Software issues",
      "Hardware problems",
      "Network connectivity",
      "Account access issues",
      "General IT questions"
    ],
    targetAudience: [
      "Businesses of all sizes",
      "Educational institutions",
      "Healthcare facilities",
      "Government agencies",
      "Non-profit organizations"
    ],
    tags: ["Help Desk", "IT Support", "Technical Support", "User Assistance", "Troubleshooting"],
    estimatedDelivery: "1 week",
    supportLevel: "standard",
    marketPrice: "$1,200 - $3,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "data-backup-recovery",
    title: "Data Backup & Disaster Recovery Solutions",
    description: "Comprehensive data protection services including automated backups, disaster recovery planning, and business continuity solutions.",
    category: "IT Support & Consulting",
    subcategory: "Data Protection",
    price: 1500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated backup systems",
      "Cloud and local backup",
      "Disaster recovery planning",
      "Business continuity strategies",
      "Data encryption",
      "Backup testing and validation",
      "Recovery time objectives",
      "Compliance documentation"
    ],
    benefits: [
      "Data protection and security",
      "Business continuity assurance",
      "Compliance with regulations",
      "Reduced risk of data loss",
      "Fast recovery capabilities",
      "Peace of mind"
    ],
    useCases: [
      "Critical business data",
      "Customer information",
      "Financial records",
      "Legal documents",
      "Intellectual property"
    ],
    targetAudience: [
      "Financial services",
      "Healthcare organizations",
      "Legal firms",
      "Manufacturing companies",
      "Professional services"
    ],
    tags: ["Data Backup", "Disaster Recovery", "Business Continuity", "Data Protection", "Compliance"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$1,500 - $4,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "it-consulting-strategy",
    title: "IT Strategy & Digital Transformation Consulting",
    description: "Strategic IT consulting services to help organizations plan, implement, and optimize their technology infrastructure and digital transformation initiatives.",
    category: "IT Support & Consulting",
    subcategory: "Strategic Consulting",
    price: 3000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Technology assessment and audit",
      "Digital transformation roadmap",
      "IT strategy development",
      "Technology vendor selection",
      "Implementation planning",
      "Change management",
      "ROI analysis",
      "Technology governance"
    ],
    benefits: [
      "Optimized technology investments",
      "Improved operational efficiency",
      "Competitive advantage",
      "Risk reduction",
      "Better decision making",
      "Long-term cost savings"
    ],
    useCases: [
      "Technology modernization",
      "Digital transformation",
      "IT infrastructure planning",
      "Technology consolidation",
      "Compliance and security"
    ],
    targetAudience: [
      "C-level executives",
      "IT directors",
      "Business owners",
      "Operations managers",
      "Strategic planners"
    ],
    tags: ["IT Strategy", "Digital Transformation", "Technology Consulting", "Strategic Planning", "Change Management"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$3,000 - $8,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "hardware-procurement-support",
    title: "Hardware Procurement & IT Asset Management",
    description: "Comprehensive hardware procurement services including vendor management, asset tracking, and lifecycle management for IT equipment.",
    category: "IT Support & Consulting",
    subcategory: "Hardware Management",
    price: 1000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Hardware needs assessment",
      "Vendor evaluation and selection",
      "Procurement management",
      "Asset tracking and inventory",
      "Warranty management",
      "Lifecycle planning",
      "Disposal and recycling",
      "Cost optimization"
    ],
    benefits: [
      "Cost-effective procurement",
      "Quality equipment selection",
      "Better vendor relationships",
      "Asset visibility and control",
      "Reduced waste",
      "Compliance with policies"
    ],
    useCases: [
      "Computer workstations",
      "Servers and storage",
      "Networking equipment",
      "Mobile devices",
      "Peripheral equipment"
    ],
    targetAudience: [
      "IT managers",
      "Procurement teams",
      "Facility managers",
      "Business owners",
      "Operations directors"
    ],
    tags: ["Hardware Procurement", "Asset Management", "Vendor Management", "Inventory Control", "Lifecycle Management"],
    estimatedDelivery: "1-2 weeks",
    supportLevel: "standard",
    marketPrice: "$1,000 - $2,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export const SERVICE_CATEGORIES = [
<<<<<<< HEAD
  "AI & Machine Learning",
  "Cybersecurity", 
  "Cloud & Infrastructure",
  "Data & Analytics",
  "Digital Transformation",
  "Web & Mobile Development",
  "IT Support & Consulting",
  "Blockchain & Web3",
  "AI & Autonomous Systems"
];
=======
  {
    id: "ai-services",
    name: "AI Services",
    description: "Advanced artificial intelligence and machine learning solutions",
    icon: "🤖",
    color: "from-purple-500 to-indigo-600",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "AI Services")
  },
  {
    id: "it-services",
    name: "IT Services",
    description: "Comprehensive IT infrastructure and consulting services",
    icon: "💻",
    color: "from-cyan-500 to-blue-600",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "IT Services")
  },
  {
    id: "micro-saas",
    name: "Micro SAAS",
    description: "Specialized software-as-a-service solutions for business needs",
    icon: "🚀",
    color: "from-emerald-500 to-green-600",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Micro SAAS")
  }
];

// Pricing Tiers for different service levels
export const PRICING_TIERS = [
  {
    name: "Starter",
    price: "$99",
    period: "month",
    description: "Perfect for small businesses and startups",
    features: [
      "Basic features and functionality",
      "Email support",
      "Standard integrations",
      "Up to 5 users"
    ]
  },
  {
    name: "Professional",
    price: "$299",
    period: "month",
    description: "Ideal for growing businesses",
    features: [
      "Advanced features and analytics",
      "Priority support",
      "Advanced integrations",
      "Up to 25 users",
      "Custom reporting"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "year",
    description: "Tailored solutions for large organizations",
    features: [
      "Full customization",
      "Dedicated support",
      "Custom integrations",
      "Unlimited users",
      "White-label options",
      "SLA guarantees"
    ]
  }
];

// Contact Information
export const CONTACT_INFO = {
  mobile: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com",
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
  responseTime: "24-48 hours for initial response"
};
>>>>>>> origin/chore/fix-links-and-build
