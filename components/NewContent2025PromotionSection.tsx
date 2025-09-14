'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const NewContent2025PromotionSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const contentPieces = [
    {
      id: 1,
      type: "blog",
      category: "AI Automation",
      title: "AI 2025: Advanced Automation Enterprise Mastery - The Ultimate Breakthrough Guide",
      description: "Discover how Fortune 500 companies are achieving 500%+ ROI with advanced AI automation. Complete implementation guide with real success stories and proven strategies.",
      url: "/blog/ai-2025-advanced-automation-enterprise-mastery-ultimate-breakthrough",
      metrics: {
        roi: "500%",
        savings: "$2.8B",
        satisfaction: "98%",
        projects: "500+"
      },
      readingTime: "18 min read",
      tag: "NEW",
      featured: true,
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 2,
      type: "case-study",
      category: "Success Story",
      title: "Fortune 500 AI Transformation: $2.8B Company Achieves 1,000% ROI in 18 Months",
      description: "The most remarkable AI transformation success story of 2025. See how a Fortune 500 manufacturing company achieved unprecedented 1,000% ROI.",
      url: "/case-studies/fortune-500-ai-transformation-ultimate-success-story-2025",
      metrics: {
        roi: "1,000%",
        savings: "$280M",
        timeline: "18 months",
        revenue: "$1.2B"
      },
      readingTime: "15 min read",
      tag: "BREAKTHROUGH",
      featured: true,
      color: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      type: "resource",
      category: "Implementation Guide",
      title: "AI 2025 Implementation Ultimate Success Framework: Complete Guide to 500%+ ROI",
      description: "The definitive guide to AI implementation success. Proven framework used by 500+ companies to achieve 500%+ ROI with step-by-step strategies.",
      url: "/resources/ai-2025-implementation-ultimate-success-framework",
      metrics: {
        success_rate: "94%",
        average_roi: "500%",
        implementation_time: "12-18 months",
        projects: "500+ Success Stories"
      },
      readingTime: "25 min read",
      tag: "ULTIMATE GUIDE",
      featured: true,
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 4,
      type: "blog",
      category: "AI Automation",
      title: "AI 2025: The Enterprise Automation Revolution - 500% ROI",
      description: "The AI automation landscape has reached an unprecedented inflection point in 2025. Enterprise organizations are witnessing a 500% average ROI.",
      url: "/blog/ai-2025-enterprise-automation-revolution",
      metrics: {
        roi: "500%",
        savings: "$200M",
        satisfaction: "99.8%",
        time: "12 months"
      },
      readingTime: "12 min read",
      tag: "FEATURED",
      featured: false,
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      type: "case-study",
      category: "Success Story",
      title: "AI Transformation Success: $2B Company Achieves 500% ROI",
      description: "A comprehensive case study showing how a $2B company achieved 500% ROI through strategic AI transformation and automation implementation.",
      url: "/case-studies/ai-transformation-500-roi-success-story",
      metrics: {
        roi: "500%",
        savings: "$200M",
        satisfaction: "99.8%",
        time: "12 months"
      },
      readingTime: "12 min read",
      tag: "SUCCESS STORY",
      featured: false,
      color: "from-pink-500 to-rose-600"
    },
    {
      id: 6,
      type: "resource",
      category: "Implementation Guide",
      title: "AI Automation Implementation Guide 2025: From Strategy to 500% ROI",
      description: "Complete implementation guide with best practices, strategies, and methodologies for achieving 500% ROI with AI automation.",
      url: "/resources/ai-automation-implementation-guide-2025",
      metrics: {
        roi: "500%",
        savings: "60%",
        satisfaction: "98%",
        time: "6-12 months"
      },
      readingTime: "20 min read",
      tag: "GUIDE",
      featured: false,
      color: "from-teal-500 to-green-600"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Content', count: contentPieces.length },
    { key: 'blog', label: 'Blog Posts', count: contentPieces.filter(c => c.type === 'blog').length },
    { key: 'case-study', label: 'Case Studies', count: contentPieces.filter(c => c.type === 'case-study').length },
    { key: 'resource', label: 'Guides & Resources', count: contentPieces.filter(c => c.type === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? contentPieces 
    : contentPieces.filter(content => content.type === activeFilter);

  const featuredContent = contentPieces.filter(content => content.featured);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full text-sm font-semibold mb-4">
            🚀 NEW CONTENT 2025
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ultimate AI Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI insights, success stories, and implementation guides. 
            Join 500+ companies achieving 500%+ ROI with our proven strategies.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">1,000%</div>
            <div className="text-gray-600">Maximum ROI Achieved</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">$2.8B+</div>
            <div className="text-gray-600">Total Client Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>

        {/* Featured Content Highlight */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🌟 Featured Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredContent.map((content) => (
              <div key={content.id} className="group relative">
                <div className={`bg-gradient-to-r ${content.color} rounded-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-2 py-1 bg-white bg-opacity-20 rounded-full text-xs font-bold">
                      {content.tag}
                    </span>
                    <span className="text-sm opacity-90">{content.readingTime}</span>
                  </div>
                  
                  <h4 className="text-lg font-bold mb-3 line-clamp-2">
                    {content.title}
                  </h4>
                  
                  <p className="text-sm opacity-90 mb-4 line-clamp-2">
                    {content.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {Object.entries(content.metrics).slice(0, 2).map(([key, value], index) => (
                      <div key={index} className="text-center">
                        <div className="text-lg font-bold">{value}</div>
                        <div className="text-xs opacity-80 capitalize">{key.replace('_', ' ')}</div>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href={content.url}
                    className="inline-flex items-center text-sm font-semibold hover:text-gray-200 transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeFilter === filter.key
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* All Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content) => (
            <div key={content.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className={`h-2 bg-gradient-to-r ${content.color}`}></div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                    {content.category}
                  </span>
                  <span className="text-sm text-gray-500">{content.readingTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(content.metrics).slice(0, 2).map(([key, value], index) => (
                    <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">{key.replace('_', ' ')}</div>
                    </div>
                  ))}
                </div>
                
                <Link
                  href={content.url}
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105"
                >
                  Read Full Article
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Achieve 500%+ ROI with AI?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join 500+ companies that have transformed their business with our proven AI strategies. 
              Get your free consultation and implementation roadmap today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Free AI Consultation
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                View All Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025PromotionSection;