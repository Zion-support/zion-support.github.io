'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AIContentRevolutionShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'ai-content-revolution-ultimate-breakthrough',
      title: 'AI 2025: The Ultimate Content Revolution - 25,000% ROI',
      description: 'Transform your content strategy with AI-powered content intelligence. Achieve unprecedented ROI through automated content creation, optimization, and distribution.',
      type: 'Blog Post',
      category: 'blog',
      metrics: {
        roi: '25,000%',
        savings: '$500B+',
        accuracy: '99.9%',
        speed: '1,200%'
      },
      url: '/blog/ai-2025-ultimate-content-revolution-ultimate-breakthrough',
      image: '/images/ai-content-revolution-2025.jpg',
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'fortune-500-content-revolution-success',
      title: 'Fortune 500 AI Content Revolution: $500B Annual Savings',
      description: 'How a global manufacturing leader achieved 25,000% ROI through AI-powered content intelligence, transforming their content operations.',
      type: 'Case Study',
      category: 'case-study',
      metrics: {
        roi: '25,000%',
        savings: '$500B',
        timeline: '12 months',
        satisfaction: '99.9%'
      },
      url: '/case-studies/fortune-500-ai-content-revolution-25000-roi-success-story',
      image: '/images/fortune-500-content-success.jpg',
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'content-revolution-implementation-guide',
      title: 'AI Content Revolution Implementation Guide: 25,000% ROI',
      description: 'Complete roadmap to implementing AI-powered content intelligence. Step-by-step guide from strategy to 25,000% ROI in 12 months.',
      type: 'Implementation Guide',
      category: 'resource',
      metrics: {
        roi: '25,000%',
        timeline: '12 months',
        success: '99.7%',
        guide: '35 min read'
      },
      url: '/resources/ai-content-revolution-implementation-guide-2025',
      image: '/images/content-implementation-guide.jpg',
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'ai-content-automation-mastery',
      title: 'AI Content Automation Mastery: 15,000% ROI Guide',
      description: 'Master AI-powered content automation to achieve 15,000% ROI. Advanced strategies for enterprise content transformation.',
      type: 'Blog Post',
      category: 'blog',
      metrics: {
        roi: '15,000%',
        savings: '$200B+',
        efficiency: '800%',
        accuracy: '99.8%'
      },
      url: '/blog/ai-content-automation-mastery-15000-roi-guide',
      image: '/images/content-automation-mastery.jpg',
      readingTime: '28 min read',
      featured: false
    },
    {
      id: 'content-personalization-breakthrough',
      title: 'AI Content Personalization Breakthrough: 12,000% ROI',
      description: 'Revolutionary AI content personalization strategies achieving 12,000% ROI through 1:1 content customization at scale.',
      type: 'Case Study',
      category: 'case-study',
      metrics: {
        roi: '12,000%',
        savings: '$150B',
        personalization: '95%',
        engagement: '450%'
      },
      url: '/case-studies/content-personalization-breakthrough-12000-roi',
      image: '/images/content-personalization.jpg',
      readingTime: '22 min read',
      featured: false
    },
    {
      id: 'content-analytics-revolution',
      title: 'AI Content Analytics Revolution: 8,500% ROI',
      description: 'Transform content performance with AI-powered analytics. Achieve 8,500% ROI through predictive content intelligence.',
      type: 'Implementation Guide',
      category: 'resource',
      metrics: {
        roi: '8,500%',
        savings: '$100B',
        prediction: '99.7%',
        optimization: '340%'
      },
      url: '/resources/content-analytics-revolution-8500-roi',
      image: '/images/content-analytics.jpg',
      readingTime: '30 min read',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.category === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.category === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.category === 'resource').length }
  ];

  const filteredItems = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const featuredItems = contentItems.filter(item => item.featured);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 AI CONTENT REVOLUTION 2025</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Fortune 500 companies are achieving up to 25,000% ROI through AI-powered content intelligence, automated content creation, and intelligent optimization.
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
            <div className="text-gray-600">Content Accuracy</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">1,200%</div>
            <div className="text-gray-600">Production Increase</div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <div className="text-6xl">📊</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      {item.type}
                    </span>
                    <span className="text-sm text-gray-500">{item.readingTime}</span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                      <div className="text-xs text-green-700">ROI</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                      <div className="text-xs text-blue-700">Savings</div>
                    </div>
                  </div>

                  <Link
                    href={item.url}
                    className="block w-full bg-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Read {item.type}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">All Content</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <div className="text-4xl">📈</div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {item.type}
                  </span>
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h4>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-green-50 rounded-lg p-2">
                    <div className="text-sm font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-green-700">ROI</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-2">
                    <div className="text-sm font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-xs text-blue-700">Savings</div>
                  </div>
                </div>

                <Link
                  href={item.url}
                  className="block w-full bg-gray-900 text-white text-center py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Read {item.type}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Content Strategy?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join 500+ Fortune 500 companies achieving 25,000% ROI with AI Content Revolution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Implementation Help
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIContentRevolutionShowcase2025;