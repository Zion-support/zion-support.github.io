import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { TrendingUp, Shield, BarChart3, Zap, Star, ArrowRight, CheckCircle, Users, Clock, Sparkles, Database, Lock, Eye } from 'lucide-react';

export default function AIBlockchainAnalytics() {
  const features = [
    {
      title: "Real-time Transaction Monitoring",
      description: "Track and analyze blockchain transactions in real-time with advanced pattern recognition and anomaly detection",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Smart Contract Analysis",
      description: "Automated analysis of smart contracts for vulnerabilities, gas optimization, and compliance checking",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "DeFi Protocol Analytics",
      description: "Comprehensive analysis of DeFi protocols including liquidity, yield farming, and risk assessment",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "NFT Market Intelligence",
      description: "Track NFT collections, floor prices, trading volumes, and market trends across multiple platforms",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Cross-chain Analysis",
      description: "Monitor and analyze transactions across multiple blockchain networks and bridges",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Risk Assessment Engine",
      description: "AI-powered risk scoring for addresses, contracts, and transactions with fraud detection",
      icon: <Lock className="w-6 h-6" />
    }
  ];

  const pricingPlans = [
    {
      name: "Developer",
      price: "$99",
      period: "/month",
      description: "Perfect for individual developers and small projects",
      features: [
        "10,000 API calls/month",
        "Basic analytics dashboard",
        "5 blockchain networks",
        "Email support",
        "Standard data retention"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for trading firms and DeFi protocols",
      features: [
        "100,000 API calls/month",
        "Advanced analytics dashboard",
        "15 blockchain networks",
        "Priority support",
        "Extended data retention",
        "Custom alerts"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For large institutions and exchanges",
      features: [
        "Unlimited API calls",
        "Custom analytics dashboard",
        "All blockchain networks",
        "Dedicated support",
        "Unlimited data retention",
        "White-label solution",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const blockchainNetworks = [
    "Ethereum", "Bitcoin", "Binance Smart Chain", "Polygon", "Avalanche", 
    "Solana", "Cardano", "Polkadot", "Cosmos", "Arbitrum", "Optimism", "Base"
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      company: "Crypto Trading Firm",
      role: "Head of Analytics",
      content: "Zion's AI blockchain analytics has given us unprecedented insights into market movements. Our trading strategies have improved by 35%.",
      rating: 5,
      avatar: "AC"
    },
    {
      name: "Maria Rodriguez",
      company: "DeFi Protocol",
      role: "CTO",
      content: "The smart contract analysis features are incredible. We've identified and fixed critical vulnerabilities before they became issues.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "David Kim",
      company: "NFT Marketplace",
      role: "Data Scientist",
      content: "The NFT market intelligence has revolutionized how we understand our user behavior and market trends. Highly recommended!",
      rating: 5,
      avatar: "DK"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Blockchain Analytics - Advanced Crypto & DeFi Intelligence | Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive AI-powered blockchain analytics platform for DeFi, NFTs, and crypto trading. Real-time monitoring, smart contract analysis, and risk assessment. Get started today."
        />
        <meta
          name="keywords"
          content="blockchain analytics, DeFi analytics, crypto intelligence, smart contract analysis, NFT analytics, blockchain monitoring, crypto risk assessment, DeFi protocols"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-blockchain-analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Advanced Blockchain Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI Blockchain
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                {" "}Analytics
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Unlock the power of blockchain data with our AI-powered analytics platform. 
              Monitor DeFi protocols, analyze smart contracts, and make informed decisions with real-time insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Analyzing
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                <BarChart3 className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">12+</div>
                <div className="text-gray-300">Blockchain Networks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">1M+</div>
                <div className="text-gray-300">Transactions Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Real-time Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered platform provides comprehensive blockchain intelligence 
                to help you navigate the complex world of DeFi and crypto markets.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
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

        {/* Supported Networks */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Supported Blockchain Networks
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Monitor and analyze transactions across all major blockchain networks
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {blockchainNetworks.map((network, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-white font-semibold">{network}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Analytics Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to match your blockchain analytics needs. 
                Start with our free tier and scale as you grow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' 
                      : 'border-white/20 hover:border-cyan-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our blockchain analytics platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Master Blockchain Analytics?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading crypto firms and DeFi protocols using our AI-powered analytics. 
              Start your free trial today and gain the insights you need to succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                <BarChart3 className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}