'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const NewContent2025UltimateShowcase = () => {
  const [activeTab, setActiveTab] = useState('all');

  const contentPieces = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Guide to 500% ROI',
      type: 'blog',
      category: 'AI Strategy',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-guide',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        satisfaction: '98%',
        projects: '500+'
      },
      description: 'Discover how Fortune 500 companies are achieving 500% ROI with AI transformation. Complete guide to enterprise AI implementation, strategy, and success metrics.',
      readingTime: '18 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation 2025: $2.8B Annual Savings in 18 Months',
      type: 'case-study',
      category: 'Success Stories',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        satisfaction: '99.2%',
        efficiency: '78%'
      },
      description: 'How a Fortune 500 manufacturing company achieved 567% ROI with comprehensive AI transformation across all business functions.',
      readingTime: '22 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'implementation-ultimate-guide',
      title: 'AI Implementation Ultimate Guide 2025: From Strategy to 500% ROI - Complete Edition',
      type: 'resource',
      category: 'Implementation',
      url: '/resources/ai-implementation-ultimate-guide-2025-complete',
      metrics: {
        roi: '500%',
        success: '94%',
        timeline: '12-18 months',
        projects: '500+'
      },
      description: 'The most comprehensive AI implementation guide available. Step-by-step framework to achieve 500% ROI with AI transformation across any industry.',
      readingTime: '35 min read',
      isNew: true,
      featured: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentPieces.length },
    { id: 'blog', label: 'Blog Posts', count: contentPieces.filter(c => c.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentPieces.filter(c => c.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentPieces.filter(c => c.type === 'resource').length }
  ];

  const filteredContent = activeTab === 'all' 
    ? contentPieces 
    : contentPieces.filter(content => content.type === activeTab);

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
      case 'blog': return 'bg-blue-500';
      case 'case-study': return 'bg-green-500';
      case 'resource': return 'bg-purple-500';
      default: return 'bg-gray-500';
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
            Ultimate AI Content Showcase 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest AI implementation guides, case studies, and resources designed to help you achieve 500% ROI with AI transformation
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Content header */}
              <div className="p-6 pb-4">
                <div className="flex items-center gap-3 mb-4">
                  {content.isNew && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      NEW
                    </span>
                  )}
                  <span className={`${getTypeColor(content.type)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {getTypeIcon(content.type)} {content.type.charAt(0).toUpperCase() + content.type.slice(1)}
                  </span>
                  {content.featured && (
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      FEATURED
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                  {content.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <span>{content.category}</span>
                  <span>•</span>
                  <span>{content.readingTime}</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="px-6 pb-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-green-600 font-medium">ROI</div>
                    <div className="text-lg font-bold text-green-700">{content.metrics.roi}</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-blue-600 font-medium">Savings</div>
                    <div className="text-lg font-bold text-blue-700">{content.metrics.savings}</div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="px-6 pb-6">
                <Link
                  href={content.url}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all text-center block"
                >
                  Read {content.type.charAt(0).toUpperCase() + content.type.slice(1)}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success metrics summary */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Proven Success Metrics</h3>
            <p className="text-xl opacity-90">
              Our content is based on real-world implementations with measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">500%+</div>
              <div className="text-lg font-medium">Average ROI</div>
              <div className="text-sm opacity-75">Across all implementations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">$2.8B</div>
              <div className="text-lg font-medium">Total Savings</div>
              <div className="text-sm opacity-75">Generated for clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-lg font-medium">Success Stories</div>
              <div className="text-sm opacity-75">Companies transformed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-lg font-medium">Success Rate</div>
              <div className="text-sm opacity-75">Implementation success</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your AI Transformation?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Get personalized AI implementation guidance and join 500+ companies that have achieved exceptional ROI with AI transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
              >
                Get AI Implementation Consultation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all"
              >
                Explore All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateShowcase;