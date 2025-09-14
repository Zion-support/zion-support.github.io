'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const RevolutionaryContent2025Showcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'ultimate-business-transformation',
      title: 'AI 2025: The Ultimate Business Transformation Revolution',
      type: 'blog',
      category: 'transformation',
      url: '/blog/ai-2025-ultimate-business-transformation-revolution-ultimate-breakthrough',
      description: 'Transform your enterprise with revolutionary AI solutions that deliver unprecedented ROI and operational excellence.',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        efficiency: '95%',
        satisfaction: '98%'
      },
      readingTime: '25 min read',
      isNew: true,
      featured: true,
      image: '/images/ai-transformation-hero.jpg'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings',
      type: 'case-study',
      category: 'success-stories',
      url: '/case-studies/fortune-500-ai-transformation-1500-percent-roi-ultimate-success-story',
      description: 'How a $50B manufacturing giant achieved unprecedented success through strategic AI implementation.',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        efficiency: '156%',
        timeline: '18 months'
      },
      readingTime: '18 min read',
      isNew: true,
      featured: true,
      image: '/images/fortune-500-success.jpg'
    },
    {
      id: 'implementation-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework',
      type: 'resource',
      category: 'guides',
      url: '/resources/ai-2025-implementation-ultimate-success-framework',
      description: 'The definitive blueprint for enterprise AI transformation and unprecedented business success.',
      metrics: {
        roi: '1,500%',
        success: '94%',
        timeline: '18 months',
        projects: '500+'
      },
      readingTime: '30 min read',
      isNew: true,
      featured: true,
      image: '/images/implementation-framework.jpg'
    },
    {
      id: 'quantum-ai-revolution',
      title: 'AI 2025: The Quantum AI Business Revolution',
      type: 'blog',
      category: 'technology',
      url: '/blog/ai-2025-quantum-ai-business-revolution-ultimate-guide',
      description: 'Discover how quantum AI is revolutionizing business operations with $100B market transformation.',
      metrics: {
        roi: '1,200%',
        market: '$100B',
        accuracy: '99.97%',
        speed: '1,200%'
      },
      readingTime: '20 min read',
      isNew: true,
      featured: false,
      image: '/images/quantum-ai.jpg'
    },
    {
      id: 'autonomous-systems',
      title: 'AI 2026: Next-Generation Autonomous Systems Revolution',
      type: 'blog',
      category: 'technology',
      url: '/blog/ai-2026-next-generation-autonomous-systems-revolution',
      description: 'Explore the future of autonomous business systems with 99.9% uptime and 400% productivity gains.',
      metrics: {
        uptime: '99.9%',
        productivity: '400%',
        cost_reduction: '85%',
        roi: '1,200%'
      },
      readingTime: '15 min read',
      isNew: true,
      featured: false,
      image: '/images/autonomous-systems.jpg'
    },
    {
      id: 'healthcare-transformation',
      title: 'Healthcare AI Transformation: 300% ROI Success Story',
      type: 'case-study',
      category: 'success-stories',
      url: '/case-studies/healthcare-ai-transformation-2025-success',
      description: 'How a $200M health system achieved 300% ROI with AI-powered diagnostic systems.',
      metrics: {
        roi: '300%',
        savings: '$18.7M',
        accuracy: '99.8%',
        satisfaction: '95%'
      },
      readingTime: '15 min read',
      isNew: true,
      featured: false,
      image: '/images/healthcare-ai.jpg'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'transformation', label: 'Transformation', count: contentItems.filter(item => item.category === 'transformation').length },
    { id: 'success-stories', label: 'Success Stories', count: contentItems.filter(item => item.category === 'success-stories').length },
    { id: 'guides', label: 'Guides', count: contentItems.filter(item => item.category === 'guides').length },
    { id: 'technology', label: 'Technology', count: contentItems.filter(item => item.category === 'technology').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

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
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            🚀 REVOLUTIONARY CONTENT 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Business with AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the breakthrough strategies and success stories that are reshaping industries with AI technology.
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
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
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
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-500 to-blue-600">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)} {item.type.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
                {item.isNew && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      NEW
                    </span>
                  </div>
                )}
                {item.featured && (
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                      ⭐ FEATURED
                    </span>
                  </div>
                )}
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
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{item.metrics.savings || item.metrics.market}</div>
                    <div className="text-xs text-gray-500">Savings/Market</div>
                  </div>
                </div>

                {/* Reading time */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">⏱️ {item.readingTime}</span>
                  <span className="text-sm text-gray-500">📊 {item.category.replace('-', ' ')}</span>
                </div>

                {/* Action button */}
                <Link
                  href={item.url}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-center block"
                >
                  Read {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join 500+ Fortune 500 companies achieving 1,500% ROI with AI transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
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

export default RevolutionaryContent2025Showcase;