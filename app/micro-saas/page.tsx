'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, CheckCircle, ArrowRight, Star, Users, Shield, Cloud, BarChart3 } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      icon: BarChart3,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app'],
      price: '$99/month',
      users: 'Up to 50 users',
      popular: false
    },
    {
      icon: Users,
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs'],
      price: '$149/month',
      users: 'Up to 100 users',
      popular: true
    },
    {
      icon: Shield,
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring'],
      price: '$199/month',
      users: 'Up to 200 users',
      popular: false
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support'],
      price: '$299/month',
      users: 'Unlimited users',
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

  const features = [
    {
      title: 'Rapid Deployment',
      description: 'Get up and running in minutes, not months',
      icon: Zap
    },
    {
      title: 'Cost Effective',
      description: 'Pay only for what you use with flexible pricing',
      icon: CheckCircle
    },
    {
      title: 'Always Updated',
      description: 'Automatic updates with the latest features',
      icon: ArrowRight
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our micro SaaS solutions designed for small to medium businesses. AI-powered tools that scale with your growth." />
        <meta name="keywords" content="micro SaaS, small business software, AI tools, business automation, cloud solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SaaS</span> Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Powerful, affordable software solutions designed specifically for small to medium businesses. 
                Get enterprise-grade features without the enterprise complexity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="mr-2 w-5 h-5" />
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  View All Plans
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Micro SaaS</span>?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our micro SaaS solutions are designed to give you the power of enterprise software without the complexity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Solutions</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Choose from our range of micro SaaS solutions designed to solve specific business challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {microSaasProducts.map((product, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:scale-105 ${
                  product.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-white/10 hover:border-cyan-400/50'
                }`}>
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-white mb-1">{product.price}</div>
                    <div className="text-sm text-gray-400">{product.users}</div>
                  </div>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-300">
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Micro SaaS</span>?
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Our micro SaaS solutions are designed to give you the power of enterprise software without the complexity.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="mr-2 w-5 h-5" />
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  View All Plans
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;