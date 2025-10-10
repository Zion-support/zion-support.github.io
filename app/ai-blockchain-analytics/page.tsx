'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, TrendingUp, BarChart, Shield, Globe, Zap, Target, Users, Lock, Settings, FileText, Brain, Activity } from 'lucide-react';

const AIBlockchainAnalyticsPage: React.FC = () => {
  const features = [
    {
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
    },
    {
      icon: Globe,
      title: 'Multi-Chain Support',
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
    }
  ];

  const benefits = [
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
    }
  ];

  return (
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
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-8">
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
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 flex items-center justify-center">
                Start Analyzing
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-300 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
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
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Blockchain Analytics?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven results that drive better blockchain investment decisions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Perfect for blockchain professionals, traders, and researchers
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Master Blockchain Analytics?
              </h2>
              <p className="text-xl text-emerald-100 mb-8">
                Join thousands of blockchain professionals who trust our analytics platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AIBlockchainAnalyticsPage;