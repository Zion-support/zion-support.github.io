export interface IndustrySpecificService {
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
  industryStandards?: string[];
  complianceFrameworks?: string[];
  integrationPartners?: string[];
  caseStudies?: string[];
}

export const INDUSTRY_SPECIFIC_SERVICES: IndustrySpecificService[] = [
  // Healthcare Industry Services
  {
    id: "healthcare-ai-diagnostic-suite",
    title: "Healthcare AI Diagnostic Suite",
    description: "Comprehensive AI-powered diagnostic platform designed specifically for healthcare providers, offering medical image analysis, patient data analytics, and clinical decision support.",
    category: "Healthcare Technology",
    subcategory: "Medical Diagnostics",
    price: 4200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered medical image analysis",
      "Patient data analytics and insights",
      "Clinical decision support system",
      "Electronic health record integration",
      "HIPAA-compliant data handling",
      "Multi-modal diagnostic support",
      "Real-time diagnostic assistance",
      "Performance analytics dashboard",
      "Custom workflow automation",
      "24/7 technical support"
    ],
    benefits: [
      "Improve diagnostic accuracy by 35-45%",
      "Reduce diagnosis time by 60%",
      "Lower healthcare costs",
      "Enhanced patient outcomes",
      "Streamlined clinical workflows"
    ],
    useCases: [
      "Hospitals and medical centers",
      "Radiology departments",
      "Primary care practices",
      "Specialty medical practices",
      "Telemedicine platforms"
    ],
    targetAudience: [
      "Healthcare providers",
      "Medical institutions",
      "Radiologists",
      "Primary care physicians",
      "Healthcare administrators"
    ],
    tags: ["Healthcare", "AI Diagnostics", "Medical Imaging", "Clinical Decision Support", "HIPAA Compliance"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,200 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/healthcare-ai-diagnostics",
    industryStandards: ["DICOM", "HL7 FHIR", "IHE", "SNOMED CT", "LOINC"],
    complianceFrameworks: ["HIPAA", "HITECH", "FDA", "SOC2", "ISO 27001"],
    integrationPartners: ["Epic", "Cerner", "Allscripts", "Athenahealth", "Practice Fusion"],
    caseStudies: ["Major Hospital Network", "Radiology Practice", "Primary Care Group"]
  },

  // Financial Services Industry
  {
    id: "financial-ai-risk-management",
    title: "Financial AI Risk Management Platform",
    description: "Advanced AI-powered risk management platform designed for financial institutions, offering real-time risk assessment, fraud detection, and regulatory compliance monitoring.",
    category: "Financial Technology",
    subcategory: "Risk Management",
    price: 3800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered risk assessment",
      "Real-time fraud detection",
      "Regulatory compliance monitoring",
      "Portfolio risk analytics",
      "Stress testing scenarios",
      "Credit risk modeling",
      "Market risk analysis",
      "Operational risk assessment",
      "Compliance reporting",
      "Custom risk models"
    ],
    benefits: [
      "Reduce fraud losses by 40-60%",
      "Improve risk assessment accuracy by 50%",
      "Automated compliance monitoring",
      "Real-time risk alerts",
      "Enhanced regulatory reporting"
    ],
    useCases: [
      "Banks and credit unions",
      "Investment firms",
      "Insurance companies",
      "Fintech companies",
      "Regulatory agencies"
    ],
    targetAudience: [
      "Risk managers",
      "Compliance officers",
      "Financial analysts",
      "Treasury managers",
      "Regulatory specialists"
    ],
    tags: ["Financial Technology", "Risk Management", "Fraud Detection", "Compliance", "AI Analytics"],
    estimatedDelivery: "6-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,800 - $10,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/financial-ai-risk-management",
    industryStandards: ["Basel III", "Solvency II", "IFRS 9", "CCAR", "Dodd-Frank"],
    complianceFrameworks: ["SOX", "GLBA", "PCI DSS", "SOC2", "ISO 27001"],
    integrationPartners: ["Bloomberg", "Reuters", "FactSet", "Moody's", "S&P Global"],
    caseStudies: ["Major Bank", "Investment Firm", "Insurance Company"]
  },

  // Manufacturing Industry Services
  {
    id: "manufacturing-ai-optimization",
    title: "Manufacturing AI Optimization Platform",
    description: "Intelligent manufacturing optimization platform that uses AI to improve production efficiency, quality control, and predictive maintenance for manufacturing operations.",
    category: "Manufacturing Technology",
    subcategory: "Production Optimization",
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered production optimization",
      "Predictive maintenance systems",
      "Quality control automation",
      "Supply chain optimization",
      "Energy efficiency monitoring",
      "Real-time performance analytics",
      "Equipment health monitoring",
      "Production planning optimization",
      "Quality prediction models",
      "Custom manufacturing workflows"
    ],
    benefits: [
      "Increase production efficiency by 25-35%",
      "Reduce downtime by 40-50%",
      "Improve product quality by 30%",
      "Lower operational costs",
      "Enhanced predictive capabilities"
    ],
    useCases: [
      "Automotive manufacturing",
      "Electronics production",
      "Chemical manufacturing",
      "Food and beverage production",
      "Pharmaceutical manufacturing"
    ],
    targetAudience: [
      "Manufacturing managers",
      "Operations directors",
      "Production engineers",
      "Quality managers",
      "Maintenance supervisors"
    ],
    tags: ["Manufacturing", "AI Optimization", "Predictive Maintenance", "Quality Control", "Production Efficiency"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,800 - $7,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/manufacturing-ai-optimization",
    industryStandards: ["ISO 9001", "ISO 14001", "ISO 45001", "Six Sigma", "Lean Manufacturing"],
    complianceFrameworks: ["FDA", "EPA", "OSHA", "SOC2", "ISO 27001"],
    integrationPartners: ["SAP", "Oracle", "Siemens", "Rockwell Automation", "ABB"],
    caseStudies: ["Automotive Manufacturer", "Electronics Producer", "Chemical Plant"]
  },

  // Retail Industry Services
  {
    id: "retail-ai-customer-intelligence",
    title: "Retail AI Customer Intelligence Platform",
    description: "Comprehensive AI-powered customer intelligence platform designed for retail businesses, offering personalized marketing, inventory optimization, and customer behavior analytics.",
    category: "Retail Technology",
    subcategory: "Customer Intelligence",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered customer segmentation",
      "Personalized marketing automation",
      "Inventory optimization",
      "Demand forecasting",
      "Customer behavior analytics",
      "Omnichannel integration",
      "Real-time recommendations",
      "Loyalty program optimization",
      "Price optimization",
      "Customer journey mapping"
    ],
    benefits: [
      "Increase customer lifetime value by 30-40%",
      "Improve inventory turnover by 25%",
      "Reduce marketing costs by 20%",
      "Enhanced customer experience",
      "Data-driven retail decisions"
    ],
    useCases: [
      "E-commerce businesses",
      "Brick-and-mortar retail",
      "Omnichannel retailers",
      "Fashion and apparel",
      "Consumer electronics"
    ],
    targetAudience: [
      "Retail managers",
      "Marketing directors",
      "E-commerce managers",
      "Merchandising teams",
      "Customer experience leaders"
    ],
    tags: ["Retail Technology", "Customer Intelligence", "Marketing Automation", "Inventory Optimization", "Personalization"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$1,800 - $4,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/retail-ai-customer-intelligence",
    industryStandards: ["PCI DSS", "GDPR", "CCPA", "SOC2", "ISO 27001"],
    complianceFrameworks: ["Retail Security", "Data Privacy", "Payment Security", "Customer Protection"],
    integrationPartners: ["Shopify", "WooCommerce", "Magento", "Salesforce", "HubSpot"],
    caseStudies: ["E-commerce Platform", "Fashion Retailer", "Electronics Store"]
  },

  // Education Industry Services
  {
    id: "education-ai-learning-platform",
    title: "Education AI Learning Platform",
    description: "Intelligent AI-powered learning platform designed for educational institutions, offering personalized learning experiences, adaptive assessments, and student performance analytics.",
    category: "Education Technology",
    subcategory: "AI Learning",
    price: 2200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered personalized learning",
      "Adaptive assessment systems",
      "Student performance analytics",
      "Learning path optimization",
      "Content recommendation engine",
      "Real-time progress tracking",
      "Automated grading systems",
      "Student engagement monitoring",
      "Learning analytics dashboard",
      "Custom curriculum design"
    ],
    benefits: [
      "Improve student outcomes by 25-35%",
      "Reduce administrative workload by 40%",
      "Personalized learning experiences",
      "Enhanced student engagement",
      "Data-driven educational decisions"
    ],
    useCases: [
      "K-12 schools",
      "Higher education institutions",
      "Corporate training programs",
      "Online learning platforms",
      "Special education programs"
    ],
    targetAudience: [
      "Educational administrators",
      "Teachers and instructors",
      "Curriculum developers",
      "Training managers",
      "Educational technology specialists"
    ],
    tags: ["Education Technology", "AI Learning", "Personalized Education", "Student Analytics", "Adaptive Learning"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium",
    marketPrice: "$2,200 - $6,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/education-ai-learning",
    industryStandards: ["SCORM", "xAPI", "LTI", "Common Core", "FERPA"],
    complianceFrameworks: ["FERPA", "COPPA", "GDPR", "SOC2", "ISO 27001"],
    integrationPartners: ["Canvas", "Blackboard", "Moodle", "Google Classroom", "Microsoft Teams"],
    caseStudies: ["University System", "K-12 District", "Corporate Training"]
  },

  // Transportation & Logistics Services
  {
    id: "transportation-ai-logistics-optimization",
    title: "Transportation AI Logistics Optimization Platform",
    description: "Advanced AI-powered logistics optimization platform designed for transportation and logistics companies, offering route optimization, fleet management, and supply chain analytics.",
    category: "Transportation Technology",
    subcategory: "Logistics Optimization",
    price: 3200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered route optimization",
      "Fleet management automation",
      "Supply chain analytics",
      "Real-time tracking systems",
      "Demand forecasting",
      "Capacity optimization",
      "Fuel efficiency monitoring",
      "Driver performance analytics",
      "Maintenance scheduling",
      "Custom logistics workflows"
    ],
    benefits: [
      "Reduce transportation costs by 20-30%",
      "Improve delivery times by 25%",
      "Optimize fleet utilization by 35%",
      "Enhanced supply chain visibility",
      "Data-driven logistics decisions"
    ],
    useCases: [
      "Trucking companies",
      "Delivery services",
      "Warehouse operations",
      "Supply chain management",
      "E-commerce logistics"
    ],
    targetAudience: [
      "Logistics managers",
      "Fleet operators",
      "Supply chain directors",
      "Operations managers",
      "Transportation planners"
    ],
    tags: ["Transportation", "Logistics", "Route Optimization", "Fleet Management", "Supply Chain"],
    estimatedDelivery: "6-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,200 - $8,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/transportation-ai-logistics",
    industryStandards: ["ISO 28000", "C-TPAT", "HACCP", "DOT", "FMCSA"],
    complianceFrameworks: ["Transportation Security", "Safety Standards", "Environmental Compliance", "SOC2"],
    integrationPartners: ["SAP", "Oracle", "Manhattan Associates", "JDA Software", "Blue Yonder"],
    caseStudies: ["Major Trucking Company", "E-commerce Logistics", "Warehouse Operator"]
  },

  // Energy Industry Services
  {
    id: "energy-ai-grid-optimization",
    title: "Energy AI Grid Optimization Platform",
    description: "Intelligent AI-powered energy grid optimization platform designed for utility companies, offering smart grid management, renewable energy integration, and demand response optimization.",
    category: "Energy Technology",
    subcategory: "Grid Optimization",
    price: 4500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered grid optimization",
      "Renewable energy integration",
      "Demand response optimization",
      "Predictive maintenance",
      "Energy consumption analytics",
      "Grid stability monitoring",
      "Load forecasting",
      "Energy storage optimization",
      "Real-time grid analytics",
      "Custom energy workflows"
    ],
    benefits: [
      "Improve grid efficiency by 20-30%",
      "Reduce energy losses by 15-25%",
      "Optimize renewable energy integration",
      "Enhanced grid stability",
      "Data-driven energy decisions"
    ],
    useCases: [
      "Utility companies",
      "Grid operators",
      "Renewable energy providers",
      "Energy storage companies",
      "Smart city initiatives"
    ],
    targetAudience: [
      "Grid operators",
      "Energy managers",
      "Utility engineers",
      "Renewable energy specialists",
      "Smart grid architects"
    ],
    tags: ["Energy Technology", "Grid Optimization", "Renewable Energy", "Smart Grid", "Energy Analytics"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,500 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/energy-ai-grid-optimization",
    industryStandards: ["IEEE", "IEC", "NERC", "FERC", "ISO 50001"],
    complianceFrameworks: ["Grid Security", "Environmental Compliance", "Safety Standards", "SOC2"],
    integrationPartners: ["Siemens", "GE", "ABB", "Schneider Electric", "Honeywell"],
    caseStudies: ["Major Utility", "Grid Operator", "Renewable Energy Provider"]
  },

  // Real Estate Industry Services
  {
    id: "real-estate-ai-market-intelligence",
    title: "Real Estate AI Market Intelligence Platform",
    description: "Advanced AI-powered market intelligence platform designed for real estate professionals, offering market analysis, property valuation, and investment opportunity identification.",
    category: "Real Estate Technology",
    subcategory: "Market Intelligence",
    price: 1600,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered market analysis",
      "Property valuation models",
      "Investment opportunity identification",
      "Market trend forecasting",
      "Comparative market analysis",
      "Risk assessment tools",
      "Portfolio optimization",
      "Real-time market data",
      "Custom market reports",
      "Investment analytics dashboard"
    ],
    benefits: [
      "Improve investment decisions by 30-40%",
      "Reduce market research time by 60%",
      "Enhanced property valuations",
      "Better risk assessment",
      "Data-driven real estate decisions"
    ],
    useCases: [
      "Real estate investors",
      "Property developers",
      "Real estate agents",
      "Property managers",
      "Investment firms"
    ],
    targetAudience: [
      "Real estate investors",
      "Property developers",
      "Real estate agents",
      "Property managers",
      "Investment analysts"
    ],
    tags: ["Real Estate", "Market Intelligence", "Property Valuation", "Investment Analysis", "Market Analytics"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$1,600 - $4,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/real-estate-ai-market-intelligence",
    industryStandards: ["RICS", "CREA", "NAR", "REIT", "MLS"],
    complianceFrameworks: ["Real Estate Regulations", "Data Privacy", "Financial Compliance", "SOC2"],
    integrationPartners: ["Zillow", "Redfin", "Realtor.com", "CoStar", "Real Capital Analytics"],
    caseStudies: ["Real Estate Investment Firm", "Property Developer", "Real Estate Agency"]
  },

  // Agriculture Industry Services
  {
    id: "agriculture-ai-precision-farming",
    title: "Agriculture AI Precision Farming Platform",
    description: "Intelligent AI-powered precision farming platform designed for agricultural operations, offering crop monitoring, yield optimization, and sustainable farming practices.",
    category: "Agriculture Technology",
    subcategory: "Precision Farming",
    price: 2400,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered crop monitoring",
      "Yield prediction models",
      "Soil health analysis",
      "Weather forecasting integration",
      "Irrigation optimization",
      "Pest and disease detection",
      "Fertilizer optimization",
      "Harvest planning",
      "Sustainability tracking",
      "Custom farming workflows"
    ],
    benefits: [
      "Increase crop yields by 20-30%",
      "Reduce water usage by 25%",
      "Optimize fertilizer application by 30%",
      "Enhanced sustainability",
      "Data-driven farming decisions"
    ],
    useCases: [
      "Large-scale farms",
      "Agricultural cooperatives",
      "Precision agriculture companies",
      "Agricultural research institutions",
      "Sustainable farming operations"
    ],
    targetAudience: [
      "Farm managers",
      "Agricultural consultants",
      "Precision agriculture specialists",
      "Agricultural researchers",
      "Sustainability managers"
    ],
    tags: ["Agriculture Technology", "Precision Farming", "Crop Monitoring", "Yield Optimization", "Sustainable Agriculture"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium",
    marketPrice: "$2,400 - $6,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/agriculture-ai-precision-farming",
    industryStandards: ["ISO 14001", "Global GAP", "Organic Certification", "Precision Agriculture", "Sustainable Farming"],
    complianceFrameworks: ["Environmental Compliance", "Food Safety", "Organic Standards", "SOC2"],
    integrationPartners: ["John Deere", "Case IH", "Precision Planting", "Climate FieldView", "FarmLogs"],
    caseStudies: ["Large-Scale Farm", "Agricultural Cooperative", "Precision Agriculture Company"]
  }
];