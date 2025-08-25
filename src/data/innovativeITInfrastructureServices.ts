export interface InnovativeITInfrastructureService {
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

export const INNOVATIVE_IT_INFRASTRUCTURE_SERVICES: InnovativeITInfrastructureService[] = [
  // Edge Computing & IoT Infrastructure
  {
<<<<<<< HEAD
    id: "edge-computing-orchestration-platform",
    title: "Edge Computing Orchestration Platform - Distributed Computing Infrastructure",
    description: "Advanced edge computing platform that orchestrates distributed computing resources, optimizes data processing at the edge, and provides real-time analytics for IoT and edge applications.",
    category: "Edge Computing & IoT",
    subcategory: "Infrastructure Orchestration",
    price: 1899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Distributed edge node management",
      "Real-time data processing",
      "Edge-to-cloud synchronization",
      "Load balancing and failover",
      "Security and encryption",
      "Performance monitoring",
      "Auto-scaling capabilities",
      "Multi-cloud integration",
      "Edge AI deployment",
      "Compliance and governance"
=======
    id: "edge-computing-iot-platform",
    title: "Edge Computing & IoT Infrastructure Platform",
    description: "Advanced edge computing platform that processes data closer to IoT devices, reducing latency and improving real-time decision making for smart cities and industrial applications.",
    category: "IT Infrastructure",
    subcategory: "Edge Computing",
    price: 799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Distributed edge nodes",
      "Real-time data processing",
      "IoT device management",
      "Edge AI capabilities",
      "Low-latency networking",
      "Scalable infrastructure",
      "Security at the edge",
      "Integration with cloud services"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-43ee
    ],
    benefits: [
      "Reduce latency by 80%",
      "Lower bandwidth costs by 60%",
<<<<<<< HEAD
      "Improve reliability and uptime",
      "Real-time data processing",
      "Scalable edge infrastructure"
=======
      "Improve real-time processing",
      "Enhanced security",
      "Scalable IoT deployments"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-43ee
    ],
    useCases: [
      "Smart cities",
      "Industrial IoT",
      "Autonomous vehicles",
      "Healthcare monitoring",
      "Retail analytics"
    ],
    targetAudience: [
      "IT infrastructure managers",
<<<<<<< HEAD
      "DevOps engineers",
      "IoT architects",
      "System administrators",
      "Technology directors"
    ],
    tags: ["Edge Computing", "IoT", "Distributed Computing", "Real-time Analytics", "Infrastructure"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,899 - $5,999/month",
=======
      "IoT architects",
      "System administrators",
      "Network engineers",
      "Technology directors"
    ],
    tags: ["Edge Computing", "IoT", "Infrastructure", "Real-time Processing", "Smart Cities"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$799 - $2,499/month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-43ee
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
    websiteUrl: "https://ziontechgroup.com/edge-computing-orchestration-platform"
  },

  // Quantum-Safe Cybersecurity Infrastructure
  {
    id: "quantum-safe-cybersecurity-infrastructure",
    title: "Quantum-Safe Cybersecurity Infrastructure - Post-Quantum Security Platform",
    description: "Future-proof cybersecurity infrastructure that implements quantum-resistant encryption algorithms and prepares organizations for the quantum computing era.",
    category: "Cybersecurity",
    subcategory: "Quantum-Safe Security",
    price: 3499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum-resistant encryption algorithms",
      "Post-quantum cryptography",
      "Hybrid encryption systems",
      "Quantum key distribution",
      "Advanced threat detection",
      "Compliance frameworks",
      "Security audit tools",
      "Zero-trust architecture",
      "Multi-factor authentication",
      "Real-time security monitoring"
    ],
    benefits: [
      "Future-proof security infrastructure",
      "Protect against quantum attacks",
      "Meet compliance requirements",
      "Enhanced data protection",
      "Long-term security investment"
    ],
    useCases: [
      "Financial institutions",
      "Government agencies",
      "Healthcare organizations",
      "Defense contractors",
      "Critical infrastructure"
=======
    websiteUrl: "https://ziontechgroup.com/edge-computing-iot"
  },

  // Zero-Trust Security Architecture
  {
    id: "zero-trust-security-architecture",
    title: "Zero-Trust Security Architecture Platform",
    description: "Comprehensive zero-trust security platform that implements continuous verification and least-privilege access across all network resources and applications.",
    category: "IT Infrastructure",
    subcategory: "Security Architecture",
    price: 1499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Identity verification",
      "Device trust scoring",
      "Network segmentation",
      "Application access control",
      "Continuous monitoring",
      "Threat detection",
      "Compliance reporting",
      "Integration with existing security tools"
    ],
    benefits: [
      "Reduce security breaches by 90%",
      "Improve compliance posture",
      "Enhanced visibility and control",
      "Simplified security management",
      "Adaptive security policies"
    ],
    useCases: [
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Educational institutions",
      "Manufacturing companies"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-43ee
    ],
    targetAudience: [
      "CISOs",
      "Security architects",
<<<<<<< HEAD
      "Compliance officers",
      "Risk managers",
      "IT security directors"
    ],
    tags: ["Cybersecurity", "Quantum-Safe", "Post-Quantum Cryptography", "Zero-Trust", "Compliance"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,499 - $9,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/quantum-safe-cybersecurity-infrastructure"
  },

  // Green IT Infrastructure Platform
  {
    id: "green-it-infrastructure-platform",
    title: "Green IT Infrastructure Platform - Sustainable Computing Solutions",
    description: "Eco-friendly IT infrastructure platform that optimizes energy consumption, reduces carbon footprint, and provides sustainable computing solutions for environmentally conscious organizations.",
    category: "Green IT",
    subcategory: "Sustainable Infrastructure",
    price: 1299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Energy consumption optimization",
      "Carbon footprint tracking",
      "Renewable energy integration",
      "Smart cooling systems",
      "Power management automation",
      "Sustainability reporting",
      "Green procurement tools",
      "Waste reduction analytics",
      "Environmental compliance",
      "Green certification support"
    ],
    benefits: [
      "Reduce energy costs by 40%",
      "Lower carbon footprint by 60%",
      "Meet sustainability goals",
      "Improve brand reputation",
      "Compliance with green regulations"
    ],
    useCases: [
      "Data centers",
      "Cloud providers",
      "Enterprise IT",
      "Educational institutions",
      "Government agencies"
    ],
    targetAudience: [
      "IT sustainability managers",
      "Facility managers",
      "Environmental officers",
      "CSR managers",
      "IT directors"
    ],
    tags: ["Green IT", "Sustainability", "Energy Efficiency", "Carbon Reduction", "Environmental Compliance"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$1,299 - $3,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/green-it-infrastructure-platform"
  },

  // Autonomous IT Operations Platform
  {
    id: "autonomous-it-operations-platform",
    title: "Autonomous IT Operations Platform - Self-Healing Infrastructure",
    description: "Intelligent IT operations platform that uses AI and machine learning to automatically detect, diagnose, and resolve infrastructure issues without human intervention.",
    category: "IT Operations",
    subcategory: "Autonomous Operations",
    price: 2799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered issue detection",
      "Automated problem resolution",
      "Predictive maintenance",
      "Self-healing infrastructure",
      "Intelligent alerting",
      "Root cause analysis",
      "Performance optimization",
      "Capacity planning",
      "Change management automation",
      "Comprehensive monitoring"
    ],
    benefits: [
      "Reduce downtime by 90%",
      "Lower operational costs by 50%",
      "Improve system reliability",
      "Automated problem resolution",
      "Proactive maintenance"
    ],
    useCases: [
      "Enterprise IT operations",
      "Cloud service providers",
      "Managed service providers",
      "Data centers",
      "Critical infrastructure"
    ],
    targetAudience: [
      "IT operations managers",
      "DevOps engineers",
      "System administrators",
      "Site reliability engineers",
      "IT directors"
    ],
    tags: ["IT Operations", "Autonomous", "AI", "Self-Healing", "Predictive Maintenance"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,799 - $7,999/month",
=======
      "IT security managers",
      "Compliance officers",
      "Network security engineers"
    ],
    tags: ["Zero-Trust", "Security", "Network Security", "Identity Management", "Compliance"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,499 - $4,999/month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-43ee
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
    websiteUrl: "https://ziontechgroup.com/autonomous-it-operations-platform"
  },

  // Hybrid Multi-Cloud Management Platform
  {
    id: "hybrid-multi-cloud-management-platform",
    title: "Hybrid Multi-Cloud Management Platform - Unified Cloud Orchestration",
    description: "Comprehensive cloud management platform that provides unified control, monitoring, and optimization across multiple cloud providers and hybrid environments.",
    category: "Cloud Management",
    subcategory: "Multi-Cloud Orchestration",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-cloud resource management",
      "Unified monitoring dashboard",
      "Cost optimization tools",
      "Security and compliance",
      "Workload migration",
      "Performance analytics",
      "Automated scaling",
      "Disaster recovery",
      "API management",
      "Governance and policies"
    ],
    benefits: [
      "Reduce cloud costs by 30%",
      "Simplify multi-cloud management",
      "Improve operational efficiency",
      "Enhanced security and compliance",
      "Flexible cloud strategy"
=======
    websiteUrl: "https://ziontechgroup.com/zero-trust-security"
  },

  // Hybrid Cloud Management Platform
  {
    id: "hybrid-cloud-management-platform",
    title: "Hybrid Cloud Management Platform",
    description: "Unified platform for managing multi-cloud and hybrid cloud environments with automated resource optimization, cost management, and seamless workload migration.",
    category: "IT Infrastructure",
    subcategory: "Cloud Management",
    price: 999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-cloud orchestration",
      "Automated resource scaling",
      "Cost optimization",
      "Workload migration tools",
      "Unified monitoring",
      "Security compliance",
      "Performance analytics",
      "API management"
    ],
    benefits: [
      "Reduce cloud costs by 30%",
      "Improve resource utilization by 40%",
      "Simplified multi-cloud management",
      "Enhanced security and compliance",
      "Faster deployment times"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-43ee
    ],
    useCases: [
      "Enterprise organizations",
      "Multi-cloud environments",
      "Hybrid cloud deployments",
<<<<<<< HEAD
      "Cloud migration projects",
      "DevOps teams"
=======
      "DevOps teams",
      "IT operations"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-43ee
    ],
    targetAudience: [
      "Cloud architects",
      "DevOps engineers",
<<<<<<< HEAD
      "IT infrastructure managers",
      "Cloud operations teams",
      "Technology directors"
    ],
    tags: ["Cloud Management", "Multi-Cloud", "Hybrid Cloud", "Cost Optimization", "DevOps"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$1,999 - $5,999/month",
=======
      "IT operations managers",
      "System administrators",
      "Technology directors"
    ],
    tags: ["Hybrid Cloud", "Multi-Cloud", "Cloud Management", "DevOps", "Resource Optimization"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$999 - $3,499/month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-43ee
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
    websiteUrl: "https://ziontechgroup.com/hybrid-multi-cloud-management-platform"
=======
    websiteUrl: "https://ziontechgroup.com/hybrid-cloud-management"
  },

  // Software-Defined Networking (SDN)
  {
    id: "software-defined-networking-sdn",
    title: "Software-Defined Networking (SDN) Platform",
    description: "Advanced SDN platform that provides centralized network control, automated provisioning, and dynamic network configuration for modern data centers and enterprise networks.",
    category: "IT Infrastructure",
    subcategory: "Network Management",
    price: 1299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Centralized network control",
      "Automated provisioning",
      "Dynamic traffic routing",
      "Network virtualization",
      "Quality of service management",
      "Security policy enforcement",
      "Performance monitoring",
      "API integration"
    ],
    benefits: [
      "Reduce network provisioning time by 80%",
      "Improve network efficiency by 50%",
      "Enhanced security and compliance",
      "Simplified network management",
      "Scalable network infrastructure"
    ],
    useCases: [
      "Data centers",
      "Enterprise networks",
      "Cloud service providers",
      "Educational institutions",
      "Healthcare networks"
    ],
    targetAudience: [
      "Network architects",
      "Network engineers",
      "System administrators",
      "IT infrastructure managers",
      "Technology directors"
    ],
    tags: ["SDN", "Network Management", "Network Virtualization", "Automation", "Data Center"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,299 - $4,499/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/software-defined-networking"
  },

  // Container Orchestration & Kubernetes
  {
    id: "container-orchestration-kubernetes",
    title: "Container Orchestration & Kubernetes Platform",
    description: "Enterprise-grade Kubernetes platform with advanced container orchestration, automated scaling, and comprehensive monitoring for modern application deployment.",
    category: "IT Infrastructure",
    subcategory: "Container Management",
    price: 699,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Kubernetes cluster management",
      "Automated scaling",
      "Load balancing",
      "Service mesh integration",
      "Monitoring and logging",
      "Security policies",
      "CI/CD integration",
      "Multi-cluster management"
    ],
    benefits: [
      "Reduce deployment time by 70%",
      "Improve resource utilization by 45%",
      "Enhanced application scalability",
      "Simplified container management",
      "Faster time to market"
    ],
    useCases: [
      "Microservices applications",
      "Cloud-native applications",
      "DevOps environments",
      "Enterprise applications",
      "Startup platforms"
    ],
    targetAudience: [
      "DevOps engineers",
      "Platform engineers",
      "System administrators",
      "Application developers",
      "IT operations managers"
    ],
    tags: ["Kubernetes", "Container Orchestration", "DevOps", "Microservices", "Cloud-Native"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$699 - $2,299/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/container-orchestration"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-43ee
  }
];