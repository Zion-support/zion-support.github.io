'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AI2025BusinessIntelligenceShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'ultimate-bi-guide',
      title: 'AI 2025: The Ultimate Business Intelligence Revolution',
      type: 'blog',
      description: 'Transform your enterprise with next-generation AI-powered business intelligence that delivers unprecedented insights and competitive advantage.',
      metrics: '3,200% ROI • $8.2M Savings • 99.7% Accuracy',
      readingTime: '25 min read',
      featured: true,
      link: '/blog/ai-2025-ultimate-business-intelligence-revolution-ultimate-guide',
      tags: ['AI Revolution', 'Business Intelligence', 'ROI', 'Enterprise']
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Business Intelligence Success Story',
      type: 'case-study',
      description: 'How a global manufacturing leader with $12.8B revenue achieved 3,200% ROI through AI-powered business intelligence transformation.',
      metrics: '$8.2M Annual Savings • 450% Efficiency • 99.7% Accuracy',
      readingTime: '18 min read',
      featured: true,
      link: '/case-studies/fortune-500-ai-business-intelligence-3200-roi-success-story',
      tags: ['Fortune 500', 'Success Story', 'Manufacturing', 'ROI']
    },
    {
      id: 'implementation-guide',
      title: 'AI Business Intelligence Implementation Ultimate Guide',
      type: 'resource',
      description: 'Complete roadmap to 3,200% ROI in 12-18 months. Your comprehensive blueprint for AI BI transformation with proven frameworks.',
      metrics: '94% Success Rate • 3.2 Month Payback • 450% Speed Improvement',
      readingTime: '35 min read',
      featured: true,
      link: '/resources/ai-business-intelligence-implementation-ultimate-guide-2025',
      tags: ['Implementation', 'Guide', 'ROI', 'Framework']
    },
    {
      id: 'advanced-analytics',
      title: 'AI 2025: The Advanced Analytics Revolution',
      type: 'blog',
      description: 'Discover how advanced analytics powered by AI is revolutionizing business intelligence and delivering extraordinary results.',
      metrics: '900% ROI • $8.2M Savings • 99.7% Accuracy',
      readingTime: '22 min read',
      featured: false,
      link: '/blog/ai-2025-advanced-analytics-revolution-ultimate-guide',
      tags: ['Advanced Analytics', 'AI', 'ROI', 'Fortune 500']
    },
    {
      id: 'intelligent-automation',
      title: 'AI 2025: The Intelligent Automation Revolution',
      type: 'blog',
      description: 'Learn how intelligent automation is transforming business processes and delivering unprecedented efficiency gains.',
      metrics: '1,100% ROI • $12.8M Savings • 450% Efficiency',
      readingTime: '25 min read',
      featured: false,
      link: '/blog/ai-2025-intelligent-automation-revolution-ultimate-guide',
      tags: ['Intelligent Automation', 'AI', 'ROI', 'Business Process']
    },
    {
      id: 'edge-computing',
      title: 'AI 2025: The Edge Computing Revolution',
      type: 'blog',
      description: 'Explore how edge computing is enabling real-time AI processing and delivering faster, more efficient business intelligence.',
      metrics: '450% ROI • $2.3M Savings • 67% Latency Reduction',
      readingTime: '18 min read',
      featured: false,
      link: '/blog/ai-2025-edge-computing-revolution-ultimate-guide',
      tags: ['Edge Computing', 'AI', 'ROI', 'Latency']
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'resource':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

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

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full mb-6">
            <span className="text-sm font-medium">🚀 AI 2025 BUSINESS INTELLIGENCE REVOLUTION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Business Intelligence with AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Fortune 500 companies are achieving 3,200% ROI with next-generation AI-powered business intelligence solutions.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">3,200%</div>
            <div className="text-gray-600 font-medium">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">$8.2M</div>
            <div className="text-gray-600 font-medium">Annual Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-green-600 mb-2">99.7%</div>
            <div className="text-gray-600 font-medium">Prediction Accuracy</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">450%</div>
            <div className="text-gray-600 font-medium">Speed Improvement</div>
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
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-purple-300 hover:text-purple-600'
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
              className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                item.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
              }`}
            >
              {item.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-sm font-semibold text-center">
                  ⭐ FEATURED CONTENT
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(item.type)}`}>
                    <span className="mr-1">{getTypeIcon(item.type)}</span>
                    {item.type.replace('-', ' ').toUpperCase()}
                  </div>
                  <div className="text-sm text-gray-500">{item.readingTime}</div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 mb-4">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Success Metrics:</div>
                  <div className="text-sm text-gray-600">{item.metrics}</div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={item.link}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Read {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Guide' : 'Article'} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business Intelligence?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join 500+ companies already achieving extraordinary results with AI 2025 Business Intelligence solutions. 
              Get your personalized consultation and discover how to achieve 3,200% ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/services/ai-business-intelligence"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
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

export default AI2025BusinessIntelligenceShowcase;