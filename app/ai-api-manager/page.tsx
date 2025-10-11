'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Settings, Zap, Shield, Users, BarChart3 } from 'lucide-react';

const AIApiManagerPage: React.FC = () => {
  const features = [
    {
      icon: Settings,
      title: 'Centralized API Control',
      description: 'Manage all your APIs from a single, intuitive dashboard with comprehensive monitoring and control capabilities.',
      benefits: ['Unified dashboard', 'API monitoring', 'Centralized control', 'Easy management']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Get deep insights into API usage, performance metrics, and user behavior with AI-powered analytics.',
      benefits: ['Usage analytics', 'Performance metrics', 'User insights', 'Predictive analytics']
    },
    {
      icon: Zap,
      title: 'Smart Automation',
      description: 'Automate API management tasks with AI-powered automation and intelligent decision making.',
      benefits: ['Task automation', 'Smart decisions', 'Workflow optimization', 'Efficiency gains']
    },
    {
      icon: Shield,
      title: 'Security Management',
      description: 'Comprehensive security management with threat detection, access control, and compliance monitoring.',
      benefits: ['Threat detection', 'Access control', 'Compliance monitoring', 'Security alerts']
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Advanced user management with role-based access control and detailed user analytics.',
      benefits: ['Role-based access', 'User analytics', 'Permission management', 'Activity tracking']
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Automated quality assurance with testing, validation, and performance optimization.',
      benefits: ['Automated testing', 'Quality validation', 'Performance optimization', 'Error detection']
    }
  ];

  const benefits = [
    'Reduce API management complexity by 70%',
    'Improve API performance by 50%',
    'Enhance security with AI-powered monitoring',
    'Scale API operations automatically'
  ];

  const stats = [
    { value: '99.9%', label: 'Uptime' },
    { value: '50ms', label: 'Response Time' },
    { value: '10M+', label: 'API Calls/Day' },
    { value: '24/7', label: 'Monitoring' }
  ];

  return (
    <>
      <Helmet>
        <title>AI API Manager - Zion Tech Group | Intelligent API Management</title>
        <meta name="description" content="Advanced AI-powered API manager with centralized control, intelligent automation, and comprehensive analytics. Streamline your API operations with smart management tools." />
        <meta name="keywords" content="AI API manager, API management, API automation, API analytics, microservices management" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI API <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Manager</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered API manager with centralized control, intelligent automation, and comprehensive analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to manage your APIs intelligently
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
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
        
        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose AI API Manager?
              </h2>
              <p className="text-xl text-gray-300">
                Transform your API operations with intelligent management
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-400 font-bold text-lg">✓</span>
                  </div>
                  <p className="text-white text-lg font-semibold">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Streamline Your API Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI-powered API manager and take control of your API infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIApiManagerPage;