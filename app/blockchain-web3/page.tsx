import React from 'react';
<<<<<<< HEAD
import SEOHead from '../components/SEOHead';

const BlockchainWeb3Page: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Blockchain & Web3 Solutions - Zion Tech Group"
        description="Cutting-edge blockchain and Web3 solutions for decentralized applications and digital transformation."
      />
=======
import { Helmet } from 'react-helmet-async';

export default function BlockchainWeb3Page() {
  return (
    <>
      <Helmet>
        <title>Blockchain & Web3 Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive blockchain and Web3 solutions including smart contracts, DeFi, and NFT platforms." />
      </Helmet>
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blockchain & Web3 Solutions</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
};

export default BlockchainWeb3Page;
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
