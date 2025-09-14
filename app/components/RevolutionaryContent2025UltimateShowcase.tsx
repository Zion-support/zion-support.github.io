'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const RevolutionaryContent2025UltimateShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'ultimate-business-transformation',
      title: 'AI 2025: Ultimate Business Transformation Revolution',
      description: 'Achieve 2,500% ROI with Revolutionary AI Implementation. Transform your business with cutting-edge AI technologies.',
      type: 'blog',
      category: 'ai-revolution',
      metrics: {
        roi: '2,500%',
        savings: '$8.2B+',
        efficiency: '1,200%',
        success: '99.7%'
      },
      readingTime: '30 min read',
      featured: true,
      url: '/blog/ai-2025-ultimate-business-transformation-revolution-ultimate-breakthrough-2025',
      badge: 'NEW ULTIMATE BREAKTHROUGH'
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 Ultimate AI Transformation: $8.2B Annual Savings',
      description: 'Real case study showing how a Fortune 500 company achieved 2,500% ROI in 18 months through comprehensive AI transformation.',
      type: 'case-study',
      category: 'success-stories',
      metrics: {
        roi: '2,500%',
        savings: '$8.2B',
        timeline: '18 months',
        success: '99.7%'
      },
      readingTime: '20 min read',
      featured: true,
      url: '/case-studies/fortune-500-ultimate-ai-transformation-2500-roi-success-story',
      badge: 'FEATURED CASE STUDY'
    },
    {
      id: 'ultimate-implementation-guide',
      title: 'AI 2025 Ultimate Transformation Implementation Master Guide',
      description: 'Complete roadmap to 2,500% ROI. Get the comprehensive implementation guide used by Fortune 500 companies.',
      type: 'resource',
      category: 'implementation',
      metrics: {
        roi: '2,500%',
        timeline: '18 months',
        success: '99.7%',
        guide: 'Complete'
      },
      readingTime: '35 min read',
      featured: true,
      url: '/resources/ai-2025-ultimate-transformation-implementation-master-guide-2500-roi',
      badge: 'MASTER GUIDE'
    },
    {
      id: 'autonomous-enterprise-revolution',
      title: 'AI 2025-2026: Ultimate Autonomous Enterprise Revolution',
      description: 'The Ultimate Breakthrough Guide to 7,500% ROI through autonomous enterprise systems and self-managing AI.',
      type: 'blog',
      category: 'ai-revolution',
      metrics: {
        roi: '7,500%',
        savings: '$25.8B+',
        accuracy: '99.97%',
        efficiency: '2,400%'
      },
      readingTime: '35 min read',
      featured: true,
      url: '/blog/ai-2025-2026-ultimate-autonomous-enterprise-revolution-ultimate-breakthrough',
      badge: 'ULTIMATE BREAKTHROUGH'
    },
    {
      id: 'predictive-analytics-revolution',
      title: 'AI 2025: Advanced Predictive Analytics Revolution',
      description: 'Ultimate Breakthrough Guide to 850% ROI through advanced predictive analytics and business intelligence.',
      type: 'blog',
      category: 'ai-revolution',
      metrics: {
        roi: '850%',
        savings: '$2.3B',
        accuracy: '99.7%',
        efficiency: '78%'
      },
      readingTime: '25 min read',
      featured: true,
      url: '/blog/ai-2025-advanced-predictive-analytics-revolution-ultimate-breakthrough-2025',
      badge: 'PREDICTIVE ANALYTICS'
    },
    {
      id: 'quantum-ai-business-revolution',
      title: 'AI 2025: Quantum Computing Business Revolution',
      description: '$100B Market Transformation through quantum computing integration with AI systems.',
      type: 'blog',
      category: 'quantum-ai',
      metrics: {
        roi: '400-600%',
        market: '$100B',
        speed: '1,200%',
        accuracy: '99.97%'
      },
      readingTime: '22 min read',
      featured: true,
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      badge: 'QUANTUM AI'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    { id: 'ai-revolution', name: 'AI Revolution', count: content.filter(item => item.category === 'ai-revolution').length },
    { id: 'success-stories', name: 'Success Stories', count: content.filter(item => item.category === 'success-stories').length },
    { id: 'implementation', name: 'Implementation', count: content.filter(item => item.category === 'implementation').length },
    { id: 'quantum-ai', name: 'Quantum AI', count: content.filter(item => item.category === 'quantum-ai').length }
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
      case 'blog': return 'bg-blue-500';
      case 'case-study': return 'bg-green-500';
      case 'resource': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
            <span className="mr-2">🚀</span>
            REVOLUTIONARY CONTENT 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ultimate AI Content Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI transformation content, featuring real success stories, 
            implementation guides, and breakthrough technologies that deliver unprecedented ROI.
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
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Content Header */}
              <div className="p-6">
                {/* Badge and Type */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getTypeColor(item.type)}`}>
                      {item.type.toUpperCase()}
                    </span>
                  </div>
                  {item.featured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-purple-600 mb-1">
                        {value}
                      </div>
                      <div className="text-xs text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Reading Time */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item.readingTime}
                </div>
              </div>

              {/* CTA Button */}
              <div className="px-6 pb-6">
                <Link
                  href={item.url}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center block"
                >
                  Read Full Content →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join Fortune 500 companies achieving unprecedented success with AI transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContent2025UltimateShowcase;