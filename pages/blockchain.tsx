import React from 'react';
import Layout from '../components/layout/MainLayout';

export default function BlockchainPage() {
  return (
    <Layout
      title="Blockchain Services - Zion Tech Group"
      description="Blockchain and Web3 solutions including smart contracts, DeFi, and cryptocurrency development."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blockchain Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Blockchain and Web3 solutions including smart contracts, DeFi, and cryptocurrency development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Smart Contracts</h3>
              <p className="text-gray-600 mb-4">
                Secure and efficient smart contract development and deployment.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">DeFi Solutions</h3>
              <p className="text-gray-600 mb-4">
                Decentralized finance applications and protocols.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Cryptocurrency Development</h3>
              <p className="text-gray-600 mb-4">
                Custom cryptocurrency and token development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}