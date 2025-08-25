export interface EmergingTechnologyService {
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
  websiteUrl: string;
  demoUrl?: string;
  documentationUrl?: string;
}

export const EMERGING_TECHNOLOGY_SERVICES: EmergingTechnologyService[] = [
  // Quantum Computing Applications
  {
    id: "quantum-computing-applications",
    title: "Quantum Computing Applications Platform",
    description: "Advanced quantum computing platform for solving complex optimization problems, cryptography, and scientific simulations with quantum advantage.",
    category: "Emerging Technology",
    subcategory: "Quantum Computing",
    price: 3999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum algorithm library",
      "Optimization solvers",
      "Cryptography tools",
      "Scientific simulation",
      "Quantum machine learning",
      "Hybrid classical-quantum computing",
      "Cloud-based access",
      "Expert consultation"
    ],
    benefits: [
      "Solve previously intractable problems",
      "Exponential speedup for specific tasks",
      "Future-proof technology investment",
      "Competitive advantage",
      "Research and development acceleration"
    ],
    useCases: [
      "Financial modeling",
      "Drug discovery",
      "Logistics optimization",
      "Cryptography",
      "Climate modeling"
    ],
    targetAudience: [
      "Research institutions",
      "Financial services",
      "Pharmaceutical companies",
      "Government agencies",
      "Technology companies"
    ],
    tags: ["Quantum Computing", "Optimization", "Cryptography", "Scientific Computing", "Research"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,999 - $12,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/quantum-computing"
  },

  // Extended Reality (XR) Solutions
  {
    id: "extended-reality-xr-solutions",
    title: "Extended Reality (XR) Solutions Platform",
    description: "Comprehensive XR platform for virtual reality (VR), augmented reality (AR), and mixed reality (MR) applications in enterprise, education, and entertainment.",
    category: "Emerging Technology",
    subcategory: "Extended Reality",
    price: 899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "VR/AR content creation tools",
      "3D modeling and animation",
      "Interactive experiences",
      "Multi-platform deployment",
      "Analytics and tracking",
      "Content management system",
      "API integration",
      "Custom development services"
    ],
    benefits: [
      "Immersive user experiences",
      "Enhanced training and education",
      "Remote collaboration",
      "Innovative marketing solutions",
      "Competitive differentiation"
    ],
    useCases: [
      "Employee training",
      "Virtual meetings",
      "Product visualization",
      "Educational content",
      "Marketing campaigns"
    ],
    targetAudience: [
      "Training managers",
      "Marketing directors",
      "Educational institutions",
      "Product managers",
      "HR professionals"
    ],
    tags: ["XR", "VR", "AR", "3D Modeling", "Immersive Technology"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$899 - $2,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/extended-reality"
  },

  // Blockchain & Web3 Infrastructure
  {
    id: "blockchain-web3-infrastructure",
    title: "Blockchain & Web3 Infrastructure Platform",
    description: "Enterprise-grade blockchain infrastructure for building decentralized applications, smart contracts, and Web3 solutions with scalability and security.",
    category: "Emerging Technology",
    subcategory: "Blockchain",
    price: 1499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-chain support",
      "Smart contract development",
      "DeFi protocol integration",
      "NFT marketplace tools",
      "Blockchain analytics",
      "Security auditing",
      "Compliance tools",
      "Developer APIs"
    ],
    benefits: [
      "Decentralized applications",
      "Enhanced security and transparency",
      "Reduced intermediaries",
      "Innovative business models",
      "Future-proof technology"
    ],
    useCases: [
      "Supply chain tracking",
      "Digital identity",
      "Financial services",
      "Gaming and entertainment",
      "Voting systems"
    ],
    targetAudience: [
      "Blockchain developers",
      "Financial institutions",
      "Startups",
      "Enterprises",
      "Government agencies"
    ],
    tags: ["Blockchain", "Web3", "DeFi", "Smart Contracts", "Decentralized Apps"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,499 - $4,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/blockchain-web3"
  },

  // 5G & Next-Gen Networks
  {
    id: "5g-next-gen-networks",
    title: "5G & Next-Generation Networks Platform",
    description: "Advanced 5G network infrastructure and applications for ultra-fast connectivity, IoT enablement, and next-generation digital services.",
    category: "Emerging Technology",
    subcategory: "5G Networks",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "5G network planning",
      "IoT connectivity solutions",
      "Edge computing integration",
      "Network slicing",
      "Low-latency applications",
      "Massive IoT support",
      "Network optimization",
      "Custom 5G applications"
    ],
    benefits: [
      "Ultra-fast connectivity",
      "Massive IoT deployment",
      "Low-latency applications",
      "Enhanced mobile broadband",
      "Future-ready infrastructure"
    ],
    useCases: [
      "Smart cities",
      "Autonomous vehicles",
      "Industrial IoT",
      "Telemedicine",
      "Augmented reality"
    ],
    targetAudience: [
      "Telecommunications companies",
      "Smart city planners",
      "Industrial companies",
      "Healthcare providers",
      "Technology consultants"
    ],
    tags: ["5G", "IoT", "Edge Computing", "Network Infrastructure", "Smart Cities"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,999 - $6,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/5g-networks"
  },

  // Autonomous Systems & Robotics
  {
    id: "autonomous-systems-robotics",
    title: "Autonomous Systems & Robotics Platform",
    description: "Advanced platform for developing and deploying autonomous systems, robotics solutions, and intelligent automation for industrial and commercial applications.",
    category: "Emerging Technology",
    subcategory: "Autonomous Systems",
    price: 2499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Autonomous navigation",
      "Computer vision systems",
      "Machine learning integration",
      "Safety protocols",
      "Remote monitoring",
      "Performance analytics",
      "Custom robotics development",
      "Integration services"
    ],
    benefits: [
      "24/7 autonomous operation",
      "Improved safety and efficiency",
      "Reduced operational costs",
      "Enhanced productivity",
      "Competitive advantage"
    ],
    useCases: [
      "Manufacturing automation",
      "Warehouse logistics",
      "Agricultural automation",
      "Healthcare robotics",
      "Service robots"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Logistics providers",
      "Agricultural businesses",
      "Healthcare institutions",
      "Technology companies"
    ],
    tags: ["Autonomous Systems", "Robotics", "Computer Vision", "Automation", "AI"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,499 - $8,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/autonomous-systems"
  }
];