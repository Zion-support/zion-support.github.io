'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Brain, Cloud, Shield, Code, BarChart, Users, Settings, Calendar, FileText, MessageCircle, Heart, DollarSign, Award, Rocket, Layers, Workflow, BarChart3, MessageSquare, Headphones, Monitor, HardDrive, Wifi, Printer, Router, Package, Eye, Mic, Search, Filter } from 'lucide-react';

const MicroSaaSPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const microSaasProducts = [
    {
      id: 1,
      name: 'Zion Analytics Pro',
      description: 'Advanced business intelligence and analytics dashboard',
      category: 'Analytics',
      price: '$29/month',
      features: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'API integration'],
      icon: BarChart,
      rating: 4.9,
      users: '2.5K+',
      status: 'Popular'
    },
    {
      id: 2,
      name: 'Zion Chat AI',
      description: 'AI-powered customer support chatbot',
      category: 'AI & Automation',
      price: '$19/month',
      features: ['Natural language processing', 'Multi-language support', 'Integration APIs', 'Analytics dashboard'],
      icon: MessageCircle,
      rating: 4.8,
      users: '1.8K+',
      status: 'New'
    },
    {
      id: 3,
      name: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and protection',
      category: 'Security',
      price: '$49/month',
      features: ['Threat detection', 'Real-time monitoring', 'Automated responses', 'Compliance reporting'],
      icon: Shield,
      rating: 4.9,
      users: '1.2K+',
      status: 'Enterprise'
    },
    {
      id: 4,
      name: 'Zion Cloud Vault',
      description: 'Secure cloud backup and recovery solution',
      category: 'Cloud & Storage',
      price: '$15/month',
      features: ['Automated backups', 'Version control', 'Cross-platform sync', 'Encryption'],
      icon: Cloud,
      rating: 4.7,
      users: '3.1K+',
      status: 'Popular'
    },
    {
      id: 5,
      name: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform',
      category: 'Content & Marketing',
      price: '$25/month',
      features: ['AI writing assistant', 'Content templates', 'SEO optimization', 'Social media integration'],
      icon: FileText,
      rating: 4.6,
      users: '2.2K+',
      status: 'Popular'
    },
    {
      id: 6,
      name: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management',
      category: 'CRM & Sales',
      price: '$35/month',
      features: ['Lead scoring', 'Automated follow-ups', 'Sales forecasting', 'Integration hub'],
      icon: Users,
      rating: 4.8,
      users: '1.5K+',
      status: 'New'
    },
    {
      id: 7,
      name: 'Zion Lead Magnet',
      description: 'Advanced lead generation and nurturing platform',
      category: 'Marketing',
      price: '$22/month',
      features: ['Landing page builder', 'Email campaigns', 'Lead scoring', 'Analytics'],
      icon: Target,
      rating: 4.7,
      users: '1.9K+',
      status: 'Popular'
    },
    {
      id: 8,
      name: 'Zion Project Master',
      description: 'Comprehensive project management and collaboration tool',
      category: 'Productivity',
      price: '$18/month',
      features: ['Task management', 'Team collaboration', 'Time tracking', 'Resource planning'],
      icon: Calendar,
      rating: 4.5,
      users: '2.8K+',
      status: 'Popular'
    },
    {
      id: 9,
      name: 'Zion Email Automation',
      description: 'Intelligent email marketing and automation platform',
      category: 'Marketing',
      price: '$20/month',
      features: ['Email templates', 'Automation workflows', 'A/B testing', 'Analytics'],
      icon: Mail,
      rating: 4.6,
      users: '2.1K+',
      status: 'Popular'
    },
    {
      id: 10,
      name: 'Zion Invoice Genius',
      description: 'AI-powered invoicing and payment management',
      category: 'Finance',
      price: '$16/month',
      features: ['Automated invoicing', 'Payment tracking', 'Expense management', 'Financial reports'],
      icon: DollarSign,
      rating: 4.8,
      users: '1.7K+',
      status: 'New'
    },
    {
      id: 11,
      name: 'Zion Workflow Automation',
      description: 'No-code workflow automation and integration platform',
      category: 'Automation',
      price: '$30/month',
      features: ['Visual workflow builder', 'App integrations', 'Conditional logic', 'Monitoring'],
      icon: Workflow,
      rating: 4.7,
      users: '1.4K+',
      status: 'Enterprise'
    },
    {
      id: 12,
      name: 'Zion Social Scheduler',
      description: 'Social media management and scheduling platform',
      category: 'Social Media',
      price: '$24/month',
      features: ['Multi-platform posting', 'Content calendar', 'Analytics', 'Team collaboration'],
      icon: Calendar,
      rating: 4.5,
      users: '2.3K+',
      status: 'Popular'
    }
  ];

  const categories = ['All', 'Analytics', 'AI & Automation', 'Security', 'Cloud & Storage', 'Content & Marketing', 'CRM & Sales', 'Marketing', 'Productivity', 'Finance', 'Automation', 'Social Media'];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Popular': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'New': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Enterprise': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Specialized Software Tools</title>
        <meta name="description" content="Discover our collection of specialized micro SaaS solutions designed to solve specific business challenges with AI, analytics, and automation tools." />
        <meta name="keywords" content="micro SaaS, specialized software, business tools, AI solutions, automation, analytics, productivity" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Specialized software tools designed to solve specific business challenges. 
                Each solution is focused, powerful, and easy to implement.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12">
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search micro SaaS solutions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white border border-slate-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(product.status)}`}>
                      {product.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{product.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{product.users} users</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-xs text-gray-400">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-white">{product.price}</span>
                    <span className="text-sm text-gray-400">per month</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                      <Zap className="w-4 h-4" />
                      Try Free
                    </button>
                    <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-4 py-2 rounded-lg font-medium transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No products found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )}

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Don't see what you're looking for? We can create a custom micro SaaS solution 
                tailored to your specific business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <Brain className="w-5 h-5" />
                  Request Custom Solution
                </button>
                <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaaSPage;