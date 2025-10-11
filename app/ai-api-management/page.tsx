'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Zap, Shield, Users, BarChart3 } from 'lucide-react';

const AIApiManagementPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Smart Rate Limiting',
      description: 'AI-driven rate limiting that adapts to usage patterns and prevents abuse while maintaining optimal performance.',
      benefits: ['Adaptive rate limiting', 'Abuse prevention', 'Performance optimization', 'Dynamic scaling']
    },
    {
      icon: Shield,
      title: 'Security & Authentication',
      description: 'Advanced security features with AI-powered threat detection and comprehensive authentication systems.',
      benefits: ['Threat detection', 'Multi-factor auth', 'API encryption', 'Security monitoring']
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Comprehensive user management with role-based access control and usage analytics.',
      benefits: ['Role-based access', 'User analytics', 'Usage tracking', 'Permission management']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Monitoring',
      description: 'Real-time analytics and monitoring with detailed insights into API performance and usage.',
      benefits: ['Real-time monitoring', 'Performance metrics', 'Usage analytics', 'Custom dashboards']
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Automated testing and quality assurance with AI-powered validation and error detection.',
      benefits: ['Automated testing', 'Error detection', 'Quality validation', 'Performance testing']
    },
    {
      icon: ArrowRight,
      title: 'API Gateway',
      description: 'Intelligent API gateway with load balancing, caching, and intelligent routing capabilities.',
      benefits: ['Load balancing', 'Intelligent caching', 'Smart routing', 'Traffic management']
    }
  ];

  const benefits = [
    'Reduce API management overhead by 60%',
    'Improve API performance by 40%',
    'Enhance security with AI-powered threat detection',
    'Scale API infrastructure automatically'
  ];

  return (
    <>
      <Helmet>
        <title>AI API Management | Zion Tech Group - Intelligent API Solutions</title>
        <meta name="description" content="Advanced AI-powered API management solution with intelligent rate limiting, security, and monitoring. Streamline your API infrastructure with smart automation." />
        <meta name="keywords" content="AI API management, API gateway, rate limiting, API security, API monitoring, microservices" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI API <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Management</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered API management solution with intelligent rate limiting, security, and monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced Features
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to manage your APIs intelligently
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
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
                Why Choose AI API Management?
              </h2>
              <p className="text-xl text-gray-300">
                Transform your API infrastructure with intelligent automation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-400 font-bold text-lg">✓</span>
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
              Ready to Optimize Your API Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI-powered API management solution and streamline your API infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIApiManagementPage;