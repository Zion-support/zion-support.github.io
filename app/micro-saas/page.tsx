'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  BarChart, 
  MessageCircle, 
  Shield, 
  Cloud, 
  FileText, 
  Users, 
  Database, 
  Target, 
  Calendar, 
  Mail, 
  Package, 
  Settings, 
  Monitor, 
  CheckSquare, 
  Globe, 
  Eye, 
  Mic, 
  DollarSign, 
  ArrowRight, 
  Star, 
  Zap,
  CheckCircle,
  Play
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const microSaasProducts = [
    {
      id: 1,
      name: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with AI-powered insights and real-time dashboards.',
      icon: BarChart,
      category: 'Analytics',
      price: '$29/month',
      features: ['Real-time dashboards', 'AI insights', 'Custom reports', 'API integration'],
      rating: 4.9,
      users: '2.5K+',
      status: 'Popular'
    },
    {
      id: 2,
      name: 'Zion Chat AI',
      description: 'Intelligent customer support chatbot with natural language processing and multi-channel support.',
      icon: MessageCircle,
      category: 'Customer Support',
      price: '$19/month',
      features: ['Multi-channel support', 'NLP processing', 'Custom training', 'Analytics'],
      rating: 4.8,
      users: '1.8K+',
      status: 'New'
    },
    {
      id: 3,
      name: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection for small to medium businesses.',
      icon: Shield,
      category: 'Security',
      price: '$49/month',
      features: ['Threat detection', 'Real-time monitoring', 'Compliance reports', '24/7 alerts'],
      rating: 4.9,
      users: '1.2K+',
      status: 'Featured'
    },
    {
      id: 4,
      name: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated scheduling.',
      icon: Cloud,
      category: 'Backup',
      price: '$15/month',
      features: ['Automated backup', 'Disaster recovery', 'Version control', 'Cross-platform'],
      rating: 4.7,
      users: '3.1K+',
      status: 'Popular'
    },
    {
      id: 5,
      name: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, and marketing materials.',
      icon: FileText,
      category: 'Content',
      price: '$25/month',
      features: ['AI writing', 'SEO optimization', 'Multi-format', 'Brand voice'],
      rating: 4.6,
      users: '2.2K+',
      status: 'Popular'
    },
    {
      id: 6,
      name: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automation.',
      icon: Users,
      category: 'CRM',
      price: '$39/month',
      features: ['Lead scoring', 'Automation', 'Predictive analytics', 'Integration'],
      rating: 4.8,
      users: '1.5K+',
      status: 'Featured'
    },
    {
      id: 7,
      name: 'Zion Data Sync',
      description: 'Data integration platform that connects and synchronizes data across multiple systems.',
      icon: Database,
      category: 'Integration',
      price: '$35/month',
      features: ['Multi-source sync', 'Real-time updates', 'Data mapping', 'Error handling'],
      rating: 4.7,
      users: '1.9K+',
      status: 'Popular'
    },
    {
      id: 8,
      name: 'Zion Lead Magnet',
      description: 'Lead generation platform with automated nurturing and conversion tracking.',
      icon: Target,
      category: 'Marketing',
      price: '$22/month',
      features: ['Lead capture', 'Automated nurturing', 'A/B testing', 'Analytics'],
      rating: 4.5,
      users: '2.8K+',
      status: 'New'
    },
    {
      id: 9,
      name: 'Zion Project Master',
      description: 'AI-powered project management tool with intelligent scheduling and resource optimization.',
      icon: Calendar,
      category: 'Project Management',
      price: '$32/month',
      features: ['Smart scheduling', 'Resource planning', 'Progress tracking', 'Team collaboration'],
      rating: 4.8,
      users: '1.7K+',
      status: 'Featured'
    },
    {
      id: 10,
      name: 'Zion Email Automation',
      description: 'Advanced email marketing platform with AI-driven personalization and automation.',
      icon: Mail,
      category: 'Email Marketing',
      price: '$18/month',
      features: ['AI personalization', 'Automation workflows', 'A/B testing', 'Analytics'],
      rating: 4.6,
      users: '2.4K+',
      status: 'Popular'
    },
    {
      id: 11,
      name: 'Zion Inventory Smart',
      description: 'Intelligent inventory management with demand forecasting and automated reordering.',
      icon: Package,
      category: 'Inventory',
      price: '$28/month',
      features: ['Demand forecasting', 'Auto reordering', 'Multi-location', 'Analytics'],
      rating: 4.7,
      users: '1.3K+',
      status: 'New'
    },
    {
      id: 12,
      name: 'Zion Performance Monitor',
      description: 'Real-time application performance monitoring with AI-powered insights and alerts.',
      icon: Monitor,
      category: 'Monitoring',
      price: '$45/month',
      features: ['Real-time monitoring', 'AI insights', 'Custom alerts', 'Performance reports'],
      rating: 4.9,
      users: '1.1K+',
      status: 'Featured'
    }
  ];

  const categories = ['All', 'Analytics', 'Customer Support', 'Security', 'Backup', 'Content', 'CRM', 'Integration', 'Marketing', 'Project Management', 'Email Marketing', 'Inventory', 'Monitoring'];

  const filteredProducts = selectedCategory === 'All' 
    ? microSaasProducts 
    : microSaasProducts.filter(product => product.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Popular': return 'bg-green-500/20 text-green-400';
      case 'Featured': return 'bg-purple-500/20 text-purple-400';
      case 'New': return 'bg-cyan-500/20 text-cyan-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Discover our collection of ready-to-use Micro SaaS solutions. AI-powered tools for analytics, customer support, security, and more. Start your free trial today." />
        <meta name="keywords" content="micro saas, saas solutions, AI tools, business software, analytics, customer support, security, automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Micro SaaS Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Ready-to-use AI-powered tools that solve real business problems. 
                No complex setup, no lengthy implementation - just powerful solutions that work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  View All Solutions
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                {/* Product Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                      {product.status}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{product.rating}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>{product.users} users</span>
                    <span className="text-cyan-400 font-semibold">{product.price}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Try Free
                  </button>
                  <button className="px-4 py-2 border border-slate-600 text-gray-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                    <Play className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-12 text-center border border-cyan-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our Micro SaaS solutions. 
              Start your free trial today and see the difference AI can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaasPage;