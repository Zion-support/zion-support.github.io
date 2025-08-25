export interface EnhancedInnovativeService {
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
  technicalSpecs?: string[];
  integrations?: string[];
  compliance?: string[];
}

export const ENHANCED_INNOVATIVE_SERVICES: EnhancedInnovativeService[] = [
  // AI-Powered Financial Services
  {
    id: "ai-financial-advisory-platform",
    title: "AI Financial Advisory & Wealth Management Platform",
    description: "Intelligent financial advisory platform that provides personalized investment recommendations, portfolio optimization, and automated wealth management using advanced AI algorithms.",
    category: "AI Financial Services",
    subcategory: "Wealth Management",
    price: 2999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered investment recommendations",
      "Portfolio risk assessment & optimization",
      "Real-time market analysis & alerts",
      "Automated rebalancing",
      "Tax-loss harvesting optimization",
      "ESG investment screening",
      "Multi-asset class support",
      "Regulatory compliance automation"
    ],
    benefits: [
      "Increase portfolio returns by 15-25%",
      "Reduce investment risk through AI analysis",
      "Automated compliance & reporting",
      "24/7 portfolio monitoring",
      "Personalized investment strategies"
    ],
    useCases: [
      "Wealth management firms",
      "Financial advisors",
      "High-net-worth individuals",
      "Institutional investors",
      "Family offices"
    ],
    targetAudience: [
      "Financial advisors",
      "Wealth managers",
      "Investment professionals",
      "High-net-worth clients",
      "Institutional investors"
    ],
    tags: ["AI", "Financial Advisory", "Wealth Management", "Investment", "Portfolio Optimization"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$2,999 - $8,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-financial-advisory",
    technicalSpecs: ["Machine Learning Models", "Real-time Data Processing", "API Integration", "Cloud Infrastructure"],
    integrations: ["Bloomberg", "Reuters", "Yahoo Finance", "Trading Platforms", "Banking APIs"],
    compliance: ["SEC", "FINRA", "GDPR", "SOC 2", "PCI DSS"]
  },

  // AI-Powered Healthcare Solutions
  {
    id: "ai-healthcare-diagnostic-platform",
    title: "AI Healthcare Diagnostic & Patient Care Platform",
    description: "Advanced healthcare platform that uses AI to assist in medical diagnosis, patient monitoring, and treatment planning while ensuring HIPAA compliance and medical accuracy.",
    category: "AI Healthcare",
    subcategory: "Medical Diagnostics",
    price: 4500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered medical image analysis",
      "Symptom assessment & triage",
      "Patient monitoring & alerts",
      "Treatment recommendation engine",
      "Electronic health record integration",
      "Telemedicine capabilities",
      "Drug interaction checking",
      "Clinical decision support"
    ],
    benefits: [
      "Improve diagnostic accuracy by 30%",
      "Reduce patient wait times",
      "24/7 patient monitoring",
      "Enhanced clinical decision making",
      "Cost-effective healthcare delivery"
    ],
    useCases: [
      "Hospitals & clinics",
      "Medical imaging centers",
      "Primary care practices",
      "Specialty medical practices",
      "Healthcare networks"
    ],
    targetAudience: [
      "Healthcare administrators",
      "Medical professionals",
      "IT managers",
      "Hospital executives",
      "Medical practice owners"
    ],
    tags: ["AI", "Healthcare", "Medical Diagnostics", "Patient Care", "HIPAA"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,500 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-healthcare",
    technicalSpecs: ["Deep Learning Models", "Medical Image Processing", "Natural Language Processing", "Real-time Analytics"],
    integrations: ["Epic", "Cerner", "PACS Systems", "Lab Information Systems", "Pharmacy Systems"],
    compliance: ["HIPAA", "FDA", "SOC 2", "HITECH", "ISO 27001"]
  },

  // AI-Powered Legal Services
  {
    id: "ai-legal-research-assistant",
    title: "AI Legal Research & Document Analysis Platform",
    description: "Intelligent legal research platform that uses AI to analyze legal documents, conduct case research, and provide legal insights to streamline legal workflows.",
    category: "AI Legal Services",
    subcategory: "Legal Research",
    price: 1899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered legal document analysis",
      "Case law research & citation",
      "Contract review & analysis",
      "Legal precedent identification",
      "Document comparison tools",
      "Legal citation checking",
      "Multi-jurisdiction support",
      "Collaborative workspace"
    ],
    benefits: [
      "Reduce legal research time by 60%",
      "Improve case outcome predictions",
      "Automated document review",
      "Enhanced legal accuracy",
      "Cost-effective legal services"
    ],
    useCases: [
      "Law firms",
      "Corporate legal departments",
      "Legal research organizations",
      "Government agencies",
      "Legal education institutions"
    ],
    targetAudience: [
      "Attorneys",
      "Legal researchers",
      "Law firm administrators",
      "Corporate counsel",
      "Legal professionals"
    ],
    tags: ["AI", "Legal Services", "Document Analysis", "Legal Research", "Contract Review"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$1,899 - $4,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-legal-services",
    technicalSpecs: ["Natural Language Processing", "Machine Learning", "Document OCR", "Semantic Search"],
    integrations: ["Westlaw", "LexisNexis", "Clio", "Practice Management Systems", "Document Management"],
    compliance: ["Data Privacy", "Attorney-Client Privilege", "SOC 2", "GDPR"]
  },

  // AI-Powered Marketing & Sales
  {
    id: "ai-marketing-automation-suite",
    title: "AI Marketing Automation & Customer Journey Platform",
    description: "Comprehensive marketing automation platform that uses AI to optimize customer journeys, personalize content, and maximize marketing ROI across all channels.",
    category: "AI Marketing & Sales",
    subcategory: "Marketing Automation",
    price: 1299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered customer segmentation",
      "Predictive customer behavior modeling",
      "Multi-channel campaign automation",
      "Dynamic content personalization",
      "A/B testing optimization",
      "Customer journey mapping",
      "ROI tracking & analytics",
      "Integration with major platforms"
    ],
    benefits: [
      "Increase marketing ROI by 40-60%",
      "Improve customer engagement by 35%",
      "Reduce manual marketing tasks",
      "Personalized customer experiences",
      "Data-driven marketing decisions"
    ],
    useCases: [
      "E-commerce businesses",
      "B2B companies",
      "Marketing agencies",
      "SaaS companies",
      "Retail businesses"
    ],
    targetAudience: [
      "Marketing managers",
      "Digital marketers",
      "Business owners",
      "Marketing agencies",
      "E-commerce managers"
    ],
    tags: ["AI", "Marketing Automation", "Customer Journey", "Personalization", "Analytics"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$1,299 - $3,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-marketing",
    technicalSpecs: ["Machine Learning", "Predictive Analytics", "Real-time Processing", "API Integration"],
    integrations: ["Shopify", "WooCommerce", "HubSpot", "Salesforce", "Google Analytics", "Facebook Ads"],
    compliance: ["GDPR", "CCPA", "SOC 2", "Data Privacy"]
  },

  // AI-Powered Supply Chain Management
  {
    id: "ai-supply-chain-optimization",
    title: "AI Supply Chain Optimization & Demand Forecasting Platform",
    description: "Intelligent supply chain platform that uses AI to optimize inventory management, predict demand, and streamline logistics operations for maximum efficiency.",
    category: "AI Supply Chain",
    subcategory: "Inventory Management",
    price: 2200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered demand forecasting",
      "Inventory optimization algorithms",
      "Supplier performance analytics",
      "Logistics route optimization",
      "Real-time supply chain monitoring",
      "Risk assessment & mitigation",
      "Cost optimization analysis",
      "Multi-warehouse management"
    ],
    benefits: [
      "Reduce inventory costs by 20-30%",
      "Improve forecast accuracy by 40%",
      "Optimize logistics operations",
      "Reduce supply chain disruptions",
      "Enhanced supplier relationships"
    ],
    useCases: [
      "Manufacturing companies",
      "Retail chains",
      "E-commerce businesses",
      "Distribution companies",
      "Logistics providers"
    ],
    targetAudience: [
      "Supply chain managers",
      "Operations directors",
      "Logistics managers",
      "Inventory managers",
      "Business executives"
    ],
    tags: ["AI", "Supply Chain", "Inventory Management", "Demand Forecasting", "Logistics"],
    estimatedDelivery: "4-5 weeks",
    supportLevel: "premium",
    marketPrice: "$2,200 - $6,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-supply-chain",
    technicalSpecs: ["Machine Learning", "Predictive Analytics", "IoT Integration", "Real-time Monitoring"],
    integrations: ["ERP Systems", "WMS", "TMS", "E-commerce Platforms", "Supplier Portals"],
    compliance: ["ISO 9001", "SOC 2", "GDPR", "Industry Standards"]
  },

  // AI-Powered Human Resources
  {
    id: "ai-hr-talent-management",
    title: "AI HR Talent Management & Recruitment Platform",
    description: "Comprehensive HR platform that uses AI to streamline recruitment, optimize talent management, and enhance employee engagement through intelligent insights.",
    category: "AI Human Resources",
    subcategory: "Talent Management",
    price: 899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered candidate screening",
      "Predictive hiring analytics",
      "Employee performance tracking",
      "Skills gap analysis",
      "Automated interview scheduling",
      "Employee engagement monitoring",
      "Succession planning tools",
      "Compliance management"
    ],
    benefits: [
      "Reduce time-to-hire by 50%",
      "Improve hiring quality by 30%",
      "Enhance employee retention",
      "Streamlined HR processes",
      "Data-driven HR decisions"
    ],
    useCases: [
      "Enterprise companies",
      "HR departments",
      "Recruitment agencies",
      "Startups",
      "Government agencies"
    ],
    targetAudience: [
      "HR managers",
      "Recruiters",
      "Talent acquisition specialists",
      "Business leaders",
      "HR professionals"
    ],
    tags: ["AI", "Human Resources", "Recruitment", "Talent Management", "Employee Engagement"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$899 - $2,499/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-hr-platform",
    technicalSpecs: ["Machine Learning", "Natural Language Processing", "Predictive Analytics", "API Integration"],
    integrations: ["ATS Systems", "HRIS", "LinkedIn", "Job Boards", "Background Check Services"],
    compliance: ["EEOC", "ADA", "FCRA", "SOC 2", "GDPR"]
  },

  // AI-Powered Real Estate
  {
    id: "ai-real-estate-analytics",
    title: "AI Real Estate Analytics & Investment Platform",
    description: "Intelligent real estate platform that uses AI to analyze market trends, evaluate properties, and provide investment insights for real estate professionals and investors.",
    category: "AI Real Estate",
    subcategory: "Market Analytics",
    price: 1599,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered property valuation",
      "Market trend analysis",
      "Investment opportunity scoring",
      "Risk assessment tools",
      "Comparative market analysis",
      "Rental yield optimization",
      "Property portfolio management",
      "Market forecasting models"
    ],
    benefits: [
      "Improve investment decisions by 25%",
      "Reduce market research time",
      "Optimize property portfolios",
      "Enhanced risk management",
      "Data-driven real estate insights"
    ],
    useCases: [
      "Real estate investors",
      "Property managers",
      "Real estate agents",
      "Investment firms",
      "Property developers"
    ],
    targetAudience: [
      "Real estate investors",
      "Property managers",
      "Real estate agents",
      "Investment advisors",
      "Property developers"
    ],
    tags: ["AI", "Real Estate", "Investment Analytics", "Market Analysis", "Property Valuation"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$1,599 - $4,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-real-estate",
    technicalSpecs: ["Machine Learning", "Predictive Analytics", "Geospatial Analysis", "Real-time Data Processing"],
    integrations: ["MLS Systems", "Property Databases", "Financial Data Sources", "Market Data APIs"],
    compliance: ["Real Estate Regulations", "Data Privacy", "SOC 2", "Industry Standards"]
  },

  // AI-Powered Education
  {
    id: "ai-education-personalization",
    title: "AI Education Personalization & Learning Analytics Platform",
    description: "Intelligent education platform that uses AI to personalize learning experiences, track student progress, and optimize educational outcomes through adaptive learning.",
    category: "AI Education",
    subcategory: "Personalized Learning",
    price: 799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered adaptive learning",
      "Personalized curriculum design",
      "Student progress tracking",
      "Learning analytics dashboard",
      "Content recommendation engine",
      "Assessment automation",
      "Parent/teacher communication",
      "Performance insights"
    ],
    benefits: [
      "Improve student outcomes by 35%",
      "Personalize learning experiences",
      "Reduce administrative workload",
      "Enhanced student engagement",
      "Data-driven education decisions"
    ],
    useCases: [
      "K-12 schools",
      "Higher education institutions",
      "Online learning platforms",
      "Corporate training",
      "Tutoring services"
    ],
    targetAudience: [
      "School administrators",
      "Teachers",
      "Education technology directors",
      "Corporate trainers",
      "Online educators"
    ],
    tags: ["AI", "Education", "Personalized Learning", "Learning Analytics", "Adaptive Learning"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$799 - $2,199/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-education",
    technicalSpecs: ["Machine Learning", "Natural Language Processing", "Learning Analytics", "Content Management"],
    integrations: ["LMS Systems", "Student Information Systems", "Content Libraries", "Assessment Tools"],
    compliance: ["FERPA", "COPPA", "SOC 2", "Data Privacy", "Educational Standards"]
  },

  // AI-Powered Manufacturing
  {
    id: "ai-manufacturing-optimization",
    title: "AI Manufacturing Optimization & Predictive Maintenance Platform",
    description: "Intelligent manufacturing platform that uses AI to optimize production processes, predict equipment failures, and maximize manufacturing efficiency through IoT and machine learning.",
    category: "AI Manufacturing",
    subcategory: "Production Optimization",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered production optimization",
      "Predictive maintenance algorithms",
      "Quality control automation",
      "Supply chain optimization",
      "Energy efficiency monitoring",
      "Real-time production analytics",
      "Equipment performance tracking",
      "Process automation"
    ],
    benefits: [
      "Increase production efficiency by 25%",
      "Reduce equipment downtime by 40%",
      "Improve product quality",
      "Optimize energy consumption",
      "Enhanced operational insights"
    ],
    useCases: [
      "Manufacturing plants",
      "Industrial facilities",
      "Production lines",
      "Quality control departments",
      "Operations management"
    ],
    targetAudience: [
      "Manufacturing managers",
      "Operations directors",
      "Plant managers",
      "Quality control managers",
      "Industrial engineers"
    ],
    tags: ["AI", "Manufacturing", "Predictive Maintenance", "IoT", "Production Optimization"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,500 - $9,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-manufacturing",
    technicalSpecs: ["Machine Learning", "IoT Integration", "Predictive Analytics", "Real-time Monitoring"],
    integrations: ["MES Systems", "SCADA", "ERP Systems", "IoT Devices", "Quality Control Systems"],
    compliance: ["ISO 9001", "ISO 14001", "SOC 2", "Industry 4.0 Standards"]
  },

  // AI-Powered Energy Management
  {
    id: "ai-energy-optimization",
    title: "AI Energy Management & Smart Grid Optimization Platform",
    description: "Intelligent energy management platform that uses AI to optimize energy consumption, predict demand, and manage smart grid operations for maximum efficiency and sustainability.",
    category: "AI Energy Management",
    subcategory: "Smart Grid",
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered energy demand forecasting",
      "Smart grid optimization",
      "Renewable energy integration",
      "Energy consumption analytics",
      "Peak demand management",
      "Carbon footprint tracking",
      "Real-time energy monitoring",
      "Automated energy trading"
    ],
    benefits: [
      "Reduce energy costs by 20-30%",
      "Optimize renewable energy usage",
      "Improve grid reliability",
      "Enhanced sustainability",
      "Data-driven energy decisions"
    ],
    useCases: [
      "Utility companies",
      "Energy providers",
      "Commercial buildings",
      "Industrial facilities",
      "Smart cities"
    ],
    targetAudience: [
      "Energy managers",
      "Utility executives",
      "Facility managers",
      "Sustainability directors",
      "Grid operators"
    ],
    tags: ["AI", "Energy Management", "Smart Grid", "Renewable Energy", "Sustainability"],
    estimatedDelivery: "5-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,800 - $7,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-energy",
    technicalSpecs: ["Machine Learning", "IoT Integration", "Predictive Analytics", "Real-time Processing"],
    integrations: ["SCADA Systems", "Smart Meters", "Renewable Energy Systems", "Energy Trading Platforms"],
    compliance: ["ISO 50001", "SOC 2", "Energy Regulations", "Grid Standards"]
  },

  // AI-Powered Transportation & Logistics
  {
    id: "ai-transportation-optimization",
    title: "AI Transportation & Fleet Management Platform",
    description: "Intelligent transportation platform that uses AI to optimize routes, manage fleets, and streamline logistics operations for maximum efficiency and cost savings.",
    category: "AI Transportation",
    subcategory: "Fleet Management",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered route optimization",
      "Fleet performance analytics",
      "Driver behavior monitoring",
      "Fuel consumption optimization",
      "Real-time tracking & alerts",
      "Maintenance scheduling",
      "Cost analysis & reporting",
      "Compliance management"
    ],
    benefits: [
      "Reduce fuel costs by 15-25%",
      "Optimize delivery routes",
      "Improve fleet utilization",
      "Enhanced safety monitoring",
      "Data-driven logistics decisions"
    ],
    useCases: [
      "Transportation companies",
      "Delivery services",
      "Logistics providers",
      "Fleet operators",
      "Supply chain companies"
    ],
    targetAudience: [
      "Fleet managers",
      "Transportation directors",
      "Logistics managers",
      "Operations managers",
      "Business owners"
    ],
    tags: ["AI", "Transportation", "Fleet Management", "Route Optimization", "Logistics"],
    estimatedDelivery: "4-5 weeks",
    supportLevel: "premium",
    marketPrice: "$1,800 - $4,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-transportation",
    technicalSpecs: ["Machine Learning", "GPS Integration", "Real-time Analytics", "IoT Connectivity"],
    integrations: ["GPS Systems", "Fleet Management Software", "TMS", "Fuel Cards", "Maintenance Systems"],
    compliance: ["DOT Regulations", "ELD Compliance", "SOC 2", "Transportation Standards"]
  },

  // AI-Powered Retail & E-commerce
  {
    id: "ai-retail-optimization",
    title: "AI Retail Optimization & Customer Experience Platform",
    description: "Intelligent retail platform that uses AI to optimize inventory, personalize customer experiences, and maximize sales through predictive analytics and automation.",
    category: "AI Retail & E-commerce",
    subcategory: "Customer Experience",
    price: 1100,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered inventory optimization",
      "Customer behavior prediction",
      "Personalized recommendations",
      "Dynamic pricing optimization",
      "Demand forecasting",
      "Customer sentiment analysis",
      "Sales performance analytics",
      "Omnichannel integration"
    ],
    benefits: [
      "Increase sales by 20-35%",
      "Reduce inventory costs",
      "Improve customer satisfaction",
      "Optimize pricing strategies",
      "Enhanced customer insights"
    ],
    useCases: [
      "Retail stores",
      "E-commerce businesses",
      "Shopping centers",
      "Franchise operations",
      "Multi-location retail"
    ],
    targetAudience: [
      "Retail managers",
      "E-commerce directors",
      "Store owners",
      "Marketing managers",
      "Business owners"
    ],
    tags: ["AI", "Retail", "E-commerce", "Customer Experience", "Inventory Optimization"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$1,100 - $3,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-retail",
    technicalSpecs: ["Machine Learning", "Predictive Analytics", "Real-time Processing", "API Integration"],
    integrations: ["POS Systems", "E-commerce Platforms", "Inventory Management", "Customer Databases", "Payment Systems"],
    compliance: ["PCI DSS", "GDPR", "SOC 2", "Retail Regulations"]
  }
];

export const getInnovativeServiceByCategory = (category: string) => {
  return ENHANCED_INNOVATIVE_SERVICES.filter(service => service.category === category);
};

export const getInnovativeServiceBySubcategory = (subcategory: string) => {
  return ENHANCED_INNOVATIVE_SERVICES.filter(service => service.subcategory === subcategory);
};

export const getFeaturedInnovativeServices = () => {
  return ENHANCED_INNOVATIVE_SERVICES.filter(service => service.rating >= 4.7).slice(0, 8);
};

export const getServicesByAIScore = (minScore: number) => {
  return ENHANCED_INNOVATIVE_SERVICES.filter(service => service.aiScore && service.aiScore >= minScore);
};