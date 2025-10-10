'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe } from 'lucide-react';

const AIApiManagementPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'AI-Powered API Management',
      description: 'Intelligent API routing, load balancing, and optimization using advanced machine learning algorithms.',
      benefits: ['Smart traffic routing', 'Predictive scaling', 'Anomaly detection', 'Performance optimization']
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Real-time Monitoring',
      description: 'Comprehensive monitoring and analytics with real-time insights into API performance and usage.',
      benefits: ['Live performance metrics', 'Usage analytics', 'Error tracking', 'Custom dashboards']
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Advanced Security',
      description: 'Enterprise-grade security features including authentication, authorization, and threat protection.',
      benefits: ['OAuth 2.0 & JWT', 'Rate limiting', 'DDoS protection', 'API key management']
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Distribution',
      description: 'Worldwide API distribution with edge caching and low-latency access from any location.',
      benefits: ['Edge caching', 'CDN integration', 'Global load balancing', 'Multi-region deployment']
    }
  ];

  const benefits = [
    'Reduce API response times by up to 80%',
    'Automated scaling based on demand',
    'Comprehensive security and compliance',
    'Real-time monitoring and alerting',
    'Easy integration with existing systems',
    '24/7 technical support and maintenance'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>AI API Management - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered API management solutions by Zion Tech Group. Intelligent routing, monitoring, and optimization for enterprise APIs." />
        <meta name="keywords" content="API management, AI APIs, microservices, API gateway, API monitoring, Zion Tech Group" />
      </Helmet>
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI API Management
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your API infrastructure with intelligent management, real-time monitoring, and automated optimization powered by advanced AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered API management platform provides everything you need to scale, secure, and optimize your APIs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4 text-blue-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
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
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of AI-powered API management that scales with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
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
            Ready to Transform Your API Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies already using our AI-powered API management platform to scale their digital operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIApiManagementPage;