'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const NewContent2025UltimateShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'ultimate-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework',
      type: 'resource',
      category: 'framework',
      description: 'The definitive guide to AI implementation success. Complete roadmap to 1,000%+ ROI with proven strategies and methodologies.',
      metrics: {
        roi: '1,000%+',
        successRate: '94%',
        timeline: '18 months',
        companies: '500+'
      },
      link: '/resources/ai-2025-implementation-ultimate-success-framework',
      featured: true,
      readingTime: '25 min read'
    },
    {
      id: 'fortune-500-case-study',
      title: 'Fortune 500 AI Transformation: 1,200% ROI Success Story',
      type: 'case-study',
      category: 'case-study',
      description: 'Discover how a $2.8B company achieved unprecedented 1,200% ROI through comprehensive AI transformation in just 12 months.',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '12 months',
        efficiency: '340%'
      },
      link: '/case-studies/fortune-500-ai-transformation-ultimate-success-story',
      featured: true,
      readingTime: '12 min read'
    },
    {
      id: 'enterprise-transformation-guide',
      title: 'AI 2025: The Ultimate Enterprise AI Transformation Guide',
      type: 'blog',
      category: 'guide',
      description: 'Complete roadmap for enterprise AI transformation. Learn proven strategies, implementation frameworks, and real-world success stories.',
      metrics: {
        roi: '500%+',
        savings: '$2.8B',
        timeline: '12-18 months',
        satisfaction: '98%'
      },
      link: '/blog/ai-2025-enterprise-ai-transformation-ultimate-guide',
      featured: true,
      readingTime: '18 min read'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    { id: 'framework', name: 'Frameworks', count: content.filter(item => item.category === 'framework').length },
    { id: 'case-study', name: 'Case Studies', count: content.filter(item => item.category === 'case-study').length },
    { id: 'guide', name: 'Guides', count: content.filter(item => item.category === 'guide').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  const getTypeColor = (type) => {
    switch (type) {
      case 'resource': return 'bg-purple-100 text-purple-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'blog': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'resource': return '📚';
      case 'case-study': return '📊';
      case 'blog': return '📝';
      default: return '📄';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ultimate AI Success Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive collection of AI transformation content, featuring proven frameworks, 
            real-world success stories, and implementation guides that deliver 1,000%+ ROI.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">1,200%</div>
            <div className="text-gray-600">Maximum ROI Achieved</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$2.8B</div>
            <div className="text-gray-600">Total Savings Generated</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Companies Transformed</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">94%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {item.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-sm font-medium text-center">
                  ⭐ FEATURED CONTENT
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)} {item.type.replace('-', ' ').toUpperCase()}
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
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>

                <Link
                  href={item.link}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Read Now →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your AI Transformation Journey?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join 500+ companies that have achieved 340%+ average ROI through strategic AI implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateShowcase;