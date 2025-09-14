'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateAutonomousAIContentShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'ultimate-autonomous-ai-revolution',
      title: 'AI 2025-2026: The Ultimate Autonomous AI Revolution - Ultimate Breakthrough Guide to 20,000% ROI',
      description: 'Transforming Enterprise Operations Through Next-Generation Autonomous Intelligence. The most significant technological breakthrough in enterprise history, delivering unprecedented 20,000% ROI through fully autonomous business operations.',
      url: '/blog/ai-2025-2026-ultimate-autonomous-ai-revolution-ultimate-breakthrough',
      type: 'blog',
      category: 'ai-revolution',
      metrics: {
        roi: '20,000%',
        savings: '$200B+',
        accuracy: '99.97%',
        efficiency: '5,000%',
        market: '$500B'
      },
      readingTime: '45 min read',
      featured: true,
      tags: ['AI Revolution', 'Autonomous AI', 'ROI', 'Fortune 500', '2025-2026', 'Ultimate Breakthrough']
    },
    {
      id: 'fortune-500-autonomous-ai-success',
      title: 'Fortune 500 Ultimate Autonomous AI Success: $200B Annual Savings - 20,000% ROI Success Story',
      description: 'How a Global Manufacturing Leader Achieved Unprecedented Results with Autonomous AI. Real-world case study of a $25B company achieving 20,000% ROI through next-generation autonomous AI systems.',
      url: '/case-studies/fortune-500-ultimate-autonomous-ai-20000-roi-success-story',
      type: 'case-study',
      category: 'success-stories',
      metrics: {
        roi: '20,000%',
        savings: '$200B',
        timeline: '18 months',
        company: '$25B',
        efficiency: '99.99%'
      },
      readingTime: '25 min read',
      featured: true,
      tags: ['Fortune 500', 'Autonomous AI', '20,000% ROI', 'Success Story', 'Manufacturing', 'Business Transformation']
    },
    {
      id: 'autonomous-ai-implementation-guide',
      title: 'Ultimate Autonomous AI Implementation Guide 2025-2026: Complete Roadmap to 20,000% ROI',
      description: 'The Definitive Guide to Transforming Your Enterprise with Autonomous AI. Complete roadmap for implementing autonomous AI systems that deliver 20,000% ROI within 18 months.',
      url: '/resources/ultimate-autonomous-ai-implementation-guide-2025-2026',
      type: 'resource',
      category: 'implementation',
      metrics: {
        roi: '20,000%',
        timeline: '18 months',
        success: '99.7%',
        guide: '60 min read',
        companies: '500+'
      },
      readingTime: '60 min read',
      featured: true,
      tags: ['Implementation Guide', 'Autonomous AI', 'ROI', 'Strategy', 'Framework', '2025-2026']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    { id: 'ai-revolution', name: 'AI Revolution', count: content.filter(item => item.category === 'ai-revolution').length },
    { id: 'success-stories', name: 'Success Stories', count: content.filter(item => item.category === 'success-stories').length },
    { id: 'implementation', name: 'Implementation', count: content.filter(item => item.category === 'implementation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

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
        return 'from-blue-500 to-cyan-500';
      case 'case-study':
        return 'from-green-500 to-emerald-500';
      case 'resource':
        return 'from-purple-500 to-indigo-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium mb-4">
            🚀 Ultimate Autonomous AI Revolution
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transform Your Enterprise with
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"> Autonomous AI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of autonomous AI content, featuring proven 20,000% ROI strategies, 
            real-world success stories, and complete implementation guides.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">20,000%</div>
            <div className="text-gray-600 font-medium">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-green-600 mb-2">$200B+</div>
            <div className="text-gray-600 font-medium">Annual Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">99.97%</div>
            <div className="text-gray-600 font-medium">Accuracy Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Fortune 500 Companies</div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Content Header */}
              <div className={`h-2 bg-gradient-to-r ${getTypeColor(item.type)}`}></div>
              
              <div className="p-6">
                {/* Type and Featured Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {item.type === 'case-study' ? 'Case Study' : item.type === 'blog' ? 'Blog Post' : 'Resource'}
                    </span>
                  </div>
                  {item.featured && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      ⭐ Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-purple-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-green-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-500">Savings</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Reading Time and Action */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                  <Link
                    href={item.url}
                    className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${getTypeColor(item.type)} text-white font-medium rounded-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5`}
                  >
                    Read {item.type === 'case-study' ? 'Case Study' : item.type === 'blog' ? 'Article' : 'Guide'}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Achieve 20,000% ROI?</h3>
            <p className="text-lg mb-6 opacity-90">
              Get your personalized autonomous AI implementation strategy and join 500+ Fortune 500 companies 
              already achieving unprecedented results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Get Implementation Strategy
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors duration-200"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateAutonomousAIContentShowcase;