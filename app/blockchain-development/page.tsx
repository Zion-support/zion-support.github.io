import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlockchainDevelopmentPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Blockchain Development Services",
    "description": "Custom blockchain solutions including smart contracts, DeFi applications, and cryptocurrency integration",
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "email": "kleber@ziontechgroup.com"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "10000",
      "priceCurrency": "USD",
      "description": "Starting from $10,000 for basic blockchain development"
    }
  };

  return (
    <>
      <Helmet>
        <title>Blockchain Development Services - Zion Tech Group</title>
        <meta name="description" content="Custom blockchain solutions including smart contracts, DeFi applications, and cryptocurrency integration. Expert blockchain development services." />
        <meta name="keywords" content="blockchain development, smart contracts, DeFi, cryptocurrency, NFT, DApp, blockchain consulting" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="gradient-text">Blockchain Development</span><br />
              <span className="neon-text neon-blue">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Build secure, decentralized applications with our expert blockchain development services. 
              From smart contracts to DeFi platforms, we create innovative blockchain solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact" className="futuristic-btn text-lg px-10 py-4">
                Get Started
              </a>
              <a href="#services" className="neon-btn text-lg px-10 py-4">
                View Services
              </a>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text-secondary">Our Blockchain Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive blockchain development solutions for modern businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card p-8 hover-lift">
                <div className="text-5xl mb-6">📜</div>
                <h3 className="text-2xl font-bold text-white mb-4">Smart Contract Development</h3>
                <p className="text-gray-300 mb-6">
                  Secure, audited smart contracts for various blockchain platforms including Ethereum, BSC, and Polygon.
                </p>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• Solidity & Vyper development</li>
                  <li>• Security auditing</li>
                  <li>• Gas optimization</li>
                  <li>• Testing & deployment</li>
                </ul>
                <div className="text-neon-green font-semibold text-lg mb-4">$5,000 - $50,000</div>
                <a href="/contact" className="text-neon-blue hover:text-white font-medium transition-colors duration-300">
                  Get Quote →
                </a>
              </div>

              <div className="dark-glass-card p-8 hover-lift">
                <div className="text-5xl mb-6">🏦</div>
                <h3 className="text-2xl font-bold text-white mb-4">DeFi Applications</h3>
                <p className="text-gray-300 mb-6">
                  Decentralized finance platforms including DEXs, lending protocols, and yield farming applications.
                </p>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• DEX development</li>
                  <li>• Lending protocols</li>
                  <li>• Yield farming</li>
                  <li>• Liquidity pools</li>
                </ul>
                <div className="text-neon-green font-semibold text-lg mb-4">$20,000 - $200,000</div>
                <a href="/contact" className="text-neon-purple hover:text-white font-medium transition-colors duration-300">
                  Get Quote →
                </a>
              </div>

              <div className="glass-card p-8 hover-lift">
                <div className="text-5xl mb-6">🎨</div>
                <h3 className="text-2xl font-bold text-white mb-4">NFT Platforms</h3>
                <p className="text-gray-300 mb-6">
                  Complete NFT marketplace and platform development with minting, trading, and auction features.
                </p>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• NFT marketplace</li>
                  <li>• Minting contracts</li>
                  <li>• Royalty systems</li>
                  <li>• Metadata management</li>
                </ul>
                <div className="text-neon-green font-semibold text-lg mb-4">$10,000 - $100,000</div>
                <a href="/contact" className="text-neon-green hover:text-white font-medium transition-colors duration-300">
                  Get Quote →
                </a>
              </div>

              <div className="dark-glass-card p-8 hover-lift">
                <div className="text-5xl mb-6">🪙</div>
                <h3 className="text-2xl font-bold text-white mb-4">Token Development</h3>
                <p className="text-gray-300 mb-6">
                  Custom cryptocurrency and token development with advanced features and compliance.
                </p>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• ERC-20/721/1155 tokens</li>
                  <li>• BEP-20 tokens</li>
                  <li>• Token economics</li>
                  <li>• Compliance features</li>
                </ul>
                <div className="text-neon-green font-semibold text-lg mb-4">$3,000 - $30,000</div>
                <a href="/contact" className="text-neon-pink hover:text-white font-medium transition-colors duration-300">
                  Get Quote →
                </a>
              </div>

              <div className="glass-card p-8 hover-lift">
                <div className="text-5xl mb-6">🌐</div>
                <h3 className="text-2xl font-bold text-white mb-4">DApp Development</h3>
                <p className="text-gray-300 mb-6">
                  Full-stack decentralized applications with frontend, backend, and blockchain integration.
                </p>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• Frontend development</li>
                  <li>• Web3 integration</li>
                  <li>• Wallet connectivity</li>
                  <li>• User experience</li>
                </ul>
                <div className="text-neon-green font-semibold text-lg mb-4">$15,000 - $150,000</div>
                <a href="/contact" className="text-neon-orange hover:text-white font-medium transition-colors duration-300">
                  Get Quote →
                </a>
              </div>

              <div className="dark-glass-card p-8 hover-lift">
                <div className="text-5xl mb-6">🔗</div>
                <h3 className="text-2xl font-bold text-white mb-4">Cross-chain Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Interoperability solutions for connecting different blockchain networks and protocols.
                </p>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• Bridge development</li>
                  <li>• Cross-chain swaps</li>
                  <li>• Interoperability protocols</li>
                  <li>• Multi-chain support</li>
                </ul>
                <div className="text-neon-green font-semibold text-lg mb-4">$25,000 - $250,000</div>
                <a href="/contact" className="text-neon-blue hover:text-white font-medium transition-colors duration-300">
                  Get Quote →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-card p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text-accent">Ready to Build on Blockchain?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Let's discuss your blockchain project and create a decentralized solution that transforms your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/contact" className="futuristic-btn text-lg px-10 py-4">
                  Start Your Project
                </a>
                <a href="/pricing" className="neon-btn text-lg px-10 py-4">
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockchainDevelopmentPage;