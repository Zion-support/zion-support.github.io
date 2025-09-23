'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateBusinessAutomationShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'ultimate-business-automation-revolution',
      title: 'AI 2025: The Ultimate Business Automation Revolution',
      subtitle: 'Ultimate Breakthrough Guide to 5,000% ROI',
      description: 'Complete business automation transformation with $2.8B annual savings. Learn how Fortune 500 companies achieve unprecedented ROI through intelligent automation.',
      type: 'blog',
      category: 'automation',
      metrics: {
        roi: '5,000%',
        savings: '$2.8B',
        accuracy: '99.7%',
        efficiency: '340%'
      },
      link: '/blog/ai-2025-ultimate-business-automation-revolution-ultimate-breakthrough',
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'fortune-500-automation-success',
      title: 'Fortune 500 Ultimate Business Automation Success',
      subtitle: '$2.8B Annual Savings - 5,000% ROI Success Story',
      description: 'Real-world case study of a Fortune 100 manufacturing company that achieved 5,000% ROI through complete business automation transformation.',
      type: 'case-study',
      category: 'automation',
      metrics: {
        roi: '5,000%',
        savings: '$2.8B',
        timeline: '18 months',
        satisfaction: '99.7%'
      },
      link: '/case-studies/fortune-500-ultimate-business-automation-5000-roi-success-story',
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'automation-implementation-guide',
      title: 'Ultimate Business Automation Implementation Guide',
      subtitle: 'Complete Roadmap to 5,000% ROI',
      description: 'Step-by-step implementation guide for achieving 5,000% ROI through business automation. Includes detailed timelines, best practices, and success metrics.',
      type: 'resource',
      category: 'automation',
      metrics: {
        roi: '5,000%',
        success: '98%',
        timeline: '18 months',
        processes: '200+'
      },
      link: '/resources/ultimate-business-automation-implementation-guide-2025',
      readingTime: '35 min read',
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'automation', name: 'Business Automation', count: contentItems.filter(item => item.category === 'automation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-500';
      case 'case-study': return 'bg-green-500';
      case 'resource': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="mr-2">🚀</span>
            ULTIMATE BUSINESS AUTOMATION REVOLUTION 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">5,000% ROI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the proven strategies and real-world success stories that are transforming Fortune 500 companies through ultimate business automation.
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
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-gradient-to-r ring-purple-500' : ''
              }`}
            >
              {/* Content header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex items-center px-3 py-1 rounded-full text-white text-sm font-medium ${getTypeColor(item.type)}`}>
                    <span className="mr-2">{getTypeIcon(item.type)}</span>
                    {item.type === 'blog' && 'Blog Post'}
                    {item.type === 'case-study' && 'Case Study'}
                    {item.type === 'resource' && 'Resource Guide'}
                  </div>
                  {item.featured && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                      ⭐ Featured
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-purple-600 font-semibold mb-3">
                  {item.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Reading time */}
                <div className="text-sm text-gray-500 mb-4">
                  ⏱️ {item.readingTime}
                </div>
              </div>

              {/* Action buttons */}
              <div className="px-6 pb-6">
                <Link
                  href={item.link}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  {item.type === 'blog' && 'Read Full Article'}
                  {item.type === 'case-study' && 'View Case Study'}
                  {item.type === 'resource' && 'Download Guide'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success metrics summary */}
        <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Proven Results Across Industries</h3>
            <p className="text-xl text-blue-200">
              Real-world success stories from Fortune 500 companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">5,000%</div>
              <div className="text-lg text-gray-200">Average ROI</div>
              <div className="text-sm text-gray-400">Achieved by leading companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$2.8B</div>
              <div className="text-lg text-gray-200">Annual Savings</div>
              <div className="text-sm text-gray-400">Per major enterprise</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.7%</div>
              <div className="text-lg text-gray-200">Accuracy Rate</div>
              <div className="text-sm text-gray-400">In automated processes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">340%</div>
              <div className="text-lg text-gray-200">Efficiency Gain</div>
              <div className="text-sm text-gray-400">Average improvement</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Achieve 5,000% ROI?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join the Fortune 500 companies that are transforming their operations with ultimate business automation. Get your comprehensive assessment and implementation roadmap today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Assessment
              </Link>
              <Link
                href="/services"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateBusinessAutomationShowcase;