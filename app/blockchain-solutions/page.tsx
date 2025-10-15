import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlockchainSolutionsPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Blockchain & Web3 Solutions",
    "description": "Comprehensive blockchain development services including smart contracts, DeFi protocols, and Web3 applications",
    "url": "https://ziontechgroup.com/blockchain-solutions",
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
      "price": "15000",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <Helmet>
        <title>Blockchain & Web3 Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive blockchain development services including smart contracts, DeFi protocols, and Web3 applications. Build the future with blockchain technology." />
        <meta name="keywords" content="blockchain development, smart contracts, DeFi, Web3, NFT, cryptocurrency, blockchain solutions" />
        <meta property="og:title" content="Blockchain & Web3 Solutions - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive blockchain development services including smart contracts, DeFi protocols, and Web3 applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/blockchain-solutions" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen futuristic-bg">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-6 floating">
              <span className="text-3xl">⛓️</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Blockchain & Web3 Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build the future with blockchain technology. We develop comprehensive blockchain solutions including smart contracts, DeFi protocols, and Web3 applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#pricing" className="futuristic-btn">
                Get Started
              </a>
              <a href="#demo" className="glow-border text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Portfolio
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="futuristic-card p-8 slide-in-left">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📜</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Smart Contract Development</h3>
              <p className="text-gray-300">Secure and efficient smart contracts for various blockchain platforms including Ethereum, BSC, and Polygon.</p>
            </div>
            
            <div className="futuristic-card p-8 fade-in-up">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">DeFi Protocol Design</h3>
              <p className="text-gray-300">Decentralized finance protocols including DEXs, lending platforms, and yield farming solutions.</p>
            </div>
            
            <div className="futuristic-card p-8 slide-in-right">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">NFT Marketplace Development</h3>
              <p className="text-gray-300">Complete NFT marketplace solutions with minting, trading, and auction functionality.</p>
            </div>
            
            <div className="futuristic-card p-8 slide-in-left">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Web3 Application Development</h3>
              <p className="text-gray-300">Decentralized applications (dApps) with wallet integration and blockchain connectivity.</p>
            </div>
            
            <div className="futuristic-card p-8 fade-in-up">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Security Audits</h3>
              <p className="text-gray-300">Comprehensive security audits for smart contracts and blockchain applications.</p>
            </div>
            
            <div className="futuristic-card p-8 slide-in-right">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cross-chain Solutions</h3>
              <p className="text-gray-300">Interoperability solutions connecting different blockchain networks and protocols.</p>
            </div>
          </div>

          {/* Use Cases */}
          <div className="futuristic-card p-8 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text-purple">Blockchain Use Cases</h2>
              <p className="text-lg text-gray-300">Transform your business with blockchain technology</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 floating">
                  <span className="text-2xl">🏦</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">DeFi Applications</h3>
                <p className="text-gray-300">Decentralized financial services including lending, borrowing, and trading platforms.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 floating-delayed">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">NFT Marketplaces</h3>
                <p className="text-gray-300">Digital art and collectibles marketplaces with minting and trading capabilities.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 floating">
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Supply Chain Tracking</h3>
                <p className="text-gray-300">Transparent and immutable supply chain tracking and verification systems.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 floating-delayed">
                  <span className="text-2xl">🆔</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Digital Identity</h3>
                <p className="text-gray-300">Self-sovereign identity solutions for secure and private digital identity management.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 floating">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Decentralized Governance</h3>
                <p className="text-gray-300">DAO development for decentralized decision-making and community governance.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 floating-delayed">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Metaverse Integration</h3>
                <p className="text-gray-300">Blockchain-powered metaverse experiences and virtual world integrations.</p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div id="pricing" className="futuristic-card p-8 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text-green">Blockchain Development Pricing</h2>
              <p className="text-lg text-gray-300">Choose the package that fits your blockchain project needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-2 border-gray-600 rounded-xl p-8 hover:border-yellow-500 transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
                  <div className="text-4xl font-bold text-yellow-500 mb-4">$15,000<span className="text-lg text-gray-500">/project</span></div>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Simple smart contract</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic dApp development</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Ethereum integration</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic testing</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Documentation</li>
                  </ul>
                  <a href="/contact" className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                    Get Started
                  </a>
                </div>
              </div>
              
              <div className="border-2 border-yellow-500 rounded-xl p-8 relative bg-gradient-to-b from-yellow-50 to-transparent">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                  <div className="text-4xl font-bold text-yellow-500 mb-4">$50,000<span className="text-lg text-gray-500">/project</span></div>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Complex smart contracts</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> DeFi protocol development</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Multi-chain support</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Security audit</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Frontend development</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> API integration</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 3 months support</li>
                  </ul>
                  <a href="/contact" className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition-colors">
                    Get Started
                  </a>
                </div>
              </div>
              
              <div className="border-2 border-gray-600 rounded-xl p-8 hover:border-yellow-500 transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-yellow-500 mb-4">$150,000<span className="text-lg text-gray-500">/project</span></div>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Full blockchain ecosystem</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom token economics</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Cross-chain solutions</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced security</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> White-label solution</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 24/7 support</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom integrations</li>
                  </ul>
                  <a href="/contact" className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4 neon-text">Ready to Build on Blockchain?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the Web3 revolution with our comprehensive blockchain development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-yellow-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Start Your Project
              </a>
              <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-yellow-600 transition-colors font-medium">
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm opacity-75">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockchainSolutionsPage;