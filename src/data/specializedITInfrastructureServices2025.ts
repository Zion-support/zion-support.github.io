export interface SpecializedITInfrastructureService2025 {
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

export const SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2025: SpecializedITInfrastructureService2025[] = [
  // Cloud-Native Infrastructure
  {
    id: "kubernetes-native-enterprise-platform",
    title: "Kubernetes-Native Enterprise Infrastructure Platform",
    description: "Enterprise-grade Kubernetes platform with advanced orchestration, security, and monitoring capabilities for modern cloud-native applications.",
    category: "Cloud & Infrastructure",
    subcategory: "Container Orchestration",
    price: 1500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-cluster management",
      "Advanced security policies",
      "Automated scaling",
      "Real-time monitoring",
      "Disaster recovery",
      "CI/CD integration",
      "Cost optimization",
      "Compliance automation"
    ],
    benefits: [
      "Reduce infrastructure costs by 40%",
      "Improve deployment speed by 300%",
      "Enhanced security & compliance",
      "Automated operations",
      "Scalable architecture"
    ],
    useCases: [
      "Enterprise applications",
      "Microservices architecture",
      "DevOps teams",
      "Cloud-native startups",
      "Digital transformation"
    ],
    targetAudience: [
      "DevOps engineers",
      "Infrastructure architects",
      "Platform engineers",
      "CTOs",
      "IT directors"
    ],
    tags: ["Kubernetes", "Cloud-Native", "DevOps", "Microservices", "Infrastructure"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,500 - $4,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "edge-computing-infrastructure",
    title: "Edge Computing Infrastructure & IoT Management Platform",
    description: "Distributed edge computing platform that brings computation closer to data sources, reducing latency and improving performance for IoT applications.",
    category: "Edge Computing",
    subcategory: "IoT Infrastructure",
    price: 2200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Edge node management",
      "Real-time data processing",
      "Low-latency computing",
      "IoT device integration",
      "Edge analytics",
      "Security at edge",
      "Scalable deployment",
      "Performance monitoring"
    ],
    benefits: [
      "Reduce latency by 90%",
      "Improve performance by 200%",
      "Lower bandwidth costs",
      "Enhanced reliability",
      "Real-time processing"
    ],
    useCases: [
      "IoT applications",
      "Real-time analytics",
      "Autonomous vehicles",
      "Smart cities",
      "Industrial IoT"
    ],
    targetAudience: [
      "IoT architects",
      "Infrastructure engineers",
      "Data engineers",
      "System architects",
      "Technology consultants"
    ],
    tags: ["Edge Computing", "IoT", "Real-time", "Low Latency", "Distributed Systems"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,200 - $6,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-ready-network-infrastructure",
    title: "Quantum-Ready Network Infrastructure & Security Platform",
    description: "Future-proof network infrastructure designed to support quantum computing and quantum-resistant cryptography for enhanced security.",
    category: "Quantum Computing",
    subcategory: "Network Infrastructure",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum-resistant encryption",
      "Advanced network security",
      "Quantum key distribution",
      "High-performance routing",
      "Zero-trust architecture",
      "Quantum-safe protocols",
      "Network monitoring",
      "Compliance frameworks"
    ],
    benefits: [
      "Future-proof security",
      "Enhanced network performance",
      "Quantum-ready architecture",
      "Advanced threat protection",
      "Regulatory compliance"
    ],
    useCases: [
      "Financial institutions",
      "Government agencies",
      "Healthcare organizations",
      "Research institutions",
      "Critical infrastructure"
    ],
    targetAudience: [
      "Network architects",
      "Security engineers",
      "Infrastructure managers",
      "CISOs",
      "Technology directors"
    ],
    tags: ["Quantum Computing", "Network Security", "Infrastructure", "Cryptography", "Future-Proof"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,500 - $10,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-powered-infrastructure-automation",
    title: "AI-Powered Infrastructure Automation & Self-Healing Platform",
    description: "Intelligent infrastructure platform that uses AI to automate operations, predict failures, and self-heal systems for maximum uptime.",
    category: "AI & Machine Learning",
    subcategory: "Infrastructure Automation",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered automation",
      "Predictive maintenance",
      "Self-healing systems",
      "Intelligent monitoring",
      "Automated scaling",
      "Anomaly detection",
      "Performance optimization",
      "Cost management"
    ],
    benefits: [
      "Reduce downtime by 99.9%",
      "Lower operational costs by 50%",
      "Automated problem resolution",
      "Predictive maintenance",
      "Enhanced performance"
    ],
    useCases: [
      "Data centers",
      "Cloud infrastructure",
      "Enterprise networks",
      "Critical systems",
      "DevOps operations"
    ],
    targetAudience: [
      "Infrastructure engineers",
      "DevOps engineers",
      "System administrators",
      "IT operations managers",
      "Technology directors"
    ],
    tags: ["AI", "Infrastructure", "Automation", "Self-Healing", "Predictive Maintenance"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,800 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "hybrid-cloud-orchestration-platform",
    title: "Hybrid Cloud Orchestration & Multi-Cloud Management Platform",
    description: "Comprehensive platform for managing and orchestrating workloads across multiple cloud providers and on-premises infrastructure.",
    category: "Cloud & Infrastructure",
    subcategory: "Multi-Cloud Management",
    price: 1200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-cloud orchestration",
      "Workload portability",
      "Cost optimization",
      "Security management",
      "Performance monitoring",
      "Compliance automation",
      "Resource scheduling",
      "Disaster recovery"
    ],
    benefits: [
      "Reduce cloud costs by 35%",
      "Improve resource utilization",
      "Enhanced flexibility",
      "Vendor independence",
      "Centralized management"
    ],
    useCases: [
      "Enterprise applications",
      "Multi-cloud strategies",
      "Hybrid deployments",
      "Cloud migration",
      "Disaster recovery"
    ],
    targetAudience: [
      "Cloud architects",
      "Infrastructure engineers",
      "DevOps engineers",
      "IT directors",
      "Technology consultants"
    ],
    tags: ["Multi-Cloud", "Hybrid Cloud", "Orchestration", "Cloud Management", "Infrastructure"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$1,200 - $3,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "zero-trust-network-architecture",
    title: "Zero-Trust Network Architecture & Security Platform",
    description: "Advanced zero-trust security platform that implements comprehensive security controls and continuous verification for modern network environments.",
    category: "Cybersecurity",
    subcategory: "Network Security",
    price: 2500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Zero-trust architecture",
      "Continuous verification",
      "Micro-segmentation",
      "Identity management",
      "Threat detection",
      "Compliance automation",
      "Security analytics",
      "Incident response"
    ],
    benefits: [
      "Reduce security incidents by 90%",
      "Enhanced compliance",
      "Improved security posture",
      "Simplified management",
      "Advanced threat protection"
    ],
    useCases: [
      "Enterprise networks",
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Critical infrastructure"
    ],
    targetAudience: [
      "Security architects",
      "Network engineers",
      "CISOs",
      "Compliance officers",
      "IT security managers"
    ],
    tags: ["Zero-Trust", "Network Security", "Cybersecurity", "Identity Management", "Compliance"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,500 - $7,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "serverless-enterprise-platform",
    title: "Serverless Enterprise Platform & Function-as-a-Service Infrastructure",
    description: "Enterprise-grade serverless platform that enables scalable, event-driven applications with automatic scaling and pay-per-use pricing.",
    category: "Cloud & Infrastructure",
    subcategory: "Serverless Computing",
    price: 899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Serverless functions",
      "Event-driven architecture",
      "Auto-scaling",
      "Pay-per-use pricing",
      "API management",
      "Monitoring & logging",
      "Security controls",
      "Integration services"
    ],
    benefits: [
      "Reduce infrastructure costs by 60%",
      "Automatic scaling",
      "Faster development",
      "Reduced operational overhead",
      "Pay-per-use model"
    ],
    useCases: [
      "Web applications",
      "API services",
      "Data processing",
      "IoT applications",
      "Microservices"
    ],
    targetAudience: [
      "Developers",
      "DevOps engineers",
      "Architects",
      "CTOs",
      "Technology leaders"
    ],
    tags: ["Serverless", "FaaS", "Cloud Computing", "Auto-scaling", "Event-Driven"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$899 - $2,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "software-defined-network-platform",
    title: "Software-Defined Network (SDN) Platform & Network Virtualization",
    description: "Advanced SDN platform that provides centralized network control, programmability, and automation for modern network infrastructure.",
    category: "Network Infrastructure",
    subcategory: "Software-Defined Networking",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Centralized network control",
      "Network programmability",
      "Virtual network management",
      "Traffic optimization",
      "Security policies",
      "Automated provisioning",
      "Performance monitoring",
      "API integration"
    ],
    benefits: [
      "Improve network efficiency by 40%",
      "Reduce configuration time by 80%",
      "Enhanced flexibility",
      "Centralized management",
      "Automated operations"
    ],
    useCases: [
      "Data centers",
      "Enterprise networks",
      "Cloud infrastructure",
      "Service providers",
      "Research networks"
    ],
    targetAudience: [
      "Network engineers",
      "Infrastructure architects",
      "Network administrators",
      "Technology directors",
      "System architects"
    ],
    tags: ["SDN", "Network Virtualization", "Network Automation", "Centralized Control", "Programmability"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,800 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "hyperconverged-infrastructure-platform",
    title: "Hyperconverged Infrastructure (HCI) Platform & Unified Management",
    description: "Integrated hyperconverged infrastructure platform that combines compute, storage, and networking in a single, scalable solution.",
    category: "Infrastructure",
    subcategory: "Hyperconverged Infrastructure",
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Unified infrastructure",
      "Scalable architecture",
      "Integrated management",
      "High availability",
      "Disaster recovery",
      "Performance optimization",
      "Resource management",
      "Monitoring & analytics"
    ],
    benefits: [
      "Reduce infrastructure complexity by 60%",
      "Improve resource utilization by 40%",
      "Simplified management",
      "Enhanced scalability",
      "Lower total cost of ownership"
    ],
    useCases: [
      "Data centers",
      "Enterprise applications",
      "Virtual desktop infrastructure",
      "Database systems",
      "Cloud platforms"
    ],
    targetAudience: [
      "Infrastructure architects",
      "System engineers",
      "Data center managers",
      "IT directors",
      "Technology consultants"
    ],
    tags: ["HCI", "Infrastructure", "Unified Management", "Scalability", "Resource Optimization"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,800 - $8,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "green-data-center-solutions",
    title: "Green Data Center Solutions & Sustainable Infrastructure Platform",
    description: "Environmentally conscious data center solutions that optimize energy efficiency, reduce carbon footprint, and implement sustainable practices.",
    category: "Sustainability",
    subcategory: "Green Infrastructure",
    price: 2200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Energy optimization",
      "Renewable energy integration",
      "Cooling efficiency",
      "Carbon footprint tracking",
      "Sustainable practices",
      "Performance monitoring",
      "Compliance reporting",
      "Cost optimization"
    ],
    benefits: [
      "Reduce energy costs by 35%",
      "Lower carbon footprint",
      "Enhanced sustainability",
      "Regulatory compliance",
      "Improved efficiency"
    ],
    useCases: [
      "Data centers",
      "Cloud providers",
      "Enterprise infrastructure",
      "Colocation facilities",
      "Sustainable organizations"
    ],
    targetAudience: [
      "Data center managers",
      "Sustainability officers",
      "Infrastructure managers",
      "Facility managers",
      "Environmental consultants"
    ],
    tags: ["Green Infrastructure", "Sustainability", "Energy Efficiency", "Data Centers", "Environmental Impact"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,200 - $6,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export const SPECIALIZED_IT_INFRASTRUCTURE_CATEGORIES_2025 = [
  "Cloud & Infrastructure",
  "Edge Computing",
  "Quantum Computing",
  "AI & Machine Learning",
  "Cybersecurity",
  "Network Infrastructure",
  "Infrastructure",
  "Sustainability"
];