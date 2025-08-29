export interface InnovativeService {
  id: string;
  title: string;
  description: string;
  category: 'AI Services' | 'IT Services' | 'Micro SaaS' | 'Emerging Tech' | 'Industry Solutions';
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'monthly' | 'yearly' | 'one-time' | 'usage-based';
  features: string[];
  benefits: string[];
  targetAudience: string[];
  marketPrice: string;
  website: string;
  contactEmail: string;
  contactPhone: string;
  tags: string[];
  aiScore: number;
  rating: number;
  reviewCount: number;
  featured: boolean;
  location: string;
  availability: string;
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
    verified: boolean;
  };
  images: string[];
  createdAt: string;
  implementationTime: string;
  roi: string;
  compliance: string[];
  integrations: string[];
  support: string[];
}

export const INNOVATIVE_SERVICES_2025: InnovativeService[] = [
  // AI Services
  {
    id: "ai-workflow-automation-platform",
    title: "AI Workflow Automation Platform",
    description: "Enterprise-grade workflow automation powered by AI that learns from your business processes and continuously optimizes operations.",
    category: "AI Services",
    subcategory: "Process Automation",
    price: 2499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered process discovery and mapping",
      "Intelligent workflow optimization",
      "Real-time performance analytics",
      "Custom automation templates",
      "Multi-department workflow orchestration",
      "API integrations with 100+ tools",
      "Advanced reporting and insights",
      "24/7 monitoring and alerting"
    ],
    benefits: [
      "Reduce operational costs by 40-60%",
      "Increase process efficiency by 300%",
      "Eliminate manual errors by 95%",
      "Scale operations without proportional headcount increase",
      "Real-time visibility into all business processes"
    ],
    targetAudience: ["Enterprise companies", "Manufacturing", "Healthcare", "Financial services", "Retail chains"],
    marketPrice: "$2,499-4,999/month",
    website: "https://ziontechgroup.com/services/ai-workflow-automation",
    contactEmail: "kleber@ziontechgroup.com",
    contactPhone: "+1 302 464 0950",
    tags: ["AI Automation", "Workflow Optimization", "Process Mining", "Enterprise"],
    aiScore: 98,
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-01-15T10:00:00.000Z",
    implementationTime: "4-6 weeks",
    roi: "300% within 6 months",
    compliance: ["GDPR", "SOC 2", "HIPAA", "ISO 27001"],
    integrations: ["Salesforce", "HubSpot", "Slack", "Microsoft Teams", "Zapier", "Workato"],
    support: ["24/7 phone support", "Dedicated success manager", "Training sessions", "Documentation"]
  },
  {
    id: "ai-customer-experience-platform",
    title: "AI Customer Experience Platform",
    description: "Comprehensive CX platform that uses AI to personalize customer journeys, predict needs, and deliver exceptional experiences across all touchpoints.",
    category: "AI Services",
    subcategory: "Customer Experience",
    price: 1899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered customer journey mapping",
      "Predictive customer behavior analytics",
      "Real-time personalization engine",
      "Omnichannel experience orchestration",
      "Sentiment analysis and emotion detection",
      "Customer lifetime value optimization",
      "A/B testing and optimization",
      "Advanced segmentation and targeting"
    ],
    benefits: [
      "Increase customer satisfaction scores by 35%",
      "Boost customer lifetime value by 45%",
      "Reduce customer churn by 30%",
      "Improve conversion rates by 25%",
      "Personalize experiences at scale"
    ],
    targetAudience: ["E-commerce", "SaaS companies", "Retail brands", "Financial services", "Travel & hospitality"],
    marketPrice: "$1,899-3,999/month",
    website: "https://ziontechgroup.com/services/ai-customer-experience-platform",
    contactEmail: "kleber@ziontechgroup.com",
    contactPhone: "+1 302 464 0950",
    tags: ["Customer Experience", "AI Personalization", "Journey Mapping", "Predictive Analytics"],
    aiScore: 96,
    rating: 4.8,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-01-15T10:00:00.000Z",
    implementationTime: "3-5 weeks",
    roi: "250% within 8 months",
    compliance: ["GDPR", "CCPA", "SOC 2"],
    integrations: ["Shopify", "WooCommerce", "Magento", "Salesforce", "HubSpot", "Intercom"],
    support: ["24/7 support", "Success manager", "Training", "API documentation"]
  },
  {
    id: "ai-supply-chain-optimization",
    title: "AI Supply Chain Optimization Suite",
    description: "Intelligent supply chain management platform that uses AI to predict demand, optimize inventory, and streamline logistics operations.",
    category: "AI Services",
    subcategory: "Supply Chain",
    price: 3299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered demand forecasting",
      "Inventory optimization algorithms",
      "Route optimization and logistics planning",
      "Supplier performance analytics",
      "Risk assessment and mitigation",
      "Real-time supply chain visibility",
      "Cost optimization recommendations",
      "Sustainability impact tracking"
    ],
    benefits: [
      "Reduce inventory costs by 25-35%",
      "Improve forecast accuracy by 40%",
      "Reduce lead times by 30%",
      "Increase on-time delivery by 20%",
      "Optimize transportation costs by 25%"
    ],
    targetAudience: ["Manufacturing", "Retail", "E-commerce", "Logistics", "Distribution"],
    marketPrice: "$3,299-6,999/month",
    website: "https://ziontechgroup.com/services/ai-supply-chain-optimization",
    contactEmail: "kleber@ziontechgroup.com",
    contactPhone: "+1 302 464 0950",
    tags: ["Supply Chain", "Inventory Optimization", "Demand Forecasting", "Logistics"],
    aiScore: 97,
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1586528116493-6e3a9aae4e2b?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-01-15T10:00:00.000Z",
    implementationTime: "6-8 weeks",
    roi: "400% within 12 months",
    compliance: ["ISO 28000", "C-TPAT", "GDPR"],
    integrations: ["SAP", "Oracle", "NetSuite", "QuickBooks", "ShipBob", "Flexport"],
    support: ["24/7 support", "Dedicated manager", "Training", "API access"]
  },
  {
    id: "ai-cybersecurity-suite",
    title: "AI Cybersecurity Suite",
    description: "Advanced AI-powered cybersecurity platform that provides real-time threat detection, automated response, and comprehensive security monitoring.",
    category: "AI Services",
    subcategory: "Cybersecurity",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered threat detection and response",
      "Behavioral analytics and anomaly detection",
      "Automated incident response",
      "Vulnerability assessment and management",
      "Compliance monitoring and reporting",
      "Security awareness training",
      "24/7 SOC monitoring",
      "Threat intelligence feeds"
    ],
    benefits: [
      "Detect threats 10x faster than traditional solutions",
      "Reduce false positives by 80%",
      "Automate 90% of security responses",
      "Achieve compliance requirements automatically",
      "Reduce security incidents by 70%"
    ],
    targetAudience: ["Financial services", "Healthcare", "Government", "Enterprise", "SaaS companies"],
    marketPrice: "$1,999-4,999/month",
    website: "https://ziontechgroup.com/services/ai-cybersecurity-suite",
    contactEmail: "kleber@ziontechgroup.com",
    contactPhone: "+1 302 464 0950",
    tags: ["Cybersecurity", "AI Security", "Threat Detection", "Compliance"],
    aiScore: 99,
    rating: 4.9,
    reviewCount: 234,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-01-15T10:00:00.000Z",
    implementationTime: "2-4 weeks",
    roi: "500% within 6 months",
    compliance: ["SOC 2", "ISO 27001", "GDPR", "HIPAA", "PCI DSS"],
    integrations: ["CrowdStrike", "SentinelOne", "Palo Alto", "Cisco", "Splunk"],
    support: ["24/7 SOC", "Dedicated security team", "Training", "Compliance support"]
  },

  // IT Services
  {
    id: "cloud-finops-optimizer",
    title: "Cloud FinOps Optimizer",
    description: "Comprehensive cloud cost optimization platform that helps organizations reduce cloud spending while improving performance and efficiency.",
    category: "IT Services",
    subcategory: "Cloud Optimization",
    price: 1499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time cost monitoring and alerts",
      "Automated cost optimization recommendations",
      "Resource utilization analytics",
      "Reserved instance management",
      "Multi-cloud cost comparison",
      "Cost allocation and chargeback",
      "Budget planning and forecasting",
      "Performance optimization insights"
    ],
    benefits: [
      "Reduce cloud costs by 30-50%",
      "Improve resource utilization by 40%",
      "Eliminate waste and unused resources",
      "Optimize performance and costs simultaneously",
      "Achieve predictable cloud spending"
    ],
    targetAudience: ["Enterprise", "SaaS companies", "Startups", "Digital agencies", "E-commerce"],
    marketPrice: "$1,499-3,999/month",
    website: "https://ziontechgroup.com/services/cloud-finops-optimizer",
    contactEmail: "kleber@ziontechgroup.com",
    contactPhone: "+1 302 464 0950",
    tags: ["Cloud Optimization", "FinOps", "Cost Management", "AWS", "Azure", "GCP"],
    aiScore: 94,
    rating: 4.8,
    reviewCount: 189,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-01-15T10:00:00.000Z",
    implementationTime: "2-3 weeks",
    roi: "400% within 3 months",
    compliance: ["SOC 2", "ISO 27001"],
    integrations: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"],
    support: ["24/7 monitoring", "Cost optimization team", "Training", "API access"]
  },
  {
    id: "zero-trust-network-architecture",
    title: "Zero Trust Network Architecture",
    description: "Modern security architecture that eliminates implicit trust and continuously validates every stage of digital interactions.",
    category: "IT Services",
    subcategory: "Network Security",
    price: 3999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Identity and access management (IAM)",
      "Multi-factor authentication (MFA)",
      "Network segmentation and micro-segmentation",
      "Continuous monitoring and analytics",
      "Threat detection and response",
      "Compliance automation",
      "API security and management",
      "Device trust and management"
    ],
    benefits: [
      "Reduce security breaches by 90%",
      "Simplify compliance requirements",
      "Improve user experience with seamless access",
      "Enable secure remote work",
      "Reduce attack surface significantly"
    ],
    targetAudience: ["Financial services", "Healthcare", "Government", "Enterprise", "Legal"],
    marketPrice: "$3,999-8,999/month",
    website: "https://ziontechgroup.com/services/zero-trust-network-architecture",
    contactEmail: "kleber@ziontechgroup.com",
    contactPhone: "+1 302 464 0950",
    tags: ["Zero Trust", "Network Security", "IAM", "MFA", "Compliance"],
    aiScore: 95,
    rating: 4.9,
    reviewCount: 78,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-01-15T10:00:00.000Z",
    implementationTime: "8-12 weeks",
    roi: "300% within 12 months",
    compliance: ["SOC 2", "ISO 27001", "NIST", "GDPR", "HIPAA"],
    integrations: ["Okta", "Microsoft", "Cisco", "Palo Alto", "VMware"],
    support: ["24/7 security team", "Dedicated architect", "Training", "Compliance support"]
  },
  {
    id: "digital-twin-platform",
    title: "Digital Twin Platform",
    description: "Advanced digital twin technology that creates virtual replicas of physical assets, processes, and systems for real-time monitoring and optimization.",
    category: "IT Services",
    subcategory: "IoT & Digital Twin",
    price: 2799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "3D asset modeling and visualization",
      "Real-time sensor data integration",
      "Predictive maintenance algorithms",
      "Performance optimization insights",
      "Historical data analysis",
      "Simulation and scenario planning",
      "API integrations with IoT devices",
      "Advanced analytics and reporting"
    ],
    benefits: [
      "Reduce maintenance costs by 40%",
      "Increase asset uptime by 25%",
      "Improve operational efficiency by 30%",
      "Enable predictive maintenance",
      "Optimize resource allocation"
    ],
    targetAudience: ["Manufacturing", "Energy", "Healthcare", "Smart cities", "Transportation"],
    marketPrice: "$2,799-5,999/month",
    website: "https://ziontechgroup.com/services/digital-twin-platform",
    contactEmail: "kleber@ziontechgroup.com",
    contactPhone: "+1 302 464 0950",
    tags: ["Digital Twin", "IoT", "Predictive Maintenance", "3D Modeling", "Analytics"],
    aiScore: 96,
    rating: 4.8,
    reviewCount: 45,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-01-15T10:00:00.000Z",
    implementationTime: "6-10 weeks",
    roi: "350% within 12 months",
    compliance: ["ISO 27001", "GDPR"],
    integrations: ["Siemens", "GE", "PTC", "Azure IoT", "AWS IoT", "Google Cloud IoT"],
    support: ["24/7 monitoring", "Dedicated team", "Training", "API documentation"]
  },

  // Micro SaaS Services
  {
    id: "ai-sales-copilot",
    title: "AI Sales Copilot",
    description: "Intelligent sales automation platform that helps sales teams close more deals with AI-powered insights, automation, and optimization.",
    category: "Micro SaaS",
    subcategory: "Sales Automation",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered lead scoring and prioritization",
      "Automated email sequences and follow-ups",
      "Sales call transcription and analysis",
      "Deal forecasting and pipeline management",
      "Customer behavior tracking and insights",
      "Sales performance analytics",
      "CRM integration and automation",
      "Mobile app for field sales"
    ],
    benefits: [
      "Increase sales productivity by 40%",
      "Improve conversion rates by 25%",
      "Reduce follow-up time by 60%",
      "Generate 30% more qualified leads",
      "Close deals 20% faster"
    ],
    targetAudience: ["Sales teams", "B2B companies", "Real estate", "Insurance", "Consulting"],
    marketPrice: "$299-799/month",
    website: "https://ziontechgroup.com/services/ai-sales-copilot",
    contactEmail: "kleber@ziontechgroup.com",
    contactPhone: "+1 302 464 0950",
    tags: ["Sales Automation", "AI Sales", "Lead Scoring", "CRM", "Analytics"],
    aiScore: 93,
    rating: 4.7,
    reviewCount: 312,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-01-15T10:00:00.000Z",
    implementationTime: "1-2 weeks",
    roi: "500% within 3 months",
    compliance: ["GDPR", "SOC 2"],
    integrations: ["Salesforce", "HubSpot", "Pipedrive", "Zoho", "Microsoft Dynamics"],
    support: ["Email support", "Live chat", "Training videos", "API documentation"]
  },
  {
    id: "ai-compliance-assistant",
    title: "AI Compliance Assistant",
    description: "Automated compliance management platform that helps organizations stay compliant with regulations through AI-powered monitoring and reporting.",
    category: "Micro SaaS",
    subcategory: "Compliance",
    price: 399,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated compliance monitoring",
      "Regulatory change tracking",
      "Policy management and updates",
      "Compliance reporting and dashboards",
      "Risk assessment and scoring",
      "Audit trail and documentation",
      "Employee training management",
      "Multi-regulation support"
    ],
    benefits: [
      "Reduce compliance costs by 50%",
      "Eliminate compliance violations by 90%",
      "Automate 80% of compliance tasks",
      "Reduce audit preparation time by 70%",
      "Stay updated with regulatory changes automatically"
    ],
    targetAudience: ["Financial services", "Healthcare", "Legal", "Manufacturing", "Technology"],
    marketPrice: "$399-999/month",
    website: "https://ziontechgroup.com/services/ai-compliance-assistant",
    contactEmail: "kleber@ziontechgroup.com",
    contactPhone: "+1 302 464 0950",
    tags: ["Compliance", "AI Compliance", "Risk Management", "Audit", "Regulations"],
    aiScore: 94,
    rating: 4.8,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-01-15T10:00:00.000Z",
    implementationTime: "2-3 weeks",
    roi: "400% within 6 months",
    compliance: ["SOC 2", "ISO 27001", "GDPR"],
    integrations: ["Workday", "BambooHR", "ADP", "QuickBooks", "NetSuite"],
    support: ["Email support", "Live chat", "Training", "Compliance consulting"]
  },
  {
    id: "llm-content-studio",
    title: "LLM Content Studio",
    description: "AI-powered content creation platform that generates high-quality, brand-consistent content across multiple formats and channels.",
    category: "Micro SaaS",
    subcategory: "Content Creation",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI content generation for multiple formats",
      "Brand voice customization and training",
      "SEO optimization and keyword research",
      "Content calendar and scheduling",
      "Multi-language content creation",
      "Plagiarism checking and originality",
      "Team collaboration tools",
      "Performance analytics and insights"
    ],
    benefits: [
      "Save 20+ hours per week on content creation",
      "Improve SEO rankings by 40%",
      "Increase content engagement by 35%",
      "Maintain consistent brand voice across all content",
      "Scale content production without additional headcount"
    ],
    targetAudience: ["Marketing teams", "Content creators", "Agencies", "E-commerce", "SaaS companies"],
    marketPrice: "$199-599/month",
    website: "https://ziontechgroup.com/services/llm-content-studio",
    contactEmail: "kleber@ziontechgroup.com",
    contactPhone: "+1 302 464 0950",
    tags: ["Content Creation", "AI Writing", "SEO", "Brand Voice", "Marketing"],
    aiScore: 92,
    rating: 4.6,
    reviewCount: 234,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-01-15T10:00:00.000Z",
    implementationTime: "1 week",
    roi: "600% within 2 months",
    compliance: ["GDPR", "SOC 2"],
    integrations: ["WordPress", "Shopify", "HubSpot", "Mailchimp", "Buffer", "Hootsuite"],
    support: ["Email support", "Live chat", "Training videos", "Content templates"]
  },

  // Emerging Tech Services
  {
    id: "quantum-ai-platform",
    title: "Quantum AI Platform",
    description: "Next-generation AI platform that combines quantum computing principles with machine learning for unprecedented computational power and insights.",
    category: "Emerging Tech",
    subcategory: "Quantum Computing",
    price: 4999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum-enhanced machine learning algorithms",
      "Hybrid classical-quantum computing",
      "Quantum optimization for complex problems",
      "Quantum cryptography and security",
      "Real-time quantum simulation",
      "API access to quantum resources",
      "Advanced analytics and visualization",
      "Expert consultation and support"
    ],
    benefits: [
      "Solve complex problems 1000x faster",
      "Achieve breakthroughs in drug discovery",
      "Optimize logistics and supply chains",
      "Enhance cybersecurity with quantum encryption",
      "Gain competitive advantage with cutting-edge technology"
    ],
    targetAudience: ["Research institutions", "Pharmaceutical companies", "Financial services", "Government", "Technology leaders"],
    marketPrice: "$4,999-15,999/month",
    website: "https://ziontechgroup.com/services/quantum-ai-platform",
    contactEmail: "kleber@ziontechgroup.com",
    contactPhone: "+1 302 464 0950",
    tags: ["Quantum Computing", "AI", "Machine Learning", "Optimization", "Research"],
    aiScore: 100,
    rating: 5.0,
    reviewCount: 23,
    featured: true,
    location: "Global",
    availability: "Limited",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-01-15T10:00:00.000Z",
    implementationTime: "12-16 weeks",
    roi: "1000% within 24 months",
    compliance: ["ISO 27001", "NIST"],
    integrations: ["IBM Quantum", "Google Quantum", "Microsoft Azure Quantum", "Amazon Braket"],
    support: ["24/7 support", "Quantum experts", "Training", "Research collaboration"]
  },
  {
    id: "edge-computing-platform",
    title: "Edge Computing Platform",
    description: "Distributed computing platform that brings computation and data storage closer to data sources, enabling real-time processing and reduced latency.",
    category: "Emerging Tech",
    subcategory: "Edge Computing",
    price: 1799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Distributed edge nodes management",
      "Real-time data processing",
      "Edge AI and machine learning",
      "5G and IoT integration",
      "Edge security and encryption",
      "Load balancing and optimization",
      "Monitoring and analytics",
      "API gateway and management"
    ],
    benefits: [
      "Reduce latency by 90%",
      "Lower bandwidth costs by 60%",
      "Improve reliability and uptime",
      "Enable real-time applications",
      "Reduce cloud dependency"
    ],
    targetAudience: ["IoT companies", "Manufacturing", "Smart cities", "Autonomous vehicles", "Healthcare"],
    marketPrice: "$1,799-4,999/month",
    website: "https://ziontechgroup.com/services/edge-computing-platform",
    contactEmail: "kleber@ziontechgroup.com",
    contactPhone: "+1 302 464 0950",
    tags: ["Edge Computing", "IoT", "5G", "Real-time Processing", "Distributed Systems"],
    aiScore: 93,
    rating: 4.7,
    reviewCount: 67,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2025-01-15T10:00:00.000Z",
    implementationTime: "4-6 weeks",
    roi: "350% within 8 months",
    compliance: ["ISO 27001", "GDPR"],
    integrations: ["AWS IoT Greengrass", "Azure IoT Edge", "Google Cloud IoT Edge", "Kubernetes"],
    support: ["24/7 monitoring", "Edge deployment team", "Training", "API documentation"]
  }
];

// Service categories for easy filtering
export const SERVICE_CATEGORIES = [
  {
    name: "AI Services",
    description: "Cutting-edge artificial intelligence solutions",
    icon: "🤖",
    count: INNOVATIVE_SERVICES_2025.filter(s => s.category === "AI Services").length,
    color: "from-purple-600 to-pink-600"
  },
  {
    name: "IT Services",
    description: "Comprehensive IT infrastructure and solutions",
    icon: "💻",
    count: INNOVATIVE_SERVICES_2025.filter(s => s.category === "IT Services").length,
    color: "from-blue-600 to-cyan-600"
  },
  {
    name: "Micro SaaS",
    description: "Scalable software-as-a-service solutions",
    icon: "🚀",
    count: INNOVATIVE_SERVICES_2025.filter(s => s.category === "Micro SaaS").length,
    color: "from-green-600 to-emerald-600"
  },
  {
    name: "Emerging Tech",
    description: "Next-generation technology solutions",
    icon: "⚡",
    count: INNOVATIVE_SERVICES_2025.filter(s => s.category === "Emerging Tech").length,
    color: "from-orange-600 to-red-600"
  }
];

// Pricing tiers for different service levels
export const PRICING_TIERS = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups",
    price: 199,
    features: [
      "Basic features and functionality",
      "Email support",
      "Standard integrations",
      "Community forum access",
      "Basic analytics"
    ],
    color: "from-zinc-600 to-zinc-700",
    popular: false
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses and teams",
    price: 599,
    features: [
      "Advanced features and automation",
      "Priority support",
      "Advanced integrations",
      "API access",
      "Custom branding",
      "Advanced analytics",
      "Team collaboration"
    ],
    color: "from-blue-600 to-cyan-600",
    popular: true
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    price: 1999,
    features: [
      "Custom features and solutions",
      "24/7 dedicated support",
      "Custom integrations",
      "White-label options",
      "Advanced security",
      "SLA guarantees",
      "Dedicated account manager",
      "Custom training and onboarding"
    ],
    color: "from-purple-600 to-pink-600",
    popular: false
  }
];