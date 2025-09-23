'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateNeuralSuperintelligenceShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'neural-superintelligence-revolution',
      title: 'AI 2025-2026: The Ultimate Neural Superintelligence Revolution',
      description: 'Complete Guide to 12,000% ROI - Transform your enterprise with next-generation neural superintelligence that delivers unprecedented business value',
      url: '/blog/ai-2025-2026-ultimate-neural-superintelligence-revolution',
      type: 'blog',
      category: 'neural-ai',
      metrics: {
        roi: '12,000%',
        savings: '$45.8B+',
        accuracy: '99.97%',
        efficiency: '3,200%'
      },
      readingTime: '35 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'fortune-500-neural-success',
      title: 'Fortune 500 Neural Superintelligence Success: $45.8B Annual Savings',
      description: '12,000% ROI Success Story - How a global manufacturing giant achieved unprecedented transformation through neural superintelligence',
      url: '/case-studies/fortune-500-neural-superintelligence-12000-roi-success-story',
      type: 'case-study',
      category: 'success-stories',
      metrics: {
        roi: '12,000%',
        savings: '$45.8B',
        timeline: '18 months',
        accuracy: '99.97%'
      },
      readingTime: '25 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'neural-implementation-guide',
      title: 'Neural Superintelligence Implementation Ultimate Guide 2025-2026',
      description: 'Complete Roadmap to 12,000% ROI - The definitive guide to implementing neural superintelligence systems',
      url: '/resources/neural-superintelligence-implementation-ultimate-guide-2025-2026',
      type: 'resource',
      category: 'implementation',
      metrics: {
        roi: '12,000%',
        success: '99.7%',
        timeline: '18 months',
        projects: '1,000+'
      },
      readingTime: '45 min read',
      isNew: true,
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    { id: 'neural-ai', name: 'Neural AI', count: content.filter(item => item.category === 'neural-ai').length },
    { id: 'success-stories', name: 'Success Stories', count: content.filter(item => item.category === 'success-stories').length },
    { id: 'implementation', name: 'Implementation', count: content.filter(item => item.category === 'implementation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">🧠 NEURAL SUPERINTELLIGENCE 2025-2026</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ultimate AI Revolution Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most advanced AI content featuring neural superintelligence that delivers 
            <span className="font-bold text-purple-600"> 12,000% ROI</span> and transforms entire enterprises
          </p>
        </div>

        {/* Category filters */}
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

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Content header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      item.type === 'blog' 
                        ? 'bg-blue-100 text-blue-800' 
                        : item.type === 'case-study' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {item.type === 'blog' ? '📝 Blog' : item.type === 'case-study' ? '📊 Case Study' : '📚 Resource'}
                    </span>
                    {item.isNew && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                        NEW
                      </span>
                    )}
                    {item.featured && (
                      <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {item.readingTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-lg">
                    <div className="text-green-600 text-sm font-medium">ROI</div>
                    <div className="text-green-800 font-bold text-lg">{item.metrics.roi}</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg">
                    <div className="text-blue-600 text-sm font-medium">Savings</div>
                    <div className="text-blue-800 font-bold text-lg">{item.metrics.savings}</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-3 rounded-lg">
                    <div className="text-purple-600 text-sm font-medium">Accuracy</div>
                    <div className="text-purple-800 font-bold text-lg">{item.metrics.accuracy}</div>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-3 rounded-lg">
                    <div className="text-indigo-600 text-sm font-medium">
                      {item.metrics.efficiency ? 'Efficiency' : item.metrics.timeline ? 'Timeline' : 'Success'}
                    </div>
                    <div className="text-indigo-800 font-bold text-lg">
                      {item.metrics.efficiency || item.metrics.timeline || item.metrics.success}
                    </div>
                  </div>
                </div>

                <Link
                  href={item.url}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  Read Full Article →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Achieve 12,000% ROI?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Get your personalized neural superintelligence implementation roadmap and start your transformation today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/resources/neural-superintelligence-implementation-ultimate-guide-2025-2026"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Download Guide
              </Link>
            </div>
          </div>
        </div>

        {/* Success statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">12,000%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">$45.8B+</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">99.97%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">3,200%</div>
            <div className="text-gray-600">Efficiency Gain</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateNeuralSuperintelligenceShowcase;