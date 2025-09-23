'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const ComprehensiveContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = [
    { id: 'all', name: 'All Content', count: 5 },
    { id: 'blog', name: 'Blog Posts', count: 2 },
    { id: 'case-study', name: 'Case Studies', count: 2 },
    { id: 'resource', name: 'Resources', count: 1 }
  ];

  const featuredContent = [
    {
      id: 'ai-automation-mastery',
      category: 'blog',
      type: 'Blog Post',
      title: 'AI 2025: Advanced Automation Mastery - Ultimate Success Guide',
      excerpt: 'Transform your business with cutting-edge AI automation that delivers 500%+ ROI across all implementations.',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide',
      readTime: '25 min read',
      metrics: {
        roi: '500%+',
        savings: '$2.8B',
        satisfaction: '98%',
        projects: '500+'
      },
      tags: ['AI Automation', 'Enterprise', 'ROI', 'Success Guide'],
      featured: true,
      isNew: true
    },
    {
      id: 'fortune-500-success',
      category: 'case-study',
      type: 'Case Study',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings - Ultimate Success Story',
      excerpt: 'How a global manufacturing giant achieved unprecedented 1,200% ROI with comprehensive AI implementation in just 18 months.',
      url: '/case-studies/fortune-500-ai-transformation-ultimate-success-story',
      readTime: '20 min read',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '18 months',
        revenue: '$1.2B'
      },
      tags: ['Fortune 500', 'Manufacturing', 'Success Story', '1,200% ROI'],
      featured: true,
      isNew: true
    },
    {
      id: 'quantum-computing-revolution',
      category: 'blog',
      type: 'Blog Post',
      title: 'AI 2025: The Quantum Computing Business Revolution',
      excerpt: 'Discover how Quantum AI is transforming enterprise operations with revolutionary 1,200% ROI and $100B market opportunity.',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      readTime: '20 min read',
      metrics: {
        roi: '1,200%',
        market: '$100B',
        accuracy: '99.97%',
        speed: '1,200x faster'
      },
      tags: ['Quantum AI', 'Business Revolution', '$100B Market'],
      featured: true,
      isNew: true
    },
    {
      id: 'healthcare-transformation',
      category: 'case-study',
      type: 'Case Study',
      title: 'Healthcare AI Transformation: $180M Annual Savings - Ultimate Success',
      excerpt: 'Major health system achieves 450% ROI and transforms patient care through comprehensive AI implementation.',
      url: '/case-studies/healthcare-ai-transformation-ultimate-success-2025',
      readTime: '18 min read',
      metrics: {
        roi: '450%',
        savings: '$180M',
        satisfaction: '94%',
        errors: '89% reduction'
      },
      tags: ['Healthcare', 'Patient Safety', 'Operational Efficiency'],
      featured: true,
      isNew: true
    },
    {
      id: 'implementation-framework',
      category: 'resource',
      type: 'Resource',
      title: 'AI Implementation Framework 2025',
      excerpt: 'Complete guide and proven methodology for achieving 500%+ ROI with systematic AI implementation.',
      url: '/resources/ai-implementation-framework-2025',
      readTime: '15 min read',
      metrics: {
        roi: '500%+',
        success: '98%',
        timeline: '18 months',
        projects: '500+'
      },
      tags: ['Implementation', 'Framework', 'Methodology'],
      featured: true,
      isNew: true
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? featuredContent 
    : featuredContent.filter(item => item.category === activeCategory);

  const totalMetrics = {
    totalROI: '500%+',
    totalSavings: '$5.6B+',
    successRate: '98%',
    companiesHelped: '500+'
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 rounded-full px-6 py-2 mb-4">
            <span className="text-purple-800 font-semibold text-sm">🎯 COMPREHENSIVE CONTENT COLLECTION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI 2025 Success Stories & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover proven strategies, real success stories, and implementation frameworks 
            that are delivering extraordinary results for businesses worldwide
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {Object.entries(totalMetrics).map(([key, value]) => (
            <div key={key} className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{value}</div>
              <div className="text-gray-600 text-sm capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-purple-50'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((content) => (
            <div key={content.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-semibold">
                    {content.type}
                  </span>
                  {content.isNew && (
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                      NEW 2025
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.excerpt}
                </p>
                
                <div className="text-sm text-gray-500 mb-4">
                  {content.readTime}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(content.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={content.url}
                  className="inline-flex items-center w-full justify-center bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Read Full {content.type}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Join the AI Revolution?</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Don't let your competitors gain the advantage. Start your AI transformation today 
            and achieve the same extraordinary results as our featured success stories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free AI Consultation
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Download Implementation Guide
            </Link>
          </div>
          
          <div className="mt-6 text-sm opacity-75">
            Join 500+ companies already transforming with AI • 98% Success Rate • 500%+ Average ROI
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/tools" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">🔧</div>
              <h4 className="text-lg font-semibold mb-2">AI Tools</h4>
              <p className="text-gray-600 text-sm">Interactive calculators and assessment tools</p>
            </Link>
            <Link href="/services" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="text-lg font-semibold mb-2">AI Services</h4>
              <p className="text-gray-600 text-sm">Comprehensive AI implementation services</p>
            </Link>
            <Link href="/blog" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">📚</div>
              <h4 className="text-lg font-semibold mb-2">All Insights</h4>
              <p className="text-gray-600 text-sm">Complete library of AI insights and guides</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveContentShowcase2025;