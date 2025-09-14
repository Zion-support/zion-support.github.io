'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const RevolutionaryContent2025Showcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'ultimate-business-transformation',
      title: 'AI 2025: The Ultimate Business Transformation Revolution',
      description: 'Achieve 1,500% ROI with our proven AI implementation framework that has transformed 500+ Fortune 500 companies.',
      type: 'blog',
      category: 'ai-transformation',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        efficiency: '95%',
        companies: '500+'
      },
      url: '/blog/ai-2025-ultimate-business-transformation-revolution-ultimate-breakthrough',
      featured: true,
      readingTime: '25 min read'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Success: $2.8B Annual Savings',
      description: 'Real case study of unprecedented AI transformation success with 1,500% ROI in just 6 months.',
      type: 'case-study',
      category: 'success-stories',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        timeline: '6 months',
        efficiency: '156%'
      },
      url: '/case-studies/fortune-500-ai-transformation-1500-percent-roi-ultimate-success-story',
      featured: true,
      readingTime: '18 min read'
    },
    {
      id: 'implementation-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework',
      description: 'Complete step-by-step roadmap to 1,500% ROI and market leadership with proven methodologies.',
      type: 'resource',
      category: 'implementation',
      metrics: {
        roi: '1,500%',
        success: '95%',
        timeline: '18 months',
        companies: '500+'
      },
      url: '/resources/ai-2025-implementation-ultimate-success-framework-complete-guide',
      featured: true,
      readingTime: '30 min read'
    },
    {
      id: 'quantum-ai-revolution',
      title: 'Quantum AI 2025: The $100B Business Revolution',
      description: 'Discover how quantum-enhanced AI is creating unprecedented business opportunities and 567% ROI.',
      type: 'blog',
      category: 'quantum-ai',
      metrics: {
        market: '$100B',
        roi: '567%',
        speed: '1,200%',
        accuracy: '99.97%'
      },
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      featured: false,
      readingTime: '20 min read'
    },
    {
      id: 'autonomous-systems',
      title: 'Next-Generation Autonomous Systems Revolution',
      description: 'Transform your operations with autonomous AI systems delivering 99.9% uptime and 400% productivity.',
      type: 'blog',
      category: 'autonomous-systems',
      metrics: {
        uptime: '99.9%',
        productivity: '400%',
        roi: '1,200%',
        costReduction: '85%'
      },
      url: '/blog/ai-2026-next-generation-autonomous-systems-revolution',
      featured: false,
      readingTime: '15 min read'
    },
    {
      id: 'multimodal-ai',
      title: 'Multimodal AI Enterprise Transformation',
      description: 'Revolutionize customer experience with multimodal AI delivering 400% performance improvement.',
      type: 'blog',
      category: 'multimodal-ai',
      metrics: {
        performance: '400%',
        satisfaction: '60%',
        roi: '400%',
        accuracy: '90%'
      },
      url: '/blog/ai-2025-multimodal-ai-enterprise-transformation-complete-guide',
      featured: false,
      readingTime: '15 min read'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'ai-transformation', label: 'AI Transformation', count: content.filter(item => item.category === 'ai-transformation').length },
    { id: 'success-stories', label: 'Success Stories', count: content.filter(item => item.category === 'success-stories').length },
    { id: 'implementation', label: 'Implementation', count: content.filter(item => item.category === 'implementation').length },
    { id: 'quantum-ai', label: 'Quantum AI', count: content.filter(item => item.category === 'quantum-ai').length },
    { id: 'autonomous-systems', label: 'Autonomous Systems', count: content.filter(item => item.category === 'autonomous-systems').length },
    { id: 'multimodal-ai', label: 'Multimodal AI', count: content.filter(item => item.category === 'multimodal-ai').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

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
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            <span className="mr-2">🚀</span>
            REVOLUTIONARY CONTENT 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Business with AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the breakthrough strategies and proven frameworks that have delivered 1,500% ROI for Fortune 500 companies worldwide.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
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
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
              }`}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                  FEATURED
                </div>
              )}

              <div className="p-6">
                {/* Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                    <span className="mr-1">{getTypeIcon(item.type)}</span>
                    {item.type.replace('-', ' ').toUpperCase()}
                  </span>
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={item.url}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  {item.type === 'blog' ? 'Read Article' : 
                   item.type === 'case-study' ? 'View Case Study' : 
                   'Download Guide'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve 1,500% ROI?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join 500+ Fortune 500 companies that have transformed their business with our proven AI frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContent2025Showcase;