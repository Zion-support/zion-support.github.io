"use client";
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateAutonomousAIContentShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'ultimate-autonomous-ai-revolution',
      type: 'blog',
      title: 'AI 2025: The Ultimate Autonomous AI Revolution - Ultimate Breakthrough Guide to 15,000% ROI',
      description: 'Revolutionary autonomous AI systems delivering unprecedented 15,000% ROI through fully autonomous business operations with $75B+ in annual savings.',
      metrics: {
        roi: '15,000%',
        savings: '$75.2B+',
        accuracy: '99.97%',
        efficiency: '4,200%'
      },
      tags: ['AI Revolution', 'Autonomous AI', 'ROI', 'Fortune 500', 'Ultimate Breakthrough'],
      readingTime: '35 min read',
      url: '/blog/ai-2025-ultimate-autonomous-ai-revolution-ultimate-breakthrough',
      featured: true
    },
    {
      id: 'fortune-500-autonomous-ai-success',
      type: 'case-study',
      title: 'Fortune 500 Ultimate Autonomous AI Success: $75.2B Annual Savings - 15,000% ROI Success Story',
      description: 'How a Fortune 500 manufacturing leader achieved unprecedented results through revolutionary autonomous AI transformation in just 18 months.',
      metrics: {
        roi: '15,000%',
        savings: '$75.2B',
        company: '$12.8B',
        timeline: '18 months'
      },
      tags: ['Fortune 500', 'Autonomous AI', '15,000% ROI', 'Success Story', 'Manufacturing'],
      readingTime: '25 min read',
      url: '/case-studies/fortune-500-ultimate-autonomous-ai-15000-roi-success-story',
      featured: true
    },
    {
      id: 'ultimate-implementation-guide',
      type: 'resource',
      title: 'Ultimate Autonomous AI Implementation Guide 2025: Complete Roadmap to 15,000% ROI',
      description: 'Comprehensive implementation guide with proven strategies, step-by-step roadmap, and real-world success stories for achieving unprecedented ROI.',
      metrics: {
        roi: '15,000%',
        timeline: '18 months',
        success: '99.7%',
        guide: '45 min read'
      },
      tags: ['Implementation Guide', 'Autonomous AI', 'ROI', 'Strategy', 'Framework'],
      readingTime: '45 min read',
      url: '/resources/ultimate-autonomous-ai-implementation-guide-2025',
      featured: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'blog', label: 'Blog Posts', count: content.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: content.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: content.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.type === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'from-blue-500 to-cyan-500';
      case 'case-study': return 'from-green-500 to-emerald-500';
      case 'resource': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 ULTIMATE AUTONOMOUS AI REVOLUTION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Revolutionary Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most comprehensive collection of autonomous AI content, featuring proven strategies, 
            real-world success stories, and implementation guides for achieving unprecedented 15,000% ROI.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">15,000%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$75.2B+</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">99.97%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">4,200%</div>
            <div className="text-gray-600">Efficiency Gains</div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
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
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${getTypeColor(item.type)} p-4 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className="text-sm font-medium uppercase tracking-wide">
                      {item.type.replace('-', ' ')}
                    </span>
                  </div>
                  {item.featured && (
                    <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-2 text-center">
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="text-gray-500 text-xs">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                  <Link
                    href={item.url}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Achieve 15,000% ROI?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Get personalized implementation support and guidance based on proven strategies from Fortune 500 companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
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

export default UltimateAutonomousAIContentShowcase;