<<<<<<< HEAD
import { ProductListing } from "@/types/listings";

// Real Micro SAAS Services & Solutions
export const MICRO_SAAS_SERVICES: ProductListing[] = [
  // AI-Powered Business Solutions
  {
    id: "ai-crm-automation",
    title: "AI-Powered CRM Automation Suite",
    description: "Intelligent customer relationship management with automated lead scoring, sentiment analysis, and predictive customer behavior insights. Includes 24/7 AI chat support and automated follow-up sequences.",
    category: "AI Business Solutions",
    subcategory: "CRM & Sales",
    price: 299,
    currency: "$",
    tags: ["CRM Automation", "AI Chat Support", "Lead Scoring", "Predictive Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "ziontech",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 96
  },
  {
    id: "smart-inventory-management",
    title: "Smart Inventory Management System",
    description: "AI-driven inventory optimization with demand forecasting, automated reorder points, and real-time stock level monitoring. Reduces stockouts by 85% and optimizes warehouse space utilization.",
    category: "AI Business Solutions",
    subcategory: "Supply Chain",
    price: 199,
    currency: "$",
    tags: ["Inventory Management", "Demand Forecasting", "Supply Chain", "Automation"],
    author: {
      name: "Zion Tech Group",
      id: "ziontech",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 94
  },
  {
    id: "ai-marketing-automation",
    title: "AI Marketing Automation Platform",
    description: "Complete marketing automation with AI-powered content generation, personalized email campaigns, social media scheduling, and ROI tracking. Includes A/B testing and audience segmentation.",
    category: "AI Business Solutions",
    subcategory: "Marketing",
    price: 399,
    currency: "$",
    tags: ["Marketing Automation", "Content Generation", "Email Marketing", "Social Media"],
    author: {
      name: "Zion Tech Group",
      id: "ziontech",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T09:15:00.000Z",
    rating: 4.7,
    reviewCount: 234,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 93
  },

  // IT Infrastructure & DevOps
  {
    id: "cloud-cost-optimizer",
    title: "Cloud Cost Optimization Platform",
    description: "Intelligent cloud resource management that automatically scales resources based on demand, identifies unused services, and provides cost-saving recommendations. Saves 30-50% on cloud bills.",
    category: "IT Infrastructure",
    subcategory: "Cloud Management",
    price: 149,
    currency: "$",
    tags: ["Cloud Optimization", "Cost Management", "Auto-scaling", "Resource Management"],
    author: {
      name: "Zion Tech Group",
      id: "ziontech",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T11:45:00.000Z",
    rating: 4.9,
    reviewCount: 178,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 95
  },
  {
    id: "devops-automation-suite",
    title: "DevOps Automation Suite",
    description: "Complete CI/CD pipeline automation with automated testing, deployment, and monitoring. Includes infrastructure as code, automated rollbacks, and performance analytics.",
    category: "IT Infrastructure",
    subcategory: "DevOps",
    price: 249,
    currency: "$",
    tags: ["CI/CD", "DevOps", "Automation", "Infrastructure as Code"],
    author: {
      name: "Zion Tech Group",
      id: "ziontech",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T16:20:00.000Z",
    rating: 4.8,
    reviewCount: 112,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 94
  },
  {
    id: "cybersecurity-monitoring",
    title: "24/7 Cybersecurity Monitoring",
    description: "Real-time threat detection and response with AI-powered security analytics, automated incident response, and compliance reporting. Protects against 99.9% of cyber threats.",
    category: "IT Infrastructure",
    subcategory: "Cybersecurity",
    price: 599,
    currency: "$",
    tags: ["Cybersecurity", "Threat Detection", "Incident Response", "Compliance"],
    author: {
      name: "Zion Tech Group",
      id: "ziontech",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T13:10:00.000Z",
    rating: 4.9,
    reviewCount: 203,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 97
  },

  // Data Analytics & Business Intelligence
  {
    id: "real-time-analytics-dashboard",
    title: "Real-Time Analytics Dashboard",
    description: "Live business intelligence dashboard with customizable KPIs, automated reporting, and predictive analytics. Connects to 100+ data sources and provides actionable insights.",
    category: "Data Analytics",
    subcategory: "Business Intelligence",
    price: 349,
    currency: "$",
    tags: ["Real-Time Analytics", "Business Intelligence", "KPIs", "Predictive Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "ziontech",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T10:30:00.000Z",
    rating: 4.8,
    reviewCount: 167,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 95
  },
  {
    id: "customer-behavior-analytics",
    title: "Customer Behavior Analytics Platform",
    description: "Advanced customer journey mapping with behavioral analysis, churn prediction, and personalized recommendation engine. Increases customer lifetime value by 40%.",
    category: "Data Analytics",
    subcategory: "Customer Analytics",
    price: 279,
    currency: "$",
    tags: ["Customer Analytics", "Behavior Analysis", "Churn Prediction", "Personalization"],
    author: {
      name: "Zion Tech Group",
      id: "ziontech",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T15:45:00.000Z",
    rating: 4.7,
    reviewCount: 134,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 93
  },

  // AI Development & Integration
  {
    id: "ai-model-deployment-platform",
    title: "AI Model Deployment Platform",
    description: "Enterprise-grade platform for deploying, monitoring, and scaling AI models in production. Includes model versioning, A/B testing, and automated retraining pipelines.",
    category: "AI Development",
    subcategory: "Model Deployment",
    price: 799,
    currency: "$",
    tags: ["AI Deployment", "Model Monitoring", "MLOps", "Production AI"],
    author: {
      name: "Zion Tech Group",
      id: "ziontech",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T12:00:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 96
  },
  {
    id: "natural-language-processing-api",
    title: "Natural Language Processing API",
    description: "Comprehensive NLP API with text analysis, sentiment detection, language translation, and content summarization. Supports 50+ languages and industry-specific terminology.",
    category: "AI Development",
    subcategory: "NLP",
    price: 199,
    currency: "$",
    tags: ["NLP", "Text Analysis", "Sentiment Detection", "Translation"],
    author: {
      name: "Zion Tech Group",
      id: "ziontech",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-25T09:15:00.000Z",
    rating: 4.8,
    reviewCount: 245,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 94
  },

  // Financial Technology Solutions
  {
    id: "ai-powered-accounting",
    title: "AI-Powered Accounting Automation",
    description: "Intelligent accounting software with automated bookkeeping, expense categorization, invoice processing, and financial reporting. Reduces accounting time by 80%.",
    category: "FinTech",
    subcategory: "Accounting",
    price: 179,
    currency: "$",
    tags: ["Accounting Automation", "Bookkeeping", "Expense Management", "Financial Reporting"],
    author: {
      name: "Zion Tech Group",
      id: "ziontech",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T14:20:00.000Z",
    rating: 4.8,
    reviewCount: 198,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 94
  },
  {
    id: "fraud-detection-system",
    title: "AI Fraud Detection System",
    description: "Real-time fraud detection for financial transactions with machine learning algorithms, behavioral analysis, and automated alert systems. Detects 99.5% of fraudulent activities.",
    category: "FinTech",
    subcategory: "Fraud Prevention",
    price: 449,
    currency: "$",
    tags: ["Fraud Detection", "Machine Learning", "Behavioral Analysis", "Real-time Monitoring"],
    author: {
      name: "Zion Tech Group",
      id: "ziontech",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-05T11:30:00.000Z",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 96
  },

  // Healthcare Technology
  {
    id: "healthcare-analytics-platform",
    title: "Healthcare Analytics Platform",
    description: "HIPAA-compliant healthcare analytics with patient outcome prediction, resource optimization, and clinical decision support. Improves patient care quality and reduces operational costs.",
    category: "HealthTech",
    subcategory: "Analytics",
    price: 899,
    currency: "$",
    tags: ["Healthcare Analytics", "HIPAA Compliant", "Patient Outcomes", "Clinical Decision Support"],
    author: {
      name: "Zion Tech Group",
      id: "ziontech",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-10T16:45:00.000Z",
    rating: 4.9,
    reviewCount: 78,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 95
  },

  // E-commerce & Retail Solutions
  {
    id: "ai-product-recommendation",
    title: "AI Product Recommendation Engine",
    description: "Intelligent product recommendation system with personalized suggestions, cross-selling opportunities, and dynamic pricing optimization. Increases conversion rates by 35%.",
    category: "E-commerce",
    subcategory: "Recommendations",
    price: 329,
    currency: "$",
    tags: ["Product Recommendations", "Personalization", "Cross-selling", "Dynamic Pricing"],
    author: {
      name: "Zion Tech Group",
      id: "ziontech",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-15T13:15:00.000Z",
    rating: 4.8,
    reviewCount: 189,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 94
  },

  // Education Technology
  {
    id: "adaptive-learning-platform",
    title: "Adaptive Learning Platform",
    description: "AI-powered educational platform with personalized learning paths, adaptive assessments, and progress tracking. Improves learning outcomes by 45% and reduces dropout rates.",
    category: "EdTech",
    subcategory: "Learning Platform",
    price: 249,
    currency: "$",
    tags: ["Adaptive Learning", "Personalized Education", "Progress Tracking", "AI Tutoring"],
    author: {
      name: "Zion Tech Group",
      id: "ziontech",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-20T10:00:00.000Z",
    rating: 4.7,
    reviewCount: 134,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 93
  }
];

// Service Categories for filtering
export const MICRO_SAAS_CATEGORIES = [
  { label: 'AI Business Solutions', value: 'ai-business-solutions' },
  { label: 'IT Infrastructure', value: 'it-infrastructure' },
  { label: 'Data Analytics', value: 'data-analytics' },
  { label: 'AI Development', value: 'ai-development' },
  { label: 'FinTech', value: 'fintech' },
  { label: 'HealthTech', value: 'healthtech' },
  { label: 'E-commerce', value: 'e-commerce' },
  { label: 'EdTech', value: 'edtech' }
];

// Subcategories for detailed filtering
export const MICRO_SAAS_SUBCATEGORIES = {
  'ai-business-solutions': ['CRM & Sales', 'Supply Chain', 'Marketing'],
  'it-infrastructure': ['Cloud Management', 'DevOps', 'Cybersecurity'],
  'data-analytics': ['Business Intelligence', 'Customer Analytics'],
  'ai-development': ['Model Deployment', 'NLP'],
  'fintech': ['Accounting', 'Fraud Prevention'],
  'healthtech': ['Analytics'],
  'e-commerce': ['Recommendations'],
  'edtech': ['Learning Platform']
};

// Pricing tiers for different service levels
export const PRICING_TIERS = {
  basic: { name: 'Basic', multiplier: 1 },
  professional: { name: 'Professional', multiplier: 1.5 },
  enterprise: { name: 'Enterprise', multiplier: 2.5 }
};

// Contact information
export const CONTACT_INFO = {
  mobile: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com"
=======
export interface MicroSaasService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'monthly' | 'yearly' | 'one-time' | 'usage-based';
  features: string[];
  benefits: string[];
  targetAudience: string[];
  integration: string[];
  support: string[];
  averageMarketPrice: number;
  zionPrice: number;
  savings: number;
  contactLink: string;
  demoLink?: string;
  documentationLink?: string;
  tags: string[];
  aiScore: number;
  rating: number;
  reviewCount: number;
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
  };
  images: string[];
  createdAt: string;
}

export const MICRO_SAAS_SERVICES: MicroSaasService[] = [
  // AI Services
  {
    id: "ai-content-generator",
    title: "AI Content Generator Pro",
    description: "Advanced AI-powered content creation tool for blogs, social media, and marketing materials with SEO optimization and brand voice consistency.",
    category: "AI Services",
    subcategory: "Content Creation",
    price: 49,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-language content generation",
      "SEO optimization",
      "Brand voice customization",
      "Plagiarism detection",
      "Content calendar planning",
      "Performance analytics"
    ],
    benefits: [
      "Save 20+ hours per week on content creation",
      "Improve SEO rankings by 40%",
      "Maintain consistent brand voice",
      "Scale content production 10x"
    ],
    targetAudience: ["Marketing teams", "Content creators", "Small businesses", "Agencies"],
    integration: ["WordPress", "Shopify", "HubSpot", "Mailchimp", "Social media platforms"],
    support: ["24/7 live chat", "Email support", "Video tutorials", "Community forum"],
    averageMarketPrice: 89,
    zionPrice: 49,
    savings: 45,
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/ai-content",
    documentationLink: "https://ziontechgroup.com/docs/ai-content",
    tags: ["AI", "Content Creation", "SEO", "Marketing", "Automation"],
    aiScore: 95,
    rating: 4.8,
    reviewCount: 156,
    author: {
      name: "Zion AI Labs",
      id: "zion-ai-labs",
      avatarUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z"
  },
  {
    id: "ai-customer-support",
    title: "AI Customer Support Suite",
    description: "Intelligent customer support automation with natural language processing, ticket routing, and 24/7 availability.",
    category: "AI Services",
    subcategory: "Customer Support",
    price: 79,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "24/7 automated responses",
      "Smart ticket routing",
      "Sentiment analysis",
      "Multi-language support",
      "Integration with CRM systems",
      "Performance analytics"
    ],
    benefits: [
      "Reduce response time by 80%",
      "Handle 70% of inquiries automatically",
      "Improve customer satisfaction scores",
      "Cut support costs by 60%"
    ],
    targetAudience: ["E-commerce", "SaaS companies", "Customer service teams", "Support centers"],
    integration: ["Zendesk", "Intercom", "Freshdesk", "Salesforce", "Shopify"],
    support: ["Priority support", "Dedicated account manager", "Custom training", "API documentation"],
    averageMarketPrice: 149,
    zionPrice: 79,
    savings: 47,
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/ai-support",
    tags: ["AI", "Customer Support", "Automation", "CRM", "24/7 Support"],
    aiScore: 92,
    rating: 4.7,
    reviewCount: 89,
    author: {
      name: "Zion Support AI",
      id: "zion-support-ai"
    },
    images: ["https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z"
  },
  {
    id: "ai-data-analytics",
    title: "AI Data Analytics Platform",
    description: "Comprehensive data analytics solution with AI-powered insights, predictive modeling, and interactive dashboards.",
    category: "AI Services",
    subcategory: "Data Analytics",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time data processing",
      "Predictive analytics",
      "Interactive dashboards",
      "Custom reporting",
      "Data visualization",
      "API access"
    ],
    benefits: [
      "Uncover hidden business insights",
      "Predict market trends accurately",
      "Make data-driven decisions",
      "Automate reporting processes"
    ],
    targetAudience: ["Data scientists", "Business analysts", "Executives", "Marketing teams"],
    integration: ["Google Analytics", "Salesforce", "HubSpot", "MySQL", "PostgreSQL", "MongoDB"],
    support: ["Enterprise support", "Custom development", "Training programs", "Dedicated success manager"],
    averageMarketPrice: 399,
    zionPrice: 199,
    savings: 50,
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/ai-analytics",
    tags: ["AI", "Data Analytics", "Business Intelligence", "Predictive Analytics", "Dashboards"],
    aiScore: 94,
    rating: 4.9,
    reviewCount: 234,
    author: {
      name: "Zion Data Intelligence",
      id: "zion-data-intelligence"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T09:15:00.000Z"
  },

  // IT Services
  {
    id: "cloud-migration-expert",
    title: "Cloud Migration Expert Service",
    description: "Professional cloud migration services for AWS, Azure, and Google Cloud with zero-downtime deployment and cost optimization.",
    category: "IT Services",
    subcategory: "Cloud Migration",
    price: 2500,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Multi-cloud strategy planning",
      "Zero-downtime migration",
      "Cost optimization analysis",
      "Security compliance",
      "Performance monitoring",
      "Post-migration support"
    ],
    benefits: [
      "Reduce infrastructure costs by 30-50%",
      "Improve system reliability",
      "Enhanced scalability",
      "Better disaster recovery"
    ],
    targetAudience: ["Enterprises", "Mid-size companies", "Startups", "Government agencies"],
    integration: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
    support: ["Project management", "Technical consultation", "24/7 emergency support", "Training sessions"],
    averageMarketPrice: 5000,
    zionPrice: 2500,
    savings: 50,
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Cloud Migration", "AWS", "Azure", "DevOps", "Infrastructure", "Cost Optimization"],
    aiScore: 88,
    rating: 4.8,
    reviewCount: 67,
    author: {
      name: "Zion Cloud Solutions",
      id: "zion-cloud-solutions"
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T11:45:00.000Z"
  },
  {
    id: "cybersecurity-audit",
    title: "Comprehensive Cybersecurity Audit",
    description: "Full security assessment including penetration testing, vulnerability scanning, compliance review, and security recommendations.",
    category: "IT Services",
    subcategory: "Cybersecurity",
    price: 3500,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Penetration testing",
      "Vulnerability assessment",
      "Compliance review (SOC2, ISO27001)",
      "Security policy review",
      "Incident response planning",
      "Security awareness training"
    ],
    benefits: [
      "Identify security vulnerabilities",
      "Meet compliance requirements",
      "Reduce security risks",
      "Improve incident response"
    ],
    targetAudience: ["Financial institutions", "Healthcare", "E-commerce", "Government", "Enterprises"],
    integration: ["SIEM systems", "Firewalls", "IDS/IPS", "Vulnerability scanners", "Compliance tools"],
    support: ["Detailed reports", "Remediation guidance", "Follow-up consultation", "Emergency response"],
    averageMarketPrice: 7000,
    zionPrice: 3500,
    savings: 50,
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Cybersecurity", "Penetration Testing", "Compliance", "Security Audit", "Risk Assessment"],
    aiScore: 91,
    rating: 4.9,
    reviewCount: 45,
    author: {
      name: "Zion Security",
      id: "zion-security"
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T16:20:00.000Z"
  },
  {
    id: "devops-automation",
    title: "DevOps Automation & CI/CD Pipeline",
    description: "Complete DevOps automation setup with continuous integration, deployment pipelines, and infrastructure as code.",
    category: "IT Services",
    subcategory: "DevOps",
    price: 1800,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "CI/CD pipeline setup",
      "Infrastructure as Code (IaC)",
      "Automated testing",
      "Monitoring & alerting",
      "Container orchestration",
      "Performance optimization"
    ],
    benefits: [
      "Reduce deployment time by 80%",
      "Improve code quality",
      "Faster time to market",
      "Better team collaboration"
    ],
    targetAudience: ["Development teams", "Startups", "Tech companies", "Enterprises"],
    integration: ["Jenkins", "GitLab CI", "GitHub Actions", "Docker", "Kubernetes", "Terraform"],
    support: ["Setup & configuration", "Team training", "Documentation", "Ongoing support"],
    averageMarketPrice: 4000,
    zionPrice: 1800,
    savings: 55,
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["DevOps", "CI/CD", "Automation", "Infrastructure as Code", "Docker", "Kubernetes"],
    aiScore: 89,
    rating: 4.7,
    reviewCount: 78,
    author: {
      name: "Zion DevOps",
      id: "zion-devops"
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T13:10:00.000Z"
  },

  // Micro SAAS Solutions
  {
    id: "invoice-automation",
    title: "Smart Invoice Automation",
    description: "AI-powered invoice processing, expense tracking, and financial reporting for small businesses and freelancers.",
    category: "Micro SAAS",
    subcategory: "Finance",
    price: 29,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated invoice processing",
      "Expense categorization",
      "Financial reporting",
      "Tax preparation",
      "Multi-currency support",
      "Mobile app access"
    ],
    benefits: [
      "Save 15+ hours per month",
      "Reduce accounting errors",
      "Improve cash flow visibility",
      "Simplify tax preparation"
    ],
    targetAudience: ["Small businesses", "Freelancers", "Consultants", "Startups"],
    integration: ["QuickBooks", "Xero", "Stripe", "PayPal", "Bank accounts"],
    support: ["Email support", "Video tutorials", "Community forum", "Live chat"],
    averageMarketPrice: 59,
    zionPrice: 29,
    savings: 51,
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/invoice-automation",
    tags: ["Invoice Automation", "Expense Tracking", "Financial Management", "AI", "Small Business"],
    aiScore: 87,
    rating: 4.6,
    reviewCount: 123,
    author: {
      name: "Zion Finance",
      id: "zion-finance"
    },
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T12:30:00.000Z"
  },
  {
    id: "project-management-ai",
    title: "AI Project Management Assistant",
    description: "Intelligent project management tool with AI-powered task prioritization, resource allocation, and progress tracking.",
    category: "Micro SAAS",
    subcategory: "Project Management",
    price: 39,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI task prioritization",
      "Resource optimization",
      "Progress tracking",
      "Team collaboration",
      "Time estimation",
      "Risk assessment"
    ],
    benefits: [
      "Improve project success rate by 40%",
      "Reduce project delays",
      "Better resource utilization",
      "Enhanced team productivity"
    ],
    targetAudience: ["Project managers", "Development teams", "Marketing teams", "Consulting firms"],
    integration: ["Slack", "Microsoft Teams", "Jira", "Asana", "Trello", "GitHub"],
    support: ["Priority support", "Custom onboarding", "Training sessions", "API access"],
    averageMarketPrice: 79,
    zionPrice: 39,
    savings: 51,
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/project-management",
    tags: ["Project Management", "AI", "Task Management", "Team Collaboration", "Resource Planning"],
    aiScore: 93,
    rating: 4.8,
    reviewCount: 189,
    author: {
      name: "Zion Project AI",
      id: "zion-project-ai"
    },
    images: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T15:45:00.000Z"
  },
  {
    id: "email-marketing-ai",
    title: "AI Email Marketing Suite",
    description: "Advanced email marketing platform with AI-powered segmentation, personalization, and campaign optimization.",
    category: "Micro SAAS",
    subcategory: "Marketing",
    price: 59,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI audience segmentation",
      "Personalized content",
      "A/B testing automation",
      "Send time optimization",
      "Performance analytics",
      "Template library"
    ],
    benefits: [
      "Increase open rates by 35%",
      "Improve click-through rates",
      "Reduce unsubscribe rates",
      "Automate campaign optimization"
    ],
    targetAudience: ["Marketing teams", "E-commerce", "SaaS companies", "Agencies"],
    integration: ["Shopify", "WooCommerce", "HubSpot", "Salesforce", "Mailchimp", "Klaviyo"],
    support: ["Marketing consultation", "Template customization", "Strategy planning", "Performance analysis"],
    averageMarketPrice: 119,
    zionPrice: 59,
    savings: 50,
    contactLink: "https://ziontechgroup.com/contact",
    demoLink: "https://ziontechgroup.com/demo/email-marketing",
    tags: ["Email Marketing", "AI", "Marketing Automation", "Personalization", "Campaign Optimization"],
    aiScore: 90,
    rating: 4.7,
    reviewCount: 267,
    author: {
      name: "Zion Marketing AI",
      id: "zion-marketing-ai"
    },
    images: ["https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T10:15:00.000Z"
  }
];

export const SERVICE_CATEGORIES = [
  {
    name: "AI Services",
    description: "Cutting-edge artificial intelligence solutions for modern businesses",
    icon: "🤖",
    services: MICRO_SAAS_SERVICES.filter(s => s.category === "AI Services")
  },
  {
    name: "IT Services",
    description: "Professional IT consulting, migration, and infrastructure services",
    icon: "💻",
    services: MICRO_SAAS_SERVICES.filter(s => s.category === "IT Services")
  },
  {
    name: "Micro SAAS",
    description: "Affordable software solutions for growing businesses",
    icon: "🚀",
    services: MICRO_SAAS_SERVICES.filter(s => s.category === "Micro SAAS")
  }
];

export const getServiceById = (id: string): MicroSaasService | undefined => {
  return MICRO_SAAS_SERVICES.find(service => service.id === id);
};

export const getServicesByCategory = (category: string): MicroSaasService[] => {
  return MICRO_SAAS_SERVICES.filter(service => service.category === category);
};

export const getServicesBySubcategory = (subcategory: string): MicroSaasService[] => {
  return MICRO_SAAS_SERVICES.filter(service => service.subcategory === subcategory);
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5241
};