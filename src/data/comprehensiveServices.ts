export interface Service {
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
  marketPrice: string;
  deliveryTime: string;
  tags: string[];
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
    verified: boolean;
  };
  images: string[];
  rating: number;
  reviewCount: number;
  aiScore: number;
  featured: boolean;
}

export interface ComprehensiveService {
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
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const COMPREHENSIVE_SERVICES: Service[] = [
  {
    id: 'ai-chatbot-development',
    title: 'AI Chatbot Development',
    description: 'Custom AI-powered chatbots for customer service, sales, and support',
    category: 'AI & Machine Learning',
    subcategory: 'Chatbots',
    price: 2500,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Natural language processing',
      'Multi-platform integration',
      'Custom training data',
      'Analytics dashboard',
      '24/7 support'
    ],
    benefits: [
      'Improved customer satisfaction',
      'Reduced support costs',
      '24/7 availability',
      'Scalable solution'
    ],
    marketPrice: '$3,000 - $5,000',
    deliveryTime: '2-4 weeks',
    tags: ['AI', 'Chatbot', 'NLP', 'Customer Service'],
    author: {
      name: 'Zion Tech Group',
      id: 'zion-tech',
      verified: true
    },
    images: ['https://picsum.photos/400/300?random=1'],
    rating: 4.8,
    reviewCount: 24,
    aiScore: 95,
    featured: true
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Migration Services',
    description: 'Complete migration of your infrastructure to cloud platforms',
    category: 'Cloud & Infrastructure',
    subcategory: 'Migration',
    price: 5000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'AWS/Azure/GCP migration',
      'Data migration',
      'Security configuration',
      'Performance optimization',
      'Training and documentation'
    ],
    benefits: [
      'Reduced infrastructure costs',
      'Improved scalability',
      'Enhanced security',
      'Better performance'
    ],
    marketPrice: '$7,000 - $12,000',
    deliveryTime: '4-8 weeks',
    tags: ['Cloud', 'Migration', 'AWS', 'Azure', 'GCP'],
    author: {
      name: 'Zion Tech Group',
      id: 'zion-tech',
      verified: true
    },
    images: ['https://picsum.photos/400/300?random=2'],
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    aiScore: 93,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Mobile & Web Development Services
  {
    id: "mobile-web-1",
    title: "Progressive Web App Development",
    description: "Modern progressive web app development with offline capabilities, push notifications, and native app-like experience. Optimized for performance and user engagement.",
    category: "Mobile & Web Development",
    subcategory: "PWA Development",
    price: 3200,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Progressive Web App (PWA)",
      "Offline functionality",
      "Push notifications",
      "Responsive design",
      "Performance optimization",
      "SEO optimization",
      "Analytics integration",
      "Cross-platform compatibility"
    ],
    benefits: [
      "Reduce development costs by 40%",
      "Better user engagement",
      "Faster loading times",
      "Improved SEO performance",
      "Native app-like experience"
    ],
    marketPrice: "$3,200 - $12,000",
    deliveryTime: "4-8 weeks",
    tags: ["PWA", "Web Development", "Mobile", "Performance", "SEO"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T09:00:00.000Z",
    rating: 4.8,
    reviewCount: 167,
    featured: false,
    aiScore: 88,
    location: "Global",
    availability: "Available",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
import { ProductListing } from "@/types/listings";
  }
];

export const SERVICE_CATEGORIES = [
  'AI & Machine Learning',
  'Cloud & Infrastructure',
  'Cybersecurity',
  'Data Analytics',
  'Web Development',
  'Mobile Development'
];

export const PRICING_TIERS = [
  {
    name: 'Basic',
    price: 1000,
    features: ['Basic features', 'Email support']
  },
  {
    name: 'Professional',
    price: 2500,
    features: ['All basic features', 'Priority support', 'Advanced features']
  },
  {
    name: 'Enterprise',
    price: 5000,
    features: ['All professional features', '24/7 support', 'Custom solutions']
  }
];

export const CONTACT_INFO = {
  mobile: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com",
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
  responseTime: "24-48 hours for initial response"
};

// Service Pricing Tiers (alias for compatibility)
export const SERVICE_PRICING_TIERS = PRICING_TIERS;

// Service Guarantees
export const SERVICE_GUARANTEES = [
  {
    name: "Quality Assurance",
    description: "All services undergo rigorous testing and quality checks",
    icon: "✓"
  },
  {
    name: "Performance Guarantee",
    description: "Guaranteed performance metrics and uptime",
    icon: "⚡"
  },
  {
    name: "Security Compliance",
    description: "Enterprise-grade security and compliance standards",
    icon: "🔒"
  },
  {
    id: "zero-trust-security",
    title: "Zero Trust Security Architecture",
    description: "Comprehensive zero trust security implementation that verifies every user, device, and network request before granting access.",
    category: "Cybersecurity",
    subcategory: "Access Control",
    price: 25000,
    currency: "$",
    pricingModel: "project",
    features: [
      "Identity verification",
      "Device trust scoring",
      "Network segmentation",
      "Continuous monitoring",
      "Policy enforcement",
      "Audit logging"
    ],
    benefits: [
      "Enhanced security",
      "Reduced attack surface",
      "Compliance achievement",
      "Improved visibility",
      "Scalable security"
    ],
    useCases: [
      "Enterprise networks",
      "Cloud environments",
      "Critical infrastructure",
      "Financial services",
      "Healthcare systems"
    ],
    targetAudience: [
      "Enterprise security teams",
      "Cloud architects",
      "Compliance officers",
      "IT directors",
      "Security consultants"
    ],
    tags: ["Zero Trust", "Security Architecture", "Access Control", "Compliance", "Enterprise Security"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$25,000 - $100,000/project",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // NEW ADVANCED CYBERSECURITY SERVICES
  {
    id: "quantum-cryptography",
    title: "Quantum Cryptography & Post-Quantum Security",
    description: "Next-generation cryptographic solutions using quantum mechanics to provide unbreakable encryption and future-proof security.",
    category: "Cybersecurity",
    subcategory: "Quantum Security",
    price: 15000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum key distribution",
      "Post-quantum algorithms",
      "Quantum-resistant encryption",
      "Secure communication channels",
      "Quantum random number generation",
      "Future-proof security"
    ],
    benefits: [
      "Unbreakable encryption",
      "Future-proof security",
      "Quantum advantage",
      "Regulatory compliance",
      "Competitive advantage"
    ],
    useCases: [
      "Government communications",
      "Financial transactions",
      "Healthcare data",
      "Military applications",
      "Critical infrastructure"
    ],
    targetAudience: [
      "Government agencies",
      "Financial institutions",
      "Healthcare organizations",
      "Defense contractors",
      "Technology companies"
    ],
    tags: ["Quantum Cryptography", "Post-Quantum Security", "Encryption", "Future-Proof", "Government"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$15,000 - $40,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-threat-hunting",
    title: "AI-Powered Threat Hunting & Response",
    description: "Intelligent cybersecurity platform that uses AI to proactively hunt for threats, predict attacks, and automate response actions.",
    category: "Cybersecurity",
    subcategory: "AI Security",
    price: 12000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI threat detection",
      "Predictive analytics",
      "Automated response",
      "Behavioral analysis",
      "Threat intelligence",
      "Incident automation"
    ],
    benefits: [
      "Proactive threat prevention",
      "Reduced false positives",
      "Faster incident response",
      "24/7 monitoring",
      "Cost-effective security"
    ],
    useCases: [
      "Security operations centers",
      "Large enterprises",
      "Financial services",
      "Healthcare organizations",
      "Government agencies"
    ],
    targetAudience: [
      "Security analysts",
      "CISOs",
      "IT security teams",
      "Managed security providers",
      "Security consultants"
    ],
    tags: ["AI Security", "Threat Hunting", "Automated Response", "Predictive Analytics", "SOC"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$12,000 - $30,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // NEW MICRO SAAS SOLUTIONS
  {
    id: "quantum-crm-intelligence",
    title: "Quantum CRM Intelligence Suite",
    description: "Revolutionary CRM platform that leverages quantum computing principles for ultra-fast customer insights and predictive analytics.",
    category: "Micro SAAS Solutions",
    subcategory: "Customer Intelligence",
    price: 1200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum-powered analytics",
      "Predictive customer behavior",
      "Real-time insights",
      "AI-driven recommendations",
      "Multi-channel integration",
      "Advanced reporting"
    ],
    benefits: [
      "100x faster data processing",
      "Accurate predictions",
      "Real-time insights",
      "Competitive advantage",
      "Scalable growth"
    ],
    useCases: [
      "Sales teams",
      "Marketing departments",
      "Customer service",
      "E-commerce",
      "B2B companies"
    ],
    targetAudience: [
      "Sales managers",
      "Marketing professionals",
      "Business owners",
      "Customer success teams",
      "Growth hackers"
    ],
    tags: ["Quantum CRM", "Customer Intelligence", "Predictive Analytics", "Sales", "Marketing"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$1,200 - $3,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-hr-platform",
    title: "AI Autonomous HR Platform",
    description: "Intelligent human resources platform that automates recruitment, employee management, and organizational development with AI.",
    category: "Micro SAAS Solutions",
    subcategory: "Human Resources",
    price: 900,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI recruitment automation",
      "Employee performance tracking",
      "Skills gap analysis",
      "Automated onboarding",
      "Compliance management",
      "Predictive analytics"
    ],
    benefits: [
      "Reduce hiring time by 70%",
      "Improve candidate quality",
      "Automated compliance",
      "Data-driven decisions",
      "Cost savings"
    ],
    useCases: [
      "HR departments",
      "Recruitment agencies",
      "Small businesses",
      "Enterprise companies",
      "Startups"
    ],
    targetAudience: [
      "HR professionals",
      "Recruiters",
      "Business owners",
      "HR managers",
      "Talent acquisition teams"
    ],
    tags: ["AI HR", "Recruitment", "Employee Management", "Automation", "Compliance"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "standard",
    marketPrice: "$900 - $2,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-financial-intelligence",
    title: "Quantum Financial Intelligence Platform",
    description: "Advanced financial analytics platform using quantum computing for real-time market analysis, risk assessment, and investment optimization.",
    category: "Micro SAAS Solutions",
    subcategory: "Financial Technology",
    price: 2000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum market analysis",
      "Real-time risk assessment",
      "Portfolio optimization",
      "Predictive modeling",
      "Regulatory compliance",
      "Multi-asset support"
    ],
    benefits: [
      "Superior market insights",
      "Real-time risk management",
      "Optimized portfolios",
      "Regulatory compliance",
      "Competitive advantage"
    ],
    useCases: [
      "Investment firms",
      "Banks",
      "Hedge funds",
      "Financial advisors",
      "Trading desks"
    ],
    targetAudience: [
      "Portfolio managers",
      "Financial analysts",
      "Risk managers",
      "Investment advisors",
      "Traders"
    ],
    tags: ["Quantum Finance", "Financial Analytics", "Risk Management", "Investment", "Trading"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$2,000 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-education-platform",
    title: "AI Autonomous Education Platform",
    description: "Revolutionary learning platform that personalizes education using AI, adapts to individual learning styles, and provides real-time feedback.",
    category: "Micro SAAS Solutions",
    subcategory: "Education Technology",
    price: 600,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Personalized learning paths",
      "AI tutoring systems",
      "Adaptive assessments",
      "Progress tracking",
      "Multi-language support",
      "Interactive content"
    ],
    benefits: [
      "Personalized learning experience",
      "Improved student outcomes",
      "Reduced learning time",
      "Scalable education",
      "Cost-effective training"
    ],
    useCases: [
      "Educational institutions",
      "Corporate training",
      "Online learning",
      "Skill development",
      "Language learning"
    ],
    targetAudience: [
      "Educational institutions",
      "Corporate trainers",
      "Online educators",
      "Students",
      "Learning professionals"
    ],
    tags: ["AI Education", "Personalized Learning", "EdTech", "Training", "Adaptive Learning"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "standard",
    marketPrice: "$600 - $1,800/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // NEW SPACE TECHNOLOGY SERVICES
  {
    id: "space-tech-satellite",
    title: "Space Technology & Satellite Solutions",
    description: "Advanced space technology solutions including satellite deployment, space data analytics, and orbital infrastructure management.",
    category: "Space Technology",
    subcategory: "Satellite Solutions",
    price: 50000,
    currency: "$",
    pricingModel: "project",
    features: [
      "Satellite design & deployment",
      "Orbital infrastructure",
      "Space data analytics",
      "Ground station management",
      "Space traffic control",
      "Satellite communications"
    ],
    benefits: [
      "Access to space technology",
      "Global connectivity",
      "Advanced data collection",
      "Competitive advantage",
      "Future-ready infrastructure"
    ],
    useCases: [
      "Telecommunications",
      "Earth observation",
      "Navigation systems",
      "Scientific research",
      "Defense applications"
    ],
    targetAudience: [
      "Customer experience managers",
      "Product managers",
      "Marketing managers",
      "Business owners",
      "Customer success managers"
    ],
    tags: ["AI", "Customer Feedback", "Sentiment Analysis", "Customer Experience", "Analytics"],
    estimatedDelivery: "1-2 weeks",
    supportLevel: "standard",
    marketPrice: "$250 - $800/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-powered-predictive-maintenance",
    title: "AI-Powered Predictive Maintenance Platform",
    description: "Intelligent maintenance platform that uses AI to predict equipment failures, optimize maintenance schedules, and reduce downtime.",
    category: "AI & Machine Learning",
    subcategory: "Industrial IoT",
    price: 1200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Equipment failure prediction",
      "Maintenance optimization",
      "Real-time monitoring",
      "Performance analytics",
      "Alert system",
      "Integration capabilities",
      "Mobile applications",
      "Reporting dashboard"
    ],
    benefits: [
      "Reduce downtime by 40%",
      "Lower maintenance costs by 25%",
      "Extend equipment life",
      "Preventive maintenance",
      "Operational efficiency"
    ],
    useCases: [
      "Manufacturing companies",
      "Industrial facilities",
      "Energy companies",
      "Transportation",
      "Utilities"
    ],
    targetAudience: [
      "Maintenance managers",
      "Operations directors",
      "Facility managers",
      "Engineering teams",
      "Plant managers"
    ],
    tags: ["AI", "Predictive Maintenance", "Industrial IoT", "Equipment Management", "Automation"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$1,200 - $4,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // NEW INNOVATIVE MICSAAS SERVICES STARTING HERE
  {
    id: "ai-autonomous-code-review",
    title: "AI Autonomous Code Review & Quality Assurance",
    description: "Intelligent code review platform that automatically analyzes code quality, security vulnerabilities, and performance issues using advanced AI algorithms.",
    category: "AI & Machine Learning",
    subcategory: "Development Tools",
    price: 399,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated code analysis",
      "Security vulnerability detection",
      "Performance optimization suggestions",
      "Code style enforcement",
      "Integration with CI/CD pipelines",
      "Real-time feedback",
      "Custom rule configuration",
      "Team collaboration tools"
    ],
    benefits: [
      "Reduce code review time by 80%",
      "Improve code quality by 60%",
      "Early security vulnerability detection",
      "Consistent coding standards",
      "Faster development cycles"
    ],
    useCases: [
      "Software development teams",
      "DevOps teams",
      "Quality assurance teams",
      "Open source projects",
      "Enterprise development"
    ],
    targetAudience: [
      "Software developers",
      "DevOps engineers",
      "QA engineers",
      "Engineering managers",
      "CTOs"
    ],
    tags: ["AI", "Code Review", "Quality Assurance", "Security", "DevOps"],
    estimatedDelivery: "1-2 weeks",
    supportLevel: "premium",
    marketPrice: "$399 - $1,200/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-encryption-as-a-service",
    title: "Quantum Encryption as a Service (QEaaS)",
    description: "Next-generation encryption platform leveraging quantum-resistant algorithms to protect sensitive data against future quantum computing threats.",
    category: "Cybersecurity",
    subcategory: "Quantum Security",
    price: 2500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum-resistant algorithms",
      "Post-quantum cryptography",
      "Real-time encryption/decryption",
      "Multi-layer security",
      "Compliance certifications",
      "API integration",
      "Audit logging",
      "24/7 security monitoring"
    ],
    benefits: [
      "Future-proof security",
      "Quantum-resistant protection",
      "Regulatory compliance",
      "Reduced security risks",
      "Competitive advantage"
    ],
    useCases: [
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Defense contractors",
      "Space companies"
    ],
    tags: ["Space Technology", "Satellites", "Orbital Infrastructure", "Space Data", "Future Tech"],
    estimatedDelivery: "12-18 months",
    supportLevel: "enterprise",
    marketPrice: "$50,000 - $500,000/project",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-internet-backbone",
    title: "Quantum Internet Backbone Infrastructure",
    description: "Next-generation quantum internet infrastructure providing ultra-secure, high-speed global communications with quantum entanglement.",
    category: "Space Technology",
    subcategory: "Quantum Communications",
    price: 75000,
    currency: "$",
    pricingModel: "project",
    features: [
      "Quantum entanglement networks",
      "Ultra-secure communications",
      "Global quantum infrastructure",
      "Quantum repeaters",
      "Quantum key distribution",
      "Future-proof technology"
    ],
    benefits: [
      "Unhackable communications",
      "Instant global connectivity",
      "Quantum advantage",
      "Future-proof infrastructure",
      "Competitive edge"
    ],
    useCases: [
      "Government communications",
      "Financial networks",
      "Healthcare systems",
      "Defense applications",
      "Research institutions"
    ],
    targetAudience: [
      "CISOs",
      "Security architects",
      "Compliance officers",
      "Risk managers",
      "Government officials"
    ],
    tags: ["Quantum Security", "Encryption", "Cybersecurity", "Compliance", "Future-Proof"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,000 - $10,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-powered-content-generator",
    title: "AI-Powered Content Generation Suite",
    description: "Advanced AI content creation platform that generates high-quality, SEO-optimized content for blogs, social media, and marketing campaigns.",
    category: "AI & Machine Learning",
    subcategory: "Content Creation",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-format content generation",
      "SEO optimization",
      "Brand voice customization",
      "Plagiarism detection",
      "Content scheduling",
      "Performance analytics",
      "Multi-language support",
      "API integration"
    ],
    benefits: [
      "Reduce content creation time by 80%",
      "Improve SEO rankings",
      "Consistent brand messaging",
      "Cost-effective content production",
      "Scalable content strategy"
    ],
    useCases: [
      "Marketing agencies",
      "Content creators",
      "E-commerce businesses",
      "Bloggers",
      "Social media managers"
    ],
    targetAudience: [
      "Content marketers",
      "Digital agencies",
      "Business owners",
      "Social media managers",
      "Bloggers"
    ],
    tags: ["AI", "Content Creation", "SEO", "Marketing", "Automation"],
    estimatedDelivery: "1-2 weeks",
    supportLevel: "premium",
    marketPrice: "$199 - $599/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-encryption-platform",
    title: "Quantum-Resistant Encryption Platform",
    description: "Next-generation encryption platform that uses quantum-resistant algorithms to protect data against future quantum computing threats.",
    category: "Cybersecurity",
    subcategory: "Quantum Security",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Post-quantum cryptography",
      "Multi-algorithm support",
      "Key management system",
      "Performance optimization",
      "Compliance frameworks",
      "Real-time monitoring",
      "Automated updates",
      "Enterprise integration"
    ],
    benefits: [
      "Future-proof security",
      "Quantum-resistant protection",
      "Regulatory compliance",
      "High performance",
      "Scalable architecture"
    ],
    useCases: [
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Defense contractors",
      "Critical infrastructure"
    ],
    targetAudience: [
      "CISOs",
      "Security architects",
      "Compliance officers",
      "Government agencies",
      "Financial institutions"
    ],
    tags: ["Quantum Security", "Encryption", "Cybersecurity", "Compliance", "Future-Proof"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,500 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-autonomous-legal-assistant",
    title: "AI Autonomous Legal Research & Document Generation",
    description: "Intelligent legal assistant that automates legal research, document generation, and contract analysis using advanced AI and natural language processing.",
    category: "AI & Machine Learning",
    subcategory: "Legal Technology",
    price: 899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Legal document generation",
      "Contract analysis",
      "Legal research automation",
      "Compliance checking",
      "Risk assessment",
      "Document templates",
      "Multi-jurisdiction support",
      "Integration with legal databases"
    ],
    benefits: [
      "Reduce legal research time by 70%",
      "Improve document accuracy",
      "Cost-effective legal services",
      "24/7 availability",
      "Scalable legal operations"
    ],
    useCases: [
      "Law firms",
      "Corporate legal departments",
      "Legal consultants",
      "Startups",
      "Small businesses"
    ],
    targetAudience: [
      "Lawyers",
      "Legal professionals",
      "Corporate counsel",
      "Legal consultants",
      "Business owners"
    ],
    tags: ["AI", "Legal Tech", "Document Generation", "Compliance", "Automation"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$899 - $2,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "autonomous-financial-advisor",
    title: "AI-Powered Autonomous Financial Advisory Platform",
    description: "Intelligent financial advisory platform that provides personalized investment advice, portfolio management, and financial planning using advanced AI algorithms.",
    category: "AI & Machine Learning",
    subcategory: "Financial Technology",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Personalized investment advice",
      "Portfolio optimization",
      "Risk assessment",
      "Market analysis",
      "Financial planning tools",
      "Tax optimization",
      "Real-time monitoring",
      "Mobile app access"
    ],
    benefits: [
      "Professional financial advice at scale",
      "Data-driven investment decisions",
      "Cost-effective wealth management",
      "24/7 portfolio monitoring",
      "Personalized financial planning"
    ],
    useCases: [
      "Individual investors",
      "Financial advisors",
      "Wealth management firms",
      "Retirement planning",
      "Tax optimization"
    ],
    targetAudience: [
      "Individual investors",
      "Financial advisors",
      "Wealth managers",
      "Retirement planners",
      "Tax professionals"
    ],
    tags: ["AI", "FinTech", "Investment", "Financial Planning", "Wealth Management"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$299 - $999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-machine-learning-platform",
    title: "Quantum Machine Learning Development Platform",
    description: "Advanced platform for developing and deploying quantum machine learning algorithms, combining quantum computing with classical ML techniques.",
    category: "AI & Machine Learning",
    subcategory: "Quantum ML",
    price: 4500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum algorithm development",
      "Hybrid quantum-classical ML",
      "Performance benchmarking",
      "Model optimization",
      "Cloud deployment",
      "Real-time processing",
      "Multi-qubit support",
      "Advanced analytics"
    ],
    benefits: [
      "Exponential performance gains",
      "Quantum advantage in ML",
      "Future-proof technology",
      "Research acceleration",
      "Competitive advantage"
    ],
    useCases: [
      "Research institutions",
      "Technology companies",
      "Financial services",
      "Pharmaceutical research",
      "Climate modeling"
    ],
    targetAudience: [
      "ML researchers",
      "Data scientists",
      "Quantum researchers",
      "Technology companies",
      "Academic institutions"
    ],
    tags: ["Quantum ML", "Machine Learning", "AI", "Research", "Advanced Computing"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,500 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-powered-supply-chain-optimizer",
    title: "AI-Powered Supply Chain Optimization Platform",
    description: "Intelligent supply chain management platform that uses AI to optimize logistics, predict demand, and reduce operational costs.",
    category: "AI & Machine Learning",
    subcategory: "Supply Chain",
    price: 1200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Demand forecasting",
      "Inventory optimization",
      "Route optimization",
      "Supplier management",
      "Risk assessment",
      "Real-time tracking",
      "Performance analytics",
      "Integration APIs"
    ],
    benefits: [
      "Reduce logistics costs by 30%",
      "Improve delivery times",
      "Optimize inventory levels",
      "Risk mitigation",
      "Data-driven decisions"
    ],
    useCases: [
      "Manufacturing companies",
      "Retail businesses",
      "Logistics providers",
      "E-commerce platforms",
      "Distribution centers"
    ],
    targetAudience: [
      "Supply chain managers",
      "Logistics coordinators",
      "Operations managers",
      "Business owners",
      "Procurement teams"
    ],
    tags: ["AI", "Supply Chain", "Logistics", "Optimization", "Analytics"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$1,200 - $4,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "autonomous-cybersecurity-operations",
    title: "Autonomous Cybersecurity Operations Center (AutoSOC)",
    description: "Self-operating cybersecurity platform that automatically detects, analyzes, and responds to security threats without human intervention.",
    category: "Cybersecurity",
    subcategory: "Autonomous Security",
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated threat detection",
      "Intelligent incident response",
      "Behavioral analysis",
      "Threat hunting",
      "Vulnerability management",
      "Compliance automation",
      "24/7 monitoring",
      "Machine learning adaptation"
    ],
    benefits: [
      "Zero-day threat protection",
      "Reduced response time",
      "Cost-effective security",
      "Continuous protection",
      "Scalable operations"
    ],
    useCases: [
      "Enterprise organizations",
      "Critical infrastructure",
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies"
    ],
    targetAudience: [
      "CISOs",
      "Security operations teams",
      "IT managers",
      "Risk managers",
      "Compliance officers"
    ],
    tags: ["Autonomous Security", "Cybersecurity", "AI", "Threat Response", "Automation"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,800 - $8,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-internet-protocol",
    title: "Quantum Internet Protocol & Network Security",
    description: "Next-generation quantum internet protocol that provides unhackable communication channels and quantum-secured networking infrastructure.",
    category: "Emerging Technologies",
    subcategory: "Quantum Internet",
    price: 6000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum key distribution",
      "Quantum-secured networks",
      "Protocol optimization",
      "Network monitoring",
      "Security validation",
      "Performance metrics",
      "Scalable infrastructure",
      "Enterprise integration"
    ],
    benefits: [
      "Unhackable communications",
      "Quantum security",
      "Future-proof networking",
      "Regulatory compliance",
      "Competitive advantage"
    ],
    useCases: [
      "Government agencies",
      "Financial institutions",
      "Defense contractors",
      "Research institutions",
      "Critical infrastructure"
    ],
    targetAudience: [
      "Network architects",
      "Security professionals",
      "Government agencies",
      "Financial institutions",
      "Research organizations"
    ],
    tags: ["Quantum Internet", "Network Security", "Quantum Security", "Protocols", "Infrastructure"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$6,000 - $20,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-powered-healthcare-diagnostics",
    title: "AI-Powered Healthcare Diagnostics & Treatment Planning",
    description: "Advanced healthcare AI platform that provides accurate diagnostics, treatment recommendations, and patient outcome predictions.",
    category: "AI & Machine Learning",
    subcategory: "Healthcare",
    price: 1500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Medical image analysis",
      "Diagnostic assistance",
      "Treatment planning",
      "Patient monitoring",
      "Clinical decision support",
      "Outcome prediction",
      "Integration with EHR",
      "Compliance frameworks"
    ],
    benefits: [
      "Improve diagnostic accuracy",
      "Reduce medical errors",
      "Optimize treatment plans",
      "Cost-effective healthcare",
      "Better patient outcomes"
    ],
    useCases: [
      "Hospitals",
      "Medical clinics",
      "Diagnostic centers",
      "Research institutions",
      "Healthcare providers"
    ],
    targetAudience: [
      "Healthcare providers",
      "Medical professionals",
      "Hospital administrators",
      "Research institutions",
      "Healthcare IT teams"
    ],
    tags: ["AI", "Healthcare", "Diagnostics", "Medical AI", "Treatment Planning"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,500 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "autonomous-business-intelligence",
    title: "Autonomous Business Intelligence & Analytics Platform",
    description: "Self-learning business intelligence platform that automatically discovers insights, generates reports, and provides actionable recommendations.",
    category: "AI & Machine Learning",
    subcategory: "Business Intelligence",
    price: 899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated insight discovery",
      "Natural language queries",
      "Predictive analytics",
      "Custom dashboards",
      "Data visualization",
      "Report generation",
      "Integration capabilities",
      "Mobile access"
    ],
    benefits: [
      "Faster decision making",
      "Automated insights",
      "Cost-effective analytics",
      "Scalable intelligence",
      "Data-driven culture"
    ],
    useCases: [
      "Business analysts",
      "Executives",
      "Marketing teams",
      "Sales teams",
      "Operations managers"
    ],
    targetAudience: [
      "Business analysts",
      "Data scientists",
      "Executives",
      "Managers",
      "Business owners"
    ],
    tags: ["AI", "Business Intelligence", "Analytics", "Automation", "Insights"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$899 - $2,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "blockchain-identity-verification",
    title: "Blockchain Identity Verification Platform",
    description: "Decentralized identity verification system that provides secure, tamper-proof identity verification for businesses and individuals.",
    category: "Blockchain & Web3",
    subcategory: "Identity Management",
    price: 1500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Decentralized identity verification",
      "Multi-factor authentication",
      "Biometric integration",
      "Compliance reporting",
      "Cross-border verification",
      "Privacy protection",
      "API integration",
      "Audit trails"
    ],
    benefits: [
      "Enhanced security",
      "Reduced fraud",
      "Global compliance",
      "Privacy protection",
      "Cost-effective verification"
    ],
    useCases: [
      "Financial services",
      "Healthcare",
      "Education",
      "Travel industry",
      "Government services"
    ],
    targetAudience: [
      "Compliance officers",
      "Security managers",
      "HR directors",
      "Business owners",
      "IT managers"
    ],
    tags: ["Blockchain", "Identity Verification", "Security", "Compliance", "Web3"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$1,500 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-powered-sales-forecasting",
    title: "AI-Powered Sales Forecasting Platform",
    description: "Intelligent sales forecasting system that uses machine learning to predict sales trends, optimize pricing, and improve revenue planning.",
    category: "AI & Machine Learning",
    subcategory: "Sales Intelligence",
    price: 1200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Predictive sales analytics",
      "Market trend analysis",
      "Pricing optimization",
      "Customer behavior insights",
      "Revenue forecasting",
      "Scenario planning",
      "Integration with CRM",
      "Real-time dashboards"
    ],
    benefits: [
      "Improve forecast accuracy by 60%",
      "Increase revenue by 25%",
      "Better resource planning",
      "Data-driven decisions",
      "Competitive advantage"
    ],
    useCases: [
      "Sales teams",
      "Business development",
      "Marketing departments",
      "Executive leadership",
      "Financial planning"
    ],
    targetAudience: [
      "Sales directors",
      "Business development managers",
      "CFOs",
      "Marketing directors",
      "Business owners"
    ],
    tags: ["AI", "Sales Forecasting", "Analytics", "Revenue Optimization", "Machine Learning"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$1,200 - $4,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "cybersecurity-automated-incident-response",
    title: "Cybersecurity Automated Incident Response",
    description: "AI-powered cybersecurity platform that automatically detects, analyzes, and responds to security threats in real-time.",
    category: "Cybersecurity",
    subcategory: "Incident Response",
    price: 2500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated threat detection",
      "Real-time incident response",
      "Threat intelligence feeds",
      "Forensic analysis",
      "Compliance reporting",
      "Integration with SIEM",
      "Mobile app alerts",
      "Custom playbooks"
    ],
    benefits: [
      "Reduce response time by 90%",
      "Minimize security incidents",
      "Automated compliance",
      "24/7 protection",
      "Cost-effective security"
    ],
    useCases: [
      "Enterprise organizations",
      "Financial institutions",
      "Healthcare providers",
      "Government agencies",
      "Educational institutions"
    ],
    targetAudience: [
      "CISOs",
      "Security analysts",
      "IT managers",
      "Compliance officers",
      "Risk managers"
    ],
    tags: ["Cybersecurity", "Incident Response", "Automation", "AI", "Security"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,500 - $8,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // NEW HEALTHCARE AI SOLUTIONS
  {
    id: "autonomous-devops-orchestrator",
    title: "Autonomous DevOps Orchestration Platform",
    description: "Self-managing DevOps platform that automatically optimizes deployment pipelines, infrastructure scaling, and performance monitoring.",
    category: "DevOps & Automation",
    subcategory: "Autonomous Operations",
    price: 899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Self-healing infrastructure",
      "Automated scaling",
      "Intelligent deployment strategies",
      "Performance optimization",
      "Cost management",
      "Security automation",
      "Real-time monitoring",
      "Predictive maintenance"
    ],
    benefits: [
      "Reduce DevOps overhead by 70%",
      "Improve deployment success rate",
      "Automatic cost optimization",
      "Enhanced security posture",
      "24/7 autonomous operation"
    ],
    useCases: [
      "Cloud-native applications",
      "Microservices architectures",
      "Multi-cloud environments",
      "High-traffic websites",
      "Enterprise applications"
    ],
    targetAudience: [
      "DevOps engineers",
      "Site reliability engineers",
      "Cloud architects",
      "Engineering managers",
      "CTOs"
    ],
    tags: ["DevOps", "Automation", "AI", "Cloud", "Infrastructure"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$899 - $2,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-powered-customer-success-platform",
    title: "AI-Powered Customer Success & Retention Platform",
    description: "Intelligent platform that predicts customer churn, automates engagement, and optimizes customer lifetime value through machine learning.",
    category: "AI & Machine Learning",
    subcategory: "Customer Success",
    price: 599,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Churn prediction algorithms",
      "Automated engagement campaigns",
      "Customer health scoring",
      "Success milestone tracking",
      "Personalized recommendations",
      "Integration with CRM systems",
      "Analytics dashboard",
      "Mobile app support"
    ],
    benefits: [
      "Reduce customer churn by 40%",
      "Increase customer lifetime value",
      "Automated success management",
      "Data-driven insights",
      "Scalable customer success"
    ],
    useCases: [
      "SaaS companies",
      "Subscription businesses",
      "E-commerce platforms",
      "B2B services",
      "Enterprise software"
    ],
    targetAudience: [
      "Customer success managers",
      "Account managers",
      "Business owners",
      "Product managers",
      "Sales teams"
    ],
    tags: ["AI", "Customer Success", "Retention", "Analytics", "Automation"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$599 - $1,800/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "blockchain-supply-chain-tracking",
    title: "Blockchain Supply Chain Transparency Platform",
    description: "End-to-end supply chain tracking solution using blockchain technology to ensure transparency, authenticity, and compliance across global supply networks.",
    category: "Blockchain & Web3",
    subcategory: "Supply Chain",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time tracking",
      "Smart contract automation",
      "Compliance monitoring",
      "Quality assurance",
      "Sustainability tracking",
      "Multi-stakeholder access",
      "Mobile app support",
      "API integrations"
    ],
    benefits: [
      "Complete supply chain visibility",
      "Reduce fraud and counterfeiting",
      "Automated compliance",
      "Improved efficiency",
      "Enhanced trust"
    ],
    useCases: [
      "Manufacturing companies",
      "Retail chains",
      "Food and beverage",
      "Pharmaceutical companies",
      "Luxury goods"
    ],
    targetAudience: [
      "Supply chain managers",
      "Operations directors",
      "Compliance officers",
      "Business owners",
      "Logistics managers"
    ],
    tags: ["Blockchain", "Supply Chain", "Transparency", "Compliance", "IoT"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,800 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-autonomous-research-assistant",
    title: "AI Autonomous Research & Discovery Assistant",
    description: "Intelligent research platform that autonomously discovers, analyzes, and synthesizes information from multiple sources to accelerate research and innovation.",
    category: "AI & Machine Learning",
    subcategory: "Research & Development",
    price: 799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Autonomous research discovery",
      "Multi-source analysis",
      "Intelligent synthesis",
      "Citation management",
      "Collaborative research",
      "Real-time updates",
      "Custom research domains",
      "Export capabilities"
    ],
    benefits: [
      "Accelerate research by 10x",
      "Reduce manual research time",
      "Comprehensive coverage",
      "Collaborative insights",
      "Stay updated automatically"
    ],
    useCases: [
      "Academic research",
      "Market research",
      "Competitive intelligence",
      "Patent research",
      "Scientific discovery"
    ],
    targetAudience: [
      "Researchers",
      "Analysts",
      "Students",
      "Business strategists",
      "Innovation teams"
    ],
    tags: ["AI", "Research", "Automation", "Discovery", "Intelligence"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$799 - $2,400/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-machine-learning-platform",
    title: "Quantum Machine Learning Platform",
    description: "Advanced platform combining quantum computing principles with machine learning to solve complex optimization problems and accelerate AI model training.",
    category: "AI & Machine Learning",
    subcategory: "Quantum AI",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum algorithm library",
      "Hybrid quantum-classical models",
      "Optimization solvers",
      "Model training acceleration",
      "Quantum simulation tools",
      "API access",
      "Real-time processing",
      "Expert consultation"
    ],
    benefits: [
      "Solve previously intractable problems",
      "Accelerate AI model training",
      "Quantum advantage in optimization",
      "Future-proof technology",
      "Competitive edge"
    ],
    useCases: [
      "Financial modeling",
      "Drug discovery",
      "Logistics optimization",
      "Climate modeling",
      "Cryptography research"
    ],
    targetAudience: [
      "Data scientists",
      "Quantum researchers",
      "AI engineers",
      "Financial analysts",
      "Research institutions"
    ],
    tags: ["Quantum Computing", "Machine Learning", "AI", "Optimization", "Research"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,500 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "autonomous-business-process-optimizer",
    title: "Autonomous Business Process Optimization Platform",
    description: "AI-powered platform that continuously analyzes, optimizes, and automates business processes to maximize efficiency and reduce operational costs.",
    category: "AI & Machine Learning",
    subcategory: "Business Process Automation",
    price: 1200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Process discovery and mapping",
      "Automated optimization",
      "Performance monitoring",
      "Cost analysis",
      "Workflow automation",
      "Integration capabilities",
      "Real-time dashboards",
      "Predictive analytics"
    ],
    benefits: [
      "Reduce operational costs by 30%",
      "Improve process efficiency",
      "Automated optimization",
      "Real-time insights",
      "Scalable automation"
    ],
    useCases: [
      "Manufacturing operations",
      "Customer service",
      "Human resources",
      "Finance and accounting",
      "Supply chain management"
    ],
    targetAudience: [
      "Operations managers",
      "Process improvement specialists",
      "Business analysts",
      "CIOs",
      "Business owners"
    ],
    tags: ["AI", "Process Optimization", "Automation", "Efficiency", "Analytics"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$1,200 - $3,600/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "cybersecurity-autonomous-response",
    title: "Cybersecurity Autonomous Response & Recovery System",
    description: "Self-healing cybersecurity platform that automatically detects, responds to, and recovers from security incidents without human intervention.",
    category: "Cybersecurity",
    subcategory: "Autonomous Security",
    price: 2200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Autonomous threat response",
      "Self-healing systems",
      "Zero-trust architecture",
      "Behavioral analysis",
      "Incident recovery",
      "Compliance automation",
      "24/7 monitoring",
      "Threat intelligence"
    ],
    benefits: [
      "Zero-downtime security",
      "Automatic incident response",
      "Reduced security team workload",
      "Enhanced compliance",
      "Proactive protection"
    ],
    useCases: [
      "Critical infrastructure",
      "Financial services",
      "Healthcare systems",
      "Government networks",
      "Enterprise networks"
    ],
    targetAudience: [
      "CISOs",
      "Security operations teams",
      "IT managers",
      "Risk managers",
      "Compliance officers"
    ],
    tags: ["Cybersecurity", "Autonomous", "Zero-Trust", "Compliance", "AI"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,200 - $7,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-powered-talent-acquisition",
    title: "AI-Powered Talent Acquisition & Management Platform",
    description: "Intelligent platform that automates the entire talent acquisition process, from sourcing to onboarding, using AI to find the best candidates.",
    category: "AI & Machine Learning",
    subcategory: "Human Resources",
    price: 699,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI candidate sourcing",
      "Automated screening",
      "Skill assessment",
      "Interview scheduling",
      "Onboarding automation",
      "Performance tracking",
      "Diversity analytics",
      "Integration with HR systems"
    ],
    benefits: [
      "Reduce hiring time by 60%",
      "Improve candidate quality",
      "Reduce hiring bias",
      "Automated processes",
      "Better candidate experience"
    ],
    useCases: [
      "HR departments",
      "Recruitment agencies",
      "Startups",
      "Enterprise companies",
      "Remote teams"
    ],
    targetAudience: [
      "HR managers",
      "Recruiters",
      "Talent acquisition specialists",
      "Hiring managers",
      "Business owners",
      "Talent acquisition teams"
    ],
    tags: ["AI", "Recruitment", "HR Technology", "Hiring", "Automation"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$699 - $2,499/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-powered-customer-lifetime-value-prediction",
    title: "AI-Powered Customer Lifetime Value Prediction",
    description: "Advanced analytics platform that predicts customer lifetime value and provides strategies to maximize long-term customer profitability.",
    category: "AI & Machine Learning",
    subcategory: "Customer Analytics",
    price: 799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "CLV prediction models",
      "Customer segmentation",
      "Behavioral analysis",
      "Retention strategies",
      "Upselling recommendations",
      "Integration with CRM",
      "Real-time dashboards",
      "Performance tracking"
    ],
    benefits: [
      "Increase customer value by 40%",
      "Improve retention rates",
      "Better marketing ROI",
      "Data-driven strategies",
      "Competitive advantage"
    ],
    useCases: [
      "E-commerce businesses",
      "Subscription services",
      "SaaS companies",
      "Retail chains",
      "Financial services"
    ],
    targetAudience: [
      "Marketing directors",
      "Customer success managers",
      "Business owners",
      "Analytics teams",
      "Product managers"
    ],
    tags: ["AI", "Customer Analytics", "CLV Prediction", "Retention", "Machine Learning"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$799 - $2,799/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-cryptography-key-management",
    title: "Quantum Cryptography Key Management",
    description: "Advanced key management system using quantum cryptography principles to ensure ultra-secure encryption key generation and distribution.",
    category: "Cybersecurity",
    subcategory: "Quantum Security",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum key generation",
      "Secure key distribution",
      "Key rotation automation",
      "Multi-party computation",
      "Compliance certifications",
      "Integration APIs",
      "Real-time monitoring",
      "Audit logging"
    ],
    benefits: [
      "Quantum-resistant security",
      "Enhanced encryption",
      "Automated key management",
      "Regulatory compliance",
      "API integrations",
      "Custom model development",
      "Expert consultation"
    ],
    benefits: [
      "Accurate risk assessment",
      "Optimal portfolio allocation",
      "Regulatory compliance",
      "Competitive advantage",
      "Future-proof technology"
    ],
    useCases: [
      "Investment banks",
      "Asset management firms",
      "Insurance companies",
      "Hedge funds",
      "Risk management teams"
    ],
    targetAudience: [
      "Quantitative analysts",
      "Risk managers",
      "Portfolio managers",
      "Financial advisors",
      "Compliance officers"
    ],
    tags: ["Quantum Computing", "Finance", "Risk Management", "Modeling", "Compliance"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,500 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "autonomous-data-governance",
    title: "Autonomous Data Governance & Compliance Platform",
    description: "Self-managing data governance platform that automatically ensures data quality, privacy compliance, and regulatory adherence across all data assets.",
    category: "Data Management",
    subcategory: "Governance & Compliance",
    price: 1500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated data quality checks",
      "Privacy compliance monitoring",
      "Regulatory reporting",
      "Data lineage tracking",
      "Access control automation",
      "Audit trail generation",
      "Real-time monitoring",
      "Integration capabilities"
    ],
    benefits: [
      "Ensure data compliance",
      "Reduce compliance costs",
      "Automated governance",
      "Enhanced data quality",
      "Risk mitigation"
    ],
    useCases: [
      "Financial services",
      "Healthcare organizations",
      "Government agencies",
      "Retail companies",
      "Technology companies"
    ],
    targetAudience: [
      "Data governance officers",
      "Compliance managers",
      "Data architects",
      "Privacy officers",
      "Risk managers"
    ],
    tags: ["Data Governance", "Compliance", "Privacy", "Automation", "Quality"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$1,500 - $4,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // TRADITIONAL IT SERVICES
  {
    id: "ai-powered-legal-research",
    title: "AI-Powered Legal Research & Document Analysis Platform",
    description: "Intelligent legal research platform that uses AI to analyze legal documents, predict case outcomes, and provide comprehensive legal insights.",
    category: "AI & Machine Learning",
    subcategory: "Legal Technology",
    price: 899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Document analysis",
      "Case outcome prediction",
      "Legal research automation",
      "Contract review",
      "Compliance checking",
      "Citation management",
      "Collaborative tools",
      "Mobile app support"
    ],
    benefits: [
      "Reduce research time by 70%",
      "Improve case outcomes",
      "Automated document review",
      "Enhanced accuracy",
      "Cost-effective legal services"
    ],
    useCases: [
      "Law firms",
      "Corporate legal departments",
      "Government agencies",
      "Legal researchers",
      "Compliance teams"
    ],
    targetAudience: [
      "Lawyers",
      "Legal researchers",
      "Paralegals",
      "Compliance officers",
      "Legal consultants"
    ],
    tags: ["AI", "Legal Technology", "Document Analysis", "Research", "Compliance"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$899 - $2,700/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-cybersecurity-testing",
    title: "Quantum Cybersecurity Testing & Validation Platform",
    description: "Advanced cybersecurity testing platform that simulates quantum attacks and validates security measures against future quantum computing threats.",
    category: "Cybersecurity",
    subcategory: "Quantum Security Testing",
    price: 3200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum attack simulation",
      "Security validation",
      "Vulnerability assessment",
      "Compliance testing",
      "Penetration testing",
      "Security certification",
      "Real-time monitoring",
      "Expert consultation"
    ],
    benefits: [
      "Future-proof security",
      "Quantum-resistant validation",
      "Enhanced security posture",
      "Regulatory compliance",
      "Competitive advantage"
    ],
    useCases: [
      "Financial institutions",
      "Defense contractors",
      "Government agencies",
      "Healthcare organizations",
      "Technology companies"
    ],
    targetAudience: [
      "Security architects",
      "Penetration testers",
      "CISOs",
      "Compliance officers",
      "Risk managers"
    ],
    tags: ["Quantum Security", "Cybersecurity", "Testing", "Validation", "Compliance"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,200 - $10,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "autonomous-it-infrastructure",
    title: "Autonomous IT Infrastructure Management Platform",
    description: "Self-managing IT infrastructure platform that automatically optimizes, scales, and maintains all aspects of your technology infrastructure.",
    category: "IT Infrastructure",
    subcategory: "Autonomous Management",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Self-healing infrastructure",
      "Automated scaling",
      "Performance optimization",
      "Security automation",
      "Cost management",
      "Real-time monitoring",
      "Predictive maintenance",
      "Integration capabilities"
    ],
    benefits: [
      "Reduce IT overhead by 60%",
      "Zero-downtime operations",
      "Automatic optimization",
      "Enhanced security",
      "Cost-effective infrastructure"
    ],
    useCases: [
      "Enterprise IT",
      "Cloud infrastructure",
      "Data centers",
      "Network management",
      "System administration"
    ],
    targetAudience: [
      "IT managers",
      "System administrators",
      "Network engineers",
      "DevOps teams",
      "CTOs"
    ],
    tags: ["IT Infrastructure", "Automation", "AI", "Management", "Optimization"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,800 - $5,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // ADDITIONAL INNOVATIVE SERVICES
  {
    id: "edge-computing-ai-platform",
    title: "Edge Computing AI Platform for IoT",
    description: "Distributed AI computing platform that brings machine learning capabilities to edge devices, enabling real-time processing and decision making.",
    category: "Emerging Technologies",
    subcategory: "Edge Computing",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Edge AI deployment",
      "Real-time processing",
      "Low-latency inference",
      "Device optimization",
      "Cloud synchronization",
      "Security protocols",
      "Scalable architecture",
      "Performance monitoring"
    ],
    benefits: [
      "Reduced latency",
      "Bandwidth optimization",
      "Real-time decisions",
      "Cost-effective computing",
      "Privacy preservation"
    ],
    useCases: [
      "Smart cities",
      "Industrial IoT",
      "Autonomous vehicles",
      "Healthcare monitoring",
      "Retail analytics"
    ],
    targetAudience: [
      "IoT developers",
      "System architects",
      "Operations managers",
      "Technology companies",
      "Infrastructure providers"
    ],
    tags: ["Edge Computing", "AI", "IoT", "Real-time", "Distributed Systems"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,800 - $6,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-networking-infrastructure",
    title: "Quantum Networking Infrastructure & Protocols",
    description: "Next-generation quantum networking infrastructure that enables quantum-secured communication and quantum internet protocols.",
    category: "Emerging Technologies",
    subcategory: "Quantum Networking",
    price: 8000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum key distribution",
      "Quantum repeaters",
      "Network protocols",
      "Security validation",
      "Performance metrics",
      "Scalable infrastructure",
      "Enterprise integration",
      "Monitoring tools"
    ],
    benefits: [
      "Unhackable communications",
      "Quantum security",
      "Future-proof networking",
      "Regulatory compliance",
      "Competitive advantage"
    ],
    useCases: [
      "Government agencies",
      "Financial institutions",
      "Defense contractors",
      "Research institutions",
      "Critical infrastructure"
    ],
    targetAudience: [
      "Network architects",
      "Security professionals",
      "Government agencies",
      "Financial institutions",
      "Research organizations"
    ],
    tags: ["Quantum Networking", "Infrastructure", "Quantum Security", "Protocols", "Advanced Technology"],
    estimatedDelivery: "16-20 weeks",
    supportLevel: "enterprise",
    marketPrice: "$8,000 - $25,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "autonomous-vehicle-ai-platform",
    title: "Autonomous Vehicle AI Development Platform",
    description: "Comprehensive AI platform for developing, testing, and deploying autonomous vehicle systems with advanced perception and decision-making capabilities.",
    category: "AI & Machine Learning",
    subcategory: "Autonomous Systems",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Computer vision algorithms",
      "Sensor fusion",
      "Path planning",
      "Behavior prediction",
      "Simulation environment",
      "Safety validation",
      "Performance analytics",
      "Integration APIs"
    ],
    benefits: [
      "Accelerate development",
      "Reduce testing costs",
      "Improve safety",
      "Regulatory compliance",
      "Competitive advantage"
    ],
    useCases: [
      "Automotive manufacturers",
      "Transportation companies",
      "Logistics providers",
      "Research institutions",
      "Government agencies"
    ],
    targetAudience: [
      "Automotive engineers",
      "AI researchers",
      "System developers",
      "Safety engineers",
      "Regulatory experts"
    ],
    tags: ["Autonomous Vehicles", "AI", "Computer Vision", "Safety", "Transportation"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,500 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-cryptography-suite",
    title: "Quantum Cryptography Suite & Key Management",
    description: "Advanced quantum cryptography platform that provides quantum-resistant encryption, key distribution, and secure communication protocols.",
    category: "Cybersecurity",
    subcategory: "Quantum Security",
    price: 4200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum key distribution",
      "Post-quantum algorithms",
      "Key management system",
      "Secure protocols",
      "Performance optimization",
      "Compliance frameworks",
      "Real-time monitoring",
      "Enterprise integration"
    ],
    benefits: [
      "Future-proof security",
      "Quantum resistance",
      "Regulatory compliance",
      "High performance",
      "Scalable architecture"
    ],
    useCases: [
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Defense contractors",
      "Critical infrastructure"
    ],
    targetAudience: [
      "Security architects",
      "Cryptography experts",
      "Compliance officers",
      "Government agencies",
      "Financial institutions"
    ],
    tags: ["Quantum Cryptography", "Security", "Key Management", "Compliance", "Future-Proof"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,200 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-powered-climate-modeling",
    title: "AI-Powered Climate Modeling & Prediction Platform",
    description: "Advanced climate modeling platform that uses AI and machine learning to predict climate patterns, extreme weather events, and environmental changes.",
    category: "AI & Machine Learning",
    subcategory: "Environmental Science",
    price: 2500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Climate pattern analysis",
      "Weather prediction",
      "Environmental monitoring",
      "Risk assessment",
      "Data visualization",
      "Real-time updates",
      "API integration",
      "Mobile applications"
    ],
    benefits: [
      "Accurate predictions",
      "Risk mitigation",
      "Resource optimization",
      "Policy support",
      "Environmental protection"
    ],
    useCases: [
      "Government agencies",
      "Environmental organizations",
      "Insurance companies",
      "Agriculture sector",
      "Urban planning"
    ],
    targetAudience: [
      "Climate scientists",
      "Environmental researchers",
      "Policy makers",
      "Risk managers",
      "Urban planners"
    ],
    tags: ["Climate Modeling", "AI", "Environmental Science", "Prediction", "Risk Assessment"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,500 - $8,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-optimization-engine",
    title: "Quantum Optimization Engine for Complex Problems",
    description: "High-performance quantum optimization engine that solves complex combinatorial problems in logistics, finance, and scientific research.",
    category: "Emerging Technologies",
    subcategory: "Quantum Computing",
    price: 5500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum algorithms",
      "Optimization solvers",
      "Performance benchmarking",
      "Problem modeling",
      "Result visualization",
      "API access",
      "Cloud deployment",
      "Enterprise integration"
    ],
    benefits: [
      "Exponential speedup",
      "Solve complex problems",
      "Future-proof technology",
      "Competitive advantage",
      "Research capabilities"
    ],
    useCases: [
      "Logistics optimization",
      "Financial modeling",
      "Drug discovery",
      "Supply chain optimization",
      "Research institutions"
    ],
    targetAudience: [
      "Operations researchers",
      "Data scientists",
      "Financial analysts",
      "Research institutions",
      "Technology companies"
    ],
    tags: ["Quantum Computing", "Optimization", "Complex Problems", "Research", "Advanced Computing"],
    estimatedDelivery: "10-14 weeks",
    supportLevel: "enterprise",
    marketPrice: "$5,500 - $18,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-powered-drug-discovery",
    title: "AI-Powered Drug Discovery & Molecular Design",
    description: "Advanced AI platform for drug discovery that accelerates the identification of potential drug candidates and optimizes molecular structures.",
    category: "AI & Machine Learning",
    subcategory: "Healthcare",
    price: 3800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Molecular modeling",
      "Drug candidate screening",
      "Structure optimization",
      "Toxicity prediction",
      "Clinical trial optimization",
      "Data integration",
      "Performance analytics",
      "Research collaboration"
    ],
    benefits: [
      "Accelerate drug development",
      "Reduce research costs",
      "Improve success rates",
      "Optimize molecules",
      "Faster time to market"
    ],
    useCases: [
      "Pharmaceutical companies",
      "Biotech firms",
      "Research institutions",
      "Academic labs",
      "Drug development"
    ],
    targetAudience: [
      "Drug researchers",
      "Molecular biologists",
      "Pharmaceutical companies",
      "Academic institutions",
      "Biotech startups"
    ],
    tags: ["Drug Discovery", "AI", "Molecular Design", "Healthcare", "Research"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,800 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "autonomous-energy-management",
    title: "Autonomous Energy Management & Grid Optimization",
    description: "Intelligent energy management platform that autonomously optimizes power grids, renewable energy integration, and energy consumption patterns.",
    category: "AI & Machine Learning",
    subcategory: "Energy Management",
    price: 2200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Grid optimization",
      "Renewable integration",
      "Demand forecasting",
      "Load balancing",
      "Energy storage optimization",
      "Real-time monitoring",
      "Predictive maintenance",
      "Integration APIs"
    ],
    benefits: [
      "Reduce energy costs",
      "Improve grid efficiency",
      "Optimize renewable usage",
      "Predictive maintenance",
      "Sustainable operations"
    ],
    useCases: [
      "Utility companies",
      "Energy providers",
      "Industrial facilities",
      "Smart cities",
      "Commercial buildings"
    ],
    targetAudience: [
      "Energy managers",
      "Utility operators",
      "Facility managers",
      "City planners",
      "Sustainability officers"
    ],
    tags: ["Energy Management", "AI", "Grid Optimization", "Renewable Energy", "Sustainability"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,200 - $7,500/month",
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
  "AI & Autonomous Systems"
];
  email: 'info@ziontechgroup.com',
  phone: '+1 (555) 123-4567',
  address: '123 Tech Street, Silicon Valley, CA 94000'
};
