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
      title: 'AI-Powered Blockchain Analysis',
      description: 'Advanced AI algorithms to analyze blockchain data and identify patterns.',
      benefits: ['Pattern recognition', 'Anomaly detection', 'Predictive modeling', 'Smart contract analysis']
    },
    {
      icon: Link,
      title: 'Blockchain Intelligence',
      description: 'Comprehensive blockchain data analysis and intelligence gathering.',
      benefits: ['Transaction tracking', 'Address clustering', 'Flow analysis', 'Risk assessment']
    },
    {
      icon: Coins,
      title: 'Cryptocurrency Analytics',
      description: 'Deep analysis of cryptocurrency markets and trading patterns.',
      benefits: ['Market analysis', 'Price prediction', 'Volume analysis', 'Trading insights']
    },
    {
      icon: Activity,
      title: 'Real-Time Monitoring',
      description: 'Live monitoring of blockchain networks and transactions.',
      benefits: ['Live tracking', 'Alert systems', 'Performance metrics', 'Network health']
    },
    {
      icon: Shield,
      title: 'Security Analysis',
      description: 'Advanced security analysis for blockchain networks and smart contracts.',
      benefits: ['Vulnerability scanning', 'Security audits', 'Threat detection', 'Compliance monitoring']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Efficient storage and management of blockchain data for analysis.',
      benefits: ['Data indexing', 'Query optimization', 'Storage efficiency', 'Data integrity']
    }
  ];

  const services = [
    {
      title: 'Blockchain Analytics Platform',
      description: 'Comprehensive platform for blockchain data analysis and intelligence.',
      features: ['Transaction analysis', 'Address tracking', 'Flow visualization', 'Risk scoring'],
      price: 'Starting at $399/month'
    },
    {
      title: 'Smart Contract Analysis',
      description: 'AI-powered analysis of smart contracts for security and optimization.',
      features: ['Code analysis', 'Vulnerability detection', 'Gas optimization', 'Security scoring'],
      price: 'Starting at $599/month'
    },
    {
      title: 'DeFi Analytics',
      description: 'Advanced analytics for decentralized finance protocols and markets.',
      features: ['Protocol analysis', 'Yield farming insights', 'Liquidity analysis', 'Risk assessment'],
      price: 'Starting at $799/month'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Blockchain Analytics | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered blockchain analytics and intelligence. Analyze transactions, smart contracts, and DeFi protocols with cutting-edge AI technology." />
        <meta name="keywords" content="blockchain analytics, AI blockchain, cryptocurrency analysis, smart contract analysis, DeFi analytics" />
        <meta property="og:title" content="AI Blockchain Analytics | Zion Tech Group" />
        <meta property="og:description" content="Advanced AI-powered blockchain analytics and intelligence. Analyze transactions, smart contracts, and DeFi protocols with cutting-edge AI technology." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Blockchain Analytics | Zion Tech Group" />
        <meta name="twitter:description" content="Advanced AI-powered blockchain analytics and intelligence. Analyze transactions, smart contracts, and DeFi protocols with cutting-edge AI technology." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Blockchain
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Analytics
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered blockchain analytics and intelligence. Analyze transactions, 
              smart contracts, and DeFi protocols with cutting-edge AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Advanced Blockchain Analytics Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Our Blockchain Analytics Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-blue-400 mb-4">{service.price}</div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Analyze Blockchain Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Unlock the power of blockchain data with our AI-powered analytics platform.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Start Your Free Trial
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AiBlockchainAnalyticsPage;