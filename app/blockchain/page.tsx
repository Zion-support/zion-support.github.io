import React from 'react';
import { CheckCircle } from 'lucide-react';
const BlockchainPage: React.FC = () => {
  const blockchainServices = [
    {
      title: 'Smart Contract Development',
      description: 'Secure, audited smart contracts for DeFi, NFTs, and enterprise blockchain applications.',
      icon: '📜',
      price: 'Starting at $8,000/project',
      features: ['Solidity development', 'Security auditing', 'Gas optimization', 'Testing & deployment', 'Documentation'],
      benefits: ['Automate business processes', 'Reduce transaction costs', 'Ensure transparency'],
      marketPrice: '$15,000-50,000/project',
      category: 'Smart Contracts',
      technologies: ['Solidity', 'Vyper', 'Rust', 'Go', 'JavaScript']
    },
    {
      title: 'DeFi Protocol Development',
      description: 'Decentralized finance protocols including DEXs, lending platforms, and yield farming.',
      icon: '🏦',
      price: 'Starting at $25,000/project',
      features: ['DEX development', 'Lending protocols', 'Yield farming', 'Liquidity pools', 'Governance tokens'],
      benefits: ['Create new revenue streams', 'Access global liquidity', 'Reduce financial barriers'],
      marketPrice: '$50,000-200,000/project',
      category: 'DeFi',
      technologies: ['Ethereum', 'Polygon', 'BSC', 'Avalanche', 'Arbitrum']
    },
    {
      title: 'NFT Marketplace Development',
      description: 'Complete NFT marketplace solutions with minting, trading, and auction capabilities.',
      icon: '🎨',
      price: 'Starting at $15,000/project',
      features: ['NFT minting', 'Marketplace functionality', 'Auction system', 'Royalty management', 'Mobile app'],
      benefits: ['Monetize digital assets', 'Create new business models', 'Engage communities'],
      marketPrice: '$30,000-100,000/project',
      category: 'NFTs',
      technologies: ['IPFS', 'OpenSea API', 'Web3.js', 'Ethers.js', 'React']
    },
    {
      title: 'Blockchain Integration Services',
      description: 'Integrate blockchain technology into existing business systems and applications.',
      icon: '🔗',
      price: 'Starting at $5,000/month',
      features: ['API development', 'System integration', 'Data synchronization', 'Security implementation', 'Maintenance'],
      benefits: ['Modernize legacy systems', 'Improve data integrity', 'Enable new capabilities'],
      marketPrice: '$8,000-20,000/month',
      category: 'Integration',
      technologies: ['Web3 APIs', 'REST APIs', 'GraphQL', 'Microservices', 'Cloud Integration']
    },
    {
      title: 'Cryptocurrency Wallet Development',
      description: 'Secure multi-chain cryptocurrency wallets with advanced features and security.',
      icon: '👛',
      price: 'Starting at $12,000/project',
      features: ['Multi-chain support', 'Hardware wallet integration', 'DeFi integration', 'Security features', 'Mobile & web'],
      benefits: ['Secure asset management', 'Multi-chain compatibility', 'Enhanced user experience'],
      marketPrice: '$25,000-80,000/project',
      category: 'Wallets',
      technologies: ['React Native', 'Flutter', 'Web3.js', 'WalletConnect', 'Hardware Security']
    },
    {
      title: 'Blockchain Security Auditing',
      description: 'Comprehensive security audits for smart contracts and blockchain applications.',
      icon: '🔒',
      price: 'Starting at $3,000/audit',
      features: ['Code review', 'Vulnerability assessment', 'Penetration testing', 'Compliance checking', 'Remediation'],
      benefits: ['Prevent security breaches', 'Ensure compliance', 'Build user trust'],
      marketPrice: '$5,000-15,000/audit',
      category: 'Security',
      technologies: ['Mythril', 'Slither', 'Oyente', 'Echidna', 'Custom Tools']
    },
    {
      title: 'Token Development & ICO/IDO',
      description: 'Custom token development with ICO/IDO launch support and marketing strategies.',
      icon: '🪙',
      price: 'Starting at $10,000/project',
      features: ['Token creation', 'ICO/IDO platform', 'Marketing strategy', 'Legal compliance', 'Community building'],
      benefits: ['Raise capital efficiently', 'Build community', 'Create utility tokens'],
      marketPrice: '$20,000-100,000/project',
      category: 'Tokens',
      technologies: ['ERC-20', 'ERC-721', 'ERC-1155', 'BEP-20', 'Custom Standards']
    },
    {
      title: 'Enterprise Blockchain Solutions',
      description: 'Private blockchain networks for enterprise use cases with custom governance.',
      icon: '🏢',
      price: 'Starting at $20,000/project',
      features: ['Private networks', 'Custom governance', 'Consensus mechanisms', 'Integration APIs', 'Management tools'],
      benefits: ['Improve transparency', 'Reduce costs', 'Enhance security'],
      marketPrice: '$40,000-150,000/project',
      category: 'Enterprise',
      technologies: ['Hyperledger', 'Ethereum Private', 'Quorum', 'Corda', 'Custom Blockchains']
    },
    {
      title: 'Cross-Chain Bridge Development',
      description: 'Secure cross-chain bridges for asset transfers between different blockchain networks.',
      icon: '🌉',
      price: 'Starting at $18,000/project',
      features: ['Multi-chain support', 'Asset locking', 'Minting & burning', 'Security mechanisms', 'Monitoring'],
      benefits: ['Enable interoperability', 'Expand user base', 'Increase liquidity'],
      marketPrice: '$35,000-120,000/project',
      category: 'Interoperability',
      technologies: ['Cosmos SDK', 'Polkadot', 'LayerZero', 'Wormhole', 'Custom Bridges']
    },
    {
      title: 'DAO Development & Governance',
      description: 'Decentralized Autonomous Organizations with voting, treasury, and governance mechanisms.',
      icon: '🗳️',
      price: 'Starting at $12,000/project',
      features: ['Voting systems', 'Treasury management', 'Proposal mechanisms', 'Governance tokens', 'Integration'],
      benefits: ['Decentralize decision making', 'Increase transparency', 'Engage communities'],
      marketPrice: '$25,000-80,000/project',
      category: 'DAOs',
      technologies: ['Aragon', 'Snapshot', 'Governor', 'Custom Governance', 'Voting Mechanisms']
    },
    {
      title: 'Blockchain Analytics & Monitoring',
      description: 'Real-time blockchain analytics, monitoring, and compliance reporting solutions.',
      icon: '📊',
      price: 'Starting at $2,500/month',
      features: ['Transaction monitoring', 'Compliance reporting', 'Risk assessment', 'Analytics dashboards', 'Alerts'],
      benefits: ['Ensure compliance', 'Monitor risks', 'Gain insights'],
      marketPrice: '$4,000-12,000/month',
      category: 'Analytics',
      technologies: ['The Graph', 'Alchemy', 'Moralis', 'Custom Analytics', 'Compliance Tools']
    },
    {
      title: 'Web3 Application Development',
      description: 'Complete Web3 applications with frontend, backend, and blockchain integration.',
      icon: '🌐',
      price: 'Starting at $15,000/project',
      features: ['Frontend development', 'Backend APIs', 'Blockchain integration', 'User authentication', 'Deployment'],
      benefits: ['Create Web3 experiences', 'Engage crypto users', 'Build decentralized apps'],
      marketPrice: '$30,000-100,000/project',
      category: 'Web3 Apps',
      technologies: ['React', 'Next.js', 'Node.js', 'Web3.js', 'Ethers.js']
    }
  ];
  const categories = [...new Set(blockchainServices.map(service => service.category))];
  return (
    
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Blockchain & Web3 Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
                Build the future of decentralized applications with cutting-edge blockchain technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                  Explore Web3 Solutions
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                  Schedule Consultation
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
                Expert blockchain developers delivering secure, scalable, and innovative Web3 solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Link className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Blockchain Experts</h3>
                <p className="text-gray-600">Certified developers with deep expertise in multiple blockchain platforms</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security First</h3>
                <p className="text-gray-600">Comprehensive security audits and best practices for all projects</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Development</h3>
                <p className="text-gray-600">Fast delivery with proven development methodologies and tools</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Success</h3>
                <p className="text-gray-600">Successfully launched 100+ blockchain projects across industries</p>
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
                  {category} Solutions
                </h2>
                <p className="text-xl text-gray-600">
                  Specialized {category.toLowerCase()} services for modern blockchain applications
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
                          <span className="text-2xl font-bold text-orange-600">{service.price}</span>
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
                            <span key={techIndex} className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
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
                      <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                        Get Blockchain Consultation
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
                Comprehensive blockchain solutions covering all aspects of Web3 development
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-100 rounded-lg">
                <Link className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Contracts</h3>
                <p className="text-gray-600">Secure, audited smart contracts for all blockchain platforms</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg">
                <Coins className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">DeFi Protocols</h3>
                <p className="text-gray-600">Decentralized finance solutions including DEXs and lending platforms</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg">
                <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">NFT Solutions</h3>
                <p className="text-gray-600">Complete NFT marketplace and collection development</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security Auditing</h3>
                <p className="text-gray-600">Comprehensive security audits and vulnerability assessments</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg">
                <BarChart className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics & Monitoring</h3>
                <p className="text-gray-600">Real-time blockchain analytics and compliance monitoring</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg">
                <Cpu className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Web3 Applications</h3>
                <p className="text-gray-600">Complete Web3 applications with frontend and backend integration</p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build the Future of Web3?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Contact our blockchain experts for a free consultation and custom Web3 strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-orange-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    
  );
};
export default BlockchainPage;