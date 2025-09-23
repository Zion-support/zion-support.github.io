'use client';

import React, { useState } from 'react';
import { ChevronRightIcon, ClockIcon, ChartBarIcon, CurrencyDollarIcon, StarIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const UltimateTransformationContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'enterprise-ai-transformation-guide',
      type: 'blog',
      title: 'AI 2025: The Enterprise AI Transformation Ultimate Success Guide',
      subtitle: '600% ROI in 8 Months - Complete Implementation Roadmap',
      description: 'Transform your enterprise with cutting-edge AI solutions that deliver measurable results and sustainable competitive advantage.',
      metrics: {
        roi: '600%',
        timeline: '8 months',
        savings: '$2.8B',
        success: '94%'
      },
      tags: ['AI Transformation', 'Enterprise', 'ROI', 'Implementation Guide'],
      readingTime: '18 min read',
      href: '/blog/ai-2025-enterprise-ai-transformation-ultimate-success-guide',
      featured: true
    },
    {
      id: 'fortune-500-case-study',
      type: 'case-study',
      title: 'Fortune 500 AI Transformation Success Story',
      subtitle: '$2.8B Annual Savings with 600% ROI',
      description: 'How a global manufacturing giant achieved unprecedented results through comprehensive AI transformation.',
      metrics: {
        roi: '600%',
        savings: '$2.8B',
        efficiency: '156%',
        quality: '99.7%'
      },
      tags: ['Case Study', 'Fortune 500', 'Manufacturing', 'Success Story'],
      readingTime: '12 min read',
      href: '/case-studies/fortune-500-ai-transformation-600-roi-success',
      featured: true
    },
    {
      id: 'implementation-guide',
      type: 'resource',
      title: 'AI Transformation Ultimate Implementation Guide 2025',
      subtitle: 'From Strategy to 600% ROI - Complete Roadmap',
      description: 'The complete roadmap for enterprise AI transformation success with proven methodologies and actionable strategies.',
      metrics: {
        roi: '600%',
        payback: '3.2 months',
        success: '94%',
        projects: '500+'
      },
      tags: ['Implementation Guide', 'Strategy', 'ROI', 'Best Practices'],
      readingTime: '25 min read',
      href: '/resources/ai-transformation-ultimate-implementation-guide-2025',
      featured: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Guides', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <ChartBarIcon className="w-5 h-5" />;
      case 'case-study':
        return <StarIcon className="w-5 h-5" />;
      case 'resource':
        return <CurrencyDollarIcon className="w-5 h-5" />;
      default:
        return <ChartBarIcon className="w-5 h-5" />;
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
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-4">
            <StarIcon className="w-5 h-5 mr-2" />
            <span className="font-semibold">NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ultimate AI Transformation Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive collection of AI transformation guides, case studies, and resources designed to help you achieve 600% ROI in 8 months.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="capitalize">{item.type.replace('-', ' ')}</span>
                  </div>
                  {item.featured && (
                    <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                      FEATURED
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-purple-600 font-semibold mb-3">
                  {item.subtitle}
                </p>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-3">
                      <div className="text-lg font-bold text-gray-900">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Reading Time */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  {item.readingTime}
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <a
                  href={item.href}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors group"
                >
                  Read {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Guide' : 'Article'}
                  <ChevronRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics Summary */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Proven Results Across 500+ Implementations
            </h3>
            <p className="text-purple-100 text-lg">
              Our content is based on real-world implementations that have delivered unprecedented results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">600%</div>
              <div className="text-purple-100">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300 mb-2">$2.8B</div>
              <div className="text-purple-100">Total Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">94%</div>
              <div className="text-purple-100">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2">3.2</div>
              <div className="text-purple-100">Months Payback</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Enterprise with AI?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get personalized consultation and implementation support to achieve 600% ROI in 8 months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-lg"
            >
              Get Free Consultation
              <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateTransformationContentShowcase2025;