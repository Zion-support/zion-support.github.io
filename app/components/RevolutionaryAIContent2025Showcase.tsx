'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const RevolutionaryAIContent2025Showcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = [
    { id: 'all', label: 'All Content', count: 12 },
    { id: 'blog', label: 'Blog Posts', count: 6 },
    { id: 'case-study', label: 'Case Studies', count: 4 },
    { id: 'resource', label: 'Resources', count: 2 }
  ];

  const featuredContent = [
    {
      id: 'ai-2025-2026-ultimate-innovation-showcase-revolution',
      title: 'AI 2025-2026: The Ultimate Innovation Showcase Revolution',
      type: 'blog',
      category: 'blog',
      roi: '4,200%',
      savings: '$15.8B+',
      efficiency: '1,800%',
      accuracy: '99.97%',
      readingTime: '35 min read',
      url: '/blog/ai-2025-2026-ultimate-innovation-showcase-revolution',
      description: 'Next-generation intelligence systems delivering extraordinary business value through quantum-enhanced machine learning and synthetic intelligence.',
      featured: true,
      tags: ['AI Innovation', '2025-2026', 'ROI', 'Fortune 500', 'Revolution']
    },
    {
      id: 'fortune-500-ai-innovation-showcase-4200-roi-success-story',
      title: 'Fortune 500 AI Innovation: $15.8B Annual Savings - 4,200% ROI Success',
      type: 'case-study',
      category: 'case-study',
      roi: '4,200%',
      savings: '$15.8B',
      efficiency: '99.7%',
      accuracy: '99.7%',
      readingTime: '22 min read',
      url: '/case-studies/fortune-500-ai-innovation-showcase-4200-roi-success-story',
      description: 'Manufacturing giant achieves unprecedented AI transformation success with quantum-enhanced machine learning and autonomous business systems.',
      featured: true,
      tags: ['Fortune 500', 'AI Innovation', '4,200% ROI', 'Success Story', 'Manufacturing']
    },
    {
      id: 'ai-innovation-implementation-ultimate-guide-2025-2026',
      title: 'AI Innovation Implementation Ultimate Guide 2025-2026',
      type: 'resource',
      category: 'resource',
      roi: '4,200%',
      savings: '$15.8B+',
      efficiency: '1,800%',
      accuracy: '99.7%',
      readingTime: '45 min read',
      url: '/resources/ai-innovation-implementation-ultimate-guide-2025-2026',
      description: 'Complete roadmap to 4,200% ROI through cutting-edge AI innovation implementation across enterprise organizations.',
      featured: true,
      tags: ['Implementation Guide', 'AI Innovation', 'ROI', 'Strategy', 'Framework']
    },
    {
      id: 'ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      title: 'AI 2025: Enterprise Automation Mastery - Ultimate Success Guide',
      type: 'blog',
      category: 'blog',
      roi: '500%+',
      savings: '$2.8B+',
      efficiency: '78%',
      accuracy: '98%',
      readingTime: '18 min read',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      description: 'Comprehensive guide to achieving enterprise automation mastery with proven strategies and implementation frameworks.',
      featured: false,
      tags: ['AI Automation', 'Enterprise', 'ROI', 'Implementation', 'Success Guide']
    },
    {
      id: 'ai-transformation-fortune-100-ultimate-success-story',
      title: 'Fortune 100 AI Transformation: $5.2B Company Achieves 1,200% ROI',
      type: 'case-study',
      category: 'case-study',
      roi: '1,200%',
      savings: '$2.8B',
      efficiency: '95%',
      accuracy: '98%',
      readingTime: '12 min read',
      url: '/case-studies/ai-transformation-fortune-100-ultimate-success-story',
      description: 'Fortune 100 company achieves remarkable AI transformation success with comprehensive automation and intelligence systems.',
      featured: false,
      tags: ['Fortune 100', 'AI Transformation', 'ROI', 'Case Study', 'Success Story']
    },
    {
      id: 'ai-implementation-ultimate-success-framework-2025',
      title: 'AI Implementation Ultimate Success Framework 2025',
      type: 'resource',
      category: 'resource',
      roi: '1,000%+',
      savings: '$2.8B+',
      efficiency: '95%',
      accuracy: '94%',
      readingTime: '25 min read',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      description: 'Complete framework for AI implementation success with proven methodologies and best practices.',
      featured: false,
      tags: ['AI Implementation', 'Framework', 'ROI', 'Success Strategy', 'Enterprise AI']
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? featuredContent 
    : featuredContent.filter(content => content.category === activeCategory);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold">🚀 Revolutionary AI Content 2025</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Next-Generation AI Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore proven strategies, real-world case studies, and implementation guides that deliver extraordinary ROI through cutting-edge AI innovation.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-700 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                content.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {content.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-t-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">⭐ Featured Content</span>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {content.type.toUpperCase()}
                    </span>
                  </div>
                </div>
              )}
              
              <div className="p-6">
                {/* Content type and reading time */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      content.type === 'blog' 
                        ? 'bg-blue-100 text-blue-800'
                        : content.type === 'case-study'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {content.type.replace('-', ' ')}
                    </span>
                    {!content.featured && (
                      <span className="text-gray-500 text-sm">{content.readingTime}</span>
                    )}
                  </div>
                  {content.featured && (
                    <span className="text-purple-600 text-sm font-semibold">{content.readingTime}</span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Success metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-600">{content.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-600">{content.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {content.tags.length > 3 && (
                    <span className="text-gray-500 text-xs">+{content.tags.length - 3} more</span>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href={content.url}
                  className={`w-full inline-flex items-center justify-center px-4 py-3 rounded-lg font-semibold transition-colors ${
                    content.featured
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  Read Full Story
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Achieve 4,200% ROI with AI Innovation?
            </h3>
            <p className="text-gray-600 mb-6">
              Join Fortune 500 companies achieving extraordinary success through cutting-edge AI implementation. 
              Get your customized AI innovation strategy today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
              >
                Get AI Innovation Consultation
              </Link>
              <Link
                href="/contact"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
              >
                Contact Our Experts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAIContent2025Showcase;