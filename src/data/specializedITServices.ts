import { ProductListing } from "@/types/listings";

export interface SpecializedITService extends ProductListing {
  marketPrice: string;
  estimatedDelivery: string;
  supportLevel: string;
  technology: string[];
  integrations: string[];
  compliance: string[];
  roi: string;
  competitors: string[];
  useCases: string[];
  targetAudience: string[];
  benefits: string[];
export interface SpecializedITService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  technology: string[];
  integrations: string[];
  compliance: string[];
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
  freeTrial: boolean;
  freeTrialDays: number;
  demoUrl: string;
  industryFocus: string[];
}

export const SPECIALIZED_IT_SERVICES: SpecializedITService[] = [
  // FinTech Solutions
  {
    id: "fintech-compliance-platform",
    title: "FinTech Compliance & Risk Management Platform",
    description: "Comprehensive compliance platform for financial institutions with real-time monitoring, automated reporting, and regulatory compliance management.",
    category: "FinTech & Banking",
    subcategory: "Compliance & Risk",
    price: 899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time compliance monitoring",
      "Automated regulatory reporting",
      "Risk assessment algorithms",
      "AML/KYC automation",
      "Transaction monitoring",
      "Regulatory change management",
      "Audit trail management",
      "Multi-jurisdiction compliance"
    ],
    benefits: [
      "Reduce compliance costs by 40%",
      "Automate 90% of regulatory reporting",
      "Real-time risk detection",
      "Ensure regulatory compliance",
      "Reduce audit preparation time"
    ],
    useCases: [
      "Banking compliance",
      "Payment processing",
      "Cryptocurrency exchanges",
      "Insurance companies",
      "Investment firms"
    ],
    targetAudience: [
      "Banks and credit unions",
      "FinTech startups",
      "Payment processors",
      "Insurance companies",
      "Investment firms"
    ],
    tags: ["FinTech", "Compliance", "Risk Management", "AML/KYC", "Regulatory Reporting"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$899 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
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
    websiteUrl: "https://ziontechgroup.com/zero-trust-security",
    demoUrl: "https://ziontechgroup.com/demo/zero-trust-security",
    documentationUrl: "https://ziontechgroup.com/docs/zero-trust-security",
    technicalSpecs: [
      "Identity providers (Okta, Azure AD)",
      "Network access control (NAC)",
      "Security information and event management (SIEM)",
      "Endpoint detection and response (EDR)",
      "Privileged access management (PAM)"
    ],
    integrations: [
      "Active Directory",
      "LDAP systems",
      "VPN solutions",
      "Firewall platforms",
      "Security tools"
    ],
    compliance: ["SOC 2", "ISO 27001", "NIST", "GDPR", "HIPAA", "PCI DSS"]
  },

  // Data Lake and Analytics Platform
  {
    id: "data-lake-analytics-platform",
    title: "Enterprise Data Lake and Analytics Platform",
    description: "Scalable data lake platform with advanced analytics capabilities, real-time processing, and AI-powered insights for enterprise data management and business intelligence.",
    category: "Data & Analytics",
    subcategory: "Data Lake",
    price: 3799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Data ingestion and processing",
      "Real-time streaming analytics",
      "Data governance and cataloging",
      "Advanced analytics and ML",
      "Data visualization tools",
      "Self-service analytics",
      "Data quality management",
      "Performance optimization"
    ],
    benefits: [
      "Unify data from multiple sources",
      "Enable real-time decision making",
      "Reduce data silos",
      "Improve data quality",
      "Accelerate insights delivery"
    ],
    useCases: [
      "Business intelligence",
      "Customer analytics",
      "Operational analytics",
      "Predictive modeling",
      "Data science projects"
    ],
    targetAudience: [
      "Data architects",
      "Business analysts",
      "Data scientists",
      "IT managers",
      "Business intelligence teams"
    ],
    tags: ["Data Lake", "Analytics", "Big Data", "Real-time Processing", "Machine Learning"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,799 - $10,999/month",
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
    websiteUrl: "https://ziontechgroup.com/edge-computing-iot",
    demoUrl: "https://ziontechgroup.com/demo/edge-computing-iot",
    documentationUrl: "https://ziontechgroup.com/docs/edge-computing-iot",
    technicalSpecs: [
      "Edge runtime environments",
      "IoT protocols (MQTT, CoAP)",
      "Container orchestration",
      "Real-time databases",
      "AI/ML inference engines"
    ],
    integrations: [
      "IoT devices and sensors",
      "Cloud platforms",
      "Data analytics tools",
      "Security frameworks",
      "Monitoring systems"
    ],
    compliance: ["SOC 2", "ISO 27001", "IoT security standards", "Data privacy"]
  },

  // API Management and Integration Platform
  {
    id: "api-management-integration",
    title: "Enterprise API Management and Integration Platform",
    description: "Comprehensive API management platform that enables secure, scalable, and efficient API development, deployment, and integration across enterprise systems and third-party services.",
    category: "Integration & APIs",
    subcategory: "API Management",
    price: 2499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "API gateway and proxy",
      "API design and documentation",
      "Developer portal",
      "Rate limiting and throttling",
      "Authentication and authorization",
      "API analytics and monitoring",
      "Integration connectors",
      "Workflow automation"
    ],
    benefits: [
      "Accelerate API development by 50%",
      "Improve API security and governance",
      "Enable seamless system integration",
      "Reduce integration costs",
      "Enhanced developer experience"
    ],
    useCases: [
      "System integration",
      "Third-party API management",
      "Microservices communication",
      "Partner integrations",
      "Internal API governance"
    ],
    targetAudience: [
      "API architects",
      "Integration specialists",
      "Developers",
      "IT managers",
      "Business analysts"
    ],
    tags: ["API Management", "Integration", "Microservices", "Developer Experience", "Security"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$2,499 - $6,999/month",
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
    technology: ["Kong", "Apigee", "MuleSoft", "Node.js", "Python", "React", "PostgreSQL"],
    integrations: ["Cloud platforms", "Enterprise systems", "Third-party services", "Development tools"],
    compliance: ["SOC2", "ISO 27001", "API security standards"],
    roi: "300% within 12 months",
    caseStudies: ["Enterprise reduced integration time by 60%", "Startup accelerated API development by 3x"],
    serviceLevel: "Business hours support with emergency response"
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
    },
    technology: ["Backup tools", "Replication software", "Recovery automation", "Monitoring tools", "Storage systems"],
    integrations: ["Applications", "Databases", "Storage systems", "Cloud platforms", "Monitoring tools"],
    compliance: ["Business continuity standards", "Data protection regulations", "Recovery time objectives"]
  { 
    label: 'DevOps & Automation', 
    value: 'devops-automation',
    description: 'CI/CD pipelines and infrastructure automation'
  },
  { 
    label: 'API & Integration', 
    value: 'api-integration',
    description: 'API management and integration solutions'
  },
  { 
    label: 'Data & Analytics', 
    value: 'data-analytics',
    description: 'Data engineering and analytics platforms'
  },
  { 
    label: 'Network Security', 
    value: 'network-security',
    description: 'Network security and threat detection'
  },
  { 
    label: 'Cloud & Infrastructure', 
    value: 'cloud-infrastructure',
    description: 'Cloud migration and modernization'
  }
];

export const CONTACT_INFO = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
