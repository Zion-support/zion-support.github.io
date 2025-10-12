'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, Brain, Database, Shield, Globe, Code, CheckCircle, ArrowRight, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and automation.',
      features: ['Smart prioritization', 'Deadline tracking', 'Team collaboration', 'Progress analytics'],
      pricing: '$19/month',
      link: '/micro-saas/ai-task-manager',
      popular: true,
      category: 'productivity'
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with AI-powered categorization and insights.',
      features: ['Receipt scanning', 'Auto categorization', 'Budget alerts', 'Financial reports'],
      pricing: '$15/month',
      link: '/micro-saas/ai-expense-tracker',
      popular: true,
      category: 'finance'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations.',
      features: ['Password generation', 'Security scoring', 'Breach monitoring', 'Secure sharing'],
      pricing: '$12/month',
      link: '/micro-saas/ai-password-manager',
      popular: false,
      category: 'security'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered templates and customization.',
      features: ['Template library', 'Auto calculations', 'Payment tracking', 'Client management'],
      pricing: '$25/month',
      link: '/micro-saas/ai-invoice-generator',
      popular: true,
      category: 'business'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive analytics with AI-powered insights and predictions.',
      features: ['Real-time data', 'Custom dashboards', 'Predictive analytics', 'Export reports'],
      pricing: '$29/month',
      link: '/micro-saas/analytics-dashboard',
      popular: false,
      category: 'analytics'
    },
    {
      icon: <Code className="w-8 h-8 text-cyan-500" />,
      title: 'AI Content Writer',
      description: 'AI-powered content creation for blogs, social media, and marketing.',
      features: ['Content generation', 'SEO optimization', 'Tone adjustment', 'Plagiarism check'],
      pricing: '$22/month',
      link: '/micro-saas/ai-content-writer',
      popular: true,
      category: 'content'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'productivity', name: 'Productivity' },
    { id: 'finance', name: 'Finance' },
    { id: 'security', name: 'Security' },
    { id: 'business', name: 'Business' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'content', name: 'Content' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '1000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
    { number: '15+', label: 'Micro Apps' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful micro SAAS applications designed to solve specific business problems. AI-powered tools for productivity, finance, security, and more." />
        <meta name="keywords" content="micro SAAS, small business tools, AI applications, productivity tools, business automation" />
      </Helmet>

      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, affordable micro applications designed to solve specific business problems with AI intelligence. 
              No complex setups, no long-term commitments - just solutions that work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-6">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3 group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <Link 
                      to={service.link}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Micro SAAS?</h2>
              <p className="text-lg text-gray-300">The advantages of our micro application approach</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Quick Setup</h3>
                <p className="text-gray-300">Get started in minutes, not months. No complex installations or configurations.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Affordable</h3>
                <p className="text-gray-300">Pay only for what you need. No hidden fees or long-term commitments.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">AI-Powered</h3>
                <p className="text-gray-300">Leverage artificial intelligence to automate tasks and gain insights.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Boost Your Productivity?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8">
                Start with any micro application and scale as your business grows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Trial
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MicroSaasServicesPage;