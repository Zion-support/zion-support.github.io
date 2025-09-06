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
          </div>
        </div>
      </div>
    </div>
  );
}