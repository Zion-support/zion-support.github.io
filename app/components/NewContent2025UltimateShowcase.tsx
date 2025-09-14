'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const NewContent2025UltimateShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const newContent = [
    {
      id: 'enterprise-automation-mastery',
      title: 'AI 2025: Enterprise Automation Mastery - Ultimate Success Guide',
      type: 'Blog Post',
      category: 'blog',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '500%+',
        savings: '$2.8B+',
        efficiency: '78%',
        satisfaction: '98%'
      },
      description: 'Master enterprise automation with AI in 2025. Achieve 500%+ ROI with our comprehensive implementation framework and proven strategies.',
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'fortune-100-transformation',
      title: 'Fortune 100 AI Transformation: $5.2B Company Achieves 1,200% ROI in 24 Months',
      type: 'Case Study',
      category: 'case-study',
      url: '/case-studies/ai-transformation-fortune-100-ultimate-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '24 months',
        satisfaction: '98%'
      },
      description: 'Discover how a Fortune 100 company achieved unprecedented success with AI transformation, delivering 1,200% ROI and $2.8B in annual savings.',
      readingTime: '12 min read',
      featured: true
    },
    {
      id: 'implementation-framework',
      title: 'AI Implementation Ultimate Success Framework 2025: Complete Roadmap to 1,000%+ ROI',
      type: 'Resource',
      category: 'resource',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      metrics: {
        roi: '1,000%+',
        success: '94%',
        timeline: '18 months',
        projects: '1,000+'
      },
      description: 'Master AI implementation with our proven framework. Achieve 1,000%+ ROI with step-by-step guidance, best practices, and real-world success strategies.',
      readingTime: '25 min read',
      featured: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: newContent.length },
    { id: 'blog', label: 'Blog Posts', count: newContent.filter(item => item.category === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: newContent.filter(item => item.category === 'case-study').length },
    { id: 'resource', label: 'Resources', count: newContent.filter(item => item.category === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? newContent 
    : newContent.filter(item => item.category === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Blog Post': return '📝';
      case 'Case Study': return '📊';
      case 'Resource': return '📚';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Blog Post': return 'bg-blue-100 text-blue-800';
      case 'Case Study': return 'bg-green-100 text-green-800';
      case 'Resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ultimate AI Success Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest guides, case studies, and frameworks that are helping companies achieve 
            <span className="font-semibold text-purple-600"> 1,000%+ ROI</span> with AI implementation.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">1,000%+</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">$2.8B+</div>
            <div className="text-gray-600">Total Savings</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">94%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">1,000+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeFilter === filter.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-purple-50'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getTypeColor(content.type)}`}>
                    {getTypeIcon(content.type)} {content.type}
                  </span>
                  {content.featured && (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {content.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {content.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-lg font-bold text-purple-600">{content.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">{content.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{content.readingTime}</span>
                  <span className="font-semibold">
                    {content.metrics.efficiency || content.metrics.success} Success Rate
                  </span>
                </div>

                {/* CTA Button */}
                <Link
                  href={content.url}
                  className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block"
                >
                  Read {content.type}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Achieve 1,000%+ ROI with AI?
            </h3>
            <p className="text-purple-100 mb-6 text-lg">
              Join thousands of companies transforming their business with our proven AI implementation strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
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
    </section>
  );
};

export default NewContent2025UltimateShowcase;