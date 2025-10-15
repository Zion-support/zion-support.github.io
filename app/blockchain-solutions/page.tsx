import React from 'react';
import SEOHead from '../components/SEOHead';

const BlockchainSolutionsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Blockchain Development & Solutions - Zion Tech Group"
        description="Comprehensive blockchain development services including smart contracts, DeFi, NFTs, and enterprise blockchain solutions. Build secure, decentralized applications."
        keywords="blockchain development, smart contracts, DeFi, NFTs, cryptocurrency, enterprise blockchain, Web3, decentralized applications"
        canonicalUrl="https://ziontechgroup.com/blockchain-solutions"
      />
      
      <div className="min-h-screen animated-bg matrix-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="responsive-heading font-bold gradient-text mb-6 hologram">
              Blockchain Development & Solutions
            </h1>
            <p className="responsive-text text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive blockchain development services including smart contracts, DeFi, NFTs, 
              and enterprise blockchain solutions. Build secure, decentralized applications for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact?service=blockchain-solutions" className="btn-futuristic energy">
                Get Started
              </a>
              <a href="tel:+13024640950" className="btn-futuristic glitch">
                Call +1 302 464 0950
              </a>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold neon-text-cyan text-center mb-12 cyber-scan">Our Services</h2>
            <div className="responsive-grid">
              <div className="card-futuristic hologram">
                <div className="text-4xl mb-4 neon-text-purple">📜</div>
                <h3 className="text-xl font-semibold text-white mb-4">Smart Contracts</h3>
                <p className="text-gray-300">
                  Develop, deploy, and audit smart contracts for Ethereum, Binance Smart Chain, and other blockchain platforms.
                </p>
              </div>
              <div className="card-futuristic hologram" style={{animationDelay: '0.2s'}}>
                <div className="text-4xl mb-4 neon-text-pink">💰</div>
                <h3 className="text-xl font-semibold text-white mb-4">DeFi Applications</h3>
                <p className="text-gray-300">
                  Build decentralized finance applications including DEXs, lending platforms, and yield farming protocols.
                </p>
              </div>
              <div className="card-futuristic hologram" style={{animationDelay: '0.4s'}}>
                <div className="text-4xl mb-4 neon-text-green">🎨</div>
                <h3 className="text-xl font-semibold text-white mb-4">NFT Marketplaces</h3>
                <p className="text-gray-300">
                  Create NFT marketplaces, minting platforms, and digital art galleries with full marketplace functionality.
                </p>
              </div>
              <div className="card-futuristic hologram" style={{animationDelay: '0.6s'}}>
                <div className="text-4xl mb-4 neon-text-cyan">🏢</div>
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise Blockchain</h3>
                <p className="text-gray-300">
                  Private and consortium blockchain solutions for enterprise use cases and supply chain management.
                </p>
              </div>
              <div className="card-futuristic hologram" style={{animationDelay: '0.8s'}}>
                <div className="text-4xl mb-4 neon-text-orange">🔐</div>
                <h3 className="text-xl font-semibold text-white mb-4">Cryptocurrency Wallets</h3>
                <p className="text-gray-300">
                  Secure multi-currency wallets with advanced security features and user-friendly interfaces.
                </p>
              </div>
              <div className="card-futuristic hologram" style={{animationDelay: '1s'}}>
                <div className="text-4xl mb-4 neon-text-purple">🌐</div>
                <h3 className="text-xl font-semibold text-white mb-4">DApp Development</h3>
                <p className="text-gray-300">
                  Full-stack decentralized applications with frontend, backend, and blockchain integration.
                </p>
              </div>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold neon-text-pink text-center mb-12 cyber-scan">Technologies We Use</h2>
            <div className="responsive-grid">
              <div className="card-futuristic energy-pulse">
                <h3 className="text-xl font-semibold text-white mb-4">Ethereum</h3>
                <p className="text-gray-300">
                  Smart contracts, DApps, and DeFi applications on the Ethereum blockchain with Solidity.
                </p>
              </div>
              <div className="card-futuristic energy-pulse">
                <h3 className="text-xl font-semibold text-white mb-4">Binance Smart Chain</h3>
                <p className="text-gray-300">
                  High-performance blockchain solutions with lower transaction costs and faster processing.
                </p>
              </div>
              <div className="card-futuristic hologram">
                <h3 className="text-xl font-semibold text-white mb-4">Polygon</h3>
                <p className="text-gray-300">
                  Layer 2 scaling solutions for Ethereum with improved speed and reduced gas fees.
                </p>
              </div>
              <div className="card-futuristic hologram">
                <h3 className="text-xl font-semibold text-white mb-4">Hyperledger</h3>
                <p className="text-gray-300">
                  Enterprise-grade blockchain frameworks for private and consortium networks.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold neon-text-green text-center mb-12 cyber-scan">Pricing Plans</h2>
            <div className="responsive-grid">
              <div className="card-futuristic energy-pulse">
                <h3 className="text-2xl font-bold text-white mb-4">Smart Contract</h3>
                <div className="text-4xl font-bold neon-text-cyan mb-4">$5,000<span className="text-lg text-gray-400">+</span></div>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li>✓ Smart contract development</li>
                  <li>✓ Security audit</li>
                  <li>✓ Deployment & testing</li>
                  <li>✓ Documentation</li>
                  <li>✓ 30-day support</li>
                </ul>
                <a href="/contact?service=blockchain-solutions&plan=smart-contract" className="btn-futuristic w-full text-center">
                  Get Quote
                </a>
              </div>
              <div className="card-futuristic energy-pulse">
                <h3 className="text-2xl font-bold text-white mb-4">DeFi Application</h3>
                <div className="text-4xl font-bold neon-text-purple mb-4">$25,000<span className="text-lg text-gray-400">+</span></div>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li>✓ Complete DeFi platform</li>
                  <li>✓ Frontend & backend</li>
                  <li>✓ Smart contracts</li>
                  <li>✓ Security audit</li>
                  <li>✓ 90-day support</li>
                </ul>
                <a href="/contact?service=blockchain-solutions&plan=defi" className="btn-futuristic w-full text-center">
                  Get Quote
                </a>
              </div>
              <div className="card-futuristic energy-pulse">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Solution</h3>
                <div className="text-4xl font-bold neon-text-pink mb-4">$100,000<span className="text-lg text-gray-400">+</span></div>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li>✓ Custom blockchain</li>
                  <li>✓ Enterprise features</li>
                  <li>✓ Integration services</li>
                  <li>✓ Training & support</li>
                  <li>✓ 1-year maintenance</li>
                </ul>
                <a href="/contact?service=blockchain-solutions&plan=enterprise" className="btn-futuristic w-full text-center">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold neon-text-orange mb-8">Ready to Build the Future?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our blockchain experts help you build secure, scalable, and innovative decentralized applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-futuristic energy">
                Get Free Consultation
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="btn-futuristic glitch">
                Email Us
              </a>
            </div>
            <div className="mt-8 text-gray-300">
              <p>Mobile: +1 302 464 0950</p>
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockchainSolutionsPage;