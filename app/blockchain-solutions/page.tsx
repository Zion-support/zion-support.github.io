import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';

const BlockchainSolutionsPage: React.FC = () => {
  const features = [
    'Smart contract development',
    'DeFi protocol implementation',
    'NFT marketplace creation',
    'Blockchain integration services',
    'Cryptocurrency wallet development',
    'Tokenization solutions',
    'Consensus mechanism implementation',
    'Cross-chain interoperability',
    'Security auditing services',
    'Blockchain consulting'
  ];

  const benefits = [
    'Increase transparency by 100%',
    'Reduce transaction costs by 60%',
    'Eliminate intermediaries by 80%',
    'Enhance security by 95%',
    'Improve traceability by 90%',
    'Accelerate settlement times by 70%'
  ];

  const pricing = {
    consultation: { price: 5000, features: ['Blockchain strategy', 'Technology assessment', 'Implementation roadmap'] },
    development: { price: 25000, features: ['Smart contract development', 'DApp creation', 'Integration services'] },
    enterprise: { price: 100000, features: ['Full blockchain solution', 'Custom protocol', 'Ongoing support'] }
  };

  return (
    <>
      <SEOHead
        title="Blockchain Solutions - Zion Tech Group"
        description="Transform your business with cutting-edge blockchain solutions. Smart contracts, DeFi protocols, NFT marketplaces, and custom blockchain development services."
        keywords="blockchain development, smart contracts, DeFi, NFT, cryptocurrency, tokenization, blockchain consulting"
        canonicalUrl="https://ziontechgroup.com/blockchain-solutions"
      />
      
      <div className="min-h-screen futuristic-bg cyber-grid">
        {/* Hero Section */}
        <div className="relative z-10 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="text-6xl mb-6 animated-icon">⛓️</div>
              <h1 className="text-5xl md:text-7xl font-bold holographic-text mb-6">
                Blockchain Solutions
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your business with cutting-edge blockchain technology. From smart contracts to DeFi protocols, 
                we build secure, transparent, and decentralized solutions that drive innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <a href="#demo" className="neon-button text-lg px-10 py-4">
                  View Demo
                </a>
                <a href="#pricing" className="neon-button-purple text-lg px-10 py-4">
                  See Pricing
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-text mb-6">Blockchain Capabilities</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto mb-8"></div>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Comprehensive blockchain development services powered by cutting-edge technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="futuristic-card glow-effect p-6 group">
                  <div className="text-3xl mb-4 animated-icon">🔗</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:neon-text transition-all duration-300">
                    {feature}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Advanced blockchain technology solutions for modern business needs.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="relative z-10 py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-text-purple mb-6">Business Impact</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-neon-cyan mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="futuristic-card glow-effect p-8 text-center">
                  <div className="text-4xl font-bold neon-text-pink mb-4">
                    {benefit.split(' ')[0]}
                  </div>
                  <p className="text-white text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-text mb-6">Blockchain Solutions</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8"></div>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Choose the blockchain solution that fits your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(pricing).map(([plan, details], index) => (
                <div key={plan} className={`futuristic-card glow-effect p-8 ${
                  plan === 'development' ? 'ring-2 ring-neon-cyan' : ''
                }`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4 capitalize">{plan}</h3>
                    <div className="text-4xl font-bold neon-text mb-2">${details.price.toLocaleString()}</div>
                    <div className="text-gray-400">starting from</div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {details.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white">
                        <span className="text-neon-cyan mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact" 
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan === 'development' 
                        ? 'neon-button' 
                        : 'neon-button-purple'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="futuristic-card glow-effect p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold holographic-text mb-6">
                Ready to Build on Blockchain?
              </h2>
              <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
                Join the blockchain revolution with our expert development team and cutting-edge solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <a href="/contact" className="neon-button text-lg px-10 py-4">
                  Start Your Project
                </a>
                <a href="tel:+13024640950" className="neon-button-purple text-lg px-10 py-4">
                  Call +1 302 464 0950
                </a>
              </div>
              
              <div className="text-sm text-gray-400">
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockchainSolutionsPage;