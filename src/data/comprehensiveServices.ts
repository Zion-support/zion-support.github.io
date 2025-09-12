import { ProductListing } from "@/types/listings";

// Comprehensive Micro SAAS Services, IT Services, and AI Services
export const COMPREHENSIVE_SERVICES: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-chatbot-enterprise",
    title: "Enterprise AI Chatbot Development",
    description: "Custom AI-powered chatbots for customer service, sales, and support. Integrates with CRM, knowledge bases, and existing systems. Includes training, deployment, and ongoing optimization.",
    category: "AI Services",
    subcategory: "Chatbots & Virtual Assistants",
    price: 8999,
    currency: "$",
    tags: ["AI Chatbot", "Customer Service", "CRM Integration", "Natural Language Processing"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1633412802999-5ea7c61b2107?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 96
  },
  {
    id: "ai-content-generation-suite",
    title: "AI Content Generation Suite",
    description: "Complete content creation platform for blogs, social media, marketing copy, and technical documentation. Supports 15+ languages, SEO optimization, and brand voice consistency.",
    category: "AI Services",
    subcategory: "Content Creation",
    price: 299,
    currency: "$",
    tags: ["Content Generation", "SEO", "Multi-language", "Brand Voice"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    rating: 4.7,
    reviewCount: 89,
    location: "Global",
    availability: "Immediate",
    aiScore: 92
  },
  {
    id: "ai-data-analytics-platform",
    title: "AI-Powered Business Analytics Platform",
    description: "Advanced analytics platform with predictive modeling, automated insights, and customizable dashboards. Integrates with major data sources and provides actionable business intelligence.",
    category: "AI Services",
    subcategory: "Data Analytics",
    price: 1499,
    currency: "$",
    tags: ["Business Intelligence", "Predictive Analytics", "Data Visualization", "Automated Insights"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T09:15:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 94
  },

  // IT Infrastructure Services
  {
    id: "cloud-migration-consulting",
    title: "Cloud Migration & Optimization Consulting",
    description: "End-to-end cloud migration services for AWS, Azure, and Google Cloud. Includes assessment, planning, migration execution, and cost optimization strategies.",
    category: "IT Services",
    subcategory: "Cloud Solutions",
    price: 5999,
    currency: "$",
    tags: ["Cloud Migration", "AWS", "Azure", "Cost Optimization", "DevOps"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T11:45:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks"
  },
  {
    id: "data-governance-platform",
    title: "Data Governance & Quality Platform",
    description: "Comprehensive data governance solution with data lineage, quality monitoring, and policy enforcement. Features automated data profiling, metadata management, and compliance tracking.",
    category: "Data Governance",
    price: 2799,
    currency: "$",
    tags: ["Data Governance", "Data Quality", "Lineage", "Compliance"],
    author: {
      name: "Zion Tech Group",
      id: "ziontech",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-25T12:00:00.000Z",
    aiScore: 92,
    rating: 4.7,
    reviewCount: 56,
    location: "Global",
    availability: "1-2 Weeks"
  },

  // Development & DevOps Services
  {
    id: "ai-code-review",
    title: "AI-Powered Code Review Assistant",
    description: "Intelligent code review tool that automatically analyzes code quality, security vulnerabilities, and best practices. Integrates with GitHub, GitLab, and Bitbucket. Improve code quality by 60%.",
    category: "Development Tools",
    price: 599,
    currency: "$",
    tags: ["Code Review", "AI", "Security", "Quality"],
    author: {
      name: "Zion Tech Group",
      id: "ziontech",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T11:20:00.000Z",
    aiScore: 95,
    rating: 4.8,
    reviewCount: 234,
    featured: true,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 89
  },

  // Micro SAAS Solutions
  {
    id: "inventory-management-saas",
    title: "Smart Inventory Management System",
    description: "Cloud-based inventory management solution with barcode scanning, real-time tracking, automated reordering, and analytics. Perfect for retail, manufacturing, and e-commerce businesses.",
    category: "Micro SAAS",
    subcategory: "Business Operations",
    price: 199,
    currency: "$",
    tags: ["Inventory Management", "Barcode Scanning", "Automated Reordering", "Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T10:30:00.000Z",
    rating: 4.6,
    reviewCount: 45,
    location: "Global",
    availability: "Immediate",
    aiScore: 87
  },
  {
    id: "project-management-tool",
    title: "AI-Powered Project Management Platform",
    description: "Intelligent project management tool with task automation, resource optimization, risk assessment, and predictive analytics. Integrates with popular tools like Slack, Jira, and Microsoft Teams.",
    category: "Micro SAAS",
    subcategory: "Project Management",
    price: 299,
    currency: "$",
    tags: ["Project Management", "Task Automation", "Resource Optimization", "Risk Assessment"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T15:45:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 93
  },
  {
    id: "customer-support-automation",
    title: "Customer Support Automation Suite",
    description: "Automated customer support system with ticket routing, knowledge base management, chatbot integration, and performance analytics. Reduces response time and improves customer satisfaction.",
    category: "Micro SAAS",
    subcategory: "Customer Support",
    price: 399,
    currency: "$",
    tags: ["Customer Support", "Ticket Routing", "Knowledge Base", "Chatbot Integration"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T12:00:00.000Z",
    rating: 4.7,
    reviewCount: 89,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 90
  },

  // Advanced AI Solutions
  {
    id: "computer-vision-api",
    title: "Computer Vision API Platform",
    description: "Ready-to-use computer vision APIs for object detection, facial recognition, image classification, and document processing. Includes SDKs for multiple programming languages and comprehensive documentation.",
    category: "AI Services",
    subcategory: "Computer Vision",
    price: 1299,
    currency: "$",
    tags: ["Computer Vision", "Object Detection", "Facial Recognition", "Image Classification"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1624355834900-99cd2071585b?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T09:30:00.000Z",
    rating: 4.9,
    reviewCount: 78,
    featured: true,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 95
  },
  {
    id: "natural-language-processing",
    title: "Natural Language Processing Engine",
    description: "Advanced NLP engine for text analysis, sentiment analysis, language translation, and document summarization. Supports 50+ languages and includes pre-trained models for various industries.",
    category: "AI Services",
    subcategory: "Natural Language Processing",
    price: 2499,
    currency: "$",
    tags: ["NLP", "Text Analysis", "Sentiment Analysis", "Language Translation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T14:15:00.000Z",
    rating: 4.8,
    reviewCount: 56,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 93
  },
  {
    id: "predictive-analytics-engine",
    title: "Predictive Analytics & Forecasting Engine",
    description: "Machine learning-powered predictive analytics platform for sales forecasting, demand planning, risk assessment, and trend analysis. Includes model training, validation, and deployment tools.",
    category: "AI Services",
    subcategory: "Predictive Analytics",
    price: 3999,
    currency: "$",
    tags: ["Predictive Analytics", "Sales Forecasting", "Demand Planning", "Risk Assessment"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-08T11:20:00.000Z",
    rating: 4.9,
    reviewCount: 43,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 96
  },

  // IT Consulting & Strategy
  {
    id: "digital-transformation-strategy",
    title: "Digital Transformation Strategy Consulting",
    description: "Comprehensive digital transformation consulting including technology assessment, roadmap development, change management, and implementation support. Focuses on ROI and business value.",
    category: "IT Services",
    subcategory: "Strategic Consulting",
    price: 12999,
    currency: "$",
    tags: ["Digital Transformation", "Strategy Consulting", "Change Management", "Technology Assessment"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-12T08:45:00.000Z",
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 94
  },
  {
    id: "data-governance-framework",
    title: "Data Governance & Compliance Framework",
    description: "Complete data governance framework including policies, procedures, data quality management, and compliance monitoring. Ensures data security, privacy, and regulatory compliance.",
    category: "IT Services",
    subcategory: "Data Management",
    price: 6999,
    currency: "$",
    tags: ["Data Governance", "Compliance", "Data Quality", "Privacy Management"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-12T10:30:00.000Z",
    rating: 4.7,
    reviewCount: 34,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 88
  },

  // Specialized Micro SAAS
  {
    id: "hr-automation-platform",
    title: "HR Automation & Employee Management Platform",
    description: "Comprehensive HR platform with recruitment automation, performance tracking, employee onboarding, and payroll integration. Streamlines HR processes and improves employee experience.",
    category: "Micro SAAS",
    subcategory: "Human Resources",
    price: 499,
    currency: "$",
    tags: ["HR Automation", "Recruitment", "Performance Tracking", "Employee Onboarding"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T13:45:00.000Z",
    rating: 4.6,
    reviewCount: 78,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 89
  },
  {
    id: "financial-analytics-dashboard",
    title: "Financial Analytics & Reporting Dashboard",
    description: "Real-time financial analytics platform with automated reporting, cash flow forecasting, expense tracking, and KPI monitoring. Integrates with major accounting software and banking systems.",
    category: "Micro SAAS",
    subcategory: "Financial Management",
    price: 399,
    currency: "$",
    tags: ["Financial Analytics", "Cash Flow Forecasting", "Expense Tracking", "KPI Monitoring"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-18T16:20:00.000Z",
    rating: 4.8,
    reviewCount: 56,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 91
  },
  {
    id: "supply-chain-optimization",
    title: "Supply Chain Optimization & Analytics",
    description: "AI-powered supply chain optimization platform with demand forecasting, inventory optimization, supplier management, and logistics optimization. Reduces costs and improves efficiency.",
    category: "Micro SAAS",
    subcategory: "Supply Chain",
    price: 799,
    currency: "$",
    tags: ["Supply Chain", "Demand Forecasting", "Inventory Optimization", "Logistics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T12:00:00.000Z",
    rating: 4.7,
    reviewCount: 45,
    location: "Global",
    availability: "4-6 Weeks"
  },

  // Financial Technology Services
  {
    id: "ai-trading-platform",
    title: "AI Trading Platform",
    description: "Algorithmic trading platform with machine learning models for market analysis and automated trading. Features risk management, backtesting, and real-time market data.",
    category: "FinTech",
    price: 8999,
    currency: "$",
    tags: ["Algorithmic Trading", "Machine Learning", "Risk Management", "Market Data"],
    author: {
      name: "Zion Tech Group",
      id: "ziontech",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-30T15:30:00.000Z",
    aiScore: 97,
    rating: 4.9,
    reviewCount: 78,
    featured: true,
    location: "Global",
    availability: "4-6 Weeks"
  },
  {
    id: "fraud-detection-system",
    title: "AI Fraud Detection System",
    description: "Advanced fraud detection using machine learning and behavioral analysis. Features real-time monitoring, pattern recognition, and automated alerts. Detect fraud with 99.5% accuracy.",
    category: "Fraud Detection",
    price: 3499,
    currency: "$",
    tags: ["Fraud Detection", "Machine Learning", "Behavioral Analysis", "Real-time"],
    author: {
      name: "Zion Tech Group",
      id: "ziontech",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-01T12:00:00.000Z",
    aiScore: 96,
    rating: 4.8,
    reviewCount: 112,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks"
  },

  // Healthcare Technology Services
  {
    id: "healthcare-ai-platform",
    title: "Healthcare AI Platform",
    description: "Comprehensive AI platform for healthcare with diagnostic assistance, patient monitoring, and predictive analytics. Features HIPAA compliance and medical imaging analysis.",
    category: "Healthcare Tech",
    price: 12999,
    currency: "$",
    tags: ["Healthcare AI", "Diagnostic Assistance", "Patient Monitoring", "HIPAA"],
    author: {
      name: "Zion Tech Group",
      id: "ziontech",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1576091160399-112c8f0d0289?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-05T14:45:00.000Z",
    aiScore: 98,
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks"
  },
  {
    id: "telemedicine-platform",
    title: "Telemedicine Platform",
    description: "Complete telemedicine solution with video consultations, appointment scheduling, and patient management. Features AI-powered symptom checker and integration with EHR systems.",
    category: "Telemedicine",
    price: 5999,
    currency: "$",
    tags: ["Telemedicine", "Video Consultations", "EHR Integration", "AI Symptom Checker"],
    author: {
      name: "Zion Tech Group",
      id: "ziontech",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-10T11:20:00.000Z",
    aiScore: 95,
    rating: 4.8,
    reviewCount: 89,
    location: "Global",
    availability: "3-4 Weeks"
  },

  // Education Technology Services
  {
    id: "adaptive-learning-platform",
    title: "Adaptive Learning Platform",
    description: "AI-powered learning platform that personalizes education based on student performance and learning style. Features adaptive content, progress tracking, and analytics.",
    category: "EdTech",
    price: 3999,
    currency: "$",
    tags: ["Adaptive Learning", "Personalization", "Progress Tracking", "Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "ziontech",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-15T16:30:00.000Z",
    aiScore: 94,
    rating: 4.7,
    reviewCount: 134,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks"
  },
  {
    id: "virtual-classroom-solution",
    title: "Virtual Classroom Solution",
    description: "Complete virtual learning environment with video conferencing, interactive whiteboards, and student engagement tools. Features AI-powered attendance tracking and performance analytics.",
    category: "Virtual Learning",
    price: 2499,
    currency: "$",
    tags: ["Virtual Classroom", "Video Conferencing", "Interactive Tools", "Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "ziontech",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-04-20T13:15:00.000Z",
    aiScore: 93,
    rating: 4.6,
    reviewCount: 78,
    location: "Global",
    availability: "1-2 Weeks"
  }
];

// Service categories for filtering
export const SERVICE_CATEGORIES = [
  { label: 'AI Automation', value: 'ai-automation' },
  { label: 'Content AI', value: 'content-ai' },
  { label: 'Customer Analytics', value: 'customer-analytics' },
  { label: 'Cybersecurity', value: 'cybersecurity' },
  { label: 'Compliance', value: 'compliance' },
  { label: 'Cloud Management', value: 'cloud-management' },
  { label: 'Edge Computing', value: 'edge-computing' },
  { label: 'Real-Time Analytics', value: 'real-time-analytics' },
  { label: 'Data Governance', value: 'data-governance' },
  { label: 'Development Tools', value: 'development-tools' },
  { label: 'DevOps', value: 'devops' },
  { label: 'Business Intelligence', value: 'business-intelligence' },
  { label: 'Reporting', value: 'reporting' },
  { label: 'IoT', value: 'iot' },
  { label: 'Smart Buildings', value: 'smart-buildings' },
  { label: 'FinTech', value: 'fintech' },
  { label: 'Fraud Detection', value: 'fraud-detection' },
  { label: 'Healthcare Tech', value: 'healthcare-tech' },
  { label: 'Telemedicine', value: 'telemedicine' },
  { label: 'EdTech', value: 'edtech' },
  { label: 'Virtual Learning', value: 'virtual-learning' }
];

// Pricing tiers for different service levels
export const PRICING_TIERS = {
  basic: { name: 'Basic', multiplier: 0.7, features: ['Core functionality', 'Basic support', 'Standard SLA'] },
  professional: { name: 'Professional', multiplier: 1.0, features: ['Full functionality', 'Priority support', 'Enhanced SLA', 'Custom integrations'] },
  enterprise: { name: 'Enterprise', multiplier: 1.5, features: ['Full functionality', '24/7 support', 'Premium SLA', 'Custom integrations', 'Dedicated account manager', 'On-premise option'] }
};

// Contact information
export const CONTACT_INFO = {
  mobile: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com",
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
  responseTime: "24-48 hours for initial response"
};
