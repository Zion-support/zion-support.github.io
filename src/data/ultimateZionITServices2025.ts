export interface UltimateZionITService {
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
  competitors: string[];
  demoUrl?: string;
  caseStudies?: string[];
  websiteUrl?: string;
  marketTrend: string;
  industryFocus: string[];
  scalability: string;
  customizationLevel: string;
  specialOffer?: string;
  freeTrial?: string;
}

export const ULTIMATE_ZION_IT_SERVICES_2025: UltimateZionITService[] = [
  // Cloud Infrastructure & Migration Services
  {
    id: "cloud-migration-transformation",
    title: "Cloud Migration & Digital Transformation Services",
    description: "Comprehensive cloud migration and digital transformation services that help organizations modernize their infrastructure, reduce costs, and improve operational efficiency.",
    category: "Cloud & Infrastructure",
    subcategory: "Migration & Transformation",
    price: 15000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Cloud readiness assessment and planning",
      "Application modernization and refactoring",
      "Data migration and synchronization",
      "Infrastructure as Code (IaC) implementation",
      "Multi-cloud strategy and management",
      "Performance optimization and monitoring",
      "Security and compliance implementation",
      "Disaster recovery and backup solutions",
      "Training and knowledge transfer",
      "24/7 support and maintenance"
    ],
    benefits: [
      "Reduce infrastructure costs by 30-50%",
      "Improve application performance by 40%",
      "Increase operational efficiency by 60%",
      "Enhance security and compliance",
      "Enable rapid scaling and innovation"
    ],
    useCases: [
      "Legacy system modernization",
      "Data center consolidation",
      "Application migration to cloud",
      "Digital transformation initiatives",
      "Hybrid cloud implementation"
    ],
    targetAudience: [
      "Enterprise organizations",
      "Government agencies",
      "Healthcare institutions",
      "Financial services",
      "Manufacturing companies"
    ],
    tags: ["Cloud Migration", "Digital Transformation", "Infrastructure Modernization", "Multi-Cloud", "DevOps"],
    estimatedDelivery: "3-6 months",
    supportLevel: "enterprise",
    marketPrice: "$15,000 - $100,000+",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"],
    integrations: ["VMware", "Hyper-V", "OpenStack", "Ansible", "Jenkins", "GitLab"],
    compliance: ["SOC 2", "ISO 27001", "NIST", "FedRAMP", "HIPAA"],
    roi: "300% within 18 months",
    competitors: ["Accenture", "Deloitte", "IBM", "Capgemini", "Infosys"],
    demoUrl: "https://ziontechgroup.com/demo/cloud-migration",
    caseStudies: ["Fortune 500 40% cost reduction", "Government agency 60% efficiency improvement"],
    marketTrend: "Cloud migration market growing at 25% annually",
    industryFocus: ["Technology", "Finance", "Healthcare", "Government", "Manufacturing"],
    scalability: "Enterprise-grade with unlimited scalability",
    customizationLevel: "Fully customizable for specific requirements",
    specialOffer: "Free cloud readiness assessment",
    freeTrial: "30-day proof of concept"
  },

  // DevOps & CI/CD Automation Services
  {
    id: "devops-cicd-automation",
    title: "DevOps & CI/CD Automation Platform",
    description: "Comprehensive DevOps and CI/CD automation platform that streamlines software development, testing, and deployment processes for faster, more reliable releases.",
    category: "DevOps & Automation",
    subcategory: "CI/CD & Pipeline Automation",
    price: 2999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated CI/CD pipeline setup and management",
      "Infrastructure as Code (IaC) automation",
      "Container orchestration with Kubernetes",
      "Automated testing and quality assurance",
      "Deployment automation and rollback",
      "Monitoring and observability tools",
      "Security scanning and compliance",
      "Performance optimization",
      "Team collaboration and workflow management",
      "API and microservices management"
    ],
    benefits: [
      "Reduce deployment time by 80%",
      "Improve code quality by 60%",
      "Reduce production incidents by 70%",
      "Increase development velocity by 3x",
      "Enable continuous innovation"
    ],
    useCases: [
      "Software development automation",
      "Microservices deployment",
      "Cloud-native application development",
      "Legacy application modernization",
      "Multi-environment management"
    ],
    targetAudience: [
      "Software development teams",
      "DevOps engineers",
      "IT operations teams",
      "Startups and scale-ups",
      "Enterprise development teams"
    ],
    tags: ["DevOps", "CI/CD", "Automation", "Kubernetes", "Infrastructure as Code"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,999 - $8,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Jenkins", "GitLab CI", "GitHub Actions", "Kubernetes", "Docker", "Terraform"],
    integrations: ["AWS", "Azure", "Google Cloud", "GitHub", "GitLab", "Jira"],
    compliance: ["SOC 2", "ISO 27001", "GDPR", "PCI DSS"],
    roi: "400% within 12 months",
    competitors: ["GitLab", "Jenkins", "CircleCI", "Travis CI", "Bamboo"],
    demoUrl: "https://ziontechgroup.com/demo/devops-automation",
    caseStudies: ["Startup 80% faster deployments", "Enterprise 70% incident reduction"],
    marketTrend: "DevOps market expected to reach $25B by 2027",
    industryFocus: ["Technology", "Finance", "Healthcare", "E-commerce", "Manufacturing"],
    scalability: "Unlimited pipelines and deployments",
    customizationLevel: "Highly customizable for specific workflows",
    specialOffer: "First 3 months 25% off",
    freeTrial: "30-day free trial with full features"
  },

  // Enterprise Security & Compliance Services
  {
    id: "enterprise-security-compliance",
    title: "Enterprise Security & Compliance Management",
    description: "Comprehensive enterprise security and compliance services that protect organizations from cyber threats while ensuring regulatory compliance across all industries.",
    category: "Security & Compliance",
    subcategory: "Enterprise Security",
    price: 5000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Comprehensive security assessment and audit",
      "Threat detection and response systems",
      "Identity and access management (IAM)",
      "Data protection and encryption",
      "Security monitoring and analytics",
      "Compliance reporting and monitoring",
      "Incident response and recovery",
      "Security awareness training",
      "Vendor security assessment",
      "24/7 security operations center (SOC)"
    ],
    benefits: [
      "Reduce security incidents by 80%",
      "Achieve 100% compliance with regulations",
      "Protect against advanced threats",
      "Reduce security costs by 30%",
      "Build customer trust and confidence"
    ],
    useCases: [
      "Enterprise security implementation",
      "Compliance management",
      "Data protection",
      "Incident response",
      "Security training"
    ],
    targetAudience: [
      "Large enterprises",
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Educational institutions"
    ],
    tags: ["Enterprise Security", "Compliance", "Threat Detection", "IAM", "Data Protection"],
    estimatedDelivery: "2-4 months",
    supportLevel: "enterprise",
    marketPrice: "$5,000 - $20,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["SIEM", "EDR", "IAM", "DLP", "Encryption", "Zero Trust"],
    integrations: ["Active Directory", "Okta", "CrowdStrike", "Splunk", "IBM QRadar"],
    compliance: ["SOC 2", "ISO 27001", "NIST", "GDPR", "HIPAA", "PCI DSS"],
    roi: "500% within 24 months",
    competitors: ["Deloitte", "PwC", "EY", "KPMG", "Accenture"],
    demoUrl: "https://ziontechgroup.com/demo/enterprise-security",
    caseStudies: ["Fortune 100 80% incident reduction", "Healthcare 100% HIPAA compliance"],
    marketTrend: "Enterprise security market growing at 30% annually",
    industryFocus: ["Finance", "Healthcare", "Government", "Technology", "Manufacturing"],
    scalability: "Enterprise-grade with unlimited users",
    customizationLevel: "Fully customizable for specific requirements",
    specialOffer: "Free security assessment",
    freeTrial: "60-day pilot program"
  },

  // Data Analytics & Business Intelligence Services
  {
    id: "data-analytics-business-intelligence",
    title: "Data Analytics & Business Intelligence Solutions",
    description: "Advanced data analytics and business intelligence services that transform raw data into actionable insights, enabling data-driven decision making across organizations.",
    category: "Data & Analytics",
    subcategory: "Business Intelligence",
    price: 3999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Data warehouse design and implementation",
      "ETL/ELT pipeline development",
      "Real-time data processing and streaming",
      "Advanced analytics and machine learning",
      "Interactive dashboards and reporting",
      "Data governance and quality management",
      "Predictive analytics and forecasting",
      "Natural language query interface",
      "Mobile analytics and alerts",
      "API and data integration services"
    ],
    benefits: [
      "Improve decision-making speed by 70%",
      "Increase revenue by 15-25%",
      "Reduce operational costs by 20%",
      "Identify new business opportunities",
      "Enable predictive business insights"
    ],
    useCases: [
      "Business performance analysis",
      "Customer behavior insights",
      "Operational efficiency optimization",
      "Risk assessment and management",
      "Market trend analysis"
    ],
    targetAudience: [
      "Business analysts",
      "Data scientists",
      "Executive leadership",
      "Operations managers",
      "Marketing teams"
    ],
    tags: ["Data Analytics", "Business Intelligence", "Data Warehouse", "Machine Learning", "Predictive Analytics"],
    estimatedDelivery: "3-5 months",
    supportLevel: "enterprise",
    marketPrice: "$3,999 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Python", "R", "SQL", "Apache Spark", "Kafka", "Snowflake"],
    integrations: ["Salesforce", "SAP", "Oracle", "Microsoft", "Google Analytics"],
    compliance: ["SOC 2", "GDPR", "CCPA", "ISO 27001"],
    roi: "600% within 18 months",
    competitors: ["Tableau", "Power BI", "Looker", "Qlik", "Sisense"],
    demoUrl: "https://ziontechgroup.com/demo/data-analytics",
    caseStudies: ["Retailer 25% revenue increase", "Manufacturer 30% cost reduction"],
    marketTrend: "Data analytics market expected to reach $40B by 2027",
    industryFocus: ["Technology", "Finance", "Retail", "Healthcare", "Manufacturing"],
    scalability: "Unlimited data processing and users",
    customizationLevel: "Highly customizable for specific business needs",
    specialOffer: "First 6 months 20% off",
    freeTrial: "90-day pilot program"
  },

  // Network Infrastructure & SD-WAN Services
  {
    id: "network-infrastructure-sdwan",
    title: "Network Infrastructure & SD-WAN Solutions",
    description: "Advanced network infrastructure and SD-WAN services that provide secure, scalable, and high-performance networking solutions for modern enterprises.",
    category: "Network & Infrastructure",
    subcategory: "SD-WAN & Networking",
    price: 2500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "SD-WAN design and implementation",
      "Network security and firewall management",
      "Load balancing and traffic optimization",
      "Network monitoring and analytics",
      "Disaster recovery and failover",
      "Quality of Service (QoS) management",
      "Bandwidth optimization",
      "Remote access and VPN solutions",
      "Network automation and orchestration",
      "24/7 network operations center (NOC)"
    ],
    benefits: [
      "Reduce network costs by 40%",
      "Improve network performance by 60%",
      "Increase network reliability by 90%",
      "Simplify network management",
      "Enable rapid scaling and deployment"
    ],
    useCases: [
      "Branch office connectivity",
      "Cloud application optimization",
      "Remote workforce support",
      "Network consolidation",
      "Disaster recovery"
    ],
    targetAudience: [
      "Multi-location businesses",
      "Healthcare organizations",
      "Financial institutions",
      "Educational institutions",
      "Government agencies"
    ],
    tags: ["SD-WAN", "Network Infrastructure", "Network Security", "Load Balancing", "Network Automation"],
    estimatedDelivery: "2-3 months",
    supportLevel: "enterprise",
    marketPrice: "$2,500 - $8,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Cisco", "Juniper", "Fortinet", "VMware", "Arista", "Cumulus"],
    integrations: ["AWS", "Azure", "Google Cloud", "Office 365", "Salesforce"],
    compliance: ["SOC 2", "ISO 27001", "NIST", "FedRAMP"],
    roi: "400% within 18 months",
    competitors: ["Cisco", "VMware", "Fortinet", "Juniper", "Silver Peak"],
    demoUrl: "https://ziontechgroup.com/demo/network-infrastructure",
    caseStudies: ["Multi-location business 40% cost reduction", "Healthcare 90% reliability improvement"],
    marketTrend: "SD-WAN market growing at 35% annually",
    industryFocus: ["Technology", "Healthcare", "Finance", "Education", "Government"],
    scalability: "Unlimited locations and bandwidth",
    customizationLevel: "Highly customizable for specific requirements",
    specialOffer: "Free network assessment",
    freeTrial: "60-day pilot program"
  },

  // Managed IT Services & Support
  {
    id: "managed-it-services-support",
    title: "Managed IT Services & 24/7 Support",
    description: "Comprehensive managed IT services that provide proactive monitoring, maintenance, and support for all IT infrastructure, ensuring maximum uptime and performance.",
    category: "Managed Services",
    subcategory: "IT Support & Management",
    price: 1500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "24/7 proactive monitoring and alerting",
      "Remote and on-site technical support",
      "Infrastructure maintenance and updates",
      "Backup and disaster recovery management",
      "Security monitoring and management",
      "Performance optimization and tuning",
      "Asset management and inventory",
      "Vendor management and coordination",
      "Strategic IT planning and consulting",
      "Monthly reporting and analytics"
    ],
    benefits: [
      "Reduce IT downtime by 80%",
      "Lower IT costs by 30-50%",
      "Improve system performance by 40%",
      "Free internal IT staff for strategic work",
      "Ensure business continuity"
    ],
    useCases: [
      "IT infrastructure management",
      "Help desk and support services",
      "System administration",
      "Network management",
      "Security management"
    ],
    targetAudience: [
      "Small to medium businesses",
      "Healthcare practices",
      "Legal firms",
      "Financial services",
      "Manufacturing companies"
    ],
    tags: ["Managed IT", "24/7 Support", "Proactive Monitoring", "Infrastructure Management", "Help Desk"],
    estimatedDelivery: "2-4 weeks",
    supportLevel: "premium",
    marketPrice: "$1,500 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["RMM Tools", "PSA Systems", "Monitoring Tools", "Backup Solutions", "Security Tools"],
    integrations: ["ConnectWise", "Kaseya", "Datto", "SolarWinds", "Veeam"],
    compliance: ["SOC 2", "ISO 27001", "HIPAA", "PCI DSS"],
    roi: "300% within 12 months",
    competitors: ["ConnectWise", "Kaseya", "Datto", "SolarWinds", "N-able"],
    demoUrl: "https://ziontechgroup.com/demo/managed-it-services",
    caseStudies: ["SMB 80% downtime reduction", "Healthcare practice 50% cost savings"],
    marketTrend: "Managed IT services market growing at 20% annually",
    industryFocus: ["SMB", "Healthcare", "Legal", "Finance", "Manufacturing"],
    scalability: "Unlimited users and devices",
    customizationLevel: "Highly customizable service packages",
    specialOffer: "First 3 months 25% off",
    freeTrial: "30-day free trial"
  },

  // Digital Transformation & Innovation Services
  {
    id: "digital-transformation-innovation",
    title: "Digital Transformation & Innovation Consulting",
    description: "Strategic digital transformation and innovation consulting services that help organizations embrace new technologies and transform their business models for the digital age.",
    category: "Digital Transformation",
    subcategory: "Strategy & Consulting",
    price: 8000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Digital maturity assessment and strategy",
      "Technology roadmap development",
      "Change management and training",
      "Process optimization and automation",
      "Customer experience transformation",
      "Innovation lab setup and management",
      "Emerging technology evaluation",
      "Digital culture development",
      "Performance measurement and KPIs",
      "Ongoing innovation support"
    ],
    benefits: [
      "Increase operational efficiency by 40%",
      "Improve customer satisfaction by 60%",
      "Reduce operational costs by 25%",
      "Enable new revenue streams",
      "Build competitive advantage"
    ],
    useCases: [
      "Business model transformation",
      "Customer experience improvement",
      "Process automation",
      "Technology modernization",
      "Innovation strategy development"
    ],
    targetAudience: [
      "Enterprise organizations",
      "Government agencies",
      "Healthcare institutions",
      "Financial services",
      "Manufacturing companies"
    ],
    tags: ["Digital Transformation", "Innovation", "Strategy", "Change Management", "Process Optimization"],
    estimatedDelivery: "4-8 months",
    supportLevel: "enterprise",
    marketPrice: "$8,000 - $50,000+",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["AI/ML", "RPA", "IoT", "Blockchain", "Cloud", "Mobile"],
    integrations: ["ERP Systems", "CRM Systems", "Legacy Systems", "Cloud Platforms"],
    compliance: ["Industry-specific regulations", "Data privacy", "Security standards"],
    roi: "400% within 24 months",
    competitors: ["McKinsey", "BCG", "Bain", "Deloitte", "Accenture"],
    demoUrl: "https://ziontechgroup.com/demo/digital-transformation",
    caseStudies: ["Manufacturer 40% efficiency improvement", "Retailer 60% customer satisfaction increase"],
    marketTrend: "Digital transformation market expected to reach $3.3T by 2027",
    industryFocus: ["All Industries", "Technology", "Finance", "Healthcare", "Manufacturing"],
    scalability: "Enterprise-grade transformation programs",
    customizationLevel: "Fully customizable transformation strategies",
    specialOffer: "Free digital maturity assessment",
    freeTrial: "90-day strategy workshop"
  },

  // IoT & Edge Computing Solutions
  {
    id: "iot-edge-computing-solutions",
    title: "IoT & Edge Computing Platform Solutions",
    description: "Advanced IoT and edge computing solutions that enable organizations to collect, process, and analyze data from connected devices in real-time for improved decision making.",
    category: "IoT & Edge Computing",
    subcategory: "Platform Solutions",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "IoT device management and connectivity",
      "Edge computing infrastructure setup",
      "Real-time data processing and analytics",
      "Device security and authentication",
      "Data visualization and dashboards",
      "Predictive maintenance and alerts",
      "Integration with existing systems",
      "Scalable cloud infrastructure",
      "Mobile app for monitoring",
      "API and SDK development"
    ],
    benefits: [
      "Reduce operational costs by 30%",
      "Improve asset utilization by 40%",
      "Enable predictive maintenance",
      "Increase operational efficiency",
      "Real-time decision making"
    ],
    useCases: [
      "Smart manufacturing",
      "Asset monitoring",
      "Predictive maintenance",
      "Environmental monitoring",
      "Supply chain tracking"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Utilities and energy",
      "Transportation and logistics",
      "Healthcare facilities",
      "Smart cities"
    ],
    tags: ["IoT", "Edge Computing", "Device Management", "Real-time Analytics", "Predictive Maintenance"],
    estimatedDelivery: "3-5 months",
    supportLevel: "enterprise",
    marketPrice: "$3,500 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["AWS IoT", "Azure IoT", "Google Cloud IoT", "Kubernetes", "Docker", "MQTT"],
    integrations: ["ERP Systems", "SCADA Systems", "MES Systems", "Cloud Platforms"],
    compliance: ["ISO 27001", "NIST", "Industry-specific standards"],
    roi: "500% within 18 months",
    competitors: ["AWS IoT", "Azure IoT", "Google Cloud IoT", "PTC", "Siemens"],
    demoUrl: "https://ziontechgroup.com/demo/iot-edge-computing",
    caseStudies: ["Manufacturer 30% cost reduction", "Utility 40% efficiency improvement"],
    marketTrend: "IoT market expected to reach $1.1T by 2027",
    industryFocus: ["Manufacturing", "Utilities", "Transportation", "Healthcare", "Smart Cities"],
    scalability: "Unlimited devices and data processing",
    customizationLevel: "Highly customizable for specific use cases",
    specialOffer: "First 6 months 20% off",
    freeTrial: "90-day pilot program"
  },

  // Blockchain & Web3 Development Services
  {
    id: "blockchain-web3-development",
    title: "Blockchain & Web3 Development Services",
    description: "Comprehensive blockchain and Web3 development services that help organizations build decentralized applications, smart contracts, and blockchain-based solutions.",
    category: "Blockchain & Web3",
    subcategory: "Development Services",
    price: 4500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Smart contract development and deployment",
      "DeFi application development",
      "NFT marketplace creation",
      "Blockchain infrastructure setup",
      "Web3 integration services",
      "Cryptocurrency wallet development",
      "DApp frontend and backend",
      "Blockchain consulting and strategy",
      "Security auditing and testing",
      "Ongoing maintenance and support"
    ],
    benefits: [
      "Enable new business models",
      "Increase transparency and trust",
      "Reduce transaction costs",
      "Improve security and immutability",
      "Access global markets"
    ],
    useCases: [
      "Supply chain transparency",
      "Digital identity management",
      "Asset tokenization",
      "Decentralized finance",
      "Gaming and metaverse"
    ],
    targetAudience: [
      "Financial institutions",
      "Supply chain companies",
      "Gaming companies",
      "Real estate firms",
      "Healthcare organizations"
    ],
    tags: ["Blockchain", "Web3", "Smart Contracts", "DeFi", "NFTs", "DApps"],
    estimatedDelivery: "3-6 months",
    supportLevel: "enterprise",
    marketPrice: "$4,500 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Ethereum", "Polygon", "Solana", "React", "Node.js", "Solidity"],
    integrations: ["Web3 Wallets", "DeFi Protocols", "NFT Marketplaces", "Traditional Systems"],
    compliance: ["Regulatory compliance", "Security standards", "Industry regulations"],
    roi: "600% within 24 months",
    competitors: ["ConsenSys", "Alchemy", "Chainlink", "OpenZeppelin", "Truffle"],
    demoUrl: "https://ziontechgroup.com/demo/blockchain-web3",
    caseStudies: ["Supply chain 100% transparency", "Financial institution 50% cost reduction"],
    marketTrend: "Blockchain market expected to reach $163B by 2027",
    industryFocus: ["Finance", "Supply Chain", "Gaming", "Real Estate", "Healthcare"],
    scalability: "Unlimited transactions and users",
    customizationLevel: "Fully customizable blockchain solutions",
    specialOffer: "Free blockchain consultation",
    freeTrial: "60-day proof of concept"
  }
];

export default ULTIMATE_ZION_IT_SERVICES_2025;