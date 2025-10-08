import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Link, Coins, Shield, ArrowRight, Sparkles } from 'lucide-react';

const BlockchainWeb3Page: React.FC = () => {
  const blockchainServices = [
    {
      title: 'Smart Contract Development',
      description: 'Secure and audited smart contracts for DeFi, NFTs, and blockchain applications.',
      icon: '📜',
      price: '$8,000/project',
      features: [
        'Custom smart contract development',
        'Security auditing & testing',
        'Gas optimization',
        'Multi-chain deployment',
        'Upgradeable contract patterns',
        'Documentation & training'
      ],
      benefits: [
        'Automate business processes',
        'Reduce transaction costs',
        'Ensure transparency & trust'
      ],
      marketPrice: '$15,000-30,000/project',
      category: 'Smart Contracts',
      technologies: ['Solidity', 'Vyper', 'Rust', 'Ethereum', 'Polygon', 'BSC']
    },
    {
      title: 'DeFi Protocol Development',
      description: 'Decentralized finance protocols including DEXs, lending platforms, and yield farming.',
      icon: '🏦',
      price: '$25,000/project',
      features: [
        'DEX development',
        'Lending & borrowing protocols',
        'Yield farming mechanisms',
        'Liquidity mining programs',
        'Governance token design',
        'Security audits'
      ],
      benefits: [
        'Create new revenue streams',
        'Enable permissionless finance',
        'Attract liquidity & users'
      ],
      marketPrice: '$50,000-100,000/project',
      category: 'DeFi',
      technologies: ['Uniswap V3', 'Compound', 'Aave', 'Chainlink', 'OpenZeppelin']
    },
    {
      title: 'NFT Marketplace Development',
      description: 'Complete NFT marketplace solutions with minting, trading, and auction features.',
      icon: '🖼️',
      price: '$15,000/project',
      features: [
        'NFT minting & trading',
        'Auction & bidding system',
        'Royalty management',
        'Metadata management',
        'Multi-wallet support',
        'Mobile app integration'
      ],
      benefits: [
        'Monetize digital assets',
        'Create new business models',
        'Engage with digital communities'
      ],
      marketPrice: '$30,000-60,000/project',
      category: 'NFTs',
      technologies: ['ERC-721', 'ERC-1155', 'IPFS', 'OpenSea API', 'Web3.js']
    },
    {
      title: 'DAO Development',
      description: 'Decentralized Autonomous Organizations with governance, voting, and treasury management.',
      icon: '🏛️',
      price: '$12,000/project',
      features: [
        'Governance token design',
        'Voting mechanisms',
        'Treasury management',
        'Proposal system',
        'Member management',
        'Integration with DeFi protocols'
      ],
      benefits: [
        'Enable decentralized governance',
        'Increase community engagement',
        'Create transparent decision-making'
      ],
      marketPrice: '$25,000-50,000/project',
      category: 'DAOs',
      technologies: ['Snapshot', 'Gnosis Safe', 'Aragon', 'Compound Governance']
    },
    {
      title: 'Web3 Application Development',
      description: 'Full-stack Web3 applications with wallet integration and blockchain connectivity.',
      icon: '🌐',
      price: '$10,000/project',
      features: [
        'Frontend & backend development',
        'Wallet integration (MetaMask, WalletConnect)',
        'Blockchain data indexing',
        'Real-time updates',
        'Mobile responsiveness',
        'Security best practices'
      ],
      benefits: [
        'Create user-friendly Web3 experiences',
        'Reduce technical barriers',
        'Increase adoption rates'
      ],
      marketPrice: '$20,000-40,000/project',
      category: 'Web3 Apps',
      technologies: ['React', 'Next.js', 'Web3.js', 'Ethers.js', 'The Graph']
    },
    {
      title: 'Blockchain Consulting',
      description: 'Strategic consulting for blockchain adoption, tokenomics, and technology selection.',
      icon: '💡',
      price: '$3,000/month',
      features: [
        'Blockchain strategy development',
        'Tokenomics design',
        'Technology stack selection',
        'Regulatory compliance guidance',
        'Team training & education',
        'Partnership development'
      ],
      benefits: [
        'Make informed blockchain decisions',
        'Avoid costly mistakes',
        'Accelerate time to market'
      ],
      marketPrice: '$5,000-10,000/month',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Tokenomics', 'Regulatory Analysis']
    },
    {
      title: 'Cross-Chain Solutions',
      description: 'Multi-chain integration and cross-chain bridge development for interoperability.',
      icon: '🌉',
      price: '$20,000/project',
      features: [
        'Cross-chain bridge development',
        'Multi-chain wallet integration',
        'Asset migration tools',
        'Interoperability protocols',
        'Security audits',
        'Documentation & support'
      ],
      benefits: [
        'Enable multi-chain operations',
        'Increase liquidity access',
        'Reduce platform dependency'
      ],
      marketPrice: '$40,000-80,000/project',
      category: 'Cross-Chain',
      technologies: ['LayerZero', 'Wormhole', 'Multichain', 'Cosmos IBC']
    },
    {
      title: 'Blockchain Security Audits',
      description: 'Comprehensive security audits for smart contracts and blockchain applications.',
      icon: '🔒',
      price: '$5,000/audit',
      features: [
        'Smart contract security review',
        'Vulnerability assessment',
        'Penetration testing',
        'Code quality analysis',
        'Gas optimization review',
        'Detailed audit report'
      ],
      benefits: [
        'Identify security vulnerabilities',
        'Prevent costly exploits',
        'Build user trust & confidence'
      ],
      marketPrice: '$10,000-25,000/audit',
      category: 'Security',
      technologies: ['MythX', 'Slither', 'Echidna', 'Foundry', 'Hardhat']
    }
  ];

  const categories = [...new Set(blockchainServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Blockchain & Web3 Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive blockchain and Web3 services including smart contracts, DeFi protocols, NFT marketplaces, DAOs, and cross-chain solutions." />
        <meta name="keywords" content="blockchain, Web3, smart contracts, DeFi, NFTs, DAOs, cryptocurrency, decentralized applications" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        {/* Hero Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Link className="w-12 h-12 text-cyan-400 mr-4 animate-pulse" />
                <h1 className="text-5xl md:text-7xl font-bold">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Blockchain & Web3
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Decentralized solutions for the future of the internet and digital economy
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Explore Web3 Solutions
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="/contact"
                  className="group relative bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Free Consultation
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Web3 Capabilities Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Web3 Capabilities
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Build the next generation of decentralized applications and protocols
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <Coins className="w-16 h-16 text-cyan-400 mx-auto mb-4 group-hover:animate-pulse" />
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">DeFi Protocols</h3>
                  <p className="text-gray-300">Decentralized finance solutions for lending, trading, and yield farming</p>
                </div>
              </div>
              
              <div className="group relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <Shield className="w-16 h-16 text-purple-400 mx-auto mb-4 group-hover:animate-pulse" />
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">Smart Contracts</h3>
                  <p className="text-gray-300">Secure and audited smart contracts for automated business logic</p>
                </div>
              </div>
              
              <div className="group relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 hover:border-green-400/60 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <Link className="w-16 h-16 text-green-400 mx-auto mb-4 group-hover:animate-pulse" />
                  <h3 className="text-2xl font-bold text-green-400 mb-4">Cross-Chain</h3>
                  <p className="text-gray-300">Multi-chain solutions for interoperability and asset migration</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {category} Solutions
                  </span>
                </h2>
                <p className="text-xl text-gray-300">
                  Specialized blockchain services for {category.toLowerCase()} applications
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {blockchainServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="group relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center mb-6">
                          <div className="text-5xl mr-4 group-hover:animate-bounce">{service.icon}</div>
                          <div>
                            <h3 className="text-2xl font-bold text-cyan-400 mb-2">{service.title}</h3>
                            <div className="flex items-center space-x-4">
                              <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                              <span className="text-sm text-gray-400">Market: {service.marketPrice}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-cyan-400 mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-purple-400 mb-3">Business Benefits:</h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                                <Star className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-green-400 mb-3">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                          Get Started
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Ready to Build the Future of Web3?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact us today for a free blockchain consultation and custom Web3 solution recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Call: (302) 464-0950
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="group relative bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Email: kleber@ziontechgroup.com
                </span>
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlockchainWeb3Page;