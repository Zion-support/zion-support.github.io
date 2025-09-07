<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  ShieldCheckIcon, 
  CurrencyDollarIcon, 
  CpuChipIcon, 
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  LockClosedIcon,
  GlobeAltIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Blockchain Solutions | Zion Tech Group - Smart Contracts & DeFi Development',
  description: 'Comprehensive blockchain solutions including smart contracts, DeFi protocols, NFT marketplaces, and blockchain integration services.',
  keywords: 'blockchain development, smart contracts, DeFi, NFT marketplace, token economics, blockchain consulting',
};

const blockchainServices = [
  {
    name: 'Smart Contract Development',
    description: 'Secure, audited smart contracts for various blockchain platforms including Ethereum, Polygon, and BSC.',
    icon: DocumentTextIcon,
    features: [
      'Ethereum smart contracts',
      'Polygon & BSC development',
      'Security auditing',
      'Gas optimization',
      'Upgradeable contracts',
      'Multi-signature wallets'
    ],
    pricing: '$15,000 - $75,000',
    timeline: '4-12 weeks',
    useCases: ['DeFi Protocols', 'NFT Contracts', 'Token Contracts', 'DAO Governance'],
    href: '/services/smart-contracts'
  },
  {
    name: 'DeFi Platform Development',
    description: 'Complete DeFi platforms including DEXs, lending protocols, yield farming, and liquidity management.',
    icon: CurrencyDollarIcon,
    features: [
      'Decentralized exchanges (DEX)',
      'Lending and borrowing protocols',
      'Yield farming platforms',
      'Liquidity pools',
      'Automated market makers',
      'Cross-chain bridges'
    ],
    pricing: '$50,000 - $200,000',
    timeline: '12-24 weeks',
    useCases: ['DEX Platforms', 'Lending Protocols', 'Yield Farming', 'Liquidity Mining'],
    href: '/services/defi-platforms'
  },
  {
    name: 'NFT Marketplace Development',
    description: 'Custom NFT marketplaces with minting, trading, and auction capabilities for various use cases.',
    icon: GlobeAltIcon,
    features: [
      'NFT minting and trading',
      'Auction mechanisms',
      'Royalty management',
      'Multi-chain support',
      'Creator tools',
      'Analytics dashboard'
    ],
    pricing: '$25,000 - $100,000',
    timeline: '8-16 weeks',
    useCases: ['Art Marketplaces', 'Gaming NFTs', 'Collectibles', 'Digital Real Estate'],
    href: '/services/nft-marketplaces'
  },
  {
    name: 'Token Economics & ICO/IDO',
    description: 'Comprehensive tokenomics design, token development, and launch strategies for successful token launches.',
    icon: ChartBarIcon,
    features: [
      'Tokenomics design',
      'Token development',
      'ICO/IDO launch',
      'Vesting mechanisms',
      'Governance tokens',
      'Launch strategy'
    ],
    pricing: '$20,000 - $80,000',
    timeline: '6-14 weeks',
    useCases: ['Utility Tokens', 'Governance Tokens', 'Security Tokens', 'Memecoins'],
    href: '/services/token-economics'
  },
  {
    name: 'Blockchain Integration',
    description: 'Integrate blockchain technology into existing systems and applications for enhanced security and transparency.',
    icon: CpuChipIcon,
    features: [
      'Web3 integration',
      'Wallet connectivity',
      'API development',
      'Backend integration',
      'Database synchronization',
      'Real-time updates'
    ],
    pricing: '$10,000 - $40,000',
    timeline: '4-10 weeks',
    useCases: ['Web3 Apps', 'Enterprise Integration', 'Supply Chain', 'Identity Management'],
    href: '/services/blockchain-integration'
  },
  {
    name: 'Blockchain Security Auditing',
    description: 'Comprehensive security audits and penetration testing for smart contracts and blockchain applications.',
    icon: LockClosedIcon,
    features: [
      'Smart contract auditing',
      'Penetration testing',
      'Vulnerability assessment',
      'Code review',
      'Security recommendations',
      'Compliance checking'
    ],
    pricing: '$5,000 - $25,000',
    timeline: '2-6 weeks',
    useCases: ['Pre-Launch Audits', 'Security Reviews', 'Compliance Audits', 'Vulnerability Assessment'],
    href: '/services/blockchain-security'
  }
];

const platforms = [
  {
    name: 'Ethereum',
    description: 'The leading smart contract platform with the largest ecosystem',
    icon: '🔷',
    features: ['Smart Contracts', 'DeFi', 'NFTs', 'DAOs']
  },
  {
    name: 'Polygon',
    description: 'Ethereum-compatible sidechain with low fees and fast transactions',
    icon: '🟣',
    features: ['Low Gas Fees', 'Fast Transactions', 'Ethereum Compatible', 'Scalable']
  },
  {
    name: 'Binance Smart Chain',
    description: 'High-performance blockchain with low transaction costs',
    icon: '🟡',
    features: ['Low Fees', 'Fast Finality', 'EVM Compatible', 'High Throughput']
  },
  {
    name: 'Solana',
    description: 'High-speed blockchain with sub-second transaction times',
    icon: '🟢',
    features: ['High Speed', 'Low Costs', 'Scalable', 'Rust-based']
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Blockchain Strategy',
    description: 'Define your blockchain strategy and choose the right platform for your use case.',
    icon: DocumentTextIcon
  },
  {
    step: '02',
    title: 'Architecture Design',
    description: 'Design the technical architecture and smart contract specifications.',
    icon: CpuChipIcon
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'Develop smart contracts and applications with comprehensive testing.',
    icon: ShieldCheckIcon
  },
  {
    step: '04',
    title: 'Security Auditing',
    description: 'Conduct thorough security audits and penetration testing.',
    icon: LockClosedIcon
  },
  {
    step: '05',
    title: 'Deployment & Launch',
    description: 'Deploy to mainnet and launch your blockchain solution.',
    icon: GlobeAltIcon
  }
];

export default function BlockchainPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Blockchain Solutions
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto">
              Build secure, scalable blockchain solutions including smart contracts, DeFi protocols, 
              NFT marketplaces, and custom blockchain integrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Blockchain Project
                <ArrowRightIcon className="inline-block h-5 w-5 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-200"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Blockchain Services Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Blockchain Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive blockchain development services from smart contracts to complete DeFi platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blockchainServices.map((service) => (
              <div key={service.name} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="h-12 w-12" />
                    <div className="text-right">
                      <div className="text-2xl font-bold">{service.pricing}</div>
                      <div className="text-sm opacity-90">{service.timeline}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                  <p className="text-indigo-100 leading-relaxed">{service.description}</p>
                </div>
                
                <div className="p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, index) => (
                        <span key={index} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href={service.href}
                    className="inline-flex items-center w-full justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                  >
                    Learn More
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Supported Platforms */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Supported Blockchain Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We develop on all major blockchain platforms to ensure your solution reaches the right audience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform) => (
              <div key={platform.name} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{platform.name}</h3>
                <p className="text-gray-600 mb-4">{platform.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {platform.features.map((feature, index) => (
                    <span key={index} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Process */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Blockchain Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering secure, audited blockchain solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 text-xl font-bold">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-gray-200"></div>
                  )}
                </div>
                <div className="inline-flex p-3 rounded-full bg-gray-100 mb-4">
                  <step.icon className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build on Blockchain?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your blockchain project and create a secure, scalable solution. 
            Our team has delivered 100+ successful blockchain projects across various industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Project
              <ArrowRightIcon className="inline-block h-5 w-5 ml-2" />
            </Link>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-200"
            >
              Email kleber@ziontechgroup.com
            </a>
=======
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

<<<<<<< HEAD
<<<<<<< HEAD
export const metadata = { 
title: 'Blockchain Services | Zion Tech Group',
  description: 'Comprehensive blockchain development services including smart contracts, DeFi protocols, NFT platforms, and enterprise blockchain solutions.',
  keywords: 'blockchain development, smart contracts, DeFi, NFT, Web3, cryptocurrency, enterprise blockchain, dApp development'
=======
// eslint-disable-next-line react-refresh/only-export-components
export const metadata = {
<<<<<<< HEAD
<<<<<<< HEAD
  title: 'Blockchain Solutions | Zion Tech Group',
  description: 'Professional blockchain development services including smart contracts, DeFi, NFTs, and Web3 applications.',
  keywords: 'blockchain, smart contracts, DeFi, NFTs, Web3, cryptocurrency, ethereum, polygon'
=======
  title: 'Blockchain - Zion Tech Group',
  description: 'Professional blockchain solutions for your business needs.',
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
=======
  title: 'Blockchain Solutions - Zion Tech Group',
  description: 'Advanced blockchain solutions and services for modern businesses.',
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-c074
=======

>>>>>>> 96a1f382319a97880a21e7ceb65ec0821c9ac17f
};

export default function ServicePage() {
  return (
<div className="animate-fade-in">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Blockchain Services
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Build the future of decentralized applications with our comprehensive blockchain development services. 
          From smart contracts to DeFi protocols, we help you create secure, scalable Web3 solutions.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Blockchain Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlockchainServiceCard
            title="Smart Contract Development"
            description="Secure, audited smart contracts for various blockchain platforms"
            features={["Solidity development", "Security auditing", "Gas optimization", "Multi-chain support", "Upgradeable contracts"]}
            price="$8,000-25,000"
            icon="📜"
          />
          <BlockchainServiceCard
            title="DeFi Protocol Development"
            description="Decentralized finance protocols including DEXs, lending, and yield farming"
            features={["AMM protocols", "Lending platforms", "Yield farming", "Liquidity mining", "Governance tokens"]}
            price="$25,000-100,000"
            icon="💰"
          />
          <BlockchainServiceCard
            title="NFT Marketplace & Platform"
            description="Complete NFT ecosystems with minting, trading, and marketplace functionality"
            features={["NFT minting", "Marketplace development", "Royalty systems", "Metadata management", "IPFS integration"]}
            price="$15,000-50,000"
            icon="🎨"
          />
          <BlockchainServiceCard
            title="dApp Development"
            description="Decentralized applications with Web3 integration and user-friendly interfaces"
            features={["Frontend development", "Web3 integration", "Wallet connectivity", "User authentication", "Transaction management"]}
            price="$12,000-40,000"
            icon="🌐"
          />
          <BlockchainServiceCard
            title="Enterprise Blockchain"
            description="Private and consortium blockchain solutions for enterprise use cases"
            features={["Hyperledger Fabric", "Ethereum Enterprise", "Consortium setup", "Permission management", "Integration APIs"]}
            price="$20,000-75,000"
            icon="🏢"
          />
          <BlockchainServiceCard
            title="Token Development & ICO"
            description="Custom token creation and initial coin offering development"
            features={["ERC-20/721/1155 tokens", "ICO platform", "Tokenomics design", "Vesting contracts", "Compliance tools"]}
            price="$10,000-30,000"
            icon="🪙"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Blockchain Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BlockchainProcessStep
            step="1"
            title="Concept & Design"
            description="Define tokenomics, architecture, and technical specifications"
          />
          <BlockchainProcessStep
            step="2"
            title="Smart Contract Development"
            description="Write, test, and optimize smart contracts for security and efficiency"
          />
          <BlockchainProcessStep
            step="3"
            title="Frontend & Integration"
            description="Build user interfaces and integrate with blockchain networks"
          />
          <BlockchainProcessStep
            step="4"
            title="Testing & Deployment"
            description="Comprehensive testing, auditing, and mainnet deployment"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Blockchain Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlockchainTechStack
            title="Blockchain Platforms"
            technologies={["Ethereum", "Polygon", "Binance Smart Chain", "Solana", "Avalanche"]}
          />
          <BlockchainTechStack
            title="Development Tools"
            technologies={["Hardhat", "Truffle", "Remix", "OpenZeppelin", "Web3.js"]}
          />
          <BlockchainTechStack
            title="Frontend & Web3"
            technologies={["React", "Next.js", "Web3.js", "Ethers.js", "MetaMask"]}
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Blockchain Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlockchainUseCase
            title="Supply Chain"
            description="Transparent and traceable supply chain management"
            examples={["Product tracking", "Authenticity verification", "Quality assurance", "Compliance reporting"]}
            icon="📦"
          />
          <BlockchainUseCase
            title="Digital Identity"
            description="Self-sovereign identity and credential management"
            examples={["KYC/AML compliance", "Credential verification", "Privacy protection", "Cross-platform identity"]}
            icon="🆔"
          />
          <BlockchainUseCase
            title="Gaming & Metaverse"
            description="Play-to-earn games and virtual world economies"
            examples={["Game assets", "Virtual land", "In-game currencies", "Player rewards"]}
            icon="🎮"
          />
          <BlockchainUseCase
            title="Real Estate"
            description="Property tokenization and fractional ownership"
            examples={["Property tokens", "Fractional ownership", "Rental income", "Property trading"]}
            icon="🏠"
          />
          <BlockchainUseCase
            title="Healthcare"
            description="Secure patient data and medical record management"
            examples={["Patient records", "Drug traceability", "Clinical trials", "Insurance claims"]}
            icon="🏥"
          />
          <BlockchainUseCase
            title="Finance"
            description="Decentralized financial services and products"
            examples={["Cross-border payments", "Microfinance", "Insurance", "Credit scoring"]}
            icon="💳"
          />
        </div>
      </section>

      <Pricing />
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Blockchain Services?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlockchainBenefitCard
            title="Security First"
            description="Comprehensive security audits and best practices for smart contracts"
            icon="🔒"
          />
          <BlockchainBenefitCard
            title="Multi-Chain Expertise"
            description="Experience across multiple blockchain platforms and networks"
            icon="⛓️"
          />
          <BlockchainBenefitCard
            title="Gas Optimization"
            description="Efficient smart contracts that minimize transaction costs"
            icon="⚡"
          />
          <BlockchainBenefitCard
            title="Regulatory Compliance"
            description="Understanding of regulatory requirements and compliance frameworks"
            icon="📋"
          />
          <BlockchainBenefitCard
            title="User Experience"
            description="Intuitive interfaces that make Web3 accessible to everyone"
            icon="👥"
          />
          <BlockchainBenefitCard
            title="Ongoing Support"
            description="Continuous maintenance and updates for your blockchain solutions"
            icon="🛠️"
          />
        </div>
      </section>

      <CTASection />
    </div>
  );
}

title: 'Blockchain Solutions | Zion Tech Group',
  description: 'Comprehensive blockchain development services including smart contracts, DeFi applications, NFT platforms, and enterprise blockchain solutions.'
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
};

export default function BlockchainPage() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Blockchain Solutions
=======
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Blockchain
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
=======
    <div className="animate-fade-in">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Blockchain Solutions</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl">
          Build the future with blockchain technology. From smart contracts to DeFi applications, 
          we create secure, scalable blockchain solutions that drive innovation and value.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <BlockchainServiceCard
            title="Smart Contract Development"
            description="Secure, audited smart contracts for DeFi, NFTs, and enterprise applications"
            features={["Solidity development", "Security auditing", "Gas optimization", "Testing frameworks"]}
            price="$15k-$50k"
            timeline="3-8 weeks"
            icon="📜"
          />
          <BlockchainServiceCard
            title="DeFi Platform Development"
            description="Decentralized finance applications including DEXs, lending protocols, and yield farming"
            features={["DEX development", "Liquidity pools", "Yield farming", "Governance tokens"]}
            price="$30k-$100k"
            timeline="6-16 weeks"
            icon="🏦"
          />
          <BlockchainServiceCard
            title="NFT Marketplace & Platform"
            description="Complete NFT marketplace with minting, trading, and royalty management"
            features={["NFT minting", "Marketplace UI", "Royalty system", "Metadata management"]}
            price="$25k-$80k"
            timeline="4-12 weeks"
            icon="🎨"
          />
          <BlockchainServiceCard
            title="Enterprise Blockchain Solutions"
            description="Private blockchain networks and enterprise-grade distributed ledger solutions"
            features={["Private networks", "Consensus mechanisms", "Enterprise integration", "Compliance"]}
            price="$40k-$150k"
            timeline="8-20 weeks"
            icon="🏢"
          />
          <BlockchainServiceCard
            title="Web3 Integration & APIs"
            description="Connect traditional applications with blockchain networks and Web3 protocols"
            features={["Web3 APIs", "Wallet integration", "Transaction management", "Event monitoring"]}
            price="$12k-$35k"
            timeline="2-6 weeks"
            icon="🔗"
          />
          <BlockchainServiceCard
            title="Token Economics & Launch"
            description="Token design, launch strategy, and community building for successful token projects"
            features={["Tokenomics design", "Launch strategy", "Community building", "Marketing support"]}
            price="$20k-$60k"
            timeline="4-10 weeks"
            icon="🚀"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Blockchain Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BlockchainTechCard
            title="Ethereum Ecosystem"
            technologies={["Solidity", "Web3.js", "Ethers.js", "Hardhat", "Truffle"]}
            description="Leading smart contract platform"
          />
          <BlockchainTechCard
            title="Layer 2 Solutions"
            technologies={["Polygon", "Arbitrum", "Optimism", "zkSync", "StarkNet"]}
            description="Scalable blockchain solutions"
          />
          <BlockchainTechCard
            title="Alternative Chains"
            technologies={["Solana", "BSC", "Avalanche", "Cardano", "Polkadot"]}
            description="Multi-chain development"
          />
          <BlockchainTechCard
            title="Enterprise Solutions"
            technologies={["Hyperledger", "Quorum", "Corda", "Ethereum Enterprise"]}
            description="Enterprise blockchain platforms"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Blockchain Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UseCaseCard
            category="Financial Services"
            useCases={["Decentralized exchanges", "Lending protocols", "Stablecoins", "Cross-border payments"]}
            icon="💳"
          />
          <UseCaseCard
            category="Supply Chain"
            useCases={["Product tracking", "Authenticity verification", "Smart contracts", "Transparency"]}
            icon="📦"
          />
          <UseCaseCard
            category="Digital Identity"
            useCases={["Self-sovereign identity", "KYC/AML", "Credential verification", "Privacy protection"]}
            icon="🆔"
          />
          <UseCaseCard
            category="Gaming & NFTs"
            useCases={["Play-to-earn games", "NFT marketplaces", "Virtual worlds", "Digital collectibles"]}
            icon="🎮"
          />
          <UseCaseCard
            category="Real Estate"
            useCases={["Property tokenization", "Fractional ownership", "Smart contracts", "Automated transactions"]}
            icon="🏠"
          />
          <UseCaseCard
            category="Healthcare"
            useCases={["Medical records", "Drug traceability", "Clinical trials", "Data privacy"]}
            icon="🏥"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing & Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlockchainPricingCard
            name="Smart Contract Audit"
            price="$5k–$15k"
            duration="1–3 weeks"
            features={[
              "Code review",
              "Security analysis",
              "Gas optimization",
              "Test coverage",
              "Audit report"
            ]}
            recommended={false}
          />
          <BlockchainPricingCard
            name="DApp Development"
            price="$25k–$75k"
            duration="4–12 weeks"
            features={[
              "Smart contracts",
              "Frontend development",
              "Backend integration",
              "Testing & deployment",
              "Documentation"
            ]}
            recommended={true}
          />
          <BlockchainPricingCard
            name="Enterprise Blockchain"
            price="$50k+"
            duration="8+ weeks"
            features={[
              "Custom blockchain",
              "Enterprise integration",
              "Security & compliance",
              "Training & support",
              "Ongoing maintenance"
            ]}
            recommended={false}
          />
        </div>
      </section>

      <section className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Ready to Build on Blockchain?</h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          Let's discuss your blockchain vision and create a solution that leverages the power of 
          decentralized technology to drive innovation and value.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors text-center"
          >
            Email Us
          </a>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            📍 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </section>
    </div>
  );
}

function BlockchainTechCard({ title, technologies, description }: {
  title: string;
  technologies: string[];
  description: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}


    </div>
  );
}

function UseCaseCard({ category, useCases, icon }: {
  category: string;
  useCases: string[];
  icon: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-3">{category}</h3>
      <ul className="space-y-2">
        {useCases.map((useCase, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-orange-500 mr-2">•</span> {useCase}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BlockchainPricingCard({ name, price, duration, features, recommended }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  recommended: boolean;
}) {
  return (
    <div className={`border rounded-xl p-8 relative ${recommended ? 'border-orange-500 bg-orange-50' : 'border-gray-200 bg-white'}`}>
      {recommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-orange-600 mb-2">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-6 py-3 rounded-lg font-semibold transition-colors ${
        recommended 
          ? 'bg-orange-600 text-white hover:bg-orange-700' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}>
        Get Started
      </button>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Blockchain Solutions
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with our advanced blockchain solutions and services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
              Get Started
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link href="/services" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors">
              View All Services
            </Link>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </div>
        </div>
      </div>
    </div>
  );
}