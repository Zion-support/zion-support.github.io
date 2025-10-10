'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const AiApiManagerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Management',
      description: 'Intelligent API management with AI-driven optimization and monitoring.',
      benefits: ['Smart routing', 'Predictive scaling', 'Automated optimization', 'Real-time monitoring']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive API analytics with real-time performance insights.',
      benefits: ['Real-time dashboards', 'Performance metrics', 'Usage analytics', 'Custom reports']
    },
    {
      icon: Target,
      title: 'Precision Control',
      description: 'Fine-grained control over API access, rate limiting, and security policies.',
      benefits: ['Access control', 'Rate limiting', 'Security policies', 'Traffic management']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Optimize API performance with AI-driven recommendations and auto-scaling.',
      benefits: ['Auto-scaling', 'Performance tuning', 'Load balancing', 'Caching strategies']
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'High-performance API gateway with sub-millisecond response times.',
      benefits: ['Low latency', 'High throughput', 'Scalable infrastructure', 'Edge computing']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Enterprise-grade security with advanced threat protection and compliance.',
      benefits: ['Threat protection', 'Authentication', 'Authorization', 'Audit logging']
    }
  ];

  const benefits = [
    'Reduce API management overhead by 60%',
    'Improve API performance by 40%',
    'Enhance security with AI-powered threat detection',
    'Scale automatically based on demand',
    'Gain comprehensive insights into API usage'
  ];

  const useCases = [
    {
      title: 'Microservices Management',
      description: 'Orchestrate and manage complex microservices architectures',
      icon: '🔧'
    },
    {
      title: 'Third-Party Integration',
      description: 'Seamlessly integrate with external APIs and services',
      icon: '🔗'
    },
    {
      title: 'API Monetization',
      description: 'Monetize your APIs with flexible pricing and usage models',
      icon: '💰'
    },
    {
      title: 'Developer Portal',
      description: 'Provide comprehensive developer tools and documentation',
      icon: '👨‍💻'
    },
    {
      title: 'Compliance & Governance',
      description: 'Ensure compliance with industry standards and regulations',
      icon: '📋'
    },
    {
      title: 'Real-time Monitoring',
      description: 'Monitor API health and performance in real-time',
      icon: '📊'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI API Manager - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered API management solution for modern businesses. Streamline your API operations with intelligent management and optimization." />
        <meta name="keywords" content="AI API manager, artificial intelligence, API management, AI solutions, intelligent automation" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI API Manager
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Streamline your API operations with intelligent management powered by AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Powerful AI API Management Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how our AI-powered API management platform can revolutionize your API operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI API Manager?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the benefits of intelligent API management that grows with your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-900 font-medium">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Use Cases
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our AI API management solution can be applied across different industries and scenarios.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your API Management?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get started with our AI-powered API management solution and experience the future of API operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
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

export default AiApiManagerPage;