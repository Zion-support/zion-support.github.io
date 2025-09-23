'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AI2025UltimateInnovationBreakthroughShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const content = [
    {
      id: 'ai-2025-ultimate-innovation-breakthrough-ultimate-guide',
      title: 'AI 2025: The Ultimate Innovation Breakthrough - Ultimate Guide to 15,000% ROI',
      description: 'Revolutionary AI technologies delivering extraordinary returns on investment. Comprehensive guide covering advanced neural architectures, quantum-enhanced AI, and autonomous systems.',
      type: 'blog',
      readingTime: '35 min read',
      metrics: {
        roi: '15,000%',
        savings: '$180M+',
        accuracy: '99.99%',
        efficiency: '3,200%'
      },
      tags: ['AI Innovation', 'ROI', 'Fortune 500', 'Breakthrough'],
      link: '/blog/ai-2025-ultimate-innovation-breakthrough-ultimate-guide',
      featured: true
    },
    {
      id: 'fortune-500-ai-innovation-breakthrough-15000-roi-success-story',
      title: 'Fortune 500 AI Innovation Breakthrough: $180M Annual Savings - 15,000% ROI Success Story',
      description: 'Real-world case study of manufacturing conglomerate achieving unprecedented returns through comprehensive AI innovation implementation.',
      type: 'case-study',
      readingTime: '22 min read',
      metrics: {
        roi: '15,000%',
        savings: '$180M',
        uptime: '99.9%',
        efficiency: '2,200%'
      },
      tags: ['Fortune 500', 'Case Study', 'Manufacturing', 'Success Story'],
      link: '/case-studies/fortune-500-ai-innovation-breakthrough-15000-roi-success-story',
      featured: true
    },
    {
      id: 'ai-innovation-implementation-ultimate-guide-2025',
      title: 'AI Innovation Implementation Ultimate Guide 2025: Complete Roadmap to 15,000% ROI',
      description: 'Step-by-step implementation framework with proven strategies for achieving extraordinary AI returns across enterprise organizations.',
      type: 'resource',
      readingTime: '45 min read',
      metrics: {
        successRate: '94%',
        timeline: '12-18 months',
        investment: '$8-25M',
        roi: '15,000%'
      },
      tags: ['Implementation Guide', 'ROI', 'Strategy', 'Framework'],
      link: '/resources/ai-innovation-implementation-ultimate-guide-2025',
      featured: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'blog', label: 'Blog Posts', count: content.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: content.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: content.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? content 
    : content.filter(item => item.type === activeFilter);

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
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4">
            🚀 AI 2025 ULTIMATE INNOVATION BREAKTHROUGH
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the breakthrough AI innovations delivering 15,000% ROI across Fortune 500 companies. 
            Comprehensive guides, real-world case studies, and implementation frameworks.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">15,000%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$180M+</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">99.99%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">94%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)} {item.type.replace('-', ' ').toUpperCase()}
                  </span>
                  {item.featured && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      ⭐ FEATURED
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Reading Time */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item.readingTime}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6">
                <div className="flex gap-3">
                  <Link
                    href={item.link}
                    className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg font-medium text-center hover:bg-purple-700 transition-colors"
                  >
                    Read {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Guide' : 'Article'}
                  </Link>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve 15,000% ROI with AI Innovation?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get personalized consultation and implementation support from our AI experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get AI Consultation
              </Link>
              <Link
                href="/ai-innovation-hub"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025UltimateInnovationBreakthroughShowcase;