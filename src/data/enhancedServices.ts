<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
import { ProductListing } from "@/types/listings";

export const ENHANCED_SERVICES: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-automation-suite",
    title: "AI Process Automation Suite",
<<<<<<< HEAD
    description: "Complete workflow automation platform using AI to streamline business processes, reduce manual work by 80%, and increase operational efficiency. Includes RPA, document processing, and intelligent decision-making workflows.",
    category: "AI Automation",
    price: 2999,
    currency: "$",
    tags: ["RPA", "Workflow Automation", "Process Optimization", "AI"],
=======
import { ProductListing } from "@/types/listings";

// Enhanced Services Data with Real Micro SAAS Solutions
export const ENHANCED_SERVICES: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-chatbot-enterprise",
    title: "Enterprise AI Chatbot Development",
    description: "Custom AI-powered chatbots for customer service, sales, and support. Integrates with your existing CRM, website, and social media platforms. Features multilingual support, sentiment analysis, and 24/7 availability.",
    category: "AI Development",
    subcategory: "Chatbots",
    price: 2999,
    currency: "$",
    tags: ["AI Chatbot", "Customer Service", "CRM Integration", "Multilingual"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1716
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
<<<<<<< HEAD
    images: ["https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&h=500"],
=======
    description: "Complete workflow automation platform using AI to streamline business processes, reduce manual work by 80%, and increase operational efficiency. Includes process mapping, RPA integration, and analytics dashboard.",
    category: "AI Automation",
    subcategory: "Process Optimization",
    price: 2999,
    currency: "$",
    tags: ["RPA", "Workflow Automation", "AI", "Process Mining", "Business Intelligence"],
    author: {
      name: "ZionTech AI Solutions",
      id: "ziontech-ai",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
=======
    images: ["https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=800&h=500"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1716
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
<<<<<<< HEAD
    location: "Global",
=======
    location: "Middletown, DE",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1716
    availability: "2-3 Weeks",
    aiScore: 96
  },
  {
<<<<<<< HEAD
<<<<<<< HEAD
    id: "ai-content-intelligence",
    title: "AI Content Intelligence Platform",
    description: "Advanced content analysis and optimization platform that uses AI to improve SEO, readability, engagement, and conversion rates. Includes sentiment analysis, topic modeling, and content performance prediction.",
    category: "Content AI",
    price: 1499,
    currency: "$",
    tags: ["Content Marketing", "SEO", "AI Analytics", "Performance"],
=======
    id: "ai-content-automation",
    title: "AI Content Automation Suite",
    description: "Automate your content creation with AI-powered tools for blog posts, social media, email campaigns, and product descriptions. Includes SEO optimization, brand voice consistency, and multi-platform publishing.",
    category: "AI Services",
    subcategory: "Content Creation",
    price: 499,
    currency: "$",
    tags: ["Content Automation", "SEO", "Social Media", "Email Marketing"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1716
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
<<<<<<< HEAD
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
=======
    id: "ai-customer-intelligence",
    title: "AI Customer Intelligence Platform",
    description: "Advanced customer behavior analysis using machine learning to predict churn, optimize pricing, and personalize customer experiences. Real-time insights with 95% prediction accuracy.",
    category: "AI Analytics",
    subcategory: "Customer Intelligence",
    price: 4499,
    currency: "$",
    tags: ["Customer Analytics", "Predictive Modeling", "Personalization", "Churn Prevention", "ML"],
    author: {
      name: "ZionTech AI Solutions",
      id: "ziontech-ai",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 94
  },
  {
    id: "ai-content-optimization",
    title: "AI Content Optimization Engine",
    description: "SEO and content performance optimization using natural language processing. Automatically analyzes content quality, suggests improvements, and tracks performance metrics for better search rankings.",
    category: "AI Marketing",
    subcategory: "Content Optimization",
    price: 1999,
    currency: "$",
    tags: ["SEO", "Content Marketing", "NLP", "Performance Analytics", "Automation"],
    author: {
      name: "ZionTech AI Solutions",
      id: "ziontech-ai",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:15:00.000Z",
    rating: 4.7,
    reviewCount: 234,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 92
  },

  // Cybersecurity Services
  {
    id: "zero-trust-security",
    title: "Zero Trust Security Implementation",
    description: "Complete zero trust architecture implementation including identity verification, device trust scoring, network segmentation, and continuous monitoring. Reduces security incidents by 90%.",
    category: "Cybersecurity",
    subcategory: "Zero Trust",
    price: 8999,
    currency: "$",
    tags: ["Zero Trust", "Identity Management", "Network Security", "Compliance", "Monitoring"],
    author: {
      name: "ZionTech Security",
      id: "ziontech-security",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T11:00:00.000Z",
    rating: 4.9,
    reviewCount: 67,
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 95
  },
  {
<<<<<<< HEAD
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
=======
    createdAt: "2024-01-20T14:30:00.000Z",
    rating: 4.7,
    reviewCount: 89,
    location: "Middletown, DE",
    availability: "Immediate",
    aiScore: 92
  },
  {
    id: "ai-data-analytics",
    title: "AI-Powered Business Analytics Dashboard",
    description: "Transform your business data into actionable insights with AI-driven analytics. Real-time dashboards, predictive analytics, customer behavior analysis, and automated reporting for data-driven decision making.",
    category: "AI Services",
    subcategory: "Analytics",
    price: 1299,
    currency: "$",
    tags: ["Business Analytics", "Predictive Analytics", "Dashboard", "Reporting"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:15:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    location: "Middletown, DE",
    availability: "1-2 Weeks",
    aiScore: 94
  },

  // IT Infrastructure & Cloud Services
  {
    id: "cloud-migration-consulting",
    title: "Cloud Migration & Optimization Consulting",
    description: "Expert guidance for migrating your infrastructure to AWS, Azure, or Google Cloud. Includes cost optimization, security best practices, performance tuning, and ongoing support. Reduce cloud costs by up to 40%.",
    category: "IT Services",
    subcategory: "Cloud Migration",
    price: 2499,
    currency: "$",
    tags: ["Cloud Migration", "AWS", "Azure", "Cost Optimization", "Security"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1716
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
<<<<<<< HEAD
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
=======
    id: "threat-intelligence-platform",
    title: "AI-Powered Threat Intelligence Platform",
    description: "Real-time threat detection and response using machine learning algorithms. Monitors network traffic, detects anomalies, and provides automated incident response with 99.9% accuracy.",
    category: "Cybersecurity",
    subcategory: "Threat Detection",
    price: 6499,
    currency: "$",
    tags: ["Threat Intelligence", "ML", "Incident Response", "Network Monitoring", "Automation"],
    author: {
      name: "ZionTech Security",
      id: "ziontech-security",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T15:45:00.000Z",
    rating: 4.8,
    reviewCount: 45,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 93
  },
  {
    id: "compliance-automation",
    title: "Compliance Automation Suite",
    description: "Automated compliance management for GDPR, HIPAA, SOC2, and ISO27001. Continuous monitoring, automated reporting, and risk assessment with AI-powered insights.",
    category: "Cybersecurity",
    subcategory: "Compliance",
    price: 3999,
    currency: "$",
    tags: ["Compliance", "GDPR", "HIPAA", "SOC2", "Automation", "Risk Management"],
    author: {
      name: "ZionTech Security",
      id: "ziontech-security",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T13:20:00.000Z",
    rating: 4.7,
    reviewCount: 78,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 91
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
  },

  // Cloud & DevOps Services
  {
<<<<<<< HEAD
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
=======
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T11:45:00.000Z",
    rating: 4.9,
    reviewCount: 134,
    featured: true,
    location: "Middletown, DE",
    availability: "3-4 Weeks",
    aiScore: 91
  },
  {
    id: "cybersecurity-audit",
    title: "Comprehensive Cybersecurity Audit & Assessment",
    description: "Complete security assessment including penetration testing, vulnerability scanning, compliance review (SOC2, HIPAA, GDPR), and security roadmap development. Protect your business from modern cyber threats.",
    category: "IT Services",
    subcategory: "Cybersecurity",
    price: 3999,
    currency: "$",
    tags: ["Cybersecurity", "Penetration Testing", "Compliance", "Security Audit"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1716
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
<<<<<<< HEAD
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T15:45:00.000Z",
    rating: 4.9,
    reviewCount: 203,
=======
    id: "multi-cloud-orchestration",
    title: "Multi-Cloud Orchestration Platform",
    description: "Unified management platform for AWS, Azure, and Google Cloud. Automated resource provisioning, cost optimization, and performance monitoring across all cloud providers.",
    category: "Cloud Services",
    subcategory: "Multi-Cloud",
    price: 5499,
    currency: "$",
    tags: ["Multi-Cloud", "AWS", "Azure", "GCP", "Orchestration", "Cost Optimization"],
    author: {
      name: "ZionTech Cloud",
      id: "ziontech-cloud",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T10:30:00.000Z",
    rating: 4.8,
    reviewCount: 112,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 94
  },
  {
    id: "devops-automation",
    title: "DevOps Automation & CI/CD Pipeline",
    description: "End-to-end DevOps automation including automated testing, deployment, monitoring, and rollback capabilities. Reduces deployment time by 80% and increases reliability.",
    category: "DevOps",
    subcategory: "Automation",
    price: 3999,
    currency: "$",
    tags: ["DevOps", "CI/CD", "Automation", "Testing", "Monitoring", "Deployment"],
    author: {
      name: "ZionTech Cloud",
      id: "ziontech-cloud",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T16:15:00.000Z",
    rating: 4.9,
    reviewCount: 89,
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
    location: "Global",
=======
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T13:20:00.000Z",
    rating: 4.9,
    reviewCount: 98,
    location: "Middletown, DE",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1716
    availability: "2-3 Weeks",
    aiScore: 95
  },
  {
<<<<<<< HEAD
<<<<<<< HEAD
    id: "container-orchestration",
    title: "Kubernetes & Container Orchestration",
    description: "Enterprise-grade container orchestration with automated scaling, load balancing, and service mesh implementation. Includes monitoring, logging, and security hardening for production environments.",
    category: "Containerization",
    price: 4499,
    currency: "$",
    tags: ["Kubernetes", "Docker", "Containerization", "Microservices"],
=======
    id: "devops-automation",
    title: "DevOps Automation & CI/CD Pipeline Setup",
    description: "Automate your software development lifecycle with modern DevOps practices. Set up CI/CD pipelines, infrastructure as code, automated testing, and deployment automation for faster, more reliable releases.",
    category: "IT Services",
    subcategory: "DevOps",
    price: 1899,
    currency: "$",
    tags: ["DevOps", "CI/CD", "Automation", "Infrastructure as Code"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1716
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
<<<<<<< HEAD
    images: ["https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T12:00:00.000Z",
    rating: 4.8,
    reviewCount: 134,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 92
=======
    id: "serverless-architecture",
    title: "Serverless Architecture Design & Implementation",
    description: "Complete serverless solution design using AWS Lambda, Azure Functions, and Google Cloud Functions. Event-driven architecture with auto-scaling and pay-per-use pricing.",
    category: "Cloud Services",
    subcategory: "Serverless",
    price: 6999,
    currency: "$",
    tags: ["Serverless", "Lambda", "Event-Driven", "Auto-scaling", "Cost Optimization"],
    author: {
      name: "ZionTech Cloud",
      id: "ziontech-cloud",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-25T12:00:00.000Z",
    rating: 4.7,
    reviewCount: 56,
    location: "Global",
    availability: "4-5 Weeks",
    aiScore: 93
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
=======
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T15:30:00.000Z",
    rating: 4.7,
    reviewCount: 76,
    location: "Middletown, DE",
    availability: "2-3 Weeks",
    aiScore: 89
  },

  // Business Process Automation
  {
    id: "workflow-automation",
    title: "Business Process Automation & Workflow Optimization",
    description: "Streamline your business operations with intelligent workflow automation. Automate repetitive tasks, approval processes, document management, and cross-departmental workflows. Increase productivity by 60%.",
    category: "Business Services",
    subcategory: "Process Automation",
    price: 1599,
    currency: "$",
    tags: ["Workflow Automation", "Process Optimization", "Productivity", "Document Management"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T10:15:00.000Z",
    rating: 4.8,
    reviewCount: 112,
    location: "Middletown, DE",
    availability: "1-2 Weeks",
    aiScore: 93
  },
  {
    id: "crm-integration",
    title: "CRM Integration & Customer Data Management",
    description: "Integrate all your customer touchpoints into a unified CRM system. Connect email, social media, website analytics, and sales data for 360-degree customer insights and improved customer experience.",
    category: "Business Services",
    subcategory: "CRM",
    price: 899,
    currency: "$",
    tags: ["CRM Integration", "Customer Data", "Analytics", "Customer Experience"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T16:45:00.000Z",
    rating: 4.6,
    reviewCount: 89,
    location: "Middletown, DE",
    availability: "1-2 Weeks",
    aiScore: 87
  },

  // Digital Marketing & SEO
  {
    id: "seo-optimization",
    title: "Advanced SEO Optimization & Digital Marketing",
    description: "Comprehensive SEO strategy including technical optimization, content strategy, local SEO, and performance tracking. Improve your search rankings and drive organic traffic to your website.",
    category: "Marketing Services",
    subcategory: "SEO",
    price: 799,
    currency: "$",
    tags: ["SEO", "Digital Marketing", "Content Strategy", "Local SEO"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-25T12:00:00.000Z",
    rating: 4.7,
    reviewCount: 156,
    location: "Middletown, DE",
    availability: "Immediate",
    aiScore: 88
  },
  {
    id: "social-media-automation",
    title: "Social Media Management & Automation Platform",
    description: "Comprehensive social media management solution with automated posting, content scheduling, engagement tracking, and analytics. Manage all your social media accounts from one dashboard.",
    category: "Marketing Services",
    subcategory: "Social Media",
    price: 399,
    currency: "$",
    tags: ["Social Media", "Automation", "Content Scheduling", "Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T14:30:00.000Z",
    rating: 4.5,
    reviewCount: 78,
    location: "Middletown, DE",
    availability: "Immediate",
    aiScore: 85
  },

  // E-commerce & Web Development
  {
    id: "ecommerce-platform",
    title: "Custom E-commerce Platform Development",
    description: "Build a custom online store with advanced features like inventory management, payment processing, customer accounts, and analytics. Mobile-responsive design with modern UI/UX principles.",
    category: "Web Development",
    subcategory: "E-commerce",
    price: 3499,
    currency: "$",
    tags: ["E-commerce", "Web Development", "Payment Processing", "Inventory Management"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-05T09:15:00.000Z",
    rating: 4.8,
    reviewCount: 92,
    featured: true,
    location: "Middletown, DE",
    availability: "4-6 Weeks",
    aiScore: 90
  },
  {
    id: "progressive-web-app",
    title: "Progressive Web App (PWA) Development",
    description: "Convert your website into a mobile app-like experience with PWA technology. Features offline functionality, push notifications, and app-like navigation. Works across all devices and platforms.",
    category: "Web Development",
    subcategory: "PWA",
    price: 1299,
    currency: "$",
    tags: ["PWA", "Mobile App", "Offline Functionality", "Push Notifications"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-10T11:45:00.000Z",
    rating: 4.6,
    reviewCount: 67,
    location: "Middletown, DE",
    availability: "2-3 Weeks",
    aiScore: 86
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1716
  },

  // Data & Analytics Services
  {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    id: "data-warehouse-setup",
    title: "Data Warehouse & Business Intelligence Setup",
    description: "Design and implement a comprehensive data warehouse solution with ETL processes, data modeling, and business intelligence dashboards. Transform raw data into actionable business insights.",
    category: "Data Services",
    subcategory: "Data Warehouse",
    price: 4999,
    currency: "$",
    tags: ["Data Warehouse", "Business Intelligence", "ETL", "Data Modeling"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-15T13:20:00.000Z",
    rating: 4.9,
    reviewCount: 45,
    location: "Middletown, DE",
    availability: "6-8 Weeks",
    aiScore: 94
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics & Machine Learning Models",
    description: "Develop custom machine learning models for predictive analytics, customer segmentation, demand forecasting, and risk assessment. Leverage your data to make data-driven predictions and decisions.",
    category: "Data Services",
    subcategory: "Machine Learning",
    price: 2999,
    currency: "$",
    tags: ["Predictive Analytics", "Machine Learning", "Data Science", "Forecasting"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1716
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
<<<<<<< HEAD
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
=======
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-20T15:30:00.000Z",
    rating: 4.8,
    reviewCount: 78,
    location: "Middletown, DE",
    availability: "4-5 Weeks",
    aiScore: 93
  },

  // Mobile App Development
  {
    id: "mobile-app-development",
    title: "Cross-Platform Mobile App Development",
    description: "Develop native-quality mobile apps for iOS and Android using React Native or Flutter. Includes app store optimization, push notifications, analytics integration, and ongoing maintenance.",
    category: "Mobile Development",
    subcategory: "Cross-Platform",
    price: 5999,
    currency: "$",
    tags: ["Mobile App", "React Native", "Flutter", "iOS", "Android"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1716
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
<<<<<<< HEAD
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
=======
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-25T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 134,
    featured: true,
    location: "Middletown, DE",
    availability: "8-10 Weeks",
    aiScore: 95
  },

  // API Development & Integration
  {
    id: "api-development",
    title: "Custom API Development & Third-Party Integration",
    description: "Build robust APIs for your applications and integrate with third-party services like payment gateways, social media platforms, and business tools. Includes documentation, testing, and monitoring.",
    category: "Development Services",
    subcategory: "API Development",
    price: 1899,
    currency: "$",
    tags: ["API Development", "Third-Party Integration", "Payment Gateways", "Documentation"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1716
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
<<<<<<< HEAD
    images: ["https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T13:30:00.000Z",
    rating: 4.8,
    reviewCount: 98,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 94
=======
    id: "real-time-analytics",
    title: "Real-Time Data Analytics Platform",
    description: "Streaming analytics platform for real-time business intelligence. Processes millions of events per second with sub-second latency for instant decision making.",
    category: "Data Analytics",
    subcategory: "Real-Time",
    price: 7999,
    currency: "$",
    tags: ["Real-Time Analytics", "Streaming", "Business Intelligence", "Low Latency", "Big Data"],
    author: {
      name: "ZionTech Data",
      id: "ziontech-data",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T09:45:00.000Z",
    rating: 4.8,
    reviewCount: 34,
    location: "Global",
    availability: "5-6 Weeks",
    aiScore: 94
  },
  {
    id: "data-governance-suite",
    title: "Data Governance & Quality Management",
    description: "Comprehensive data governance platform with data lineage, quality scoring, privacy controls, and compliance monitoring. Ensures data accuracy and regulatory compliance.",
    category: "Data Management",
    subcategory: "Governance",
    price: 5499,
    currency: "$",
    tags: ["Data Governance", "Data Quality", "Lineage", "Privacy", "Compliance"],
    author: {
      name: "ZionTech Data",
      id: "ziontech-data",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-05T14:20:00.000Z",
    rating: 4.7,
    reviewCount: 67,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 92
  },
  {
    id: "predictive-maintenance",
    title: "AI-Powered Predictive Maintenance",
    description: "IoT-based predictive maintenance system using machine learning to predict equipment failures before they occur. Reduces downtime by 60% and maintenance costs by 40%.",
    category: "IoT & Analytics",
    subcategory: "Predictive Maintenance",
    price: 8999,
    currency: "$",
    tags: ["IoT", "Predictive Maintenance", "ML", "Equipment Monitoring", "Cost Reduction"],
    author: {
      name: "ZionTech IoT",
      id: "ziontech-iot",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-10T11:30:00.000Z",
    rating: 4.9,
    reviewCount: 23,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 96
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
=======
    images: ["https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-30T12:15:00.000Z",
    rating: 4.7,
    reviewCount: 89,
    location: "Middletown, DE",
    availability: "3-4 Weeks",
    aiScore: 88
  },

  // IT Support & Managed Services
  {
    id: "managed-it-services",
    title: "Managed IT Services & 24/7 Support",
    description: "Comprehensive IT management including network monitoring, security updates, backup management, and help desk support. Proactive maintenance to prevent issues before they impact your business.",
    category: "IT Services",
    subcategory: "Managed Services",
    price: 899,
    currency: "$",
    tags: ["Managed IT", "24/7 Support", "Network Monitoring", "Help Desk"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-01T08:30:00.000Z",
    rating: 4.8,
    reviewCount: 156,
    location: "Middletown, DE",
    availability: "Immediate",
    aiScore: 89
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1716
  },

  // Blockchain & Web3 Services
  {
<<<<<<< HEAD
    id: "blockchain-enterprise",
    title: "Enterprise Blockchain Solutions",
<<<<<<< HEAD
    description: "Private blockchain networks for enterprise applications including supply chain tracking, digital identity, and smart contracts. Built on Hyperledger Fabric with enterprise-grade security and scalability.",
    category: "Blockchain",
    price: 12999,
    currency: "$",
    tags: ["Blockchain", "Hyperledger", "Smart Contracts", "Supply Chain"],
=======
    id: "blockchain-development",
    title: "Blockchain Development & Smart Contract Solutions",
    description: "Develop custom blockchain solutions, smart contracts, and decentralized applications (dApps). Includes DeFi protocols, NFT marketplaces, and enterprise blockchain integration.",
    category: "Blockchain Services",
    subcategory: "Development",
    price: 7999,
    currency: "$",
    tags: ["Blockchain", "Smart Contracts", "DeFi", "NFT", "dApps"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1716
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
<<<<<<< HEAD
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
=======
    description: "Custom blockchain development for supply chain transparency, digital identity, and smart contracts. Built on Hyperledger Fabric, Ethereum, or custom protocols.",
    category: "Blockchain",
    subcategory: "Enterprise",
    price: 14999,
    currency: "$",
    tags: ["Blockchain", "Smart Contracts", "Supply Chain", "Digital Identity", "Hyperledger"],
    author: {
      name: "ZionTech Blockchain",
      id: "ziontech-blockchain",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-15T13:45:00.000Z",
    rating: 4.8,
    reviewCount: 18,
    location: "Global",
    availability: "8-10 Weeks",
    aiScore: 93
  },
  {
    id: "defi-platform",
    title: "DeFi Platform Development",
    description: "Complete decentralized finance platform including yield farming, liquidity pools, and governance tokens. Built with security best practices and audited smart contracts.",
    category: "Blockchain",
    subcategory: "DeFi",
    price: 19999,
    currency: "$",
    tags: ["DeFi", "Yield Farming", "Liquidity Pools", "Smart Contracts", "Security"],
    author: {
      name: "ZionTech Blockchain",
      id: "ziontech-blockchain",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-20T10:15:00.000Z",
    rating: 4.9,
    reviewCount: 12,
    location: "Global",
    availability: "10-12 Weeks",
    aiScore: 95
  },

  // Edge Computing & 5G Services
  {
    id: "edge-computing-platform",
    title: "Edge Computing & 5G Integration Platform",
    description: "Edge computing platform for ultra-low latency applications. Integrates with 5G networks for real-time processing, IoT device management, and distributed computing.",
    category: "Edge Computing",
    subcategory: "5G Integration",
    price: 12999,
    currency: "$",
    tags: ["Edge Computing", "5G", "IoT", "Low Latency", "Distributed Computing"],
    author: {
      name: "ZionTech Edge",
      id: "ziontech-edge",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-25T15:30:00.000Z",
    rating: 4.7,
    reviewCount: 8,
    location: "Global",
    availability: "8-10 Weeks",
    aiScore: 94
  },

  // Quantum Computing Services
  {
    id: "quantum-algorithms",
    title: "Quantum Algorithm Development & Optimization",
    description: "Custom quantum algorithms for optimization problems, cryptography, and machine learning. Optimized for current quantum hardware with hybrid classical-quantum approaches.",
    category: "Quantum Computing",
    subcategory: "Algorithm Development",
    price: 24999,
    currency: "$",
    tags: ["Quantum Computing", "Algorithms", "Optimization", "Cryptography", "ML"],
    author: {
      name: "ZionTech Quantum",
      id: "ziontech-quantum",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-30T12:00:00.000Z",
    rating: 4.9,
    reviewCount: 5,
    location: "Global",
    availability: "12-16 Weeks",
    aiScore: 97
  },

  // AR/VR & Metaverse Services
  {
    id: "metaverse-platform",
    title: "Metaverse Platform Development",
    description: "Complete metaverse platform with 3D environments, avatar customization, social features, and virtual commerce. Built for scalability and cross-platform compatibility.",
    category: "AR/VR",
    subcategory: "Metaverse",
    price: 29999,
    currency: "$",
    tags: ["Metaverse", "3D Environments", "Avatars", "Social VR", "Virtual Commerce"],
    author: {
      name: "ZionTech AR/VR",
      id: "ziontech-arvr",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1593508512255-aaab0b0f8c0f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-01T09:00:00.000Z",
    rating: 4.8,
    reviewCount: 3,
    location: "Global",
    availability: "16-20 Weeks",
    aiScore: 95
  },

  // FinTech Services
  {
    id: "fintech-platform",
    title: "FinTech Platform & Payment Solutions",
    description: "Complete financial technology platform including payment processing, digital banking, lending algorithms, and regulatory compliance. Built with security and scalability in mind.",
    category: "FinTech",
    subcategory: "Platform Development",
    price: 34999,
    currency: "$",
    tags: ["FinTech", "Payments", "Digital Banking", "Lending", "Compliance"],
    author: {
      name: "ZionTech FinTech",
      id: "ziontech-fintech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-05T14:45:00.000Z",
    rating: 4.9,
    reviewCount: 7,
    location: "Global",
    availability: "20-24 Weeks",
    aiScore: 96
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
  }
];

// Service categories for filtering
export const ENHANCED_SERVICE_CATEGORIES = [
<<<<<<< HEAD
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
=======
  { label: 'AI & Machine Learning', value: 'ai-ml' },
  { label: 'Cybersecurity', value: 'cybersecurity' },
  { label: 'Cloud & DevOps', value: 'cloud-devops' },
  { label: 'Data & Analytics', value: 'data-analytics' },
  { label: 'Blockchain & Web3', value: 'blockchain-web3' },
  { label: 'Edge Computing & 5G', value: 'edge-5g' },
  { label: 'Quantum Computing', value: 'quantum-computing' },
  { label: 'AR/VR & Metaverse', value: 'arvr-metaverse' },
  { label: 'FinTech', value: 'fintech' },
  { label: 'IoT Solutions', value: 'iot-solutions' }
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
];

// Service pricing tiers
export const SERVICE_PRICING_TIERS = {
<<<<<<< HEAD
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
=======
  starter: { min: 1999, max: 4999, description: "Essential services for small businesses" },
  professional: { min: 5000, max: 14999, description: "Advanced solutions for growing companies" },
  enterprise: { min: 15000, max: 50000, description: "Custom enterprise-grade solutions" }
};
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
=======
    createdAt: "2024-04-05T14:45:00.000Z",
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    location: "Middletown, DE",
    availability: "10-12 Weeks",
    aiScore: 96
  },

  // IoT & Hardware Integration
  {
    id: "iot-solution-development",
    title: "IoT Solution Development & Hardware Integration",
    description: "Build Internet of Things solutions with sensor integration, data collection, real-time monitoring, and automated control systems. Connect your physical devices to the digital world.",
    category: "IoT Services",
    subcategory: "Development",
    price: 4499,
    currency: "$",
    tags: ["IoT", "Hardware Integration", "Sensor Networks", "Real-time Monitoring"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-10T16:20:00.000Z",
    rating: 4.7,
    reviewCount: 45,
    location: "Middletown, DE",
    availability: "6-8 Weeks",
    aiScore: 90
  }
];

// Service Categories for better organization
export const SERVICE_CATEGORIES = [
  {
    id: "ai-services",
    name: "AI & Machine Learning",
    description: "Cutting-edge artificial intelligence solutions",
    icon: "🤖",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("AI"))
  },
  {
    id: "it-services",
    name: "IT & Infrastructure",
    description: "Professional IT consulting and infrastructure services",
    icon: "💻",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("IT"))
  },
  {
    id: "business-services",
    name: "Business Solutions",
    description: "Process automation and business optimization",
    icon: "📊",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("Business"))
  },
  {
    id: "marketing-services",
    name: "Digital Marketing",
    description: "SEO, social media, and digital marketing solutions",
    icon: "📱",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("Marketing"))
  },
  {
    id: "web-development",
    name: "Web Development",
    description: "Custom websites, e-commerce, and web applications",
    icon: "🌐",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("Web"))
  },
  {
    id: "data-services",
    name: "Data & Analytics",
    description: "Data warehousing, BI, and predictive analytics",
    icon: "📈",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("Data"))
  },
  {
    id: "mobile-development",
    name: "Mobile Development",
    description: "Cross-platform mobile app development",
    icon: "📱",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("Mobile"))
  },
  {
    id: "blockchain-services",
    name: "Blockchain & Web3",
    description: "Decentralized applications and smart contracts",
    icon: "⛓️",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("Blockchain"))
  },
  {
    id: "iot-services",
    name: "IoT Solutions",
    description: "Internet of Things and hardware integration",
    icon: "🔌",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("IoT"))
  }
];

// Pricing Tiers for different service levels
export const PRICING_TIERS = {
  basic: {
    name: "Basic",
    description: "Essential services for small businesses",
    priceRange: "$399 - $1,999",
    features: ["Basic setup", "Email support", "Standard features"]
  },
  professional: {
    name: "Professional",
    description: "Advanced solutions for growing businesses",
    priceRange: "$1,999 - $4,999",
    features: ["Advanced features", "Priority support", "Customization"]
  },
  enterprise: {
    name: "Enterprise",
    description: "Custom solutions for large organizations",
    priceRange: "$4,999+",
    features: ["Custom development", "24/7 support", "Full customization"]
  }
};

// Contact Information
export const CONTACT_INFO = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008, Middletown DE 19709",
  website: "https://ziontechgroup.com",
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
  emergencySupport: "24/7 Emergency IT Support Available"
};
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1716
