'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, TrendingUp, BarChart, Shield, Globe, Zap, Target, Users, Lock, Settings, FileText, Brain, Activity } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ErrorBoundary from '../components/ErrorBoundary';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIBlockchainAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze blockchain data patterns and trends.',
      benefits: ['Pattern recognition', 'Anomaly detection', 'Predictive modeling', 'Smart insights']
    },
    {
      icon: BarChart,
      title: 'Real-Time Analytics',
      description: 'Live blockchain data analysis with instant updates and notifications.',
      benefits: ['Live dashboards', 'Real-time alerts', 'Instant updates', 'Live monitoring']
    },
    {
      icon: Shield,
      title: 'Security Intelligence',
      description: 'Comprehensive security analysis and threat detection for blockchain networks.',
      benefits: ['Threat detection', 'Risk assessment', 'Security monitoring', 'Compliance tracking']
    },
    {
      icon: Target,
      title: 'DeFi Analytics',
      description: 'Specialized analytics for decentralized finance protocols and yield farming.',
      benefits: ['Yield optimization', 'Liquidity analysis', 'Protocol monitoring', 'APY tracking']
    },
    {
      icon: Users,
      title: 'NFT Intelligence',
      description: 'Advanced analytics for NFT markets, collections, and trading patterns.',
      benefits: ['Collection analysis', 'Market trends', 'Rarity scoring', 'Trading insights']
    },
    {
      icon: Globe,
      title: 'Multi-Chain Support',
      description: 'Support for multiple blockchain networks and cross-chain analytics.',
      benefits: ['Ethereum', 'Bitcoin', 'Polygon', 'BSC', 'Solana', 'Avalanche']
    }
  ];

  const analyticsTypes = [
    {
      title: 'Transaction Analysis',
      description: 'Deep analysis of blockchain transactions and smart contract interactions.',
      icon: '📊',
      metrics: ['Transaction volume', 'Gas usage', 'Smart contract calls', 'Address analysis']
    },
    {
      title: 'Market Intelligence',
      description: 'Comprehensive crypto market analysis and price prediction models.',
      icon: '📈',
      metrics: ['Price trends', 'Volume analysis', 'Market sentiment', 'Trading patterns']
    },
    {
      title: 'Risk Assessment',
      description: 'Advanced risk analysis for DeFi protocols and investment opportunities.',
      icon: '⚠️',
      metrics: ['Risk scoring', 'Liquidity analysis', 'Smart contract audits', 'Protocol health']
    },
    {
      title: 'Compliance Monitoring',
      description: 'Regulatory compliance tracking and reporting for blockchain activities.',
      icon: '📋',
      metrics: ['KYC tracking', 'AML monitoring', 'Regulatory reporting', 'Compliance alerts']
    }
  ];

  const benefits = [
    'Make data-driven investment decisions',
    'Identify profitable DeFi opportunities',
    'Monitor portfolio performance in real-time',
    'Detect security threats and risks',
    'Optimize trading strategies',
    'Ensure regulatory compliance'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for individual traders and small investors',
      features: [
        'Basic blockchain analytics',
        'Real-time price tracking',
        'Portfolio monitoring',
        'Email support',
        '5 API calls per minute',
        'Basic reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Advanced analytics for serious traders and institutions',
      features: [
        'Advanced AI analytics',
        'DeFi protocol monitoring',
        'NFT market analysis',
        'Priority support',
        '50 API calls per minute',
        'Custom dashboards',
        'Risk assessment tools',
        'Historical data access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Comprehensive solution for large institutions and exchanges',
      features: [
        'Full AI suite',
        'Multi-chain analytics',
        'Custom integrations',
        'Dedicated support',
        'Unlimited API calls',
        'White-label solution',
        'Advanced compliance tools',
        'Custom reporting',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      company: 'CryptoFund Capital',
      role: 'Portfolio Manager',
      quote: 'The AI blockchain analytics platform helped us identify profitable DeFi opportunities and avoid risky investments. ROI increased by 300%.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Sarah Johnson',
      company: 'DeFi Protocol',
      role: 'Risk Manager',
      quote: 'Real-time security monitoring and risk assessment tools are game-changers. We prevented several potential exploits.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Michael Rodriguez',
      company: 'NFT Marketplace',
      role: 'CEO',
      quote: 'NFT analytics helped us understand market trends and optimize our platform. Trading volume increased by 500%.',
      rating: 5,
      image: '👨‍💻'
    }
  ];

  return (
    <ErrorBoundary>
      <SEOHead 
        title="AI Blockchain Analytics - Advanced Crypto Intelligence | Zion Tech Group"
        description="Comprehensive AI-powered blockchain analytics platform for DeFi, NFT, and crypto market intelligence. Starting at $299/month."
        keywords="blockchain analytics, crypto analytics, DeFi analytics, NFT analytics, blockchain intelligence, crypto data, blockchain AI"
        canonical="https://ziontechgroup.com/ai-blockchain-analytics"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                Blockchain AI Technology
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Blockchain Analytics
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Advanced Crypto Intelligence
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Unlock the power of blockchain data with AI-powered analytics. Comprehensive insights for DeFi, 
                NFT, and crypto markets with real-time intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#pricing" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="#demo" 
                  className="inline-flex items-center px-8 py-4 border border-emerald-400 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-400 hover:text-white transition-all duration-300"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful Blockchain Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology meets blockchain data for unprecedented insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl mb-4">
                    <feature.icon className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="text-green-400 mr-2 w-4 h-4" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Analytics Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cover every aspect of blockchain and crypto analytics
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {analyticsTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-4xl mb-4 text-center">{type.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{type.title}</h3>
                  <p className="text-gray-300 mb-6 text-center">{type.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {type.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3 text-center">
                        <span className="text-emerald-400 font-semibold">{metric}</span>
                      </div>
                    ))}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Analytics Platform?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Make smarter decisions with AI-powered blockchain intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Analytics Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options for every level of blockchain analytics needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${
                  plan.popular ? 'ring-2 ring-emerald-400 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-emerald-400 mb-2">
                      {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="text-green-400 mr-3 w-5 h-5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-4 px-6 rounded-lg font-bold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white'
                      : 'border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our clients achieved remarkable results with blockchain analytics
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{testimonial.image}</div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                      <p className="text-emerald-400">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 w-5 h-5" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Unlock Blockchain Intelligence?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start your free trial today and experience the power of AI-driven blockchain analytics
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </ErrorBoundary>
  );
};

export default AIBlockchainAnalyticsPage;