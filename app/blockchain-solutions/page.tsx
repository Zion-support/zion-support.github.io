'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon, 
  CurrencyDollarIcon, 
  CogIcon, 
  ChartBarIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function BlockchainSolutionsPage() {
  const services = [
    {
      title: 'Smart Contract Development',
      description: 'Secure and efficient smart contracts for various blockchain platforms.',
      icon: CogIcon,
      features: ['Ethereum', 'Polygon', 'Binance Smart Chain', 'Custom Blockchains']
    },
    {
      title: 'DeFi Solutions',
      description: 'Decentralized finance applications and protocols for modern financial services.',
      icon: CurrencyDollarIcon,
      features: ['DEX Development', 'Yield Farming', 'Liquidity Pools', 'Token Economics']
    },
    {
      title: 'NFT Platforms',
      description: 'Non-fungible token marketplaces and minting platforms.',
      icon: GlobeAltIcon,
      features: ['Marketplace Development', 'Minting Systems', 'Royalty Management', 'Metadata Standards']
    },
    {
      title: 'Blockchain Security',
      description: 'Comprehensive security audits and protection for blockchain applications.',
      icon: ShieldCheckIcon,
      features: ['Smart Contract Audits', 'Penetration Testing', 'Security Monitoring', 'Compliance']
    },
    {
      title: 'Web3 Integration',
      description: 'Seamless integration of Web3 technologies into existing applications.',
      icon: ChartBarIcon,
      features: ['Wallet Integration', 'MetaMask Support', 'API Development', 'Frontend Integration']
    },
    {
      title: 'Blockchain Consulting',
      description: 'Strategic consulting for blockchain adoption and implementation.',
      icon: CheckCircleIcon,
      features: ['Technology Assessment', 'Architecture Design', 'Implementation Planning', 'Training']
    }
  ];

  const benefits = [
    'Enhanced Security and Transparency',
    'Reduced Transaction Costs',
    'Improved Traceability',
    'Decentralized Architecture',
    'Immutable Records',
    'Smart Contract Automation'
  ];

  return (
    <>
      <Helmet>
        <title>Blockchain Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive blockchain solutions including smart contracts, DeFi, NFTs, and Web3 integration services." />
        <meta name="keywords" content="blockchain solutions, smart contracts, DeFi, NFTs, Web3, cryptocurrency, blockchain development" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Blockchain Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with cutting-edge blockchain technology and Web3 solutions.
              </p>
              <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
                From smart contracts and DeFi applications to NFT platforms and Web3 integration, 
                we provide comprehensive blockchain solutions that drive innovation and create new opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Blockchain Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive blockchain development and consulting services for modern businesses
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-gray-400 flex items-center">
                          <ArrowRightIcon className="w-4 h-4 mr-2 text-purple-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Why Choose Blockchain?
                </h2>
                <p className="text-xl text-gray-300">
                  Unlock the power of decentralized technology for your business
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-slate-800/50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                  <p className="text-gray-300 mb-6">
                    Let's discuss your blockchain project and explore how we can help you leverage 
                    this transformative technology for your business.
                  </p>
                  <Link 
                    to="/contact" 
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    Start Your Project <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Transform Your Business with Blockchain
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Join the blockchain revolution and unlock new possibilities for your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/demo" 
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
