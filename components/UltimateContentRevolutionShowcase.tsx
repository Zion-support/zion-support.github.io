'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateContentRevolutionShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentPieces = [
    {
      id: 'ai-content-revolution-blog',
      title: 'AI 2025: The Ultimate Content Revolution - 25,000% ROI Guide',
      type: 'Blog Post',
      category: 'blog',
      url: '/blog/ai-2025-ultimate-content-revolution-ultimate-breakthrough',
      metrics: {
        roi: '25,000%',
        savings: '$500B+',
        speed: '1,200%',
        accuracy: '99.9%'
      },
      description: 'Transform your business with revolutionary AI content strategies that deliver unprecedented results.',
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'fortune-500-content-success',
      title: 'Fortune 500 AI Content Success: $500B Annual Savings - 25,000% ROI',
      type: 'Case Study',
      category: 'case-study',
      url: '/case-studies/fortune-500-ai-content-revolution-25000-roi-success-story',
      metrics: {
        roi: '25,000%',
        savings: '$500B',
        timeline: '18 months',
        accuracy: '99.9%'
      },
      description: 'How TechGlobal Industries achieved extraordinary results with AI content revolution.',
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'content-implementation-guide',
      title: 'AI Content Revolution Implementation Guide: Complete Roadmap to 25,000% ROI',
      type: 'Implementation Guide',
      category: 'resource',
      url: '/resources/ai-content-revolution-implementation-guide-2025',
      metrics: {
        roi: '25,000%',
        timeline: '18 months',
        success: '99.7%',
        guide: 'Complete'
      },
      description: 'The definitive guide to transforming your content strategy with revolutionary AI technologies.',
      readingTime: '45 min read',
      featured: true
    },
    {
      id: 'ai-automation-roi-calculator',
      title: 'AI Automation ROI Calculator: Measure Your Investment Returns',
      type: 'Tool',
      category: 'tool',
      url: '/tools/ai-automation-roi-calculator',
      metrics: {
        roi: '340%',
        users: '10,000+',
        accuracy: '99.8%',
        savings: '$2.8B+'
      },
      description: 'Calculate your potential ROI with our advanced AI automation calculator.',
      readingTime: '5 min read',
      featured: false
    },
    {
      id: 'content-strategy-consultation',
      title: 'AI Content Strategy Consultation: Personalized Implementation Plan',
      type: 'Service',
      category: 'service',
      url: '/services/ai-content-strategy-consultation',
      metrics: {
        roi: '25,000%',
        clients: '500+',
        success: '99.7%',
        satisfaction: '98%'
      },
      description: 'Get personalized AI content strategy consultation from our experts.',
      readingTime: '60 min session',
      featured: false
    },
    {
      id: 'content-performance-analytics',
      title: 'AI Content Performance Analytics: Real-time Optimization Dashboard',
      type: 'Platform',
      category: 'platform',
      url: '/platforms/content-performance-analytics',
      metrics: {
        roi: '450%',
        accuracy: '99.7%',
        speed: 'Real-time',
        insights: '1,000+'
      },
      description: 'Monitor and optimize your content performance with our advanced analytics platform.',
      readingTime: '10 min setup',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentPieces.length },
    { id: 'blog', name: 'Blog Posts', count: contentPieces.filter(item => item.category === 'blog').length },
    { id: 'case-study', name: 'Case Studies', count: contentPieces.filter(item => item.category === 'case-study').length },
    { id: 'resource', name: 'Resources', count: contentPieces.filter(item => item.category === 'resource').length },
    { id: 'tool', name: 'Tools', count: contentPieces.filter(item => item.category === 'tool').length },
    { id: 'service', name: 'Services', count: contentPieces.filter(item => item.category === 'service').length },
    { id: 'platform', name: 'Platforms', count: contentPieces.filter(item => item.category === 'platform').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentPieces 
    : contentPieces.filter(item => item.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    const icons = {
      blog: '📝',
      'case-study': '📊',
      resource: '📚',
      tool: '🛠️',
      service: '🎯',
      platform: '💻'
    };
    return icons[category as keyof typeof icons] || '📄';
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      blog: 'bg-blue-100 text-blue-800',
      'case-study': 'bg-green-100 text-green-800',
      resource: 'bg-purple-100 text-purple-800',
      tool: 'bg-orange-100 text-orange-800',
      service: 'bg-pink-100 text-pink-800',
      platform: 'bg-indigo-100 text-indigo-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">🚀 AI CONTENT REVOLUTION</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the breakthrough strategies, technologies, and implementation frameworks 
            that are reshaping how businesses create, distribute, and monetize content in the AI era.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">25,000%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$500B+</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">1,200%</div>
            <div className="text-gray-600">Production Speed</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
            <div className="text-gray-600">Accuracy</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {item.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-sm font-medium">
                  ⭐ Featured Content
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(item.category)}`}>
                    {getCategoryIcon(item.category)} {item.type}
                  </span>
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">
                      {item.metrics.roi}
                    </div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">
                      {item.metrics.savings || item.metrics.timeline || item.metrics.users || item.metrics.clients || item.metrics.accuracy}
                    </div>
                    <div className="text-xs text-gray-500">
                      {item.metrics.savings ? 'Savings' : 
                       item.metrics.timeline ? 'Timeline' :
                       item.metrics.users ? 'Users' :
                       item.metrics.clients ? 'Clients' : 'Accuracy'}
                    </div>
                  </div>
                </div>

                <Link
                  href={item.url}
                  className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  {item.category === 'service' ? 'Book Consultation' : 
                   item.category === 'tool' ? 'Use Tool' :
                   item.category === 'platform' ? 'Access Platform' : 'Read More'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Content Strategy?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join 1,000+ organizations already achieving 25,000% ROI with our AI Content Revolution framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
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
    </section>
  );
};

export default UltimateContentRevolutionShowcase;