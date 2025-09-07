import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Blockchain Solutions | Zion Tech Group',
  description: 'Professional blockchain development services including smart contracts, DeFi, NFTs, and Web3 applications.',
  keywords: 'blockchain, smart contracts, DeFi, NFTs, Web3, cryptocurrency, ethereum, polygon'
};

export default function BlockchainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Blockchain Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with cutting-edge blockchain technology. We build secure, scalable, and innovative blockchain solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Smart Contracts</h3>
            <p className="text-gray-600">Automate business processes with secure, self-executing smart contracts.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">DeFi Applications</h3>
            <p className="text-gray-600">Build decentralized finance solutions for lending, trading, and yield farming.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">NFT Marketplaces</h3>
            <p className="text-gray-600">Create and launch NFT platforms for digital art, collectibles, and more.</p>
          </div>
        </div>
      </div>
    </div>
  );
}