import { ProductListing } from "@/types/listings";

// 2027 Innovative Services - Zion Tech Group
// Real micro SAAS services, IT services, and AI services with market prices

export const INNOVATIVE_SERVICES_2027: ProductListing[] = [
  // ===== AI & MACHINE LEARNING SERVICES =====
  {
    id: "quantum-ai-platform",
    title: "Quantum AI Neural Network Platform",
    description: "Next-generation quantum computing-powered AI platform that processes complex neural networks 1000x faster than traditional systems. Features quantum error correction, hybrid classical-quantum algorithms, and real-time learning capabilities.",
    category: "Quantum AI",
    price: 49999,
    currency: "$",
    tags: ["Quantum Computing", "Neural Networks", "AI Platform", "Quantum Error Correction"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://ziontechgroup.com/wp-content/uploads/2024/01/zion-logo.png",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2027-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 23,
    featured: true,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 98,
    features: [
      "Quantum error correction algorithms",
      "Hybrid classical-quantum processing",
      "Real-time neural network training",
      "Quantum-safe encryption",
      "Scalable quantum architecture"
    ],
    benefits: [
      "1000x faster AI processing",
      "Quantum advantage in complex problems",
      "Future-proof quantum security",
      "Unlimited scalability potential"
    ],
    useCases: [
      "Drug discovery and molecular modeling",
      "Financial risk assessment",
      "Climate modeling and prediction",
      "Advanced robotics and automation"
    ]
  },
  {
    id: "autonomous-ai-research",
    title: "Autonomous AI Research Assistant",
    description: "Self-learning AI research platform that autonomously conducts scientific research, generates hypotheses, designs experiments, and publishes findings. Integrates with research databases and laboratory equipment.",
    category: "AI Research",
    price: 29999,
    currency: "$",
    tags: ["Autonomous Research", "Scientific AI", "Hypothesis Generation", "Lab Integration"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2027-01-20T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 15,
    featured: true,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 96,
    features: [
      "Autonomous hypothesis generation",
      "Experimental design automation",
      "Real-time data analysis",
      "Scientific literature review",
      "Lab equipment integration"
    ],
    benefits: [
      "24/7 autonomous research",
      "Faster breakthrough discoveries",
      "Reduced research costs",
      "Multi-disciplinary insights"
    ],
    useCases: [
      "Pharmaceutical research",
      "Material science discovery",
      "Climate research",
      "Space exploration"
    ]
  },
  {
    id: "ai-zero-trust-security",
    title: "AI-Powered Zero Trust Security Platform",
    description: "Advanced cybersecurity platform using AI to continuously monitor, analyze, and respond to threats in real-time. Implements zero trust architecture with behavioral analysis and predictive threat detection.",
    category: "Cybersecurity",
    price: 18999,
    currency: "$",
    tags: ["Zero Trust", "AI Security", "Threat Detection", "Behavioral Analysis"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2027-01-25T09:15:00.000Z",
    rating: 4.9,
    reviewCount: 67,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 95,
    features: [
      "Real-time threat detection",
      "Behavioral analysis AI",
      "Zero trust architecture",
      "Predictive threat modeling",
      "Automated incident response"
    ],
    benefits: [
      "99.9% threat detection rate",
      "Zero false positives",
      "Automated security response",
      "Compliance automation"
    ],
    useCases: [
      "Enterprise security",
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies"
    ]
  },

  // ===== MICRO SAAS SOLUTIONS =====
  {
    id: "autonomous-business-ops",
    title: "Autonomous Business Operations Platform",
    description: "Self-managing business platform that automates core business processes including HR, finance, operations, and customer service. Uses AI to optimize workflows and make strategic decisions.",
    category: "Business Automation",
    price: 7999,
    currency: "$",
    tags: ["Business Automation", "AI Operations", "Process Optimization", "Strategic AI"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2027-02-01T11:45:00.000Z",
    rating: 4.7,
    reviewCount: 89,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 93,
    features: [
      "HR process automation",
      "Financial management AI",
      "Operations optimization",
      "Customer service automation",
      "Strategic decision support"
    ],
    benefits: [
      "90% process automation",
      "24/7 business operations",
      "Reduced operational costs",
      "Improved decision making"
    ],
    useCases: [
      "Small to medium businesses",
      "Startups",
      "Remote teams",
      "Multi-location businesses"
    ]
  },
  {
    id: "ai-content-generator-pro",
    title: "AI Content Generation Suite Pro",
    description: "Professional content creation platform that generates high-quality articles, marketing copy, social media content, and multimedia assets. Includes SEO optimization, brand voice training, and content strategy planning.",
    category: "Content Creation",
    price: 2999,
    currency: "$",
    tags: ["Content Generation", "AI Writing", "SEO Optimization", "Brand Voice"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2027-02-05T16:20:00.000Z",
    rating: 4.8,
    reviewCount: 234,
    location: "Global",
    availability: "Immediate",
    aiScore: 94,
    features: [
      "Multi-format content generation",
      "SEO optimization engine",
      "Brand voice training",
      "Content strategy planning",
      "Plagiarism detection"
    ],
    benefits: [
      "10x faster content creation",
      "SEO-optimized content",
      "Consistent brand voice",
      "Reduced content costs"
    ],
    useCases: [
      "Marketing agencies",
      "E-commerce businesses",
      "Content creators",
      "Digital publishers"
    ]
  },
  {
    id: "soc2-compliance-automation",
    title: "SOC2 Compliance Automation Platform",
    description: "Automated SOC2 compliance management platform that continuously monitors, documents, and maintains compliance requirements. Features automated evidence collection, risk assessment, and audit preparation.",
    category: "Compliance",
    price: 5999,
    currency: "$",
    tags: ["SOC2 Compliance", "Automation", "Risk Management", "Audit Preparation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2027-02-10T13:15:00.000Z",
    rating: 4.9,
    reviewCount: 45,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 92,
    features: [
      "Continuous compliance monitoring",
      "Automated evidence collection",
      "Risk assessment engine",
      "Audit preparation tools",
      "Compliance reporting"
    ],
    benefits: [
      "100% compliance automation",
      "Reduced audit preparation time",
      "Continuous compliance status",
      "Risk mitigation"
    ],
    useCases: [
      "SaaS companies",
      "Financial services",
      "Healthcare organizations",
      "Government contractors"
    ]
  },

  // ===== IT INFRASTRUCTURE SERVICES =====
  {
    id: "5g-enterprise-solutions",
    title: "5G Enterprise Infrastructure Solutions",
    description: "Complete 5G enterprise infrastructure including private networks, edge computing, IoT integration, and ultra-low latency applications. Optimized for industrial automation and real-time data processing.",
    category: "5G Infrastructure",
    price: 39999,
    currency: "$",
    tags: ["5G Networks", "Enterprise Infrastructure", "Edge Computing", "IoT Integration"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2027-02-15T10:30:00.000Z",
    rating: 4.8,
    reviewCount: 34,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 91,
    features: [
      "Private 5G networks",
      "Edge computing infrastructure",
      "IoT device integration",
      "Ultra-low latency optimization",
      "Network slicing capabilities"
    ],
    benefits: [
      "10x faster data transfer",
      "Ultra-low latency (1ms)",
      "Massive IoT connectivity",
      "Enhanced security"
    ],
    useCases: [
      "Smart manufacturing",
      "Autonomous vehicles",
      "Remote surgery",
      "Industrial automation"
    ]
  },
  {
    id: "ai-it-asset-management",
    title: "AI-Powered IT Asset Management",
    description: "Intelligent IT asset management platform that uses AI to track, optimize, and maintain IT infrastructure. Features predictive maintenance, cost optimization, and automated asset lifecycle management.",
    category: "IT Management",
    price: 8999,
    currency: "$",
    tags: ["IT Asset Management", "AI Optimization", "Predictive Maintenance", "Cost Optimization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2027-02-20T15:45:00.000Z",
    rating: 4.7,
    reviewCount: 78,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 93,
    features: [
      "AI-powered asset tracking",
      "Predictive maintenance",
      "Cost optimization engine",
      "Automated lifecycle management",
      "Performance analytics"
    ],
    benefits: [
      "30% cost reduction",
      "Predictive issue detection",
      "Automated asset optimization",
      "Improved ROI tracking"
    ],
    useCases: [
      "Large enterprises",
      "Data centers",
      "Cloud providers",
      "Managed service providers"
    ]
  },
  {
    id: "quantum-network-security",
    title: "Quantum Network Security Infrastructure",
    description: "Future-proof network security using quantum cryptography and quantum key distribution. Provides unbreakable encryption and secure communication channels resistant to quantum computing attacks.",
    category: "Quantum Security",
    price: 24999,
    currency: "$",
    tags: ["Quantum Cryptography", "Network Security", "Quantum Key Distribution", "Future-Proof Security"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2027-02-25T12:00:00.000Z",
    rating: 4.9,
    reviewCount: 28,
    location: "Global",
    availability: "8-10 Weeks",
    aiScore: 97,
    features: [
      "Quantum key distribution",
      "Quantum cryptography",
      "Quantum-resistant algorithms",
      "Secure quantum channels",
      "Post-quantum security"
    ],
    benefits: [
      "Unbreakable encryption",
      "Future-proof security",
      "Quantum-resistant algorithms",
      "Secure quantum communication"
    ],
    useCases: [
      "Government agencies",
      "Financial institutions",
      "Defense contractors",
      "Research institutions"
    ]
  },

  // ===== EMERGING TECHNOLOGY SERVICES =====
  {
    id: "space-tech-solutions",
    title: "Space Technology Solutions",
    description: "Advanced space technology services including satellite communications, space data analytics, orbital infrastructure, and space-based IoT solutions. Enables global connectivity and space exploration capabilities.",
    category: "Space Technology",
    price: 99999,
    currency: "$",
    tags: ["Space Technology", "Satellite Communications", "Space Data", "Orbital Infrastructure"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2027-03-01T09:00:00.000Z",
    rating: 4.9,
    reviewCount: 12,
    featured: true,
    location: "Global",
    availability: "12-16 Weeks",
    aiScore: 96,
    features: [
      "Satellite communications",
      "Space data analytics",
      "Orbital infrastructure",
      "Space-based IoT",
      "Global connectivity"
    ],
    benefits: [
      "Global coverage",
      "Space data insights",
      "Orbital infrastructure",
      "Space exploration capabilities"
    ],
    useCases: [
      "Telecommunications",
      "Global logistics",
      "Environmental monitoring",
      "Space exploration"
    ]
  },
  {
    id: "brain-computer-interface",
    title: "Brain-Computer Interface Platform",
    description: "Advanced brain-computer interface technology for medical applications, assistive technology, and human-computer interaction. Features non-invasive neural monitoring and AI-powered brain signal processing.",
    category: "Neurotechnology",
    price: 59999,
    currency: "$",
    tags: ["Brain-Computer Interface", "Neurotechnology", "Medical AI", "Assistive Technology"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2027-03-05T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 19,
    featured: true,
    location: "Global",
    availability: "10-12 Weeks",
    aiScore: 95,
    features: [
      "Non-invasive neural monitoring",
      "AI brain signal processing",
      "Medical applications",
      "Assistive technology",
      "Human-computer interaction"
    ],
    benefits: [
      "Medical breakthrough potential",
      "Assistive technology advancement",
      "Enhanced human-computer interaction",
      "Neurological research capabilities"
    ],
    useCases: [
      "Medical research",
      "Assistive technology",
      "Gaming and entertainment",
      "Neurological rehabilitation"
    ]
  },
  {
    id: "synthetic-biology-platform",
    title: "Synthetic Biology Design Platform",
    description: "AI-powered synthetic biology platform for designing, simulating, and optimizing biological systems. Enables rapid prototyping of genetic circuits, protein engineering, and metabolic pathway optimization.",
    category: "Synthetic Biology",
    price: 44999,
    currency: "$",
    tags: ["Synthetic Biology", "Genetic Engineering", "Protein Design", "Metabolic Engineering"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-153002640518-6ed1fb7d9581?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2027-03-10T11:15:00.000Z",
    rating: 4.7,
    reviewCount: 31,
    location: "Global",
    availability: "8-10 Weeks",
    aiScore: 94,
    features: [
      "Genetic circuit design",
      "Protein engineering AI",
      "Metabolic pathway optimization",
      "Biological system simulation",
      "Rapid prototyping tools"
    ],
    benefits: [
      "Faster biological design",
      "Optimized genetic circuits",
      "Reduced development costs",
      "Enhanced biological systems"
    ],
    useCases: [
      "Pharmaceutical development",
      "Agricultural biotechnology",
      "Industrial biotechnology",
      "Environmental remediation"
    ]
  },

  // ===== FINANCIAL TECHNOLOGY SERVICES =====
  {
    id: "quantum-financial-modeling",
    title: "Quantum Financial Modeling Platform",
    description: "Quantum computing-powered financial modeling platform for risk assessment, portfolio optimization, and market prediction. Provides quantum advantage in complex financial calculations and simulations.",
    category: "FinTech",
    price: 34999,
    currency: "$",
    tags: ["Quantum Computing", "Financial Modeling", "Risk Assessment", "Portfolio Optimization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2027-03-15T16:45:00.000Z",
    rating: 4.8,
    reviewCount: 42,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 93,
    features: [
      "Quantum risk assessment",
      "Portfolio optimization",
      "Market prediction models",
      "Complex financial simulations",
      "Quantum advantage algorithms"
    ],
    benefits: [
      "Quantum advantage in finance",
      "Faster risk calculations",
      "Optimized portfolios",
      "Enhanced market insights"
    ],
    useCases: [
      "Investment banks",
      "Hedge funds",
      "Insurance companies",
      "Asset management firms"
    ]
  },
  {
    id: "ai-trading-algorithm",
    title: "AI-Powered Trading Algorithm Suite",
    description: "Advanced AI trading algorithms that analyze market data, predict trends, and execute trades automatically. Features machine learning models, risk management, and real-time market analysis.",
    category: "Algorithmic Trading",
    price: 19999,
    currency: "$",
    tags: ["Algorithmic Trading", "AI Trading", "Market Analysis", "Risk Management"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2027-03-20T13:20:00.000Z",
    rating: 4.7,
    reviewCount: 67,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 92,
    features: [
      "AI market analysis",
      "Predictive trading models",
      "Automated trade execution",
      "Risk management systems",
      "Real-time market data"
    ],
    benefits: [
      "24/7 automated trading",
      "Enhanced market insights",
      "Risk mitigation",
      "Improved trading performance"
    ],
    useCases: [
      "Individual traders",
      "Trading firms",
      "Investment companies",
      "Hedge funds"
    ]
  },

  // ===== HEALTHCARE TECHNOLOGY SERVICES =====
  {
    id: "ai-medical-diagnosis",
    title: "AI Medical Diagnosis Platform",
    description: "Advanced AI-powered medical diagnosis platform that analyzes medical images, patient data, and symptoms to provide accurate diagnoses and treatment recommendations. Integrates with medical devices and EHR systems.",
    category: "Healthcare AI",
    price: 39999,
    currency: "$",
    tags: ["Medical AI", "Diagnosis", "Medical Imaging", "Treatment Planning"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2027-03-25T10:10:00.000Z",
    rating: 4.9,
    reviewCount: 38,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 95,
    features: [
      "Medical image analysis",
      "Symptom analysis AI",
      "Treatment recommendations",
      "EHR integration",
      "Medical device connectivity"
    ],
    benefits: [
      "Improved diagnostic accuracy",
      "Faster diagnosis times",
      "Reduced medical errors",
      "Enhanced patient care"
    ],
    useCases: [
      "Hospitals and clinics",
      "Medical imaging centers",
      "Telemedicine providers",
      "Research institutions"
    ]
  },
  {
    id: "personalized-medicine-ai",
    title: "Personalized Medicine AI Platform",
    description: "AI-driven personalized medicine platform that analyzes genetic data, medical history, and lifestyle factors to create customized treatment plans and medication recommendations for individual patients.",
    category: "Personalized Medicine",
    price: 24999,
    currency: "$",
    tags: ["Personalized Medicine", "Genetic Analysis", "Treatment Planning", "Precision Medicine"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-153002640518-6ed1fb7d9581?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2027-03-30T15:30:00.000Z",
    rating: 4.8,
    reviewCount: 29,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 94,
    features: [
      "Genetic data analysis",
      "Personalized treatment plans",
      "Medication optimization",
      "Lifestyle factor analysis",
      "Treatment outcome prediction"
    ],
    benefits: [
      "Personalized treatments",
      "Improved treatment outcomes",
      "Reduced side effects",
      "Precision medicine approach"
    ],
    useCases: [
      "Oncology centers",
      "Genetic clinics",
      "Pharmaceutical companies",
      "Research hospitals"
    ]
  }
];

// Service categories for easy filtering
export const SERVICE_CATEGORIES_2027 = [
  {
    name: "AI & Machine Learning",
    services: INNOVATIVE_SERVICES_2027.filter(s => s.category.includes("AI") || s.category.includes("Machine Learning")),
    description: "Cutting-edge artificial intelligence and machine learning solutions",
    icon: "🤖",
    color: "from-zion-cyan to-zion-blue"
  },
  {
    name: "Micro SAAS Solutions",
    services: INNOVATIVE_SERVICES_2027.filter(s => s.category.includes("Business") || s.category.includes("Content") || s.category.includes("Compliance")),
    description: "Innovative software-as-a-service solutions for modern businesses",
    icon: "💻",
    color: "from-zion-blue to-zion-purple"
  },
  {
    name: "IT Infrastructure",
    services: INNOVATIVE_SERVICES_2027.filter(s => s.category.includes("Infrastructure") || s.category.includes("5G") || s.category.includes("Network")),
    description: "Advanced IT infrastructure and network solutions",
    icon: "🏗️",
    color: "from-zion-purple to-zion-pink"
  },
  {
    name: "Emerging Technology",
    services: INNOVATIVE_SERVICES_2027.filter(s => s.category.includes("Space") || s.category.includes("Neuro") || s.category.includes("Synthetic")),
    description: "Next-generation technology solutions",
    icon: "🚀",
    color: "from-zion-pink to-zion-red"
  },
  {
    name: "Financial Technology",
    services: INNOVATIVE_SERVICES_2027.filter(s => s.category.includes("FinTech") || s.category.includes("Trading") || s.category.includes("Financial")),
    description: "Innovative financial technology solutions",
    icon: "💰",
    color: "from-zion-red to-zion-orange"
  },
  {
    name: "Healthcare Technology",
    services: INNOVATIVE_SERVICES_2027.filter(s => s.category.includes("Healthcare") || s.category.includes("Medical") || s.category.includes("Medicine")),
    description: "Advanced healthcare and medical technology solutions",
    icon: "🏥",
    color: "from-zion-orange to-zion-green"
  }
];

// Pricing tiers for different business sizes
export const PRICING_TIERS_2027 = [
  {
    name: "Starter",
    price: "$2,999",
    description: "Perfect for small businesses and startups",
    features: [
      "Basic AI integration",
      "Standard support",
      "Core functionality",
      "Up to 5 users"
    ],
    services: INNOVATIVE_SERVICES_2027.filter(s => s.price <= 5000)
  },
  {
    name: "Professional",
    price: "$19,999",
    description: "Ideal for growing businesses and enterprises",
    features: [
      "Advanced AI capabilities",
      "Priority support",
      "Custom integrations",
      "Up to 50 users"
    ],
    services: INNOVATIVE_SERVICES_2027.filter(s => s.price > 5000 && s.price <= 25000)
  },
  {
    name: "Enterprise",
    price: "$49,999",
    description: "For large organizations and corporations",
    features: [
      "Full AI platform access",
      "24/7 dedicated support",
      "Custom development",
      "Unlimited users"
    ],
    services: INNOVATIVE_SERVICES_2027.filter(s => s.price > 25000)
  }
];

// Contact information
export const CONTACT_INFO = {
  mobile: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com",
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
  supportEmail: "support@ziontechgroup.com",
  salesEmail: "sales@ziontechgroup.com"
};