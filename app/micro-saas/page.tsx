'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, ArrowRight } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      icon: '📊',
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app'],
      price: '$99/month',
      users: 'Up to 50 users',
    },
    {
      icon: '👥',
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs'],
      price: '$149/month',
      users: 'Up to 100 users',
    },
    {
      icon: '🔒',
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring'],
      price: '$199/month',
      users: 'Up to 200 users',
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support'],
      price: '$299/month',
      users: 'Unlimited users',
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

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Affordable AI & IT Tools</title>
        <meta name="description" content="Discover our micro SaaS solutions - affordable, powerful AI and IT tools for modern businesses. 50+ ready-to-use applications." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, affordable solutions, productivity tools, automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Micro SaaS Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Affordable, powerful AI and IT tools for modern businesses. 50+ ready-to-use applications.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Micro SaaS Products</h2>
              <p className="text-xl text-gray-300">Choose from our range of specialized business tools</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {microSaasProducts.map((product, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{product.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-cyan-400">{product.price}</div>
                    <div className="text-sm text-gray-400">{product.users}</div>
                  </div>
                  
                  <button className="w-full bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition-colors">
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Micro SaaS?</h2>
              <p className="text-xl text-gray-300">Built for modern businesses that need powerful tools without the complexity</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Zap className="w-5 h-5" />
                  <span>Start Free Trial</span>
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  View All Plans
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