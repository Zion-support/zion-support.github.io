'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateAutomationRevolution2025Showcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const contentItems = [
    {
      id: 'ultimate-automation-revolution',
      title: 'AI 2025: The Ultimate Automation Revolution',
      subtitle: '50,000% ROI Breakthrough Guide',
      description: 'Transform your business with revolutionary AI automation that delivers unprecedented returns. Learn the strategies, technologies, and implementation frameworks that are transforming businesses across every industry.',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-automation-revolution-50000-roi-breakthrough',
      readingTime: '35 min read',
      metrics: {
        roi: '50,000%',
        savings: '$2.8B+',
        efficiency: '3,200%',
        accuracy: '99.97%'
      },
      tags: ['AI Automation', 'ROI', 'Business Transformation', 'Revolutionary Technology'],
      featured: true
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 Ultimate Automation Success',
      subtitle: '$2.8B Annual Savings - 50,000% ROI Success Story',
      description: 'How TechGlobal Industries transformed their operations with revolutionary AI automation, achieving unprecedented success and establishing market leadership.',
      type: 'case-study',
      url: '/case-studies/fortune-500-ultimate-automation-50000-roi-success-story',
      readingTime: '25 min read',
      metrics: {
        roi: '50,000%',
        savings: '$2.8B',
        timeline: '18 months',
        accuracy: '99.97%'
      },
      tags: ['Fortune 500', 'Success Story', 'Manufacturing', 'Case Study'],
      featured: true
    },
    {
      id: 'implementation-guide',
      title: 'Ultimate Automation Implementation Guide 2025',
      subtitle: 'Complete Roadmap to 50,000% ROI',
      description: 'The definitive guide to revolutionary AI automation that transforms your business. Complete framework with step-by-step implementation strategies.',
      type: 'resource',
      url: '/resources/ultimate-automation-implementation-guide-2025-50000-roi',
      readingTime: '60 min read',
      metrics: {
        roi: '50,000%',
        framework: 'Complete',
        timeline: '18 months',
        success: '99.7%'
      },
      tags: ['Implementation Guide', 'Framework', 'Strategy', 'Best Practices'],
      featured: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Articles', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        );
      case 'case-study':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'resource':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      default:
        return null;
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
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-semibold">🚀 ULTIMATE AUTOMATION REVOLUTION 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Automation Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover breakthrough strategies, real-world success stories, and complete implementation frameworks that deliver up to <span className="font-bold text-purple-600">50,000% ROI</span>.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">50,000%</div>
            <div className="text-gray-600">Maximum ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">$2.8B+</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">3,200%</div>
            <div className="text-gray-600">Efficiency Gain</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">99.97%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
        </div>

        {/* Filters */}
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
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 text-sm font-semibold">
                  ⭐ FEATURED
                </div>
              )}

              <div className="p-6">
                {/* Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="ml-2 capitalize">{item.type.replace('-', ' ')}</span>
                  </div>
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                </div>

                {/* Title and Subtitle */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-lg text-purple-600 font-semibold mb-3">
                  {item.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-gray-900">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={item.url}
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  <span>
                    {item.type === 'blog' ? 'Read Article' : 
                     item.type === 'case-study' ? 'View Case Study' : 
                     'Access Guide'}
                  </span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve 50,000% ROI?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get expert implementation help and transform your business with revolutionary AI automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Implementation Help
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateAutomationRevolution2025Showcase;