'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Settings, BarChart } from 'lucide-react';

const AIAPIManagementPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered API Management',
      description: 'Intelligent API routing, load balancing, and optimization using advanced AI algorithms.'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Comprehensive security features including authentication, authorization, and threat detection.'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast API responses with intelligent caching and optimization strategies.'
    },
    {
      icon: BarChart,
      title: 'Analytics & Monitoring',
      description: 'Real-time analytics, performance monitoring, and detailed insights into API usage.'
    },
    {
      icon: Settings,
      title: 'Easy Configuration',
      description: 'Simple setup and configuration with intuitive management interfaces and tools.'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Worldwide deployment capabilities with edge computing and CDN integration.'
    }
  ];

  const benefits = [
    'Reduced API response times by up to 70%',
    'Enhanced security with AI-powered threat detection',
    'Improved API reliability and uptime',
    'Real-time monitoring and analytics',
    'Easy integration with existing systems',
    'Cost-effective scaling and optimization',
    'Comprehensive documentation and support',
    'Global deployment and edge computing'
  ];

  const services = [
    {
      title: 'API Gateway Setup',
      description: 'Complete API gateway configuration and deployment for your applications.',
      features: ['Load Balancing', 'Rate Limiting', 'Authentication', 'Monitoring']
    },
    {
      title: 'AI Optimization',
      description: 'AI-powered optimization of API performance and resource utilization.',
      features: ['Smart Caching', 'Predictive Scaling', 'Traffic Analysis', 'Auto-optimization']
    },
    {
      title: 'Security Implementation',
      description: 'Comprehensive security measures to protect your APIs and data.',
      features: ['OAuth 2.0', 'JWT Tokens', 'Rate Limiting', 'DDoS Protection']
    },
    {
      title: 'Monitoring & Analytics',
      description: 'Advanced monitoring and analytics for API performance and usage.',
      features: ['Real-time Metrics', 'Usage Analytics', 'Performance Reports', 'Alerting']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI API Management - Intelligent API Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your API management with AI-powered solutions. Enhanced security, performance, and analytics for modern applications." />
        <meta name="keywords" content="AI API management, API gateway, API security, API optimization, microservices, API analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI API Management
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your API management with intelligent solutions that enhance security, 
              performance, and scalability using cutting-edge AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI API Management?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered API management solutions deliver unmatched performance, security, and intelligence.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI API Management Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions to optimize, secure, and scale your API infrastructure.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefits of AI API Management
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the advantages of intelligent API management for your business.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                  <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-4" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your API Management?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your API management needs and get a customized AI-powered solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                <Brain className="mr-2 h-5 w-5" />
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
                <Settings className="mr-2 h-5 w-5" />
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAPIManagementPage;