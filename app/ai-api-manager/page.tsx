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
      description: 'Intelligent API management with AI-driven optimization and monitoring.',
      benefits: ['Smart routing', 'Auto-scaling', 'Predictive analytics', 'Intelligent caching']
    },
    {
      icon: Code,
      title: 'Developer-Friendly Tools',
      description: 'Comprehensive tools and documentation for seamless API development.',
      benefits: ['API documentation', 'SDK generation', 'Testing tools', 'Code examples']
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Architecture',
      description: 'Built for modern cloud environments with high availability and scalability.',
      benefits: ['Multi-cloud support', 'Auto-scaling', 'Load balancing', 'Disaster recovery']
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Advanced security features to protect your APIs and data.',
      benefits: ['Authentication', 'Authorization', 'Rate limiting', 'Encryption']
    },
    {
      icon: Monitor,
      title: 'Real-Time Monitoring',
      description: 'Comprehensive monitoring and analytics for API performance and usage.',
      benefits: ['Performance metrics', 'Usage analytics', 'Error tracking', 'Alerting']
    },
    {
      icon: Settings,
      title: 'Easy Configuration',
      description: 'Simple configuration and management through intuitive interfaces.',
      benefits: ['Visual configuration', 'Template library', 'Version control', 'Rollback support']
    }
  ];

  const services = [
    {
      title: 'API Gateway',
      description: 'Centralized API gateway with advanced routing and security features.',
      features: ['Request routing', 'Authentication', 'Rate limiting', 'Load balancing'],
      price: 'Starting at $199/month'
    },
    {
      title: 'API Analytics',
      description: 'Comprehensive analytics and monitoring for your API ecosystem.',
      features: ['Usage tracking', 'Performance metrics', 'Error monitoring', 'Custom dashboards'],
      price: 'Starting at $299/month'
    },
    {
      title: 'Developer Portal',
      description: 'Self-service developer portal with documentation and testing tools.',
      features: ['API documentation', 'Interactive testing', 'SDK generation', 'Community features'],
      price: 'Starting at $399/month'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI API Manager Solutions | Zion Tech Group</title>
        <meta name="description" content="Streamline your API ecosystem with AI-powered management solutions. Developer-friendly tools, enterprise security, and real-time monitoring." />
        <meta name="keywords" content="API management, AI APIs, developer tools, API gateway, microservices" />
        <meta property="og:title" content="AI API Manager Solutions | Zion Tech Group" />
        <meta property="og:description" content="Streamline your API ecosystem with AI-powered management solutions. Developer-friendly tools, enterprise security, and real-time monitoring." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI API Manager Solutions | Zion Tech Group" />
        <meta name="twitter:description" content="Streamline your API ecosystem with AI-powered management solutions. Developer-friendly tools, enterprise security, and real-time monitoring." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI API
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Manager
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Streamline your API ecosystem with AI-powered management solutions. 
              Developer-friendly tools, enterprise security, and real-time monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Powerful API Management Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
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

        {/* Services Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Our API Management Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-blue-400 mb-4">{service.price}</div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Streamline Your API Ecosystem?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers already using our AI-powered API management solutions.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Start Your Free Trial
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AiApiManagerPage;