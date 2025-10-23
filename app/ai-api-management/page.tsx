<<<<<<< HEAD
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const AiApiManagementPage: React.FC = () => {
  const features = [
    {
      icon: Settings,
      title: 'API Gateway Management',
      description: 'Centralized API gateway for managing, monitoring, and securing all your APIs with advanced routing and load balancing.'
    },
    {
      icon: Shield,
      title: 'Security & Authentication',
      description: 'Comprehensive security features including OAuth, JWT, rate limiting, and API key management.'
    },
    {
      icon: BarChart,
      title: 'Analytics & Monitoring',
      description: 'Real-time API analytics, performance monitoring, and detailed usage reports for better decision making.'
    },
    {
      icon: Target,
      title: 'Rate Limiting',
      description: 'Advanced rate limiting and throttling to protect your APIs from abuse and ensure fair usage.'
    },
    {
      icon: Globe,
      title: 'Multi-Environment Support',
      description: 'Manage APIs across development, staging, and production environments with ease.'
    },
    {
      icon: Database,
      title: 'Data Transformation',
      description: 'Transform and validate API requests and responses with powerful data mapping capabilities.'
    }
  ]

  const benefits = [
    'Centralize API management across your organization',
    'Improve API security and compliance',
    'Reduce development time by 40%',
    'Enhance API performance and reliability',
    'Gain insights into API usage patterns',
    'Gain competitive advantage with advanced technology'
  ]
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react';

const AIAPIManagementPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered API Management',
      description: 'Intelligent API routing, load balancing, and optimization using advanced AI algorithms',
      benefits: ['Smart load balancing', 'Predictive scaling', 'Intelligent caching', 'Auto-optimization']
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Comprehensive security features including authentication, authorization, and threat detection',
      benefits: ['OAuth 2.0 & JWT', 'Rate limiting', 'DDoS protection', 'API encryption']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast API processing with sub-millisecond response times and 99.9% uptime',
      benefits: ['Sub-ms response times', '99.9% uptime SLA', 'Auto-scaling', 'Global CDN']
    },
    {
      icon: Globe,
      title: 'Global Distribution',
      description: 'Worldwide API distribution with edge computing capabilities for optimal performance',
      benefits: ['Edge computing', 'Global CDN', 'Multi-region deployment', 'Low latency']
    }
  ];

  const benefits = [
    'Reduce API response times by up to 80%',
    'Automatically scale based on traffic patterns',
    'Comprehensive API analytics and monitoring',
    'Built-in security and compliance features',
    'Easy integration with existing systems',
    '24/7 technical support and monitoring'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: 'month',
      description: 'Perfect for small applications',
      features: [
        'Up to 10,000 API calls/month',
        'Basic analytics',
        'Standard support',
        'SSL certificates included'
      ]
    },
    {
      name: 'Professional',
      price: '$299',
      period: 'month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100,000 API calls/month',
        'Advanced analytics',
        'Priority support',
        'Custom domains',
        'Rate limiting'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'month',
      description: 'For large-scale applications',
      features: [
        'Unlimited API calls',
        'Custom analytics',
        'Dedicated support',
        'White-label solution',
        'SLA guarantee'
      ]
    }
  ];
>>>>>>> dbc62b9d098f838bcbe86265c63a54c93a7c7698

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
<<<<<<< HEAD
        <title>AI API Management - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered API management solution for modern businesses." />
        <meta name="keywords" content="API management, API gateway, microservices, API security, API analytics" />
=======
        <title>AI API Management | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered API management solutions by Zion Tech Group. Intelligent routing, security, and optimization for your APIs." />
        <meta name="keywords" content="API management, AI APIs, API security, API optimization, microservices" />
>>>>>>> dbc62b9d098f838bcbe86265c63a54c93a7c7698
      </Helmet>
      
      <Navigation />
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI API Management
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Streamline your API ecosystem with our intelligent API management platform. 
                Secure, monitor, and optimize your APIs with advanced AI-powered insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Learn More
                </button>
=======

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
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your API infrastructure with intelligent management, advanced security, and AI-powered optimization.
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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered API management platform provides everything you need to build, secure, and scale your APIs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-opacity-20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
>>>>>>> dbc62b9d098f838bcbe86265c63a54c93a7c7698
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful API Management Features
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to manage your API ecosystem
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proven Benefits
              </h2>
              <p className="text-xl text-gray-300">
                Real results for your API infrastructure
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-white">{benefit}</span>
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
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using AI to optimize their API infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2" />
                Get Started Today
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default AiApiManagementPage
=======
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white bg-opacity-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Platform?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of AI-powered API management for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Pricing Plans</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your API management needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 ${index === 1 ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  index === 1 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700' 
                    : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your APIs?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of developers who trust our AI-powered API management platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAPIManagementPage;
>>>>>>> dbc62b9d098f838bcbe86265c63a54c93a7c7698
