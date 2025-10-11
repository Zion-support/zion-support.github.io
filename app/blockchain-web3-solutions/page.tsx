import React from 'react';
import { CheckCircle, ArrowRight, Link as LinkIcon, Shield, Zap, Brain, Database, Globe, Star, Coins, Lock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlockchainWeb3SolutionsPage: React.FC = () => {
  const blockchainServices = [
    {
      icon: <Coins className="w-12 h-12 text-blue-500" />,
      title: 'DeFi Protocol Development',
      description: 'Build decentralized finance protocols including DEXs, lending platforms, yield farming, and liquidity pools with advanced smart contracts.',
      features: [
        'Automated Market Makers (AMM)',
        'Liquidity pool management',
        'Yield farming strategies',
        'Cross-chain compatibility',
        'Governance token systems',
        'Flash loan protocols'
      ],
      pricing: '$50,000+',
      popular: true,
      link: '/defi-protocol-development',
      category: 'DeFi'
    },
    {
      icon: <LinkIcon className="w-12 h-12 text-green-500" />,
      title: 'NFT Marketplace Development',
      description: 'Create comprehensive NFT marketplaces with minting, trading, auction systems, and royalty management.',
      features: [
        'NFT minting and metadata',
        'Auction and bidding systems',
        'Royalty management',
        'Multi-chain support',
        'Creator tools and analytics',
        'Marketplace governance'
      ],
      pricing: '$30,000+',
      popular: false,
      link: '/nft-marketplace-development',
      category: 'NFT'
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: 'Smart Contract Security',
      description: 'Comprehensive smart contract auditing, security analysis, and vulnerability assessment for blockchain applications.',
      features: [
        'Code review and auditing',
        'Vulnerability assessment',
        'Penetration testing',
        'Formal verification',
        'Security best practices',
        'Ongoing monitoring'
      ],
      pricing: '$15,000+',
      popular: true,
      link: '/smart-contract-security',
      category: 'Security'
    },
    {
      icon: <Globe className="w-12 h-12 text-orange-500" />,
      title: 'Cross-Chain Solutions',
      description: 'Build bridges and interoperability solutions connecting different blockchain networks for seamless asset transfers.',
      features: [
        'Cross-chain bridges',
        'Asset wrapping protocols',
        'Interoperability standards',
        'Multi-chain wallets',
        'Cross-chain DEXs',
        'Universal protocols'
      ],
      pricing: '$40,000+',
      popular: false,
      link: '/cross-chain-solutions',
      category: 'Interoperability'
    },
    {
      icon: <Lock className="w-12 h-12 text-red-500" />,
      title: 'Enterprise Blockchain',
      description: 'Private and consortium blockchain solutions for enterprise use cases with custom governance and compliance features.',
      features: [
        'Private blockchain networks',
        'Consortium management',
        'Enterprise governance',
        'Compliance frameworks',
        'Integration APIs',
        'Custom consensus mechanisms'
      ],
      pricing: '$75,000+',
      popular: false,
      link: '/enterprise-blockchain',
      category: 'Enterprise'
    },
    {
      icon: <Brain className="w-12 h-12 text-yellow-500" />,
      title: 'Web3 DApp Development',
      description: 'Decentralized applications with user-friendly interfaces, wallet integration, and seamless blockchain interactions.',
      features: [
        'Frontend development',
        'Wallet integration',
        'Smart contract interaction',
        'User experience optimization',
        'Mobile DApp support',
        'Analytics and monitoring'
      ],
      pricing: '$25,000+',
      popular: true,
      link: '/web3-dapp-development',
      category: 'DApp'
    }
  ];

  const stats = [
    { number: '100+', label: 'Blockchain Projects' },
    { number: '99.9%', label: 'Security Score' },
    { number: '$2B+', label: 'TVL Managed' },
    { number: '24/7', label: 'Support' }
  ];

  const industries = [
    {
      industry: 'Finance',
      applications: ['DeFi protocols', 'Payment systems', 'Asset tokenization', 'Cross-border payments'],
      icon: '💰'
    },
    {
      industry: 'Gaming',
      applications: ['Play-to-earn games', 'NFT marketplaces', 'Virtual economies', 'Gaming tokens'],
      icon: '🎮'
    },
    {
      industry: 'Real Estate',
      applications: ['Property tokenization', 'Fractional ownership', 'Smart contracts', 'Automated transactions'],
      icon: '🏠'
    },
    {
      industry: 'Supply Chain',
      applications: ['Traceability', 'Authenticity verification', 'Automated compliance', 'Smart logistics'],
      icon: '📦'
    }
  ];

  const technologies = [
    { name: 'Ethereum', description: 'Smart contracts and DApps' },
    { name: 'Polygon', description: 'Scalable Ethereum solutions' },
    { name: 'Solana', description: 'High-performance blockchain' },
    { name: 'Polkadot', description: 'Multi-chain interoperability' },
    { name: 'IPFS', description: 'Decentralized storage' },
    { name: 'Web3.js', description: 'Blockchain interaction library' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blockchain & Web3 Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive blockchain and Web3 development services including DeFi protocols, NFT marketplaces, smart contracts, and enterprise blockchain solutions." />
        <meta name="keywords" content="blockchain development, Web3, DeFi, NFT, smart contracts, cryptocurrency, decentralized applications, enterprise blockchain" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Blockchain & Web3 Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build the future of decentralized applications with our comprehensive blockchain and Web3 development services. 
              From DeFi protocols to NFT marketplaces, we deliver cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Blockchain Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/it-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Explore IT Services
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Industries We Serve */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Industries We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{industry.industry}</h3>
                  <ul className="space-y-2">
                    {industry.applications.map((app, appIndex) => (
                      <li key={appIndex} className="text-gray-300 text-sm flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies We Use */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Blockchain Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">{tech.name}</h3>
                  <p className="text-gray-300">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Blockchain Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Blockchain & Web3 Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blockchainServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <div className="mb-2">
                    <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <Link 
                      to={service.link}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Our Blockchain Solutions */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Why Choose Our Blockchain Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Security First</h3>
                <p className="text-gray-300">Comprehensive security audits and best practices to protect your blockchain applications.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Multi-Chain Expertise</h3>
                <p className="text-gray-300">Experience across multiple blockchain networks and interoperability solutions.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Innovation Focus</h3>
                <p className="text-gray-300">Cutting-edge solutions leveraging the latest blockchain technologies and trends.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Build the Future?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join the Web3 revolution with our comprehensive blockchain development services and solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Project
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlockchainWeb3SolutionsPage;