'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentData = [
    {
      id: 'quantum-ai-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution',
      description: 'How Quantum AI is Transforming Enterprise Operations and Delivering 1,200% Performance Gains',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      type: 'blog',
      category: 'ai',
      metrics: {
        performance: '1,200%',
        accuracy: '99.97%',
        market: '$100B',
        roi: '400-600%'
      },
      isNew: true,
      featured: true
    },
    {
      id: 'enterprise-ai-breakthrough',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      description: 'Transform Your Business with Cutting-Edge AI Solutions That Deliver 500% ROI',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough',
      type: 'blog',
      category: 'ai',
      metrics: {
        roi: '500%',
        savings: '$2.3B',
        efficiency: '340%',
        accuracy: '99.7%'
      },
      isNew: true,
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation 2025: $2.8B Annual Savings in 18 Months',
      description: 'How a Global Manufacturing Giant Achieved 567% ROI with Comprehensive AI Implementation',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      type: 'case-study',
      category: 'case-study',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        timeline: '18 months',
        uptime: '99.2%'
      },
      isNew: true,
      featured: true
    },
    {
      id: 'implementation-roadmap',
      title: 'AI 2025 Implementation Ultimate Roadmap: From Strategy to 800% ROI in 18 Months',
      description: 'The Complete Guide to Enterprise AI Transformation Success',
      url: '/resources/ai-2025-implementation-ultimate-roadmap-comprehensive',
      type: 'resource',
      category: 'implementation',
      metrics: {
        roi: '800%',
        timeline: '18 months',
        success: '89%',
        savings: '$173.7M'
      },
      isNew: true,
      featured: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentData.length },
    { id: 'ai', label: 'AI & Technology', count: contentData.filter(item => item.category === 'ai').length },
    { id: 'case-study', label: 'Case Studies', count: contentData.filter(item => item.category === 'case-study').length },
    { id: 'implementation', label: 'Implementation', count: contentData.filter(item => item.category === 'implementation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentData 
    : contentData.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 ULTIMATE CONTENT SHOWCASE 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content That Delivers Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the latest breakthroughs in AI, Quantum Computing, and Enterprise Transformation. 
            Each piece of content is designed to deliver measurable business value and ROI.
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
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label}
              <span className="ml-2 bg-white/20 text-xs px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Content Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      content.type === 'blog' ? 'bg-blue-100 text-blue-800' :
                      content.type === 'case-study' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {content.type.toUpperCase()}
                    </span>
                    {content.isNew && (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        NEW
                      </span>
                    )}
                    {content.featured && (
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        FEATURED
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {content.description}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="px-6 pb-4">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(content.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">{key.replace('_', ' ')}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6">
                <Link
                  href={content.url}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-center block"
                >
                  Read Full Article →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Proven Results Across All Content</h3>
            <p className="text-xl opacity-90">
              Our content is backed by real-world implementations and measurable business outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500%+</div>
              <div className="text-lg font-semibold mb-1">Average ROI</div>
              <div className="text-sm opacity-80">Across all implementations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">$2.8B</div>
              <div className="text-lg font-semibold mb-1">Total Savings</div>
              <div className="text-sm opacity-80">From Fortune 500 implementations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">99.7%</div>
              <div className="text-lg font-semibold mb-1">Accuracy Rate</div>
              <div className="text-sm opacity-80">In AI-powered predictions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">89%</div>
              <div className="text-lg font-semibold mb-1">Success Rate</div>
              <div className="text-sm opacity-80">Of implementation projects</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already achieving extraordinary results with our AI solutions and implementation strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get AI Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;