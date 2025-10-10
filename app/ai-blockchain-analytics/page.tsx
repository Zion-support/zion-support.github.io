'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock,
  BarChart3,
  Database,
  Lock,
  Activity
} from 'lucide-react';

const AIBlockchainAnalyticsPage: React.FC = () => {
  const features = [
    'Real-time Blockchain Monitoring',
    'Smart Contract Analysis',
    'DeFi Protocol Tracking',
    'NFT Market Intelligence',
    'Risk Assessment',
    'Compliance Reporting',
    'Portfolio Optimization',
    'Cross-chain Analytics'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for individual traders',
      features: [
        'Up to 5 wallets tracked',
        'Basic analytics dashboard',
        'Email support',
        'Standard data feeds',
        'Basic alerts',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for trading firms',
      features: [
        'Up to 50 wallets tracked',
        'Advanced analytics',
        'Priority support',
        'Real-time data feeds',
        'Custom alerts',
        'API access',
        'Portfolio management',
        'Risk scoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large institutions',
      features: [
        'Unlimited wallets',
        'Custom analytics',
        'Dedicated support',
        'On-premise deployment',
        'White-label solution',
        'Custom integrations',
        'SLA guarantee',
        'Compliance tools'
      ],
      popular: false
    }
  ];

  const analyticsTypes = [
    {
      icon: TrendingUp,
      title: 'Price Analytics',
      description: 'Advanced price prediction and trend analysis using machine learning.',
      metrics: ['Price predictions', 'Volatility analysis', 'Support/resistance levels']
    },
    {
      icon: Shield,
      title: 'Security Analysis',
      description: 'Smart contract security auditing and vulnerability detection.',
      metrics: ['Contract audits', 'Risk scoring', 'Vulnerability alerts']
    },
    {
      icon: BarChart3,
      title: 'DeFi Analytics',
      description: 'Comprehensive DeFi protocol analysis and yield optimization.',
      metrics: ['Yield farming', 'Liquidity analysis', 'Impermanent loss']
    },
    {
      icon: Database,
      title: 'On-chain Data',
      description: 'Deep dive into blockchain transaction data and patterns.',
      metrics: ['Transaction analysis', 'Address clustering', 'Flow analysis']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Blockchain Analytics - Zion Tech Group | Advanced Crypto Analytics</title>
        <meta name="description" content="Revolutionary AI-powered blockchain analytics platform with real-time monitoring, smart contract analysis, and DeFi intelligence. Make informed crypto decisions." />
        <meta name="keywords" content="blockchain analytics, crypto analytics, DeFi analytics, smart contract analysis, blockchain monitoring, crypto intelligence" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-6">
              <TrendingUp className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-medium">Blockchain Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text">
              AI Blockchain Analytics
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered analytics for blockchain and cryptocurrency markets. 
              Get real-time insights, smart contract analysis, and DeFi intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="cyber-button text-center px-8 py-4"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="border-2 border-yellow-500 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500/10 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">$2.5T</div>
                <div className="text-gray-300">Assets Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Blockchains</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Comprehensive Blockchain Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI algorithms analyze blockchain data to provide actionable 
                insights for traders, investors, and institutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Types Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Advanced Analytics Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From price prediction to security analysis, our AI covers every aspect 
                of blockchain and cryptocurrency analytics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {analyticsTypes.map((type, index) => (
                <div key={index} className="quantum-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                      <p className="text-gray-300 mb-4">{type.description}</p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-cyan-400 mb-2">Key Metrics:</h4>
                        {type.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="text-sm text-gray-400 flex items-center">
                            <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></div>
                            {metric}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Choose Your Analytics Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with our free trial and scale as your needs grow.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card hologram-card p-8 relative ${plan.popular ? 'ring-2 ring-yellow-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-yellow-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'cyber-button'
                        : 'border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500/10'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Master Blockchain Analytics?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of traders and institutions using our AI-powered 
                blockchain analytics to make informed decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button text-center px-8 py-4"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-yellow-500 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500/10 transition-all duration-300"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIBlockchainAnalyticsPage;