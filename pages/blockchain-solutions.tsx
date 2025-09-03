import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const BlockchainSolutions = () => {
  return (
    <>
      <Head>
        <title>Blockchain Solutions - Zion Tech Group</title>
        <meta name="description" content="Enterprise blockchain solutions and smart contract development" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Blockchain Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with secure, transparent, and efficient blockchain technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Smart Contracts</h2>
              <ul className="text-gray-600 space-y-2">
                <li>• Automated Agreements</li>
                <li>• DeFi Protocols</li>
                <li>• Supply Chain</li>
                <li>• Governance Systems</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Enterprise Blockchain</h2>
              <ul className="text-gray-600 space-y-2">
                <li>• Private Networks</li>
                <li>• Consortium Solutions</li>
                <li>• Cross-chain Integration</li>
                <li>• Scalability Solutions</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">NFT & Tokenization</h2>
              <ul className="text-gray-600 space-y-2">
                <li>• Digital Assets</li>
                <li>• Token Economics</li>
                <li>• Marketplace Development</li>
                <li>• Asset Management</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Start Your Project
              </Link>
              <Link href="/services/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockchainSolutions;