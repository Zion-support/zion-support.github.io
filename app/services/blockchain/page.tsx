import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blockchain Solutions | Zion Tech Group',
  description: 'Professional blockchain development services including smart contracts, DeFi, NFTs, and Web3 applications.',
  keywords: 'blockchain, smart contracts, DeFi, NFTs, Web3, cryptocurrency, ethereum, polygon'
};

export default function BlockchainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Blockchain Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional blockchain solutions designed to meet your business requirements and drive growth. Our expert team delivers high-quality, scalable solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Smart Contracts</h3>
            <p className="text-gray-300 mb-6">Secure and efficient smart contract development for various blockchain platforms.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Ethereum development</li>
              <li>• Polygon integration</li>
              <li>• Security auditing</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">DeFi Protocols</h3>
            <p className="text-gray-300 mb-6">Decentralized finance solutions including DEXs, lending platforms, and yield farming.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• DEX development</li>
              <li>• Lending protocols</li>
              <li>• Yield optimization</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">NFT Platforms</h3>
            <p className="text-gray-300 mb-6">Complete NFT marketplace and platform development for digital assets.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Marketplace development</li>
              <li>• Minting systems</li>
              <li>• Royalty management</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}