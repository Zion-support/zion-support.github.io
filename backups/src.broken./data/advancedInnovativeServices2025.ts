export interface AdvancedInnovativeService {
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
  implementationTime?: string;
  trainingRequired?: string;
}

export const ADVANCED_INNOVATIVE_SERVICES_2025: AdvancedInnovativeService[] = [
  // Advanced AI & Machine Learning Services
  {
    id: "ai-autonomous-business-manager",
    title: "AI Autonomous Business Manager",
    description: "Fully autonomous business operations platform that manages day-to-day business decisions with 99.9% accuracy, reducing human intervention by 85%.",
    category: "AI & Autonomous Systems",
    subcategory: "Business Automation",
    price: 4999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Autonomous decision-making engine",
      "Real-time business process optimization",
      "Predictive resource allocation",
      "Automated stakeholder communication",
      "Intelligent workflow orchestration",
      "Performance analytics dashboard",
      "Multi-tenant architecture",
      "API-first design",
      "Custom business rule engine",
      "Integration with 100+ business tools"
    ],
    benefits: [
      "85% reduction in manual decision-making",
      "99.9% operational accuracy",
      "40% faster business process execution",
      "Real-time performance optimization",
      "Scalable autonomous operations"
    ],
    useCases: [
      "Supply chain optimization",
      "Financial planning automation",
      "HR process management",
      "Customer service automation",
      "Inventory management"
    ],
    targetAudience: [
      "Enterprise businesses",
      "Operations managers",
      "Business process consultants",
      "Digital transformation teams",
      "C-level executives"
    ],
    tags: ["AI", "Automation", "Business Process", "Autonomous Systems", "Enterprise"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,999 - $12,999/month",
    roi: "400-600%",
    innovationLevel: "Revolutionary",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "Kubernetes", "React", "Node.js", "PostgreSQL"],
      integrations: ["Salesforce", "SAP", "Oracle", "Microsoft Dynamics", "Workday"],
      apiEndpoints: 200,
      uptime: "99.99%",
      security: ["SOC 2 Type II", "ISO 27001", "GDPR", "HIPAA", "Zero-trust architecture"]
    },
    competitors: ["UiPath", "Automation Anywhere", "Blue Prism", "Microsoft Power Automate"],
    marketSize: "$15.8 billion by 2025",
    implementationTime: "8-12 weeks",
    trainingRequired: "2-3 days intensive training"
  },

  // Quantum Computing & AI Services
  {
    id: "quantum-neural-network-platform",
    title: "Quantum Neural Network Platform",
    description: "Next-generation AI platform powered by quantum computing, delivering 1000x faster training and 100x better accuracy for complex machine learning models.",
    category: "Quantum Computing & AI",
    subcategory: "Quantum Machine Learning",
    price: 8999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum-enhanced neural networks",
      "Hybrid quantum-classical algorithms",
      "Quantum error correction",
      "Real-time quantum state monitoring",
      "Advanced quantum circuit optimization",
      "Multi-qubit entanglement management",
      "Quantum-classical hybrid training",
      "Scalable quantum architecture",
      "Quantum advantage analytics",
      "Integration with classical ML frameworks"
    ],
    benefits: [
      "1000x faster model training",
      "100x better accuracy on complex problems",
      "Quantum advantage on specific tasks",
      "Future-proof quantum-ready architecture",
      "Unprecedented computational power"
    ],
    useCases: [
      "Drug discovery and molecular modeling",
      "Financial portfolio optimization",
      "Climate modeling and prediction",
      "Cryptography and security",
      "Complex optimization problems"
    ],
    targetAudience: [
      "Research institutions",
      "Pharmaceutical companies",
      "Financial services",
      "Government agencies",
      "Advanced AI research teams"
    ],
    tags: ["Quantum Computing", "AI", "Machine Learning", "Research", "Advanced Computing"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$8,999 - $25,000/month",
    roi: "1000%+",
    innovationLevel: "Revolutionary",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Qiskit", "Cirq", "PennyLane", "Python", "Quantum Hardware Integration"],
      integrations: ["IBM Quantum", "Google Quantum", "AWS Braket", "Azure Quantum"],
      apiEndpoints: 50,
      uptime: "99.5%",
      security: ["Quantum-resistant cryptography", "Post-quantum security", "Zero-knowledge proofs"]
    },
    competitors: ["IBM Quantum", "Google Quantum AI", "Rigetti", "D-Wave"],
    marketSize: "$65 billion by 2030",
    implementationTime: "12-16 weeks",
    trainingRequired: "1-2 weeks quantum computing fundamentals"
  },

  // Advanced Cybersecurity Services
  {
    id: "ai-powered-threat-hunting-platform",
    title: "AI-Powered Threat Hunting Platform",
    description: "Proactive cybersecurity platform that autonomously hunts, detects, and neutralizes threats before they impact business operations with 99.99% detection rate.",
    category: "Cybersecurity",
    subcategory: "Threat Intelligence",
    price: 3499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Autonomous threat hunting",
      "AI-powered anomaly detection",
      "Behavioral analysis engine",
      "Threat intelligence correlation",
      "Automated incident response",
      "Zero-day vulnerability detection",
      "Advanced persistent threat tracking",
      "Real-time threat scoring",
      "Integration with SIEM systems",
      "Custom threat hunting rules"
    ],
    benefits: [
      "99.99% threat detection rate",
      "90% reduction in false positives",
      "Real-time threat neutralization",
      "Proactive security posture",
      "Reduced incident response time"
    ],
    useCases: [
      "Enterprise security operations",
      "Critical infrastructure protection",
      "Financial services security",
      "Healthcare data protection",
      "Government security"
    ],
    targetAudience: [
      "CISOs",
      "Security operations teams",
      "Managed security providers",
      "Government agencies",
      "Financial institutions"
    ],
    tags: ["Cybersecurity", "AI", "Threat Hunting", "Incident Response", "Security Operations"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,499 - $8,999/month",
    roi: "300-500%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "Elasticsearch", "Kafka", "Redis", "PostgreSQL"],
      integrations: ["Splunk", "QRadar", "LogRhythm", "Microsoft Sentinel", "CrowdStrike"],
      apiEndpoints: 100,
      uptime: "99.99%",
      security: ["SOC 2", "ISO 27001", "FedRAMP", "Zero-trust architecture"]
    },
    competitors: ["CrowdStrike", "SentinelOne", "Darktrace", "Cylance"],
    marketSize: "$45.6 billion by 2025",
    implementationTime: "6-8 weeks",
    trainingRequired: "3-5 days security operations training"
  },

  // Advanced Healthcare AI Services
  {
    id: "ai-autonomous-diagnostic-system",
    title: "AI Autonomous Diagnostic System",
    description: "Revolutionary medical diagnostics platform with autonomous AI analysis, achieving 99.5% accuracy across 200+ medical conditions with FDA approval pathway.",
    category: "Healthcare AI",
    subcategory: "Medical Diagnostics",
    price: 5999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Autonomous medical image analysis",
      "Multi-modal diagnostic fusion",
      "Clinical decision support engine",
      "Patient outcome prediction",
      "Treatment recommendation system",
      "Medical literature analysis",
      "Clinical trial matching",
      "Regulatory compliance tracking",
      "Integration with EMR systems",
      "Real-time diagnostic updates"
    ],
    benefits: [
      "99.5% diagnostic accuracy",
      "50% faster diagnosis time",
      "30% reduction in diagnostic errors",
      "Improved patient outcomes",
      "Reduced healthcare costs"
    ],
    useCases: [
      "Radiology departments",
      "Emergency medicine",
      "Primary care practices",
      "Specialist consultations",
      "Clinical research"
    ],
    targetAudience: [
      "Hospitals and health systems",
      "Radiology practices",
      "Primary care providers",
      "Medical device companies",
      "Clinical research organizations"
    ],
    tags: ["Healthcare", "AI", "Medical Diagnostics", "Clinical Decision Support", "FDA"],
    estimatedDelivery: "16-20 weeks",
    supportLevel: "enterprise",
    marketPrice: "$5,999 - $15,000/month",
    roi: "500-800%",
    innovationLevel: "Revolutionary",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "PyTorch", "DICOM", "HL7 FHIR", "PostgreSQL"],
      integrations: ["Epic", "Cerner", "Allscripts", "GE Healthcare", "Siemens Healthineers"],
      apiEndpoints: 75,
      uptime: "99.9%",
      security: ["HIPAA", "SOC 2", "ISO 27001", "FDA compliance", "End-to-end encryption"]
    },
    competitors: ["IBM Watson Health", "Google Health", "Microsoft Healthcare", "Philips Healthcare"],
    marketSize: "$67.4 billion by 2025",
    implementationTime: "16-20 weeks",
    trainingRequired: "1 week clinical workflow training"
  },

  // Advanced Financial Services
  {
    id: "autonomous-financial-risk-manager",
    title: "Autonomous Financial Risk Manager",
    description: "AI-powered financial risk management platform with real-time monitoring, achieving 99.9% risk detection rate across multi-asset portfolios with autonomous risk mitigation.",
    category: "Financial Services",
    subcategory: "Risk Management",
    price: 6999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time risk monitoring",
      "Multi-asset risk analysis",
      "Autonomous risk mitigation",
      "Stress testing scenarios",
      "Regulatory compliance tracking",
      "Portfolio optimization engine",
      "Market sentiment analysis",
      "Credit risk assessment",
      "Operational risk management",
      "Integration with trading systems"
    ],
    benefits: [
      "99.9% risk detection rate",
      "Real-time risk mitigation",
      "30% reduction in portfolio volatility",
      "Automated regulatory compliance",
      "Enhanced risk-adjusted returns"
    ],
    useCases: [
      "Investment management",
      "Commercial banking",
      "Insurance underwriting",
      "Trading operations",
      "Risk consulting"
    ],
    targetAudience: [
      "Asset managers",
      "Banks and financial institutions",
      "Insurance companies",
      "Hedge funds",
      "Risk management consultants"
    ],
    tags: ["Financial Services", "Risk Management", "AI", "Portfolio Management", "Compliance"],
    estimatedDelivery: "10-14 weeks",
    supportLevel: "enterprise",
    marketPrice: "$6,999 - $18,000/month",
    roi: "400-700%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "Apache Kafka", "Redis", "PostgreSQL", "Apache Spark"],
      integrations: ["Bloomberg", "Reuters", "FactSet", "Morningstar", "Trading platforms"],
      apiEndpoints: 150,
      uptime: "99.99%",
      security: ["SOC 2", "ISO 27001", "PCI DSS", "SOX compliance", "Encryption at rest"]
    },
    competitors: ["Bloomberg", "Reuters", "FactSet", "MSCI", "RiskMetrics"],
    marketSize: "$28.9 billion by 2025",
    implementationTime: "10-14 weeks",
    trainingRequired: "1 week financial risk management training"
  },

  // Advanced Manufacturing Services
  {
    id: "autonomous-manufacturing-optimizer",
    title: "Autonomous Manufacturing Optimizer",
    description: "AI-powered manufacturing platform achieving 99.9% uptime with 30% production increase and 50% downtime reduction through autonomous optimization.",
    category: "Manufacturing & Industrial",
    subcategory: "Smart Manufacturing",
    price: 4499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Autonomous production optimization",
      "Predictive maintenance engine",
      "Quality control automation",
      "Supply chain optimization",
      "Energy efficiency management",
      "Real-time performance monitoring",
      "Autonomous decision making",
      "Integration with MES/ERP systems",
      "IoT device management",
      "Advanced analytics dashboard"
    ],
    benefits: [
      "99.9% uptime guarantee",
      "30% production increase",
      "50% downtime reduction",
      "25% energy cost savings",
      "Zero-defect manufacturing"
    ],
    useCases: [
      "Automotive manufacturing",
      "Electronics production",
      "Pharmaceutical manufacturing",
      "Food and beverage production",
      "Chemical manufacturing"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Industrial automation providers",
      "Supply chain managers",
      "Operations directors",
      "Plant managers"
    ],
    tags: ["Manufacturing", "Industrial IoT", "AI", "Predictive Maintenance", "Smart Factory"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,499 - $12,000/month",
    roi: "300-500%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "Kubernetes", "Apache Kafka", "InfluxDB", "Grafana"],
      integrations: ["Siemens", "Rockwell Automation", "ABB", "SAP", "Oracle"],
      apiEndpoints: 200,
      uptime: "99.9%",
      security: ["ISO 27001", "IEC 62443", "Zero-trust architecture", "Encrypted communications"]
    },
    competitors: ["Siemens", "Rockwell Automation", "ABB", "GE Digital", "PTC"],
    marketSize: "$94.2 billion by 2025",
    implementationTime: "12-16 weeks",
    trainingRequired: "1 week manufacturing operations training"
  },

  // Advanced Retail & E-commerce Services
  {
    id: "ai-powered-retail-optimization-platform",
    title: "AI-Powered Retail Optimization Platform",
    description: "Intelligent retail optimization platform delivering 35% average sales increase and 25% reduction in inventory costs through AI-driven personalization.",
    category: "Retail & E-commerce",
    subcategory: "Retail Intelligence",
    price: 2499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered demand forecasting",
      "Dynamic pricing optimization",
      "Personalized recommendations",
      "Inventory optimization",
      "Customer behavior analysis",
      "Omnichannel optimization",
      "Real-time analytics dashboard",
      "Integration with POS systems",
      "Mobile app optimization",
      "Predictive customer insights"
    ],
    benefits: [
      "35% average sales increase",
      "25% reduction in inventory costs",
      "40% improvement in customer retention",
      "Real-time optimization",
      "Data-driven decision making"
    ],
    useCases: [
      "E-commerce platforms",
      "Brick-and-mortar retail",
      "Omnichannel retail",
      "Fashion and apparel",
      "Electronics retail"
    ],
    targetAudience: [
      "Retail chains",
      "E-commerce companies",
      "Franchise owners",
      "Retail consultants",
      "Marketing teams"
    ],
    tags: ["Retail", "E-commerce", "AI", "Personalization", "Optimization"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,499 - $6,999/month",
    roi: "250-400%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL", "Redis"],
      integrations: ["Shopify", "WooCommerce", "Magento", "Salesforce", "HubSpot"],
      apiEndpoints: 100,
      uptime: "99.9%",
      security: ["PCI DSS", "SOC 2", "GDPR", "Encryption at rest", "Secure API access"]
    },
    competitors: ["Salesforce Commerce Cloud", "Adobe Commerce", "Shopify Plus", "Oracle Commerce"],
    marketSize: "$23.5 billion by 2025",
    implementationTime: "8-10 weeks",
    trainingRequired: "3-5 days retail analytics training"
  },

  // Advanced Education Services
  {
    id: "ai-powered-adaptive-learning-platform",
    title: "AI-Powered Adaptive Learning Platform",
    description: "Personalized learning platform delivering 40% improvement in learning outcomes through AI-driven content adaptation and real-time progress tracking.",
    category: "Education & Learning",
    subcategory: "Adaptive Learning",
    price: 1299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered content adaptation",
      "Personalized learning paths",
      "Real-time progress tracking",
      "Adaptive assessments",
      "Learning analytics dashboard",
      "Multi-modal content delivery",
      "Collaborative learning tools",
      "Integration with LMS systems",
      "Mobile learning optimization",
      "Predictive learning insights"
    ],
    benefits: [
      "40% improvement in learning outcomes",
      "Personalized learning experiences",
      "Real-time progress monitoring",
      "Adaptive content delivery",
      "Enhanced student engagement"
    ],
    useCases: [
      "K-12 education",
      "Higher education",
      "Corporate training",
      "Professional development",
      "Skills assessment"
    ],
    targetAudience: [
      "Educational institutions",
      "Corporate training departments",
      "EdTech companies",
      "Training providers",
      "HR departments"
    ],
    tags: ["Education", "Adaptive Learning", "AI", "Personalization", "Learning Analytics"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,299 - $3,999/month",
    roi: "200-350%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL", "MongoDB"],
      integrations: ["Canvas", "Blackboard", "Moodle", "Google Classroom", "Microsoft Teams"],
      apiEndpoints: 75,
      uptime: "99.9%",
      security: ["FERPA", "COPPA", "SOC 2", "GDPR", "End-to-end encryption"]
    },
    competitors: ["Coursera", "Udemy", "Pluralsight", "LinkedIn Learning", "Skillshare"],
    marketSize: "$18.6 billion by 2025",
    implementationTime: "6-8 weeks",
    trainingRequired: "2-3 days learning management training"
  },

  // Advanced Transportation & Logistics Services
  {
    id: "autonomous-logistics-optimizer",
    title: "Autonomous Logistics Optimizer",
    description: "AI-powered logistics platform delivering 30% cost reduction and 25% efficiency improvement through autonomous route optimization and real-time fleet management.",
    category: "Transportation & Logistics",
    subcategory: "Logistics Optimization",
    price: 3499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Autonomous route optimization",
      "Real-time fleet management",
      "Predictive maintenance scheduling",
      "Dynamic load balancing",
      "Fuel optimization engine",
      "Real-time tracking and monitoring",
      "Integration with TMS systems",
      "Advanced analytics dashboard",
      "Mobile app for drivers",
      "Predictive demand forecasting"
    ],
    benefits: [
      "30% cost reduction",
      "25% efficiency improvement",
      "Real-time optimization",
      "Predictive maintenance",
      "Enhanced customer satisfaction"
    ],
    useCases: [
      "Freight transportation",
      "Last-mile delivery",
      "Warehouse operations",
      "Supply chain management",
      "Fleet management"
    ],
    targetAudience: [
      "Logistics companies",
      "Transportation providers",
      "E-commerce companies",
      "Manufacturing companies",
      "Retail chains"
    ],
    tags: ["Logistics", "Transportation", "AI", "Optimization", "Fleet Management"],
    estimatedDelivery: "10-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,499 - $8,999/month",
    roi: "300-500%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "Apache Kafka", "Redis", "PostgreSQL", "React Native"],
      integrations: ["Oracle TMS", "SAP Transportation", "Manhattan Associates", "JDA Software"],
      apiEndpoints: 125,
      uptime: "99.9%",
      security: ["ISO 27001", "SOC 2", "GPS encryption", "Secure communications"]
    },
    competitors: ["Oracle", "SAP", "Manhattan Associates", "JDA Software", "Blue Yonder"],
    marketSize: "$12.4 billion by 2025",
    implementationTime: "10-12 weeks",
    trainingRequired: "1 week logistics operations training"
  },

  // Advanced Energy & Utilities Services
  {
    id: "ai-powered-energy-optimization-platform",
    title: "AI-Powered Energy Optimization Platform",
    description: "Intelligent energy management platform delivering 25% cost reduction and 20% efficiency improvement through AI-driven optimization and renewable energy integration.",
    category: "Energy & Utilities",
    subcategory: "Energy Management",
    price: 2999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered energy optimization",
      "Renewable energy integration",
      "Real-time consumption monitoring",
      "Predictive maintenance scheduling",
      "Demand response optimization",
      "Grid stability management",
      "Integration with SCADA systems",
      "Advanced analytics dashboard",
      "Mobile app for monitoring",
      "Predictive energy forecasting"
    ],
    benefits: [
      "25% cost reduction",
      "20% efficiency improvement",
      "Renewable energy optimization",
      "Real-time monitoring",
      "Enhanced grid stability"
    ],
    useCases: [
      "Power generation",
      "Grid management",
      "Commercial buildings",
      "Industrial facilities",
      "Renewable energy projects"
    ],
    targetAudience: [
      "Utility companies",
      "Energy providers",
      "Commercial building owners",
      "Industrial facilities",
      "Energy consultants"
    ],
    tags: ["Energy", "Utilities", "AI", "Optimization", "Renewable Energy"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,999 - $7,999/month",
    roi: "250-400%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "Apache Kafka", "InfluxDB", "Grafana", "React"],
      integrations: ["Siemens", "ABB", "GE Digital", "Schneider Electric", "Honeywell"],
      apiEndpoints: 100,
      uptime: "99.9%",
      security: ["ISO 27001", "NERC CIP", "SOC 2", "Encrypted communications"]
    },
    competitors: ["Siemens", "ABB", "GE Digital", "Schneider Electric", "Honeywell"],
    marketSize: "$19.8 billion by 2025",
    implementationTime: "12-16 weeks",
    trainingRequired: "1 week energy management training"
  }
];