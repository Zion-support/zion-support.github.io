<<<<<<< HEAD
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain
  Zap
  Code
  BarChart3
  Shield
  Globe
  Smartphone
  Database,
  Cpu,
  Network,
  Bot,
  Sparkles,
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  CheckCircle,
  Play,
  Download,
  ExternalLink
} from 'lucide-react';

const UltimateAIToolsShowcase2025 = () => {
  const [activeCategorysetActiveCategory] = useState('all');
  const [hoveredToolsetHoveredTool] = useState(null);
  const [searchQuerysetSearchQuery] = useState('');

  const categories = [
    { id: ''all', 'name: 'All 'Tools', 'icon: Sparklescount: 24 },
    { id: ''automation', 'name: ''Automation', 'icon: Zapcount: 8 },
    { id: ''analytics', 'name: ''Analytics', 'icon: BarChart3count: 6 },
    { id: ''development', 'name: ''Development', 'icon: Codecount: 5 },
    { id: ''security', 'name: ''Security', 'icon: Shieldcount: 3 },
    { id: ''mobile', 'name: ''Mobile', 'icon: Smartphonecount: 2 }
  ];

  const aiTools = [
    {
      id: 1,
      name: 'Neural Code Generator',
      category: 'development',
      description: 'AI-powered code generation that understands context and creates production-ready code',
      features: ['Multi-language 'support', 'Context-aware 'generation', 'Real-time collaboration'],
      rating: 4.9,
      users: '12.5K',
      price: 'Free',
      image: '/api/placeholder/400/300',
      badge: 'Most Popular',
      demo: true,
      download: true
    },
    {
      id: 2,
      name: 'Smart Analytics Pro',
      category: 'analytics',
      description: 'Advanced AI analytics platform with predictive insights and automated reporting',
      features: ['Predictive 'analytics', 'Automated 'insights', 'Custom dashboards'],
      rating: 4.8,
      users: '8.2K',
      price: '$99/mo',
      image: '/api/placeholder/400/300',
      badge: 'Enterprise',
      demo: true,
      download: false
    },
    {
      id: 3,
      name: 'AutoWorkflow Engine',
      category: 'automation',
      description: 'Intelligent workflow automation that learns from your processes and optimizes them',
      features: ['Process 'learning', 'Smart 'optimization', 'Integration hub'],
      rating: 4.7,
      users: '15.3K',
      price: '$49/mo',
      image: '/api/placeholder/400/300',
      badge: 'Trending',
      demo: true,
      download: true
    },
    {
      id: 4,
      name: 'Quantum Security Suite',
      category: 'security',
      description: 'Next-generation security powered by quantum computing principles',
      features: ['Quantum 'encryption', 'Threat 'detection', 'Zero-trust architecture'],
      rating: 4.9,
      users: '5.1K',
      price: '$199/mo',
      image: '/api/placeholder/400/300',
      badge: 'Cutting Edge',
      demo: true,
      download: false
    },
    {
      id: 5,
      name: 'Mobile AI Assistant',
      category: 'mobile',
      description: 'Personal AI assistant that works across all your mobile devices',
      features: ['Cross-platform 'sync', 'Voice 'commands', 'Smart scheduling'],
      rating: 4.6,
      users: '22.7K',
      price: 'Free',
      image: '/api/placeholder/400/300',
      badge: 'New',
      demo: true,
      download: true
    },
    {
      id: 6,
      name: 'Data Intelligence Hub',
      category: 'analytics',
      description: 'Transform raw data into actionable insights with AI-powered analysis',
      features: ['Real-time 'processing', 'Natural language 'queries', 'Visual insights'],
      rating: 4.8,
      users: '9.8K',
      price: '$79/mo',
      image: '/api/placeholder/400/300',
      badge: 'Popular',
      demo: true,
      download: true
    }
  ];

  const filteredTools = aiTools.filter(tool => {
    const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4 mr-2" />
            AI Tools Showcase 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Tools
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Transforming Industries
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most advanced AI tools and solutions that are reshaping how we work
            createand innovate in 2025.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <input
                type="text"
                placeholder="Search AI tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                  <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredTools.map((tool) => (
              <motion.div
                key={tool.id}
                variants={itemVariants}
                layout
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                onHoverStart={() => setHoveredTool(tool.id)}
                onHoverEnd={() => setHoveredTool(null)}
              >
                {/* Tool Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      tool.badge === 'Most Popular' ? 'bg-green-100 text-green-800' :
                      tool.badge === 'Enterprise' ? 'bg-purple-100 text-purple-800' :
                      tool.badge === 'Trending' ? 'bg-orange-100 text-orange-800' :
                      tool.badge === 'Cutting Edge' ? 'bg-red-100 text-red-800' :
                      tool.badge === 'New' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {tool.badge}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Tool Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {tool.name}
                    </h3>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{tool.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {tool.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {tool.features.slice(02).map((featureindex) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      {tool.users} users
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      {tool.price}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                      <Play className="w-4 h-4 mr-2" />
                      Demo
                    </button>
                    {tool.download && (
                      <button className="px-4 py-2 border border-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </button>
                    )}
                    <button className="px-4 py-2 border border-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already using our AI tools to accelerate growth
              improve efficiencyand drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateAIToolsShowcase2025;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
