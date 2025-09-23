'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const QuantumAIContentShowcase2025 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const quantumContent = [
    {
      id: 'quantum-computing-revolution',
      title: 'AI 2025: The Quantum Computing Revolution - Enterprise Breakthrough Guide',
      description: 'Discover how quantum computing is revolutionizing enterprise AI with 1000% performance improvements and $50B+ market opportunities.',
      url: '/blog/ai-2025-quantum-computing-revolution-enterprise-breakthrough',
      type: 'blog',
      category: 'technology',
      metrics: {
        performance: '1000%',
        accuracy: '99.9%',
        market: '$50B+',
        roi: '1,200%'
      },
      readingTime: '18 min read',
      featured: true,
      tags: ['Quantum Computing', 'AI', 'Enterprise', 'Breakthrough', 'Performance']
    },
    {
      id: 'fortune-500-quantum-success',
      title: 'Fortune 500 Quantum AI Transformation 2025: $2.1B Company Achieves 1,200% ROI',
      description: 'How a Fortune 500 manufacturing giant transformed their operations with quantum AI, achieving unprecedented efficiency and $180M in annual savings.',
      url: '/case-studies/fortune-500-quantum-ai-transformation-2025-ultimate-success',
      type: 'case-study',
      category: 'success-story',
      metrics: {
        roi: '1,200%',
        savings: '$180M',
        efficiency: '78%',
        accuracy: '99.9%'
      },
      readingTime: '15 min read',
      featured: true,
      tags: ['Case Study', 'Fortune 500', 'Quantum AI', 'Manufacturing', 'ROI']
    },
    {
      id: 'quantum-implementation-guide',
      title: 'Quantum AI Implementation Master Guide 2025: From Strategy to 1,200% ROI',
      description: 'Complete guide to implementing quantum AI in your enterprise, with proven strategies, technology stack, and ROI optimization techniques.',
      url: '/resources/quantum-ai-implementation-master-guide-2025',
      type: 'resource',
      category: 'implementation',
      metrics: {
        roi: '1,200%',
        performance: '1000%',
        accuracy: '99.9%',
        timeline: '18 months'
      },
      readingTime: '25 min read',
      featured: true,
      tags: ['Implementation Guide', 'Quantum AI', 'Strategy', 'ROI', 'Enterprise']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: quantumContent.length },
    { id: 'blog', label: 'Blog Posts', count: quantumContent.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: quantumContent.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: quantumContent.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? quantumContent 
    : quantumContent.filter(item => item.type === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-4">
            <span className="text-3xl">⚛️</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Quantum AI Revolution 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover breakthrough quantum AI solutions delivering 1,200% ROI and 1000% performance improvements
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label}
              <span className="ml-2 text-sm opacity-75">({filter.count})</span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Content Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(content.type)}`}>
                    {getTypeIcon(content.type)} {content.type === 'case-study' ? 'Case Study' : content.type === 'blog' ? 'Blog Post' : 'Resource'}
                  </span>
                  <span className="text-sm text-gray-500">{content.readingTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {content.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(content.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {content.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {content.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{content.tags.length - 3} more
                    </span>
                  )}
                </div>

                <Link
                  href={content.url}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 group"
                >
                  Read Full Article
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success Statistics */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Quantum AI Success Statistics</h3>
            <p className="text-purple-100 text-lg">
              Join industry leaders achieving breakthrough performance with quantum AI
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1,200%</div>
              <div className="text-purple-200 text-sm">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1000%</div>
              <div className="text-purple-200 text-sm">Performance Boost</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-purple-200 text-sm">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$50B+</div>
              <div className="text-purple-200 text-sm">Market Opportunity</div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Start Your Quantum AI Journey
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumAIContentShowcase2025;