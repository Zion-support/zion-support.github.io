'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AdvancedNeuralArchitecturesShowcase2026: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'neural-architectures-breakthrough',
      type: 'blog',
      title: 'AI 2026: Advanced Neural Architectures Revolution - Ultimate Breakthrough Guide',
      description: 'Transform your enterprise with cutting-edge neural architectures delivering 2,800% ROI and unprecedented performance.',
      metrics: {
        roi: '2,800%',
        savings: '$4.2B+',
        accuracy: '99.97%',
        efficiency: '1,500%'
      },
      tags: ['Advanced Neural Architectures', 'AI Revolution', 'Enterprise AI', 'ROI', '2026'],
      link: '/blog/ai-2026-advanced-neural-architectures-revolution-ultimate-breakthrough',
      readingTime: '28 min read',
      featured: true
    },
    {
      id: 'fortune-500-success',
      type: 'case-study',
      title: 'Fortune 500 Advanced Neural Architectures Transformation: $4.2B Annual Savings',
      description: 'How a leading Fortune 500 manufacturing company achieved 2,800% ROI with advanced neural architectures in 18 months.',
      metrics: {
        roi: '2,800%',
        savings: '$4.2B',
        timeline: '18 months',
        accuracy: '99.97%'
      },
      tags: ['Fortune 500', 'Case Study', 'Neural Architectures', 'ROI', 'Success Story'],
      link: '/case-studies/fortune-500-advanced-neural-architectures-transformation-2800-roi-success-story',
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'implementation-guide',
      type: 'resource',
      title: 'Advanced Neural Architectures Implementation Master Guide 2026',
      description: 'Complete roadmap to implementing advanced neural architectures with proven methodologies delivering 2,800% ROI.',
      metrics: {
        roi: '2,800%',
        timeline: '18 months',
        success: '99.7%',
        projects: '1,000+'
      },
      tags: ['Implementation Guide', 'Neural Architectures', 'ROI', 'Strategy', 'Framework'],
      link: '/resources/advanced-neural-architectures-implementation-master-guide-2026',
      readingTime: '45 min read',
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    { id: 'blog', name: 'Blog Posts', count: content.filter(item => item.type === 'blog').length },
    { id: 'case-study', name: 'Case Studies', count: content.filter(item => item.type === 'case-study').length },
    { id: 'resource', name: 'Resources', count: content.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.type === activeCategory);

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
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'resource':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-4">
            🚀 NEW 2026 CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Advanced Neural Architectures Revolution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the cutting-edge neural architectures that are delivering 2,800% ROI for Fortune 500 companies
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}>
                      {item.type.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  {item.featured && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                      FEATURED
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="p-6 bg-gray-50">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{item.metrics.roi}</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{item.metrics.savings}</div>
                    <div className="text-sm text-gray-600">Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {item.metrics.accuracy || item.metrics.timeline}
                    </div>
                    <div className="text-sm text-gray-600">
                      {item.metrics.accuracy ? 'Accuracy' : 'Timeline'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">
                      {item.metrics.efficiency || item.metrics.success}
                    </div>
                    <div className="text-sm text-gray-600">
                      {item.metrics.efficiency ? 'Efficiency' : 'Success'}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Reading time and CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                  <Link
                    href={item.link}
                    className="inline-flex items-center px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200"
                  >
                    Read More
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Enterprise with Neural Architectures?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join Fortune 500 companies achieving 2,800% ROI with advanced neural architectures
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200"
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

export default AdvancedNeuralArchitecturesShowcase2026;