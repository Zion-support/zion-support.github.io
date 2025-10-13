import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Globe, Lock, ArrowRight } from 'lucide-react';
import Layout from '../layout';
export default function BlockchainWeb3() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: "Decentralized Security",
      description:
        "Immutable blockchain technology ensures maximum security and transparency",
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: "Smart Contracts",
      description:
        "Automated, self-executing contracts that eliminate intermediaries",
    },
    {
      icon: <Globe className="w-6 h-6 text-yellow-400" />,
      title: "Web3 Integration",
      description:
        "Seamless integration with decentralized applications and protocols",
    },
    {
      icon: <Lock className="w-6 h-6 text-green-400" />,
      title: "Cryptocurrency Solutions",
      description:
        "Custom token development and cryptocurrency integration services",
    },
  ];

  const services = [
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
        'Simple DApp creation',
        'Token creation (ERC-20)',
        'Basic security audit',
        'Documentation',
        '1 month support'      ],
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/project',
      description: 'Ideal for medium-scale blockchain solutions',
      features: [
        'Advanced smart contract development',
        'Complex DApp development',
        'Multiple token standards',
        'Comprehensive security audit',
        'DeFi protocol integration',
        '3 months support',
        'Performance optimization'      ],
    },
    {
      name: 'Enterprise',
      price: '$19,999',
      period: '/project',
      description: 'Complete blockchain ecosystem development',
      features: [
        'Custom blockchain development',
        'Multi-chain solutions',
        'Advanced DeFi protocols',
        'NFT marketplace development',
        'Cross-chain integration',
        '6 months support',
        'Dedicated team',
        '24/7 monitoring'
      ],
      popular: false
    }  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Blockchain & Web3
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge blockchain technology and Web3 solutions. 
              From smart contracts to DeFi protocols, we build the future of decentralized applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <Link
                to="#features"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Why Choose Our Blockchain Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Our Blockchain Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {service.category}
                  </h3>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 flex items-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Blockchain Development Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border ${
                    plan.popular ? 'border-cyan-400 ring-2 ring-cyan-400/20' : 'border-slate-700'
                  } relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-center">
                        <div className="w-5 h-5 bg-cyan-400 rounded-full mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Let's create innovative blockchain solutions that transform your business and 
              revolutionize your industry with cutting-edge Web3 technology.
            </p>
            <Link
              to="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>          </div>
        </section>
      </div>
    </Layout>
  );
}
