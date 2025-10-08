import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Link, Zap, Shield, Target } from 'lucide-react';

const BlockchainWeb3Page: React.FC = () => {
  const blockchainServices = [
    {
      title: 'Smart Contract Development',
      description: 'Secure and efficient smart contracts for DeFi, NFTs, and enterprise applications',
      price: 'Starting at $8,000/project',
      features: [
        'Solidity development',
        'Smart contract auditing',
        'Gas optimization',
        'Security testing',
        'Deployment & maintenance'
      ],
      icon: '📜',
      popular: true
    },
    {
      title: 'DeFi Protocol Development',
      description: 'Decentralized finance protocols including DEXs, lending platforms, and yield farming',
      price: 'Starting at $15,000/project',
      features: [
        'DEX development',
        'Lending protocols',
        'Yield farming',
        'Liquidity pools',
        'Governance tokens'
      ],
      icon: '💰',
      popular: true
    },
    {
      title: 'NFT Marketplace Development',
      description: 'Complete NFT marketplace solutions with minting, trading, and auction features',
      price: 'Starting at $12,000/project',
      features: [
        'NFT minting',
        'Marketplace functionality',
        'Auction system',
        'Royalty management',
        'Multi-chain support'
      ],
      icon: '🎨',
      popular: false
    },
    {
      title: 'Web3 Application Development',
      description: 'Decentralized applications (dApps) with wallet integration and blockchain connectivity',
      price: 'Starting at $10,000/project',
      features: [
        'Frontend development',
        'Wallet integration',
        'Blockchain connectivity',
        'User authentication',
        'Transaction management'
      ],
      icon: '🌐',
      popular: false
    },
    {
      title: 'Blockchain Consulting',
      description: 'Strategic guidance on blockchain adoption and Web3 transformation',
      price: 'Starting at $3,000/month',
      features: [
        'Technology assessment',
        'Use case analysis',
        'Implementation roadmap',
        'Team training',
        'Ongoing support'
      ],
      icon: '💡',
      popular: false
    },
    {
      title: 'Blockchain Security Audit',
      description: 'Comprehensive security audits for smart contracts and blockchain applications',
      price: 'Starting at $5,000/audit',
      features: [
        'Code review',
        'Vulnerability assessment',
        'Penetration testing',
        'Security recommendations',
        'Compliance check'
      ],
      icon: '🔒',
      popular: false
    }
  ];

  const technologies = [
    { name: 'Ethereum', category: 'Blockchain' },
    { name: 'Polygon', category: 'Blockchain' },
    { name: 'Binance Smart Chain', category: 'Blockchain' },
    { name: 'Solana', category: 'Blockchain' },
    { name: 'Solidity', category: 'Language' },
    { name: 'Rust', category: 'Language' },
    { name: 'Web3.js', category: 'Library' },
    { name: 'Ethers.js', category: 'Library' },
    { name: 'Hardhat', category: 'Framework' },
    { name: 'Truffle', category: 'Framework' },
    { name: 'OpenZeppelin', category: 'Library' },
    { name: 'IPFS', category: 'Storage' },
    { name: 'MetaMask', category: 'Wallet' },
    { name: 'WalletConnect', category: 'Wallet' },
    { name: 'The Graph', category: 'Indexing' },
    { name: 'Chainlink', category: 'Oracle' },
    { name: 'Uniswap', category: 'DeFi' },
    { name: 'Aave', category: 'DeFi' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blockchain & Web3
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">
              Decentralized applications, smart contracts, and Web3 solutions for the future of the internet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                Explore Web3 Solutions
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Web3 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is Web3?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Web3 represents the next evolution of the internet, built on blockchain technology 
                and decentralized principles. It enables peer-to-peer interactions, digital ownership, 
                and programmable money through smart contracts and decentralized applications.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Link className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Decentralization</h3>
                    <p className="text-gray-600">No single point of control or failure</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Trustless</h3>
                    <p className="text-gray-600">Transactions without intermediaries</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Programmable</h3>
                    <p className="text-gray-600">Smart contracts automate complex logic</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🔗</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Web3 Benefits</h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-indigo-600">100%</div>
                    <div className="text-sm text-gray-600">Decentralized</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-indigo-600">24/7</div>
                    <div className="text-sm text-gray-600">Always available</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-indigo-600">$0</div>
                    <div className="text-sm text-gray-600">Intermediary fees</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Blockchain & Web3 Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete blockchain development and Web3 solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blockchainServices.map((service, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative ${service.popular ? 'ring-2 ring-indigo-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-indigo-600">{service.price}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Work With
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge blockchain and Web3 technologies
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors">
                <div className="text-sm font-semibold text-gray-900">{tech.name}</div>
                <div className="text-xs text-gray-500">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Web3 Use Cases
            </h2>
            <p className="text-xl text-gray-600">
              Real-world applications of blockchain and Web3 technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">DeFi (Decentralized Finance)</h3>
              <p className="text-gray-600 mb-4">Lending, borrowing, and trading without traditional banks</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Decentralized exchanges
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Yield farming
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Liquidity pools
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">NFTs (Non-Fungible Tokens)</h3>
              <p className="text-gray-600 mb-4">Digital ownership and unique digital assets</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Digital art
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Gaming assets
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Collectibles
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">DAOs (Decentralized Organizations)</h3>
              <p className="text-gray-600 mb-4">Community-governed organizations without central authority</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Governance tokens
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Voting systems
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Treasury management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Web3 Solutions?
            </h2>
            <p className="text-xl text-gray-600">
              Leading expertise in blockchain development and Web3 innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Link className="w-8 h-8 text-indigo-600" />
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
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Successful Web3 projects and deployments</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">Cutting-edge Web3 technologies and solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build the Future of Web3?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Contact our blockchain experts for a consultation and custom Web3 solution development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlockchainWeb3Page;