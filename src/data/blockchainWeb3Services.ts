export interface BlockchainWeb3Service {
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

export const BLOCKCHAIN_WEB3_SERVICES: BlockchainWeb3Service[] = [
  // DeFi Lending Platform
  {
    id: "defi-lending-platform",
    title: "DeFi Lending & Borrowing Platform",
    description: "Decentralized finance platform that enables peer-to-peer lending and borrowing with smart contracts, automated risk assessment, and yield optimization using advanced DeFi protocols.",
    category: "Blockchain & DeFi",
    subcategory: "Lending & Borrowing",
    price: 4200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Smart contract-based lending",
      "Automated risk assessment",
      "Yield optimization algorithms",
      "Multi-collateral support",
      "Liquidity pools",
      "Interest rate optimization",
      "Cross-chain compatibility",
      "Mobile app support"
    ],
    benefits: [
      "Eliminate traditional banking fees",
      "Higher interest rates for lenders",
      "Lower borrowing costs",
      "24/7 automated operations",
      "Transparent and auditable"
    ],
    useCases: [
      "Personal lending",
      "Business financing",
      "Yield farming",
      "Liquidity provision",
      "Cross-border transactions"
    ],
    targetAudience: [
      "Individual investors",
      "Small businesses",
      "DeFi enthusiasts",
      "Crypto traders",
      "Financial institutions"
    ],
    tags: ["Blockchain", "DeFi", "Lending", "Smart Contracts", "Yield Farming"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,200 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/defi-lending-platform"
  },

  // NFT Marketplace Platform
  {
    id: "nft-marketplace-platform",
    title: "NFT Marketplace & Creation Platform",
    description: "Comprehensive NFT platform for creating, buying, selling, and trading non-fungible tokens with advanced features like fractional ownership, royalty distribution, and cross-chain compatibility.",
    category: "Blockchain & NFTs",
    subcategory: "Marketplace",
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "NFT creation tools",
      "Multi-chain marketplace",
      "Fractional ownership",
      "Royalty distribution",
      "Auction system",
      "Social features",
      "Analytics dashboard",
      "Mobile app support"
    ],
    benefits: [
      "Monetize digital assets",
      "Global marketplace access",
      "Automated royalty collection",
      "Fractional investment opportunities",
      "Community engagement"
    ],
    useCases: [
      "Digital art sales",
      "Gaming assets",
      "Music NFTs",
      "Real estate tokens",
      "Collectibles trading"
    ],
    targetAudience: [
      "Artists and creators",
      "Gamers",
      "Collectors",
      "Investors",
      "Content creators"
    ],
    tags: ["Blockchain", "NFTs", "Marketplace", "Digital Assets", "Fractional Ownership"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium",
    marketPrice: "$2,800 - $7,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/nft-marketplace"
  },

  // DAO Governance Platform
  {
    id: "dao-governance-platform",
    title: "DAO Governance & Management Platform",
    description: "Decentralized autonomous organization platform that enables community governance, voting mechanisms, proposal management, and treasury management with transparent and auditable operations.",
    category: "Blockchain & DAOs",
    subcategory: "Governance",
    price: 3200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Proposal creation and voting",
      "Token-based governance",
      "Treasury management",
      "Multi-signature wallets",
      "Voting mechanisms",
      "Community forums",
      "Analytics and reporting",
      "Integration APIs"
    ],
    benefits: [
      "Transparent governance",
      "Community-driven decisions",
      "Automated execution",
      "Reduced administrative costs",
      "Global participation"
    ],
    useCases: [
      "Community governance",
      "Protocol governance",
      "Investment DAOs",
      "Social organizations",
      "Decentralized companies"
    ],
    targetAudience: [
      "DAO communities",
      "Protocol developers",
      "Investment groups",
      "Social organizations",
      "Decentralized projects"
    ],
    tags: ["Blockchain", "DAO", "Governance", "Voting", "Treasury Management"],
    estimatedDelivery: "6-10 weeks",
    supportLevel: "premium",
    marketPrice: "$3,200 - $8,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/dao-governance"
  },

  // Cross-Chain Bridge Platform
  {
    id: "cross-chain-bridge-platform",
    title: "Cross-Chain Bridge & Interoperability Platform",
    description: "Advanced cross-chain bridge platform that enables seamless asset transfers between different blockchain networks with enhanced security, liquidity optimization, and multi-chain support.",
    category: "Blockchain & Interoperability",
    subcategory: "Cross-Chain Bridges",
    price: 4500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-chain support",
      "Secure asset bridging",
      "Liquidity optimization",
      "Real-time monitoring",
      "Audit trails",
      "Risk management",
      "API integration",
      "Mobile support"
    ],
    benefits: [
      "Seamless cross-chain transfers",
      "Enhanced liquidity access",
      "Reduced transaction costs",
      "Multi-chain portfolio management",
      "Improved user experience"
    ],
    useCases: [
      "Asset transfers",
      "DeFi operations",
      "Cross-chain trading",
      "Portfolio diversification",
      "Liquidity provision"
    ],
    targetAudience: [
      "DeFi users",
      "Crypto traders",
      "Protocol developers",
      "Financial institutions",
      "Blockchain projects"
    ],
    tags: ["Blockchain", "Cross-Chain", "Interoperability", "Asset Transfer", "Liquidity"],
    estimatedDelivery: "10-14 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,500 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/cross-chain-bridge"
  },

  // Blockchain Identity Management
  {
    id: "blockchain-identity-management",
    title: "Blockchain Identity & Verification Platform",
    description: "Decentralized identity management platform that provides secure, verifiable digital identities with privacy protection, credential verification, and cross-platform compatibility.",
    category: "Blockchain & Identity",
    subcategory: "Digital Identity",
    price: 2200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Self-sovereign identity",
      "Credential verification",
      "Privacy protection",
      "Multi-factor authentication",
      "Cross-platform compatibility",
      "Audit trails",
      "API integration",
      "Mobile app support"
    ],
    benefits: [
      "Enhanced security",
      "Privacy protection",
      "Reduced fraud",
      "Streamlined verification",
      "User control over data"
    ],
    useCases: [
      "KYC/AML compliance",
      "Academic credentials",
      "Professional certifications",
      "Healthcare records",
      "Financial services"
    ],
    targetAudience: [
      "Financial institutions",
      "Healthcare providers",
      "Educational institutions",
      "Government agencies",
      "Enterprise companies"
    ],
    tags: ["Blockchain", "Identity Management", "Verification", "Privacy", "Security"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$2,200 - $6,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/blockchain-identity"
  },

  // Decentralized Storage Platform
  {
    id: "decentralized-storage-platform",
    title: "Decentralized Storage & File Sharing Platform",
    description: "Secure decentralized storage platform that uses blockchain technology to provide encrypted, distributed file storage with redundancy, access control, and cost-effective pricing.",
    category: "Blockchain & Storage",
    subcategory: "Decentralized Storage",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Distributed storage",
      "End-to-end encryption",
      "Access control",
      "File versioning",
      "Redundancy management",
      "Cost optimization",
      "API integration",
      "Mobile app support"
    ],
    benefits: [
      "Enhanced security",
      "Reduced costs",
      "High availability",
      "Data privacy",
      "Scalable storage"
    ],
    useCases: [
      "File storage",
      "Backup solutions",
      "Content delivery",
      "Data archiving",
      "Collaborative work"
    ],
    targetAudience: [
      "Businesses",
      "Developers",
      "Content creators",
      "IT professionals",
      "Individual users"
    ],
    tags: ["Blockchain", "Decentralized Storage", "File Sharing", "Encryption", "Security"],
    estimatedDelivery: "3-5 weeks",
    supportLevel: "premium",
    marketPrice: "$1,800 - $4,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/decentralized-storage"
  },

  // Blockchain Supply Chain Tracking
  {
    id: "blockchain-supply-chain-tracking",
    title: "Blockchain Supply Chain Tracking Platform",
    description: "End-to-end supply chain tracking platform that uses blockchain technology to provide transparent, immutable tracking of products from origin to destination with real-time visibility.",
    category: "Blockchain & Supply Chain",
    subcategory: "Tracking & Transparency",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Product tracking",
      "Supply chain mapping",
      "Quality assurance",
      "Compliance monitoring",
      "Real-time updates",
      "Analytics dashboard",
      "Integration APIs",
      "Mobile app support"
    ],
    benefits: [
      "Enhanced transparency",
      "Improved traceability",
      "Reduced fraud",
      "Better compliance",
      "Operational efficiency"
    ],
    useCases: [
      "Food safety",
      "Pharmaceutical tracking",
      "Luxury goods",
      "Electronics supply chain",
      "Automotive parts"
    ],
    targetAudience: [
      "Manufacturers",
      "Retailers",
      "Logistics providers",
      "Regulatory bodies",
      "Consumers"
    ],
    tags: ["Blockchain", "Supply Chain", "Tracking", "Transparency", "Traceability"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium",
    marketPrice: "$3,500 - $8,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/blockchain-supply-chain"
  },

  // DeFi Yield Aggregator
  {
    id: "defi-yield-aggregator",
    title: "DeFi Yield Aggregator & Optimization Platform",
    description: "Intelligent yield aggregator that automatically finds and optimizes the best DeFi yield opportunities across multiple protocols with risk management and portfolio rebalancing.",
    category: "Blockchain & DeFi",
    subcategory: "Yield Optimization",
    price: 3800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-protocol yield farming",
      "Automated rebalancing",
      "Risk management",
      "Portfolio optimization",
      "Performance analytics",
      "Gas optimization",
      "Mobile app support",
      "API integration"
    ],
    benefits: [
      "Maximize yields",
      "Automated optimization",
      "Risk diversification",
      "Reduced gas costs",
      "Portfolio management"
    ],
    useCases: [
      "Yield farming",
      "Portfolio optimization",
      "Risk management",
      "Automated investing",
      "DeFi strategies"
    ],
    targetAudience: [
      "DeFi users",
      "Crypto investors",
      "Yield farmers",
      "Portfolio managers",
      "Financial advisors"
    ],
    tags: ["Blockchain", "DeFi", "Yield Farming", "Portfolio Optimization", "Risk Management"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "premium",
    marketPrice: "$3,800 - $9,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/defi-yield-aggregator"
  }
];