import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Shield, Zap, Brain, ArrowRight, Link, Coins, Lock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIBlockchainSolutionsPage: React.FC = () => {
  const features = [
    {
      title: 'Smart Contracts',
      description: 'AI-powered smart contracts that can learn, adapt, and optimize themselves automatically.',
      icon: Shield,
      benefits: [
        'Self-executing contracts',
        'Automated compliance',
        'Risk assessment',
        'Dynamic optimization'
      ]
    },
    {
      title: 'DeFi Platforms',
      description: 'AI-enhanced decentralized finance platforms with intelligent trading and risk management.',
      icon: Coins,
      benefits: [
        'Automated trading',
        'Risk management',
        'Yield optimization',
        'Liquidity management'
      ]
    },
    {
      title: 'NFT Marketplaces',
      description: 'Intelligent NFT platforms with AI-powered valuation, authentication, and trading.',
      icon: Link,
      benefits: [
        'AI valuation',
        'Authentication',
        'Market analysis',
        'Automated trading'
      ]
    },
    {
      title: 'Quality Control',
      description: 'Automate quality checks and validation processes',
      icon: Lock,
      benefits: [
        'Automated quality gates',
        'Compliance monitoring',
        'Risk mitigation',
        'Quality reporting'
      ]
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 60%',
    'Increase productivity by 300%',
    'Eliminate human errors',
    'Scale operations instantly',
    '24/7 automated processing',
    'Real-time monitoring and alerts'
  ];

  return (
    <>
      <Helmet>
        <title>AI Blockchain Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered blockchain solutions. Smart contracts, DeFi platforms, and NFT marketplaces powered by artificial intelligence." />
        <meta name="keywords" content="AI blockchain, smart contracts, DeFi, NFT, blockchain solutions, AI crypto, decentralized finance" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(245,158,11,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Blockchain
              <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your blockchain applications with AI-powered solutions. 
              Smart contracts, DeFi platforms, and NFT marketplaces that think and adapt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-300 px-8 py-4 rounded-lg font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300">
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
                Blockchain Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered blockchain solutions provide comprehensive tools for modern applications.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-amber-500 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" />
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
        <section className="py-20 px-4 bg-gradient-to-r from-amber-900/20 to-orange-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Blockchain Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-powered blockchain solutions that transform your applications.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0" />
                  <p className="text-white font-medium">{benefit}</p>
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
                Ready to Build Blockchain Solutions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the future of blockchain technology with our AI-powered solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Building
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Sales
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