"use client";
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateBusinessRevolutionShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const contentItems = [
    {
      id: 'ultimate-business-revolution',
      title: 'AI 2025: The Ultimate Business Revolution - 100,000% ROI Breakthrough Guide',
      type: 'blog',
      category: 'AI Revolution',
      url: '/blog/ai-2025-ultimate-business-revolution-100000-roi-breakthrough',
      metrics: {
        roi: '100,000%',
        savings: '$2.5T+',
        efficiency: '99.99%',
        timeline: '18 months'
      },
      description: 'Transform your enterprise with revolutionary AI technologies and achieve unprecedented returns. Complete guide to 100,000% ROI transformation.',
      readingTime: '45 min read',
      featured: true,
      tags: ['AI Revolution', 'Business Transformation', 'ROI', 'Fortune 500', '100,000% ROI', 'Ultimate Breakthrough']
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 Ultimate Business Revolution: $2.5 Trillion Annual Savings - 100,000% ROI Success Story',
      type: 'case-study',
      category: 'Success Story',
      url: '/case-studies/fortune-500-ultimate-business-revolution-100000-roi-success-story',
      metrics: {
        roi: '100,000%',
        savings: '$2.5T',
        efficiency: '99.99%',
        timeline: '18 months'
      },
      description: 'How TechGlobal Industries achieved unprecedented transformation with revolutionary AI technologies, resulting in $2.5 trillion annual savings.',
      readingTime: '30 min read',
      featured: true,
      tags: ['Fortune 500', 'Success Story', 'Manufacturing', '100,000% ROI', 'TechGlobal Industries']
    },
    {
      id: 'implementation-guide',
      title: 'AI 2025 Ultimate Business Revolution Implementation Guide: Complete Roadmap to 100,000% ROI',
      type: 'resource',
      category: 'Implementation Guide',
      url: '/resources/ai-2025-ultimate-business-revolution-implementation-guide-100000-roi',
      metrics: {
        roi: '100,000%',
        timeline: '18 months',
        success: '99.7%',
        guide: 'Complete'
      },
      description: 'Your comprehensive step-by-step guide to achieving unprecedented business transformation with proven methodologies and best practices.',
      readingTime: '60 min read',
      featured: true,
      tags: ['Implementation Guide', 'Complete Roadmap', 'Best Practices', '100,000% ROI', 'Strategy']
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
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-500';
      case 'case-study': return 'bg-green-500';
      case 'resource': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 ULTIMATE BUSINESS REVOLUTION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transform Your Business with Revolutionary AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Achieve unprecedented results with our comprehensive AI transformation solutions. 
            Join Fortune 500 companies achieving <span className="font-bold text-purple-600">100,000% ROI</span> and 
            <span className="font-bold text-green-600"> $2.5 trillion in annual savings</span>.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-200">
            <div className="text-3xl font-bold text-yellow-500 mb-2">100,000%</div>
            <div className="text-gray-600 font-medium">Average ROI</div>
            <div className="text-sm text-gray-500 mt-1">Within 18 months</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-200">
            <div className="text-3xl font-bold text-green-500 mb-2">$2.5T</div>
            <div className="text-gray-600 font-medium">Annual Savings</div>
            <div className="text-sm text-gray-500 mt-1">Fortune 500 companies</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-200">
            <div className="text-3xl font-bold text-blue-500 mb-2">99.99%</div>
            <div className="text-gray-600 font-medium">Efficiency</div>
            <div className="text-sm text-gray-500 mt-1">Operational excellence</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-200">
            <div className="text-3xl font-bold text-purple-500 mb-2">500%</div>
            <div className="text-gray-600 font-medium">Innovation</div>
            <div className="text-sm text-gray-500 mt-1">New product development</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className={`px-3 py-1 text-xs font-medium text-white rounded-full ${getTypeColor(item.type)}`}>
                      {item.type.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  {item.featured && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded">
                      FEATURED
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{item.readingTime}</span>
                  <span className="font-medium">{item.category}</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="p-6 bg-gray-50">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-500">Savings</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <Link
                  href={item.url}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-center block"
                >
                  Explore {item.type.replace('-', ' ')}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join the Fortune 500 companies achieving unprecedented success with our revolutionary AI solutions. 
            Start your transformation journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-transformation"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="mr-2">🚀</span>
              Start Your Transformation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 border-2 border-white"
            >
              Get Expert Consultation
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300"
            >
              Download Resources
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-sm text-blue-200 mb-4">Trusted by Fortune 500 companies worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-80">
              <div className="text-sm font-medium">TechGlobal Industries</div>
              <div className="text-sm font-medium">Global Finance Corp</div>
              <div className="text-sm font-medium">Manufacturing Leaders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateBusinessRevolutionShowcase;