export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  price?: number;
  currency?: string;
  pricingModel?: string;
  features: string[];
  useCases: string[];
  targetAudience: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const COMPREHENSIVE_SERVICES: Service[] = [
  {
    id: "ai-content-hub-pro",
    title: "AI Content Hub Pro",
    description: "Enterprise-grade AI content creation platform for multi-platform content generation and optimization.",
    category: "AI & Content Creation",
    price: 2999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "GPT-4 Integration",
      "Real-time Analytics",
      "Brand Voice Consistency",
      "24/7 Support",
      "Multi-language Generation",
      "SEO Optimization",
      "Cross-platform Distribution"
    ],
    useCases: [
      "Content marketing",
      "Social media management",
      "SEO content creation",
      "Brand communication"
    ],
    targetAudience: [
      "Marketing agencies",
      "Enterprise companies",
      "Content creators",
      "Digital marketers"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-autonomous-business-manager",
    title: "AI Autonomous Business Manager",
    description: "Intelligent business management platform that autonomously handles operations, decision-making, and strategic planning.",
    category: "AI & Business Intelligence",
    price: 4999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Autonomous decision making",
      "Real-time business analytics",
      "Predictive modeling",
      "Process automation",
      "Performance monitoring",
      "Strategic planning",
      "Risk assessment"
    ],
    useCases: [
      "Business operations",
      "Strategic planning",
      "Performance optimization",
      "Risk management"
    ],
    targetAudience: [
      "Enterprise companies",
      "Business consultants",
      "Operations managers",
      "C-level executives"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-security-platform",
    title: "Quantum Security Platform",
    description: "Next-generation security platform leveraging quantum computing for unbreakable encryption and threat detection.",
    category: "Cybersecurity & Quantum",
    price: 7999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum encryption",
      "Threat detection",
      "Real-time monitoring",
      "Compliance reporting",
      "Zero-trust architecture",
      "AI-powered analysis",
      "24/7 security operations"
    ],
    useCases: [
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Critical infrastructure"
    ],
    targetAudience: [
      "Banks and financial institutions",
      "Healthcare providers",
      "Government agencies",
      "Critical infrastructure operators"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "micro-saas-platform",
    title: "Micro-SaaS Platform",
    description: "Scalable SaaS development platform for building and deploying custom business applications.",
    category: "SaaS & Development",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Custom development",
      "Scalable architecture",
      "API integration",
      "User management",
      "Analytics dashboard",
      "Multi-tenant support",
      "Cloud deployment"
    ],
    useCases: [
      "Business process automation",
      "Customer relationship management",
      "Project management",
      "Inventory management"
    ],
    targetAudience: [
      "Small to medium businesses",
      "Startups",
      "Enterprise companies",
      "Software developers"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export const SERVICE_CATEGORIES = [
  "AI & Machine Learning",
  "Cybersecurity", 
  "Cloud & Infrastructure",
  "Data & Analytics",
  "Digital Transformation",
  "Web & Mobile Development",
  "IT Support & Consulting",
  "Blockchain & Web3",
  "Voice AI",
  "Quantum Security",
  "Content Creation",
  "Identity Management",
  "Sales Intelligence",
  "Incident Response",
  "Customer Analytics",
  "Supply Chain",
  "HR Technology",
  "Financial Security",
  "Storage Solutions",
  "Customer Experience",
  "Zero Trust Security",
  "NFT Platform",
  "DeFi Services",
  "Security Testing",
  "Process Automation"
];