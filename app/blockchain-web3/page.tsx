import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlockchainWeb3Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blockchain & Web3 Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive blockchain and Web3 solutions for decentralized applications and smart contracts." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Blockchain & Web3 Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge blockchain and Web3 solutions for the decentralized future
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockchainWeb3Page;