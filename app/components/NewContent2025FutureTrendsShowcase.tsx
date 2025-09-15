'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const NewContent2025FutureTrendsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'ai-2025-future-trends-revolutionary-breakthrough',
      title: 'AI 2025: The Future Trends Revolutionary Breakthrough',
      type: 'Blog Post',
      category: 'trends',
      url: '/blog/ai-2025-future-trends-revolutionary-breakthrough',
      metrics: {
        roi: '1,200%',
        savings: '$15.8B+',
        efficiency: '89%',
        accuracy: '99.7%'
      },
      readingTime: '25 min read',
      description: 'Complete guide to revolutionary AI trends delivering 1,200% ROI',
      featured: true,
      tags: ['AI Trends', 'Future Predictions', 'ROI', 'Revolutionary Breakthrough']
    },
    {
      id: 'ai-2025-fortune-500-transformation-1200-roi-success-story',
      title: 'Fortune 500 AI Transformation: $15.8B Annual Savings',
      type: 'Case Study',
      category: 'case-study',
      url: '/case-studies/ai-2025-fortune-500-transformation-1200-roi-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$15.8B',
        timeline: '18 months',
        efficiency: '89%'
      },
      readingTime: '18 min read',
      description: 'Ultimate success story of Fortune 500 AI transformation',
      featured: true,
      tags: ['Fortune 500', 'AI Transformation', 'Success Story', 'Manufacturing']
    },
    {
      id: 'ai-2025-implementation-ultimate-framework-1200-roi',
      title: 'AI 2025 Implementation Ultimate Framework',
      type: 'Resource Guide',
      category: 'resources',
      url: '/resources/ai-2025-implementation-ultimate-framework-1200-roi',
      metrics: {
        roi: '1,200%',
        success: '94%',
        timeline: '18 months',
        projects: '500+'
      },
      readingTime: '35 min read',
      description: 'Complete roadmap to achieving 1,200% ROI with AI',
      featured: true,
      tags: ['Implementation Framework', 'AI Strategy', 'Complete Roadmap']
    },
    {
      id: 'ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      type: 'Blog Post',
      category: 'trends',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
      metrics: {
        roi: '1,200%',
        savings: '$3.2B',
        efficiency: '95%',
        satisfaction: '99.2%'
      },
      readingTime: '25 min read',
      description: 'Revolutionary enterprise AI breakthrough guide',
      featured: false,
      tags: ['Enterprise AI', 'Revolution', 'Breakthrough', '2025']
    },
    {
      id: 'fortune-500-ai-transformation-2025-ultimate-success-story',
      title: 'Fortune 500 AI Transformation 2025: $2.8B Annual Savings',
      type: 'Case Study',
      category: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '156%',
        satisfaction: '89%'
      },
      readingTime: '18 min read',
      description: 'Ultimate success story of AI transformation',
      featured: false,
      tags: ['Fortune 500', 'AI Transformation', 'Success Story', '2025']
    },
    {
      id: 'ai-2025-implementation-ultimate-success-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework',
      type: 'Resource Guide',
      category: 'resources',
      url: '/resources/ai-2025-implementation-ultimate-success-framework',
      metrics: {
        roi: '1,200%',
        success: '94%',
        efficiency: '67%',
        satisfaction: '89%'
      },
      readingTime: '30 min read',
      description: 'Complete guide to 1,200% ROI implementation',
      featured: false,
      tags: ['Implementation Framework', 'AI Strategy', 'Success Framework']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'trends', label: 'AI Trends', count: contentItems.filter(item => item.category === 'trends').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.category === 'case-study').length },
    { id: 'resources', label: 'Resources', count: contentItems.filter(item => item.category === 'resources').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const featuredContent = contentItems.filter(item => item.featured);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-semibold">🚀 NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI 2025 Future Trends Revolutionary Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the revolutionary AI trends, success stories, and implementation frameworks 
            that are delivering 1,200% ROI and transforming industries worldwide.
          </p>
        </div>

        {/* Success metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">1,200%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$15.8B+</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">89%</div>
            <div className="text-gray-600">Efficiency Gains</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">94%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Featured content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredContent.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {item.type}
                    </span>
                    <span className="text-sm text-gray-500">{item.readingTime}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                      <div className="text-xs text-gray-500">Savings</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={item.url}
                    className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block"
                  >
                    Read {item.type}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category filters */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">All Content</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  activeCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {item.type}
                  </span>
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                
                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-500">Savings</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={item.url}
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block"
                >
                  Read {item.type}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join the AI revolution and achieve 1,200% ROI with our proven implementation framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get AI Consultation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025FutureTrendsShowcase;