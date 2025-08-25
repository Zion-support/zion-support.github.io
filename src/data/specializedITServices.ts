export interface SpecializedITService {
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
  technicalSpecs?: string[];
  integrationOptions?: string[];
  complianceStandards?: string[];
  sla?: string;
  uptime?: string;
}

export const SPECIALIZED_IT_SERVICES: SpecializedITService[] = [
  // Edge Computing Infrastructure
  {
    id: "edge-computing-infrastructure",
    title: "Edge Computing Infrastructure Platform",
    description: "Distributed edge computing platform that brings computation and data storage closer to data sources, reducing latency and improving performance for IoT and real-time applications.",
    category: "Infrastructure & Edge Computing",
    subcategory: "Edge Infrastructure",
    price: 3200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Distributed edge nodes",
      "Real-time data processing",
      "Low-latency connectivity",
      "Edge AI capabilities",
      "Automatic failover",
      "Load balancing",
      "Security at the edge",
      "Monitoring and analytics"
    ],
    benefits: [
      "Reduce latency by 80%",
      "Improve application performance",
      "Reduce bandwidth costs",
      "Enhanced user experience",
      "Scalable edge deployment"
    ],
    useCases: [
      "IoT applications",
      "Real-time analytics",
      "Content delivery",
      "Autonomous vehicles",
      "Smart cities"
    ],
    targetAudience: [
      "IoT developers",
      "Infrastructure architects",
      "DevOps engineers",
      "System administrators",
      "Technology directors"
    ],
    tags: ["Edge Computing", "IoT", "Infrastructure", "Real-time Processing", "Low Latency"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,200 - $9,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/edge-computing-infrastructure",
    technicalSpecs: ["Edge Nodes", "Real-time Processing", "Low-latency Networks", "Distributed Architecture"],
    integrationOptions: ["IoT Platforms", "Cloud Services", "Data Centers", "Network Infrastructure"],
    complianceStandards: ["ISO 27001", "SOC 2", "GDPR", "Industry-specific Standards"],
    sla: "99.9% uptime guarantee",
    uptime: "99.9%"
  },

  // Zero Trust Network Architecture
  {
    id: "zero-trust-network-architecture",
    title: "Zero Trust Network Architecture Implementation",
    description: "Comprehensive zero trust security implementation that eliminates implicit trust and continuously validates every stage of digital interactions.",
    category: "Cybersecurity & Network Security",
    subcategory: "Zero Trust Architecture",
    price: 5500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Identity verification",
      "Device trust scoring",
      "Continuous monitoring",
      "Micro-segmentation",
      "Least privilege access",
      "Real-time threat detection",
      "Automated response",
      "Compliance reporting"
    ],
    benefits: [
      "Reduce security breaches by 90%",
      "Improve compliance posture",
      "Enhanced visibility",
      "Automated security responses",
      "Scalable security architecture"
    ],
    useCases: [
      "Enterprise networks",
      "Government agencies",
      "Financial institutions",
      "Healthcare organizations",
      "Remote workforces"
    ],
    targetAudience: [
      "CISOs",
      "Network architects",
      "Security engineers",
      "IT directors",
      "Compliance officers"
    ],
    tags: ["Zero Trust", "Network Security", "Cybersecurity", "Identity Management", "Access Control"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$5,500 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/zero-trust-architecture",
    technicalSpecs: ["Identity Verification", "Device Trust Scoring", "Micro-segmentation", "Continuous Monitoring"],
    integrationOptions: ["Identity Providers", "Network Infrastructure", "Security Tools", "Monitoring Systems"],
    complianceStandards: ["NIST Zero Trust", "ISO 27001", "SOC 2", "FedRAMP", "HIPAA"],
    sla: "99.95% security response time",
    uptime: "99.99%"
  },

  // Multi-Cloud Management Platform
  {
    id: "multi-cloud-management-platform",
    title: "Multi-Cloud Management Platform",
    description: "Unified platform for managing multiple cloud providers, optimizing costs, ensuring compliance, and maintaining consistent security across hybrid and multi-cloud environments.",
    category: "Cloud & Infrastructure",
    subcategory: "Multi-Cloud Management",
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-cloud orchestration",
      "Cost optimization",
      "Unified monitoring",
      "Security compliance",
      "Automated provisioning",
      "Disaster recovery",
      "Performance optimization",
      "Resource management"
    ],
    benefits: [
      "Reduce cloud costs by 25-35%",
      "Improve operational efficiency",
      "Enhanced security posture",
      "Simplified management",
      "Better compliance"
    ],
    useCases: [
      "Hybrid cloud environments",
      "Multi-cloud strategies",
      "Cloud migration",
      "Cost optimization",
      "Compliance management"
    ],
    targetAudience: [
      "Cloud architects",
      "DevOps engineers",
      "Infrastructure managers",
      "IT directors",
      "Cloud administrators"
    ],
    tags: ["Multi-Cloud", "Cloud Management", "Cost Optimization", "Compliance", "Orchestration"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$2,800 - $7,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/multi-cloud-management",
    technicalSpecs: ["Multi-Cloud APIs", "Orchestration Engine", "Cost Analytics", "Security Framework"],
    integrationOptions: ["AWS", "Azure", "Google Cloud", "Private Clouds", "On-premise Systems"],
    complianceStandards: ["SOC 2", "ISO 27001", "GDPR", "Industry-specific Standards"],
    sla: "99.9% platform availability",
    uptime: "99.9%"
  },

  // DevSecOps Automation Platform
  {
    id: "devsecops-automation-platform",
    title: "DevSecOps Automation Platform",
    description: "Integrated platform that automates security testing, compliance checks, and security controls throughout the software development lifecycle.",
    category: "DevOps & Security",
    subcategory: "DevSecOps",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated security scanning",
      "Compliance automation",
      "Vulnerability management",
      "Security testing integration",
      "Policy enforcement",
      "Risk assessment",
      "Automated remediation",
      "Security metrics"
    ],
    benefits: [
      "Reduce security vulnerabilities by 70%",
      "Accelerate development cycles",
      "Automated compliance",
      "Early security detection",
      "Reduced security debt"
    ],
    useCases: [
      "Software development teams",
      "DevOps organizations",
      "Security teams",
      "Compliance departments",
      "CI/CD pipelines"
    ],
    targetAudience: [
      "DevOps engineers",
      "Security engineers",
      "Software developers",
      "DevOps managers",
      "Security architects"
    ],
    tags: ["DevSecOps", "Security Automation", "Compliance", "CI/CD", "Vulnerability Management"],
    estimatedDelivery: "3-5 weeks",
    supportLevel: "premium",
    marketPrice: "$1,800 - $4,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/devsecops-automation",
    technicalSpecs: ["Security Scanning", "Compliance Engine", "Automation Framework", "Integration APIs"],
    integrationOptions: ["CI/CD Tools", "Security Tools", "Compliance Frameworks", "Development Tools"],
    complianceStandards: ["OWASP", "NIST", "ISO 27001", "Industry-specific Standards"],
    sla: "99.5% automation reliability",
    uptime: "99.9%"
  },

  // Data Governance & Privacy Platform
  {
    id: "data-governance-privacy-platform",
    title: "Data Governance & Privacy Platform",
    description: "Comprehensive platform for managing data governance, privacy compliance, data lineage, and ensuring regulatory adherence across all data assets.",
    category: "Data Management & Privacy",
    subcategory: "Data Governance",
    price: 4200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Data lineage tracking",
      "Privacy compliance automation",
      "Data classification",
      "Access control management",
      "Audit trail",
      "Data quality monitoring",
      "Policy enforcement",
      "Regulatory reporting"
    ],
    benefits: [
      "Ensure regulatory compliance",
      "Improve data quality",
      "Reduce privacy risks",
      "Enhanced data visibility",
      "Automated compliance"
    ],
    useCases: [
      "Data governance",
      "Privacy compliance",
      "Regulatory reporting",
      "Data quality management",
      "Access control"
    ],
    targetAudience: [
      "Data governance officers",
      "Privacy officers",
      "Compliance managers",
      "Data architects",
      "Legal teams"
    ],
    tags: ["Data Governance", "Privacy", "Compliance", "Data Lineage", "Regulatory"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,200 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/data-governance-privacy",
    technicalSpecs: ["Data Lineage Engine", "Privacy Framework", "Compliance Engine", "Audit System"],
    integrationOptions: ["Data Platforms", "Identity Systems", "Compliance Tools", "Reporting Systems"],
    complianceStandards: ["GDPR", "CCPA", "HIPAA", "SOX", "Industry-specific Standards"],
    sla: "99.9% data accuracy",
    uptime: "99.95%"
  },

  // API Security Gateway
  {
    id: "api-security-gateway",
    title: "API Security Gateway",
    description: "Advanced API security platform that protects APIs from attacks, ensures compliance, and provides comprehensive monitoring and threat detection.",
    category: "API Security & Management",
    subcategory: "API Security",
    price: 1600,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "API threat protection",
      "Rate limiting",
      "Authentication & authorization",
      "API monitoring",
      "Threat detection",
      "Compliance reporting",
      "Traffic analysis",
      "Security policies"
    ],
    benefits: [
      "Protect APIs from attacks",
      "Ensure compliance",
      "Monitor API usage",
      "Prevent abuse",
      "Enhanced security"
    ],
    useCases: [
      "API protection",
      "Microservices security",
      "Compliance management",
      "Threat prevention",
      "API monitoring"
    ],
    targetAudience: [
      "API developers",
      "Security engineers",
      "DevOps engineers",
      "Architects",
      "Security managers"
    ],
    tags: ["API Security", "Threat Protection", "Compliance", "Monitoring", "Gateway"],
    estimatedDelivery: "2-4 weeks",
    supportLevel: "premium",
    marketPrice: "$1,600 - $4,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/api-security-gateway",
    technicalSpecs: ["Threat Detection", "Rate Limiting", "Authentication", "Monitoring"],
    integrationOptions: ["API Management", "Identity Providers", "Security Tools", "Monitoring Systems"],
    complianceStandards: ["OWASP API Security", "ISO 27001", "SOC 2", "Industry Standards"],
    sla: "99.9% threat detection",
    uptime: "99.95%"
  },

  // Container Security Platform
  {
    id: "container-security-platform",
    title: "Container Security Platform",
    description: "Comprehensive security platform for containers and Kubernetes that provides vulnerability scanning, runtime protection, and compliance management.",
    category: "Container Security & Kubernetes",
    subcategory: "Container Security",
    price: 2400,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Container vulnerability scanning",
      "Runtime protection",
      "Image signing",
      "Compliance management",
      "Threat detection",
      "Policy enforcement",
      "Security monitoring",
      "Automated remediation"
    ],
    benefits: [
      "Secure container deployments",
      "Automated security",
      "Compliance assurance",
      "Threat prevention",
      "Reduced security risks"
    ],
    useCases: [
      "Container security",
      "Kubernetes security",
      "DevOps security",
      "Compliance management",
      "Threat prevention"
    ],
    targetAudience: [
      "DevOps engineers",
      "Security engineers",
      "Kubernetes administrators",
      "Container developers",
      "Security architects"
    ],
    tags: ["Container Security", "Kubernetes", "Vulnerability Scanning", "Runtime Protection", "Compliance"],
    estimatedDelivery: "3-5 weeks",
    supportLevel: "premium",
    marketPrice: "$2,400 - $6,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/container-security",
    technicalSpecs: ["Vulnerability Scanner", "Runtime Protection", "Policy Engine", "Monitoring"],
    integrationOptions: ["Kubernetes", "Docker", "CI/CD Tools", "Security Tools", "Monitoring"],
    complianceStandards: ["CIS Benchmarks", "NIST", "ISO 27001", "Industry Standards"],
    sla: "99.9% security coverage",
    uptime: "99.9%"
  },

  // Network Performance Monitoring
  {
    id: "network-performance-monitoring",
    title: "Network Performance Monitoring Platform",
    description: "Advanced network monitoring platform that provides real-time visibility, performance analysis, and automated troubleshooting for complex network infrastructures.",
    category: "Network Management & Monitoring",
    subcategory: "Performance Monitoring",
    price: 1900,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time monitoring",
      "Performance analytics",
      "Automated troubleshooting",
      "Capacity planning",
      "Network mapping",
      "Alert management",
      "Reporting dashboard",
      "Integration APIs"
    ],
    benefits: [
      "Improve network performance",
      "Reduce downtime",
      "Automated troubleshooting",
      "Capacity optimization",
      "Enhanced visibility"
    ],
    useCases: [
      "Network monitoring",
      "Performance optimization",
      "Troubleshooting",
      "Capacity planning",
      "Network management"
    ],
    targetAudience: [
      "Network engineers",
      "System administrators",
      "Network architects",
      "IT managers",
      "DevOps engineers"
    ],
    tags: ["Network Monitoring", "Performance", "Troubleshooting", "Capacity Planning", "Analytics"],
    estimatedDelivery: "2-4 weeks",
    supportLevel: "premium",
    marketPrice: "$1,900 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/network-performance-monitoring",
    technicalSpecs: ["Real-time Monitoring", "Performance Analytics", "Automation Engine", "Integration APIs"],
    integrationOptions: ["Network Devices", "Monitoring Tools", "Management Systems", "Analytics Platforms"],
    complianceStandards: ["ISO 27001", "SOC 2", "Industry Standards"],
    sla: "99.9% monitoring accuracy",
    uptime: "99.95%"
  },

  // Disaster Recovery as a Service
  {
    id: "disaster-recovery-as-a-service",
    title: "Disaster Recovery as a Service (DRaaS)",
    description: "Comprehensive disaster recovery service that provides automated backup, replication, and recovery solutions with guaranteed recovery time objectives.",
    category: "Business Continuity & Disaster Recovery",
    subcategory: "DRaaS",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated backup",
      "Real-time replication",
      "Fast recovery",
      "Testing automation",
      "Compliance reporting",
      "24/7 monitoring",
      "Geographic redundancy",
      "Recovery automation"
    ],
    benefits: [
      "Minimize downtime",
      "Ensure business continuity",
      "Compliance assurance",
      "Cost-effective recovery",
      "Automated processes"
    ],
    useCases: [
      "Business continuity",
      "Data protection",
      "Compliance requirements",
      "Risk mitigation",
      "Operational resilience"
    ],
    targetAudience: [
      "IT directors",
      "Business continuity managers",
      "Risk managers",
      "Compliance officers",
      "System administrators"
    ],
    tags: ["Disaster Recovery", "Business Continuity", "Backup", "Replication", "Compliance"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,500 - $10,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/disaster-recovery-service",
    technicalSpecs: ["Backup Engine", "Replication System", "Recovery Automation", "Monitoring"],
    integrationOptions: ["Cloud Platforms", "On-premise Systems", "Storage Systems", "Management Tools"],
    complianceStandards: ["ISO 22301", "SOC 2", "Industry Standards", "Regulatory Requirements"],
    sla: "RTO: 4 hours, RPO: 1 hour",
    uptime: "99.99%"
  },

  // Identity and Access Management
  {
    id: "identity-access-management-platform",
    title: "Identity and Access Management Platform",
    description: "Comprehensive IAM platform that provides secure authentication, authorization, and identity governance for enterprise applications and systems.",
    category: "Identity & Access Management",
    subcategory: "IAM Platform",
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Single sign-on (SSO)",
      "Multi-factor authentication",
      "Role-based access control",
      "Identity governance",
      "Privileged access management",
      "Compliance reporting",
      "Integration APIs",
      "Audit logging"
    ],
    benefits: [
      "Improve security",
      "Simplify access management",
      "Ensure compliance",
      "Reduce administrative overhead",
      "Enhanced user experience"
    ],
    useCases: [
      "User authentication",
      "Access control",
      "Compliance management",
      "Security enhancement",
      "Identity governance"
    ],
    targetAudience: [
      "Security architects",
      "Identity managers",
      "System administrators",
      "Compliance officers",
      "IT directors"
    ],
    tags: ["IAM", "Authentication", "Authorization", "Identity Governance", "Security"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$2,800 - $7,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/identity-access-management",
    technicalSpecs: ["SSO Engine", "MFA Framework", "RBAC System", "Governance Engine"],
    integrationOptions: ["Applications", "Directories", "Cloud Services", "Security Tools"],
    complianceStandards: ["ISO 27001", "SOC 2", "GDPR", "Industry Standards"],
    sla: "99.9% authentication success",
    uptime: "99.95%"
  }
];

export const SPECIALIZED_SERVICE_CATEGORIES = [
  {
    id: 'enterprise-infrastructure',
    name: 'Enterprise Infrastructure',
    icon: '🏢',
    count: 2,
    description: 'Modern enterprise infrastructure solutions for large organizations'
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    icon: '🔄',
    count: 2,
    description: 'End-to-end digital transformation services'
  },
  {
    id: 'industry-solutions',
    name: 'Industry Solutions',
    icon: '🏭',
    count: 2,
    description: 'Specialized solutions for specific industries'
  },
  {
    id: 'advanced-analytics',
    name: 'Advanced Analytics',
    icon: '📊',
    count: 1,
    description: 'Advanced analytics and business intelligence solutions'
  },
  {
    id: 'integration-services',
    name: 'Integration Services',
    icon: '🔗',
    count: 1,
    description: 'Enterprise integration and system connectivity services'
  },
  {
    id: 'managed-services',
    name: 'Managed Services',
    icon: '⚙️',
    count: 1,
    description: 'Comprehensive managed IT services'
  }
];

export const CONTACT_INFO = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};