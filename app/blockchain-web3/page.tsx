import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlockchainWeb3Page: React.FC = () => {
  const services = [
    {
      title: 'Smart Contract Development',
      description: 'Secure and efficient smart contracts for various applications',
      features: ['Ethereum', 'Polygon', 'BSC', 'Custom Blockchains'],
      price: 'Starting at $2,500/month',
      icon: '📜'
    },
    {
      title: 'DeFi Solutions',
      description: 'Decentralized finance applications and protocols',
      features: ['DEX Development', 'Yield Farming', 'Lending Protocols'],
      price: 'Starting at $3,000/month',
      icon: '🏦'
    },
    {
      title: 'NFT Platforms',
      description: 'NFT marketplace and collection development',
      features: ['Marketplace Creation', 'Minting Systems', 'Royalty Management'],
      price: 'Starting at $2,200/month',
      icon: '🎨'
    },
    {
      title: 'Web3 Integration',
      description: 'Integrate Web3 features into existing applications',
      features: ['Wallet Integration', 'MetaMask Support', 'Web3 APIs'],
      price: 'Starting at $1,800/month',
      icon: '🌐'
    },
    {
      title: 'Blockchain Consulting',
      description: 'Strategic guidance for blockchain adoption',
      features: ['Technology Assessment', 'Architecture Design', 'Implementation Planning'],
      price: 'Starting at $1,500/month',
      icon: '💡'
    },
    {
      title: 'Token Development',
      description: 'Custom token creation and management systems',
      features: ['ERC-20/721/1155', 'Tokenomics Design', 'Launch Strategy'],
      price: 'Starting at $1,200/month',
      icon: '🪙'
    }
  ];

  const benefits = [
    { metric: 'Decentralized', description: 'No Single Point of Failure' },
    { metric: 'Transparent', description: 'Public Ledger Technology' },
    { metric: 'Secure', description: 'Cryptographic Security' },
    { metric: 'Immutable', description: 'Tamper-Proof Records' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            Blockchain & Web3 Solutions
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Build the future of the internet with decentralized applications, 
            smart contracts, and Web3 technologies that empower users and creators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Explore Web3 Solutions
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              View Blockchain Case Studies
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Blockchain Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center cyber-card">
                <div className="text-4xl font-bold text-purple-400 mb-2">{benefit.metric}</div>
                <div className="text-gray-300">{benefit.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Blockchain Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <span className="text-purple-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400 mb-3">{service.price}</div>
                  <Link to="/contact" className="text-purple-400 hover:text-purple-300 font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Build the Future with Blockchain?
          </h2>
          <p className="text-gray-300 mb-6">
            Join the Web3 revolution with our cutting-edge blockchain solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Start Blockchain Journey
            </Link>
            <a href="tel:+13024640950" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              Call: (302) 464-0950
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlockchainWeb3Page;