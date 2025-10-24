'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, BarChart3 } from 'lucide-react';

const AIApiManagementPage: React.FC = () => {
  const features = [
    {
      title: 'API Gateway Management',
      description: 'Centralized API gateway with advanced routing, load balancing, and traffic management capabilities.',
      benefits: ['Advanced routing rules', 'Load balancing', 'Rate limiting', 'API versioning']
    },
    {
      title: 'AI Model Integration',
      description: 'Seamless integration with various AI models and machine learning frameworks.',
      benefits: ['Multiple AI providers', 'Model versioning', 'A/B testing', 'Performance monitoring']
    },
    {
      title: 'Real-time Analytics',
      description: 'Comprehensive analytics and monitoring for API performance and usage patterns.',
      benefits: ['Usage analytics', 'Performance metrics', 'Error tracking', 'Custom dashboards']
    }
  ];

  const benefits = [
    'Scalable API infrastructure',
    'Advanced security features',
    'Real-time monitoring',
    'Cost optimization',
    'High availability',
    'Developer-friendly tools'
  ];

  const stats = [
    { icon: <Zap className="w-8 h-8" />, value: '99.9%', label: 'Uptime' },
    { icon: <Shield className="w-8 h-8" />, value: '100%', label: 'Secure' },
    { icon: <Globe className="w-8 h-8" />, value: '50+', label: 'Countries' },
    { icon: <BarChart3 className="w-8 h-8" />, value: '1M+', label: 'API Calls/Day' }
  ];

const Page: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>AI API Management | Zion Tech Group</title>
        <meta name="description" content="Professional AI API management solutions by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="AI API management, AI solutions, IT services, Zion Tech Group" />
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
            Streamline your AI operations with our comprehensive API management platform. Scale, secure, and monitor your AI services with enterprise-grade solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-blue-400">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI API Management Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced solutions designed for modern AI infrastructure needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-white" />
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
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI API Management?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade solutions that scale with your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-blue-400/50 transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your AI Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with our AI API management platform and experience the power of enterprise-grade AI operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              Start Free Trial
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
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

export default AIApiManagementPage;