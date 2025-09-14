'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, TrendingUp, Users, Clock, Award,  Zap } from 'lucide-react';

const RevolutionaryAIContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = [
    { id: 'all', label: 'All Content', count: 3 },
    { id: 'blog', label: 'Blog Posts', count: 1 },
    { id: 'case-study', label: 'Case Studies', count: 1 },
    { id: 'resource', label: 'Resources', count: 1 }
  ];

  const featuredContent = [
    {
      id: 'ultimate-automation-revolution',
      title: 'AI 2025: The Ultimate Automation Revolution - Enterprise Mastery Guide',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-ultimate-automation-revolution-enterprise-mastery',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '89%',
        satisfaction: '98%'
      },
      description: 'Discover how Fortune 500 companies are achieving 1,200% ROI with next-generation AI automation. Complete implementation roadmap and success strategies.',
      readingTime: '25 min read',
      featured: true,
      tags: ['AI Automation', 'Enterprise', 'ROI', 'Digital Transformation', '2025', 'Mastery'],
      highlights: [
        'Revolutionary AI automation technologies',
        'Fortune 500 success stories',
        '3-phase implementation framework',
        'Technology stack and tools',
        'ROI calculation framework'
      ]
    },
    {
      id: 'fortune-100-success-story',
      title: 'Fortune 100 AI Transformation: $5.2B Company Achieves 1,200% ROI in 24 Months',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/fortune-100-ai-transformation-ultimate-success-story-2025',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '24 months',
        satisfaction: '98%'
      },
      description: 'Discover how a Fortune 100 technology company transformed their operations with AI automation, achieving unprecedented ROI and becoming an industry leader.',
      readingTime: '15 min read',
      featured: true,
      tags: ['Fortune 100', 'AI Transformation', 'ROI', 'Case Study', 'Success Story', 'Enterprise AI'],
      highlights: [
        'Complete transformation journey',
        'Detailed implementation phases',
        'Technology stack and tools',
        'Financial impact analysis',
        'Lessons learned and best practices'
      ]
    },
    {
      id: 'ultimate-success-framework',
      title: 'AI Implementation Ultimate Success Framework 2025: Complete Roadmap to 1,000%+ ROI',
      type: 'resource',
      category: 'resource',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      metrics: {
        roi: '1,000%+',
        success: '94%',
        timeline: '18 months',
        projects: '1,000+'
      },
      description: 'The definitive guide to AI implementation success. Proven framework used by Fortune 500 companies to achieve 1,000%+ ROI and transform their operations.',
      readingTime: '30 min read',
      featured: true,
      tags: ['AI Implementation', 'Framework', 'ROI', 'Success Strategy', '2025', 'Enterprise AI'],
      highlights: [
        '4-phase implementation framework',
        'ROI calculation and measurement',
        'Technology stack and tools',
        'Implementation best practices',
        '90-day action plan'
      ]
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? featuredContent 
    : featuredContent.filter(content => content.category === activeCategory);

  const totalStats = {
    totalContent: featuredContent.length,
    averageROI: '1,133%',
    totalSavings: '$8.4B',
    successRate: '96%',
    totalProjects: '1,000+'
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-4">
            <Star className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">🚀 REVOLUTIONARY AI CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ultimate AI Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI transformation content. Proven strategies, real success stories, and battle-tested frameworks that deliver <span className="text-purple-600 font-bold">1,000%+ ROI</span> and transform businesses.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{totalStats.totalContent}</div>
            <div className="text-gray-600">Content Pieces</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{totalStats.averageROI}</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{totalStats.totalSavings}</div>
            <div className="text-gray-600">Total Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{totalStats.successRate}</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Content Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      content.type === 'blog' ? 'bg-blue-100 text-blue-800' :
                      content.type === 'case-study' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {content.type.toUpperCase()}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {content.readingTime}
                    </div>
                  </div>
                  {content.featured && (
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-5 h-5" />
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Success Metrics */}
              <div className="p-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-4">Success Metrics</h4>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {content.metrics.roi}
                    </div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {content.metrics.savings}
                    </div>
                    <div className="text-xs text-gray-500">Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      {content.metrics.efficiency || content.metrics.success}
                    </div>
                    <div className="text-xs text-gray-500">
                      {content.metrics.efficiency ? 'Efficiency' : 'Success Rate'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-1">
                      {content.metrics.satisfaction || content.metrics.timeline}
                    </div>
                    <div className="text-xs text-gray-500">
                      {content.metrics.satisfaction ? 'Satisfaction' : 'Timeline'}
                    </div>
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Highlights</h4>
                  <ul className="space-y-2">
                    {content.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <Zap className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Link
                    href={content.url}
                    className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Read Now
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                  <button className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors duration-300">
                    Save
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Join over 1,000 companies that have achieved 1,000%+ ROI with our proven AI implementation framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
              >
                <Users className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-colors duration-300"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Explore All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAIContentShowcase2025;