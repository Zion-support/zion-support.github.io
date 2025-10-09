import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Zap, Globe, Database, CheckCircle, Star, TrendingUp, Users } from 'lucide-react';

const BlockchainWeb3Page: React.FC = () => {
  const services = [
    {
      title: 'Smart Contract Development',
      description: 'Secure and efficient smart contracts for various blockchain platforms',
      icon: Shield,
      features: ['Ethereum Smart Contracts', 'Solidity Development', 'Security Audits', 'Gas Optimization']
    },
    {
      title: 'DeFi Solutions',
      description: 'Decentralized finance applications and protocols',
      icon: Zap,
      features: ['DEX Development', 'Yield Farming', 'Liquidity Pools', 'Token Economics']
    },
    {
      title: 'NFT Platforms',
      description: 'Non-fungible token marketplaces and applications',
      icon: Globe,
      features: ['NFT Minting', 'Marketplace Development', 'Metadata Management', 'Royalty Systems']
    },
    {
      title: 'Web3 Integration',
      description: 'Seamless integration of Web3 technologies into existing applications',
      icon: Database,
      features: ['Wallet Integration', 'MetaMask Support', 'IPFS Storage', 'Decentralized Identity']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blockchain & Web3 Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive blockchain and Web3 solutions including smart contracts, DeFi, NFTs, and decentralized applications." />
        <meta name="keywords" content="blockchain, web3, smart contracts, DeFi, NFTs, cryptocurrency" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Blockchain & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Web3</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build the future of decentralized applications with our comprehensive blockchain and Web3 solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </a>
            <a
              href="#services"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Blockchain Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive blockchain and Web3 services designed to help you build the next generation of decentralized applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-6 group-hover:text-cyan-300 transition-colors">
                  <service.icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how blockchain and Web3 technologies can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:info@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Get Quote
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlockchainWeb3Page;