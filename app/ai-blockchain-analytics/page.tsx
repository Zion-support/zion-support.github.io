'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Link, Coins, Activity } from 'lucide-react';

const AiBlockchainAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Blockchain Analytics',
      description: 'Advanced AI algorithms that analyze blockchain data and provide intelligent insights.',
      benefits: ['Transaction analysis', 'Pattern recognition', 'Anomaly detection', 'Predictive modeling']
    },
    {
      icon: BarChart,
      title: 'Real-Time Monitoring',
      description: 'Monitor blockchain networks and transactions in real-time with comprehensive analytics.',
      benefits: ['Live data feeds', 'Network health', 'Transaction tracking', 'Performance metrics']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Advanced security features and compliance monitoring for blockchain operations.',
      benefits: ['Threat detection', 'Regulatory compliance', 'Audit trails', 'Risk assessment']
    }
  ];

  const benefits = [
    'Gain deep insights into blockchain transactions and patterns',
    'Detect suspicious activities and potential security threats',
    'Optimize blockchain performance and reduce costs',
    'Ensure regulatory compliance and audit requirements',
    'Make data-driven decisions with comprehensive analytics',
    'Scale blockchain operations with intelligent automation'
  ];

  const useCases = [
    {
      title: 'Cryptocurrency Analysis',
      description: 'Analyze cryptocurrency markets and trading patterns with AI',
      icon: Coins
    },
    {
      title: 'DeFi Monitoring',
      description: 'Monitor decentralized finance protocols and smart contracts',
      icon: Link
    },
    {
      title: 'Transaction Tracking',
      description: 'Track and analyze blockchain transactions for compliance',
      icon: Activity
    },
    {
      title: 'Risk Assessment',
      description: 'Assess and mitigate risks in blockchain operations',
      icon: Shield
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Blockchain Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered blockchain analytics for cryptocurrency and DeFi. Analyze transactions, detect patterns, and ensure compliance." />
        <meta name="keywords" content="AI blockchain analytics, cryptocurrency analysis, DeFi monitoring, blockchain compliance, transaction tracking" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI-Powered
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Blockchain Analytics
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Analyze blockchain data with advanced AI algorithms. Get insights into transactions, 
              detect patterns, and ensure compliance across all blockchain networks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Started Today
                <ArrowRight className="inline-block ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Blockchain Analytics Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered blockchain analytics platform provides comprehensive tools to analyze 
              and monitor blockchain networks and transactions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Blockchain Analytics?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of AI-driven blockchain analytics that transform your understanding of blockchain data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real-World Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI blockchain analytics can transform your understanding of blockchain data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Analyze Blockchain Data?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Start your journey with AI-powered blockchain analytics today and unlock insights from your blockchain data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
              <ArrowRight className="inline-block ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
};

export default AiBlockchainAnalyticsPage;