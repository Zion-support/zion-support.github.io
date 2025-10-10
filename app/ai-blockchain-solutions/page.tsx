'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Lock, Brain, Zap, Shield, Target, ArrowRight, CheckCircle, Users, Palette, CreditCard, Stethoscope, Clock, Navigation as NavIcon, TrendingUp, Truck } from 'lucide-react';

const AIBlockchainSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Lock,
      title: 'Smart Contract AI',
      description: 'AI-powered smart contracts that automatically execute based on complex conditions and machine learning predictions.',
      benefits: ['Automated execution', 'ML predictions', 'Complex conditions', 'Self-updating contracts']
    },
    {
      icon: Brain,
      title: 'Decentralized AI Networks',
      description: 'Distributed AI networks that operate across blockchain nodes for enhanced security and performance.',
      benefits: ['Distributed computing', 'Enhanced security', 'Scalable AI', 'Decentralized governance']
    },
    {
      icon: Zap,
      title: 'AI-Powered Consensus',
      description: 'Machine learning algorithms that optimize blockchain consensus mechanisms for better performance.',
      benefits: ['Optimized consensus', 'Faster transactions', 'Lower energy consumption', 'Improved scalability']
    },
    {
      icon: Shield,
      title: 'Cryptographic AI',
      description: 'AI-enhanced cryptography for advanced security and privacy protection in blockchain systems.',
      benefits: ['Advanced encryption', 'Privacy protection', 'Quantum resistance', 'Zero-knowledge proofs']
    },
    {
      icon: Target,
      title: 'Predictive Analytics',
      description: 'AI-driven analysis of blockchain data for market predictions and risk assessment.',
      benefits: ['Market predictions', 'Risk analysis', 'Pattern recognition', 'Investment insights']
    },
    {
      icon: Users,
      title: 'DAO Governance AI',
      description: 'AI systems that assist in decentralized autonomous organization governance and decision-making.',
      benefits: ['Automated governance', 'Voting optimization', 'Proposal analysis', 'Community management']
    }
  ];

  const applications = [
    {
      title: 'DeFi Platforms',
      description: 'AI-enhanced decentralized finance platforms with intelligent trading and risk management.',
      icon: CreditCard
    },
    {
      title: 'NFT Marketplaces',
      description: 'Intelligent NFT platforms with AI-powered pricing and recommendation systems.',
      icon: Palette
    },
    {
      title: 'Supply Chain',
      description: 'Blockchain-based supply chain solutions with AI for tracking and optimization.',
      icon: Truck
    },
    {
      title: 'Healthcare Records',
      description: 'Secure healthcare data management with AI-powered privacy and analysis.',
      icon: Stethoscope
    }
  ];

  const benefits = [
    'Increase transaction efficiency by 90%',
    'Reduce energy consumption by 70%',
    'Improve security by 95%',
    'Enable new business models',
    'Reduce operational costs by 60%',
    'Accelerate development by 5x',
    'Enhance user experience',
    'Enable global scalability'
  ];

  return (
    <>
      <Helmet>
        <title>AI Blockchain Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered blockchain solutions. Smart contracts, DeFi platforms, and decentralized applications with advanced AI integration." />
        <meta name="keywords" content="AI blockchain, smart contracts, DeFi, NFT, blockchain solutions, decentralized AI, Zion Tech Group" />
      </Helmet>

      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(245,158,11,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Blockchain
              <span className="block bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI-powered blockchain solutions. Smart contracts, DeFi platforms, 
              and decentralized applications with advanced AI integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center">
                Start Building
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-amber-400 text-amber-300 px-8 py-4 rounded-lg font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Blockchain Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI technology integrated with blockchain for next-generation solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI-powered blockchain solutions transforming industries across the globe
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((application, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <application.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{application.title}</h3>
                  <p className="text-gray-300">{application.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Blockchain Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of blockchain with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Build the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start creating revolutionary blockchain solutions with our AI platform today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Started Free
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
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

export default AIBlockchainSolutionsPage;