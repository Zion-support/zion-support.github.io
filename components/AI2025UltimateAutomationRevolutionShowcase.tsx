'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AI2025UltimateAutomationRevolutionShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentItems = [
    {
      id: 'ultimate-automation-revolution',
      title: 'AI 2025: The Ultimate Automation Revolution - 50,000% ROI Breakthrough',
      type: 'blog',
      category: 'automation',
      url: '/blog/ai-2025-ultimate-automation-revolution-50000-roi-breakthrough',
      metrics: {
        roi: '50,000%',
        savings: '$2.8B+',
        efficiency: '2,500%',
        accuracy: '99.97%'
      },
      description: 'Transform your business with revolutionary AI automation that delivers unprecedented returns',
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 AI Automation Success: $2.8B Annual Savings - 50,000% ROI',
      type: 'case-study',
      category: 'success-story',
      url: '/case-studies/fortune-500-ai-automation-50000-roi-success-story',
      metrics: {
        roi: '50,000%',
        savings: '$2.8B',
        timeline: '18 months',
        accuracy: '99.97%'
      },
      description: 'How TechGlobal Industries achieved unprecedented ROI through comprehensive AI automation',
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'implementation-ultimate-guide',
      title: 'AI Automation Implementation Ultimate Guide: Complete Roadmap to 50,000% ROI',
      type: 'resource',
      category: 'implementation',
      url: '/resources/ai-automation-implementation-ultimate-guide-50000-roi',
      metrics: {
        roi: '50,000%',
        success: '94%',
        timeline: '12-18 months',
        guide: 'Complete'
      },
      description: 'The definitive guide to achieving unprecedented returns through revolutionary AI automation',
      readingTime: '45 min read',
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'automation', name: 'AI Automation', count: contentItems.filter(item => item.category === 'automation').length },
    { id: 'success-story', name: 'Success Stories', count: contentItems.filter(item => item.category === 'success-story').length },
    { id: 'implementation', name: 'Implementation', count: contentItems.filter(item => item.category === 'implementation').length }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

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
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4">
            🚀 AI 2025 ULTIMATE AUTOMATION REVOLUTION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Achieve 50,000% ROI with Revolutionary AI Automation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the breakthrough strategies, technologies, and implementation frameworks that Fortune 500 companies are using to achieve unprecedented returns.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-700 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Featured badge */}
              {item.featured && (
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                  FEATURED
                </div>
              )}

              <div className="p-6">
                {/* Type badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)} {item.type.replace('-', ' ').toUpperCase()}
                  </span>
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Annual Savings</div>
                  </div>
                </div>

                {/* Call to action */}
                <div className="space-y-3">
                  <Link
                    href={item.url}
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Read Full {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  
                  {item.type === 'case-study' && (
                    <Link
                      href="/consultation"
                      className="w-full inline-flex items-center justify-center px-4 py-2 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
                    >
                      Get Your Custom ROI Analysis
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Achieve 50,000% ROI?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join the Fortune 500 companies already achieving unprecedented returns with AI automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consultation"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Your 50,000% ROI Roadmap
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/services/ai-automation"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore AI Automation Services
              </Link>
            </div>
          </div>
        </div>

        {/* Success metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">50,000%</div>
            <div className="text-gray-600">Average ROI Achieved</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">$2.8B+</div>
            <div className="text-gray-600">Average Annual Savings</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">94%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">18</div>
            <div className="text-gray-600">Months to ROI</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025UltimateAutomationRevolutionShowcase;