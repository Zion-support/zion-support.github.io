'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AIContentRevolutionShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'ai-content-revolution-ultimate-breakthrough',
      title: 'AI 2025: The Ultimate Content Revolution - Ultimate Breakthrough Guide to 25,000% ROI',
      type: 'blog',
      category: 'ai-revolution',
      url: '/blog/ai-2025-ultimate-content-revolution-ultimate-breakthrough',
      description: 'Transforming Enterprise Content Strategy Through Revolutionary AI-Powered Content Intelligence',
      metrics: {
        roi: '25,000%',
        savings: '$500B+',
        accuracy: '99.9%',
        speed: '1,200%'
      },
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'fortune-500-ai-content-revolution-success',
      title: 'Fortune 500 AI Content Revolution Success: $500B Annual Savings - 25,000% ROI Success Story',
      type: 'case-study',
      category: 'success-stories',
      url: '/case-studies/fortune-500-ai-content-revolution-25000-roi-success-story',
      description: 'How a Global Technology Conglomerate Transformed Content Operations Through Revolutionary AI Intelligence',
      metrics: {
        roi: '25,000%',
        savings: '$500B',
        satisfaction: '99.8%',
        efficiency: '1,200%'
      },
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'ai-content-revolution-implementation-guide',
      title: 'AI Content Revolution Implementation Guide 2025: Complete Roadmap to 25,000% ROI',
      type: 'resource',
      category: 'implementation',
      url: '/resources/ai-content-revolution-implementation-guide-2025',
      description: 'Your Comprehensive Guide to Transforming Enterprise Content Operations Through Revolutionary AI Intelligence',
      metrics: {
        roi: '25,000%',
        timeline: '12 months',
        success: '99.7%',
        guide: '35 min read'
      },
      readingTime: '35 min read',
      featured: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'ai-revolution', label: 'AI Revolution', count: contentItems.filter(item => item.category === 'ai-revolution').length },
    { id: 'success-stories', label: 'Success Stories', count: contentItems.filter(item => item.category === 'success-stories').length },
    { id: 'implementation', label: 'Implementation', count: contentItems.filter(item => item.category === 'implementation').length }
  ];

  const filteredItems = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            🚀 AI CONTENT REVOLUTION 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your content operations with AI-powered intelligence that delivers 25,000% ROI and $500B+ in annual savings for Fortune 500 companies.
          </p>
          
          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">25,000%</div>
              <div className="text-gray-600 font-medium">ROI</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">$500B+</div>
              <div className="text-gray-600 font-medium">Annual Savings</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Accuracy</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">1,200%</div>
              <div className="text-gray-600 font-medium">Speed Increase</div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Content Type Badge */}
              <div className="p-6 pb-0">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.type === 'blog' ? 'bg-blue-100 text-blue-800' :
                    item.type === 'case-study' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {item.type === 'blog' ? '📝 Blog Post' :
                     item.type === 'case-study' ? '📊 Case Study' :
                     '📚 Implementation Guide'}
                  </span>
                  {item.featured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                      ⭐ Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-purple-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{item.readingTime}</span>
                  <span className="font-medium">{item.metrics.accuracy || item.metrics.success} Accuracy</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0">
                <div className="flex flex-col gap-3">
                  <Link
                    href={item.url}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-center"
                  >
                    Read {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full border-2 border-purple-600 text-purple-600 py-3 px-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 text-center"
                  >
                    Get Consultation
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Content Operations?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join Fortune 500 companies achieving 25,000% ROI through revolutionary AI content intelligence. 
            Start your transformation journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
            >
              Start Your AI Content Revolution
            </Link>
            <Link
              href="/content"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Explore All Content
            </Link>
          </div>

          {/* Additional Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">500+</div>
              <div className="text-sm opacity-80">Fortune 500 Companies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">$2.8T</div>
              <div className="text-sm opacity-80">Market Size</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">99.9%</div>
              <div className="text-sm opacity-80">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">12</div>
              <div className="text-sm opacity-80">Months to ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIContentRevolutionShowcase2025;