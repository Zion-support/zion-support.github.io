import { UnifiedService } from '../types/unifiedServiceTypes';

export interface Service extends UnifiedService {
  // Keep the existing interface for backward compatibility
}

export const comprehensiveServices: UnifiedService[] = [
  {
    id: "ai-content-hub-pro",
    title: "AI Content Hub Pro",
    description: "Enterprise-grade AI content creation platform for multi-platform content generation and optimization.",
    category: "AI & Content Creation",
    price: 2999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-language Generation",
      "SEO Optimization", 
      "Cross-platform Distribution",
      "Brand Voice Consistency",
      "Real-time Analytics",
      "24/7 Support"
    ],
    benefits: [
      "Increase content production by 300%",
      "Improve SEO rankings",
      "Maintain brand consistency",
      "Reduce content creation costs"
    ],
    useCases: [
      "Marketing agencies",
      "E-commerce businesses",
      "Content creators",
      "Enterprise marketing teams"
    ],
    targetAudience: [
      "Marketing professionals",
      "Content creators",
      "Business owners",
      "Digital agencies"
    ],
    tags: ["AI", "Content Creation", "SEO", "Marketing", "Enterprise"],
    estimatedDelivery: "2-4 weeks",
    supportLevel: "premium",
    marketPrice: "$2,999 - $5,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-autonomous-business-manager",
    title: "AI Autonomous Business Manager",
    description: "Intelligent business management system that autonomously handles operations, decision-making, and strategic planning.",
    category: "AI & Business Intelligence",
    price: 1500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Autonomous Decision Making",
      "Business Process Automation",
      "Strategic Planning",
      "Performance Monitoring",
      "Risk Assessment",
      "Real-time Analytics"
    ],
    benefits: [
      "Reduce operational costs by 40%",
      "Improve decision-making speed",
      "Automate routine tasks",
      "Enhance business intelligence"
    ],
    useCases: [
      "Small to medium businesses",
      "Startups",
      "Consulting firms",
      "Service-based companies"
    ],
    targetAudience: [
      "Business owners",
      "Entrepreneurs",
      "Business consultants",
      "Operations managers"
    ],
    tags: ["AI", "Business Intelligence", "Automation", "Analytics", "Management"],
    estimatedDelivery: "3-6 weeks",
    supportLevel: "standard",
    marketPrice: "$1,500 - $3,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-machine-learning-platform",
    title: "Quantum Machine Learning Platform",
    description: "Advanced quantum computing platform for machine learning and AI applications.",
    category: "Quantum Technology",
    price: 5000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum Algorithm Optimization",
      "ML Model Training",
      "Quantum Neural Networks",
      "Real-time Processing",
      "Advanced Analytics",
      "Enterprise Security"
    ],
    benefits: [
      "Solve complex problems 1000x faster",
      "Access cutting-edge quantum technology",
      "Competitive advantage in research",
      "Future-proof technology investment"
    ],
    useCases: [
      "Drug discovery",
      "Financial modeling",
      "Climate prediction",
      "Cryptographic analysis"
    ],
    targetAudience: [
      "Research institutions",
      "Pharmaceutical companies",
      "Financial services",
      "Government agencies"
    ],
    tags: ["Quantum Computing", "Machine Learning", "AI", "Research", "Enterprise"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$5,000 - $15,000/month",
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