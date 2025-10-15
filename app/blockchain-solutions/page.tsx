import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import FuturisticBackground from '../components/FuturisticBackground';

const BlockchainSolutionsPage: React.FC = memo(() => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Blockchain Development Solutions",
    "description": "Comprehensive blockchain development services including smart contracts, DeFi, NFTs, and enterprise blockchain solutions",
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
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
      "priceValidUntil": "2025-12-31"
    }
  };

  return (
    <>
      <SEOHead
        title="Blockchain Development Solutions - Smart Contracts & DeFi"
        description="Comprehensive blockchain development services including smart contracts, DeFi platforms, NFT marketplaces, and enterprise blockchain solutions."
        keywords="blockchain development, smart contracts, DeFi, NFT, cryptocurrency, enterprise blockchain, Web3"
        canonicalUrl="https://ziontechgroup.com/blockchain-solutions"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen futuristic-bg relative">
        <FuturisticBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold neon-text mb-6">
              Blockchain Development Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Build secure blockchain applications and smart contracts with our comprehensive 
              development services including DeFi, NFTs, and enterprise blockchain solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="neon-button hover-lift">
                Start Your Project
              </button>
              <Link to="/contact" className="neon-button hover-lift" style={{borderColor: '#bf00ff', color: '#bf00ff'}}>
                Get Consultation
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold neon-text-purple text-center mb-12">Our Blockchain Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card-futuristic hover-lift">
                <div className="text-4xl mb-4">⛓️</div>
                <h3 className="text-xl font-semibold text-white mb-4">Smart Contract Development</h3>
                <p className="text-white/80">
                  Secure and audited smart contracts for Ethereum, BSC, Polygon, and other major blockchain networks.
                </p>
              </div>
              <div className="card-futuristic hover-lift">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-semibold text-white mb-4">DeFi Platform Development</h3>
                <p className="text-white/80">
                  Complete DeFi solutions including DEXs, lending protocols, yield farming, and liquidity pools.
                </p>
              </div>
              <div className="card-futuristic hover-lift">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-white mb-4">NFT Marketplace Creation</h3>
                <p className="text-white/80">
                  Custom NFT marketplaces with minting, trading, and royalty distribution capabilities.
                </p>
              </div>
              <div className="card-futuristic hover-lift">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise Blockchain</h3>
                <p className="text-white/80">
                  Private and consortium blockchain solutions for enterprise use cases and supply chain management.
                </p>
              </div>
              <div className="card-futuristic hover-lift">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-xl font-semibold text-white mb-4">Cryptocurrency Wallets</h3>
                <p className="text-white/80">
                  Secure multi-currency wallets with advanced security features and user-friendly interfaces.
                </p>
              </div>
              <div className="card-futuristic hover-lift">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold text-white mb-4">Security Audits</h3>
                <p className="text-white/80">
                  Comprehensive security audits and penetration testing for smart contracts and blockchain applications.
                </p>
              </div>
            </div>
          </div>

          {/* Blockchain Networks */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold neon-text text-center mb-12">Supported Blockchain Networks</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {['Ethereum', 'Binance Smart Chain', 'Polygon', 'Solana', 'Avalanche', 'Cardano', 'Polkadot', 'Cosmos', 'Fantom', 'Arbitrum', 'Optimism', 'Base'].map((network) => (
                <div key={network} className="card-futuristic text-center py-4">
                  <span className="text-white font-medium">{network}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold neon-text-purple text-center mb-12">Development Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-futuristic hover-lift">
                <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                <div className="text-4xl font-bold neon-text mb-4">$10,000<span className="text-lg text-white/60">+</span></div>
                <ul className="text-white/80 space-y-2 mb-8">
                  <li>✓ Simple smart contracts</li>
                  <li>✓ Basic DApp development</li>
                  <li>✓ Single blockchain network</li>
                  <li>✓ Standard security audit</li>
                  <li>✓ 3 months support</li>
                </ul>
                <button className="neon-button w-full">Get Quote</button>
              </div>
              <div className="card-futuristic hover-lift border-2 border-cyan-400">
                <div className="text-cyan-400 text-sm font-semibold mb-2">MOST POPULAR</div>
                <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
                <div className="text-4xl font-bold neon-text mb-4">$50,000<span className="text-lg text-white/60">+</span></div>
                <ul className="text-white/80 space-y-2 mb-8">
                  <li>✓ Complex smart contracts</li>
                  <li>✓ DeFi platform development</li>
                  <li>✓ Multi-chain support</li>
                  <li>✓ Advanced security audit</li>
                  <li>✓ 6 months support</li>
                  <li>✓ Token development</li>
                  <li>✓ API integration</li>
                </ul>
                <button className="neon-button w-full">Get Quote</button>
              </div>
              <div className="card-futuristic hover-lift">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold neon-text mb-4">$200,000<span className="text-lg text-white/60">+</span></div>
                <ul className="text-white/80 space-y-2 mb-8">
                  <li>✓ Full blockchain ecosystem</li>
                  <li>✓ Custom blockchain network</li>
                  <li>✓ Enterprise integrations</li>
                  <li>✓ Comprehensive security audit</li>
                  <li>✓ 12 months support</li>
                  <li>✓ White-label solutions</li>
                  <li>✓ On-premise deployment</li>
                  <li>✓ 24/7 monitoring</li>
                </ul>
                <button className="neon-button w-full">Contact Sales</button>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold neon-text text-center mb-12">Blockchain Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-futuristic">
                <h3 className="text-xl font-semibold text-white mb-4">Supply Chain Tracking</h3>
                <p className="text-white/80 mb-4">
                  Implement transparent and immutable supply chain tracking systems that provide 
                  real-time visibility into product origins, movements, and authenticity.
                </p>
                <ul className="text-white/70 space-y-1">
                  <li>• Product provenance tracking</li>
                  <li>• Counterfeit prevention</li>
                  <li>• Quality assurance</li>
                  <li>• Compliance reporting</li>
                </ul>
              </div>
              <div className="card-futuristic">
                <h3 className="text-xl font-semibold text-white mb-4">Digital Identity</h3>
                <p className="text-white/80 mb-4">
                  Create secure and privacy-preserving digital identity solutions that give users 
                  control over their personal data and enable seamless verification.
                </p>
                <ul className="text-white/70 space-y-1">
                  <li>• Self-sovereign identity</li>
                  <li>• KYC/AML compliance</li>
                  <li>• Privacy protection</li>
                  <li>• Cross-platform verification</li>
                </ul>
              </div>
              <div className="card-futuristic">
                <h3 className="text-xl font-semibold text-white mb-4">Financial Services</h3>
                <p className="text-white/80 mb-4">
                  Develop DeFi protocols, payment systems, and financial instruments that operate 
                  without traditional intermediaries and provide global access.
                </p>
                <ul className="text-white/70 space-y-1">
                  <li>• Decentralized exchanges</li>
                  <li>• Lending and borrowing</li>
                  <li>• Cross-border payments</li>
                  <li>• Yield farming</li>
                </ul>
              </div>
              <div className="card-futuristic">
                <h3 className="text-xl font-semibold text-white mb-4">Healthcare Records</h3>
                <p className="text-white/80 mb-4">
                  Secure and interoperable healthcare record systems that ensure patient privacy 
                  while enabling seamless data sharing between providers.
                </p>
                <ul className="text-white/70 space-y-1">
                  <li>• Patient data privacy</li>
                  <li>• Interoperability</li>
                  <li>• Consent management</li>
                  <li>• Research data sharing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold neon-text-purple text-center mb-12">Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-futuristic text-center">
                <h3 className="text-lg font-semibold text-white mb-4">Smart Contracts</h3>
                <div className="space-y-2 text-white/80">
                  <div>Solidity</div>
                  <div>Vyper</div>
                  <div>Rust</div>
                  <div>Go</div>
                </div>
              </div>
              <div className="card-futuristic text-center">
                <h3 className="text-lg font-semibold text-white mb-4">Frontend</h3>
                <div className="space-y-2 text-white/80">
                  <div>React</div>
                  <div>Vue.js</div>
                  <div>Angular</div>
                  <div>Web3.js</div>
                </div>
              </div>
              <div className="card-futuristic text-center">
                <h3 className="text-lg font-semibold text-white mb-4">Backend</h3>
                <div className="space-y-2 text-white/80">
                  <div>Node.js</div>
                  <div>Python</div>
                  <div>Go</div>
                  <div>Java</div>
                </div>
              </div>
              <div className="card-futuristic text-center">
                <h3 className="text-lg font-semibold text-white mb-4">Infrastructure</h3>
                <div className="space-y-2 text-white/80">
                  <div>IPFS</div>
                  <div>Ethereum</div>
                  <div>Polygon</div>
                  <div>AWS/Azure</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold neon-text mb-6">Ready to Build the Future?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the blockchain revolution with our expert development team. From concept to deployment, 
              we'll help you build secure, scalable, and innovative blockchain solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="neon-button hover-lift">
                Start Your Project
              </button>
              <Link to="/contact" className="neon-button hover-lift" style={{borderColor: '#bf00ff', color: '#bf00ff'}}>
                Schedule Consultation
              </Link>
            </div>
            <div className="mt-8 text-white/60">
              <p>Contact us: <span className="text-cyan-400">+1 302 464 0950</span> | <span className="text-cyan-400">kleber@ziontechgroup.com</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

BlockchainSolutionsPage.displayName = 'BlockchainSolutionsPage';

export default BlockchainSolutionsPage;