'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateDigitalTransformationShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const content = [
    {
      id: 'ultimate-digital-transformation-revolution',
      title: 'AI 2025: The Ultimate Digital Transformation Revolution',
      subtitle: 'Complete Guide to 30,000% ROI',
      description: 'Discover how Fortune 500 companies are achieving unprecedented ROI through strategic AI implementation. This comprehensive guide explores the strategies, technologies, and methodologies that enable organizations to achieve extraordinary results.',
      type: 'blog',
      readingTime: '40 min read',
      metrics: {
        roi: '30,000%',
        savings: '$2.8B',
        efficiency: '4,200%',
        success: '99.7%'
      },
      link: '/blog/ai-2025-ultimate-digital-transformation-revolution',
      featured: true,
      tags: ['AI Revolution', 'Digital Transformation', 'ROI', 'Fortune 500', 'Strategy']
    },
    {
      id: 'fortune-500-digital-transformation-success',
      title: 'Fortune 500 Digital Transformation Success Story',
      subtitle: '$2.8B Annual Savings - 30,000% ROI',
      description: 'Learn how a Fortune 500 manufacturing company transformed their entire operations using advanced AI technologies, resulting in $2.8 billion in annual savings and a complete reimagining of their business model.',
      type: 'case-study',
      readingTime: '25 min read',
      metrics: {
        roi: '30,000%',
        savings: '$2.8B',
        revenue: '45%',
        satisfaction: '99.7%'
      },
      link: '/case-studies/fortune-500-digital-transformation-30000-roi-success-story',
      featured: true,
      tags: ['Case Study', 'Fortune 500', 'Manufacturing', 'Success Story', 'ROI']
    },
    {
      id: 'ai-digital-transformation-implementation-guide',
      title: 'AI Digital Transformation Implementation Guide',
      subtitle: 'Complete Roadmap to 30,000% ROI',
      description: 'Step-by-step guide to implementing AI-driven digital transformation that delivers extraordinary results. Based on analysis of 500+ successful transformations, this guide reveals the strategies and methodologies that enable success.',
      type: 'resource',
      readingTime: '60 min read',
      metrics: {
        roi: '30,000%',
        success: '99.7%',
        timeline: '12-18 months',
        cost: '95% reduction'
      },
      link: '/resources/ai-digital-transformation-implementation-ultimate-guide-2025',
      featured: true,
      tags: ['Implementation Guide', 'Strategy', 'ROI', 'Best Practices', 'Framework']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'blog', label: 'Blog Posts', count: content.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: content.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: content.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? content 
    : content.filter(item => item.type === activeFilter);

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
        return 'from-blue-500 to-blue-600';
      case 'case-study':
        return 'from-green-500 to-green-600';
      case 'resource':
        return 'from-purple-500 to-purple-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            🚀 ULTIMATE DIGITAL TRANSFORMATION CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI digital transformation content, featuring proven strategies that deliver extraordinary ROI.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">30,000%</div>
            <div className="text-gray-600 font-medium">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$2.8B</div>
            <div className="text-gray-600 font-medium">Annual Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">99.7%</div>
            <div className="text-gray-600 font-medium">Success Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">4,200%</div>
            <div className="text-gray-600 font-medium">Efficiency Gains</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-105 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${getTypeColor(item.type)} p-6 text-white`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className="text-sm font-bold uppercase tracking-wide">
                      {item.type.replace('-', ' ')}
                    </span>
                  </div>
                  {item.featured && (
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90">{item.subtitle}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                
                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-500">Savings</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Reading Time */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">⏱️ {item.readingTime}</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-green-600 font-medium">Published</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={item.link}
                  className={`w-full bg-gradient-to-r ${getTypeColor(item.type)} text-white font-bold py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center block`}
                >
                  {item.type === 'blog' && 'Read Article'}
                  {item.type === 'case-study' && 'View Case Study'}
                  {item.type === 'resource' && 'Get Guide'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of companies achieving extraordinary ROI through AI-driven digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Contact Our Experts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateDigitalTransformationShowcase;