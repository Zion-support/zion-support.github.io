'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025Banner = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'ai-2025-enterprise-automation-revolution-ultimate-breakthrough',
      title: 'AI 2025: The Enterprise Automation Revolution - Ultimate Breakthrough Guide',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 1,500% ROI through revolutionary AI automation.',
      type: 'blog',
      category: 'ai-automation',
      metrics: { roi: '1,500%', savings: '$4.2B', efficiency: '95%' },
      url: '/blog/ai-2025-enterprise-automation-revolution-ultimate-breakthrough',
      readingTime: '28 min read',
      featured: true
    },
    {
      id: 'fortune-500-ai-transformation-2025-ultimate-success-story',
      title: 'Fortune 500 AI Transformation 2025: $4.2B Annual Savings - Ultimate Success Story',
      description: 'How a $15B Fortune 500 manufacturing company achieved 1,200% ROI and $4.2B in annual savings in just 18 months.',
      type: 'case-study',
      category: 'case-studies',
      metrics: { roi: '1,200%', savings: '$4.2B', timeline: '18 months' },
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'ai-implementation-ultimate-success-framework-2025',
      title: 'AI Implementation Ultimate Success Framework 2025: Complete Roadmap to 1,200% ROI',
      description: 'The definitive guide to AI implementation success. Proven framework used by Fortune 500 companies to achieve 1,200% ROI.',
      type: 'resource',
      category: 'implementation',
      metrics: { roi: '1,200%', success: '94%', projects: '1,000+' },
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      readingTime: '20 min read',
      featured: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'ai-automation', label: 'AI Automation', count: content.filter(c => c.category === 'ai-automation').length },
    { id: 'case-studies', label: 'Case Studies', count: content.filter(c => c.category === 'case-studies').length },
    { id: 'implementation', label: 'Implementation', count: content.filter(c => c.category === 'implementation').length }
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
      case 'blog': return 'from-blue-500 to-cyan-500';
      case 'case-study': return 'from-green-500 to-emerald-500';
      case 'resource': return 'from-purple-500 to-violet-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            🚀 ULTIMATE AI CONTENT SHOWCASE 2025
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content That Delivers
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              1,500% ROI Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the breakthrough strategies, frameworks, and success stories that are transforming Fortune 500 companies worldwide.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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
              {category.label}
              <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Content type badge */}
              <div className={`bg-gradient-to-r ${getTypeColor(item.type)} text-white px-4 py-2 text-sm font-semibold`}>
                {getTypeIcon(item.type)} {item.type.replace('-', ' ').toUpperCase()}
              </div>

              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>

                {/* Reading time and featured badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">⏱️ {item.readingTime}</span>
                  {item.featured && (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                      ⭐ FEATURED
                    </span>
                  )}
                </div>

                {/* CTA button */}
                <Link
                  href={item.url}
                  className={`w-full bg-gradient-to-r ${getTypeColor(item.type)} text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center block`}
                >
                  Read Full {item.type.replace('-', ' ').toUpperCase()} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success metrics summary */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Proven Results Across All Content</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">1,500%</div>
              <div className="text-sm opacity-90">Maximum ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$4.2B</div>
              <div className="text-sm opacity-90">Maximum Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-sm opacity-90">Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">1,000+</div>
              <div className="text-sm opacity-90">Successful Implementations</div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="text-center mt-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of companies already achieving unprecedented results with our proven AI strategies and frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Your Free AI Assessment →
              </Link>
              <Link
                href="/resources"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Explore All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025Banner;