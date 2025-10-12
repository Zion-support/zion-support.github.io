import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Globe, Database, Lock } from 'lucide-react';
import Layout from '../layout';

export default function BlockchainWeb3Page() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: 'Smart Contracts',
      description: 'Secure, automated contracts that execute without intermediaries'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: 'DeFi Solutions',
      description: 'Decentralized finance applications for lending, trading, and yield farming'
    },
    {
      icon: <Globe className="w-6 h-6 text-yellow-400" />,
      title: 'NFT Marketplace',
      description: 'Create and trade unique digital assets with blockchain technology'
    },
    {
      icon: <Database className="w-6 h-6 text-green-400" />,
      title: 'Web3 Integration',
      description: 'Seamlessly integrate blockchain features into existing applications'
    },
    {
      icon: <Lock className="w-6 h-6 text-orange-400" />,
      title: 'Security Audits',
      description: 'Comprehensive security audits for smart contracts and dApps'
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
        'Simple dApp creation',
        'Basic security audit',
        'Email support',
        '3 months maintenance'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/project',
      description: 'Ideal for complex blockchain applications',
      features: [
        'Advanced smart contracts',
        'Full dApp development',
        'Comprehensive security audit',
        'Priority support',
        '6 months maintenance',
        'Token integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$19,999',
      period: '/project',
      description: 'For large-scale blockchain solutions',
      features: [
        'Custom blockchain development',
        'Multi-chain integration',
        'Advanced security protocols',
        'Dedicated support',
        '12 months maintenance',
        'White-label solution'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      company: 'CryptoStart Inc',
      content: 'The smart contract development was flawless. Our DeFi platform launched without any security issues.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'NFT Ventures',
      content: 'The NFT marketplace they built exceeded our expectations. User experience is outstanding.',
      rating: 5
    },
    {
      name: 'David Kim',
      company: 'Blockchain Solutions',
      content: 'Their Web3 integration expertise helped us modernize our existing platform seamlessly.',
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Blockchain & Web3 Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build the future of decentralized applications with our comprehensive blockchain 
            development services and Web3 integration expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all">
              Start Your Project
            </button>
            <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View Portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Comprehensive Blockchain Services
          </h2>
          <p className="text-gray-300 text-center mb-12">
            From smart contracts to full dApp development, we cover all aspects of blockchain technology
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-400 transition-colors">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Transparent Project Pricing
          </h2>
          <p className="text-gray-300 text-center mb-12">
            Choose the package that fits your blockchain project needs
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gray-800 p-8 rounded-lg border-2 relative ${plan.popular ? 'border-purple-400' : 'border-gray-700'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Shield className="w-5 h-5 text-purple-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-600 text-white hover:from-purple-600 hover:to-cyan-700'
                      : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Trusted by Blockchain Innovators
          </h2>
          <p className="text-gray-300 text-center mb-12">
            See how companies are building the future with our blockchain solutions
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build the Future?
          </h2>
          <p className="text-gray-300 mb-8">
            Join the blockchain revolution with our expert development team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300">
              Start Your Project
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}