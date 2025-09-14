'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Award, BookOpen, Zap, TrendingUp, Clock, Users, Brain } from 'lucide-react';

const NeuralNetworksContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'neural-networks-breakthrough',
      title: 'AI 2025: Advanced Neural Networks Enterprise Breakthrough',
      description: 'Achieve 450% ROI with cutting-edge neural network architectures. Transform your enterprise with quantum-enhanced AI systems.',
      url: '/blog/ai-2025-advanced-neural-networks-enterprise-breakthrough',
      type: 'blog',
      category: 'technology',
      metrics: {
        roi: '450%',
        accuracy: '99.7%',
        savings: '$2.8B',
        speed: '340%'
      },
      icon: Brain,
      gradient: 'from-purple-600 to-indigo-600',
      readingTime: '15 min read',
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 Success: $2.8B Annual Savings with Neural Networks',
      description: 'Discover how a Fortune 500 company achieved 567% ROI and $2.8B in annual savings through advanced neural network implementation.',
      url: '/case-studies/ai-2025-advanced-neural-networks-fortune-500-success-story',
      type: 'case-study',
      category: 'success-story',
      metrics: {
        savings: '$2.8B',
        roi: '567%',
        efficiency: '340%',
        satisfaction: '99.2%'
      },
      icon: Award,
      gradient: 'from-green-600 to-emerald-600',
      readingTime: '12 min read',
      featured: true
    },
    {
      id: 'implementation-guide',
      title: 'Complete Implementation Guide: Advanced Neural Networks 2025',
      description: 'Master the complete roadmap to neural network success. From strategy to 450% ROI in 18 months.',
      url: '/resources/ai-2025-advanced-neural-networks-implementation-guide',
      type: 'resource',
      category: 'guide',
      metrics: {
        roi: '450%',
        timeline: '18 months',
        success: '98%',
        projects: '500+'
      },
      icon: BookOpen,
      gradient: 'from-orange-600 to-red-600',
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'edge-computing-revolution',
      title: 'AI 2025 Edge Computing Revolution: Enterprise Breakthrough',
      description: 'Achieve 340% faster processing with edge AI solutions. 99.9% uptime and $1.8B in cumulative savings.',
      url: '/blog/ai-2025-edge-computing-revolution-enterprise-breakthrough',
      type: 'blog',
      category: 'technology',
      metrics: {
        speed: '340%',
        uptime: '99.9%',
        savings: '$1.8B',
        efficiency: '67%'
      },
      icon: Zap,
      gradient: 'from-cyan-600 to-blue-600',
      readingTime: '14 min read',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    { id: 'technology', name: 'Technology', count: content.filter(item => item.category === 'technology').length },
    { id: 'success-story', name: 'Success Stories', count: content.filter(item => item.category === 'success-story').length },
    { id: 'guide', name: 'Implementation Guides', count: content.filter(item => item.category === 'guide').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  const featuredContent = content.filter(item => item.featured);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Brain className="h-4 w-4 mr-2" />
            NEW: Advanced Neural Networks 2025 Collection
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Transform Your Enterprise with Advanced Neural Networks
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge neural network technologies delivering 450% average ROI, 
            99.7% accuracy rates, and $2.8B in cumulative savings across Fortune 500 implementations.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">450%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">99.7%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$2.8B</div>
            <div className="text-gray-600">Cumulative Savings</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Content */}
        {activeCategory === 'all' && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Content</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredContent.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className={`bg-gradient-to-r ${item.gradient} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <item.icon className="h-8 w-8" />
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                          {item.type === 'blog' ? 'Blog Post' : item.type === 'case-study' ? 'Case Study' : 'Implementation Guide'}
                        </span>
                      </div>
                      <span className="text-sm text-white/80">{item.readingTime}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                    <p className="text-white/90 mb-4">{item.description}</p>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {Object.entries(item.metrics).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                          <div className="text-lg font-bold">{value}</div>
                          <div className="text-xs text-white/80 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <Link
                      href={item.url}
                      className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                    >
                      Read Full {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}
                      <TrendingUp className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className={`bg-gradient-to-r ${item.gradient} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <item.icon className="h-8 w-8" />
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    {item.type === 'blog' ? 'Blog' : item.type === 'case-study' ? 'Case Study' : 'Guide'}
                  </span>
                </div>
                <h4 className="text-lg font-bold mb-3 group-hover:text-white/90 transition-colors">
                  {item.title}
                </h4>
                <p className="text-white/90 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                {/* Key Metric */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-xl font-bold">
                    {item.metrics.roi || item.metrics.savings || item.metrics.speed}
                  </div>
                  <div className="text-xs text-white/80">
                    {item.metrics.roi ? 'ROI' : item.metrics.savings ? 'Savings' : 'Speed Improvement'}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                  <span className="text-sm text-gray-500 capitalize">{item.category}</span>
                </div>
                
                <Link
                  href={item.url}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors group-hover:underline"
                >
                  Read More
                  <TrendingUp className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Enterprise?</h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Join 89% of Fortune 500 companies already achieving breakthrough results with advanced neural networks. 
              Get your personalized implementation strategy today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Implementation Strategy
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuralNetworksContentShowcase2025;