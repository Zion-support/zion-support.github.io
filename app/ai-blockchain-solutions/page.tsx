'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Shield, Zap, Brain, Target, BarChart, Globe } from 'lucide-react';

const AIBlockchainSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Smart Contract Security',
      description: 'AI-powered security auditing and monitoring for smart contracts.',
      benefits: ['Automated vulnerability detection', 'Security best practices', 'Audit reports', 'Risk assessment']
    },
    {
      icon: Zap,
      title: 'DeFi Optimization',
      description: 'AI-enhanced decentralized finance solutions with intelligent trading and risk management.',
      benefits: ['Yield optimization', 'Risk management', 'Liquidity analysis', 'Portfolio management']
    },
    {
      icon: Brain,
      title: 'Blockchain Analytics',
      description: 'Advanced analytics and insights for blockchain networks and transactions.',
      benefits: ['Transaction analysis', 'Network monitoring', 'Pattern recognition', 'Predictive analytics']
    },
    {
      icon: Target,
      title: 'NFT Solutions',
      description: 'AI-powered NFT creation, management, and marketplace solutions.',
      benefits: ['Automated generation', 'Metadata optimization', 'Market analysis', 'Royalty management']
    },
    {
      icon: BarChart,
      title: 'Token Economics',
      description: 'AI-driven tokenomics design and optimization for blockchain projects.',
      benefits: ['Token distribution', 'Inflation modeling', 'Staking mechanisms', 'Governance design']
    },
    {
      icon: Globe,
      title: 'Cross-Chain Solutions',
      description: 'Interoperability solutions for seamless cross-chain operations.',
      benefits: ['Bridge protocols', 'Asset transfers', 'Cross-chain DApps', 'Unified interfaces']
    }
  ];

  const solutions = [
    {
      title: 'DeFi Platforms',
      description: 'AI-enhanced decentralized finance platforms with intelligent trading and risk management.',
      icon: '💰'
    },
    {
      title: 'NFT Marketplaces',
      description: 'Advanced NFT marketplaces with AI-powered features and analytics.',
      icon: '🎨'
    },
    {
      title: 'DAO Governance',
      description: 'Decentralized autonomous organizations with AI-assisted governance.',
      icon: '🏛️'
    },
    {
      title: 'Supply Chain',
      description: 'Blockchain-based supply chain solutions with AI tracking and optimization.',
      icon: '📦'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Blockchain Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered blockchain solutions. Smart contracts, DeFi platforms, NFT marketplaces, and cross-chain interoperability solutions." />
        <meta name="keywords" content="AI blockchain, smart contracts, DeFi, NFT, cross-chain, blockchain solutions, Web3, cryptocurrency" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Blockchain
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI-powered blockchain solutions. Smart contracts, DeFi platforms, NFT marketplaces, and cross-chain interoperability solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI capabilities for blockchain solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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

        {/* Solutions Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive blockchain solutions for various industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Build on Blockchain?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your blockchain requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIBlockchainSolutionsPage;