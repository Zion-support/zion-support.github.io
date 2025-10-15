import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlockchainSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blockchain & Web3 Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive blockchain development and Web3 solutions including smart contracts, DeFi, and NFT platforms. Build the future with blockchain technology." />
        <meta name="keywords" content="blockchain development, Web3 solutions, smart contracts, DeFi, NFT platforms, cryptocurrency, decentralized applications" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <div className="text-8xl mb-6">⛓️</div>
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Blockchain & <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Web3 Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive blockchain development and Web3 solutions including smart contracts, DeFi platforms, 
                NFT marketplaces, and decentralized applications. Build the future with blockchain technology.
              </p>
              
              {/* Contact CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  📞 Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  ✉️ Get Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Blockchain Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From smart contracts to full-scale DeFi platforms, we provide end-to-end blockchain solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '📜',
                  title: 'Smart Contract Development',
                  description: 'Secure and audited smart contracts for various blockchain platforms'
                },
                {
                  icon: '🏦',
                  title: 'DeFi Platform Development',
                  description: 'Complete decentralized finance platforms with trading and lending features'
                },
                {
                  icon: '🎨',
                  title: 'NFT Marketplace Creation',
                  description: 'Custom NFT marketplaces with minting, trading, and auction capabilities'
                },
                {
                  icon: '🔗',
                  title: 'Blockchain Integration',
                  description: 'Integrate blockchain technology into existing business systems'
                },
                {
                  icon: '💳',
                  title: 'Cryptocurrency Wallets',
                  description: 'Secure multi-chain wallets with advanced security features'
                },
                {
                  icon: '🌐',
                  title: 'DApp Development',
                  description: 'Decentralized applications with user-friendly interfaces'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20 hover:scale-105 transition-all duration-300">
                  <div className="text-6xl mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Investment <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Options</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for blockchain development projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Basic',
                  price: '$10,000',
                  period: 'starting',
                  features: [
                    'Smart contract development',
                    'Basic DApp interface',
                    'Single blockchain platform',
                    'Standard security audit',
                    '3 months support',
                    'Documentation'
                  ]
                },
                {
                  name: 'Pro',
                  price: '$50,000',
                  period: 'starting',
                  features: [
                    'Full DeFi platform',
                    'Multi-chain support',
                    'Advanced security features',
                    'Comprehensive audit',
                    '6 months support',
                    'API integration',
                    'Custom features'
                  ],
                  popular: true
                },
                {
                  name: 'Enterprise',
                  price: '$200,000',
                  period: 'starting',
                  features: [
                    'Complete ecosystem',
                    'Cross-chain solutions',
                    'Enterprise security',
                    'Multiple audits',
                    '12 months support',
                    'White-label solution',
                    'Custom development',
                    'SLA guarantee'
                  ]
                }
              ].map((plan, index) => (
                <div key={index} className={`relative rounded-2xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-2 border-cyan-500' 
                    : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="tel:+13024640950"
                    className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Build the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the blockchain revolution with our expert development team. 
                Contact us today for a free consultation and project assessment.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  📞 Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  ✉️ Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlockchainSolutionsPage;