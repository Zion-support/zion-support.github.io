import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const BlockchainRevolution2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-full text-sm font-semibold mb-6">
            🔗 BLOCKCHAIN REVOLUTION 2025
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Blockchain Revolution 2025
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Experience the next generation of blockchain technology with Web3 integration, 
            DeFi protocols, and decentralized applications that are reshaping the digital economy.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Explore Blockchain Solutions
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-orange-900 transition-colors">
              Blockchain Demo
            </button>
          </div>
        </div>

        {/* Blockchain Innovations */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-2xl font-bold text-white mb-4">Web3 Integration</h3>
            <p className="text-gray-300 mb-6">
              Seamless integration of blockchain technology with web applications, 
              enabling decentralized identity, ownership, and value exchange.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Decentralized identity (DID)</li>
              <li>• NFT marketplaces</li>
              <li>• DAO governance</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-2xl font-bold text-white mb-4">DeFi Protocols</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary decentralized finance protocols enabling lending, borrowing, 
              and trading without traditional financial intermediaries.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Automated market makers</li>
              <li>• Yield farming</li>
              <li>• Cross-chain bridges</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🏭</div>
            <h3 className="text-2xl font-bold text-white mb-4">Enterprise Blockchain</h3>
            <p className="text-gray-300 mb-6">
              Enterprise-grade blockchain solutions for supply chain management, 
              digital identity, and secure data sharing across organizations.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Supply chain tracking</li>
              <li>• Digital certificates</li>
              <li>• Smart contracts</li>
            </ul>
          </div>
        </div>

        {/* Blockchain Use Cases */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">🚀 Revolutionary Use Cases</h2>
            <p className="text-xl text-gray-300">Blockchain transforming industries worldwide</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🏦</div>
              <h3 className="text-xl font-bold text-white mb-3">Digital Banking</h3>
              <p className="text-gray-300 text-sm">
                Decentralized banking services with instant cross-border payments
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎮</div>
              <h3 className="text-xl font-bold text-white mb-3">Gaming & NFTs</h3>
              <p className="text-gray-300 text-sm">
                Play-to-earn games and digital asset ownership in virtual worlds
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-white mb-3">Healthcare Records</h3>
              <p className="text-gray-300 text-sm">
                Secure, interoperable patient data across healthcare providers
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-white mb-3">Carbon Credits</h3>
              <p className="text-gray-300 text-sm">
                Transparent carbon offset trading and environmental impact tracking
              </p>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-orange-400 mb-2">100M+</div>
            <div className="text-white font-semibold mb-2">Active Users</div>
            <div className="text-gray-300 text-sm">Global blockchain users across all platforms</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-orange-400 mb-2">$3.2T</div>
            <div className="text-white font-semibold mb-2">Market Cap</div>
            <div className="text-gray-300 text-sm">Total value locked in blockchain ecosystems</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-orange-400 mb-2">99.99%</div>
            <div className="text-white font-semibold mb-2">Uptime</div>
            <div className="text-gray-300 text-sm">Decentralized networks with maximum reliability</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-white font-semibold mb-2">Global Access</div>
            <div className="text-gray-300 text-sm">Borderless financial services worldwide</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join the Blockchain Revolution?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge blockchain solutions that provide 
            transparency, security, and efficiency in the digital economy.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start Blockchain Journey
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-orange-900 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlockchainRevolution2025;