export interface IndustrySpecificService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  industry: string;
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
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[];
  };
  competitors?: string[];
  marketSize?: string;
}

export const INDUSTRY_SPECIFIC_SERVICES_2025: IndustrySpecificService[] = [
  // Healthcare AI Platform
  {
    id: "healthcare-ai-platform",
    title: "Healthcare AI Platform",
    description: "Comprehensive AI platform specifically designed for healthcare, including medical imaging analysis, patient monitoring, drug discovery, and clinical decision support.",
    category: "Healthcare Technology",
    subcategory: "AI Platform",
    industry: "Healthcare",
    price: 8999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Medical imaging AI",
      "Patient monitoring",
      "Drug discovery",
      "Clinical decision support",
      "Electronic health records",
      "Telemedicine integration",
      "Medical device integration",
      "Compliance management",
      "Analytics dashboard",
      "Mobile app access"
    ],
    benefits: [
      "Improve diagnosis accuracy by 95%",
      "Reduce treatment time by 60%",
      "Enhanced patient outcomes",
      "Cost-effective healthcare",
      "Regulatory compliance"
    ],
    useCases: [
      "Medical diagnosis",
      "Patient monitoring",
      "Drug discovery",
      "Clinical research",
      "Healthcare analytics"
    ],
    targetAudience: [
      "Hospitals and clinics",
      "Pharmaceutical companies",
      "Medical device manufacturers",
      "Healthcare providers",
      "Research institutions"
    ],
    tags: ["Healthcare", "AI", "Medical Technology", "Diagnosis", "Patient Care"],
    estimatedDelivery: "16-20 weeks",
    supportLevel: "enterprise",
    marketPrice: "$8,999 - $35,999/month",
    roi: "500-1000%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "Medical imaging", "NLP", "Machine learning"],
      integrations: ["PACS systems", "EHR platforms", "Medical devices", "Lab systems", "Pharmacy systems"],
      apiEndpoints: 300,
      uptime: "99.99%",
      security: ["HIPAA compliance", "SOC 2", "End-to-end encryption", "Access control"]
    },
    competitors: ["IBM Watson Health", "Google Health", "Microsoft Healthcare", "Amazon Comprehend Medical"],
    marketSize: "$120.2 billion by 2028"
  },

  // Financial Services AI Platform
  {
    id: "financial-services-ai-platform",
    title: "Financial Services AI Platform",
    description: "Advanced AI platform tailored for financial services, including fraud detection, risk assessment, algorithmic trading, and personalized financial services.",
    category: "Financial Technology",
    subcategory: "AI Platform",
    industry: "Financial Services",
    price: 6999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI fraud detection",
      "Risk assessment engine",
      "Algorithmic trading",
      "Personalized banking",
      "Credit scoring",
      "Investment recommendations",
      "Regulatory compliance",
      "Real-time analytics",
      "Multi-currency support",
      "Blockchain integration"
    ],
    benefits: [
      "Reduce fraud by 98%",
      "Improve risk assessment by 85%",
      "Enhanced trading performance",
      "Regulatory compliance",
      "Cost-effective operations"
    ],
    useCases: [
      "Banking and payments",
      "Investment management",
      "Insurance",
      "Lending",
      "Regulatory compliance"
    ],
    targetAudience: [
      "Banks and credit unions",
      "Investment firms",
      "Insurance companies",
      "Fintech startups",
      "Regulatory bodies"
    ],
    tags: ["Financial Services", "AI", "Fraud Detection", "Risk Management", "Trading"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$6,999 - $28,999/month",
    roi: "400-800%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "Blockchain", "Real-time processing", "Machine learning"],
      integrations: ["Banking systems", "Payment gateways", "Trading platforms", "Regulatory systems", "Blockchain networks"],
      apiEndpoints: 400,
      uptime: "99.99%",
      security: ["PCI DSS", "SOC 2", "End-to-end encryption", "Multi-factor authentication"]
    },
    competitors: ["Stripe", "Square", "PayPal", "Robinhood", "Coinbase"],
    marketSize: "$324.7 billion by 2028"
  },

  // Manufacturing AI Platform
  {
    id: "manufacturing-ai-platform",
    title: "Manufacturing AI Platform",
    description: "Comprehensive AI platform designed for manufacturing, including predictive maintenance, quality control, supply chain optimization, and production planning.",
    category: "Manufacturing Technology",
    subcategory: "AI Platform",
    industry: "Manufacturing",
    price: 5999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Predictive maintenance",
      "Quality control AI",
      "Supply chain optimization",
      "Production planning",
      "Inventory management",
      "Equipment monitoring",
      "Performance analytics",
      "IoT integration",
      "Mobile app access",
      "Real-time reporting"
    ],
    benefits: [
      "Reduce downtime by 70%",
      "Improve quality by 80%",
      "Optimize supply chain",
      "Cost reduction",
      "Enhanced efficiency"
    ],
    useCases: [
      "Predictive maintenance",
      "Quality control",
      "Supply chain management",
      "Production optimization",
      "Equipment monitoring"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Industrial companies",
      "Automotive manufacturers",
      "Electronics manufacturers",
      "Food and beverage companies"
    ],
    tags: ["Manufacturing", "AI", "Predictive Maintenance", "Quality Control", "Supply Chain"],
    estimatedDelivery: "14-18 weeks",
    supportLevel: "enterprise",
    marketPrice: "$5,999 - $25,999/month",
    roi: "350-700%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "IoT platforms", "Predictive analytics", "Machine learning"],
      integrations: ["ERP systems", "MES systems", "IoT devices", "SCADA systems", "Quality management systems"],
      apiEndpoints: 250,
      uptime: "99.9%",
      security: ["Industrial security", "Access control", "Data encryption", "Network security"]
    },
    competitors: ["Siemens", "GE Digital", "Rockwell Automation", "ABB", "Schneider Electric"],
    marketSize: "$89.4 billion by 2028"
  },

  // Retail AI Platform
  {
    id: "retail-ai-platform",
    title: "Retail AI Platform",
    description: "Advanced AI platform specifically designed for retail, including customer analytics, inventory optimization, personalized marketing, and supply chain management.",
    category: "Retail Technology",
    subcategory: "AI Platform",
    industry: "Retail",
    price: 3999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Customer analytics",
      "Inventory optimization",
      "Personalized marketing",
      "Demand forecasting",
      "Price optimization",
      "Customer segmentation",
      "Recommendation engine",
      "Sales analytics",
      "Mobile app access",
      "E-commerce integration"
    ],
    benefits: [
      "Increase sales by 40%",
      "Reduce inventory costs by 30%",
      "Enhanced customer experience",
      "Personalized marketing",
      "Optimized pricing"
    ],
    useCases: [
      "Customer analytics",
      "Inventory management",
      "Marketing optimization",
      "Price optimization",
      "Supply chain management"
    ],
    targetAudience: [
      "Retail chains",
      "E-commerce companies",
      "Department stores",
      "Specialty retailers",
      "Online marketplaces"
    ],
    tags: ["Retail", "AI", "Customer Analytics", "Inventory Management", "Marketing"],
    estimatedDelivery: "10-14 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,999 - $18,999/month",
    roi: "300-600%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "Customer analytics", "Recommendation engines", "Machine learning"],
      integrations: ["POS systems", "E-commerce platforms", "CRM systems", "Marketing platforms", "Inventory systems"],
      apiEndpoints: 200,
      uptime: "99.9%",
      security: ["PCI compliance", "Data encryption", "Access control", "Privacy protection"]
    },
    competitors: ["Salesforce", "Adobe", "Shopify", "Amazon", "Walmart"],
    marketSize: "$67.8 billion by 2028"
  },

  // Education AI Platform
  {
    id: "education-ai-platform",
    title: "Education AI Platform",
    description: "Innovative AI platform designed for education, including personalized learning, automated assessment, content recommendation, and student analytics.",
    category: "Education Technology",
    subcategory: "AI Platform",
    industry: "Education",
    price: 2999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Personalized learning",
      "Automated assessment",
      "Content recommendation",
      "Student analytics",
      "Learning analytics",
      "Virtual classrooms",
      "Multilingual support",
      "Accessibility features",
      "Progress tracking",
      "Parent-teacher communication"
    ],
    benefits: [
      "Improve learning outcomes by 70%",
      "Reduce administrative workload by 80%",
      "Personalized education",
      "Scalable learning solutions",
      "Cost-effective education"
    ],
    useCases: [
      "K-12 education",
      "Higher education",
      "Corporate training",
      "Language learning",
      "Skills development"
    ],
    targetAudience: [
      "Schools and universities",
      "Corporate training departments",
      "Online education platforms",
      "Language schools",
      "Educational publishers"
    ],
    tags: ["Education", "AI", "Personalized Learning", "Assessment", "Analytics"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,999 - $12,999/month",
    roi: "250-500%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "NLP", "Computer vision", "Machine learning"],
      integrations: ["LMS platforms", "Video conferencing", "Assessment tools", "Content management", "Analytics platforms"],
      apiEndpoints: 180,
      uptime: "99.9%",
      security: ["FERPA compliance", "Data encryption", "Access control", "Privacy protection"]
    },
    competitors: ["Coursera", "Udemy", "Duolingo", "Khan Academy", "Blackboard"],
    marketSize: "$89.1 billion by 2027"
  },

  // Transportation AI Platform
  {
    id: "transportation-ai-platform",
    title: "Transportation AI Platform",
    description: "Advanced AI platform designed for transportation, including route optimization, fleet management, predictive maintenance, and autonomous vehicle support.",
    category: "Transportation Technology",
    subcategory: "AI Platform",
    industry: "Transportation",
    price: 4999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Route optimization",
      "Fleet management",
      "Predictive maintenance",
      "Autonomous vehicle support",
      "Traffic prediction",
      "Fuel optimization",
      "Driver analytics",
      "Real-time monitoring",
      "Mobile app access",
      "API integration"
    ],
    benefits: [
      "Reduce fuel costs by 25%",
      "Improve route efficiency by 40%",
      "Enhanced fleet management",
      "Predictive maintenance",
      "Cost optimization"
    ],
    useCases: [
      "Fleet management",
      "Route optimization",
      "Predictive maintenance",
      "Autonomous vehicles",
      "Traffic management"
    ],
    targetAudience: [
      "Transportation companies",
      "Logistics providers",
      "Delivery services",
      "Public transportation",
      "Fleet operators"
    ],
    tags: ["Transportation", "AI", "Fleet Management", "Route Optimization", "Autonomous Vehicles"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,999 - $22,999/month",
    roi: "300-600%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "GPS systems", "IoT sensors", "Machine learning"],
      integrations: ["Fleet management systems", "GPS platforms", "IoT devices", "Traffic systems", "Weather APIs"],
      apiEndpoints: 250,
      uptime: "99.9%",
      security: ["Transportation security", "Access control", "Data encryption", "Network security"]
    },
    competitors: ["Uber", "Lyft", "Waymo", "Tesla", "Daimler"],
    marketSize: "$78.9 billion by 2028"
  },

  // Energy AI Platform
  {
    id: "energy-ai-platform",
    title: "Energy AI Platform",
    description: "Comprehensive AI platform designed for energy, including smart grid management, renewable energy optimization, demand forecasting, and energy efficiency.",
    category: "Energy Technology",
    subcategory: "AI Platform",
    industry: "Energy",
    price: 7999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Smart grid management",
      "Renewable energy optimization",
      "Demand forecasting",
      "Energy efficiency",
      "Grid monitoring",
      "Predictive maintenance",
      "Energy analytics",
      "IoT integration",
      "Real-time monitoring",
      "Mobile app access"
    ],
    benefits: [
      "Reduce energy costs by 30%",
      "Improve grid efficiency by 45%",
      "Enhanced renewable integration",
      "Predictive maintenance",
      "Cost optimization"
    ],
    useCases: [
      "Smart grid management",
      "Renewable energy",
      "Demand forecasting",
      "Energy efficiency",
      "Grid monitoring"
    ],
    targetAudience: [
      "Utility companies",
      "Energy providers",
      "Grid operators",
      "Renewable energy companies",
      "Industrial energy users"
    ],
    tags: ["Energy", "AI", "Smart Grid", "Renewable Energy", "Energy Efficiency"],
    estimatedDelivery: "16-20 weeks",
    supportLevel: "enterprise",
    marketPrice: "$7,999 - $35,999/month",
    roi: "400-800%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "IoT platforms", "Grid systems", "Machine learning"],
      integrations: ["SCADA systems", "IoT devices", "Grid infrastructure", "Renewable systems", "Energy management systems"],
      apiEndpoints: 300,
      uptime: "99.99%",
      security: ["Grid security", "Access control", "Data encryption", "Physical security"]
    },
    competitors: ["Siemens", "GE Digital", "ABB", "Schneider Electric", "Schneider Electric"],
    marketSize: "$92.3 billion by 2028"
  },

  // Agriculture AI Platform
  {
    id: "agriculture-ai-platform",
    title: "Agriculture AI Platform",
    description: "Advanced AI platform designed for agriculture, including precision farming, crop monitoring, yield prediction, and agricultural automation.",
    category: "Agriculture Technology",
    subcategory: "AI Platform",
    industry: "Agriculture",
    price: 3999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Precision farming",
      "Crop monitoring",
      "Yield prediction",
      "Agricultural automation",
      "Soil analysis",
      "Weather prediction",
      "Irrigation management",
      "Pest detection",
      "Mobile app access",
      "IoT integration"
    ],
    benefits: [
      "Increase crop yields by 35%",
      "Reduce water usage by 40%",
      "Enhanced precision farming",
      "Cost optimization",
      "Sustainable agriculture"
    ],
    useCases: [
      "Precision farming",
      "Crop monitoring",
      "Yield prediction",
      "Agricultural automation",
      "Soil management"
    ],
    targetAudience: [
      "Agricultural companies",
      "Farmers",
      "Agricultural cooperatives",
      "Food producers",
      "Agricultural research institutions"
    ],
    tags: ["Agriculture", "AI", "Precision Farming", "Crop Monitoring", "Agricultural Automation"],
    estimatedDelivery: "10-14 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,999 - $18,999/month",
    roi: "300-600%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "IoT sensors", "Satellite imagery", "Machine learning"],
      integrations: ["IoT devices", "Satellite systems", "Weather APIs", "Soil sensors", "Agricultural equipment"],
      apiEndpoints: 200,
      uptime: "99.9%",
      security: ["Agricultural security", "Access control", "Data encryption", "Privacy protection"]
    },
    competitors: ["John Deere", "Monsanto", "Bayer", "Syngenta", "Corteva"],
    marketSize: "$45.6 billion by 2028"
  },

  // Construction AI Platform
  {
    id: "construction-ai-platform",
    title: "Construction AI Platform",
    description: "Comprehensive AI platform designed for construction, including project management, safety monitoring, quality control, and construction automation.",
    category: "Construction Technology",
    subcategory: "AI Platform",
    industry: "Construction",
    price: 5999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Project management",
      "Safety monitoring",
      "Quality control",
      "Construction automation",
      "Progress tracking",
      "Resource optimization",
      "Risk assessment",
      "3D modeling",
      "Mobile app access",
      "IoT integration"
    ],
    benefits: [
      "Reduce project delays by 50%",
      "Improve safety by 80%",
      "Enhanced quality control",
      "Cost optimization",
      "Project efficiency"
    ],
    useCases: [
      "Project management",
      "Safety monitoring",
      "Quality control",
      "Construction automation",
      "Progress tracking"
    ],
    targetAudience: [
      "Construction companies",
      "Contractors",
      "Architecture firms",
      "Engineering companies",
      "Project managers"
    ],
    tags: ["Construction", "AI", "Project Management", "Safety Monitoring", "Quality Control"],
    estimatedDelivery: "14-18 weeks",
    supportLevel: "enterprise",
    marketPrice: "$5,999 - $25,999/month",
    roi: "350-700%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "3D modeling", "IoT sensors", "Machine learning"],
      integrations: ["BIM systems", "IoT devices", "Safety systems", "Quality management systems", "Project management tools"],
      apiEndpoints: 250,
      uptime: "99.9%",
      security: ["Construction security", "Access control", "Data encryption", "Physical security"]
    },
    competitors: ["Autodesk", "Bentley Systems", "Trimble", "Procore", "PlanGrid"],
    marketSize: "$56.7 billion by 2028"
  }
];

export default INDUSTRY_SPECIFIC_SERVICES_2025;