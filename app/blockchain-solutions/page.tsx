'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Zap, Globe, Lock, ArrowRight, CheckCircle, TrendingUp, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function BlockchainSolutionsPage() {
  const blockchainServices = [
    {
      icon: Shield,
      title: 'Smart Contract Development',
      description: 'Secure and efficient smart contracts for various blockchain platforms',
      features: ['Ethereum smart contracts', 'Polygon integration', 'Security auditing', 'Gas optimization']
    },
    {
      icon: Lock,
      title: 'DeFi Solutions',
      description: 'Decentralized finance applications and protocols',
      features: ['DEX development', 'Yield farming', 'Liquidity pools', 'Token economics']
    },
    {
      icon: Globe,
      title: 'Web3 Integration',
      description: 'Seamless integration of Web3 technologies into existing systems',
      features: ['Wallet integration', 'NFT marketplaces', 'DAO governance', 'Cross-chain bridges']
    },
    {
      icon: Zap,
      title: 'Blockchain Consulting',
      description: 'Strategic guidance for blockchain adoption and implementation',
      features: ['Technology assessment', 'Architecture design', 'Token strategy', 'Compliance guidance']
    }
  ];

  const platforms = [
    {
      name: 'Ethereum',
      description: 'Leading smart contract platform',
      icon: '🔷'
    },
    {
      name: 'Polygon',
      description: 'Scalable Ethereum sidechain',
      icon: '🟣'
    },
    {
      name: 'Binance Smart Chain',
      description: 'High-performance blockchain',
      icon: '🟡'
    },
    {
      name: 'Solana',
      description: 'Fast and low-cost transactions',
      icon: '🟢'
    }
  ];

  const benefits = [
    'Enhanced security and transparency',
    'Reduced transaction costs',
    'Faster settlement times',
    'Improved traceability',
    'Decentralized governance',
    'Global accessibility'
  ];

  return (
    <>
      <Helmet>
        <title>Blockchain Solutions - Zion Tech Group | Web3 & DeFi Development</title>
        <meta name="description" content="Expert blockchain solutions including smart contracts, DeFi, Web3 integration, and blockchain consulting. Transform your business with decentralized technology." />
        <meta name="keywords" content="blockchain, smart contracts, DeFi, Web3, cryptocurrency, NFT, DAO, blockchain development" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Blockchain
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge blockchain technology. From smart contracts to DeFi and Web3 integration, we deliver secure and scalable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                Get Blockchain Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Blockchain Services</h2>
              <p className="text-xl text-gray-300">Comprehensive blockchain solutions for modern businesses</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {blockchainServices.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Supported Platforms</h2>
              <p className="text-xl text-gray-300">We work with leading blockchain platforms</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center">
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{platform.name}</h3>
                  <p className="text-gray-300">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Blockchain?</h2>
              <p className="text-xl text-gray-300">Transform your business with decentralized technology</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Go Blockchain?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Start your blockchain journey today. Get expert consultation and discover how blockchain can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}