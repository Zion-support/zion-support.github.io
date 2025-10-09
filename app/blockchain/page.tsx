'use client';
import React from 'react';
import { Lock, Coins, Zap, Shield, Globe, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const BlockchainPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Blockchain & Web3 Solutions - Zion Tech Group"
        description="Blockchain development, cryptocurrency solutions, and Web3 applications. Build decentralized applications with our blockchain expertise and smart contract development."
        keywords={['blockchain development', 'Web3 solutions', 'smart contracts', 'cryptocurrency', 'DeFi', 'NFT development']}
        canonicalUrl="https://ziontechgroup.com/blockchain"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Blockchain & Web3 Solutions
            </h1>
            <p className="text-xl text-yellow-400 mb-8 font-medium neon-pulse">
              Build the Future of Decentralized Technology
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Our blockchain experts help you build decentralized applications, smart contracts, 
              and Web3 solutions that leverage the power of blockchain technology.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center">
                <Lock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Smart Contracts</h3>
                <p className="text-gray-300">Secure, audited smart contracts for Ethereum, Polygon, and other blockchain networks</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Coins className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">DeFi Solutions</h3>
                <p className="text-gray-300">Decentralized finance applications including DEXs, lending protocols, and yield farming</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Web3 Integration</h3>
                <p className="text-gray-300">Integrate blockchain functionality into existing web applications and platforms</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Build on the Blockchain?</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Let our blockchain experts help you create innovative decentralized solutions.
              </p>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Blockchain Consultation
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