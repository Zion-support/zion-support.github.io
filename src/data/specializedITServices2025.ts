import { ProductListing } from "@/types/listings";

export const SPECIALIZED_IT_SERVICES_2025: ProductListing[] = [
  // Advanced Cybersecurity Solutions
  {
    id: "zero-trust-network-access-platform",
    title: "Zero Trust Network Access Platform",
    description: "Next-generation zero trust network access solution with continuous authentication, micro-segmentation, and AI-powered threat detection. Provides 99.99% security uptime and reduces breach risk by 95%.",
    category: "Cybersecurity",
    subcategory: "Network Security",
    price: 1299,
    currency: "$",
    tags: ["Zero Trust", "Network Security", "Continuous Authentication", "Micro-segmentation", "Threat Detection"],
    author: { name: "Zion Tech Group", id: "zion-tech-group", email: "kleber@ziontechgroup.com", avatarUrl: "https://ziontechgroup.com/logo.png" },
    images: ["https://ziontechgroup.com/images/zero-trust-network.jpg"],
    createdAt: "2024-01-05T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "10-14 Days",
    aiScore: 98,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/zero-trust-network",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$1,000-2,500/month",
    competitors: ["CrowdStrike", "Palo Alto Networks", "Fortinet"],
    roi: "500% within 12 months",
    setupTime: "10-14 days",
    integrations: ["Active Directory", "Okta", "Duo", "CrowdStrike", "Splunk", "Jira"]
  },

  // Cloud Infrastructure & DevOps
  {
    id: "intelligent-cloud-orchestration-platform",
    title: "Intelligent Cloud Orchestration Platform",
    description: "AI-driven cloud infrastructure orchestration with automated scaling, cost optimization, and performance monitoring. Reduces cloud costs by 45% and improves performance by 70%.",
    category: "Cloud & DevOps",
    subcategory: "Cloud Orchestration",
    price: 899,
    currency: "$",
    tags: ["Cloud Orchestration", "Auto-scaling", "Cost Optimization", "Performance Monitoring", "DevOps"],
    author: { name: "Zion Tech Group", id: "zion-tech-group", email: "kleber@ziontechgroup.com", avatarUrl: "https://ziontechgroup.com/logo.png" },
    images: ["https://ziontechgroup.com/images/cloud-orchestration.jpg"],
    createdAt: "2024-01-10T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "7-10 Days",
    aiScore: 96,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/cloud-orchestration",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$700-1,800/month",
    competitors: ["AWS CloudFormation", "Terraform", "Ansible"],
    roi: "400% within 8 months",
    setupTime: "7-10 days",
    integrations: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Jenkins"]
  },

  // Data Analytics & Business Intelligence
  {
    id: "real-time-data-analytics-platform",
    title: "Real-Time Data Analytics Platform",
    description: "Advanced real-time data analytics platform with streaming data processing, predictive analytics, and interactive dashboards. Processes data 100x faster and provides insights in milliseconds.",
    category: "Data Analytics",
    subcategory: "Real-time Analytics",
    price: 699,
    currency: "$",
    tags: ["Real-time Analytics", "Streaming Data", "Predictive Analytics", "Interactive Dashboards", "Data Processing"],
    author: { name: "Zion Tech Group", id: "zion-tech-group", email: "kleber@ziontechgroup.com", avatarUrl: "https://ziontechgroup.com/logo.png" },
    images: ["https://ziontechgroup.com/images/real-time-analytics.jpg"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 134,
    featured: true,
    location: "Global",
    availability: "5-7 Days",
    aiScore: 97,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/real-time-analytics",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$500-1,200/month",
    competitors: ["Tableau", "Power BI", "Qlik"],
    roi: "450% within 6 months",
    setupTime: "5-7 days",
    integrations: ["Salesforce", "HubSpot", "QuickBooks", "NetSuite", "AWS", "Azure"]
  },

  // IoT & Edge Computing
  {
    id: "iot-edge-computing-platform",
    title: "IoT Edge Computing Platform",
    description: "Comprehensive IoT edge computing platform with real-time data processing, device management, and predictive maintenance. Reduces latency by 90% and improves efficiency by 60%.",
    category: "IoT & Edge Computing",
    subcategory: "Edge Computing",
    price: 599,
    currency: "$",
    tags: ["IoT", "Edge Computing", "Real-time Processing", "Device Management", "Predictive Maintenance"],
    author: { name: "Zion Tech Group", id: "zion-tech-group", email: "kleber@ziontechgroup.com", avatarUrl: "https://ziontechgroup.com/logo.png" },
    images: ["https://ziontechgroup.com/images/iot-edge-computing.jpg"],
    createdAt: "2024-01-20T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 98,
    featured: true,
    location: "Global",
    availability: "7-10 Days",
    aiScore: 95,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/iot-edge-computing",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$400-1,000/month",
    competitors: ["AWS IoT", "Azure IoT", "Google Cloud IoT"],
    roi: "350% within 10 months",
    setupTime: "7-10 days",
    integrations: ["AWS IoT", "Azure IoT", "Google Cloud IoT", "MQTT", "CoAP", "HTTP"]
  },

  // Blockchain & Web3 Solutions
  {
    id: "enterprise-blockchain-platform",
    title: "Enterprise Blockchain Platform",
    description: "Enterprise-grade blockchain platform with smart contracts, decentralized applications, and secure digital asset management. Increases transparency by 100% and reduces fraud by 95%.",
    category: "Blockchain & Web3",
    subcategory: "Enterprise Blockchain",
    price: 1499,
    currency: "$",
    tags: ["Blockchain", "Smart Contracts", "DApps", "Digital Assets", "Enterprise"],
    author: { name: "Zion Tech Group", id: "zion-tech-group", email: "kleber@ziontechgroup.com", avatarUrl: "https://ziontechgroup.com/logo.png" },
    images: ["https://ziontechgroup.com/images/enterprise-blockchain.jpg"],
    createdAt: "2024-01-25T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    location: "Global",
    availability: "14-21 Days",
    aiScore: 96,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/enterprise-blockchain",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$1,200-3,000/month",
    competitors: ["Hyperledger", "Ethereum Enterprise", "Corda"],
    roi: "600% within 18 months",
    setupTime: "14-21 days",
    integrations: ["Ethereum", "Hyperledger", "Corda", "Bitcoin", "Polkadot", "Solana"]
  },

  // Digital Twin Technology
  {
    id: "digital-twin-platform",
    title: "Digital Twin Platform",
    description: "Advanced digital twin platform with real-time simulation, predictive modeling, and virtual reality visualization. Reduces operational costs by 35% and improves decision-making by 80%.",
    category: "Digital Twin",
    subcategory: "Platform",
    price: 999,
    currency: "$",
    tags: ["Digital Twin", "Simulation", "Predictive Modeling", "VR Visualization", "IoT Integration"],
    author: { name: "Zion Tech Group", id: "zion-tech-group", email: "kleber@ziontechgroup.com", avatarUrl: "https://ziontechgroup.com/logo.png" },
    images: ["https://ziontechgroup.com/images/digital-twin-platform.jpg"],
    createdAt: "2024-01-30T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "10-14 Days",
    aiScore: 94,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/digital-twin-platform",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$800-2,000/month",
    competitors: ["Siemens", "GE Digital", "PTC"],
    roi: "400% within 12 months",
    setupTime: "10-14 days",
    integrations: ["Unity", "Unreal Engine", "Autodesk", "Siemens", "GE Digital", "PTC"]
  },

  // Quantum Computing Solutions
  {
    id: "quantum-computing-platform",
    title: "Quantum Computing Platform",
    description: "Cutting-edge quantum computing platform with quantum algorithms, quantum machine learning, and hybrid classical-quantum computing. Solves complex problems 1000x faster than classical computers.",
    category: "Quantum Computing",
    subcategory: "Platform",
    price: 2499,
    currency: "$",
    tags: ["Quantum Computing", "Quantum Algorithms", "Quantum ML", "Hybrid Computing", "Optimization"],
    author: { name: "Zion Tech Group", id: "zion-tech-group", email: "kleber@ziontechgroup.com", avatarUrl: "https://ziontechgroup.com/logo.png" },
    images: ["https://ziontechgroup.com/images/quantum-computing.jpg"],
    createdAt: "2024-02-05T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 45,
    featured: true,
    location: "Global",
    availability: "21-30 Days",
    aiScore: 99,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/quantum-computing",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$2,000-5,000/month",
    competitors: ["IBM Quantum", "Google Quantum", "Microsoft Quantum"],
    roi: "800% within 24 months",
    setupTime: "21-30 days",
    integrations: ["IBM Quantum", "Google Quantum", "Microsoft Quantum", "Qiskit", "Cirq", "Q#"]
  },

  // Space Technology Solutions
  {
    id: "space-technology-platform",
    title: "Space Technology Platform",
    description: "Innovative space technology platform with satellite data processing, space analytics, and Earth observation solutions. Provides global coverage and real-time space insights.",
    category: "Space Technology",
    subcategory: "Platform",
    price: 1799,
    currency: "$",
    tags: ["Space Technology", "Satellite Data", "Space Analytics", "Earth Observation", "Global Coverage"],
    author: { name: "Zion Tech Group", id: "zion-tech-group", email: "kleber@ziontechgroup.com", avatarUrl: "https://ziontechgroup.com/logo.png" },
    images: ["https://ziontechgroup.com/images/space-technology.jpg"],
    createdAt: "2024-02-10T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 34,
    featured: true,
    location: "Global",
    availability: "14-21 Days",
    aiScore: 95,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/space-technology",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$1,500-3,500/month",
    competitors: ["Planet Labs", "Maxar", "Airbus Defence"],
    roi: "500% within 18 months",
    setupTime: "14-21 days",
    integrations: ["NASA APIs", "ESA APIs", "Planet Labs", "Maxar", "Airbus Defence", "SpaceX"]
  },

  // Sustainable Technology Solutions
  {
    id: "sustainable-technology-platform",
    title: "Sustainable Technology Platform",
    description: "Comprehensive sustainable technology platform with green computing, energy optimization, and environmental monitoring. Reduces carbon footprint by 50% and improves energy efficiency by 60%.",
    category: "Sustainable Technology",
    subcategory: "Platform",
    price: 799,
    currency: "$",
    tags: ["Sustainable Technology", "Green Computing", "Energy Optimization", "Environmental Monitoring", "Carbon Reduction"],
    author: { name: "Zion Tech Group", id: "zion-tech-group", email: "kleber@ziontechgroup.com", avatarUrl: "https://ziontechgroup.com/logo.png" },
    images: ["https://ziontechgroup.com/images/sustainable-technology.jpg"],
    createdAt: "2024-02-15T10:00:00.000Z",
    rating: 4.7,
    reviewCount: 78,
    featured: true,
    location: "Global",
    availability: "7-10 Days",
    aiScore: 93,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/sustainable-technology",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$600-1,500/month",
    competitors: ["Greenpeace", "WWF", "Environmental Defense Fund"],
    roi: "300% within 12 months",
    setupTime: "7-10 days",
    integrations: ["Smart Grid", "Renewable Energy", "IoT Sensors", "Environmental APIs", "Carbon Tracking", "Energy Management"]
  },

  // AI-Powered Research & Development
  {
    id: "ai-research-development-platform",
    title: "AI Research & Development Platform",
    description: "Advanced AI-powered research and development platform with automated hypothesis testing, data analysis, and innovation management. Accelerates research by 5x and improves success rate by 70%.",
    category: "AI & Research",
    subcategory: "Research Platform",
    price: 899,
    currency: "$",
    tags: ["AI Research", "Hypothesis Testing", "Data Analysis", "Innovation Management", "Automation"],
    author: { name: "Zion Tech Group", id: "zion-tech-group", email: "kleber@ziontechgroup.com", avatarUrl: "https://ziontechgroup.com/logo.png" },
    images: ["https://ziontechgroup.com/images/ai-research-development.jpg"],
    createdAt: "2024-02-20T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 56,
    featured: true,
    location: "Global",
    availability: "10-14 Days",
    aiScore: 96,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-research-development",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$700-1,800/month",
    competitors: ["ResearchGate", "Academia.edu", "Mendeley"],
    roi: "400% within 15 months",
    setupTime: "10-14 days",
    integrations: ["ResearchGate", "Academia.edu", "Mendeley", "PubMed", "arXiv", "Google Scholar"]
  }
];