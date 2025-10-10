'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Shield, Zap, Settings, Lock, Globe, ArrowRight, Code, Database, Cloud, Activity } from 'lucide-react';

const AIAPIManagementPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'API Security',
      description: 'Advanced security measures to protect your APIs from threats and unauthorized access.',
      benefits: ['Authentication & authorization', 'Rate limiting', 'API key management', 'Threat detection']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize API performance with caching, load balancing, and intelligent routing.',
      benefits: ['Response caching', 'Load balancing', 'Auto-scaling', 'Performance monitoring']
    },
    {
      icon: Settings,
      title: 'API Gateway',
      description: 'Centralized API gateway for managing, monitoring, and securing all your APIs.',
      benefits: ['Centralized management', 'Traffic routing', 'Request/response transformation', 'API versioning']
    },
    {
      icon: Lock,
      title: 'Access Control',
      description: 'Granular access control and permission management for API endpoints.',
      benefits: ['Role-based access', 'Permission management', 'API key rotation', 'Audit logging']
    },
    {
      icon: Globe,
      title: 'Global Distribution',
      description: 'Distribute your APIs globally with edge computing and CDN integration.',
      benefits: ['Edge computing', 'CDN integration', 'Global load balancing', 'Low latency']
    },
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Monitor API performance, usage, and health in real-time with detailed analytics.',
      benefits: ['Real-time metrics', 'Usage analytics', 'Health monitoring', 'Alert system']
    }
  ];

  const benefits = [
    'Improve API performance by 80%',
    'Reduce security incidents by 95%',
    'Lower operational costs by 60%',
    'Increase API reliability by 90%',
    'Enable global API distribution',
    'Automate API management tasks',
    'Scale APIs efficiently',
    'Enhance developer experience'
  ];

  const useCases = [
    {
      title: 'Microservices Architecture',
      description: 'Manage and orchestrate microservices APIs',
      icon: '🔧'
    },
    {
      title: 'Third-party Integration',
      description: 'Securely integrate with external APIs',
      icon: '🔗'
    },
    {
      title: 'Mobile App Backend',
      description: 'Power mobile applications with robust APIs',
      icon: '📱'
    },
    {
      title: 'Web Application APIs',
      description: 'Build scalable web application backends',
      icon: '🌐'
    },
    {
      title: 'IoT Device Management',
      description: 'Connect and manage IoT devices via APIs',
      icon: '📡'
    },
    {
      title: 'Data Integration',
      description: 'Integrate data from multiple sources',
      icon: '📊'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI API Management - Zion Tech Group</title>
        <meta name="description" content="Streamline and secure your API infrastructure with our AI API Management solution. Advanced security, performance optimization, and intelligent monitoring." />
        <meta name="keywords" content="AI API management, API gateway, API security, microservices, API monitoring, API optimization" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-8">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI API Management
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Streamline and secure your API infrastructure with our advanced AI API Management solution. 
              Intelligent monitoring, security, and optimization for better API performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-orange-400 text-orange-300 px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced API Management Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive API management solution with AI-powered intelligence and automation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our API Management?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that improve API performance and security
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                API Management Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Perfect for modern applications and microservices architectures
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your APIs?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start managing your APIs more efficiently with our AI-powered solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AIAPIManagementPage;