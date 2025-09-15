'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Zap, Clock, Users, Award, ArrowRight } from 'lucide-react';

const UltimateBreakthroughShowcase2025 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const contentItems = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution',
      subtitle: 'Ultimate Breakthrough Guide to 1000% ROI',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 1000% ROI with revolutionary AI implementations. Complete guide to enterprise AI transformation.',
      type: 'blog',
      category: 'ai-revolution',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough',
      featured: true,
      metrics: {
        roi: '1000%',
        savings: '$5.2B',
        accuracy: '99.9%',
        efficiency: '340%'
      },
      readingTime: '25 min read',
      tags: ['AI Revolution', 'Enterprise', 'ROI', 'Breakthrough']
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation Success',
      subtitle: '$5.2B Annual Savings with 1,000% ROI',
      description: 'How a $75B manufacturing giant achieved unprecedented 1,000% ROI and $5.2B annual savings in just 18 months. Complete case study with implementation details.',
      type: 'case-study',
      category: 'success-story',
      url: '/case-studies/fortune-500-ai-transformation-1000-percent-roi-ultimate-success',
      featured: true,
      metrics: {
        roi: '1000%',
        savings: '$5.2B',
        timeline: '18 months',
        efficiency: '340%'
      },
      readingTime: '22 min read',
      tags: ['Case Study', 'Fortune 500', 'ROI', 'Success Story']
    },
    {
      id: 'implementation-roadmap',
      title: 'AI 2025 Implementation Ultimate Roadmap',
      subtitle: 'From Strategy to 1,000% ROI in 18 Months',
      description: 'Complete step-by-step roadmap to achieve 1,000% ROI with AI transformation. Proven framework used by Fortune 500 companies to achieve unprecedented success.',
      type: 'resource',
      category: 'implementation',
      url: '/resources/ai-2025-implementation-ultimate-roadmap-1000-percent-roi',
      featured: true,
      metrics: {
        roi: '1000%',
        timeline: '18 months',
        success: '99%',
        value: '$19.1B'
      },
      readingTime: '45 min read',
      tags: ['Implementation Guide', 'Strategy', 'ROI', 'Roadmap']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'ai-revolution', label: 'AI Revolution', count: contentItems.filter(item => item.category === 'ai-revolution').length },
    { id: 'success-story', label: 'Success Stories', count: contentItems.filter(item => item.category === 'success-story').length },
    { id: 'implementation', label: 'Implementation', count: contentItems.filter(item => item.category === 'implementation').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <Zap className="w-5 h-5" />;
      case 'case-study': return <Award className="w-5 h-5" />;
      case 'resource': return <ArrowRight className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            <Star className="w-4 h-4" />
            <span>BREAKTHROUGH 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ultimate AI Breakthrough Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the revolutionary AI content that's helping Fortune 500 companies achieve unprecedented 1000% ROI and $5.2B+ in annual savings.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">1000%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">$5.2B</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">18</div>
            <div className="text-gray-600">Months Timeline</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 text-sm font-bold text-center">
                  ⭐ FEATURED BREAKTHROUGH CONTENT
                </div>
              )}

              <div className="p-6">
                {/* Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-semibold ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="capitalize">{item.type.replace('-', ' ')}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readingTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <h4 className="text-lg text-purple-600 font-semibold mb-3">
                  {item.subtitle}
                </h4>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-purple-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-purple-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <Link
                  href={item.url}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Explore {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Achieve 1000% ROI with AI?
            </h3>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              Join the Fortune 500 companies already achieving unprecedented success with our proven AI transformation framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Get Your 1000% ROI Assessment
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                <Users className="w-5 h-5 mr-2" />
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateBreakthroughShowcase2025;