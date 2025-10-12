'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  BarChart3, Shield, Zap, Star, CheckCircle, ArrowRight, 
  Clock, Users, Globe, Phone, Mail, MapPin, TrendingUp,
  Activity, Database, Lock, Eye, AlertTriangle, DollarSign
} from 'lucide-react';

const ZionBlockchainAnalyticsPage: React.FC = () => {
  const features = [
    'Real-time blockchain transaction monitoring',
    'Smart contract security analysis',
    'DeFi protocol risk assessment',
    'NFT marketplace analytics',
    'Cross-chain transaction tracking',
    'Compliance and regulatory reporting',
    'Custom alert system',
    'API integration for developers'
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$149',
      period: '/month',
      description: 'Perfect for individual traders and small projects',
      features: [
        '5 blockchain networks',
        'Basic analytics dashboard',
        'Email alerts',
        '7-day data retention',
        'Community support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for DeFi protocols and trading firms',
      features: [
        '15 blockchain networks',
        'Advanced analytics & insights',
        'Real-time alerts',
        '30-day data retention',
        'Priority support',
        'API access',
        'Custom dashboards'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large institutions and exchanges',
      features: [
        'All blockchain networks',
        'Enterprise-grade analytics',
        'Custom alert rules',
        'Unlimited data retention',
        'Dedicated support',
        'White-label solution',
        'Advanced compliance tools',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '50+', label: 'Blockchain Networks', icon: <Globe className="w-6 h-6 text-cyan-400" /> },
    { number: '1B+', label: 'Transactions Analyzed', icon: <Activity className="w-6 h-6 text-emerald-400" /> },
    { number: '99.9%', label: 'Accuracy Rate', icon: <Shield className="w-6 h-6 text-blue-400" /> },
    { number: '24/7', label: 'Monitoring', icon: <Clock className="w-6 h-6 text-purple-400" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Blockchain Analytics - Advanced Crypto & DeFi Analytics | Zion Tech Group</title>
        <meta name="description" content="Comprehensive blockchain analytics platform for DeFi, NFTs, and cryptocurrency trading. Real-time monitoring, risk assessment, and compliance reporting." />
        <meta name="keywords" content="blockchain analytics, DeFi analytics, crypto analytics, smart contract analysis, NFT analytics, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-blockchain-analytics" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-purple-400/30">
              <BarChart3 className="w-4 h-4" />
              <span>Advanced Blockchain Analytics</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Zion Blockchain Analytics
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Unlock the power of blockchain data with our comprehensive analytics platform. 
              Monitor DeFi protocols, track transactions, and make informed decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:scale-105"
              >
                <TrendingUp className="w-5 h-5" />
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="#demo" 
                className="group border-2 border-purple-400 text-purple-400 px-10 py-4 rounded-xl font-semibold hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View Live Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Demo Dashboard Placeholder */}
            <div className="relative max-w-6xl mx-auto">
              <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 text-sm">Total Volume</span>
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">$2.4B</div>
                    <div className="text-green-400 text-sm">+12.5%</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 text-sm">Active Users</span>
                      <Users className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">847K</div>
                    <div className="text-blue-400 text-sm">+8.2%</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 text-sm">Risk Score</span>
                      <Shield className="w-4 h-4 text-yellow-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">Low</div>
                    <div className="text-yellow-400 text-sm">Safe</div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-gray-300 text-center">Live Blockchain Analytics Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to analyze and monitor blockchain ecosystems
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <h3 className="text-lg font-semibold text-white">Feature {index + 1}</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Flexible <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your blockchain analytics needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 relative ${plan.popular ? 'ring-2 ring-purple-400/50' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to="/contact"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-600 text-white hover:from-purple-600 hover:to-cyan-700 shadow-lg shadow-purple-500/25' 
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900'
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
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Master Blockchain Analytics?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join leading DeFi protocols and trading firms using our analytics platform to make data-driven decisions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/pricing"
                    className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    View All Plans
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Need Help Getting Started?</h3>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionBlockchainAnalyticsPage;
