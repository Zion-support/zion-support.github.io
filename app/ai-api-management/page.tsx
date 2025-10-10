'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Shield, Zap, BarChart3, Users, Settings, Globe } from 'lucide-react';

const AIApiManagementPage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'API Security & Authentication',
      description: 'Advanced security protocols and authentication mechanisms to protect your AI APIs.',
      benefits: ['OAuth 2.0 & JWT tokens', 'Rate limiting & throttling', 'IP whitelisting', 'Encrypted data transmission']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Intelligent caching and load balancing for optimal API performance.',
      benefits: ['Response caching', 'Load balancing', 'Auto-scaling', 'Performance monitoring']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Analytics & Monitoring',
      description: 'Comprehensive analytics and real-time monitoring of API usage and performance.',
      benefits: ['Usage analytics', 'Performance metrics', 'Error tracking', 'Custom dashboards']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'User Management',
      description: 'Complete user and access management system for API consumers.',
      benefits: ['User roles & permissions', 'API key management', 'Usage quotas', 'Billing integration']
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Configuration Management',
      description: 'Flexible configuration options for different AI models and endpoints.',
      benefits: ['Model switching', 'Endpoint configuration', 'Parameter tuning', 'Version control']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Distribution',
      description: 'Multi-region deployment for low-latency API access worldwide.',
      benefits: ['CDN integration', 'Edge computing', 'Regional deployment', 'Latency optimization']
    }
  ];

  const benefits = [
    '99.9% API Uptime Guarantee',
    'Sub-100ms Response Times',
    'Unlimited API Calls',
    '24/7 Technical Support',
    'Advanced Security Features',
    'Real-time Analytics Dashboard'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>AI API Management | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI API management solutions by Zion Tech Group. Secure, scalable, and high-performance API management for AI services." />
        <meta name="keywords" content="AI API management, API security, API analytics, API monitoring, Zion Tech Group" />
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
              Management
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive API management solutions for AI services. Secure, scalable, and high-performance 
            API infrastructure designed for modern AI applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
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
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive API Management</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to manage, secure, and optimize your AI APIs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our API Management?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of our proven API management solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
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
              Ready to Optimize Your AI APIs?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our experts to discuss your API management requirements and get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIApiManagementPage;