'use client';
import React from 'react';
import { Lock, Target, BarChart, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const BlockchainPage: React.FC = () => {
  const blockchainServices = [
    {
      title: 'Smart Contract Development',
      description: 'Build secure and efficient smart contracts for various blockchain platforms and use cases.',
      features: ['Solidity Development', 'Security Auditing', 'Gas Optimization', 'Testing & Deployment', 'Upgradeable Contracts'],
      benefits: ['Automated execution', 'Reduced costs', 'Transparency', 'Trustless operations']
    },
    {
      title: 'DApp Development',
      description: 'Create decentralized applications that leverage blockchain technology for enhanced security and transparency.',
      features: ['Frontend Development', 'Web3 Integration', 'Wallet Connection', 'Transaction Management', 'User Interface'],
      benefits: ['Decentralized architecture', 'Enhanced security', 'User control', 'Innovation potential']
    },
    {
      title: 'Token Creation & ICOs',
      description: 'Develop custom tokens and launch initial coin offerings with comprehensive tokenomics and security.',
      features: ['ERC-20/ERC-721 Tokens', 'Tokenomics Design', 'ICO Platform', 'Compliance', 'Marketing Support'],
      benefits: ['Fundraising capability', 'Community building', 'Liquidity creation', 'Value distribution']
    },
    {
      title: 'DeFi Solutions',
      description: 'Build decentralized finance applications including DEXs, lending platforms, and yield farming protocols.',
      features: ['DEX Development', 'Lending Protocols', 'Yield Farming', 'Liquidity Pools', 'Governance Tokens'],
      benefits: ['Financial inclusion', 'Yield opportunities', 'Liquidity provision', 'Innovative products']
    },
    {
      title: 'NFT Marketplaces',
      description: 'Create NFT marketplaces for buying, selling, and trading non-fungible tokens with advanced features.',
      features: ['Minting Platform', 'Marketplace UI', 'Royalty System', 'Auction Mechanism', 'Metadata Management'],
      benefits: ['Digital ownership', 'Creator monetization', 'Unique assets', 'Community engagement']
    },
    {
      title: 'Blockchain Consulting',
      description: 'Strategic consulting for blockchain adoption, technology selection, and implementation planning.',
      features: ['Technology Assessment', 'Architecture Design', 'Implementation Planning', 'Team Training', 'Compliance'],
      benefits: ['Strategic guidance', 'Risk mitigation', 'Technology expertise', 'Implementation success']
    }
  ];

  return (
    <>
      <SEOEnhancer
        title="Blockchain & Web3 Solutions - Smart Contracts & DApps | Zion Tech Group"
        description="Expert blockchain development services including smart contracts, DApps, DeFi solutions, NFT marketplaces, and Web3 applications. Transform your business with blockchain technology."
        keywords={['blockchain development', 'smart contracts', 'DApps', 'DeFi', 'NFT marketplace', 'Web3', 'cryptocurrency']}
        canonicalUrl="https://ziontechgroup.com/blockchain"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Blockchain & Web3 Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge blockchain technology and Web3 applications
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Our blockchain experts build secure, scalable, and innovative solutions including smart contracts, 
              DApps, DeFi protocols, and NFT marketplaces that drive the future of decentralized technology.
            </p>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blockchainServices.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-yellow-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-orange-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <ArrowRight className="w-3 h-3 text-orange-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Blockchain Platforms */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Blockchain Platforms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🔷</div>
                <h3 className="text-xl font-bold text-white mb-3">Ethereum</h3>
                <p className="text-gray-300 text-sm">
                  The leading smart contract platform with extensive DeFi ecosystem and developer tools.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🔺</div>
                <h3 className="text-xl font-bold text-white mb-3">Polygon</h3>
                <p className="text-gray-300 text-sm">
                  Layer 2 scaling solution for Ethereum with low fees and fast transactions.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🔴</div>
                <h3 className="text-xl font-bold text-white mb-3">Binance Smart Chain</h3>
                <p className="text-gray-300 text-sm">
                  High-performance blockchain with low transaction costs and EVM compatibility.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">Solana</h3>
                <p className="text-gray-300 text-sm">
                  High-speed blockchain with sub-second finality and low transaction costs.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🔵</div>
                <h3 className="text-xl font-bold text-white mb-3">Avalanche</h3>
                <p className="text-gray-300 text-sm">
                  Scalable blockchain platform with custom subnets and high throughput.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🟣</div>
                <h3 className="text-xl font-bold text-white mb-3">Polkadot</h3>
                <p className="text-gray-300 text-sm">
                  Multi-chain network enabling interoperability between different blockchains.
                </p>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Blockchain Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-xl font-bold text-white mb-3">Financial Services</h3>
                <p className="text-gray-300 text-sm">
                  DeFi protocols, cross-border payments, and decentralized lending platforms.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-white mb-3">Digital Art & NFTs</h3>
                <p className="text-gray-300 text-sm">
                  NFT marketplaces, digital collectibles, and creator monetization platforms.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-bold text-white mb-3">Healthcare</h3>
                <p className="text-gray-300 text-sm">
                  Medical records, drug traceability, and patient data management systems.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold text-white mb-3">Supply Chain</h3>
                <p className="text-gray-300 text-sm">
                  Product traceability, authenticity verification, and logistics optimization.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-xl font-bold text-white mb-3">Gaming</h3>
                <p className="text-gray-300 text-sm">
                  Play-to-earn games, NFT gaming assets, and virtual world economies.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold text-white mb-3">Governance</h3>
                <p className="text-gray-300 text-sm">
                  DAOs, voting systems, and decentralized decision-making platforms.
                </p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Build on Blockchain?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let's discuss how blockchain technology can transform your business and create new opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your Blockchain Project
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlockchainPage;