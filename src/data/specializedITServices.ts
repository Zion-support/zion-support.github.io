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
<<<<<<< HEAD
  roi: string;
  caseStudies: string[];
  serviceLevel: string;
}

export const SPECIALIZED_IT_SERVICES: SpecializedITService[] = [
  // Cloud Cost Optimization & FinOps
  {
    id: "cloud-cost-optimization-finops",
    title: "Cloud Cost Optimization & FinOps Platform",
    description: "Comprehensive cloud financial operations platform that optimizes cloud spending, provides cost visibility, and implements FinOps best practices to reduce cloud costs by up to 40%.",
    category: "Cloud & FinOps",
    subcategory: "Cost Optimization",
    price: 2499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time cloud cost monitoring and analytics",
      "Automated cost optimization recommendations",
      "Resource utilization analysis and optimization",
      "Multi-cloud cost management and comparison",
      "Budget tracking and alerting",
      "Cost allocation and chargeback systems",
      "Reserved instance and savings plan optimization",
      "Automated scaling and resource management",
      "Cost forecasting and budgeting tools",
      "FinOps maturity assessment and improvement"
    ],
    benefits: [
      "Reduce cloud costs by 30-40%",
      "Improve resource utilization by 50%",
      "Achieve better cost visibility and control",
      "Implement FinOps best practices",
      "Optimize cloud investments",
      "Enable data-driven cloud decisions"
    ],
    useCases: [
      "Enterprise cloud cost management",
      "Multi-cloud cost optimization",
      "DevOps cost optimization",
      "Cloud migration cost planning",
      "Budget management and forecasting",
      "Resource optimization and scaling"
    ],
    targetAudience: [
      "Cloud Architects",
      "DevOps Engineers",
      "Financial Officers",
      "IT Directors",
      "Cloud Operations Managers",
      "FinOps Practitioners"
    ],
    tags: ["Cloud", "FinOps", "Cost Optimization", "Multi-Cloud", "DevOps"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$2,499 - $6,000/month",
=======
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
>>>>>>> origin/cursor/expand-services-and-deploy-updates-9864
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
    technology: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Python", "React"],
    integrations: ["AWS Cost Explorer", "Azure Cost Management", "GCP Billing", "Kubernetes", "Terraform"],
    compliance: ["SOC2", "ISO 27001", "Cloud security standards"],
    roi: "300% within 6 months",
    caseStudies: ["Enterprise reduced cloud costs by 35%", "Startup optimized cloud spending by 45%"],
    serviceLevel: "24/7 monitoring and support"
  },

  // DevOps Automation & CI/CD Platform
  {
    id: "devops-automation-cicd-platform",
    title: "DevOps Automation & CI/CD Platform",
    description: "Enterprise-grade DevOps automation platform that streamlines software development, testing, and deployment processes with intelligent automation, monitoring, and optimization.",
    category: "DevOps & CI/CD",
    subcategory: "Automation Platform",
    price: 3999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Intelligent CI/CD pipeline automation",
      "Multi-environment deployment management",
      "Automated testing and quality assurance",
      "Infrastructure as code automation",
      "Real-time monitoring and alerting",
      "Performance optimization and scaling",
      "Security scanning and compliance",
      "Collaboration and workflow management",
      "API access and custom integrations",
      "Advanced analytics and reporting"
    ],
    benefits: [
      "Reduce deployment time by 80%",
      "Improve code quality and reliability",
      "Enable continuous delivery and deployment",
      "Reduce manual errors and downtime",
      "Improve team collaboration and productivity",
      "Scale development operations efficiently"
    ],
    useCases: [
      "Software development teams",
      "DevOps engineering",
      "Cloud-native applications",
      "Microservices architecture",
      "Legacy application modernization",
      "Multi-team development coordination"
    ],
    targetAudience: [
      "DevOps Engineers",
      "Software Engineers",
      "Platform Engineers",
      "Release Managers",
      "Engineering Managers",
      "CTOs and Engineering Directors"
    ],
    tags: ["DevOps", "CI/CD", "Automation", "Cloud Native", "Microservices"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium",
    marketPrice: "$3,999 - $10,000/month",
=======
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
>>>>>>> origin/cursor/expand-services-and-deploy-updates-9864
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
    technology: ["Kubernetes", "Docker", "Jenkins", "GitLab", "Terraform", "Ansible", "Prometheus"],
    integrations: ["GitHub", "GitLab", "Bitbucket", "Jira", "Slack", "Teams", "Cloud platforms"],
    compliance: ["SOC2", "ISO 27001", "Security standards"],
    roi: "400% within 12 months",
    caseStudies: ["Tech company reduced deployment time by 85%", "Enterprise improved code quality by 60%"],
    serviceLevel: "24/7 platform monitoring and support"
  },

  // Data Analytics & Business Intelligence
  {
    id: "data-analytics-business-intelligence",
    title: "Advanced Data Analytics & Business Intelligence Platform",
    description: "Comprehensive data analytics platform that transforms raw data into actionable insights, enabling data-driven decision making and business intelligence across organizations.",
    category: "Data & Analytics",
    subcategory: "Business Intelligence",
    price: 3499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time data processing and analytics",
      "Advanced data visualization and dashboards",
      "Machine learning-powered insights",
      "Predictive analytics and forecasting",
      "Data integration and ETL automation",
      "Self-service analytics and reporting",
      "Advanced data modeling and warehousing",
      "API access for custom applications",
      "Multi-source data connectivity",
      "Enterprise security and governance"
    ],
    benefits: [
      "Enable data-driven decision making",
      "Improve business performance by 25%",
      "Reduce manual reporting time by 70%",
      "Identify new business opportunities",
      "Optimize operations and processes",
      "Enhance customer understanding and engagement"
    ],
    useCases: [
      "Business performance monitoring",
      "Customer analytics and insights",
      "Operational analytics and optimization",
      "Financial reporting and analysis",
      "Marketing analytics and optimization",
      "Risk assessment and management"
    ],
    targetAudience: [
      "Data Scientists",
      "Business Analysts",
      "Data Engineers",
      "Business Intelligence Managers",
      "Operations Managers",
      "Executive Leadership"
    ],
    tags: ["Data Analytics", "Business Intelligence", "Machine Learning", "Data Visualization", "Predictive Analytics"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "premium",
    marketPrice: "$3,499 - $8,000/month",
=======
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
>>>>>>> origin/cursor/expand-services-and-deploy-updates-9864
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
    technology: ["Python", "R", "SQL", "Tableau", "Power BI", "Apache Spark", "TensorFlow"],
    integrations: ["Databases", "Cloud platforms", "CRM systems", "ERP systems", "Marketing platforms"],
    compliance: ["GDPR", "CCPA", "SOC2", "Data protection standards"],
    roi: "350% within 12 months",
    caseStudies: ["Retail company improved sales by 20%", "Manufacturing firm reduced costs by 15%"],
    serviceLevel: "Business hours support with emergency response"
  },

  // IoT & Edge Computing Platform
  {
    id: "iot-edge-computing-platform",
    title: "IoT & Edge Computing Platform",
    description: "Comprehensive IoT platform that enables edge computing, real-time data processing, and intelligent device management for industrial, commercial, and consumer IoT applications.",
    category: "IoT & Edge Computing",
    subcategory: "Platform Solutions",
    price: 2999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Edge computing and local data processing",
      "IoT device management and monitoring",
      "Real-time data analytics and insights",
      "Predictive maintenance and optimization",
      "Multi-protocol device connectivity",
      "Security and privacy management",
      "Scalable cloud-edge architecture",
      "Custom application development",
      "API access and integrations",
      "Advanced monitoring and alerting"
    ],
    benefits: [
      "Reduce latency and improve response time",
      "Lower bandwidth costs and improve efficiency",
      "Enable offline operation and reliability",
      "Improve data privacy and security",
      "Scale IoT deployments efficiently",
      "Enable real-time decision making"
    ],
    useCases: [
      "Industrial IoT and smart manufacturing",
      "Smart cities and infrastructure",
      "Connected vehicles and transportation",
      "Healthcare monitoring and telemedicine",
      "Retail analytics and customer experience",
      "Energy management and sustainability"
    ],
    targetAudience: [
      "IoT Architects",
      "System Integrators",
      "Operations Managers",
      "Technology Directors",
      "Product Managers",
      "Engineering Teams"
    ],
    tags: ["IoT", "Edge Computing", "Real-time Analytics", "Device Management", "Predictive Maintenance"],
    estimatedDelivery: "10-12 weeks",
    supportLevel: "premium",
    marketPrice: "$2,999 - $7,000/month",
=======
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
>>>>>>> origin/cursor/expand-services-and-deploy-updates-9864
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
    technology: ["Kubernetes", "Docker", "MQTT", "CoAP", "Python", "Node.js", "TensorFlow Lite"],
    integrations: ["IoT devices", "Cloud platforms", "Enterprise systems", "Mobile applications"],
    compliance: ["IoT security standards", "Data protection regulations", "Industry standards"],
    roi: "400% within 18 months",
    caseStudies: ["Manufacturing plant improved efficiency by 30%", "Smart city reduced energy costs by 25%"],
    serviceLevel: "24/7 platform monitoring and support"
  },

  // API Management & Integration Platform
  {
    id: "api-management-integration-platform",
    title: "API Management & Integration Platform",
    description: "Enterprise-grade API management platform that provides secure, scalable, and efficient API development, management, and integration capabilities for modern digital businesses.",
    category: "API & Integration",
    subcategory: "Management Platform",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "API design and development tools",
      "API gateway and traffic management",
      "Security and authentication management",
      "Rate limiting and throttling",
      "API analytics and monitoring",
      "Developer portal and documentation",
      "Integration connectors and adapters",
      "Workflow automation and orchestration",
      "API versioning and lifecycle management",
      "Enterprise security and compliance"
    ],
    benefits: [
      "Accelerate digital transformation",
      "Improve system integration efficiency",
      "Enhance developer productivity",
      "Ensure API security and compliance",
      "Enable better customer experiences",
      "Reduce integration costs and complexity"
    ],
    useCases: [
      "Digital transformation initiatives",
      "System integration and modernization",
      "Partner and third-party integrations",
      "Microservices architecture",
      "Mobile and web application development",
      "Data and analytics integration"
    ],
    targetAudience: [
      "API Developers",
      "Integration Architects",
      "DevOps Engineers",
      "Product Managers",
      "Technology Directors",
      "Digital Transformation Leaders"
    ],
    tags: ["API Management", "Integration", "Microservices", "Digital Transformation", "Developer Experience"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium",
    marketPrice: "$1,999 - $5,000/month",
=======
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
>>>>>>> origin/cursor/expand-services-and-deploy-updates-9864
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
    technology: ["Kong", "Apigee", "MuleSoft", "Node.js", "Python", "React", "PostgreSQL"],
    integrations: ["Cloud platforms", "Enterprise systems", "Third-party services", "Development tools"],
    compliance: ["SOC2", "ISO 27001", "API security standards"],
    roi: "300% within 12 months",
    caseStudies: ["Enterprise reduced integration time by 60%", "Startup accelerated API development by 3x"],
    serviceLevel: "Business hours support with emergency response"
=======
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
>>>>>>> origin/cursor/expand-services-and-deploy-updates-9864
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