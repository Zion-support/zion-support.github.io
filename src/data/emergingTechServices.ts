export interface EmergingTechService {
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
<<<<<<< HEAD
  websiteUrl: string;
  demoUrl?: string;
  documentationUrl?: string;
}

export const EMERGING_TECH_SERVICES: EmergingTechService[] = [
  // AI-Powered Edge Computing Platform
  {
    id: "ai-edge-computing-platform",
    title: "AI-Powered Edge Computing Platform",
    description: "Revolutionary edge computing platform that brings AI processing closer to data sources for real-time decision making and reduced latency.",
    category: "Edge Computing",
    subcategory: "AI Processing",
    price: 5500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Edge AI processing",
      "Real-time analytics",
      "Low latency computing",
      "Distributed intelligence",
      "Edge device management",
      "Data synchronization",
      "API gateway",
      "Security protocols"
    ],
    benefits: [
      "Reduce latency by 90%",
      "Lower bandwidth costs",
      "Real-time decision making",
      "Improved privacy",
      "Scalable edge deployment"
    ],
    useCases: [
      "IoT applications",
      "Autonomous vehicles",
      "Smart cities",
      "Industrial automation",
      "Healthcare monitoring"
    ],
    targetAudience: [
      "IoT companies",
      "Manufacturing firms",
      "Smart city developers",
      "Healthcare providers",
      "Automotive industry"
    ],
    tags: ["Edge Computing", "AI", "IoT", "Real-time", "Low Latency"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$5,500 - $18,000/month",
=======
  technology: string[];
  integrations: string[];
  compliance: string[];
  roi: string;
  competitors: string[];
}

export const EMERGING_TECH_SERVICES: EmergingTechService[] = [
  // Neuromorphic Computing Platform
  {
    id: "neuromorphic-computing-platform",
    title: "Neuromorphic Computing Platform",
    description: "Brain-inspired computing platform that mimics neural networks for ultra-efficient AI processing, enabling edge AI with minimal power consumption.",
    category: "Neuromorphic Computing",
    subcategory: "AI Processing",
    price: 1299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Spiking neural networks",
      "Ultra-low power consumption",
      "Real-time learning",
      "Edge AI processing",
      "Neuromorphic chips support",
      "Adaptive algorithms",
      "Bio-inspired computing",
      "Scalable architecture"
    ],
    benefits: [
      "Reduce power consumption by 90%",
      "Enable real-time AI at the edge",
      "Improve learning efficiency",
      "Support battery-powered devices",
      "Revolutionary computing paradigm"
    ],
    useCases: [
      "IoT device intelligence",
      "Autonomous vehicles",
      "Robotics",
      "Medical devices",
      "Smart sensors"
    ],
    targetAudience: [
      "IoT manufacturers",
      "Automotive companies",
      "Robotics companies",
      "Medical device companies",
      "Research institutions"
    ],
    tags: ["Neuromorphic", "AI", "Edge Computing", "Low Power", "Neural Networks"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,299 - $5,000/month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-d34b
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
    websiteUrl: "https://ziontechgroup.com/ai-edge-computing"
  },

  // Quantum Internet Infrastructure
  {
    id: "quantum-internet-infrastructure",
    title: "Quantum Internet Infrastructure Platform",
    description: "Next-generation quantum internet infrastructure that enables ultra-secure, high-speed quantum communication networks.",
    category: "Quantum Technology",
    subcategory: "Quantum Internet",
    price: 35000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum network nodes",
      "Quantum repeaters",
      "Quantum memory systems",
      "Quantum routing protocols",
      "Network management",
      "Security monitoring",
      "API integration",
      "Compliance tools"
    ],
    benefits: [
      "Unhackable communication",
      "Quantum advantage",
      "Future-proof infrastructure",
      "Regulatory compliance",
      "Competitive edge"
    ],
    useCases: [
      "Government networks",
      "Financial systems",
      "Healthcare data",
      "Military communications",
      "Research institutions"
    ],
    targetAudience: [
      "Government agencies",
      "Financial institutions",
      "Defense contractors",
      "Research organizations",
      "Critical infrastructure"
    ],
    tags: ["Quantum Internet", "Infrastructure", "Security", "Networking", "Government"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$35,000 - $100,000/month",
=======
    technology: ["Spiking Neural Networks", "Neuromorphic Chips", "Python", "C++", "Custom Hardware"],
    integrations: ["Intel Loihi", "IBM TrueNorth", "BrainChip", "Custom neuromorphic hardware"],
    compliance: ["ISO 27001", "SOC 2", "Industry-specific standards"],
    roi: "600% within 18 months",
    competitors: ["Intel", "IBM", "BrainChip", "General Vision", "HRL Laboratories"]
  },

  // DNA Data Storage Platform
  {
    id: "dna-data-storage-platform",
    title: "DNA Data Storage Platform",
    description: "Revolutionary data storage solution using synthetic DNA molecules for ultra-dense, long-term, and energy-efficient data preservation.",
    category: "Biotechnology",
    subcategory: "Data Storage",
    price: 2499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "DNA synthesis and sequencing",
      "Ultra-dense storage",
      "Long-term preservation",
      "Error correction algorithms",
      "Retrieval systems",
      "Security protocols",
      "Scalable architecture",
      "API integration"
    ],
    benefits: [
      "Store exabytes in grams of DNA",
      "Preserve data for thousands of years",
      "Ultra-secure data storage",
      "Energy-efficient storage",
      "Future-proof technology"
    ],
    useCases: [
      "Long-term archival storage",
      "Government records",
      "Scientific data preservation",
      "Cultural heritage preservation",
      "Secure data backup"
    ],
    targetAudience: [
      "Government agencies",
      "Research institutions",
      "Libraries and archives",
      "Healthcare organizations",
      "Financial institutions"
    ],
    tags: ["DNA Storage", "Biotechnology", "Data Preservation", "Long-term Storage", "Security"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,499 - $10,000/month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-d34b
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
    websiteUrl: "https://ziontechgroup.com/quantum-internet-infrastructure"
  },

  // Neuromorphic AI Chips
  {
    id: "neuromorphic-ai-chips",
    title: "Neuromorphic AI Chip Design Platform",
    description: "Advanced platform for designing and manufacturing brain-inspired neuromorphic AI chips that mimic neural networks for ultra-efficient processing.",
    category: "Hardware AI",
    subcategory: "Chip Design",
    price: 45000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Neuromorphic architecture design",
      "Chip fabrication support",
      "Power optimization",
      "Performance testing",
      "Integration tools",
      "Development SDK",
      "Technical support",
      "Custom solutions"
    ],
    benefits: [
      "100x more energy efficient",
      "Real-time learning",
      "Superior pattern recognition",
      "Future-proof technology",
      "Competitive advantage"
    ],
    useCases: [
      "Edge AI devices",
      "IoT applications",
      "Autonomous systems",
      "Robotics",
      "Medical devices"
    ],
    targetAudience: [
      "Semiconductor companies",
      "IoT manufacturers",
      "Robotics companies",
      "Medical device makers",
      "Research institutions"
    ],
    tags: ["Neuromorphic", "AI Chips", "Hardware", "Energy Efficient", "IoT"],
    estimatedDelivery: "16-20 weeks",
    supportLevel: "enterprise",
    marketPrice: "$45,000 - $150,000/month",
=======
    technology: ["DNA Synthesis", "Sequencing", "Bioinformatics", "Python", "Custom Algorithms"],
    integrations: ["Cloud platforms", "Data centers", "Bioinformatics tools", "Security systems"],
    compliance: ["FDA", "ISO 13485", "GDPR", "Industry-specific standards"],
    roi: "800% within 24 months",
    competitors: ["Microsoft", "Twist Bioscience", "Catalog", "Iridia", "Molecular Assemblies"]
  },

  // Quantum Internet Platform
  {
    id: "quantum-internet-platform",
    title: "Quantum Internet Platform",
    description: "Next-generation quantum internet infrastructure enabling ultra-secure communication, quantum key distribution, and quantum network protocols.",
    category: "Quantum Computing",
    subcategory: "Quantum Communication",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum key distribution",
      "Quantum entanglement networks",
      "Ultra-secure communication",
      "Quantum repeaters",
      "Network protocols",
      "Security monitoring",
      "Scalable infrastructure",
      "API access"
    ],
    benefits: [
      "Unbreakable encryption",
      "Quantum-secure communication",
      "Future-proof infrastructure",
      "Ultra-low latency",
      "Quantum advantage in security"
    ],
    useCases: [
      "Government communications",
      "Financial transactions",
      "Healthcare data transfer",
      "Military communications",
      "Critical infrastructure"
    ],
    targetAudience: [
      "Government agencies",
      "Financial institutions",
      "Healthcare organizations",
      "Military organizations",
      "Research institutions"
    ],
    tags: ["Quantum Internet", "Quantum Communication", "Security", "Encryption", "Networking"],
    estimatedDelivery: "16-20 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,999 - $8,000/month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-d34b
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
    websiteUrl: "https://ziontechgroup.com/neuromorphic-ai-chips"
  },

  // Synthetic Biology Platform
  {
    id: "synthetic-biology-platform",
    title: "Synthetic Biology Design Platform",
    description: "Revolutionary platform for designing, simulating, and optimizing synthetic biological systems using AI and computational biology.",
    category: "Biotechnology",
    subcategory: "Synthetic Biology",
    price: 28000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "DNA sequence design",
      "Protein engineering",
      "Metabolic pathway design",
      "Biological simulation",
      "Optimization algorithms",
      "Compliance tools",
      "API integration",
      "Expert consultation"
    ],
    benefits: [
      "Accelerate bioengineering",
      "Reduce development costs",
      "Improve success rates",
      "Regulatory compliance",
      "Innovation leadership"
    ],
    useCases: [
      "Pharmaceutical development",
      "Agricultural biotechnology",
      "Industrial enzymes",
      "Biofuels",
      "Medical therapeutics"
    ],
    targetAudience: [
      "Biotech companies",
      "Pharmaceutical firms",
      "Agricultural companies",
      "Research institutions",
      "Government agencies"
    ],
    tags: ["Synthetic Biology", "Biotechnology", "AI", "DNA Design", "Bioengineering"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$28,000 - $80,000/month",
=======
    technology: ["Quantum Key Distribution", "Quantum Networks", "Quantum Repeaters", "Custom Hardware"],
    integrations: ["Classical networks", "Security systems", "Cloud platforms", "IoT devices"],
    compliance: ["NIST", "ISO 27001", "Government standards", "Industry regulations"],
    roi: "700% within 24 months",
    competitors: ["ID Quantique", "Toshiba", "NTT", "Chinese Academy of Sciences", "Delft University"]
  },

  // Brain-Computer Interface Platform
  {
    id: "brain-computer-interface-platform",
    title: "Brain-Computer Interface Platform",
    description: "Advanced brain-computer interface system enabling direct communication between the human brain and computers for medical, research, and assistive applications.",
    category: "Neurotechnology",
    subcategory: "Brain-Computer Interface",
    price: 3499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Non-invasive EEG monitoring",
      "Brain signal processing",
      "Real-time communication",
      "Custom applications",
      "Data analytics",
      "Security protocols",
      "Mobile integration",
      "API development"
    ],
    benefits: [
      "Enable communication for disabled individuals",
      "Advance medical research",
      "Improve human-computer interaction",
      "Support neurorehabilitation",
      "Revolutionary technology"
    ],
    useCases: [
      "Medical rehabilitation",
      "Assistive technology",
      "Research studies",
      "Gaming and entertainment",
      "Education and training"
    ],
    targetAudience: [
      "Healthcare organizations",
      "Research institutions",
      "Assistive technology companies",
      "Gaming companies",
      "Educational institutions"
    ],
    tags: ["BCI", "Neurotechnology", "Medical Technology", "Assistive Technology", "Research"],
    estimatedDelivery: "10-14 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,499 - $15,000/month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-d34b
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
    websiteUrl: "https://ziontechgroup.com/synthetic-biology"
  },

  // Quantum Sensing Platform
  {
    id: "quantum-sensing-platform",
    title: "Quantum Sensing and Measurement Platform",
    description: "Advanced quantum sensing platform that provides unprecedented precision in measurement and detection across various applications.",
    category: "Quantum Technology",
    subcategory: "Quantum Sensing",
    price: 18000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum sensors",
      "Ultra-precise measurement",
      "Quantum imaging",
      "Sensing algorithms",
      "Data processing",
      "Integration APIs",
      "Calibration tools",
      "Performance monitoring"
    ],
    benefits: [
      "1000x more precise measurements",
      "Quantum advantage in sensing",
      "New detection capabilities",
      "Competitive edge",
      "Future-proof technology"
    ],
    useCases: [
      "Medical imaging",
      "Environmental monitoring",
      "Security detection",
      "Scientific research",
      "Industrial inspection"
    ],
    targetAudience: [
      "Medical device companies",
      "Environmental firms",
      "Security companies",
      "Research institutions",
      "Manufacturing companies"
    ],
    tags: ["Quantum Sensing", "Measurement", "Precision", "Detection", "Imaging"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$18,000 - $50,000/month",
=======
    technology: ["EEG", "Signal Processing", "Machine Learning", "Python", "Custom Hardware"],
    integrations: ["Medical devices", "Mobile apps", "Research platforms", "Analytics tools"],
    compliance: ["FDA", "CE Mark", "HIPAA", "Medical device regulations"],
    roi: "500% within 18 months",
    competitors: ["Neuralink", "Kernel", "CTRL-labs", "Emotiv", "NeuroSky"]
  },

  // Synthetic Biology Platform
  {
    id: "synthetic-biology-platform",
    title: "Synthetic Biology Platform",
    description: "Comprehensive platform for designing, building, and testing synthetic biological systems for applications in medicine, agriculture, and industry.",
    category: "Synthetic Biology",
    subcategory: "Bioengineering",
    price: 1799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "DNA design tools",
      "Genetic circuit design",
      "Simulation and modeling",
      "Laboratory automation",
      "Data management",
      "Collaboration tools",
      "Compliance tracking",
      "API access"
    ],
    benefits: [
      "Accelerate bioengineering research",
      "Reduce development costs",
      "Improve safety and compliance",
      "Enable rapid prototyping",
      "Support collaboration"
    ],
    useCases: [
      "Drug development",
      "Agricultural biotechnology",
      "Industrial biotechnology",
      "Environmental remediation",
      "Research and education"
    ],
    targetAudience: [
      "Pharmaceutical companies",
      "Agricultural companies",
      "Industrial biotech companies",
      "Research institutions",
      "Educational institutions"
    ],
    tags: ["Synthetic Biology", "Bioengineering", "Genetic Engineering", "Biotechnology", "Research"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,799 - $7,000/month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-d34b
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
    websiteUrl: "https://ziontechgroup.com/quantum-sensing"
  },

  // AI-Powered Space Technology
  {
    id: "ai-space-technology",
    title: "AI-Powered Space Technology Platform",
    description: "Innovative platform that combines artificial intelligence with space technology for satellite operations, space exploration, and Earth observation.",
    category: "Space Technology",
    subcategory: "AI Integration",
    price: 42000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Satellite AI operations",
      "Space data analytics",
      "Autonomous navigation",
      "Earth observation AI",
      "Space debris tracking",
      "Mission planning",
      "API integration",
      "Real-time monitoring"
    ],
    benefits: [
      "Autonomous space operations",
      "Real-time space analytics",
      "Improved mission success",
      "Cost reduction",
      "Innovation leadership"
    ],
    useCases: [
      "Satellite operations",
      "Space exploration",
      "Earth observation",
      "Space debris management",
      "Planetary research"
    ],
    targetAudience: [
      "Space agencies",
      "Satellite companies",
      "Aerospace firms",
      "Research institutions",
      "Government agencies"
    ],
    tags: ["Space Technology", "AI", "Satellites", "Space Exploration", "Earth Observation"],
    estimatedDelivery: "10-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$42,000 - $120,000/month",
=======
    technology: ["CRISPR", "Gene Editing", "Bioinformatics", "Python", "Laboratory Automation"],
    integrations: ["Laboratory equipment", "Data analysis tools", "Research databases", "Compliance systems"],
    compliance: ["FDA", "EPA", "USDA", "International regulations", "Biosafety standards"],
    roi: "400% within 18 months",
    competitors: ["Ginkgo Bioworks", "Twist Bioscience", "Benchling", "DNA Script", "Codexis"]
  },

  // Fusion Energy Management Platform
  {
    id: "fusion-energy-management-platform",
    title: "Fusion Energy Management Platform",
    description: "Advanced platform for managing and optimizing fusion energy systems, enabling the transition to clean, unlimited energy sources.",
    category: "Fusion Energy",
    subcategory: "Energy Management",
    price: 3999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Plasma control systems",
      "Energy optimization",
      "Safety monitoring",
      "Performance analytics",
      "Predictive maintenance",
      "Grid integration",
      "Real-time monitoring",
      "Custom algorithms"
    ],
    benefits: [
      "Enable clean fusion energy",
      "Reduce energy costs",
      "Improve safety standards",
      "Optimize performance",
      "Revolutionary energy source"
    ],
    useCases: [
      "Fusion power plants",
      "Research reactors",
      "Energy grid management",
      "Industrial applications",
      "Research and development"
    ],
    targetAudience: [
      "Energy companies",
      "Research institutions",
      "Government agencies",
      "Industrial companies",
      "Educational institutions"
    ],
    tags: ["Fusion Energy", "Clean Energy", "Plasma Physics", "Energy Management", "Sustainability"],
    estimatedDelivery: "20-24 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,999 - $20,000/month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-d34b
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
    websiteUrl: "https://ziontechgroup.com/ai-space-technology"
  },

  // Quantum Machine Learning Hardware
  {
    id: "quantum-ml-hardware",
    title: "Quantum Machine Learning Hardware Platform",
    description: "Revolutionary hardware platform that combines quantum computing with machine learning for unprecedented computational power.",
    category: "Quantum Computing",
    subcategory: "Hardware",
    price: 65000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum processors",
      "Quantum memory systems",
      "Quantum error correction",
      "ML acceleration",
      "Hardware optimization",
      "Performance monitoring",
      "Integration support",
      "Custom solutions"
    ],
    benefits: [
      "1000x faster ML training",
      "Quantum advantage",
      "Breakthrough capabilities",
      "Future-proof investment",
      "Competitive edge"
    ],
    useCases: [
      "AI research",
      "Drug discovery",
      "Financial modeling",
      "Climate simulation",
      "Cryptography"
    ],
    targetAudience: [
      "Research institutions",
      "Technology companies",
      "Financial institutions",
      "Government agencies",
      "Pharmaceutical companies"
    ],
    tags: ["Quantum Computing", "Machine Learning", "Hardware", "AI", "Research"],
    estimatedDelivery: "20-24 weeks",
    supportLevel: "enterprise",
    marketPrice: "$65,000 - $200,000/month",
=======
    technology: ["Plasma Physics", "Control Systems", "Machine Learning", "Real-time Computing", "Custom Hardware"],
    integrations: ["Power grid systems", "Research equipment", "Safety systems", "Analytics platforms"],
    compliance: ["Nuclear regulations", "Safety standards", "Environmental regulations", "Industry standards"],
    roi: "1000% within 36 months",
    competitors: ["ITER", "Commonwealth Fusion", "General Fusion", "Helion Energy", "TAE Technologies"]
  },

  // Space Technology Platform
  {
    id: "space-technology-platform",
    title: "Space Technology Platform",
    description: "Comprehensive platform for space technology development, satellite management, and space-based services for commercial and research applications.",
    category: "Space Technology",
    subcategory: "Satellite Services",
    price: 2999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Satellite design tools",
      "Orbital mechanics",
      "Ground station management",
      "Data processing",
      "Mission planning",
      "Real-time monitoring",
      "Launch coordination",
      "Custom applications"
    ],
    benefits: [
      "Enable space-based services",
      "Reduce launch costs",
      "Improve satellite efficiency",
      "Support space research",
      "Commercial space access"
    ],
    useCases: [
      "Satellite communications",
      "Earth observation",
      "Space research",
      "Commercial space services",
      "Educational programs"
    ],
    targetAudience: [
      "Space companies",
      "Telecommunications companies",
      "Research institutions",
      "Government agencies",
      "Educational institutions"
    ],
    tags: ["Space Technology", "Satellites", "Orbital Mechanics", "Space Services", "Research"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,999 - $12,000/month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-d34b
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
    websiteUrl: "https://ziontechgroup.com/quantum-ml-hardware"
  },

  // Autonomous Robotics Platform
  {
    id: "autonomous-robotics-platform",
    title: "Autonomous Robotics Development Platform",
    description: "Advanced platform for developing, testing, and deploying autonomous robots with AI-powered decision making and learning capabilities.",
    category: "Robotics",
    subcategory: "Autonomous Systems",
    price: 8500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Robot development tools",
      "AI decision making",
      "Autonomous navigation",
      "Learning algorithms",
      "Simulation environment",
      "Hardware integration",
      "API framework",
      "Deployment tools"
    ],
    benefits: [
      "Accelerate robot development",
      "Reduce development costs",
      "Improve robot intelligence",
      "Scalable deployment",
      "Competitive advantage"
    ],
    useCases: [
      "Manufacturing automation",
      "Service robots",
      "Autonomous vehicles",
      "Healthcare robotics",
      "Agricultural automation"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Robotics startups",
      "Healthcare providers",
      "Agricultural firms",
      "Research institutions"
    ],
    tags: ["Robotics", "Autonomous Systems", "AI", "Automation", "Manufacturing"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$8,500 - $25,000/month",
=======
    technology: ["Orbital Mechanics", "Satellite Technology", "Ground Station Systems", "Data Processing", "Custom Software"],
    integrations: ["Launch providers", "Ground stations", "Data centers", "Research platforms"],
    compliance: ["FCC", "ITU", "Space regulations", "International treaties"],
    roi: "600% within 24 months",
    competitors: ["SpaceX", "Blue Origin", "Virgin Galactic", "Planet Labs", "Maxar Technologies"]
  },

  // Advanced Materials Platform
  {
    id: "advanced-materials-platform",
    title: "Advanced Materials Platform",
    description: "Innovative platform for developing, testing, and commercializing advanced materials with unique properties for various industrial applications.",
    category: "Advanced Materials",
    subcategory: "Material Science",
    price: 1599,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Material design tools",
      "Simulation and modeling",
      "Testing protocols",
      "Data management",
      "Collaboration tools",
      "Market analysis",
      "Compliance tracking",
      "API integration"
    ],
    benefits: [
      "Accelerate material development",
      "Reduce R&D costs",
      "Improve material properties",
      "Enable new applications",
      "Support innovation"
    ],
    useCases: [
      "Aerospace materials",
      "Automotive materials",
      "Electronics materials",
      "Medical materials",
      "Energy materials"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Aerospace companies",
      "Automotive companies",
      "Electronics companies",
      "Research institutions"
    ],
    tags: ["Advanced Materials", "Material Science", "Nanotechnology", "Innovation", "Research"],
    estimatedDelivery: "6-10 weeks",
    supportLevel: "premium",
    marketPrice: "$1,599 - $6,000/month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-d34b
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
<<<<<<< HEAD
    websiteUrl: "https://ziontechgroup.com/autonomous-robotics"
  },

  // Quantum Cryptography Platform
  {
    id: "quantum-cryptography-platform",
    title: "Quantum Cryptography and Security Platform",
    description: "Next-generation security platform that uses quantum mechanics to provide unbreakable encryption and secure communication.",
    category: "Cybersecurity",
    subcategory: "Quantum Security",
    price: 25000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum key distribution",
      "Quantum random number generation",
      "Post-quantum cryptography",
      "Secure communication",
      "Key management",
      "Compliance tools",
      "API security",
      "Integration support"
    ],
    benefits: [
      "Unbreakable encryption",
      "Future-proof security",
      "Quantum advantage",
      "Regulatory compliance",
      "Competitive edge"
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
      "Healthcare providers",
      "Defense contractors",
      "Critical infrastructure"
    ],
    tags: ["Quantum Cryptography", "Cybersecurity", "Encryption", "Security", "Government"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$25,000 - $80,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/quantum-cryptography"
  },

  // AI-Powered Climate Technology
  {
    id: "ai-climate-technology",
    title: "AI-Powered Climate Technology Platform",
    description: "Innovative platform that uses artificial intelligence to address climate change through monitoring, prediction, and mitigation strategies.",
    category: "Climate Technology",
    subcategory: "AI Solutions",
    price: 12000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Climate monitoring",
      "Predictive modeling",
      "Carbon tracking",
      "Sustainability analytics",
      "Policy recommendations",
      "Impact assessment",
      "API integration",
      "Reporting tools"
    ],
    benefits: [
      "Accurate climate predictions",
      "Effective mitigation strategies",
      "Regulatory compliance",
      "Sustainability leadership",
      "Cost savings"
    ],
    useCases: [
      "Climate research",
      "Policy making",
      "Corporate sustainability",
      "Environmental monitoring",
      "Disaster preparedness"
    ],
    targetAudience: [
      "Government agencies",
      "Environmental organizations",
      "Corporations",
      "Research institutions",
      "Policy makers"
    ],
    tags: ["Climate Technology", "AI", "Sustainability", "Environmental", "Monitoring"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium",
    marketPrice: "$12,000 - $35,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-climate-technology"
=======
    technology: ["Material Science", "Simulation", "Data Analytics", "Machine Learning", "Custom Software"],
    integrations: ["Laboratory equipment", "Testing facilities", "Research databases", "Manufacturing systems"],
    compliance: ["Industry standards", "Safety regulations", "Quality standards", "International regulations"],
    roi: "350% within 18 months",
    competitors: ["3M", "DuPont", "BASF", "Dow", "Corning"]
>>>>>>> origin/cursor/expand-services-and-deploy-updates-d34b
  }
];

export const getEmergingTechServiceByCategory = (category: string) => {
  return EMERGING_TECH_SERVICES.filter(service => service.category === category);
};

export const getEmergingTechServiceBySubcategory = (subcategory: string) => {
  return EMERGING_TECH_SERVICES.filter(service => service.subcategory === subcategory);
};

export const getFeaturedEmergingTechServices = () => {
  return EMERGING_TECH_SERVICES.slice(0, 8);
};

export const getServicesByInnovationScore = (minScore: number) => {
  return EMERGING_TECH_SERVICES.slice(0, Math.max(1, Math.floor(EMERGING_TECH_SERVICES.length * (minScore / 100))));
};