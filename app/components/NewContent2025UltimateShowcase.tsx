'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const NewContent2025UltimateShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentPieces = [
    {
      id: 'quantum-neural-superintelligence',
      title: 'AI 2025: The Quantum Neural Superintelligence Breakthrough',
      description: '3,000% ROI Through Next-Generation Intelligence - The convergence of quantum computing and neural interfaces creates unprecedented cognitive enhancement.',
      url: '/blog/ai-2025-quantum-neural-superintelligence-breakthrough',
      type: 'blog',
      category: 'breakthrough',
      featured: true,
      metrics: {
        roi: '3,000%',
        savings: '$15B',
        speed: '1,000,000x',
        accuracy: '99.97%'
      },
      readingTime: '30 min read',
      tags: ['Quantum AI', 'Neural Interfaces', 'Superintelligence', 'ROI', 'Breakthrough']
    },
    {
      id: 'ultimate-breakthrough-revolution',
      title: 'AI 2025-2026: The Ultimate Breakthrough Revolution',
      description: '2,500% ROI Through Next-Generation Intelligence - Comprehensive guide to achieving unprecedented returns through integrated AI technologies.',
      url: '/blog/ai-2025-2026-ultimate-breakthrough-revolution',
      type: 'blog',
      category: 'revolution',
      featured: true,
      metrics: {
        roi: '2,500%',
        savings: '$8.2B+',
        efficiency: '1,200%',
        success: '99.7%'
      },
      readingTime: '35 min read',
      tags: ['AI Revolution', '2025-2026', 'ROI', 'Fortune 500', 'Breakthrough']
    },
    {
      id: 'revolutionary-transformation',
      title: 'AI 2025-2026 Revolutionary Transformation Success',
      description: '$8.2B Company Achieves 2,500% ROI in 18 Months - Real-world case study of comprehensive AI transformation success.',
      url: '/case-studies/ai-2025-2026-revolutionary-transformation-2500-roi-success',
      type: 'case-study',
      category: 'success',
      featured: true,
      metrics: {
        roi: '2,500%',
        savings: '$8.2B',
        timeline: '18 months',
        satisfaction: '99.7%'
      },
      readingTime: '22 min read',
      tags: ['Case Study', 'Fortune 100', 'AI Transformation', '2,500% ROI', 'Success Story']
    },
    {
      id: 'implementation-framework',
      title: 'AI 2025-2026 Implementation Ultimate Framework',
      description: 'Complete Roadmap to 2,500% ROI - Step-by-step guide for implementing next-generation AI technologies.',
      url: '/resources/ai-2025-2026-implementation-framework',
      type: 'resource',
      category: 'framework',
      featured: true,
      metrics: {
        roi: '2,500%',
        timeline: '18-24 months',
        success: '99.7%',
        projects: '1,000+'
      },
      readingTime: '45 min read',
      tags: ['Implementation Framework', 'AI Strategy', '2,500% ROI', 'Quantum AI', 'Neural Interfaces']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentPieces.length },
    { id: 'breakthrough', label: 'Breakthroughs', count: contentPieces.filter(p => p.category === 'breakthrough').length },
    { id: 'revolution', label: 'Revolutions', count: contentPieces.filter(p => p.category === 'revolution').length },
    { id: 'success', label: 'Success Stories', count: contentPieces.filter(p => p.category === 'success').length },
    { id: 'framework', label: 'Frameworks', count: contentPieces.filter(p => p.category === 'framework').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentPieces 
    : contentPieces.filter(piece => piece.category === activeCategory);

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

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'resource':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ultimate AI Breakthrough Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the latest AI breakthroughs delivering 2,500%+ ROI through quantum computing, 
            neural interfaces, and autonomous systems.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Content Header */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{getTypeIcon(content.type)}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(content.type)}`}>
                      {content.type === 'case-study' ? 'Case Study' : content.type === 'resource' ? 'Resource' : 'Blog Post'}
                    </span>
                    {content.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-xs font-medium">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{content.readingTime}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                  {content.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {content.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{content.metrics.roi}</div>
                    <div className="text-sm text-green-700">ROI</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{content.metrics.savings}</div>
                    <div className="text-sm text-blue-700">Savings</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {content.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {content.tags.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      +{content.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <Link
                  href={content.url}
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <span>Read {content.type === 'case-study' ? 'Case Study' : content.type === 'resource' ? 'Resource' : 'Article'}</span>
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Achieve 2,500%+ ROI?</h3>
            <p className="text-xl mb-6 opacity-90">
              Get personalized implementation guidance from our AI transformation experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <span>Get Expert Consultation</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-200 border border-white/30"
              >
                <span>Browse All Resources</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateShowcase;