'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const RevolutionaryBreakthrough2025Showcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const content = [
    {
      id: 'revolutionary-breakthrough-guide',
      title: 'AI 2025: The Revolutionary Breakthrough - Ultimate Success Guide',
      type: 'blog',
      category: 'AI Revolution',
      description: 'Transform Your Business with Next-Generation AI That Delivers 2,500% ROI',
      metrics: {
        roi: '2,500%',
        savings: '$45.2B',
        accuracy: '99.7%'
      },
      readingTime: '25 min read',
      link: '/blog/ai-2025-revolutionary-breakthrough-ultimate-success-guide',
      featured: true,
      isNew: true
    },
    {
      id: 'fortune-500-case-study',
      title: 'Fortune 500 AI Transformation: $45.2B Annual Savings - 2,500% ROI Success Story',
      type: 'case-study',
      category: 'Success Stories',
      description: 'How a Global Manufacturing Leader Achieved Unprecedented Results with AI 2025 Implementation',
      metrics: {
        roi: '2,500%',
        savings: '$45.2B',
        timeline: '18 months'
      },
      readingTime: '18 min read',
      link: '/case-studies/fortune-500-ai-transformation-2500-roi-ultimate-success',
      featured: true,
      isNew: true
    },
    {
      id: 'implementation-roadmap',
      title: 'AI 2025 Implementation Ultimate Roadmap: Complete Guide to 2,500% ROI',
      type: 'resource',
      category: 'Implementation',
      description: 'The Definitive Step-by-Step Guide to Transforming Your Business with Next-Generation AI',
      metrics: {
        success: '94%',
        payback: '3.8 months',
        roi: '2,500%'
      },
      readingTime: '35 min read',
      link: '/resources/ai-2025-implementation-ultimate-roadmap-2500-roi',
      featured: true,
      isNew: true
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'blog', label: 'Blog Posts', count: content.filter(c => c.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: content.filter(c => c.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: content.filter(c => c.type === 'resource').length }
  ];

  const filteredContent = activeTab === 'all' 
    ? content 
    : content.filter(item => item.type === activeTab);

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
        return 'from-blue-500 to-cyan-500';
      case 'case-study':
        return 'from-green-500 to-emerald-500';
      case 'resource':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-medium mb-4">
            🚀 Revolutionary Breakthrough Content 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transform Your Business with AI 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the breakthrough AI technologies that are delivering unprecedented results for Fortune 500 companies worldwide.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">2,500%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$45.2B</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">99.7%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">18</div>
            <div className="text-gray-600">Months to ROI</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {tab.label}
              <span className="ml-2 px-2 py-1 bg-gray-200 text-gray-600 rounded-full text-xs">
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Header */}
              <div className={`h-2 bg-gradient-to-r ${getTypeColor(item.type)}`}></div>
              
              <div className="p-6">
                {/* Type and Status */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className="text-sm font-medium text-gray-500 capitalize">
                      {item.type.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {item.featured && (
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-medium rounded-full">
                        Featured
                      </span>
                    )}
                    {item.isNew && (
                      <span className="px-2 py-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-medium rounded-full">
                        New
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-3 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>⏱️</span>
                    <span>{item.readingTime}</span>
                  </div>
                  <Link
                    href={item.link}
                    className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${getTypeColor(item.type)} text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join the AI revolution and achieve breakthrough results like our Fortune 500 clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Schedule Consultation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/tools/roi-calculator"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Calculate Your ROI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryBreakthrough2025Showcase;