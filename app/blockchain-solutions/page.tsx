import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlockchainSolutionsPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Blockchain Development & Solutions",
    "description": "Comprehensive blockchain development services including smart contracts, DeFi applications, and enterprise blockchain solutions",
    "brand": "Zion Tech Group",
    "offers": {
      "@type": "Offer",
      "price": "5000",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <Helmet>
        <title>Blockchain Development & Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive blockchain development services including smart contracts, DeFi applications, and enterprise blockchain solutions for modern businesses." />
        <meta name="keywords" content="blockchain development, smart contracts, DeFi, NFT, cryptocurrency, enterprise blockchain, blockchain consulting" />
        <meta property="og:title" content="Blockchain Development & Solutions - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive blockchain development services including smart contracts, DeFi applications, and enterprise blockchain solutions." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://ziontechgroup.com/blockchain-solutions" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Blockchain Development & Solutions</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Build secure, decentralized applications with our comprehensive blockchain development services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                  Get Started
                </a>
                <a href="#demo" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-medium">
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Blockchain Services</h2>
              <p className="text-lg text-gray-600">Comprehensive blockchain solutions for every business need</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📜</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Contract Development</h3>
                <p className="text-gray-600">Secure, audited smart contracts for DeFi, NFTs, and enterprise applications with comprehensive testing.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">DeFi Applications</h3>
                <p className="text-gray-600">Decentralized finance solutions including DEXs, lending platforms, yield farming, and liquidity protocols.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">NFT Marketplaces</h3>
                <p className="text-gray-600">Complete NFT platforms with minting, trading, and marketplace functionality for digital assets.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Blockchain</h3>
                <p className="text-gray-600">Private and consortium blockchain solutions for enterprise use cases with custom governance models.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💳</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cryptocurrency Wallets</h3>
                <p className="text-gray-600">Secure multi-currency wallets with advanced features like staking, DeFi integration, and cross-chain support.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security Audits</h3>
                <p className="text-gray-600">Comprehensive security audits and penetration testing for smart contracts and blockchain applications.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Development Packages</h2>
              <p className="text-lg text-gray-600">Choose the package that fits your blockchain project needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$5,000</span>
                  <span className="text-gray-600"> - $15,000</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Simple smart contracts
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Basic DApp development
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Single blockchain platform
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Basic security audit
                  </li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                  Get Quote
                </button>
              </div>
              
              <div className="bg-purple-600 text-white rounded-lg p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Pro</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$25,000</span>
                  <span className="text-purple-200"> - $75,000</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-purple-300 mr-2">✓</span>
                    Complex smart contracts
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-300 mr-2">✓</span>
                    Full DeFi application
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-300 mr-2">✓</span>
                    Multi-chain support
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-300 mr-2">✓</span>
                    Comprehensive security audit
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-300 mr-2">✓</span>
                    Frontend development
                  </li>
                </ul>
                <button className="w-full bg-white text-purple-600 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                  Get Quote
                </button>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$100,000</span>
                  <span className="text-gray-600">+</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom blockchain platform
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Enterprise integration
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Advanced security features
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Ongoing maintenance
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Dedicated support team
                  </li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Use Cases</h2>
              <p className="text-lg text-gray-600">See how businesses are leveraging blockchain technology</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Supply Chain Tracking</h3>
                <p className="text-gray-600">Track products from origin to consumer with immutable records ensuring transparency and authenticity.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Identity</h3>
                <p className="text-gray-600">Secure, self-sovereign identity solutions that give users control over their personal data.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Financial Services</h3>
                <p className="text-gray-600">Decentralized lending, borrowing, and trading platforms that eliminate intermediaries.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Healthcare Records</h3>
                <p className="text-gray-600">Secure, interoperable health records that patients can control and share as needed.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Voting Systems</h3>
                <p className="text-gray-600">Transparent, tamper-proof voting systems that ensure election integrity and public trust.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Intellectual Property</h3>
                <p className="text-gray-600">Protect and manage intellectual property rights with blockchain-based proof of ownership.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Stack</h2>
              <p className="text-lg text-gray-600">We work with the latest blockchain technologies and platforms</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">⚡</span>
                </div>
                <p className="text-sm font-medium text-gray-900">Ethereum</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🔷</span>
                </div>
                <p className="text-sm font-medium text-gray-900">Polygon</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🟡</span>
                </div>
                <p className="text-sm font-medium text-gray-900">Binance Smart Chain</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🔴</span>
                </div>
                <p className="text-sm font-medium text-gray-900">Solana</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🟢</span>
                </div>
                <p className="text-sm font-medium text-gray-900">Avalanche</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🟣</span>
                </div>
                <p className="text-sm font-medium text-gray-900">Polkadot</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="py-16 bg-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build on Blockchain?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your blockchain project and how we can help you build the future of decentralized applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Call +1 (302) 464-0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-medium">
                Email Us
              </a>
            </div>
            <div className="mt-8 text-purple-200">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="hover:text-white underline">ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockchainSolutionsPage;