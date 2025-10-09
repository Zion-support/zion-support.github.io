'use client';
import React from 'react';
import { Lock, Code, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const BlockchainPage: React.FC = () => {
  const features = [
    'Smart Contract Development',
    'DApp Development',
    'Token Creation',
    'DeFi Solutions',
    'NFT Marketplaces',
    'Web3 Integration'
  ];

  const benefits = [
    '100% secure transactions',
    'Decentralized architecture',
    'Transparent operations',
    'Future-proof technology'
  ];

  return (
    <>
      <SEOOptimizer
        title="Blockchain & Web3 Solutions - Zion Tech Group"
        description="Blockchain development, cryptocurrency solutions, and Web3 applications. Build decentralized solutions with smart contracts and blockchain technology."
        keywords={['blockchain', 'web3', 'smart contracts', 'defi', 'nft', 'cryptocurrency', 'dapp development']}
        canonicalUrl="https://ziontechgroup.com/blockchain"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Blockchain & Web3 Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Build the future with decentralized applications, smart contracts, and Web3 
              solutions that leverage blockchain technology for secure, transparent operations.
            </p>
          </section>

          {/* Service Details */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                  Decentralized Solutions
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Our blockchain experts develop cutting-edge decentralized applications and 
                  smart contracts that revolutionize how businesses operate. From DeFi to NFTs, 
                  we create secure, transparent solutions.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3">Key Features:</h3>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="cyber-card p-8">
                <div className="text-center mb-6">
                  <Lock className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Starting at</h3>
                  <div className="text-4xl font-bold text-yellow-400 mb-4">$2,000/month</div>
                  <p className="text-gray-300">Complete blockchain development</p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-3">What's Included:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Smart contract development</li>
                    <li>• DApp frontend and backend</li>
                    <li>• Token creation and management</li>
                    <li>• DeFi protocol development</li>
                    <li>• Security auditing</li>
                    <li>• Web3 integration support</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Blockchain Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    {benefit.split(' ')[0]}
                  </div>
                  <p className="text-gray-300 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Build the Future?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Let our blockchain experts help you create decentralized solutions 
                that transform your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold"
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