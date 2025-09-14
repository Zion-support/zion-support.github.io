'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const RevolutionaryContent2025UltimateShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'ultimate-ai-revolution',
      title: 'AI 2025-2026: The Ultimate AI Revolution Breakthrough',
      type: 'blog',
      category: 'ai-revolution',
      description: 'Achieve 10,000% ROI with Revolutionary AI Technologies that are reshaping industries worldwide.',
      metrics: {
        roi: '10,000%',
        savings: '$28.5B',
        accuracy: '99.99%',
        efficiency: '2,400%'
      },
      link: '/blog/ai-2025-2026-ultimate-ai-revolution-breakthrough-ultimate-guide',
      featured: true,
      readingTime: '35 min read',
      tags: ['AI Revolution', '10,000% ROI', 'Fortune 500', 'Ultimate Guide']
    },
    {
      id: 'fortune-100-success',
      title: 'Fortune 100 AI Revolution: $28.5B Annual Savings',
      type: 'case-study',
      category: 'success-story',
      description: 'How Global Manufacturing Corporation achieved the highest ROI in AI history through strategic implementation.',
      metrics: {
        roi: '10,000%',
        savings: '$28.5B',
        timeline: '18 months',
        efficiency: '1,200%'
      },
      link: '/case-studies/fortune-100-ai-revolution-10000-roi-ultimate-success-story',
      featured: true,
      readingTime: '25 min read',
      tags: ['Fortune 100', 'Success Story', '10,000% ROI', 'Manufacturing']
    },
    {
      id: 'implementation-framework',
      title: 'AI Implementation Ultimate Framework',
      type: 'resource',
      category: 'framework',
      description: 'The proven step-by-step guide used by Fortune 100 companies to achieve unprecedented AI success.',
      metrics: {
        roi: '2,500% - 10,000%',
        success: '94%',
        timeline: '18 months',
        companies: '1,000+'
      },
      link: '/resources/ai-2025-2026-implementation-ultimate-framework-10000-roi',
      featured: true,
      readingTime: '45 min read',
      tags: ['Implementation', 'Framework', 'ROI', 'Strategy']
    },
    {
      id: 'quantum-neural-superintelligence',
      title: 'AI 2025: The Quantum Neural Superintelligence Breakthrough',
      type: 'blog',
      category: 'ai-revolution',
      description: '3,000% ROI through quantum-enhanced neural networks and superintelligence platforms.',
      metrics: {
        roi: '3,000%',
        speed: '1,000,000x',
        accuracy: '99.99%',
        savings: '$27B'
      },
      link: '/blog/ai-2025-quantum-neural-superintelligence-breakthrough',
      featured: false,
      readingTime: '30 min read',
      tags: ['Quantum AI', 'Neural Interfaces', 'Superintelligence', '3,000% ROI']
    },
    {
      id: 'synthetic-intelligence-revolution',
      title: 'AI 2026: The Synthetic Intelligence Revolution',
      type: 'blog',
      category: 'ai-revolution',
      description: '3,500% ROI through synthetic intelligence platforms with human-level reasoning capabilities.',
      metrics: {
        roi: '3,500%',
        savings: '$12.8B+',
        accuracy: '99.97%',
        efficiency: '1,800%'
      },
      link: '/blog/ai-2026-synthetic-intelligence-revolution-ultimate-breakthrough',
      featured: false,
      readingTime: '32 min read',
      tags: ['Synthetic Intelligence', 'AI Revolution', '3,500% ROI', 'Fortune 500']
    },
    {
      id: 'fortune-500-synthetic-intelligence',
      title: 'Fortune 500 Synthetic Intelligence Transformation',
      type: 'case-study',
      category: 'success-story',
      description: '$12.8B Annual Savings - 3,500% ROI Success Story through synthetic intelligence implementation.',
      metrics: {
        roi: '3,500%',
        savings: '$12.8B',
        timeline: '18 months',
        accuracy: '99.98%'
      },
      link: '/case-studies/fortune-500-synthetic-intelligence-transformation-3500-roi-success',
      featured: false,
      readingTime: '20 min read',
      tags: ['Fortune 500', 'Synthetic Intelligence', '3,500% ROI', 'Success Story']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'ai-revolution', label: 'AI Revolution', count: content.filter(item => item.category === 'ai-revolution').length },
    { id: 'success-story', label: 'Success Stories', count: content.filter(item => item.category === 'success-story').length },
    { id: 'framework', label: 'Frameworks', count: content.filter(item => item.category === 'framework').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  const featuredContent = content.filter(item => item.featured);

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
            <span className="animate-pulse">🚀</span>
            <span className="ml-2">REVOLUTIONARY CONTENT 2025-2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Ultimate AI Revolution Content Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the revolutionary AI content that's helping Fortune 500 companies achieve unprecedented ROI of up to 10,000%.
          </p>
        </div>

        {/* Featured Content Banner */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">🌟 Featured: Ultimate AI Revolution</h3>
              <p className="text-xl text-blue-200">The most comprehensive AI transformation guide ever created</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredContent.map((item) => (
                <div key={item.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                      {item.type.toUpperCase()}
                    </span>
                    <span className="text-sm text-gray-300">{item.readingTime}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-gray-200 mb-4">{item.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {Object.entries(item.metrics).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-yellow-400">{value}</div>
                        <div className="text-xs text-gray-300 capitalize">{key.replace('_', ' ')}</div>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href={item.link}
                    className="block w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-center py-3 rounded-lg font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
                  >
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    item.type === 'blog' ? 'bg-blue-100 text-blue-800' :
                    item.type === 'case-study' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {item.type.toUpperCase()}
                  </span>
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {Object.entries(item.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="text-center bg-gray-50 rounded-lg p-3">
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={item.link}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg font-bold hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
                >
                  {item.type === 'blog' ? 'Read Article' : 
                   item.type === 'case-study' ? 'View Case Study' : 
                   'Download Resource'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Achieve 10,000% ROI?</h3>
            <p className="text-xl text-blue-200 mb-8">
              Join the Fortune 500 companies that are transforming their businesses with revolutionary AI technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Schedule AI Assessment
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore AI Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContent2025UltimateShowcase;