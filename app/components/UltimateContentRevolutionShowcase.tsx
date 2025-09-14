'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateContentRevolutionShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentPieces = [
    {
      id: 'ultimate-content-revolution',
      title: 'AI 2025: The Ultimate Content Revolution - 25,000% ROI Breakthrough',
      type: 'blog',
      category: 'ai-revolution',
      url: '/blog/ai-2025-ultimate-content-revolution',
      description: 'Transform your business with revolutionary AI content strategies that deliver unprecedented results',
      metrics: {
        roi: '25,000%',
        savings: '$500B+',
        engagement: '99.9%',
        production: '3,000%'
      },
      tags: ['AI Revolution', 'Content Strategy', 'ROI', 'Fortune 500'],
      readingTime: '15 min read',
      featured: true
    },
    {
      id: 'fortune-500-content-success',
      title: 'Fortune 500 Ultimate Content Revolution: $500B Annual Savings - 25,000% ROI Success',
      type: 'case-study',
      category: 'success-stories',
      url: '/case-studies/fortune-500-ultimate-content-revolution-25000-roi-success',
      description: 'How a global technology leader achieved unprecedented results with AI content strategies',
      metrics: {
        roi: '25,000%',
        savings: '$500B',
        engagement: '99.9%',
        production: '5,000%'
      },
      tags: ['Fortune 500', 'Success Story', 'ROI', 'Case Study'],
      readingTime: '20 min read',
      featured: true
    },
    {
      id: 'content-revolution-implementation',
      title: 'Ultimate Content Revolution Implementation Guide: Complete Roadmap to 25,000% ROI',
      type: 'resource',
      category: 'implementation',
      url: '/resources/ultimate-content-revolution-implementation-guide',
      description: 'The definitive guide to transforming your content operations with revolutionary AI strategies',
      metrics: {
        roi: '25,000%',
        timeline: '12 months',
        success: '99.7%',
        guide: 'Complete'
      },
      tags: ['Implementation', 'Guide', 'ROI', 'Strategy'],
      readingTime: '45 min read',
      featured: true
    },
    {
      id: 'ai-content-intelligence',
      title: 'AI-Powered Content Intelligence: 99.7% Accuracy in Performance Prediction',
      type: 'blog',
      category: 'ai-revolution',
      url: '/blog/ai-content-intelligence-99-percent-accuracy',
      description: 'Revolutionary AI content intelligence that predicts performance with 99.7% accuracy',
      metrics: {
        accuracy: '99.7%',
        prediction: '99.7%',
        optimization: '450%',
        engagement: '1,200%'
      },
      tags: ['AI Intelligence', 'Predictive Analytics', 'Content Optimization'],
      readingTime: '12 min read',
      featured: false
    },
    {
      id: 'autonomous-content-creation',
      title: 'Autonomous Content Creation: 24/7 Self-Generating Content Systems',
      type: 'blog',
      category: 'ai-revolution',
      url: '/blog/autonomous-content-creation-24-7-systems',
      description: 'Revolutionary autonomous content creation that generates content 24/7 without human intervention',
      metrics: {
        production: '2,500%',
        uptime: '99.9%',
        quality: '99.7%',
        efficiency: '3,000%'
      },
      tags: ['Autonomous AI', 'Content Creation', 'Automation'],
      readingTime: '18 min read',
      featured: false
    },
    {
      id: 'neural-content-personalization',
      title: 'Neural Content Personalization: 99.9% Accuracy in User Matching',
      type: 'blog',
      category: 'ai-revolution',
      url: '/blog/neural-content-personalization-99-percent-accuracy',
      description: 'Advanced neural content personalization that delivers 99.9% accuracy in user content matching',
      metrics: {
        accuracy: '99.9%',
        engagement: '1,200%',
        satisfaction: '99.8%',
        conversion: '99.7%'
      },
      tags: ['Neural AI', 'Personalization', 'User Experience'],
      readingTime: '14 min read',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentPieces.length },
    { id: 'ai-revolution', name: 'AI Revolution', count: contentPieces.filter(c => c.category === 'ai-revolution').length },
    { id: 'success-stories', name: 'Success Stories', count: contentPieces.filter(c => c.category === 'success-stories').length },
    { id: 'implementation', name: 'Implementation', count: contentPieces.filter(c => c.category === 'implementation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentPieces 
    : contentPieces.filter(content => content.category === activeCategory);

  const featuredContent = contentPieces.filter(content => content.featured);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-4">
            🚀 ULTIMATE CONTENT REVOLUTION
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content Strategies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the breakthrough content strategies that are delivering 25,000% ROI and transforming businesses worldwide
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">25,000%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$500B+</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
            <div className="text-gray-600">Engagement Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">3,000%</div>
            <div className="text-gray-600">Production Speed</div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredContent.map((content) => (
              <div key={content.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      {content.type.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-500">{content.readingTime}</span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {content.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {content.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{content.metrics.roi}</div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{content.metrics.savings}</div>
                      <div className="text-xs text-gray-500">Savings</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {content.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={content.url}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Read {content.type === 'blog' ? 'Article' : content.type === 'case-study' ? 'Case Study' : 'Guide'}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">All Content</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((content) => (
            <div key={content.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    {content.type.toUpperCase()}
                  </span>
                  <span className="text-xs text-gray-500">{content.readingTime}</span>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h4>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{content.metrics.roi || content.metrics.accuracy}</div>
                    <div className="text-xs text-gray-500">ROI/Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{content.metrics.savings || content.metrics.engagement}</div>
                    <div className="text-xs text-gray-500">Savings/Engagement</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={content.url}
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Read {content.type === 'blog' ? 'Article' : content.type === 'case-study' ? 'Case Study' : 'Guide'}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Achieve 25,000% ROI?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join the Ultimate Content Revolution and transform your business with revolutionary AI strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Implementation Guide
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentRevolutionShowcase;