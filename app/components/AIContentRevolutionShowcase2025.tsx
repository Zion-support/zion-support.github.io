'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AIContentRevolutionShowcase2025 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const contentItems = [
    {
      id: 'ai-content-revolution-ultimate-breakthrough',
      title: 'AI 2025: The Ultimate Content Revolution - 25,000% ROI',
      description: 'Transform your business with revolutionary AI content strategies that deliver unprecedented results',
      type: 'blog',
      category: 'ai-revolution',
      url: '/blog/ai-2025-ultimate-content-revolution-ultimate-breakthrough',
      metrics: {
        roi: '25,000%',
        savings: '$500B+',
        accuracy: '99.9%',
        speed: '1,200%'
      },
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'fortune-500-ai-content-revolution-success',
      title: 'Fortune 500 AI Content Success: $500B Annual Savings',
      description: 'How a global manufacturing leader achieved 25,000% ROI with AI content revolution',
      type: 'case-study',
      category: 'success-story',
      url: '/case-studies/fortune-500-ai-content-revolution-25000-roi-success-story',
      metrics: {
        roi: '25,000%',
        savings: '$500B',
        timeline: '12 months',
        satisfaction: '99.9%'
      },
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'ai-content-revolution-implementation-guide',
      title: 'AI Content Revolution Implementation Guide: Complete Roadmap',
      description: 'The definitive guide to transforming content operations with revolutionary AI technologies',
      type: 'resource',
      category: 'implementation',
      url: '/resources/ai-content-revolution-implementation-guide-2025',
      metrics: {
        roi: '25,000%',
        timeline: '12 months',
        success: '99.7%',
        guide: '35 min read'
      },
      readingTime: '35 min read',
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'ai-revolution', label: 'AI Revolution', count: contentItems.filter(item => item.category === 'ai-revolution').length },
    { id: 'success-story', label: 'Success Stories', count: contentItems.filter(item => item.category === 'success-story').length },
    { id: 'implementation', label: 'Implementation', count: contentItems.filter(item => item.category === 'implementation').length }
  ];

  const filteredItems = activeFilter === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'resource':
        return '📚';
      default:
        return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'resource':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium text-purple-800">🚀 AI CONTENT REVOLUTION 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content That Delivers 25,000% ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the breakthrough strategies, implementation frameworks, and success stories that are transforming content operations across Fortune 500 companies.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">25,000%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$500B+</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
            <div className="text-gray-600">Content Accuracy</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">1,200%</div>
            <div className="text-gray-600">Production Speed</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {item.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-sm font-medium">
                  ⭐ Featured Content
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)} {item.type === 'case-study' ? 'Case Study' : item.type === 'blog' ? 'Blog' : 'Resource'}
                  </span>
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-500">Savings</div>
                  </div>
                </div>

                <Link
                  href={item.url}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors"
                >
                  Read {item.type === 'case-study' ? 'Case Study' : item.type === 'blog' ? 'Article' : 'Guide'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Revolutionize Your Content Operations?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join Fortune 500 companies achieving 25,000% ROI with our AI Content Revolution framework
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIContentRevolutionShowcase2025;