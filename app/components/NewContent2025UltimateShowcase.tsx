'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi: string;
    savings: string;
    efficiency: string;
  };
  readingTime: string;
  featured: boolean;
  description: string;
}

const NewContent2025UltimateShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const newContent: ContentItem[] = [
    {
      id: 'autonomous-enterprise-systems',
      title: 'AI 2025: Next-Generation Autonomous Enterprise Systems - Ultimate Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-2025-next-generation-autonomous-enterprise-systems-ultimate-breakthrough',
      metrics: {
        roi: '1,500%',
        savings: '$45.2M',
        efficiency: '99.8%'
      },
      readingTime: '28 min read',
      featured: true,
      description: 'Discover how Fortune 500 companies are achieving 1,500% ROI with next-generation autonomous enterprise systems that operate independently with 99.8% reliability.'
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 Autonomous Enterprise Transformation: $8.2B Company Achieves 1,500% ROI in 18 Months',
      type: 'case-study',
      url: '/case-studies/fortune-500-autonomous-enterprise-transformation-1500-roi-success',
      metrics: {
        roi: '1,500%',
        savings: '$67M',
        efficiency: '99.8%'
      },
      readingTime: '22 min read',
      featured: true,
      description: 'Real-world success story of how a Fortune 500 manufacturing giant transformed their operations with autonomous enterprise systems, achieving unprecedented efficiency and profitability.'
    },
    {
      id: 'implementation-master-guide',
      title: 'Autonomous Enterprise Implementation Master Guide 2025: From Strategy to 1,500% ROI',
      type: 'resource',
      url: '/resources/autonomous-enterprise-implementation-master-guide-2025',
      metrics: {
        roi: '1,500%',
        savings: '$218M',
        efficiency: '95%'
      },
      readingTime: '35 min read',
      featured: true,
      description: 'Comprehensive guide to implementing autonomous enterprise systems that deliver exceptional ROI, featuring proven frameworks, best practices, and real-world success stories.'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: newContent.length },
    { id: 'blog', label: 'Blog Posts', count: newContent.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: newContent.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: newContent.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? newContent 
    : newContent.filter(item => item.type === selectedCategory);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study': return 'bg-green-100 text-green-800 border-green-200';
      case 'resource': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog': return 'Blog Post';
      case 'case-study': return 'Case Study';
      case 'resource': return 'Implementation Guide';
      default: return 'Content';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold">🚀 NEW BREAKTHROUGH CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Autonomous Enterprise Systems: The Ultimate Breakthrough
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary content that's helping Fortune 500 companies achieve 1,500% ROI with next-generation autonomous enterprise systems
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Success metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-green-600 mb-2">1,500%</div>
            <div className="text-gray-600 font-semibold">Average ROI</div>
            <div className="text-sm text-gray-500 mt-2">Within 18 months</div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-blue-600 mb-2">99.8%</div>
            <div className="text-gray-600 font-semibold">System Reliability</div>
            <div className="text-sm text-gray-500 mt-2">Autonomous operations</div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-purple-600 mb-2">$45.2M</div>
            <div className="text-gray-600 font-semibold">Average Savings</div>
            <div className="text-sm text-gray-500 mt-2">Per enterprise annually</div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-indigo-600 mb-2">94%</div>
            <div className="text-gray-600 font-semibold">Success Rate</div>
            <div className="text-sm text-gray-500 mt-2">Exceed ROI projections</div>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Content type badge */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border ${getTypeColor(content.type)}`}>
                    <span className="mr-2">{getTypeIcon(content.type)}</span>
                    {getTypeLabel(content.type)}
                  </div>
                  {content.featured && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {content.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {content.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{content.metrics.roi}</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{content.metrics.savings}</div>
                    <div className="text-xs text-gray-500">Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">{content.metrics.efficiency}</div>
                    <div className="text-xs text-gray-500">Efficiency</div>
                  </div>
                </div>

                {/* Reading time */}
                <div className="text-sm text-gray-500 mb-6">
                  📖 {content.readingTime}
                </div>
              </div>

              {/* Action buttons */}
              <div className="px-6 pb-6">
                <div className="flex flex-col gap-3">
                  <Link
                    href={content.url}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105"
                  >
                    Read {getTypeLabel(content.type)}
                  </Link>
                  <Link
                    href="/services"
                    className="border-2 border-gray-200 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300"
                  >
                    Get Implementation Help
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Enterprise?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join the Fortune 500 companies achieving 1,500% ROI with autonomous enterprise systems. 
            Start your transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateShowcase;