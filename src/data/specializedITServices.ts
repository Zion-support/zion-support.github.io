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
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
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
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
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
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
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
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Kong", "Apigee", "MuleSoft", "Node.js", "Python", "React", "PostgreSQL"],
    integrations: ["Cloud platforms", "Enterprise systems", "Third-party services", "Development tools"],
    compliance: ["SOC2", "ISO 27001", "API security standards"],
    roi: "300% within 12 months",
    caseStudies: ["Enterprise reduced integration time by 60%", "Startup accelerated API development by 3x"],
    serviceLevel: "Business hours support with emergency response"
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