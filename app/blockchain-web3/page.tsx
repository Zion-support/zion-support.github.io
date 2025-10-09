import React from 'react';
import { CheckCircle, Zap, Shield, Globe, Database, Users } from 'lucide-react';

const BlockchainWeb3Page: React.FC = () => {
  const blockchainServices = [
    {
      name: 'Smart Contract Development',
      price: '$8,000/month',
      description: 'Custom smart contracts for DeFi, NFTs, and enterprise applications',
      features: [
        'Solidity development',
        'Smart contract auditing',
        'Gas optimization',
        'Multi-chain deployment'
      ],
      icon: Shield,
      benefits: [
        'Automated business logic',
        'Transparent transactions',
        'Reduced intermediaries',
        'Enhanced security'
      ]
    },
    {
      name: 'DeFi Platform Development',
      price: '$15,000/month',
      description: 'Decentralized finance platforms and protocols',
      features: [
        'DEX development',
        'Liquidity pools',
        'Yield farming',
        'Staking mechanisms'
      ],
      icon: Zap,
      benefits: [
        'Permissionless access',
        'Global liquidity',
        'Programmable money',
        'Innovative financial products'
      ]
    },
    {
      name: 'NFT Marketplace',
      price: '$12,000/month',
      description: 'Complete NFT marketplace with minting and trading capabilities',
      features: [
        'NFT minting platform',
        'Marketplace functionality',
        'Royalty management',
        'Multi-wallet support'
      ],
      icon: Globe,
      benefits: [
        'Digital asset ownership',
        'Creator royalties',
        'Global accessibility',
        'Immutable records'
      ]
    },
    {
      name: 'Enterprise Blockchain',
      price: '$20,000/month',
      description: 'Private blockchain solutions for enterprise applications',
      features: [
        'Consortium networks',
        'Permissioned access',
        'Custom consensus',
        'Integration APIs'
      ],
      icon: Database,
      benefits: [
        'Enhanced transparency',
        'Improved traceability',
        'Reduced costs',
        'Streamlined processes'
      ]
    }
  ];

  const useCases = [
    {
      title: 'Supply Chain Management',
      description: 'Transparent and traceable supply chain tracking',
      benefits: ['End-to-end visibility', 'Fraud prevention', 'Quality assurance', 'Compliance tracking']
    },
    {
      title: 'Digital Identity',
      description: 'Self-sovereign identity and credential management',
      benefits: ['Privacy protection', 'Reduced fraud', 'User control', 'Interoperability']
    },
    {
      title: 'Tokenization',
      description: 'Asset tokenization and fractional ownership',
      benefits: ['Liquidity enhancement', 'Accessibility', 'Transparency', 'Automation']
    },
    {
      title: 'Decentralized Governance',
      description: 'Community-driven decision making and voting systems',
      benefits: ['Transparent voting', 'Community participation', 'Automated execution', 'Fair distribution']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Blockchain & Web3 Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Build the future of decentralized applications with our comprehensive blockchain and Web3 solutions. 
            From smart contracts to DeFi platforms, we deliver cutting-edge blockchain technology.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
              <div className="text-gray-300">Smart Contracts</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300">DApps Built</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">$10M+</div>
              <div className="text-gray-300">TVL Managed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Blockchain Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blockchainServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                    <div className="text-2xl font-bold text-green-400">{service.price}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <Zap className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Use Cases & Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Smart Contracts</h3>
              <p className="text-gray-300">Solidity, Vyper, and other smart contract languages</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Web3 Integration</h3>
              <p className="text-gray-300">Web3.js, Ethers.js, and MetaMask integration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Blockchain Networks</h3>
              <p className="text-gray-300">Ethereum, Polygon, BSC, and other networks</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Build the Future?
          </h2>
          <p className="text-purple-100 mb-6">
            Start your blockchain journey with our expert development team and cutting-edge solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Blockchain Consultation
            </a>
            <a
              href="/demo"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainWeb3Page;