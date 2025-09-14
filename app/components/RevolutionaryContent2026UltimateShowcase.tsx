'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const RevolutionaryContent2026UltimateShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'autonomous-enterprise-revolution',
      title: 'AI 2025-2026: The Ultimate Autonomous Enterprise Revolution',
      type: 'blog',
      category: 'ai-revolution',
      description: '7,500% ROI Through Complete Business Autonomy - Transform your business with next-generation autonomous AI systems.',
      metrics: {
        roi: '7,500%',
        savings: '$25.8B+',
        accuracy: '99.97%',
        efficiency: '2,400%'
      },
      readingTime: '35 min read',
      featured: true,
      link: '/blog/ai-2025-2026-ultimate-autonomous-enterprise-revolution-ultimate-breakthrough'
    },
    {
      id: 'fortune-500-autonomous-success',
      title: 'Fortune 500 Autonomous Enterprise Transformation: $25.8B Annual Savings',
      type: 'case-study',
      category: 'success-stories',
      description: 'Complete Business Transformation in 18 Months - See how a Fortune 500 company achieved 7,500% ROI.',
      metrics: {
        roi: '7,500%',
        savings: '$25.8B',
        timeline: '18 months',
        accuracy: '99.97%'
      },
      readingTime: '22 min read',
      featured: true,
      link: '/case-studies/fortune-500-autonomous-enterprise-transformation-7500-roi-success-story'
    },
    {
      id: 'autonomous-implementation-guide',
      title: 'Autonomous Enterprise Implementation Ultimate Guide 2025-2026',
      type: 'resource',
      category: 'implementation',
      description: 'Complete Roadmap to 7,500% ROI - Get the comprehensive implementation guide with detailed phases.',
      metrics: {
        roi: '7,500%',
        timeline: '18 months',
        success: '99.7%',
        projects: '1,000+'
      },
      readingTime: '45 min read',
      featured: true,
      link: '/resources/autonomous-enterprise-implementation-ultimate-guide-2025-2026'
    },
    {
      id: 'quantum-ai-business-revolution',
      title: 'AI 2026: The Quantum AI Business Revolution - $100B Market Transformation',
      type: 'blog',
      category: 'quantum-ai',
      description: 'Revolutionary quantum AI solutions delivering 400-600% ROI through next-generation computing power.',
      metrics: {
        roi: '400-600%',
        market: '$100B',
        speed: '1,200%',
        accuracy: '99.97%'
      },
      readingTime: '28 min read',
      featured: false,
      link: '/blog/ai-2026-quantum-ai-business-revolution'
    },
    {
      id: 'synthetic-intelligence-revolution',
      title: 'AI 2026: The Synthetic Intelligence Revolution - Ultimate Breakthrough Guide',
      type: 'blog',
      category: 'ai-revolution',
      description: '3,500% ROI Through Next-Generation Synthetic Intelligence - The future of AI is here.',
      metrics: {
        roi: '3,500%',
        savings: '$12.8B+',
        accuracy: '99.97%',
        efficiency: '1,800%'
      },
      readingTime: '32 min read',
      featured: false,
      link: '/blog/ai-2026-synthetic-intelligence-revolution-ultimate-breakthrough'
    },
    {
      id: 'neural-architecture-revolution',
      title: 'AI 2026: The Advanced Neural Architectures Revolution - Ultimate Breakthrough Guide',
      type: 'blog',
      category: 'neural-networks',
      description: '5,000% ROI Through Advanced Neural Architectures - Revolutionary AI capabilities for enterprise success.',
      metrics: {
        roi: '5,000%',
        savings: '$18.2B+',
        efficiency: '2,400%',
        accuracy: '99.98%'
      },
      readingTime: '32 min read',
      featured: false,
      link: '/blog/ai-2026-advanced-neural-architectures-revolution-ultimate-breakthrough'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    { id: 'ai-revolution', name: 'AI Revolution', count: content.filter(c => c.category === 'ai-revolution').length },
    { id: 'success-stories', name: 'Success Stories', count: content.filter(c => c.category === 'success-stories').length },
    { id: 'implementation', name: 'Implementation', count: content.filter(c => c.category === 'implementation').length },
    { id: 'quantum-ai', name: 'Quantum AI', count: content.filter(c => c.category === 'quantum-ai').length },
    { id: 'neural-networks', name: 'Neural Networks', count: content.filter(c => c.category === 'neural-networks').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(c => c.category === activeCategory);

  const featuredContent = content.filter(c => c.featured);

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-3 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            🚀 REVOLUTIONARY CONTENT 2026 ULTIMATE SHOWCASE
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            The Future of AI is Here
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the most advanced AI content and success stories delivering unprecedented ROI through next-generation autonomous enterprise systems.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800">
                      {item.type === 'blog' ? '📝 Blog' : item.type === 'case-study' ? '📊 Case Study' : '📚 Resource'}
                    </span>
                    <span className="text-sm text-gray-500">{item.readingTime}</span>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(item.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-purple-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={item.link}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800">
                    {item.type === 'blog' ? '📝 Blog' : item.type === 'case-study' ? '📊 Case Study' : '📚 Resource'}
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
                  {Object.entries(item.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-sm font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href={item.link}
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join the autonomous enterprise revolution and achieve 7,500% ROI with next-generation AI systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContent2026UltimateShowcase;