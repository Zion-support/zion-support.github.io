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
  // Edge Computing Infrastructure
  {
    id: "edge-computing-infrastructure",
    title: "Edge Computing Infrastructure Platform",
    description: "Distributed edge computing platform that brings computation and data storage closer to data sources, reducing latency and improving performance for IoT devices and real-time applications.",
    category: "IT Infrastructure",
    subcategory: "Edge Computing",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Distributed edge nodes",
      "Real-time data processing",
      "Low-latency connectivity",
      "IoT device management",
      "Edge analytics engine",
      "Automatic failover",
      "Scalable architecture",
      "Security at the edge"
    ],
    benefits: [
      "Reduce latency by 80%",
      "Improve application performance",
      "Reduce bandwidth costs",
      "Enhanced data privacy",
      "Scalable edge deployment"
    ],
    useCases: [
      "IoT applications",
      "Real-time analytics",
      "Autonomous vehicles",
      "Smart cities",
      "Industrial automation"
    ],
    targetAudience: [
      "IoT developers",
      "System architects",
      "DevOps engineers",
      "Infrastructure managers",
      "Technology directors"
    ],
    tags: ["Edge Computing", "IoT", "Real-time Processing", "Low Latency", "Distributed Systems"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,500 - $9,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/edge-computing"
  },

  // Zero Trust Security Architecture
  {
    id: "zero-trust-security-architecture",
    title: "Zero Trust Security Architecture Implementation",
    description: "Comprehensive zero trust security framework that implements continuous verification, least privilege access, and micro-segmentation to protect modern IT environments from advanced threats.",
    category: "IT Infrastructure",
    subcategory: "Security",
    price: 4200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Identity verification",
      "Continuous monitoring",
      "Micro-segmentation",
      "Least privilege access",
      "Threat detection",
      "Compliance reporting",
      "API security",
      "Multi-factor authentication"
    ],
    benefits: [
      "Reduce security breaches by 90%",
      "Improve compliance posture",
      "Enhanced threat visibility",
      "Simplified security management",
      "Adaptive security policies"
    ],
    useCases: [
      "Enterprise networks",
      "Cloud environments",
      "Remote workforces",
      "Critical infrastructure",
      "Financial institutions"
    ],
    targetAudience: [
      "CISOs",
      "Security architects",
      "Network administrators",
      "Compliance officers",
      "IT security managers"
    ],
    tags: ["Zero Trust", "Security", "Network Security", "Compliance", "Threat Detection"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,200 - $12,000/month",
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
    description: "Unified platform for managing multi-cloud and hybrid cloud environments, providing consistent governance, cost optimization, and operational efficiency across public and private clouds.",
    category: "IT Infrastructure",
    subcategory: "Cloud Management",
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-cloud orchestration",
      "Cost optimization",
      "Resource monitoring",
      "Automated scaling",
      "Security compliance",
      "Backup and disaster recovery",
      "Performance analytics",
      "API management"
    ],
    benefits: [
      "Reduce cloud costs by 30%",
      "Improve operational efficiency",
      "Enhanced security posture",
      "Simplified cloud management",
      "Better resource utilization"
    ],
    useCases: [
      "Enterprise IT departments",
      "Cloud migration projects",
      "Multi-cloud strategies",
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
    tags: ["Hybrid Cloud", "Multi-cloud", "Cloud Management", "Cost Optimization", "DevOps"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$2,800 - $7,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/hybrid-cloud"
  },

  // Software-Defined Networking (SDN)
  {
    id: "software-defined-networking",
    title: "Software-Defined Networking (SDN) Solution",
    description: "Advanced SDN platform that centralizes network control, automates network configuration, and provides programmatic network management for improved agility and cost efficiency.",
    category: "IT Infrastructure",
    subcategory: "Networking",
    price: 2200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Centralized network control",
      "Automated provisioning",
      "Traffic engineering",
      "Network virtualization",
      "Policy-based management",
      "Real-time monitoring",
      "API integration",
      "Scalable architecture"
    ],
    benefits: [
      "Reduce network provisioning time by 70%",
      "Improve network utilization by 40%",
      "Lower operational costs",
      "Enhanced network security",
      "Faster service deployment"
    ],
    useCases: [
      "Data centers",
      "Enterprise networks",
      "Cloud providers",
      "Telecommunications",
      "Educational institutions"
    ],
    targetAudience: [
      "Network engineers",
      "System administrators",
      "IT architects",
      "Network administrators",
      "Technology managers"
    ],
    tags: ["SDN", "Networking", "Network Automation", "Virtualization", "Network Management"],
    estimatedDelivery: "5-7 weeks",
    supportLevel: "premium",
    marketPrice: "$2,200 - $6,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/sdn-solution"
  },

  // Container Orchestration Platform
  {
    id: "container-orchestration-platform",
    title: "Enterprise Container Orchestration Platform",
    description: "Production-ready container orchestration platform with advanced features for managing, scaling, and securing containerized applications across distributed environments.",
    category: "IT Infrastructure",
    subcategory: "Containerization",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Container orchestration",
      "Auto-scaling",
      "Load balancing",
      "Service discovery",
      "Health monitoring",
      "Security policies",
      "Multi-cluster management",
      "CI/CD integration"
    ],
    benefits: [
      "Improve deployment speed by 60%",
      "Reduce infrastructure costs by 25%",
      "Enhanced application reliability",
      "Simplified operations",
      "Better resource utilization"
    ],
    useCases: [
      "Microservices applications",
      "DevOps environments",
      "Cloud-native applications",
      "Legacy application modernization",
      "Development teams"
    ],
    targetAudience: [
      "DevOps engineers",
      "System administrators",
      "Application developers",
      "Platform engineers",
      "IT operations teams"
    ],
    tags: ["Containers", "Orchestration", "DevOps", "Microservices", "Cloud Native"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$1,800 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/container-orchestration"
  }
];