import React from 'react';
import Navigation from '../../src/components/Navigation';
import Footer from '../../src/components/Footer';
import EnhancedSEO from '../../src/components/EnhancedSEO';

const BlockchainWeb3Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 cyber-grid neural-network-bg">
      <EnhancedSEO 
        title="Blockchain & Web3 - Zion Tech Group | Decentralized Solutions"
        description="Revolutionary blockchain and Web3 solutions for decentralized applications and digital transformation."
        keywords="blockchain, Web3, decentralized solutions, smart contracts, DeFi"
      />
      
      <Navigation />
      
      <main className="relative">
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="absolute inset-0 particle-field"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 cyber-text-3d">
                Blockchain &
                <span className="block neon-text">Web3</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Revolutionary blockchain and Web3 solutions for decentralized 
                applications and digital transformation.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlockchainWeb3Page;