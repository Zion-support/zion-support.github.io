<<<<<<< HEAD
<<<<<<< HEAD
export interface ServiceContact {
  phone: string;
  email: string;
  website: string;
  address: string;
=======
export interface EnhancedService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'monthly' | 'hourly' | 'project-based';
  features: string[];
  benefits: string[];
  useCases: string[];
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
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
  availability: 'immediate' | '1-2 weeks' | '1 month' | 'custom';
  supportLevel: 'basic' | 'standard' | 'premium' | 'enterprise';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
}

export interface MicroSaasService {
  id: number;
  name: string;
  category: string;
  pricing: string;
  description: string;
  price: number;
  pricingModel: string;
  userLimit: string;
  features: string[];
  benefits: string[];
  targetAudience: string[];
  tags: string[];
  contactInfo: ServiceContact;
  marketPrice: string;
  competitors: string[];
  roi: string;
  setupTime: string;
  integrations: string[];
}

export interface ITService {
  id: number;
  name: string;
  category: string;
  description: string;
  hourlyRate: number;
  projectRate: number;
  features: string[];
  benefits: string[];
  targetAudience: string[];
  tags: string[];
  contactInfo: ServiceContact;
  marketPrice: string;
  responseTime: string;
  sla: string;
  certifications: string[];
}

export interface AIService {
  id: number;
  name: string;
  category: string;
  description: string;
  pricing: string;
  price: number;
  pricingModel: string;
  features: string[];
  benefits: string[];
  targetAudience: string[];
  tags: string[];
  contactInfo: ServiceContact;
  marketPrice: string;
  aiModels: string[];
  accuracy: string;
  trainingData: string;
  compliance: string[];
}

// Enhanced Micro SAAS Services
export const enhancedMicroSaasServices: MicroSaasService[] = [
  {
<<<<<<< HEAD
    id: 1,
    name: "TaskFlow Pro",
    category: "Productivity",
    pricing: "Freemium",
    description: "AI-powered task management and project collaboration platform with intelligent automation and predictive analytics",
    price: 29,
    pricingModel: "monthly",
    userLimit: "Up to 25 users",
    features: [
<<<<<<< HEAD
      "AI task prioritization",
      "Smart time tracking",
      "Predictive project timelines",
      "Advanced reporting",
      "Mobile app",
      "API integrations"
    ],
    benefits: [
      "30% productivity increase",
      "Reduced project delays",
      "Better resource allocation",
      "Real-time insights"
    ],
    targetAudience: ["Small teams", "Startups", "Project managers", "Remote teams"],
    tags: ["Task Management", "AI", "Productivity", "Collaboration", "Analytics"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/taskflow-pro",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$29-89/month",
    competitors: ["Asana", "Monday.com", "ClickUp"],
    roi: "300% within 6 months",
    setupTime: "15 minutes",
    integrations: ["Slack", "Microsoft Teams", "Google Workspace", "Zapier"]
  },
  {
    id: 2,
    name: "InvoiceGenius AI",
    category: "Finance",
    pricing: "Freemium",
    description: "Next-generation AI-powered financial management platform with automated expense tracking and tax optimization",
    price: 49,
    pricingModel: "monthly",
    userLimit: "Unlimited users",
    features: [
      "AI invoice generation",
      "Expense categorization",
      "Tax optimization",
      "Financial forecasting",
      "Multi-currency support",
      "Bank reconciliation"
    ],
    benefits: [
      "90% time savings on invoicing",
      "Automatic tax compliance",
      "Improved cash flow",
      "Real-time financial insights"
    ],
    targetAudience: ["Small businesses", "Freelancers", "Consultants", "E-commerce"],
    tags: ["Invoicing", "AI", "Finance", "Tax", "Automation"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/invoicegenius",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$49-199/month",
    competitors: ["QuickBooks", "FreshBooks", "Xero"],
    roi: "400% within 3 months",
    setupTime: "30 minutes",
    integrations: ["Stripe", "PayPal", "QuickBooks", "Xero", "Bank APIs"]
  },
  {
    id: 3,
    name: "SocialSync Pro",
    category: "Marketing",
    pricing: "Freemium",
    description: "AI-driven social media management platform with predictive content optimization and audience analytics",
    price: 79,
    pricingModel: "monthly",
    userLimit: "Up to 10 users",
    features: [
      "AI content generation",
      "Predictive posting times",
      "Audience sentiment analysis",
      "Competitor monitoring",
      "ROI tracking",
      "Multi-platform management"
    ],
    benefits: [
      "3x engagement increase",
      "50% time savings",
      "Better audience targeting",
      "Improved brand consistency"
    ],
    targetAudience: ["Marketing teams", "Agencies", "Small businesses", "Influencers"],
    tags: ["Social Media", "AI", "Marketing", "Analytics", "Automation"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/socialsync",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$79-299/month",
    competitors: ["Hootsuite", "Buffer", "Sprout Social"],
    roi: "250% within 4 months",
    setupTime: "45 minutes",
    integrations: ["Facebook", "Instagram", "Twitter", "LinkedIn", "TikTok", "Google Analytics"]
  },
  {
    id: 4,
    name: "CustomerFlow CRM",
    category: "CRM",
    pricing: "Freemium",
    description: "Intelligent customer relationship management with AI-powered lead scoring and sales forecasting",
    price: 39,
    pricingModel: "monthly",
    userLimit: "Up to 20 users",
    features: [
      "AI lead scoring",
      "Sales forecasting",
      "Email automation",
      "Pipeline management",
      "Customer analytics",
      "Mobile CRM"
    ],
    benefits: [
      "25% increase in sales",
      "Better lead conversion",
      "Improved customer retention",
      "Automated follow-ups"
    ],
    targetAudience: ["Sales teams", "Small businesses", "Startups", "Consultants"],
    tags: ["CRM", "AI", "Sales", "Automation", "Analytics"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/customerflow",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$39-159/month",
    competitors: ["Salesforce", "HubSpot", "Pipedrive"],
    roi: "350% within 5 months",
    setupTime: "1 hour",
    integrations: ["Gmail", "Outlook", "Slack", "Zapier", "Stripe", "QuickBooks"]
  },
  {
    id: 5,
    name: "DataViz Studio",
    category: "Analytics",
    pricing: "Freemium",
    description: "Advanced data visualization and business intelligence platform with AI-powered insights",
    price: 89,
    pricingModel: "monthly",
    userLimit: "Up to 15 users",
    features: [
      "AI-powered insights",
      "Interactive dashboards",
      "Real-time data",
      "Custom reports",
      "Data connectors",
      "Collaborative analytics"
    ],
    benefits: [
      "Faster decision making",
      "Better data understanding",
      "Improved reporting",
      "Real-time insights"
    ],
    targetAudience: ["Business analysts", "Data teams", "Executives", "Marketing teams"],
    tags: ["Analytics", "AI", "Data Visualization", "BI", "Reporting"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/dataviz",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$89-399/month",
    competitors: ["Tableau", "Power BI", "Looker"],
    roi: "280% within 6 months",
    setupTime: "2 hours",
    integrations: ["Google Analytics", "Salesforce", "HubSpot", "MySQL", "PostgreSQL", "API endpoints"]
  }
];

// IT Services
export const itServices: ITService[] = [
  {
    id: 1,
    name: "Cloud Migration & DevOps",
    category: "Infrastructure",
    description: "Complete cloud migration services with CI/CD pipeline setup and infrastructure automation",
    hourlyRate: 150,
    projectRate: 15000,
    features: [
      "AWS/Azure/GCP migration",
      "Docker containerization",
      "Kubernetes orchestration",
      "CI/CD pipeline setup",
      "Infrastructure as Code",
      "Monitoring & alerting"
    ],
    benefits: [
      "50% cost reduction",
      "Improved scalability",
      "Faster deployments",
      "Better security"
    ],
    targetAudience: ["Enterprises", "Startups", "Tech companies", "Financial services"],
    tags: ["Cloud", "DevOps", "Migration", "Automation", "Infrastructure"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/cloud-devops",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$150-200/hour",
    responseTime: "2 hours",
    sla: "99.9% uptime guarantee",
    certifications: ["AWS Solutions Architect", "Azure DevOps", "Kubernetes CKA", "Terraform"]
  },
  {
    id: 2,
    name: "Cybersecurity & Compliance",
    category: "Security",
    description: "Comprehensive cybersecurity services including penetration testing, compliance audits, and security training",
    hourlyRate: 200,
    projectRate: 25000,
    features: [
      "Penetration testing",
      "Security audits",
      "Compliance consulting",
      "Incident response",
      "Security training",
      "Vulnerability assessment"
    ],
    benefits: [
      "Regulatory compliance",
      "Risk reduction",
      "Customer trust",
      "Insurance benefits"
    ],
    targetAudience: ["Healthcare", "Finance", "E-commerce", "Government"],
    tags: ["Cybersecurity", "Compliance", "Auditing", "Training", "Risk Management"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/cybersecurity",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$200-300/hour",
    responseTime: "1 hour",
    sla: "24/7 incident response",
    certifications: ["CISSP", "CEH", "OSCP", "ISO 27001", "SOC 2"]
  },
  {
    id: 3,
    name: "Digital Transformation",
    category: "Consulting",
    description: "End-to-end digital transformation consulting with technology strategy and implementation",
    hourlyRate: 175,
    projectRate: 50000,
    features: [
      "Technology assessment",
      "Digital strategy",
      "Process optimization",
      "Change management",
      "Implementation support",
      "ROI measurement"
    ],
    benefits: [
      "Improved efficiency",
      "Cost reduction",
      "Competitive advantage",
      "Customer satisfaction"
    ],
    targetAudience: ["Manufacturing", "Retail", "Healthcare", "Financial services"],
    tags: ["Digital Transformation", "Strategy", "Consulting", "Process Optimization"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/digital-transformation",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$175-250/hour",
    responseTime: "4 hours",
    sla: "Weekly progress reports",
    certifications: ["PMP", "ITIL", "Six Sigma", "Agile", "Scrum Master"]
  }
=======
      "Intelligent document processing with 99.9% accuracy",
      "Automated workflow orchestration",
      "Real-time analytics dashboard",
      "Custom AI model training",
      "Integration with 100+ business tools",
      "24/7 monitoring and alerts"
    ],
    benefits: [
      "Reduce manual processing time by 80%",
      "Improve accuracy and compliance",
      "Scale operations without adding staff",
      "Real-time process insights",
      "Cost savings through efficiency gains"
    ],
    useCases: [
      "Invoice processing automation",
      "Customer service automation",
      "HR process optimization",
      "Supply chain management",
      "Quality control automation"
    ],
    marketPrice: "$2,500 - $8,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    tags: ["AI", "Automation", "Process Optimization", "Machine Learning", "Workflow"],
=======
    id: "ai-ml-1",
    title: "AI-Powered Customer Service Automation",
    description: "Implement intelligent chatbots and automated customer service solutions using advanced NLP and machine learning to handle 80% of customer inquiries automatically.",
    category: "AI & Machine Learning",
    subcategory: "Customer Service",
    price: 2500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-language support",
      "24/7 availability",
      "Seamless human handoff",
      "Analytics dashboard",
      "Custom training on your data",
      "Integration with CRM systems"
    ],
    benefits: [
      "Reduce customer service costs by 60%",
      "Improve response time from hours to seconds",
      "Handle unlimited customer inquiries simultaneously",
      "Provide consistent service quality",
      "Gather valuable customer insights"
    ],
    useCases: [
      "E-commerce customer support",
      "SaaS product help desks",
      "Financial services inquiries",
      "Healthcare appointment scheduling",
      "Real estate lead qualification"
    ],
    marketPrice: "$2,000 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-customer-service"
    },
    tags: ["AI", "Chatbot", "NLP", "Customer Service", "Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 156,
    availability: "1-2 weeks",
    supportLevel: "premium"
  },
  {
    id: "ai-ml-2",
    title: "Predictive Analytics & Business Intelligence",
    description: "Transform your business data into actionable insights with advanced predictive analytics, forecasting models, and real-time business intelligence dashboards.",
    category: "AI & Machine Learning",
    subcategory: "Analytics",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time data processing",
      "Custom ML model development",
      "Interactive dashboards",
      "Automated reporting",
      "Anomaly detection",
      "Forecasting algorithms"
    ],
    benefits: [
      "Increase revenue by 15-25% through better decision making",
      "Reduce operational costs by identifying inefficiencies",
      "Predict market trends and customer behavior",
      "Optimize inventory and resource allocation",
      "Improve customer retention strategies"
    ],
    useCases: [
      "Sales forecasting and pipeline analysis",
      "Inventory optimization",
      "Customer churn prediction",
      "Market trend analysis",
      "Operational efficiency optimization"
    ],
    marketPrice: "$3,000 - $8,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/predictive-analytics"
    },
    tags: ["AI", "Analytics", "Business Intelligence", "Machine Learning", "Forecasting"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group"
    },
<<<<<<< HEAD
    images: ["/images/services/ai-automation.jpg"],
    createdAt: "2024-01-15",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 156,
    availability: "within-week",
    location: "Global",
    certifications: ["ISO 27001", "SOC 2 Type II"],
    languages: ["English", "Spanish", "French", "German"]
  },
  {
    id: "predictive-analytics-platform",
    title: "Enterprise Predictive Analytics Platform",
    description: "Advanced analytics platform that uses machine learning to predict business trends, customer behavior, and market opportunities with 90%+ accuracy.",
    category: "AI & Machine Learning",
    subcategory: "Predictive Analytics",
    price: 3500,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Custom ML model development",
      "Real-time data processing",
      "Interactive dashboards",
      "Automated reporting",
      "API integration capabilities",
      "Advanced visualization tools"
    ],
    benefits: [
      "Improve decision-making accuracy by 90%",
      "Identify market opportunities early",
      "Reduce operational risks",
      "Optimize resource allocation",
      "Increase revenue through insights"
    ],
    useCases: [
      "Sales forecasting",
      "Customer churn prediction",
      "Inventory optimization",
      "Risk assessment",
      "Market trend analysis"
    ],
    marketPrice: "$3,500 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    tags: ["Predictive Analytics", "Machine Learning", "Business Intelligence", "Data Science"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group"
    },
    images: ["/images/services/predictive-analytics.jpg"],
    createdAt: "2024-01-20",
    aiScore: 92,
    rating: 4.8,
    reviewCount: 89,
    availability: "within-week",
    location: "Global",
    certifications: ["ISO 27001", "SOC 2 Type II"],
    languages: ["English", "Spanish", "French", "German"]
  },
  {
    id: "ai-content-creation",
    title: "AI-Powered Content Creation Studio",
    description: "Intelligent content creation platform that generates high-quality, SEO-optimized content for blogs, social media, and marketing materials.",
    category: "AI & Machine Learning",
    subcategory: "Content Creation",
    price: 800,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Multi-format content generation",
      "SEO optimization tools",
      "Brand voice consistency",
      "Plagiarism detection",
      "Content analytics",
      "Multi-language support"
    ],
    benefits: [
      "Increase content production by 10x",
      "Improve SEO rankings",
      "Maintain brand consistency",
      "Reduce content costs",
      "24/7 content generation"
    ],
    useCases: [
      "Blog content creation",
      "Social media posts",
      "Marketing copy",
      "Product descriptions",
      "Email campaigns"
    ],
    marketPrice: "$800 - $2,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    tags: ["AI", "Content Creation", "SEO", "Marketing", "Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group"
    },
    images: ["/images/services/ai-content.jpg"],
    createdAt: "2024-01-25",
    aiScore: 88,
    rating: 4.7,
    reviewCount: 234,
    availability: "immediate",
    location: "Global",
    certifications: ["ISO 27001"],
    languages: ["English", "Spanish", "French", "German", "Chinese"]
  }
];

export const ENHANCED_SERVICE_CATEGORIES = [
  "AI & Machine Learning",
  "Cybersecurity",
  "Cloud & Infrastructure",
  "Data & Analytics",
  "Digital Transformation",
  "Web & Mobile Development",
  "IT Support & Management",
  "Blockchain & Web3"
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
];

// AI Services
export const aiServices: AIService[] = [
  {
    id: 1,
    name: "Custom AI Solutions",
    category: "AI Development",
    pricing: "Project-based",
    description: "Bespoke AI solutions including machine learning models, NLP systems, and computer vision applications",
    price: 50000,
    pricingModel: "one-time",
    features: [
      "Custom ML models",
      "NLP systems",
      "Computer vision",
      "Predictive analytics",
      "Model training",
      "API development"
    ],
    benefits: [
      "Competitive advantage",
      "Process automation",
      "Data insights",
      "Scalable solutions"
    ],
    targetAudience: ["Enterprises", "Startups", "Research institutions", "Healthcare"],
    tags: ["AI", "Machine Learning", "NLP", "Computer Vision", "Custom Development"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/custom-ai",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$50,000-500,000",
    aiModels: ["GPT-4", "BERT", "ResNet", "YOLO", "Custom models"],
    accuracy: "95%+ accuracy",
    trainingData: "Custom datasets + public data",
    compliance: ["GDPR", "HIPAA", "SOC 2", "ISO 27001"]
  },
  {
    id: 2,
    name: "AI Consulting & Strategy",
    category: "AI Consulting",
    pricing: "Hourly",
    description: "Strategic AI consulting to help organizations identify and implement AI opportunities",
    price: 250,
    pricingModel: "hourly",
    features: [
      "AI strategy development",
      "Use case identification",
      "ROI analysis",
      "Implementation roadmap",
      "Team training",
      "Vendor selection"
    ],
    benefits: [
      "Clear AI roadmap",
      "Risk mitigation",
      "Cost optimization",
      "Competitive positioning"
    ],
    targetAudience: ["C-level executives", "IT leaders", "Innovation teams", "Consulting firms"],
    tags: ["AI Strategy", "Consulting", "ROI Analysis", "Implementation", "Training"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-consulting",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$250-400/hour",
    aiModels: ["Strategic frameworks", "ROI models", "Risk assessment tools"],
    accuracy: "N/A",
    trainingData: "Industry best practices",
    compliance: ["Ethical AI guidelines", "Industry standards"]
  }
];
=======
import { ProductListing } from "@/types/listings";

export const ENHANCED_SERVICES: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-automation-suite",
    title: "AI Process Automation Suite",
    description: "Complete workflow automation platform using AI to streamline business processes, reduce manual work by 80%, and increase operational efficiency. Includes RPA, document processing, and intelligent decision-making workflows.",
    category: "AI Automation",
    price: 2999,
    currency: "$",
    tags: ["RPA", "Workflow Automation", "Process Optimization", "AI"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 96
  },
  {
    id: "ai-content-intelligence",
    title: "AI Content Intelligence Platform",
    description: "Advanced content analysis and optimization platform that uses AI to improve SEO, readability, engagement, and conversion rates. Includes sentiment analysis, topic modeling, and content performance prediction.",
    category: "Content AI",
    price: 1499,
    currency: "$",
    tags: ["Content Marketing", "SEO", "AI Analytics", "Performance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 93
  },
  {
    id: "ai-predictive-analytics",
    title: "AI Predictive Analytics Engine",
    description: "Enterprise-grade predictive analytics platform that forecasts business trends, customer behavior, and market opportunities using advanced machine learning algorithms and real-time data processing.",
    category: "Predictive Analytics",
    price: 4999,
    currency: "$",
    tags: ["Predictive Analytics", "Machine Learning", "Business Intelligence", "Forecasting"],
=======
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    aiScore: 92,
    rating: 4.8,
    reviewCount: 89,
    availability: "1-2 weeks",
    supportLevel: "premium"
  },
  {
    id: "ai-ml-3",
    title: "Computer Vision & Image Recognition Solutions",
    description: "Implement advanced computer vision solutions for quality control, security monitoring, and automated image analysis across various industries.",
    category: "AI & Machine Learning",
    subcategory: "Computer Vision",
    price: 4500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Custom model training",
      "Real-time processing",
      "Multi-object detection",
      "Quality control automation",
      "Security monitoring",
      "API integration"
    ],
    benefits: [
      "Reduce quality control costs by 70%",
      "Improve product consistency",
      "24/7 automated monitoring",
      "Reduce human error in visual tasks",
      "Scalable image processing capabilities"
    ],
    useCases: [
      "Manufacturing quality control",
      "Retail inventory management",
      "Security surveillance systems",
      "Medical image analysis",
      "Agricultural crop monitoring"
    ],
    marketPrice: "$4,000 - $15,000/project",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/computer-vision"
    },
    tags: ["AI", "Computer Vision", "Image Recognition", "Quality Control", "Automation"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100"
    },
<<<<<<< HEAD
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T09:15:00.000Z",
    rating: 4.9,
    reviewCount: 234,
    featured: true,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 97
=======
    images: ["https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:15:00.000Z",
    aiScore: 94,
    rating: 4.9,
    reviewCount: 67,
    availability: "1 month",
    supportLevel: "enterprise"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
  },

  // Cybersecurity & Compliance Services
  {
<<<<<<< HEAD
    id: "zero-trust-security",
    title: "Zero Trust Security Framework",
    description: "Comprehensive zero trust security implementation including identity verification, device trust scoring, network segmentation, and continuous monitoring. Reduces security breaches by 95% and ensures compliance with SOC2, ISO27001, and GDPR.",
    category: "Cybersecurity",
    price: 8999,
    currency: "$",
    tags: ["Zero Trust", "Security", "Compliance", "Identity Management"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T11:45:00.000Z",
    rating: 4.9,
    reviewCount: 178,
    featured: true,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 95
  },
  {
    id: "ai-threat-detection",
    title: "AI-Powered Threat Detection System",
    description: "Next-generation threat detection using machine learning to identify and respond to cyber threats in real-time. Includes behavioral analysis, anomaly detection, and automated incident response with 99.9% accuracy.",
    category: "Threat Intelligence",
    price: 3999,
    currency: "$",
    tags: ["Threat Detection", "AI Security", "Incident Response", "Behavioral Analysis"],
=======
    id: "cyber-1",
    title: "Zero-Trust Security Architecture Implementation",
    description: "Design and implement comprehensive zero-trust security frameworks that protect your organization from modern cyber threats with continuous verification and least-privilege access.",
    category: "Cybersecurity",
    subcategory: "Architecture",
    price: 8000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Identity and access management",
      "Network segmentation",
      "Continuous monitoring",
      "Threat detection",
      "Compliance reporting",
      "Security training"
    ],
    benefits: [
      "Reduce security breach risk by 90%",
      "Meet industry compliance requirements",
      "Improve audit readiness",
      "Protect against insider threats",
      "Enable secure remote work"
    ],
    useCases: [
      "Financial services security",
      "Healthcare data protection",
      "Government contractor compliance",
      "Enterprise network security",
      "Cloud security implementation"
    ],
    marketPrice: "$7,000 - $25,000/project",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/zero-trust-security"
    },
    tags: ["Cybersecurity", "Zero-Trust", "Compliance", "Network Security", "Access Control"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T16:45:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 134,
    availability: "1 month",
    supportLevel: "enterprise"
  },
  {
    id: "cyber-2",
    title: "Penetration Testing & Vulnerability Assessment",
    description: "Comprehensive security testing services including penetration testing, vulnerability assessments, and security audits to identify and remediate security weaknesses.",
    category: "Cybersecurity",
    subcategory: "Testing",
    price: 3500,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "External and internal testing",
      "Web application security",
      "Network infrastructure testing",
      "Social engineering assessment",
      "Detailed remediation report",
      "Follow-up verification"
    ],
    benefits: [
      "Identify security vulnerabilities before attackers",
      "Meet compliance requirements",
      "Improve security posture",
      "Protect customer data",
      "Reduce cyber insurance costs"
    ],
    useCases: [
      "Annual security audits",
      "Compliance requirements",
      "Pre-deployment testing",
      "Merger and acquisition due diligence",
      "Incident response preparation"
    ],
    marketPrice: "$3,000 - $10,000/assessment",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/penetration-testing"
    },
    tags: ["Cybersecurity", "Penetration Testing", "Vulnerability Assessment", "Security Audit", "Compliance"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
<<<<<<< HEAD
    images: ["https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T16:20:00.000Z",
    rating: 4.8,
    reviewCount: 145,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 94
  },
  {
    id: "compliance-automation",
    title: "Regulatory Compliance Automation",
    description: "Automated compliance monitoring and reporting system for multiple regulations including GDPR, CCPA, HIPAA, and SOX. Reduces compliance overhead by 70% and ensures continuous regulatory adherence.",
    category: "Compliance",
    price: 2499,
    currency: "$",
    tags: ["Compliance", "GDPR", "HIPAA", "Automation", "Reporting"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T13:10:00.000Z",
    rating: 4.7,
    reviewCount: 92,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 91
=======
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T11:20:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 78,
    availability: "1-2 weeks",
    supportLevel: "standard"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
  },

  // Cloud & DevOps Services
  {
<<<<<<< HEAD
    id: "multi-cloud-orchestration",
    title: "Multi-Cloud Orchestration Platform",
    description: "Unified management platform for AWS, Azure, and Google Cloud with automated resource optimization, cost management, and disaster recovery. Reduces cloud costs by 30% and improves operational efficiency.",
    category: "Cloud Management",
    price: 5999,
    currency: "$",
    tags: ["Multi-Cloud", "AWS", "Azure", "GCP", "Cost Optimization"],
=======
    id: "cloud-1",
    title: "Multi-Cloud Infrastructure Management",
    description: "Comprehensive multi-cloud strategy and management services to optimize costs, improve performance, and ensure business continuity across AWS, Azure, and Google Cloud.",
    category: "Cloud & DevOps",
    subcategory: "Infrastructure",
    price: 5000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-cloud architecture design",
      "Cost optimization strategies",
      "Performance monitoring",
      "Disaster recovery planning",
      "Security compliance",
      "24/7 support"
    ],
    benefits: [
      "Reduce cloud costs by 20-40%",
      "Improve application performance",
      "Enhance disaster recovery capabilities",
      "Avoid vendor lock-in",
      "Optimize resource utilization"
    ],
    useCases: [
      "Enterprise cloud migration",
      "Multi-cloud strategy development",
      "Cost optimization initiatives",
      "Disaster recovery implementation",
      "Performance optimization"
    ],
    marketPrice: "$4,000 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/multi-cloud-management"
    },
    tags: ["Cloud", "DevOps", "AWS", "Azure", "Google Cloud", "Infrastructure"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
<<<<<<< HEAD
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T10:30:00.000Z",
    rating: 4.8,
    reviewCount: 167,
    featured: true,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 93
  },
  {
    id: "devops-automation",
    title: "DevOps Pipeline Automation",
    description: "Complete CI/CD pipeline automation with automated testing, deployment, and monitoring. Includes infrastructure as code, automated rollbacks, and performance optimization. Reduces deployment time by 80%.",
    category: "DevOps",
    price: 3499,
    currency: "$",
    tags: ["CI/CD", "DevOps", "Automation", "Infrastructure as Code"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T15:45:00.000Z",
    rating: 4.9,
    reviewCount: 203,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 95
  },
  {
    id: "container-orchestration",
    title: "Kubernetes & Container Orchestration",
    description: "Enterprise-grade container orchestration with automated scaling, load balancing, and service mesh implementation. Includes monitoring, logging, and security hardening for production environments.",
    category: "Containerization",
    price: 4499,
    currency: "$",
    tags: ["Kubernetes", "Docker", "Containerization", "Microservices"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T12:00:00.000Z",
    rating: 4.8,
    reviewCount: 134,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 92
  },

  // Data & Analytics Services
  {
    id: "real-time-data-pipeline",
    title: "Real-Time Data Pipeline Architecture",
    description: "High-performance real-time data processing pipeline using Apache Kafka, Apache Flink, and modern data warehouses. Processes millions of events per second with sub-second latency for real-time analytics.",
    category: "Data Engineering",
    price: 6999,
    currency: "$",
    tags: ["Real-Time", "Data Pipeline", "Apache Kafka", "Stream Processing"],
=======
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-16T13:15:00.000Z",
    aiScore: 91,
    rating: 4.7,
    reviewCount: 112,
    availability: "1-2 weeks",
    supportLevel: "premium"
  },
  {
    id: "cloud-2",
    title: "DevOps Automation & CI/CD Pipeline",
    description: "Implement automated DevOps practices and CI/CD pipelines to accelerate software delivery, improve code quality, and reduce deployment risks.",
    category: "Cloud & DevOps",
    subcategory: "Automation",
    price: 4000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "CI/CD pipeline setup",
      "Automated testing",
      "Infrastructure as code",
      "Monitoring and alerting",
      "Security scanning",
      "Performance optimization"
    ],
    benefits: [
      "Reduce deployment time by 80%",
      "Improve code quality and reliability",
      "Enable faster feature delivery",
      "Reduce human error in deployments",
      "Improve team productivity"
    ],
    useCases: [
      "Software development teams",
      "Digital transformation projects",
      "Microservices architecture",
      "Container orchestration",
      "Legacy system modernization"
    ],
    marketPrice: "$3,500 - $8,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/devops-automation"
    },
    tags: ["DevOps", "CI/CD", "Automation", "Infrastructure as Code", "Monitoring"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-19T15:30:00.000Z",
    aiScore: 89,
    rating: 4.6,
    reviewCount: 95,
    availability: "1-2 weeks",
    supportLevel: "standard"
  },

  // Business Intelligence & Analytics
  {
    id: "bi-1",
    title: "Real-Time Business Intelligence Dashboard",
    description: "Custom business intelligence dashboards that provide real-time insights into key performance indicators, enabling data-driven decision making across your organization.",
    category: "Business Intelligence",
    subcategory: "Dashboards",
    price: 3000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time data visualization",
      "Custom KPI tracking",
      "Interactive charts and graphs",
      "Mobile-responsive design",
      "Automated reporting",
      "Data integration services"
    ],
    benefits: [
      "Improve decision-making speed by 60%",
      "Identify business opportunities faster",
      "Monitor performance in real-time",
      "Reduce manual reporting time",
      "Enable data-driven culture"
    ],
    useCases: [
      "Sales performance monitoring",
      "Financial reporting and analysis",
      "Operational efficiency tracking",
      "Customer behavior analysis",
      "Supply chain optimization"
    ],
    marketPrice: "$2,500 - $6,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/bi-dashboards"
    },
    tags: ["Business Intelligence", "Analytics", "Dashboards", "KPI", "Real-time"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-17T12:00:00.000Z",
    aiScore: 88,
    rating: 4.7,
    reviewCount: 73,
    availability: "1-2 weeks",
    supportLevel: "standard"
  },

  // Digital Transformation Services
  {
    id: "digital-1",
    title: "Legacy System Modernization",
    description: "Transform your outdated legacy systems into modern, cloud-native applications that improve efficiency, reduce costs, and enable digital innovation.",
    category: "Digital Transformation",
    subcategory: "Modernization",
    price: 15000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "System assessment and planning",
      "Cloud migration strategy",
      "API development and integration",
      "Data migration services",
      "User training and change management",
      "Ongoing support and maintenance"
    ],
    benefits: [
      "Reduce operational costs by 30-50%",
      "Improve system performance and reliability",
      "Enable new digital capabilities",
      "Enhance user experience",
      "Reduce security risks"
    ],
    useCases: [
      "ERP system modernization",
      "Legacy database migration",
      "Mainframe to cloud migration",
      "Custom application modernization",
      "Integration platform development"
    ],
    marketPrice: "$15,000 - $100,000/project",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/legacy-modernization"
    },
    tags: ["Digital Transformation", "Legacy Systems", "Cloud Migration", "API Development", "Modernization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-21T10:45:00.000Z",
    aiScore: 87,
    rating: 4.6,
    reviewCount: 45,
    availability: "1 month",
    supportLevel: "enterprise"
  },

  // Specialized Industry Solutions
  {
    id: "industry-1",
    title: "Healthcare IT Compliance & Security",
    description: "Specialized IT services for healthcare organizations, ensuring HIPAA compliance, data security, and seamless integration of medical systems while maintaining patient privacy.",
    category: "Healthcare IT",
    subcategory: "Compliance",
    price: 6000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "HIPAA compliance auditing",
      "Medical device security",
      "Electronic health record integration",
      "Patient data protection",
      "Staff training programs",
      "Incident response planning"
    ],
    benefits: [
      "Ensure HIPAA compliance and avoid penalties",
      "Protect sensitive patient information",
      "Improve healthcare delivery efficiency",
      "Reduce security breach risks",
      "Enable telemedicine capabilities"
    ],
    useCases: [
      "Hospitals and medical centers",
      "Private medical practices",
      "Healthcare technology companies",
      "Medical device manufacturers",
      "Healthcare consulting firms"
    ],
    marketPrice: "$5,000 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/healthcare-it"
    },
    tags: ["Healthcare", "HIPAA", "Compliance", "Security", "Medical IT"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100"
    },
<<<<<<< HEAD
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-08T14:15:00.000Z",
    rating: 4.9,
    reviewCount: 189,
    featured: true,
    location: "Global",
    availability: "4-5 Weeks",
    aiScore: 96
  },
  {
    id: "data-governance-platform",
    title: "Data Governance & Quality Platform",
    description: "Comprehensive data governance solution with data lineage, quality monitoring, and compliance tracking. Ensures data accuracy, consistency, and regulatory compliance across all data assets.",
    category: "Data Governance",
    price: 3999,
    currency: "$",
    tags: ["Data Governance", "Data Quality", "Data Lineage", "Compliance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T09:30:00.000Z",
    rating: 4.7,
    reviewCount: 78,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 90
  },
  {
    id: "business-intelligence-suite",
    title: "Advanced Business Intelligence Suite",
    description: "Next-generation BI platform with AI-powered insights, natural language querying, and predictive analytics. Includes interactive dashboards, automated reporting, and mobile-first design.",
    category: "Business Intelligence",
    price: 2499,
    currency: "$",
    tags: ["Business Intelligence", "Analytics", "Dashboards", "AI Insights"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-12T11:20:00.000Z",
    rating: 4.8,
    reviewCount: 156,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 93
  },

  // IoT & Edge Computing Services
  {
    id: "iot-platform",
    title: "Enterprise IoT Platform",
    description: "Scalable IoT platform for managing millions of connected devices with real-time monitoring, predictive maintenance, and edge computing capabilities. Includes device management, data analytics, and security.",
    category: "IoT",
    price: 7999,
    currency: "$",
    tags: ["IoT", "Edge Computing", "Device Management", "Predictive Maintenance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T16:45:00.000Z",
    rating: 4.9,
    reviewCount: 267,
    featured: true,
    location: "Global",
    availability: "5-6 Weeks",
    aiScore: 95
  },
  {
    id: "edge-ai-computing",
    title: "Edge AI Computing Solutions",
    description: "Edge computing solutions with AI inference capabilities for real-time processing at the network edge. Reduces latency by 90% and enables offline AI processing for critical applications.",
    category: "Edge Computing",
    price: 5499,
    currency: "$",
    tags: ["Edge Computing", "AI Inference", "Real-Time", "Low Latency"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T13:30:00.000Z",
    rating: 4.8,
    reviewCount: 98,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 94
  },

  // Blockchain & Web3 Services
  {
    id: "blockchain-enterprise",
    title: "Enterprise Blockchain Solutions",
    description: "Private blockchain networks for enterprise applications including supply chain tracking, digital identity, and smart contracts. Built on Hyperledger Fabric with enterprise-grade security and scalability.",
    category: "Blockchain",
    price: 12999,
    currency: "$",
    tags: ["Blockchain", "Hyperledger", "Smart Contracts", "Supply Chain"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-12T10:15:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 96
  },
  {
    id: "web3-development",
    title: "Web3 Development & Integration",
    description: "Complete Web3 development services including DeFi applications, NFT marketplaces, and decentralized applications. Includes smart contract development, frontend integration, and blockchain infrastructure.",
    category: "Web3",
    price: 8999,
    currency: "$",
    tags: ["Web3", "DeFi", "NFT", "Smart Contracts", "DApps"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-18T15:20:00.000Z",
    rating: 4.8,
    reviewCount: 134,
    location: "Global",
    availability: "4-5 Weeks",
    aiScore: 93
  },

  // Digital Transformation Services
  {
    id: "digital-transformation",
    title: "Digital Transformation Consulting",
    description: "End-to-end digital transformation services including strategy development, technology assessment, change management, and implementation. Helps organizations modernize operations and achieve digital maturity.",
    category: "Digital Transformation",
    price: 15999,
    currency: "$",
    tags: ["Digital Transformation", "Strategy", "Change Management", "Modernization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-05T08:30:00.000Z",
    rating: 4.9,
    reviewCount: 312,
    featured: true,
    location: "Global",
    availability: "8-12 Weeks",
    aiScore: 97
  },
  {
    id: "legacy-modernization",
    title: "Legacy System Modernization",
    description: "Comprehensive legacy system modernization services including cloud migration, API development, and microservices architecture. Reduces maintenance costs by 60% and improves system performance.",
    category: "System Modernization",
    price: 19999,
    currency: "$",
    tags: ["Legacy Systems", "Cloud Migration", "Microservices", "API Development"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-08T12:45:00.000Z",
    rating: 4.9,
    reviewCount: 189,
    featured: true,
    location: "Global",
    availability: "10-16 Weeks",
    aiScore: 96
  },

  // Specialized Industry Solutions
  {
    id: "healthcare-ai",
    title: "Healthcare AI Solutions",
    description: "HIPAA-compliant AI solutions for healthcare including medical image analysis, patient data analytics, and predictive diagnostics. Built with healthcare-specific security and compliance requirements.",
    category: "Healthcare AI",
    price: 14999,
    currency: "$",
    tags: ["Healthcare", "AI", "HIPAA", "Medical Imaging", "Predictive Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1576091160399-112f8f6a9b3c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T09:00:00.000Z",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 95
  },
  {
    id: "fintech-solutions",
    title: "FinTech Innovation Platform",
    description: "Comprehensive FinTech platform including payment processing, fraud detection, risk assessment, and regulatory compliance. Built with bank-grade security and real-time processing capabilities.",
    category: "FinTech",
    price: 17999,
    currency: "$",
    tags: ["FinTech", "Payments", "Fraud Detection", "Risk Assessment", "Compliance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T14:20:00.000Z",
    rating: 4.9,
    reviewCount: 234,
    featured: true,
    location: "Global",
    availability: "8-10 Weeks",
    aiScore: 96
  },
  {
    id: "retail-ai",
    title: "Retail AI & Analytics Platform",
    description: "AI-powered retail analytics platform with customer behavior analysis, inventory optimization, demand forecasting, and personalized marketing. Increases sales by 25% and reduces inventory costs by 30%.",
    category: "Retail AI",
    price: 6999,
    currency: "$",
    tags: ["Retail", "AI Analytics", "Customer Behavior", "Inventory Optimization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T11:30:00.000Z",
    rating: 4.8,
    reviewCount: 167,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 94
  }
];

// Service categories for filtering
export const ENHANCED_SERVICE_CATEGORIES = [
  { label: 'AI Automation', value: 'ai-automation' },
  { label: 'Content AI', value: 'content-ai' },
  { label: 'Predictive Analytics', value: 'predictive-analytics' },
  { label: 'Cybersecurity', value: 'cybersecurity' },
  { label: 'Threat Intelligence', value: 'threat-intelligence' },
  { label: 'Compliance', value: 'compliance' },
  { label: 'Cloud Management', value: 'cloud-management' },
  { label: 'DevOps', value: 'devops' },
  { label: 'Containerization', value: 'containerization' },
  { label: 'Data Engineering', value: 'data-engineering' },
  { label: 'Data Governance', value: 'data-governance' },
  { label: 'Business Intelligence', value: 'business-intelligence' },
  { label: 'IoT', value: 'iot' },
  { label: 'Edge Computing', value: 'edge-computing' },
  { label: 'Blockchain', value: 'blockchain' },
  { label: 'Web3', value: 'web3' },
  { label: 'Digital Transformation', value: 'digital-transformation' },
  { label: 'System Modernization', value: 'system-modernization' },
  { label: 'Healthcare AI', value: 'healthcare-ai' },
  { label: 'FinTech', value: 'fintech' },
  { label: 'Retail AI', value: 'retail-ai' }
];

// Service pricing tiers
export const SERVICE_PRICING_TIERS = {
  starter: {
    name: "Starter",
    price: "$999 - $2,999",
    description: "Basic implementation with core features",
    features: ["Core functionality", "Basic support", "Documentation", "Training"]
  },
  professional: {
    name: "Professional", 
    price: "$3,000 - $7,999",
    description: "Full-featured solution with advanced capabilities",
    features: ["Advanced features", "Priority support", "Customization", "Integration support", "Performance optimization"]
  },
  enterprise: {
    name: "Enterprise",
    price: "$8,000 - $20,000+",
    description: "Custom enterprise solution with dedicated support",
    features: ["Custom development", "Dedicated support", "SLA guarantees", "Custom integrations", "On-site training", "24/7 monitoring"]
  }
};
>>>>>>> origin/cursor/expand-services-and-deploy-updates-302a
=======
    images: ["https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-23T14:20:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 89,
    availability: "1-2 weeks",
    supportLevel: "premium"
  },
  {
    id: "industry-2",
    title: "Financial Services Technology Solutions",
    description: "Comprehensive IT solutions for financial institutions, including regulatory compliance, fraud detection, payment processing, and digital banking platforms.",
    category: "Financial Services",
    subcategory: "Technology",
    price: 8000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Regulatory compliance (SOX, PCI-DSS)",
      "Fraud detection and prevention",
      "Payment gateway integration",
      "Digital banking platforms",
      "Risk management systems",
      "Audit trail and reporting"
    ],
    benefits: [
      "Ensure regulatory compliance",
      "Reduce fraud losses",
      "Improve customer experience",
      "Enable digital transformation",
      "Reduce operational risks"
    ],
    useCases: [
      "Banks and credit unions",
      "Payment processors",
      "Investment firms",
      "Insurance companies",
      "Fintech startups"
    ],
    marketPrice: "$7,000 - $20,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/financial-services"
    },
    tags: ["Financial Services", "Compliance", "Fraud Detection", "Digital Banking", "Regulatory"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-24T11:30:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 67,
    availability: "1 month",
    supportLevel: "enterprise"
  }
];

export const SERVICE_CATEGORIES = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    description: "Advanced artificial intelligence and machine learning solutions",
    icon: "🤖",
    services: ENHANCED_SERVICES.filter(s => s.category === "AI & Machine Learning")
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "Comprehensive security solutions and protection services",
    icon: "🔒",
    services: ENHANCED_SERVICES.filter(s => s.category === "Cybersecurity")
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    description: "Cloud infrastructure and DevOps automation services",
    icon: "☁️",
    services: ENHANCED_SERVICES.filter(s => s.category === "Cloud & DevOps")
  },
  {
    id: "business-intelligence",
    name: "Business Intelligence",
    description: "Data analytics and business intelligence solutions",
    icon: "📊",
    services: ENHANCED_SERVICES.filter(s => s.category === "Business Intelligence")
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    description: "Legacy system modernization and digital innovation",
    icon: "🚀",
    services: ENHANCED_SERVICES.filter(s => s.category === "Digital Transformation")
  },
  {
    id: "healthcare-it",
    name: "Healthcare IT",
    description: "Specialized IT solutions for healthcare organizations",
    icon: "🏥",
    services: ENHANCED_SERVICES.filter(s => s.category === "Healthcare IT")
  },
  {
    id: "financial-services",
    name: "Financial Services",
    description: "Technology solutions for financial institutions",
    icon: "💰",
    services: ENHANCED_SERVICES.filter(s => s.category === "Financial Services")
  }
];

export const getServiceByCategory = (categoryId: string) => {
  return ENHANCED_SERVICES.filter(service => 
    SERVICE_CATEGORIES.find(cat => cat.id === categoryId)?.services.includes(service)
  );
};

export const getServiceById = (id: string) => {
  return ENHANCED_SERVICES.find(service => service.id === id);
};
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
