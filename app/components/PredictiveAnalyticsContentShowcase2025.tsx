'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const PredictiveAnalyticsContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'predictive-analytics-revolution',
      title: 'AI 2025: The Predictive Analytics Revolution - Ultimate Guide to 750% ROI',
      description: 'Discover how Fortune 500 companies are achieving 750% ROI with AI-powered predictive analytics. Complete implementation guide with real-world case studies and proven strategies.',
      url: '/blog/ai-2025-predictive-analytics-revolution-ultimate-guide',
      type: 'Blog Post',
      category: 'blog',
      metrics: {
        roi: '750%',
        savings: '$4.2M',
        accuracy: '94%',
        success: '89%'
      },
      readingTime: '22 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'fortune-500-predictive-success',
      title: 'Fortune 500 Predictive Analytics Success: $4.2B Company Achieves 750% ROI',
      description: 'Discover how a Fortune 500 manufacturing company achieved 750% ROI and $67M annual savings through AI-powered predictive analytics implementation.',
      url: '/case-studies/ai-2025-predictive-analytics-fortune-500-success-750-roi',
      type: 'Case Study',
      category: 'case-study',
      metrics: {
        roi: '750%',
        savings: '$67M',
        accuracy: '97%',
        efficiency: '156%'
      },
      readingTime: '15 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'predictive-analytics-implementation-guide',
      title: 'AI 2025 Predictive Analytics Implementation Master Guide: From Strategy to 750% ROI',
      description: 'Complete implementation guide for AI-powered predictive analytics. Achieve 750% ROI with proven strategies, frameworks, and best practices from 500+ successful implementations.',
      url: '/resources/ai-2025-predictive-analytics-implementation-master-guide',
      type: 'Resource',
      category: 'resource',
      metrics: {
        roi: '750%',
        success: '89%',
        payback: '4.2 months',
        implementations: '500+'
      },
      readingTime: '28 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'edge-computing-revolution',
      title: 'AI 2025: The Edge Computing Revolution - Ultimate Guide to 450% ROI',
      description: 'Discover how edge computing is transforming business operations with 450% ROI, 67% latency reduction, and 89% cost savings. Complete implementation guide with real-world case studies.',
      url: '/blog/ai-2025-edge-computing-revolution-ultimate-guide',
      type: 'Blog Post',
      category: 'blog',
      metrics: {
        roi: '450%',
        latency: '67%',
        savings: '$2.3M',
        uptime: '99.7%'
      },
      readingTime: '18 min read',
      isNew: true,
      featured: false
    },
    {
      id: 'autonomous-systems-revolution',
      title: 'AI 2025 Autonomous Systems Revolution: $1.8B Company Achieves 900% ROI',
      description: 'Discover how a Fortune 500 company achieved 900% ROI and $750M savings through AI-powered autonomous systems implementation.',
      url: '/case-studies/ai-2025-autonomous-systems-revolution-success-story',
      type: 'Case Study',
      category: 'case-study',
      metrics: {
        roi: '900%',
        savings: '$750M',
        automation: '95%',
        efficiency: '156%'
      },
      readingTime: '16 min read',
      isNew: true,
      featured: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'blog', label: 'Blog Posts', count: content.filter(item => item.category === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: content.filter(item => item.category === 'case-study').length },
    { id: 'resource', label: 'Resources', count: content.filter(item => item.category === 'resource').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  const featuredContent = content.filter(item => item.featured);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Predictive Analytics & AI Revolution Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest content featuring 750% ROI success stories, implementation guides, and cutting-edge AI solutions that are transforming businesses worldwide.
          </p>
        </div>

        {/* Success Metrics Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">750%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$4.2M</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">89%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600">Implementations</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Content */}
        {activeCategory === 'all' && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Content</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredContent.slice(0, 2).map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        FEATURED
                      </span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {item.type}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {item.readingTime}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-6">
                      {item.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="text-sm text-green-600 font-medium">ROI</div>
                        <div className="text-lg font-bold text-green-700">{item.metrics.roi}</div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="text-sm text-blue-600 font-medium">Savings</div>
                        <div className="text-lg font-bold text-blue-700">{item.metrics.savings}</div>
                      </div>
                    </div>

                    <Link
                      href={item.url}
                      className="inline-flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                    >
                      <span>Read Now</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      item.category === 'blog' ? 'bg-blue-100 text-blue-800' :
                      item.category === 'case-study' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {item.type}
                    </span>
                    {item.isNew && (
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                        NEW
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                </div>

                <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h4>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-600 font-medium">ROI</div>
                    <div className="text-sm font-bold text-gray-900">{item.metrics.roi}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-600 font-medium">Savings</div>
                    <div className="text-sm font-bold text-gray-900">{item.metrics.savings}</div>
                  </div>
                </div>

                <Link
                  href={item.url}
                  className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center block"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve 750% ROI with Predictive Analytics?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Get personalized implementation support and start your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Implementation Support
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictiveAnalyticsContentShowcase2025;