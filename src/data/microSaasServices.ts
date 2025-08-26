export interface MicroSaasService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
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

export const MICRO_SAAS_SERVICES: MicroSaasService[] = [
  // AI & Machine Learning Services
  {
    id: "ai-chatbot-builder",
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
    id: "ai-content-generator",
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
      "SEO-optimized content",
      "Consistent brand voice",
      "Reduced content costs",
      "Improved engagement rates"
    ],
    targetAudience: ["Content creators", "Marketing teams", "Agencies", "E-commerce"],
    marketPrice: "$79-199/month",
    website: "https://ziontechgroup.com/ai-content-generator",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["Content Generation", "AI Writing", "SEO", "Marketing"],
    aiScore: 92,
    rating: 4.7,
    reviewCount: 234,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z"
  },
  {
    id: "ai-data-analytics",
    title: "AI-Powered Business Intelligence",
    description: "Intelligent data analytics platform that transforms raw data into actionable insights. Features predictive analytics, automated reporting, and real-time dashboards.",
    category: "AI Services",
    subcategory: "Data Analytics",
    price: 149,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time data processing",
      "Predictive analytics",
      "Automated reporting",
      "Custom dashboards",
      "Data visualization",
      "API integrations",
      "Mobile app",
      "White-label options"
    ],
    benefits: [
      "Data-driven decision making",
      "Automated insights discovery",
      "Real-time business monitoring",
      "Predictive trend analysis",
      "Reduced manual reporting"
    ],
    targetAudience: ["Business analysts", "Data scientists", "Executives", "Marketing teams"],
    marketPrice: "$149-399/month",
    website: "https://ziontechgroup.com/ai-analytics",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["Business Intelligence", "Data Analytics", "Predictive Analytics", "Reporting"],
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
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T09:15:00.000Z"
  },
  {
    id: "ai-code-assistant",
    title: "AI Code Assistant Pro",
    description: "Intelligent coding companion that helps developers write, debug, and optimize code. Supports 50+ programming languages with advanced AI-powered suggestions.",
    category: "AI Services",
    subcategory: "Developer Tools",
    price: 29,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI code completion",
      "Bug detection & fixing",
      "Code optimization",
      "50+ language support",
      "IDE integrations",
      "Code review assistance",
      "Documentation generation",
      "Team collaboration"
    ],
    benefits: [
      "50% faster development",
      "Reduced bug count",
      "Improved code quality",
      "Faster learning curve",
      "Team productivity boost"
    ],
    targetAudience: ["Software developers", "DevOps engineers", "Data scientists", "Students"],
    marketPrice: "$29-99/month",
    website: "https://ziontechgroup.com/ai-code-assistant",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["Code Generation", "Developer Tools", "AI Programming", "Productivity"],
    aiScore: 96,
    rating: 4.8,
    reviewCount: 567,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T11:45:00.000Z"
  },
  {
    id: "ai-image-generator",
    title: "AI Image Generator Studio",
    description: "Professional AI image creation platform for marketing, design, and content creation. Generate high-quality images from text descriptions with advanced customization options.",
    category: "AI Services",
    subcategory: "Image Generation",
    price: 49,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Text-to-image generation",
      "High-resolution output",
      "Style customization",
      "Batch processing",
      "Commercial license",
      "API access",
      "Brand consistency tools",
      "Stock photo replacement"
    ],
    benefits: [
      "Unlimited image creation",
      "Cost-effective design",
      "Consistent brand imagery",
      "Fast turnaround time",
      "No design skills required"
    ],
    targetAudience: ["Designers", "Marketing teams", "E-commerce", "Content creators"],
    marketPrice: "$49-149/month",
    website: "https://ziontechgroup.com/ai-image-generator",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["Image Generation", "AI Art", "Design", "Marketing"],
    aiScore: 93,
    rating: 4.6,
    reviewCount: 312,
    featured: false,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1624355834900-99cd2071585b?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T16:20:00.000Z"
  },
  // IT Services & Solutions
  {
    id: "cloud-migration-suite",
    title: "Cloud Migration Suite",
    description: "Comprehensive cloud migration solution with automated assessment, planning, and execution tools. Supports AWS, Azure, and Google Cloud with zero-downtime migration.",
    category: "IT Services",
    subcategory: "Cloud Solutions",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated migration assessment",
      "Multi-cloud support",
      "Zero-downtime migration",
      "Cost optimization",
      "Security compliance",
      "Performance monitoring",
      "24/7 support",
      "Migration automation"
    ],
    benefits: [
      "Reduced migration time by 70%",
      "Cost savings up to 40%",
      "Zero business disruption",
      "Enhanced security",
      "Scalable infrastructure"
    ],
    targetAudience: ["Enterprise IT", "DevOps teams", "System administrators", "Cloud architects"],
    marketPrice: "$299-799/month",
    website: "https://ziontechgroup.com/cloud-migration",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["Cloud Migration", "AWS", "Azure", "DevOps"],
    aiScore: 91,
    rating: 4.7,
    reviewCount: 78,
    featured: true,
    location: "Global",
    availability: "2-4 weeks",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T13:10:00.000Z"
  },
  {
    id: "cybersecurity-monitoring",
    title: "AI Cybersecurity Monitoring",
    description: "Advanced cybersecurity monitoring platform with AI-powered threat detection, automated response, and 24/7 security operations center (SOC) services.",
    category: "IT Services",
    subcategory: "Cybersecurity",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI threat detection",
      "24/7 SOC monitoring",
      "Automated incident response",
      "Vulnerability assessment",
      "Compliance reporting",
      "Threat intelligence",
      "Security analytics",
      "Mobile security"
    ],
    benefits: [
      "99.9% threat detection rate",
      "Reduced response time by 80%",
      "Compliance automation",
      "Cost-effective security",
      "Expert security team"
    ],
    targetAudience: ["Enterprise security", "IT managers", "Compliance officers", "Small businesses"],
    marketPrice: "$199-599/month",
    website: "https://ziontechgroup.com/cybersecurity",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["Cybersecurity", "Threat Detection", "SOC", "Compliance"],
    aiScore: 95,
    rating: 4.9,
    reviewCount: 134,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T08:30:00.000Z"
  },
  {
    id: "devops-automation",
    title: "DevOps Automation Platform",
    description: "Complete DevOps automation solution with CI/CD pipelines, infrastructure as code, monitoring, and deployment automation. Accelerate development cycles and improve reliability.",
    category: "IT Services",
    subcategory: "DevOps",
    price: 179,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "CI/CD pipeline automation",
      "Infrastructure as Code",
      "Container orchestration",
      "Monitoring & alerting",
      "Auto-scaling",
      "Multi-environment support",
      "GitOps workflows",
      "Performance optimization"
    ],
    benefits: [
      "10x faster deployments",
      "Reduced manual errors",
      "Improved reliability",
      "Cost optimization",
      "Team productivity boost"
    ],
    targetAudience: ["DevOps engineers", "Software teams", "System administrators", "IT managers"],
    marketPrice: "$179-499/month",
    website: "https://ziontechgroup.com/devops-automation",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["DevOps", "CI/CD", "Automation", "Infrastructure"],
    aiScore: 93,
    rating: 4.8,
    reviewCount: 95,
    featured: false,
    location: "Global",
    availability: "1-2 weeks",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T15:45:00.000Z"
  },
  {
    id: "data-backup-recovery",
    title: "Enterprise Data Backup & Recovery",
    description: "Comprehensive data protection solution with automated backup, disaster recovery, and business continuity planning. Supports hybrid cloud environments with zero data loss guarantee.",
    category: "IT Services",
    subcategory: "Data Protection",
    price: 129,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated backup scheduling",
      "Hybrid cloud storage",
      "Disaster recovery",
      "Zero data loss guarantee",
      "Compliance support",
      "Encryption at rest",
      "Point-in-time recovery",
      "24/7 support"
    ],
    benefits: [
      "99.99% data availability",
      "Instant disaster recovery",
      "Compliance automation",
      "Cost-effective storage",
      "Peace of mind"
    ],
    targetAudience: ["Enterprise IT", "Data centers", "Healthcare", "Financial services"],
    marketPrice: "$129-399/month",
    website: "https://ziontechgroup.com/data-backup",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["Data Backup", "Disaster Recovery", "Business Continuity", "Cloud Storage"],
    aiScore: 90,
    rating: 4.7,
    reviewCount: 67,
    featured: false,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T12:00:00.000Z"
  },
  // Innovative Business Solutions
  {
    id: "ai-customer-support",
    title: "AI Customer Support Suite",
    description: "Intelligent customer support platform with AI-powered ticket routing, automated responses, sentiment analysis, and customer satisfaction tracking.",
    category: "Business Solutions",
    subcategory: "Customer Support",
    price: 89,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI ticket routing",
      "Automated responses",
      "Sentiment analysis",
      "Customer satisfaction tracking",
      "Multi-channel support",
      "Knowledge base"
    ],
    benefits: [
      "Reduce response time by 90%",
      "Handle 70% of queries automatically",
      "Improve customer satisfaction by 45%",
      "Reduce support costs by 60%"
    ],
    targetAudience: ["E-commerce businesses", "SaaS companies", "Service providers", "Enterprise"],
    marketPrice: "$89-299/month",
    website: "https://ziontechgroup.com/ai-customer-support",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["Customer Support", "AI Chatbot", "Ticket Management", "Sentiment Analysis"],
    aiScore: 94,
    rating: 4.8,
    reviewCount: 123,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T10:00:00.000Z"
  },
  {
    id: "data-analytics-platform",
    title: "Data Analytics Platform",
    description: "Comprehensive data analytics and visualization platform for business intelligence and decision making.",
    category: "Analytics & BI",
    subcategory: "Data Analytics",
    price: 49,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Data visualization tools",
      "Custom dashboard builder",
      "Real-time data streaming",
      "Predictive analytics",
      "Data export & sharing",
      "Mobile app access"
    ],
    benefits: [
      "Make data-driven decisions faster",
      "Identify business opportunities",
      "Optimize operations efficiency",
      "Improve customer insights"
    ],
    targetAudience: ["Business analysts", "Data scientists", "Executives", "Marketing teams"],
    marketPrice: "$49-149/month",
    website: "https://ziontechgroup.com/data-analytics-platform",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["Data Analytics", "Analytics Dashboard", "Real-time Analytics", "Predictive Analytics"],
    aiScore: 92,
    rating: 4.7,
    reviewCount: 189,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-18T11:00:00.000Z"
  },
  {
    id: "ai-recruitment-assistant",
    title: "AI Recruitment Assistant",
    description: "Intelligent hiring platform that automates candidate screening, matching, and interview scheduling.",
    category: "HR & Recruitment",
    subcategory: "HR & Recruitment",
    price: 35,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered candidate screening",
      "Skills assessment tools",
      "Interview scheduling automation",
      "Candidate scoring & ranking",
      "Diversity & inclusion tools",
      "Integration with job boards"
    ],
    benefits: [
      "Reduce time-to-hire by 60%",
      "Improve candidate quality by 40%",
      "Save 20+ hours weekly on screening",
      "Enhance diversity hiring"
    ],
    targetAudience: ["HR professionals", "Recruitment agencies", "Hiring managers", "Startups"],
    marketPrice: "$35-135/month",
    website: "https://ziontechgroup.com/ai-recruitment-assistant",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["AI Recruitment", "Candidate Screening", "Interview Scheduling", "Diversity Hiring"],
    aiScore: 91,
    rating: 4.6,
    reviewCount: 112,
    featured: false,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-22T09:30:00.000Z"
  },
  {
    id: "cybersecurity-monitor",
    title: "Cybersecurity Monitor",
    description: "Real-time threat detection, vulnerability assessment, and security compliance monitoring.",
    category: "Cybersecurity",
    subcategory: "Cybersecurity",
    price: 45,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time threat detection",
      "Vulnerability assessment",
      "Compliance monitoring",
      "Security incident response",
      "Risk scoring & reporting",
      "Integration with security tools"
    ],
    benefits: [
      "Detect threats 90% faster",
      "Reduce security incidents by 70%",
      "Ensure compliance requirements",
      "Protect sensitive data"
    ],
    targetAudience: ["IT security teams", "Compliance officers", "Small businesses", "Healthcare providers"],
    marketPrice: "$45-195/month",
    website: "https://ziontechgroup.com/cybersecurity-monitor",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["Cybersecurity", "Threat Detection", "Vulnerability Assessment", "Compliance Monitoring"],
    aiScore: 93,
    rating: 4.7,
    reviewCount: 105,
    featured: false,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-25T10:15:00.000Z"
  },
  {
    id: "cloud-cost-optimizer",
    title: "Cloud Cost Optimizer",
    description: "Intelligent cloud cost management and optimization for AWS, Azure, and Google Cloud platforms.",
    category: "Cloud Management",
    subcategory: "Cloud Management",
    price: 30,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-cloud cost monitoring",
      "Automated cost optimization",
      "Resource utilization tracking",
      "Budget management & alerts",
      "Cost forecasting",
      "ROI analysis"
    ],
    benefits: [
      "Reduce cloud costs by 25-40%",
      "Optimize resource utilization",
      "Prevent budget overruns",
      "Improve cloud ROI"
    ],
    targetAudience: ["DevOps engineers", "Cloud architects", "IT managers", "Startups"],
    marketPrice: "$30-130/month",
    website: "https://ziontechgroup.com/cloud-cost-optimizer",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["Cloud Cost Optimization", "Resource Management", "Budget Management", "ROI Analysis"],
    aiScore: 92,
    rating: 4.6,
    reviewCount: 98,
    featured: false,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-28T11:30:00.000Z"
  },
  {
    id: "ai-marketing-automation",
    title: "AI Marketing Automation",
    description: "Intelligent marketing automation with AI-powered personalization, campaign optimization, and analytics.",
    category: "Marketing Automation",
    subcategory: "Marketing Automation",
    price: 55,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered personalization",
      "Multi-channel campaign management",
      "Behavioral targeting",
      "A/B testing automation",
      "ROI optimization",
      "Customer journey mapping"
    ],
    benefits: [
      "Increase conversion rates by 50%",
      "Reduce marketing costs by 30%",
      "Improve customer engagement",
      "Personalize customer experiences"
    ],
    targetAudience: ["Marketing teams", "E-commerce businesses", "B2B companies", "Digital agencies"],
    marketPrice: "$55-255/month",
    website: "https://ziontechgroup.com/ai-marketing-automation",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["Marketing Automation", "AI Personalization", "Campaign Optimization", "A/B Testing"],
    aiScore: 94,
    rating: 4.8,
    reviewCount: 145,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-02T12:45:00.000Z"
  },
  {
    id: "api-management-platform",
    title: "API Management Platform",
    description: "Comprehensive API development, testing, monitoring, and documentation platform for developers.",
    category: "Developer Tools",
    subcategory: "Developer Tools",
    price: 40,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "API design & development",
      "Automated testing suite",
      "Performance monitoring",
      "Developer documentation",
      "Rate limiting & security",
      "Analytics & insights"
    ],
    benefits: [
      "Accelerate API development by 60%",
      "Improve API reliability by 80%",
      "Reduce development costs",
      "Enhance developer experience"
    ],
    targetAudience: ["Developers", "API architects", "DevOps teams", "Startups"],
    marketPrice: "$40-190/month",
    website: "https://ziontechgroup.com/api-management-platform",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["API Management", "API Development", "Testing Tools", "Performance Monitoring"],
    aiScore: 93,
    rating: 4.7,
    reviewCount: 120,
    featured: false,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-05T14:00:00.000Z"
  }
];

export const getMicroSaasServiceById = (id: string): MicroSaasService | undefined => {
  return MICRO_SAAS_SERVICES.find(service => service.id === id);
};

export const getMicroSaasServicesByCategory = (category: string): MicroSaasService[] => {
  return MICRO_SAAS_SERVICES.filter(service => service.category === category);
};

export const getMicroSaasCategories = (): string[] => {
  return [...new Set(MICRO_SAAS_SERVICES.map(service => service.category))];
};