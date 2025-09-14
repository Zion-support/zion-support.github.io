export interface EnhancedService {
  id: string;
  title: string;
  description: string;
  category: string;
  pricing: string;
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
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group"
    },
import { ProductListing } from "@/types/listings";
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
  technology: string[];
  integrations: string[];
  compliance: string[];
  roi: string;
  competitors: string[];
}

export const enhancedServices: EnhancedService[] = [
  {
    id: "ai-powered-analytics",
    title: "AI-Powered Business Analytics",
    description: "Advanced analytics platform with machine learning capabilities for data-driven decision making.",
    category: "Analytics",
    subcategory: "Business Intelligence",
    price: 299,
    currency: "USD",
    pricingModel: "per-month",
    features: [
      "Real-time data visualization",
      "Predictive analytics",
      "Natural language queries",
      "Automated insights",
      "Custom dashboards"
    ],
    benefits: [
      "Make data-driven decisions",
      "Identify trends and patterns",
      "Improve operational efficiency",
      "Reduce manual reporting"
    ],
    useCases: [
      "Sales performance analysis",
      "Customer behavior insights",
      "Operational efficiency tracking",
      "Financial forecasting"
    ],
    targetAudience: ["Data analysts", "Business intelligence teams", "Executives", "Operations managers"],
    tags: ["AI", "Analytics", "Business Intelligence", "Machine Learning"],
    estimatedDelivery: "4-8 weeks",
    supportLevel: "premium",
    marketPrice: "$299-999/month",
    contactInfo: {
      phone: "+1-555-0126",
      email: "analytics@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Python", "TensorFlow", "React", "PostgreSQL"],
    integrations: ["Salesforce", "HubSpot", "Google Analytics", "Microsoft Power BI"],
    compliance: ["GDPR", "SOC 2", "HIPAA"],
    roi: "250% ROI within 6 months",
    competitors: ["Tableau", "Looker", "Microsoft Power BI", "Qlik"]
  }
];

export const getServicesByCategory = (category: string) => {
  return ENHANCED_SERVICES.filter(service => service.category === category);
};

export const getPopularServices = () => {
  return ENHANCED_SERVICES.filter(service => service.isPopular);
};

export const getNewServices = () => {
  return ENHANCED_SERVICES.filter(service => service.isNew);
};

export const getPremiumServices = () => {
  return ENHANCED_SERVICES.filter(service => service.isPremium);
};

export const searchServices = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return ENHANCED_SERVICES.filter(service => 
    service.title.toLowerCase().includes(lowerQuery) ||
    service.description.toLowerCase().includes(lowerQuery) ||
    service.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "Advanced security solutions for modern digital threats",
    icon: "🔒",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("Cybersecurity"))
  },
  {
    id: "cloud-services",
    name: "Cloud Services",
    description: "Cloud migration, optimization, and management solutions",
    icon: "☁️",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("Cloud"))
  },
  {
    id: "data-analytics",
    name: "Data & Analytics",
    description: "Business intelligence and data-driven insights",
    icon: "📊",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("Data"))
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    description: "Complete business transformation and modernization",
    icon: "🚀",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("Digital"))
  },
  {
    id: "emerging-tech",
    name: "Emerging Technologies",
    description: "Cutting-edge solutions in blockchain, IoT, and more",
    icon: "⚡",
    services: ENHANCED_SERVICES.filter(s => ["Blockchain", "IoT"].includes(s.category))
  },
  {
    id: "business-intelligence",
    name: "Business Intelligence",
    description: "AI-powered business solutions and CRM systems",
    icon: "💼",
    services: ENHANCED_SERVICES.filter(s => s.category.includes("AI CRM") || s.category.includes("AI Maintenance"))
  }
];

// Service Benefits and Features
export const SERVICE_FEATURES = {
  "ai-automation-suite": {
    benefits: [
      "Reduce manual work by 80%",
      "Improve process accuracy to 99.9%",
      "24/7 automated operations",
      "Real-time monitoring and alerts",
      "Scalable across all departments"
    ],
    features: [
      "Intelligent document processing",
      "Workflow automation engine",
      "Predictive analytics dashboard",
      "API integrations",
      "Custom automation rules"
    ],
    useCases: [
      "Invoice processing automation",
      "Customer service ticket routing",
      "HR onboarding workflows",
      "Sales lead qualification",
      "Inventory management"
    ]
  },
  "ai-customer-intelligence": {
    benefits: [
      "Increase customer retention by 35%",
      "Improve marketing ROI by 40%",
      "Predict customer churn with 90% accuracy",
      "Personalize customer experiences",
      "Real-time customer insights"
    ],
    features: [
      "Behavioral analysis engine",
      "Churn prediction models",
      "Customer segmentation",
      "Personalization engine",
      "Real-time dashboards"
    ],
    useCases: [
      "Customer retention campaigns",
      "Personalized marketing",
      "Product recommendations",
      "Customer service optimization",
      "Loyalty program management"
    ]
  }
};

// Market Pricing Information
export const MARKET_PRICING = {
  "ai-automation": {
    averagePrice: "$2,500 - $5,000",
    marketTrend: "Growing 25% annually",
    roi: "300-500% within 12 months",
    competitors: ["UiPath", "Automation Anywhere", "Blue Prism"]
  },
  "cybersecurity": {
    averagePrice: "$5,000 - $15,000",
    marketTrend: "Growing 15% annually",
    roi: "200-400% through risk reduction",
    competitors: ["CrowdStrike", "Palo Alto Networks", "Fortinet"]
  },
  "cloud-migration": {
    averagePrice: "$8,000 - $25,000",
    marketTrend: "Growing 20% annually",
    roi: "250-400% through cost savings",
    competitors: ["AWS Professional Services", "Azure Consulting", "Google Cloud"]
  },
  "data-analytics": {
    averagePrice: "$1,500 - $8,000",
    marketTrend: "Growing 30% annually",
    roi: "400-600% through insights",
    competitors: ["Tableau", "Power BI", "Looker"]
  }
};
  { label: 'Cloud & Infrastructure', value: 'cloud-infrastructure' },
  { label: 'Cybersecurity', value: 'cybersecurity' },
  { label: 'Data & Analytics', value: 'data-analytics' },
  { label: 'Business Intelligence', value: 'business-intelligence' },
  { label: 'Development & DevOps', value: 'development-devops' },
  { label: 'Digital Transformation', value: 'digital-transformation' },
  { label: 'Healthcare Technology', value: 'healthcare-tech' },
  { label: 'Financial Technology', value: 'fintech' },
  { label: 'Blockchain', value: 'blockchain' },
  { label: 'Quantum Computing', value: 'quantum-computing' }
];

// Pricing tiers for different service levels
export const SERVICE_PRICING_TIERS = {
  basic: { range: "$500 - $2,000", description: "Essential services for small businesses" },
  professional: { range: "$2,000 - $8,000", description: "Advanced solutions for growing companies" },
  enterprise: { range: "$8,000 - $25,000+", description: "Custom enterprise solutions with dedicated support" }
};

// Contact information
export const CONTACT_INFO = {
  mobile: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com"
};
];
