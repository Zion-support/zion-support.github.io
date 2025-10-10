'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, TrendingUp, BarChart, Shield, Globe, Zap, Target, Users, Lock, Settings, FileText, Brain, Activity } from 'lucide-react';

const AIBlockchainAnalyticsPage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
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
=======
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Monitor blockchain transactions and market movements in real-time with advanced AI algorithms.',
      benefits: ['Live data streaming', 'Instant alerts', 'Market analysis', 'Transaction tracking']
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent insights and predictions powered by machine learning and blockchain data.',
      benefits: ['Predictive analytics', 'Pattern recognition', 'Risk assessment', 'Smart recommendations']
    },
    {
      icon: Shield,
      title: 'Security Analysis',
      description: 'Analyze blockchain security patterns and detect potential threats or vulnerabilities.',
      benefits: ['Threat detection', 'Security monitoring', 'Risk analysis', 'Compliance checking']
>>>>>>> origin/main
    },
    {
      icon: Globe,
      title: 'Multi-Chain Support',
<<<<<<< HEAD
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
=======
      description: 'Support for multiple blockchain networks including Ethereum, Bitcoin, and other major chains.',
      benefits: ['Multi-chain analysis', 'Cross-chain insights', 'Unified dashboard', 'Network comparison']
    },
    {
      icon: Zap,
      title: 'DeFi Analytics',
      description: 'Comprehensive analytics for DeFi protocols, yield farming, and liquidity analysis.',
      benefits: ['Protocol analysis', 'Yield tracking', 'Liquidity monitoring', 'APR calculations']
    },
    {
      icon: Target,
      title: 'NFT Intelligence',
      description: 'Advanced analytics for NFT markets, collections, and trading patterns.',
      benefits: ['Collection analysis', 'Price tracking', 'Rarity scoring', 'Market trends']
>>>>>>> origin/main
    }
  ];

  const benefits = [
<<<<<<< HEAD
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
=======
    'Increase trading accuracy by 85%',
    'Reduce risk exposure by 70%',
    'Improve decision-making speed by 90%',
    'Lower analysis time by 80%',
    'Enable real-time market insights',
    'Automate trading strategies',
    'Scale analytics across portfolios',
    'Enhance competitive advantage'
  ];

  const useCases = [
    {
      title: 'Crypto Trading',
      description: 'Advanced analytics for cryptocurrency trading and investment decisions',
      icon: '💰'
    },
    {
      title: 'DeFi Protocols',
      description: 'Monitor and analyze decentralized finance protocols and yields',
      icon: '🏦'
    },
    {
      title: 'NFT Markets',
      description: 'Track and analyze NFT collections and trading patterns',
      icon: '🎨'
    },
    {
      title: 'Portfolio Management',
      description: 'Comprehensive portfolio tracking and risk management',
      icon: '📊'
    },
    {
      title: 'Compliance & Audit',
      description: 'Blockchain compliance monitoring and audit trails',
      icon: '🔍'
    },
    {
      title: 'Research & Development',
      description: 'Blockchain research and development insights',
      icon: '🔬'
>>>>>>> origin/main
    }
  ];

  return (
<<<<<<< HEAD
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
=======
    <>
      <Helmet>
        <title>AI Blockchain Analytics - Zion Tech Group</title>
        <meta name="description" content="Unlock the power of blockchain data with our AI-powered analytics platform. Comprehensive insights for DeFi, NFT, and crypto markets with real-time intelligence." />
        <meta name="keywords" content="blockchain analytics, crypto analytics, DeFi analytics, NFT analytics, blockchain intelligence, crypto data, blockchain AI" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mb-8">
              <BarChart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Blockchain Analytics
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unlock the power of blockchain data with our AI-powered analytics platform. 
              Comprehensive insights for DeFi, NFT, and crypto markets with real-time intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-300 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
=======
          <div className="max-w-7xl mx-auto"></section>
            <div className="text-center"></div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6"></div>
                <TrendingUp className="w-4 h-4 mr-2" />
                Blockchain AI Technology
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
                AI Blockchain Analytics</h1>
>>>>>>> origin/main
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
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
<<<<<<< HEAD
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
=======
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Blockchain Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI Blockchain Analytics platform combines cutting-edge technology with blockchain expertise
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
>>>>>>> origin/main
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
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
=======
        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From traders to institutions, our AI Blockchain Analytics serves diverse needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
>>>>>>> origin/main
            </div>
          </div>
        </section>

<<<<<<< HEAD
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
=======
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Blockchain Analytics?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of blockchain analytics with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
>>>>>>> origin/main
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
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
=======
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Analyze Blockchain Data?
              </h2>
              <p className="text-xl text-emerald-100 mb-8">
                Join thousands of users who are already using our AI Blockchain Analytics platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300">
>>>>>>> origin/main
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

<<<<<<< HEAD
      <Footer />
=======
<<<<<<< HEAD
      <Footer />
    </>
=======
      <Footer /></Footer>
>>>>>>> origin/main
    </ErrorBoundary>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
  );
};

export default AIBlockchainAnalyticsPage;
