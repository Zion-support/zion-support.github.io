export interface AdvancedAIService {
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
  websiteUrl: string;
  demoUrl?: string;
  documentationUrl?: string;
}

export const ADVANCED_AI_SERVICES: AdvancedAIService[] = [
  // AI-Powered Legal Document Analysis
  {
    id: "ai-legal-document-analyzer",
    title: "AI Legal Document Analyzer Pro",
    description: "Advanced AI platform that analyzes legal documents, contracts, and agreements to identify risks, compliance issues, and optimization opportunities using natural language processing and legal AI.",
    category: "AI & Legal Tech",
    subcategory: "Document Analysis",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Contract risk assessment",
      "Compliance violation detection",
      "Legal clause analysis",
      "Automated contract review",
      "Legal precedent matching",
      "Multi-language support",
      "Secure document handling",
      "Audit trail generation"
    ],
    benefits: [
      "Reduce legal review time by 80%",
      "Identify contract risks proactively",
      "Ensure compliance with regulations",
      "Lower legal costs significantly",
      "Improve contract negotiation outcomes"
    ],
    useCases: [
      "Law firms",
      "Corporate legal departments",
      "Contract management teams",
      "Compliance officers",
      "Risk management departments"
    ],
    targetAudience: [
      "Legal professionals",
      "Corporate counsel",
      "Compliance managers",
      "Risk managers",
      "Business executives"
    ],
    tags: ["AI", "Legal Tech", "Document Analysis", "Compliance", "Risk Management"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,800 - $4,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-legal-analyzer"
  },

  // AI-Powered Financial Fraud Detection
  {
    id: "ai-financial-fraud-detection",
    title: "AI Financial Fraud Detection System",
    description: "Real-time AI-powered fraud detection platform that monitors financial transactions, identifies suspicious patterns, and prevents fraudulent activities across multiple payment channels.",
    category: "AI & FinTech",
    subcategory: "Fraud Detection",
    price: 3200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time transaction monitoring",
      "Behavioral pattern analysis",
      "Machine learning fraud models",
      "Multi-channel detection",
      "Automated alert system",
      "False positive reduction",
      "Compliance reporting",
      "API integration capabilities"
    ],
    benefits: [
      "Prevent 95% of fraudulent transactions",
      "Reduce false positives by 60%",
      "Real-time protection 24/7",
      "Compliance with financial regulations",
      "Scalable fraud prevention"
    ],
    useCases: [
      "Banks and credit unions",
      "Payment processors",
      "E-commerce platforms",
      "Insurance companies",
      "Financial services firms"
    ],
    targetAudience: [
      "Risk managers",
      "Compliance officers",
      "Security teams",
      "Financial executives",
      "IT security professionals"
    ],
    tags: ["AI", "FinTech", "Fraud Detection", "Security", "Compliance"],
    estimatedDelivery: "4-5 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,200 - $8,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-fraud-detection"
  },

  // AI-Powered Healthcare Diagnostics
  {
    id: "ai-healthcare-diagnostics",
    title: "AI Healthcare Diagnostics Assistant",
    description: "Advanced AI platform that assists healthcare professionals in diagnosing diseases, analyzing medical images, and providing treatment recommendations based on patient data and medical literature.",
    category: "AI & Healthcare",
    subcategory: "Medical Diagnostics",
    price: 4500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Medical image analysis",
      "Symptom assessment",
      "Treatment recommendation engine",
      "Drug interaction checking",
      "Patient history analysis",
      "Medical literature integration",
      "HIPAA compliance",
      "Multi-specialty support"
    ],
    benefits: [
      "Improve diagnostic accuracy by 30%",
      "Reduce diagnosis time by 50%",
      "Enhance treatment outcomes",
      "Reduce medical errors",
      "Support evidence-based medicine"
    ],
    useCases: [
      "Hospitals and clinics",
      "Radiology departments",
      "Primary care practices",
      "Specialty medical practices",
      "Medical research institutions"
    ],
    targetAudience: [
      "Physicians",
      "Radiologists",
      "Nurses",
      "Medical administrators",
      "Healthcare IT teams"
    ],
    tags: ["AI", "Healthcare", "Medical Diagnostics", "Image Analysis", "Treatment Planning"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,500 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-healthcare-diagnostics"
  },

  // AI-Powered Supply Chain Optimization
  {
    id: "ai-supply-chain-optimization",
    title: "AI Supply Chain Optimization Platform",
    description: "Intelligent supply chain management platform that uses AI to optimize inventory levels, predict demand, manage logistics, and reduce operational costs across the entire supply chain.",
    category: "AI & Supply Chain",
    subcategory: "Optimization",
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Demand forecasting",
      "Inventory optimization",
      "Route optimization",
      "Supplier performance analysis",
      "Risk assessment",
      "Cost optimization",
      "Real-time tracking",
      "Predictive analytics"
    ],
    benefits: [
      "Reduce inventory costs by 25%",
      "Improve delivery times by 40%",
      "Optimize supplier relationships",
      "Reduce supply chain risks",
      "Increase operational efficiency"
    ],
    useCases: [
      "Manufacturing companies",
      "Retail chains",
      "Logistics providers",
      "Distribution centers",
      "E-commerce businesses"
    ],
    targetAudience: [
      "Supply chain managers",
      "Operations directors",
      "Logistics coordinators",
      "Inventory managers",
      "Business analysts"
    ],
    tags: ["AI", "Supply Chain", "Logistics", "Inventory Management", "Optimization"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$2,800 - $6,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-supply-chain"
  },

  // AI-Powered Customer Service Automation
  {
    id: "ai-customer-service-automation",
    title: "AI Customer Service Automation Suite",
    description: "Comprehensive customer service automation platform that uses AI chatbots, sentiment analysis, and intelligent routing to provide 24/7 customer support and improve customer satisfaction.",
    category: "AI & Customer Service",
    subcategory: "Automation",
    price: 1200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Intelligent chatbot system",
      "Sentiment analysis",
      "Automated ticket routing",
      "Knowledge base management",
      "Multi-language support",
      "Integration with CRM systems",
      "Performance analytics",
      "Custom workflow automation"
    ],
    benefits: [
      "Reduce response time by 70%",
      "Handle 80% of inquiries automatically",
      "Improve customer satisfaction scores",
      "Reduce support costs by 50%",
      "24/7 customer support availability"
    ],
    useCases: [
      "E-commerce businesses",
      "SaaS companies",
      "Financial services",
      "Healthcare providers",
      "Retail chains"
    ],
    targetAudience: [
      "Customer service managers",
      "Support team leaders",
      "Business owners",
      "Marketing managers",
      "Operations directors"
    ],
    tags: ["AI", "Customer Service", "Chatbots", "Automation", "Customer Experience"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$1,200 - $3,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-customer-service"
  }
];