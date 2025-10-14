import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Zap, Globe, Lock, ArrowRight, CheckCircle, Code, Users, Target } from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

export default function BlockchainWeb3Page() {
  const services = [
    {
      icon: <Code className="w-6 h-6 text-blue-400" />,
      title: 'Smart Contract Development',
      description: 'Secure and efficient smart contracts for DeFi, NFTs, and enterprise applications'
    },
    {
      icon: <Globe className="w-6 h-6 text-green-400" />,
      title: 'DApp Development',
      description: 'Decentralized applications with seamless user experience and robust functionality'
    },
    {
      icon: <Shield className="w-6 h-6 text-yellow-400" />,
      title: 'Security Audits',
      description: 'Comprehensive security audits and penetration testing for blockchain applications'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: 'DeFi Protocols',
      description: 'Decentralized finance solutions including DEXs, lending platforms, and yield farming'
    },
    {
      icon: <Target className="w-6 h-6 text-red-400" />,
      title: 'NFT Marketplaces',
      description: 'Custom NFT marketplaces with advanced features and multi-chain support'
    },
    {
      icon: <Lock className="w-6 h-6 text-indigo-400" />,
      title: 'Cross-chain Solutions',
      description: 'Interoperability solutions for seamless asset transfers across different blockchains'
    }
  ];

  const serviceCategories = [
    {
      category: 'Blockchain Development',
      items: ['Smart Contract Development', 'DApp Development', 'Token Creation', 'DeFi Protocols', 'NFT Marketplaces', 'Cross-chain Solutions']
    },
    {
      category: 'Web3 Integration',
      items: ['Wallet Integration', 'MetaMask Support', 'Web3.js Integration', 'IPFS Storage', 'Decentralized Identity', 'DAO Governance']
    },
    {
      category: 'Security & Audit',
      items: ['Smart Contract Audits', 'Security Testing', 'Penetration Testing', 'Code Review', 'Vulnerability Assessment', 'Compliance Check']
    },
    {
      category: 'Consulting',
      items: ['Blockchain Strategy', 'Technology Selection', 'Architecture Design', 'Implementation Planning', 'Training & Support', 'Maintenance']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/project',
      description: 'Perfect for small blockchain projects',
      features: [
        'Basic smart contract development',
        'Simple DApp interface',
        'Ethereum integration',
        'Basic security audit',
        '3 months support'
      ]
    },
    {
      name: 'Professional',
      price: '$9,999',
      period: '/project',
      description: 'Ideal for complex DeFi applications',
      features: [
        'Advanced smart contracts',
        'Full-stack DApp development',
        'Multi-chain support',
        'Comprehensive security audit',
        '6 months support',
        'API integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored for large-scale blockchain solutions',
      features: [
        'Custom blockchain development',
        'White-label solutions',
        'Enterprise security',
        '24/7 dedicated support',
        'Custom integrations',
        'Ongoing maintenance'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blockchain & Web3 Solutions - Zion Tech Group</title>
        <meta name="description" content="Expert blockchain and Web3 development services. Smart contracts, DApps, DeFi protocols, NFT marketplaces, and security audits." />
        <meta name="keywords" content="blockchain development, Web3, smart contracts, DeFi, NFT, DApp, cryptocurrency, decentralized" />
      </Helmet>

      <ResponsiveContainer>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Blockchain & Web3 Solutions
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Build the future of decentralized applications with our expert blockchain development team. 
                  From smart contracts to DeFi protocols, we deliver secure and scalable Web3 solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButton variant="primary" size="lg">
                    Start Your Project
                  </FuturisticButton>
                  <FuturisticButton variant="secondary" size="lg">
                    View Portfolio
                  </FuturisticButton>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Our Blockchain Services
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Comprehensive blockchain development services to bring your Web3 vision to life.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <FuturisticCard key={index} className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-300">
                      {service.description}
                    </p>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* Service Categories Section */}
          <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Comprehensive Web3 Solutions
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  From development to security, we cover all aspects of blockchain technology.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {serviceCategories.map((category, index) => (
                  <FuturisticCard key={index} className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {category.category}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Development Packages
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Choose the perfect package for your blockchain project needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <FuturisticCard 
                    key={index} 
                    className={`p-8 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-500 text-white text-sm px-4 py-1 rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        <span className="text-gray-400 ml-1">{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <FuturisticButton 
                      variant={plan.popular ? "primary" : "secondary"} 
                      size="lg" 
                      className="w-full"
                    >
                      Get Started
                    </FuturisticButton>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Build the Future?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Let's create innovative blockchain solutions that transform your business and industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton variant="primary" size="lg" className="group">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </FuturisticButton>
                <FuturisticButton variant="secondary" size="lg">
                  Schedule Consultation
                </FuturisticButton>
              </div>
            </div>
          </section>
        </div>
      </ResponsiveContainer>
    </>
  );
}