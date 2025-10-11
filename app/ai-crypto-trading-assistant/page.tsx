import React from 'react';
import { CheckCircle, ArrowRight, TrendingUp, DollarSign, Shield, BarChart3, Zap, Target, Globe, Cpu } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICryptoTradingAssistantPage: React.FC = () => {
  const features = [
    'AI-powered market analysis and predictions',
    'Real-time price monitoring and alerts',
    'Automated trading strategies based on ML models',
    'Portfolio optimization and risk management',
    'Technical indicator analysis and signals',
    'News sentiment analysis for crypto markets',
    'Multi-exchange trading support',
    'Custom trading bot creation',
    'Performance tracking and analytics',
    '24/7 market monitoring and alerts'
  ];

  const tradingStrategies = [
    {
      name: 'DCA (Dollar Cost Averaging)',
      description: 'Automated regular investments to reduce market volatility impact',
      roi: '15-25%',
      risk: 'Low'
    },
    {
      name: 'Momentum Trading',
      description: 'AI identifies and capitalizes on price momentum patterns',
      roi: '30-50%',
      risk: 'Medium'
    },
    {
      name: 'Arbitrage Trading',
      description: 'Exploits price differences across multiple exchanges',
      roi: '20-40%',
      risk: 'Low'
    },
    {
      name: 'Grid Trading',
      description: 'Automated buy/sell orders at predetermined price levels',
      roi: '25-45%',
      risk: 'Medium'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      features: [
        'Basic AI analysis',
        '5 trading pairs',
        'Email alerts',
        'Basic portfolio tracking',
        'Community support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      features: [
        'Advanced AI analysis',
        'Unlimited trading pairs',
        'Real-time alerts',
        'Advanced portfolio tracking',
        'Custom trading strategies',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      features: [
        'Premium AI analysis',
        'Unlimited trading pairs',
        'Real-time alerts',
        'Advanced portfolio tracking',
        'Custom trading strategies',
        'White-label solution',
        'Dedicated account manager',
        '24/7 phone support'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '85%', label: 'Success Rate' },
    { number: '$2.5M+', label: 'Assets Under Management' },
    { number: '50+', label: 'Supported Exchanges' },
    { number: '24/7', label: 'AI Monitoring' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Crypto Trading Assistant - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cryptocurrency trading assistant with automated strategies, real-time analysis, and intelligent risk management. Maximize your crypto profits with AI." />
        <meta name="keywords" content="AI crypto trading, cryptocurrency bot, automated trading, crypto analysis, trading assistant, blockchain AI" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full mb-6">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Crypto Trading Assistant
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Maximize your cryptocurrency profits with our advanced AI trading assistant. 
              Automated strategies, real-time analysis, and intelligent risk management powered by machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/micro-saas-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Micro SAAS
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Advanced AI Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trading Strategies */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">AI Trading Strategies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tradingStrategies.map((strategy, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{strategy.name}</h3>
                    <div className="flex gap-2">
                      <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                        ROI: {strategy.roi}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        strategy.risk === 'Low' ? 'bg-blue-600/20 text-blue-400' : 'bg-yellow-600/20 text-yellow-400'
                      }`}>
                        Risk: {strategy.risk}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300">{strategy.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">1. Set Your Strategy</h3>
                <p className="text-gray-300">Choose from pre-built AI strategies or create custom ones based on your risk tolerance and investment goals.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">2. AI Analyzes Markets</h3>
                <p className="text-gray-300">Our AI continuously analyzes market data, news sentiment, and technical indicators to identify trading opportunities.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">3. Execute & Monitor</h3>
                <p className="text-gray-300">AI automatically executes trades and monitors your portfolio, adjusting strategies based on market conditions.</p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-6">
                    {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
                        : 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white hover:from-yellow-600 hover:to-orange-700'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Why Choose Our AI Trading Assistant?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Higher Returns</h3>
                <p className="text-gray-300">AI-optimized strategies achieve 15-50% higher returns compared to manual trading.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Risk Management</h3>
                <p className="text-gray-300">Advanced risk management algorithms protect your investments from major losses.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">24/7 Monitoring</h3>
                <p className="text-gray-300">Never miss a trading opportunity with round-the-clock AI market monitoring.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Multi-Exchange</h3>
                <p className="text-gray-300">Trade across 50+ exchanges with unified portfolio management and arbitrage opportunities.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Maximize Your Crypto Profits?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of traders using AI to achieve consistent profits in the volatile crypto market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AICryptoTradingAssistantPage;