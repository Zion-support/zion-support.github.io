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
  technology: string[];
  integrations: string[];
  compliance: string[];
  certifications: string[];
}

export const SPECIALIZED_IT_SERVICES: SpecializedITService[] = [
  // Advanced Cybersecurity Solutions
  {
    id: "zero-trust-security-platform",
    title: "Zero Trust Security Platform",
    description: "Comprehensive zero trust security platform that implements continuous verification, least privilege access, and micro-segmentation to protect enterprise networks and applications.",
    category: "Cybersecurity",
    subcategory: "Zero Trust Security",
    price: 1200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Continuous identity verification",
      "Least privilege access control",
      "Micro-segmentation",
      "Real-time threat detection",
      "Behavioral analytics",
      "Multi-factor authentication",
      "API security",
      "Compliance reporting"
    ],
    benefits: [
      "Reduce security breaches by 90%",
      "Eliminate lateral movement",
      "Improve compliance posture",
      "Real-time security monitoring",
      "Scalable security architecture"
    ],
    useCases: [
      "Enterprise networks",
      "Cloud environments",
      "Remote workforce",
      "Critical infrastructure",
      "Financial services"
    ],
    targetAudience: [
      "CISOs",
      "Security teams",
      "IT managers",
      "Compliance officers",
      "Enterprise organizations"
    ],
    tags: ["Zero Trust", "Cybersecurity", "Identity Management", "Network Security", "Compliance"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,200 - $3,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Identity providers", "Network segmentation", "Behavioral analytics", "AI/ML", "Zero trust architecture"],
    integrations: ["Active Directory", "LDAP", "SAML", "OAuth", "SIEM systems"],
    compliance: ["SOC2", "ISO 27001", "NIST", "Zero Trust Framework", "GDPR"]
  },

  // Cloud-Native Development Platform
  {
    id: "cloud-native-development-platform",
    title: "Cloud-Native Development Platform",
    description: "Enterprise-grade cloud-native development platform that provides container orchestration, microservices architecture, and DevOps automation for modern application development.",
    category: "Cloud Computing",
    subcategory: "Development Platform",
    price: 800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Kubernetes orchestration",
      "Microservices architecture",
      "CI/CD pipelines",
      "Container registry",
      "Service mesh",
      "Monitoring and logging",
      "Auto-scaling",
      "Multi-cloud support"
    ],
    benefits: [
      "Accelerate development by 60%",
      "Improve scalability and reliability",
      "Reduce infrastructure costs",
      "Faster time to market",
      "Modern development practices"
    ],
    useCases: [
      "Web applications",
      "Mobile backends",
      "API services",
      "Microservices",
      "Cloud-native apps"
    ],
    targetAudience: [
      "Development teams",
      "DevOps engineers",
      "Software architects",
      "IT managers",
      "Startups and enterprises"
    ],
    tags: ["Cloud Native", "Kubernetes", "Microservices", "DevOps", "Containers"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium",
    marketPrice: "$800 - $2,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Kubernetes", "Docker", "Helm", "Istio", "Prometheus", "Grafana"],
    integrations: ["AWS", "Azure", "GCP", "GitHub", "GitLab", "Jenkins"],
    compliance: ["SOC2", "ISO 27001", "Cloud security standards"]
  },

  // AI-Powered IT Operations
  {
    id: "ai-powered-it-operations",
    title: "AI-Powered IT Operations Platform",
    description: "Intelligent IT operations platform that uses AI to automate monitoring, predict issues, and optimize performance across complex IT infrastructure and applications.",
    category: "IT Operations",
    subcategory: "AI Operations",
    price: 1500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered monitoring",
      "Predictive analytics",
      "Automated incident response",
      "Performance optimization",
      "Root cause analysis",
      "Capacity planning",
      "Cost optimization",
      "Real-time dashboards"
    ],
    benefits: [
      "Reduce downtime by 80%",
      "Improve performance by 40%",
      "Automate routine tasks",
      "Predict and prevent issues",
      "Optimize resource usage"
    ],
    useCases: [
      "Data center operations",
      "Cloud infrastructure",
      "Application monitoring",
      "Network management",
      "Service desk automation"
    ],
    targetAudience: [
      "IT operations teams",
      "DevOps engineers",
      "System administrators",
      "IT managers",
      "Operations managers"
    ],
    tags: ["AI Operations", "IT Operations", "Monitoring", "Automation", "Predictive Analytics"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,500 - $4,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Machine Learning", "Predictive Analytics", "Monitoring tools", "Automation platforms", "AI/ML"],
    integrations: ["Monitoring tools", "Ticketing systems", "Cloud platforms", "Configuration management"],
    compliance: ["SOC2", "ISO 27001", "ITIL", "IT operations standards"]
  },

  // Enterprise Data Management
  {
    id: "enterprise-data-management-platform",
    title: "Enterprise Data Management Platform",
    description: "Comprehensive data management platform that provides data governance, quality management, and analytics capabilities for enterprise data assets.",
    category: "Data Management",
    subcategory: "Enterprise Data",
    price: 1000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Data governance framework",
      "Data quality management",
      "Data lineage tracking",
      "Master data management",
      "Data catalog",
      "Privacy and compliance",
      "Data analytics",
      "Integration capabilities"
    ],
    benefits: [
      "Improve data quality by 70%",
      "Ensure regulatory compliance",
      "Better decision making",
      "Reduce data silos",
      "Enhanced data security"
    ],
    useCases: [
      "Data governance",
      "Regulatory compliance",
      "Business intelligence",
      "Data integration",
      "Analytics initiatives"
    ],
    targetAudience: [
      "Data architects",
      "Data engineers",
      "Compliance officers",
      "Business analysts",
      "IT managers"
    ],
    tags: ["Data Management", "Data Governance", "Data Quality", "Compliance", "Analytics"],
    estimatedDelivery: "10-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,000 - $3,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Data governance tools", "ETL platforms", "Data quality tools", "Analytics platforms", "Cloud storage"],
    integrations: ["Data warehouses", "Business intelligence tools", "CRM systems", "ERP systems"],
    compliance: ["GDPR", "CCPA", "SOX", "SOC2", "Data privacy regulations"]
  },

  // Network Infrastructure Management
  {
    id: "network-infrastructure-management",
    title: "Network Infrastructure Management Platform",
    description: "Advanced network management platform that provides comprehensive monitoring, automation, and optimization for enterprise network infrastructure.",
    category: "Network Management",
    subcategory: "Infrastructure",
    price: 700,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Network monitoring",
      "Traffic analysis",
      "Performance optimization",
      "Security monitoring",
      "Configuration management",
      "Automated provisioning",
      "Capacity planning",
      "Real-time alerts"
    ],
    benefits: [
      "Improve network performance by 50%",
      "Reduce network downtime",
      "Automate network operations",
      "Better security visibility",
      "Optimize network costs"
    ],
    useCases: [
      "Enterprise networks",
      "Data centers",
      "Cloud networks",
      "Branch offices",
      "Network operations"
    ],
    targetAudience: [
      "Network engineers",
      "Network administrators",
      "IT managers",
      "Operations teams",
      "Network architects"
    ],
    tags: ["Network Management", "Infrastructure", "Monitoring", "Automation", "Performance"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium",
    marketPrice: "$700 - $2,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Network monitoring tools", "SDN", "Network automation", "Traffic analysis", "Network security"],
    integrations: ["Network devices", "Security tools", "Monitoring systems", "Configuration management"],
    compliance: ["Network security standards", "Industry best practices", "Network compliance"]
  },

  // DevOps Automation Platform
  {
    id: "devops-automation-platform",
    title: "DevOps Automation Platform",
    description: "Comprehensive DevOps automation platform that streamlines software development, testing, and deployment processes for faster delivery and improved quality.",
    category: "DevOps",
    subcategory: "Automation",
    price: 600,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "CI/CD pipelines",
      "Infrastructure as code",
      "Automated testing",
      "Deployment automation",
      "Environment management",
      "Release management",
      "Monitoring integration",
      "Security scanning"
    ],
    benefits: [
      "Accelerate delivery by 80%",
      "Improve code quality",
      "Reduce deployment errors",
      "Automate repetitive tasks",
      "Better collaboration"
    ],
    useCases: [
      "Software development",
      "Application deployment",
      "Infrastructure management",
      "Testing automation",
      "Release management"
    ],
    targetAudience: [
      "DevOps engineers",
      "Software developers",
      "QA engineers",
      "IT operations",
      "Development teams"
    ],
    tags: ["DevOps", "Automation", "CI/CD", "Infrastructure as Code", "Deployment"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium",
    marketPrice: "$600 - $1,800/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Jenkins", "GitLab CI", "Terraform", "Ansible", "Docker", "Kubernetes"],
    integrations: ["Git repositories", "Cloud platforms", "Monitoring tools", "Security tools"],
    compliance: ["DevOps best practices", "Security standards", "Quality standards"]
  },

  // Application Performance Management
  {
    id: "application-performance-management",
    title: "Application Performance Management Platform",
    description: "Advanced application performance monitoring platform that provides real-time insights, performance optimization, and user experience monitoring for modern applications.",
    category: "Application Management",
    subcategory: "Performance Monitoring",
    price: 900,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time monitoring",
      "Performance analytics",
      "User experience tracking",
      "Error tracking",
      "Performance optimization",
      "Capacity planning",
      "Alert management",
      "Reporting dashboards"
    ],
    benefits: [
      "Improve application performance by 60%",
      "Reduce response times",
      "Better user experience",
      "Proactive issue detection",
      "Performance optimization"
    ],
    useCases: [
      "Web applications",
      "Mobile apps",
      "API services",
      "Microservices",
      "Cloud applications"
    ],
    targetAudience: [
      "Application developers",
      "DevOps engineers",
      "Performance engineers",
      "IT managers",
      "Product managers"
    ],
    tags: ["APM", "Performance Monitoring", "User Experience", "Application Management", "Optimization"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$900 - $2,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["APM tools", "Performance monitoring", "User experience tracking", "Analytics", "Real-time monitoring"],
    integrations: ["Applications", "Web servers", "Databases", "Cloud platforms", "Monitoring tools"],
    compliance: ["Performance standards", "User experience guidelines", "Monitoring best practices"]
  },

  // IT Service Management
  {
    id: "it-service-management-platform",
    title: "IT Service Management Platform",
    description: "Comprehensive IT service management platform that provides incident management, change management, and service desk capabilities for enterprise IT operations.",
    category: "IT Service Management",
    subcategory: "Service Desk",
    price: 500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Incident management",
      "Change management",
      "Service desk",
      "Asset management",
      "Configuration management",
      "Knowledge management",
      "Reporting and analytics",
      "Workflow automation"
    ],
    benefits: [
      "Improve service delivery by 50%",
      "Reduce incident resolution time",
      "Better change management",
      "Enhanced user satisfaction",
      "Compliance with ITIL"
    ],
    useCases: [
      "IT service desk",
      "Incident management",
      "Change management",
      "Asset tracking",
      "Service catalog"
    ],
    targetAudience: [
      "IT service managers",
      "Service desk teams",
      "IT operations",
      "Change managers",
      "IT managers"
    ],
    tags: ["ITSM", "Service Desk", "Incident Management", "Change Management", "ITIL"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "standard",
    marketPrice: "$500 - $1,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["ITSM platforms", "Workflow automation", "Knowledge management", "Reporting tools", "Integration APIs"],
    integrations: ["Active Directory", "Email systems", "Monitoring tools", "Asset management", "Configuration management"],
    compliance: ["ITIL", "ISO 20000", "IT service standards", "Best practices"]
  },

  // Cloud Migration Services
  {
    id: "cloud-migration-services",
    title: "Cloud Migration Services Platform",
    description: "Comprehensive cloud migration platform that provides assessment, planning, and execution tools for migrating enterprise applications and infrastructure to the cloud.",
    category: "Cloud Services",
    subcategory: "Migration",
    price: 2000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Migration assessment",
      "Planning and strategy",
      "Application migration",
      "Data migration",
      "Infrastructure migration",
      "Testing and validation",
      "Performance optimization",
      "Post-migration support"
    ],
    benefits: [
      "Reduce migration risks by 70%",
      "Accelerate cloud adoption",
      "Optimize cloud costs",
      "Improve performance",
      "Enhanced scalability"
    ],
    useCases: [
      "Application migration",
      "Data center migration",
      "Legacy system migration",
      "Hybrid cloud setup",
      "Multi-cloud strategy"
    ],
    targetAudience: [
      "IT architects",
      "Cloud engineers",
      "IT managers",
      "Application teams",
      "Infrastructure teams"
    ],
    tags: ["Cloud Migration", "Cloud Services", "Migration Planning", "Application Migration", "Infrastructure"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,000 - $8,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Migration tools", "Cloud platforms", "Assessment tools", "Planning tools", "Validation tools"],
    integrations: ["AWS", "Azure", "GCP", "On-premises systems", "Monitoring tools"],
    compliance: ["Cloud security standards", "Data protection", "Migration best practices"]
  },

  // Disaster Recovery Platform
  {
    id: "disaster-recovery-platform",
    title: "Disaster Recovery Platform",
    description: "Comprehensive disaster recovery platform that provides backup, replication, and recovery capabilities for enterprise applications and data with minimal downtime.",
    category: "Business Continuity",
    subcategory: "Disaster Recovery",
    price: 800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated backup",
      "Data replication",
      "Recovery testing",
      "Failover automation",
      "RTO/RPO management",
      "Multi-site replication",
      "Monitoring and alerting",
      "Compliance reporting"
    ],
    benefits: [
      "Minimize downtime to minutes",
      "Protect critical data",
      "Automated recovery processes",
      "Compliance with regulations",
      "Business continuity assurance"
    ],
    useCases: [
      "Data protection",
      "Business continuity",
      "Compliance requirements",
      "High availability",
      "Risk mitigation"
    ],
    targetAudience: [
      "IT managers",
      "Business continuity managers",
      "Risk managers",
      "Compliance officers",
      "Operations teams"
    ],
    tags: ["Disaster Recovery", "Business Continuity", "Backup", "Replication", "High Availability"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "premium",
    marketPrice: "$800 - $2,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Backup tools", "Replication software", "Recovery automation", "Monitoring tools", "Storage systems"],
    integrations: ["Applications", "Databases", "Storage systems", "Cloud platforms", "Monitoring tools"],
    compliance: ["Business continuity standards", "Data protection regulations", "Recovery time objectives"]
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