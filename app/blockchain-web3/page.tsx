import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Globe, Lock } from 'lucide-react';
import Layout from '../layout';

export default function BlockchainWeb3() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: 'Decentralized Security',
      description: 'Immutable blockchain technology ensures maximum security and transparency'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: 'Smart Contracts',
      description: 'Automated, self-executing contracts that eliminate intermediaries'
    },
    {
      icon: <Globe className="w-6 h-6 text-yellow-400" />,
      title: 'Web3 Integration',
      description: 'Seamless integration with decentralized applications and protocols'
    },
    {
      icon: <Lock className="w-6 h-6 text-green-400" />,
      title: 'Cryptocurrency Support',
      description: 'Full support for major cryptocurrencies and token standards'
    }
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
      price: '$299',
      period: '/month',
      description: 'Perfect for small projects and startups',
      features: [
        'Basic smart contract development',
        'Simple DApp creation',
        'Token standard implementation',
        'Basic security audit',
        'Email support',
        'Documentation'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced smart contract development',
        'Complex DApp architecture',
        'DeFi protocol development',
        'Comprehensive security audit',
        'Priority support',
        'API integration',
        'Custom token standards',
        'Performance optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large-scale blockchain solutions',
      features: [
        'Enterprise-grade smart contracts',
        'Multi-chain DApp development',
        'Custom blockchain solutions',
        'Full security audit suite',
        'Dedicated support team',
        'Custom integrations',
        'White-label solutions',
        '24/7 monitoring',
        'Compliance assistance'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'DeFi Innovations',
      content: 'Zion Tech Group helped us build a revolutionary DeFi protocol. Their blockchain expertise is unmatched.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      company: 'NFT Marketplace',
      content: 'The smart contract development was flawless. Our marketplace is secure, efficient, and user-friendly.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      company: 'Crypto Startup',
      content: 'From concept to launch, they delivered a complete Web3 solution that exceeded our expectations.',
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium">
              Blockchain & Web3 Solutions
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Decentralized Future
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Built on Blockchain
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge blockchain technology and Web3 solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-300 hover:bg-cyan-500/10 font-semibold rounded-lg transition-colors"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Blockchain Solutions
          </h2>
          <p className="text-gray-300 text-center mb-12">
            Comprehensive blockchain development and Web3 integration services
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Our Services
          </h2>
          <p className="text-gray-300 text-center mb-12">
            End-to-end blockchain development and Web3 solutions
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">{service.category}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
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
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Pricing Plans
          </h2>
          <p className="text-gray-300 text-center mb-12">
            Choose the perfect plan for your blockchain project
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-gray-800 p-6 rounded-lg border ${
                  plan.popular ? 'border-cyan-500' : 'border-gray-700'
                } relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <span className="w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs">✓</span>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
                      : 'border border-cyan-500 text-cyan-300 hover:bg-cyan-500/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Client Testimonials
          </h2>
          <p className="text-gray-300 text-center mb-12">
            What our clients say about our blockchain solutions
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create innovative blockchain solutions that transform your business
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-cyan-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </Layout>
  );
}