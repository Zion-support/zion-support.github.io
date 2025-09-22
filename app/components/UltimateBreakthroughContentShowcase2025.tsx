'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateBreakthroughContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'ai-2025-2026-ultimate-breakthrough-revolution',
      title: 'AI 2025-2026: The Ultimate Breakthrough Revolution - Ultimate Guide to 15,000% ROI',
      type: 'blog',
      category: 'ai-revolution',
      url: '/blog/ai-2025-2026-ultimate-breakthrough-revolution-ultimate-guide',
      metrics: {
        roi: '15,000%',
        savings: '$150M+',
        accuracy: '99.99%',
        efficiency: '2,400%'
      },
      description: 'Revolutionary AI technologies delivering unprecedented ROI through quantum-enhanced systems, neural superintelligence, and synthetic consciousness platforms.',
      featured: true,
      readingTime: '45 min read'
    },
    {
      id: 'fortune-500-ai-revolution-15000-roi-success',
      title: 'Fortune 500 AI Revolution Success: $150M Annual Savings - 15,000% ROI Success Story',
      type: 'case-study',
      category: 'case-studies',
      url: '/case-studies/fortune-500-ai-revolution-15000-roi-success-story',
      metrics: {
        roi: '15,000%',
        savings: '$150M',
        efficiency: '2,400%',
        satisfaction: '99.8%'
      },
      description: 'Global Manufacturing Solutions achieved unprecedented 15,000% ROI through next-generation AI implementation, transforming their entire operation.',
      featured: true,
      readingTime: '25 min read'
    },
    {
      id: 'ai-revolution-implementation-ultimate-guide',
      title: 'AI Revolution Implementation Ultimate Guide 2025-2026: Complete Roadmap to 15,000% ROI',
      type: 'resource',
      category: 'resources',
      url: '/resources/ai-revolution-implementation-ultimate-guide-2025-2026',
      metrics: {
        roi: '15,000%',
        timeline: '18-24 months',
        success: '94%',
        investment: '$5M-$20M'
      },
      description: 'Comprehensive implementation guide providing Fortune 500 companies with proven roadmap to achieve revolutionary AI transformation results.',
      featured: true,
      readingTime: '60 min read'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    { id: 'ai-revolution', name: 'AI Revolution', count: content.filter(c => c.category === 'ai-revolution').length },
    { id: 'case-studies', name: 'Case Studies', count: content.filter(c => c.category === 'case-studies').length },
    { id: 'resources', name: 'Resources', count: content.filter(c => c.category === 'resources').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 ULTIMATE BREAKTHROUGH CONTENT 2025-2026</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the breakthrough AI technologies and success stories that are transforming Fortune 500 companies with unprecedented ROI and revolutionary capabilities.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              {/* Content header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.type === 'blog' ? 'bg-blue-100 text-blue-800' :
                      item.type === 'case-study' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {item.type === 'blog' ? 'Blog Post' : 
                       item.type === 'case-study' ? 'Case Study' : 'Resource'}
                    </span>
                    {item.featured && (
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">
                        {value}
                      </div>
                      <div className="text-sm text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex space-x-3">
                  <Link
                    href={item.url}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300"
                  >
                    Read Article
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-semibold transition-all duration-300"
                  >
                    Consult
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success statistics */}
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Proven Results Across Industries
            </h3>
            <p className="text-lg opacity-90">
              Our revolutionary AI implementations have delivered unprecedented results for Fortune 500 companies worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15,000%</div>
              <div className="text-purple-200">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$150M+</div>
              <div className="text-purple-200">Annual Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.99%</div>
              <div className="text-purple-200">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">94%</div>
              <div className="text-purple-200">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Achieve Revolutionary Results?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Join the Fortune 500 companies that have transformed their operations with our breakthrough AI technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your AI Transformation
            </Link>
            <Link
              href="/services"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateBreakthroughContentShowcase2025;