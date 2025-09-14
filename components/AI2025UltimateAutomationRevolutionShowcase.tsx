'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AI2025UltimateAutomationRevolutionShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const contentItems = [
    {
      id: 'ultimate-automation-revolution',
      title: 'AI 2025: The Ultimate Automation Revolution - 50,000% ROI Breakthrough Guide',
      type: 'blog',
      category: 'AI Automation',
      url: '/blog/ai-2025-ultimate-automation-revolution-50000-roi-breakthrough',
      metrics: {
        roi: '50,000%',
        savings: '$2.8B+',
        efficiency: '2,500%',
        accuracy: '99.97%'
      },
      description: 'Transform your business with revolutionary AI automation that delivers unprecedented returns. Learn the breakthrough strategies Fortune 500 companies use to achieve extraordinary ROI.',
      readingTime: '35 min read',
      featured: true,
      tags: ['AI Automation', 'ROI', 'Business Transformation', 'Fortune 500', '50,000% ROI']
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 AI Automation Success: $2.8B Annual Savings - 50,000% ROI Success Story',
      type: 'case-study',
      category: 'Success Stories',
      url: '/case-studies/fortune-500-ai-automation-50000-roi-success-story',
      metrics: {
        roi: '50,000%',
        savings: '$2.8B',
        timeline: '18 months',
        accuracy: '99.97%'
      },
      description: 'Real-world case study of TechGlobal Industries achieving extraordinary ROI through comprehensive AI automation implementation.',
      readingTime: '25 min read',
      featured: true,
      tags: ['Case Study', 'Fortune 500', 'AI Automation', 'ROI Success', 'Manufacturing']
    },
    {
      id: 'implementation-guide',
      title: 'AI Automation Implementation Guide: Complete Roadmap to 50,000% ROI',
      type: 'resource',
      category: 'Implementation',
      url: '/resources/ai-automation-implementation-guide-50000-roi',
      metrics: {
        roi: '50,000%',
        timeline: '18 months',
        success: '99.7%',
        guide: 'Complete'
      },
      description: 'Step-by-step blueprint for achieving extraordinary returns with AI automation. Comprehensive implementation framework based on Fortune 500 success stories.',
      readingTime: '60 min read',
      featured: true,
      tags: ['Implementation Guide', 'AI Automation', 'ROI', 'Strategy', 'Best Practices']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  const filteredItems = activeFilter === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeFilter);

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
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'resource':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            🚀 AI 2025 ULTIMATE AUTOMATION REVOLUTION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Achieve 50,000% ROI with Revolutionary AI Automation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the breakthrough strategies, technologies, and implementation frameworks that Fortune 500 companies use to achieve extraordinary returns through AI automation.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-200">
            <div className="text-3xl font-bold text-green-600 mb-2">50,000%</div>
            <div className="text-gray-600 font-semibold">Average ROI</div>
            <div className="text-sm text-gray-500 mt-1">Fortune 500 Companies</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">$2.8B+</div>
            <div className="text-gray-600 font-semibold">Annual Savings</div>
            <div className="text-sm text-gray-500 mt-1">Per Organization</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">2,500%</div>
            <div className="text-gray-600 font-semibold">Efficiency Gain</div>
            <div className="text-sm text-gray-500 mt-1">Process Improvement</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">99.97%</div>
            <div className="text-gray-600 font-semibold">Accuracy Rate</div>
            <div className="text-sm text-gray-500 mt-1">Quality Standards</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-purple-300 hover:text-purple-600'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden"
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 text-sm font-bold text-center">
                  ⭐ FEATURED CONTENT
                </div>
              )}

              <div className="p-6">
                {/* Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border ${getTypeColor(item.type)}`}>
                    <span className="mr-2">{getTypeIcon(item.type)}</span>
                    {item.type === 'case-study' ? 'Case Study' : item.type === 'blog' ? 'Blog Post' : 'Resource'}
                  </div>
                  <div className="text-sm text-gray-500">{item.readingTime}</div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-green-700">ROI</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-xs text-blue-700">Savings</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={item.url}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-lg font-semibold text-center hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                  >
                    Read {item.type === 'case-study' ? 'Case Study' : item.type === 'blog' ? 'Article' : 'Guide'}
                  </Link>
                  <Link
                    href="/consultation"
                    className="flex-1 border-2 border-purple-600 text-purple-600 px-4 py-3 rounded-lg font-semibold text-center hover:bg-purple-600 hover:text-white transition-all duration-300"
                  >
                    Get Help
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Achieve 50,000% ROI?</h3>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              Join Fortune 500 companies in the AI automation revolution. Get your personalized transformation roadmap today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consultation"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Transformation →
              </Link>
              <Link
                href="/ai-automation"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025UltimateAutomationRevolutionShowcase;