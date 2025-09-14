'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AI2025UltimateInnovationShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'ai-innovation-breakthrough',
      title: 'AI 2025: The Ultimate Innovation Breakthrough',
      description: 'Complete Guide to 5,000% ROI Through Revolutionary AI Technologies',
      metrics: {
        roi: '5,000%',
        savings: '$12.8B+',
        efficiency: '2,400%',
        accuracy: '99.7%'
      },
      url: '/blog/ai-2025-ultimate-innovation-breakthrough-ultimate-guide',
      type: 'blog',
      category: 'innovation',
      readingTime: '30 min read',
      featured: true,
      tags: ['AI Innovation', 'ROI', 'Breakthrough', 'Revolutionary']
    },
    {
      id: 'fortune-500-innovation-success',
      title: 'Fortune 500 AI Innovation Success Story',
      description: '$12.8B Annual Savings with 5,000% ROI Achievement',
      metrics: {
        roi: '5,000%',
        savings: '$12.8B',
        success: '99.7%',
        timeline: '18 months'
      },
      url: '/case-studies/fortune-500-ai-innovation-5000-roi-success-story',
      type: 'case-study',
      category: 'success',
      readingTime: '20 min read',
      featured: true,
      tags: ['Fortune 500', 'Success Story', 'ROI', 'Manufacturing']
    },
    {
      id: 'ai-innovation-implementation-guide',
      title: 'AI Innovation Implementation Ultimate Guide',
      description: 'Complete Roadmap to 5,000% ROI in 18 Months',
      metrics: {
        roi: '5,000%',
        timeline: '18 months',
        success: '99.7%',
        guide: '45 min read'
      },
      url: '/resources/ai-innovation-implementation-ultimate-guide-2025',
      type: 'resource',
      category: 'implementation',
      readingTime: '45 min read',
      featured: true,
      tags: ['Implementation', 'Guide', 'ROI', 'Strategy']
    },
    {
      id: 'ai-2025-advanced-neural-architectures',
      title: 'AI 2025: Advanced Neural Architectures Revolution',
      description: '2,800% ROI Through Next-Generation Intelligence',
      metrics: {
        roi: '2,800%',
        savings: '$4.2B+',
        accuracy: '99.7%',
        timeline: '8 months'
      },
      url: '/blog/ai-2025-advanced-neural-architectures-revolution',
      type: 'blog',
      category: 'innovation',
      readingTime: '25 min read',
      featured: false,
      tags: ['Neural Networks', 'AI Architecture', 'ROI', 'Intelligence']
    },
    {
      id: 'quantum-ai-business-revolution',
      title: 'AI 2025: Quantum AI Business Revolution',
      description: '$100B Market Transformation with 400-600% ROI',
      metrics: {
        roi: '400-600%',
        market: '$100B',
        speed: '1,200%',
        accuracy: '99.97%'
      },
      url: '/blog/ai-2025-quantum-ai-business-revolution-ultimate-guide',
      type: 'blog',
      category: 'innovation',
      readingTime: '22 min read',
      featured: false,
      tags: ['Quantum AI', 'Business Revolution', 'ROI', 'Quantum Computing']
    },
    {
      id: 'synthetic-intelligence-revolution',
      title: 'AI 2025: Synthetic Intelligence Revolution',
      description: 'Ultimate Breakthrough Guide to 2,500% ROI',
      metrics: {
        roi: '2,500%',
        savings: '$8.2B+',
        accuracy: '99.7%',
        efficiency: '1,800%'
      },
      url: '/blog/ai-2025-synthetic-intelligence-revolution-ultimate-breakthrough',
      type: 'blog',
      category: 'innovation',
      readingTime: '30 min read',
      featured: false,
      tags: ['Synthetic Intelligence', 'AI Revolution', 'ROI', 'Breakthrough']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'innovation', label: 'Innovation', count: content.filter(item => item.category === 'innovation').length },
    { id: 'success', label: 'Success Stories', count: content.filter(item => item.category === 'success').length },
    { id: 'implementation', label: 'Implementation', count: content.filter(item => item.category === 'implementation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

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
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4">
            🚀 AI INNOVATION 2025
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ultimate Innovation Breakthrough Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the revolutionary AI technologies delivering 5,000% ROI and transforming enterprises worldwide
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-700 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  FEATURED
                </div>
              )}

              <div className="p-6">
                {/* Type and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                      {item.type.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {item.readingTime}
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
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

                {/* CTA Button */}
                <Link
                  href={item.url}
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  {item.type === 'blog' ? 'Read Article' : item.type === 'case-study' ? 'View Case Study' : 'Download Guide'}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics Summary */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Proven Results Across All Implementations
            </h3>
            <p className="text-xl text-purple-100">
              Real-world success stories with verified metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5,000%</div>
              <div className="text-purple-200">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$12.8B+</div>
              <div className="text-purple-200">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.7%</div>
              <div className="text-purple-200">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">18</div>
              <div className="text-purple-200">Months to ROI</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Achieve 5,000% ROI with AI Innovation?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Get personalized consultation and implementation support from our AI innovation experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Schedule Consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-all duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025UltimateInnovationShowcase;