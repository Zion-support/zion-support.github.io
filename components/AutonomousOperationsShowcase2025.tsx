'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi: string;
    savings: string;
    efficiency: string;
    accuracy?: string;
  };
  readingTime: string;
  featured?: boolean;
}

const AutonomousOperationsShowcase2025: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const contentItems: ContentItem[] = [
    {
      id: 'autonomous-business-operations',
      title: 'AI 2025: The Autonomous Business Operations Revolution',
      description: 'Complete transformation guide for implementing autonomous AI systems that deliver 340% ROI and revolutionize business operations.',
      type: 'blog',
      url: '/blog/ai-2025-autonomous-business-operations-revolution',
      metrics: {
        roi: '340%',
        savings: '$2.8B',
        efficiency: '78%'
      },
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'fortune-500-autonomous-success',
      title: 'Fortune 500 Autonomous Operations Success: 650% ROI',
      description: 'Comprehensive case study of how a $3.2B manufacturing company achieved 650% ROI with autonomous AI operations.',
      type: 'case-study',
      url: '/case-studies/autonomous-operations-success-fortune-500-2025',
      metrics: {
        roi: '650%',
        savings: '$2.8B',
        efficiency: '78%',
        accuracy: '99.7%'
      },
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'autonomous-implementation-guide',
      title: 'Autonomous Operations Implementation Guide 2025',
      description: 'Complete roadmap to implementing autonomous AI operations that deliver 650% ROI and transform your business.',
      type: 'resource',
      url: '/resources/autonomous-operations-implementation-guide-2025',
      metrics: {
        roi: '650%',
        savings: '$2.8B',
        efficiency: '78%'
      },
      readingTime: '30 min read',
      featured: true
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeFilter);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study': return 'bg-green-100 text-green-800 border-green-200';
      case 'resource': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
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

  const getFilterColor = (filter: string) => {
    return activeFilter === filter 
      ? 'bg-purple-600 text-white' 
      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200';
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">🚀 AUTONOMOUS OPERATIONS REVOLUTION</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transform Your Business with Autonomous AI Operations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how leading companies are achieving 650% ROI and $2.8B in savings with autonomous AI systems that revolutionize business operations.
          </p>
        </div>

        {/* Success Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">650%</div>
            <div className="text-gray-600 font-medium">Average ROI</div>
            <div className="text-sm text-gray-500">Within 18 months</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">$2.8B</div>
            <div className="text-gray-600 font-medium">Annual Savings</div>
            <div className="text-sm text-gray-500">Fortune 500 companies</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">78%</div>
            <div className="text-gray-600 font-medium">Efficiency Gain</div>
            <div className="text-sm text-gray-500">Operational improvement</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">99.7%</div>
            <div className="text-gray-600 font-medium">Accuracy Rate</div>
            <div className="text-sm text-gray-500">Operational precision</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${getFilterColor('all')}`}
          >
            All Content
          </button>
          <button
            onClick={() => setActiveFilter('blog')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${getFilterColor('blog')}`}
          >
            📝 Blog Posts
          </button>
          <button
            onClick={() => setActiveFilter('case-study')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${getFilterColor('case-study')}`}
          >
            📊 Case Studies
          </button>
          <button
            onClick={() => setActiveFilter('resource')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${getFilterColor('resource')}`}
          >
            📚 Resources
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {item.featured && (
                <div className="bg-purple-600 text-white px-4 py-2 text-sm font-medium text-center">
                  ⭐ Featured Content
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(item.type)}`}>
                    <span className="mr-2">{getTypeIcon(item.type)}</span>
                    {item.type.replace('-', ' ').toUpperCase()}
                  </div>
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-500">Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{item.metrics.efficiency}</div>
                    <div className="text-xs text-gray-500">Efficiency</div>
                  </div>
                </div>

                <Link
                  href={item.url}
                  className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Read {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Guide' : 'Article'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Operations with Autonomous AI?
            </h3>
            <p className="text-gray-600 mb-6">
              Join the companies already achieving 650% ROI and $2.8B in savings. Get your custom autonomous operations strategy today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomousOperationsShowcase2025;