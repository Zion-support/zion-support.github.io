'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('all');

  const content = [
    {
      id: 'cybersecurity-revolution',
      title: 'AI 2025: The Cybersecurity Revolution',
      description: 'Enterprise Protection at Scale - 300% faster threat detection, 95% reduction in false positives, $2.3M average annual savings',
      url: '/blog/ai-2025-cybersecurity-revolution-enterprise-protection',
      type: 'blog',
      category: 'AI & Security',
      readTime: '15 min read',
      metrics: '$2.3M savings',
      featured: true,
      tags: ['AI', 'Cybersecurity', 'Enterprise Security', 'ROI']
    },
    {
      id: 'cloud-migration-success',
      title: 'AI-Powered Cloud Migration: $50M Savings',
      description: 'Ultimate Success Story - 400% performance improvement, 99.99% uptime achieved, complete digital transformation',
      url: '/case-studies/ai-cloud-migration-2025-ultimate-success',
      type: 'case-study',
      category: 'Case Studies',
      readTime: '12 min read',
      metrics: '$50M savings',
      featured: true,
      tags: ['Cloud Migration', 'AI', 'Cost Savings', 'ROI']
    },
    {
      id: 'enterprise-transformation-guide',
      title: 'Enterprise Transformation Master Guide',
      description: 'From Strategy to 500% ROI - Complete roadmap for AI transformation success with proven methodologies',
      url: '/resources/ai-2025-enterprise-transformation-master-guide',
      type: 'resource',
      category: 'Resources',
      readTime: '25 min read',
      metrics: '500% ROI',
      featured: true,
      tags: ['Master Guide', 'AI Transformation', 'Strategy', 'ROI']
    },
    {
      id: 'automation-revolution',
      title: 'The Automation Revolution',
      description: 'Enterprise Efficiency at Scale - 400% productivity gains, 85% cost reduction, $75M+ annual savings',
      url: '/blog/ai-2025-automation-revolution-enterprise-efficiency',
      type: 'blog',
      category: 'AI & Automation',
      readTime: '18 min read',
      metrics: '$75M+ savings',
      featured: true,
      tags: ['Automation', 'Productivity', 'Efficiency', 'ROI']
    },
    {
      id: 'autonomous-systems-revolution',
      title: 'AI 2025: The Next Generation Autonomous Systems Revolution',
      description: 'Revolutionary autonomous systems delivering 400% ROI in 90 days with cutting-edge AI technology',
      url: '/blog/ai-2025-next-generation-autonomous-systems-revolution',
      type: 'blog',
      category: 'AI & Innovation',
      readTime: '20 min read',
      metrics: '400% ROI',
      featured: false,
      tags: ['AI', 'Autonomous Systems', 'Innovation', 'ROI']
    },
    {
      id: 'global-enterprise-success',
      title: 'Global Enterprise AI Transformation: $2.8B Success',
      description: 'Ultimate Success Story - Complete digital transformation with measurable business impact',
      url: '/case-studies/global-enterprise-ai-transformation-2025-ultimate-success',
      type: 'case-study',
      category: 'Case Studies',
      readTime: '14 min read',
      metrics: '$2.8B impact',
      featured: false,
      tags: ['AI Transformation', 'Enterprise', 'Success Story', 'ROI']
    }
  ];

  const categories = [
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
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            🚀 REVOLUTIONARY CONTENT 2025
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transform Your Business with AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI insights, success stories, and implementation guides that are helping enterprises achieve 500% ROI and $50M+ in annual savings.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">500%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$50M+</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">400%</div>
            <div className="text-gray-600">Productivity Gains</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
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
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {item.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-sm font-semibold">
                  ⭐ FEATURED CONTENT
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(item.type)}`}>
                      {item.category}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm font-semibold text-green-600">
                      {item.metrics}
                    </span>
                  </div>
                </div>

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

                <Link
                  href={item.url}
                  className="inline-flex items-center w-full justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                >
                  Read Now
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join hundreds of enterprises achieving 500% ROI with our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;