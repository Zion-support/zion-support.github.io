import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Link, Shield, Zap, Target, BarChart, Cpu, Sparkles } from 'lucide-react';
;
const BlockchainPage: React.FC = () => {const blockchainServices = [
    {
      title: 'Smart Contract Development',
      description: 'Custom smart contract development for DeFi, NFTs, and enterprise blockchain applications.',
      icon: '📜',
      price: 'Starting at $8,000/project',
      features: ['Custom smart contracts', 'Security auditing', 'Gas optimization', 'Testing & deployment', 'Maintenance & updates'],
      benefits: ['Automate business processes', 'Reduce intermediaries', 'Ensure transparency'],
      marketPrice: '$15,000-50,000/project',
      category: 'Smart Contracts',
      technologies: ['Solidity', 'Vyper', 'Rust', 'Go', 'JavaScript']
    },
    {
      title: 'DeFi Protocol Development',
      description: 'Decentralized finance protocols including DEXs, lending platforms, and yield farming solutions.',
      icon: '💰',
      price: 'Starting at $25,000/project',
      features: ['DEX development', 'Lending protocols', 'Yield farming', 'Liquidity pools', 'Governance tokens'],
      benefits: ['Enable decentralized finance', 'Increase financial inclusion', 'Reduce traditional banking costs'],
      marketPrice: '$50,000-200,000/project',
      category: 'DeFi',
      technologies: ['Ethereum', 'Polygon', 'BSC', 'Avalanche', 'Arbitrum']
    },
    {
      title: 'NFT Marketplace Development',
      description: 'Complete NFT marketplace solutions with minting, trading, and auction capabilities.',
      icon: '🎨',
      price: 'Starting at $15,000/project',
      features: ['NFT minting', 'Marketplace UI/UX', 'Auction system', 'Royalty management', 'Multi-chain support'],
      benefits: ['Enable digital ownership', 'Create new revenue streams', 'Support digital artists'],
      marketPrice: '$30,000-100,000/project',
      category: 'NFTs',
      technologies: ['ERC-721', 'ERC-1155', 'IPFS', 'OpenSea API', 'Web3']
    },
    {
      title: 'Enterprise Blockchain Solutions',
      description: 'Private and consortium blockchain solutions for enterprise applications and supply chain management.',
      icon: '🏢',
      price: 'Starting at $20,000/month',
      features: ['Private blockchain setup', 'Consortium management', 'Supply chain tracking', 'Identity management', 'Data privacy'],
      benefits: ['Improve transparency', 'Reduce fraud', 'Streamline operations'],
      marketPrice: '$40,000-150,000/month',
      category: 'Enterprise',
      technologies: ['Hyperledger', 'Ethereum Enterprise', 'Corda', 'Quorum', 'Fabric']
    },
    {
      title: 'Cross-Chain Bridge Development',
      description: 'Interoperability solutions for seamless asset and data transfer between different blockchain networks.',
      icon: '🌉',
      price: 'Starting at $30,000/project',
      features: ['Cross-chain bridges', 'Asset wrapping', 'Liquidity pools', 'Security audits', 'Multi-chain support'],
      benefits: ['Enable blockchain interoperability', 'Increase liquidity', 'Reduce fragmentation'],
      marketPrice: '$60,000-300,000/project',
      category: 'Interoperability',
      technologies: ['Polkadot', 'Cosmos', 'LayerZero', 'Wormhole', 'Chainlink']
    },
    {
      title: 'Web3 Application Development',
      description: 'Full-stack Web3 applications with wallet integration, smart contract interaction, and decentralized storage.',
      icon: '🌐',
      price: 'Starting at $12,000/project',
      features: ['dApp development', 'Wallet integration', 'Smart contract integration', 'IPFS storage', 'User authentication'],
      benefits: ['Build decentralized applications', 'Enable user ownership', 'Create new business models'],
      marketPrice: '$25,000-100,000/project',
      category: 'Web3',
      technologies: ['React', 'Next.js', 'Web3.js', 'Ethers.js', 'WalletConnect'];)
},
    {
      title: 'Blockchain Analytics Platform',
      description: 'Comprehensive blockchain data analysis and visualization platform for insights and monitoring.',
      icon: '📊',
      price: 'Starting at $8,000/month',
      features: ['Transaction analysis', 'Address tracking', 'DeFi analytics', 'NFT metrics', 'Custom dashboards'],
      benefits: ['Gain blockchain insights', 'Monitor network activity', 'Make data-driven decisions'],
      marketPrice: '$15,000-60,000/month',
      category: 'Analytics',
      technologies: ['The Graph', 'Alchemy', 'Moralis', 'Infura', 'Custom APIs'];)
},
    {
      title: 'Staking & Validator Services',
      description: 'Professional staking services and validator node management for various blockchain networks.',
      icon: '🏦',
      price: 'Starting at $2,000/month',
      features: ['Validator setup', 'Staking management', 'Reward optimization', 'Security monitoring', 'Slashing protection'],
      benefits: ['Earn passive income', 'Support network security', 'Contribute to decentralization'],
      marketPrice: '$4,000-20,000/month',
      category: 'Staking',
      technologies: ['Ethereum 2.0', 'Cosmos', 'Polkadot', 'Solana', 'Cardano'];)
},
    {
      title: 'Blockchain Consulting',
      description: 'Strategic blockchain consulting for enterprise adoption, technology selection, and implementation planning.',
      icon: '💡',
      price: 'Starting at $300/hour',
      features: ['Technology assessment', 'Use case analysis', 'Implementation strategy', 'Risk assessment', 'ROI analysis'],
      benefits: ['Make informed decisions', 'Reduce implementation risks', 'Maximize blockchain value'],
      marketPrice: '$500-1,500/hour',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Technology Evaluation', 'Risk Assessment', 'ROI Analysis'];);
  ];
;
const categories = [...new Set(blockchainServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Blockchain Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive blockchain solutions including smart contracts, DeFi protocols, NFT marketplaces, and enterprise blockchain applications." />
        <meta name="keywords" content="blockchain development, smart contracts, DeFi, NFTs, enterprise blockchain, Web3" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Blockchain Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Transform your business with cutting-edge blockchain technology and decentralized solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
                >
                  Get Started
                </a>
                <a
                  href="#services"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Blockchain Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From smart contracts to enterprise solutions, we provide comprehensive blockchain development services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blockchainServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                    <span className="text-sm text-gray-500 ml-2">(Market: {service.marketPrice})</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <span className="inline-block bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build on Blockchain?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Let's discuss your blockchain project and create a solution that transforms your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
              >
                Start Your Project
              </a>
              <a
                href="/pricing"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );)
export default BlockchainPage;