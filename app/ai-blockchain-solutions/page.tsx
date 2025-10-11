'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, BarChart, Shield, Zap, CheckCircle, ArrowRight, Lock, Network } from 'lucide-react';

const AiBlockchainSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations for blockchain operations.',
      benefits: ['Smart contract optimization', 'Predictive analytics', 'Automated decision making', 'Risk assessment']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization for blockchain networks.',
      benefits: ['Real-time monitoring', 'Performance metrics', 'Transaction analysis', 'Network insights']
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'AI-enhanced security protocols to protect your blockchain infrastructure and transactions.',
      benefits: ['Threat detection', 'Fraud prevention', 'Secure transactions', 'Compliance monitoring']
    },
    {
      icon: Network,
      title: 'Smart Contracts',
      description: 'Intelligent smart contracts that adapt and optimize based on AI analysis and market conditions.',
      benefits: ['Automated execution', 'Dynamic optimization', 'Self-updating contracts', 'Gas optimization']
    }
  ];

  const benefits = [
    'Increase transaction efficiency by up to 95%',
    'Reduce gas costs with AI optimization',
    'Enhanced security with AI threat detection',
    'Automated smart contract management',
    'Real-time blockchain analytics and insights',
    'Seamless integration with existing systems'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Blockchain Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive blockchain solutions enhanced with AI technology. Smart contracts, security, and analytics powered by artificial intelligence." />
        <meta name="keywords" content="AI blockchain solutions, artificial intelligence, blockchain technology, AI solutions, smart contracts" />
      </Helmet>

      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              AI Blockchain Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Combine the power of artificial intelligence with blockchain technology for secure, intelligent, and efficient solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Advanced AI technology integrated with blockchain solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Blockchain Solutions?</h2>
              <p className="text-xl text-gray-300">Transform your blockchain operations with intelligent automation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Blockchain?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of intelligent blockchain technology with our AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AiBlockchainSolutionsPage;