'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'enterprise-ai-revolution-ultimate-breakthrough',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      description: 'Discover how Fortune 500 companies are achieving 500% ROI through AI automation. Complete implementation roadmap with real success stories.',
      type: 'Blog Post',
      category: 'blog',
      roi: '500%',
      savings: '$200M',
      readingTime: '18 min read',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough',
      badge: 'NEW',
      color: 'from-purple-600 to-blue-600',
      featured: true
    },
    {
      id: 'fortune-500-ai-transformation-ultimate-success',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings in 18 Months',
      description: 'Complete case study of how a Fortune 500 manufacturing company achieved 567% ROI through comprehensive AI transformation.',
      type: 'Case Study',
      category: 'case-study',
      roi: '567%',
      savings: '$2.8B',
      readingTime: '12 min read',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      badge: 'FEATURED',
      color: 'from-green-600 to-emerald-600',
      featured: true
    },
    {
      id: 'ai-implementation-ultimate-roadmap-comprehensive',
      title: 'AI 2025 Implementation Ultimate Roadmap: From Strategy to 800% ROI',
      description: 'Complete step-by-step guide to implementing AI solutions that deliver 800% ROI. Includes frameworks, templates, and real-world case studies.',
      type: 'Resource',
      category: 'resource',
      roi: '800%',
      savings: '$173.7M',
      readingTime: '20 min read',
      url: '/resources/ai-2025-implementation-ultimate-roadmap-comprehensive',
      badge: 'GUIDE',
      color: 'from-orange-600 to-red-600',
      featured: true
    },
    {
      id: 'ai-2025-autonomous-enterprise-systems-revolution',
      title: 'AI 2025: The Autonomous Enterprise Systems Revolution',
      description: 'How Fortune 500 companies are achieving 3,000% ROI through self-managing AI systems that require minimal human intervention.',
      type: 'Blog Post',
      category: 'blog',
      roi: '3,000%',
      savings: '$25.6M',
      readingTime: '28 min read',
      url: '/blog/ai-2025-autonomous-enterprise-systems-revolution',
      badge: 'BREAKTHROUGH',
      color: 'from-indigo-600 to-purple-600',
      featured: false
    },
    {
      id: 'retail-ai-transformation-2025-ultimate-success',
      title: 'Retail AI Transformation: $500M Company Achieves 280% ROI',
      description: 'Complete case study of how a major retail company transformed their operations with AI, achieving 280% ROI and $45M in savings.',
      type: 'Case Study',
      category: 'case-study',
      roi: '280%',
      savings: '$45M',
      readingTime: '15 min read',
      url: '/case-studies/retail-ai-transformation-2025-ultimate-success',
      badge: 'SUCCESS',
      color: 'from-teal-600 to-cyan-600',
      featured: false
    },
    {
      id: 'ai-2025-implementation-master-guide',
      title: 'AI 2025 Implementation Master Guide: From Strategy to 500% ROI',
      description: 'Comprehensive guide covering everything from AI strategy development to implementation, with proven frameworks for achieving 500% ROI.',
      type: 'Resource',
      category: 'resource',
      roi: '500%',
      savings: '$2.8B',
      readingTime: '25 min read',
      url: '/resources/ai-2025-implementation-master-guide',
      badge: 'MASTER',
      color: 'from-pink-600 to-rose-600',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    { id: 'blog', name: 'Blog Posts', count: content.filter(item => item.category === 'blog').length },
    { id: 'case-study', name: 'Case Studies', count: content.filter(item => item.category === 'case-study').length },
    { id: 'resource', name: 'Resources', count: content.filter(item => item.category === 'resource').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  const featuredContent = content.filter(item => item.featured);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🎯 ULTIMATE AI CONTENT SHOWCASE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            High-Value AI Content That Delivers Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI strategies, case studies, and implementation guides that have helped 500+ companies achieve 500%+ ROI
          </p>
        </div>

        {/* Featured Content Banner */}
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 mb-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Featured Content</h3>
            <p className="text-lg text-purple-100">Our most popular and highest-performing content pieces</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredContent.map((item, index) => (
              <div key={item.id} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${item.color} text-white`}>
                    {item.badge}
                  </span>
                  <span className="text-sm text-purple-200">{item.type}</span>
                </div>
                <h4 className="font-bold text-white mb-3 line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-purple-100 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex space-x-4">
                    <span className="text-green-300 font-semibold">{item.roi} ROI</span>
                    <span className="text-blue-300 font-semibold">{item.savings}</span>
                  </div>
                  <span className="text-purple-200">{item.readingTime}</span>
                </div>
                <Link
                  href={item.url}
                  className="mt-4 inline-flex items-center text-white hover:text-purple-200 transition-colors"
                >
                  Read More
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${item.color} text-white`}>
                    {item.badge}
                  </span>
                  <span className="text-sm text-gray-500">{item.type}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{item.roi}</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{item.savings}</div>
                    <div className="text-sm text-gray-600">Savings</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                  {item.featured && (
                    <span className="text-sm text-purple-600 font-semibold">⭐ Featured</span>
                  )}
                </div>
                
                <Link
                  href={item.url}
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  Read Now
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Results</h3>
            <p className="text-gray-600">Our content has helped 500+ companies achieve remarkable results</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Companies Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">800%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$2.8B</div>
              <div className="text-gray-600">Total Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">99%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
            <p className="text-lg text-purple-100 mb-6">
              Get a free AI assessment and discover how you can achieve 500%+ ROI in 12 months
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Assessment
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
    </div>
  );
};

export default UltimateContentShowcase2025;