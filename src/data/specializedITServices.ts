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
  integrations?: string[];
  compliance?: string[];
  sla?: string;
  uptime?: string;
}

export const SPECIALIZED_IT_SERVICES: SpecializedITService[] = [
  // Advanced Network Infrastructure
  {
    id: "ai-network-optimization",
    title: "AI-Powered Network Infrastructure Optimization",
    description: "Intelligent network management platform that uses AI to optimize network performance, predict failures, and automatically adjust configurations for maximum efficiency.",
    category: "Network Infrastructure",
    subcategory: "AI Network Management",
    price: 3200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered network traffic analysis",
      "Predictive network failure detection",
      "Automated bandwidth optimization",
      "Real-time performance monitoring",
      "Intelligent load balancing",
      "Network security threat detection",
      "Automated configuration management",
      "Multi-vendor equipment support"
    ],
    benefits: [
      "Improve network performance by 40%",
      "Reduce network downtime by 60%",
      "Optimize bandwidth utilization",
      "Enhanced security monitoring",
      "Automated network management"
    ],
    useCases: [
      "Enterprise networks",
      "Data centers",
      "Cloud infrastructure",
      "Multi-site organizations",
      "High-traffic applications"
    ],
    targetAudience: [
      "Network administrators",
      "IT infrastructure managers",
      "System engineers",
      "Network architects",
      "IT directors"
    ],
    tags: ["AI", "Network Infrastructure", "Network Optimization", "Performance Monitoring", "Automation"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,200 - $8,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-network-optimization",
    technicalSpecs: ["Machine Learning", "Network Analytics", "Real-time Monitoring", "API Integration"],
    integrations: ["Cisco", "Juniper", "Aruba", "VMware", "AWS", "Azure", "Google Cloud"],
    compliance: ["ISO 27001", "SOC 2", "PCI DSS", "HIPAA"],
    sla: "99.9% uptime guarantee",
    uptime: "99.9%"
  },

  // Advanced Data Center Management
  {
    id: "ai-data-center-management",
    title: "AI Data Center Management & Automation Platform",
    description: "Comprehensive data center management platform that uses AI to optimize resource allocation, energy consumption, and operational efficiency across all data center operations.",
    category: "Data Center Management",
    subcategory: "AI Automation",
    price: 4500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered resource allocation",
      "Energy consumption optimization",
      "Predictive maintenance scheduling",
      "Automated capacity planning",
      "Real-time performance monitoring",
      "Intelligent cooling management",
      "Security threat detection",
      "Compliance automation"
    ],
    benefits: [
      "Reduce energy costs by 25-35%",
      "Improve resource utilization by 30%",
      "Minimize downtime through predictive maintenance",
      "Enhanced operational efficiency",
      "Automated compliance reporting"
    ],
    useCases: [
      "Enterprise data centers",
      "Cloud service providers",
      "Colocation facilities",
      "Edge computing locations",
      "Hybrid cloud environments"
    ],
    targetAudience: [
      "Data center managers",
      "Infrastructure directors",
      "Operations managers",
      "Facility managers",
      "IT executives"
    ],
    tags: ["AI", "Data Center", "Resource Management", "Energy Optimization", "Automation"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,500 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-data-center-management",
    technicalSpecs: ["Machine Learning", "IoT Integration", "Predictive Analytics", "Real-time Monitoring"],
    integrations: ["VMware", "OpenStack", "Kubernetes", "Docker", "Monitoring Tools", "BMS Systems"],
    compliance: ["ISO 27001", "SOC 2", "Uptime Institute", "LEED", "Energy Star"],
    sla: "99.99% uptime guarantee",
    uptime: "99.99%"
  },

  // Advanced Cloud Migration
  {
    id: "ai-cloud-migration-platform",
    title: "AI Cloud Migration & Optimization Platform",
    description: "Intelligent cloud migration platform that uses AI to analyze applications, optimize migration strategies, and ensure seamless transitions to cloud environments.",
    category: "Cloud Services",
    subcategory: "Migration & Optimization",
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered application analysis",
      "Migration strategy optimization",
      "Cost optimization recommendations",
      "Performance benchmarking",
      "Automated migration workflows",
      "Risk assessment & mitigation",
      "Multi-cloud support",
      "Migration monitoring & rollback"
    ],
    benefits: [
      "Reduce migration time by 40%",
      "Optimize cloud costs by 30%",
      "Minimize migration risks",
      "Enhanced performance optimization",
      "Automated migration processes"
    ],
    useCases: [
      "Legacy system modernization",
      "Data center consolidation",
      "Multi-cloud strategies",
      "Application modernization",
      "Disaster recovery planning"
    ],
    targetAudience: [
      "Cloud architects",
      "DevOps engineers",
      "IT managers",
      "Application developers",
      "Infrastructure teams"
    ],
    tags: ["AI", "Cloud Migration", "Cloud Optimization", "Application Modernization", "Multi-cloud"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$2,800 - $7,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-cloud-migration",
    technicalSpecs: ["Machine Learning", "Application Analysis", "Migration Automation", "Performance Testing"],
    integrations: ["AWS", "Azure", "Google Cloud", "VMware", "Kubernetes", "Docker", "Terraform"],
    compliance: ["SOC 2", "ISO 27001", "Cloud Security Standards"],
    sla: "99.5% uptime guarantee",
    uptime: "99.5%"
  },

  // Advanced DevOps Automation
  {
    id: "ai-devops-automation-platform",
    title: "AI DevOps Automation & CI/CD Optimization",
    description: "Intelligent DevOps platform that uses AI to automate software development workflows, optimize CI/CD pipelines, and enhance development team productivity.",
    category: "DevOps & Automation",
    subcategory: "CI/CD Optimization",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered pipeline optimization",
      "Automated testing & quality assurance",
      "Intelligent deployment strategies",
      "Performance monitoring & alerting",
      "Security scanning integration",
      "Code quality analysis",
      "Team collaboration tools",
      "Analytics & reporting"
    ],
    benefits: [
      "Reduce deployment time by 70%",
      "Improve code quality by 40%",
      "Automate repetitive tasks",
      "Enhanced team productivity",
      "Reduced production incidents"
    ],
    useCases: [
      "Software development teams",
      "DevOps engineering",
      "Quality assurance",
      "System administration",
      "Microservices deployment"
    ],
    targetAudience: [
      "DevOps engineers",
      "Software developers",
      "QA engineers",
      "System administrators",
      "IT operations teams"
    ],
    tags: ["AI", "DevOps", "CI/CD", "Automation", "Quality Assurance"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$1,800 - $4,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-devops-automation",
    technicalSpecs: ["Machine Learning", "Pipeline Automation", "Testing Automation", "Performance Monitoring"],
    integrations: ["Jenkins", "GitLab", "GitHub", "Docker", "Kubernetes", "AWS", "Azure", "Google Cloud"],
    compliance: ["SOC 2", "Security Standards", "Development Best Practices"],
    sla: "99.5% uptime guarantee",
    uptime: "99.5%"
  },

  // Advanced Security Operations
  {
    id: "ai-security-operations-center",
    title: "AI Security Operations Center (SOC) Platform",
    description: "Intelligent security operations platform that uses AI to detect threats, automate incident response, and provide comprehensive security monitoring across all systems.",
    category: "Cybersecurity",
    subcategory: "Security Operations",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered threat detection",
      "Automated incident response",
      "Behavioral analytics",
      "Threat intelligence integration",
      "Security orchestration",
      "Compliance monitoring",
      "Real-time alerting",
      "Forensic analysis tools"
    ],
    benefits: [
      "Reduce security incidents by 80%",
      "Improve incident response time by 60%",
      "24/7 automated monitoring",
      "Enhanced threat detection",
      "Comprehensive compliance reporting"
    ],
    useCases: [
      "Enterprise security operations",
      "Financial services security",
      "Healthcare data protection",
      "Government cybersecurity",
      "Critical infrastructure protection"
    ],
    targetAudience: [
      "Security analysts",
      "CISOs",
      "Security engineers",
      "IT security teams",
      "Compliance officers"
    ],
    tags: ["AI", "Cybersecurity", "SOC", "Threat Detection", "Incident Response"],
    estimatedDelivery: "5-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,500 - $9,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-security-operations",
    technicalSpecs: ["Machine Learning", "Threat Intelligence", "Behavioral Analytics", "Security Orchestration"],
    integrations: ["SIEM Systems", "EDR Solutions", "Firewalls", "IDS/IPS", "Vulnerability Scanners"],
    compliance: ["SOC 2", "ISO 27001", "NIST", "GDPR", "HIPAA", "PCI DSS"],
    sla: "99.9% uptime guarantee",
    uptime: "99.9%"
  },

  // Advanced Data Analytics Platform
  {
    id: "ai-data-analytics-platform",
    title: "AI Data Analytics & Business Intelligence Platform",
    description: "Comprehensive data analytics platform that uses AI to transform raw data into actionable insights, automate reporting, and provide predictive analytics for business decision-making.",
    category: "Data Analytics",
    subcategory: "Business Intelligence",
    price: 2200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered data processing",
      "Automated insight generation",
      "Predictive analytics models",
      "Real-time data visualization",
      "Natural language querying",
      "Custom dashboard builder",
      "Data storytelling tools",
      "Mobile BI applications"
    ],
    benefits: [
      "Improve decision-making by 50%",
      "Reduce reporting time by 80%",
      "Identify hidden business opportunities",
      "Real-time performance monitoring",
      "Democratize data access"
    ],
    useCases: [
      "Business performance analysis",
      "Customer behavior insights",
      "Financial forecasting",
      "Operational efficiency metrics",
      "Market trend analysis"
    ],
    targetAudience: [
      "Business analysts",
      "Data scientists",
      "Executives",
      "Marketing teams",
      "Operations managers"
    ],
    tags: ["AI", "Data Analytics", "Business Intelligence", "Predictive Analytics", "Data Visualization"],
    estimatedDelivery: "4-5 weeks",
    supportLevel: "premium",
    marketPrice: "$2,200 - $6,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-data-analytics",
    technicalSpecs: ["Machine Learning", "Data Processing", "Predictive Analytics", "Real-time Analytics"],
    integrations: ["Databases", "Data Warehouses", "Cloud Storage", "Business Applications", "API Connectors"],
    compliance: ["SOC 2", "Data Privacy", "GDPR", "Industry Standards"],
    sla: "99.5% uptime guarantee",
    uptime: "99.5%"
  },

  // Advanced API Management
  {
    id: "ai-api-management-platform",
    title: "AI API Management & Integration Platform",
    description: "Intelligent API management platform that uses AI to optimize API performance, monitor usage patterns, and provide seamless integration capabilities across all systems.",
    category: "API Management",
    subcategory: "Integration & Optimization",
    price: 1600,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered API optimization",
      "Intelligent rate limiting",
      "Usage pattern analysis",
      "Automated documentation",
      "Performance monitoring",
      "Security & authentication",
      "Developer portal",
      "Integration templates"
    ],
    benefits: [
      "Improve API performance by 35%",
      "Reduce integration time by 50%",
      "Enhanced developer experience",
      "Automated API management",
      "Comprehensive monitoring"
    ],
    useCases: [
      "Microservices architecture",
      "Third-party integrations",
      "Mobile app backends",
      "E-commerce platforms",
      "Enterprise system integration"
    ],
    targetAudience: [
      "API developers",
      "Integration engineers",
      "System architects",
      "DevOps teams",
      "Product managers"
    ],
    tags: ["AI", "API Management", "Integration", "Microservices", "Developer Experience"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$1,600 - $4,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-api-management",
    technicalSpecs: ["Machine Learning", "API Analytics", "Performance Monitoring", "Integration Engine"],
    integrations: ["REST APIs", "GraphQL", "SOAP", "Webhooks", "Message Queues", "Cloud Services"],
    compliance: ["SOC 2", "API Security Standards", "Data Privacy"],
    sla: "99.5% uptime guarantee",
    uptime: "99.5%"
  },

  // Advanced Backup & Disaster Recovery
  {
    id: "ai-backup-disaster-recovery",
    title: "AI Backup & Disaster Recovery Platform",
    description: "Intelligent backup and disaster recovery platform that uses AI to optimize backup strategies, automate recovery processes, and ensure business continuity across all environments.",
    category: "Data Protection",
    subcategory: "Backup & Recovery",
    price: 1900,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered backup optimization",
      "Automated disaster recovery",
      "Intelligent data deduplication",
      "Real-time backup monitoring",
      "Recovery testing automation",
      "Multi-site replication",
      "Compliance reporting",
      "Ransomware protection"
    ],
    benefits: [
      "Reduce backup time by 40%",
      "Improve recovery time by 60%",
      "Automated disaster recovery",
      "Enhanced data protection",
      "Comprehensive compliance"
    ],
    useCases: [
      "Enterprise data protection",
      "Cloud backup strategies",
      "Disaster recovery planning",
      "Compliance requirements",
      "Business continuity"
    ],
    targetAudience: [
      "IT administrators",
      "Data protection specialists",
      "Compliance officers",
      "Business continuity managers",
      "System administrators"
    ],
    tags: ["AI", "Backup", "Disaster Recovery", "Data Protection", "Business Continuity"],
    estimatedDelivery: "4-5 weeks",
    supportLevel: "premium",
    marketPrice: "$1,900 - $5,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-backup-recovery",
    technicalSpecs: ["Machine Learning", "Data Deduplication", "Replication Engine", "Recovery Automation"],
    integrations: ["Storage Systems", "Cloud Storage", "Virtualization Platforms", "Databases", "Applications"],
    compliance: ["SOC 2", "ISO 27001", "GDPR", "Industry Standards"],
    sla: "99.9% uptime guarantee",
    uptime: "99.9%"
  }
];

export const getSpecializedITServiceByCategory = (category: string) => {
  return SPECIALIZED_IT_SERVICES.filter(service => service.category === category);
};

export const getSpecializedITServiceBySubcategory = (subcategory: string) => {
  return SPECIALIZED_IT_SERVICES.filter(service => service.subcategory === subcategory);
};

export const getFeaturedSpecializedITServices = () => {
  return SPECIALIZED_IT_SERVICES.slice(0, 6);
};

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