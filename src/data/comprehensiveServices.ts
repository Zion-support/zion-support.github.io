export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'monthly' | 'hourly' | 'project-based';
  features: string[];
  useCases: string[];
  targetAudience?: string[];
  tags?: string[];
  benefits?: string[];
  marketPrice?: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const COMPREHENSIVE_SERVICES: Service[] = [
  {
    id: "ai-autonomous-business-manager",
    title: "AI Autonomous Business Manager",
    description: "Intelligent business management system that autonomously handles operations, decision-making, and optimization.",
    category: "AI & Business Management",
    subcategory: "Autonomous Operations",
    price: 3000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Autonomous decision making",
      "Business process automation",
      "Performance optimization",
      "Real-time monitoring",
      "Predictive analytics"
    ],
    benefits: [
      "24/7 business operations",
      "Reduce operational costs",
      "Improve efficiency",
      "Data-driven decisions"
    ],
    useCases: [
      "Small businesses",
      "Medium enterprises",
      "Startups",
      "Service companies"
    ],
    targetAudience: [
      "Business owners",
      "Entrepreneurs",
      "Operations managers",
      "Startup founders"
    ],
    tags: ["AI", "Business Automation", "Autonomous Operations", "Efficiency"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$3,000 - $8,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-autonomous-decision-engine",
    title: "AI Autonomous Decision Engine",
    description: "Advanced AI system that makes autonomous decisions based on data analysis and business rules.",
    category: "AI & Decision Making",
    subcategory: "Autonomous Intelligence",
    price: 2500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Intelligent decision making",
      "Data analysis",
      "Risk assessment",
      "Performance optimization",
      "Learning algorithms"
    ],
    benefits: [
      "Faster decision making",
      "Reduce human error",
      "Optimize outcomes",
      "Continuous learning"
    ],
    useCases: [
      "Financial services",
      "Healthcare",
      "Manufacturing",
      "Retail",
      "Logistics"
    ],
    targetAudience: [
      "Data scientists",
      "Business analysts",
      "Operations managers",
      "Technology officers"
    ],
    tags: ["AI", "Decision Making", "Machine Learning", "Automation"],
    estimatedDelivery: "4-5 weeks",
    supportLevel: "premium",
    marketPrice: "$2,500 - $7,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-autonomous-development",
    title: "AI Autonomous Development",
    description: "AI-powered software development platform that automates coding, testing, and deployment.",
    category: "AI & Development",
    subcategory: "Autonomous Coding",
    price: 2000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated code generation",
      "Intelligent testing",
      "Deployment automation",
      "Code review",
      "Performance optimization"
    ],
    benefits: [
      "Faster development",
      "Reduce bugs",
      "Improve quality",
      "Cost savings"
    ],
    useCases: [
      "Software companies",
      "IT departments",
      "Startups",
      "Digital agencies"
    ],
    targetAudience: [
      "Developers",
      "DevOps engineers",
      "Project managers",
      "Technology leaders"
    ],
    tags: ["AI", "Software Development", "Automation", "DevOps"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$2,000 - $6,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-autonomous-education",
    title: "AI Autonomous Education",
    description: "Intelligent education platform that provides personalized learning experiences and autonomous tutoring.",
    category: "AI & Education",
    subcategory: "Autonomous Learning",
    price: 1500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Personalized learning",
      "Adaptive curriculum",
      "Intelligent tutoring",
      "Progress tracking",
      "Performance analytics"
    ],
    benefits: [
      "Personalized education",
      "Improve learning outcomes",
      "Reduce costs",
      "Scalable learning"
    ],
    useCases: [
      "K-12 schools",
      "Universities",
      "Corporate training",
      "Online education"
    ],
    targetAudience: [
      "Educators",
      "Training managers",
      "Students",
      "Corporate leaders"
    ],
    tags: ["AI", "Education", "Personalized Learning", "Automation"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$1,500 - $4,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-autonomous-finance",
    title: "AI Autonomous Finance",
    description: "Intelligent financial management platform with automated trading, risk management, and portfolio optimization.",
    category: "AI & Finance",
    subcategory: "Autonomous Trading",
    price: 4000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated trading",
      "Risk management",
      "Portfolio optimization",
      "Market analysis",
      "Performance tracking"
    ],
    benefits: [
      "Automated trading",
      "Risk reduction",
      "Performance optimization",
      "24/7 monitoring"
    ],
    useCases: [
      "Investment firms",
      "Banks",
      "Hedge funds",
      "Individual investors"
    ],
    targetAudience: [
      "Financial advisors",
      "Portfolio managers",
      "Traders",
      "Investment professionals"
    ],
    tags: ["AI", "Finance", "Trading", "Risk Management"],
    estimatedDelivery: "4-5 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,000 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-autonomous-healthcare",
    title: "AI Autonomous Healthcare",
    description: "Intelligent healthcare platform with autonomous diagnosis, treatment planning, and patient monitoring.",
    category: "AI & Healthcare",
    subcategory: "Autonomous Medicine",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Autonomous diagnosis",
      "Treatment planning",
      "Patient monitoring",
      "Medical imaging",
      "Predictive analytics"
    ],
    benefits: [
      "Improve diagnosis accuracy",
      "Reduce medical errors",
      "Optimize treatment",
      "Better patient outcomes"
    ],
    useCases: [
      "Hospitals",
      "Clinics",
      "Research institutions",
      "Healthcare providers"
    ],
    targetAudience: [
      "Doctors",
      "Healthcare administrators",
      "Researchers",
      "Medical professionals"
    ],
    tags: ["AI", "Healthcare", "Medical AI", "Diagnosis"],
    estimatedDelivery: "5-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,500 - $10,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-autonomous-marketing",
    title: "AI Autonomous Marketing",
    description: "Intelligent marketing platform with automated campaigns, customer segmentation, and performance optimization.",
    category: "AI & Marketing",
    subcategory: "Autonomous Campaigns",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated campaigns",
      "Customer segmentation",
      "Content personalization",
      "Performance tracking",
      "A/B testing"
    ],
    benefits: [
      "Automated marketing",
      "Improve ROI",
      "Personalized content",
      "Better targeting"
    ],
    useCases: [
      "Marketing agencies",
      "E-commerce",
      "B2B companies",
      "Startups"
    ],
    targetAudience: [
      "Marketing managers",
      "Digital marketers",
      "Business owners",
      "Marketing professionals"
    ],
    tags: ["AI", "Marketing", "Automation", "Personalization"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$1,800 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

// Service categories for filtering
export const SERVICE_CATEGORIES = [
    images: ["https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-30T12:00:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 95
  }
];

// Service Categories for filtering
export const SERVICE_CATEGORIES = [
  { id: "ai-services", name: "AI Services", description: "Artificial Intelligence & Machine Learning Solutions" },
  { id: "it-services", name: "IT Services", description: "Infrastructure, Cloud & Cybersecurity" },
  { id: "business-solutions", name: "Business Solutions", description: "Process Automation & Optimization" },
  { id: "digital-solutions", name: "Digital Solutions", description: "E-commerce & Marketing" },
  { id: "specialized-solutions", name: "Specialized Solutions", description: "Healthcare, FinTech & Industry-Specific" },
  { id: "iot-solutions", name: "IoT Solutions", description: "Internet of Things & Smart Systems" },
  { id: "education-solutions", name: "Education Solutions", description: "Learning & Training Platforms" }
];

// Service Subcategories
export const SERVICE_SUBCATEGORIES = {
  "ai-services": ["Chatbots & Virtual Assistants", "Content Creation", "Data Analytics", "Computer Vision", "Natural Language Processing"],
  "it-services": ["Cloud Solutions", "Cybersecurity", "DevOps", "Infrastructure", "Network Management"],
  "business-solutions": ["Process Automation", "Customer Support", "Project Management", "HR Solutions", "Financial Management"],
  "digital-solutions": ["E-commerce", "Marketing Automation", "Web Development", "Mobile Apps", "Digital Transformation"],
  "specialized-solutions": ["Healthcare", "FinTech", "Manufacturing", "Retail", "Logistics"],
  "iot-solutions": ["Platform", "Smart Buildings", "Industrial IoT", "Connected Devices", "Data Analytics"],
  "education-solutions": ["Learning Management", "VR/AR Training", "Skill Assessment", "Content Creation", "Analytics"]
};

// Pricing Tiers
export const PRICING_TIERS = {
  "starter": { min: 500, max: 1999, label: "Starter Solutions" },
  "professional": { min: 2000, max: 4999, label: "Professional Solutions" },
  "enterprise": { min: 5000, max: 15000, label: "Enterprise Solutions" }
};
=======
    description: "Secure smart contract development for DeFi, NFTs, and blockchain applications with comprehensive security auditing.",
    category: "Blockchain & Web3",
    subcategory: "Smart Contracts",
    price: 7000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Smart contract development",
      "Security audit and testing",
      "Gas optimization",
      "Multi-chain deployment",
      "Documentation and testing",
      "Ongoing support"
    ],
    benefits: [
      "Secure and audited contracts",
      "Gas cost optimization",
      "Multi-chain compatibility",
      "Reduced security risks",
      "Professional development standards"
    ],
    useCases: [
      "DeFi applications",
      "NFT marketplaces",
      "DAO governance",
      "Supply chain tracking",
      "Gaming platforms"
    ],
    marketPrice: "$5,000 - $25,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Smart Contracts", "Blockchain", "DeFi", "NFTs", "Security Audit"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-18T16:15:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 78,
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium"
  },

  // IoT & Edge Computing
  {
    id: "iot-platform-development",
    title: "IoT Platform Development & Management",
    description: "End-to-end IoT solution development including device management, data collection, analytics, and remote monitoring.",
    category: "IoT & Edge Computing",
    subcategory: "Platform Development",
    price: 10000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "IoT device management",
      "Real-time data collection",
      "Edge computing implementation",
      "Dashboard and analytics",
      "Alert and notification system",
      "Scalable architecture"
    ],
    benefits: [
      "Real-time monitoring and control",
      "Predictive maintenance",
      "Operational efficiency",
      "Data-driven insights",
      "Cost reduction"
    ],
    useCases: [
      "Industrial monitoring",
      "Smart buildings",
      "Agriculture automation",
      "Healthcare monitoring",
      "Logistics tracking"
    ],
    marketPrice: "$8,000 - $35,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["IoT", "Edge Computing", "Device Management", "Real-time", "Monitoring"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T10:45:00.000Z",
    aiScore: 91,
    rating: 4.7,
    reviewCount: 134,
    estimatedDelivery: "10-14 weeks",
    supportLevel: "enterprise"
  },

  // Emerging Technologies
  {
    id: "quantum-computing-consulting",
    title: "Quantum Computing Strategy & Consulting",
    description: "Strategic consulting for quantum computing adoption, algorithm development, and quantum-ready application design.",
    category: "Emerging Technologies",
    subcategory: "Quantum Computing",
    price: 25000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Quantum readiness assessment",
      "Algorithm optimization strategies",
      "Hybrid classical-quantum solutions",
      "Quantum software development",
      "Partnership recommendations",
      "ROI analysis and planning"
    ],
    benefits: [
      "Future-proof technology strategy",
      "Competitive advantage in research",
      "Optimization of complex problems",
      "Access to cutting-edge technology",
      "Strategic technology positioning"
    ],
    useCases: [
      "Pharmaceutical research",
      "Financial modeling",
      "Logistics optimization",
      "Cryptography and security",
      "Machine learning acceleration"
    ],
    marketPrice: "$20,000 - $100,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Quantum Computing", "Emerging Tech", "Strategy", "Algorithm Development", "Future Tech"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-25T14:20:00.000Z",
    aiScore: 98,
    rating: 4.9,
    reviewCount: 45,
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise"
  },
  {
    id: "metaverse-development",
    title: "Metaverse Platform Development",
    description: "Complete metaverse platform development including 3D environments, avatar systems, social interactions, and virtual commerce.",
    category: "Emerging Technologies",
    subcategory: "Metaverse & VR",
    price: 35000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "3D virtual world creation",
      "Avatar customization system",
      "Social interaction features",
      "Virtual commerce integration",
      "Cross-platform compatibility",
      "Analytics and user tracking"
    ],
    benefits: [
      "Immersive brand experiences",
      "New revenue streams",
      "Enhanced customer engagement",
      "Virtual event hosting",
      "Innovative marketing platform"
    ],
    useCases: [
      "Virtual events and conferences",
      "Brand experiences",
      "Educational platforms",
      "Gaming and entertainment",
      "Virtual real estate"
    ],
    marketPrice: "$30,000 - $150,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Metaverse", "VR/AR", "3D Development", "Virtual Worlds", "Social VR"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-28T11:30:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 67,
    estimatedDelivery: "16-24 weeks",
    supportLevel: "enterprise"
  },
  {
    id: "ai-ethics-compliance",
    title: "AI Ethics & Compliance Framework",
    description: "Comprehensive AI ethics and compliance framework development to ensure responsible AI deployment and regulatory adherence.",
    category: "AI & Machine Learning",
    subcategory: "AI Ethics & Governance",
    price: 8000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "AI ethics framework development",
      "Bias detection and mitigation",
      "Transparency and explainability",
      "Regulatory compliance assessment",
      "Ethics training and guidelines",
      "Ongoing monitoring and auditing"
    ],
    benefits: [
      "Regulatory compliance",
      "Reduced legal risks",
      "Enhanced brand reputation",
      "Ethical AI deployment",
      "Stakeholder trust"
    ],
    useCases: [
      "Financial services AI",
      "Healthcare AI systems",
      "HR and recruitment AI",
      "Autonomous vehicles",
      "Facial recognition systems"
    ],
    marketPrice: "$6,000 - $25,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["AI Ethics", "Compliance", "Responsible AI", "Governance", "Regulatory"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T16:45:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 89,
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium"
  }
];

export const SERVICE_CATEGORIES = [
  "AI & Machine Learning",
  "Cloud & DevOps",
  "Cybersecurity",
  "Data & Analytics",
  "Web & Mobile Development",
  "Digital Transformation",
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