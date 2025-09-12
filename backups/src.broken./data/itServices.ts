export interface ITService {
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
}

export const IT_SERVICES: ITService[] = [
  // Cloud Infrastructure & DevOps
  {
    id: "cloud-infrastructure-devops",
    title: "Cloud Infrastructure & DevOps Services",
    description: "Comprehensive cloud infrastructure and DevOps services that enable organizations to build, deploy, and manage scalable applications with modern cloud-native technologies.",
    category: "Cloud & DevOps",
    subcategory: "Infrastructure as Code",
    price: 4500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-cloud infrastructure design",
      "Infrastructure as Code (IaC)",
      "CI/CD pipeline automation",
      "Container orchestration",
      "Microservices architecture",
      "Auto-scaling solutions",
      "Monitoring and alerting",
      "Security and compliance",
      "Disaster recovery",
      "Performance optimization"
    ],
    benefits: [
      "Reduce infrastructure costs by 30%",
      "Improve deployment speed by 80%",
      "Enhanced scalability and reliability",
      "Automated operations",
      "Better security posture"
    ],
    useCases: [
      "Application modernization",
      "Cloud migration",
      "DevOps transformation",
      "Microservices deployment",
      "High-availability systems"
    ],
    targetAudience: [
      "Technology companies",
      "Enterprises",
      "Startups",
      "Digital agencies",
      "IT departments"
    ],
    tags: ["Cloud", "DevOps", "Infrastructure", "Automation", "Microservices"],
    estimatedDelivery: "8-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,500 - $15,000/month",
    roi: "250-400%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Digital Transformation Consulting
  {
    id: "digital-transformation-consulting",
    title: "Digital Transformation Consulting",
    description: "Strategic digital transformation consulting services that help organizations modernize their business processes, technology stack, and organizational culture for the digital age.",
    category: "Digital Transformation",
    subcategory: "Strategic Consulting",
    price: 8000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Digital maturity assessment",
      "Technology roadmap planning",
      "Process optimization",
      "Change management",
      "Digital strategy development",
      "Technology selection",
      "Implementation planning",
      "Training and enablement",
      "Performance measurement",
      "Continuous improvement"
    ],
    benefits: [
      "Accelerate digital transformation by 40%",
      "Improve operational efficiency by 35%",
      "Enhanced customer experience",
      "Competitive advantage",
      "Future-ready organization"
    ],
    useCases: [
      "Business process modernization",
      "Technology stack transformation",
      "Organizational change management",
      "Customer experience improvement",
      "Operational efficiency optimization"
    ],
    targetAudience: [
      "Enterprise organizations",
      "Mid-market companies",
      "Government agencies",
      "Healthcare organizations",
      "Financial institutions"
    ],
    tags: ["Digital Transformation", "Consulting", "Strategy", "Change Management", "Process Optimization"],
    estimatedDelivery: "12-24 weeks",
    supportLevel: "enterprise",
    marketPrice: "$8,000 - $50,000/project",
    roi: "300-600%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Cybersecurity Services
  {
    id: "cybersecurity-services",
    title: "Comprehensive Cybersecurity Services",
    description: "End-to-end cybersecurity services including security assessment, threat detection, incident response, and compliance management to protect organizations from evolving cyber threats.",
    category: "Cybersecurity",
    subcategory: "Security Services",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Security assessment and audit",
      "Threat detection and response",
      "Vulnerability management",
      "Security monitoring",
      "Incident response",
      "Compliance management",
      "Security training",
      "Penetration testing",
      "Security architecture design",
      "24/7 security operations"
    ],
    benefits: [
      "Reduce security incidents by 70%",
      "Improve threat detection by 90%",
      "Ensure compliance",
      "Protect business reputation",
      "Minimize financial losses"
    ],
    useCases: [
      "Security program development",
      "Compliance management",
      "Incident response",
      "Security awareness training",
      "Security architecture review"
    ],
    targetAudience: [
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Technology companies",
      "Manufacturing companies"
    ],
    tags: ["Cybersecurity", "Security", "Compliance", "Threat Detection", "Incident Response"],
    estimatedDelivery: "8-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,500 - $12,000/month",
    roi: "200-400%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Data Analytics & Business Intelligence
  {
    id: "data-analytics-bi",
    title: "Data Analytics & Business Intelligence",
    description: "Advanced data analytics and business intelligence services that transform raw data into actionable insights for informed decision-making and business growth.",
    category: "Data & Analytics",
    subcategory: "Business Intelligence",
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Data strategy development",
      "Data warehouse design",
      "ETL pipeline development",
      "Dashboard creation",
      "Predictive analytics",
      "Data visualization",
      "Report automation",
      "Data quality management",
      "Performance optimization",
      "User training and support"
    ],
    benefits: [
      "Improve decision-making by 60%",
      "Increase operational efficiency by 25%",
      "Data-driven insights",
      "Automated reporting",
      "Better resource allocation"
    ],
    useCases: [
      "Business performance analysis",
      "Customer behavior insights",
      "Operational efficiency optimization",
      "Financial reporting",
      "Market trend analysis"
    ],
    targetAudience: [
      "Business analysts",
      "Data scientists",
      "Executives",
      "Marketing teams",
      "Operations teams"
    ],
    tags: ["Data Analytics", "Business Intelligence", "Data Warehouse", "Reporting", "Predictive Analytics"],
    estimatedDelivery: "8-16 weeks",
    supportLevel: "premium",
    marketPrice: "$2,800 - $9,500/month",
    roi: "250-400%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // IT Infrastructure Management
  {
    id: "it-infrastructure-management",
    title: "IT Infrastructure Management",
    description: "Comprehensive IT infrastructure management services including network management, server administration, storage solutions, and IT operations optimization.",
    category: "IT Infrastructure",
    subcategory: "Infrastructure Management",
    price: 2200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Network design and management",
      "Server administration",
      "Storage management",
      "Backup and recovery",
      "Performance monitoring",
      "Capacity planning",
      "Security management",
      "Disaster recovery",
      "IT operations automation",
      "24/7 support and monitoring"
    ],
    benefits: [
      "Reduce IT operational costs by 25%",
      "Improve system availability by 99.9%",
      "Enhanced security and compliance",
      "Automated operations",
      "Better resource utilization"
    ],
    useCases: [
      "Infrastructure optimization",
      "System administration",
      "Network management",
      "Storage optimization",
      "IT operations improvement"
    ],
    targetAudience: [
      "Small to medium businesses",
      "Enterprises",
      "Educational institutions",
      "Healthcare organizations",
      "Government agencies"
    ],
    tags: ["IT Infrastructure", "Network Management", "Server Administration", "Storage", "IT Operations"],
    estimatedDelivery: "6-12 weeks",
    supportLevel: "premium",
    marketPrice: "$2,200 - $7,500/month",
    roi: "200-350%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Application Development & Modernization
  {
    id: "app-development-modernization",
    title: "Application Development & Modernization",
    description: "Custom application development and legacy system modernization services that help organizations build scalable, secure, and user-friendly applications.",
    category: "Application Development",
    subcategory: "Custom Development",
    price: 4000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Custom application development",
      "Legacy system modernization",
      "API development",
      "Mobile app development",
      "Web application development",
      "Database design",
      "User experience design",
      "Testing and quality assurance",
      "Deployment and maintenance",
      "Technical support"
    ],
    benefits: [
      "Accelerate development by 40%",
      "Improve user experience by 50%",
      "Enhanced system performance",
      "Better security and compliance",
      "Reduced maintenance costs"
    ],
    useCases: [
      "Custom business applications",
      "Legacy system replacement",
      "Mobile app development",
      "API development",
      "System integration"
    ],
    targetAudience: [
      "Technology companies",
      "Enterprises",
      "Startups",
      "Digital agencies",
      "Government agencies"
    ],
    tags: ["Application Development", "Custom Development", "Legacy Modernization", "Mobile Apps", "Web Development"],
    estimatedDelivery: "12-24 weeks",
    supportLevel: "premium",
    marketPrice: "$4,000 - $15,000/month",
    roi: "300-500%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // IT Consulting & Strategy
  {
    id: "it-consulting-strategy",
    title: "IT Consulting & Strategy Services",
    description: "Strategic IT consulting services that help organizations align technology with business objectives, optimize IT investments, and drive digital innovation.",
    category: "IT Consulting",
    subcategory: "Strategic Consulting",
    price: 6000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "IT strategy development",
      "Technology assessment",
      "Architecture planning",
      "Vendor selection",
      "Project management",
      "Change management",
      "Performance optimization",
      "Cost optimization",
      "Risk assessment",
      "Technology roadmap"
    ],
    benefits: [
      "Optimize IT investments by 30%",
      "Improve technology alignment by 50%",
      "Enhanced operational efficiency",
      "Better risk management",
      "Strategic technology planning"
    ],
    useCases: [
      "IT strategy development",
      "Technology assessment",
      "Architecture planning",
      "Vendor selection",
      "Project management"
    ],
    targetAudience: [
      "Enterprise organizations",
      "Mid-market companies",
      "Government agencies",
      "Healthcare organizations",
      "Financial institutions"
    ],
    tags: ["IT Consulting", "Strategy", "Architecture", "Project Management", "Technology Planning"],
    estimatedDelivery: "8-20 weeks",
    supportLevel: "enterprise",
    marketPrice: "$6,000 - $40,000/project",
    roi: "250-500%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Managed IT Services
  {
    id: "managed-it-services",
    title: "Managed IT Services",
    description: "Comprehensive managed IT services that provide proactive monitoring, maintenance, and support for organizations' IT infrastructure and applications.",
    category: "Managed Services",
    subcategory: "IT Management",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "24/7 monitoring and support",
      "Proactive maintenance",
      "Help desk support",
      "Security management",
      "Backup and recovery",
      "Performance optimization",
      "Patch management",
      "Asset management",
      "Compliance monitoring",
      "Regular reporting"
    ],
    benefits: [
      "Reduce IT costs by 20%",
      "Improve system uptime by 99.9%",
      "Proactive issue resolution",
      "Enhanced security",
      "Predictable IT costs"
    ],
    useCases: [
      "IT infrastructure management",
      "Application support",
      "Security management",
      "Compliance monitoring",
      "Performance optimization"
    ],
    targetAudience: [
      "Small to medium businesses",
      "Enterprises",
      "Educational institutions",
      "Healthcare organizations",
      "Non-profit organizations"
    ],
    tags: ["Managed Services", "IT Management", "24/7 Support", "Proactive Maintenance", "Help Desk"],
    estimatedDelivery: "4-8 weeks",
    supportLevel: "premium",
    marketPrice: "$1,800 - $6,500/month",
    roi: "200-350%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Green IT Solutions
  {
    id: "green-it-solutions",
    title: "Green IT Solutions",
    description: "Sustainable IT solutions that help organizations reduce their environmental impact through energy-efficient technology, sustainable practices, and green computing initiatives.",
    category: "Green IT",
    subcategory: "Sustainability",
    price: 2500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Energy-efficient infrastructure",
      "Sustainable technology practices",
      "Carbon footprint reduction",
      "Green computing initiatives",
      "Energy monitoring",
      "Waste reduction",
      "Sustainable procurement",
      "Environmental reporting",
      "Compliance management",
      "Sustainability consulting"
    ],
    benefits: [
      "Reduce energy costs by 25%",
      "Improve environmental impact",
      "Enhanced corporate social responsibility",
      "Compliance with regulations",
      "Cost savings through efficiency"
    ],
    useCases: [
      "Energy optimization",
      "Sustainable technology deployment",
      "Environmental compliance",
      "Green procurement",
      "Sustainability reporting"
    ],
    targetAudience: [
      "Sustainability officers",
      "Facility managers",
      "Corporate executives",
      "Government agencies",
      "Educational institutions"
    ],
    tags: ["Green IT", "Sustainability", "Energy Efficiency", "Environmental Compliance", "Green Computing"],
    estimatedDelivery: "8-16 weeks",
    supportLevel: "premium",
    marketPrice: "$2,500 - $8,500/month",
    roi: "200-400%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // 5G & IoT Solutions
  {
    id: "5g-iot-solutions",
    title: "5G & IoT Solutions",
    description: "Advanced 5G and IoT solutions that enable organizations to leverage next-generation connectivity and smart device technologies for innovative business applications.",
    category: "5G & IoT",
    subcategory: "Connectivity Solutions",
    price: 3800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "5G network planning",
      "IoT device management",
      "Edge computing solutions",
      "Real-time data processing",
      "Smart city solutions",
      "Industrial IoT applications",
      "Connectivity optimization",
      "Security and privacy",
      "Performance monitoring",
      "Integration services"
    ],
    benefits: [
      "Enable new business models",
      "Improve operational efficiency by 40%",
      "Real-time data insights",
      "Enhanced connectivity",
      "Future-ready infrastructure"
    ],
    useCases: [
      "Smart city development",
      "Industrial automation",
      "Connected vehicles",
      "Smart buildings",
      "Healthcare monitoring"
    ],
    targetAudience: [
      "Telecommunications companies",
      "Manufacturing companies",
      "Smart city planners",
      "Healthcare providers",
      "Transportation companies"
    ],
    tags: ["5G", "IoT", "Edge Computing", "Smart Cities", "Industrial IoT"],
    estimatedDelivery: "12-20 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,800 - $15,000/month",
    roi: "300-500%",
    innovationLevel: "Cutting-edge",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export default IT_SERVICES;