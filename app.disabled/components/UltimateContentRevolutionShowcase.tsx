'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateContentRevolutionShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentPieces = [
    {
      id: 'ultimate-content-revolution',
      title: 'AI 2025: The Ultimate Content Revolution - 25,000% ROI',
      type: 'blog',
      category: 'revolution',
      url: '/blog/ai-2025-ultimate-content-revolution-ultimate-breakthrough',
      description: 'Revolutionary AI-powered content creation transforming Fortune 500 companies with unprecedented ROI and business results.',
      metrics: {
        roi: '25,000%',
        revenue: '$445M',
        production: '2,400%',
        engagement: '1,800%'
      },
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'fortune-500-content-success',
      title: 'Fortune 500 Content Revolution: $445M Annual Revenue Success',
      type: 'case-study',
      category: 'success',
      url: '/case-studies/fortune-500-ultimate-content-revolution-25000-roi-success-story',
      description: 'Proven success story of Fortune 500 company achieving 25,000% ROI through AI-powered content revolution implementation.',
      metrics: {
        roi: '25,000%',
        savings: '$2.8B',
        efficiency: '3,200%',
        accuracy: '99.7%'
      },
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'content-implementation-guide',
      title: 'AI Content Revolution Implementation Guide: Complete Roadmap',
      type: 'resource',
      category: 'implementation',
      url: '/resources/ai-2025-ultimate-content-revolution-implementation-guide',
      description: 'Comprehensive step-by-step implementation roadmap for achieving 25,000% ROI through AI content revolution.',
      metrics: {
        roi: '25,000%',
        timeline: '18 months',
        success: '99.7%',
        guide: '45 min read'
      },
      readingTime: '45 min read',
      featured: true
    },
    {
      id: 'content-automation-mastery',
      title: 'AI Content Automation Mastery: 15,000% ROI Through Intelligent Automation',
      type: 'blog',
      category: 'automation',
      url: '/blog/ai-2025-content-automation-mastery-ultimate-guide',
      description: 'Master AI-powered content automation to achieve 15,000% ROI through intelligent content creation and distribution.',
      metrics: {
        roi: '15,000%',
        automation: '95%',
        efficiency: '2,800%',
        quality: '99.8%'
      },
      readingTime: '28 min read',
      featured: false
    },
    {
      id: 'content-personalization-breakthrough',
      title: 'AI Content Personalization Breakthrough: 99.9% Accuracy Success',
      type: 'case-study',
      category: 'personalization',
      url: '/case-studies/ai-content-personalization-breakthrough-success-story',
      description: 'How a Fortune 500 company achieved 99.9% content personalization accuracy and 12,000% ROI through AI innovation.',
      metrics: {
        roi: '12,000%',
        accuracy: '99.9%',
        engagement: '2,200%',
        satisfaction: '98.7%'
      },
      readingTime: '18 min read',
      featured: false
    },
    {
      id: 'content-monetization-guide',
      title: 'AI Content Monetization Master Guide: Maximize Revenue from Every Content Piece',
      type: 'resource',
      category: 'monetization',
      url: '/resources/ai-content-monetization-master-guide-2025',
      description: 'Complete guide to maximizing revenue from AI-generated content through advanced monetization strategies.',
      metrics: {
        revenue: '800%',
        monetization: '95%',
        efficiency: '1,500%',
        profit: '340%'
      },
      readingTime: '32 min read',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentPieces.length },
    { id: 'revolution', name: 'Content Revolution', count: contentPieces.filter(c => c.category === 'revolution').length },
    { id: 'success', name: 'Success Stories', count: contentPieces.filter(c => c.category === 'success').length },
    { id: 'implementation', name: 'Implementation', count: contentPieces.filter(c => c.category === 'implementation').length },
    { id: 'automation', name: 'Automation', count: contentPieces.filter(c => c.category === 'automation').length },
    { id: 'personalization', name: 'Personalization', count: contentPieces.filter(c => c.category === 'personalization').length },
    { id: 'monetization', name: 'Monetization', count: contentPieces.filter(c => c.category === 'monetization').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentPieces 
    : contentPieces.filter(content => content.category === activeCategory);

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
      case 'blog': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'case-study': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'resource': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-6 py-2 mb-6">
            <span className="text-white font-semibold">🚀 AI 2025 ULTIMATE CONTENT REVOLUTION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Content with AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the revolutionary AI-powered content strategies that are generating 25,000% ROI for Fortune 500 companies. 
            From content creation to monetization, master the complete content revolution.
          </p>
          
          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">25,000%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">$445M</div>
              <div className="text-gray-600">Average Revenue</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">2,400%</div>
              <div className="text-gray-600">Production Increase</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">99.7%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                content.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Featured Badge */}
              {content.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              )}

              <div className="p-6">
                {/* Content Type */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex items-center px-3 py-1 rounded-full text-sm font-semibold border ${getTypeColor(content.type)}`}>
                    <span className="mr-2">{getTypeIcon(content.type)}</span>
                    {content.type === 'blog' ? 'Blog Post' : content.type === 'case-study' ? 'Case Study' : 'Implementation Guide'}
                  </div>
                  <span className="text-sm text-gray-500">{content.readingTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-600">{content.metrics.roi}</div>
                    <div className="text-xs text-green-600">ROI</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-600">
                      {content.metrics.revenue || content.metrics.savings || content.metrics.timeline}
                    </div>
                    <div className="text-xs text-blue-600">
                      {content.metrics.revenue ? 'Revenue' : content.metrics.savings ? 'Savings' : 'Timeline'}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  href={content.url}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
                >
                  {content.type === 'blog' ? 'Read Article' : content.type === 'case-study' ? 'View Case Study' : 'Get Guide'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Content Revolution?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join Fortune 500 companies achieving 25,000% ROI through AI-powered content transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/ai-2025-ultimate-content-revolution-implementation-guide"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Implementation Guide
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/services"
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentRevolutionShowcase;