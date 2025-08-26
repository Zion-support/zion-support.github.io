export interface DevOpsCloudService {
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
export const DEVOPS_CLOUD_SERVICES: DevOpsCloudService[] = [
  // GitOps Platform
  {
    id: "gitops-platform",
    title: "GitOps Platform & Infrastructure Automation",
    description: "Complete GitOps platform that automates infrastructure deployment, configuration management, and application delivery using Git as the single source of truth.",
    category: "DevOps & Cloud",
    subcategory: "GitOps",
    price: 2200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Infrastructure as Code automation",
      "Git-based deployment pipelines",
      "Configuration drift detection",
      "Rollback automation",
      "Multi-environment management",
      "Compliance tracking"
    ],
    benefits: [
      "Reduce deployment time by 80%",
      "Eliminate configuration drift",
      "Improve audit compliance",
      "Enable self-service deployments",
      "Reduce human errors"
    ],
    useCases: [
      "DevOps teams",
      "Platform engineering",
      "Infrastructure teams",
      "Application teams",
      "SRE teams"
    ],
    targetAudience: [
      "DevOps engineers",
      "Platform engineers",
      "Infrastructure architects",
      "SRE engineers",
      "DevOps managers"
    ],
    tags: ["DevOps", "GitOps", "Infrastructure as Code", "Automation", "Deployment"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$2,200 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // Multi-Cloud Management Platform
  {
    id: "multi-cloud-management",
    title: "Multi-Cloud Management & Cost Optimization Platform",
    description: "Unified multi-cloud management platform that provides centralized monitoring, cost optimization, and governance across AWS, Azure, GCP, and other cloud providers.",
    category: "DevOps & Cloud",
    subcategory: "Cloud Management",
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-cloud dashboard",
      "Cost optimization recommendations",
      "Resource utilization monitoring",
      "Compliance management",
      "Automated scaling",
      "Performance analytics"
    ],
    benefits: [
      "Reduce cloud costs by 20-30%",
      "Simplify multi-cloud operations",
      "Improve resource utilization",
      "Enhance compliance visibility",
      "Centralize management"
    ],
    useCases: [
      "Multi-cloud environments",
      "Enterprise IT",
      "Cloud architects",
      "FinOps teams",
      "DevOps teams"
    ],
    targetAudience: [
      "Cloud architects",
      "DevOps engineers",
      "FinOps managers",
      "IT directors",
      "Cloud administrators"
    ],
    tags: ["DevOps", "Multi-Cloud", "Cost Optimization", "Cloud Management", "FinOps"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,800 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // Kubernetes Management Platform
  {
    id: "kubernetes-management",
    title: "Enterprise Kubernetes Management & Operations Platform",
    description: "Comprehensive Kubernetes management platform that simplifies cluster operations, monitoring, security, and application deployment across multiple clusters.",
    category: "DevOps & Cloud",
    subcategory: "Kubernetes",
    price: 2500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-cluster management",
      "Automated scaling",
      "Security policy enforcement",
      "Monitoring and alerting",
      "Backup and disaster recovery",
      "Application deployment automation"
    ],
    benefits: [
      "Simplify Kubernetes operations",
      "Improve cluster security",
      "Reduce operational overhead",
      "Enable self-service deployments",
      "Enhance monitoring capabilities"
    ],
    useCases: [
      "Kubernetes clusters",
      "Containerized applications",
      "Microservices architecture",
      "DevOps teams",
      "Platform teams"
    ],
    targetAudience: [
      "Kubernetes administrators",
      "DevOps engineers",
      "Platform engineers",
      "SRE engineers",
      "Cloud architects"
    ],
    tags: ["DevOps", "Kubernetes", "Container Management", "Microservices", "Platform Engineering"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$2,500 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // Observability Platform
  {
    id: "observability-platform",
    title: "Full-Stack Observability & Monitoring Platform",
    description: "Comprehensive observability platform that provides unified monitoring, logging, tracing, and alerting across applications, infrastructure, and business metrics.",
    category: "DevOps & Cloud",
    subcategory: "Observability",
    price: 2100,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Application performance monitoring",
      "Infrastructure monitoring",
      "Distributed tracing",
      "Centralized logging",
      "Real-time alerting",
      "Custom dashboards"
    ],
    benefits: [
      "Reduce mean time to resolution by 60%",
      "Improve system reliability",
      "Enhance user experience",
      "Optimize resource utilization",
      "Proactive issue detection"
    ],
    useCases: [
      "Application monitoring",
      "Infrastructure monitoring",
      "Performance optimization",
      "Incident response",
      "Capacity planning"
    ],
    targetAudience: [
      "DevOps engineers",
      "SRE engineers",
      "System administrators",
      "Application developers",
      "Operations managers"
    ],
    tags: ["DevOps", "Observability", "Monitoring", "APM", "Logging"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$2,100 - $10,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // Serverless Development Platform
  {
    id: "serverless-development",
    title: "Serverless Development & Deployment Platform",
    description: "End-to-end serverless development platform that simplifies building, testing, deploying, and monitoring serverless applications across multiple cloud providers.",
    category: "DevOps & Cloud",
    subcategory: "Serverless",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Serverless function development",
      "Multi-cloud deployment",
      "Testing and debugging tools",
      "Performance monitoring",
      "Cost optimization",
      "CI/CD integration"
    ],
    benefits: [
      "Accelerate serverless development",
      "Reduce infrastructure management",
      "Improve scalability",
      "Optimize costs",
      "Enhance developer productivity"
    ],
    useCases: [
      "Serverless applications",
      "API development",
      "Event-driven systems",
      "Microservices",
      "Web applications"
    ],
    targetAudience: [
      "Full-stack developers",
      "Backend developers",
      "DevOps engineers",
      "Solution architects",
      "Development teams"
    ],
    tags: ["DevOps", "Serverless", "Function as a Service", "API Development", "Microservices"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$1,800 - $8,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];