export interface InnovativeService {
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
  targetAudience: string[];
  marketPrice: string;
  website: string;
  contactEmail: string;
  tags: string[];
  aiScore: number;
  rating: number;
  reviewCount: number;
  featured: boolean;
  location: string;
  availability: string;
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
    verified: boolean;
  };
  images: string[];
  createdAt: string;
  technologyStack: string[];
  useCases: string[];
  integrationOptions: string[];
  complianceStandards: string[];
  deploymentTime: string;
  supportLevel: string;
  roiMetrics: string[];
}

export const INNOVATIVE_SERVICES_2025: InnovativeService[] = [
  // AI-Powered Business Intelligence & Analytics
  {
    id: "ai-predictive-analytics-platform",
    title: "AI Predictive Analytics Platform",
    description: "Enterprise-grade predictive analytics platform powered by machine learning for business forecasting, risk assessment, and strategic decision-making.",
    category: "AI Services",
    subcategory: "Business Intelligence & Analytics",
    price: 2999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Advanced ML algorithms for forecasting",
      "Real-time data processing",
      "Custom dashboard builder",
      "Automated report generation",
      "API integrations with major platforms",
      "Multi-tenant architecture",
      "Advanced security protocols",
      "24/7 monitoring and support"
    ],
    benefits: [
      "Improve forecast accuracy by 85%",
      "Reduce operational costs by 30%",
      "Enable data-driven decision making",
      "Identify market opportunities faster",
      "Mitigate business risks proactively"
    ],
    targetAudience: ["Enterprise companies", "Financial institutions", "Manufacturing", "Retail chains", "Healthcare organizations"],
    marketPrice: "$2,999-8,999/month",
    website: "https://ziontechgroup.com/services/ai-predictive-analytics",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["AI Analytics", "Predictive Modeling", "Business Intelligence", "Machine Learning", "Data Science"],
    aiScore: 98,
    rating: 4.9,
    reviewCount: 234,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-01-15T10:00:00.000Z",
    technologyStack: ["Python", "TensorFlow", "PyTorch", "Apache Spark", "Kubernetes", "AWS/Azure"],
    useCases: ["Sales forecasting", "Inventory optimization", "Customer churn prediction", "Market trend analysis"],
    integrationOptions: ["Salesforce", "HubSpot", "SAP", "Oracle", "Custom APIs"],
    complianceStandards: ["GDPR", "SOC 2", "HIPAA", "ISO 27001"],
    deploymentTime: "4-6 weeks",
    supportLevel: "24/7 dedicated support",
    roiMetrics: ["85% forecast accuracy improvement", "30% cost reduction", "40% faster decision making"]
  },

  // AI-Powered Cybersecurity Suite
  {
    id: "ai-cybersecurity-defense-platform",
    title: "AI Cybersecurity Defense Platform",
    description: "Next-generation cybersecurity platform that uses artificial intelligence to detect, prevent, and respond to cyber threats in real-time.",
    category: "AI Services",
    subcategory: "Cybersecurity & Threat Detection",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered threat detection",
      "Behavioral analytics",
      "Automated incident response",
      "Zero-day vulnerability protection",
      "Compliance reporting",
      "Security orchestration",
      "Threat intelligence feeds",
      "24/7 security monitoring"
    ],
    benefits: [
      "Detect threats 10x faster than traditional solutions",
      "Reduce false positives by 90%",
      "Automate 80% of security responses",
      "Meet compliance requirements automatically",
      "Protect against emerging threats"
    ],
    targetAudience: ["Financial services", "Healthcare", "Government", "Manufacturing", "Technology companies"],
    marketPrice: "$1,999-5,999/month",
    website: "https://ziontechgroup.com/services/ai-cybersecurity",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["Cybersecurity", "AI Security", "Threat Detection", "Incident Response", "Compliance"],
    aiScore: 97,
    rating: 4.8,
    reviewCount: 189,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-01-15T10:00:00.000Z",
    technologyStack: ["Python", "TensorFlow", "Elasticsearch", "Kafka", "Docker", "Kubernetes"],
    useCases: ["Network security", "Endpoint protection", "Cloud security", "Compliance monitoring"],
    integrationOptions: ["SIEM systems", "EDR solutions", "Cloud platforms", "Security tools"],
    complianceStandards: ["SOC 2", "ISO 27001", "NIST", "GDPR", "HIPAA"],
    deploymentTime: "2-4 weeks",
    supportLevel: "24/7 security operations center",
    roiMetrics: ["10x faster threat detection", "90% reduction in false positives", "80% automation of responses"]
  },

  // Quantum Computing Solutions
  {
    id: "quantum-computing-optimization-platform",
    title: "Quantum Computing Optimization Platform",
    description: "Enterprise quantum computing platform for solving complex optimization problems in logistics, finance, and scientific research.",
    category: "Emerging Technology",
    subcategory: "Quantum Computing",
    price: 4999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum algorithm optimization",
      "Hybrid quantum-classical computing",
      "Real-time quantum simulation",
      "API access to quantum hardware",
      "Custom algorithm development",
      "Performance benchmarking",
      "Expert consultation",
      "Training and certification"
    ],
    benefits: [
      "Solve complex problems 1000x faster",
      "Optimize supply chains in real-time",
      "Accelerate drug discovery processes",
      "Revolutionize financial modeling",
      "Enable breakthrough scientific research"
    ],
    targetAudience: ["Pharmaceutical companies", "Financial institutions", "Logistics companies", "Research institutions", "Government agencies"],
    marketPrice: "$4,999-15,000/month",
    website: "https://ziontechgroup.com/services/quantum-computing",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["Quantum Computing", "Optimization", "Scientific Computing", "Research", "Innovation"],
    aiScore: 99,
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    location: "Global",
    availability: "Limited availability",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-01-15T10:00:00.000Z",
    technologyStack: ["Qiskit", "Cirq", "PennyLane", "Python", "Quantum hardware APIs"],
    useCases: ["Supply chain optimization", "Portfolio optimization", "Drug discovery", "Climate modeling"],
    integrationOptions: ["Custom APIs", "Cloud platforms", "Scientific software", "Enterprise systems"],
    complianceStandards: ["ISO 27001", "SOC 2", "Research ethics"],
    deploymentTime: "8-12 weeks",
    supportLevel: "Dedicated quantum experts",
    roiMetrics: ["1000x faster problem solving", "Millions in cost savings", "Breakthrough innovations"]
  },

  // Edge Computing & IoT Platform
  {
    id: "edge-computing-iot-platform",
    title: "Edge Computing & IoT Platform",
    description: "Distributed edge computing platform for IoT devices, enabling real-time data processing, analytics, and decision-making at the edge.",
    category: "IT Services",
    subcategory: "Edge Computing & IoT",
    price: 1499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Edge node management",
      "Real-time data processing",
      "IoT device connectivity",
      "Edge AI inference",
      "Data synchronization",
      "Security at the edge",
      "Scalable architecture",
      "Monitoring and analytics"
    ],
    benefits: [
      "Reduce latency by 90%",
      "Lower bandwidth costs by 70%",
      "Enable offline operation",
      "Improve data privacy",
      "Scale to millions of devices"
    ],
    targetAudience: ["Manufacturing", "Smart cities", "Healthcare", "Transportation", "Energy companies"],
    marketPrice: "$1,499-4,999/month",
    website: "https://ziontechgroup.com/services/edge-computing",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["Edge Computing", "IoT", "Real-time Processing", "Distributed Systems", "Smart Devices"],
    aiScore: 95,
    rating: 4.7,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-01-15T10:00:00.000Z",
    technologyStack: ["Kubernetes", "Docker", "Node.js", "Python", "MQTT", "WebRTC"],
    useCases: ["Smart manufacturing", "Predictive maintenance", "Real-time monitoring", "Autonomous systems"],
    integrationOptions: ["IoT protocols", "Cloud platforms", "Enterprise systems", "Legacy equipment"],
    complianceStandards: ["ISO 27001", "IEC 62443", "NIST", "GDPR"],
    deploymentTime: "6-8 weeks",
    supportLevel: "24/7 edge operations support",
    roiMetrics: ["90% latency reduction", "70% bandwidth cost savings", "Real-time insights"]
  },

  // Blockchain Enterprise Solutions
  {
    id: "blockchain-enterprise-platform",
    title: "Blockchain Enterprise Platform",
    description: "Enterprise-grade blockchain platform for supply chain transparency, digital identity, smart contracts, and decentralized applications.",
    category: "Emerging Technology",
    subcategory: "Blockchain & DLT",
    price: 2499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-chain support",
      "Smart contract development",
      "Digital identity management",
      "Supply chain tracking",
      "Tokenization services",
      "API gateway",
      "Enterprise security",
      "Compliance tools"
    ],
    benefits: [
      "Increase transparency by 100%",
      "Reduce fraud by 95%",
      "Automate complex processes",
      "Enable new business models",
      "Improve trust and compliance"
    ],
    targetAudience: ["Financial services", "Supply chain", "Healthcare", "Government", "Real estate"],
    marketPrice: "$2,499-7,999/month",
    website: "https://ziontechgroup.com/services/blockchain",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["Blockchain", "Smart Contracts", "Digital Identity", "Supply Chain", "DeFi"],
    aiScore: 94,
    rating: 4.6,
    reviewCount: 123,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-01-15T10:00:00.000Z",
    technologyStack: ["Ethereum", "Hyperledger", "Solana", "Rust", "Go", "Web3.js"],
    useCases: ["Supply chain transparency", "Digital identity", "Smart contracts", "Tokenization"],
    integrationOptions: ["ERP systems", "CRM platforms", "Cloud services", "Legacy systems"],
    complianceStandards: ["GDPR", "SOC 2", "ISO 27001", "Regulatory compliance"],
    deploymentTime: "10-14 weeks",
    supportLevel: "Blockchain experts and developers",
    roiMetrics: ["100% transparency", "95% fraud reduction", "Automated processes"]
  },

  // AI-Powered Healthcare Analytics
  {
    id: "ai-healthcare-analytics-platform",
    title: "AI Healthcare Analytics Platform",
    description: "Comprehensive healthcare analytics platform using AI to improve patient outcomes, optimize operations, and enable precision medicine.",
    category: "AI Services",
    subcategory: "Healthcare & Life Sciences",
    price: 3999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Patient outcome prediction",
      "Clinical decision support",
      "Population health analytics",
      "Drug discovery insights",
      "Medical image analysis",
      "Predictive modeling",
      "Compliance reporting",
      "HIPAA compliance"
    ],
    benefits: [
      "Improve patient outcomes by 40%",
      "Reduce healthcare costs by 25%",
      "Enable precision medicine",
      "Accelerate drug discovery",
      "Optimize resource allocation"
    ],
    targetAudience: ["Hospitals", "Pharmaceutical companies", "Research institutions", "Health insurance", "Government health agencies"],
    marketPrice: "$3,999-12,999/month",
    website: "https://ziontechgroup.com/services/ai-healthcare",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["Healthcare AI", "Medical Analytics", "Precision Medicine", "Clinical Decision Support", "Population Health"],
    aiScore: 96,
    rating: 4.8,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-01-15T10:00:00.000Z",
    technologyStack: ["Python", "TensorFlow", "PyTorch", "DICOM", "HL7", "FHIR"],
    useCases: ["Clinical decision support", "Population health", "Drug discovery", "Medical imaging"],
    integrationOptions: ["EHR systems", "PACS", "Lab systems", "Wearable devices"],
    complianceStandards: ["HIPAA", "FDA", "CE", "ISO 13485", "GDPR"],
    deploymentTime: "12-16 weeks",
    supportLevel: "Healthcare IT specialists",
    roiMetrics: ["40% patient outcome improvement", "25% cost reduction", "Precision medicine enablement"]
  },

  // Sustainable Technology Solutions
  {
    id: "sustainable-tech-platform",
    title: "Sustainable Technology Platform",
    description: "Comprehensive platform for measuring, optimizing, and reporting on environmental impact and sustainability metrics across organizations.",
    category: "IT Services",
    subcategory: "Sustainability & Green IT",
    price: 1799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Carbon footprint tracking",
      "Energy efficiency monitoring",
      "Sustainability reporting",
      "ESG compliance tools",
      "Green procurement",
      "Waste reduction analytics",
      "Renewable energy optimization",
      "Stakeholder engagement"
    ],
    benefits: [
      "Reduce carbon footprint by 30%",
      "Achieve ESG compliance",
      "Improve brand reputation",
      "Reduce operational costs",
      "Meet sustainability goals"
    ],
    targetAudience: ["Manufacturing", "Energy companies", "Retail", "Technology", "Government"],
    marketPrice: "$1,799-5,999/month",
    website: "https://ziontechgroup.com/services/sustainability",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["Sustainability", "ESG", "Carbon Tracking", "Green IT", "Environmental Impact"],
    aiScore: 93,
    rating: 4.7,
    reviewCount: 145,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-01-15T10:00:00.000Z",
    technologyStack: ["Python", "IoT sensors", "Cloud platforms", "Analytics tools", "Reporting systems"],
    useCases: ["Carbon tracking", "Energy optimization", "ESG reporting", "Green procurement"],
    integrationOptions: ["ERP systems", "IoT devices", "Energy meters", "Sustainability databases"],
    complianceStandards: ["ISO 14001", "GRI", "SASB", "TCFD", "ESG frameworks"],
    deploymentTime: "8-10 weeks",
    supportLevel: "Sustainability experts",
    roiMetrics: ["30% carbon footprint reduction", "ESG compliance", "Cost savings"]
  },

  // Digital Twin Solutions
  {
    id: "digital-twin-enterprise-platform",
    title: "Digital Twin Enterprise Platform",
    description: "Advanced digital twin platform for creating virtual replicas of physical assets, processes, and systems for simulation and optimization.",
    category: "AI Services",
    subcategory: "Digital Twin & Simulation",
    price: 3499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "3D asset modeling",
      "Real-time data integration",
      "Predictive maintenance",
      "Process optimization",
      "Virtual testing",
      "Performance analytics",
      "IoT connectivity",
      "AR/VR visualization"
    ],
    benefits: [
      "Reduce maintenance costs by 40%",
      "Improve operational efficiency by 35%",
      "Enable predictive maintenance",
      "Optimize processes in real-time",
      "Reduce downtime by 60%"
    ],
    targetAudience: ["Manufacturing", "Energy", "Transportation", "Smart cities", "Healthcare"],
    marketPrice: "$3,499-9,999/month",
    website: "https://ziontechgroup.com/services/digital-twin",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["Digital Twin", "IoT", "Simulation", "Predictive Maintenance", "3D Modeling"],
    aiScore: 95,
    rating: 4.8,
    reviewCount: 167,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-01-15T10:00:00.000Z",
    technologyStack: ["Unity", "Unreal Engine", "Python", "IoT platforms", "3D modeling tools"],
    useCases: ["Asset monitoring", "Process optimization", "Predictive maintenance", "Training simulation"],
    integrationOptions: ["IoT systems", "ERP platforms", "CAD software", "PLM systems"],
    complianceStandards: ["ISO 27001", "Industry-specific standards", "Data privacy"],
    deploymentTime: "12-16 weeks",
    supportLevel: "Digital twin specialists",
    roiMetrics: ["40% maintenance cost reduction", "35% efficiency improvement", "60% downtime reduction"]
  },

  // AI-Powered Sales & Marketing
  {
    id: "ai-sales-marketing-automation",
    title: "AI Sales & Marketing Automation Platform",
    description: "Intelligent platform that automates sales processes, lead generation, customer segmentation, and personalized marketing campaigns.",
    category: "AI Services",
    subcategory: "Sales & Marketing Automation",
    price: 899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered lead scoring",
      "Predictive analytics",
      "Personalized content generation",
      "Automated email campaigns",
      "Social media automation",
      "Customer journey mapping",
      "ROI tracking",
      "CRM integration"
    ],
    benefits: [
      "Increase conversion rates by 50%",
      "Reduce sales cycle by 30%",
      "Improve lead quality by 40%",
      "Automate repetitive tasks",
      "Personalize customer experiences"
    ],
    targetAudience: ["B2B companies", "E-commerce", "SaaS companies", "Marketing agencies", "Sales teams"],
    marketPrice: "$899-2,999/month",
    website: "https://ziontechgroup.com/services/ai-sales-marketing",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["Sales Automation", "Marketing AI", "Lead Generation", "Personalization", "CRM"],
    aiScore: 94,
    rating: 4.7,
    reviewCount: 234,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-01-15T10:00:00.000Z",
    technologyStack: ["Python", "TensorFlow", "NLP", "Marketing automation tools", "CRM APIs"],
    useCases: ["Lead generation", "Email marketing", "Social media", "Customer segmentation"],
    integrationOptions: ["Salesforce", "HubSpot", "Mailchimp", "Social platforms", "CRM systems"],
    complianceStandards: ["GDPR", "CAN-SPAM", "Data privacy", "Marketing compliance"],
    deploymentTime: "4-6 weeks",
    supportLevel: "Sales and marketing experts",
    roiMetrics: ["50% conversion rate increase", "30% sales cycle reduction", "40% lead quality improvement"]
  },

  // Cloud FinOps & Cost Optimization
  {
    id: "cloud-finops-optimization-platform",
    title: "Cloud FinOps & Cost Optimization Platform",
    description: "Comprehensive platform for managing cloud costs, optimizing resource allocation, and implementing financial operations best practices.",
    category: "IT Services",
    subcategory: "Cloud Management & FinOps",
    price: 1299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Cloud cost monitoring",
      "Resource optimization",
      "Budget management",
      "Cost allocation",
      "Reserved instance planning",
      "Automated scaling",
      "Cost forecasting",
      "Multi-cloud support"
    ],
    benefits: [
      "Reduce cloud costs by 30-50%",
      "Improve resource utilization",
      "Enable cost transparency",
      "Automate cost optimization",
      "Implement FinOps practices"
    ],
    targetAudience: ["Enterprises", "SaaS companies", "Technology companies", "Financial services", "Healthcare"],
    marketPrice: "$1,299-4,999/month",
    website: "https://ziontechgroup.com/services/cloud-finops",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["Cloud FinOps", "Cost Optimization", "Resource Management", "Budget Control", "Multi-cloud"],
    aiScore: 93,
    rating: 4.6,
    reviewCount: 189,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-01-15T10:00:00.000Z",
    technologyStack: ["AWS SDK", "Azure APIs", "GCP APIs", "Python", "Terraform", "Kubernetes"],
    useCases: ["Cost monitoring", "Resource optimization", "Budget management", "FinOps implementation"],
    integrationOptions: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "CI/CD tools"],
    complianceStandards: ["SOC 2", "ISO 27001", "Cloud security", "Financial compliance"],
    deploymentTime: "6-8 weeks",
    supportLevel: "Cloud and FinOps experts",
    roiMetrics: ["30-50% cost reduction", "Improved resource utilization", "Cost transparency"]
  }
];

export default INNOVATIVE_SERVICES_2025;