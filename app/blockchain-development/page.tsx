'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Zap, Target, Database, Clock, Users, Award, Star, TrendingUp, Globe, Lock, Settings, BarChart, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart, Sparkles, Cpu, Link2, Coins } from 'lucide-react';

const BlockchainDevelopmentPage: React.FC = () => {
  const features = [
    {
      icon: Link2,
      title: 'Smart Contract Development',
      description: 'Secure and efficient smart contracts for various blockchain platforms',
      benefits: ['Ethereum contracts', 'Solidity expertise', 'Security auditing', 'Gas optimization']
    },
    {
      icon: Coins,
      title: 'DeFi Solutions',
      description: 'Decentralized finance applications including DEXs, lending, and yield farming',
      benefits: ['DEX development', 'Lending protocols', 'Yield farming', 'Liquidity pools']
    },
    {
      icon: Shield,
      title: 'NFT Platforms',
      description: 'Non-fungible token marketplaces and minting platforms',
      benefits: ['NFT minting', 'Marketplace creation', 'Metadata management', 'Royalty systems']
    },
    {
      icon: Database,
      title: 'Blockchain Infrastructure',
      description: 'Custom blockchain networks and node infrastructure setup',
      benefits: ['Custom blockchains', 'Node management', 'Consensus mechanisms', 'Network security']
    }
  ];

  const services = [
    {
      title: 'Cryptocurrency Development',
      description: 'Custom cryptocurrency and token development with advanced features',
      price: 'Starting at $15,000',
      icon: Coins
    },
    {
      title: 'DApp Development',
      description: 'Decentralized applications with frontend and smart contract integration',
      price: 'Starting at $25,000',
      icon: Monitor
    },
    {
      title: 'Blockchain Consulting',
      description: 'Strategic blockchain consulting and technology assessment',
      price: '$500/hour',
      icon: Users
    },
    {
      title: 'Security Auditing',
      description: 'Comprehensive security auditing for smart contracts and blockchain systems',
      price: 'Starting at $10,000',
      icon: Shield
    }
  ];

  const pricing = [
    {
      name: 'Blockchain Starter',
      price: '$5,000',
      period: '/project',
      description: 'Basic blockchain development for small projects',
      features: [
        'Simple smart contracts',
        'Basic DApp frontend',
        'Standard security',
        'Email support',
        'Documentation'
      ],
      popular: false
    },
    {
      name: 'Blockchain Professional',
      price: '$25,000',
      period: '/project',
      description: 'Advanced blockchain solutions for growing businesses',
      features: [
        'Complex smart contracts',
        'Full-stack DApp',
        'Advanced security',
        'Priority support',
        'Comprehensive documentation',
        'API integration'
      ],
      popular: true
    },
    {
      name: 'Blockchain Enterprise',
      price: '$100,000',
      period: '/project',
      description: 'Full-scale blockchain solutions for enterprises',
      features: [
        'Custom blockchain',
        'Enterprise DApp',
        'Maximum security',
        '24/7 dedicated support',
        'Custom documentation',
        'Full API access',
        'White-label solutions'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blockchain Development Services | Zion Tech Group</title>
        <meta name="description" content="Professional blockchain development services including smart contracts, DeFi solutions, NFT platforms, and custom blockchain networks." />
        <meta name="keywords" content="blockchain development, smart contracts, DeFi, NFT, cryptocurrency, DApp development, blockchain consulting" />
        <meta property="og:title" content="Blockchain Development Services | Zion Tech Group" />
        <meta property="og:description" content="Professional blockchain development services for smart contracts, DeFi, and NFT platforms." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/blockchain-development" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"></div>
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Professional
                <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Blockchain Development
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Expert blockchain development services including smart contracts, DeFi solutions, 
                NFT platforms, and custom blockchain networks. Transform your business with 
                cutting-edge blockchain technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Blockchain Development Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our expert blockchain developers deliver secure, scalable, and innovative 
                blockchain solutions for various industries.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg mb-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Blockchain Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive blockchain development services tailored to your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mb-4">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Blockchain Development Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect blockchain development package for your project.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`relative ${plan.popular ? 'scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className={`bg-gray-800 rounded-xl p-8 h-full ${plan.popular ? 'border-2 border-purple-500' : 'border border-gray-700'}`}>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                          : 'bg-gray-700 text-white hover:bg-gray-600'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Build on Blockchain?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact our blockchain experts to discuss your project and get a custom quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Contact Blockchain Experts
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Call +1 302 464 0950
                </a>
              </div>
              <div className="mt-8 text-gray-400">
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlockchainDevelopmentPage;