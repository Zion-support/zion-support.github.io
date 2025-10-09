'use client';
import React from 'react';
import { Lock, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const BlockchainPage: React.FC = () => {
  const blockchainServices = [
    {
      title: 'Smart Contracts',
      description: 'Secure and automated contract execution on blockchain',
      features: ['Solidity Development', 'Contract Testing', 'Gas Optimization', 'Security Audits']
    },
    {
      title: 'DApp Development',
      description: 'Decentralized applications with Web3 integration',
      features: ['Frontend Development', 'Web3 Integration', 'Wallet Connection', 'User Interface']
    },
    {
      title: 'Token Creation',
      description: 'Custom cryptocurrency and token development',
      features: ['ERC-20 Tokens', 'ERC-721 NFTs', 'Token Economics', 'ICO/IDO Launch']
    },
    {
      title: 'DeFi Solutions',
      description: 'Decentralized finance applications and protocols',
      features: ['DEX Development', 'Yield Farming', 'Liquidity Pools', 'Staking Mechanisms']
    }
  ];

  return (
    <>
      <SEOEnhancer
        title="Blockchain & Web3 Solutions - Zion Tech Group"
        description="Comprehensive blockchain solutions including smart contracts, DApp development, token creation, and DeFi solutions. Build the future of decentralized applications."
        keywords={['blockchain', 'smart contracts', 'DApp development', 'token creation', 'DeFi', 'Web3']}
        canonicalUrl="https://ziontechgroup.com/blockchain"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
              Blockchain & Web3 Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Build the future of decentralized applications with our blockchain solutions.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blockchainServices.map((service, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="cyber-card p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Build on Blockchain?</h2>
            <p className="text-gray-300 mb-6">Let's discuss your blockchain needs.</p>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Contact Us
            </a>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlockchainPage;