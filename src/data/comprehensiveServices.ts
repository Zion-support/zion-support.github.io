export interface Service {
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