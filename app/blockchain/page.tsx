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
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Blockchain Solutions</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Leverage blockchain technology for secure, transparent, and decentralized business solutions.
          </p>
        </div>
      </div>
    </>);

};

export default BlockchainPage;
