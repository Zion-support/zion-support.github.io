'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const AiBlockchainSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Blockchain Solutions',
      description: 'Advanced AI algorithms that provide intelligent blockchain solutions and automation.',
      benefits: ['Smart contracts', 'Automated processes', 'Intelligent routing', 'Predictive analytics']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Enterprise-grade security features to protect your blockchain applications and data.',
      benefits: ['End-to-end encryption', 'Access controls', 'Audit trails', 'Compliance support']
    },
    {
      icon: Database,
      title: 'Multi-Chain Support',
      description: 'Support for multiple blockchain networks and protocols.',
      benefits: ['Ethereum', 'Bitcoin', 'Polygon', 'Cross-chain compatibility']
    },
    {
      icon: Settings,
      title: 'Easy Integration',
      description: 'Simple integration with existing systems and infrastructure.',
      benefits: ['API compatibility', 'SDK support', 'Documentation', 'Developer tools']
    },
    {
      icon: Globe,
      title: 'Scalable Architecture',
      description: 'Designed to scale from small applications to enterprise solutions.',
      benefits: ['Horizontal scaling', 'Load balancing', 'Auto-scaling', 'High availability']
    },
    {
      icon: Target,
      title: 'Performance Optimization',
      description: 'Optimize blockchain performance with intelligent monitoring and analytics.',
      benefits: ['Performance metrics', 'Optimization suggestions', 'Bottleneck identification', 'Efficiency improvements']
    }
  ];

  const benefits = [
    'Build secure and scalable blockchain applications',
    'Integrate with multiple blockchain networks',
    'Automate complex blockchain processes',
    'Ensure compliance with regulatory requirements',
    'Scale applications with confidence',
    'Gain competitive advantage with advanced technology'
  ];

  const useCases = [
    {
      title: 'DeFi Applications',
      description: 'Build decentralized finance applications and protocols',
      icon: BarChart
    },
    {
      title: 'NFT Platforms',
      description: 'Create and manage NFT marketplaces and platforms',
      icon: Globe
    },
    {
      title: 'Supply Chain',
      description: 'Implement blockchain-based supply chain solutions',
      icon: Database
    },
    {
      title: 'Identity Management',
      description: 'Build secure identity management systems',
      icon: Shield
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Blockchain Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered blockchain solutions for modern applications. Secure, scalable, and intelligent blockchain development." />
        <meta name="keywords" content="blockchain solutions, AI blockchain, smart contracts, DeFi development, NFT platforms" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Blockchain Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Build the future of blockchain with our AI-powered solutions. 
                Create secure, scalable, and intelligent blockchain applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#features"
                  className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Blockchain Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our blockchain solutions provide everything you need to build, deploy, and manage blockchain applications.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="bg-cyan-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our blockchain solutions can transform your business across different industries.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/10 text-center">
                  <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Blockchain Solutions?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our AI-powered blockchain solutions are designed to help you build, deploy, 
                  and scale blockchain applications with confidence and intelligence.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <div className="text-center">
                    <div className="bg-cyan-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <Database className="w-10 h-10 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Enterprise Ready</h3>
                    <p className="text-gray-300 mb-6">
                      Built for enterprise with security, scalability, and compliance in mind.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                        <div className="text-gray-300 text-sm">Uptime</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-purple-400">24/7</div>
                        <div className="text-gray-300 text-sm">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Build the Future?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start building blockchain applications with our AI-powered solutions. 
                Get started today and see the difference intelligent blockchain development can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/pricing"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>View Pricing</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default AiBlockchainSolutionsPage;