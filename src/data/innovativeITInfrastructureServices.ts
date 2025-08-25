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
    ],
    benefits: [
      "Reduce latency by 80%",
      "Lower bandwidth costs by 60%",
      "Improve real-time processing",
      "Enhanced security",
      "Scalable IoT deployments"
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
      "IoT architects",
      "System administrators",
      "Network engineers",
      "Technology directors"
    ],
    tags: ["Edge Computing", "IoT", "Infrastructure", "Real-time Processing", "Smart Cities"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$799 - $2,499/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
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
    ],
    targetAudience: [
      "CISOs",
      "Security architects",
      "IT security managers",
      "Compliance officers",
      "Network security engineers"
    ],
    tags: ["Zero-Trust", "Security", "Network Security", "Identity Management", "Compliance"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,499 - $4,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
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
    ],
    useCases: [
      "Enterprise organizations",
      "Multi-cloud environments",
      "Hybrid cloud deployments",
      "DevOps teams",
      "IT operations"
    ],
    targetAudience: [
      "Cloud architects",
      "DevOps engineers",
      "IT operations managers",
      "System administrators",
      "Technology directors"
    ],
    tags: ["Hybrid Cloud", "Multi-Cloud", "Cloud Management", "DevOps", "Resource Optimization"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$999 - $3,499/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
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
  }
];