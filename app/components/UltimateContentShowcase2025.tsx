'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'ultimate-business-transformation',
      title: 'AI 2025: The Ultimate Business Transformation Revolution',
      type: 'blog',
      category: 'ai-revolution',
      description: 'Achieve 1,500% ROI through intelligent automation. The comprehensive guide to AI transformation that\'s reshaping entire industries.',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        efficiency: '890%',
        satisfaction: '99.7%'
      },
      url: '/blog/ai-2025-ultimate-business-transformation-revolution',
      readingTime: '25 min read',
      featured: true,
      badge: 'NEW 2025'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Success: $12.8B Company Achieves 1,500% ROI',
      type: 'case-study',
      category: 'case-studies',
      description: 'Real case study showing how a Fortune 500 manufacturing conglomerate saved $2.8 billion annually with revolutionary AI implementation.',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        efficiency: '340%',
        satisfaction: '99.2%'
      },
      url: '/case-studies/fortune-500-ai-transformation-1500-roi-ultimate-success',
      readingTime: '22 min read',
      featured: true,
      badge: 'CASE STUDY'
    },
    {
      id: 'implementation-roadmap',
      title: 'AI Implementation Ultimate Roadmap 2025',
      type: 'resource',
      category: 'implementation',
      description: 'From strategy to 1,500% ROI in 18 months. The proven framework that 500+ companies used for breakthrough AI transformation.',
      metrics: {
        roi: '1,500%',
        timeframe: '18 months',
        success: '89%',
        companies: '500+'
      },
      url: '/resources/ai-implementation-ultimate-roadmap-2025-comprehensive',
      readingTime: '35 min read',
      featured: true,
      badge: 'GUIDE'
    },
    {
      id: 'quantum-ai-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution',
      type: 'blog',
      category: 'ai-revolution',
      description: 'Ultimate guide to $100B market transformation through quantum-enhanced AI processing and 1,000x speed improvements.',
      metrics: {
        roi: '500%',
        speed: '1,000x',
        market: '$100B',
        accuracy: '99.9%'
      },
      url: '/blog/ai-2025-quantum-computing-business-revolution-ultimate-guide',
      readingTime: '30 min read',
      featured: false,
      badge: 'QUANTUM'
    },
    {
      id: 'neural-interface-revolution',
      title: 'AI 2026: The Neural Interface Revolution',
      type: 'blog',
      category: 'ai-revolution',
      description: 'Ultimate guide to 850% ROI through brain-computer integration and revolutionary human-AI collaboration.',
      metrics: {
        roi: '850%',
        savings: '$15.2M',
        efficiency: '340%',
        satisfaction: '99.7%'
      },
      url: '/blog/ai-2026-neural-interface-revolution-ultimate-guide',
      readingTime: '28 min read',
      featured: false,
      badge: 'NEURAL'
    },
    {
      id: 'synthetic-consciousness',
      title: 'AI 2026: The Synthetic Consciousness Breakthrough',
      type: 'blog',
      category: 'ai-revolution',
      description: 'Ultimate guide to 1,200% ROI through artificial general intelligence and revolutionary cognitive capabilities.',
      metrics: {
        roi: '1,200%',
        savings: '$45.8M',
        efficiency: '890%',
        innovation: '2,400%'
      },
      url: '/blog/ai-2026-synthetic-consciousness-breakthrough-ultimate-guide',
      readingTime: '32 min read',
      featured: false,
      badge: 'AGI'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'ai-revolution', label: 'AI Revolution', count: content.filter(c => c.category === 'ai-revolution').length },
    { id: 'case-studies', label: 'Case Studies', count: content.filter(c => c.category === 'case-studies').length },
    { id: 'implementation', label: 'Implementation', count: content.filter(c => c.category === 'implementation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  const featuredContent = content.filter(item => item.featured);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            <span className="mr-2">🚀</span>
            ULTIMATE AI CONTENT 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content That Delivers Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the breakthrough strategies, case studies, and implementation guides that are helping Fortune 500 companies achieve unprecedented AI transformation success.
          </p>
        </div>

        {/* Featured Content Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredContent.map((item, index) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      {item.badge}
                    </span>
                    <span className="text-sm text-gray-500">{item.readingTime}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {Object.entries(item.metrics).slice(0, 4).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 rounded-lg p-2 text-center">
                        <div className="text-lg font-bold text-purple-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href={item.url}
                    className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  >
                    Read {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Guide' : 'Article'}
                  </Link>
                </div>
              </div>
            ))}
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
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item, index) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    item.badge === 'NEW 2025' ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black' :
                    item.badge === 'CASE STUDY' ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white' :
                    item.badge === 'GUIDE' ? 'bg-gradient-to-r from-purple-400 to-pink-500 text-white' :
                    'bg-gradient-to-r from-indigo-400 to-purple-500 text-white'
                  }`}>
                    {item.badge}
                  </span>
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h4>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Object.entries(item.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-2 text-center">
                      <div className="text-sm font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>
                
                <Link
                  href={item.url}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  Read {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Guide' : 'Article'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Achieve 1,500% ROI with AI?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join 500+ companies that have transformed their business with our proven AI implementation strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;