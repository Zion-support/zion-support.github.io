'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, StarIcon, ChartBarIcon, CurrencyDollarIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline';

const AdvancedAIContentShowcase2025 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const contentItems = [
    {
      id: 'advanced-automation-mastery',
      title: 'AI 2025: Advanced Automation Mastery - Ultimate Success Guide',
      description: 'Master advanced AI automation with our comprehensive guide. Achieve 1,200% ROI, 99.8% efficiency, and transform your business operations in 2025.',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide',
      type: 'Blog Post',
      category: 'blog',
      metrics: {
        roi: '1,200%',
        efficiency: '99.8%',
        savings: '$2.8B',
        satisfaction: '98%'
      },
      readingTime: '25 min read',
      isNew: true,
      featured: true,
      tags: ['AI Automation', 'Advanced AI', 'Business Mastery', 'ROI', '2025']
    },
    {
      id: 'ai-transformation-1200-roi',
      title: 'AI Transformation Success Story: $5B Company Achieves 1,200% ROI',
      description: 'Discover how a Fortune 500 company achieved extraordinary results with advanced AI automation, saving $2.8B annually and transforming their entire operation.',
      url: '/case-studies/ai-transformation-1200-percent-roi-ultimate-success-story',
      type: 'Case Study',
      category: 'case-study',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '18 months',
        efficiency: '99.8%'
      },
      readingTime: '15 min read',
      isNew: true,
      featured: true,
      tags: ['Case Study', 'Fortune 500', 'AI Transformation', 'ROI', 'Success Story']
    },
    {
      id: 'implementation-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework',
      description: 'Complete guide to achieving 1,200% ROI with our proven implementation framework. Transform your business with advanced AI technologies and methodologies.',
      url: '/resources/ai-2025-implementation-ultimate-success-framework',
      type: 'Resource',
      category: 'resource',
      metrics: {
        roi: '1,200%',
        success: '94%',
        timeline: '18 months',
        projects: '500+'
      },
      readingTime: '30 min read',
      isNew: true,
      featured: true,
      tags: ['Implementation Framework', 'AI Strategy', 'ROI', 'Success Guide', '2025']
    },
    {
      id: 'quantum-ai-business-revolution',
      title: 'AI 2025: The Quantum AI Business Revolution - $100B Market Transformation',
      description: 'Explore the quantum AI revolution that\'s transforming business operations with 1,200% processing speed improvements and 99.97% accuracy.',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      type: 'Blog Post',
      category: 'blog',
      metrics: {
        roi: '1,200%',
        market: '$100B',
        accuracy: '99.97%',
        speed: '1,200%'
      },
      readingTime: '20 min read',
      isNew: true,
      featured: false,
      tags: ['Quantum AI', 'Quantum Computing', 'Business Revolution', 'ROI', 'Fortune 500']
    },
    {
      id: 'fortune-500-ai-success',
      title: 'Fortune 500 AI Success 2025: $2.8B Annual Savings',
      description: 'Learn how a Fortune 500 company achieved $2.8B in annual savings with advanced AI automation and 1,500% ROI in just 8 months.',
      url: '/case-studies/fortune-500-ai-success-2025',
      type: 'Case Study',
      category: 'case-study',
      metrics: {
        savings: '$2.8B',
        roi: '1,500%',
        timeline: '8 months',
        efficiency: '89%'
      },
      readingTime: '20 min read',
      isNew: true,
      featured: false,
      tags: ['Fortune 500', 'AI Transformation', 'Case Study', 'ROI', 'Success Story']
    },
    {
      id: 'ai-roi-guide-2025',
      title: 'AI ROI Guide 2025: Achieve 1,200% ROI',
      description: 'Comprehensive guide to calculating and achieving extraordinary ROI with AI implementation. Includes ROI calculator and proven strategies.',
      url: '/resources/ai-roi-guide-2025',
      type: 'Resource',
      category: 'resource',
      metrics: {
        roi: '1,200%',
        savings: '$500M+',
        efficiency: '99.8%',
        accuracy: '95%'
      },
      readingTime: '15 min read',
      isNew: true,
      featured: false,
      tags: ['AI', 'ROI', 'Guide', '2025', 'Calculator']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.category === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.category === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.category === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeFilter);

  const featuredContent = contentItems.filter(item => item.featured);

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-4">
            <StarIcon className="w-5 h-5" />
            <span className="text-sm font-semibold">NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced AI Success Content 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the comprehensive collection of advanced AI implementation guides, success stories, and proven methodologies that are delivering extraordinary results.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <CurrencyDollarIcon className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-2">1,200%</div>
            <div className="text-sm text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <ChartBarIcon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-2">99.8%</div>
            <div className="text-sm text-gray-600">Efficiency</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <CurrencyDollarIcon className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-2">$2.8B</div>
            <div className="text-sm text-gray-600">Annual Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <StarIcon className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
            <div className="text-sm text-gray-600">Satisfaction</div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Content</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredContent.map((content) => (
              <div key={content.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {content.type}
                      </span>
                      {content.isNew && (
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                          NEW
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <ClockIcon className="w-4 h-4" />
                      <span className="text-sm">{content.readingTime}</span>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {content.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {content.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {Object.entries(content.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-purple-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={content.url}
                    className="inline-flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors w-full justify-center"
                  >
                    <span>Read {content.type}</span>
                    <ChevronRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeFilter === filter.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content) => (
            <div key={content.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {content.type}
                    </span>
                    {content.isNew && (
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                    {content.featured && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <ClockIcon className="w-4 h-4" />
                    <span className="text-sm">{content.readingTime}</span>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {content.title}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {content.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Object.entries(content.metrics).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-sm font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</div>
                    </div>
                  ))}
                </div>

                <Link
                  href={content.url}
                  className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-semibold text-sm"
                >
                  <span>Read {content.type}</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Achieve 1,200% ROI?</h3>
            <p className="text-xl mb-6 opacity-90">
              Get started with our comprehensive AI implementation framework and join the companies achieving extraordinary results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources/ai-2025-implementation-ultimate-success-framework"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Implementation Framework
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAIContentShowcase2025;