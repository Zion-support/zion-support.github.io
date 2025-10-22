'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlockchainPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blockchain Solutions - Zion Tech Group</title>
        <meta name="description" content="Leverage blockchain technology for secure, transparent, and decentralized business solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Blockchain Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage blockchain technology for secure, transparent, and decentralized business solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Smart Contracts</h3>
              <p className="text-gray-600">Develop and deploy smart contracts for automated business processes.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">DeFi Solutions</h3>
              <p className="text-gray-600">Build decentralized finance applications and protocols.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Supply Chain</h3>
              <p className="text-gray-600">Implement blockchain for transparent supply chain management.</p>
            </div>
          </div>ursor/fix-errors-and-merge-to-main-b63b
        </div>
      </div>
    </>
  );
};

export default BlockchainPage;