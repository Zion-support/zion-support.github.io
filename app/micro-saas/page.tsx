'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Zap, Brain, Target } from 'lucide-react';

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
      features: ['Lead scoring', 'Email automation', 'Sales forecasting', 'Integration APIs'],
      price: '$149/month',
      users: 'Up to 100 users',
    },
    {
      icon: '🔒',
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for small businesses',
      features: ['24/7 monitoring', 'Threat detection', 'Compliance reporting', 'Incident response'],
      price: '$199/month',
      users: 'Unlimited',
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure Manager',
      description: 'Simplified cloud management and optimization for AWS, Azure, and Google Cloud',
      features: ['Multi-cloud support', 'Cost optimization', 'Auto-scaling', 'Monitoring'],
      price: '$79/month',
      users: 'Up to 25 users',
    },
    {
      icon: '📧',
      title: 'Email Marketing Automation',
      description: 'AI-powered email marketing campaigns with personalization and analytics',
      features: ['Campaign automation', 'A/B testing', 'Analytics', 'Template library'],
      price: '$49/month',
      users: 'Up to 10,000 contacts',
    },
    {
      icon: '📋',
      title: 'Project Management Pro',
      description: 'Advanced project management with AI-powered task prioritization and team collaboration',
      features: ['Task automation', 'Team collaboration', 'Time tracking', 'Reporting'],
      price: '$89/month',
      users: 'Up to 30 users',
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions | Zion Tech Group</title>
        <meta name="description" content="Affordable AI-powered micro SAAS solutions for small and medium businesses. 50+ ready-to-use applications with transparent pricing." />
        <meta name="keywords" content="micro SAAS, AI tools, business software, affordable solutions, small business, Zion Tech Group" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Micro SAAS
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Affordable AI-powered tools for small and medium businesses. 
              50+ ready-to-use applications with transparent pricing and no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Products
            </h2>
            <p className="text-xl text-gray-300">
              Choose from our growing library of AI-powered business tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{product.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{product.price}</div>
                  <div className="text-gray-400 text-sm">{product.users}</div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MicroSaasPage;
