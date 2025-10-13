import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, ArrowRight, CheckCircle, Star, Cloud, Users, Clock, DollarSign, Shield, Code, Database, Mail, Settings, TrendingUp, PieChart, Activity, Target, Zap, Globe, Smartphone, Brain } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIQuantumFinancialOracle = () => {
  const features = [
    'Quantum-Powered Predictions',
    'Real-time Market Analysis',
    'Risk Assessment Models',
    'Portfolio Optimization',
    'Algorithmic Trading Signals',
    'Market Sentiment Analysis',
    'Cryptocurrency Analysis',
    'Forex Predictions',
    'Commodity Price Forecasting',
    'Economic Indicator Analysis',
    'Custom Trading Strategies',
    'API Integration'
  ];

  const pricingTiers = [
    {
      name: 'Trader',
      price: '$199',
      period: '/month',
      description: 'Perfect for individual traders',
      features: [
        'Basic market predictions',
        '5 trading signals/day',
        'Standard analysis',
        'Email support',
        '1 user account',
        'Basic portfolio tracking'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for professional traders',
      features: [
        'Advanced predictions',
        'Unlimited trading signals',
        'Real-time analysis',
        'Priority support',
        'Up to 5 user accounts',
        'Advanced portfolio optimization',
        'Custom strategies',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For financial institutions',
      features: [
        'Quantum-level predictions',
        'Institutional features',
        'Dedicated support',
        'Unlimited users',
        'Custom integrations',
        'White-label options',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const quantumFeatures = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Quantum Computing',
      description: 'Leverage quantum algorithms for complex financial calculations and predictions.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Market Predictions',
      description: 'Accurate predictions using quantum-enhanced machine learning models.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Risk Management',
      description: 'Advanced risk assessment with quantum-powered portfolio optimization.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Real-time Analysis',
      description: 'Live market analysis with instant quantum processing capabilities.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Trading Signals',
      description: 'AI-generated trading signals with quantum-enhanced accuracy.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Markets',
      description: 'Comprehensive coverage of global financial markets and instruments.',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const marketCoverage = [
    'Stock Markets',
    'Cryptocurrency',
    'Forex',
    'Commodities',
    'Bonds',
    'Options',
    'Futures',
    'ETFs'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO 
        title="AI Quantum Financial Oracle - Advanced Financial Predictions | Zion Tech Group"
        description="Revolutionary quantum-powered financial predictions and market analysis. AI-driven trading signals, portfolio optimization, and risk management. Starting at $199/month."
        keywords="quantum finance, financial predictions, trading signals, portfolio optimization, risk management, algorithmic trading, market analysis"
        canonical="https://ziontechgroup.com/ai-quantum-financial-oracle"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6">
            <Brain className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Quantum Financial AI</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              AI Quantum Financial Oracle
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary quantum-powered financial predictions and market analysis. 
            AI-driven trading signals, portfolio optimization, and risk management for the modern investor.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Demo
              <BarChart3 className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.7%</div>
              <div className="text-gray-300 text-sm">Prediction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Market Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">8</div>
              <div className="text-gray-300 text-sm">Market Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">&lt;1s</div>
              <div className="text-gray-300 text-sm">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Quantum-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge quantum computing technology for unprecedented financial analysis and predictions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-cyan-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Financial Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need for advanced financial analysis and trading decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Coverage Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Global Market Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive analysis across all major financial markets and instruments.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {marketCoverage.map((market, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 text-center"
              >
                <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors font-semibold">
                  {market}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-cyan-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Financial Intelligence Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your trading and investment needs. All plans include 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  tier.popular 
                    ? 'border-cyan-500/50 shadow-cyan-500/20' 
                    : 'border-white/20 hover:border-cyan-500/30'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                    <span className="text-gray-300 ml-1">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Transform Your Trading Strategy
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of traders and investors using AI Quantum Financial Oracle to 
            make smarter financial decisions. Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View All Plans
              <BarChart3 className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIQuantumFinancialOracle;