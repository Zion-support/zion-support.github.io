export interface EnhancedService {
  id: string;
  title: string;
  description: string;
  category: string;
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
