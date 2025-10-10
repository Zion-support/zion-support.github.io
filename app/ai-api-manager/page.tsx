'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Settings, BarChart3, Shield, Zap } from 'lucide-react';

const AIApiManagerPage: React.FC = () => {
  const features = [
    {
      icon: <Settings className="w-8 h-8 text-blue-400" />,
      title: 'Intelligent Configuration',
      description: 'AI-powered API configuration management with automatic optimization.',
      benefits: ['Auto-configuration', 'Smart defaults', 'Performance tuning', 'Resource optimization']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics and reporting for API performance monitoring.',
      benefits: ['Real-time metrics', 'Usage analytics', 'Performance reports', 'Trend analysis']
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: 'Security Management',
      description: 'Enterprise-grade security controls and threat protection.',
      benefits: ['Access control', 'Threat detection', 'Compliance monitoring', 'Security audits']
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: 'Automated Operations',
      description: 'Streamlined API operations with intelligent automation.',
      benefits: ['Auto-scaling', 'Load balancing', 'Health monitoring', 'Incident response']
    }
  ];

  const benefits = [
    'Streamline API operations with intelligent automation',
    'Improve performance with AI-powered optimization',
    'Enhance security with advanced threat detection',
    'Reduce operational overhead by 70%',
    'Monitor and analyze API performance in real-time',
    'Scale automatically based on demand patterns'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>AI API Manager | Zion Tech Group</title>
        <meta name="description" content="Intelligent API management platform by Zion Tech Group. Streamline operations with AI-powered automation and monitoring." />
        <meta name="keywords" content="API manager, AI automation, API operations, microservices, Zion Tech Group" />
      </Helmet>
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI API
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Manager
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Intelligent API management platform that automates operations, optimizes performance, and ensures security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 inline-flex items-center">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI-Powered Management</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive API management capabilities powered by artificial intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-2xl font-bold text-white ml-4">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
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
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI API Manager?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your API operations with intelligent automation and monitoring
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mr-4 flex-shrink-0" />
                  <p className="text-gray-300 font-medium">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Streamline Your API Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our AI-powered API management platform today and experience the future of API operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
              Start Free Trial
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIApiManagerPage;