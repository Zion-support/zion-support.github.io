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
  demoUrl?: string;
  documentationUrl?: string;
}

export const BLOCKCHAIN_WEB3_SERVICES_2025: BlockchainWeb3Service[] = [
  // DeFi Platform Development
  {
    id: 'defi-platform-development',
    title: 'DeFi Platform Development',
    description: 'Complete decentralized finance platform development including DEX, lending protocols, yield farming, and liquidity management solutions.',
    category: 'Blockchain & Web3',
    subcategory: 'DeFi',
    price: 25000,
    currency: '$',
    pricingModel: 'project',
    features: [
      'Decentralized exchange (DEX)',
      'Lending and borrowing protocols',
      'Yield farming mechanisms',
      'Liquidity pools management',
      'Smart contract development',
      'Token economics design',
      'Security audits',
      'Multi-chain support',
      'Mobile wallet integration',
      'Analytics dashboard',
      'Governance mechanisms',
      'Cross-chain bridges'
    ],
    benefits: [
      'Reduce development costs by 40%',
      'Accelerate time to market',
      'Enhanced security through audits',
      'Scalable DeFi infrastructure',
      'Multi-chain compatibility'
    ],
    useCases: [
      'Cryptocurrency exchanges',
      'Lending platforms',
      'Investment funds',
      'Financial institutions',
      'Startup projects'
    ],
    targetAudience: [
      'DeFi startups',
      'Cryptocurrency exchanges',
      'Financial institutions',
      'Investment funds',
      'Blockchain developers'
    ],
    tags: ['DeFi', 'Blockchain', 'Smart Contracts', 'DEX', 'Lending'],
    estimatedDelivery: '12-20 weeks',
    supportLevel: 'enterprise',
    marketPrice: '$25,000 - $150,000',
    roi: '300-800%',
    innovationLevel: 'Advanced',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['Solidity', 'Web3.js', 'React', 'Node.js', 'Ethereum', 'Polygon'],
      integrations: ['MetaMask', 'WalletConnect', 'Chainlink', 'Uniswap', 'Aave'],
      apiEndpoints: 100,
      uptime: '99.9%',
      security: ['Smart contract audits', 'Penetration testing', 'Multi-sig wallets']
    },
    competitors: ['ConsenSys', 'Chainlink Labs', 'OpenZeppelin', 'Truffle'],
    marketSize: '$50 billion',
    demoUrl: 'https://ziontechgroup.com/demo/defi',
    documentationUrl: 'https://ziontechgroup.com/docs/defi'
  },

  // NFT Marketplace Platform
  {
    id: 'nft-marketplace-platform',
    title: 'NFT Marketplace Platform',
    description: 'Complete NFT marketplace platform with minting, trading, auctions, and royalty distribution capabilities for digital assets.',
    category: 'Blockchain & Web3',
    subcategory: 'NFT',
    price: 18000,
    currency: '$',
    pricingModel: 'project',
    features: [
      'NFT minting and creation',
      'Marketplace trading',
      'Auction system',
      'Royalty distribution',
      'Multi-chain support',
      'Wallet integration',
      'Metadata management',
      'IPFS storage',
      'Analytics dashboard',
      'Creator tools',
      'Community features',
      'Mobile app'
    ],
    benefits: [
      'Monetize digital assets',
      'Reduce marketplace fees',
      'Enhanced creator control',
      'Cross-chain compatibility',
      'Scalable infrastructure'
    ],
    useCases: [
      'Art galleries',
      'Gaming companies',
      'Music labels',
      'Sports organizations',
      'Fashion brands'
    ],
    targetAudience: [
      'Artists and creators',
      'Gaming companies',
      'Entertainment brands',
      'Sports organizations',
      'Collectors'
    ],
    tags: ['NFT', 'Marketplace', 'Digital Assets', 'Blockchain', 'Web3'],
    estimatedDelivery: '10-16 weeks',
    supportLevel: 'premium',
    marketPrice: '$18,000 - $100,000',
    roi: '250-600%',
    innovationLevel: 'Advanced',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['Solidity', 'IPFS', 'React', 'Node.js', 'Ethereum', 'Polygon'],
      integrations: ['MetaMask', 'OpenSea API', 'IPFS', 'Arweave', 'WalletConnect'],
      apiEndpoints: 80,
      uptime: '99.9%',
      security: ['Smart contract audits', 'IPFS pinning', 'Metadata validation']
    },
    competitors: ['OpenSea', 'Rarible', 'Foundation', 'SuperRare'],
    marketSize: '$25 billion',
    demoUrl: 'https://ziontechgroup.com/demo/nft-marketplace',
    documentationUrl: 'https://ziontechgroup.com/docs/nft-marketplace'
  },

  // Smart Contract Development
  {
    id: 'smart-contract-development',
    title: 'Smart Contract Development Services',
    description: 'Professional smart contract development, auditing, and deployment services for blockchain applications and DeFi protocols.',
    category: 'Blockchain & Web3',
    subcategory: 'Smart Contracts',
    price: 8000,
    currency: '$',
    pricingModel: 'project',
    features: [
      'Custom smart contract development',
      'Security audits and testing',
      'Gas optimization',
      'Multi-chain deployment',
      'Upgradeable contracts',
      'Documentation and guides',
      'Testing frameworks',
      'Deployment automation',
      'Monitoring and analytics',
      'Emergency response',
      'Governance contracts',
      'Oracle integration'
    ],
    benefits: [
      'Reduce development time by 50%',
      'Enhanced security through audits',
      'Optimized gas costs',
      'Multi-chain compatibility',
      'Professional support'
    ],
    useCases: [
      'DeFi protocols',
      'Token launches',
      'DAO governance',
      'Supply chain tracking',
      'Identity verification'
    ],
    targetAudience: [
      'Blockchain startups',
      'DeFi projects',
      'Token issuers',
      'Enterprise clients',
      'Developers'
    ],
    tags: ['Smart Contracts', 'Solidity', 'Security', 'Auditing', 'Blockchain'],
    estimatedDelivery: '6-12 weeks',
    supportLevel: 'premium',
    marketPrice: '$8,000 - $50,000',
    roi: '200-500%',
    innovationLevel: 'Advanced',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['Solidity', 'Vyper', 'Hardhat', 'Truffle', 'OpenZeppelin'],
      integrations: ['Chainlink', 'IPFS', 'The Graph', 'Etherscan', 'Polygon'],
      apiEndpoints: 60,
      uptime: '99.9%',
      security: ['Formal verification', 'Penetration testing', 'Multi-sig deployment']
    },
    competitors: ['OpenZeppelin', 'ConsenSys Diligence', 'Trail of Bits', 'Quantstamp'],
    marketSize: '$15 billion',
    demoUrl: 'https://ziontechgroup.com/demo/smart-contracts',
    documentationUrl: 'https://ziontechgroup.com/docs/smart-contracts'
  },

  // Web3 Infrastructure
  {
    id: 'web3-infrastructure-platform',
    title: 'Web3 Infrastructure Platform',
    description: 'Comprehensive Web3 infrastructure platform providing node services, API endpoints, and development tools for blockchain applications.',
    category: 'Blockchain & Web3',
    subcategory: 'Infrastructure',
    price: 1200,
    currency: '$',
    pricingModel: 'monthly',
    features: [
      'Multi-chain node services',
      'API endpoints and SDKs',
      'Real-time data feeds',
      'Transaction monitoring',
      'Gas price optimization',
      'Webhook notifications',
      'Analytics dashboard',
      'Developer tools',
      'Documentation and guides',
      'Support and maintenance',
      'Scalable infrastructure',
      'High availability'
    ],
    benefits: [
      'Reduce infrastructure costs by 60%',
      'Improve development speed',
      'Enhanced reliability',
      'Multi-chain support',
      'Professional support'
    ],
    useCases: [
      'DeFi applications',
      'NFT marketplaces',
      'DEX platforms',
      'Gaming applications',
      'Enterprise blockchain'
    ],
    targetAudience: [
      'Blockchain developers',
      'DeFi projects',
      'Gaming companies',
      'Enterprise clients',
      'Startups'
    ],
    tags: ['Web3', 'Infrastructure', 'API', 'Nodes', 'Blockchain'],
    estimatedDelivery: '2-4 weeks',
    supportLevel: 'premium',
    marketPrice: '$1,200 - $5,000/month',
    roi: '150-300%',
    innovationLevel: 'Advanced',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['Ethereum', 'Polygon', 'BSC', 'Solana', 'Rust', 'Go'],
      integrations: ['MetaMask', 'WalletConnect', 'Chainlink', 'The Graph'],
      apiEndpoints: 200,
      uptime: '99.99%',
      security: ['DDoS protection', 'Rate limiting', 'API authentication']
    },
    competitors: ['Alchemy', 'Infura', 'QuickNode', 'Moralis'],
    marketSize: '$8 billion',
    demoUrl: 'https://ziontechgroup.com/demo/web3-infrastructure',
    documentationUrl: 'https://ziontechgroup.com/docs/web3-infrastructure'
  },

  // DAO Governance Platform
  {
    id: 'dao-governance-platform',
    title: 'DAO Governance Platform',
    description: 'Complete DAO governance platform with voting mechanisms, proposal management, and treasury management for decentralized organizations.',
    category: 'Blockchain & Web3',
    subcategory: 'DAO',
    price: 15000,
    currency: '$',
    pricingModel: 'project',
    features: [
      'Proposal creation and voting',
      'Token-weighted voting',
      'Quadratic voting',
      'Treasury management',
      'Multi-signature wallets',
      'Governance token distribution',
      'Voting analytics',
      'Community forums',
      'Integration APIs',
      'Mobile app',
      'Documentation system',
      'Emergency procedures'
    ],
    benefits: [
      'Enable decentralized governance',
      'Improve community engagement',
      'Transparent decision making',
      'Secure treasury management',
      'Scalable governance'
    ],
    useCases: [
      'DeFi protocols',
      'Investment DAOs',
      'Social DAOs',
      'Gaming guilds',
      'Community organizations'
    ],
    targetAudience: [
      'DeFi protocols',
      'Investment groups',
      'Community organizations',
      'Gaming companies',
      'Startup projects'
    ],
    tags: ['DAO', 'Governance', 'Voting', 'Treasury', 'Blockchain'],
    estimatedDelivery: '8-14 weeks',
    supportLevel: 'enterprise',
    marketPrice: '$15,000 - $80,000',
    roi: '200-500%',
    innovationLevel: 'Advanced',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['Solidity', 'React', 'Node.js', 'Ethereum', 'IPFS'],
      integrations: ['Snapshot', 'Gnosis Safe', 'Discord', 'Discourse', 'Telegram'],
      apiEndpoints: 70,
      uptime: '99.9%',
      security: ['Multi-sig wallets', 'Timelock contracts', 'Emergency procedures']
    },
    competitors: ['Snapshot', 'Aragon', 'Colony', 'DAOstack'],
    marketSize: '$12 billion',
    demoUrl: 'https://ziontechgroup.com/demo/dao-governance',
    documentationUrl: 'https://ziontechgroup.com/docs/dao-governance'
  }
];