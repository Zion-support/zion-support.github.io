"use client";
'use client';

import React, { useState } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const UltimateBreakthroughContentShowcase100000ROI = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const breakthroughContent = [
    {
      id: 'ultimate-breakthrough-revolution',
      title: 'AI 2025: The Ultimate Breakthrough Revolution',
      subtitle: '100,000% ROI Guide - Complete Implementation',
      type: 'blog',
      category: 'revolution',
      metrics: {
        roi: '100,000%',
        savings: '$2.5T+',
        efficiency: '99.99%',
        timeline: '18 months'
      },
      description: 'The most significant technological advancement in human history, delivering unprecedented returns that exceed 100,000% for forward-thinking enterprises.',
      url: '/blog/ai-2025-ultimate-breakthrough-revolution-100000-roi',
      featured: true,
      readingTime: '45 min read',
      tags: ['AI Revolution', '100,000% ROI', 'Ultimate Breakthrough', 'Fortune 500', 'Business Transformation']
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 AI Breakthrough Success',
      subtitle: '$2.5 Trillion Annual Savings - 100,000% ROI',
      type: 'case-study',
      category: 'success',
      metrics: {
        roi: '100,000%',
        savings: '$2.5T',
        company: 'TechGlobal Industries',
        timeline: '18 months'
      },
      description: 'TechGlobal Industries achieved unprecedented success through AI 2025 Ultimate Breakthrough Revolution technologies, resulting in 100,000% ROI and $2.5 trillion in annual savings.',
      url: '/case-studies/fortune-500-ai-breakthrough-100000-roi-success-story',
      featured: true,
      readingTime: '30 min read',
      tags: ['Case Study', 'Fortune 500', '100,000% ROI', 'Success Story', 'TechGlobal Industries']
    },
    {
      id: 'implementation-guide',
      title: 'Ultimate Breakthrough Implementation Guide',
      subtitle: 'Complete Roadmap to 100,000% ROI',
      type: 'resource',
      category: 'implementation',
      metrics: {
        roi: '100,000%',
        guide: 'Complete',
        timeline: '18 months',
        success: '99.7%'
      },
      description: 'Comprehensive implementation guide providing a complete roadmap for achieving 100,000% ROI through the AI 2025 Ultimate Breakthrough Revolution.',
      url: '/resources/ai-2025-ultimate-breakthrough-implementation-guide-100000-roi',
      featured: true,
      readingTime: '60 min read',
      tags: ['Implementation Guide', '100,000% ROI', 'Complete Roadmap', 'Strategy', 'Framework']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: breakthroughContent.length },
    { id: 'revolution', label: 'Revolution', count: breakthroughContent.filter(item => item.category === 'revolution').length },
    { id: 'success', label: 'Success Stories', count: breakthroughContent.filter(item => item.category === 'success').length },
    { id: 'implementation', label: 'Implementation', count: breakthroughContent.filter(item => item.category === 'implementation').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? breakthroughContent 
    : breakthroughContent.filter(item => item.category === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📖';
      case 'case-study': return '🏆';
      case 'resource': return '📋';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-500';
      case 'case-study': return 'bg-green-500';
      case 'resource': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
            AI 2025 Ultimate Breakthrough Revolution
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Revolutionary Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI breakthrough content, featuring 100,000% ROI success stories, implementation guides, and revolutionary technologies.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                activeFilter === filter.id ? 'bg-white/20' : 'bg-gray-100'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Card Header */}
              <div className="relative p-6 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getTypeColor(item.type)}`}>
                    <span className="mr-2">{getTypeIcon(item.type)}</span>
                    {item.type === 'blog' ? 'Ultimate Guide' : 
                     item.type === 'case-study' ? 'Success Story' : 'Implementation Guide'}
                  </div>
                  {item.featured && (
                    <div className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-blue-200 text-sm font-semibold mb-3">
                  {item.subtitle}
                </p>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">{item.metrics.roi}</div>
                    <div className="text-xs text-yellow-700 font-semibold">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                    <div className="text-lg font-bold text-green-600">{item.metrics.savings}</div>
                    <div className="text-xs text-green-700 font-semibold">Annual Savings</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">{item.metrics.efficiency || item.metrics.guide || item.metrics.company}</div>
                    <div className="text-xs text-blue-700 font-semibold">
                      {item.metrics.efficiency ? 'Efficiency' : item.metrics.guide ? 'Guide Type' : 'Company'}
                    </div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                    <div className="text-lg font-bold text-purple-600">{item.metrics.timeline}</div>
                    <div className="text-xs text-purple-700 font-semibold">Timeline</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Reading Time */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="mr-2">⏱️</span>
                  {item.readingTime}
                </div>

                {/* Action Button */}
                <a
                  href={item.url}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group-hover:shadow-lg"
                >
                  <span className="mr-2">🚀</span>
                  Explore {item.type === 'blog' ? 'Guide' : item.type === 'case-study' ? 'Success Story' : 'Implementation Guide'}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Achieve 100,000% ROI?
            </h3>
            <p className="text-xl text-blue-200 mb-6 max-w-2xl mx-auto">
              Join the AI 2025 Ultimate Breakthrough Revolution and transform your business with the most advanced technologies available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
              >
                <span className="mr-2">💬</span>
                Get Expert Consultation
              </a>
              <a
                href="/resources"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-colors"
              >
                <span className="mr-2">📚</span>
                Explore All Resources
              </a>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">100,000%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">$2.5T+</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">99.7%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">18</div>
            <div className="text-gray-600">Months to ROI</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateBreakthroughContentShowcase100000ROI;