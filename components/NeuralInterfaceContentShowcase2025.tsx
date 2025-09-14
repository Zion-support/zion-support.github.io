'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const NeuralInterfaceContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const neuralContent = [
    {
      id: 'neural-interfaces-business-revolution',
      title: 'AI 2025: The Neural Interfaces Business Revolution - Ultimate Enterprise Guide',
      type: 'blog',
      category: 'guides',
      url: '/blog/ai-2025-neural-interfaces-business-revolution-ultimate-guide',
      description: 'Transform your business with brain-computer interface technology - 800% ROI in 12 months',
      tags: ['Neural Interfaces', 'Business Revolution', 'ROI', 'Enterprise'],
      readingTime: '25 min read',
      featured: true,
      metrics: {
        roi: '800%',
        savings: '$50M+',
        efficiency: '95%',
        satisfaction: '98%'
      }
    },
    {
      id: 'fortune-500-neural-transformation',
      title: 'Fortune 500 Neural Interface Transformation: 800% ROI Success Story',
      type: 'case-study',
      category: 'case-studies',
      url: '/case-studies/fortune-500-neural-interface-transformation-800-roi-success',
      description: 'How a Global Manufacturing Giant achieved $75M annual savings with neural interface technology',
      tags: ['Case Study', 'Fortune 500', 'Neural Interfaces', 'ROI'],
      readingTime: '18 min read',
      featured: true,
      metrics: {
        roi: '800%',
        savings: '$75M',
        efficiency: '98%',
        satisfaction: '98%'
      }
    },
    {
      id: 'neural-interface-implementation-guide',
      title: 'Neural Interface Implementation Guide 2025: 800% ROI Framework',
      type: 'resource',
      category: 'resources',
      url: '/resources/neural-interface-implementation-guide-2025',
      description: 'Complete enterprise implementation strategy for neural interface technology',
      tags: ['Implementation Guide', 'Neural Interfaces', 'ROI', 'Framework'],
      readingTime: '15 min read',
      featured: true,
      metrics: {
        roi: '800%',
        success: '98%',
        timeline: '12 months',
        savings: '$50M+'
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: neuralContent.length },
    { id: 'guides', label: 'Implementation Guides', count: neuralContent.filter(item => item.category === 'guides').length },
    { id: 'case-studies', label: 'Success Stories', count: neuralContent.filter(item => item.category === 'case-studies').length },
    { id: 'resources', label: 'Resources', count: neuralContent.filter(item => item.category === 'resources').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? neuralContent 
    : neuralContent.filter(item => item.category === activeCategory);

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-purple-600">NEURAL INTERFACE REVOLUTION 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Future of Business is Neural
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover how Fortune 500 companies are achieving unprecedented results with neural interface technology. 
            Join the revolution and transform your business with <span className="text-purple-600 font-semibold">800% ROI</span> and 
            <span className="text-purple-600 font-semibold"> $50M+ annual savings</span>.
          </p>

          {/* Success metrics summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">800%</div>
              <div className="text-sm text-gray-600">Average ROI</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-green-600 mb-2">$50M+</div>
              <div className="text-sm text-gray-600">Annual Savings</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Efficiency Gains</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-indigo-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-purple-300 hover:text-purple-600'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Content header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    item.type === 'blog' ? 'bg-blue-100 text-blue-800' :
                    item.type === 'case-study' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {item.type.toUpperCase()}
                  </span>
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="p-6 bg-gray-50">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      {item.metrics.roi}
                    </div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {item.metrics.savings}
                    </div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>

                <Link
                  href={item.url}
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  Read {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Guide' : 'Article'}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business with Neural Interfaces?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join Fortune 500 companies achieving 800% ROI with neural interface technology. 
            Get your personalized assessment and implementation roadmap today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Get Neural Interface Assessment
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors duration-200"
            >
              View All Success Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceContentShowcase2025;