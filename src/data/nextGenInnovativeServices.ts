export interface NextGenInnovativeService {
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

export const NEXT_GEN_INNOVATIVE_SERVICES: NextGenInnovativeService[] = [
  // Space Technology Integration Platform
  {
    id: "space-technology-integration-platform",
    title: "Space Technology Integration Platform",
    description: "Revolutionary platform that integrates space technologies including satellite communications, Earth observation data, and space-based IoT solutions for terrestrial applications.",
    category: "Space Technology",
    subcategory: "Integration Platform",
    price: 5500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Satellite communication integration",
      "Earth observation data access",
      "Space-based IoT connectivity",
      "Global positioning services",
      "Weather and climate data",
      "Satellite imagery analysis",
      "Space debris monitoring",
      "Regulatory compliance tools"
    ],
    benefits: [
      "Global connectivity without infrastructure",
      "Real-time Earth observation data",
      "Redundant communication networks",
      "Access to space-based resources",
      "Competitive advantage in remote operations"
    ],
    useCases: [
      "Maritime operations",
      "Agriculture monitoring",
      "Mining operations",
      "Logistics tracking",
      "Environmental monitoring"
    ],
    targetAudience: [
      "Maritime companies",
      "Agriculture businesses",
      "Mining operations",
      "Logistics providers",
      "Environmental agencies"
    ],
    tags: ["Space Technology", "Satellite Services", "IoT", "Global Connectivity", "Earth Observation"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$5,500 - $25,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/space-technology-integration"
  },

  // Biotechnology AI Platform
  {
    id: "biotechnology-ai-platform",
    title: "Biotechnology AI Platform",
    description: "Advanced AI platform that accelerates biotechnology research, drug discovery, and genetic engineering through machine learning and computational biology.",
    category: "Biotechnology",
    subcategory: "AI Research Platform",
    price: 4200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered drug discovery",
      "Genetic sequence analysis",
      "Protein structure prediction",
      "Biomarker identification",
      "Clinical trial optimization",
      "Drug repurposing",
      "Toxicity prediction",
      "Research collaboration tools"
    ],
    benefits: [
      "Accelerate drug discovery by 10x",
      "Reduce research costs",
      "Improve success rates",
      "Faster time to market",
      "Data-driven insights"
    ],
    useCases: [
      "Pharmaceutical research",
      "Genetic research",
      "Clinical trials",
      "Drug development",
      "Biomedical research"
    ],
    targetAudience: [
      "Pharmaceutical companies",
      "Biotech startups",
      "Research institutions",
      "Universities",
      "Medical research labs"
    ],
    tags: ["Biotechnology", "AI", "Drug Discovery", "Genetics", "Medical Research"],
    estimatedDelivery: "10-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,200 - $18,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/biotechnology-ai-platform"
  },

  // Advanced Robotics Process Automation
  {
    id: "advanced-robotics-process-automation",
    title: "Advanced Robotics Process Automation",
    description: "Next-generation RPA platform that combines AI, machine learning, and robotic process automation to create intelligent, adaptive automation solutions.",
    category: "Robotics & Automation",
    subcategory: "Process Automation",
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered process discovery",
      "Intelligent workflow automation",
      "Machine learning optimization",
      "Natural language processing",
      "Computer vision integration",
      "Process analytics dashboard",
      "Scalable automation framework",
      "Integration APIs"
    ],
    benefits: [
      "Automate 80% of repetitive tasks",
      "Reduce operational costs by 60%",
      "Improve process accuracy by 95%",
      "Scale automation across departments",
      "Continuous process optimization"
    ],
    useCases: [
      "Financial services",
      "Healthcare organizations",
      "Manufacturing companies",
      "Retail chains",
      "Service industries"
    ],
    targetAudience: [
      "Financial services",
      "Healthcare organizations",
      "Manufacturing companies",
      "Retail chains",
      "Service industries"
    ],
    tags: ["RPA", "AI", "Automation", "Process Optimization", "Machine Learning"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,800 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/advanced-robotics-automation"
  },

  // Brain-Computer Interface Development Platform
  {
    id: "brain-computer-interface-development-platform",
    title: "Brain-Computer Interface Development Platform",
    description: "Advanced BCI development platform that enables researchers and developers to create applications for neural control and brain-computer communication.",
    category: "Neural Technology",
    subcategory: "Brain-Computer Interface",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "EEG signal processing",
      "Neural pattern recognition",
      "BCI application development",
      "Real-time brain monitoring",
      "Machine learning integration",
      "API and SDK access",
      "Hardware compatibility",
      "Research collaboration tools"
    ],
    benefits: [
      "Accelerate BCI research and development",
      "Create innovative neural applications",
      "Access to cutting-edge neural technology",
      "Collaborate with global research community",
      "Commercialize BCI innovations"
    ],
    useCases: [
      "Research institutions",
      "Medical device companies",
      "Gaming companies",
      "Assistive technology developers",
      "Neuroscience researchers"
    ],
    targetAudience: [
      "Research institutions",
      "Medical device companies",
      "Gaming companies",
      "Assistive technology developers",
      "Neuroscience researchers"
    ],
    tags: ["Brain-Computer Interface", "Neural Technology", "EEG", "Research", "Innovation"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,500 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/brain-computer-interface"
  },

  // Autonomous Vehicle Fleet Management
  {
    id: "autonomous-vehicle-fleet-management",
    title: "Autonomous Vehicle Fleet Management",
    description: "Comprehensive autonomous vehicle fleet management platform that optimizes routes, monitors performance, and ensures safety for autonomous vehicle operations.",
    category: "Autonomous Vehicles",
    subcategory: "Fleet Operations",
    price: 3200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Autonomous vehicle monitoring",
      "Route optimization algorithms",
      "Safety compliance monitoring",
      "Performance analytics",
      "Predictive maintenance",
      "Real-time fleet tracking",
      "Regulatory reporting",
      "Insurance integration"
    ],
    benefits: [
      "Reduce operational costs by 40%",
      "Improve safety and compliance",
      "Optimize fleet utilization",
      "Real-time monitoring and control",
      "Scalable autonomous operations"
    ],
    useCases: [
      "Transportation companies",
      "Logistics providers",
      "Ride-sharing platforms",
      "Delivery services",
      "Municipal transportation"
    ],
    targetAudience: [
      "Transportation companies",
      "Logistics providers",
      "Ride-sharing platforms",
      "Delivery services",
      "Municipal transportation"
    ],
    tags: ["Autonomous Vehicles", "Fleet Management", "IoT", "Safety", "Optimization"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,200 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/autonomous-vehicle-fleet"
  }
];