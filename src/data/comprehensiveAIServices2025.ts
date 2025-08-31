export interface ComprehensiveAIService {
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
    address: string;
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

export const COMPREHENSIVE_AI_SERVICES_2025: ComprehensiveAIService[] = [
  // AI-Powered Business Intelligence
  {
    id: "ai-business-intelligence-platform",
    title: "AI-Powered Business Intelligence & Analytics Platform",
    description: "Advanced business intelligence platform that uses AI to analyze data, generate insights, and provide predictive analytics for informed decision-making across all business functions.",
    category: "AI & Analytics",
    subcategory: "Business Intelligence",
    price: 899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered data analysis",
      "Predictive analytics",
      "Natural language queries",
      "Automated insights",
      "Interactive dashboards",
      "Real-time monitoring",
      "Data visualization",
      "Report automation",
      "Mobile access",
      "API integration"
    ],
    benefits: [
      "Improve decision making by 50%",
      "Reduce analysis time by 80%",
      "Uncover hidden insights",
      "Enable data-driven culture",
      "Increase operational efficiency"
    ],
    useCases: [
      "Business performance analysis",
      "Customer behavior insights",
      "Financial forecasting",
      "Operational optimization",
      "Market trend analysis"
    ],
    targetAudience: [
      "Business analysts",
      "Data scientists",
      "Executives",
      "Department managers",
      "Operations teams"
    ],
    tags: ["AI", "Business Intelligence", "Analytics", "Predictive", "Insights"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$899 - $2,999/month",
    roi: "400-600%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    technicalSpecs: {
      technology: ["Machine Learning", "Deep Learning", "Python", "TensorFlow", "React", "PostgreSQL"],
      integrations: ["ERP systems", "CRM systems", "Databases", "Cloud platforms", "APIs"],
      apiEndpoints: 250,
      uptime: "99.9%",
      security: ["GDPR", "CCPA", "Data encryption", "Access controls"]
    },
    competitors: ["Tableau", "Power BI", "Qlik", "Looker"],
    marketSize: "$42.8 billion by 2025"
  },

  // AI-Powered Customer Experience
  {
    id: "ai-customer-experience-platform",
    title: "AI-Powered Customer Experience & Personalization Platform",
    description: "Intelligent customer experience platform that uses AI to personalize interactions, predict customer needs, and optimize customer journeys across all touchpoints.",
    category: "AI & Customer Experience",
    subcategory: "Personalization",
    price: 699,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Customer behavior analysis",
      "Personalized recommendations",
      "Predictive customer insights",
      "Customer journey mapping",
      "Sentiment analysis",
      "Real-time personalization",
      "A/B testing automation",
      "Customer segmentation",
      "Churn prediction",
      "Lifetime value optimization"
    ],
    benefits: [
      "Increase customer satisfaction by 35%",
      "Improve conversion rates by 45%",
      "Reduce customer churn by 30%",
      "Enhance customer loyalty",
      "Optimize customer lifetime value"
    ],
    useCases: [
      "E-commerce personalization",
      "Customer service optimization",
      "Marketing automation",
      "Product recommendations",
      "Customer success management"
    ],
    targetAudience: [
      "E-commerce businesses",
      "SaaS companies",
      "Retail chains",
      "Service businesses",
      "Marketing teams"
    ],
    tags: ["AI", "Customer Experience", "Personalization", "Analytics", "Optimization"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "professional",
    marketPrice: "$699 - $2,199/month",
    roi: "350-550%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    technicalSpecs: {
      technology: ["Machine Learning", "NLP", "Python", "TensorFlow", "React", "PostgreSQL"],
      integrations: ["CRM systems", "E-commerce platforms", "Marketing tools", "Analytics platforms"],
      apiEndpoints: 200,
      uptime: "99.9%",
      security: ["GDPR", "CCPA", "Data encryption", "Privacy compliance"]
    },
    competitors: ["Segment", "Amplitude", "Mixpanel", "Optimizely"],
    marketSize: "$38.5 billion by 2025"
  },

  // AI-Powered Marketing Automation
  {
    id: "ai-marketing-automation-platform",
    title: "AI-Powered Marketing Automation & Campaign Optimization Platform",
    description: "Intelligent marketing automation platform that uses AI to optimize campaigns, personalize content, and maximize marketing ROI through predictive analytics and automation.",
    category: "AI & Marketing",
    subcategory: "Automation",
    price: 799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered campaign optimization",
      "Content personalization",
      "Predictive audience targeting",
      "Automated A/B testing",
      "ROI optimization",
      "Multi-channel automation",
      "Lead scoring",
      "Customer journey automation",
      "Performance analytics",
      "Integration capabilities"
    ],
    benefits: [
      "Increase marketing ROI by 60%",
      "Improve campaign performance by 45%",
      "Reduce manual work by 70%",
      "Enhance customer engagement",
      "Optimize marketing spend"
    ],
    useCases: [
      "Email marketing automation",
      "Social media campaigns",
      "Content marketing",
      "Lead generation",
      "Customer retention"
    ],
    targetAudience: [
      "Marketing teams",
      "Digital agencies",
      "E-commerce businesses",
      "B2B companies",
      "Startups"
    ],
    tags: ["AI", "Marketing Automation", "Campaign Optimization", "Personalization", "ROI"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "professional",
    marketPrice: "$799 - $2,499/month",
    roi: "400-600%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    technicalSpecs: {
      technology: ["Machine Learning", "NLP", "Python", "TensorFlow", "React", "PostgreSQL"],
      integrations: ["CRM systems", "Email platforms", "Social media", "Analytics tools", "Ad platforms"],
      apiEndpoints: 220,
      uptime: "99.9%",
      security: ["GDPR", "CCPA", "Data encryption", "Privacy compliance"]
    },
    competitors: ["HubSpot", "Marketo", "Pardot", "ActiveCampaign"],
    marketSize: "$35.2 billion by 2025"
  },

  // AI-Powered Customer Support Automation
  {
    id: "ai-customer-support-automation",
    title: "AI Customer Support Automation Platform",
    description: "Intelligent customer support platform that uses AI to automate responses, route tickets, and provide 24/7 support with human-like interactions.",
    category: "Customer Support",
    subcategory: "AI Automation",
    price: 399,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI chatbot",
      "Ticket routing",
      "Automated responses",
      "Sentiment analysis",
      "Knowledge base",
      "Multi-language support",
      "Integration APIs",
      "Analytics dashboard",
      "Mobile app",
      "Human handoff"
    ],
    benefits: [
      "Reduce support costs by 50%",
      "Improve response time by 90%",
      "Increase customer satisfaction",
      "24/7 availability",
      "Scale support operations"
    ],
    useCases: [
      "Customer service",
      "Technical support",
      "Sales support",
      "FAQ automation",
      "Lead qualification"
    ],
    targetAudience: [
      "Customer support teams",
      "E-commerce businesses",
      "SaaS companies",
      "Service providers",
      "Enterprise organizations"
    ],
    tags: ["Customer Support", "AI", "Automation", "Chatbot", "Service"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "professional",
    marketPrice: "$399 - $1,600/month",
    roi: "350-600%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    technicalSpecs: {
      technology: ["NLP", "Machine Learning", "React", "Python", "PostgreSQL", "Redis"],
      integrations: ["Zendesk", "Intercom", "Slack", "Microsoft Teams", "CRM systems"],
      apiEndpoints: 120,
      uptime: "99.9%",
      security: ["SSL", "Encryption", "Access controls", "Data privacy"]
    },
    competitors: ["Intercom", "Zendesk", "Freshdesk", "Help Scout"],
    marketSize: "$15.7 billion by 2025"
  },

  // AI-Powered Project Management
  {
    id: "ai-project-management",
    title: "AI Project Management Platform",
    description: "Intelligent project management platform that uses AI to optimize resource allocation, predict project risks, and automate project workflows for improved efficiency.",
    category: "Project Management",
    subcategory: "AI Optimization",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI resource allocation",
      "Risk prediction",
      "Automated scheduling",
      "Progress tracking",
      "Team collaboration",
      "Document management",
      "Time tracking",
      "Reporting tools",
      "Mobile app",
      "Integration APIs"
    ],
    benefits: [
      "Improve project success rate by 40%",
      "Reduce project delays by 30%",
      "Optimize resource utilization",
      "Automate routine tasks",
      "Enhance team productivity"
    ],
    useCases: [
      "Project planning",
      "Resource management",
      "Risk assessment",
      "Team collaboration",
      "Progress monitoring"
    ],
    targetAudience: [
      "Project managers",
      "Team leaders",
      "Businesses",
      "Consulting firms",
      "Development teams"
    ],
    tags: ["Project Management", "AI", "Automation", "Collaboration", "Productivity"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "professional",
    marketPrice: "$299 - $1,200/month",
    roi: "300-500%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    technicalSpecs: {
      technology: ["Machine Learning", "React", "Node.js", "PostgreSQL", "Redis", "APIs"],
      integrations: ["Slack", "Microsoft Teams", "Google Workspace", "GitHub", "Jira"],
      apiEndpoints: 100,
      uptime: "99.9%",
      security: ["SSL", "Encryption", "Access controls", "Data backup"]
    },
    competitors: ["Asana", "Monday.com", "Trello", "ClickUp"],
    marketSize: "$12.3 billion by 2025"
  },

  // AI-Powered Workflow Orchestrator
  {
    id: "ai-workflow-orchestrator",
    title: "AI Workflow Orchestrator Platform",
    description: "Intelligent workflow automation platform that uses AI to design, optimize, and execute complex business processes with minimal human intervention.",
    category: "Workflow Automation",
    subcategory: "AI Orchestration",
    price: 599,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI workflow design",
      "Process optimization",
      "Automated execution",
      "Error handling",
      "Performance monitoring",
      "Integration management",
      "Custom workflows",
      "Reporting tools",
      "Mobile access",
      "API access"
    ],
    benefits: [
      "Reduce process time by 70%",
      "Improve accuracy by 90%",
      "Eliminate manual errors",
      "Scale operations",
      "Reduce operational costs"
    ],
    useCases: [
      "Business process automation",
      "Workflow optimization",
      "Process monitoring",
      "Integration automation",
      "Compliance automation"
    ],
    targetAudience: [
      "Operations teams",
      "Business analysts",
      "IT departments",
      "Process improvement teams",
      "Enterprise organizations"
    ],
    tags: ["Workflow Automation", "AI", "Process Optimization", "Automation", "Integration"],
    estimatedDelivery: "4-5 weeks",
    supportLevel: "enterprise",
    marketPrice: "$599 - $2,400/month",
    roi: "500-800%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    technicalSpecs: {
      technology: ["Machine Learning", "Workflow engine", "React", "Python", "PostgreSQL", "Redis"],
      integrations: ["ERP systems", "CRM platforms", "Cloud services", "APIs", "Legacy systems"],
      apiEndpoints: 200,
      uptime: "99.9%",
      security: ["SOC 2", "SSL", "Encryption", "Access controls", "Audit logging"]
    },
    competitors: ["UiPath", "Automation Anywhere", "Blue Prism", "Pega"],
    marketSize: "$16.8 billion by 2025"
  },

  // AI-Powered Predictive Maintenance
  {
    id: "ai-predictive-maintenance",
    title: "AI Predictive Maintenance Platform",
    description: "Intelligent predictive maintenance platform that uses AI and IoT to predict equipment failures, optimize maintenance schedules, and reduce downtime costs.",
    category: "Industrial IoT",
    subcategory: "Predictive Maintenance",
    price: 799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Equipment monitoring",
      "Failure prediction",
      "Maintenance scheduling",
      "Performance analytics",
      "IoT integration",
      "Alert management",
      "Cost optimization",
      "Reporting dashboards",
      "Mobile app",
      "API access"
    ],
    benefits: [
      "Reduce downtime by 50%",
      "Lower maintenance costs by 30%",
      "Extend equipment life",
      "Improve safety",
      "Optimize operations"
    ],
    useCases: [
      "Manufacturing",
      "Energy production",
      "Transportation",
      "Healthcare equipment",
      "Building management"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Energy companies",
      "Transportation companies",
      "Healthcare facilities",
      "Facility managers"
    ],
    tags: ["Predictive Maintenance", "AI", "IoT", "Industrial", "Analytics"],
    estimatedDelivery: "4-5 weeks",
    supportLevel: "enterprise",
    marketPrice: "$799 - $3,200/month",
    roi: "600-900%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    technicalSpecs: {
      technology: ["Machine Learning", "IoT", "Python", "React", "PostgreSQL", "Time-series DB"],
      integrations: ["SCADA systems", "IoT devices", "ERP systems", "CMMS", "Analytics platforms"],
      apiEndpoints: 250,
      uptime: "99.9%",
      security: ["Industrial security", "Encryption", "Access controls", "Data integrity"]
    },
    competitors: ["Siemens", "GE Digital", "PTC", "Rockwell Automation"],
    marketSize: "$23.4 billion by 2025"
  },

  // AI-Powered HR Platform
  {
    id: "ai-hr-platform",
    title: "AI HR Management Platform",
    description: "Intelligent HR platform that uses AI to streamline recruitment, employee management, performance evaluation, and workforce analytics.",
    category: "Human Resources",
    subcategory: "AI Management",
    price: 349,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI recruitment",
      "Candidate screening",
      "Performance analytics",
      "Employee engagement",
      "Talent management",
      "Workforce planning",
      "Compliance monitoring",
      "Reporting tools",
      "Mobile app",
      "Integration APIs"
    ],
    benefits: [
      "Reduce hiring time by 60%",
      "Improve candidate quality",
      "Enhance employee retention",
      "Optimize workforce planning",
      "Ensure compliance"
    ],
    useCases: [
      "Recruitment",
      "Performance management",
      "Employee engagement",
      "Talent development",
      "Workforce analytics"
    ],
    targetAudience: [
      "HR departments",
      "Recruitment agencies",
      "Enterprise organizations",
      "Startups",
      "Consulting firms"
    ],
    tags: ["Human Resources", "AI", "Recruitment", "Performance Management", "Analytics"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "professional",
    marketPrice: "$349 - $1,400/month",
    roi: "350-600%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    technicalSpecs: {
      technology: ["Machine Learning", "NLP", "React", "Python", "PostgreSQL", "Redis"],
      integrations: ["ATS systems", "HRIS platforms", "Job boards", "Social media", "Background check services"],
      apiEndpoints: 120,
      uptime: "99.9%",
      security: ["SOC 2", "GDPR", "SSL", "Encryption", "Access controls"]
    },
    competitors: ["Workday", "BambooHR", "Zenefits", "Gusto"],
    marketSize: "$14.2 billion by 2025"
  },

  // AI-Powered Financial Risk Management
  {
    id: "ai-financial-risk-management",
    title: "AI Financial Risk Management Platform",
    description: "Advanced financial risk management platform that uses AI to assess credit risk, detect fraud, and optimize financial decisions with real-time analytics.",
    category: "Financial Technology",
    subcategory: "Risk Management",
    price: 899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Credit risk assessment",
      "Fraud detection",
      "Portfolio optimization",
      "Market risk analysis",
      "Compliance monitoring",
      "Real-time alerts",
      "Predictive modeling",
      "Reporting tools",
      "Mobile app",
      "API access"
    ],
    benefits: [
      "Reduce fraud losses by 80%",
      "Improve risk assessment accuracy",
      "Optimize portfolio performance",
      "Ensure compliance",
      "Real-time monitoring"
    ],
    useCases: [
      "Credit assessment",
      "Fraud prevention",
      "Portfolio management",
      "Risk monitoring",
      "Compliance reporting"
    ],
    targetAudience: [
      "Banks",
      "Credit unions",
      "Insurance companies",
      "Investment firms",
      "Fintech companies"
    ],
    tags: ["Financial Technology", "AI", "Risk Management", "Fraud Detection", "Analytics"],
    estimatedDelivery: "4-5 weeks",
    supportLevel: "enterprise",
    marketPrice: "$899 - $3,600/month",
    roi: "600-900%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    technicalSpecs: {
      technology: ["Machine Learning", "Deep Learning", "Python", "React", "PostgreSQL", "Redis"],
      integrations: ["Core banking systems", "Payment processors", "Credit bureaus", "Regulatory systems", "Trading platforms"],
      apiEndpoints: 200,
      uptime: "99.99%",
      security: ["SOC 2", "PCI DSS", "Encryption", "Access controls", "Audit logging"]
    },
    competitors: ["FICO", "Experian", "TransUnion", "Equifax"],
    marketSize: "$31.8 billion by 2025"
  },

  // AI-Powered Supply Chain Intelligence
  {
    id: "ai-supply-chain-intelligence",
    title: "AI Supply Chain Intelligence Platform",
    description: "Intelligent supply chain platform that uses AI to provide real-time visibility, predictive analytics, and optimization recommendations for complex supply chain networks.",
    category: "Supply Chain",
    subcategory: "AI Intelligence",
    price: 649,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time visibility",
      "Predictive analytics",
      "Demand forecasting",
      "Inventory optimization",
      "Risk assessment",
      "Performance monitoring",
      "Collaboration tools",
      "Reporting dashboards",
      "Mobile app",
      "API access"
    ],
    benefits: [
      "Improve supply chain visibility by 100%",
      "Reduce inventory costs by 35%",
      "Optimize demand forecasting",
      "Mitigate supply chain risks",
      "Enhance collaboration"
    ],
    useCases: [
      "Supply chain optimization",
      "Inventory management",
      "Demand planning",
      "Risk management",
      "Performance monitoring"
    ],
    targetAudience: [
      "Manufacturers",
      "Retailers",
      "Logistics companies",
      "Distributors",
      "E-commerce businesses"
    ],
    tags: ["Supply Chain", "AI", "Intelligence", "Optimization", "Analytics"],
    estimatedDelivery: "4-5 weeks",
    supportLevel: "enterprise",
    marketPrice: "$649 - $2,600/month",
    roi: "450-700%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    technicalSpecs: {
      technology: ["Machine Learning", "IoT", "React", "Python", "PostgreSQL", "Redis"],
      integrations: ["ERP systems", "WMS platforms", "TMS systems", "IoT devices", "Analytics platforms"],
      apiEndpoints: 180,
      uptime: "99.9%",
      security: ["SOC 2", "SSL", "Encryption", "Access controls", "Data privacy"]
    },
    competitors: ["Llamasoft", "Elementum", "E2open", "Kinaxis"],
    marketSize: "$18.7 billion by 2025"
  },

  // AI-Powered Healthcare Analytics
  {
    id: "ai-healthcare-analytics",
    title: "AI Healthcare Analytics Platform",
    description: "Advanced healthcare analytics platform that uses AI to analyze patient data, predict health outcomes, and optimize healthcare delivery for improved patient care.",
    category: "Healthcare Technology",
    subcategory: "AI Analytics",
    price: 749,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Patient data analysis",
      "Health outcome prediction",
      "Treatment optimization",
      "Population health",
      "Clinical decision support",
      "Performance analytics",
      "Compliance monitoring",
      "Reporting tools",
      "Mobile app",
      "API access"
    ],
    benefits: [
      "Improve patient outcomes by 40%",
      "Reduce healthcare costs by 25%",
      "Optimize treatment plans",
      "Enhance clinical decisions",
      "Ensure compliance"
    ],
    useCases: [
      "Clinical analytics",
      "Population health",
      "Treatment optimization",
      "Performance monitoring",
      "Research support"
    ],
    targetAudience: [
      "Hospitals",
      "Clinics",
      "Healthcare systems",
      "Research institutions",
      "Health insurance companies"
    ],
    tags: ["Healthcare", "AI", "Analytics", "Clinical", "Patient Care"],
    estimatedDelivery: "4-5 weeks",
    supportLevel: "enterprise",
    marketPrice: "$749 - $3,000/month",
    roi: "500-800%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    technicalSpecs: {
      technology: ["Machine Learning", "Deep Learning", "Python", "React", "PostgreSQL", "Redis"],
      integrations: ["EHR systems", "EMR platforms", "Lab systems", "Imaging systems", "Analytics platforms"],
      apiEndpoints: 200,
      uptime: "99.99%",
      security: ["HIPAA", "SOC 2", "Encryption", "Access controls", "Audit logging"]
    },
    competitors: ["Epic", "Cerner", "Allscripts", "Athenahealth"],
    marketSize: "$45.2 billion by 2025"
  }
];