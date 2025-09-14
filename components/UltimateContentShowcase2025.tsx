'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const contentPieces = [
    {
      id: 'ai-2025-enterprise-automation-revolution-ultimate-breakthrough',
      title: 'AI 2025: The Enterprise Automation Revolution - Ultimate Breakthrough Guide',
      type: 'blog',
      category: 'AI Strategy',
      url: '/blog/ai-2025-enterprise-automation-revolution-ultimate-breakthrough',
      metrics: {
        roi: '500%',
        savings: '$200M',
        efficiency: '340%',
        satisfaction: '98%'
      },
      description: 'Discover how Fortune 500 companies are achieving 500% ROI through AI automation. Complete implementation roadmap with real success stories.',
      readingTime: '18 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'fortune-500-ai-transformation-2025-ultimate-success-story',
      title: 'Fortune 500 AI Transformation 2025: $2.8B Annual Savings in 18 Months',
      type: 'case-study',
      category: 'Success Stories',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        efficiency: '156%',
        satisfaction: '99.2%'
      },
      description: 'How a global manufacturing leader achieved 567% ROI through comprehensive AI automation. Complete case study with implementation details.',
      readingTime: '12 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'ai-2025-implementation-ultimate-roadmap-comprehensive',
      title: 'AI 2025 Implementation Ultimate Roadmap: From Strategy to 800% ROI in 18 Months',
      type: 'resource',
      category: 'Implementation',
      url: '/resources/ai-2025-implementation-ultimate-roadmap-comprehensive',
      metrics: {
        roi: '800%',
        savings: '$173.7M',
        efficiency: '99%',
        satisfaction: '99%'
      },
      description: 'Complete step-by-step guide to implementing AI automation in your enterprise. Proven methodology with real results.',
      readingTime: '20 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'ai-2025-autonomous-enterprise-systems-revolution',
      title: 'AI 2025: The Autonomous Enterprise Systems Revolution - 3,000% ROI Through Self-Managing AI',
      type: 'blog',
      category: 'AI Strategy',
      url: '/blog/ai-2025-autonomous-enterprise-systems-revolution',
      metrics: {
        roi: '3,000%',
        savings: '$25.6M',
        efficiency: '800%',
        satisfaction: '95%'
      },
      description: 'Revolutionary autonomous AI systems that manage themselves. Learn how Fortune 500 companies are achieving unprecedented results.',
      readingTime: '28 min read',
      isNew: true,
      featured: false
    },
    {
      id: 'retail-ai-transformation-2025-ultimate-success',
      title: 'Retail AI Transformation 2025: $500M Company Achieves 280% ROI with AI-Powered Operations',
      type: 'case-study',
      category: 'Success Stories',
      url: '/case-studies/retail-ai-transformation-2025-ultimate-success',
      metrics: {
        roi: '280%',
        savings: '$45M',
        efficiency: '78%',
        satisfaction: '99.2%'
      },
      description: 'How a major retail chain transformed operations with AI automation, achieving 280% ROI and $45M in savings.',
      readingTime: '15 min read',
      isNew: true,
      featured: false
    },
    {
      id: 'ai-2025-implementation-master-guide',
      title: 'AI 2025 Implementation Master Guide: From Strategy to 500% ROI in 12 Months',
      type: 'resource',
      category: 'Implementation',
      url: '/resources/ai-2025-implementation-master-guide',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        efficiency: '94%',
        satisfaction: '98%'
      },
      description: 'Comprehensive implementation guide with proven strategies for achieving 500% ROI in AI automation projects.',
      readingTime: '25 min read',
      isNew: true,
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: contentPieces.length },
    { id: 'blog', label: 'Blog Posts', count: contentPieces.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentPieces.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentPieces.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? contentPieces 
    : contentPieces.filter(item => item.type === activeFilter);

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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            🚀 NEW 2025 CONTENT
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ultimate AI Content Showcase 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI automation insights, success stories, and implementation guides. 
            Proven strategies that have generated over $3.2 billion in client savings.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">340%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">$3.2B</div>
            <div className="text-gray-600">Client Savings</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                content.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(content.type)}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(content.type)}`}>
                      {content.type.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {content.isNew && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        NEW
                      </span>
                    )}
                    {content.featured && (
                      <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                        FEATURED
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-purple-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-bold text-purple-600">{content.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-bold text-green-600">{content.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>

                {/* Reading Time */}
                <div className="text-sm text-gray-500 mb-4">
                  ⏱️ {content.readingTime}
                </div>

                {/* CTA Button */}
                <Link
                  href={content.url}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  Read {content.type === 'blog' ? 'Article' : content.type === 'case-study' ? 'Case Study' : 'Guide'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Enterprise with AI?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join 500+ companies that have achieved an average of 340% ROI through AI automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors"
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

export default UltimateContentShowcase2025;