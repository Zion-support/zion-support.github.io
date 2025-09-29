import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const BlockchainSolutions: NextPage = () => {
  const solutions = [
    {
      title: "Smart Contract Development",
      description: "Secure, audited smart contracts for various blockchain platforms including Ethereum, Polygon, and BSC.",
      features: ["Solidity Development", "Smart Contract Auditing", "DeFi Protocols", "NFT Marketplaces"],
      icon: "📜",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "DeFi Solutions",
      description: "Decentralized finance applications including DEXs, yield farming, and lending protocols.",
      features: ["DEX Development", "Yield Farming", "Lending Protocols", "Staking Platforms"],
      icon: "💰",
      color: "from-green-500 to-blue-600"
    },
    {
      title: "NFT Platforms",
      description: "Complete NFT marketplace solutions with minting, trading, and auction capabilities.",
      features: ["NFT Minting", "Marketplace Development", "Auction Systems", "Royalty Management"],
      icon: "🎨",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Blockchain Integration",
      description: "Seamless integration of blockchain technology into existing business systems.",
      features: ["API Development", "Web3 Integration", "Wallet Integration", "Payment Solutions"],
      icon: "🔗",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Supply Chain Tracking",
      description: "Transparent supply chain solutions using blockchain for product traceability.",
      features: ["Product Tracking", "Authenticity Verification", "Quality Assurance", "Transparency"],
      icon: "📦",
      color: "from-teal-500 to-green-600"
    },
    {
      title: "Token Development",
      description: "Custom token creation including utility tokens, security tokens, and governance tokens.",
      features: ["ERC-20 Tokens", "ERC-721/1155 NFTs", "Governance Tokens", "Token Economics"],
      icon: "🪙",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Blockchain Solutions - Zion Tech Solutions | DeFi, NFT & Smart Contract Development</title>
        <meta name="description" content="Expert blockchain solutions including DeFi development, NFT platforms, smart contracts, and Web3 integration services." />
        <meta name="keywords" content="blockchain development, DeFi, NFT, smart contracts, Web3, cryptocurrency, token development" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center text-white mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Blockchain Solutions
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
              Transform your business with cutting-edge blockchain technology. From DeFi protocols to NFT marketplaces, we build secure, scalable solutions that leverage the power of decentralized networks.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{solution.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{solution.title}</h3>
                <p className="text-white/80 mb-4 text-sm">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="text-white/70 text-sm flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Why Blockchain */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Why Choose Blockchain?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Security & Transparency</h3>
                <p className="text-white/80 text-sm">Immutable records and transparent transactions ensure trust and security in all operations.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Decentralization</h3>
                <p className="text-white/80 text-sm">Eliminate intermediaries and reduce costs while increasing efficiency and control.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🌐</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Global Reach</h3>
                <p className="text-white/80 text-sm">Access global markets and enable cross-border transactions without traditional banking limitations.</p>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Blockchain Technologies We Use</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "Ethereum", "Polygon", "BSC", "Solana", "Avalanche", "Polkadot",
                "Solidity", "Rust", "Web3.js", "Ethers.js", "Hardhat", "Truffle",
                "IPFS", "MetaMask", "WalletConnect", "OpenZeppelin", "Chainlink", "The Graph"
              ].map((tech, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-colors">
                  <span className="text-white font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Blockchain Development Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Analysis & Planning</h3>
                <p className="text-white/80 text-sm">We analyze your requirements and design the optimal blockchain architecture.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Smart Contract Development</h3>
                <p className="text-white/80 text-sm">We develop and test secure smart contracts using industry best practices.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Frontend Integration</h3>
                <p className="text-white/80 text-sm">We build intuitive user interfaces that seamlessly interact with blockchain networks.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Testing & Deployment</h3>
                <p className="text-white/80 text-sm">Comprehensive testing and secure deployment on mainnet with ongoing support.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Build on the Blockchain?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Let's discuss your blockchain project and explore how decentralized technology can transform your business.
            </p>
            <div className="flex justify-center gap-6">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Your Blockchain Project
              </Link>
              <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlockchainSolutions;