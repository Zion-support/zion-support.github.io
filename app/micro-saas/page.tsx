'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Settings, Target, Globe, Database, Smartphone, Lock, TrendingUp, Calendar, CheckSquare, FileText } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const microSaasProducts = [
    {
      id: 1,
      title: 'AI Content Writer',
      description: 'Automated content creation with AI-powered writing assistance',
      category: 'AI Tools',
      price: '$29/month',
      features: [
        'AI-powered content generation',
        'Multiple content types',
        'SEO optimization',
        'Plagiarism detection',
        'Multi-language support'
      ],
      icon: FileText,
      popular: true,
      rating: 4.9,
      users: '10K+'
    },
    {
      id: 2,
      title: 'AI Email Assistant',
      description: 'Smart email management and automated responses',
      category: 'Productivity',
      price: '$19/month',
      features: [
        'Smart email categorization',
        'Automated responses',
        'Email scheduling',
        'Template library',
        'Analytics dashboard'
      ],
      icon: Mail,
      popular: false,
      rating: 4.8,
      users: '8K+'
    },
    {
      id: 3,
      title: 'AI Expense Tracker',
      description: 'Intelligent expense tracking and financial insights',
      category: 'Finance',
      price: '$15/month',
      features: [
        'Automatic expense categorization',
        'Receipt scanning',
        'Budget tracking',
        'Financial reports',
        'Tax preparation'
      ],
      icon: TrendingUp,
      popular: false,
      rating: 4.7,
      users: '5K+'
    },
    {
      id: 4,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation and management',
      category: 'Business',
      price: '$25/month',
      features: [
        'Auto-generated invoices',
        'Payment tracking',
        'Client management',
        'Tax calculations',
        'Multi-currency support'
      ],
      icon: FileText,
      popular: true,
      rating: 4.9,
      users: '12K+'
    },
    {
      id: 5,
      title: 'AI Lead Generation',
      description: 'Automated lead finding and qualification',
      category: 'Sales',
      price: '$39/month',
      features: [
        'Lead discovery',
        'Contact information',
        'Lead scoring',
        'CRM integration',
        'Follow-up automation'
      ],
      icon: Target,
      popular: false,
      rating: 4.8,
      users: '7K+'
    },
    {
      id: 6,
      title: 'AI Project Manager',
      description: 'Intelligent project planning and task management',
      category: 'Productivity',
      price: '$35/month',
      features: [
        'Smart task scheduling',
        'Resource allocation',
        'Progress tracking',
        'Team collaboration',
        'Risk assessment'
      ],
      icon: Calendar,
      popular: false,
      rating: 4.6,
      users: '6K+'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'AI Tools', name: 'AI Tools' },
    { id: 'Productivity', name: 'Productivity' },
    { id: 'Finance', name: 'Finance' },
    { id: 'Business', name: 'Business' },
    { id: 'Sales', name: 'Sales' }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get started in minutes with our easy-to-use interface'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: Brain,
      title: 'AI-Powered',
      description: 'Leverage cutting-edge AI technology for better results'
    },
    {
      icon: Cloud,
      title: 'Cloud-Based',
      description: 'Access your tools from anywhere, anytime'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? microSaasProducts 
    : microSaasProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our collection of AI-powered micro SaaS solutions. Small, focused tools that solve specific business problems with big impact." />
        <meta name="keywords" content="micro SaaS, AI tools, productivity software, business automation, small business tools" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Micro <span className="text-cyan-400">SaaS</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful, focused tools that solve specific business problems. 
            Our micro SaaS products are designed to deliver maximum value with minimal complexity.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Micro SaaS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Micro SaaS Products</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                product.popular
                  ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20'
                  : 'border-slate-700 hover:border-slate-600'
              }`}>
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-bold px-4 py-2 rounded-full flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <product.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      {product.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {product.users}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-6">{product.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                  product.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white'
                    : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'
                }`}>
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose any of our micro SaaS products and start your free trial today. 
              No credit card required, cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View All Products
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;
