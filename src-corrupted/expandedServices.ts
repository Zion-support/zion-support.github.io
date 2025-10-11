export interface ExpandedService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'monthly' | 'hourly' | 'project-based';
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  pricingModel: 'one-time' | 'monthly' | 'hourly' | 'project-based';
  features: string[];
  benefits: string[];
  marketPrice: string;
  deliveryTime: string;
  tags: string[];
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
import { ProductListing } from "@/types/listings";
// Expanded Services - Real Micro SAAS and IT Solutions
export const EXPANDED_SERVICES: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-chatbot-enterprise",
    title: "Enterprise AI Chatbot Development",
    description: "Custom AI-powered chatbots for customer service, sales, and support with multi-language support, sentiment analysis, and seamless CRM integration. Includes training data preparation and ongoing optimization.",
    category: "AI Development",
    subcategory: "Chatbots",
    price: 8999,
    currency: "$",
    tags: ["Process Automation", "RPA", "Workflow", "AI", "Efficiency"],
import { ProductListing } from "@/types/listings";
// AI & Machine Learning Services
export const AI_SERVICES: ProductListing[] = [
  {
    id: "ai-automation-1",
    title: "AI-Powered Process Automation Suite",
    description: "Complete workflow automation solution using AI to streamline business processes, reduce manual tasks, and increase operational efficiency by up to 300%. Includes process mapping, RPA integration, and analytics dashboard.",
    category: "AI Automation",
    subcategory: "Process Optimization",
    price: 2499,
    currency: "$",
    tags: ["Process Automation", "RPA", "Workflow Optimization", "AI Integration"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 96
  },
  {
    id: "ai-predictive-analytics",
    title: "AI-Powered Predictive Analytics Platform",
    description: "Advanced predictive analytics solution using machine learning algorithms for sales forecasting, customer behavior prediction, and risk assessment. Real-time dashboards and automated reporting included.",
    category: "AI Development",
    subcategory: "Analytics",
    price: 12999,
    currency: "$",
    tags: ["Predictive Analytics", "Machine Learning", "Forecasting", "Business Intelligence"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 94
  },
  {
    id: "ai-nlp-3",
    title: "Natural Language Processing API Suite",
    description: "Comprehensive NLP solution including sentiment analysis, text classification, entity extraction, and language translation. Supports 50+ languages with enterprise-grade accuracy and scalability.",
    category: "AI Development",
    subcategory: "NLP",
    price: 1799,
    currency: "$",
    tags: ["NLP", "Sentiment Analysis", "Text Processing", "API"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
  createdAt: string;
  aiScore: number;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isFeatured?: boolean;
    email?: string;
  };
  images: string[];
  createdAt: string;
  rating: number;
  reviewCount: number;
  aiScore: number;
  website?: string;
  documentation?: string;
  support?: string;
  integration?: string[];
  compliance?: string[];
  sla?: string;
    verified: boolean;
  };
  images: string[];
  createdAt: string;
  aiScore: number;
  rating: number;
  reviewCount: number;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}
export const EXPANDED_SERVICES: ExpandedService[] = [
  // AI & Machine Learning Services
  {
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
    ],
    useCases: [
      "Customer service automation",
      "E-commerce support",
      "Lead qualification",
      "Appointment scheduling",
      "FAQ handling"
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
      name: "Zion AI Solutions",
      id: "zion-ai-solutions",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 127,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-ml-002",
    title: "Predictive Analytics Dashboard",
    description: "Create comprehensive predictive analytics dashboards that forecast business trends, customer behavior, and market opportunities.",
    category: "AI & Machine Learning",
    subcategory: "Predictive Analytics",
    price: 5500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Advanced statistical modeling",
      "Real-time data processing",
      "Interactive visualizations",
      "Automated reporting",
      "API integration capabilities",
      "Custom algorithm development"
    ],
    benefits: [
      "Identify market trends before competitors",
      "Optimize resource allocation",
      "Improve decision-making accuracy",
      "Reduce operational risks",
      "Increase revenue through better insights"
    ],
    marketPrice: "$4,500 - $12,000",
    deliveryTime: "6-8 weeks",
    tags: ["Predictive Analytics", "Data Science", "Business Intelligence", "Machine Learning"],
    author: {
      name: "DataVision Pro",
      id: "datavision-pro",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 89,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-ml-003",
    title: "Computer Vision API Integration",
    description: "Integrate advanced computer vision capabilities into your applications for image recognition, object detection, and visual analysis.",
    category: "AI & Machine Learning",
    subcategory: "Computer Vision",
    price: 4200,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Image classification and recognition",
      "Object detection and tracking",
      "Facial recognition systems",
      "Document processing (OCR)",
      "Quality control automation",
      "Real-time video analysis"
    ],
    benefits: [
      "Automate visual inspection processes",
      "Improve security and surveillance",
      "Enhance user experience",
      "Reduce manual review time",
      "Increase accuracy in visual tasks"
    ],
    marketPrice: "$3,500 - $9,000",
    deliveryTime: "5-7 weeks",
    tags: ["Computer Vision", "Image Recognition", "AI Integration", "Automation"],
    author: {
      name: "VisionTech Labs",
      id: "visiontech-labs",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:15:00.000Z",
    aiScore: 93,
    rating: 4.7,
    reviewCount: 156,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // Cloud & DevOps Services
  {
    id: "cloud-migration-enterprise",
    title: "Enterprise Cloud Migration & Optimization",
    description: "End-to-end cloud migration services including AWS, Azure, and Google Cloud. Includes cost optimization, security implementation, performance tuning, and 24/7 monitoring setup.",
    category: "Cloud Services",
    subcategory: "Migration",
    price: 15999,
    currency: "$",
    tags: ["Cloud Migration", "AWS", "Azure", "Cost Optimization", "Security"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T09:45:00.000Z",
    rating: 4.9,
    reviewCount: 134,
    featured: true,
    location: "Global",
    availability: "8-12 Weeks",
    aiScore: 93
  },
  {
    id: "devops-automation-suite",
    title: "DevOps Automation & CI/CD Pipeline",
    description: "Complete DevOps automation solution with automated testing, deployment pipelines, infrastructure as code, and monitoring. Supports Docker, Kubernetes, and major cloud platforms.",
    category: "DevOps",
    subcategory: "Automation",
    price: 8999,
    currency: "$",
    tags: ["DevOps", "CI/CD", "Docker", "Kubernetes", "Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T16:20:00.000Z",
    rating: 4.8,
    reviewCount: 78,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 91
  },
  {
    id: "kubernetes-management",
    title: "Kubernetes Cluster Management & Monitoring",
    description: "Professional Kubernetes cluster setup, management, and monitoring services. Includes auto-scaling, load balancing, security hardening, and performance optimization.",
    category: "DevOps",
    subcategory: "Kubernetes",
    price: 6499,
    currency: "$",
    tags: ["Kubernetes", "Container Orchestration", "Auto-scaling", "Monitoring"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T13:10:00.000Z",
    rating: 4.7,
    reviewCount: 45,
    location: "Global",
    availability: "3-5 Weeks",
    aiScore: 89
  },
  // Cybersecurity Services
  {
    id: "cybersecurity-audit-complete",
    title: "Comprehensive Cybersecurity Audit & Penetration Testing",
    description: "Full security assessment including vulnerability scanning, penetration testing, social engineering tests, and compliance audit. Detailed report with remediation recommendations.",
    category: "Cybersecurity",
    subcategory: "Audit & Testing",
    price: 18999,
    currency: "$",
    tags: ["Penetration Testing", "Vulnerability Assessment", "Compliance", "Security Audit"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T10:30:00.000Z",
    rating: 4.9,
    reviewCount: 134,
    isFeatured: true
  },
  {
    id: "ai-threat-detection",
    title: "AI-Powered Threat Detection & Response",
    description: "Next-generation threat detection system using machine learning to identify and respond to cyber threats in real-time, reducing response time from hours to seconds.",
    category: "Cybersecurity",
    subcategory: "Threat Detection",
    price: 4200,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "AI-powered threat detection",
      "Real-time monitoring",
      "Automated response actions",
      "Threat intelligence feeds",
      "Behavioral analysis",
      "Incident reporting"
    ],
    benefits: [
      "Detect threats 10x faster",
      "Reduce false positives by 80%",
      "Automated incident response",
      "24/7 threat monitoring",
      "Predictive threat analysis"
    ],
    useCases: [
      "Network security monitoring",
      "Endpoint protection",
      "Cloud security",
      "IoT device security",
      "Compliance monitoring"
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
    aiScore: 96,
    website: "https://ziontechgroup.com/ai-analytics",
    documentation: "https://docs.ziontechgroup.com/ai-analytics",
    support: "24/7 dedicated support",
    integration: ["Salesforce", "HubSpot", "QuickBooks", "Shopify", "AWS"],
    compliance: ["GDPR", "SOC 2", "HIPAA", "PCI DSS"],
    sla: "99.99% uptime guarantee"
  },
  // Cloud & DevOps Services
  {
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T09:15:00.000Z",
    rating: 4.7,
    reviewCount: 67,
    location: "Global",
    availability: "Immediate",
    aiScore: 92
  },
  {
    id: "ai-computer-vision-4",
    title: "Computer Vision & Image Recognition Platform",
    description: "Advanced computer vision solution for object detection, facial recognition, quality control, and automated inspection. Includes pre-trained models and custom training capabilities for industry-specific applications.",
    category: "AI Development",
    subcategory: "Computer Vision",
    price: 2999,
    currency: "$",
    tags: ["Computer Vision", "Image Recognition", "Object Detection", "Quality Control"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      email: "kleber@ziontechgroup.com",
    },
    description: "Intelligent multi-cloud management platform that optimizes costs, improves performance, and provides unified governance across AWS, Azure, Google Cloud, and private clouds.",
    category: "Cloud & DevOps",
    subcategory: "Multi-Cloud",
    price: 3200,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Multi-cloud cost optimization",
      "Unified monitoring dashboard",
      "Automated resource scaling",
      "Cross-cloud security policies",
      "Performance analytics",
      "Compliance management"
    ],
    benefits: [
      "Reduce cloud costs by 30%",
      "Improve performance by 40%",
      "Unified security management",
      "Automated compliance",
      "Single pane of glass"
    ],
    useCases: [
      "Multi-cloud strategy",
      "Cost optimization",
      "Performance monitoring",
      "Security compliance",
      "Disaster recovery"
    ],
    marketPrice: "$3,200 - $6,500/month",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Multi-Cloud", "Cost Optimization", "DevOps", "Cloud Management"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T16:20:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 112,
    isFeatured: true
  },
  {
    id: "zero-trust-security",
    title: "Zero Trust Security Architecture Implementation",
    description: "Implementation of zero trust security model with multi-factor authentication, micro-segmentation, continuous monitoring, and least privilege access controls.",
    category: "Cybersecurity",
    subcategory: "Architecture",
    price: 24999,
    currency: "$",
    tags: ["Zero Trust", "Multi-factor Authentication", "Micro-segmentation", "Access Control"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T15:45:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 93
  },
  {
    id: "incident-response-planning",
    title: "Incident Response Planning & Tabletop Exercises",
    description: "Comprehensive incident response planning including playbook development, team training, tabletop exercises, and ongoing support. Covers ransomware, data breaches, and system compromises.",
    category: "Cybersecurity",
    subcategory: "Incident Response",
    price: 12999,
    currency: "$",
    tags: ["Incident Response", "Tabletop Exercises", "Ransomware", "Data Breach"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-25T12:00:00.000Z",
    rating: 4.7,
    reviewCount: 89,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 90
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
    subcategory: "Business Intelligence",
    price: 3800,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Real-time data processing",
      "Predictive analytics",
      "Interactive dashboards",
      "Data visualization",
      "Automated reporting",
      "Mobile analytics"
    ],
    benefits: [
      "Make decisions 5x faster",
      "Identify trends in real-time",
      "Predict future outcomes",
      "Improve customer experience",
      "Increase revenue by 25%"
    ],
    useCases: [
      "Sales performance tracking",
      "Customer behavior analysis",
      "Financial reporting",
      "Marketing campaign optimization",
      "Operational efficiency"
    ],
    marketPrice: "$3,800 - $7,200/month",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Business Intelligence", "Real-Time Analytics", "Predictive Analytics", "Data Visualization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T15:45:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 167,
    isFeatured: true
  },
  {
    id: "data-governance",
    title: "Data Governance & Compliance Platform",
    description: "Comprehensive data governance solution that ensures data quality, privacy compliance, and regulatory adherence across all data assets.",
    category: "Data & Analytics",
    subcategory: "Data Governance",
    price: 4500,
    currency: "$",
    pricingModel: "subscription",
    features: [
      "Data quality management",
      "Privacy compliance tools",
      "Data lineage tracking",
      "Access control management",
      "Audit trail reporting",
      "Regulatory compliance"
    ],
    benefits: [
      "Ensure data quality and accuracy",
      "Meet GDPR, CCPA compliance",
      "Reduce data risks",
      "Improve decision making",
      "Protect customer privacy"
    ],
    useCases: [
      "Data quality management",
      "Privacy compliance",
      "Regulatory reporting",
      "Data security",
      "Audit preparation"
    ],
    marketPrice: "$4,500 - $9,000/month",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Data Governance", "Compliance", "Privacy", "Data Quality"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T10:30:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 89,
    isNew: true
    targetAudience: ["Software companies", "Tech startups", "Enterprises", "Development teams", "DevOps engineers"],
    tags: ["DevOps", "CI/CD", "Automation", "Docker", "Kubernetes"],
    author: {
      name: "Zion DevOps",
      id: "zion-devops",
      email: "devops@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T15:45:00.000Z",
    rating: 4.7,
    reviewCount: 123,
    aiScore: 91,
    website: "https://ziontechgroup.com/devops-automation",
    documentation: "https://docs.ziontechgroup.com/devops-automation",
    support: "Business hours + emergency support",
    integration: ["GitHub", "GitLab", "Jenkins", "Docker", "Kubernetes"],
    compliance: ["SOC 2", "ISO 27001"],
    sla: "99.9% uptime guarantee"
  },
  // Cybersecurity Services
  {
    id: "cybersecurity-suite",
    title: "Enterprise Cybersecurity Suite",
    description: "Comprehensive cybersecurity solution with threat detection, vulnerability assessment, and 24/7 security monitoring.",
    category: "Security Services",
    subcategory: "Cybersecurity",
    price: 899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "24/7 threat monitoring",
      "Vulnerability assessment",
      "Penetration testing",
      "Security awareness training",
      "Incident response",
      "Compliance reporting"
    ],
    benefits: [
      "Protect against 99.9% of threats",
      "Meet compliance requirements",
      "Reduce security incidents",
      "Protect brand reputation",
      "Lower insurance costs"
    ],
    useCases: [
      "Financial services",
      "Healthcare organizations",
      "E-commerce platforms",
      "Government agencies",
      "Educational institutions"
    ],
    targetAudience: ["Enterprises", "Financial services", "Healthcare", "Government", "Education"],
    tags: ["Cybersecurity", "Threat Detection", "Compliance", "Penetration Testing", "Security"],
    author: {
      name: "Zion Security",
      id: "zion-security",
      email: "security@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T13:20:00.000Z",
    rating: 4.9,
    reviewCount: 189,
    aiScore: 97,
    website: "https://ziontechgroup.com/cybersecurity",
    documentation: "https://docs.ziontechgroup.com/cybersecurity",
    support: "24/7 security operations center",
    integration: ["SIEM", "EDR", "Firewall", "IDS/IPS", "Vulnerability scanners"],
    compliance: ["SOC 2", "ISO 27001", "PCI DSS", "HIPAA", "GDPR"],
    sla: "15-minute incident response time"
  },
  {
    id: "compliance-automation",
    title: "Compliance Automation Platform",
    description: "Automated compliance management platform for GDPR, HIPAA, SOC 2, and other regulatory requirements with real-time monitoring.",
    category: "Security Services",
    subcategory: "Compliance",
    price: 599,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated compliance checks",
      "Real-time monitoring",
      "Audit trail management",
      "Policy templates",
      "Risk assessment",
      "Automated reporting"
    ],
    benefits: [
      "Reduce compliance costs by 50%",
      "Eliminate manual processes",
      "Stay audit-ready 24/7",
      "Reduce compliance risks",
      "Faster time to compliance"
    ],
    useCases: [
      "GDPR compliance",
      "HIPAA compliance",
      "SOC 2 certification",
      "PCI DSS compliance",
      "Industry regulations"
    ],
    targetAudience: ["Healthcare", "Financial services", "E-commerce", "SaaS companies", "Enterprises"],
    tags: ["Compliance", "GDPR", "HIPAA", "SOC 2", "Automation"],
    author: {
      name: "Zion Compliance",
      id: "zion-compliance",
      email: "compliance@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T10:30:00.000Z",
    rating: 4.8,
    reviewCount: 145,
    aiScore: 94,
    website: "https://ziontechgroup.com/compliance-automation",
    documentation: "https://docs.ziontechgroup.com/compliance-automation",
    support: "Business hours + compliance emergency support",
    integration: ["HR systems", "CRM", "ERP", "Cloud platforms", "Security tools"],
    compliance: ["GDPR", "HIPAA", "SOC 2", "PCI DSS", "CCPA"],
    sla: "99.9% compliance monitoring uptime"
  },
  // Digital Transformation Services
  {
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
  { label: 'AI & Machine Learning', value: 'ai-ml' },
  { label: 'Cybersecurity', value: 'cybersecurity' },
  { label: 'Cloud & DevOps', value: 'cloud-devops' },
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
    id: "progressive-web-app",
    title: "Progressive Web App (PWA) Development",
    description: "Modern PWA development with offline functionality, push notifications, and app-like experience. Includes cross-platform compatibility and performance optimization.",
    category: "Web Development",
    subcategory: "PWA",
    price: 12999,
    currency: "$",
    tags: ["PWA", "Offline Functionality", "Push Notifications", "Cross-platform"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-15T16:20:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 90
  },
  {
    id: "mobile-app-cross-platform",
    title: "Cross-Platform Mobile App Development",
    description: "Native-quality mobile apps for iOS and Android using React Native or Flutter. Includes backend API development, testing, and app store deployment.",
    category: "Mobile Development",
    subcategory: "Cross-platform",
    price: 18999,
    currency: "$",
    tags: ["React Native", "Flutter", "iOS", "Android", "Backend API"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-20T13:10:00.000Z",
    rating: 4.7,
    reviewCount: 78,
    location: "Global",
    availability: "8-12 Weeks",
    aiScore: 89
  },
  {
    id: "ecommerce-platform-custom",
    title: "Custom E-commerce Platform Development",
    description: "Full-featured e-commerce platform with inventory management, payment processing, order tracking, and customer management. Includes admin dashboard and mobile app.",
    category: "Web Development",
    subcategory: "E-commerce",
    price: 24999,
    currency: "$",
    tags: ["E-commerce", "Payment Processing", "Inventory Management", "Admin Dashboard"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-25T10:30:00.000Z",
    rating: 4.9,
    reviewCount: 134,
    featured: true,
    location: "Global",
    availability: "10-14 Weeks",
    aiScore: 93
  },
  // Blockchain & Web3 Services
  {
    id: "smart-contract-development",
    title: "Smart Contract Development & Audit",
    description: "Ethereum, Solana, and Polygon smart contract development with comprehensive security auditing. Includes DeFi protocols, NFT contracts, and DAO governance systems.",
    category: "Blockchain",
    subcategory: "Smart Contracts",
    price: 15999,
    currency: "$",
    tags: ["Smart Contracts", "Ethereum", "DeFi", "NFT", "Security Audit"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-30T15:45:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 91
  },
  {
    id: "defi-protocol-development",
    title: "DeFi Protocol Development & Integration",
    description: "Custom DeFi protocols including yield farming, liquidity pools, and lending platforms. Includes security audits, testing, and mainnet deployment.",
    category: "Blockchain",
    subcategory: "DeFi",
    price: 29999,
    currency: "$",
    tags: ["DeFi", "Yield Farming", "Liquidity Pools", "Lending", "Security"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1621416894560-8a5c5baaacaa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-05T12:00:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "10-14 Weeks",
    aiScore: 94
  },
  // IoT & Hardware Integration
  {
    id: "iot-platform-development",
    title: "IoT Platform Development & Device Integration",
    description: "Complete IoT platform with device management, data collection, real-time monitoring, and analytics. Supports multiple protocols and cloud platforms.",
    category: "IoT",
    subcategory: "Platform Development",
    price: 19999,
    currency: "$",
    tags: ["IoT", "Device Management", "Real-time Monitoring", "Data Collection"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-10T09:30:00.000Z",
    rating: 4.7,
    reviewCount: 56,
    location: "Global",
    availability: "8-12 Weeks",
    aiScore: 89
  },
  {
    id: "hardware-prototyping",
    title: "Hardware Prototyping & PCB Design",
    description: "Custom hardware prototyping services including PCB design, component selection, firmware development, and testing. Supports IoT, robotics, and embedded systems.",
    category: "Hardware",
    subcategory: "Prototyping",
    price: 12999,
    currency: "$",
    tags: ["PCB Design", "Hardware Prototyping", "Firmware", "IoT", "Robotics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-15T14:15:00.000Z",
    rating: 4.8,
    reviewCount: 78,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 90
  },
  // Business Intelligence & Automation
  {
    id: "business-process-automation",
    title: "Business Process Automation & RPA",
    description: "End-to-end business process automation using RPA tools and custom software. Includes workflow analysis, implementation, and ongoing optimization.",
    category: "Business Automation",
    subcategory: "RPA",
    price: 17999,
    currency: "$",
    tags: ["RPA", "Process Automation", "Workflow", "Optimization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-20T11:00:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 91
  },
  {
    id: "erp-system-custom",
    title: "Custom ERP System Development",
    description: "Tailored ERP system with modules for finance, HR, inventory, CRM, and project management. Includes mobile app, reporting, and integration capabilities.",
    category: "Business Solutions",
    subcategory: "ERP",
    price: 39999,
    currency: "$",
    tags: ["ERP", "Finance", "HR", "Inventory", "CRM"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-25T16:45:00.000Z",
    rating: 4.9,
    reviewCount: 112,
    featured: true,
    location: "Global",
    availability: "12-16 Weeks",
    aiScore: 94
  }
];
// Service categories for filtering
export const EXPANDED_SERVICE_CATEGORIES = [
  { label: 'AI Development', value: 'ai-development' },
  { label: 'Cloud Services', value: 'cloud-services' },
  { label: 'DevOps', value: 'devops' },
  { label: 'Cybersecurity', value: 'cybersecurity' },
  { label: 'Data Analytics', value: 'data-analytics' },
  { label: 'Web Development', value: 'web-development' },
  { label: 'Mobile Development', value: 'mobile-development' },
  { label: 'Blockchain', value: 'blockchain' },
  { label: 'IoT', value: 'iot' },
  { label: 'Hardware', value: 'hardware' },
  { label: 'Business Automation', value: 'business-automation' },
  { label: 'Business Solutions', value: 'business-solutions' }
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
