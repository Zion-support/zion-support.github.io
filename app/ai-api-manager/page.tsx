'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Settings, Zap, Shield, Users, BarChart3, Globe, Lock } from 'lucide-react';

const AIApiManagerPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Settings,
      title: 'Centralized API Control',
      description: 'Manage all your APIs from a single, intuitive dashboard with comprehensive monitoring and control capabilities.',
      benefits: ['Unified dashboard', 'Centralized control', 'Real-time monitoring', 'Easy management']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Get deep insights into API usage, performance metrics, and user behavior with AI-powered analytics.',
      benefits: ['Usage analytics', 'Performance metrics', 'User insights', 'Predictive analytics']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with automated compliance monitoring and threat detection.',
      benefits: ['Threat detection', 'Compliance monitoring', 'Security scanning', 'Access control']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Automatically optimize API performance with intelligent caching and load balancing.',
      benefits: ['Auto-scaling', 'Load balancing', 'Caching strategies', 'Performance tuning']
    },
    {
      icon: Globe,
      title: 'Global Distribution',
      description: 'Distribute your APIs globally with edge computing and CDN integration.',
      benefits: ['Global reach', 'Edge computing', 'CDN integration', 'Low latency']
    },
    {
      icon: Lock,
      title: 'Access Management',
      description: 'Comprehensive access control with role-based permissions and API key management.',
      benefits: ['Role-based access', 'API key management', 'User permissions', 'Audit trails']
    }
  ];

  const benefits = [
    'Centralized API management',
    'Real-time performance monitoring',
    'Advanced security features',
    'Comprehensive analytics',
    'Easy integration',
    '24/7 support'
  ];

  const stats = [
    { icon: <Settings className="w-8 h-8 text-blue-500" />, value: '500+', label: 'APIs Managed' },
    { icon: <Zap className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '100%', label: 'Security' },
    { icon: <BarChart3 className="w-8 h-8 text-orange-500" />, value: '60%', label: 'Efficiency Gain' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Settings className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">AI API Manager</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI API Manager
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-400 mb-8 font-medium">
            Comprehensive API Management Platform
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Manage, monitor, and optimize all your APIs from a single platform. 
            Get comprehensive analytics, security, and performance optimization with AI-powered insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)'}}
            >
              Start Free Trial
            </a>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="hologram-card-enhanced p-6 text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text mb-12">
            Advanced API Management Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="hologram-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-blue-400">
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text mb-12">
            Why Choose Our AI API Manager?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="hologram-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg text-white font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="hologram-card-enhanced p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Manage Your APIs Better?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers using our AI API Manager to build and manage better APIs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)'}}
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIApiManagerPage;