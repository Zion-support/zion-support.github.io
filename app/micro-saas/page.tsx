'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Users, Zap, Shield, Cloud, BarChart3, ArrowRight } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      icon: BarChart3,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app'],
      price: '$99/month',
      users: 'Up to 50 users',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs'],
      price: '$149/month',
      users: 'Up to 100 users',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring'],
      price: '$199/month',
      users: 'Up to 200 users',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support'],
      price: '$299/month',
      users: 'Unlimited users',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const benefits = [
    'No upfront costs',
    'Quick deployment',
    'Scalable solutions',
    'Regular updates',
    '24/7 support',
    'Easy integration'
  ];

  const features = [
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Get up and running in minutes, not months. Our micro-SaaS solutions are designed for quick implementation.'
    },
    {
      icon: Users,
      title: 'User-Friendly',
      description: 'Intuitive interfaces that require minimal training. Your team can start using our tools immediately.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with regular updates and compliance with industry standards.'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Make data-driven decisions with comprehensive analytics and reporting capabilities.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro-SaaS Solutions | Zion Tech Group - Ready-to-Use Business Tools</title>
        <meta name="description" content="Discover our micro-SaaS solutions designed for quick deployment and immediate value. AI-powered tools for analytics, CRM, security, and cloud management." />
        <meta name="keywords" content="micro-SaaS, business tools, AI analytics, CRM, security monitoring, cloud management, ready-to-use software" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro-SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ready-to-use business tools that deliver immediate value. No complex setup, no lengthy implementations - just powerful solutions that work.
            </p>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Micro-SaaS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Micro-SaaS Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {microSaasProducts.map((product, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center`}>
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{product.price}</div>
                      <div className="text-sm text-gray-400">{product.users}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{product.title}</h3>
                  <p className="text-gray-300 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Benefits of Micro-SaaS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Comparison */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Simple, Transparent Pricing</h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {microSaasProducts.map((product, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{product.title}</h3>
                    <div className="text-2xl font-bold text-white mb-1">{product.price}</div>
                    <div className="text-sm text-gray-400 mb-4">{product.users}</div>
                    <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                      Try Free
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Choose any of our micro-SaaS solutions and start seeing results immediately. No setup fees, no long-term contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-8 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link
                to="/consultation"
                className="border border-white/30 text-white py-3 px-8 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaasPage;