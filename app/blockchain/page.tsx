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
    },
    {
      title: 'Token Economics Design',
      description: 'Comprehensive tokenomics design including token distribution, utility, and governance mechanisms.',
      icon: '🪙',
      price: 'Starting at $10,000/project',
      features: ['Token design', 'Economic modeling', 'Governance structure', 'Vesting schedules', 'Incentive mechanisms'],
      benefits: ['Create sustainable token economy', 'Align incentives', 'Ensure long-term viability'],
      marketPrice: '$20,000-100,000/project',
      category: 'Tokenomics',
      technologies: ['Economic Modeling', 'Game Theory', 'Token Standards', 'Governance', 'DeFi Protocols']
    },
    {
      title: 'Blockchain Infrastructure Management',
      description: 'Complete blockchain infrastructure setup, monitoring, and maintenance services.',
      icon: '⚙️',
      price: 'Starting at $3,000/month',
      features: ['Node management', 'Network monitoring', 'Backup & recovery', 'Performance optimization', 'Security updates'],
      benefits: ['Ensure network reliability', 'Reduce operational costs', 'Improve performance'],
      marketPrice: '$6,000-25,000/month',
      category: 'Infrastructure',
      technologies: ['Ethereum', 'Bitcoin', 'Polygon', 'AWS', 'Kubernetes']
    },
    {
      title: 'Web3 Application Development',
      description: 'Full-stack Web3 applications with wallet integration, smart contract interaction, and user-friendly interfaces.',
      icon: '🌐',
      price: 'Starting at $12,000/project',
      features: ['Frontend development', 'Wallet integration', 'Smart contract integration', 'User authentication', 'Mobile support'],
      benefits: ['Enable Web3 adoption', 'Improve user experience', 'Increase accessibility'],
      marketPrice: '$25,000-100,000/project',
      category: 'Web3',
      technologies: ['React', 'Next.js', 'Web3.js', 'Ethers.js', 'WalletConnect']
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
      technologies: ['The Graph', 'Alchemy', 'Moralis', 'Infura', 'Custom APIs']
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
      technologies: ['Ethereum 2.0', 'Cosmos', 'Polkadot', 'Solana', 'Cardano']
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
      technologies: ['Strategic Planning', 'Technology Evaluation', 'Risk Assessment', 'ROI Analysis']
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Development</h3>
                <p className="text-gray-600">Fast delivery with proven development frameworks</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3>
                <p className="text-gray-600">Tailored blockchain solutions for your specific needs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Services
                </h2>
                <p className="text-xl text-gray-600">
                  Professional {category.toLowerCase()} solutions powered by blockchain technology
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blockchainServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 50% vs market rates
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
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
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Get Blockchain Quote
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Blockchain Capabilities Showcase */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Blockchain Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive blockchain technologies and methodologies for modern business applications
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
                <Link className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Contracts</h3>
                <p className="text-gray-600">Automated contract execution with transparency and security</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">DeFi Protocols</h3>
                <p className="text-gray-600">Decentralized finance solutions for modern financial services</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                <Cpu className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">NFT Marketplaces</h3>
                <p className="text-gray-600">Digital asset trading and ownership verification platforms</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg">
                <Target className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Solutions</h3>
                <p className="text-gray-600">Private and consortium blockchains for business applications</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg">
                <Sparkles className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Web3 Applications</h3>
                <p className="text-gray-600">Decentralized applications with user-friendly interfaces</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg">
                <BarChart className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Blockchain Analytics</h3>
                <p className="text-gray-600">Comprehensive data analysis and visualization tools</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform with Blockchain?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our blockchain experts for a free consultation and custom blockchain strategy development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-blue-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlockchainPage;