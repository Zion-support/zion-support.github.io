'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const contentPieces = [
    {
      id: 'enterprise-automation-revolution',
      title: 'AI 2025: The Enterprise Automation Revolution - Ultimate Breakthrough Guide',
      type: 'Blog Post',
      category: 'blog',
      roi: '800%',
      savings: '$2.8B',
      description: 'Discover how Fortune 500 companies are achieving 800% ROI through AI-powered enterprise automation. Complete implementation roadmap and success strategies.',
      url: '/blog/ai-2025-enterprise-automation-revolution-ultimate-breakthrough',
      readingTime: '18 min read',
      tags: ['AI', 'Enterprise Automation', 'ROI', 'Fortune 500', 'Breakthrough'],
      featured: true,
      metrics: {
        roi: '800%',
        savings: '$2.8B',
        efficiency: '340%',
        satisfaction: '99.2%'
      }
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 AI Transformation 2025: $2.8B Annual Savings in 18 Months',
      type: 'Case Study',
      category: 'case-study',
      roi: '567%',
      savings: '$2.8B',
      description: 'How a global manufacturing leader achieved 567% ROI through comprehensive AI automation. Complete case study with implementation details and results.',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      readingTime: '12 min read',
      tags: ['Case Study', 'Fortune 500', 'AI Transformation', 'ROI', 'Manufacturing'],
      featured: true,
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        satisfaction: '99.2%',
        timeline: '18 months'
      }
    },
    {
      id: 'implementation-roadmap',
      title: 'AI Implementation Ultimate Roadmap 2025: From Strategy to 800% ROI in 18 Months',
      type: 'Resource',
      category: 'resource',
      roi: '800%',
      savings: '$173.7M',
      description: 'Complete step-by-step guide to implementing AI automation in your enterprise. Proven framework that delivers 800% ROI within 18 months.',
      url: '/resources/ai-implementation-ultimate-roadmap-2025',
      readingTime: '20 min read',
      tags: ['Implementation Guide', 'AI Strategy', 'ROI', 'Roadmap', 'Best Practices'],
      featured: true,
      metrics: {
        roi: '800%',
        savings: '$173.7M',
        success: '99%',
        timeline: '18 months'
      }
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: contentPieces.length },
    { id: 'blog', label: 'Blog Posts', count: contentPieces.filter(c => c.category === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentPieces.filter(c => c.category === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentPieces.filter(c => c.category === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? contentPieces 
    : contentPieces.filter(content => content.category === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Blog Post':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        );
      case 'Case Study':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'Resource':
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
      case 'Blog Post':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Case Study':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Resource':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-4">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-semibold">AI 2025 Ultimate Content Collection</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            High-Value Content with Proven 800% ROI Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the breakthrough strategies, implementation frameworks, and success stories that are transforming enterprises worldwide.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeFilter === filter.id
                  ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label}
              <span className="ml-2 bg-white/20 text-xs px-2 py-1 rounded-full">
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredContent.map((content, index) => (
            <div
              key={content.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden"
            >
              {/* Content header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(content.type)}`}>
                    {getTypeIcon(content.type)}
                    <span className="ml-2">{content.type}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {content.readingTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {content.tags.length > 3 && (
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      +{content.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Success metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{content.metrics.roi}</div>
                    <div className="text-xs text-green-700">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{content.metrics.savings}</div>
                    <div className="text-xs text-blue-700">Savings</div>
                  </div>
                </div>

                {/* CTA button */}
                <Link
                  href={content.url}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 text-center block"
                >
                  Read {content.type} →
                </Link>
              </div>

              {/* Featured badge */}
              {content.featured && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                  FEATURED
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Enterprise?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join 500+ companies that have achieved 800% ROI through our proven AI implementation framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/resources/ai-implementation-ultimate-roadmap-2025"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Download Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;