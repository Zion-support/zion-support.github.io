'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Link, Coins } from 'lucide-react';

const AiBlockchainAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Blockchain Analysis',
      description: 'Advanced AI algorithms that analyze blockchain data for intelligent insights.',
      benefits: ['Smart contract analysis', 'Transaction pattern recognition', 'Anomaly detection', 'Predictive modeling']
    },
    {
      icon: BarChart,
      title: 'Real-Time Analytics',
      description: 'Comprehensive blockchain analytics with real-time data visualization.',
      benefits: ['Live transaction monitoring', 'Network health metrics', 'Performance dashboards', 'Custom reports']
    },
    {
      icon: Coins,
      title: 'Cryptocurrency Tracking',
      description: 'Track and analyze cryptocurrency movements and market trends.',
      benefits: ['Price tracking', 'Volume analysis', 'Market sentiment', 'Trading insights']
    },
    {
      icon: Shield,
      title: 'Security Monitoring',
      description: 'Advanced security monitoring for blockchain networks and smart contracts.',
      benefits: ['Threat detection', 'Vulnerability scanning', 'Risk assessment', 'Compliance monitoring']
    },
    {
      icon: Link,
      title: 'Network Analysis',
      description: 'Deep analysis of blockchain network topology and connectivity.',
      benefits: ['Node analysis', 'Network mapping', 'Performance metrics', 'Optimization insights']
    },
    {
      icon: Database,
      title: 'Data Intelligence',
      description: 'Transform raw blockchain data into actionable business intelligence.',
      benefits: ['Data mining', 'Pattern recognition', 'Trend analysis', 'Business insights']
    }
  ];

  const benefits = [
    'Gain deep insights into blockchain networks and transactions',
    'Identify patterns and anomalies in real-time',
    'Optimize blockchain performance and efficiency',
    'Enhance security through advanced monitoring',
    'Make data-driven decisions with comprehensive analytics',
    'Stay ahead of market trends and opportunities'
  ];

  const useCases = [
    {
      title: 'DeFi Analytics',
      description: 'Analyze decentralized finance protocols and yield farming strategies',
      icon: Coins
    },
    {
      title: 'Smart Contract Auditing',
      description: 'Comprehensive analysis of smart contract security and functionality',
      icon: Shield
    },
    {
      title: 'Trading Intelligence',
      description: 'Advanced analytics for cryptocurrency trading and investment decisions',
      icon: BarChart
    },
    {
      title: 'Compliance Monitoring',
      description: 'Ensure regulatory compliance with automated monitoring and reporting',
      icon: Target
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Blockchain Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered blockchain analytics solution for cryptocurrency and DeFi." />
        <meta name="keywords" content="blockchain analytics, cryptocurrency analysis, DeFi analytics, smart contract analysis, AI blockchain" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI-Powered
                <span className="text-blue-600"> Blockchain Analytics</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Unlock the full potential of blockchain data with our advanced AI analytics platform. 
                Analyze transactions, monitor networks, and gain intelligent insights into cryptocurrency markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advanced Blockchain Analytics
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI-powered platform provides comprehensive analysis of blockchain networks, transactions, and market trends.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our blockchain analytics platform can transform your cryptocurrency and DeFi operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <useCase.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Blockchain Analytics?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the power of AI-driven blockchain analytics and make smarter decisions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Analyze Blockchain Data?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your journey with AI-powered blockchain analytics today and unlock the full potential of cryptocurrency data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AiBlockchainAnalyticsPage;