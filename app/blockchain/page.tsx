'use client';
import React from 'react';
import { Lock, Coins, Zap, Shield, Globe, Code } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const BlockchainPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Blockchain Solutions - Zion Tech Group"
        description="Advanced blockchain development services including smart contracts, DApp development, token creation, and DeFi solutions. Expert blockchain technology implementation."
        keywords={['blockchain development', 'smart contracts', 'DApp development', 'token creation', 'DeFi solutions', 'cryptocurrency']}
        canonicalUrl="https://ziontechgroup.com/blockchain"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Blockchain Solutions
            </h1>
            <p className="text-xl text-yellow-400 mb-8 font-medium">
              Decentralized Technology Solutions
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Build the future with our advanced blockchain solutions. 
              From smart contracts to DeFi applications, we help you leverage decentralized technology.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Blockchain Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Lock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Smart Contracts</h3>
                <p className="text-gray-300">Secure and automated contract execution</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">DApp Development</h3>
                <p className="text-gray-300">Decentralized application development</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Coins className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Token Creation</h3>
                <p className="text-gray-300">Custom cryptocurrency and token development</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Build on Blockchain?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact our blockchain experts today to discuss your decentralized project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Get Started Today
                </a>
                <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300">
                  Call +1 302 464 0950
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