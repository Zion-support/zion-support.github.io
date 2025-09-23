'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AI2025UltimateAutomationShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'ultimate-automation-revolution',
      type: 'blog',
      title: 'AI 2025: The Ultimate Automation Revolution - 5,000% ROI Breakthrough Guide',
      description: 'Transform your business with revolutionary AI automation that\'s reshaping industries. Proven 5,000% ROI across Fortune 500 implementations.',
      url: '/blog/ai-2025-ultimate-automation-revolution-5000-roi-breakthrough',
      category: 'blog',
      metrics: {
        roi: '5,000%',
        savings: '$15.2B+',
        efficiency: '2,400%',
        accuracy: '99.7%'
      },
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'fortune-500-success-story',
      type: 'case-study',
      title: 'Fortune 500 AI Automation Success: $15.2B Annual Savings - 5,000% ROI Success Story',
      description: 'How a global manufacturing leader achieved 5,000% ROI and $15.2B in annual savings through comprehensive AI automation implementation.',
      url: '/case-studies/fortune-500-ai-automation-5000-roi-success-story',
      category: 'case-study',
      metrics: {
        roi: '5,000%',
        savings: '$15.2B',
        timeline: '18 months',
        success: '99.7%'
      },
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'implementation-guide',
      type: 'resource',
      title: 'AI Automation Implementation Ultimate Guide 2025: Complete Roadmap to 5,000% ROI',
      description: 'The definitive guide to transforming your business with revolutionary AI automation. Everything you need to achieve 5,000% ROI in 18 months.',
      url: '/resources/ai-automation-implementation-ultimate-guide-2025',
      category: 'resource',
      metrics: {
        roi: '5,000%',
        success: '99.7%',
        payback: '3.2 months',
        efficiency: '200-400%'
      },
      readingTime: '35 min read',
      featured: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'blog', label: 'Blog Posts', count: content.filter(item => item.category === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: content.filter(item => item.category === 'case-study').length },
    { id: 'resource', label: 'Resources', count: content.filter(item => item.category === 'resource').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

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
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW: AI 2025 ULTIMATE AUTOMATION REVOLUTION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Revolutionary AI Automation Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the breakthrough strategies, technologies, and implementation frameworks that are delivering 5,000% ROI across Fortune 500 companies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.category)}`}>
                    <span className="mr-2">{getTypeIcon(item.category)}</span>
                    {item.category.replace('-', ' ').toUpperCase()}
                  </div>
                  {item.featured && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                      FEATURED
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex items-center text-sm text-gray-500">
                  <span>⏱️ {item.readingTime}</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="p-6 bg-gray-50">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Metrics</h4>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">{key.replace('_', ' ')}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="p-6">
                <Link
                  href={item.url}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-center block"
                >
                  {item.type === 'blog' ? 'Read Article' : item.type === 'case-study' ? 'View Case Study' : 'Download Guide'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Proven Results Across 500+ Implementations</h3>
            <p className="text-xl text-purple-100">
              Join the Fortune 500 companies achieving extraordinary ROI with AI automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">5,000%</div>
              <div className="text-lg text-purple-100">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">99.7%</div>
              <div className="text-lg text-purple-100">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">$15.2B+</div>
              <div className="text-lg text-purple-100">Total Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">3.2</div>
              <div className="text-lg text-purple-100">Months Payback</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Achieve 5,000% ROI with AI Automation?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Get your free ROI analysis and discover how AI automation can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Free ROI Analysis
            </Link>
            <Link
              href="/services"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025UltimateAutomationShowcase;