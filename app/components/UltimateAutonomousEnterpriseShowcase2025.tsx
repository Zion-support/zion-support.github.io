'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateAutonomousEnterpriseShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'ultimate-autonomous-enterprise',
      title: 'AI 2025: The Ultimate Autonomous Enterprise Revolution',
      description: 'Transform your business into a fully autonomous, self-optimizing enterprise with 8,500% ROI through cutting-edge AI technologies.',
      type: 'blog',
      category: 'ai-revolution',
      url: '/blog/ai-2025-ultimate-autonomous-enterprise-revolution-ultimate-breakthrough',
      metrics: {
        roi: '8,500%',
        savings: '$45.2B+',
        efficiency: '3,200%',
        timeline: '18 months'
      },
      featured: true,
      readingTime: '35 min read',
      tags: ['Autonomous Enterprise', 'AI Revolution', 'ROI', 'Fortune 500', '8,500% ROI']
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 Ultimate Autonomous Enterprise Success',
      description: '$45.2B Annual Savings - 8,500% ROI Success Story. How a global manufacturing leader achieved complete operational autonomy.',
      type: 'case-study',
      category: 'success-stories',
      url: '/case-studies/fortune-500-ultimate-autonomous-enterprise-8500-roi-success-story',
      metrics: {
        roi: '8,500%',
        savings: '$45.2B',
        efficiency: '3,200%',
        autonomy: '99.7%'
      },
      featured: true,
      readingTime: '25 min read',
      tags: ['Fortune 500', 'Success Story', 'Manufacturing', '8,500% ROI', 'Autonomous Enterprise']
    },
    {
      id: 'implementation-guide',
      title: 'Ultimate Autonomous Enterprise Implementation Master Guide',
      description: 'Complete Roadmap to 8,500% ROI - The definitive guide to transforming your organization into a fully autonomous enterprise.',
      type: 'resource',
      category: 'implementation',
      url: '/resources/ultimate-autonomous-enterprise-implementation-master-guide-2025',
      metrics: {
        roi: '8,500%',
        timeline: '18 months',
        success: '99.7%',
        guide: 'Complete'
      },
      featured: true,
      readingTime: '45 min read',
      tags: ['Implementation Guide', 'Master Guide', 'ROI', 'Complete Roadmap', '8,500% ROI']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'ai-revolution', label: 'AI Revolution', count: content.filter(c => c.category === 'ai-revolution').length },
    { id: 'success-stories', label: 'Success Stories', count: content.filter(c => c.category === 'success-stories').length },
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
      case 'resource': return 'from-purple-500 to-indigo-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full text-sm font-semibold mb-4">
            🚀 ULTIMATE AUTONOMOUS ENTERPRISE REVOLUTION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Business with 8,500% ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the complete guide to achieving ultimate autonomous enterprise transformation with unprecedented efficiency and profitability.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">8,500%</div>
            <div className="text-gray-600 font-medium">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">$45.2B+</div>
            <div className="text-gray-600 font-medium">Annual Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">3,200%</div>
            <div className="text-gray-600 font-medium">Efficiency Gains</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">99.7%</div>
            <div className="text-gray-600 font-medium">Success Rate</div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Content Header */}
              <div className={`h-2 bg-gradient-to-r ${getTypeColor(item.type)}`}></div>
              
              <div className="p-6">
                {/* Type and Featured Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                      {item.type.replace('-', ' ')}
                    </span>
                  </div>
                  {item.featured && (
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-bold rounded-full">
                      FEATURED
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-purple-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-purple-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-bold text-indigo-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Reading Time and CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                  <Link
                    href={item.url}
                    className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${getTypeColor(item.type)} text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105`}
                  >
                    {item.type === 'blog' ? 'Read Article' : item.type === 'case-study' ? 'View Case Study' : 'Get Guide'}
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Enterprise?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join the Ultimate Autonomous Enterprise Revolution and achieve 8,500% ROI with complete operational autonomy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Get Free Consultation
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/resources/ultimate-autonomous-enterprise-implementation-master-guide-2025"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                Download Master Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateAutonomousEnterpriseShowcase2025;