'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const RevolutionaryContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'neural-interface-revolution',
      title: 'AI 2025: The Neural Interface Revolution',
      subtitle: 'Ultimate Guide to 850% ROI',
      description: 'Transforming Human-Computer Interaction Through Advanced Neural Interfaces',
      metrics: {
        roi: '850%',
        productivity: '340%',
        accuracy: '99.7%',
        efficiency: '156%'
      },
      url: '/blog/ai-2025-neural-interface-revolution-ultimate-guide',
      type: 'blog',
      readingTime: '25 min read',
      featured: true,
      category: 'ai-revolution'
    },
    {
      id: 'blockchain-integration-revolution',
      title: 'AI 2025: The Blockchain Integration Revolution',
      subtitle: 'Ultimate Guide to 920% ROI',
      description: 'Transforming Enterprise Operations Through AI-Powered Blockchain Solutions',
      metrics: {
        roi: '920%',
        transparency: '100%',
        security: '99.9%',
        efficiency: '340%'
      },
      url: '/blog/ai-2025-blockchain-integration-revolution-ultimate-guide',
      type: 'blog',
      readingTime: '22 min read',
      featured: true,
      category: 'ai-revolution'
    },
    {
      id: 'neural-interface-fortune-500',
      title: 'Fortune 500 Neural Interface Success',
      subtitle: '$2.8B Company Achieves 850% ROI',
      description: 'How a Global Manufacturing Giant Transformed Operations Through Brain-Computer Integration',
      metrics: {
        roi: '850%',
        savings: '$180M',
        productivity: '340%',
        satisfaction: '94%'
      },
      url: '/case-studies/ai-2025-neural-interface-fortune-500-success-850-roi',
      type: 'case-study',
      readingTime: '18 min read',
      featured: true,
      category: 'success-stories'
    },
    {
      id: 'blockchain-integration-fortune-500',
      title: 'Fortune 500 Blockchain Integration Success',
      subtitle: '$3.2B Company Achieves 920% ROI',
      description: 'How a Global Logistics Giant Transformed Operations Through AI-Powered Blockchain',
      metrics: {
        roi: '920%',
        savings: '$280M',
        transparency: '100%',
        satisfaction: '97%'
      },
      url: '/case-studies/ai-2025-blockchain-integration-fortune-500-success-920-roi',
      type: 'case-study',
      readingTime: '16 min read',
      featured: true,
      category: 'success-stories'
    },
    {
      id: 'neural-interface-implementation',
      title: 'Neural Interface Implementation Master Guide',
      subtitle: 'From Strategy to 850% ROI',
      description: 'Comprehensive Implementation Framework for Enterprise Neural Interface Technology',
      metrics: {
        roi: '850%',
        payback: '3.2 months',
        success: '98%',
        implementations: '500+'
      },
      url: '/resources/ai-2025-neural-interface-implementation-master-guide',
      type: 'resource',
      readingTime: '35 min read',
      featured: true,
      category: 'implementation'
    },
    {
      id: 'blockchain-integration-implementation',
      title: 'Blockchain Integration Implementation Guide',
      subtitle: 'From Strategy to 920% ROI',
      description: 'Comprehensive Implementation Framework for Enterprise AI-Blockchain Integration',
      metrics: {
        roi: '920%',
        payback: '2.8 months',
        success: '89%',
        implementations: '500+'
      },
      url: '/resources/ai-2025-blockchain-integration-implementation-master-guide',
      type: 'resource',
      readingTime: '30 min read',
      featured: true,
      category: 'implementation'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    { id: 'ai-revolution', name: 'AI Revolution', count: content.filter(item => item.category === 'ai-revolution').length },
    { id: 'success-stories', name: 'Success Stories', count: content.filter(item => item.category === 'success-stories').length },
    { id: 'implementation', name: 'Implementation', count: content.filter(item => item.category === 'implementation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 REVOLUTIONARY CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Business with Revolutionary AI Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the latest breakthroughs in AI technology with our comprehensive guides, 
            real-world success stories, and implementation frameworks delivering up to 920% ROI.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.type === 'blog' 
                      ? 'bg-blue-100 text-blue-800' 
                      : item.type === 'case-study'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}
                  </span>
                  {item.featured && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-3">
                  {item.subtitle}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-sm text-gray-500">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {item.metrics.productivity || item.metrics.transparency || item.metrics.savings}
                    </div>
                    <div className="text-sm text-gray-500">
                      {item.metrics.productivity ? 'Productivity' : 
                       item.metrics.transparency ? 'Transparency' : 'Savings'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-500">New</span>
                  </div>
                </div>

                <Link
                  href={item.url}
                  className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                >
                  Read {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics Summary */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Revolutionary Content Impact</h3>
            <p className="text-xl text-purple-100">
              Our comprehensive content library has helped organizations achieve unprecedented results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">920%</div>
              <div className="text-lg text-purple-100">Maximum ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-lg text-purple-100">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">$2.8B</div>
              <div className="text-lg text-purple-100">Total Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-lg text-purple-100">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get personalized consultation and implementation support for your AI transformation journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Free Consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-200"
            >
              Browse All Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContentShowcase2025;