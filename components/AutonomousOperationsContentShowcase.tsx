"use client";
'use client';

import React{ useState } from 'react';
import Link from 'next/link';

const AutonomousOperationsContentShowcase: React.FC = () => {
  const [activeCategorysetActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'autonomous-business-operations-revolution',
      type: 'blog',
      title: 'AI 2025: The Autonomous Business Operations Revolution',
      subtitle: '$5.2T Market Transformation',
      description: 'Transform your business with autonomous AI systems that deliver unprecedented efficiency and competitive advantage.',
      metrics: {
        roi: '750%',
        savings: '$8.5M',
        efficiency: '95%',
        market: '$5.2T'
      },
      tags: ['Autonomous Operations'AI Revolution'Enterprise'ROI'],
      readingTime: '22 min read',
      url: '/blog/ai-2025-autonomous-business-operations-revolution',
      featured: true,
      category: 'blog'
    },
    {
      id: 'fortune-100-autonomous-operations-success',
      type: 'case-study',
      title: 'Fortune 100 Autonomous Operations Success',
      subtitle: '$12.8B Annual Savings with 890% ROI',
      description: 'See how a Fortune 100 manufacturing giant achieved record-breaking results with autonomous operations implementation.',
      metrics: {
        roi: '890%',
        savings: '$12.8B',
        efficiency: '156%',
        uptime: '99.97%'
      },
      tags: ['Fortune 100'Case Study'Manufacturing'Success Story'],
      readingTime: '18 min read',
      url: '/case-studies/fortune-100-autonomous-operations-890-roi-success',
      featured: true,
      category: 'case-study'
    },
    {
      id: 'autonomous-operations-implementation-guide',
      type: 'resource',
      title: 'Autonomous Operations Implementation Guide',
      subtitle: 'From Strategy to 890% ROI',
      description: 'Complete roadmap for implementing autonomous operations with proven strategiesframeworksand best practices.',
      metrics: {
        roi: '890%',
        success: '98%',
        payback: '1.4 months',
        implementations: '500+'
      },
      tags: ['Implementation Guide'Strategy'Framework'Best Practices'],
      readingTime: '35 min read',
      url: '/resources/autonomous-operations-implementation-guide-2025',
      featured: true,
      category: 'resource'
    }
  ];

  const categories = [
    { id: 'all'label: 'All Content'count: contentItems.length },
    { id: 'blog'label: 'Blog Posts'count: contentItems.filter(item => item.category === 'blog').length },
    { id: 'case-study'label: 'Case Studies'count: contentItems.filter(item => item.category === 'case-study').length },
    { id: 'resource'label: 'Resources'count: contentItems.filter(item => item.category === 'resource').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'from-blue-500 to-blue-600';
      case 'case-study': return 'from-green-500 to-green-600';
      case 'resource': return 'from-purple-500 to-purple-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW AUTONOMOUS OPERATIONS CONTENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary Autonomous Operations Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest insightsuccess storiesand implementation strategies for autonomous business operations that deliver 890% ROI.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-700 border border-gray-200'
              }`}
            >
              {category.label}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                activeCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-purple-100 text-purple-700'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Success Metrics Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">890%</div>
            <div className="text-gray-600 font-medium">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$12.8B</div>
            <div className="text-gray-600 font-medium">Annual Savings</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">156%</div>
            <div className="text-gray-600 font-medium">Efficiency Gain</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">99.97%</div>
            <div className="text-gray-600 font-medium">System Uptime</div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Header with type indicator */}
              <div className={`bg-gradient-to-r ${getTypeColor(item.type)} p-4`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className="text-white font-semibold capitalize">{item.type.replace('-' ')}</span>
                  </div>
                  {item.featured && (
                    <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-purple-600 font-semibold mb-3">
                  {item.subtitle}
                </p>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(item.metrics).map(([keyvalue]) => (
                    <div key={key} className="bg-gray-50 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-gray-900">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g' $1')}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(03).map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item.readingTime}
                  </div>
                  <Link
                    href={item.url}
                    className="inline-flex items-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors text-sm"
                  >
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with Autonomous Operations?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join the revolution that's delivering 890% ROI and $12.8B savings to enterprise leaders worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services/autonomous-operations"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span>Get Expert Consultation</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/resources/autonomous-operations-implementation-guide-2025"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                <span>Download Implementation Guide</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomousOperationsContentShowcase;