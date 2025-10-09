'use client';
import React from 'react';
import { Lock, Coins, Zap, Shield, CheckCircle, ArrowRight, Phone as PhoneIcon } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import SEOOptimizer from '../components/SEOOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import Analytics from '../components/Analytics';
import SecurityEnhancer from '../components/SecurityEnhancer';

const BlockchainPage: React.FC = () => {
  const blockchainServices = [
    {
      title: 'Smart Contracts',
      description: 'Secure, automated smart contract development and deployment',
      features: ['Solidity Development', 'Security Auditing', 'Gas Optimization', 'Multi-chain Support'],
      icon: Lock
    },
    {
      title: 'DApp Development',
      description: 'Decentralized applications with Web3 integration',
      features: ['Frontend Integration', 'Wallet Connectivity', 'IPFS Storage', 'User Experience'],
      icon: Coins
    },
    {
      title: 'Token Creation',
      description: 'Custom cryptocurrency and token development',
      features: ['ERC-20/721/1155', 'Token Economics', 'DeFi Integration', 'Exchange Listing'],
      icon: Zap
    },
    {
      title: 'DeFi Solutions',
      description: 'Decentralized finance protocols and applications',
      features: ['Yield Farming', 'Liquidity Pools', 'DEX Development', 'Staking Mechanisms'],
      icon: Shield
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Blockchain Solutions - Zion Tech Group"
        description="Advanced blockchain development services including smart contracts, DApps, token creation, and DeFi solutions. Build the future of decentralized applications."
        keywords={['blockchain development', 'smart contracts', 'DApp development', 'token creation', 'DeFi solutions', 'Web3']}
        canonicalUrl="https://ziontechgroup.com/blockchain"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24" role="main">
          <section className="text-center mb-16 cyber-scan-line" aria-labelledby="hero-heading">
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch"
                data-text="Blockchain Solutions"
              >
                Blockchain Solutions
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect">
                Decentralized Future Technology
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Build the future with our comprehensive blockchain solutions. From smart contracts to DeFi protocols, 
                we help businesses leverage decentralized technology for innovation and growth.
              </p>
            </div>
          </section>

          <section className="mb-16" aria-labelledby="blockchain-services-heading">
            <h2 id="blockchain-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Our Blockchain Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Comprehensive blockchain development for the decentralized economy
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {blockchainServices.map((service, index) => (
                <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-yellow-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-16" aria-labelledby="contact-cta-heading">
            <div className="cyber-card p-8 text-center">
              <h2 id="contact-cta-heading" className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Build on the Blockchain?
              </h2>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                Let our blockchain experts help you develop innovative decentralized solutions 
                that will transform your business and create new opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Free Blockchain Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <PhoneIcon className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlockchainPage;