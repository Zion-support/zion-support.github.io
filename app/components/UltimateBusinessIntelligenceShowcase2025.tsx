'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateBusinessIntelligenceShowcase2025 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const content = [
    {
      id: 'ultimate-business-intelligence-revolution',
      title: 'AI 2025: The Ultimate Business Intelligence Revolution - Ultimate Breakthrough Guide to 30,000% ROI',
      description: 'Transform your enterprise with next-generation AI-powered business intelligence that delivers unprecedented insights and competitive advantage.',
      url: '/blog/ai-2025-ultimate-business-intelligence-revolution-ultimate-breakthrough',
      type: 'Blog Post',
      category: 'blog',
      metrics: {
        roi: '30,000%',
        savings: '$750B+',
        accuracy: '99.99%',
        speed: '5,000% faster'
      },
      readingTime: '35 min read',
      featured: true,
      tags: ['AI Revolution', 'Business Intelligence', 'ROI', 'Fortune 500', '30,000% ROI']
    },
    {
      id: 'fortune-500-business-intelligence-success',
      title: 'Fortune 500 Ultimate Business Intelligence Success: $750B Annual Savings - 30,000% ROI Success Story',
      description: 'How a $15.2B manufacturing giant achieved unprecedented business intelligence transformation with AI-powered analytics and decision-making systems.',
      url: '/case-studies/fortune-500-ultimate-business-intelligence-30000-roi-success-story',
      type: 'Case Study',
      category: 'case-study',
      metrics: {
        roi: '30,000%',
        savings: '$750B',
        company: '$15.2B',
        timeline: '18 months'
      },
      readingTime: '25 min read',
      featured: true,
      tags: ['Fortune 500', 'Success Story', '30,000% ROI', 'Manufacturing', 'Case Study']
    },
    {
      id: 'business-intelligence-implementation-guide',
      title: 'AI 2025 Ultimate Business Intelligence Implementation Guide: Complete Roadmap to 30,000% ROI',
      description: 'The definitive guide to implementing revolutionary AI-powered business intelligence that delivers unprecedented competitive advantage and financial returns.',
      url: '/resources/ai-2025-ultimate-business-intelligence-implementation-guide',
      type: 'Implementation Guide',
      category: 'resource',
      metrics: {
        roi: '30,000%',
        success: '99.8%',
        timeline: '18 months',
        guide: '60 min read'
      },
      readingTime: '60 min read',
      featured: true,
      tags: ['Implementation Guide', 'ROI', 'Strategy', 'Framework', '30,000% ROI']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'blog', label: 'Blog Posts', count: content.filter(item => item.category === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: content.filter(item => item.category === 'case-study').length },
    { id: 'resource', label: 'Resources', count: content.filter(item => item.category === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? content 
    : content.filter(item => item.category === activeFilter);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            🚀 ULTIMATE BREAKTHROUGH
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI 2025: Ultimate Business Intelligence Revolution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the revolutionary AI-powered business intelligence that's delivering 
            <span className="font-bold text-purple-600"> 30,000% ROI</span> and 
            <span className="font-bold text-green-600"> $750B+ in annual savings</span> across Fortune 500 companies.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600">30,000%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600">$750B+</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600">99.99%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600">5,000%</div>
            <div className="text-gray-600">Faster Decisions</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Content Type Badge */}
              <div className="p-6 pb-4">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.category === 'blog' ? 'bg-blue-100 text-blue-800' :
                    item.category === 'case-study' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {item.type}
                  </span>
                  {item.featured && (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </span>
                  )}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">{item.metrics.roi}</div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{item.metrics.savings}</div>
                      <div className="text-xs text-gray-500">Savings</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Link
                      href={item.url}
                      className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                      Read {item.type}
                    </Link>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{item.readingTime}</span>
                      <span>•</span>
                      <span>Ultimate Breakthrough</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Achieve 30,000% ROI?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join Fortune 500 companies transforming their business intelligence with AI-powered analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Consultation
            </Link>
            <Link
              href="/resources"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Download Guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateBusinessIntelligenceShowcase2025;