import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlockchainWeb3Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>BlockchainWeb3 - Zion Tech Group | Blockchain Web3 Solutions</title>
        <meta name="description" content="Blockchain Web3 Solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center neon-text cyber-text">
              BlockchainWeb3
            </h1>
            
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Blockchain Web3 Solutions
            </p>

            <div className="cyber-card p-8 text-center">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Coming Soon</h2>
              <p className="text-gray-300 mb-6">
                We're developing comprehensive blockchainweb3 solutions. Contact us to learn more about our upcoming services.
              </p>
              <a href="/contact" className="cyber-button">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockchainWeb3Page;