'use client';
import React from 'react';
import { Lock, Zap, Shield, Globe, Code, BarChart, Settings, Cpu } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const BlockchainPage: React.FC = () => {
  const services = [
    {
      title: 'Smart Contracts',
      description: 'Secure and efficient smart contract development',
      icon: Code,
      features: ['Solidity development', 'Security auditing', 'Gas optimization', 'Testing frameworks']
    },
    {
      title: 'DApp Development',
      description: 'Decentralized applications for various use cases',
      icon: Globe,
      features: ['Frontend development', 'Blockchain integration', 'Wallet connectivity', 'User experience']
    },
    {
      title: 'Token Creation',
      description: 'Custom cryptocurrency and token development',
      icon: Zap,
      features: ['ERC-20/ERC-721 tokens', 'Tokenomics design', 'ICO/IDO support', 'Exchange listing']
    },
    {
      title: 'DeFi Solutions',
      description: 'Decentralized finance protocols and applications',
      icon: BarChart,
      features: ['DEX development', 'Yield farming', 'Liquidity pools', 'Staking mechanisms']
    }
  ];

  const platforms = [
    {
      title: 'Ethereum',
      description: 'Smart contracts and DApps on Ethereum',
      icon: Lock,
      useCase: 'Most popular blockchain platform'
    },
    {
      title: 'Binance Smart Chain',
      description: 'Fast and low-cost transactions',
      icon: Zap,
      useCase: 'High-performance DeFi'
    },
    {
      title: 'Polygon',
      description: 'Layer 2 scaling solution',
      icon: Globe,
      useCase: 'Scalable applications'
    },
    {
      title: 'Solana',
      description: 'High-speed blockchain platform',
      icon: Cpu,
      useCase: 'Real-time applications'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Blockchain Solutions - Zion Tech Group"
        description="Comprehensive blockchain development services including smart contracts, DApps, token creation, and DeFi solutions. Expert blockchain consulting and implementation."
        keywords={['blockchain development', 'smart contracts', 'DApps', 'token creation', 'DeFi', 'cryptocurrency', 'Web3']}
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
            <p className="text-xl md:text-2xl text-yellow-400 mb-8 font-medium">
              Smart Contracts, DApps, and DeFi Development
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Build the future of decentralized applications with our comprehensive blockchain solutions. 
              From smart contracts to DeFi protocols, we help you leverage blockchain technology 
              for innovative business solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Blockchain Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300"
              >
                <span>+1 302 464 0950</span>
              </a>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Our Blockchain Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Platforms Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Blockchain Platforms
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 neon-text">{platform.title}</h3>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">{platform.description}</p>
                  <div className="text-yellow-400 font-semibold text-xs">{platform.useCase}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Blockchain Development Pricing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Smart Contract</h3>
                <div className="text-3xl font-bold text-yellow-400 mb-4">$2,000<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Basic smart contract</li>
                  <li>Security audit</li>
                  <li>Testing framework</li>
                  <li>Deployment support</li>
                  <li>Email support</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center ring-2 ring-yellow-400">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 neon-text">DApp Development</h3>
                <div className="text-3xl font-bold text-yellow-400 mb-4">$5,000<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Complete DApp</li>
                  <li>Frontend & backend</li>
                  <li>Wallet integration</li>
                  <li>Smart contracts</li>
                  <li>Testing & deployment</li>
                  <li>Priority support</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Enterprise Platform</h3>
                <div className="text-3xl font-bold text-yellow-400 mb-4">Custom</div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Custom blockchain platform</li>
                  <li>Multi-chain support</li>
                  <li>Advanced DeFi features</li>
                  <li>Custom integrations</li>
                  <li>White-label solutions</li>
                  <li>Dedicated team</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Contact Sales
                </a>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Build on the Blockchain?</h2>
              <p className="text-lg text-gray-300 mb-6">
                Let our blockchain experts help you create innovative decentralized solutions.
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
                  className="flex items-center justify-center gap-2 border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300"
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