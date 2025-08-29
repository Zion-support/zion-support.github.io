export interface PricingTier {
  name: string;
  description: string;
  price: number;
  currency: string;
  billingCycle: string;
  features: string[];
  limitations: string[];
  popular?: boolean;
  color: string;
  cta: string;
  savings?: string;
}

export interface ServicePricing {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  pricingTiers: PricingTier[];
  marketComparison: {
    competitors: string[];
    averageMarketPrice: string;
    ourAdvantage: string;
  };
  features: string[];
  benefits: string[];
  targetAudience: string[];
  useCases: string[];
  technologyStack: string[];
  complianceStandards: string[];
  deploymentTime: string;
  supportLevel: string;
  roiMetrics: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
}

export const COMPREHENSIVE_PRICING_GUIDE_2025: ServicePricing[] = [
  // AI Predictive Analytics Platform
  {
    id: "ai-predictive-analytics-platform",
    title: "AI Predictive Analytics Platform",
    description: "Enterprise-grade predictive analytics platform powered by machine learning for business forecasting, risk assessment, and strategic decision-making.",
    category: "AI Services",
    subcategory: "Business Intelligence & Analytics",
    pricingTiers: [
      {
        name: "Starter",
        description: "Perfect for small businesses starting with AI analytics",
        price: 999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic ML algorithms",
          "Up to 10 data sources",
          "Standard dashboards",
          "Email support",
          "Basic reporting",
          "Up to 5 users"
        ],
        limitations: [
          "Limited ML models",
          "Basic integrations only",
          "Standard support hours"
        ],
        color: "from-blue-500 to-cyan-500",
        cta: "Start Free Trial"
      },
      {
        name: "Professional",
        description: "Ideal for growing businesses with advanced analytics needs",
        price: 2499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced ML algorithms",
          "Unlimited data sources",
          "Custom dashboards",
          "Priority support",
          "Advanced reporting",
          "Up to 25 users",
          "API access",
          "Custom integrations"
        ],
        limitations: [
          "No dedicated account manager",
          "Standard SLA"
        ],
        popular: true,
        color: "from-purple-500 to-pink-500",
        cta: "Get Started",
        savings: "Save 20% with annual billing"
      },
      {
        name: "Enterprise",
        description: "For large organizations with complex analytics requirements",
        price: 5999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Custom ML models",
          "Real-time processing",
          "Advanced security",
          "24/7 dedicated support",
          "Custom development",
          "Unlimited users",
          "White-label options",
          "SLA guarantees"
        ],
        limitations: [
          "Custom pricing for very large deployments"
        ],
        color: "from-indigo-500 to-purple-500",
        cta: "Contact Sales"
      }
    ],
    marketComparison: {
      competitors: ["Tableau", "Power BI", "Looker", "Qlik", "Sisense"],
      averageMarketPrice: "$3,500-8,000/month",
      ourAdvantage: "AI-first approach with 85% better forecast accuracy and 30% cost reduction"
    },
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
    useCases: ["Sales forecasting", "Inventory optimization", "Customer churn prediction", "Market trend analysis"],
    technologyStack: ["Python", "TensorFlow", "PyTorch", "Apache Spark", "Kubernetes", "AWS/Azure"],
    complianceStandards: ["GDPR", "SOC 2", "HIPAA", "ISO 27001"],
    deploymentTime: "4-6 weeks",
    supportLevel: "24/7 dedicated support",
    roiMetrics: ["85% forecast accuracy improvement", "30% cost reduction", "40% faster decision making"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/services/ai-predictive-analytics",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // AI Cybersecurity Defense Platform
  {
    id: "ai-cybersecurity-defense-platform",
    title: "AI Cybersecurity Defense Platform",
    description: "Next-generation cybersecurity platform that uses artificial intelligence to detect, prevent, and respond to cyber threats in real-time.",
    category: "AI Services",
    subcategory: "Cybersecurity & Threat Detection",
    pricingTiers: [
      {
        name: "Essential",
        description: "Basic AI-powered security for small to medium businesses",
        price: 799,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "AI threat detection",
          "Basic behavioral analytics",
          "Email security",
          "Web filtering",
          "Basic reporting",
          "Up to 100 endpoints"
        ],
        limitations: [
          "Limited threat intelligence",
          "Basic support",
          "Standard response times"
        ],
        color: "from-green-500 to-emerald-500",
        cta: "Start Protection"
      },
      {
        name: "Advanced",
        description: "Comprehensive security for growing organizations",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced AI threat detection",
          "Full behavioral analytics",
          "Automated incident response",
          "Threat intelligence feeds",
          "Compliance reporting",
          "Up to 1000 endpoints",
          "Priority support"
        ],
        limitations: [
          "No dedicated security team",
          "Standard SLA"
        ],
        popular: true,
        color: "from-orange-500 to-red-500",
        cta: "Get Advanced Security",
        savings: "Save 25% with annual billing"
      },
      {
        name: "Enterprise",
        description: "Full-scale security operations for large enterprises",
        price: 4999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full AI security suite",
          "24/7 security monitoring",
          "Dedicated security team",
          "Custom integrations",
          "Advanced compliance",
          "Unlimited endpoints",
          "SLA guarantees"
        ],
        limitations: [
          "Custom pricing for very large deployments"
        ],
        color: "from-red-500 to-pink-500",
        cta: "Contact Security Team"
      }
    ],
    marketComparison: {
      competitors: ["CrowdStrike", "SentinelOne", "Cylance", "Darktrace", "Cisco"],
      averageMarketPrice: "$2,500-6,000/month",
      ourAdvantage: "10x faster threat detection, 90% reduction in false positives, and 80% automation of responses"
    },
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
    useCases: ["Network security", "Endpoint protection", "Cloud security", "Compliance monitoring"],
    technologyStack: ["Python", "TensorFlow", "Elasticsearch", "Kafka", "Docker", "Kubernetes"],
    complianceStandards: ["SOC 2", "ISO 27001", "NIST", "GDPR", "HIPAA"],
    deploymentTime: "2-4 weeks",
    supportLevel: "24/7 security operations center",
    roiMetrics: ["10x faster threat detection", "90% reduction in false positives", "80% automation of responses"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/services/ai-cybersecurity",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // Quantum Computing Optimization Platform
  {
    id: "quantum-computing-optimization-platform",
    title: "Quantum Computing Optimization Platform",
    description: "Enterprise quantum computing platform for solving complex optimization problems in logistics, finance, and scientific research.",
    category: "Emerging Technology",
    subcategory: "Quantum Computing",
    pricingTiers: [
      {
        name: "Research",
        description: "For academic and research institutions",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic quantum algorithms",
          "Simulation environment",
          "Research support",
          "Basic documentation",
          "Community forum access",
          "Up to 10 researchers"
        ],
        limitations: [
          "Limited quantum hardware access",
          "Basic support",
          "Standard processing times"
        ],
        color: "from-indigo-500 to-purple-500",
        cta: "Start Research"
      },
      {
        name: "Professional",
        description: "For businesses exploring quantum solutions",
        price: 4999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced quantum algorithms",
          "Quantum hardware access",
          "Custom algorithm development",
          "Performance benchmarking",
          "Expert consultation",
          "Up to 50 users",
          "Priority support"
        ],
        limitations: [
          "Limited custom development",
          "Standard SLA"
        ],
        popular: true,
        color: "from-purple-500 to-pink-500",
        cta: "Explore Quantum",
        savings: "Save 30% with annual billing"
      },
      {
        name: "Enterprise",
        description: "Full-scale quantum computing for large enterprises",
        price: 15000,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Custom quantum solutions",
          "Dedicated quantum experts",
          "Full hardware access",
          "Custom development",
          "Training and certification",
          "Unlimited users",
          "SLA guarantees"
        ],
        limitations: [
          "Custom pricing for very large deployments"
        ],
        color: "from-pink-500 to-red-500",
        cta: "Contact Quantum Team"
      }
    ],
    marketComparison: {
      competitors: ["IBM Quantum", "Google Quantum AI", "Microsoft Azure Quantum", "Amazon Braket", "D-Wave"],
      averageMarketPrice: "$5,000-20,000/month",
      ourAdvantage: "Hybrid quantum-classical approach with 1000x faster problem solving and dedicated expert support"
    },
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
    useCases: ["Supply chain optimization", "Portfolio optimization", "Drug discovery", "Climate modeling"],
    technologyStack: ["Qiskit", "Cirq", "PennyLane", "Python", "Quantum hardware APIs"],
    complianceStandards: ["ISO 27001", "SOC 2", "Research ethics"],
    deploymentTime: "8-12 weeks",
    supportLevel: "Dedicated quantum experts",
    roiMetrics: ["1000x faster problem solving", "Millions in cost savings", "Breakthrough innovations"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/services/quantum-computing",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // Edge Computing & IoT Platform
  {
    id: "edge-computing-iot-platform",
    title: "Edge Computing & IoT Platform",
    description: "Distributed edge computing platform for IoT devices, enabling real-time data processing, analytics, and decision-making at the edge.",
    category: "IT Services",
    subcategory: "Edge Computing & IoT",
    pricingTiers: [
      {
        name: "Starter",
        description: "Basic edge computing for small IoT deployments",
        price: 499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic edge nodes",
          "IoT device connectivity",
          "Simple data processing",
          "Basic monitoring",
          "Up to 100 devices",
          "Email support"
        ],
        limitations: [
          "Limited processing power",
          "Basic analytics",
          "Standard support"
        ],
        color: "from-blue-500 to-cyan-500",
        cta: "Start Edge Computing"
      },
      {
        name: "Professional",
        description: "Advanced edge computing for growing IoT networks",
        price: 1499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced edge nodes",
          "Real-time processing",
          "Edge AI inference",
          "Advanced analytics",
          "Up to 1000 devices",
          "Priority support",
          "Custom integrations"
        ],
        limitations: [
          "No dedicated edge team",
          "Standard SLA"
        ],
        popular: true,
        color: "from-green-500 to-emerald-500",
        cta: "Scale Edge Computing",
        savings: "Save 20% with annual billing"
      },
      {
        name: "Enterprise",
        description: "Full-scale edge computing for large IoT deployments",
        price: 4999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Custom edge solutions",
          "Unlimited devices",
          "Custom AI models",
          "Advanced security",
          "24/7 edge operations",
          "Custom development",
          "SLA guarantees"
        ],
        limitations: [
          "Custom pricing for very large deployments"
        ],
        color: "from-emerald-500 to-teal-500",
        cta: "Contact Edge Team"
      }
    ],
    marketComparison: {
      competitors: ["AWS IoT Greengrass", "Azure IoT Edge", "Google Cloud IoT", "IBM Edge", "Cisco Edge"],
      averageMarketPrice: "$1,500-5,000/month",
      ourAdvantage: "90% latency reduction, 70% bandwidth cost savings, and real-time edge AI processing"
    },
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
    useCases: ["Smart manufacturing", "Predictive maintenance", "Real-time monitoring", "Autonomous systems"],
    technologyStack: ["Kubernetes", "Docker", "Node.js", "Python", "MQTT", "WebRTC"],
    complianceStandards: ["ISO 27001", "IEC 62443", "NIST", "GDPR"],
    deploymentTime: "6-8 weeks",
    supportLevel: "24/7 edge operations support",
    roiMetrics: ["90% latency reduction", "70% bandwidth cost savings", "Real-time insights"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/services/edge-computing",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // Blockchain Enterprise Platform
  {
    id: "blockchain-enterprise-platform",
    title: "Blockchain Enterprise Platform",
    description: "Enterprise-grade blockchain platform for supply chain transparency, digital identity, smart contracts, and decentralized applications.",
    category: "Emerging Technology",
    subcategory: "Blockchain & DLT",
    pricingTiers: [
      {
        name: "Starter",
        description: "Basic blockchain for small businesses",
        price: 999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic blockchain setup",
          "Smart contract templates",
          "Basic API access",
          "Standard security",
          "Up to 1000 transactions/month",
          "Email support"
        ],
        limitations: [
          "Limited custom development",
          "Basic integrations",
          "Standard support"
        ],
        color: "from-purple-500 to-pink-500",
        cta: "Start Blockchain"
      },
      {
        name: "Professional",
        description: "Advanced blockchain for growing enterprises",
        price: 2499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced blockchain features",
          "Custom smart contracts",
          "Multi-chain support",
          "Advanced security",
          "Unlimited transactions",
          "Priority support",
          "Custom integrations"
        ],
        limitations: [
          "No dedicated blockchain team",
          "Standard SLA"
        ],
        popular: true,
        color: "from-indigo-500 to-purple-500",
        cta: "Scale Blockchain",
        savings: "Save 25% with annual billing"
      },
      {
        name: "Enterprise",
        description: "Full-scale blockchain for large enterprises",
        price: 7999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Custom blockchain solutions",
          "Full development support",
          "Advanced compliance",
          "White-label options",
          "Dedicated team",
          "Custom development",
          "SLA guarantees"
        ],
        limitations: [
          "Custom pricing for very large deployments"
        ],
        color: "from-pink-500 to-red-500",
        cta: "Contact Blockchain Team"
      }
    ],
    marketComparison: {
      competitors: ["IBM Blockchain", "Microsoft Azure Blockchain", "Amazon Managed Blockchain", "Oracle Blockchain", "SAP Blockchain"],
      averageMarketPrice: "$2,500-8,000/month",
      ourAdvantage: "100% transparency, 95% fraud reduction, and automated complex processes"
    },
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
    useCases: ["Supply chain transparency", "Digital identity", "Smart contracts", "Tokenization"],
    technologyStack: ["Ethereum", "Hyperledger", "Solana", "Rust", "Go", "Web3.js"],
    complianceStandards: ["GDPR", "SOC 2", "ISO 27001", "Regulatory compliance"],
    deploymentTime: "10-14 weeks",
    supportLevel: "Blockchain experts and developers",
    roiMetrics: ["100% transparency", "95% fraud reduction", "Automated processes"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/services/blockchain",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];

export default COMPREHENSIVE_PRICING_GUIDE_2025;