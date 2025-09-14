'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateDigitalTransformationShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const content = [
    {
      id: 'ultimate-digital-transformation',
      title: 'AI 2025: The Ultimate Digital Transformation Revolution',
      description: 'Achieve 30,000% ROI through next-generation AI, autonomous systems, and revolutionary business intelligence',
      metrics: {
        roi: '30,000%',
        savings: '$500B+',
        efficiency: '5,000%',
        accuracy: '99.99%'
      },
      url: '/blog/ai-2025-ultimate-digital-transformation-revolution-ultimate-breakthrough',
      type: 'blog',
      category: 'ai-revolution',
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 Ultimate Digital Transformation Success',
      description: '$500B Annual Savings - 30,000% ROI Success Story',
      metrics: {
        roi: '30,000%',
        savings: '$500B',
        efficiency: '5,000%',
        satisfaction: '99.8%'
      },
      url: '/case-studies/fortune-500-ultimate-digital-transformation-30000-roi-success-story',
      type: 'case-study',
      category: 'success-story',
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'implementation-guide',
      title: 'Ultimate Digital Transformation Implementation Guide',
      description: 'Complete Roadmap to 30,000% ROI in 18 Months',
      metrics: {
        roi: '30,000%',
        timeline: '18 months',
        success: '99.7%',
        guide: '60 min read'
      },
      url: '/resources/ai-2025-ultimate-digital-transformation-implementation-guide',
      type: 'resource',
      category: 'implementation',
      readingTime: '60 min read',
      featured: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'ai-revolution', label: 'AI Revolution', count: content.filter(item => item.category === 'ai-revolution').length },
    { id: 'success-story', label: 'Success Stories', count: content.filter(item => item.category === 'success-story').length },
    { id: 'implementation', label: 'Implementation', count: content.filter(item => item.category === 'implementation').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? content 
    : content.filter(item => item.category === activeFilter);

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
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-4">
            🚀 ULTIMATE BREAKTHROUGH CONTENT
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ultimate Digital Transformation Revolution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Fortune 500 companies are achieving 30,000% ROI through AI-powered digital transformation
          </p>
        </div>

        {/* Success Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">30,000%</div>
            <div className="text-gray-600 font-medium">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$500B+</div>
            <div className="text-gray-600 font-medium">Annual Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">5,000%</div>
            <div className="text-gray-600 font-medium">Efficiency Gain</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">99.99%</div>
            <div className="text-gray-600 font-medium">Accuracy Rate</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {filter.label}
              <span className="ml-2 px-2 py-1 rounded-full text-xs bg-white/20">
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)} {item.type.replace('-', ' ').toUpperCase()}
                  </span>
                  {item.featured && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      ⭐ FEATURED
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{item.readingTime}</span>
                  <span className="capitalize">{item.category.replace('-', ' ')}</span>
                </div>

                <Link
                  href={item.url}
                  className="block w-full text-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Read {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve 30,000% ROI?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Get your personalized digital transformation roadmap and start your revolutionary journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Implementation Guide
              </Link>
              <Link
                href="/services"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateDigitalTransformationShowcase;