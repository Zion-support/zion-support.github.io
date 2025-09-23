'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, DollarSign, Zap, Clock, Users, Award, CheckCircle, Star } from 'lucide-react';

const UltimateBusinessAutomationShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'ultimate-business-automation-revolution',
      title: 'AI 2025: The Ultimate Business Automation Revolution - Ultimate Breakthrough Guide to 15,000% ROI',
      description: 'Transform your enterprise with next-generation AI automation that delivers unprecedented results. Learn how Fortune 500 companies are achieving 15,000% ROI with our revolutionary framework.',
      type: 'blog',
      category: 'automation',
      url: '/blog/ai-2025-ultimate-business-automation-revolution-ultimate-breakthrough',
      metrics: {
        roi: '15,000%',
        savings: '$85.2B',
        accuracy: '99.97%',
        automation: '98.7%'
      },
      readingTime: '25 min read',
      isNew: true,
      featured: true,
      tags: ['AI Automation', 'Enterprise', 'ROI', 'Revolution', '2025']
    },
    {
      id: 'fortune-500-ultimate-automation-success',
      title: 'Fortune 500 Ultimate Business Automation Success: $85.2B Annual Savings - 15,000% ROI Success Story',
      description: 'How a Fortune 10 manufacturing giant achieved unprecedented results with AI automation. Discover the complete transformation story and implementation details.',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/fortune-500-ultimate-business-automation-15000-roi-success-story',
      metrics: {
        roi: '15,000%',
        savings: '$85.2B',
        timeline: '18 months',
        satisfaction: '99.8%'
      },
      readingTime: '18 min read',
      isNew: true,
      featured: true,
      tags: ['Fortune 500', 'Success Story', 'ROI', 'Manufacturing', 'Transformation']
    },
    {
      id: 'ultimate-automation-implementation-guide',
      title: 'AI 2025 Ultimate Business Automation Implementation Guide: Complete Roadmap to 15,000% ROI',
      description: 'The definitive guide to implementing AI automation that delivers unprecedented business results. Step-by-step roadmap for achieving 15,000% ROI.',
      type: 'resource',
      category: 'guide',
      url: '/resources/ai-2025-ultimate-business-automation-implementation-guide',
      metrics: {
        roi: '15,000%',
        timeline: '18 months',
        success: '99.7%',
        projects: '1,000+'
      },
      readingTime: '35 min read',
      isNew: true,
      featured: true,
      tags: ['Implementation Guide', 'ROI', 'Strategy', 'Framework', '2025']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'automation', name: 'AI Automation', count: contentItems.filter(item => item.category === 'automation').length },
    { id: 'case-study', name: 'Case Studies', count: contentItems.filter(item => item.category === 'case-study').length },
    { id: 'guide', name: 'Implementation Guides', count: contentItems.filter(item => item.category === 'guide').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

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
      case 'blog': return 'from-blue-500 to-blue-600';
      case 'case-study': return 'from-green-500 to-green-600';
      case 'resource': return 'from-purple-500 to-purple-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 mr-2" />
            <span className="font-semibold">🚀 ULTIMATE BUSINESS AUTOMATION 2025</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Automation Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI automation content, featuring 
            <span className="text-purple-600 font-bold"> 15,000% ROI strategies</span> and 
            <span className="text-green-600 font-bold"> Fortune 500 success stories</span>
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">15,000%</div>
                <div className="text-sm text-gray-600">Average ROI</div>
              </div>
            </div>
            <div className="text-xs text-gray-500">Within 18 months</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-600">$85.2B</div>
                <div className="text-sm text-gray-600">Annual Savings</div>
              </div>
            </div>
            <div className="text-xs text-gray-500">Fortune 500 average</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">99.97%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
            </div>
            <div className="text-xs text-gray-500">Process automation</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">98.7%</div>
                <div className="text-sm text-gray-600">Automation Rate</div>
              </div>
            </div>
            <div className="text-xs text-gray-500">Operations automated</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105 ${
                item.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
              }`}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${getTypeColor(item.type)} p-4 text-white`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{getTypeIcon(item.type)}</span>
                    <span className="text-sm font-semibold uppercase tracking-wide">
                      {item.type === 'blog' ? 'Blog Post' : 
                       item.type === 'case-study' ? 'Case Study' : 'Implementation Guide'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {item.isNew && (
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                        NEW
                      </span>
                    )}
                    {item.featured && (
                      <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                        FEATURED
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{item.readingTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>{item.metrics.roi} ROI</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600 mb-1">ROI</div>
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600 mb-1">
                      {item.metrics.savings ? 'Savings' : 
                       item.metrics.timeline ? 'Timeline' : 'Success Rate'}
                    </div>
                    <div className="text-lg font-bold text-blue-600">
                      {item.metrics.savings || item.metrics.timeline || item.metrics.success}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <Link
                  href={item.url}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Read {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Achieve 15,000% ROI?
            </h3>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              Join Fortune 500 companies that have transformed their operations with our 
              revolutionary AI automation framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/resources/ai-2025-ultimate-business-automation-implementation-guide"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center"
              >
                Download Implementation Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateBusinessAutomationShowcase2025;