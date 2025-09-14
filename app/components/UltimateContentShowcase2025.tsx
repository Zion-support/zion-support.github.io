'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Users, Zap, Clock, Tag, ExternalLink } from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const contentItems = [
    {
      id: 'ai-2025-ultimate-business-transformation-revolution',
      title: 'AI 2025: The Ultimate Business Transformation Revolution',
      subtitle: '1,200% ROI in 6 Months',
      description: 'Discover how Fortune 500 companies are achieving unprecedented results with cutting-edge AI technologies that deliver transformational business outcomes.',
      type: 'blog',
      category: 'transformation',
      url: '/blog/ai-2025-ultimate-business-transformation-revolution',
      readingTime: '22 min read',
      metrics: {
        roi: '1,200%',
        savings: '$6.5B',
        efficiency: '89%',
        timeline: '6 months'
      },
      tags: ['Revolution', 'ROI', 'Fortune 500', 'Transformation', 'AI Strategy'],
      featured: true,
      isNew: true,
      publishedDate: '2025-01-17'
    },
    {
      id: 'fortune-500-ai-transformation-2025-ultimate-success-story',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings',
      subtitle: '567% ROI in 18 Months',
      description: 'Real-world case study of a manufacturing giant that revolutionized their operations with AI, achieving extraordinary financial and operational results.',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      readingTime: '15 min read',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        efficiency: '95%',
        timeline: '18 months'
      },
      tags: ['Case Study', 'Fortune 500', 'Success Story', 'Manufacturing', 'ROI'],
      featured: true,
      isNew: true,
      publishedDate: '2025-01-17'
    },
    {
      id: 'ai-2025-implementation-roadmap-800-roi',
      title: 'AI 2025 Implementation Ultimate Roadmap',
      subtitle: 'From Strategy to 800% ROI in 18 Months',
      description: 'Comprehensive step-by-step guide for implementing AI technologies that deliver extraordinary results through strategic planning and execution.',
      type: 'resource',
      category: 'implementation',
      url: '/resources/ai-2025-implementation-roadmap-800-roi',
      readingTime: '25 min read',
      metrics: {
        roi: '800%',
        savings: '$5.6B',
        efficiency: '95%',
        timeline: '18 months'
      },
      tags: ['Implementation', 'Roadmap', 'Strategy', 'ROI', 'Guide'],
      featured: true,
      isNew: true,
      publishedDate: '2025-01-17'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'transformation', label: 'Transformation', count: contentItems.filter(item => item.category === 'transformation').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.category === 'case-study').length },
    { id: 'implementation', label: 'Implementation', count: contentItems.filter(item => item.category === 'implementation').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <Zap className="w-5 h-5" />;
      case 'case-study':
        return <Users className="w-5 h-5" />;
      case 'resource':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <Star className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-purple-100 text-purple-800';
      case 'case-study':
        return 'bg-blue-100 text-blue-800';
      case 'resource':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">ULTIMATE CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI insights, success stories, and implementation guides that are transforming businesses worldwide.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label}
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>
                      {getTypeIcon(item.type)}
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600 capitalize">
                        {item.type.replace('-', ' ')}
                      </span>
                      {item.isNew && (
                        <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          NEW
                        </span>
                      )}
                    </div>
                  </div>
                  {item.featured && (
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-lg font-semibold text-purple-600 mb-3">
                  {item.subtitle}
                </p>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-green-700">ROI</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-xs text-blue-700">Savings</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readingTime}
                    </div>
                    <div>{item.publishedDate}</div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <Link
                  href={item.url}
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 group"
                >
                  Read {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of companies already achieving extraordinary results with our proven AI strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Users className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Explore All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;