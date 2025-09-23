'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AI2025AnalyticsContentShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const contentPieces = [
    {
      id: 'ai-analytics-revolution',
      title: 'AI 2025: The Advanced Analytics Revolution - Ultimate Enterprise Guide',
      description: 'Discover how Fortune 500 companies are achieving 600% ROI with next-generation AI analytics. Complete implementation guide with real success stories.',
      url: '/blog/ai-2025-advanced-analytics-revolution-ultimate-guide',
      type: 'blog',
      category: 'AI Analytics',
      metrics: {
        roi: '600%',
        savings: '$2.8B',
        accuracy: '99.7%',
        speed: '340%'
      },
      readTime: '18 min read',
      featured: true,
      isNew: true
    },
    {
      id: 'fortune-500-analytics-case',
      title: 'Fortune 500 AI Analytics Transformation: $2.8B Annual Savings with 600% ROI',
      description: 'How a $200B Fortune 500 company achieved 600% ROI and $2.8B annual savings through advanced AI analytics implementation.',
      url: '/case-studies/fortune-500-ai-analytics-transformation-600-percent-roi',
      type: 'case-study',
      category: 'Success Stories',
      metrics: {
        roi: '600%',
        savings: '$2.8B',
        uptime: '99.7%',
        adoption: '95%'
      },
      readTime: '15 min read',
      featured: true,
      isNew: true
    },
    {
      id: 'ai-analytics-implementation-guide',
      title: 'AI Analytics Implementation Master Guide 2025: From Strategy to 600% ROI',
      description: 'Complete step-by-step guide to implementing AI analytics in your organization. Achieve 600% ROI with proven strategies and frameworks.',
      url: '/resources/ai-analytics-implementation-master-guide-2025',
      type: 'resource',
      category: 'Implementation',
      metrics: {
        roi: '600%',
        success: '94%',
        timeline: '18 months',
        adoption: '95%'
      },
      readTime: '25 min read',
      featured: true,
      isNew: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: contentPieces.length },
    { id: 'blog', label: 'Blog Posts', count: contentPieces.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentPieces.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentPieces.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? contentPieces 
    : contentPieces.filter(item => item.type === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📖';
      case 'case-study':
        return '📊';
      case 'resource':
        return '📋';
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
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-bold">🚀 NEW AI ANALYTICS CONTENT COLLECTION</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Analytics Revolution 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Discover how Fortune 500 companies are achieving <span className="font-bold text-blue-600">600% ROI</span> and <span className="font-bold text-green-600">$2.8B annual savings</span> with advanced AI analytics. Complete guides, real success stories, and implementation frameworks.
          </p>
          
          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-blue-600">600%</div>
              <div className="text-sm text-gray-600">Average ROI</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-green-600">$2.8B</div>
              <div className="text-sm text-gray-600">Annual Savings</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-purple-600">99.7%</div>
              <div className="text-sm text-gray-600">Data Accuracy</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-orange-600">340%</div>
              <div className="text-sm text-gray-600">Faster Decisions</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content, index) => (
            <div
              key={content.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(content.type)}`}>
                      {getTypeIcon(content.type)} {content.category}
                    </span>
                    {content.isNew && (
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                  {content.featured && (
                    <span className="text-yellow-500">⭐</span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {content.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Object.entries(content.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="text-center bg-gray-50 rounded-lg p-2">
                      <div className="text-lg font-bold text-blue-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{content.readTime}</span>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <Link
                    href={content.url}
                    className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Read Full {content.type === 'blog' ? 'Article' : content.type === 'case-study' ? 'Case Study' : 'Guide'}
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-full border-2 border-blue-600 text-blue-600 text-center px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Get Consultation
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Achieve 600% ROI with AI Analytics?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join Fortune 500 companies already transforming their business with AI analytics. 
              Get your free consultation and implementation roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/tools/ai-analytics-roi-calculator"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Calculate Your ROI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025AnalyticsContentShowcase;