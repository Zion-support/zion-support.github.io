import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blockchain Services - Comprehensive Blockchain Solutions | Zion Tech Group',
  description: 'Comprehensive blockchain development services including smart contracts, DeFi protocols, NFT platforms, and enterprise blockchain solutions.',
  keywords: 'blockchain development, smart contracts, DeFi, NFT, Web3, cryptocurrency, enterprise blockchain, dApp development',
};

export default function BlockchainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Blockchain Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive blockchain development services including smart contracts, 
            DeFi protocols, NFT platforms, and enterprise blockchain solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">✍️</div>
            <h3 className="text-xl font-semibold text-white mb-3">Smart Contract Development</h3>
            <p className="text-gray-300 mb-4">Secure and efficient smart contracts for various blockchain platforms.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Ethereum smart contracts</li>
              <li>• Solana programs</li>
              <li>• Polygon solutions</li>
              <li>• Security auditing</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold text-white mb-3">DeFi Protocols</h3>
            <p className="text-gray-300 mb-4">Decentralized finance solutions including DEX, lending, and yield farming.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• DEX development</li>
              <li>• Lending platforms</li>
              <li>• Yield farming</li>
              <li>• Liquidity pools</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">🖼️</div>
            <h3 className="text-xl font-semibold text-white mb-3">NFT Platforms</h3>
            <p className="text-gray-300 mb-4">Custom NFT marketplaces and tokenization solutions.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• NFT marketplaces</li>
              <li>• Generative art</li>
              <li>• Tokenization</li>
              <li>• Royalty systems</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold text-white mb-3">Web3 Applications</h3>
            <p className="text-gray-300 mb-4">Decentralized applications with enhanced user control.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• dApp development</li>
              <li>• Wallet integration</li>
              <li>• User authentication</li>
              <li>• Data privacy</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-xl font-semibold text-white mb-3">Cross-Chain Solutions</h3>
            <p className="text-gray-300 mb-4">Interoperability solutions for multi-chain ecosystems.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Bridge development</li>
              <li>• Cross-chain swaps</li>
              <li>• Asset migration</li>
              <li>• Protocol integration</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-semibold text-white mb-3">Enterprise Solutions</h3>
            <p className="text-gray-300 mb-4">Custom blockchain solutions for enterprise needs.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Private blockchains</li>
              <li>• Supply chain tracking</li>
              <li>• Identity management</li>
              <li>• Compliance solutions</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Consultation</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$200<span className="text-lg text-gray-300">/hour</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Blockchain strategy</li>
                <li>Technology assessment</li>
                <li>Architecture planning</li>
                <li>Security review</li>
                <li>Implementation roadmap</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center border-2 border-blue-500">
              <h3 className="text-2xl font-bold text-white mb-4">Development</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$15,000<span className="text-lg text-gray-300">/project</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Smart contract development</li>
                <li>dApp development</li>
                <li>Testing & auditing</li>
                <li>Deployment support</li>
                <li>Documentation</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Most Popular
              </button>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">Custom<span className="text-lg text-gray-300"> pricing</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Custom blockchain solutions</li>
                <li>Multi-chain integration</li>
                <li>Advanced security features</li>
                <li>24/7 support</li>
                <li>White-label solutions</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Build the Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our blockchain experts help you create innovative solutions that leverage the power of decentralized technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
              Start Your Project
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-4 px-8 rounded-lg transition-colors">
              Schedule Consultation
            </button>
          </div>
          <div className="mt-8 text-gray-400">
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </div>
    </div>
  );
}