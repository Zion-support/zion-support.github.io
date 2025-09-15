'use client';

import React{ useState } from 'react';
import Link from 'next/link';

const AI2025BreakthroughContentShowcase = () => {
  const [activeTabsetActiveTab] = useState('all');

  const content = [
    {
      id: 'enterprise-automation',
      title: 'AI 2025: The Enterprise Automation Revolution - Ultimate Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-revolution-ultimate-breakthrough',
      metrics: {
        roi: '750%',
        savings: '$3.2B',
        efficiency: '89%',
        accuracy: '99.7%'
      },
      description: 'Transform your business with revolutionary AI automation achieving unprecedented returns',
      featured: true,
      readingTime: '28 min read',
      tags: ['AI 'Automation', 'Enterprise', 'ROI', 'Breakthrough']
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $4.2B Company Achieves 850% ROI',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-ultimate-success-2025',
      metrics: {
        roi: '850%',
        savings: '$3.8B',
        efficiency: '89%',
        accuracy: '99.7%'
      },
      description: 'Real-world success story of comprehensive AI transformation',
      featured: true,
      readingTime: '22 min read',
      tags: ['Fortune 500'Case 'Study', 'ROI'Success Story']
    },
    {
      id: 'implementation-roadmap',
      title: 'AI Implementation Ultimate Roadmap 2025: From Strategy to 900% ROI',
      type: 'resource',
      url: '/resources/ai-implementation-ultimate-roadmap-2025-comprehensive',
      metrics: {
        roi: '900%',
        timeline: '18 months',
        success: '99%',
        savings: '$173.7M'
      },
      description: 'Step-by-step guide to achieving unprecedented AI success',
      featured: true,
      readingTime: '35 min read',
      tags: [', 'Implementation', 'Strategy', 'ROI', 'Roadmap']
    },
    {
      id: 'quantum-computing',
      title: 'AI 2025: The Quantum Computing Business Revolution - Ultimate Guide',
      type: 'blog',
      url: '/blog/ai-2025-quantum-computing-business-revolution-ultimate-guide',
      metrics: {
        roi: '500%',
        market: '$100B',
        speed: '1000x',
        accuracy: '99.9%'
      },
      description: 'Revolutionary quantum AI transforming enterprise operations',
      featured: false,
      readingTime: '30 min read',
      tags: ['Quantum 'Computing', 'AI 'Revolution', 'Business Transformation']
    },
    {
      id: 'fortune-500-650',
      title: 'Fortune 500 AI Transformation: $3.2B Company Achieves 650% ROI',
      type: 'case-study',
      url: '/case-studies/ai-transformation-fortune-500-ultimate-success-2025',
      metrics: {
        roi: '650%',
        savings: '$2.8B',
        efficiency: '78%',
        accuracy: '99.7%'
      },
      description: 'Comprehensive AI transformation delivering exceptional results',
      featured: false,
      readingTime: '22 min read',
      tags: ['Fortune 500'AI 'Transformation', 'ROI'Manufacturing']
    }
  ];

  const tabs = [
    { id: ''all', 'label: 'All 'Content', 'count: content.length },
    { id: ''blog', 'label: 'Blog 'Posts', 'count: content.filter(c => c.type === 'blog').length },
    { id: 'case-'study', 'label: 'Case 'Studies', 'count: content.filter(c => c.type === 'case-study').length },
    { id: ''resource', 'label: ''Resources', 'count: content.filter(c => c.type === 'resource').length }
  ];

  const filteredContent = activeTab === 'all' 
    ? content 
    : content.filter(c => c.type === activeTab);

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
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 AI 2025 BREAKTHROUGH CONTENT</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content That Delivers Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the strategiescase studiesand implementation guides that are helping 
            Fortune 500 companies achieve 750%+ ROI and transform their operations.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:scale-105 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {item.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-sm font-semibold text-center">
                  ⭐ FEATURED CONTENT
                </div>
              )}
              
              <div className="p-6">
                {/* Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)} {item.type.replace('-' ').toUpperCase()}
                  </span>
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Object.entries(item.metrics).map(([keyvalue]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-2 text-center">
                      <div className="text-sm font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g' $1')}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.slice(03).map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={item.url}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition-all"
                >
                  Read {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-purple-100 mb-6 text-lg">
              Join 500+ companies achieving 750%+ ROI with our proven AI strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
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

export default AI2025BreakthroughContentShowcase;