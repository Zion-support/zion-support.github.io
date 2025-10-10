'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Zap, ArrowRight, Users, Clock, Shield, TrendingUp } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      icon: '📊',
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app'],
      price: '$99/month',
      users: 'Up to 50 users',
      popular: false
    },
    {
      icon: '👥',
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs'],
      price: '$149/month',
      users: 'Up to 100 users',
      popular: true
    },
    {
      icon: '🔒',
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring'],
      price: '$199/month',
      users: 'Up to 200 users',
      popular: false
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support'],
      price: '$299/month',
      users: 'Unlimited users',
      popular: false
    },
    {
      icon: '📧',
      title: 'Email Marketing Automation',
      description: 'AI-powered email campaigns with personalization and advanced analytics',
      features: ['Email automation', 'A/B testing', 'Personalization', 'Analytics dashboard'],
      price: '$79/month',
      users: 'Up to 10,000 contacts',
      popular: false
    },
    {
      icon: '📝',
      title: 'Project Management Pro',
      description: 'Advanced project management with AI insights and team collaboration tools',
      features: ['Task management', 'Team collaboration', 'AI insights', 'Time tracking'],
      price: '$129/month',
      users: 'Up to 25 users',
      popular: false
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

  const stats = [
    { icon: Users, value: '10,000+', label: 'Active Users' },
    { icon: Clock, value: '99.9%', label: 'Uptime' },
    { icon: Shield, value: '100%', label: 'Secure' },
    { icon: TrendingUp, value: '300%', label: 'ROI Average' }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of micro SAAS solutions designed for modern businesses. AI-powered tools for analytics, CRM, security, and more." />
        <meta name="keywords" content="micro saas, business tools, AI analytics, CRM, project management, email marketing, cloud management" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful, AI-driven business tools designed for modern companies. 
              Get started quickly with our suite of micro SAAS applications.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card hologram-card p-6 text-center">
                    <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <section className="mb-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Our Micro SAAS Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {microSaasProducts.map((product, index) => (
                  <div
                    key={index}
                    className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 relative ${
                      product.popular ? 'ring-2 ring-cyan-500' : ''
                    }`}
                  >
                    {product.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <div className="text-5xl mb-4">{product.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                        <span className="text-sm text-gray-400">{product.users}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 text-sm">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="w-full cyber-button text-center py-3">
                      Start Free Trial
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Why Choose Our Micro SAAS Solutions?</h2>
              <div className="cyber-card hologram-card p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card hologram-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button text-center py-4 px-8 flex items-center justify-center space-x-2"
                >
                  <Zap className="w-5 h-5" />
                  <span>Start Free Trial</span>
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  View All Plans
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default MicroSaasPage;
