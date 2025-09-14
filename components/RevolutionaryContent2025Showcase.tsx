'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const RevolutionaryContent2025Showcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'ai-2025-ultimate-automation-revolution',
      title: 'AI 2025: The Ultimate Automation Revolution',
      description: 'Transform your business with 50,000% ROI through revolutionary AI automation that streamlines operations and maximizes efficiency.',
      type: 'Blog Post',
      category: 'ai-automation',
      roi: '50,000%',
      savings: '$2.8B+',
      readingTime: '25 min read',
      url: '/blog/ai-2025-ultimate-automation-revolution-50000-roi-breakthrough',
      image: '/images/ai-automation-revolution.jpg',
      badge: 'NEW',
      featured: true
    },
    {
      id: 'fortune-500-ai-automation-success',
      title: 'Fortune 500 AI Automation Success Story',
      description: 'How TechGlobal Industries achieved $2.8B annual savings with 50,000% ROI in just 18 months.',
      type: 'Case Study',
      category: 'case-study',
      roi: '50,000%',
      savings: '$2.8B',
      readingTime: '22 min read',
      url: '/case-studies/fortune-500-ai-automation-50000-roi-success-story',
      image: '/images/fortune-500-success.jpg',
      badge: 'FEATURED',
      featured: true
    },
    {
      id: 'ai-automation-implementation-guide',
      title: 'AI Automation Implementation Ultimate Guide',
      description: 'Complete roadmap to achieving 50,000% ROI with AI automation in your organization.',
      type: 'Implementation Guide',
      category: 'implementation',
      roi: '50,000%',
      savings: '$2.8B+',
      readingTime: '45 min read',
      url: '/resources/ai-automation-implementation-ultimate-guide-50000-roi',
      image: '/images/implementation-guide.jpg',
      badge: 'GUIDE',
      featured: true
    },
    {
      id: 'ai-2025-consciousness-revolution',
      title: 'AI 2025: The Consciousness Revolution',
      description: 'Ultimate business breakthrough guide to 50,000% ROI through consciousness AI technology.',
      type: 'Blog Post',
      category: 'ai-revolution',
      roi: '50,000%',
      savings: '$1.2T',
      readingTime: '45 min read',
      url: '/blog/ai-2025-consciousness-revolution-ultimate-business-breakthrough',
      image: '/images/consciousness-ai.jpg',
      badge: 'BREAKTHROUGH',
      featured: true
    },
    {
      id: 'fortune-500-consciousness-ai-success',
      title: 'Fortune 500 Consciousness AI Success',
      description: 'How a Fortune 500 company achieved $2.8B annual savings with consciousness AI transformation.',
      type: 'Case Study',
      category: 'case-study',
      roi: '50,000%',
      savings: '$2.8B',
      readingTime: '35 min read',
      url: '/case-studies/fortune-500-consciousness-ai-transformation-50000-roi-success-story',
      image: '/images/consciousness-success.jpg',
      badge: 'SUCCESS',
      featured: true
    },
    {
      id: 'consciousness-ai-implementation-guide',
      title: 'Consciousness AI Implementation Guide',
      description: 'Complete roadmap to 50,000% ROI with consciousness AI implementation.',
      type: 'Implementation Guide',
      category: 'implementation',
      roi: '50,000%',
      savings: '$1.2T+',
      readingTime: '60 min read',
      url: '/resources/consciousness-ai-implementation-ultimate-guide-2025-50000-roi',
      image: '/images/consciousness-guide.jpg',
      badge: 'ULTIMATE',
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'ai-automation', name: 'AI Automation', count: contentItems.filter(item => item.category === 'ai-automation').length },
    { id: 'ai-revolution', name: 'AI Revolution', count: contentItems.filter(item => item.category === 'ai-revolution').length },
    { id: 'case-study', name: 'Case Studies', count: contentItems.filter(item => item.category === 'case-study').length },
    { id: 'implementation', name: 'Implementation', count: contentItems.filter(item => item.category === 'implementation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full mb-6">
            <span className="text-sm font-medium">🚀 REVOLUTIONARY CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover breakthrough content featuring Fortune 500 success stories, 
            implementation guides, and revolutionary AI technologies with proven ROI results.
          </p>
        </div>

        {/* Category Filter */}
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
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-500 flex items-center justify-center">
                  <div className="text-6xl text-white/20">🤖</div>
                </div>
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    item.badge === 'NEW' ? 'bg-green-500 text-white' :
                    item.badge === 'FEATURED' ? 'bg-blue-500 text-white' :
                    item.badge === 'GUIDE' ? 'bg-purple-500 text-white' :
                    item.badge === 'BREAKTHROUGH' ? 'bg-red-500 text-white' :
                    item.badge === 'SUCCESS' ? 'bg-yellow-500 text-black' :
                    'bg-gray-500 text-white'
                  }`}>
                    {item.badge}
                  </span>
                  <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-xs font-bold">
                    {item.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center bg-green-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-green-600">{item.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center bg-blue-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-blue-600">{item.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <Link
                  href={item.url}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Read Full Content →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of companies achieving extraordinary ROI with our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
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

export default RevolutionaryContent2025Showcase;