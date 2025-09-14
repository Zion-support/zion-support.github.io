'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const NewContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'predictive-analytics',
      category: 'blog',
      title: 'AI 2025: Advanced Predictive Analytics Revolution',
      description: '2,500% ROI with Next-Generation Machine Learning',
      metrics: '2,500% ROI • $8.2B+ Savings • 99.97% Accuracy',
      link: '/blog/ai-2025-advanced-predictive-analytics-revolution-ultimate-breakthrough',
      image: '/images/predictive-analytics.jpg',
      badge: 'NEW BREAKTHROUGH',
      readingTime: '25 min read'
    },
    {
      id: 'edge-computing',
      category: 'blog',
      title: 'AI 2025: Edge Computing Revolution',
      description: '1,800% ROI with Real-Time Intelligence',
      metrics: '1,800% ROI • $4.2B+ Savings • 95% Latency Reduction',
      link: '/blog/ai-2025-edge-computing-revolution-ultimate-breakthrough',
      image: '/images/edge-computing.jpg',
      badge: 'EDGE BREAKTHROUGH',
      readingTime: '22 min read'
    },
    {
      id: 'fortune-500-predictive',
      category: 'case-study',
      title: 'Fortune 500 Predictive Analytics Success',
      description: '$8.2B Annual Savings - Real Case Study',
      metrics: '2,500% ROI • $8.2B Savings • 18 Months',
      link: '/case-studies/fortune-500-predictive-analytics-transformation-2500-roi-success-story',
      image: '/images/fortune-500-predictive.jpg',
      badge: 'SUCCESS STORY',
      readingTime: '18 min read'
    },
    {
      id: 'retail-edge',
      category: 'case-study',
      title: 'Retail Edge Computing Success',
      description: '$1.8B Annual Savings - Real Case Study',
      metrics: '1,800% ROI • $1.8B Savings • 2,500+ Stores',
      link: '/case-studies/retail-edge-computing-transformation-1800-roi-success',
      image: '/images/retail-edge.jpg',
      badge: 'SUCCESS STORY',
      readingTime: '15 min read'
    },
    {
      id: 'predictive-guide',
      category: 'resource',
      title: 'Predictive Analytics Implementation Guide',
      description: 'Complete Roadmap to 2,500% ROI',
      metrics: '2,500% ROI • 94% Success Rate • 12-18 Months',
      link: '/resources/predictive-analytics-implementation-ultimate-guide-2025',
      image: '/images/predictive-guide.jpg',
      badge: 'IMPLEMENTATION GUIDE',
      readingTime: '28 min read'
    },
    {
      id: 'edge-guide',
      category: 'resource',
      title: 'Edge Computing Implementation Guide',
      description: 'Complete Roadmap to 1,800% ROI',
      metrics: '1,800% ROI • 89% Success Rate • 12-15 Months',
      link: '/resources/edge-computing-implementation-ultimate-guide-2025',
      image: '/images/edge-guide.jpg',
      badge: 'IMPLEMENTATION GUIDE',
      readingTime: '25 min read'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    { id: 'blog', name: 'Blog Posts', count: content.filter(item => item.category === 'blog').length },
    { id: 'case-study', name: 'Case Studies', count: content.filter(item => item.category === 'case-study').length },
    { id: 'resource', name: 'Resources', count: content.filter(item => item.category === 'resource').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            NEW 2025 CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest breakthroughs in AI, machine learning, and business transformation. 
            Featuring proven strategies that deliver unprecedented ROI.
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
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-500 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                    {item.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                    {item.readingTime}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.metrics.split(' • ').map((metric, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={item.link}
                  className="inline-flex items-center w-full justify-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Get personalized insights and implementation strategies tailored to your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
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

export default NewContentShowcase2025;