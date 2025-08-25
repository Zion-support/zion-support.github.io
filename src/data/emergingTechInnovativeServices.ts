export interface EmergingTechInnovativeService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: {
    monthly: number;
    yearly: number;
    currency: string;
    pricingModel: string;
  };
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
    address: string;
  };
  technology: string[];
  integrations: string[];
  compliance: string[];
  roi: string;
  competitors: string[];
  marketTrend: string;
  innovationLevel: string;
  launchDate: string;
  status: 'Active' | 'Beta' | 'Coming Soon';
}

export const EMERGING_TECH_INNOVATIVE_SERVICES: EmergingTechInnovativeService[] = [
  // Quantum Computing Services
  {
    id: "quantum-computing-as-a-service",
    title: "Zion Quantum Computing as a Service (QCaaS)",
    description: "Enterprise-grade quantum computing platform that provides access to quantum processors, quantum algorithms, and hybrid classical-quantum workflows for solving complex optimization problems.",
    category: "Quantum Computing",
    subcategory: "Cloud Services",
    price: {
      monthly: 2500,
      yearly: 25000,
      currency: "$",
      pricingModel: "subscription"
    },
    features: [
      "Access to quantum processors (IBM, Google, Rigetti)",
      "Quantum algorithm library (100+ algorithms)",
      "Hybrid classical-quantum workflows",
      "Real-time quantum simulation",
      "Quantum error correction",
      "Performance benchmarking tools",
      "API for custom applications",
      "Expert quantum consulting",
      "Training and certification programs",
      "24/7 quantum computing support"
    ],
    benefits: [
      "Solve complex problems 1000x faster than classical computers",
      "Access to cutting-edge quantum technology",
      "Competitive advantage in research and development",
      "Future-proof technology investment",
      "Expert quantum computing guidance"
    ],
    useCases: [
      "Drug discovery and molecular modeling",
      "Financial portfolio optimization",
      "Logistics and supply chain optimization",
      "Cryptography and cybersecurity",
      "Machine learning acceleration"
    ],
    targetAudience: [
      "Research institutions",
      "Pharmaceutical companies",
      "Financial services firms",
      "Technology companies",
      "Government agencies"
    ],
    tags: ["Quantum Computing", "Cloud Services", "Optimization", "Research", "AI/ML"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,500 - $10,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/quantum-computing",
      address: "364 E Main St STE 1008, Middletown DE 19709"
    },
    technology: ["Qiskit", "Cirq", "PennyLane", "Python", "React", "AWS Braket"],
    integrations: ["IBM Quantum", "Google Quantum AI", "Azure Quantum", "Amazon Braket"],
    compliance: ["SOC 2", "ISO 27001", "NIST Cybersecurity Framework"],
    roi: "500% within 12 months",
    competitors: ["IBM Quantum", "Google Quantum AI", "Microsoft Azure Quantum", "Amazon Braket"],
    marketTrend: "Explosive growth with 300% annual increase",
    innovationLevel: "Cutting-edge quantum technology with enterprise features",
    launchDate: "2024-01-01",
    status: "Active"
  },

  // Blockchain & Web3 Services
  {
    id: "enterprise-blockchain-platform",
    title: "Zion Enterprise Blockchain Platform",
    description: "Scalable enterprise blockchain solution that enables businesses to build, deploy, and manage decentralized applications with advanced security, privacy, and compliance features.",
    category: "Blockchain & Web3",
    subcategory: "Enterprise Solutions",
    price: {
      monthly: 1500,
      yearly: 15000,
      currency: "$",
      pricingModel: "subscription"
    },
    features: [
      "Multi-chain support (Ethereum, Polygon, Solana, Hyperledger)",
      "Smart contract development and deployment",
      "Private blockchain networks",
      "Advanced security and privacy features",
      "Regulatory compliance tools",
      "API gateway and SDK",
      "Real-time analytics dashboard",
      "Integration with existing systems",
      "Scalability solutions (Layer 2, sharding)",
      "24/7 blockchain monitoring"
    ],
    benefits: [
      "Reduce transaction costs by 80%",
      "Improve transparency and traceability",
      "Enhanced security and immutability",
      "Automated compliance and auditing",
      "Future-proof technology infrastructure"
    ],
    useCases: [
      "Supply chain management",
      "Digital identity verification",
      "Asset tokenization",
      "Decentralized finance (DeFi)",
      "Non-fungible tokens (NFTs)"
    ],
    targetAudience: [
      "Financial institutions",
      "Supply chain companies",
      "Healthcare organizations",
      "Government agencies",
      "Technology startups"
    ],
    tags: ["Blockchain", "Web3", "DeFi", "Smart Contracts", "Enterprise"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,500 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/enterprise-blockchain",
      address: "364 E Main St STE 1008, Middletown DE 19709"
    },
    technology: ["Solidity", "Rust", "React", "Node.js", "PostgreSQL", "Redis"],
    integrations: ["Ethereum", "Polygon", "Solana", "Hyperledger", "AWS", "Azure"],
    compliance: ["SOC 2", "ISO 27001", "GDPR", "CCPA", "SOX"],
    roi: "400% within 8 months",
    competitors: ["ConsenSys", "R3 Corda", "Hyperledger", "Ethereum Enterprise"],
    marketTrend: "High growth market with enterprise adoption increasing",
    innovationLevel: "Advanced blockchain technology with enterprise-grade features",
    launchDate: "2024-01-15",
    status: "Active"
  },

  // Internet of Things (IoT) Services
  {
    id: "iot-edge-computing-platform",
    title: "Zion IoT Edge Computing Platform",
    description: "Advanced IoT platform that processes data at the edge, enabling real-time analytics, predictive maintenance, and intelligent automation for connected devices and industrial systems.",
    category: "Internet of Things",
    subcategory: "Edge Computing",
    price: {
      monthly: 899,
      yearly: 8990,
      currency: "$",
      pricingModel: "subscription"
    },
    features: [
      "Edge computing infrastructure",
      "Real-time data processing",
      "Predictive maintenance algorithms",
      "Device management and monitoring",
      "Data analytics and visualization",
      "Security and encryption",
      "Scalable architecture",
      "Integration with cloud services",
      "Custom IoT application development",
      "24/7 monitoring and support"
    ],
    benefits: [
      "Reduce latency by 90%",
      "Lower bandwidth costs by 70%",
      "Improve system reliability by 85%",
      "Real-time decision making",
      "Enhanced security and privacy"
    ],
    useCases: [
      "Industrial IoT (IIoT)",
      "Smart cities and buildings",
      "Connected vehicles",
      "Healthcare monitoring",
      "Agricultural automation"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Smart city developers",
      "Automotive companies",
      "Healthcare providers",
      "Agricultural businesses"
    ],
    tags: ["IoT", "Edge Computing", "Industrial IoT", "Predictive Maintenance", "Real-time Analytics"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$899 - $3,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/iot-edge-computing",
      address: "364 E Main St STE 1008, Middletown DE 19709"
    },
    technology: ["Python", "TensorFlow", "React", "Node.js", "Docker", "Kubernetes"],
    integrations: ["AWS IoT", "Azure IoT", "Google Cloud IoT", "MQTT", "OPC UA"],
    compliance: ["SOC 2", "ISO 27001", "IEC 62443", "NIST Cybersecurity Framework"],
    roi: "350% within 10 months",
    competitors: ["AWS IoT", "Azure IoT", "Google Cloud IoT", "PTC ThingWorx"],
    marketTrend: "Rapid growth with 40% annual increase",
    innovationLevel: "Advanced edge computing with AI-powered analytics",
    launchDate: "2024-02-01",
    status: "Active"
  },

  // Artificial Intelligence & Machine Learning
  {
    id: "ai-autonomous-systems-platform",
    title: "Zion AI Autonomous Systems Platform",
    description: "Comprehensive platform for developing, deploying, and managing autonomous AI systems that can operate independently in complex environments with minimal human intervention.",
    category: "Artificial Intelligence",
    subcategory: "Autonomous Systems",
    price: {
      monthly: 3000,
      yearly: 30000,
      currency: "$",
      pricingModel: "subscription"
    },
    features: [
      "Autonomous decision-making algorithms",
      "Multi-agent coordination systems",
      "Real-time learning and adaptation",
      "Safety and fail-safe mechanisms",
      "Human-AI collaboration tools",
      "Performance monitoring and analytics",
      "Custom autonomous system development",
      "Integration with existing infrastructure",
      "Advanced security and privacy",
      "Expert AI consulting services"
    ],
    benefits: [
      "Increase operational efficiency by 200%",
      "Reduce human error by 95%",
      "24/7 autonomous operation",
      "Scalable AI solutions",
      "Competitive advantage through automation"
    ],
    useCases: [
      "Autonomous vehicles and drones",
      "Smart manufacturing systems",
      "Autonomous robotics",
      "Intelligent infrastructure",
      "Autonomous customer service"
    ],
    targetAudience: [
      "Automotive companies",
      "Manufacturing firms",
      "Logistics companies",
      "Technology startups",
      "Research institutions"
    ],
    tags: ["AI", "Autonomous Systems", "Machine Learning", "Robotics", "Automation"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,000 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-autonomous-systems",
      address: "364 E Main St STE 1008, Middletown DE 19709"
    },
    technology: ["Python", "TensorFlow", "PyTorch", "ROS", "React", "Node.js"],
    integrations: ["AWS", "Azure", "Google Cloud", "NVIDIA", "Intel", "ARM"],
    compliance: ["SOC 2", "ISO 27001", "ISO 13485", "IEC 61508"],
    roi: "600% within 15 months",
    competitors: ["Waymo", "Tesla", "Boston Dynamics", "OpenAI"],
    marketTrend: "Explosive growth with autonomous technology adoption",
    innovationLevel: "Cutting-edge autonomous AI with advanced safety features",
    launchDate: "2024-01-01",
    status: "Active"
  },

  // Extended Reality (XR) Services
  {
    id: "xr-enterprise-platform",
    title: "Zion XR Enterprise Platform",
    description: "Comprehensive extended reality platform that enables businesses to create immersive experiences, virtual training programs, and collaborative workspaces using VR, AR, and MR technologies.",
    category: "Extended Reality",
    subcategory: "Enterprise Solutions",
    price: {
      monthly: 1200,
      yearly: 12000,
      currency: "$",
      pricingModel: "subscription"
    },
    features: [
      "VR/AR/MR content creation tools",
      "Virtual training and simulation",
      "Collaborative virtual workspaces",
      "3D modeling and visualization",
      "Cross-platform compatibility",
      "Analytics and performance tracking",
      "Custom XR application development",
      "Integration with existing systems",
      "Hardware recommendations and support",
      "Training and certification programs"
    ],
    benefits: [
      "Reduce training costs by 60%",
      "Improve learning retention by 80%",
      "Enable remote collaboration",
      "Enhance customer engagement",
      "Innovative marketing opportunities"
    ],
    useCases: [
      "Employee training and onboarding",
      "Virtual product demonstrations",
      "Remote collaboration and meetings",
      "Customer experience enhancement",
      "Design and prototyping"
    ],
    targetAudience: [
      "Training and development teams",
      "Marketing and sales teams",
      "Design and engineering firms",
      "Educational institutions",
      "Healthcare providers"
    ],
    tags: ["XR", "VR", "AR", "MR", "Virtual Training", "Collaboration"],
    estimatedDelivery: "6-10 weeks",
    supportLevel: "premium",
    marketPrice: "$1,200 - $4,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/xr-enterprise-platform",
      address: "364 E Main St STE 1008, Middletown DE 19709"
    },
    technology: ["Unity", "Unreal Engine", "WebXR", "React", "Node.js", "WebGL"],
    integrations: ["Oculus", "HTC Vive", "Microsoft HoloLens", "Magic Leap", "Web browsers"],
    compliance: ["SOC 2", "ISO 27001", "GDPR", "CCPA"],
    roi: "300% within 8 months",
    competitors: ["Unity", "Unreal Engine", "Microsoft Mixed Reality", "Magic Leap"],
    marketTrend: "High growth market with enterprise adoption increasing",
    innovationLevel: "Advanced XR technology with enterprise-grade features",
    launchDate: "2024-02-15",
    status: "Active"
  }
];

export const getServicesByCategory = (category: string) => {
  return EMERGING_TECH_INNOVATIVE_SERVICES.filter(service => 
    service.category.toLowerCase().includes(category.toLowerCase())
  );
};

export const getServicesByPriceRange = (minPrice: number, maxPrice: number) => {
  return EMERGING_TECH_INNOVATIVE_SERVICES.filter(service => 
    service.price.monthly >= minPrice && service.price.monthly <= maxPrice
  );
};

export const getServicesByInnovationLevel = (level: string) => {
  return EMERGING_TECH_INNOVATIVE_SERVICES.filter(service => 
    service.innovationLevel.toLowerCase().includes(level.toLowerCase())
  );
};

export const getActiveServices = () => {
  return EMERGING_TECH_INNOVATIVE_SERVICES.filter(service => service.status === 'Active');
};

export const getServicesByROI = (minROI: number) => {
  return EMERGING_TECH_INNOVATIVE_SERVICES.filter(service => {
    const roiNumber = parseInt(service.roi.split('%')[0]);
    return roiNumber >= minROI;
  });
};