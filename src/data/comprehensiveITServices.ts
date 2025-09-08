export interface ComprehensiveITService {
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
  technicalSpecs: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[];
  };
  competitors: string[];
  marketSize: string;
}

export const comprehensiveITServices: ComprehensiveITService[] = [
  // Enterprise Cloud Migration & Management
  {
    id: "enterprise-cloud-migration",
    title: "Enterprise Cloud Migration & Management",
    description: "Comprehensive cloud migration and management service that helps enterprises transition to cloud infrastructure with minimal disruption and maximum efficiency.",
    category: "Cloud Services",
    subcategory: "Migration & Management",
    price: 15000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Cloud readiness assessment",
      "Migration strategy planning",
      "Infrastructure as Code (IaC)",
      "Multi-cloud management",
      "Cost optimization",
      "Performance monitoring",
      "Security implementation",
      "Disaster recovery",
      "Compliance management",
      "24/7 support"
    ],
    benefits: [
      "Reduce infrastructure costs by 40%",
      "Improve scalability and flexibility",
      "Enhanced security and compliance",
      "Faster time to market",
      "Improved disaster recovery"
    ],
    useCases: [
      "Legacy system migration",
      "Hybrid cloud deployment",
      "Multi-cloud strategy",
      "DevOps transformation",
      "Digital transformation"
    ],
    targetAudience: [
      "Enterprise organizations",
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Manufacturing companies"
    ],
    tags: ["Cloud Migration", "DevOps", "Infrastructure", "Multi-cloud", "Digital Transformation"],
    estimatedDelivery: "12-24 weeks",
    supportLevel: "enterprise",
    marketPrice: "$15,000 - $100,000+",
    roi: "300-500%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Docker"],
      integrations: ["VMware", "Hyper-V", "OpenStack", "CI/CD tools", "Monitoring platforms"],
      apiEndpoints: 500,
      uptime: "99.99%",
      security: ["SOC 2", "ISO 27001", "FedRAMP", "End-to-end encryption"]
    },
    competitors: ["Accenture", "Deloitte", "IBM", "AWS Professional Services", "Azure Consulting"],
    marketSize: "$832.1 billion by 2025"
  },

  // DevOps & CI/CD Automation Platform
  {
    id: "devops-cicd-automation",
    title: "DevOps & CI/CD Automation Platform",
    description: "Comprehensive DevOps platform that automates the entire software development lifecycle, from code commit to production deployment.",
    category: "DevOps",
    subcategory: "Automation",
    price: 3999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated CI/CD pipelines",
      "Infrastructure as Code",
      "Container orchestration",
      "Monitoring and alerting",
      "Security scanning",
      "Performance testing",
      "Deployment automation",
      "Environment management",
      "Team collaboration tools",
      "Analytics and reporting"
    ],
    benefits: [
      "Reduce deployment time by 80%",
      "Improve code quality",
      "Faster time to market",
      "Reduce human errors",
      "Enhanced team productivity"
    ],
    useCases: [
      "Software development",
      "Web application deployment",
      "Mobile app development",
      "Microservices architecture",
      "Legacy system modernization"
    ],
    targetAudience: [
      "Development teams",
      "DevOps engineers",
      "IT operations",
      "Software companies",
      "Enterprise IT departments"
    ],
    tags: ["DevOps", "CI/CD", "Automation", "Kubernetes", "Docker", "Infrastructure"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,999 - $8,999/month",
    roi: "250-400%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Jenkins", "GitLab", "GitHub Actions", "Kubernetes", "Docker", "Terraform"],
      integrations: ["AWS", "Azure", "GCP", "Slack", "Jira", "ServiceNow"],
      apiEndpoints: 300,
      uptime: "99.99%",
      security: ["SOC 2", "ISO 27001", "End-to-end encryption"]
    },
    competitors: ["GitLab", "GitHub", "Jenkins", "CircleCI", "Travis CI"],
    marketSize: "$25.5 billion by 2025"
  },

  // Enterprise Data Center Modernization
  {
    id: "enterprise-data-center-modernization",
    title: "Enterprise Data Center Modernization",
    description: "Comprehensive data center modernization service that transforms legacy infrastructure into modern, efficient, and scalable data centers.",
    category: "Infrastructure",
    subcategory: "Data Center",
    price: 25000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Infrastructure assessment",
      "Modernization planning",
      "Hardware upgrades",
      "Virtualization implementation",
      "Storage optimization",
      "Network modernization",
      "Security enhancement",
      "Energy efficiency",
      "Monitoring implementation",
      "Training and support"
    ],
    benefits: [
      "Reduce operational costs by 35%",
      "Improve performance and reliability",
      "Enhanced security and compliance",
      "Better resource utilization",
      "Improved disaster recovery"
    ],
    useCases: [
      "Legacy system modernization",
      "Data center consolidation",
      "Performance optimization",
      "Security enhancement",
      "Compliance implementation"
    ],
    targetAudience: [
      "Enterprise organizations",
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Educational institutions"
    ],
    tags: ["Data Center", "Infrastructure", "Modernization", "Virtualization", "Security"],
    estimatedDelivery: "16-32 weeks",
    supportLevel: "enterprise",
    marketPrice: "$25,000 - $200,000+",
    roi: "200-400%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["VMware", "Hyper-V", "Cisco", "Dell EMC", "HPE", "NetApp"],
      integrations: ["Backup systems", "Monitoring tools", "Security platforms", "Management software"],
      apiEndpoints: 400,
      uptime: "99.99%",
      security: ["SOC 2", "ISO 27001", "End-to-end encryption"]
    },
    competitors: ["Dell Technologies", "HPE", "Cisco", "IBM", "Oracle"],
    marketSize: "$200.5 billion by 2025"
  },

  // Enterprise Network Security & SD-WAN
  {
    id: "enterprise-network-security-sdwan",
    title: "Enterprise Network Security & SD-WAN",
    description: "Comprehensive network security and SD-WAN solution that provides secure, scalable, and high-performance network connectivity for enterprise organizations.",
    category: "Networking",
    subcategory: "Security & SD-WAN",
    price: 5999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "SD-WAN implementation",
      "Network security",
      "Traffic optimization",
      "Load balancing",
      "VPN management",
      "Firewall protection",
      "Intrusion detection",
      "Traffic monitoring",
      "Performance analytics",
      "24/7 support"
    ],
    benefits: [
      "Improve network performance",
      "Reduce network costs",
      "Enhanced security",
      "Better user experience",
      "Simplified management"
    ],
    useCases: [
      "Multi-site connectivity",
      "Cloud access optimization",
      "Remote workforce support",
      "Network security enhancement",
      "Performance optimization"
    ],
    targetAudience: [
      "Enterprise organizations",
      "Multi-site businesses",
      "Financial institutions",
      "Healthcare organizations",
      "Educational institutions"
    ],
    tags: ["Networking", "SD-WAN", "Security", "VPN", "Firewall"],
    estimatedDelivery: "8-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$5,999 - $12,999/month",
    roi: "200-350%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Cisco", "VMware", "Fortinet", "Palo Alto", "Juniper"],
      integrations: ["Cloud platforms", "Security tools", "Monitoring systems", "Management platforms"],
      apiEndpoints: 250,
      uptime: "99.99%",
      security: ["SOC 2", "ISO 27001", "End-to-end encryption"]
    },
    competitors: ["Cisco", "VMware", "Fortinet", "Palo Alto", "Juniper"],
    marketSize: "$18.9 billion by 2025"
  },

  // Enterprise Backup & Disaster Recovery
  {
    id: "enterprise-backup-disaster-recovery",
    title: "Enterprise Backup & Disaster Recovery",
    description: "Comprehensive backup and disaster recovery solution that ensures business continuity and data protection for enterprise organizations.",
    category: "Data Protection",
    subcategory: "Backup & Recovery",
    price: 4499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated backup",
      "Disaster recovery",
      "Data replication",
      "Point-in-time recovery",
      "Cloud backup",
      "Offsite storage",
      "Recovery testing",
      "Compliance reporting",
      "Performance monitoring",
      "24/7 support"
    ],
    benefits: [
      "Ensure business continuity",
      "Protect critical data",
      "Meet compliance requirements",
      "Reduce recovery time",
      "Minimize data loss"
    ],
    useCases: [
      "Data protection",
      "Business continuity",
      "Compliance requirements",
      "Disaster recovery",
      "Data migration"
    ],
    targetAudience: [
      "Enterprise organizations",
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Educational institutions"
    ],
    tags: ["Backup", "Disaster Recovery", "Data Protection", "Business Continuity", "Compliance"],
    estimatedDelivery: "6-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,499 - $9,999/month",
    roi: "300-500%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Veeam", "Commvault", "Rubrik", "Cohesity", "Dell EMC"],
      integrations: ["VMware", "Hyper-V", "Cloud platforms", "Storage systems"],
      apiEndpoints: 200,
      uptime: "99.99%",
      security: ["SOC 2", "ISO 27001", "End-to-end encryption"]
    },
    competitors: ["Veeam", "Commvault", "Rubrik", "Cohesity", "Dell EMC"],
    marketSize: "$119.5 billion by 2025"
  },

  // Enterprise Identity & Access Management
  {
    id: "enterprise-identity-access-management",
    title: "Enterprise Identity & Access Management",
    description: "Comprehensive identity and access management solution that provides secure, centralized control over user access to enterprise resources.",
    category: "Security",
    subcategory: "Identity Management",
    price: 3499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Single sign-on (SSO)",
      "Multi-factor authentication",
      "User provisioning",
      "Access governance",
      "Privileged access management",
      "Identity analytics",
      "Compliance reporting",
      "Integration capabilities",
      "Mobile support",
      "24/7 support"
    ],
    benefits: [
      "Improve security",
      "Reduce administrative overhead",
      "Enhance user experience",
      "Meet compliance requirements",
      "Centralized access control"
    ],
    useCases: [
      "User access management",
      "Security enhancement",
      "Compliance requirements",
      "Single sign-on",
      "Privileged access control"
    ],
    targetAudience: [
      "Enterprise organizations",
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Educational institutions"
    ],
    tags: ["Identity Management", "Access Control", "Security", "SSO", "MFA"],
    estimatedDelivery: "8-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,499 - $7,999/month",
    roi: "200-350%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Okta", "Azure AD", "AWS IAM", "Ping Identity", "ForgeRock"],
      integrations: ["Active Directory", "LDAP", "SAML", "OAuth", "OIDC"],
      apiEndpoints: 300,
      uptime: "99.99%",
      security: ["SOC 2", "ISO 27001", "End-to-end encryption"]
    },
    competitors: ["Okta", "Azure AD", "AWS IAM", "Ping Identity", "ForgeRock"],
    marketSize: "$24.1 billion by 2025"
  },

  // Enterprise API Management Platform
  {
    id: "enterprise-api-management-platform",
    title: "Enterprise API Management Platform",
    description: "Comprehensive API management platform that enables organizations to design, deploy, secure, and monitor APIs at scale.",
    category: "Integration",
    subcategory: "API Management",
    price: 2999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "API design and development",
      "API gateway",
      "Security and authentication",
      "Rate limiting",
      "Analytics and monitoring",
      "Developer portal",
      "Documentation",
      "Testing tools",
      "Version management",
      "Integration capabilities"
    ],
    benefits: [
      "Accelerate digital transformation",
      "Improve developer productivity",
      "Enhance security",
      "Better API governance",
      "Increased API adoption"
    ],
    useCases: [
      "Digital transformation",
      "Microservices architecture",
      "Third-party integrations",
      "Mobile app development",
      "Partner ecosystem"
    ],
    targetAudience: [
      "Development teams",
      "IT architects",
      "Digital transformation teams",
      "Enterprise organizations",
      "Technology companies"
    ],
    tags: ["API Management", "Integration", "Microservices", "Digital Transformation", "Developer Experience"],
    estimatedDelivery: "6-12 weeks",
    supportLevel: "premium",
    marketPrice: "$2,999 - $6,999/month",
    roi: "200-400%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Kong", "Apigee", "AWS API Gateway", "Azure API Management", "MuleSoft"],
      integrations: ["REST APIs", "GraphQL", "SOAP", "Webhooks", "Event streaming"],
      apiEndpoints: 500,
      uptime: "99.99%",
      security: ["SOC 2", "OAuth 2.0", "JWT", "API keys", "Rate limiting"]
    },
    competitors: ["Kong", "Apigee", "AWS API Gateway", "Azure API Management", "MuleSoft"],
    marketSize: "$13.7 billion by 2025"
  }
];