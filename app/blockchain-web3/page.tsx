import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function BlockchainWeb3Page() {
  return (
    <>
      <Helmet>
        <title>Blockchain & Web3 Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive blockchain and Web3 solutions including smart contracts, DeFi, and NFT platforms." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blockchain & Web3 Solutions</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
}