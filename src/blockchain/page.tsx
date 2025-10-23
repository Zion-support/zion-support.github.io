import React from 'react'

import { Coins } from 'lucide-react'
import { CheckCircle, Star, Zap, Brain, BarChart, Shield, Target, Helmet } from 'lucide-react'
import { Cpu } from 'lucide-react'

const BlockchainPage: React.FC = () => {
  const blockchainServices = [
import {Coins, CheckCircle, Star, Zap, Brain, BarChart, Target, Shield, Helmet} from 'lucide-react';;
constBlockchainPage: React.FC= () =>{constblockchainServices= [
    {
      title: 'Smart Contract Development',
      description: 'Secure, audited smart contracts for DeFi, NFTs, and enterprise blockchain applications.',
      icon: '📜',
      price: 'Starting at $8,00 0/project',
      features: ['Solidity development', 'Security auditing', 'Gas optimization', 'Testing & deployment', 'Documentation'],
      benefits: ['Automate business processes', 'Reduce transaction costs', 'Ensure transparency'],
      marketPrice: '$1 5,00 0-5 0,00 0/project',
      category: 'Smart Contracts',
      technologies: ['Solidity', 'Vyper', 'Rust', 'Go', 'JavaScript']
   },
    {title: 'DeFi Protocol Development',
      description: 'Decentralized finance protocols including DEXs, lending platforms, and yield farming.',
      icon: '🏦',
      price: 'Starting at $2 5,00 0/project',
      features: ['DEX development', 'Lending protocols', 'Yield farming', 'Liquidity pools', 'Governance tokens'],
      benefits: ['Create new revenue streams', 'Access global liquidity', 'Reduce financial barriers'],
      marketPrice: '$5 0,00 0-20 0,00 0/project',
      category: 'DeFi',
      technologies: ['Ethereum', 'Polygon', 'BSC', 'Avalanche', 'Arbitrum']
   },
    {title: 'NFT Marketplace Development',
      description: 'Complete NFT marketplace solutions with minting, trading, and auction capabilities.',
      icon: '🎨',
      price: 'Starting at $1 5,00 0/project',
      features: ['NFT minting', 'Marketplace functionality', 'Auction system', 'Royalty management', 'Mobile app'],
      benefits: ['Monetize digital assets', 'Create new business models', 'Engage communities'],
      marketPrice: '$3 0,00 0-10 0,00 0/project',
      category: 'NFTs',
      technologies: ['IPFS', 'OpenSea API', 'Web3.js', 'Ethers.js', 'React']
   },
    {title: 'Blockchain Integration Services',
      description: 'Integrate blockchain technology into existing business systems and applications.',
      icon: '🔗',
      price: 'Starting at $5,00 0/month',
      features: ['API development', 'System integration', 'Data synchronization', 'Security implementation', 'Maintenance'],
      benefits: ['Modernize legacy systems', 'Improve data integrity', 'Enable new capabilities'],
      marketPrice: '$8,00 0-2 0,00 0/month',
      category: 'Integration',
      technologies: ['Web3 APIs', 'REST APIs', 'GraphQL', 'Microservices', 'Cloud Integration']
   },
    {title: 'Cryptocurrency Wallet Development',
      description: 'Secure multi-chain cryptocurrency wallets with advanced features and security.',
      icon: '👛',
      price: 'Starting at $1 2,00 0/project',
      features: ['Multi-chain support', 'Hardware wallet integration', 'DeFi integration', 'Security features', 'Mobile & web'],
      benefits: ['Secure asset management', 'Multi-chain compatibility', 'Enhanced user experience'],
      marketPrice: '$2 5,00 0-8 0,00 0/project',
      category: 'Wallets',
      technologies: ['React Native', 'Flutter', 'Web3.js', 'WalletConnect', 'Hardware Security']
   },
    {title: 'Blockchain Security Auditing',
      description: 'Comprehensive security audits for smart contracts and blockchain applications.',
      icon: '🔒',
      price: 'Starting at $3,00 0/audit',
      features: ['Code review', 'Vulnerability assessment', 'Penetration testing', 'Compliance checking', 'Remediation'],
      benefits: ['Prevent security breaches', 'Ensure compliance', 'Build user trust'],
      marketPrice: '$5,00 0-1 5,00 0/audit',
      category: 'Security',
      technologies: ['Mythril', 'Slither', 'Oyente', 'Echidna', 'Custom Tools']
   },
    {title: 'Token Development & ICO/IDO',
      description: 'Custom token development with ICO/IDO launch support and marketing strategies.',
      icon: '🪙',
      price: 'Starting at $1 0,00 0/project',
      features: ['Token creation', 'ICO/IDO platform', 'Marketing strategy', 'Legal compliance', 'Community building'],
      benefits: ['Raise capital efficiently', 'Build community', 'Create utility tokens'],
      marketPrice: '$2 0,00 0-10 0,00 0/project',
      category: 'Tokens',
      technologies: ['ERC-2 0', 'ERC-72 1', 'ERC-115 5', 'BEP-2 0', 'Custom Standards']
   },
    {title: 'Enterprise Blockchain Solutions',
      description: 'Private blockchain networks for enterprise use cases with custom governance.',
      icon: '🏢',
      price: 'Starting at $2 0,00 0/project',
      features: ['Private networks', 'Custom governance', 'Consensus mechanisms', 'Integration APIs', 'Management tools'],
      benefits: ['Improve transparency', 'Reduce costs', 'Enhance security'],
      marketPrice: '$4 0,00 0-15 0,00 0/project',
      category: 'Enterprise',
      technologies: ['Hyperledger', 'Ethereum Private', 'Quorum', 'Corda', 'Custom Blockchains']
   },
    {title: 'Cross-Chain Bridge Development',
      description: 'Secure cross-chain bridges for asset transfers between different blockchain networks.',
      icon: '🌉',
      price: 'Starting at $1 8,00 0/project',
      features: ['Multi-chain support', 'Asset locking', 'Minting & burning', 'Security mechanisms', 'Monitoring'],
      benefits: ['Enable interoperability', 'Expand user base', 'Increase liquidity'],
      marketPrice: '$3 5,00 0-12 0,00 0/project',
      category: 'Interoperability',
      technologies: ['Cosmos SDK', 'Polkado t', 'LayerZero', 'Wormhole', 'Custom Bridges']
   },
    {title: 'DAO Development & Governance',
      description: 'Decentralized Autonomous Organizations with voting, treasury, and governance mechanisms.',
      icon: '🗳️',
      price: 'Starting at $1 2,00 0/project',
      features: ['Voting systems', 'Treasury management', 'Proposal mechanisms', 'Governance tokens', 'Integration'],
      benefits: ['Decentralize decision making', 'Increase transparency', 'Engage communities'],
      marketPrice: '$2 5,00 0-8 0,00 0/project',
      category: 'DAOs',
      technologies: ['Aragon', 'Snapshot', 'Governor', 'Custom Governance', 'Voting Mechanisms']
   },
    {title: 'Blockchain Analytics & Monitoring',
      description: 'Real-time blockchain analytics, monitoring, and compliance reporting solutions.',
      icon: '📊',
      price: 'Starting at $2,50 0/month',
      features: ['Transaction monitoring', 'Compliance reporting', 'Risk assessment', 'Analytics dashboards', 'Alerts'],
      benefits: ['Ensure compliance', 'Monitor risks', 'Gain insights'],
      marketPrice: '$4,00 0-1 2,00 0/month',
      category: 'Analytics',
      technologies: ['The Graph', 'Alchemy', 'Moralis', 'Custom Analytics', 'Compliance Tools']
   },
    {title: 'Web3 Application Development',
      description: 'Complete Web3 applications with frontend, backend, and blockchain integration.',
      icon: '🌐',
      price: 'Starting at $1 5,00 0/project',
      features: ['Frontend development', 'Backend APIs', 'Blockchain integration', 'User authentication', 'Deployment'],
      benefits: ['Create Web3 experiences', 'Engage crypto users', 'Build decentralized apps'],
      marketPrice: '$3 0,00 0-10 0,00 0/project',
      category: 'Web3 Apps',
      technologies: ['React', 'Next.js', 'Node.js', 'Web3.js', 'Ethers.js']
    }
  ]
  const categories = [...new Set(blockchainServices.map(service => service.category))]
  return (
    <>
      <Helmet>
        <title>Blockchain & Web3 Services - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Advanced blockchain and Web3 services including smart contracts, DeFi, NFTs, and enterprise blockchain solutions.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;blockchain development, smart contracts, DeFi, NFTs, Web3, cryptocurrency, token development&quot; />
      </Helmet>
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-50 to-orange-50&quot;></div>
        {/* Hero Section */}
        <section className=&quot;relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-700 text-white py-20&quot;></section>
          <div className=&quot;absolute inset-0 bg-black opacity-20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
            <div className=&quot;text-center&quot;></div>
              <h1 className=&quot;text-4xl md:text-6xl font-bold mb-6&quot;>
                Blockchain & Web3 Services
              </h1>
              <p className=&quot;text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto&quot;>
                Build the future of decentralized applications with cutting-edge blockchain technology
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
                <button className=&quot;bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors&quot;>
                  Explore Web3 Solutions
                </button>
                <button className=&quot;border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors&quot;>
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Key Benefits */}
        <section className=&quot;py-16 bg-white&quot;></section>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
            <div className=&quot;text-center mb-12&quot;></div>
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
                Why Choose Our Blockchain Services?
              </h2>
              <p className=&quot;text-xl text-gray-600&quot;>
                Expert blockchain developers delivering secure, scalable, and innovative Web3 solutions
              </p>
            </div>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                  <a className=&quot;w-8 h-8 text-orange-600&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Blockchain Experts</h3>
                <p className=&quot;text-gray-600&quot;>Certified developers with deep expertise in multiple blockchain platforms</p>
              </div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                  <Shield className=&quot;w-8 h-8 text-red-600&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Security First</h3>
                <p className=&quot;text-gray-600&quot;>Comprehensive security audits and best practices for all projects</p>
              </div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                  <Zap className=&quot;w-8 h-8 text-purple-600&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Rapid Development</h3>
                <p className=&quot;text-gray-600&quot;>Fast delivery with proven development methodologies and tools</p>
              </div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                  <Target className=&quot;w-8 h-8 text-green-600&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Proven Success</h3>
                <p className=&quot;text-gray-600&quot;>Successfully launched 100+ blockchain projects across industries</p>
              </div>
            </div>
          </div>
        </section>
        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className=&quot;py-16 bg-gray-50&quot;></section>
            <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
              <div className=&quot;text-center mb-12&quot;></div>
                <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
                  {category} Solutions
                </h2>
                <p className=&quot;text-xl text-gray-600&quot;>
                  Specialized {category.toLowerCase()} services for modern blockchain applications
                </p>
              </div>
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
                {blockchainServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className=&quot;bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow&quot;></div>
                      <div className=&quot;text-4xl mb-4&quot;>{service.icon}</div>
                      <h3 className=&quot;text-xl font-semibold text-gray-900 mb-3&quot;>{service.title}</h3>
                      <p className=&quot;text-gray-600 mb-4&quot;>{service.description}</p>
                      <div className=&quot;mb-4&quot;></div>
                        <div className=&quot;flex items-center justify-between mb-2&quot;></div>
                          <span className=&quot;text-2xl font-bold text-orange-600&quot;>{service.price}</span>
                          <span className=&quot;text-sm text-gray-500&quot;>Market: {service.marketPrice}</span>
                        </div>
                        <div className=&quot;text-sm text-green-600 font-semibold&quot;></div>
                          Save up to 50% vs market rates
                        </div>
                      </div>
                      <div className=&quot;mb-4&quot;></div>
                        <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>Key Features:</h4>
                        <ul className=&quot;space-y-1&quot;>
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className=&quot;flex items-center text-sm text-gray-600&quot;>
                              <CheckCircle className=&quot;w-4 h-4 text-green-500 mr-2 flex-shrink-0&quot; />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className=&quot;mb-4&quot;></div>
                        <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>Technologies:</h4>
                        <div className=&quot;flex flex-wrap gap-2&quot;></div>
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className=&quot;bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded&quot;>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className=&quot;mb-6&quot;></div>
                        <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>Business Benefits:</h4>
                        <ul className=&quot;space-y-1&quot;>
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className=&quot;flex items-center text-sm text-gray-600&quot;>
                              <Star className=&quot;w-4 h-4 text-yellow-500 mr-2 flex-shrink-0&quot; />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button className=&quot;w-full bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors&quot;>
                        Get Blockchain Consultation
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}
        {/* Blockchain Capabilities Showcase */}
        <section className=&quot;py-16 bg-white&quot;></section>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
            <div className=&quot;text-center mb-12&quot;></div>
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
                Our Blockchain Capabilities
              </h2>
              <p className=&quot;text-xl text-gray-600&quot;>
                Comprehensive blockchain solutions covering all aspects of Web3 development
              </p>
            </div>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-orange-50 to-red-100 rounded-lg&quot;></div>
                <a className=&quot;w-12 h-12 text-orange-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Smart Contracts</h3>
                <p className=&quot;text-gray-600&quot;>Secure, audited smart contracts for all blockchain platforms</p>
              </div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg&quot;></div>
                <Coins className=&quot;w-12 h-12 text-purple-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>DeFi Protocols</h3>
                <p className=&quot;text-gray-600&quot;>Decentralized finance solutions including DEXs and lending platforms</p>
              </div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg&quot;></div>
                <Brain className=&quot;w-12 h-12 text-blue-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>NFT Solutions</h3>
                <p className=&quot;text-gray-600&quot;>Complete NFT marketplace and collection development</p>
              </div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg&quot;></div>
                <Shield className=&quot;w-12 h-12 text-green-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Security Auditing</h3>
                <p className=&quot;text-gray-600&quot;>Comprehensive security audits and vulnerability assessments</p>
              </div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg&quot;></div>
                <BarChart className=&quot;w-12 h-12 text-indigo-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Analytics & Monitoring</h3>
                <p className=&quot;text-gray-600&quot;>Real-time blockchain analytics and compliance monitoring</p>
              </div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg&quot;></div>
                <Cpu className=&quot;w-12 h-12 text-pink-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Web3 Applications</h3>
                <p className=&quot;text-gray-600&quot;>Complete Web3 applications with frontend and backend integration</p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className=&quot;py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white&quot;></section>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Ready to Build the Future of Web3?
            </h2>
            <p className=&quot;text-xl mb-8 text-orange-100&quot;>
              Contact our blockchain experts for a free consultation and custom Web3 strategy
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center&quot;
              >
                📞 +1 302 464 0950
              </a>
              <a
                href=&quot;mailto:kleber@ziontechgroup.com&quot;
                className=&quot;border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors&quot;
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className=&quot;mt-8 text-sm text-orange-200&quot;></div>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default BlockchainPage
