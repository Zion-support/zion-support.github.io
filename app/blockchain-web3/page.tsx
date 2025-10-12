import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Globe, Lock, CheckCircle } from 'lucide-react';
import Layout from '../layout';

export default function BlockchainWeb3Page() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: 'Smart Contracts',
      description: 'Secure, self-executing contracts with automated enforcement and transparency'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: 'DeFi Solutions',
      description: 'Decentralized finance applications for lending, borrowing, and trading'
    },
    {
      icon: <Globe className="w-6 h-6 text-yellow-400" />,
      title: 'Web3 Integration',
      description: 'Seamless integration with Web3 protocols and decentralized applications'
    },
    {
      icon: <Lock className="w-6 h-6 text-green-400" />,
      title: 'Security & Privacy',
      description: 'Advanced cryptographic security and privacy protection for all transactions'
    }
  ];

  const services = [
    {
      title: 'Blockchain Development',
      description: 'Custom blockchain solutions tailored to your business needs',
      features: ['Smart contract development', 'Token creation', 'DApp development', 'Blockchain consulting']
    },
    {
      title: 'DeFi Platform Development',
      description: 'Decentralized finance platforms with advanced trading features',
      features: ['DEX development', 'Lending protocols', 'Yield farming', 'Liquidity pools']
    },
    {
      title: 'NFT Marketplace',
      description: 'Complete NFT marketplace solutions with minting and trading capabilities',
      features: ['NFT minting', 'Marketplace creation', 'Royalty management', 'Metadata handling']
    },
    {
      title: 'Web3 Integration',
      description: 'Integrate Web3 functionality into existing applications',
      features: ['Wallet integration', 'MetaMask support', 'Transaction handling', 'API development']
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
        'Documentation',
        'Email support',
        '2 revisions'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$9,999',
      period: '/project',
      description: 'Ideal for complex DeFi applications',
      features: [
        'Advanced smart contracts',
        'Full DApp development',
        'Security auditing',
        'Priority support',
        '5 revisions',
        'Deployment assistance'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$29,999',
      period: '/project',
      description: 'For large-scale blockchain solutions',
      features: [
        'Custom blockchain development',
        'Multi-chain support',
        'Advanced security features',
        'Dedicated support',
        'Unlimited revisions',
        'Maintenance included'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      company: 'Crypto Ventures',
      content: 'The smart contract development was flawless. Our DeFi platform launched without any issues.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'NFT Marketplace Co',
      content: 'The NFT marketplace they built for us has processed over $1M in transactions. Highly recommended!',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      company: 'Blockchain Solutions Inc',
      content: 'Their Web3 integration expertise helped us modernize our entire platform. Excellent work!',
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <Shield className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-medium">Blockchain & Web3 Solutions</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Blockchain & Web3 Development
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build the future of decentralized applications with our expert blockchain development services. 
            From smart contracts to DeFi platforms, we deliver secure, scalable Web3 solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link 
              to="#demo" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Advanced Blockchain Features
            </h2>
            <p className="text-gray-300 text-lg">
              Cutting-edge technology for the decentralized future
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-colors">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Blockchain Services
            </h2>
            <p className="text-gray-300 text-lg">
              Comprehensive solutions for all your blockchain needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
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
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Project-Based Pricing
            </h2>
            <p className="text-gray-300 text-lg">
              Transparent pricing for blockchain development projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gray-800 p-8 rounded-lg border-2 relative ${plan.popular ? 'border-cyan-500' : 'border-gray-700'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Trusted by Blockchain Innovators
            </h2>
            <p className="text-gray-300 text-lg">
              See what our clients say about our blockchain solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-700">
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build the Future?
          </h2>
          <p className="text-gray-200 text-lg mb-8">
            Let's create innovative blockchain solutions that transform your business
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link 
              to="/about" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}