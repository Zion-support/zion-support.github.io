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
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[];
  };
  competitors?: string[];
  marketSize?: string;
}

export const BLOCKCHAIN_WEB3_SERVICES_2025: BlockchainWeb3Service[] = [
  // Decentralized Identity Management Platform
  {
    id: "decentralized-identity-management",
    title: "Decentralized Identity Management Platform",
    description: "Revolutionary blockchain-based identity management system that gives users complete control over their digital identity while ensuring privacy, security, and interoperability across platforms.",
    category: "Blockchain & Web3",
    subcategory: "Identity Management",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Self-sovereign identity",
      "Zero-knowledge proofs",
      "Cross-platform authentication",
      "Privacy-preserving verification",
      "Decentralized storage",
      "Biometric integration",
      "Multi-signature wallets",
      "Identity recovery",
      "Compliance tools",
      "API integration"
    ],
    benefits: [
      "Eliminate identity theft",
      "Reduce verification costs by 80%",
      "Improve user privacy",
      "Enable seamless authentication",
      "Ensure regulatory compliance"
    ],
    useCases: [
      "Digital banking",
      "Healthcare records",
      "Government services",
      "E-commerce verification",
      "Social media authentication"
    ],
    targetAudience: [
      "Financial institutions",
      "Healthcare providers",
      "Government agencies",
      "E-commerce platforms",
      "Identity verification services"
    ],
    tags: ["Blockchain", "Web3", "Identity", "Privacy", "Security"],
    estimatedDelivery: "10-14 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,999 - $7,999/month",
    roi: "400-600%",
    innovationLevel: "Cutting-edge",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Ethereum", "IPFS", "Solidity", "React", "Node.js"],
      integrations: ["OAuth 2.0", "SAML", "OpenID Connect", "FIDO2", "WebAuthn"],
      apiEndpoints: 80,
      uptime: "99.9%",
      security: ["Zero-knowledge proofs", "End-to-end encryption", "Multi-signature", "Hardware security modules"]
    },
    competitors: ["Microsoft Entra", "Okta", "Auth0", "Civic", "SelfKey"],
    marketSize: "$15.6 billion by 2025"
  },

  // NFT Marketplace & Management Platform
  {
    id: "nft-marketplace-management",
    title: "NFT Marketplace & Management Platform",
    description: "Comprehensive NFT marketplace with advanced features including lazy minting, royalty management, cross-chain support, and AI-powered content verification for creators and collectors.",
    category: "Blockchain & Web3",
    subcategory: "NFT Platform",
    price: 2999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-chain support",
      "Lazy minting",
      "Royalty management",
      "AI content verification",
      "Auction system",
      "Bulk operations",
      "Analytics dashboard",
      "Creator tools",
      "Mobile app",
      "API access"
    ],
    benefits: [
      "Reduce minting costs by 90%",
      "Increase creator revenue by 200%",
      "Prevent fraud and plagiarism",
      "Enable cross-chain trading",
      "Streamline NFT operations"
    ],
    useCases: [
      "Digital art marketplaces",
      "Gaming NFTs",
      "Music and entertainment",
      "Real estate tokens",
      "Collectibles trading"
    ],
    targetAudience: [
      "Digital artists",
      "Gaming companies",
      "Entertainment industry",
      "Real estate developers",
      "Collectors and traders"
    ],
    tags: ["NFT", "Blockchain", "Marketplace", "Digital Assets", "Web3"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,999 - $9,999/month",
    roi: "500-800%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Ethereum", "Polygon", "IPFS", "React", "Web3.js"],
      integrations: ["OpenSea", "Rarible", "Foundation", "SuperRare", "Magic Eden"],
      apiEndpoints: 120,
      uptime: "99.9%",
      security: ["Smart contract audits", "Multi-signature wallets", "Content verification", "Anti-fraud systems"]
    },
    competitors: ["OpenSea", "Rarible", "Foundation", "SuperRare", "Magic Eden"],
    marketSize: "$13.6 billion by 2025"
  },

  // DeFi Yield Farming Optimizer
  {
    id: "defi-yield-farming-optimizer",
    title: "DeFi Yield Farming Optimizer",
    description: "Intelligent DeFi platform that automatically finds and executes the most profitable yield farming strategies across multiple protocols while managing risk and gas optimization.",
    category: "Blockchain & Web3",
    subcategory: "DeFi",
    price: 3999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-protocol support",
      "Automated strategy execution",
      "Risk management",
      "Gas optimization",
      "Yield compounding",
      "Liquidity management",
      "Portfolio tracking",
      "Tax reporting",
      "Mobile app",
      "API integration"
    ],
    benefits: [
      "Maximize yield returns by 300%",
      "Reduce gas costs by 60%",
      "Automate complex strategies",
      "Minimize impermanent loss",
      "Optimize portfolio allocation"
    ],
    useCases: [
      "Yield farming",
      "Liquidity provision",
      "Automated trading",
      "Portfolio management",
      "Risk hedging"
    ],
    targetAudience: [
      "DeFi investors",
      "Crypto traders",
      "Institutional investors",
      "Yield farmers",
      "Portfolio managers"
    ],
    tags: ["DeFi", "Yield Farming", "Automation", "Crypto", "Web3"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,999 - $15,999/month",
    roi: "600-1000%",
    innovationLevel: "Cutting-edge",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Ethereum", "Polygon", "Arbitrum", "Python", "Web3.py"],
      integrations: ["Uniswap", "Compound", "Aave", "Curve", "Yearn Finance"],
      apiEndpoints: 200,
      uptime: "99.99%",
      security: ["Multi-signature wallets", "Smart contract audits", "Risk management", "Insurance protocols"]
    },
    competitors: ["Yearn Finance", "Harvest Finance", "Beefy Finance", "AutoFarm", "PancakeSwap"],
    marketSize: "$8.9 billion by 2025"
  },

  // Smart Contract Development & Audit Platform
  {
    id: "smart-contract-development-audit",
    title: "Smart Contract Development & Audit Platform",
    description: "Comprehensive platform for developing, testing, deploying, and auditing smart contracts with AI-powered security analysis and automated testing capabilities.",
    category: "Blockchain & Web3",
    subcategory: "Development Tools",
    price: 2499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Visual contract builder",
      "AI security analysis",
      "Automated testing",
      "Gas optimization",
      "Multi-chain deployment",
      "Upgradeable contracts",
      "Documentation generator",
      "Version control",
      "Team collaboration",
      "API integration"
    ],
    benefits: [
      "Reduce development time by 70%",
      "Prevent security vulnerabilities",
      "Optimize gas costs",
      "Ensure code quality",
      "Streamline deployment process"
    ],
    useCases: [
      "DApp development",
      "DeFi protocols",
      "NFT projects",
      "DAO governance",
      "Enterprise blockchain"
    ],
    targetAudience: [
      "Blockchain developers",
      "Smart contract auditors",
      "DeFi projects",
      "Enterprise teams",
      "Startup founders"
    ],
    tags: ["Smart Contracts", "Development", "Security", "Audit", "Web3"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,499 - $7,999/month",
    roi: "400-600%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Solidity", "Vyper", "Hardhat", "Truffle", "OpenZeppelin"],
      integrations: ["GitHub", "Slack", "Discord", "Telegram", "Email"],
      apiEndpoints: 100,
      uptime: "99.9%",
      security: ["Code analysis", "Vulnerability scanning", "Automated testing", "Security best practices"]
    },
    competitors: ["OpenZeppelin", "ConsenSys", "Quantstamp", "CertiK", "Trail of Bits"],
    marketSize: "$4.2 billion by 2025"
  }
];