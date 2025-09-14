'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi?: string;
    savings?: string;
    efficiency?: string;
    success_rate?: string;
  };
  reading_time: string;
  featured: boolean;
  tags: string[];
}

const UltimateContentShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const contentItems: ContentItem[] = [
    {
      id: 'ai-enterprise-automation-mastery',
      title: 'AI 2025: Enterprise Automation Mastery - Ultimate Success Guide',
      description: 'Master enterprise automation with AI in 2025. Achieve 1,200% ROI, $500M+ savings, and 99.8% efficiency with our proven framework.',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '1,200%',
        savings: '$500M+',
        efficiency: '99.8%',
        success_rate: '98%'
      },
      reading_time: '35 min read',
      featured: true,
      tags: ['AI', 'Enterprise Automation', 'ROI', 'Success Guide', '2025']
    },
    {
      id: 'fortune-500-ai-success',
      title: 'Fortune 500 AI Success 2025: $2.8B Savings Story',
      description: 'How a Fortune 500 company achieved $2.8B in annual savings and 1,500% ROI through comprehensive AI transformation in just 18 months.',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-success-2025',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        efficiency: '340%',
        success_rate: '98%'
      },
      reading_time: '15 min read',
      featured: true,
      tags: ['Fortune 500', 'AI Transformation', 'Case Study', 'ROI', 'Success Story']
    },
    {
      id: 'ai-implementation-guide',
      title: 'AI Implementation Guide 2025: Complete Roadmap to Success',
      description: 'Master AI implementation with our comprehensive guide. Achieve 1,200% ROI, $500M+ savings, and 99% success rate with proven methodologies.',
      type: 'resource',
      url: '/resources/ai-implementation-guide-2025',
      metrics: {
        roi: '1,200%',
        savings: '$500M+',
        efficiency: '99%',
        success_rate: '99%'
      },
      reading_time: '30 min read',
      featured: true,
      tags: ['AI Implementation', 'Guide', 'ROI', 'Strategy', '2025']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === selectedCategory);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study': return 'bg-green-100 text-green-800 border-green-200';
      case 'resource': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
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
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 ULTIMATE CONTENT 2025</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Master AI Implementation with Proven Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from real-world implementations that achieved 1,200%+ ROI, $500M+ savings, and 99% success rates.
          </p>
        </div>

        {/* Success Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">1,200%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">$500M+</div>
            <div className="text-gray-600">Average Savings</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">18</div>
            <div className="text-gray-600">Months to ROI</div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
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
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Content Type Badge */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)} {item.type.replace('-', ' ').toUpperCase()}
                  </div>
                  {item.featured && (
                    <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                      ⭐ Featured
                    </div>
                  )}
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-2 bg-purple-50 rounded-lg">
                    <div className="text-lg font-bold text-purple-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">{item.metrics.efficiency}</div>
                    <div className="text-xs text-gray-600">Efficiency</div>
                  </div>
                  <div className="text-center p-2 bg-orange-50 rounded-lg">
                    <div className="text-lg font-bold text-orange-600">{item.metrics.success_rate}</div>
                    <div className="text-xs text-gray-600">Success Rate</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Reading Time */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>⏱️ {item.reading_time}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6">
                <Link
                  href={item.url}
                  className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block"
                >
                  Read {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Guide' : 'Article'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Get personalized guidance and implementation support from our AI transformation experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Get Expert Consultation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
              >
                Explore All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;