'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const ContentRevolutionShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'ultimate-content-revolution',
      title: 'AI 2025: The Ultimate Content Revolution',
      description: 'Achieve 2,500% ROI through AI-powered content strategies that are reshaping entire industries and creating new revenue streams worth billions.',
      type: 'blog',
      category: 'ai-content',
      url: '/blog/ai-2025-ultimate-content-revolution-ultimate-breakthrough',
      readingTime: '30 min read',
      featured: true,
      metrics: {
        roi: '2,500%',
        savings: '$45.2M',
        efficiency: '1,200%',
        engagement: '450%'
      }
    },
    {
      id: 'fortune-500-content-success',
      title: 'Fortune 500 Content Revolution Success',
      description: '$45.2M Annual Savings - 2,500% ROI Success Story from Global Media Conglomerate with 1,500% increase in content output.',
      type: 'case-study',
      category: 'success-stories',
      url: '/case-studies/fortune-500-content-revolution-2500-roi-success-story',
      readingTime: '18 min read',
      featured: true,
      metrics: {
        roi: '2,500%',
        savings: '$45.2M',
        output: '1,500%',
        engagement: '560%'
      }
    },
    {
      id: 'content-implementation-guide',
      title: 'AI Content Revolution Implementation Guide',
      description: 'Complete Roadmap to 2,500% ROI - Ultimate Implementation Guide for Content Transformation with comprehensive strategies and frameworks.',
      type: 'resource',
      category: 'implementation',
      url: '/resources/ai-content-revolution-implementation-ultimate-guide-2025',
      readingTime: '45 min read',
      featured: true,
      metrics: {
        roi: '2,500%',
        timeline: '18 months',
        success: '99.7%',
        projects: '1,000+'
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'ai-content', label: 'AI Content', count: contentItems.filter(item => item.category === 'ai-content').length },
    { id: 'success-stories', label: 'Success Stories', count: contentItems.filter(item => item.category === 'success-stories').length },
    { id: 'implementation', label: 'Implementation', count: contentItems.filter(item => item.category === 'implementation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 CONTENT REVOLUTION 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Ultimate Content Revolution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your content operations with AI and achieve unprecedented 2,500% ROI through intelligent content strategies that are reshaping entire industries.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="p-8">
                {/* Content Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.type === 'blog' 
                        ? 'bg-blue-100 text-blue-800'
                        : item.type === 'case-study'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {item.type.toUpperCase()}
                    </span>
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      NEW
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                </div>

                {/* Title and Description */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{value}</div>
                      <div className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Link
                  href={item.url}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Read Full {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics Section */}
        <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-2xl p-8 text-white mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Content Revolution Success Metrics</h3>
            <p className="text-xl opacity-90">Real results from Fortune 500 implementations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">2,500%</div>
              <div className="text-lg font-semibold mb-1">Average ROI</div>
              <div className="text-sm opacity-80">Across all implementations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">$45.2M</div>
              <div className="text-lg font-semibold mb-1">Average Savings</div>
              <div className="text-sm opacity-80">Per Fortune 500 company</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">1,200%</div>
              <div className="text-lg font-semibold mb-1">Content Increase</div>
              <div className="text-sm opacity-80">In production volume</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">450%</div>
              <div className="text-lg font-semibold mb-1">Engagement Boost</div>
              <div className="text-sm opacity-80">In audience engagement</div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">AI Content Technology Stack</h3>
            <p className="text-xl text-gray-600">Cutting-edge AI technologies powering the content revolution</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">AI Content Generation</h4>
              <p className="text-sm text-gray-600">GPT-4, Claude, Gemini for intelligent content creation</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="text-4xl mb-4">🎨</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Visual AI</h4>
              <p className="text-sm text-gray-600">DALL-E 3, Midjourney for stunning visual content</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Content Analytics</h4>
              <p className="text-sm text-gray-600">Advanced analytics and performance prediction</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Automation</h4>
              <p className="text-sm text-gray-600">Fully automated content workflows and distribution</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Content Revolution?</h3>
            <p className="text-xl opacity-90 mb-8">Join Fortune 500 companies achieving 2,500% ROI through AI-powered content strategies</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentRevolutionShowcase2025;