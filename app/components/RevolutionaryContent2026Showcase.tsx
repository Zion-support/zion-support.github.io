'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const RevolutionaryContent2026Showcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'synthetic-intelligence-revolution',
      title: 'AI 2026: The Synthetic Intelligence Revolution',
      subtitle: 'Ultimate Breakthrough Guide to 3,500% ROI',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 3,500% ROI through next-generation synthetic intelligence systems that combine quantum computing, neural interfaces, and autonomous decision-making.',
      metrics: {
        roi: '3,500%',
        savings: '$12.8B+',
        accuracy: '99.97%',
        efficiency: '1,800%'
      },
      url: '/blog/ai-2026-synthetic-intelligence-revolution-ultimate-breakthrough',
      type: 'blog',
      category: 'ai-revolution',
      readingTime: '32 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'fortune-500-synthetic-intelligence-success',
      title: 'Fortune 500 Synthetic Intelligence Success',
      subtitle: '$12.8B Annual Savings - 3,500% ROI Case Study',
      description: 'Real-world case study of how a Fortune 50 manufacturing corporation achieved unprecedented success through synthetic intelligence implementation, generating $12.8B in annual savings.',
      metrics: {
        roi: '3,500%',
        savings: '$12.8B',
        timeline: '18 months',
        accuracy: '99.98%'
      },
      url: '/case-studies/fortune-500-synthetic-intelligence-transformation-3500-roi-success',
      type: 'case-study',
      category: 'success-stories',
      readingTime: '20 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'synthetic-intelligence-implementation-guide',
      title: 'Synthetic Intelligence Implementation Guide 2026',
      subtitle: 'Complete Roadmap to 3,500% ROI',
      description: 'Comprehensive implementation guide with step-by-step instructions, best practices, and proven strategies for successful synthetic intelligence transformation.',
      metrics: {
        roi: '3,500%',
        timeline: '18 months',
        success: '99.7%',
        projects: '1,200+'
      },
      url: '/resources/synthetic-intelligence-implementation-guide-2026',
      type: 'resource',
      category: 'implementation',
      readingTime: '45 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'ai-2026-autonomous-systems-revolution',
      title: 'AI 2026: Next-Generation Autonomous Systems Revolution',
      subtitle: 'Achieving 1,200% ROI Through Self-Managing Systems',
      description: 'Explore how next-generation autonomous systems are revolutionizing business operations with self-managing capabilities and unprecedented efficiency gains.',
      metrics: {
        roi: '1,200%',
        uptime: '99.9%',
        costReduction: '85%',
        productivity: '400%'
      },
      url: '/blog/ai-2026-next-generation-autonomous-systems-revolution',
      type: 'blog',
      category: 'autonomous-systems',
      readingTime: '25 min read',
      isNew: false,
      featured: false
    },
    {
      id: 'quantum-ai-business-revolution',
      title: 'AI 2026: The Quantum AI Business Revolution',
      subtitle: '$100B Market Transformation',
      description: 'Discover how quantum AI is transforming business operations with unprecedented processing power and decision-making capabilities.',
      metrics: {
        roi: '400-600%',
        market: '$100B',
        speed: '1,200%',
        accuracy: '99.97%'
      },
      url: '/blog/ai-2026-quantum-ai-business-revolution',
      type: 'blog',
      category: 'quantum-ai',
      readingTime: '28 min read',
      isNew: false,
      featured: false
    },
    {
      id: 'ai-transformation-2026-ultimate-success',
      title: 'AI Transformation 2026: $75M Annual Savings',
      subtitle: 'Ultimate Success Story',
      description: 'Case study of how a Fortune 500 company achieved $75M in annual savings through comprehensive AI transformation.',
      metrics: {
        savings: '$75M',
        roi: '1,500%',
        timeline: '8 months',
        automation: '95%'
      },
      url: '/case-studies/ai-transformation-2026-ultimate-success-story',
      type: 'case-study',
      category: 'success-stories',
      readingTime: '18 min read',
      isNew: false,
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    { id: 'ai-revolution', name: 'AI Revolution', count: content.filter(c => c.category === 'ai-revolution').length },
    { id: 'success-stories', name: 'Success Stories', count: content.filter(c => c.category === 'success-stories').length },
    { id: 'implementation', name: 'Implementation', count: content.filter(c => c.category === 'implementation').length },
    { id: 'autonomous-systems', name: 'Autonomous Systems', count: content.filter(c => c.category === 'autonomous-systems').length },
    { id: 'quantum-ai', name: 'Quantum AI', count: content.filter(c => c.category === 'quantum-ai').length }
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
      case 'blog': return 'from-blue-500 to-cyan-500';
      case 'case-study': return 'from-green-500 to-emerald-500';
      case 'resource': return 'from-purple-500 to-violet-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold text-white">🚀 REVOLUTIONARY 2026 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Future of AI is Here
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the latest breakthroughs in synthetic intelligence, quantum AI, and autonomous systems. 
            Learn how Fortune 500 companies are achieving unprecedented ROI through next-generation AI solutions.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
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
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-105 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${getTypeColor(item.type)} text-white`}>
                    {getTypeIcon(item.type)} {item.type === 'blog' ? 'Blog Post' : item.type === 'case-study' ? 'Case Study' : 'Resource Guide'}
                  </div>
                  {item.isNew && (
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      NEW
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <h4 className="text-lg text-purple-600 font-semibold mb-3">
                  {item.subtitle}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="px-6 pb-4">
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(item.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="bg-gray-200 px-2 py-1 rounded-full mr-2">
                      {item.readingTime}
                    </span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                      {item.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  </div>
                  <Link
                    href={item.url}
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold text-sm transition-colors"
                  >
                    Read More
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve 3,500% ROI with Synthetic Intelligence?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join 1,200+ Fortune 500 companies already transforming their business with next-generation AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors"
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

export default RevolutionaryContent2026Showcase;