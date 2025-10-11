'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Cpu, Brain, Shield, Globe, Zap, TrendingUp, Users, Database } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIBlockchainAnalyticsPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze blockchain data to identify patterns, trends, and anomalies.',
      benefits: ['Pattern Recognition', 'Anomaly Detection', 'Predictive Analytics', 'Smart Insights']
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      title: 'Real-Time Processing',
      description: 'Process massive blockchain datasets in real-time with our high-performance computing infrastructure.',
      benefits: ['Live Data Processing', 'High-Speed Analysis', 'Scalable Infrastructure', 'Low Latency']
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Security Intelligence',
      description: 'Detect security threats, fraud, and suspicious activities across multiple blockchain networks.',
      benefits: ['Threat Detection', 'Fraud Prevention', 'Risk Assessment', 'Security Monitoring']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: 'Market Intelligence',
      description: 'Comprehensive market analysis with price predictions, trading signals, and investment insights.',
      benefits: ['Price Predictions', 'Trading Signals', 'Market Trends', 'Investment Analysis']
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Multi-Chain Support',
      description: 'Analyze data across multiple blockchain networks including Bitcoin, Ethereum, and emerging chains.',
      benefits: ['Bitcoin Analysis', 'Ethereum Analytics', 'DeFi Protocols', 'Cross-Chain Insights']
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: 'Custom Dashboards',
      description: 'Create personalized dashboards and reports tailored to your specific analytical needs.',
      benefits: ['Custom Metrics', 'Visual Analytics', 'Automated Reports', 'Data Export']
    }
  ]

  const pricingPlans = [
    {
      name: 'Developer',
      price: '$199',
      period: '/month',
      description: 'Perfect for developers and researchers',
      features: [
        'Basic blockchain analytics',
        'API access',
        'Historical data (1 year)',
        'Email support',
        'Standard dashboards',
        'Basic alerts'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Advanced features for trading firms',
      features: [
        'Advanced AI analytics',
        'Real-time data processing',
        'Historical data (5 years)',
        'Priority support',
        'Custom dashboards',
        'Advanced alerts',
        'Trading signals'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Full-featured solution for institutions',
      features: [
        'Everything in Professional',
        'Custom AI models',
        'Unlimited historical data',
        '24/7 dedicated support',
        'White-label solutions',
        'Custom integrations',
        'Dedicated infrastructure'
      ],
      popular: false
    }
  ]

  const analyticsTypes = [
    {
      type: 'Transaction Analysis',
      description: 'Deep analysis of transaction patterns and flow',
      icon: <Database className="w-6 h-6 text-blue-500" />
    },
    {
      type: 'DeFi Analytics',
      description: 'Comprehensive DeFi protocol and yield farming analysis',
      icon: <Zap className="w-6 h-6 text-green-500" />
    },
    {
      type: 'NFT Intelligence',
      description: 'NFT market trends and collection analysis',
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />
    },
    {
      type: 'Risk Assessment',
      description: 'Portfolio risk analysis and stress testing',
      icon: <Shield className="w-6 h-6 text-red-500" />
    }
  ]

  const useCases = [
    {
      title: 'Trading Firms',
      description: 'Advanced analytics for algorithmic trading and market making',
      benefits: ['Trading Signals', 'Market Making', 'Arbitrage Opportunities', 'Risk Management']
    },
    {
      title: 'Investment Funds',
      description: 'Portfolio analysis and investment decision support',
      benefits: ['Portfolio Optimization', 'Due Diligence', 'Performance Tracking', 'Risk Assessment']
    },
    {
      title: 'Compliance Teams',
      description: 'Regulatory compliance and anti-money laundering support',
      benefits: ['AML Detection', 'Compliance Reporting', 'Transaction Monitoring', 'Audit Trails']
    },
    {
      title: 'Research Institutions',
      description: 'Academic research and blockchain data analysis',
      benefits: ['Data Access', 'Research Tools', 'Custom Analysis', 'Academic Support']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Blockchain Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered blockchain analytics with real-time processing, security intelligence, and market insights." />
        <meta name="keywords" content="AI blockchain analytics, cryptocurrency analysis, DeFi analytics, blockchain intelligence, trading signals" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-blue-600/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full mb-6">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Blockchain Analytics
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Unlock the power of blockchain data with AI-driven analytics. Real-time processing, 
                security intelligence, and market insights for the next generation of crypto professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Types Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Analytics</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced analysis across all aspects of blockchain technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
              {analyticsTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105 text-center">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">{type.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{type.type}</h3>
                  <p className="text-gray-300">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Powerful AI Features</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge AI technology for blockchain data analysis
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Perfect for Every Use Case</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Tailored solutions for different industries and applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-20">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{useCase.title}</h3>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Professional Pricing</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your analytical needs. All plans include a 7-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-4">Unlock Blockchain Intelligence</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Start your free trial and discover the power of AI-driven blockchain analytics.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}