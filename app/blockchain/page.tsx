'use client';
import React from 'react';
import { Lock, Zap, BarChart, Shield, Settings, Cloud } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const BlockchainPage: React.FC = () => {
  const blockchainServices = [
    {
      title: 'Smart Contracts',
      description: 'Secure, automated smart contracts for decentralized applications and business logic',
      icon: Lock,
      features: ['Solidity Development', 'Contract Testing', 'Security Audits', 'Deployment'],
      benefits: ['Automated execution', 'Transparent transactions', 'Reduced costs']
    },
    {
      title: 'DApp Development',
      description: 'Decentralized applications that run on blockchain networks',
      icon: Zap,
      features: ['Frontend Development', 'Blockchain Integration', 'Wallet Integration', 'User Interface'],
      benefits: ['Decentralized architecture', 'User control', 'Transparent operations']
    },
    {
      title: 'Token Creation',
      description: 'Custom cryptocurrency tokens and tokenomics for your business needs',
      icon: BarChart,
      features: ['ERC-20/ERC-721 Tokens', 'Tokenomics Design', 'ICO/IDO Launch', 'Token Management'],
      benefits: ['Custom tokens', 'Fundraising', 'Community building']
    },
    {
      title: 'DeFi Solutions',
      description: 'Decentralized finance applications for lending, trading, and yield farming',
      icon: Shield,
      features: ['Lending Protocols', 'DEX Development', 'Yield Farming', 'Liquidity Pools'],
      benefits: ['Financial inclusion', 'Lower fees', 'Global access']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Blockchain Solutions - Zion Tech Group"
        description="Advanced blockchain development services including smart contracts, DApps, token creation, and DeFi solutions. Build the future of decentralized applications."
        keywords={['blockchain development', 'smart contracts', 'DApps', 'token creation', 'DeFi', 'cryptocurrency']}
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Blockchain Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Build the Future of Decentralized Applications
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Our blockchain solutions help you leverage the power of decentralized technology 
              to build secure, transparent, and efficient applications that transform industries.
            </p>
          </section>

          {/* Blockchain Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blockchainServices.map((service, index) => (
                <article key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-center text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-yellow-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-orange-400 mb-3">Business Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Build on the Blockchain?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Let our blockchain experts help you create innovative decentralized solutions that transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your Blockchain Project
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <span>+1 302 464 0950</span>
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