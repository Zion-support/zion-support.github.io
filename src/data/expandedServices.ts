export interface ExpandedService {
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
  pricingModel: 'one-time' | 'monthly' | 'hourly' | 'project-based';
  features: string[];
  benefits: string[];
  marketPrice: string;
  contactLink: string;
  tags: string[];
import { ProductListing } from "@/types/listings";
  images: string[];
  createdAt: string;
  aiScore: number;
  rating: number;
  reviewCount: number;
  isNew: boolean;
  isFeatured: boolean;
}

export const EXPANDED_SERVICES: ExpandedService[] = [
  {
    id: 'ai-business-process-automation',
    title: 'AI-Powered Business Process Automation',
    description: 'Intelligent automation platform that uses AI to streamline business processes, reduce manual work, and increase operational efficiency.',
    category: 'AI & Automation',
    subcategory: 'Process Automation',
    price: 2500,
    currency: 'USD',
    pricingModel: 'subscription',
    features: [
      'AI-powered workflow automation',
      'Process mining and optimization',
      'Intelligent document processing',
      'Real-time process monitoring',
      'Custom automation rules engine',
      'Integration with existing systems',
      'Analytics and reporting dashboard',
      '24/7 automated operations'
    ],
    benefits: [
      'Reduce manual work by 70-90%',
      'Improve process accuracy and consistency',
      'Faster processing times',
      'Cost savings through efficiency gains',
      'Scalable automation solutions',
      'Compliance and audit trail',
      'Real-time insights and optimization'
    ],
    useCases: [
      'Invoice processing and approval workflows',
      'Customer onboarding automation',
      'HR process automation',
      'Supply chain optimization',
      'Quality control automation',
      'Compliance monitoring and reporting'
    ],
    marketPrice: '$2,000 - $5,000/month',
    contactLink: 'https://ziontechgroup.com/contact',
    tags: ['AI', 'Automation', 'Business Process', 'Workflow', 'Efficiency'],
    author: 'Zion Tech Group',
    images: ['/images/services/ai-automation-1.jpg', '/images/services/ai-automation-2.jpg'],
    createdAt: '2024-01-15',
    aiScore: 95,
    rating: 4.8,
    reviewCount: 127,
    isNew: true,
    isFeatured: true
  },
  {
    id: 'ai-content-generation-marketing',
    title: 'AI Content Generation & Marketing Suite',
    description: 'Comprehensive AI-powered content creation platform for marketing, social media, and brand communication with advanced personalization.',
    category: 'AI & Automation',
    subcategory: 'Content Creation',
    price: 1800,
    currency: 'USD',
    pricingModel: 'subscription',
    features: [
      'AI-powered content generation',
      'Multi-language content creation',
      'Brand voice consistency',
      'SEO optimization tools',
      'Social media content scheduling',
      'Performance analytics',
      'A/B testing capabilities',
      'Content calendar management'
    ],
    benefits: [
      "Generate 10x more content",
      "Improve SEO rankings by 60%",
      "Save 20+ hours per week",
      "Maintain consistent brand voice",
      "Multi-platform content distribution"
    id: "ai-chatbot-platform",
    title: "AI Chatbot Platform",
    description: "Enterprise-grade AI chatbot platform with natural language processing, multi-language support, and seamless integration capabilities.",
    category: "AI Services",
    subcategory: "Chatbots & Conversational AI",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-language support (50+ languages)",
      "Advanced NLP with GPT-4 integration",
      "Custom training on your data",
      "Analytics dashboard",
      "API integration",
      "24/7 customer support"
    ],
    benefits: [
      "Reduce customer service costs by 60%",
      "24/7 availability",
      "Scalable customer support",
      "Improved customer satisfaction",
      "Data-driven insights"
      'Generate content 10x faster',
      'Maintain consistent brand voice',
      'Improve SEO rankings',
      'Increase engagement rates',
      'Reduce content creation costs',
      'Scale content production easily',
      'Data-driven content optimization'
    ],
    useCases: [
      'Blog and article writing',
      'Social media content creation',
      'Email marketing campaigns',
      'Product descriptions',
      'Marketing copy generation',
      'Content localization'
    ],
    targetAudience: ["E-commerce", "SaaS companies", "Healthcare", "Financial services", "Education"],
    tags: ["AI", "Chatbot", "NLP", "Customer Service", "Automation"],
    author: {
      name: "Zion AI Solutions",
      id: "zion-ai",
      email: "ai@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 156,
    aiScore: 95,
    website: "https://ziontechgroup.com/ai-chatbot",
    documentation: "https://docs.ziontechgroup.com/ai-chatbot",
    support: "24/7 live chat and email",
    integration: ["Slack", "Teams", "Zendesk", "Salesforce", "Shopify"],
    compliance: ["GDPR", "SOC 2", "HIPAA"],
    sla: "99.9% uptime guarantee"
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator Pro",
    description: "Advanced AI-powered content generation platform for blogs, social media, marketing materials, and technical documentation.",
    category: "AI Services",
    subcategory: "Content Generation",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "SEO-optimized content generation",
      "Multiple content types (blogs, social, ads)",
      "Brand voice customization",
      "Plagiarism detection",
      "Content calendar management",
      "Performance analytics"
    ],
    benefits: [
      "Save 20+ hours per week on content creation",
      "Improve SEO rankings",
      "Consistent brand messaging",
      "Increased engagement rates",
      "Cost-effective content strategy"
    ],
    useCases: [
      "Blog content creation",
      "Social media marketing",
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
    description: "Comprehensive zero trust security framework implementation with continuous monitoring, threat detection, and automated response systems.",
    category: "Cybersecurity",
    subcategory: "Zero Trust",
    price: 8500,
    id: "ai-ml-001",
    title: "Custom AI Chatbot Development",
    description: "Build intelligent, context-aware chatbots for customer service, sales, and support using advanced NLP and machine learning technologies.",
    category: "AI & Machine Learning",
    subcategory: "Chatbots & Conversational AI",
    price: 3500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Natural Language Processing (NLP)",
      "Multi-language support",
      "Integration with CRM systems",
      "Analytics and reporting",
      "Custom training on your data",
      "24/7 availability"
    ],
    benefits: [
      "Reduce customer service costs by 30-50%",
      "Improve response time to under 1 second",
      "Handle multiple conversations simultaneously",
      "Learn and improve over time",
      "Scalable to handle peak traffic"
    ],
    marketPrice: "$3,000 - $8,000",
    deliveryTime: "4-6 weeks",
    tags: ["AI Chatbot", "NLP", "Customer Service", "Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    rating: 4.8,
    marketPrice: '$1,500 - $3,500/month',
    contactLink: 'https://ziontechgroup.com/contact',
    tags: ['AI', 'Content Creation', 'Marketing', 'SEO', 'Social Media'],
    author: 'Zion Tech Group',
    images: ['/images/services/content-ai-1.jpg', '/images/services/content-ai-2.jpg'],
    createdAt: '2024-01-20',
    aiScore: 92,
    rating: 4.7,
    reviewCount: 89,
    isNew: true,
    isFeatured: true
  },
  {
    id: 'zero-trust-security',
    title: 'Zero Trust Security Implementation',
    description: 'Comprehensive zero trust security framework implementation with continuous verification, least privilege access, and advanced threat protection.',
    category: 'Cybersecurity',
    subcategory: 'Zero Trust',
    price: 8500,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Identity and access management',
      'Multi-factor authentication',
      'Network segmentation',
      'Continuous monitoring',
      'Threat detection and response',
      'Compliance reporting',
      'Security policy enforcement',
      'Incident response automation'
    ],
    benefits: [
      'Reduce security breaches by 90%',
      'Comply with industry regulations',
      'Protect against insider threats',
      'Improve security visibility',
      'Reduce attack surface',
      'Enable secure remote work',
      'Lower security incident costs'
    ],
    useCases: [
      'Enterprise security transformation',
      'Cloud security implementation',
      'Compliance requirements',
      'Remote workforce security',
      'Third-party access management',
      'Critical infrastructure protection'
    ],
    marketPrice: '$7,000 - $15,000',
    contactLink: 'https://ziontechgroup.com/contact',
    tags: ['Security', 'Zero Trust', 'Compliance', 'IAM', 'Threat Protection'],
    author: 'Zion Tech Group',
    images: ['/images/services/zero-trust-1.jpg', '/images/services/zero-trust-2.jpg'],
    createdAt: '2024-01-10',
    aiScore: 98,
    rating: 4.9,
    reviewCount: 156,
    isNew: false,
    isFeatured: true
  },
  {
    id: 'ai-threat-detection-response',
    title: 'AI-Powered Threat Detection & Response',
    description: 'Advanced AI-driven cybersecurity platform that provides real-time threat detection, automated response, and predictive security analytics.',
    category: 'Cybersecurity',
    subcategory: 'Threat Detection',
    price: 4200,
    currency: 'USD',
    pricingModel: 'subscription',
    features: [
      'AI-powered threat detection',
      'Behavioral analysis',
      'Automated incident response',
      'Threat intelligence feeds',
      'Real-time monitoring',
      'Forensic analysis tools',
      'Compliance reporting',
      '24/7 security operations'
    ],
    benefits: [
      'Detect threats 60% faster',
      'Reduce false positives by 80%',
      'Automate 70% of responses',
      'Improve threat visibility',
      'Reduce incident response time',
      'Lower security operation costs',
      'Proactive threat prevention'
    ],
    useCases: [
      'Enterprise security monitoring',
      'Critical infrastructure protection',
      'Financial services security',
      'Healthcare data protection',
      'Government security',
      'Retail fraud prevention'
    ],
    marketPrice: "$4,200 - $8,500/month",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Threat Detection", "AI Security", "Incident Response", "Network Security"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T11:45:00.000Z",
    aiScore: 97,
    rating: 4.9,
    reviewCount: 78,
    isNew: true
      "Email campaigns",
      "Product descriptions",
      "Technical documentation"
    ],
    targetAudience: ["Marketing agencies", "E-commerce", "SaaS companies", "Content creators", "Small businesses"],
    tags: ["AI", "Content Generation", "SEO", "Marketing", "Automation"],
    author: {
      name: "Zion Content AI",
      id: "zion-content",
      email: "content@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    rating: 4.7,
    reviewCount: 89,
    aiScore: 92,
    website: "https://ziontechgroup.com/ai-content",
    documentation: "https://docs.ziontechgroup.com/ai-content",
    support: "Business hours + emergency support",
    integration: ["WordPress", "HubSpot", "Mailchimp", "Buffer", "Hootsuite"],
    compliance: ["GDPR", "CCPA"],
    sla: "99.5% uptime guarantee"
  },
  {
    id: "ai-data-analytics",
    title: "AI-Powered Business Intelligence",
    description: "Comprehensive AI-driven analytics platform that transforms raw data into actionable business insights and predictive analytics.",
    category: "AI Services",
    subcategory: "Data Analytics",
    price: 499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time data processing",
      "Predictive analytics",
      "Custom dashboards",
      "Automated reporting",
      "Data visualization",
      "Machine learning models"
    ],
    benefits: [
      "Make data-driven decisions faster",
      "Identify trends and opportunities",
      "Reduce operational costs",
      "Improve customer experience",
      "Competitive advantage"
    ],
    useCases: [
      "Sales forecasting",
      "Customer behavior analysis",
      "Inventory optimization",
      "Risk assessment",
      "Performance monitoring"
    ],
    targetAudience: ["Enterprises", "Financial services", "Healthcare", "Retail", "Manufacturing"],
    tags: ["AI", "Analytics", "Business Intelligence", "Machine Learning", "Data Science"],
    author: {
      name: "Zion Analytics",
      id: "zion-analytics",
      email: "analytics@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:15:00.000Z",
    rating: 4.9,
    reviewCount: 234,
    marketPrice: '$3,500 - $6,000/month',
    contactLink: 'https://ziontechgroup.com/contact',
    tags: ['AI', 'Security', 'Threat Detection', 'Incident Response', 'Analytics'],
    author: 'Zion Tech Group',
    images: ['/images/services/threat-detection-1.jpg', '/images/services/threat-detection-2.jpg'],
    createdAt: '2024-01-25',
    aiScore: 96,
    rating: 4.8,
    reviewCount: 203,
    isNew: true,
    isFeatured: true
  },
  {
    id: 'multi-cloud-orchestration',
    title: 'Multi-Cloud Orchestration Platform',
    description: 'Enterprise-grade platform for managing, orchestrating, and optimizing workloads across multiple cloud providers with unified governance.',
    category: 'Cloud & DevOps',
    subcategory: 'Cloud Management',
    price: 3200,
    currency: 'USD',
    pricingModel: 'subscription',
    features: [
      'Multi-cloud resource management',
      'Automated workload placement',
      'Cost optimization engine',
      'Unified monitoring dashboard',
      'Policy-based governance',
      'Disaster recovery orchestration',
      'Performance optimization',
      'Compliance management'
    ],
    benefits: [
      "Deploy 10x faster",
      "Reduce deployment errors by 90%",
      "Automated quality assurance",
      "Faster time to market",
      "Improved team productivity"
    id: "cloud-migration-suite",
    title: "Cloud Migration Suite",
    description: "End-to-end cloud migration solution with automated tools, expert guidance, and zero-downtime migration strategies.",
    category: "Cloud Services",
    subcategory: "Migration & Consulting",
    price: 2500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Automated migration tools",
      "Zero-downtime migration",
      "Performance optimization",
      "Cost analysis and optimization",
      "Security assessment",
      "Post-migration support"
    ],
    benefits: [
      "Reduce infrastructure costs by 40%",
      "Improved scalability and performance",
      "Enhanced security and compliance",
      "Faster time to market",
      "Reduced maintenance overhead"
      'Reduce cloud costs by 25-40%',
      'Improve resource utilization',
      'Avoid vendor lock-in',
      'Enhance disaster recovery',
      'Simplify cloud operations',
      'Ensure compliance',
      'Optimize performance'
    ],
    useCases: [
      'Enterprise cloud strategy',
      'Cost optimization initiatives',
      'Disaster recovery planning',
      'Compliance requirements',
      'Performance optimization',
      'Vendor diversification'
    ],
    targetAudience: ["Enterprises", "Mid-size companies", "Startups", "Government", "Healthcare"],
    tags: ["Cloud", "Migration", "AWS", "Azure", "DevOps"],
    author: {
      name: "Zion Cloud Solutions",
      id: "zion-cloud",
      email: "cloud@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T11:00:00.000Z",
    rating: 4.8,
    reviewCount: 167,
    aiScore: 93,
    website: "https://ziontechgroup.com/cloud-migration",
    documentation: "https://docs.ziontechgroup.com/cloud-migration",
    support: "24/7 migration support",
    integration: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
    compliance: ["SOC 2", "ISO 27001", "FedRAMP"],
    sla: "99.95% uptime during migration"
  },
  {
    id: "devops-automation",
    title: "DevOps Automation Platform",
    description: "Complete DevOps automation platform with CI/CD pipelines, infrastructure as code, and automated testing frameworks.",
    category: "Cloud Services",
    subcategory: "DevOps & Automation",
    price: 399,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "CI/CD pipeline automation",
      "Infrastructure as Code (IaC)",
      "Automated testing",
      "Monitoring and alerting",
      "Security scanning",
      "Multi-cloud deployment"
    ],
    benefits: [
      "Deploy 10x faster",
      "Reduce deployment errors by 80%",
      "Lower operational costs",
      "Improved team productivity",
      "Better code quality"
    ],
    useCases: [
      "Software development",
      "Web application deployment",
      "Mobile app development",
      "Microservices architecture",
      "Container orchestration"
    ],
      "Multi-factor authentication",
      "Continuous monitoring",
      "Threat detection systems",
      "Incident response planning"
    ],
    benefits: [
      "Enhanced security posture",
      "Reduced attack surface",
      "Better compliance",
      "Improved user experience",
      "Cost-effective security"
    ],
    marketPrice: "$10,000 - $25,000",
    deliveryTime: "8-12 weeks",
    tags: ["Zero Trust", "Security Architecture", "IAM", "Network Security"],
    author: {
      name: "TrustZero Security",
      id: "trustzero-security",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-19T15:45:00.000Z",
    aiScore: 92,
    rating: 4.8,
    reviewCount: 189,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "cybersecurity-003",
    title: "SOC-as-a-Service Setup",
    description: "Set up a Security Operations Center (SOC) to monitor, detect, and respond to security threats in real-time.",
    category: "Cybersecurity",
    subcategory: "Architecture",
    price: 24999,
    currency: "$",
    tags: ["Zero Trust", "Security Architecture", "Identity Management", "Threat Detection"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T16:45:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    location: "Global",
    availability: "8-12 Weeks",
    aiScore: 95
  },
  {
    id: "incident-response-team",
    title: "24/7 Incident Response & Threat Hunting",
    description: "Round-the-clock security monitoring, incident response, and proactive threat hunting. Includes security operations center (SOC) setup, threat intelligence feeds, and automated incident response playbooks.",
    category: "Cybersecurity",
    subcategory: "Incident Response",
    price: 15999,
    currency: "$",
    tags: ["Incident Response", "SOC", "Threat Hunting", "24/7 Monitoring", "Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-25T12:15:00.000Z",
    rating: 4.9,
    reviewCount: 112,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 96
  },

  // Data & Analytics Services
  {
    id: "data-warehouse-enterprise",
    title: "Enterprise Data Warehouse & ETL Pipeline",
    description: "Design and implementation of enterprise data warehouse with ETL pipelines, data modeling, and business intelligence dashboards. Supports real-time and batch processing.",
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
    images: ["https://images.unsplash.com/photo-1624355834900-99cd2071585b?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T11:45:00.000Z",
    rating: 4.9,
    reviewCount: 134,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 95
  }
];

// Cybersecurity Services
export const CYBERSECURITY_SERVICES: ProductListing[] = [
  {
    id: "cyber-pentest-1",
    title: "Comprehensive Penetration Testing Suite",
    description: "Full-spectrum penetration testing including web applications, mobile apps, network infrastructure, and social engineering. Includes detailed reports, remediation guidance, and compliance documentation for SOC 2, ISO 27001, and PCI DSS.",
    category: "Cybersecurity",
    subcategory: "Penetration Testing",
    price: 5999,
    currency: "$",
    tags: ["Penetration Testing", "Security Audit", "Compliance", "Vulnerability Assessment"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    id: "real-time-analytics",
    title: "Real-Time Business Intelligence Platform",
    description: "Advanced real-time analytics platform that provides instant insights into business performance, customer behavior, and market trends with predictive analytics.",
    category: "Data & Analytics",
    subcategory: "Data Warehouse",
    price: 29999,
    currency: "$",
    tags: ["Data Warehouse", "Snowflake", "Databricks", "ETL", "Business Intelligence"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T09:00:00.000Z",
    rating: 4.8,
    reviewCount: 145,
    featured: true,
    location: "Global",
    availability: "12-16 Weeks",
    aiScore: 94
  },
  {
    id: "real-time-analytics-platform",
    title: "Real-Time Analytics & Streaming Platform",
    description: "Real-time data processing platform using Apache Kafka, Apache Flink, or AWS Kinesis. Features stream processing, real-time dashboards, alerting systems, and machine learning model serving.",
    category: "Data & Analytics",
    subcategory: "Real-Time",
    price: 17999,
    currency: "$",
    tags: ["Real-Time Analytics", "Apache Kafka", "Stream Processing", "ML Serving", "Dashboards"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-05T14:30:00.000Z",
    rating: 4.7,
    reviewCount: 67,
    location: "Global",
    availability: "8-10 Weeks",
    aiScore: 92
  },
  {
    id: "data-governance-compliance",
    title: "Data Governance & Compliance Framework",
    description: "Comprehensive data governance solution with data lineage, quality monitoring, privacy controls, and compliance reporting for GDPR, CCPA, HIPAA, and industry-specific regulations.",
    category: "Data & Analytics",
    subcategory: "Governance",
    price: 13999,
    currency: "$",
    tags: ["Data Governance", "Compliance", "GDPR", "Data Lineage", "Privacy Controls"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-10T11:20:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 93
  },

  // Digital Transformation Services
  {
    id: "digital-transformation-strategy",
    title: "Digital Transformation Strategy & Roadmap",
    description: "Comprehensive digital transformation consulting including current state assessment, future state vision, technology roadmap, change management strategy, and implementation planning with ROI analysis.",
    category: "Digital Transformation",
    subcategory: "Strategy",
    price: 34999,
    currency: "$",
    tags: ["Digital Transformation", "Strategy", "Change Management", "Technology Consulting", "ROI"],
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T08:00:00.000Z",
    rating: 4.9,
    reviewCount: 203,
    featured: true,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 97
  },
  {
    id: "cyber-incident-response-2",
    title: "24/7 Incident Response & Threat Hunting",
    description: "Round-the-clock cybersecurity incident response team with advanced threat hunting capabilities. Includes real-time monitoring, rapid response protocols, and post-incident analysis with lessons learned documentation.",
    category: "Cybersecurity",
    subcategory: "Incident Response",
    price: 8999,
    currency: "$",
    tags: ["Incident Response", "Threat Hunting", "24/7 Monitoring", "Security Operations"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T12:30:00.000Z",
    rating: 4.8,
    reviewCount: 78,
    location: "Global",
    availability: "Immediate",
    aiScore: 93
  },
  {
    id: "cyber-compliance-3",
    title: "Cybersecurity Compliance & Governance",
    description: "Complete compliance management solution for SOC 2, ISO 27001, PCI DSS, HIPAA, and GDPR. Includes policy development, risk assessments, training programs, and audit preparation support.",
    category: "Cybersecurity",
    subcategory: "Compliance",
    price: 4499,
    currency: "$",
    tags: ["Compliance", "Governance", "Risk Management", "Policy Development"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T10:15:00.000Z",
    rating: 4.7,
    reviewCount: 92,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 91
  }
];

// Cloud & DevOps Services
export const CLOUD_DEVOPS_SERVICES: ProductListing[] = [
  {
    id: "cloud-migration-1",
    title: "Enterprise Cloud Migration & Optimization",
    description: "End-to-end cloud migration services including assessment, planning, execution, and optimization. Supports AWS, Azure, and Google Cloud with cost optimization strategies and performance tuning.",
    category: "Cloud Services",
    subcategory: "Migration",
    price: 12999,
    currency: "$",
    tags: ["Cloud Migration", "AWS", "Azure", "Cost Optimization"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-12T09:45:00.000Z",
    rating: 4.8,
    reviewCount: 145,
    featured: true,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 94
  },
  {
    id: "devops-automation-2",
    title: "DevOps Automation & CI/CD Pipeline",
    description: "Complete DevOps automation solution with CI/CD pipelines, infrastructure as code, automated testing, and deployment strategies. Includes monitoring, logging, and performance optimization tools.",
    category: "DevOps",
    subcategory: "Automation",
    price: 5499,
    currency: "$",
    tags: ["DevOps", "CI/CD", "Infrastructure as Code", "Automation"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T14:20:00.000Z",
    rating: 4.7,
    reviewCount: 89,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 92
  },
  {
    id: "kubernetes-management-3",
    title: "Kubernetes Cluster Management & Optimization",
    description: "Professional Kubernetes management services including cluster design, deployment, monitoring, scaling, and optimization. Includes disaster recovery, backup strategies, and performance tuning.",
    category: "DevOps",
    subcategory: "Kubernetes",
    price: 3999,
    currency: "$",
    tags: ["Kubernetes", "Container Orchestration", "Cluster Management", "DevOps"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T11:30:00.000Z",
    rating: 4.6,
    reviewCount: 67,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 89
  }
];

// Data & Analytics Services
export const DATA_ANALYTICS_SERVICES: ProductListing[] = [
  {
    id: "data-engineering-1",
    title: "Data Engineering & ETL Pipeline Development",
    description: "Complete data engineering solution including ETL pipeline development, data warehousing, data lake architecture, and real-time streaming. Supports big data technologies like Apache Spark, Kafka, and Snowflake.",
    category: "Data Analytics",
    subcategory: "Data Engineering",
    price: 7999,
    currency: "$",
    tags: ["Data Engineering", "ETL", "Data Warehousing", "Big Data"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T13:15:00.000Z",
    rating: 4.8,
    reviewCount: 112,
    featured: true,
    location: "Global",
    availability: "4-5 Weeks",
    aiScore: 93
  },
  {
    id: "business-intelligence-2",
    title: "Business Intelligence & Dashboard Development",
    description: "Custom BI solutions with interactive dashboards, KPI tracking, and data visualization. Includes data modeling, report automation, and mobile-responsive design for executive decision-making.",
    category: "Data Analytics",
    subcategory: "Business Intelligence",
    price: 3499,
    currency: "$",
    tags: ["Business Intelligence", "Dashboards", "Data Visualization", "KPI Tracking"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T15:45:00.000Z",
    rating: 4.7,
    reviewCount: 78,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 90
  }
];

// Digital Transformation Services
export const DIGITAL_TRANSFORMATION_SERVICES: ProductListing[] = [
  {
    id: "digital-strategy-1",
    title: "Digital Transformation Strategy & Roadmap",
    description: "Comprehensive digital transformation consulting including current state assessment, future state vision, technology roadmap, and implementation strategy. Covers people, process, and technology transformation.",
    category: "Digital Transformation",
    subcategory: "Strategy",
    price: 15999,
    currency: "$",
    tags: ["Digital Transformation", "Strategy", "Technology Roadmap", "Change Management"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    tags: ["Mobile Apps", "React Native", "Flutter", "Cross-Platform", "Backend"],
    createdAt: "2024-01-10T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 234,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 96
  },
  {
    id: "legacy-modernization-2",
    title: "Legacy System Modernization & Integration",
    description: "Legacy system assessment, modernization planning, and implementation services. Includes API development, microservices architecture, and seamless integration with modern cloud platforms.",
    category: "Digital Transformation",
    subcategory: "Modernization",
    price: 19999,
    currency: "$",
    tags: ["Legacy Modernization", "API Development", "Microservices", "System Integration"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
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
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 156,
    location: "Global",
    availability: "8-12 Weeks",
    aiScore: 94
  }
];

// IoT & Edge Computing Services
export const IOT_EDGE_SERVICES: ProductListing[] = [
  {
    id: "iot-platform-1",
    title: "IoT Platform Development & Management",
    description: "End-to-end IoT solution including device management, data collection, real-time analytics, and predictive maintenance. Supports industrial IoT, smart cities, and connected devices.",
    category: "IoT & Edge Computing",
    subcategory: "Platform Development",
    price: 8999,
    currency: "$",
    tags: ["IoT", "Device Management", "Real-time Analytics", "Predictive Maintenance"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T09:00:00.000Z",
    rating: 4.7,
    reviewCount: 89,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 91
  },
  {
    id: "edge-computing-2",
    title: "Edge Computing & Edge AI Solutions",
    description: "Edge computing infrastructure and AI deployment at the edge for low-latency applications. Includes edge device management, AI model optimization, and distributed computing architecture.",
    category: "IoT & Edge Computing",
    subcategory: "Edge AI",
    price: 6499,
    currency: "$",
    tags: ["Edge Computing", "Edge AI", "Low Latency", "Distributed Computing"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T11:45:00.000Z",
    rating: 4.6,
    reviewCount: 67,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 88
  }
];

// Blockchain & Web3 Services
export const BLOCKCHAIN_WEB3_SERVICES: ProductListing[] = [
  {
    id: "blockchain-development-1",
    title: "Blockchain Development & Smart Contract Auditing",
    description: "Custom blockchain solutions, smart contract development, and comprehensive security auditing. Includes DeFi applications, NFT platforms, and enterprise blockchain integration.",
    category: "Blockchain & Web3",
    subcategory: "Development",
    price: 12999,
    currency: "$",
    tags: ["Blockchain", "Smart Contracts", "DeFi", "NFT"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074d7f5668f1?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T12:00:00.000Z",
    rating: 4.8,
    reviewCount: 134,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 93
  },
  {
    id: "web3-integration-2",
    title: "Web3 Integration & DeFi Solutions",
    description: "Web3 integration services for traditional businesses, DeFi protocol development, and cross-chain interoperability solutions. Includes wallet integration and decentralized application development.",
    category: "Blockchain & Web3",
    subcategory: "Web3 Integration",
    price: 7999,
    currency: "$",
    tags: ["Web3", "DeFi", "Cross-chain", "DApp Development"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074d7f5668f1?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T10:30:00.000Z",
    rating: 4.7,
    reviewCount: 78,
    location: "Global",
    availability: "4-5 Weeks",
    aiScore: 90
  }
];

// All services combined
export const ALL_EXPANDED_SERVICES: ProductListing[] = [
  ...AI_SERVICES,
  ...CYBERSECURITY_SERVICES,
  ...CLOUD_DEVOPS_SERVICES,
  ...DATA_ANALYTICS_SERVICES,
  ...DIGITAL_TRANSFORMATION_SERVICES,
  ...IOT_EDGE_SERVICES,
  ...BLOCKCHAIN_WEB3_SERVICES
];

// Service categories for filtering
export const EXPANDED_SERVICE_CATEGORIES = [
  { label: 'AI Development', value: 'ai-development' },
  { label: 'Cloud Services', value: 'cloud-services' },
  { label: 'DevOps', value: 'devops' },
  { label: 'Cybersecurity', value: 'cybersecurity' },
  { label: 'Data & Analytics', value: 'data-analytics' },
    id: 2,
    title: "Web Development",
    description: "Modern web applications and e-commerce solutions",
    category: "Web",
    price: 3000,
    rating: 4.9,
    reviews: 89,
    featured: true,
    images: ["/images/web-dev.jpg"],
    reviewCount: 89,
    aiScore: 88,
    availability: "Available",
    author: { name: "Web Developer" },
    tags: ["React", "Node.js", "TypeScript"]
  },
  {
    id: 3,
    title: "Mobile Development",
    description: "iOS and Android applications",
    category: "Mobile",
    price: 4000,
    rating: 4.7,
    reviews: 156,
    featured: false,
    images: ["/images/mobile-dev.jpg"],
    reviewCount: 156,
    aiScore: 92,
    availability: "Available",
    author: { name: "Mobile Developer" },
    tags: ["iOS", "Android", "React Native"]
  }
];

export const SERVICE_CATEGORIES: Category[] = [
  {
    id: "ai",
    name: "AI & Machine Learning",
    icon: "🤖",
    description: "Advanced AI solutions and ML models",
    services: EXPANDED_SERVICES.filter(s => s.category === "AI")
  },
  {
    id: "web",
    name: "Web Development",
    icon: "🌐",
    description: "Modern web applications",
    services: EXPANDED_SERVICES.filter(s => s.category === "Web")
  },
  {
    id: "mobile",
    name: "Mobile Development",
    icon: "📱",
    description: "iOS and Android apps",
    services: EXPANDED_SERVICES.filter(s => s.category === "Mobile")
  }
];

export const CONTACT_INFO = {
  email: "contact@ziontechgroup.com",
  phone: "+1 (555) 123-4567",
  address: "123 Tech Street, Innovation City, IC 12345",
  mobile: "+1 (555) 123-4567",
  website: "https://ziontechgroup.com"
};

export const PRICING_TIERS = [
  {
    name: "Starter",
    price: "$99/month",
    description: "Perfect for small teams",
    features: ["Basic support", "Standard features", "5 projects"]
  },
  {
    name: "Professional",
    price: "$299/month",
    description: "Ideal for growing businesses",
    features: ["Priority support", "Advanced features", "Unlimited projects"]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored for large organizations",
    features: ["Dedicated support", "Custom features", "White-label options"]
  }
];
    id: "digital-workplace",
    title: "Digital Workplace Transformation",
    description: "Complete digital workplace solution that modernizes employee experience, improves collaboration, and increases productivity through intelligent digital tools.",
    category: "Digital Transformation",
    subcategory: "Workplace Modernization",
    id: "data-analytics-001",
    title: "Real-Time Data Streaming Platform",
    description: "Build scalable real-time data streaming platforms for processing and analyzing high-volume data streams.",
    category: "Data & Analytics",
    subcategory: "Data Streaming",
    price: 9200,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Apache Kafka integration",
      "Real-time data processing",
      "Scalable architecture design",
      "Data pipeline automation",
      "Performance monitoring",
      "Error handling and recovery"
    ],
    benefits: [
      "Process data in real-time",
      "Handle high data volumes",
      "Improve decision-making speed",
      "Reduce data latency",
      "Scalable architecture"
    ],
    marketPrice: "$7,500 - $18,000",
    deliveryTime: "10-14 weeks",
    tags: ["Data Streaming", "Real-time Analytics", "Apache Kafka", "Big Data"],
    author: {
      name: "StreamFlow Analytics",
      id: "streamflow-analytics",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-17T12:15:00.000Z",
    aiScore: 88,
    rating: 4.6,
    reviewCount: 167,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "data-analytics-002",
    title: "Business Intelligence Dashboard",
    description: "Create comprehensive BI dashboards that transform your data into actionable business insights and visualizations.",
    category: "Data & Analytics",
    subcategory: "Business Intelligence",
    price: 4800,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Interactive data visualizations",
      "Real-time data integration",
      "Custom KPI tracking",
      "Automated reporting",
      "Mobile-responsive design",
      "User access management"
    ],
    benefits: [
      "Better data-driven decisions",
      "Improved operational efficiency",
      "Real-time business insights",
      "Enhanced reporting capabilities",
      "Increased productivity"
    ],
    marketPrice: "$4,000 - $10,000",
    deliveryTime: "5-7 weeks",
    tags: ["Business Intelligence", "Data Visualization", "Analytics", "Reporting"],
    author: {
      name: "InsightBI Solutions",
      id: "insightbi-solutions",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-21T14:50:00.000Z",
    aiScore: 86,
    rating: 4.5,
    reviewCount: 198,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "data-analytics-003",
    title: "Data Warehouse Optimization",
    description: "Optimize your existing data warehouse for better performance, scalability, and cost efficiency.",
    category: "Data & Analytics",
    subcategory: "Data Engineering",
    price: 6500,
    currency: "$",
    pricingModel: "project-based",
    features: [
    id: "digital-transformation",
    title: "Digital Transformation Consulting",
    description: "Strategic digital transformation consulting to modernize business processes, technology infrastructure, and customer experiences.",
    category: "Consulting Services",
    subcategory: "Digital Transformation",
    price: 15000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Business process analysis",
      "Technology roadmap",
      "Change management",
      "Implementation support",
      "ROI measurement",
      "Ongoing optimization"
    ],
    benefits: [
      "Increase operational efficiency by 40%",
      "Improve customer satisfaction",
      "Reduce operational costs",
      "Enable innovation",
      "Competitive advantage"
    ],
    useCases: [
      "Legacy system modernization",
      "Process automation",
      "Customer experience transformation",
      "Data strategy implementation",
      "Cloud adoption"
    ],
    targetAudience: ["Enterprises", "Manufacturing", "Healthcare", "Financial services", "Retail"],
    tags: ["Digital Transformation", "Consulting", "Strategy", "Innovation", "Business"],
    author: {
      name: "Zion Consulting",
      id: "zion-consulting",
      email: "consulting@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T16:00:00.000Z",
    rating: 4.9,
    reviewCount: 78,
    aiScore: 95,
    website: "https://ziontechgroup.com/digital-transformation",
    documentation: "https://docs.ziontechgroup.com/digital-transformation",
    support: "Dedicated transformation team",
    integration: ["ERP systems", "CRM platforms", "Cloud services", "Analytics tools", "Automation platforms"],
    compliance: ["Industry-specific regulations"],
    sla: "Weekly progress reports and milestone tracking"
  },

  // IoT & Smart Solutions
  {
    id: "iot-platform",
    title: "IoT Management Platform",
    description: "Comprehensive IoT platform for device management, data collection, analytics, and automation across connected devices.",
    category: "IoT Services",
    subcategory: "Platform & Management",
    price: 799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Device management",
      "Real-time data collection",
      "Edge computing",
      "Predictive maintenance",
      "Security protocols",
      "Scalable architecture"
    ],
    benefits: [
      "Reduce maintenance costs by 30%",
      "Improve operational efficiency",
      "Real-time insights",
      "Predictive maintenance",
      "Scalable IoT deployment"
    ],
    useCases: [
      "Smart manufacturing",
      "Connected buildings",
      "Fleet management",
      "Energy monitoring",
      "Agriculture automation"
    ],
    targetAudience: ["Manufacturing", "Smart cities", "Energy companies", "Transportation", "Agriculture"],
    tags: ["IoT", "Device Management", "Edge Computing", "Predictive Maintenance", "Automation"],
    author: {
      name: "Zion IoT",
      id: "zion-iot",
      email: "iot@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-25T12:15:00.000Z",
    rating: 4.7,
    reviewCount: 112,
    aiScore: 93,
    website: "https://ziontechgroup.com/iot-platform",
    documentation: "https://docs.ziontechgroup.com/iot-platform",
    support: "24/7 IoT monitoring support",
    integration: ["AWS IoT", "Azure IoT", "Google Cloud IoT", "MQTT", "REST APIs"],
    compliance: ["ISO 27001", "GDPR", "Industry-specific standards"],
    sla: "99.9% platform uptime, 5-minute device response time"
      "Performance analysis and tuning",
      "Query optimization",
      "Index strategy improvement",
      "Storage optimization",
      "Backup and recovery enhancement",
      "Monitoring and alerting"
    ],
    benefits: [
      "Faster query performance",
      "Reduced storage costs",
      "Better scalability",
      "Improved reliability",
      "Enhanced user experience"
    ],
    marketPrice: "$5,000 - $12,000",
    deliveryTime: "6-8 weeks",
    tags: ["Data Warehouse", "Performance Optimization", "Data Engineering", "Database"],
    author: {
      name: "DataOptimize Pro",
      id: "dataoptimize-pro",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-26T09:30:00.000Z",
    aiScore: 84,
    rating: 4.4,
    reviewCount: 123,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Web & Mobile Development
  {
    id: "web-mobile-001",
    title: "Progressive Web App Development",
    description: "Build modern Progressive Web Apps (PWAs) that provide native app-like experience across all devices and platforms.",
    category: "Web & Mobile Development",
    subcategory: "Progressive Web Apps",
    price: 5800,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Offline functionality",
      "Push notifications",
      "Responsive design",
      "Fast loading times",
      "App-like experience",
      "Cross-platform compatibility"
    ],
    benefits: [
      "Better user engagement",
      "Reduced development costs",
      "Faster time to market",
      "Improved performance",
      "Better SEO rankings"
    ],
    marketPrice: "$4,500 - $12,000",
    deliveryTime: "6-8 weeks",
    tags: ["PWA", "Web Development", "Mobile Apps", "Progressive Web"],
    author: {
      name: "WebFlow Studios",
      id: "webflow-studios",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-23T11:20:00.000Z",
    aiScore: 89,
    rating: 4.7,
    reviewCount: 234,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "web-mobile-002",
    title: "Cross-Platform Mobile App",
    description: "Develop high-performance cross-platform mobile applications using React Native or Flutter for iOS and Android.",
    category: "Web & Mobile Development",
    subcategory: "Mobile Apps",
    price: 7200,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Cross-platform compatibility",
      "Native performance",
      "Custom UI/UX design",
      "API integration",
      "Push notifications",
      "App store deployment"
    ],
    benefits: [
      "Single codebase for both platforms",
      "Faster development time",
      "Cost-effective solution",
      "Consistent user experience",
      "Easy maintenance"
    ],
    marketPrice: "$6,000 - $15,000",
    deliveryTime: "8-10 weeks",
    tags: ["Mobile Apps", "Cross-Platform", "React Native", "Flutter"],
    author: {
      name: "MobileCraft Dev",
      id: "mobilecraft-dev",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-27T16:40:00.000Z",
    aiScore: 87,
    rating: 4.6,
    reviewCount: 189,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "web-mobile-003",
    title: "E-commerce Platform Development",
    description: "Build custom e-commerce platforms with advanced features, payment integration, and inventory management systems.",
    category: "Web & Mobile Development",
    subcategory: "E-commerce",
    price: 9500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Custom shopping cart",
      "Payment gateway integration",
      "Inventory management",
      "Order processing system",
      "Customer management",
      "Analytics and reporting"
    ],
    benefits: [
      "Customized user experience",
      "Scalable architecture",
      "Better performance",
      "Full control over features",
      "Integration flexibility"
    ],
    marketPrice: "$8,000 - $20,000",
    deliveryTime: "10-14 weeks",
    tags: ["E-commerce", "Web Development", "Payment Integration", "Inventory Management"],
    author: {
      name: "EcomBuild Pro",
      id: "ecombuild-pro",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-29T13:15:00.000Z",
    aiScore: 85,
    rating: 4.5,
    reviewCount: 156,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Blockchain & Web3 Services
  {
    description: "Custom blockchain development for supply chain transparency, smart contracts, and decentralized applications.",
    category: "Blockchain Services",
    subcategory: "Development & Consulting",
    price: 5000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Custom blockchain development",
      "Smart contract development",
      "Supply chain solutions",
      "DeFi applications",
      "Security auditing",
      "Integration services"
    ],
    benefits: [
      "Enhanced transparency",
      "Reduced fraud",
      "Lower transaction costs",
      "Improved traceability",
      "Innovation leadership"
    ],
    useCases: [
      "Supply chain management",
      "Financial services",
      "Healthcare records",
      "Real estate",
      "Voting systems"
    ],
    targetAudience: ["Financial services", "Manufacturing", "Healthcare", "Government", "Logistics"],
    tags: ["Blockchain", "Smart Contracts", "DeFi", "Supply Chain", "Web3"],
    author: {
      name: "Zion Blockchain",
      id: "zion-blockchain",
      email: "blockchain@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T09:45:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    aiScore: 96,
    website: "https://ziontechgroup.com/blockchain-solutions",
    documentation: "https://docs.ziontechgroup.com/blockchain-solutions",
    support: "Dedicated blockchain team",
    integration: ["Ethereum", "Hyperledger", "Polkadot", "Solana", "Enterprise systems"],
    compliance: ["Regulatory compliance", "Industry standards"],
    sla: "Project milestone delivery with 2-week buffer"
  },

  // Data Science & Analytics
  {
    id: "data-science-platform",
    title: "Data Science Platform",
    description: "End-to-end data science platform with automated ML model development, deployment, and monitoring capabilities.",
    category: "Data Services",
    subcategory: "Data Science & ML",
    price: 699,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated ML model development",
      "Model deployment pipeline",
      "Real-time monitoring",
      "Feature engineering",
      "Model versioning",
      "A/B testing framework"
    ],
    benefits: [
      "10x faster model development",
      "Automated model optimization",
      "Reduced data science costs",
      "Improved model accuracy",
      "Faster time to production"
    ],
    useCases: [
      "Predictive analytics",
      "Recommendation systems",
      "Fraud detection",
      "Customer segmentation",
      "Risk assessment"
    ],
    targetAudience: ["Financial services", "E-commerce", "Healthcare", "Manufacturing", "Marketing"],
    tags: ["Data Science", "Machine Learning", "AI", "Analytics", "Automation"],
    author: {
      name: "Zion Data Science",
      id: "zion-data-science",
      email: "datascience@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-05T14:20:00.000Z",
    rating: 4.8,
    reviewCount: 134,
    aiScore: 95,
    website: "https://ziontechgroup.com/data-science-platform",
    documentation: "https://docs.ziontechgroup.com/data-science-platform",
    support: "Business hours + model deployment support",
    integration: ["Python", "R", "TensorFlow", "PyTorch", "MLflow"],
    compliance: ["GDPR", "SOC 2", "Industry-specific regulations"],
    sla: "99.9% platform uptime, 1-hour model deployment time"
    id: "blockchain-web3-001",
    title: "Smart Contract Development",
    description: "Develop secure and audited smart contracts for DeFi, NFTs, and blockchain applications on multiple platforms.",
    category: "Blockchain & Web3",
    subcategory: "Smart Contracts",
    price: 6800,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Multi-platform support (Ethereum, Polygon, BSC)",
      "Security audit and testing",
      "Gas optimization",
      "Documentation and deployment",
      "Integration support",
      "Ongoing maintenance"
    ],
    benefits: [
      "Secure and audited contracts",
      "Multi-chain compatibility",
      "Cost-effective development",
      "Professional deployment",
      "Long-term support"
    ],
    marketPrice: "$5,000 - $15,000",
    deliveryTime: "6-8 weeks",
    tags: ["Smart Contracts", "Blockchain", "DeFi", "Web3"],
    author: {
      name: "BlockChain Labs",
      id: "blockchain-labs",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T10:45:00.000Z",
    aiScore: 91,
    rating: 4.8,
    reviewCount: 145,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "blockchain-web3-002",
    title: "NFT Marketplace Development",
    description: "Create custom NFT marketplaces with minting, trading, and auction capabilities for digital art and collectibles.",
    category: "Blockchain & Web3",
    subcategory: "NFT Platforms",
    price: 8500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "NFT minting and creation",
      "Marketplace functionality",
      "Wallet integration",
      "Auction and bidding system",
      "Royalty distribution",
      "Analytics dashboard"
    ],
    benefits: [
      "Custom marketplace features",
      "Multiple blockchain support",
      "Scalable architecture",
      "User-friendly interface",
      "Revenue generation potential"
    ],
    marketPrice: "$7,000 - $18,000",
    deliveryTime: "8-12 weeks",
    tags: ["NFT", "Marketplace", "Blockchain", "Digital Art"],
    author: {
      name: "NFT Forge",
      id: "nft-forge",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T14:20:00.000Z",
    aiScore: 88,
    rating: 4.6,
    marketPrice: '$2,500 - $5,000/month',
    contactLink: 'https://ziontechgroup.com/contact',
    tags: ['Cloud', 'DevOps', 'Orchestration', 'Cost Optimization', 'Governance'],
    author: 'Zion Tech Group',
    images: ['/images/services/multi-cloud-1.jpg', '/images/services/multi-cloud-2.jpg'],
    createdAt: '2024-01-18',
    aiScore: 94,
    rating: 4.7,
    reviewCount: 178,
    isNew: false,
    isFeatured: true
  },
  {
    id: 'devops-automation-cicd',
    title: 'DevOps Automation & CI/CD Pipeline',
    description: 'End-to-end DevOps automation platform with advanced CI/CD pipelines, infrastructure as code, and automated testing capabilities.',
    category: 'Cloud & DevOps',
    subcategory: 'DevOps',
    price: 2800,
    currency: 'USD',
    pricingModel: 'subscription',
    features: [
      'Automated CI/CD pipelines',
      'Infrastructure as code',
      'Automated testing suite',
      'Deployment automation',
      'Monitoring and alerting',
      'Security scanning',
      'Performance testing',
      'Rollback capabilities'
    ],
    benefits: [
      'Deploy 10x faster',
      'Reduce deployment failures by 80%',
      'Improve code quality',
      'Automate repetitive tasks',
      'Enhance team productivity',
      'Reduce manual errors',
      'Faster time to market'
    ],
    useCases: [
      'Software development teams',
      'Digital transformation projects',
      'Microservices architecture',
      'Cloud-native applications',
      'Legacy system modernization',
      'Continuous delivery initiatives'
    ],
    marketPrice: '$2,000 - $4,500/month',
    contactLink: 'https://ziontechgroup.com/contact',
    tags: ['DevOps', 'CI/CD', 'Automation', 'Infrastructure', 'Testing'],
    author: 'Zion Tech Group',
    images: ['/images/services/devops-1.jpg', '/images/services/devops-2.jpg'],
    createdAt: '2024-01-22',
    aiScore: 93,
    rating: 4.6,
    reviewCount: 145,
    isNew: false,
    isFeatured: false
  },
  {
    id: 'real-time-business-intelligence',
    title: 'Real-Time Business Intelligence Platform',
    description: 'Advanced BI platform providing real-time insights, interactive dashboards, and predictive analytics for data-driven decision making.',
    category: 'Data & Analytics',
    subcategory: 'Business Intelligence',
    price: 3800,
    currency: 'USD',
    pricingModel: 'subscription',
    features: [
      'Real-time data processing',
      'Interactive dashboards',
      'Predictive analytics',
      'Data visualization tools',
      'Automated reporting',
      'Mobile BI access',
      'Data integration',
      'Advanced analytics'
    ],
    benefits: [
      'Make decisions 5x faster',
      'Improve data accuracy',
      'Identify trends early',
      'Optimize business processes',
      'Increase operational efficiency',
      'Better resource allocation',
      'Competitive advantage'
    ],
    useCases: [
      'Executive dashboards',
      'Sales performance tracking',
      'Operational monitoring',
      'Financial reporting',
      'Customer analytics',
      'Supply chain optimization'
    ],
    marketPrice: '$3,000 - $6,000/month',
    contactLink: 'https://ziontechgroup.com/contact',
    tags: ['BI', 'Analytics', 'Real-time', 'Dashboards', 'Predictive'],
    author: 'Zion Tech Group',
    images: ['/images/services/bi-platform-1.jpg', '/images/services/bi-platform-2.jpg'],
    createdAt: '2024-01-12',
    aiScore: 91,
    rating: 4.5,
    reviewCount: 234,
    isNew: false,
    isFeatured: false
  },
  {
    id: 'data-governance-compliance',
    title: 'Data Governance & Compliance Platform',
    description: 'Comprehensive data governance solution ensuring data quality, privacy, and regulatory compliance across the organization.',
    category: 'Data & Analytics',
    subcategory: 'Data Governance',
    price: 4500,
    currency: 'USD',
    pricingModel: 'subscription',
    features: [
      'Data quality management',
      'Privacy protection tools',
      'Compliance monitoring',
      'Data lineage tracking',
      'Policy enforcement',
      'Audit reporting',
      'Risk assessment',
      'Data catalog'
    ],
    benefits: [
      'Ensure regulatory compliance',
      'Improve data quality',
      'Reduce compliance risks',
      'Protect customer privacy',
      'Enhance data trust',
      'Streamline audits',
      'Reduce legal exposure'
    ],
    useCases: [
      'GDPR compliance',
      'HIPAA compliance',
      'SOX compliance',
      'Data privacy protection',
      'Data quality improvement',
      'Regulatory reporting'
    ],
    marketPrice: '$3,500 - $7,000/month',
    contactLink: 'https://ziontechgroup.com/contact',
    tags: ['Data Governance', 'Compliance', 'Privacy', 'Quality', 'Regulatory'],
    author: 'Zion Tech Group',
    images: ['/images/services/data-governance-1.jpg', '/images/services/data-governance-2.jpg'],
    createdAt: '2024-01-08',
    aiScore: 97,
    rating: 4.8,
    reviewCount: 189,
    isNew: false,
    isFeatured: true
  },
  {
    id: 'digital-workplace-transformation',
    title: 'Digital Workplace Transformation',
    description: 'Comprehensive digital transformation solution modernizing workplace technology, collaboration tools, and employee experience.',
    category: 'Digital Transformation',
    subcategory: 'Workplace Modernization',
    price: 6500,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Modern collaboration tools',
      'Digital workflow automation',
      'Employee experience platform',
      'Mobile-first design',
      'Integration services',
      'Change management',
      'Training and adoption',
      'Performance analytics'
    ],
    benefits: [
      'Improve productivity by 30%',
      'Enhance employee satisfaction',
      'Reduce operational costs',
      'Enable remote work',
      'Streamline processes',
      'Improve communication',
      'Faster decision making'
    ],
    useCases: [
      'Remote work enablement',
      'Collaboration improvement',
      'Process digitization',
      'Employee experience enhancement',
      'Technology modernization',
      'Change management'
    ],
    marketPrice: '$5,000 - $12,000',
    contactLink: 'https://ziontechgroup.com/contact',
    tags: ['Digital Transformation', 'Workplace', 'Collaboration', 'Employee Experience', 'Modernization'],
    author: 'Zion Tech Group',
    images: ['/images/services/digital-workplace-1.jpg', '/images/services/digital-workplace-2.jpg'],
    createdAt: '2024-01-05',
    aiScore: 89,
    rating: 4.4,
    reviewCount: 167,
    isNew: false,
    isFeatured: false
  },
  {
    id: 'customer-experience-optimization',
    title: 'Customer Experience Optimization Platform',
    description: 'AI-powered platform for optimizing customer journeys, personalizing experiences, and improving customer satisfaction and loyalty.',
    category: 'Digital Transformation',
    subcategory: 'Customer Experience',
    price: 3900,
    currency: 'USD',
    pricingModel: 'subscription',
    features: [
      'Customer journey mapping',
      'Personalization engine',
      'Omnichannel optimization',
      'Customer feedback analysis',
      'Predictive analytics',
      'A/B testing tools',
      'Performance monitoring',
      'ROI measurement'
    ],
    benefits: [
      'Increase customer satisfaction by 40%',
      'Improve conversion rates',
      'Reduce customer churn',
      'Enhance brand loyalty',
      'Optimize customer journeys',
      'Data-driven decisions',
      'Better customer insights'
    ],
    useCases: [
      'E-commerce optimization',
      'Customer service improvement',
      'Marketing personalization',
      'Product experience enhancement',
      'Customer journey optimization',
      'Loyalty program management'
    ],
    marketPrice: '$3,000 - $6,500/month',
    contactLink: 'https://ziontechgroup.com/contact',
    tags: ['Customer Experience', 'Personalization', 'Analytics', 'Optimization', 'Journey Mapping'],
    author: 'Zion Tech Group',
    images: ['/images/services/cx-optimization-1.jpg', '/images/services/cx-optimization-2.jpg'],
    createdAt: '2024-01-30',
    aiScore: 90,
    rating: 4.6,
    reviewCount: 112,
    isNew: true,
    isFeatured: false
  },
  {
    id: 'enterprise-iot-platform',
    title: 'Enterprise IoT Platform & Analytics',
    description: 'Scalable IoT platform for enterprise applications with real-time data collection, analytics, and intelligent automation capabilities.',
    category: 'IoT & Edge Computing',
    subcategory: 'IoT Platform',
    price: 5200,
    currency: 'USD',
    pricingModel: 'subscription',
    features: [
      'IoT device management',
      'Real-time data collection',
      'Edge computing capabilities',
      'Advanced analytics',
      'Predictive maintenance',
      'Security and privacy',
      'Scalable architecture',
      'Integration APIs'
    ],
    benefits: [
      'Monitor assets in real-time',
      'Predict equipment failures',
      'Optimize operations',
      'Reduce maintenance costs',
      'Improve safety',
      'Data-driven insights',
      'Scalable IoT deployment'
    ],
    useCases: [
      'Smart manufacturing',
      'Asset monitoring',
      'Predictive maintenance',
      'Energy management',
      'Supply chain tracking',
      'Environmental monitoring'
    ],
    marketPrice: '$4,000 - $8,000/month',
    contactLink: 'https://ziontechgroup.com/contact',
    tags: ['IoT', 'Edge Computing', 'Analytics', 'Predictive Maintenance', 'Asset Monitoring'],
    author: 'Zion Tech Group',
    images: ['/images/services/iot-platform-1.jpg', '/images/services/iot-platform-2.jpg'],
    createdAt: '2024-01-14',
    aiScore: 88,
    rating: 4.3,
    reviewCount: 98,
    isNew: false,
    isFeatured: false
  },
  {
    id: 'enterprise-blockchain-solutions',
    title: 'Enterprise Blockchain Solutions',
    description: 'Custom blockchain solutions for enterprise applications including supply chain, identity management, and secure transactions.',
    category: 'Blockchain & Web3',
    subcategory: 'Blockchain Development',
    price: 7500,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Custom blockchain development',
      'Smart contract development',
      'Supply chain solutions',
      'Identity management',
      'Secure transactions',
      'Integration services',
      'Compliance features',
      'Performance optimization'
    ],
    benefits: [
      'Enhance transparency',
      'Improve security',
      'Reduce fraud',
      'Streamline processes',
      'Enable trustless transactions',
      'Compliance automation',
      'Cost reduction'
    ],
    useCases: [
      'Supply chain tracking',
      'Digital identity management',
      'Secure transactions',
      'Asset tokenization',
      'Compliance automation',
      'Cross-border payments'
    ],
    marketPrice: '$6,000 - $15,000',
    contactLink: 'https://ziontechgroup.com/contact',
    tags: ['Blockchain', 'Web3', 'Smart Contracts', 'Supply Chain', 'Identity Management'],
    author: 'Zion Tech Group',
    images: ['/images/services/blockchain-1.jpg', '/images/services/blockchain-2.jpg'],
    createdAt: '2024-01-28',
    aiScore: 85,
    rating: 4.2,
    reviewCount: 76,
    isNew: true,
    isFeatured: false
  }
];

export const SERVICE_CATEGORIES = [
  'AI & Automation',
  'Cybersecurity',
  'Cloud & DevOps',
  'Data & Analytics',
  'Digital Transformation',
  'IoT & Edge Computing',
  'Blockchain & Web3'
];

export const FEATURED_SERVICES = EXPANDED_SERVICES.filter(s => s.isFeatured);
export const NEW_SERVICES = EXPANDED_SERVICES.filter(s => s.isNew);
    id: "ai-services",
    name: "AI Services",
    description: "Artificial Intelligence and Machine Learning solutions",
    icon: "🤖",
    subcategories: ["Chatbots & Conversational AI", "Content Generation", "Data Analytics", "Computer Vision", "Natural Language Processing"]
  },
  {
    id: "cloud-services",
    name: "Cloud Services",
    description: "Cloud infrastructure, migration, and management",
    icon: "☁️",
    subcategories: ["Migration & Consulting", "DevOps & Automation", "Infrastructure Management", "Cost Optimization", "Multi-cloud Strategy"]
  },
  {
    id: "security-services",
    name: "Security Services",
    description: "Cybersecurity, compliance, and risk management",
    icon: "🔒",
    subcategories: ["Cybersecurity", "Compliance", "Penetration Testing", "Security Audits", "Incident Response"]
  },
  {
    id: "consulting-services",
    name: "Consulting Services",
    description: "Strategic technology consulting and digital transformation",
    icon: "💼",
    subcategories: ["Digital Transformation", "Technology Strategy", "Process Optimization", "Change Management", "ROI Analysis"]
  },
  {
    id: "iot-services",
    name: "IoT Services",
    description: "Internet of Things platforms and solutions",
    icon: "🌐",
    subcategories: ["Platform & Management", "Device Integration", "Data Analytics", "Edge Computing", "Smart Solutions"]
  },
  {
    id: "blockchain-services",
    name: "Blockchain Services",
    description: "Blockchain development and Web3 solutions",
    icon: "⛓️",
    subcategories: ["Development & Consulting", "Smart Contracts", "DeFi Applications", "Supply Chain", "Security Auditing"]
  },
  {
    id: "data-services",
    name: "Data Services",
    description: "Data science, analytics, and business intelligence",
    icon: "📊",
    subcategories: ["Data Science & ML", "Business Intelligence", "Data Engineering", "Data Governance", "Predictive Analytics"]
  }
];
    name: "AI & Machine Learning",
    description: "Advanced artificial intelligence and machine learning solutions",
    icon: "🤖",
    count: 3
  },
  {
    name: "Cloud & DevOps",
    description: "Cloud infrastructure and development operations services",
    icon: "☁️",
    count: 3
  },
  {
    name: "Cybersecurity",
    description: "Comprehensive security solutions and protection services",
    icon: "🔒",
    count: 3
  },
  {
    name: "Data & Analytics",
    description: "Data processing, analytics, and business intelligence",
    icon: "📊",
    count: 3
  },
  {
    name: "Web & Mobile Development",
    description: "Custom web and mobile application development",
    icon: "💻",
    count: 3
  },
  {
    name: "Blockchain & Web3",
    description: "Blockchain development and decentralized applications",
    icon: "⛓️",
    count: 3
  },
  {
    name: "IoT & Hardware Integration",
    description: "Internet of Things and hardware integration services",
    icon: "🔌",
    count: 2
  },
  {
    name: "Business Process Automation",
    description: "Workflow automation and business process optimization",
    icon: "⚙️",
    count: 2
  }
];

export const PRICING_TIERS = [
  {
    name: "Starter",
    price: "$1,000 - $3,000",
    description: "Basic services for small businesses",
    features: ["Basic functionality", "Standard support", "Documentation"]
  },
  {
    name: "Professional",
    price: "$3,000 - $8,000",
    description: "Advanced features for growing businesses",
    features: ["Advanced functionality", "Priority support", "Custom integrations", "Training"]
  },
  {
    name: "Enterprise",
    price: "$8,000 - $25,000+",
    description: "Full-featured solutions for large organizations",
    features: ["Full functionality", "24/7 support", "Custom development", "Dedicated team", "SLA guarantees"]
  }
];
  { label: 'Digital Transformation', value: 'digital-transformation' },
  { label: 'IoT & Edge Computing', value: 'iot-edge' },
  { label: 'Blockchain & Web3', value: 'blockchain-web3' }
];
export const FEATURED_SERVICES = EXPANDED_SERVICES.filter(service => service.isFeatured);
export const NEW_SERVICES = EXPANDED_SERVICES.filter(service => service.isNew);
