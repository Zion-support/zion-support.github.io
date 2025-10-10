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
      icon: BarChart,
      title: 'Real-Time Analytics',
      description: 'Monitor blockchain transactions, DeFi protocols, and market movements in real-time.',
      benefits: ['Live data feeds', 'Instant updates', 'Custom dashboards', 'Alert systems']
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms analyze blockchain data for predictive insights.',
      benefits: ['Pattern recognition', 'Anomaly detection', 'Trend prediction', 'Risk assessment']
    },
    {
      icon: Shield,
      title: 'Security Analysis',
      description: 'Comprehensive security monitoring and threat detection for blockchain networks.',
      benefits: ['Threat detection', 'Vulnerability scanning', 'Compliance monitoring', 'Audit trails']
    },
    {
      icon: Target,
      title: 'DeFi Analytics',
      description: 'Specialized analytics for decentralized finance protocols and yield farming.',
      benefits: ['Yield tracking', 'Liquidity analysis', 'Protocol monitoring', 'APY calculations']
    }
  ];

  const analyticsTypes = [
    {
      title: 'Transaction Analytics',
      description: 'Deep analysis of blockchain transactions and smart contract interactions.',
      icon: Activity,
      metrics: ['Transaction volume', 'Gas usage', 'Smart contract calls', 'Address clustering']
    },
    {
      title: 'Market Intelligence',
      description: 'Comprehensive crypto market analysis and price prediction models.',
      icon: TrendingUp,
      metrics: ['Price movements', 'Volume analysis', 'Market sentiment', 'Trading patterns']
    },
    {
      title: 'DeFi Protocol Analysis',
      description: 'Monitor and analyze decentralized finance protocols and their performance.',
      icon: Globe,
      metrics: ['TVL tracking', 'Yield farming', 'Liquidity pools', 'Protocol health']
    },
    {
      title: 'NFT Analytics',
      description: 'Track and analyze non-fungible token markets and collections.',
      icon: FileText,
      metrics: ['Floor prices', 'Sales volume', 'Collection analysis', 'Rarity scores']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for individual traders and small projects',
      features: [
        'Basic analytics dashboard',
        'Real-time price tracking',
        'Email alerts',
        '5 API calls/minute',
        'Standard support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for trading firms and DeFi projects',
      features: [
        'Advanced analytics suite',
        'Custom dashboards',
        'Priority support',
        '100 API calls/minute',
        'Historical data access',
        'Webhook integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large institutions and exchanges',
      features: [
        'Unlimited analytics',
        'Custom data feeds',
        'Dedicated support',
        'Unlimited API calls',
        'White-label solutions',
        'On-premise deployment'
      ],
      popular: false
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
                <span className="block text-emerald-400">Intelligence Platform</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Unlock the power of blockchain data with our advanced AI analytics platform. 
                Get real-time insights, predictive analytics, and comprehensive intelligence for crypto markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                  Start Free Trial
                </button>
                <button className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to analyze and understand blockchain data
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Analytics Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive analysis across all blockchain ecosystems
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {analyticsTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <type.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.metrics.map((metric, idx) => (
                      <li key={idx} className="text-sm text-gray-300">
                        • {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing for every level of blockchain analytics needs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm p-8 rounded-xl border ${plan.popular ? 'border-emerald-400' : 'border-white/20'}`}>
                  {plan.popular && (
                    <div className="bg-emerald-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                      : 'border border-white/30 text-white hover:bg-white/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Analyze Blockchain Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and unlock the power of AI blockchain analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </ErrorBoundary>
  );
};

export default AIBlockchainAnalyticsPage;