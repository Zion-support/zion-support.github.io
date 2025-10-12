'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { TrendingUp, TrendingDown, DollarSign, BarChart3, Shield, Zap, Brain, Target, ArrowRight, CheckCircle, Star, Users, Award, Clock, Globe, Lock, Smartphone, Monitor, Database, Cpu, Sparkles } from 'lucide-react';

const AiCryptoAnalyzerPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Market Analysis',
      description: 'Advanced machine learning algorithms analyze market trends, sentiment, and patterns to predict crypto movements with 85% accuracy.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Portfolio Tracking',
      description: 'Monitor your cryptocurrency investments with live price updates, profit/loss calculations, and performance analytics.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Risk Assessment Engine',
      description: 'AI-driven risk analysis helps you make informed decisions by evaluating market volatility and potential threats.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Target,
      title: 'Smart Trading Signals',
      description: 'Receive automated buy/sell signals based on technical analysis, market sentiment, and AI predictions.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Automated Trading Bots',
      description: 'Deploy AI trading bots that execute trades automatically based on your predefined strategies and risk tolerance.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Multi-Exchange Integration',
      description: 'Connect to 50+ cryptocurrency exchanges including Binance, Coinbase, Kraken, and more for comprehensive analysis.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for crypto beginners',
      features: [
        'Portfolio tracking for up to 10 coins',
        'Basic market analysis',
        'Email alerts',
        'Mobile app access',
        'Community support'
      ],
      color: 'from-slate-600 to-slate-700',
      buttonColor: 'bg-slate-600 hover:bg-slate-700'
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'For serious crypto investors',
      features: [
        'Unlimited portfolio tracking',
        'Advanced AI analysis',
        'Trading signals',
        'Risk assessment',
        'Priority support',
        'API access'
      ],
      color: 'from-blue-600 to-blue-700',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For institutions and large investors',
      features: [
        'Everything in Professional',
        'Custom AI models',
        'White-label solution',
        'Dedicated account manager',
        'Custom integrations',
        '24/7 phone support'
      ],
      color: 'from-purple-600 to-purple-700',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Active Users', icon: Users },
    { number: '$2.5B+', label: 'Assets Tracked', icon: DollarSign },
    { number: '85%', label: 'Prediction Accuracy', icon: Target },
    { number: '24/7', label: 'Market Monitoring', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Crypto Analyzer - Advanced Cryptocurrency Analysis & Trading | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered cryptocurrency analysis platform. Track portfolios, predict market movements, and automate trading with 85% accuracy. Start your free trial today!" />
        <meta name="keywords" content="cryptocurrency analysis, AI trading, crypto portfolio, blockchain analytics, trading bots, market prediction" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-crypto-analyzer" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Crypto Analyzer
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Pro
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionize your cryptocurrency trading with AI-powered market analysis, 
                automated trading bots, and real-time portfolio tracking. Make smarter investment decisions with 85% prediction accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/demo" 
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our advanced AI technology provides comprehensive cryptocurrency analysis and automated trading capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 h-full border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to suit every investor's needs. Start with our free trial and upgrade as you grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br ${plan.color} rounded-2xl p-8 ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-8">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`w-full ${plan.buttonColor} text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 inline-block text-center`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-purple-700 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Crypto Trading?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Join thousands of successful traders who trust our AI-powered platform. 
              Start your free trial today and experience the future of cryptocurrency analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300 flex items-center justify-center"
              >
                Schedule Demo
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-200">
              <p>📞 Call us: <a href="tel:+13024640950" className="text-white hover:underline">+1 302 464 0950</a></p>
              <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:underline">kleber@ziontechgroup.com</a></p>
              <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiCryptoAnalyzerPage;
