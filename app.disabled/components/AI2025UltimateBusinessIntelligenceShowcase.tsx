'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AI2025UltimateBusinessIntelligenceShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const contentItems = [
    {
      id: 'ultimate-business-intelligence-revolution',
      type: 'blog',
      title: 'AI 2025: The Ultimate Business Intelligence Revolution - Ultimate Breakthrough Guide to 18,000% ROI',
      description: 'Transform your enterprise with next-generation AI-powered business intelligence systems that process, analyze, and act on data with superhuman speed and accuracy.',
      metrics: {
        roi: '18,000%',
        savings: '$89.2B+',
        speed: '2,400% faster',
        accuracy: '99.97%'
      },
      tags: ['AI Revolution', 'Business Intelligence', 'ROI', 'Fortune 500', 'Ultimate Breakthrough'],
      link: '/blog/ai-2025-ultimate-business-intelligence-revolution-ultimate-breakthrough',
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'fortune-500-success-story',
      type: 'case-study',
      title: 'Fortune 500 Ultimate Business Intelligence Success: $89.2B Annual Savings - 18,000% ROI Success Story',
      description: 'How a global manufacturing leader achieved unprecedented ROI through revolutionary AI-powered business intelligence systems in just 18 months.',
      metrics: {
        roi: '18,000%',
        savings: '$89.2B',
        timeline: '18 months',
        accuracy: '99.97%'
      },
      tags: ['Case Study', 'Fortune 500', 'Success Story', 'ROI', 'Manufacturing'],
      link: '/case-studies/fortune-500-ultimate-business-intelligence-18000-roi-success-story',
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'implementation-ultimate-guide',
      type: 'resource',
      title: 'AI 2025 Ultimate Business Intelligence Implementation Ultimate Guide: Complete Roadmap to 18,000% ROI',
      description: 'The definitive guide to implementing revolutionary AI-powered business intelligence systems with proven results and step-by-step implementation roadmap.',
      metrics: {
        roi: '18,000%',
        guide: 'Complete',
        timeline: '18 months',
        success: '99.7%'
      },
      tags: ['Implementation Guide', 'ROI', 'Strategy', 'Framework', 'Ultimate Guide'],
      link: '/resources/ai-2025-ultimate-business-intelligence-implementation-ultimate-guide',
      readingTime: '45 min read',
      featured: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeFilter);

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
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 AI 2025 ULTIMATE BREAKTHROUGH</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ultimate Business Intelligence Revolution
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Discover how Fortune 500 companies are achieving <span className="font-bold text-green-600">18,000% ROI</span> through revolutionary AI-powered business intelligence systems that transform decision-making capabilities.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">18,000%</div>
            <div className="text-gray-600 font-medium">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$89.2B+</div>
            <div className="text-gray-600 font-medium">Annual Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">2,400%</div>
            <div className="text-gray-600 font-medium">Faster Decisions</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">99.97%</div>
            <div className="text-gray-600 font-medium">Accuracy Rate</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
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
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    <span className="mr-2">{getTypeIcon(item.type)}</span>
                    {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Resource' : 'Blog Post'}
                  </div>
                  {item.featured && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      ⭐ Featured
                    </div>
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
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-600">{item.metrics.savings || item.metrics.guide}</div>
                    <div className="text-xs text-gray-600">{item.metrics.savings ? 'Savings' : 'Guide'}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Reading Time */}
                <div className="text-sm text-gray-500 mb-4">
                  📖 {item.readingTime}
                </div>
              </div>

              {/* CTA Section */}
              <div className="px-6 pb-6">
                <Link
                  href={item.link}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg text-center block"
                >
                  {item.type === 'case-study' ? 'Read Success Story' : 
                   item.type === 'resource' ? 'Get Implementation Guide' : 
                   'Discover the Revolution'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business Intelligence?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join Fortune 500 companies achieving 18,000% ROI with revolutionary AI-powered business intelligence systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
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

export default AI2025UltimateBusinessIntelligenceShowcase;