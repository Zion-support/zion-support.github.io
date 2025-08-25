export interface ComprehensiveService {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  description: string;
  price: number;
  currency: string;
  pricingModel: string;
  userLimit: string;
  features: string[];
  benefits: string[];
  targetAudience: string[];
  tags: string[];
  marketPrice: string;
  roi: string;
  competitors: string[];
  technology: string[];
  integrations: string[];
  compliance: string[];
  estimatedDelivery: string;
  supportLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
  demoUrl?: string;
  documentationUrl?: string;
  freeTrial: boolean;
  freeTrialDays: number;
}

export const COMPREHENSIVE_SERVICES: ComprehensiveService[] = [
  // AI & Machine Learning Services
  {
    id: "ai-autonomous-systems",
    title: "AI Autonomous Systems",
    category: "Artificial Intelligence",
    subcategory: "Autonomous Systems",
    description: "End-to-end AI autonomous systems for enterprise automation and decision-making.",
    price: 2499,
    currency: "$",
    pricingModel: "monthly",
    userLimit: "Unlimited",
    features: [
      "Machine learning algorithms",
      "Predictive analytics",
      "Automated decision making",
      "Real-time processing",
      "Scalable architecture"
    ],
    benefits: [
      "Reduce operational costs by 40%",
      "Improve decision accuracy by 85%",
      "24/7 autonomous operation",
      "Scalable AI solutions"
    ],
    targetAudience: [
      "Large enterprises",
      "Manufacturing companies",
      "Financial institutions",
      "Healthcare organizations"
    ],
    tags: ["AI", "Machine Learning", "Automation", "Enterprise"],
    marketPrice: "$2,499 - $5,999/month",
    roi: "400% within 12 months",
    competitors: ["IBM Watson", "Microsoft Azure AI", "Google Cloud AI", "Amazon SageMaker"],
    technology: ["TensorFlow", "PyTorch", "Python", "Docker", "Kubernetes"],
    integrations: ["ERP systems", "CRM platforms", "Database systems", "Cloud services"],
    compliance: ["GDPR", "SOC 2", "ISO 27001", "HIPAA"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    demoUrl: "https://ziontechgroup.com/demo/ai-autonomous",
    documentationUrl: "https://ziontechgroup.com/docs/ai-autonomous",
    freeTrial: true,
    freeTrialDays: 30
  },

  // Cloud & DevOps Services
  {
    id: "cloud-devops-solutions",
    title: "Cloud & DevOps Solutions",
    category: "Cloud Computing",
    subcategory: "DevOps",
    description: "Comprehensive cloud infrastructure and DevOps automation services for modern applications.",
    price: 1499,
    currency: "$",
    pricingModel: "monthly",
    userLimit: "Up to 100 developers",
    features: [
      "Multi-cloud management",
      "CI/CD pipelines",
      "Infrastructure as Code",
      "Monitoring & alerting",
      "Security compliance"
    ],
    benefits: [
      "Deploy 10x faster",
      "Reduce infrastructure costs by 30%",
      "Improve system reliability",
      "Enhanced security posture"
    ],
    targetAudience: [
      "Software companies",
      "Digital agencies",
      "E-commerce businesses",
      "Startups"
    ],
    tags: ["Cloud", "DevOps", "Automation", "Infrastructure"],
    marketPrice: "$1,499 - $3,999/month",
    roi: "250% within 6 months",
    competitors: ["AWS", "Azure", "Google Cloud", "DigitalOcean"],
    technology: ["Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus"],
    integrations: ["GitHub", "GitLab", "Slack", "Jira", "Confluence"],
    compliance: ["SOC 2", "ISO 27001", "GDPR", "PCI DSS"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    demoUrl: "https://ziontechgroup.com/demo/cloud-devops",
    documentationUrl: "https://ziontechgroup.com/docs/cloud-devops",
    freeTrial: true,
    freeTrialDays: 14
  },

  // Cybersecurity Services
  {
    id: "cybersecurity-solutions",
    title: "Cybersecurity Solutions",
    category: "Security",
    subcategory: "Cybersecurity",
    description: "Advanced cybersecurity solutions including threat detection, prevention, and incident response.",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    userLimit: "Unlimited",
    features: [
      "Threat detection & response",
      "Vulnerability assessment",
      "Security monitoring",
      "Incident response",
      "Compliance management"
    ],
    benefits: [
      "Protect against 99.9% of threats",
      "Meet compliance requirements",
      "Reduce security incidents by 90%",
      "24/7 security monitoring"
    ],
    targetAudience: [
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Enterprise businesses"
    ],
    tags: ["Cybersecurity", "Security", "Compliance", "Threat Detection"],
    marketPrice: "$1,999 - $4,999/month",
    roi: "300% within 9 months",
    competitors: ["CrowdStrike", "SentinelOne", "Palo Alto Networks", "Fortinet"],
    technology: ["AI/ML", "Behavioral analytics", "Threat intelligence", "SIEM"],
    integrations: ["Active Directory", "LDAP", "SIEM systems", "Security tools"],
    compliance: ["SOC 2", "ISO 27001", "NIST", "GDPR", "HIPAA"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    demoUrl: "https://ziontechgroup.com/demo/cybersecurity",
    documentationUrl: "https://ziontechgroup.com/docs/cybersecurity",
    freeTrial: true,
    freeTrialDays: 21
  },

  // Digital Transformation Services
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    category: "Consulting",
    subcategory: "Digital Strategy",
    description: "End-to-end digital transformation consulting and implementation services.",
    price: 5000,
    currency: "$",
    pricingModel: "project-based",
    userLimit: "Unlimited",
    features: [
      "Digital strategy development",
      "Process optimization",
      "Technology implementation",
      "Change management",
      "Performance monitoring"
    ],
    benefits: [
      "Increase operational efficiency by 50%",
      "Reduce costs by 30%",
      "Improve customer experience",
      "Enable innovation culture"
    ],
    targetAudience: [
      "Traditional businesses",
      "Manufacturing companies",
      "Retail organizations",
      "Service companies"
    ],
    tags: ["Digital Transformation", "Consulting", "Strategy", "Innovation"],
    marketPrice: "$5,000 - $50,000/project",
    roi: "200% within 18 months",
    competitors: ["McKinsey", "BCG", "Bain", "Deloitte Digital"],
    technology: ["Cloud platforms", "AI/ML", "IoT", "Mobile apps", "Analytics"],
    integrations: ["Legacy systems", "ERP", "CRM", "Business processes"],
    compliance: ["Industry standards", "Regulatory requirements"],
    estimatedDelivery: "12-24 weeks",
    supportLevel: "premium",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    demoUrl: "https://ziontechgroup.com/demo/digital-transformation",
    documentationUrl: "https://ziontechgroup.com/docs/digital-transformation",
    freeTrial: false,
    freeTrialDays: 0
  },

  // Micro SaaS Solutions
  {
    id: "micro-saas-platforms",
    title: "Micro SaaS Platforms",
    category: "Software",
    subcategory: "SaaS",
    description: "Custom micro SaaS solutions for specific business needs and workflows.",
    price: 799,
    currency: "$",
    pricingModel: "monthly",
    userLimit: "Up to 500 users",
    features: [
      "Custom SaaS development",
      "Multi-tenant architecture",
      "Subscription management",
      "Analytics dashboard",
      "API integration"
    ],
    benefits: [
      "Reduce development costs by 60%",
      "Faster time to market",
      "Scalable architecture",
      "Recurring revenue model"
    ],
    targetAudience: [
      "SaaS startups",
      "Digital agencies",
      "Enterprise businesses",
      "Independent developers"
    ],
    tags: ["SaaS", "Microservices", "Custom Development", "API"],
    marketPrice: "$799 - $2,999/month",
    roi: "350% within 10 months",
    competitors: ["Bubble", "Webflow", "Zapier", "Airtable"],
    technology: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
    integrations: ["Payment gateways", "Email services", "Analytics tools", "CRM systems"],
    compliance: ["GDPR", "SOC 2", "PCI DSS"],
    estimatedDelivery: "6-10 weeks",
    supportLevel: "standard",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    demoUrl: "https://ziontechgroup.com/demo/micro-saas",
    documentationUrl: "https://ziontechgroup.com/docs/micro-saas",
    freeTrial: true,
    freeTrialDays: 14
  }
];