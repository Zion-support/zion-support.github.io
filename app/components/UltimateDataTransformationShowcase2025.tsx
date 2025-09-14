'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, DollarSign, Clock, Users, BookOpen, FileText, BarChart3, Zap, Award, ArrowRight } from 'lucide-react';

const UltimateDataTransformationShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Content', count: 6 },
    { id: 'blog', label: 'Blog Posts', count: 2 },
    { id: 'case-study', label: 'Case Studies', count: 2 },
    { id: 'resource', label: 'Resources', count: 2 }
  ];

  const contentItems = [
    {
      id: 'data-revolution-guide',
      title: 'AI 2025: The Enterprise Data Revolution - Ultimate Guide to 800% ROI',
      description: 'Discover how Fortune 500 companies are achieving 800% ROI through AI-powered data transformation. Complete implementation guide with real success stories.',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-data-revolution-ultimate-guide',
      readingTime: '18 min read',
      metrics: {
        roi: '800%',
        savings: '$4.2M',
        timeframe: '18 months',
        accuracy: '99.8%'
      },
      tags: ['AI', 'Data Revolution', 'Enterprise', 'ROI', 'Fortune 500'],
      featured: true
    },
    {
      id: 'autonomous-operations',
      title: 'AI 2025: The Autonomous Operations Revolution - 1,200% ROI Through Intelligent Automation',
      description: 'Discover how Fortune 500 companies are achieving 1,200% ROI through AI-powered autonomous operations. Complete guide to intelligent automation transformation.',
      type: 'blog',
      url: '/blog/ai-2025-autonomous-operations-revolution',
      readingTime: '15 min read',
      metrics: {
        roi: '1,200%',
        savings: '$15.8M',
        timeframe: '24 months',
        efficiency: '450%'
      },
      tags: ['AI', 'Autonomous Operations', 'Intelligent Automation', 'ROI'],
      featured: true
    },
    {
      id: 'fortune-500-case-study',
      title: 'Fortune 500 AI Transformation: $2.8B Company Achieves 800% ROI in 18 Months',
      description: 'How a Fortune 500 manufacturing giant transformed their operations with AI, achieving 800% ROI and $4.2M annual savings through intelligent data management.',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-800-roi-success',
      readingTime: '12 min read',
      metrics: {
        roi: '800%',
        savings: '$19.2M',
        timeframe: '18 months',
        company: '$2.8B'
      },
      tags: ['Case Study', 'Fortune 500', 'AI Transformation', 'ROI'],
      featured: true
    },
    {
      id: 'autonomous-operations-case-study',
      title: 'AI Autonomous Operations Success: $3.2B Company Achieves 1,200% ROI in 24 Months',
      description: 'How a Fortune 500 energy company transformed their operations with AI-powered autonomous systems, achieving 1,200% ROI and $15.8M annual savings.',
      type: 'case-study',
      url: '/case-studies/ai-autonomous-operations-1200-roi-success',
      readingTime: '14 min read',
      metrics: {
        roi: '1,200%',
        savings: '$50.2M',
        timeframe: '24 months',
        company: '$3.2B'
      },
      tags: ['Case Study', 'Autonomous Operations', 'AI Transformation', 'ROI'],
      featured: true
    },
    {
      id: 'data-transformation-guide',
      title: 'AI Data Transformation Master Guide 2025: From Strategy to 800% ROI',
      description: 'Complete implementation guide for AI-powered data transformation. Learn how Fortune 500 companies achieve 800% ROI through intelligent data management.',
      type: 'resource',
      url: '/resources/ai-data-transformation-master-guide-2025',
      readingTime: '25 min read',
      metrics: {
        roi: '800%',
        enterprises: '500+',
        timeframe: '18 months',
        success: '98%'
      },
      tags: ['Implementation Guide', 'AI Strategy', 'Data Transformation', 'ROI'],
      featured: true
    },
    {
      id: 'autonomous-operations-guide',
      title: 'AI Autonomous Operations Implementation Guide: From Strategy to 1,200% ROI',
      description: 'Complete implementation guide for AI-powered autonomous operations. Learn how Fortune 500 companies achieve 1,200% ROI through intelligent automation.',
      type: 'resource',
      url: '/resources/ai-autonomous-operations-implementation-guide-2025',
      readingTime: '22 min read',
      metrics: {
        roi: '1,200%',
        enterprises: '300+',
        timeframe: '24 months',
        success: '95%'
      },
      tags: ['Implementation Guide', 'Autonomous Operations', 'AI Strategy', 'ROI'],
      featured: true
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-4 h-4" />;
      case 'case-study':
        return <FileText className="w-4 h-4" />;
      case 'resource':
        return <BarChart3 className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
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
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            NEW 2025 CONTENT SHOWCASE
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content: 800% - 1,200% ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI transformation content featuring real Fortune 500 success stories, 
            complete implementation guides, and proven strategies for achieving unprecedented ROI.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">800%+</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Fortune 500 Companies</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">18-24</div>
            <div className="text-gray-600">Months to ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">$50M+</div>
            <div className="text-gray-600">Average Savings</div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 shadow-md'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Content Type Badge */}
              <div className="p-4 pb-0">
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="ml-1 capitalize">{item.type.replace('-', ' ')}</span>
                  </span>
                  {item.featured && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      <Award className="w-3 h-3 mr-1" />
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 pt-0">
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <div>
                        <div className="text-sm font-bold text-green-600">{item.metrics.roi}</div>
                        <div className="text-xs text-gray-600">ROI</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-blue-600" />
                      <div>
                        <div className="text-sm font-bold text-blue-600">{item.metrics.savings}</div>
                        <div className="text-xs text-gray-600">Savings</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={item.url}
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  Read {item.readingTime}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join 500+ Fortune 500 companies achieving 800%+ ROI through AI transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                View All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateDataTransformationShowcase2025;