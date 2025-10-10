'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, MessageCircle, FileText, Mail, Calendar, Package, Monitor, Eye, Mic, Code, Heart, DollarSign, Box, Cpu, Link, Server } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      id: 1,
      name: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and custom dashboards.',
      category: 'Analytics',
      price: '$99/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', '100+ integrations'],
      popular: true,
      icon: BarChart
    },
    {
      id: 2,
      name: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support and sales with no coding required.',
      category: 'Customer Service',
      price: '$79/month',
      features: ['No-code builder', '50+ languages', 'Unlimited conversations', 'CRM integration'],
      popular: true,
      icon: MessageCircle
    },
    {
      id: 3,
      name: 'AI Email Marketing',
      description: 'Automated email campaigns with AI-powered personalization and A/B testing.',
      category: 'Marketing',
      price: '$149/month',
      features: ['AI personalization', 'A/B testing', 'Advanced segmentation', 'Unlimited emails'],
      popular: false,
      icon: Mail
    },
    {
      id: 4,
      name: 'AI Project Management',
      description: 'Intelligent project tracking with AI-powered task prioritization and resource allocation.',
      category: 'Productivity',
      price: '$129/month',
      features: ['AI task prioritization', 'Resource allocation', 'Risk prediction', 'Team collaboration'],
      popular: false,
      icon: Target
    },
    {
      id: 5,
      name: 'AI SEO Optimizer',
      description: 'Automated SEO analysis, keyword research, and content optimization with AI insights.',
      category: 'Marketing',
      price: '$89/month',
      features: ['Keyword research', 'Content optimization', 'Ranking tracking', 'Competitor analysis'],
      popular: true,
      icon: TrendingUp
    },
    {
      id: 6,
      name: 'AI Sales CRM',
      description: 'Intelligent CRM with AI-powered lead scoring, sales forecasting, and automated follow-ups.',
      category: 'Sales',
      price: '$179/month',
      features: ['Lead scoring', 'Sales forecasting', 'Automated follow-ups', 'Advanced analytics'],
      popular: false,
      icon: Users
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'Analytics', name: 'Analytics', count: products.filter(p => p.category === 'Analytics').length },
    { id: 'Customer Service', name: 'Customer Service', count: products.filter(p => p.category === 'Customer Service').length },
    { id: 'Marketing', name: 'Marketing', count: products.filter(p => p.category === 'Marketing').length },
    { id: 'Productivity', name: 'Productivity', count: products.filter(p => p.category === 'Productivity').length },
    { id: 'Sales', name: 'Sales', count: products.filter(p => p.category === 'Sales').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use AI Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions - ready-to-use AI tools that can transform your business operations. No coding required, instant deployment." />
        <meta name="keywords" content="micro SaaS, AI tools, business automation, ready-to-use solutions, no-code tools" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Ready-to-use AI tools that can transform your business operations. 
                No coding required, instant deployment, immediate results.
              </p>
              
              {/* Search and Filter */}
              <div className="max-w-2xl mx-auto">
                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Search micro SaaS solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    {product.popular && (
                      <span className="bg-yellow-500 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-white">{product.price}</span>
                    <span className="text-gray-400 text-sm ml-1">/month</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Get Started
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No products found</h3>
                <p className="text-gray-300">Try adjusting your search or filter criteria</p>
              </div>
            )}

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Need a Custom Solution?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Don't see exactly what you need? Our team can create a custom micro SaaS solution 
                  tailored to your specific business requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Request Custom Solution
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </button>
                  <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default MicroSaasPage;