import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';
const BlockchainWeb3Page: React.FC = () => {
  const blockchainServices = [
    {
      title: 'Smart Contract Development',
      description: 'Secure, audited smart contracts for DeFi, NFTs, DAOs, and enterprise blockchain applications.',
      icon: '📜',
      price: 'Starting at $8,000/project',
      features: ['Solidity development', 'Smart contract auditing', 'Gas optimization', 'Security testing', 'Deployment & maintenance'],
      benefits: ['Automate business processes', 'Reduce transaction costs', 'Ensure transparency and trust'],
      marketPrice: '$15,000-50,000/project',
      category: 'Smart Contracts',
      technologies: ['Solidity', 'Vyper', 'Hardhat', 'Truffle', 'OpenZeppelin']
    },
    {
      title: 'DeFi Protocol Development',
      description: 'Decentralized finance protocols including DEXs, lending platforms, and yield farming solutions.',
      icon: '🏦',
      price: 'Starting at $25,000/project',
      features: ['DEX development', 'Lending protocols', 'Yield farming', 'Liquidity mining', 'Cross-chain bridges'],
      benefits: ['Enable decentralized finance', 'Reduce financial intermediaries', 'Increase financial inclusion'],
      marketPrice: '$50,000-200,000/project',
      category: 'DeFi',
      technologies: ['Uniswap', 'Compound', 'Aave', 'Chainlink', 'Web3.js']
    },
    {
      title: 'NFT Marketplace Development',
      description: 'Complete NFT marketplace solutions with minting, trading, and royalty management capabilities.',
      icon: '🎨',
      price: 'Starting at $15,000/project',
      features: ['NFT minting', 'Marketplace functionality', 'Royalty management', 'Metadata storage', 'Payment integration'],
      benefits: ['Monetize digital assets', 'Enable creator economy', 'Provide new revenue streams'],
      marketPrice: '$30,000-100,000/project',
      category: 'NFTs',
      technologies: ['ERC-721', 'ERC-1155', 'IPFS', 'OpenSea API', 'Web3 Integration']
    },
    {
      title: 'DAO Development & Governance',
      description: 'Decentralized autonomous organizations with voting mechanisms and governance token systems.',
      icon: '🗳️',
      price: 'Starting at $12,000/project',
      features: ['Governance token design', 'Voting mechanisms', 'Proposal systems', 'Treasury management', 'Multi-sig wallets'],
      benefits: ['Enable decentralized governance', 'Increase community participation', 'Ensure transparent decision making'],
      marketPrice: '$25,000-80,000/project',
      category: 'DAOs',
      technologies: ['Governance Tokens', 'Snapshot', 'Gnosis Safe', 'Aragon', 'Compound Governance']
    },
    {
      title: 'Blockchain Infrastructure',
      description: 'Custom blockchain networks, sidechains, and layer 2 solutions for enterprise applications.',
      icon: '⛓️',
      price: 'Starting at $50,000/project',
      features: ['Custom blockchain development', 'Consensus mechanisms', 'Node infrastructure', 'API development', 'Monitoring systems'],
      benefits: ['Customize blockchain for specific needs', 'Improve scalability', 'Reduce transaction costs'],
      marketPrice: '$100,000-500,000/project',
      category: 'Infrastructure',
      technologies: ['Substrate', 'Cosmos SDK', 'Hyperledger', 'Ethereum', 'Polkadot']
    },
    {
      title: 'Web3 Integration Services',
      description: 'Integrate Web3 functionality into existing applications with wallet connections and blockchain interactions.',
      icon: '🔗',
      price: 'Starting at $5,000/project',
      features: ['Wallet integration', 'Web3 authentication', 'Blockchain data fetching', 'Transaction handling', 'User onboarding'],
      benefits: ['Modernize existing applications', 'Enable Web3 features', 'Improve user experience'],
      marketPrice: '$10,000-30,000/project',
      category: 'Web3 Integration',
      technologies: ['MetaMask', 'WalletConnect', 'Web3.js', 'Ethers.js', 'React Web3']
    },
    {
      title: 'Cryptocurrency Exchange Development',
      description: 'Secure, scalable cryptocurrency exchanges with advanced trading features and compliance tools.',
      icon: '💱',
      price: 'Starting at $40,000/project',
      features: ['Trading engine', 'Order matching', 'KYC/AML integration', 'Security features', 'Mobile applications'],
      benefits: ['Enable cryptocurrency trading', 'Generate trading fees', 'Provide liquidity'],
      marketPrice: '$80,000-300,000/project',
      category: 'Exchanges',
      technologies: ['Matching Engine', 'Security Protocols', 'KYC Solutions', 'Mobile SDKs', 'API Development']
    },
    {
      title: 'Token Economics & Design',
      description: 'Comprehensive tokenomics design including token distribution, utility, and economic models.',
      icon: '💰',
      price: 'Starting at $8,000/project',
      features: ['Token utility design', 'Economic modeling', 'Vesting schedules', 'Inflation mechanisms', 'Governance integration'],
      benefits: ['Create sustainable token economy', 'Align incentives', 'Ensure long-term value'],
      marketPrice: '$15,000-50,000/project',
      category: 'Tokenomics',
      technologies: ['Economic Modeling', 'Token Standards', 'Vesting Contracts', 'Governance Systems']
    },
    {
      title: 'Blockchain Security Audits',
      description: 'Comprehensive security audits for smart contracts, protocols, and blockchain applications.',
      icon: '🔒',
      price: 'Starting at $5,000/audit',
      features: ['Smart contract auditing', 'Vulnerability assessment', 'Penetration testing', 'Code review', 'Security recommendations'],
      benefits: ['Identify security vulnerabilities', 'Prevent exploits', 'Ensure code quality'],
      marketPrice: '$10,000-50,000/audit',
      category: 'Security',
      technologies: ['Static Analysis', 'Dynamic Testing', 'Formal Verification', 'Security Tools']
    },
    {
      title: 'Cross-Chain Solutions',
      description: 'Interoperability solutions enabling seamless asset and data transfer between different blockchains.',
      icon: '🌉',
      price: 'Starting at $20,000/project',
      features: ['Cross-chain bridges', 'Asset wrapping', 'Interoperability protocols', 'Multi-chain wallets', 'Cross-chain DEXs'],
      benefits: ['Enable blockchain interoperability', 'Increase liquidity', 'Reduce fragmentation'],
      marketPrice: '$40,000-150,000/project',
      category: 'Interoperability',
      technologies: ['Polkadot', 'Cosmos', 'Chainlink', 'Wormhole', 'LayerZero']
    },
    {
      title: 'Metaverse Development',
      description: 'Virtual worlds, avatars, and immersive experiences built on blockchain technology.',
      icon: '🌐',
      price: 'Starting at $30,000/project',
      features: ['3D virtual worlds', 'Avatar systems', 'Virtual real estate', 'In-world economies', 'VR/AR integration'],
      benefits: ['Create immersive experiences', 'Enable virtual economies', 'Provide new engagement channels'],
      marketPrice: '$60,000-250,000/project',
      category: 'Metaverse',
      technologies: ['Unity', 'Unreal Engine', 'WebXR', 'Blockchain Integration', 'NFT Standards']
    },
    {
      title: 'Blockchain Consulting & Strategy',
      description: 'Strategic blockchain consulting and technology roadmap development for enterprise adoption.',
      icon: '💡',
      price: 'Starting at $400/hour',
      features: ['Blockchain strategy', 'Technology assessment', 'Use case identification', 'Implementation planning', 'Regulatory guidance'],
      benefits: ['Navigate blockchain landscape', 'Make informed decisions', 'Ensure successful adoption'],
      marketPrice: '$600-1,500/hour',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Technology Assessment', 'Regulatory Analysis', 'Risk Management']
    }
  ];
  // const categories = [...new Set(blockchainServices.map(service => service.category))];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Blockchain & Web3 Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
                Build the future of decentralized applications with cutting-edge blockchain and Web3 solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  Explore Web3 Solutions
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
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
                Leading blockchain expertise with proven track record in DeFi, NFTs, and Web3 applications
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Link className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Blockchain Experts</h3>
                <p className="text-gray-600">Certified developers with deep blockchain expertise</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security First</h3>
                <p className="text-gray-600">Audited smart contracts and security best practices</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Development</h3>
                <p className="text-gray-600">Fast delivery with proven development methodologies</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Future-Ready</h3>
                <p className="text-gray-600">Cutting-edge Web3 technologies and standards</p>
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
                  Specialized {category.toLowerCase()} solutions for the decentralized future
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
                          <span className="text-2xl font-bold text-purple-600">{service.price}</span>
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
                            <span key={techIndex} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
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
                      <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                        Get Web3 Consultation
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
                Comprehensive blockchain technologies and Web3 development expertise
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-lg">
                <Link className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Contracts</h3>
                <p className="text-gray-600">Secure, audited smart contracts for any use case</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg">
                <Coins className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">DeFi Protocols</h3>
                <p className="text-gray-600">Decentralized finance solutions and protocols</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security Audits</h3>
                <p className="text-gray-600">Comprehensive security audits and testing</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg">
                <Globe className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Web3 Integration</h3>
                <p className="text-gray-600">Seamless Web3 integration for existing applications</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg">
                <Database className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Blockchain Infrastructure</h3>
                <p className="text-gray-600">Custom blockchain networks and infrastructure</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg">
                <Brain className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Token Economics</h3>
                <p className="text-gray-600">Comprehensive tokenomics design and modeling</p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build the Future of Web3?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Contact our blockchain experts for a free consultation and custom Web3 strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-purple-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default BlockchainWeb3Page;