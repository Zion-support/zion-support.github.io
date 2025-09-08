<<<<<<< HEAD
export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  services: Service[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  features: string[];
  benefits: string[];
  pricing: {
    type: 'fixed' | 'hourly' | 'monthly' | 'project';
    amount: number;
    currency: string;
    details?: string;
    hourlyRate?: number;
  };
  deliveryTime: string;
  category: string;
  subcategory: string;
  tags: string[];
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
  };
  images: string[];
  rating: number;
  reviewCount: number;
  aiScore: number;
  featured: boolean;
  website?: string;
  contactEmail?: string;
  contactPhone?: string;
}

export const expandedServiceCategories: ServiceCategory[] = [
  {
    id: "ai-services",
    name: "AI & Machine Learning",
    description: "Cutting-edge artificial intelligence solutions for modern businesses",
    icon: "🤖",
    color: "from-purple-500 to-indigo-600",
    services: [
      {
        id: "ai-chatbot-development",
        title: "Custom AI Chatbot Development",
        description: "Build intelligent, conversational AI chatbots that understand context, handle complex queries, and provide 24/7 customer support. Our chatbots integrate seamlessly with your existing systems and learn from every interaction.",
        shortDescription: "Intelligent conversational AI chatbots for 24/7 customer support",
        features: [
          "Natural Language Processing (NLP)",
          "Multi-language support",
          "Integration with CRM systems",
          "Analytics and performance tracking",
          "Custom training on your data",
          "Voice and text capabilities"
        ],
        benefits: [
          "Reduce customer support costs by 60%",
          "24/7 availability for customer inquiries",
          "Instant response times under 2 seconds",
          "Scalable to handle unlimited conversations",
          "Continuous learning and improvement"
        ],
        pricing: {
          type: "project",
          amount: 8500,
          currency: "$",
          details: "Complete solution including training and integration"
        },
        deliveryTime: "4-6 weeks",
        category: "AI & Machine Learning",
        subcategory: "Chatbots",
        tags: ["AI", "Chatbot", "NLP", "Customer Support", "Automation"],
        author: {
          name: "Zion AI Solutions",
          id: "zion-ai",
          avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"
        },
        images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
        rating: 4.9,
        reviewCount: 156,
        aiScore: 95,
        featured: true,
        website: "https://ziontechgroup.com",
        contactEmail: "kleber@ziontechgroup.com",
        contactPhone: "+1 302 464 0950"
      },
      {
        id: "ai-data-analytics",
        title: "AI-Powered Data Analytics Platform",
        description: "Transform your raw data into actionable insights with our advanced AI analytics platform. Automatically detect patterns, predict trends, and generate comprehensive reports that drive business decisions.",
        shortDescription: "AI-driven data analytics for predictive insights and business intelligence",
        features: [
          "Predictive analytics and forecasting",
          "Real-time data processing",
          "Automated report generation",
          "Interactive dashboards",
          "Anomaly detection",
          "Custom ML model training"
        ],
        benefits: [
          "Uncover hidden patterns in your data",
          "Predict future trends with 85% accuracy",
          "Reduce manual reporting time by 80%",
          "Make data-driven decisions faster",
          "Scale analytics across your organization"
        ],
        pricing: {
          type: "monthly",
          amount: 1200,
          currency: "$",
          details: "Per month, includes setup and training"
        },
        deliveryTime: "2-3 weeks",
        category: "AI & Machine Learning",
        subcategory: "Analytics",
        tags: ["AI", "Analytics", "Big Data", "Predictive", "Business Intelligence"],
        author: {
          name: "Zion Data Intelligence",
          id: "zion-data",
          avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100"
        },
        images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
        rating: 4.8,
        reviewCount: 89,
        aiScore: 92,
        featured: true,
        website: "https://ziontechgroup.com",
        contactEmail: "kleber@ziontechgroup.com",
        contactPhone: "+1 302 464 0950"
      },
      {
        id: "ai-content-generation",
        title: "AI Content Generation Suite",
        description: "Generate high-quality, SEO-optimized content at scale. From blog posts to marketing copy, our AI understands your brand voice and creates engaging content that converts.",
        shortDescription: "AI-powered content creation for blogs, marketing, and SEO",
        features: [
          "SEO-optimized content generation",
          "Brand voice customization",
          "Multi-format support (blogs, social, ads)",
          "Plagiarism-free content",
          "Content scheduling and publishing",
          "Performance analytics"
        ],
        benefits: [
          "Create 10x more content in the same time",
          "Improve SEO rankings with optimized content",
          "Maintain consistent brand voice",
          "Reduce content creation costs by 70%",
          "Scale content marketing efforts"
        ],
        pricing: {
          type: "monthly",
          amount: 450,
          currency: "$",
          details: "Per month, unlimited content generation"
        },
        deliveryTime: "1 week",
        category: "AI & Machine Learning",
        subcategory: "Content Generation",
        tags: ["AI", "Content", "SEO", "Marketing", "Automation"],
        author: {
          name: "Zion Content AI",
          id: "zion-content",
          avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
        },
        images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
        rating: 4.7,
        reviewCount: 234,
        aiScore: 88,
        featured: false,
        website: "https://ziontechgroup.com",
        contactEmail: "kleber@ziontechgroup.com",
        contactPhone: "+1 302 464 0950"
      }
    ]
  },
  {
    id: "cloud-services",
    name: "Cloud & Infrastructure",
    description: "Scalable cloud solutions and infrastructure management services",
    icon: "☁️",
    color: "from-blue-500 to-cyan-600",
    services: [
      {
        id: "cloud-migration",
        title: "Cloud Migration & Optimization",
        description: "Seamlessly migrate your applications and data to the cloud while optimizing costs and performance. Our experts ensure zero downtime and maximum efficiency.",
        shortDescription: "Seamless cloud migration with cost optimization and zero downtime",
        features: [
          "Multi-cloud strategy planning",
          "Cost optimization analysis",
          "Performance monitoring",
          "Security compliance",
          "Backup and disaster recovery",
          "24/7 support and monitoring"
        ],
        benefits: [
          "Reduce infrastructure costs by 40-60%",
          "Improve application performance by 3x",
          "Enhanced scalability and flexibility",
          "Better security and compliance",
          "Reduced maintenance overhead"
        ],
        pricing: {
          type: "project",
          amount: 15000,
          currency: "$",
          details: "Complete migration including optimization"
        },
        deliveryTime: "6-8 weeks",
        category: "Cloud & Infrastructure",
        subcategory: "Migration",
        tags: ["Cloud", "Migration", "AWS", "Azure", "GCP", "Optimization"],
        author: {
          name: "Zion Cloud Solutions",
          id: "zion-cloud",
          avatarUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=100&h=100"
        },
        images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
        rating: 4.9,
        reviewCount: 178,
        aiScore: 91,
        featured: true,
        website: "https://ziontechgroup.com",
        contactEmail: "kleber@ziontechgroup.com",
        contactPhone: "+1 302 464 0950"
      },
      {
        id: "devops-automation",
        title: "DevOps Automation Platform",
        description: "Automate your entire software development lifecycle with our comprehensive DevOps platform. From code commit to production deployment, streamline every step.",
        shortDescription: "End-to-end DevOps automation for faster, reliable deployments",
        features: [
          "CI/CD pipeline automation",
          "Infrastructure as Code (IaC)",
          "Automated testing and quality gates",
          "Monitoring and alerting",
          "Security scanning integration",
          "Multi-environment management"
        ],
        benefits: [
          "Deploy 10x faster with automated pipelines",
          "Reduce deployment failures by 90%",
          "Improve code quality and security",
          "Enable continuous delivery",
          "Reduce manual configuration errors"
        ],
        pricing: {
          type: "monthly",
          amount: 800,
          currency: "$",
          details: "Per month, includes setup and training"
        },
        deliveryTime: "3-4 weeks",
        category: "Cloud & Infrastructure",
        subcategory: "DevOps",
        tags: ["DevOps", "Automation", "CI/CD", "Infrastructure", "Monitoring"],
        author: {
          name: "Zion DevOps",
          id: "zion-devops",
          avatarUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=100&h=100"
        },
        images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
        rating: 4.8,
        reviewCount: 145,
        aiScore: 89,
        featured: false,
        website: "https://ziontechgroup.com",
        contactEmail: "kleber@ziontechgroup.com",
        contactPhone: "+1 302 464 0950"
      }
    ]
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets",
    icon: "🔒",
    color: "from-red-500 to-pink-600",
    services: [
      {
        id: "security-audit",
        title: "Comprehensive Security Audit",
        description: "Identify vulnerabilities and security gaps in your systems with our thorough security assessment. Get actionable recommendations to strengthen your security posture.",
        shortDescription: "Complete security assessment with vulnerability identification and remediation",
        features: [
          "Penetration testing",
          "Vulnerability assessment",
          "Security policy review",
          "Compliance audit (SOC2, ISO27001)",
          "Risk assessment report",
          "Remediation roadmap"
        ],
        benefits: [
          "Identify security vulnerabilities before attackers do",
          "Meet compliance requirements",
          "Reduce security risks by 80%",
          "Protect customer data and trust",
          "Avoid costly security breaches"
        ],
        pricing: {
          type: "project",
          amount: 8500,
          currency: "$",
          details: "Complete audit including remediation plan"
        },
        deliveryTime: "3-4 weeks",
        category: "Cybersecurity",
        subcategory: "Audit",
        tags: ["Security", "Audit", "Penetration Testing", "Compliance", "Risk Assessment"],
        author: {
          name: "Zion Security",
          id: "zion-security",
          avatarUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=100&h=100"
        },
        images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
        rating: 4.9,
        reviewCount: 203,
        aiScore: 94,
        featured: true,
        website: "https://ziontechgroup.com",
        contactEmail: "kleber@ziontechgroup.com",
        contactPhone: "+1 302 464 0950"
      }
    ]
  },
  {
    id: "web-development",
    name: "Web Development",
    description: "Modern web applications and digital solutions",
    icon: "🌐",
    color: "from-green-500 to-emerald-600",
    services: [
      {
        id: "progressive-web-app",
        title: "Progressive Web App Development",
        description: "Build fast, reliable, and engaging Progressive Web Apps that work offline and provide native app-like experience across all devices.",
        shortDescription: "Modern PWAs with offline capabilities and native app experience",
        features: [
          "Offline functionality",
          "Push notifications",
          "App-like interface",
          "Cross-platform compatibility",
          "Fast loading times",
          "SEO optimization"
        ],
        benefits: [
          "Reduce development costs by 60%",
          "Instant updates without app store approval",
          "Better user engagement and retention",
          "Improved performance and loading speeds",
          "Enhanced SEO and discoverability"
        ],
        pricing: {
          type: "project",
          amount: 12000,
          currency: "$",
          details: "Complete PWA development and deployment"
        },
        deliveryTime: "8-10 weeks",
        category: "Web Development",
        subcategory: "PWA",
        tags: ["PWA", "Web Development", "React", "Offline", "Mobile"],
        author: {
          name: "Zion Web Solutions",
          id: "zion-web",
          avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100"
        },
        images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500"],
        rating: 4.8,
        reviewCount: 167,
        aiScore: 87,
        featured: false,
        website: "https://ziontechgroup.com",
        contactEmail: "kleber@ziontechgroup.com",
        contactPhone: "+1 302 464 0950"
      }
    ]
  },
  {
    id: "business-intelligence",
    name: "Business Intelligence",
    description: "Data-driven insights and business analytics solutions",
    icon: "📊",
    color: "from-yellow-500 to-orange-600",
    services: [
      {
        id: "bi-dashboard",
        title: "Custom Business Intelligence Dashboards",
        description: "Transform your business data into actionable insights with interactive dashboards that provide real-time visibility into key performance indicators.",
        shortDescription: "Interactive BI dashboards for real-time business insights and KPIs",
        features: [
          "Real-time data visualization",
          "Custom KPI tracking",
          "Interactive charts and graphs",
          "Automated reporting",
          "Mobile-responsive design",
          "Data integration from multiple sources"
        ],
        benefits: [
          "Make data-driven decisions faster",
          "Identify trends and opportunities",
          "Improve operational efficiency",
          "Reduce reporting time by 80%",
          "Better collaboration across teams"
        ],
        pricing: {
          type: "project",
          amount: 6500,
          currency: "$",
          details: "Custom dashboard development and setup"
        },
        deliveryTime: "4-5 weeks",
        category: "Business Intelligence",
        subcategory: "Dashboards",
        tags: ["BI", "Analytics", "Dashboards", "Data Visualization", "KPIs"],
        author: {
          name: "Zion BI Solutions",
          id: "zion-bi",
          avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100"
        },
        images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
        rating: 4.7,
        reviewCount: 134,
        aiScore: 85,
        featured: false,
        website: "https://ziontechgroup.com",
        contactEmail: "kleber@ziontechgroup.com",
        contactPhone: "+1 302 464 0950"
      }
    ]
  },
  {
    id: "mobile-development",
    name: "Mobile Development",
    description: "Native and cross-platform mobile applications",
    icon: "📱",
    color: "from-indigo-500 to-purple-600",
    services: [
      {
        id: "cross-platform-app",
        title: "Cross-Platform Mobile App Development",
        description: "Build high-performance mobile applications that work seamlessly on both iOS and Android using React Native or Flutter technology.",
        shortDescription: "Native-like mobile apps for iOS and Android with single codebase",
        features: [
          "Cross-platform compatibility",
          "Native performance",
          "Offline functionality",
          "Push notifications",
          "App store deployment",
          "Maintenance and updates"
        ],
        benefits: [
          "Develop for both platforms simultaneously",
          "Reduce development time by 40%",
          "Lower maintenance costs",
          "Consistent user experience",
          "Faster time to market"
        ],
        pricing: {
          type: "project",
          amount: 18000,
          currency: "$",
          details: "Complete app development and deployment"
        },
        deliveryTime: "12-16 weeks",
        category: "Mobile Development",
        subcategory: "Cross-Platform",
        tags: ["Mobile", "React Native", "Flutter", "iOS", "Android"],
        author: {
          name: "Zion Mobile",
          id: "zion-mobile",
          avatarUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=100&h=100"
        },
        images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=500"],
        rating: 4.9,
        reviewCount: 189,
        aiScore: 90,
        featured: true,
        website: "https://ziontechgroup.com",
        contactEmail: "kleber@ziontechgroup.com",
        contactPhone: "+1 302 464 0950"
      }
    ]
  },
  {
    id: "blockchain",
    name: "Blockchain & Web3",
    description: "Decentralized applications and blockchain solutions",
    icon: "⛓️",
    color: "from-gray-500 to-slate-600",
    services: [
      {
        id: "smart-contract",
        title: "Smart Contract Development & Audit",
        description: "Secure and audited smart contracts for DeFi, NFTs, and enterprise blockchain applications. Our contracts are thoroughly tested and audited for security.",
        shortDescription: "Secure smart contracts with comprehensive auditing and testing",
        features: [
          "Smart contract development",
          "Security auditing",
          "Gas optimization",
          "Testing and deployment",
          "Documentation and support",
          "Multi-blockchain support"
        ],
        benefits: [
          "Ensure smart contract security",
          "Optimize gas costs",
          "Prevent costly vulnerabilities",
          "Build trust with users",
          "Compliance with best practices"
        ],
        pricing: {
          type: "project",
          amount: 9500,
          currency: "$",
          details: "Development and comprehensive audit"
        },
        deliveryTime: "6-8 weeks",
        category: "Blockchain & Web3",
        subcategory: "Smart Contracts",
        tags: ["Blockchain", "Smart Contracts", "DeFi", "NFTs", "Security"],
        author: {
          name: "Zion Blockchain",
          id: "zion-blockchain",
          avatarUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=100&h=100"
        },
        images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
        rating: 4.8,
        reviewCount: 112,
        aiScore: 93,
        featured: false,
        website: "https://ziontechgroup.com",
        contactEmail: "kleber@ziontechgroup.com",
        contactPhone: "+1 302 464 0950"
      }
    ]
  },
  {
    id: "iot-solutions",
    name: "IoT Solutions",
    description: "Internet of Things and connected device solutions",
    icon: "🔌",
    color: "from-teal-500 to-cyan-600",
    services: [
      {
        id: "iot-platform",
        title: "IoT Platform Development",
        description: "Build scalable IoT platforms that connect, monitor, and manage thousands of devices. Collect real-time data and gain insights from your connected ecosystem.",
        shortDescription: "Scalable IoT platform for device management and data analytics",
        features: [
          "Device connectivity management",
          "Real-time data collection",
          "Data analytics and visualization",
          "Alert and notification system",
          "Scalable architecture",
          "Security and encryption"
        ],
        benefits: [
          "Monitor and control devices remotely",
          "Collect valuable operational data",
          "Improve efficiency and reduce costs",
          "Enable predictive maintenance",
          "Scale to thousands of devices"
        ],
        pricing: {
          type: "project",
          amount: 25000,
          currency: "$",
          details: "Complete IoT platform development"
        },
        deliveryTime: "16-20 weeks",
        category: "IoT Solutions",
        subcategory: "Platform",
        tags: ["IoT", "Connected Devices", "Data Collection", "Analytics", "Automation"],
        author: {
          name: "Zion IoT",
          id: "zion-iot",
          avatarUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=100&h=100"
        },
        images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=500"],
        rating: 4.9,
        reviewCount: 78,
        aiScore: 96,
        featured: true,
        website: "https://ziontechgroup.com",
        contactEmail: "kleber@ziontechgroup.com",
        contactPhone: "+1 302 464 0950"
      }
    ]
  }
];

// Helper function to get all services
export const getAllServices = (): Service[] => {
  return expandedServiceCategories.flatMap(category => category.services);
};

// Helper function to get services by category
export const getServicesByCategory = (categoryId: string): Service[] => {
  const category = expandedServiceCategories.find(cat => cat.id === categoryId);
  return category ? category.services : [];
};

// Helper function to get featured services
export const getFeaturedServices = (): Service[] => {
  return getAllServices().filter(service => service.featured);
};

// Helper function to search services
export const searchServices = (query: string): Service[] => {
  const searchTerm = query.toLowerCase();
  return getAllServices().filter(service => 
    service.title.toLowerCase().includes(searchTerm) ||
    service.description.toLowerCase().includes(searchTerm) ||
    service.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
=======
import { ProductListing } from "@/types/listings";

// Expanded Services - Real Micro SAAS and IT Solutions
export const EXPANDED_SERVICES: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-automation-suite",
    title: "AI Process Automation Suite",
    description: "Complete workflow automation platform using AI to streamline business processes, reduce manual tasks by 80%, and increase operational efficiency. Includes process mapping, RPA integration, and analytics dashboard.",
    category: "AI Automation",
    price: 2999,
    currency: "$",
    tags: ["Process Automation", "RPA", "Workflow", "AI", "Efficiency"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 96
  },
  {
    id: "ai-customer-insights",
    title: "AI-Powered Customer Intelligence Platform",
    description: "Advanced customer behavior analysis and prediction platform using machine learning to identify patterns, predict churn, and optimize customer lifetime value. Real-time analytics and actionable insights.",
    category: "Customer Intelligence",
    price: 4499,
    currency: "$",
    tags: ["Customer Analytics", "Predictive Analytics", "Churn Prevention", "CRM", "AI"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 94
  },
  {
    id: "ai-content-optimization",
    title: "AI Content Performance Optimizer",
    description: "Intelligent content optimization platform that analyzes performance data and automatically suggests improvements for SEO, engagement, and conversion rates. A/B testing automation and content scoring.",
    category: "Content Marketing",
    price: 1999,
    currency: "$",
    tags: ["Content Optimization", "SEO", "A/B Testing", "Performance Analytics", "AI"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T11:15:00.000Z",
    rating: 4.7,
    reviewCount: 234,
    location: "Global",
    availability: "Immediate",
    aiScore: 91
  },

  // Cybersecurity & Compliance Services
  {
    id: "zero-trust-security",
    title: "Zero Trust Security Implementation",
    description: "Complete zero trust security framework implementation including identity verification, device trust scoring, network segmentation, and continuous monitoring. SOC 2, ISO 27001, and GDPR compliance ready.",
    category: "Cybersecurity",
    price: 8999,
    currency: "$",
    tags: ["Zero Trust", "Security", "Compliance", "Identity Management", "Network Security"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T09:00:00.000Z",
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 97
  },
  {
    id: "threat-intelligence-platform",
    title: "Real-Time Threat Intelligence Platform",
    description: "Advanced threat detection and response platform using AI to analyze network traffic, detect anomalies, and automatically respond to security threats. 24/7 monitoring with instant alerting.",
    category: "Threat Intelligence",
    price: 5999,
    currency: "$",
    tags: ["Threat Detection", "Network Security", "AI Security", "Real-time Monitoring", "Incident Response"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T15:45:00.000Z",
    rating: 4.8,
    reviewCount: 45,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 93
  },

  // Cloud & DevOps Services
  {
    id: "multi-cloud-orchestration",
    title: "Multi-Cloud Orchestration Platform",
    description: "Unified management platform for AWS, Azure, and Google Cloud with automated resource provisioning, cost optimization, and disaster recovery. Single dashboard for all cloud operations.",
    category: "Cloud Management",
    price: 7499,
    currency: "$",
    tags: ["Multi-Cloud", "DevOps", "Cost Optimization", "Resource Management", "Automation"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T12:20:00.000Z",
    rating: 4.7,
    reviewCount: 78,
    featured: true,
    location: "Global",
    availability: "2-4 Weeks",
    aiScore: 92
  },
  {
    id: "devops-automation-suite",
    title: "DevOps Automation & CI/CD Suite",
    description: "Complete DevOps automation platform with automated testing, deployment pipelines, infrastructure as code, and monitoring. Supports Kubernetes, Docker, and all major cloud platforms.",
    category: "DevOps",
    price: 5499,
    currency: "$",
    tags: ["CI/CD", "Kubernetes", "Docker", "Infrastructure as Code", "Automation"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T10:30:00.000Z",
    rating: 4.8,
    reviewCount: 92,
    location: "Global",
    availability: "1-3 Weeks",
    aiScore: 94
  },

  // Data & Analytics Services
  {
    id: "real-time-data-pipeline",
    title: "Real-Time Data Pipeline & Analytics",
    description: "High-performance data streaming platform with real-time processing, analytics, and visualization. Handles millions of events per second with sub-second latency for instant insights.",
    category: "Data Analytics",
    price: 6499,
    currency: "$",
    tags: ["Real-time Analytics", "Data Streaming", "Big Data", "Performance", "Visualization"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T13:15:00.000Z",
    rating: 4.9,
    reviewCount: 56,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 95
  },
  {
    id: "predictive-maintenance-ai",
    title: "AI-Powered Predictive Maintenance",
    description: "Industrial IoT predictive maintenance platform using machine learning to predict equipment failures, optimize maintenance schedules, and reduce downtime by up to 40%. Real-time sensor monitoring.",
    category: "IoT & Predictive Analytics",
    price: 7999,
    currency: "$",
    tags: ["Predictive Maintenance", "IoT", "Machine Learning", "Industrial", "Cost Reduction"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-25T16:00:00.000Z",
    rating: 4.8,
    reviewCount: 34,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 93
  },

  // Business Intelligence & Reporting
  {
    id: "ai-business-intelligence",
    title: "AI-Driven Business Intelligence Suite",
    description: "Intelligent BI platform with natural language querying, automated insights generation, and predictive analytics. Connects to 100+ data sources with automated data preparation.",
    category: "Business Intelligence",
    price: 3999,
    currency: "$",
    tags: ["Business Intelligence", "Natural Language", "Predictive Analytics", "Data Visualization", "AI"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T11:45:00.000Z",
    rating: 4.7,
    reviewCount: 123,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 90
  },

  // Digital Transformation Services
  {
    id: "digital-transformation-consulting",
    title: "Digital Transformation Strategy & Implementation",
    description: "End-to-end digital transformation consulting including strategy development, technology selection, change management, and implementation support. ROI-focused approach with measurable outcomes.",
    category: "Digital Transformation",
    price: 15000,
    currency: "$",
    tags: ["Digital Transformation", "Strategy", "Change Management", "Technology Consulting", "ROI"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-05T14:20:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 96
  },

  // Edge Computing & IoT Services
  {
    id: "edge-computing-platform",
    title: "Edge Computing & IoT Management Platform",
    description: "Distributed edge computing platform for IoT devices with local processing, real-time analytics, and cloud synchronization. Reduces latency and bandwidth costs while improving reliability.",
    category: "Edge Computing",
    price: 6999,
    currency: "$",
    tags: ["Edge Computing", "IoT", "Real-time Processing", "Distributed Systems", "Low Latency"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-10T09:30:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 92
  },

  // API & Integration Services
  {
    id: "api-gateway-management",
    title: "Enterprise API Gateway & Management",
    description: "Comprehensive API management platform with rate limiting, authentication, monitoring, and developer portal. Supports REST, GraphQL, and gRPC with automated documentation generation.",
    category: "API Management",
    price: 4499,
    currency: "$",
    tags: ["API Gateway", "API Management", "Developer Portal", "Rate Limiting", "Monitoring"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-15T12:00:00.000Z",
    rating: 4.7,
    reviewCount: 78,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 89
  },

  // Blockchain & Web3 Services
  {
    id: "blockchain-enterprise-solution",
    title: "Enterprise Blockchain & Web3 Solutions",
    description: "Custom blockchain development for enterprises including smart contracts, DeFi applications, NFT marketplaces, and DAO governance systems. Multi-chain support and enterprise-grade security.",
    category: "Blockchain & Web3",
    price: 19999,
    currency: "$",
    tags: ["Blockchain", "Smart Contracts", "DeFi", "NFT", "Web3"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-20T15:45:00.000Z",
    rating: 4.9,
    reviewCount: 45,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 95
  },

  // Mobile & App Development
  {
    id: "cross-platform-app-development",
    title: "Cross-Platform Mobile App Development",
    description: "Native-quality cross-platform mobile apps using React Native and Flutter. Includes backend development, API integration, push notifications, and app store optimization.",
    category: "Mobile Development",
    price: 8999,
    currency: "$",
    tags: ["Mobile Apps", "React Native", "Flutter", "Cross-Platform", "Backend"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-25T10:15:00.000Z",
    rating: 4.8,
    reviewCount: 156,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 91
  },

  // E-commerce & Digital Commerce
  {
    id: "ai-ecommerce-platform",
    title: "AI-Powered E-commerce Platform",
    description: "Next-generation e-commerce platform with AI-driven product recommendations, dynamic pricing, inventory optimization, and personalized shopping experiences. Multi-channel sales support.",
    category: "E-commerce",
    price: 12999,
    currency: "$",
    tags: ["E-commerce", "AI Recommendations", "Dynamic Pricing", "Multi-channel", "Personalization"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-30T13:30:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 94
  },

  // Healthcare & Life Sciences
  {
    id: "healthcare-ai-platform",
    title: "Healthcare AI & Telemedicine Platform",
    description: "Comprehensive healthcare platform with AI-powered diagnosis assistance, telemedicine capabilities, patient management, and medical record analysis. HIPAA compliant with advanced security.",
    category: "Healthcare Technology",
    price: 24999,
    currency: "$",
    tags: ["Healthcare", "Telemedicine", "AI Diagnosis", "HIPAA", "Patient Management"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-01T16:00:00.000Z",
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    location: "Global",
    availability: "8-10 Weeks",
    aiScore: 97
  },

  // Financial Technology
  {
    id: "fintech-compliance-platform",
    title: "FinTech Compliance & Risk Management",
    description: "Comprehensive financial technology compliance platform with AML/KYC automation, fraud detection, regulatory reporting, and risk assessment. Supports multiple jurisdictions and regulations.",
    category: "FinTech",
    price: 17999,
    currency: "$",
    tags: ["FinTech", "Compliance", "AML/KYC", "Fraud Detection", "Risk Management"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-05T11:45:00.000Z",
    rating: 4.8,
    reviewCount: 45,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 93
  },

  // Education Technology
  {
    id: "edtech-learning-platform",
    title: "AI-Powered Learning Management System",
    description: "Intelligent learning platform with personalized learning paths, adaptive assessments, progress tracking, and virtual classroom capabilities. Supports multiple learning styles and accessibility features.",
    category: "Education Technology",
    price: 9999,
    currency: "$",
    tags: ["EdTech", "Learning Management", "Personalized Learning", "Virtual Classroom", "AI"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-10T14:20:00.000Z",
    rating: 4.7,
    reviewCount: 123,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 91
  },

  // Supply Chain & Logistics
  {
    id: "supply-chain-optimization",
    title: "AI Supply Chain Optimization Platform",
    description: "Intelligent supply chain management platform with demand forecasting, inventory optimization, route planning, and real-time tracking. Reduces costs and improves efficiency by up to 35%.",
    category: "Supply Chain",
    price: 15999,
    currency: "$",
    tags: ["Supply Chain", "Demand Forecasting", "Inventory Optimization", "Logistics", "AI"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-15T09:15:00.000Z",
    rating: 4.8,
    reviewCount: 78,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 94
  }
];

// Service Categories for Filtering
export const EXPANDED_SERVICE_CATEGORIES = [
  { label: 'AI & Machine Learning', value: 'ai-ml' },
  { label: 'Cybersecurity', value: 'cybersecurity' },
  { label: 'Cloud & DevOps', value: 'cloud-devops' },
  { label: 'Data & Analytics', value: 'data-analytics' },
  { label: 'Business Intelligence', value: 'business-intelligence' },
  { label: 'Digital Transformation', value: 'digital-transformation' },
  { label: 'Edge Computing & IoT', value: 'edge-iot' },
  { label: 'API & Integration', value: 'api-integration' },
  { label: 'Blockchain & Web3', value: 'blockchain-web3' },
  { label: 'Mobile Development', value: 'mobile-development' },
  { label: 'E-commerce', value: 'ecommerce' },
  { label: 'Healthcare Technology', value: 'healthcare-tech' },
  { label: 'FinTech', value: 'fintech' },
  { label: 'Education Technology', value: 'edtech' },
  { label: 'Supply Chain', value: 'supply-chain' }
];

// Service Pricing Tiers
export const SERVICE_PRICING_TIERS = {
  starter: { range: "$1,999 - $4,999", description: "Essential services for small businesses" },
  professional: { range: "$5,000 - $9,999", description: "Advanced solutions for growing companies" },
  enterprise: { range: "$10,000 - $25,000", description: "Comprehensive solutions for large organizations" },
  custom: { range: "Custom Pricing", description: "Tailored solutions for specific requirements" }
};

// Service Benefits & Features
export const SERVICE_BENEFITS = {
  aiPowered: "AI-powered automation and insights",
  scalable: "Scalable architecture for business growth",
  secure: "Enterprise-grade security and compliance",
  costEffective: "Cost-effective solutions with proven ROI",
  globalSupport: "24/7 global support and maintenance",
  customIntegration: "Custom integration with existing systems",
  training: "Comprehensive training and documentation",
  updates: "Regular updates and feature enhancements"
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e39
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
};