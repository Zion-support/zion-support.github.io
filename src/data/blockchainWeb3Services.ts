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
  // DeFi Platform Development
  {
    id: "defi-platform-development",
    title: "DeFi Platform Development Suite",
    description: "Complete DeFi platform development solution including smart contracts, yield farming protocols, liquidity pools, and decentralized exchange functionality with advanced security features.",
    category: "Blockchain & Web3",
    subcategory: "DeFi Development",
    price: 8500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Smart contract development",
      "Yield farming protocols",
      "Liquidity pool management",
      "DEX functionality",
      "Staking mechanisms",
      "Governance tokens",
      "Security auditing",
      "Multi-chain support"
    ],
    benefits: [
      "Launch DeFi protocols quickly",
      "Enhanced security with audits",
      "Scalable architecture",
      "Multi-chain compatibility",
      "Regulatory compliance ready"
    ],
    useCases: [
      "DeFi startups",
      "Cryptocurrency exchanges",
      "Investment platforms",
      "Financial institutions",
      "Blockchain companies"
    ],
    targetAudience: [
      "DeFi entrepreneurs",
      "Blockchain developers",
      "Financial institutions",
      "Investment firms",
      "Crypto startups"
    ],
    tags: ["DeFi", "Blockchain", "Smart Contracts", "Cryptocurrency", "Web3"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$8,500 - $25,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/defi-development"
  },

  // NFT Marketplace Platform
  {
    id: "nft-marketplace-platform",
    title: "NFT Marketplace Platform",
    description: "Complete NFT marketplace solution with minting, trading, auction, and royalty distribution features, supporting multiple blockchain networks and digital asset types.",
    category: "Blockchain & Web3",
    subcategory: "NFT Solutions",
    price: 6500,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "NFT minting tools",
      "Marketplace functionality",
      "Auction system",
      "Royalty distribution",
      "Multi-wallet support",
      "Metadata management",
      "Analytics dashboard",
      "Mobile app support"
    ],
    benefits: [
      "Launch NFT marketplace quickly",
      "Multiple blockchain support",
      "Automated royalty payments",
      "Enhanced user experience",
      "Scalable architecture"
    ],
    useCases: [
      "Art galleries",
      "Gaming companies",
      "Music labels",
      "Sports organizations",
      "Digital creators"
    ],
    targetAudience: [
      "Digital artists",
      "Content creators",
      "Gaming companies",
      "Entertainment businesses",
      "Brands and marketers"
    ],
    tags: ["NFT", "Blockchain", "Digital Assets", "Marketplace", "Web3"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "premium",
    marketPrice: "$6,500 - $18,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/nft-marketplace"
  },

  // Smart Contract Development
  {
    id: "smart-contract-development",
    title: "Enterprise Smart Contract Development",
    description: "Professional smart contract development services for businesses looking to leverage blockchain technology for supply chain, identity verification, and automated business processes.",
    category: "Blockchain & Web3",
    subcategory: "Smart Contracts",
    price: 3200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Custom smart contract development",
      "Security auditing",
      "Gas optimization",
      "Multi-chain deployment",
      "Testing and validation",
      "Documentation",
      "Maintenance support",
      "Upgrade mechanisms"
    ],
    benefits: [
      "Automated business processes",
      "Enhanced transparency",
      "Reduced operational costs",
      "Improved security",
      "Regulatory compliance"
    ],
    useCases: [
      "Supply chain management",
      "Identity verification",
      "Voting systems",
      "Asset tokenization",
      "Automated compliance"
    ],
    targetAudience: [
      "Enterprise businesses",
      "Government agencies",
      "Financial institutions",
      "Healthcare organizations",
      "Manufacturing companies"
    ],
    tags: ["Smart Contracts", "Blockchain", "Automation", "Security", "Enterprise"],
    estimatedDelivery: "4-8 weeks",
    supportLevel: "premium",
    marketPrice: "$3,200 - $8,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/smart-contracts"
  },

  // Web3 Identity Solution
  {
    id: "web3-identity-solution",
    title: "Web3 Identity and Access Management",
    description: "Decentralized identity solution that provides self-sovereign identity management, zero-knowledge proofs, and secure authentication without centralized authorities.",
    category: "Blockchain & Web3",
    subcategory: "Identity Management",
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Self-sovereign identity",
      "Zero-knowledge proofs",
      "Decentralized identifiers",
      "Credential verification",
      "Privacy-preserving authentication",
      "Multi-factor security",
      "API integration",
      "Compliance tools"
    ],
    benefits: [
      "Enhanced privacy protection",
      "Reduced identity fraud",
      "User control over data",
      "Regulatory compliance",
      "Interoperable standards"
    ],
    useCases: [
      "Financial services",
      "Healthcare",
      "Government services",
      "Education",
      "E-commerce"
    ],
    targetAudience: [
      "Identity providers",
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Technology companies"
    ],
    tags: ["Web3", "Identity", "Privacy", "Authentication", "Blockchain"],
    estimatedDelivery: "6-10 weeks",
    supportLevel: "premium",
    marketPrice: "$2,800 - $7,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/web3-identity"
  },

  // Blockchain Supply Chain Solution
  {
    id: "blockchain-supply-chain",
    title: "Blockchain Supply Chain Transparency Platform",
    description: "End-to-end supply chain visibility platform using blockchain technology to track products, verify authenticity, and ensure compliance across global supply networks.",
    category: "Blockchain & Web3",
    subcategory: "Supply Chain",
    price: 3800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Product tracking",
      "Authenticity verification",
      "Compliance monitoring",
      "Smart contracts",
      "Real-time visibility",
      "Audit trails",
      "Integration APIs",
      "Analytics dashboard"
    ],
    benefits: [
      "End-to-end transparency",
      "Reduced fraud",
      "Improved compliance",
      "Enhanced traceability",
      "Cost optimization"
    ],
    useCases: [
      "Food safety",
      "Pharmaceuticals",
      "Luxury goods",
      "Electronics",
      "Automotive"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Retail chains",
      "Logistics providers",
      "Regulatory bodies",
      "Consumer brands"
    ],
    tags: ["Blockchain", "Supply Chain", "Transparency", "Compliance", "Traceability"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,800 - $10,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/blockchain-supply-chain"
  }
];