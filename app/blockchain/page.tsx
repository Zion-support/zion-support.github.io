'use client';
import React from 'react';
import { Lock, Zap, Globe, Shield, BarChart, Settings, Smartphone, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const BlockchainPage: React.FC = () => {
  const blockchainServices = [
    {
      title: 'Smart Contracts',
      description: 'Secure, automated smart contracts for various blockchain platforms',
      icon: Lock,
      features: ['Ethereum Contracts', 'Solidity Development', 'Security Audits', 'Gas Optimization']
    },
    {
      title: 'DApp Development',
      description: 'Decentralized applications that run on blockchain networks',
      icon: Globe,
      features: ['Frontend Development', 'Web3 Integration', 'Wallet Integration', 'User Experience']
    },
    {
      title: 'Token Creation',
      description: 'Custom cryptocurrency and token development services',
      icon: Zap,
      features: ['ERC-20 Tokens', 'NFT Development', 'Token Economics', 'DeFi Integration']
    },
    {
      title: 'DeFi Solutions',
      description: 'Decentralized finance applications and protocols',
      icon: BarChart,
      features: ['DEX Development', 'Yield Farming', 'Liquidity Pools', 'Staking Mechanisms']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Blockchain Solutions - Zion Tech Group"
        description="Comprehensive blockchain development services including smart contracts, DApps, token creation, and DeFi solutions. Build the future of decentralized technology."
        keywords={['blockchain development', 'smart contracts', 'DApps', 'token creation', 'DeFi', 'Web3', 'cryptocurrency']}
        canonicalUrl="https://ziontechgroup.com/blockchain"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Blockchain Solutions
            </h1>
            <p className="text-xl text-yellow-400 mb-8 font-medium">
              Build the Future of Decentralized Technology
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Comprehensive blockchain development services for smart contracts, DApps, tokens, and DeFi solutions. 
              Transform your business with cutting-edge blockchain technology.
            </p>
          </section>

          {/* Blockchain Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blockchainServices.map((service, index) => (
                <article key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
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
                </article>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Why Choose Our Blockchain Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-3">Secure & Trustless</h3>
                <p className="text-gray-300">Blockchain technology that eliminates the need for intermediaries and provides cryptographic security.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">Transparent & Immutable</h3>
                <p className="text-gray-300">Transparent, tamper-proof records that provide complete audit trails and accountability.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-white mb-3">Global & Decentralized</h3>
                <p className="text-gray-300">Borderless solutions that work globally without central authority or single points of failure.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cyber-card p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Build on Blockchain?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let our blockchain experts help you build the next generation of decentralized applications. 
              Get a free consultation and discover how blockchain can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlockchainPage;