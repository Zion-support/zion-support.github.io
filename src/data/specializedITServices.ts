export interface SpecializedITService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
<<<<<<< HEAD
<<<<<<< HEAD
  price: number;
  currency: string;
  pricingModel: string;
=======
  price: {
    starter: number;
    professional: number;
    enterprise: number;
    currency: string;
  };
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0c6c
  features: string[];
  benefits: string[];
  targetAudience: string[];
<<<<<<< HEAD
=======
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
>>>>>>> origin/cursor/expand-services-and-deploy-updates-9c54
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
<<<<<<< HEAD
=======
  useCases: string[];
  integration: string[];
  pricingTier: 'Starter' | 'Professional' | 'Enterprise' | 'Custom';
  website: string;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0c6c
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  websiteUrl: string;
  demoUrl?: string;
  documentationUrl?: string;
  technicalSpecs?: string[];
  integrations?: string[];
  compliance?: string[];
}

export const SPECIALIZED_IT_SERVICES: SpecializedITService[] = [
  // Cloud-Native Application Development
  {
    id: "cloud-native-app-development",
    title: "Cloud-Native Application Development Platform",
    description: "Enterprise-grade platform for building, deploying, and managing cloud-native applications with microservices architecture, container orchestration, and DevOps automation.",
    category: "Cloud & DevOps",
    subcategory: "Application Development",
    price: 3499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Microservices architecture design",
      "Container orchestration with Kubernetes",
      "CI/CD pipeline automation",
      "Service mesh implementation",
      "Auto-scaling and load balancing",
      "Multi-cloud deployment",
      "Monitoring and observability",
      "Security and compliance"
    ],
    benefits: [
      "Reduce deployment time by 80%",
      "Improve application scalability by 300%",
      "Reduce infrastructure costs by 40%",
      "Increase development velocity",
      "Enhanced reliability and uptime"
    ],
    useCases: [
      "Enterprise applications",
      "E-commerce platforms",
      "SaaS applications",
      "Mobile backends",
      "API services"
    ],
    targetAudience: [
      "CTOs",
      "DevOps engineers",
      "Software architects",
      "Development teams",
      "IT managers"
    ],
    tags: ["Cloud-Native", "Microservices", "Kubernetes", "DevOps", "Containerization"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,499 - $9,999/month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e04
=======
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technology: string[];
  integrations: string[];
  compliance: string[];
  roi: string;
  competitors: string[];
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
>>>>>>> origin/cursor/expand-services-and-deploy-updates-9c54
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    websiteUrl: "https://ziontechgroup.com/cloud-native-development",
    demoUrl: "https://ziontechgroup.com/demo/cloud-native-development",
    documentationUrl: "https://ziontechgroup.com/docs/cloud-native-development",
    technicalSpecs: [
      "Kubernetes 1.28+",
      "Docker containers",
      "Service mesh (Istio/Linkerd)",
      "CI/CD tools integration",
      "Monitoring stack (Prometheus/Grafana)"
    ],
    integrations: [
      "AWS/Azure/GCP",
      "GitHub/GitLab",
      "Jenkins/ArgoCD",
      "Datadog/New Relic",
      "HashiCorp tools"
    ],
    compliance: ["SOC 2", "ISO 27001", "GDPR", "HIPAA", "PCI DSS"]
  },

  // Zero-Trust Security Framework
  {
    id: "zero-trust-security-framework",
    title: "Zero-Trust Security Framework Implementation",
    description: "Comprehensive zero-trust security framework that implements identity verification, continuous monitoring, and least-privilege access across all network resources and applications.",
    category: "Cybersecurity",
    subcategory: "Zero-Trust Security",
    price: 4299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Identity and access management (IAM)",
      "Multi-factor authentication (MFA)",
      "Network segmentation",
      "Continuous monitoring",
      "Threat detection and response",
      "Compliance reporting",
      "Security automation",
      "Risk assessment tools"
    ],
    benefits: [
      "Reduce security incidents by 70%",
      "Improve compliance posture",
      "Enhanced threat detection",
      "Simplified security management",
      "Reduced attack surface"
    ],
    useCases: [
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Enterprise corporations",
      "Critical infrastructure"
    ],
    targetAudience: [
      "CISOs",
      "Security architects",
      "IT security managers",
      "Compliance officers",
      "Network administrators"
    ],
    tags: ["Zero-Trust", "Cybersecurity", "IAM", "Network Security", "Compliance"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,299 - $12,999/month",
=======
    technology: ["AI/ML", "Blockchain", "Cloud Computing", "Real-time Processing", "Big Data"],
    integrations: ["Core Banking Systems", "Payment Gateways", "Regulatory APIs", "Risk Management Tools"],
    compliance: ["PCI DSS", "SOC 2", "ISO 27001", "GDPR", "Financial Regulations"],
    roi: "450% within 8 months",
    competitors: ["ComplyAdvantage", "Refinitiv", "LexisNexis", "Thomson Reuters"],
    freeTrial: true,
    freeTrialDays: 14,
    demoUrl: "https://demo.ziontechgroup.com/fintech-compliance",
    industryFocus: ["Banking", "FinTech", "Insurance", "Investment"]
  },

  // Healthcare IT Solutions
  {
    id: "healthcare-ai-platform",
    title: "Healthcare AI & Telemedicine Platform",
    description: "Advanced healthcare platform with AI-powered diagnostics, telemedicine capabilities, and patient management systems for modern healthcare providers.",
    category: "Healthcare IT",
    subcategory: "AI & Telemedicine",
    price: 699,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered diagnostics",
      "Telemedicine consultations",
      "Patient management system",
      "Electronic health records",
      "Medical imaging analysis",
      "Prescription management",
      "Appointment scheduling",
      "Health analytics dashboard"
    ],
    benefits: [
      "Improve diagnostic accuracy by 30%",
      "Reduce patient wait times by 60%",
      "Streamline healthcare operations",
      "Enhance patient care quality",
      "Reduce administrative overhead"
    ],
    useCases: [
      "Primary care practices",
      "Specialist consultations",
      "Remote patient monitoring",
      "Medical imaging analysis",
      "Healthcare analytics"
    ],
    targetAudience: [
      "Hospitals and clinics",
      "Private practices",
      "Telemedicine providers",
      "Medical imaging centers",
      "Healthcare networks"
    ],
    tags: ["Healthcare", "AI", "Telemedicine", "EHR", "Medical Imaging", "Patient Care"],
    estimatedDelivery: "5-7 weeks",
    supportLevel: "enterprise",
    marketPrice: "$699 - $3,500/month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-9c54
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
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
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e04
=======
    technology: ["AI/ML", "Computer Vision", "Natural Language Processing", "Cloud Computing", "IoT"],
    integrations: ["EHR Systems", "Medical Devices", "Insurance Systems", "Pharmacy Systems"],
    compliance: ["HIPAA", "HITECH", "FDA", "SOC 2", "ISO 27001"],
    roi: "400% within 10 months",
    competitors: ["Epic", "Cerner", "Teladoc", "Amwell"],
    freeTrial: true,
    freeTrialDays: 21,
    demoUrl: "https://demo.ziontechgroup.com/healthcare-ai",
    industryFocus: ["Healthcare", "Medical", "Pharmaceutical", "Telemedicine"]
  },

  // Manufacturing & Industry 4.0
  {
    id: "industry-4-0-platform",
    title: "Industry 4.0 & Smart Manufacturing Platform",
    description: "Comprehensive Industry 4.0 platform integrating IoT, AI, and automation for smart manufacturing, predictive maintenance, and supply chain optimization.",
    category: "Manufacturing & Industry 4.0",
    subcategory: "Smart Manufacturing",
    price: 799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "IoT device integration",
      "Predictive maintenance",
      "Quality control automation",
      "Supply chain optimization",
      "Energy management",
      "Production analytics",
      "Digital twin integration",
      "Real-time monitoring"
    ],
    benefits: [
      "Reduce downtime by 40%",
      "Improve quality by 30%",
      "Reduce energy costs by 25%",
      "Optimize production efficiency",
      "Real-time decision making"
    ],
    useCases: [
      "Smart manufacturing",
      "Predictive maintenance",
      "Quality control",
      "Supply chain management",
      "Energy optimization"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Industrial facilities",
      "Automotive industry",
      "Chemical plants",
      "Food processing"
    ],
    tags: ["Industry 4.0", "IoT", "Smart Manufacturing", "Predictive Maintenance", "Automation"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$799 - $4,500/month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-9c54
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    websiteUrl: "https://ziontechgroup.com/data-lake-analytics",
    demoUrl: "https://ziontechgroup.com/demo/data-lake-analytics",
    documentationUrl: "https://ziontechgroup.com/docs/data-lake-analytics",
    technicalSpecs: [
      "Apache Hadoop ecosystem",
      "Apache Spark for processing",
      "Apache Kafka for streaming",
      "Data warehouse integration",
      "ML/AI frameworks"
    ],
    integrations: [
      "Cloud storage (S3, Azure Blob)",
      "Databases (PostgreSQL, MySQL)",
      "ETL tools (Informatica, Talend)",
      "BI tools (Tableau, Power BI)",
      "ML platforms (TensorFlow, PyTorch)"
    ],
    compliance: ["SOC 2", "ISO 27001", "GDPR", "CCPA", "Data residency"]
  },

  // Edge Computing and IoT Platform
  {
    id: "edge-computing-iot-platform",
    title: "Edge Computing and IoT Management Platform",
    description: "Comprehensive edge computing platform that enables real-time data processing, IoT device management, and edge AI applications for distributed computing environments.",
    category: "Edge Computing & IoT",
    subcategory: "Platform Management",
    price: 2899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Edge device management",
      "Real-time data processing",
      "Edge AI and ML deployment",
      "IoT connectivity management",
      "Edge security and authentication",
      "Performance monitoring",
      "Automated scaling",
      "Integration APIs"
    ],
    benefits: [
      "Reduce latency by 90%",
      "Lower bandwidth costs by 60%",
      "Enable real-time applications",
      "Improve data privacy",
      "Enhanced reliability"
    ],
    useCases: [
      "Smart cities",
      "Industrial IoT",
      "Connected vehicles",
      "Retail analytics",
      "Healthcare monitoring"
    ],
    targetAudience: [
      "IoT architects",
      "Edge computing engineers",
      "System integrators",
      "Operations managers",
      "Technology consultants"
    ],
    tags: ["Edge Computing", "IoT", "Real-time Processing", "Device Management", "Edge AI"],
    estimatedDelivery: "5-7 weeks",
    supportLevel: "premium",
    marketPrice: "$2,899 - $7,999/month",
=======
    technology: ["IoT", "AI/ML", "Edge Computing", "Cloud Computing", "Digital Twin"],
    integrations: ["ERP Systems", "MES Systems", "SCADA Systems", "PLM Software"],
    compliance: ["ISO 27001", "IEC 62443", "Industry-specific standards"],
    roi: "500% within 12 months",
    competitors: ["Siemens", "GE Digital", "PTC", "Rockwell Automation"],
    freeTrial: true,
    freeTrialDays: 30,
    demoUrl: "https://demo.ziontechgroup.com/industry-4-0",
    industryFocus: ["Manufacturing", "Industrial", "Automotive", "Chemical"]
  },

  // Retail & E-commerce Solutions
  {
    id: "retail-omnichannel-platform",
    title: "Retail Omnichannel & AI Commerce Platform",
    description: "Advanced omnichannel retail platform with AI-powered personalization, inventory management, and seamless customer experience across all channels.",
    category: "Retail & E-commerce",
    subcategory: "Omnichannel Commerce",
    price: 599,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Omnichannel inventory management",
      "AI-powered personalization",
      "Customer journey tracking",
      "Unified commerce platform",
      "Predictive analytics",
      "Mobile commerce",
      "Social commerce integration",
      "Loyalty program management"
    ],
    benefits: [
      "Increase sales by 25-40%",
      "Improve customer retention by 30%",
      "Reduce inventory costs by 20%",
      "Unified customer experience",
      "Data-driven decision making"
    ],
    useCases: [
      "Brick-and-mortar retail",
      "E-commerce platforms",
      "Mobile commerce",
      "Social commerce",
      "Loyalty programs"
    ],
    targetAudience: [
      "Retail chains",
      "E-commerce businesses",
      "Fashion brands",
      "Consumer goods",
      "Department stores"
    ],
    tags: ["Retail", "E-commerce", "Omnichannel", "AI", "Personalization", "Mobile Commerce"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$599 - $2,800/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["AI/ML", "Cloud Computing", "Mobile Development", "API Integration", "Big Data"],
    integrations: ["POS Systems", "E-commerce Platforms", "Payment Gateways", "Social Media"],
    compliance: ["PCI DSS", "GDPR", "CCPA", "SOC 2"],
    roi: "400% within 8 months",
    competitors: ["Shopify Plus", "Salesforce Commerce", "Adobe Commerce", "BigCommerce"],
    freeTrial: true,
    freeTrialDays: 21,
    demoUrl: "https://demo.ziontechgroup.com/retail-omnichannel",
    industryFocus: ["Retail", "E-commerce", "Fashion", "Consumer Goods"]
  },

  // Logistics & Supply Chain
  {
    id: "logistics-ai-platform",
    title: "AI-Powered Logistics & Supply Chain Platform",
    description: "Intelligent logistics platform with route optimization, demand forecasting, and real-time tracking for efficient supply chain management.",
    category: "Logistics & Supply Chain",
    subcategory: "AI Optimization",
    price: 649,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Route optimization",
      "Demand forecasting",
      "Real-time tracking",
      "Warehouse management",
      "Fleet management",
      "Cost optimization",
      "Sustainability tracking",
      "Risk management"
    ],
    benefits: [
      "Reduce logistics costs by 25-35%",
      "Improve delivery times by 30%",
      "Optimize warehouse operations",
      "Reduce carbon footprint",
      "Real-time visibility"
    ],
    useCases: [
      "E-commerce logistics",
      "Manufacturing supply chains",
      "Retail distribution",
      "Cold chain logistics",
      "International shipping"
    ],
    targetAudience: [
      "Logistics companies",
      "E-commerce businesses",
      "Manufacturing companies",
      "Retail chains",
      "3PL providers"
    ],
    tags: ["Logistics", "Supply Chain", "AI", "Route Optimization", "Fleet Management", "Warehouse"],
    estimatedDelivery: "5-7 weeks",
    supportLevel: "premium",
    marketPrice: "$649 - $3,200/month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-9c54
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
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
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e04
=======
    technology: ["AI/ML", "IoT", "GPS", "Cloud Computing", "Big Data Analytics"],
    integrations: ["ERP Systems", "WMS Systems", "TMS Systems", "Carrier APIs"],
    compliance: ["ISO 28000", "C-TPAT", "GDPR", "Industry-specific regulations"],
    roi: "450% within 10 months",
    competitors: ["Flexport", "Convoy", "Project44", "FourKites"],
    freeTrial: true,
    freeTrialDays: 21,
    demoUrl: "https://demo.ziontechgroup.com/logistics-ai",
    industryFocus: ["Logistics", "Supply Chain", "E-commerce", "Manufacturing"]
  },

  // Education Technology
  {
    id: "edtech-ai-platform",
    title: "AI-Powered Education Technology Platform",
    description: "Comprehensive EdTech platform with personalized learning, adaptive assessments, and virtual classroom capabilities for modern education.",
    category: "Education Technology",
    subcategory: "AI Learning",
    price: 449,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Personalized learning paths",
      "Adaptive assessments",
      "Virtual classrooms",
      "Content management",
      "Student analytics",
      "Parent communication",
      "Mobile learning",
      "Gamification"
    ],
    benefits: [
      "Improve learning outcomes by 35%",
      "Reduce administrative workload by 40%",
      "Personalized student experience",
      "Real-time progress tracking",
      "Engaging learning environment"
    ],
    useCases: [
      "K-12 education",
      "Higher education",
      "Corporate training",
      "Online learning",
      "Special education"
    ],
    targetAudience: [
      "Schools and districts",
      "Universities",
      "Training companies",
      "EdTech startups",
      "Corporate trainers"
    ],
    tags: ["EdTech", "AI", "Personalized Learning", "Virtual Classrooms", "Adaptive Learning"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$449 - $2,200/month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-9c54
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    websiteUrl: "https://ziontechgroup.com/api-management",
    demoUrl: "https://ziontechgroup.com/demo/api-management",
    documentationUrl: "https://ziontechgroup.com/docs/api-management",
    technicalSpecs: [
      "API gateway (Kong, AWS API Gateway)",
      "OAuth 2.0 and JWT",
      "GraphQL support",
      "REST and SOAP APIs",
      "API versioning"
    ],
    integrations: [
      "Identity providers",
      "Message queues",
      "Databases",
      "Cloud services",
      "Legacy systems"
    ],
    compliance: ["SOC 2", "ISO 27001", "GDPR", "API security standards"]
  },

  // Digital Twin Platform
  {
    id: "digital-twin-platform",
    title: "Digital Twin Platform for Industrial Applications",
    description: "Advanced digital twin platform that creates virtual representations of physical assets, processes, and systems for real-time monitoring, simulation, and predictive analytics.",
    category: "Digital Twin & Simulation",
    subcategory: "Industrial Applications",
    price: 3999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "3D modeling and visualization",
      "Real-time data synchronization",
      "Predictive analytics",
      "Simulation and testing",
      "Performance optimization",
      "Remote monitoring",
      "Collaborative workspace",
      "Integration APIs"
    ],
    benefits: [
      "Reduce operational costs by 25%",
      "Improve asset performance by 30%",
      "Enable predictive maintenance",
      "Enhance decision making",
      "Remote asset management"
    ],
    useCases: [
      "Manufacturing plants",
      "Smart buildings",
      "Infrastructure monitoring",
      "Product development",
      "Training and simulation"
    ],
    targetAudience: [
      "Operations managers",
      "Asset managers",
      "Engineers",
      "Facility managers",
      "Technology consultants"
    ],
    tags: ["Digital Twin", "IoT", "3D Modeling", "Simulation", "Predictive Analytics"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,999 - $11,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/digital-twin-platform",
    demoUrl: "https://ziontechgroup.com/demo/digital-twin",
    documentationUrl: "https://ziontechgroup.com/docs/digital-twin",
    technicalSpecs: [
      "3D rendering engines",
      "Real-time data processing",
      "IoT connectivity",
      "Simulation engines",
      "Visualization tools"
    ],
    integrations: [
      "IoT platforms",
      "CAD systems",
      "PLM software",
      "SCADA systems",
      "Analytics platforms"
    ],
    compliance: ["SOC 2", "ISO 27001", "Industry-specific standards"]
  },

  // Blockchain Enterprise Platform
  {
    id: "blockchain-enterprise-platform",
    title: "Enterprise Blockchain Platform",
    description: "Scalable enterprise blockchain platform that enables secure, transparent, and efficient business processes through distributed ledger technology and smart contracts.",
    category: "Blockchain & Web3",
    subcategory: "Enterprise Solutions",
    price: 4499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Permissioned blockchain networks",
      "Smart contract development",
      "Consensus mechanisms",
      "Identity management",
      "Asset tokenization",
      "Interoperability solutions",
      "Performance optimization",
      "Security and compliance"
    ],
    benefits: [
      "Increase transparency and trust",
      "Reduce transaction costs by 40%",
      "Automate business processes",
      "Enhance security",
      "Enable new business models"
    ],
    useCases: [
      "Supply chain management",
      "Financial services",
      "Healthcare records",
      "Identity verification",
      "Asset management"
    ],
    targetAudience: [
      "Blockchain architects",
      "Enterprise architects",
      "Business strategists",
      "Compliance officers",
      "Technology leaders"
    ],
    tags: ["Blockchain", "Smart Contracts", "Distributed Ledger", "Tokenization", "Web3"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,499 - $14,999/month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e04
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
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
=======
    technology: ["AI/ML", "Natural Language Processing", "Cloud Computing", "Mobile Development", "WebRTC"],
    integrations: ["LMS Systems", "Student Information Systems", "Content Providers", "Assessment Tools"],
    compliance: ["FERPA", "COPPA", "GDPR", "Accessibility Standards"],
    roi: "350% within 8 months",
    competitors: ["Canvas", "Blackboard", "Moodle", "Coursera"],
    freeTrial: true,
    freeTrialDays: 30,
    demoUrl: "https://demo.ziontechgroup.com/edtech-ai",
    industryFocus: ["Education", "Training", "EdTech", "Corporate Learning"]
  },

  // Real Estate Technology
  {
    id: "proptech-platform",
    title: "Proptech & Real Estate Management Platform",
    description: "Advanced real estate platform with AI-powered property valuation, virtual tours, and comprehensive property management solutions.",
    category: "Real Estate Technology",
    subcategory: "Property Management",
    price: 549,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI property valuation",
      "Virtual property tours",
      "Property management",
      "Tenant screening",
      "Maintenance tracking",
      "Financial reporting",
      "Market analytics",
      "Mobile app access"
    ],
    benefits: [
      "Increase property value by 15-25%",
      "Reduce vacancy rates by 30%",
      "Streamline property management",
      "Improve tenant satisfaction",
      "Data-driven decisions"
    ],
    useCases: [
      "Property management",
      "Real estate investment",
      "Commercial real estate",
      "Residential rentals",
      "Property development"
    ],
    targetAudience: [
      "Property managers",
      "Real estate investors",
      "Real estate agencies",
      "Property developers",
      "Landlords"
    ],
    tags: ["Proptech", "Real Estate", "AI", "Virtual Tours", "Property Management", "Valuation"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$549 - $2,600/month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-9c54
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
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
=======
  rating: number;
  reviewCount: number;
  launchDate: string;
  status: 'Active' | 'Beta' | 'Coming Soon';
  marketPrice: string;
  deliveryTime: string;
}

export const SPECIALIZED_IT_SERVICES: SpecializedITService[] = [
  // DevOps Automation Platform
  {
    id: 'zion-devops-automation',
    title: 'Zion DevOps Automation Platform',
    description: 'Comprehensive DevOps automation platform that streamlines CI/CD pipelines, infrastructure management, and deployment processes across multiple environments.',
    category: 'DevOps & Automation',
    subcategory: 'CI/CD & Deployment',
    price: {
      starter: 299,
      professional: 799,
      enterprise: 1999,
      currency: '$'
    },
    features: [
      'Multi-environment CI/CD pipelines',
      'Infrastructure as Code (IaC)',
      'Automated testing and deployment',
      'Container orchestration',
      'Monitoring and alerting',
      'Security scanning integration',
      'Multi-cloud deployment',
      'Performance optimization'
    ],
    benefits: [
      'Reduce deployment time by 80%',
      'Improve code quality and reliability',
      'Automate infrastructure management',
      'Reduce human errors',
      'Scale operations efficiently'
    ],
    targetAudience: [
      'DevOps engineers',
      'Software developers',
      'IT operations teams',
      'Startups and enterprises',
      'Cloud-native companies'
    ],
    useCases: [
      'Continuous integration and deployment',
      'Infrastructure automation',
      'Container management',
      'Multi-cloud deployments',
      'DevOps transformation'
    ],
    integration: [
      'GitHub',
      'GitLab',
      'Jenkins',
      'Docker',
      'Kubernetes',
      'AWS',
      'Azure',
      'GCP',
      'Terraform'
    ],
    pricingTier: 'Professional',
    website: 'https://ziontechgroup.com/services/devops-automation',
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0c6c
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
<<<<<<< HEAD
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
=======
    websiteUrl: "https://ziontechgroup.com/blockchain-enterprise",
    demoUrl: "https://ziontechgroup.com/demo/blockchain-enterprise",
    documentationUrl: "https://ziontechgroup.com/docs/blockchain-enterprise",
    technicalSpecs: [
      "Hyperledger Fabric",
      "Ethereum compatibility",
      "Smart contract languages",
      "Consensus algorithms",
      "Cryptographic security"
    ],
    integrations: [
      "ERP systems",
      "Financial platforms",
      "Identity providers",
      "IoT platforms",
      "Legacy systems"
    ],
    compliance: ["SOC 2", "ISO 27001", "Financial regulations", "Industry standards"]
  },

  // Quantum Computing Services
  {
    id: "quantum-computing-services",
    title: "Quantum Computing Services and Solutions",
    description: "Comprehensive quantum computing services including algorithm development, quantum software development, and hybrid quantum-classical computing solutions for research and enterprise applications.",
    category: "Quantum Computing",
    subcategory: "Quantum Services",
    price: 5999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum algorithm development",
      "Quantum software development",
      "Hybrid computing solutions",
      "Quantum simulation",
      "Performance optimization",
      "Research collaboration",
      "Training and education",
      "Consulting services"
    ],
    benefits: [
      "Solve complex computational problems",
      "Accelerate research and development",
      "Enable new applications",
      "Future-proof technology",
      "Competitive advantage"
    ],
    useCases: [
      "Cryptography and security",
      "Drug discovery",
      "Financial modeling",
      "Optimization problems",
      "Machine learning"
    ],
    targetAudience: [
      "Research institutions",
      "Pharmaceutical companies",
      "Financial institutions",
      "Technology companies",
      "Academic researchers"
    ],
    tags: ["Quantum Computing", "Quantum Algorithms", "Research", "Innovation", "Future Tech"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$5,999 - $19,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/quantum-computing",
    demoUrl: "https://ziontechgroup.com/demo/quantum-computing",
    documentationUrl: "https://ziontechgroup.com/docs/quantum-computing",
    technicalSpecs: [
      "Quantum programming languages",
      "Quantum simulators",
      "Hybrid frameworks",
      "Quantum algorithms",
      "Research tools"
    ],
    integrations: [
      "Classical computing platforms",
      "Research databases",
      "Simulation tools",
      "Cloud quantum services",
      "Academic platforms"
    ],
    compliance: ["Research standards", "Academic requirements", "Industry protocols"]
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e04
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
=======
    rating: 4.8,
    reviewCount: 189,
    launchDate: '2024-01-25',
    status: 'Active',
    marketPrice: '$299 - $1,999/month',
    deliveryTime: '3-4 weeks'
  },

  // API Management & Gateway
  {
    id: 'zion-api-management-gateway',
    title: 'Zion API Management & Gateway',
    description: 'Enterprise-grade API management platform that provides secure, scalable, and monitored API access with advanced analytics and developer portal capabilities.',
    category: 'API & Integration',
    subcategory: 'API Management',
    price: {
      starter: 199,
      professional: 599,
      enterprise: 1499,
      currency: '$'
    },
    features: [
      'API gateway and routing',
      'Rate limiting and throttling',
      'Authentication and authorization',
      'API analytics and monitoring',
      'Developer portal',
      'Documentation generation',
      'Version management',
      'Security policies'
    ],
    benefits: [
      'Centralize API management',
      'Improve API security',
      'Monitor API performance',
      'Streamline developer onboarding',
      'Reduce API maintenance costs'
    ],
    targetAudience: [
      'API developers',
      'Integration teams',
      'Enterprise architects',
      'Startups and enterprises',
      'Digital transformation teams'
    ],
    useCases: [
      'Microservices architecture',
      'Third-party integrations',
      'Mobile app backends',
      'Partner API access',
      'Internal API governance'
    ],
    integration: [
      'Kong',
      'AWS API Gateway',
      'Azure API Management',
      'Postman',
      'Swagger',
      'OAuth providers',
      'LDAP/Active Directory'
    ],
    pricingTier: 'Professional',
    website: 'https://ziontechgroup.com/services/api-management-gateway',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.7,
    reviewCount: 145,
    launchDate: '2024-02-10',
    status: 'Active',
    marketPrice: '$199 - $1,499/month',
    deliveryTime: '2-3 weeks'
  },

  // Data Pipeline & ETL Platform
  {
    id: 'zion-data-pipeline-etl',
    title: 'Zion Data Pipeline & ETL Platform',
    description: 'Scalable data pipeline and ETL platform that automates data extraction, transformation, and loading processes with real-time processing capabilities.',
    category: 'Data & Analytics',
    subcategory: 'Data Engineering',
    price: {
      starter: 399,
      professional: 999,
      enterprise: 2499,
      currency: '$'
    },
    features: [
      'Real-time data streaming',
      'Batch processing pipelines',
      'Data transformation engine',
      'Schema evolution management',
      'Data quality monitoring',
      'Error handling and recovery',
      'Scalable infrastructure',
      'Multi-source connectors'
    ],
    benefits: [
      'Automate data workflows',
      'Improve data quality',
      'Reduce processing time',
      'Scale data operations',
      'Enable real-time analytics'
    ],
    targetAudience: [
      'Data engineers',
      'Data scientists',
      'Analytics teams',
      'Business intelligence teams',
      'Enterprise organizations'
    ],
    useCases: [
      'Data warehouse automation',
      'Real-time analytics',
      'Customer data integration',
      'IoT data processing',
      'Business intelligence automation'
    ],
    integration: [
      'Apache Kafka',
      'Apache Spark',
      'Snowflake',
      'BigQuery',
      'Redshift',
      'PostgreSQL',
      'MongoDB',
      'REST APIs'
    ],
    pricingTier: 'Professional',
    website: 'https://ziontechgroup.com/services/data-pipeline-etl',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.9,
    reviewCount: 167,
    launchDate: '2024-01-30',
    status: 'Active',
    marketPrice: '$399 - $2,499/month',
    deliveryTime: '4-5 weeks'
  },

  // Network Security & Monitoring
  {
    id: 'zion-network-security-monitoring',
    title: 'Zion Network Security & Monitoring',
    description: 'Advanced network security and monitoring platform that provides real-time threat detection, network visibility, and automated incident response.',
    category: 'Network Security',
    subcategory: 'Threat Detection',
    price: {
      starter: 499,
      professional: 1299,
      enterprise: 2999,
      currency: '$'
    },
    features: [
      'Real-time threat detection',
      'Network traffic analysis',
      'Behavioral analytics',
      'Automated incident response',
      'Vulnerability scanning',
      'Compliance reporting',
      'SIEM integration',
      '24/7 monitoring'
    ],
    benefits: [
      'Detect threats in real-time',
      'Reduce incident response time',
      'Improve network visibility',
      'Automate security operations',
      'Maintain compliance'
    ],
    targetAudience: [
      'Network administrators',
      'Security analysts',
      'CISOs and security teams',
      'IT managers',
      'Enterprise organizations'
    ],
    useCases: [
      'Network security monitoring',
      'Threat hunting',
      'Incident response',
      'Compliance monitoring',
      'Security operations center'
    ],
    integration: [
      'Splunk',
      'ELK Stack',
      'Cisco',
      'Palo Alto Networks',
      'Fortinet',
      'Active Directory',
      'LDAP',
      'SIEM systems'
    ],
    pricingTier: 'Professional',
    website: 'https://ziontechgroup.com/services/network-security-monitoring',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.8,
    reviewCount: 203,
    launchDate: '2024-02-05',
    status: 'Active',
    marketPrice: '$499 - $2,999/month',
    deliveryTime: '3-4 weeks'
  },

  // Cloud Migration & Modernization
  {
    id: 'zion-cloud-migration-modernization',
    title: 'Zion Cloud Migration & Modernization',
    description: 'Comprehensive cloud migration and modernization platform that helps organizations transition to cloud-native architectures with minimal disruption.',
    category: 'Cloud & Infrastructure',
    subcategory: 'Migration & Modernization',
    price: {
      starter: 999,
      professional: 2499,
      enterprise: 4999,
      currency: '$'
    },
    features: [
      'Migration assessment tools',
      'Automated migration workflows',
      'Application modernization',
      'Performance optimization',
      'Cost analysis and planning',
      'Security and compliance',
      'Training and support',
      'Post-migration monitoring'
    ],
    benefits: [
      'Reduce migration risks',
      'Accelerate cloud adoption',
      'Optimize cloud costs',
      'Improve application performance',
      'Enhance security posture'
    ],
    targetAudience: [
      'IT directors',
      'Cloud architects',
      'DevOps teams',
      'Enterprise organizations',
      'Digital transformation teams'
    ],
    useCases: [
      'Legacy application migration',
      'Data center consolidation',
      'Application modernization',
      'Multi-cloud strategies',
      'Disaster recovery planning'
    ],
    integration: [
      'AWS Migration Hub',
      'Azure Migrate',
      'Google Cloud Migrate',
      'VMware',
      'Hyper-V',
      'Docker',
      'Kubernetes',
      'Terraform'
    ],
    pricingTier: 'Enterprise',
    website: 'https://ziontechgroup.com/services/cloud-migration-modernization',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.9,
    reviewCount: 89,
    launchDate: '2024-02-20',
    status: 'Active',
    marketPrice: '$999 - $4,999/month',
    deliveryTime: '6-8 weeks'
  }
];

export const SPECIALIZED_IT_CATEGORIES = [
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
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0c6c
  }
];

export const CONTACT_INFO = {
<<<<<<< HEAD
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown DE 19709',
  website: 'https://ziontechgroup.com'
=======
  mobile: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008, Middletown DE 19709",
  website: "https://ziontechgroup.com"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0c6c
};
=======
    technology: ["AI/ML", "Computer Vision", "3D Modeling", "Cloud Computing", "Mobile Development"],
    integrations: ["MLS Systems", "Property Management Software", "Payment Processors", "Insurance APIs"],
    compliance: ["Fair Housing Laws", "Real Estate Regulations", "GDPR", "SOC 2"],
    roi: "400% within 10 months",
    competitors: ["Buildium", "AppFolio", "Yardi", "RealPage"],
    freeTrial: true,
    freeTrialDays: 21,
    demoUrl: "https://demo.ziontechgroup.com/proptech",
    industryFocus: ["Real Estate", "Property Management", "Construction", "Development"]
  }
];
>>>>>>> origin/cursor/expand-services-and-deploy-updates-9c54
