'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Code, Cloud, Lock, Monitor } from 'lucide-react';

const AiApiManagerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered API Management',
      description: 'Intelligent API management with automated optimization and monitoring.',
      benefits: ['Smart routing', 'Auto-scaling', 'Performance optimization', 'Intelligent caching']
    },
    {
      icon: Code,
      title: 'Developer-Friendly Tools',
      description: 'Comprehensive tools and documentation for seamless API development.',
      benefits: ['API documentation', 'SDK generation', 'Testing tools', 'Code examples']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced security features to protect your APIs and data.',
      benefits: ['Authentication', 'Authorization', 'Rate limiting', 'Encryption']
    },
    {
      icon: Monitor,
      title: 'Real-Time Monitoring',
      description: 'Comprehensive monitoring and analytics for your API ecosystem.',
      benefits: ['Performance metrics', 'Error tracking', 'Usage analytics', 'Alerting']
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Architecture',
      description: 'Built for modern cloud environments with high availability.',
      benefits: ['Auto-scaling', 'Load balancing', 'Multi-region', 'Disaster recovery']
    },
    {
      icon: Settings,
      title: 'Easy Configuration',
      description: 'Simple configuration and management through intuitive interfaces.',
      benefits: ['Visual configuration', 'Template library', 'Version control', 'Rollback support']
    }
  ];

  const benefits = [
    'Streamline API development and deployment',
    'Improve API performance and reliability',
    'Enhance developer experience and productivity',
    'Ensure enterprise-grade security and compliance',
    'Scale APIs efficiently with growing demand',
    'Reduce operational overhead and costs'
  ];

  const useCases = [
    {
      title: 'Microservices Management',
      description: 'Orchestrate and manage complex microservices architectures',
      icon: Code
    },
    {
      title: 'Third-Party Integration',
      description: 'Seamlessly integrate with external APIs and services',
      icon: Globe
    },
    {
      title: 'Mobile API Backend',
      description: 'Power mobile applications with robust API infrastructure',
      icon: Monitor
    },
    {
      title: 'Legacy System Modernization',
      description: 'Modernize legacy systems with API-first approaches',
      icon: Settings
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI API Manager - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered API management solution for modern applications." />
        <meta name="keywords" content="API management, AI APIs, microservices, developer tools, API gateway" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI-Powered
                <span className="text-blue-600"> API Manager</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Streamline your API ecosystem with intelligent management, monitoring, and optimization. 
                Build, deploy, and scale APIs with confidence using our advanced AI-powered platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
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
                Comprehensive API Management
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to build, deploy, and manage APIs at scale with AI-powered intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
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

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our AI API management platform can transform your development workflow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <useCase.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our API Management?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the power of AI-driven API management and accelerate your development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your APIs?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start building better APIs today with our AI-powered management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Schedule Demo
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