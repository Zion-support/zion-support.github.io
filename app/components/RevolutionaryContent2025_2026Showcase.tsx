'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const RevolutionaryContent2025_2026Showcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'ai-2025-2026-ultimate-breakthrough-revolution',
      title: 'AI 2025-2026: The Ultimate Breakthrough Revolution',
      subtitle: '2,500% ROI Through Next-Generation Intelligence',
      description: 'Fortune 500 companies are achieving unprecedented returns with quantum AI, neural interfaces, and autonomous systems.',
      type: 'blog',
      category: 'ai-revolution',
      metrics: {
        roi: '2,500%',
        savings: '$8.2B+',
        efficiency: '1,200%',
        success: '99.7%'
      },
      readingTime: '35 min read',
      link: '/blog/ai-2025-2026-ultimate-breakthrough-revolution',
      featured: true
    },
    {
      id: 'ai-2025-2026-revolutionary-transformation-2500-roi-success',
      title: 'Fortune 100 AI Transformation Success Story',
      subtitle: '$8.2B Company Achieves 2,500% ROI in 18 Months',
      description: 'Learn how a Fortune 100 manufacturing giant revolutionized their operations with comprehensive AI transformation.',
      type: 'case-study',
      category: 'success-stories',
      metrics: {
        roi: '2,500%',
        savings: '$8.2B',
        timeline: '18 months',
        satisfaction: '99.7%'
      },
      readingTime: '22 min read',
      link: '/case-studies/ai-2025-2026-revolutionary-transformation-2500-roi-success',
      featured: true
    },
    {
      id: 'ai-2025-2026-implementation-ultimate-framework',
      title: 'AI Implementation Ultimate Framework 2025-2026',
      subtitle: 'Complete Roadmap to 2,500% ROI',
      description: 'Step-by-step guide to implementing next-generation AI technologies that deliver extraordinary returns.',
      type: 'resource',
      category: 'implementation',
      metrics: {
        roi: '2,500%',
        timeline: '18-24 months',
        success: '99.7%',
        projects: '1,000+'
      },
      readingTime: '45 min read',
      link: '/resources/ai-2025-2026-implementation-ultimate-framework',
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    { id: 'ai-revolution', name: 'AI Revolution', count: content.filter(c => c.category === 'ai-revolution').length },
    { id: 'success-stories', name: 'Success Stories', count: content.filter(c => c.category === 'success-stories').length },
    { id: 'implementation', name: 'Implementation', count: content.filter(c => c.category === 'implementation').length }
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
            <span className="text-sm font-medium">🚀 REVOLUTIONARY CONTENT 2025-2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Ultimate AI Breakthrough Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most advanced AI content that's helping Fortune 500 companies achieve 2,500% ROI through next-generation technologies.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getTypeColor(item.type)}`}>
                      {item.type.toUpperCase()}
                    </span>
                  </div>
                  {item.featured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      FEATURED
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-purple-600 font-semibold mb-3">
                  {item.subtitle}
                </p>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-purple-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>

                {/* Reading Time */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">⏱️ {item.readingTime}</span>
                  <span className="text-sm text-gray-500">📅 Jan 17, 2025</span>
                </div>

                {/* Action Button */}
                <Link
                  href={item.link}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  Read {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Achieve 2,500% ROI?</h3>
            <p className="text-lg mb-6 opacity-90">
              Get personalized implementation guidance from our AI transformation experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Expert Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContent2025_2026Showcase;