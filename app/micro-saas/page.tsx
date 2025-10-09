
'use client';

import React, { useState, useMemo } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

export default function MicroSAASPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const microSaasProducts = [
    {
      id: 1,
      title: 'AI Project Manager',
      description: 'Intelligent project planning and management with AI-powered insights and automation.',
      icon: '📊',
      category: 'productivity',
      price: '$99/month',
      features: ['AI-powered planning', 'Task automation', 'Progress tracking', 'Team collaboration'],
      popular: true,
      rating: 4.9,
      users: '2.5K+'
    },
    {
      id: 2,
      title: 'AI Social Media Manager',
      description: 'Automated social media management with AI content creation and scheduling.',
      icon: '📱',
      category: 'marketing',
      price: '$149/month',
      features: ['Content generation', 'Auto-posting', 'Analytics', 'Multi-platform'],
      popular: true,
      rating: 4.8,
      users: '1.8K+'
    },
    {
      id: 3,
      title: 'AI Analytics Dashboard',
      description: 'AI-powered business intelligence with real-time insights and predictions.',
      icon: '📈',
      category: 'analytics',
      price: '$199/month',
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Data visualization'],
      popular: true,
      rating: 4.9,
      users: '3.2K+'
    },
    {
      id: 4,
      title: 'AI Email Marketing',
      description: 'Intelligent email campaigns with AI-driven personalization and optimization.',
      icon: '📧',
      category: 'marketing',
      price: '$79/month',
      features: ['AI personalization', 'A/B testing', 'Automation', 'Analytics'],
      popular: true,
      rating: 4.7,
      users: '1.5K+'
    },
    {
      id: 5,
      title: 'AI Customer Support Bot',
      description: '24/7 AI customer support with natural language processing and learning capabilities.',
      icon: '🤖',
      category: 'support',
      price: '$129/month',
      features: ['24/7 support', 'NLP processing', 'Learning AI', 'Multi-language'],
      popular: true,
      rating: 4.8,
      users: '2.1K+'
    },
    {
      id: 6,
      title: 'AI Code Review Assistant',
      description: 'Automated code analysis and review with AI-powered suggestions and improvements.',
      icon: '🔍',
      category: 'development',
      price: '$89/month',
      features: ['Code analysis', 'Bug detection', 'Performance optimization', 'Security scanning'],
      popular: false,
      rating: 4.6,
      users: '950+'
    },
    {
      id: 7,
      title: 'AI Content Generator',
      description: 'AI-powered content creation for blogs, articles, and marketing materials.',
      icon: '✍️',
      category: 'content',
      price: '$59/month',
      features: ['Blog generation', 'SEO optimization', 'Multi-format', 'Brand voice'],
      popular: false,
      rating: 4.5,
      users: '1.2K+'
    },
    {
      id: 8,
      title: 'AI SEO Optimizer',
      description: 'AI-driven SEO analysis and optimization for better search rankings.',
      icon: '🎯',
      category: 'marketing',
      price: '$119/month',
      features: ['SEO analysis', 'Keyword research', 'Content optimization', 'Rank tracking'],
      popular: false,
      rating: 4.7,
      users: '1.7K+'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: microSaasProducts.length },
    { id: 'productivity', name: 'Productivity', count: microSaasProducts.filter(p => p.category === 'productivity').length },
    { id: 'marketing', name: 'Marketing', count: microSaasProducts.filter(p => p.category === 'marketing').length },
    { id: 'analytics', name: 'Analytics', count: microSaasProducts.filter(p => p.category === 'analytics').length },
    { id: 'support', name: 'Support', count: microSaasProducts.filter(p => p.category === 'support').length },
    { id: 'development', name: 'Development', count: microSaasProducts.filter(p => p.category === 'development').length },
    { id: 'content', name: 'Content', count: microSaasProducts.filter(p => p.category === 'content').length }
  ];

  const filteredProducts = useMemo(() => {
    return microSaasProducts.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Powerful, focused AI tools designed to solve specific business challenges. 
              Get started in minutes with our ready-to-use micro SAAS solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/10 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">Quick Setup</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/10 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-medium">Secure & Reliable</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/10 px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-medium">Proven Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search micro SAAS products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                {selectedCategory === 'all' ? 'All Micro SAAS Products' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-xl text-gray-300">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-slate-800/50 rounded-2xl p-8 cyber-card hover:bg-slate-800/70 transition-all duration-300 relative">
                  {product.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </div>
                  )}
                  
                  <div className="text-4xl mb-4">{product.icon}</div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white">{product.title}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-300 text-sm">{product.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-cyan-400 font-bold text-2xl">{product.price}</div>
                      <div className="text-gray-400 text-sm">{product.users} users</div>
                    </div>
                    <button className="w-full cyber-button inline-flex items-center justify-center px-6 py-3">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No products found</h3>
                <p className="text-gray-300 mb-6">Try adjusting your search terms or filters</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="cyber-button px-6 py-3"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text">Why Choose Our Micro SAAS Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Focused, powerful tools that solve specific business problems without the complexity of enterprise solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-slate-900/50 rounded-xl cyber-card">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Quick Setup</h3>
                <p className="text-gray-300">Get started in minutes with our easy-to-use micro SAAS solutions.</p>
              </div>
              
              <div className="text-center p-6 bg-slate-900/50 rounded-xl cyber-card">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Focused Solutions</h3>
                <p className="text-gray-300">Each tool is designed to solve a specific business problem effectively.</p>
              </div>
              
              <div className="text-center p-6 bg-slate-900/50 rounded-xl cyber-card">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Secure & Reliable</h3>
                <p className="text-gray-300">Enterprise-grade security with 99.9% uptime guarantee.</p>
              </div>
              
              <div className="text-center p-6 bg-slate-900/50 rounded-xl cyber-card">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
                <p className="text-gray-300">Thousands of businesses trust our micro SAAS solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-cyan-100 mb-8">
              Choose from our range of micro SAAS solutions and start seeing results today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition-colors"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
