export interface ComprehensiveService {
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
}

export const COMPREHENSIVE_SERVICES: ComprehensiveService[] = [
  {
    id: "ai-autonomous-business-intelligence",
    title: "AI Autonomous Business Intelligence Platform",
    description: "Next-generation autonomous business intelligence platform that continuously monitors, analyzes, and optimizes business operations using advanced AI algorithms and real-time data processing.",
    category: "AI & Business Intelligence",
    subcategory: "Autonomous Analytics",
    price: 3999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time business process monitoring",
      "Autonomous decision-making algorithms",
      "Predictive analytics and forecasting",
      "Automated report generation",
      "Multi-source data integration",
      "Natural language query interface",
      "Custom dashboard creation",
      "Mobile-first responsive design",
      "API-first architecture",
      "Advanced security protocols"
    ],
    benefits: [
      "Reduce decision-making time by 80%",
      "Increase operational efficiency by 45%",
      "Predict market trends with 92% accuracy",
      "Automate routine business processes",
      "Real-time insights for strategic planning"
    ],
    useCases: [
      "Financial services optimization",
      "Supply chain management",
      "Customer behavior analysis",
      "Risk assessment and management",
      "Performance monitoring"
    ],
    targetAudience: [
      "Enterprise businesses",
      "Financial institutions",
      "Manufacturing companies",
      "Retail chains",
      "Healthcare organizations"
    ],
    tags: ["AI", "Business Intelligence", "Autonomous Systems", "Analytics"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,999 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-secure-cloud-infrastructure",
    title: "Quantum-Secure Cloud Infrastructure Platform",
    description: "Advanced cloud infrastructure platform with quantum-resistant encryption and autonomous security management, designed for enterprise-grade applications requiring the highest level of data protection.",
    category: "Cloud & Infrastructure",
    subcategory: "Quantum Security",
    price: 5999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum-resistant encryption algorithms",
      "Autonomous security threat detection",
      "Multi-cloud orchestration",
      "Real-time performance optimization",
      "Advanced disaster recovery",
      "Compliance automation",
      "AI-powered resource management",
      "Global edge computing network",
      "Zero-trust security architecture",
      "Automated scaling and load balancing"
    ],
    benefits: [
      "Future-proof security against quantum attacks",
      "Reduce infrastructure costs by 35%",
      "Improve system performance by 60%",
      "Ensure 99.99% uptime guarantee",
      "Automate compliance and security"
    ],
    useCases: [
      "Financial services infrastructure",
      "Healthcare data centers",
      "Government cloud systems",
      "E-commerce platforms",
      "IoT device management"
    ],
    targetAudience: [
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Large enterprises",
      "Technology companies"
    ],
    tags: ["Quantum Security", "Cloud Infrastructure", "AI", "Cybersecurity"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$5,999 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-iot-edge-computing",
    title: "AI-Powered IoT Edge Computing Platform",
    description: "Intelligent edge computing platform that processes IoT data locally using AI algorithms, reducing latency and bandwidth while providing real-time insights and autonomous decision-making capabilities.",
    category: "IoT & Edge Computing",
    subcategory: "AI-Powered Analytics",
    price: 2499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Local AI processing on edge devices",
      "Real-time data analytics",
      "Autonomous device management",
      "Predictive maintenance algorithms",
      "Secure data transmission",
      "Scalable edge network",
      "Integration with cloud platforms",
      "Custom AI model deployment",
      "Energy-efficient processing",
      "Multi-protocol support"
    ],
    benefits: [
      "Reduce latency by 90%",
      "Lower bandwidth costs by 70%",
      "Improve device reliability by 85%",
      "Enable real-time decision making",
      "Scale IoT deployments efficiently"
    ],
    useCases: [
      "Smart city infrastructure",
      "Industrial IoT monitoring",
      "Connected vehicle systems",
      "Smart home automation",
      "Healthcare monitoring devices"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Smart city initiatives",
      "Automotive companies",
      "Healthcare providers",
      "Energy companies"
    ],
    tags: ["IoT", "Edge Computing", "AI", "Real-time Analytics"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,499 - $8,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "blockchain-supply-chain-transparency",
    title: "Blockchain-Based Supply Chain Transparency Platform",
    description: "Comprehensive supply chain transparency solution using blockchain technology to provide end-to-end visibility, traceability, and compliance management for complex supply networks.",
    category: "Blockchain & Supply Chain",
    subcategory: "Transparency & Traceability",
    price: 3499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "End-to-end supply chain tracking",
      "Smart contract automation",
      "Real-time compliance monitoring",
      "Supplier performance analytics",
      "Quality assurance tracking",
      "Sustainability metrics",
      "Risk assessment algorithms",
      "Multi-stakeholder collaboration",
      "Mobile app for field workers",
      "Integration with ERP systems"
    ],
    benefits: [
      "Improve supply chain visibility by 95%",
      "Reduce compliance costs by 40%",
      "Enhance supplier accountability",
      "Streamline audit processes",
      "Build consumer trust"
    ],
    useCases: [
      "Food safety tracking",
      "Pharmaceutical supply chains",
      "Luxury goods authentication",
      "Manufacturing supply chains",
      "Retail inventory management"
    ],
    targetAudience: [
      "Food and beverage companies",
      "Pharmaceutical manufacturers",
      "Luxury brands",
      "Manufacturing companies",
      "Retail chains"
    ],
    tags: ["Blockchain", "Supply Chain", "Transparency", "Compliance"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,499 - $10,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-cybersecurity-threat-intelligence",
    title: "AI-Powered Cybersecurity Threat Intelligence Platform",
    description: "Advanced cybersecurity platform that uses artificial intelligence to detect, analyze, and respond to cyber threats in real-time, providing comprehensive protection for enterprise networks and applications.",
    category: "Cybersecurity",
    subcategory: "AI-Powered Threat Detection",
    price: 4499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time threat detection",
      "AI-powered behavioral analysis",
      "Automated incident response",
      "Threat intelligence sharing",
      "Vulnerability assessment",
      "Compliance reporting",
      "Security awareness training",
      "Penetration testing automation",
      "Zero-day exploit detection",
      "Multi-layer security architecture"
    ],
    benefits: [
      "Detect threats 10x faster than traditional methods",
      "Reduce false positives by 85%",
      "Automate 90% of incident response",
      "Improve compliance scores",
      "Protect against emerging threats"
    ],
    useCases: [
      "Enterprise network security",
      "Cloud application protection",
      "IoT device security",
      "Financial transaction security",
      "Healthcare data protection"
    ],
    targetAudience: [
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Technology companies",
      "Large enterprises"
    ],
    tags: ["Cybersecurity", "AI", "Threat Intelligence", "Automation"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,499 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export const SERVICE_CATEGORIES = [
  "AI & Machine Learning",
  "Cybersecurity", 
  "Cloud & Infrastructure",
  "Data & Analytics",
  "Digital Transformation",
  "Web & Mobile Development",
  "IT Support & Consulting",
  "Blockchain & Web3",
  "Voice AI",
  "Quantum Security",
  "Content Creation",
  "Identity Management",
  "Sales Intelligence",
  "Incident Response",
  "Customer Analytics",
  "Supply Chain",
  "HR Technology",
  "Financial Security",
  "Storage Solutions",
  "Customer Experience",
  "Zero Trust Security",
  "NFT Platform",
  "DeFi Services",
  "Security Testing",
  "Process Automation"
];