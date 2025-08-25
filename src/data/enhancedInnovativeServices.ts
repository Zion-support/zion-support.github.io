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
<<<<<<< HEAD
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
=======
  technologyStack: string[];
  complianceStandards: string[];
  integrationOptions: string[];
  deploymentOptions: string[];
  sla: string;
  uptime: string;
}

export const ENHANCED_INNOVATIVE_SERVICES: EnhancedInnovativeService[] = [
  // 1. AI-Powered Legal Tech Solutions
  {
    id: "ai-legal-contract-analyzer",
    title: "AI-Powered Legal Contract Analyzer & Risk Assessment Platform",
    description: "Advanced AI platform that analyzes legal contracts in real-time, identifies risks, suggests improvements, and ensures compliance with current regulations.",
    category: "AI & Legal Tech",
    subcategory: "Contract Analysis",
    price: 1299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time contract analysis and risk scoring",
      "AI-powered clause identification and classification",
      "Regulatory compliance checking across jurisdictions",
      "Automated risk assessment and mitigation suggestions",
      "Contract template library with 1000+ templates",
      "Integration with major legal software platforms",
      "Multi-language support (EN, ES, FR, DE, PT)",
      "Advanced analytics and reporting dashboard",
      "Custom workflow automation",
      "API access for enterprise integrations"
    ],
    benefits: [
      "Reduce contract review time by 85%",
      "Identify 95% of potential legal risks automatically",
      "Ensure 100% regulatory compliance",
      "Save up to $50,000 annually in legal review costs",
      "Improve contract negotiation outcomes by 40%"
    ],
    useCases: [
      "Corporate legal departments",
      "Law firms and legal practices",
      "HR departments for employment contracts",
      "Procurement teams for vendor agreements",
      "Real estate companies for lease agreements"
    ],
    targetAudience: [
      "General Counsel",
      "Legal Operations Managers",
      "Contract Managers",
      "Compliance Officers",
      "HR Directors"
    ],
    tags: ["AI", "Legal Tech", "Contract Analysis", "Risk Assessment", "Compliance", "Automation"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$1,299 - $4,999/month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0f9b
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
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
=======
    websiteUrl: "https://ziontechgroup.com/ai-legal-contract-analyzer",
    demoUrl: "https://ziontechgroup.com/demo/ai-legal-contract-analyzer",
    documentationUrl: "https://docs.ziontechgroup.com/ai-legal-contract-analyzer",
    technologyStack: ["OpenAI GPT-4", "Azure Cognitive Services", "React", "Node.js", "PostgreSQL", "Redis"],
    complianceStandards: ["GDPR", "CCPA", "SOC 2", "ISO 27001", "HIPAA"],
    integrationOptions: ["DocuSign", "Adobe Sign", "Microsoft Word", "Google Docs", "Salesforce", "HubSpot"],
    deploymentOptions: ["Cloud", "On-Premise", "Hybrid"],
    sla: "99.9%",
    uptime: "99.95%"
  },

  // 2. Autonomous Financial Advisory Platform
  {
    id: "autonomous-financial-advisor",
    title: "Autonomous Financial Advisory & Portfolio Optimization Platform",
    description: "AI-driven financial advisory platform that provides personalized investment recommendations, portfolio optimization, and automated wealth management strategies.",
    category: "AI & FinTech",
    subcategory: "Financial Advisory",
    price: 2499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered investment strategy generation",
      "Real-time portfolio optimization algorithms",
      "Risk assessment and tolerance analysis",
      "Tax-loss harvesting automation",
      "ESG and sustainable investing options",
      "Multi-asset class portfolio management",
      "Advanced rebalancing algorithms",
      "Performance tracking and analytics",
      "Regulatory compliance monitoring",
      "Integration with major brokerages and banks"
    ],
    benefits: [
      "Improve portfolio returns by 15-25% annually",
      "Reduce investment management fees by 60%",
      "Automate tax optimization strategies",
      "Provide 24/7 portfolio monitoring",
      "Ensure regulatory compliance automatically"
    ],
    useCases: [
      "Wealth management firms",
      "Financial advisors",
      "Individual investors",
      "Family offices",
      "Retirement plan administrators"
    ],
    targetAudience: [
      "Certified Financial Planners",
      "Wealth Managers",
      "Investment Advisors",
      "Portfolio Managers",
      "High Net Worth Individuals"
    ],
    tags: ["AI", "FinTech", "Investment Management", "Portfolio Optimization", "Wealth Management", "Automation"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$2,499 - $7,999/month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0f9b
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
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
=======
    websiteUrl: "https://ziontechgroup.com/autonomous-financial-advisor",
    demoUrl: "https://ziontechgroup.com/demo/autonomous-financial-advisor",
    documentationUrl: "https://docs.ziontechgroup.com/autonomous-financial-advisor",
    technologyStack: ["TensorFlow", "Python", "React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    complianceStandards: ["SEC", "FINRA", "GDPR", "SOC 2", "PCI DSS"],
    integrationOptions: ["Charles Schwab", "Fidelity", "Vanguard", "TD Ameritrade", "E*TRADE", "Mint"],
    deploymentOptions: ["Cloud", "On-Premise", "Hybrid"],
    sla: "99.9%",
    uptime: "99.95%"
  },

  // 3. AI-Powered Healthcare Diagnostics Platform
  {
    id: "ai-healthcare-diagnostics",
    title: "AI-Powered Healthcare Diagnostics & Medical Imaging Analysis Platform",
    description: "Advanced AI platform for medical image analysis, diagnostic assistance, and patient outcome prediction using deep learning algorithms.",
    category: "AI & Healthcare",
    subcategory: "Medical Diagnostics",
    price: 3999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered medical image analysis (X-rays, MRIs, CT scans)",
      "Diagnostic accuracy validation and improvement",
      "Patient outcome prediction algorithms",
      "Integration with major PACS systems",
      "Real-time diagnostic assistance",
      "Multi-modality image processing",
      "Automated report generation",
      "Clinical decision support tools",
      "HIPAA-compliant data handling",
      "FDA regulatory compliance features"
    ],
    benefits: [
      "Improve diagnostic accuracy by 30-40%",
      "Reduce diagnostic time by 60%",
      "Lower healthcare costs by 25%",
      "Enhance patient outcomes and safety",
      "Support remote healthcare delivery"
    ],
    useCases: [
      "Hospitals and medical centers",
      "Radiology departments",
      "Telemedicine platforms",
      "Medical research institutions",
      "Healthcare startups"
    ],
    targetAudience: [
      "Radiologists",
      "Medical Directors",
      "Healthcare IT Managers",
      "Clinical Researchers",
      "Telemedicine Providers"
    ],
    tags: ["AI", "Healthcare", "Medical Imaging", "Diagnostics", "Deep Learning", "Telemedicine"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,999 - $12,999/month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0f9b
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
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
=======
    websiteUrl: "https://ziontechgroup.com/ai-healthcare-diagnostics",
    demoUrl: "https://ziontechgroup.com/demo/ai-healthcare-diagnostics",
    documentationUrl: "https://docs.ziontechgroup.com/ai-healthcare-diagnostics",
    technologyStack: ["TensorFlow", "PyTorch", "Python", "React", "Node.js", "PostgreSQL", "AWS"],
    complianceStandards: ["HIPAA", "FDA", "SOC 2", "ISO 27001", "HITECH"],
    integrationOptions: ["Epic", "Cerner", "PACS systems", "DICOM", "HL7", "FHIR"],
    deploymentOptions: ["Cloud", "On-Premise", "Hybrid"],
    sla: "99.9%",
    uptime: "99.95%"
  },

  // 4. Quantum-Safe Cybersecurity Platform
  {
    id: "quantum-safe-cybersecurity",
    title: "Quantum-Safe Cybersecurity & Post-Quantum Cryptography Platform",
    description: "Future-proof cybersecurity platform that implements quantum-resistant encryption algorithms and prepares organizations for the quantum computing era.",
    category: "Cybersecurity & Quantum",
    subcategory: "Post-Quantum Security",
    price: 5999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Post-quantum cryptography algorithms (Lattice-based, Hash-based)",
      "Quantum-resistant key exchange protocols",
      "Hybrid encryption systems",
      "Quantum threat assessment tools",
      "Migration planning and automation",
      "Performance optimization for quantum algorithms",
      "Compliance with NIST post-quantum standards",
      "Integration with existing security infrastructure",
      "Real-time threat monitoring",
      "Automated response and recovery"
    ],
    benefits: [
      "Future-proof security against quantum threats",
      "Maintain compliance with emerging standards",
      "Protect sensitive data for decades",
      "Reduce security migration costs",
      "Enhance overall cybersecurity posture"
    ],
    useCases: [
      "Government agencies",
      "Financial institutions",
      "Healthcare organizations",
      "Critical infrastructure",
      "Defense contractors"
    ],
    targetAudience: [
      "Chief Information Security Officers",
      "Security Architects",
      "Compliance Officers",
      "Government IT Directors",
      "Financial Security Managers"
    ],
    tags: ["Cybersecurity", "Quantum Computing", "Post-Quantum Cryptography", "Encryption", "Compliance", "Future-Proof"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$5,999 - $19,999/month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0f9b
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
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
=======
    websiteUrl: "https://ziontechgroup.com/quantum-safe-cybersecurity",
    demoUrl: "https://ziontechgroup.com/demo/quantum-safe-cybersecurity",
    documentationUrl: "https://docs.ziontechgroup.com/quantum-safe-cybersecurity",
    technologyStack: ["OpenSSL", "Python", "C++", "React", "Node.js", "PostgreSQL", "AWS"],
    complianceStandards: ["NIST", "FIPS 140-2", "SOC 2", "ISO 27001", "Common Criteria"],
    integrationOptions: ["Active Directory", "LDAP", "SAML", "OAuth", "PKI", "HSM"],
    deploymentOptions: ["Cloud", "On-Premise", "Hybrid"],
    sla: "99.9%",
    uptime: "99.95%"
  },

  // 5. Autonomous Supply Chain Optimization Platform
  {
    id: "autonomous-supply-chain",
    title: "Autonomous Supply Chain Optimization & Predictive Analytics Platform",
    description: "AI-driven supply chain platform that optimizes inventory, predicts demand, and automates procurement decisions using machine learning and predictive analytics.",
    category: "AI & Supply Chain",
    subcategory: "Supply Chain Optimization",
    price: 1899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered demand forecasting and prediction",
      "Real-time inventory optimization algorithms",
      "Automated procurement decision making",
      "Supplier performance analytics and scoring",
      "Supply chain risk assessment and mitigation",
      "Multi-echelon inventory optimization",
      "Transportation route optimization",
      "Cost optimization and savings analysis",
      "Integration with major ERP systems",
      "Real-time dashboards and reporting"
    ],
    benefits: [
      "Reduce inventory costs by 25-40%",
      "Improve forecast accuracy by 60%",
      "Reduce stockouts by 80%",
      "Lower procurement costs by 20%",
      "Enhance supplier relationships and performance"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0f9b
    ],
    useCases: [
      "Manufacturing companies",
      "Retail chains",
<<<<<<< HEAD
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
=======
      "E-commerce platforms",
      "Distribution centers",
      "Logistics providers"
    ],
    targetAudience: [
      "Supply Chain Directors",
      "Operations Managers",
      "Procurement Managers",
      "Inventory Managers",
      "Logistics Coordinators"
    ],
    tags: ["AI", "Supply Chain", "Inventory Optimization", "Demand Forecasting", "Procurement", "Logistics"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$1,899 - $5,999/month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0f9b
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
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
=======
    websiteUrl: "https://ziontechgroup.com/autonomous-supply-chain",
    demoUrl: "https://ziontechgroup.com/demo/autonomous-supply-chain",
    documentationUrl: "https://docs.ziontechgroup.com/autonomous-supply-chain",
    technologyStack: ["TensorFlow", "Python", "React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    complianceStandards: ["ISO 9001", "ISO 14001", "SOC 2", "GDPR"],
    integrationOptions: ["SAP", "Oracle", "Microsoft Dynamics", "NetSuite", "Salesforce", "Shopify"],
    deploymentOptions: ["Cloud", "On-Premise", "Hybrid"],
    sla: "99.9%",
    uptime: "99.95%"
  },

  // 6. AI-Powered Energy Management Platform
  {
    id: "ai-energy-management",
    title: "AI-Powered Energy Management & Smart Grid Optimization Platform",
    description: "Intelligent energy management platform that optimizes power consumption, predicts energy needs, and automates smart grid operations using AI and IoT technologies.",
    category: "AI & Energy",
    subcategory: "Smart Grid Management",
    price: 2999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered energy consumption prediction",
      "Real-time grid optimization algorithms",
      "Demand response automation",
      "Renewable energy integration optimization",
      "Energy storage management",
      "Predictive maintenance for grid infrastructure",
      "Carbon footprint tracking and reduction",
      "Integration with smart meters and IoT devices",
      "Real-time monitoring and alerting",
      "Advanced analytics and reporting"
    ],
    benefits: [
      "Reduce energy costs by 20-35%",
      "Improve grid efficiency by 25%",
      "Reduce carbon emissions by 30%",
      "Prevent grid failures and outages",
      "Optimize renewable energy utilization"
    ],
    useCases: [
      "Utility companies",
      "Commercial buildings",
      "Industrial facilities",
      "Smart cities",
      "Energy management companies"
    ],
    targetAudience: [
      "Energy Managers",
      "Facility Directors",
      "Sustainability Officers",
      "Grid Operators",
      "Building Managers"
    ],
    tags: ["AI", "Energy Management", "Smart Grid", "IoT", "Sustainability", "Predictive Analytics"],
    estimatedDelivery: "4-5 weeks",
    supportLevel: "premium",
    marketPrice: "$2,999 - $8,999/month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0f9b
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
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
=======
    websiteUrl: "https://ziontechgroup.com/ai-energy-management",
    demoUrl: "https://ziontechgroup.com/demo/ai-energy-management",
    documentationUrl: "https://docs.ziontechgroup.com/ai-energy-management",
    technologyStack: ["TensorFlow", "Python", "React", "Node.js", "PostgreSQL", "InfluxDB", "AWS"],
    complianceStandards: ["ISO 50001", "LEED", "SOC 2", "NERC CIP"],
    integrationOptions: ["Smart meters", "SCADA systems", "Building management systems", "IoT platforms", "Utility APIs"],
    deploymentOptions: ["Cloud", "On-Premise", "Hybrid"],
    sla: "99.9%",
    uptime: "99.95%"
  },

  // 7. Autonomous Customer Experience Platform
  {
    id: "autonomous-customer-experience",
    title: "Autonomous Customer Experience & Journey Optimization Platform",
    description: "AI-driven customer experience platform that personalizes interactions, predicts customer needs, and optimizes customer journeys across all touchpoints.",
    category: "AI & Customer Experience",
    subcategory: "Customer Journey Optimization",
    price: 1499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered customer behavior prediction",
      "Real-time personalization engine",
      "Omnichannel journey optimization",
      "Sentiment analysis and emotion detection",
      "Predictive customer service",
      "Customer lifetime value optimization",
      "A/B testing and optimization",
      "Integration with major CRM and marketing platforms",
      "Real-time analytics and insights",
      "Automated customer engagement workflows"
    ],
    benefits: [
      "Increase customer satisfaction by 40%",
      "Improve customer retention by 35%",
      "Boost conversion rates by 25%",
      "Reduce customer service costs by 30%",
      "Enhance brand loyalty and advocacy"
    ],
    useCases: [
      "E-commerce platforms",
      "SaaS companies",
      "Retail chains",
      "Financial services",
      "Telecommunications"
    ],
    targetAudience: [
      "Customer Experience Directors",
      "Marketing Managers",
      "Customer Success Managers",
      "Product Managers",
      "Business Development Directors"
    ],
    tags: ["AI", "Customer Experience", "Personalization", "Customer Journey", "Analytics", "Automation"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$1,499 - $4,999/month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0f9b
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
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
=======
    websiteUrl: "https://ziontechgroup.com/autonomous-customer-experience",
    demoUrl: "https://ziontechgroup.com/demo/autonomous-customer-experience",
    documentationUrl: "https://docs.ziontechgroup.com/autonomous-customer-experience",
    technologyStack: ["TensorFlow", "Python", "React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    complianceStandards: ["GDPR", "CCPA", "SOC 2", "ISO 27001"],
    integrationOptions: ["Salesforce", "HubSpot", "Shopify", "Mailchimp", "Zendesk", "Intercom"],
    deploymentOptions: ["Cloud", "On-Premise", "Hybrid"],
    sla: "99.9%",
    uptime: "99.95%"
  },

  // 8. Quantum Machine Learning Platform
  {
    id: "quantum-machine-learning",
    title: "Quantum Machine Learning & Hybrid Computing Platform",
    description: "Advanced platform that combines quantum computing with classical machine learning to solve complex optimization problems and accelerate AI model training.",
    category: "Quantum & AI",
    subcategory: "Hybrid Computing",
    price: 8999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum-classical hybrid algorithms",
      "Quantum neural network implementations",
      "Optimization problem solving",
      "Quantum-enhanced feature selection",
      "Hybrid model training and deployment",
      "Quantum circuit optimization",
      "Integration with major quantum hardware",
      "Performance benchmarking tools",
      "Real-time quantum resource management",
      "Advanced analytics and visualization"
    ],
    benefits: [
      "Solve intractable optimization problems",
      "Achieve exponential speedup for specific tasks",
      "Improve machine learning model accuracy",
      "Reduce computational resource requirements",
      "Future-proof technology investment"
    ],
    useCases: [
      "Research institutions",
      "Pharmaceutical companies",
      "Financial institutions",
      "Logistics companies",
      "Technology companies"
    ],
    targetAudience: [
      "Quantum Researchers",
      "Data Scientists",
      "AI Engineers",
      "Research Directors",
      "Technology Officers"
    ],
    tags: ["Quantum Computing", "Machine Learning", "Hybrid Computing", "Optimization", "Research", "Innovation"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$8,999 - $29,999/month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0f9b
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
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
=======
    websiteUrl: "https://ziontechgroup.com/quantum-machine-learning",
    demoUrl: "https://ziontechgroup.com/demo/quantum-machine-learning",
    documentationUrl: "https://docs.ziontechgroup.com/quantum-machine-learning",
    technologyStack: ["Qiskit", "Cirq", "PennyLane", "Python", "React", "Node.js", "PostgreSQL"],
    complianceStandards: ["ISO 27001", "SOC 2", "NIST"],
    integrationOptions: ["IBM Quantum", "Google Quantum", "Amazon Braket", "Microsoft Azure Quantum"],
    deploymentOptions: ["Cloud", "Hybrid"],
    sla: "99.9%",
    uptime: "99.95%"
  },

  // 9. Autonomous Data Governance Platform
  {
    id: "autonomous-data-governance",
    title: "Autonomous Data Governance & Privacy Management Platform",
    description: "AI-powered data governance platform that automatically manages data quality, privacy compliance, and regulatory requirements across all data assets.",
    category: "AI & Data Governance",
    subcategory: "Privacy Management",
    price: 2199,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered data quality assessment",
      "Automated privacy compliance monitoring",
      "Data lineage and traceability",
      "Regulatory requirement mapping",
      "Automated data classification",
      "Privacy impact assessment automation",
      "Data retention policy management",
      "Integration with major data platforms",
      "Real-time compliance reporting",
      "Automated remediation workflows"
    ],
    benefits: [
      "Ensure 100% regulatory compliance",
      "Reduce data governance costs by 50%",
      "Improve data quality by 40%",
      "Automate privacy management processes",
      "Reduce compliance risks and penalties"
    ],
    useCases: [
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Technology companies",
      "Retail companies"
    ],
    targetAudience: [
      "Data Governance Officers",
      "Privacy Officers",
      "Compliance Managers",
      "Data Architects",
      "Legal Counsel"
    ],
    tags: ["Data Governance", "Privacy", "Compliance", "AI", "Automation", "Regulatory"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$2,199 - $6,999/month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0f9b
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
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
=======
    websiteUrl: "https://ziontechgroup.com/autonomous-data-governance",
    demoUrl: "https://ziontechgroup.com/demo/autonomous-data-governance",
    documentationUrl: "https://docs.ziontechgroup.com/autonomous-data-governance",
    technologyStack: ["TensorFlow", "Python", "React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    complianceStandards: ["GDPR", "CCPA", "HIPAA", "SOC 2", "ISO 27001", "SOX"],
    integrationOptions: ["Snowflake", "Databricks", "AWS S3", "Azure Data Lake", "Google BigQuery"],
    deploymentOptions: ["Cloud", "On-Premise", "Hybrid"],
    sla: "99.9%",
    uptime: "99.95%"
  },

  // 10. AI-Powered Talent Acquisition Platform
  {
    id: "ai-talent-acquisition",
    title: "AI-Powered Talent Acquisition & Recruitment Optimization Platform",
    description: "Intelligent recruitment platform that uses AI to source, screen, and match candidates with job requirements, reducing hiring time and improving quality.",
    category: "AI & HR Tech",
    subcategory: "Recruitment",
    price: 999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered candidate sourcing and matching",
      "Automated resume screening and parsing",
      "Skill assessment and evaluation",
      "Predictive candidate success modeling",
      "Interview scheduling and automation",
      "Diversity and inclusion optimization",
      "Integration with major ATS platforms",
      "Advanced analytics and reporting",
      "Custom workflow automation",
      "Mobile-responsive candidate portal"
    ],
    benefits: [
      "Reduce time-to-hire by 60%",
      "Improve candidate quality by 40%",
      "Reduce recruitment costs by 35%",
      "Enhance diversity and inclusion",
      "Improve candidate experience"
    ],
    useCases: [
      "HR departments",
      "Recruitment agencies",
      "Staffing companies",
      "Large enterprises",
      "Startups and scale-ups"
    ],
    targetAudience: [
      "HR Directors",
      "Recruitment Managers",
      "Talent Acquisition Specialists",
      "Hiring Managers",
      "Recruitment Agencies"
    ],
    tags: ["AI", "HR Tech", "Recruitment", "Talent Acquisition", "Automation", "Analytics"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$999 - $3,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-talent-acquisition",
    demoUrl: "https://ziontechgroup.com/demo/ai-talent-acquisition",
    documentationUrl: "https://docs.ziontechgroup.com/ai-talent-acquisition",
    technologyStack: ["TensorFlow", "Python", "React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    complianceStandards: ["EEOC", "OFCCP", "GDPR", "SOC 2", "ISO 27001"],
    integrationOptions: ["Workday", "BambooHR", "Greenhouse", "Lever", "Bullhorn", "Salesforce"],
    deploymentOptions: ["Cloud", "On-Premise", "Hybrid"],
    sla: "99.9%",
    uptime: "99.95%"
  }
];

// Helper functions
export const getServiceById = (id: string): EnhancedInnovativeService | undefined => {
  return ENHANCED_INNOVATIVE_SERVICES.find(service => service.id === id);
};

export const getServicesByCategory = (category: string): EnhancedInnovativeService[] => {
  return ENHANCED_INNOVATIVE_SERVICES.filter(service => service.category === category);
};

export const getServicesByPriceRange = (minPrice: number, maxPrice: number): EnhancedInnovativeService[] => {
  return ENHANCED_INNOVATIVE_SERVICES.filter(service => 
    service.price >= minPrice && service.price <= maxPrice
  );
};

export const getFeaturedServices = (): EnhancedInnovativeService[] => {
  return ENHANCED_INNOVATIVE_SERVICES.slice(0, 6);
};

export const searchServices = (query: string): EnhancedInnovativeService[] => {
  const lowerQuery = query.toLowerCase();
  return ENHANCED_INNOVATIVE_SERVICES.filter(service =>
    service.title.toLowerCase().includes(lowerQuery) ||
    service.description.toLowerCase().includes(lowerQuery) ||
    service.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0f9b
};