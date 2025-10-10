import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Link, Shield, Zap, Target, BarChart, Cpu, Sparkles } from 'lucide-react';

const BlockchainPage: React.FC = () => {
  const blockchainServices = [
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
      title: 'Blockchain Security Auditing',
      description: 'Comprehensive security audits for smart contracts, DeFi protocols, and blockchain applications.',
      icon: '🔒',
      price: 'Starting at $5,000/audit',
      features: ['Smart contract auditing', 'Vulnerability assessment', 'Penetration testing', 'Code review', 'Security recommendations'],
      benefits: ['Prevent security breaches', 'Ensure code quality', 'Protect user funds'],
      marketPrice: '$10,000-50,000/audit',
      category: 'Security',
      technologies: ['Mythril', 'Slither', 'Echidna', 'Foundry', 'Custom Tools']
    }
  ];

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
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-indigo-800/50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Blockchain Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Transform your business with cutting-edge blockchain technology and decentralized solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
                  Explore Blockchain Solutions
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Schedule Blockchain Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Blockchain Services?
              </h2>
              <p className="text-xl text-gray-600">
                Leading blockchain expertise with proven track record in DeFi, NFTs, and enterprise solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Link className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Blockchain Experts</h3>
                <p className="text-gray-600">Certified blockchain developers and architects</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security First</h3>
                <p className="text-gray-600">Comprehensive security audits and best practices</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Agile development with rapid prototyping</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">Successful projects across multiple industries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Blockchain Services
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive blockchain solutions tailored to your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blockchainServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Our Price:</span>
                      <span className="font-semibold text-blue-600">{service.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Market Price:</span>
                      <span className="text-sm text-gray-600 line-through">{service.marketPrice}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business with Blockchain?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get started with our blockchain solutions today and stay ahead of the competition
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlockchainPage;