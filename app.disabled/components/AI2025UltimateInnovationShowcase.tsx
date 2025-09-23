'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AI2025UltimateInnovationShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const innovationContent = [
    {
      id: 'ai-innovation-showcase',
      title: 'AI 2025: The Ultimate Innovation Showcase Revolution',
      description: '4,200% ROI Through Next-Generation Intelligence - The most comprehensive transformation in enterprise technology history.',
      metrics: {
        roi: '4,200%',
        savings: '$15.8B+',
        efficiency: '1,800%',
        accuracy: '99.97%'
      },
      url: '/blog/ai-2025-ultimate-innovation-showcase-revolution',
      type: 'Blog Post',
      category: 'innovation',
      readingTime: '35 min read',
      featured: true,
      tags: ['AI Innovation', 'Next-Generation Intelligence', 'Enterprise Transformation', 'ROI']
    },
    {
      id: 'fortune-500-innovation-success',
      title: 'Fortune 500 AI Innovation Success Story',
      description: '$15.8B Annual Savings - 4,200% ROI Success - Real-world implementation results from Fortune 500 manufacturing giant.',
      metrics: {
        roi: '4,200%',
        savings: '$15.8B',
        satisfaction: '99.7%',
        timeline: '18 months'
      },
      url: '/case-studies/fortune-500-ai-innovation-showcase-4200-roi-success-story',
      type: 'Case Study',
      category: 'success',
      readingTime: '22 min read',
      featured: true,
      tags: ['Fortune 500', 'Success Story', 'Manufacturing', 'ROI']
    },
    {
      id: 'ai-innovation-implementation-guide',
      title: 'AI Innovation Implementation Ultimate Guide',
      description: 'Complete Roadmap to 4,200% ROI - Step-by-step implementation guide for enterprise AI transformation.',
      metrics: {
        roi: '4,200%',
        timeline: '18 months',
        success: '99.7%',
        guide: '45 min read'
      },
      url: '/resources/ai-innovation-implementation-ultimate-guide-2025-2026',
      type: 'Implementation Guide',
      category: 'guide',
      readingTime: '45 min read',
      featured: true,
      tags: ['Implementation', 'Roadmap', 'Best Practices', 'Guide']
    },
    {
      id: 'advanced-neural-architectures',
      title: 'Advanced Neural Architectures Revolution',
      description: '2,800% ROI Through Next-Generation Intelligence - Revolutionary neural network architectures for enterprise success.',
      metrics: {
        roi: '2,800%',
        savings: '$4.2B',
        accuracy: '99.7%',
        timeline: '8 months'
      },
      url: '/blog/ai-2025-advanced-neural-architectures-revolution',
      type: 'Blog Post',
      category: 'innovation',
      readingTime: '25 min read',
      featured: false,
      tags: ['Neural Architectures', 'AI Innovation', 'Enterprise', 'ROI']
    },
    {
      id: 'synthetic-intelligence-breakthrough',
      title: 'Synthetic Intelligence Breakthrough',
      description: '2,500% ROI Through Artificial General Intelligence - Next-generation AGI systems for autonomous business operations.',
      metrics: {
        roi: '2,500%',
        savings: '$8.2B+',
        accuracy: '99.7%',
        efficiency: '1,800%'
      },
      url: '/blog/ai-2025-synthetic-intelligence-revolution-ultimate-breakthrough',
      type: 'Blog Post',
      category: 'innovation',
      readingTime: '30 min read',
      featured: false,
      tags: ['Synthetic Intelligence', 'AGI', 'Autonomous Operations', 'ROI']
    },
    {
      id: 'autonomous-business-ecosystems',
      title: 'Autonomous Business Ecosystems Revolution',
      description: '7,500% ROI Through Self-Managing Enterprise Systems - Complete autonomous business transformation.',
      metrics: {
        roi: '7,500%',
        savings: '$25.8B+',
        efficiency: '2,400%',
        accuracy: '99.97%'
      },
      url: '/blog/ai-2025-2026-ultimate-autonomous-enterprise-revolution-ultimate-breakthrough',
      type: 'Blog Post',
      category: 'innovation',
      readingTime: '35 min read',
      featured: false,
      tags: ['Autonomous Systems', 'Business Transformation', 'Enterprise', 'ROI']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: innovationContent.length },
    { id: 'innovation', name: 'Innovation', count: innovationContent.filter(item => item.category === 'innovation').length },
    { id: 'success', name: 'Success Stories', count: innovationContent.filter(item => item.category === 'success').length },
    { id: 'guide', name: 'Implementation Guides', count: innovationContent.filter(item => item.category === 'guide').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? innovationContent 
    : innovationContent.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-semibold">🚀 AI 2025 INNOVATION SHOWCASE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ultimate Innovation Showcase Revolution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the most comprehensive AI innovation collection featuring 4,200% ROI success stories, 
            implementation guides, and breakthrough technologies that are transforming enterprise operations.
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">4,200%</div>
              <div className="text-gray-600 font-medium">Average ROI</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">$15.8B+</div>
              <div className="text-gray-600 font-medium">Annual Savings</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="text-3xl font-bold text-green-600 mb-2">1,800%</div>
              <div className="text-gray-600 font-medium">Efficiency Gain</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="text-3xl font-bold text-orange-600 mb-2">99.97%</div>
              <div className="text-gray-600 font-medium">Accuracy Rate</div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105 ${
                content.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {content.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-sm font-semibold">
                  ⭐ Featured Content
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {content.type}
                  </span>
                  <span className="text-gray-500 text-sm">{content.readingTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-3">
                  {content.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(content.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-gray-900">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {content.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={content.url}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Explore {content.type} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Enterprise with AI Innovation?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join Fortune 500 companies achieving 4,200% ROI with our AI Innovation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/resources/ai-innovation-implementation-ultimate-guide-2025-2026"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Download Implementation Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025UltimateInnovationShowcase;