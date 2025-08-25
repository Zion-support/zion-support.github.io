<<<<<<< HEAD
export interface AdvancedService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'subscription' | 'usage-based' | 'project-based';
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
  };
  images: string[];
  createdAt: string;
  rating: number;
  reviewCount: number;
  aiScore: number;
  location: string;
  availability: string;
  featured: boolean;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const ADVANCED_SERVICES: AdvancedService[] = [
  // AI & Machine Learning Services
  {
    id: "ai-automation-platform",
    title: "AI Process Automation Platform",
    description: "Enterprise-grade AI automation platform that streamlines business processes, reduces manual work by 80%, and provides intelligent decision-making capabilities. Includes workflow automation, document processing, and predictive analytics.",
    category: "AI & Machine Learning",
    subcategory: "Process Automation",
    price: 2500,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Visual workflow builder with drag-and-drop interface",
      "AI-powered document classification and extraction",
      "Real-time process monitoring and analytics",
      "Integration with 100+ business applications",
      "Custom AI model training for specific use cases",
      "24/7 automated support and monitoring"
    ],
    benefits: [
      "Reduce operational costs by 40-60%",
      "Improve process accuracy to 99.9%",
      "Scale operations without proportional headcount increase",
      "Real-time insights and predictive analytics",
      "Compliance and audit trail automation"
    ],
    useCases: [
      "Invoice processing and accounts payable automation",
      "Customer service ticket routing and resolution",
      "HR onboarding and document processing",
      "Sales lead qualification and follow-up",
      "Quality control and defect detection"
    ],
    targetAudience: ["Enterprise companies", "Mid-size businesses", "Financial services", "Healthcare organizations", "Manufacturing companies"],
    tags: ["AI Automation", "Process Optimization", "Workflow Management", "Document Processing", "Predictive Analytics"],
    author: {
      name: "ZionTech AI Solutions",
      id: "ziontech-ai",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 156,
    aiScore: 96,
    location: "Global",
    availability: "Immediate",
    featured: true,
    marketPrice: "$2,500/month (Industry average: $3,200/month)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-automation"
    }
  },
  {
    id: "ai-chatbot-enterprise",
    title: "Enterprise AI Chatbot & Virtual Assistant",
    description: "Custom AI-powered chatbot solution designed for enterprise customer service, sales, and internal support. Features multilingual support, sentiment analysis, and seamless integration with existing systems.",
    category: "AI & Machine Learning",
    subcategory: "Conversational AI",
    price: 1800,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Natural language processing with 95% accuracy",
      "Multi-language support (50+ languages)",
      "Sentiment analysis and emotion detection",
      "Integration with CRM, ERP, and help desk systems",
      "Custom knowledge base training",
      "Analytics dashboard and performance metrics",
      "Voice and text interface support"
    ],
    benefits: [
      "Reduce customer service costs by 30-50%",
      "Provide 24/7 customer support availability",
      "Improve customer satisfaction scores",
      "Handle multiple conversations simultaneously",
      "Gather valuable customer insights and analytics"
    ],
    useCases: [
      "Customer service and support automation",
      "Sales qualification and lead generation",
      "Internal IT help desk support",
      "Product recommendations and upselling",
      "Appointment scheduling and booking"
    ],
    targetAudience: ["E-commerce companies", "SaaS businesses", "Financial institutions", "Healthcare providers", "Educational institutions"],
    tags: ["Chatbot", "Virtual Assistant", "Customer Service", "NLP", "Sentiment Analysis"],
    author: {
      name: "ZionTech Conversational AI",
      id: "ziontech-chatbot",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    aiScore: 94,
    location: "Global",
    availability: "2-3 weeks",
    featured: true,
    marketPrice: "$1,800/month (Industry average: $2,400/month)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-chatbot"
    }
  },

  // Cloud & DevOps Services
  {
    id: "cloud-migration-expert",
    title: "Enterprise Cloud Migration & Optimization",
    description: "End-to-end cloud migration services including assessment, planning, execution, and optimization. Specialized in AWS, Azure, and Google Cloud with focus on cost optimization and security compliance.",
    category: "Cloud & DevOps",
    subcategory: "Migration Services",
    price: 15000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Comprehensive cloud readiness assessment",
      "Migration strategy and roadmap development",
      "Data migration and synchronization",
      "Application refactoring and optimization",
      "Security and compliance implementation",
      "Performance monitoring and optimization",
      "24/7 post-migration support for 3 months"
    ],
    benefits: [
      "Reduce infrastructure costs by 25-40%",
      "Improve application performance and scalability",
      "Enhanced security and compliance posture",
      "Faster time-to-market for new features",
      "Disaster recovery and business continuity"
    ],
    useCases: [
      "Legacy system modernization",
      "Data center consolidation",
      "Application scalability improvement",
      "Disaster recovery implementation",
      "Cost optimization and resource management"
    ],
    targetAudience: ["Large enterprises", "Mid-size companies", "Healthcare organizations", "Financial services", "Government agencies"],
    tags: ["Cloud Migration", "AWS", "Azure", "Google Cloud", "DevOps", "Cost Optimization"],
    author: {
      name: "ZionTech Cloud Solutions",
      id: "ziontech-cloud",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T09:15:00.000Z",
    rating: 4.9,
    reviewCount: 203,
    aiScore: 93,
    location: "Global",
    availability: "4-6 weeks",
    featured: true,
    marketPrice: "$15,000+ (Industry average: $25,000+)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/cloud-migration"
    }
  },
  {
    id: "devops-automation-suite",
    title: "DevOps Automation & CI/CD Pipeline",
    description: "Complete DevOps automation solution including continuous integration, deployment, testing, and monitoring. Automates software delivery from development to production with zero-downtime deployments.",
    category: "Cloud & DevOps",
    subcategory: "Automation",
    price: 3200,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Automated CI/CD pipeline setup and management",
      "Infrastructure as Code (Terraform, CloudFormation)",
      "Automated testing and quality gates",
      "Monitoring and alerting integration",
      "Security scanning and vulnerability assessment",
      "Performance optimization and scaling",
      "Multi-cloud deployment support"
    ],
    benefits: [
      "Reduce deployment time from days to minutes",
      "Eliminate human errors in deployments",
      "Improve code quality and testing coverage",
      "Enable rapid feature delivery",
      "Reduce operational overhead and costs"
    ],
    useCases: [
      "Software development teams",
      "Web application deployment",
      "Mobile app deployment",
      "Microservices architecture",
      "Legacy application modernization"
    ],
    targetAudience: ["Software companies", "IT departments", "Startups", "Digital agencies", "Enterprise development teams"],
    tags: ["DevOps", "CI/CD", "Automation", "Infrastructure as Code", "Monitoring"],
    author: {
      name: "ZionTech DevOps",
      id: "ziontech-devops",
      avatarUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T11:45:00.000Z",
    rating: 4.7,
    reviewCount: 134,
    aiScore: 91,
    location: "Global",
    availability: "1-2 weeks",
    featured: false,
    marketPrice: "$3,200/month (Industry average: $4,100/month)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/devops-automation"
    }
  },

  // Cybersecurity Services
  {
    id: "cybersecurity-audit",
    title: "Comprehensive Cybersecurity Audit & Assessment",
    description: "Full security assessment including penetration testing, vulnerability scanning, compliance review, and security roadmap development. Covers all major compliance frameworks and industry standards.",
    category: "Cybersecurity",
    subcategory: "Security Assessment",
    price: 8500,
    currency: "$",
    pricingModel: "one-time",
    features: [
      "Penetration testing (external and internal)",
      "Vulnerability assessment and scanning",
      "Social engineering testing",
      "Compliance audit (SOC2, ISO27001, HIPAA)",
      "Security policy review and development",
      "Incident response plan development",
      "Security awareness training program",
      "Detailed remediation roadmap"
    ],
    benefits: [
      "Identify and remediate security vulnerabilities",
      "Achieve compliance with industry standards",
      "Reduce risk of data breaches and cyber attacks",
      "Improve customer trust and confidence",
      "Meet insurance and regulatory requirements"
    ],
    useCases: [
      "Pre-compliance preparation",
      "Security posture assessment",
      "Merger and acquisition due diligence",
      "Annual security review",
      "Incident response preparation"
    ],
    targetAudience: ["Financial services", "Healthcare organizations", "E-commerce companies", "SaaS businesses", "Government contractors"],
    tags: ["Cybersecurity", "Penetration Testing", "Compliance", "Vulnerability Assessment", "Security Audit"],
    author: {
      name: "ZionTech Security",
      id: "ziontech-security",
      avatarUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-05T16:20:00.000Z",
    rating: 4.9,
    reviewCount: 178,
    aiScore: 95,
    location: "Global",
    availability: "2-4 weeks",
    featured: true,
    marketPrice: "$8,500 (Industry average: $12,000+)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/cybersecurity-audit"
    }
  },
  {
    id: "managed-security-services",
    title: "24/7 Managed Security Operations Center (SOC)",
    description: "Round-the-clock security monitoring, threat detection, and incident response services. Includes advanced threat intelligence, security analytics, and expert security analysts.",
    category: "Cybersecurity",
    subcategory: "Managed Services",
    price: 4500,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "24/7 security monitoring and alerting",
      "Advanced threat detection and analysis",
      "Incident response and containment",
      "Threat intelligence and reporting",
      "Security metrics and dashboard",
      "Regular security assessments",
      "Compliance reporting and documentation",
      "Security awareness training"
    ],
    benefits: [
      "Continuous security protection",
      "Expert security team available 24/7",
      "Faster threat detection and response",
      "Reduced security staffing requirements",
      "Improved compliance and audit readiness"
    ],
    useCases: [
      "Enterprise security operations",
      "Compliance requirements",
      "Risk management",
      "Incident response",
      "Security monitoring"
    ],
    targetAudience: ["Large enterprises", "Financial institutions", "Healthcare organizations", "Government agencies", "Critical infrastructure"],
    tags: ["Managed Security", "SOC", "24/7 Monitoring", "Threat Detection", "Incident Response"],
    author: {
      name: "ZionTech Managed Security",
      id: "ziontech-soc",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-12T13:10:00.000Z",
    rating: 4.8,
    reviewCount: 92,
    aiScore: 93,
    location: "Global",
    availability: "Immediate",
    featured: true,
    marketPrice: "$4,500/month (Industry average: $6,200/month)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/managed-security"
    }
=======
import { ProductListing } from "@/types/listings";

// Advanced Micro SAAS Services & AI Solutions
export const ADVANCED_SERVICES: ProductListing[] = [
  // AI-Powered Business Solutions
  {
    id: "ai-business-automation",
    title: "AI Business Process Automation Suite",
    description: "Complete automation solution for repetitive business tasks using AI. Automate invoice processing, customer service responses, data entry, and workflow management. Includes 5 pre-built automation templates and custom workflow builder.",
    category: "AI Automation",
    subcategory: "Business Process",
    price: 299,
    currency: "$",
    tags: ["Business Automation", "Workflow", "AI", "Productivity"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    aiScore: 96,
    location: "Global",
    availability: "Immediate"
  },
  {
    id: "ai-customer-intelligence",
    title: "AI Customer Intelligence Platform",
    description: "Advanced customer analytics platform that uses AI to predict customer behavior, churn risk, and lifetime value. Includes sentiment analysis, purchase pattern recognition, and personalized marketing recommendations.",
    category: "AI Analytics",
    subcategory: "Customer Intelligence",
    price: 499,
    currency: "$",
    tags: ["Customer Analytics", "Predictive AI", "Marketing", "CRM"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    featured: true,
    aiScore: 94,
    location: "Global",
    availability: "Immediate"
  },
  {
    id: "ai-document-processing",
    title: "AI Document Processing & OCR Suite",
    description: "Intelligent document processing system that extracts, categorizes, and analyzes information from any document type. Supports 50+ languages, handles complex layouts, and integrates with existing systems.",
    category: "AI Processing",
    subcategory: "Document Management",
    price: 199,
    currency: "$",
    tags: ["OCR", "Document Processing", "Data Extraction", "AI"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:15:00.000Z",
    rating: 4.7,
    reviewCount: 234,
    featured: false,
    aiScore: 92,
    location: "Global",
    availability: "Immediate"
  },

  // Cybersecurity & Compliance Services
  {
    id: "ai-threat-detection",
    title: "AI-Powered Threat Detection System",
    description: "Real-time cybersecurity threat detection using machine learning. Monitors network traffic, user behavior, and system activities to identify and prevent security breaches before they occur.",
    category: "Cybersecurity",
    subcategory: "Threat Detection",
    price: 799,
    currency: "$",
    tags: ["Cybersecurity", "Threat Detection", "AI Security", "Network Protection"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T11:45:00.000Z",
    rating: 4.9,
    reviewCount: 167,
    featured: true,
    aiScore: 95,
    location: "Global",
    availability: "1-2 Weeks"
  },
  {
    id: "compliance-automation",
    title: "Regulatory Compliance Automation Platform",
    description: "Automated compliance monitoring and reporting for GDPR, HIPAA, SOX, and other regulations. Includes audit trail generation, compliance scoring, and automated remediation workflows.",
    category: "Compliance",
    subcategory: "Regulatory",
    price: 599,
    currency: "$",
    tags: ["Compliance", "GDPR", "HIPAA", "Automation", "Auditing"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T16:20:00.000Z",
    rating: 4.8,
    reviewCount: 78,
    featured: false,
    aiScore: 91,
    location: "Global",
    availability: "Immediate"
  },

  // Cloud & DevOps Solutions
  {
    id: "ai-cloud-optimization",
    title: "AI Cloud Cost Optimization Engine",
    description: "Intelligent cloud resource management that automatically optimizes costs across AWS, Azure, and Google Cloud. Provides cost predictions, resource scaling recommendations, and automated optimization actions.",
    category: "Cloud Management",
    subcategory: "Cost Optimization",
    price: 399,
    currency: "$",
    tags: ["Cloud Optimization", "Cost Management", "AWS", "Azure", "AI"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T13:10:00.000Z",
    rating: 4.7,
    reviewCount: 145,
    featured: true,
    aiScore: 93,
    location: "Global",
    availability: "Immediate"
  },
  {
    id: "devops-automation",
    title: "Intelligent DevOps Automation Platform",
    description: "AI-powered DevOps automation that streamlines CI/CD pipelines, infrastructure provisioning, and deployment processes. Includes automated testing, performance monitoring, and rollback capabilities.",
    category: "DevOps",
    subcategory: "Automation",
    price: 699,
    currency: "$",
    tags: ["DevOps", "CI/CD", "Automation", "Infrastructure", "AI"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T10:30:00.000Z",
    rating: 4.8,
    reviewCount: 112,
    featured: false,
    aiScore: 90,
    location: "Global",
    availability: "1-2 Weeks"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1ab5
  },

  // Data & Analytics Services
  {
<<<<<<< HEAD
    id: "data-engineering-platform",
    title: "Enterprise Data Engineering & Analytics Platform",
    description: "End-to-end data platform for collecting, processing, analyzing, and visualizing business data. Includes ETL pipelines, data warehousing, and advanced analytics capabilities.",
    category: "Data & Analytics",
    subcategory: "Data Engineering",
    price: 6800,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Data pipeline development and management",
      "ETL/ELT process automation",
      "Data warehouse design and optimization",
      "Real-time data streaming and processing",
      "Advanced analytics and machine learning",
      "Data visualization and reporting",
      "Data quality monitoring and governance",
      "API development for data access"
    ],
    benefits: [
      "Unified view of business data",
      "Real-time insights and decision making",
      "Improved data quality and reliability",
      "Scalable data infrastructure",
      "Reduced data processing time"
    ],
    useCases: [
      "Business intelligence and reporting",
      "Customer analytics and insights",
      "Operational analytics and monitoring",
      "Predictive analytics and forecasting",
      "Data-driven decision making"
    ],
    targetAudience: ["Large enterprises", "Data-driven companies", "E-commerce businesses", "Financial services", "Healthcare organizations"],
    tags: ["Data Engineering", "ETL", "Data Warehouse", "Analytics", "Machine Learning"],
    author: {
      name: "ZionTech Data Solutions",
      id: "ziontech-data",
      avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T15:30:00.000Z",
    rating: 4.7,
    reviewCount: 67,
    aiScore: 89,
    location: "Global",
    availability: "3-4 weeks",
    featured: false,
    marketPrice: "$6,800/month (Industry average: $8,900/month)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/data-engineering"
    }
  },

  // Digital Transformation Services
  {
    id: "digital-transformation-consulting",
    title: "Digital Transformation Strategy & Implementation",
    description: "Comprehensive digital transformation consulting including strategy development, technology selection, change management, and implementation support. Focus on ROI and business value.",
    category: "Digital Transformation",
    subcategory: "Strategy & Consulting",
    price: 12000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Digital maturity assessment and benchmarking",
      "Transformation strategy and roadmap development",
      "Technology architecture and platform selection",
      "Change management and training programs",
      "Implementation planning and execution",
      "Performance measurement and optimization",
      "Ongoing support and guidance"
    ],
    benefits: [
      "Clear digital transformation roadmap",
      "Improved operational efficiency",
      "Enhanced customer experience",
      "Competitive advantage and market positioning",
      "Measurable ROI and business value"
    ],
    useCases: [
      "Legacy system modernization",
      "Customer experience transformation",
      "Operational efficiency improvement",
      "New business model development",
      "Technology infrastructure upgrade"
    ],
    targetAudience: ["Traditional businesses", "Manufacturing companies", "Retail organizations", "Healthcare providers", "Financial institutions"],
    tags: ["Digital Transformation", "Strategy", "Change Management", "Technology Consulting", "Business Process"],
    author: {
      name: "ZionTech Digital",
      id: "ziontech-digital",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-08T12:00:00.000Z",
    rating: 4.9,
    reviewCount: 145,
    aiScore: 94,
    location: "Global",
    availability: "6-8 weeks",
    featured: true,
    marketPrice: "$12,000+ (Industry average: $18,000+)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/digital-transformation"
    }
  },

  // IoT & Edge Computing Services
  {
    id: "iot-platform-solution",
    title: "IoT Platform & Edge Computing Solution",
    description: "Complete IoT platform for device management, data collection, edge processing, and cloud integration. Includes hardware recommendations, software development, and analytics dashboard.",
    category: "IoT & Edge Computing",
    subcategory: "Platform Solutions",
    price: 4200,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "IoT device management and monitoring",
      "Edge computing and local processing",
      "Real-time data collection and streaming",
      "Cloud integration and data synchronization",
      "Custom dashboard and visualization",
      "Alert system and notifications",
      "Data analytics and insights",
      "API development and integration"
    ],
    benefits: [
      "Real-time monitoring and control",
      "Reduced latency and bandwidth costs",
      "Improved operational efficiency",
      "Predictive maintenance capabilities",
      "Scalable IoT infrastructure"
    ],
    useCases: [
      "Industrial monitoring and control",
      "Smart building management",
      "Asset tracking and management",
      "Environmental monitoring",
      "Predictive maintenance"
    ],
    targetAudience: ["Manufacturing companies", "Building management", "Logistics companies", "Utilities", "Agriculture businesses"],
    tags: ["IoT", "Edge Computing", "Device Management", "Real-time Monitoring", "Predictive Analytics"],
    author: {
      name: "ZionTech IoT Solutions",
      id: "ziontech-iot",
      avatarUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T10:15:00.000Z",
    rating: 4.6,
    reviewCount: 78,
    aiScore: 87,
    location: "Global",
    availability: "4-5 weeks",
    featured: false,
    marketPrice: "$4,200/month (Industry average: $5,600/month)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/iot-platform"
    }
  },

  // Blockchain & Web3 Services
  {
    id: "blockchain-development",
    title: "Enterprise Blockchain Development & Integration",
    description: "Custom blockchain solutions for enterprise applications including smart contracts, decentralized applications (dApps), and blockchain integration with existing systems.",
    category: "Blockchain & Web3",
    subcategory: "Development Services",
    price: 7500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Custom blockchain development",
      "Smart contract development and auditing",
      "dApp development and deployment",
      "Blockchain integration with legacy systems",
      "Consensus mechanism implementation",
      "Security and performance optimization",
      "Testing and quality assurance",
      "Documentation and training"
    ],
    benefits: [
      "Transparent and immutable record keeping",
      "Reduced transaction costs and intermediaries",
      "Enhanced security and trust",
      "Automated contract execution",
      "Improved supply chain visibility"
    ],
    useCases: [
      "Supply chain tracking and verification",
      "Digital identity management",
      "Smart contracts and automation",
      "Asset tokenization",
      "Voting and governance systems"
    ],
    targetAudience: ["Financial services", "Supply chain companies", "Healthcare organizations", "Government agencies", "Real estate companies"],
    tags: ["Blockchain", "Smart Contracts", "dApps", "Web3", "Decentralized"],
    author: {
      name: "ZionTech Blockchain",
      id: "ziontech-blockchain",
      avatarUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-14T16:45:00.000Z",
    rating: 4.8,
    reviewCount: 56,
    aiScore: 90,
    location: "Global",
    availability: "8-10 weeks",
    featured: false,
    marketPrice: "$7,500+ (Industry average: $12,000+)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/blockchain-development"
    }
  }
];

export const SERVICE_CATEGORIES = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    description: "Advanced artificial intelligence and machine learning solutions",
    icon: "🤖",
    services: ADVANCED_SERVICES.filter(s => s.category === "AI & Machine Learning")
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    description: "Cloud infrastructure, migration, and DevOps automation",
    icon: "☁️",
    services: ADVANCED_SERVICES.filter(s => s.category === "Cloud & DevOps")
=======
    id: "ai-data-quality",
    title: "AI Data Quality & Cleansing Suite",
    description: "Automated data quality assessment and cleansing using machine learning. Identifies data anomalies, duplicates, and inconsistencies, then automatically corrects or flags issues for review.",
    category: "Data Management",
    subcategory: "Quality Assurance",
    price: 349,
    currency: "$",
    tags: ["Data Quality", "Data Cleansing", "AI", "Data Management"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T15:45:00.000Z",
    rating: 4.6,
    reviewCount: 89,
    featured: false,
    aiScore: 88,
    location: "Global",
    availability: "Immediate"
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics & Forecasting Engine",
    description: "Advanced predictive analytics platform that forecasts business trends, sales projections, and market opportunities. Uses multiple AI models and provides confidence intervals for all predictions.",
    category: "Analytics",
    subcategory: "Predictive",
    price: 899,
    currency: "$",
    tags: ["Predictive Analytics", "Forecasting", "AI", "Business Intelligence"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-25T12:00:00.000Z",
    rating: 4.9,
    reviewCount: 203,
    featured: true,
    aiScore: 94,
    location: "Global",
    availability: "1-2 Weeks"
  },

  // Marketing & Sales Automation
  {
    id: "ai-marketing-automation",
    title: "AI Marketing Automation Platform",
    description: "Intelligent marketing automation that personalizes campaigns, optimizes ad spend, and predicts customer engagement. Includes A/B testing automation, content optimization, and ROI tracking.",
    category: "Marketing",
    subcategory: "Automation",
    price: 449,
    currency: "$",
    tags: ["Marketing Automation", "Personalization", "AI", "ROI Optimization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T09:30:00.000Z",
    rating: 4.7,
    reviewCount: 134,
    featured: false,
    aiScore: 89,
    location: "Global",
    availability: "Immediate"
  },
  {
    id: "sales-intelligence",
    title: "AI Sales Intelligence & Lead Scoring",
    description: "Intelligent lead scoring and sales forecasting using AI. Analyzes customer interactions, predicts purchase likelihood, and provides personalized sales recommendations for each prospect.",
    category: "Sales",
    subcategory: "Intelligence",
    price: 549,
    currency: "$",
    tags: ["Sales Intelligence", "Lead Scoring", "AI", "Sales Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-05T14:15:00.000Z",
    rating: 4.8,
    reviewCount: 167,
    featured: true,
    aiScore: 92,
    location: "Global",
    availability: "Immediate"
  },

  // HR & Talent Management
  {
    id: "ai-hr-automation",
    title: "AI HR Automation & Talent Management",
    description: "Comprehensive HR automation platform with AI-powered candidate screening, performance analytics, and employee engagement monitoring. Includes bias detection and diversity analytics.",
    category: "HR Technology",
    subcategory: "Automation",
    price: 399,
    currency: "$",
    tags: ["HR Automation", "Talent Management", "AI", "Recruitment"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-10T11:00:00.000Z",
    rating: 4.6,
    reviewCount: 78,
    featured: false,
    aiScore: 87,
    location: "Global",
    availability: "Immediate"
  },

  // Financial Technology
  {
    id: "ai-financial-analytics",
    title: "AI Financial Analytics & Risk Management",
    description: "Advanced financial analytics platform with AI-powered risk assessment, fraud detection, and investment recommendations. Includes real-time market analysis and portfolio optimization.",
    category: "FinTech",
    subcategory: "Analytics",
    price: 799,
    currency: "$",
    tags: ["Financial Analytics", "Risk Management", "AI", "Fraud Detection"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-15T16:45:00.000Z",
    rating: 4.9,
    reviewCount: 189,
    featured: true,
    aiScore: 95,
    location: "Global",
    availability: "1-2 Weeks"
  },

  // Healthcare Technology
  {
    id: "ai-healthcare-analytics",
    title: "AI Healthcare Analytics & Patient Care",
    description: "Healthcare analytics platform that uses AI to predict patient outcomes, optimize treatment plans, and improve operational efficiency. HIPAA compliant with advanced security features.",
    category: "Healthcare Tech",
    subcategory: "Analytics",
    price: 1299,
    currency: "$",
    tags: ["Healthcare Analytics", "Patient Care", "AI", "HIPAA Compliant"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-20T10:30:00.000Z",
    rating: 4.8,
    reviewCount: 145,
    featured: true,
    aiScore: 93,
    location: "Global",
    availability: "2-3 Weeks"
  },

  // E-commerce & Retail
  {
    id: "ai-ecommerce-optimization",
    title: "AI E-commerce Optimization Suite",
    description: "Complete e-commerce optimization platform with AI-powered product recommendations, dynamic pricing, inventory management, and customer behavior analysis. Increases conversion rates by 25-40%.",
    category: "E-commerce",
    subcategory: "Optimization",
    price: 649,
    currency: "$",
    tags: ["E-commerce", "Product Recommendations", "AI", "Conversion Optimization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-25T13:20:00.000Z",
    rating: 4.9,
    reviewCount: 267,
    featured: true,
    aiScore: 96,
    location: "Global",
    availability: "Immediate"
  },

  // Supply Chain & Logistics
  {
    id: "ai-supply-chain",
    title: "AI Supply Chain Optimization Platform",
    description: "Intelligent supply chain management with demand forecasting, route optimization, inventory prediction, and supplier risk assessment. Reduces costs by 15-30% and improves delivery times.",
    category: "Supply Chain",
    subcategory: "Optimization",
    price: 899,
    currency: "$",
    tags: ["Supply Chain", "Logistics", "AI", "Demand Forecasting"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-30T15:10:00.000Z",
    rating: 4.7,
    reviewCount: 98,
    featured: false,
    aiScore: 91,
    location: "Global",
    availability: "1-2 Weeks"
  }
];

// Service Categories for better organization
export const SERVICE_CATEGORIES = [
  {
    id: "ai-automation",
    name: "AI Automation",
    description: "Intelligent automation solutions for business processes",
    icon: "🤖",
    color: "from-purple-500 to-indigo-600"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1ab5
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
<<<<<<< HEAD
    description: "Security assessment, monitoring, and managed services",
    icon: "🔒",
    services: ADVANCED_SERVICES.filter(s => s.category === "Cybersecurity")
=======
    description: "Advanced security and compliance solutions",
    icon: "🔒",
    color: "from-red-500 to-pink-600"
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    description: "Cloud optimization and development operations",
    icon: "☁️",
    color: "from-blue-500 to-cyan-600"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1ab5
  },
  {
    id: "data-analytics",
    name: "Data & Analytics",
<<<<<<< HEAD
    description: "Data engineering, analytics, and business intelligence",
    icon: "📊",
    services: ADVANCED_SERVICES.filter(s => s.category === "Data & Analytics")
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    description: "Strategy, consulting, and implementation services",
    icon: "🚀",
    services: ADVANCED_SERVICES.filter(s => s.category === "Digital Transformation")
  },
  {
    id: "iot-edge",
    name: "IoT & Edge Computing",
    description: "Internet of Things platforms and edge computing solutions",
    icon: "🌐",
    services: ADVANCED_SERVICES.filter(s => s.category === "IoT & Edge Computing")
  },
  {
    id: "blockchain-web3",
    name: "Blockchain & Web3",
    description: "Blockchain development and decentralized applications",
    icon: "⛓️",
    services: ADVANCED_SERVICES.filter(s => s.category === "Blockchain & Web3")
  }
];
=======
    description: "Intelligent data processing and insights",
    icon: "📊",
    color: "from-green-500 to-emerald-600"
  },
  {
    id: "marketing-sales",
    name: "Marketing & Sales",
    description: "AI-powered marketing and sales automation",
    icon: "📈",
    color: "from-yellow-500 to-orange-600"
  },
  {
    id: "hr-finance",
    name: "HR & Finance",
    description: "Human resources and financial technology",
    icon: "💼",
    color: "from-indigo-500 to-purple-600"
  },
  {
    id: "healthcare",
    name: "Healthcare Tech",
    description: "Healthcare analytics and patient care",
    icon: "🏥",
    color: "from-teal-500 to-cyan-600"
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    description: "Online retail optimization and analytics",
    icon: "🛒",
    color: "from-pink-500 to-rose-600"
  }
];

// Pricing Tiers for Enterprise Services
export const ENTERPRISE_PRICING = [
  {
    tier: "Starter",
    price: "$299",
    period: "month",
    features: [
      "Up to 5 users",
      "Basic AI features",
      "Email support",
      "Standard integrations"
    ],
    recommended: false
  },
  {
    tier: "Professional",
    price: "$799",
    period: "month",
    features: [
      "Up to 25 users",
      "Advanced AI features",
      "Priority support",
      "Custom integrations",
      "Advanced analytics"
    ],
    recommended: true
  },
  {
    tier: "Enterprise",
    price: "Custom",
    period: "month",
    features: [
      "Unlimited users",
      "Full AI capabilities",
      "24/7 dedicated support",
      "Custom development",
      "On-premise options",
      "SLA guarantees"
    ],
    recommended: false
  }
];

// Contact Information
export const CONTACT_INFO = {
  mobile: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com",
  supportHours: "24/7",
  responseTime: "< 2 hours"
};
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1ab5
