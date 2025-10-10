'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, Link as LinkIcon, Zap, Shield, Brain, Globe, Database, Target, Users, BarChart, Settings, Lock, Cloud, Code, FileText, MessageSquare, Heart, DollarSign, Box, Monitor, Server, Package, Mic, Workflow, Eye, Wifi, TrendingUp, Calendar, CheckSquare, Award, Rocket, Layers, BarChart3, Headphones, Smartphone, HardDrive, Printer, Router } from 'lucide-react';

const BlockchainDevelopmentPage: React.FC = () => {
  const features = [
    {
      icon: LinkIcon,
      title: 'Smart Contract Development',
      description: 'Secure and efficient smart contracts for various blockchain platforms'
    },
    {
      icon: Shield,
      title: 'Security Auditing',
      description: 'Comprehensive security audits and vulnerability assessments'
    },
    {
      icon: Zap,
      title: 'DeFi Solutions',
      description: 'Decentralized finance applications and protocols'
    },
    {
      icon: Globe,
      title: 'Cross-Chain Integration',
      description: 'Seamless integration across multiple blockchain networks'
    }
  ];

  const services = [
    {
      icon: LinkIcon,
      title: 'Smart Contract Development',
      description: 'Custom smart contracts for Ethereum, Polygon, BSC, and other blockchain networks',
      price: '$15,000/project',
      marketPrice: '$25,000-50,000/project',
      features: [
        'Solidity, Rust, and Vyper development',
        'Gas optimization and efficiency',
        'Security best practices implementation',
        'Testing and deployment automation',
        'Upgradeable contract patterns',
        'Multi-signature wallet integration'
      ],
      benefits: [
        'Secure and audited smart contracts',
        'Gas-optimized for cost efficiency',
        'Cross-platform compatibility',
        'Future-proof architecture'
      ],
      category: 'Smart Contracts',
      popular: true
    },
    {
      icon: DollarSign,
      title: 'DeFi Protocol Development',
      description: 'Complete decentralized finance protocols including DEX, lending, and yield farming',
      price: '$50,000/project',
      marketPrice: '$80,000-150,000/project',
      features: [
        'Decentralized exchange (DEX) development',
        'Lending and borrowing protocols',
        'Yield farming and staking mechanisms',
        'Liquidity pool management',
        'Oracle integration for price feeds',
        'Governance token implementation'
      ],
      benefits: [
        'Fully decentralized financial services',
        'High liquidity and trading volume',
        'Community-driven governance',
        'Revenue-generating protocols'
      ],
      category: 'DeFi',
      popular: true
    },
    {
      icon: Users,
      title: 'NFT Marketplace Development',
      description: 'Complete NFT marketplace with minting, trading, and auction functionality',
      price: '$25,000/project',
      marketPrice: '$40,000-80,000/project',
      features: [
        'NFT minting and metadata management',
        'Marketplace with buy/sell functionality',
        'Auction and bidding system',
        'Royalty distribution mechanism',
        'IPFS integration for metadata storage',
        'Multi-wallet connectivity'
      ],
      benefits: [
        'Complete NFT ecosystem',
        'User-friendly interface',
        'Scalable architecture',
        'Revenue sharing capabilities'
      ],
      category: 'NFT',
      popular: false
    },
    {
      icon: Globe,
      title: 'Cross-Chain Bridge Development',
      description: 'Secure bridges for asset transfer between different blockchain networks',
      price: '$35,000/project',
      marketPrice: '$60,000-120,000/project',
      features: [
        'Multi-chain asset bridging',
        'Cross-chain message passing',
        'Relayer network implementation',
        'Security monitoring and alerts',
        'Governance and upgrade mechanisms',
        'Fee optimization strategies'
      ],
      benefits: [
        'Seamless cross-chain transfers',
        'Enhanced liquidity across chains',
        'Reduced transaction costs',
        'Improved user experience'
      ],
      category: 'Cross-Chain',
      popular: true
    },
    {
      icon: Shield,
      title: 'Blockchain Security Auditing',
      description: 'Comprehensive security audits for smart contracts and blockchain applications',
      price: '$10,000/audit',
      marketPrice: '$15,000-30,000/audit',
      features: [
        'Smart contract vulnerability analysis',
        'Code review and best practices check',
        'Penetration testing and simulation',
        'Formal verification methods',
        'Gas optimization recommendations',
        'Security documentation and reports'
      ],
      benefits: [
        'Identified and fixed vulnerabilities',
        'Enhanced security posture',
        'Compliance with industry standards',
        'Reduced risk of exploits'
      ],
      category: 'Security',
      popular: false
    },
    {
      icon: Database,
      title: 'Blockchain Infrastructure',
      description: 'Complete blockchain infrastructure setup and node management services',
      price: '$5,000/month',
      marketPrice: '$8,000-15,000/month',
      features: [
        'Blockchain node deployment and management',
        'RPC endpoint setup and optimization',
        'Monitoring and alerting systems',
        'Backup and disaster recovery',
        'Load balancing and scaling',
        '24/7 technical support'
      ],
      benefits: [
        'Reliable blockchain infrastructure',
        'High availability and uptime',
        'Scalable and secure setup',
        'Expert maintenance and support'
      ],
      category: 'Infrastructure',
      popular: false
    }
  ];

  const benefits = [
    'Cutting-edge blockchain technology implementation',
    'Secure and audited smart contract development',
    'Cross-platform compatibility and integration',
    'Scalable and future-proof architecture',
    'Expert team with deep blockchain expertise',
    'Comprehensive security auditing and testing',
    '24/7 technical support and maintenance',
    'Proven track record in DeFi and NFT projects'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blockchain Development Services | Zion Tech Group</title>
        <meta name="description" content="Professional blockchain development services including smart contracts, DeFi protocols, NFT marketplaces, and cross-chain solutions." />
        <meta name="keywords" content="blockchain development, smart contracts, DeFi, NFT marketplace, cross-chain, blockchain security, Web3 development" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Blockchain Development
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build the future of decentralized applications with our expert blockchain development services. 
              From smart contracts to DeFi protocols, we deliver secure and scalable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Get Blockchain Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Blockchain Development Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our team specializes in cutting-edge blockchain technologies and decentralized applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Blockchain Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive blockchain solutions for Web3 applications and decentralized systems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-purple-400 font-semibold">Our Price:</span>
                    <span className="text-white font-bold">{service.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Market Price:</span>
                    <span className="text-gray-300 text-sm line-through">{service.marketPrice}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <a 
                    href="/contact"
                    className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                  <a 
                    href="/contact"
                    className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Blockchain Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partner with experts who understand blockchain technology and decentralized applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build on Blockchain?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our blockchain development experts to discuss your Web3 project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlockchainDevelopmentPage;