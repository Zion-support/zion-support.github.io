'use client';
import React from 'react';
import { Lock, Coins, Zap, Shield, CheckCircle, ArrowRight, Star, Clock, Target, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlockchainPage: React.FC = () => {
  const features = [
    {
      icon: Lock,
      title: 'Smart Contracts',
      description: 'Develop and deploy secure smart contracts for various use cases',
      benefits: ['Secure contracts', 'Automated execution', 'Transparent transactions']
    },
    {
      icon: Coins,
      title: 'Token Creation',
      description: 'Create custom tokens and cryptocurrencies with advanced features',
      benefits: ['Custom tokens', 'Tokenomics design', 'DeFi integration']
    },
    {
      icon: Zap,
      title: 'DApp Development',
      description: 'Build decentralized applications with modern frameworks',
      benefits: ['DApp development', 'Web3 integration', 'User-friendly interfaces']
    },
    {
      icon: Shield,
      title: 'Security Audits',
      description: 'Comprehensive security audits for smart contracts and blockchain systems',
      benefits: ['Security audits', 'Vulnerability assessment', 'Compliance checking']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,000',
      period: '/month',
      description: 'Perfect for small projects with basic blockchain needs',
      features: [
        'Basic smart contracts',
        'Token creation',
        'Simple DApp development',
        'Basic security audit',
        'Email support',
        'Standard documentation'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$4,999',
      period: '/month',
      description: 'Ideal for growing businesses with complex blockchain requirements',
      features: [
        'Advanced smart contracts',
        'Custom token development',
        'Complex DApp development',
        'Comprehensive security audit',
        'Priority support',
        'Custom integrations',
        'DeFi protocols',
        'NFT marketplace'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$9,999',
      period: '/month',
      description: 'For large organizations with enterprise blockchain needs',
      features: [
        'Enterprise smart contracts',
        'Custom blockchain development',
        'Enterprise DApp solutions',
        'Advanced security audits',
        'Dedicated support',
        'Custom blockchain networks',
        'White-label solutions',
        'Advanced security',
        'Compliance tools'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Security',
      description: 'Blockchain provides immutable and secure transaction records',
      value: '100%'
    },
    {
      icon: Zap,
      title: 'Transparency',
      description: 'Complete transparency in all transactions and operations',
      value: '100%'
    },
    {
      icon: Clock,
      title: 'Efficiency',
      description: 'Reduce transaction costs and processing time by 90%',
      value: '90%'
    },
    {
      icon: BarChart,
      title: 'Innovation',
      description: 'Leverage cutting-edge blockchain technology for competitive advantage',
      value: '100%'
    }
  ];

  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 pt-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-6">
              <Lock className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Blockchain Solutions
            </h1>
            <p className="text-xl md:text-2xl text-yellow-400 mb-8 font-medium neon-pulse">
              Secure, Transparent, Decentralized Technology
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your business with cutting-edge blockchain technology. Smart contracts, 
              token creation, DApp development, and DeFi solutions that provide security, 
              transparency, and efficiency for your digital operations.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
                <div className="text-gray-300">Security</div>
              </div>
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
                <div className="text-gray-300">Transparency</div>
              </div>
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-gray-300">Innovation</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="cyber-button px-8 py-4 text-lg font-semibold"
              >
                Start Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#demo"
                className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg transition-all duration-300"
              >
                Watch Demo
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Transform Your Business with Blockchain
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Blockchain technology that delivers security, transparency, and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">{benefit.value}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Advanced Blockchain Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge blockchain technology that provides comprehensive solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-yellow-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Choose Your Blockchain Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to meet your blockchain development needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card p-8 relative ${
                  plan.popular ? 'ring-2 ring-yellow-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-yellow-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-yellow-400 text-black hover:bg-yellow-500'
                      : 'border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="cyber-card p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Business with Blockchain?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start your free consultation today and discover how blockchain can revolutionize your business. 
              No setup fees, cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button px-8 py-4 text-lg font-semibold"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default BlockchainPage;