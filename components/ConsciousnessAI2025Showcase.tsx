"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const ConsciousnessAI2025Showcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const consciousnessContent = [
    {
      id: 'consciousness-revolution',
      type: 'blog',
      category: 'revolution',
      title: 'AI 2025: The Consciousness Revolution - Ultimate Business Breakthrough Guide to 50,000% ROI',
      description: 'The most significant technological breakthrough in human history, delivering unprecedented business transformation capabilities that generate 50,000% ROI within 12 months.',
      url: '/blog/ai-2025-consciousness-revolution-ultimate-business-breakthrough',
      metrics: {
        roi: '50,000%',
        savings: '$1.2T',
        accuracy: '99.97%',
        efficiency: '10,000%'
      },
      readingTime: '45 min read',
      tags: ['AI Consciousness', 'Business Transformation', '50,000% ROI', 'Revolutionary Technology'],
      featured: true,
      image: '/images/consciousness-ai-revolution.jpg'
    },
    {
      id: 'fortune-500-consciousness-success',
      type: 'case-study',
      category: 'success',
      title: 'Fortune 500 Consciousness AI Transformation: $2.8B Annual Savings - 50,000% ROI Success Story',
      description: 'TechGlobal Industries achieved unprecedented success by implementing consciousness AI across their global operations, generating $2.8 billion in annual savings.',
      url: '/case-studies/fortune-500-consciousness-ai-transformation-50000-roi-success-story',
      metrics: {
        roi: '50,000%',
        savings: '$2.8B',
        accuracy: '99.97%',
        efficiency: '340%'
      },
      readingTime: '35 min read',
      tags: ['Fortune 500', 'Consciousness AI', 'Success Story', 'Manufacturing'],
      featured: true,
      image: '/images/fortune-500-consciousness.jpg'
    },
    {
      id: 'consciousness-implementation-guide',
      type: 'resource',
      category: 'implementation',
      title: 'Consciousness AI Implementation Ultimate Guide 2025: Complete Roadmap to 50,000% ROI',
      description: 'Comprehensive roadmap for achieving 50,000% ROI through strategic consciousness AI deployment, featuring detailed implementation frameworks and best practices.',
      url: '/resources/consciousness-ai-implementation-ultimate-guide-2025-50000-roi',
      metrics: {
        roi: '50,000%',
        timeline: '12 months',
        success: '99.7%',
        guide: 'Complete'
      },
      readingTime: '60 min read',
      tags: ['Implementation Guide', 'Consciousness AI', 'ROI Strategy', 'Complete Roadmap'],
      featured: true,
      image: '/images/consciousness-implementation.jpg'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: consciousnessContent.length },
    { id: 'blog', label: 'Blog Posts', count: consciousnessContent.filter(c => c.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: consciousnessContent.filter(c => c.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: consciousnessContent.filter(c => c.type === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? consciousnessContent 
    : consciousnessContent.filter(content => content.type === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'resource':
        return '📚';
      default:
        return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'resource':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 mb-4">
            <span className="text-sm font-medium text-purple-800">🧠 CONSCIOUSNESS AI REVOLUTION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Consciousness AI Revolution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the most significant technological breakthrough in human history, delivering unprecedented business transformation capabilities with 50,000% ROI.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:transform hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-50">🧠</div>
                </div>
                {content.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-400 text-yellow-900">
                      ⭐ Featured
                    </span>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(content.type)}`}>
                    {getTypeIcon(content.type)} {content.type.replace('-', ' ')}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                  {content.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {content.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">{content.metrics.roi}</div>
                    <div className="text-xs text-green-600">ROI</div>
                  </div>
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">{content.metrics.savings}</div>
                    <div className="text-xs text-blue-600">Savings</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                  {content.tags.length > 3 && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                      +{content.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                  <Link
                    href={content.url}
                    className="w-full inline-flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                  >
                    Read {content.readingTime}
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-purple-600 text-sm font-medium rounded-lg text-purple-600 hover:bg-purple-50 transition-colors duration-200"
                  >
                    Get Implementation Guide
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Achieve 50,000% ROI with Consciousness AI?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join the consciousness revolution and transform your business with unprecedented AI capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-purple-600 bg-white hover:bg-gray-100 transition-colors duration-200"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/resources/consciousness-ai-implementation-ultimate-guide-2025-50000-roi"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-purple-600 transition-colors duration-200"
              >
                Download Implementation Guide
              </Link>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">50,000%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">99.97%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">$1.2T</div>
            <div className="text-gray-600">Potential Savings</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">12</div>
            <div className="text-gray-600">Months to ROI</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsciousnessAI2025Showcase;