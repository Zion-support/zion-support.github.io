import React from 'react';
import SEOHead from '../components/SEOHead';

const BlockchainSolutionsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Blockchain Solutions - Smart Contracts & DApps Development | Zion Tech Group"
        description="Professional blockchain development services including smart contracts, DApps, DeFi solutions, and enterprise blockchain integration. Secure, scalable, and innovative blockchain solutions."
        keywords="blockchain development, smart contracts, DApps, DeFi, cryptocurrency, Web3, Ethereum, Solana, enterprise blockchain"
        canonicalUrl="https://ziontechgroup.com/blockchain-solutions"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Blockchain Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Build the future with cutting-edge blockchain technology. From smart contracts to DeFi platforms, 
                we create secure, scalable, and innovative blockchain solutions for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                  Start Your Project
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Our Blockchain Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive blockchain development solutions for the decentralized future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Smart Contracts</h3>
              <p className="text-gray-300 mb-6">
                Develop secure and audited smart contracts for various use cases including DeFi, NFTs, and enterprise applications.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Solidity & Rust development</li>
                <li>• Security auditing</li>
                <li>• Gas optimization</li>
                <li>• Multi-signature wallets</li>
                <li>• Upgradeable contracts</li>
              </ul>
            </div>

            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold text-purple-400 mb-4">DApps Development</h3>
              <p className="text-gray-300 mb-6">
                Build decentralized applications with modern Web3 technologies, providing seamless user experiences.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Frontend & backend development</li>
                <li>• Web3 integration</li>
                <li>• Wallet connectivity</li>
                <li>• IPFS integration</li>
                <li>• Cross-chain compatibility</li>
              </ul>
            </div>

            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-8 hover:border-pink-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-pink-400 mb-4">DeFi Solutions</h3>
              <p className="text-gray-300 mb-6">
                Create decentralized finance platforms including DEXs, lending protocols, and yield farming applications.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• DEX development</li>
                <li>• Lending & borrowing protocols</li>
                <li>• Yield farming platforms</li>
                <li>• Liquidity pools</li>
                <li>• Governance tokens</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Blockchain Platforms */}
        <div className="bg-gray-800/30 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Supported Platforms
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We develop on leading blockchain platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-3">⟠</div>
                <h3 className="text-lg font-semibold text-cyan-400">Ethereum</h3>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">◎</div>
                <h3 className="text-lg font-semibold text-purple-400">Solana</h3>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">◈</div>
                <h3 className="text-lg font-semibold text-pink-400">Polygon</h3>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">◈</div>
                <h3 className="text-lg font-semibold text-green-400">BSC</h3>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">◈</div>
                <h3 className="text-lg font-semibold text-yellow-400">Avalanche</h3>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">◈</div>
                <h3 className="text-lg font-semibold text-red-400">Arbitrum</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Development Packages
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for blockchain development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Smart Contract</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$4,999<span className="text-lg text-gray-400">/project</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Single smart contract
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Security audit
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Gas optimization
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Testing & deployment
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    2 weeks delivery
                  </li>
                </ul>
                <button className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-colors">
                  Get Started
                </button>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/50 rounded-2xl p-8 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">DApp Development</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$12,999<span className="text-lg text-gray-400">/project</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Complete DApp
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Smart contracts
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Frontend & backend
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Web3 integration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Security audit
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    6 weeks delivery
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300">
                  Get Started
                </button>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">DeFi Platform</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$29,999<span className="text-lg text-gray-400">/project</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Complete DeFi platform
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Multiple smart contracts
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Advanced frontend
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Liquidity pools
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Governance system
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    12 weeks delivery
                  </li>
                </ul>
                <button className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600 to-purple-700 py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build on Blockchain?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Let our blockchain experts help you create innovative decentralized solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-colors">
                View Case Studies
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-200">
              <p>Contact: +1 302 464 0950 | kleber@ziontechgroup.com</p>
              <p>364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockchainSolutionsPage;