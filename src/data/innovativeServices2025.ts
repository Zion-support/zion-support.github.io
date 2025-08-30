export interface InnovativeService {

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
  roi: string;
  innovationLevel: string;
contactInfo: {
    phone: string;
    email: string;
    website: string};
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[]};
  competitors?: string[];
  marketSize?: string}

<<<<<<< HEAD
export const Integration",
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      "Governance Tools",
      "Analytics Dashboard"
    ],
    benefits: [
      "Decentralized applications",
      "Enhanced security and transparency",
      "Reduced transaction costs",
      "Global accessibility",
      "Innovative business models"
    ],
    useCases: [
      "DeFi applications",
      "NFT marketplaces",
      "Supply chain tracking",
      "Digital identity",
      "Decentralized finance"
    ],
    targetAudience: [
      "Developers",
      "Startups",
      "Financial institutions",
      "Gaming companies",
      "Art marketplaces"
    ],
    tags: ["Blockchain", "Web3", "DeFi", "NFTs", "Smart Contracts"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,999 - $9,999/month",
    roi: "300-600%",
    innovationLevel: "Revolutionary",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Solidity", "Rust", "JavaScript", "Python", "Ethereum", "Polkadot"],
      integrations: ["MetaMask", "WalletConnect", "OpenSea", "Uniswap", "Chainlink"],
      apiEndpoints: 100,
      uptime: "99.9%",
      security: ["Smart contract auditing", "Multi-signature wallets", "Zero-knowledge proofs"]
    },
    competitors: ["ConsenSys", "Alchemy", "Infura", "QuickNode"],
    marketSize: "$19.9 billion by 2025"
  },

  // Sustainable Technology Solutions
  {
    id: "sustainable-technology",
    title: "Sustainable Technology Solutions Platform",
    description: "Innovative platform that combines technology and sustainability to help businesses reduce their environmental impact, optimize resource usage, and achieve sustainability goals.",
    category: "Sustainability & Technology",
    subcategory: "Environmental Solutions",
    price: 1799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Carbon Footprint Tracking",
      "Energy Optimization",
      "Waste Management",
      "Sustainable Supply Chain",
      "ESG Reporting",
      "Green Technology Integration",
      "Sustainability Analytics",
      "Compliance Monitoring",
      "Resource Optimization",
      "Impact Measurement"
    ],
    benefits: [
      "Reduce environmental impact",
      "Lower operational costs",
      "Meet sustainability goals",
      "Enhance brand reputation",
      "Compliance with regulations"
    ],
    useCases: [
      "Corporate sustainability",
      "Energy management",
      "Supply chain optimization",
      "ESG compliance",
      "Green building management"
    ],
    targetAudience: [
      "Sustainability officers",
      "Facility managers",
      "Supply chain managers",
      "Corporate executives",
      "Government agencies"
    ],
    tags: ["Sustainability", "ESG", "Green Technology", "Carbon Tracking", "Energy Management"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "professional",
    marketPrice: "$1,799 - $4,999/month",
    roi: "200-400%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Python", "IoT", "Machine Learning", "React", "Node.js", "PostgreSQL"],
      integrations: ["Energy management systems", "IoT sensors", "ERP systems", "Sustainability platforms"],
      apiEndpoints: 120,
      uptime: "99.9%",
      security: ["SOC 2", "ISO 14001", "End-to-end encryption"]
    },
    competitors: ["Watershed", "Normative", "Persefoni", "Sweep"],
    marketSize: "$8.5 billion by 2025"
  }
];

// Helper functions
<<<<<<< HEAD
export const getServicesByCategory = (category: string): InnovativeService[]  => {;
  return INNOVATIVE_SERVICES_2025.filter(service => service.category === category)};

export const getServicesByPriceRange = (minPrice: number, maxPrice: number): InnovativeService[]  => {;
  return INNOVATIVE_SERVICES_2025.filter(service => service.price >= minPrice && service.price <= maxPrice)};

export const getTopRatedServices = (limit: number = 5): InnovativeService2025[] => {
  return INNOVATIVE_SERVICES_2025;
    .sort((a, b) => b.rating - a.rating);
    .slice(0, limit)};

export const getServicesByAIScore = (minScore: number): InnovativeService[]  => {;
  return INNOVATIVE_SERVICES_2025.filter(service => service.aiScore >= minScore)};
=======
export const getServicesByCategory = (category: string): InnovativeService2025[] => {;
  return INNOVATIVE_SERVICES_2025.filter(service => service.category === category);
};

export const getServicesByPriceRange = (minPrice: number, maxPrice: number): InnovativeService2025[] => {;
  return INNOVATIVE_SERVICES_2025.filter(service => service.price >= minPrice && service.price <= maxPrice);
};

export const getTopRatedServices = (limit: number = 5): InnovativeService2025[] => {;
  return INNOVATIVE_SERVICES_2025;
    .sort((a, b) => b.rating - a.rating);
    .slice(0, limit);
};

export const getServicesByAIScore = (minScore: number): InnovativeService2025[] => {;
  return INNOVATIVE_SERVICES_2025.filter(service => service.aiScore >= minScore);
};
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
