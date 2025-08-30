export interface InnovativeService {

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
contactInfo: {;
    phone: string;
    email: string;
    website: string;
  
};
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[];
  };
  competitors?: string[];
  marketSize?: string;
}

export const INNOVATIVE_SERVICES_2025: InnovativeService[] = [
  // AI-Powered Business Intelligence & Analytics
  {
    id: "ai-business-intelligence-platform",
    title: "AI Business Intelligence Platform",
    description: "Next-generation business intelligence platform that uses AI to automatically analyze data, generate insights, and create actionable reports for business decision-making.",
    category: "AI & Analytics",
    subcategory: "Business Intelligence",
    price: 2999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered data analysis",
      "Automated insight generation",
      "Natural language queries",
      "Predictive analytics",
      "Custom dashboard creation",
      "Real-time data processing",
      "Multi-source data integration",
      "Advanced visualization tools",
      "Automated reporting",
      "Mobile app access"
    ],
    benefits: [
      "Reduce analysis time by 80%",
      "Improve decision accuracy by 60%",
      "Automated insight discovery",
      "Real-time business monitoring",
      "Scalable analytics infrastructure"
    ],
    useCases: [
      "Sales performance analysis",
      "Customer behavior insights",
      "Financial reporting automation",
      "Operational efficiency tracking",
      "Market trend analysis"
    ],
    targetAudience: [
      "Business analysts",
      "Data scientists",
      "Executives",
      "Marketing teams",
      "Sales teams"
    ],
    tags: ["AI", "Analytics", "Business Intelligence", "Data Science", "Reporting"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,999 - $8,999/month",
    roi: "250-400%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL"],
      integrations: ["Salesforce", "HubSpot", "QuickBooks", "Google Analytics", "Shopify"],
      apiEndpoints: 150,
      uptime: "99.9%",
      security: ["SOC 2", "GDPR", "HIPAA", "End-to-end encryption"]
    },
    competitors: ["Tableau", "Power BI", "Looker", "Qlik"],
    marketSize: "$29.9 billion by 2025"
  },

  // AI-Powered Sales Copilot
  {
    id: "ai-sales-copilot",
    title: "AI Sales Copilot",
    description: "Intelligent sales assistant that automates lead qualification, provides real-time coaching, and optimizes sales processes using advanced AI algorithms.",
    category: "AI & Sales",
    subcategory: "Sales Automation",
    price: 1499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered lead scoring",
      "Real-time sales coaching",
      "Automated follow-up sequences",
      "Predictive sales analytics",
      "CRM integration",
      "Voice and text analysis",
      "Performance tracking",
      "Custom sales playbooks",
      "Multi-channel communication",
      "Advanced reporting"
    ],
    benefits: [
      "Increase sales productivity by 40%",
      "Improve conversion rates by 25%",
      "Reduce manual data entry by 70%",
      "Better lead qualification",
      "Enhanced sales team performance"
    ],
    useCases: [
      "B2B sales automation",
      "Lead qualification",
      "Sales coaching",
      "Pipeline management",
      "Performance optimization"
    ],
    targetAudience: [
      "Sales teams",
      "Sales managers",
      "Business development",
      "Startups",
      "Enterprise sales"
    ],
    tags: ["AI", "Sales", "Automation", "CRM", "Lead Generation"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$1,499 - $3,999/month",
    roi: "300-500%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Cloud FinOps Optimizer
  {
    id: "cloud-finops-optimizer",
    title: "Cloud FinOps Optimizer",
    description: "Comprehensive cloud cost management platform that uses AI to optimize spending, identify waste, and provide actionable cost reduction recommendations.",
    category: "Cloud & DevOps",
    subcategory: "Cost Optimization",
    price: 2499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered cost analysis",
      "Automated resource optimization",
      "Real-time cost monitoring",
      "Predictive cost forecasting",
      "Multi-cloud support",
      "Cost allocation tracking",
      "Budget management",
      "Automated scaling",
      "Waste detection",
      "ROI analysis"
    ],
    benefits: [
      "Reduce cloud costs by 30-50%",
      "Improve resource utilization",
      "Better budget planning",
      "Automated cost optimization",
      "Enhanced financial visibility"
    ],
    useCases: [
      "Cloud cost management",
      "Resource optimization",
      "Budget planning",
      "Multi-cloud management",
      "DevOps cost control"
    ],
    targetAudience: [
      "DevOps teams",
      "Cloud architects",
      "Financial officers",
      "IT managers",
      "Startups"
    ],
    tags: ["Cloud", "FinOps", "Cost Optimization", "DevOps", "AWS", "Azure", "GCP"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,499 - $6,999/month",
    roi: "200-400%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI Compliance Assistant
  {
    id: "ai-compliance-assistant",
    title: "AI Compliance Assistant",
    description: "Intelligent compliance management platform that automates regulatory reporting, monitors compliance status, and provides real-time risk assessments.",
    category: "AI & Compliance",
    subcategory: "Regulatory Compliance",
    price: 3999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered compliance monitoring",
      "Automated regulatory reporting",
      "Real-time risk assessment",
      "Document management",
      "Audit trail tracking",
      "Policy management",
      "Training automation",
      "Incident reporting",
      "Compliance scoring",
      "Multi-regulation support"
    ],
    benefits: [
      "Reduce compliance costs by 40%",
      "Improve audit success rates",
      "Automated compliance monitoring",
      "Real-time risk visibility",
      "Enhanced regulatory reporting"
    ],
    useCases: [
      "SOC 2 compliance",
      "GDPR compliance",
      "HIPAA compliance",
      "Financial regulations",
      "Industry standards"
    ],
    targetAudience: [
      "Compliance officers",
      "Legal teams",
      "IT security",
      "Healthcare organizations",
      "Financial institutions"
    ],
    tags: ["AI", "Compliance", "Security", "Regulations", "Risk Management"],
    estimatedDelivery: "10-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,999 - $9,999/month",
    roi: "150-300%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI Auto Email Responder
  {
    id: "ai-auto-email-responder",
    title: "AI Auto Email Responder",
    description: "Intelligent email automation platform that uses AI to understand context, generate personalized responses, and manage email workflows automatically.",
    category: "AI & Communication",
    subcategory: "Email Automation",
    price: 899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered email understanding",
      "Personalized response generation",
      "Automated workflow management",
      "Multi-language support",
      "CRM integration",
      "Sentiment analysis",
      "Priority classification",
      "Template management",
      "Performance analytics",
      "Mobile app access"
    ],
    benefits: [
      "Reduce email response time by 80%",
      "Improve customer satisfaction",
      "Automated email management",
      "Better workflow efficiency",
      "Enhanced communication quality"
    ],
    useCases: [
      "Customer service automation",
      "Sales follow-up",
      "Support ticket management",
      "Internal communication",
      "Marketing automation"
    ],
    targetAudience: [
      "Customer service teams",
      "Sales teams",
      "Support teams",
      "Small businesses",
      "Enterprise organizations"
    ],
    tags: ["AI", "Email", "Automation", "Communication", "Customer Service"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "standard",
    marketPrice: "$899 - $2,499/month",
    roi: "400-600%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Customer Feedback Surveys
  {
    id: "customer-feedback-surveys",
    title: "AI-Powered Customer Feedback Platform",
    description: "Intelligent feedback collection and analysis platform that uses AI to gather insights, analyze sentiment, and provide actionable recommendations.",
    category: "AI & Customer Experience",
    subcategory: "Feedback Management",
    price: 699,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered survey creation",
      "Sentiment analysis",
      "Real-time feedback collection",
      "Multi-channel distribution",
      "Advanced analytics",
      "Custom reporting",
      "Integration capabilities",
      "Mobile optimization",
      "Automated insights",
      "Action planning tools"
    ],
    benefits: [
      "Improve customer satisfaction scores",
      "Better product development insights",
      "Automated feedback analysis",
      "Real-time customer insights",
      "Enhanced decision-making"
    ],
    useCases: [
      "Customer satisfaction surveys",
      "Product feedback collection",
      "Service quality assessment",
      "Employee feedback",
      "Market research"
    ],
    targetAudience: [
      "Product managers",
      "Customer success teams",
      "Marketing teams",
      "Business owners",
      "Research teams"
    ],
    tags: ["AI", "Customer Experience", "Feedback", "Surveys", "Analytics"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "standard",
    marketPrice: "$699 - $1,999/month",
    roi: "300-500%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // LLM Content Studio
  {
    id: "llm-content-studio",
    title: "LLM Content Studio",
    description: "Advanced content creation platform powered by Large Language Models that generates high-quality, SEO-optimized content across multiple formats and languages.",
    category: "AI & Content",
    subcategory: "Content Generation",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered content generation",
      "Multi-format support",
      "SEO optimization",
      "Multi-language generation",
      "Brand voice customization",
      "Content planning tools",
      "Collaboration features",
      "Performance analytics",
      "Integration capabilities",
      "Content templates"
    ],
    benefits: [
      "Increase content production by 500%",
      "Improve SEO rankings",
      "Reduce content creation costs",
      "Consistent brand voice",
      "Multi-language content"
    ],
    useCases: [
      "Blog content creation",
      "Marketing copy",
      "Product descriptions",
      "Social media content",
      "Technical documentation"
    ],
    targetAudience: [
      "Content marketers",
      "SEO specialists",
      "Business owners",
      "Agencies",
      "E-commerce businesses"
    ],
    tags: ["AI", "Content Generation", "LLM", "SEO", "Marketing"],
    estimatedDelivery: "4-5 weeks",
    supportLevel: "premium",
    marketPrice: "$1,999 - $4,999/month",
    roi: "400-700%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // FinOps Advisor
  {
    id: "finops-advisor",
    title: "FinOps Advisor",
    description: "Intelligent financial operations platform that provides real-time insights, automates financial processes, and optimizes business performance through AI-driven analytics.",
    category: "AI & Finance",
    subcategory: "Financial Operations",
    price: 3499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered financial analysis",
      "Real-time performance monitoring",
      "Automated reporting",
      "Predictive analytics",
      "Budget optimization",
      "Cost allocation",
      "ROI tracking",
      "Financial planning tools",
      "Integration capabilities",
      "Custom dashboards"
    ],
    benefits: [
      "Improve financial visibility by 60%",
      "Reduce financial reporting time by 70%",
      "Better budget optimization",
      "Enhanced decision-making",
      "Automated financial processes"
    ],
    useCases: [
      "Financial planning",
      "Budget management",
      "Performance tracking",
      "Cost optimization",
      "Financial reporting"
    ],
    targetAudience: [
      "CFOs",
      "Financial analysts",
      "Business owners",
      "Finance teams",
      "Startups"
    ],
    tags: ["AI", "Finance", "FinOps", "Analytics", "Budgeting"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,499 - $7,999/month",
    roi: "200-400%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Digital Twin Platform
  {
    id: "digital-twin-platform",
    title: "Digital Twin Platform",
    description: "Advanced digital twin technology that creates virtual replicas of physical systems, enabling real-time monitoring, predictive maintenance, and optimization.",
    category: "IoT & Digital Twin",
    subcategory: "System Simulation",
    price: 5999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time system monitoring",
      "Predictive maintenance",
      "3D visualization",
      "Data integration",
      "Analytics dashboard",
      "Alert system",
      "Historical data analysis",
      "Performance optimization",
      "Custom modeling",
      "API access"
    ],
    benefits: [
      "Reduce maintenance costs by 40%",
      "Improve system uptime by 25%",
      "Better resource optimization",
      "Predictive insights",
      "Enhanced operational efficiency"
    ],
    useCases: [
      "Manufacturing optimization",
      "Infrastructure monitoring",
      "Energy management",
      "Healthcare systems",
      "Smart cities"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Infrastructure managers",
      "Energy companies",
      "Healthcare organizations",
      "Government agencies"
    ],
    tags: ["Digital Twin", "IoT", "Monitoring", "Predictive Maintenance", "3D Visualization"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$5,999 - $15,999/month",
    roi: "150-300%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Quantum Computing Services
  {
    id: "quantum-computing-services",
    title: "Quantum Computing Solutions",
    description: "Cutting-edge quantum computing services that solve complex optimization problems, cryptography, and scientific simulations for research and enterprise applications.",
    category: "Quantum Computing",
    subcategory: "Quantum Solutions",
    price: 9999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum algorithm development",
      "Optimization problem solving",
      "Cryptography services",
      "Scientific simulations",
      "Quantum software development",
      "Consulting services",
      "Training programs",
      "Research collaboration",
      "Custom solutions",
      "Performance monitoring"
    ],
    benefits: [
      "Solve previously unsolvable problems",
      "Exponential speed improvements",
      "Advanced cryptography",
      "Research breakthroughs",
      "Competitive advantage"
    ],
    useCases: [
      "Financial modeling",
      "Drug discovery",
      "Logistics optimization",
      "Cryptography",
      "Scientific research"
    ],
    targetAudience: [
      "Research institutions",
      "Financial services",
      "Pharmaceutical companies",
      "Government agencies",
      "Technology companies"
    ],
    tags: ["Quantum Computing", "Optimization", "Cryptography", "Research", "Advanced Technology"],
    estimatedDelivery: "16-20 weeks",
    supportLevel: "enterprise",
    marketPrice: "$9,999 - $25,999/month",
    roi: "100-200%",
    innovationLevel: "Cutting Edge",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

// Helper functions
export const getServicesByCategory = (category: string): InnovativeService[]  => {
  return INNOVATIVE_SERVICES_2025.filter(service => service.category === category);
};

export const getServicesByPriceRange = (minPrice: number, maxPrice: number): InnovativeService[]  => {
  return INNOVATIVE_SERVICES_2025.filter(service => service.price >= minPrice && service.price <= maxPrice);
};

export const getTopRatedServices = (limit: number = 5): InnovativeService[] => {
  return INNOVATIVE_SERVICES_2025
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};

export const getServicesByAIScore = (minScore: number): InnovativeService[]  => {
  return INNOVATIVE_SERVICES_2025.filter(service => service.aiScore >= minScore);
};