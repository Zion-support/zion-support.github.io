'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlockchainWeb3Page: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>BlockchainWeb3 - Zion Tech Group</title>
        <meta name="description" content="Professional BlockchainWeb3 services by Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-6">BlockchainWeb3</h1>
          <p className="text-lg text-gray-300">
            This page is currently under development. Please check back soon for more information.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlockchainWeb3Page;
