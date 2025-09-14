'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AIBusinessIntelligenceShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'ultimate-business-intelligence',
      title: 'AI 2025: The Ultimate Business Intelligence Revolution',
      subtitle: 'Ultimate Breakthrough Guide to 5,000% ROI',
      description: 'Transform your enterprise with next-generation AI-powered business intelligence that delivers unprecedented results.',
      type: 'blog',
      category: 'guides',
      url: '/blog/ai-2025-ultimate-business-intelligence-revolution-ultimate-breakthrough',
      metrics: {
        roi: '5,000%',
        savings: '$18.7B',
        accuracy: '99.8%',
        speed: '450%'
      },
      readingTime: '35 min read',
      featured: true,
      tags: ['AI Revolution', 'Business Intelligence', 'ROI', 'Fortune 500', 'Ultimate Guide']
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Business Intelligence Success Story',
      subtitle: '$18.7B Annual Savings - 5,000% ROI Success Story',
      description: 'How a global manufacturing leader achieved extraordinary results with AI business intelligence transformation.',
      type: 'case-study',
      category: 'success-stories',
      url: '/case-studies/fortune-500-ai-business-intelligence-5000-roi-success-story',
      metrics: {
        roi: '5,000%',
        savings: '$18.7B',
        timeframe: '12 months',
        accuracy: '99.8%'
      },
      readingTime: '25 min read',
      featured: true,
      tags: ['Fortune 500', 'Success Story', 'ROI', 'Manufacturing', 'Transformation']
    },
    {
      id: 'implementation-guide',
      title: 'AI Business Intelligence Implementation Ultimate Guide',
      subtitle: 'Complete Roadmap to 5,000% ROI',
      description: 'The definitive guide to implementing AI-powered business intelligence that delivers unprecedented results.',
      type: 'resource',
      category: 'implementation',
      url: '/resources/ai-business-intelligence-implementation-ultimate-guide-2025',
      metrics: {
        roi: '5,000%',
        guide: 'Complete',
        success: '99.7%',
        timeline: '12 months'
      },
      readingTime: '45 min read',
      featured: true,
      tags: ['Implementation Guide', 'ROI Strategy', 'Best Practices', 'Framework', 'Complete Roadmap']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    { id: 'guides', name: 'Ultimate Guides', count: content.filter(item => item.category === 'guides').length },
    { id: 'success-stories', name: 'Success Stories', count: content.filter(item => item.category === 'success-stories').length },
    { id: 'implementation', name: 'Implementation', count: content.filter(item => item.category === 'implementation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📊';
      case 'case-study': return '🏆';
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
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 AI BUSINESS INTELLIGENCE REVOLUTION</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Enterprise with AI Business Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the ultimate collection of AI business intelligence content that delivers 
            <span className="font-bold text-purple-600"> 5,000% ROI</span> and 
            <span className="font-bold text-blue-600"> $18.7B in annual savings</span>.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Content Type Header */}
              <div className={`bg-gradient-to-r ${getTypeColor(item.type)} p-4 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className="font-semibold uppercase tracking-wide">
                      {item.type === 'blog' && 'Ultimate Guide'}
                      {item.type === 'case-study' && 'Success Story'}
                      {item.type === 'resource' && 'Implementation Guide'}
                    </span>
                  </div>
                  {item.featured && (
                    <div className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-purple-600 font-semibold mb-3">
                  {item.subtitle}
                </p>
                
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-gray-900">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
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

                {/* Reading Time and CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                  <Link
                    href={item.url}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics Summary */}
        <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Proven Results Across All Implementations</h3>
            <p className="text-xl text-blue-100">
              Join the companies achieving unprecedented success with AI business intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">5,000%</div>
              <div className="text-lg font-semibold">Average ROI</div>
              <div className="text-sm text-blue-200">Within 12 months</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-300 mb-2">$18.7B</div>
              <div className="text-lg font-semibold">Annual Savings</div>
              <div className="text-sm text-blue-200">Across all operations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-300 mb-2">99.8%</div>
              <div className="text-lg font-semibold">Predictive Accuracy</div>
              <div className="text-sm text-blue-200">In forecasting models</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-300 mb-2">450%</div>
              <div className="text-lg font-semibold">Faster Decisions</div>
              <div className="text-sm text-blue-200">Than traditional BI</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business Intelligence?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Get started with our comprehensive AI business intelligence solutions and achieve 
              similar results to our Fortune 500 clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/services/ai-business-intelligence"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
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

export default AIBusinessIntelligenceShowcase;