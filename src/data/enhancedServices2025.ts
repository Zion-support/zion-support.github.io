import { ProductListing } from "@/types/listings";
// Enhanced 2025 Services - Real, Market-Competitive Micro SAAS, IT & AI Services
export const ENHANCED_SERVICES_2025: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-autonomous-business-manager",
    title: "AI Autonomous Business Manager Pro",
    description: "Fully autonomous AI business management system that handles operations, decision-making, and strategic planning. Includes real-time analytics, automated workflows, and predictive insights for business optimization.",
    category: "AI & ML",
    subcategory: "Business Intelligence",
    price: 2499,
    currency: "$",
    tags: ["AI Management", "Business Automation", "Predictive Analytics", "Workflow Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 234,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 98,
    marketPrice: 3499,
    savings: "29%",
    features: [
      "24/7 Autonomous Operations",
      "Real-time Business Intelligence",
      "Predictive Market Analysis",
      "Automated Decision Making",
      "Multi-platform Integration"
    ]
  },
  {
    id: "ai-content-factory-enterprise",
    title: "AI Content Factory Enterprise",
    description: "Enterprise-grade AI content generation platform that produces high-quality, SEO-optimized content at scale. Supports 50+ languages, multiple content types, and brand voice customization.",
    category: "AI & ML",
    subcategory: "Content Generation",
    price: 899,
    currency: "$",
    tags: ["Content Generation", "SEO Optimization", "Multi-language", "Brand Voice"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-01-20T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 156,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 96,
    marketPrice: 1299,
    savings: "31%",
    features: [
      "Unlimited Content Generation",
      "SEO Optimization Engine",
      "Brand Voice Training",
      "Multi-language Support",
      "Content Analytics Dashboard"
    ]
  },
  {
    id: "ai-cybersecurity-sentinel",
    title: "AI Cybersecurity Sentinel Platform",
    description: "Advanced AI-powered cybersecurity platform with real-time threat detection, automated incident response, and predictive security analytics. Protects against zero-day attacks and provides 24/7 security monitoring.",
    category: "AI & ML",
    subcategory: "Cybersecurity",
    price: 1899,
    currency: "$",
    tags: ["Cybersecurity", "Threat Detection", "AI Security", "Incident Response"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-01-25T11:15:00.000Z",
    rating: 4.9,
    reviewCount: 189,
    featured: true,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 97,
    marketPrice: 2499,
    savings: "24%",
    features: [
      "Real-time Threat Detection",
      "AI-powered Incident Response",
      "Predictive Security Analytics",
      "Zero-day Attack Protection",
      "24/7 Security Monitoring"
    ]
  },
  // Cloud & DevOps Services
  {
    id: "quantum-cloud-infrastructure",
    title: "Quantum Cloud Infrastructure Platform",
    description: "Next-generation cloud infrastructure powered by quantum computing principles. Offers unprecedented performance, security, and scalability for enterprise applications with quantum-resistant encryption.",
    category: "Cloud Services",
    subcategory: "Infrastructure",
    price: 3999,
    currency: "$",
    tags: ["Quantum Computing", "Cloud Infrastructure", "Quantum Security", "Enterprise Scale"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-01-30T09:45:00.000Z",
    rating: 4.9,
    reviewCount: 134,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 95,
    marketPrice: 5499,
    savings: "27%",
    features: [
      "Quantum Computing Integration",
      "Quantum-resistant Encryption",
      "Unlimited Scalability",
      "Global Edge Network",
      "AI-powered Optimization"
    ]
  },
  {
    id: "autonomous-devops-platform",
    title: "Autonomous DevOps Platform",
    description: "Self-managing DevOps platform that automatically handles CI/CD, infrastructure provisioning, monitoring, and optimization. Reduces DevOps overhead by 80% while improving deployment reliability.",
    category: "Cloud Services",
    subcategory: "DevOps",
    price: 1299,
    currency: "$",
    tags: ["DevOps Automation", "CI/CD", "Infrastructure as Code", "Auto-scaling"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-02-05T15:20:00.000Z",
    rating: 4.8,
    reviewCount: 98,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 94,
    marketPrice: 1799,
    savings: "28%",
    features: [
      "Automated CI/CD Pipelines",
      "Self-healing Infrastructure",
      "Intelligent Auto-scaling",
      "Performance Optimization",
      "Cost Management"
    ]
  },
  // IoT & Edge Computing
  {
    id: "iot-edge-intelligence-platform",
    title: "IoT Edge Intelligence Platform",
    description: "Advanced IoT platform with edge computing capabilities, real-time data processing, and AI-powered analytics. Enables smart cities, industrial automation, and connected device ecosystems.",
    category: "IoT Services",
    subcategory: "Edge Computing",
    price: 2199,
    currency: "$",
    tags: ["IoT Platform", "Edge Computing", "Real-time Analytics", "Smart Cities"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-02-10T12:00:00.000Z",
    rating: 4.7,
    reviewCount: 76,
    location: "Global",
    availability: "4-5 Weeks",
    aiScore: 93,
    marketPrice: 2999,
    savings: "27%",
    features: [
      "Edge AI Processing",
      "Real-time Data Analytics",
      "Device Management",
      "Security & Compliance",
      "Scalable Architecture"
    ]
  },
  // Blockchain & Web3 Services
  {
    id: "blockchain-governance-platform",
    title: "AI-Powered Blockchain Governance Platform",
    description: "Intelligent blockchain governance system with AI-driven decision making, automated compliance, and transparent voting mechanisms. Ideal for DAOs, DeFi protocols, and enterprise blockchain networks.",
    category: "Blockchain Services",
    subcategory: "Governance",
    price: 1699,
    currency: "$",
    tags: ["Blockchain", "AI Governance", "DAO Management", "DeFi Integration"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-02-15T16:30:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 92,
    marketPrice: 2299,
    savings: "26%",
    features: [
      "AI-powered Decision Making",
      "Automated Compliance",
      "Transparent Voting",
      "Multi-chain Support",
      "Smart Contract Integration"
    ]
  },
  // Healthcare & Biotech AI
  {
    id: "ai-biomedical-research-platform",
    title: "AI Biomedical Research Platform",
    description: "Advanced AI platform for biomedical research, drug discovery, and clinical trials. Accelerates research timelines by 10x while improving accuracy and reducing costs.",
    category: "AI & ML",
    subcategory: "Healthcare",
    price: 4999,
    currency: "$",
    tags: ["Biomedical Research", "Drug Discovery", "Clinical Trials", "AI Healthcare"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1576091160399-112c8b76a755?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-02-20T10:15:00.000Z",
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    location: "Global",
    availability: "8-10 Weeks",
    aiScore: 96,
    marketPrice: 6999,
    savings: "29%",
    features: [
      "Drug Discovery AI",
      "Clinical Trial Optimization",
      "Biomarker Analysis",
      "Regulatory Compliance",
      "Research Collaboration Tools"
    ]
  },
  // Financial Services AI
  {
    id: "ai-financial-trading-platform",
    title: "AI Financial Trading Platform",
    description: "Intelligent trading platform with AI-powered market analysis, automated trading strategies, and risk management. Provides institutional-grade tools for algorithmic trading and portfolio optimization.",
    category: "AI & ML",
    subcategory: "Financial Services",
    price: 2999,
    currency: "$",
    tags: ["Algorithmic Trading", "AI Trading", "Risk Management", "Portfolio Optimization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-02-25T14:45:00.000Z",
    rating: 4.8,
    reviewCount: 112,
    location: "Global",
    availability: "4-5 Weeks",
    aiScore: 95,
    marketPrice: 3999,
    savings: "25%",
    features: [
      "AI Market Analysis",
      "Automated Trading Strategies",
      "Risk Management",
      "Portfolio Optimization",
      "Real-time Analytics"
    ]
  },
  // Space Technology Services
  {
    id: "space-tech-ai-platform",
    title: "Space Technology AI Platform",
    description: "Revolutionary AI platform for space exploration, satellite management, and space data analytics. Enables autonomous space missions and advanced space research capabilities.",
    category: "Space Technology",
    subcategory: "AI Platform",
    price: 5999,
    currency: "$",
    tags: ["Space Technology", "Satellite Management", "Space AI", "Autonomous Missions"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-03-01T11:00:00.000Z",
    rating: 4.9,
    reviewCount: 45,
    featured: true,
    location: "Global",
    availability: "10-12 Weeks",
    aiScore: 97,
    marketPrice: 7999,
    savings: "25%",
    features: [
      "Autonomous Space Missions",
      "Satellite AI Management",
      "Space Data Analytics",
      "Mission Planning",
      "Real-time Monitoring"
    ]
  },
  // Green Technology Services
  {
    id: "ai-climate-prediction-engine",
    title: "AI Climate Prediction Engine",
    description: "Advanced AI system for climate modeling, weather prediction, and environmental impact analysis. Helps organizations make data-driven decisions for sustainability and climate resilience.",
    category: "AI & ML",
    subcategory: "Climate Technology",
    price: 1799,
    currency: "$",
    tags: ["Climate AI", "Weather Prediction", "Environmental Analysis", "Sustainability"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-03-05T13:20:00.000Z",
    rating: 4.7,
    reviewCount: 78,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 94,
    marketPrice: 2399,
    savings: "25%",
    features: [
      "Climate Modeling AI",
      "Weather Prediction",
      "Environmental Impact Analysis",
      "Sustainability Metrics",
      "Real-time Monitoring"
    ]
  },
  // Legal Technology AI
  {
    id: "ai-legal-research-assistant",
    title: "AI Legal Research Assistant Pro",
    description: "Intelligent legal research platform with AI-powered case analysis, document review, and legal precedent identification. Reduces research time by 90% while improving accuracy.",
    category: "AI & ML",
    subcategory: "Legal Technology",
    price: 1299,
    currency: "$",
    tags: ["Legal AI", "Case Analysis", "Document Review", "Legal Research"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-03-10T15:30:00.000Z",
    rating: 4.8,
    reviewCount: 93,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 93,
    marketPrice: 1799,
    savings: "28%",
    features: [
      "AI Case Analysis",
      "Document Review",
      "Legal Precedent Search",
      "Compliance Checking",
      "Research Automation"
    ]
  },
  // Education Technology AI
  {
    id: "ai-education-professor",
    title: "AI Education Professor Platform",
    description: "Revolutionary AI-powered education platform that provides personalized learning experiences, adaptive curriculum, and intelligent tutoring. Supports all subjects and learning styles.",
    category: "AI & ML",
    subcategory: "Education Technology",
    price: 899,
    currency: "$",
    tags: ["AI Education", "Personalized Learning", "Adaptive Curriculum", "Intelligent Tutoring"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-03-15T12:45:00.000Z",
    rating: 4.8,
    reviewCount: 156,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 95,
    marketPrice: 1299,
    savings: "31%",
    features: [
      "Personalized Learning Paths",
      "Adaptive Curriculum",
      "Intelligent Tutoring",
      "Progress Tracking",
      "Multi-subject Support"
    ]
  },
  // Manufacturing AI
  {
    id: "ai-manufacturing-optimization",
    title: "AI Manufacturing Optimization Suite",
    description: "Comprehensive AI suite for manufacturing optimization, predictive maintenance, quality control, and supply chain management. Increases efficiency by 40% while reducing costs.",
    category: "AI & ML",
    subcategory: "Manufacturing",
    price: 2499,
    currency: "$",
    tags: ["Manufacturing AI", "Predictive Maintenance", "Quality Control", "Supply Chain"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-03-20T09:15:00.000Z",
    rating: 4.9,
    reviewCount: 87,
    location: "Global",
    availability: "4-5 Weeks",
    aiScore: 96,
    marketPrice: 3299,
    savings: "24%",
    features: [
      "Predictive Maintenance",
      "Quality Control AI",
      "Supply Chain Optimization",
      "Production Planning",
      "Performance Analytics"
    ]
  },
  // Retail & E-commerce AI
  {
    id: "ai-retail-intelligence-platform",
    title: "AI Retail Intelligence Platform",
    description: "Intelligent retail platform with customer behavior analysis, inventory optimization, and personalized marketing automation. Increases sales by 35% and reduces inventory costs.",
    category: "AI & ML",
    subcategory: "Retail Technology",
    price: 1599,
    currency: "$",
    tags: ["Retail AI", "Customer Analytics", "Inventory Optimization", "Marketing Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-03-25T16:00:00.000Z",
    rating: 4.7,
    reviewCount: 124,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 94,
    marketPrice: 2199,
    savings: "27%",
    features: [
      "Customer Behavior Analysis",
      "Inventory Optimization",
      "Personalized Marketing",
      "Sales Forecasting",
      "Performance Analytics"
    ]
  },
  // Transportation & Logistics AI
  {
    id: "ai-logistics-optimization",
    title: "AI Logistics Optimization Platform",
    description: "Advanced logistics platform with route optimization, demand forecasting, and autonomous fleet management. Reduces delivery times by 30% and operational costs by 25%.",
    category: "AI & ML",
    subcategory: "Logistics",
    price: 1999,
    currency: "$",
    tags: ["Logistics AI", "Route Optimization", "Fleet Management", "Demand Forecasting"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-03-30T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 98,
    location: "Global",
    availability: "4-5 Weeks",
    aiScore: 95,
    marketPrice: 2699,
    savings: "26%",
    features: [
      "Route Optimization",
      "Demand Forecasting",
      "Autonomous Fleet Management",
      "Real-time Tracking",
      "Cost Optimization"
    ]
  },
  // Energy & Utilities AI
  {
    id: "ai-energy-management-system",
    title: "AI Energy Management System",
    description: "Intelligent energy management platform with demand response, renewable energy integration, and grid optimization. Reduces energy costs by 20% and improves sustainability.",
    category: "AI & ML",
    subcategory: "Energy Management",
    price: 1799,
    currency: "$",
    tags: ["Energy AI", "Demand Response", "Renewable Energy", "Grid Optimization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-04-01T11:45:00.000Z",
    rating: 4.7,
    reviewCount: 76,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 93,
    marketPrice: 2399,
    savings: "25%",
    features: [
      "Demand Response AI",
      "Renewable Energy Integration",
      "Grid Optimization",
      "Energy Analytics",
      "Sustainability Metrics"
    ]
  },
  // Real Estate AI
  {
    id: "ai-real-estate-analytics",
    title: "AI Real Estate Analytics Platform",
    description: "Comprehensive real estate platform with market analysis, property valuation, and investment insights. Provides data-driven decisions for real estate professionals and investors.",
    category: "AI & ML",
    subcategory: "Real Estate",
    price: 1199,
    currency: "$",
    tags: ["Real Estate AI", "Market Analysis", "Property Valuation", "Investment Insights"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-04-05T13:15:00.000Z",
    rating: 4.8,
    reviewCount: 134,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 94,
    marketPrice: 1599,
    savings: "25%",
    features: [
      "Market Analysis AI",
      "Property Valuation",
      "Investment Insights",
      "Trend Prediction",
      "Portfolio Management"
    ]
  },
  // Media & Entertainment AI
  {
    id: "ai-media-production-suite",
    title: "AI Media Production Suite",
    description: "Revolutionary AI-powered media production platform for video editing, content creation, and media optimization. Reduces production time by 60% while improving quality.",
    category: "AI & ML",
    subcategory: "Media Technology",
    price: 1399,
    currency: "$",
    tags: ["Media AI", "Video Editing", "Content Creation", "Media Optimization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-04-10T15:45:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 95,
    marketPrice: 1899,
    savings: "26%",
    features: [
      "AI Video Editing",
      "Content Generation",
      "Media Optimization",
      "Quality Enhancement",
      "Automated Workflows"
    ]
  },
  // Agriculture Technology AI
  {
    id: "ai-agriculture-optimization",
    title: "AI Agriculture Optimization Platform",
    description: "Intelligent agriculture platform with crop monitoring, yield prediction, and precision farming capabilities. Increases crop yields by 25% while reducing resource usage.",
    category: "AI & ML",
    subcategory: "Agriculture Technology",
    price: 1599,
    currency: "$",
    tags: ["Agriculture AI", "Crop Monitoring", "Yield Prediction", "Precision Farming"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-04-15T12:30:00.000Z",
    rating: 4.7,
    reviewCount: 67,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 93,
    marketPrice: 2199,
    savings: "27%",
    features: [
      "Crop Monitoring AI",
      "Yield Prediction",
      "Precision Farming",
      "Resource Optimization",
      "Weather Integration"
    ]
  }
];
// Service Categories for Enhanced Navigation
export const ENHANCED_SERVICE_CATEGORIES = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    description: "Cutting-edge artificial intelligence and machine learning solutions",
    icon: "Brain",
    services: ENHANCED_SERVICES_2025.filter(s => s.category === "AI & ML"),
    featured: true
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automated development operations",
    icon: "Cloud",
    services: ENHANCED_SERVICES_2025.filter(s => s.category === "Cloud Services"),
    featured: true
  },
  {
    id: "iot-edge",
    name: "IoT & Edge Computing",
    description: "Internet of Things platforms and edge computing solutions",
    icon: "Cpu",
    services: ENHANCED_SERVICES_2025.filter(s => s.category === "IoT Services"),
    featured: false
  },
  {
    id: "blockchain-web3",
    name: "Blockchain & Web3",
    description: "Decentralized technologies and blockchain solutions",
    icon: "Shield",
    services: ENHANCED_SERVICES_2025.filter(s => s.category === "Blockchain Services"),
    featured: false
  },
  {
    id: "space-tech",
    name: "Space Technology",
    description: "Advanced space exploration and satellite technology",
    icon: "Rocket",
    services: ENHANCED_SERVICES_2025.filter(s => s.category === "Space Technology"),
    featured: true
  },
  {
    id: "green-tech",
    name: "Green Technology",
    description: "Sustainable and environmentally friendly technology solutions",
    icon: "Leaf",
    services: ENHANCED_SERVICES_2025.filter(s => s.category === "AI & ML" && s.subcategory === "Climate Technology"),
    featured: false
  }
];
// Pricing Tiers for Enterprise Solutions
export const ENTERPRISE_PRICING_TIERS = [
  {
    name: "Starter",
    price: 999,
    currency: "$",
    period: "month",
    features: [
      "Basic AI Integration",
      "Standard Support",
      "Core Features",
      "Up to 100 Users"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: 2499,
    currency: "$",
    period: "month",
    features: [
      "Advanced AI Capabilities",
      "Priority Support",
      "Custom Integrations",
      "Up to 1000 Users",
      "Advanced Analytics"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: 4999,
    currency: "$",
    period: "month",
    features: [
      "Full AI Suite",
      "24/7 Dedicated Support",
      "Custom Development",
      "Unlimited Users",
      "White-label Solutions",
      "SLA Guarantee"
    ],
    popular: false
  }
];
// Contact Information
export const CONTACT_INFO = {
  mobile: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com",
  social: {
    linkedin: "https://www.linkedin.com/company/zion-tech-group",
    twitter: "https://twitter.com/ziontechgroup",
    facebook: "https://www.facebook.com/ziontechgroup"
  }
};