'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Users, Award, Clock, BookOpen, FileText } from 'lucide-react';

const NewContent2025UltimateBreakthroughShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      type: 'blog',
      category: 'ai-revolution',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
      description: 'Discover how Fortune 500 companies are achieving 1,200% ROI through revolutionary AI implementations. Complete guide to enterprise AI transformation with real success stories and implementation strategies.',
      metrics: {
        roi: '1,200%',
        savings: '$3.2B',
        efficiency: '95%',
        satisfaction: '99.2%'
      },
      readingTime: '25 min read',
      featured: true,
      isNew: true,
      tags: ['AI Revolution', 'Enterprise AI', 'ROI', 'Fortune 500', 'Digital Transformation']
    },
    {
      id: 'fortune-500-ai-transformation-2025-ultimate-success-story',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings - Ultimate Success Story',
      type: 'case-study',
      category: 'case-studies',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      description: 'Complete case study with implementation details and lessons learned from a Fortune 500 manufacturing giant that achieved 1,200% ROI and $2.8B annual savings.',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '95%',
        timeline: '18 months'
      },
      readingTime: '18 min read',
      featured: true,
      isNew: true,
      tags: ['Case Study', 'Fortune 500', 'AI Transformation', 'ROI', 'Manufacturing']
    },
    {
      id: 'ai-implementation-ultimate-success-framework-2025',
      title: 'AI Implementation Ultimate Success Framework 2025: Complete Roadmap to 1,000%+ ROI',
      type: 'resource',
      category: 'implementation',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      description: 'The definitive guide to AI implementation success. Proven framework used by Fortune 500 companies to achieve 1,000%+ ROI with step-by-step implementation strategies.',
      metrics: {
        roi: '1,000%+',
        success: '94%',
        timeline: '18 months',
        projects: '1,000+'
      },
      readingTime: '25 min read',
      featured: true,
      isNew: true,
      tags: ['AI Implementation', 'Framework', 'ROI', 'Success Strategy', 'Enterprise AI']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'ai-revolution', label: 'AI Revolution', count: contentItems.filter(item => item.category === 'ai-revolution').length },
    { id: 'case-studies', label: 'Case Studies', count: contentItems.filter(item => item.category === 'case-studies').length },
    { id: 'implementation', label: 'Implementation', count: contentItems.filter(item => item.category === 'implementation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-4 h-4" />;
      case 'case-study':
        return <FileText className="w-4 h-4" />;
      case 'resource':
        return <Award className="w-4 h-4" />;
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
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">NEW ULTIMATE BREAKTHROUGH CONTENT 2025</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content That's
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Transforming Businesses
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the proven strategies, real success stories, and comprehensive frameworks 
            that are helping Fortune 500 companies achieve unprecedented ROI and transformation.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">1,200%</div>
            <div className="text-sm text-gray-600">Average ROI</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">$3.2B</div>
            <div className="text-sm text-gray-600">Total Savings</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-sm text-gray-600">Efficiency Gain</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">99.2%</div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                      {getTypeIcon(item.type)}
                      <span className="capitalize">{item.type.replace('-', ' ')}</span>
                    </div>
                    {item.isNew && (
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold rounded">
                        NEW
                      </span>
                    )}
                    {item.featured && (
                      <span className="px-2 py-1 bg-gradient-to-r from-purple-400 to-pink-400 text-white text-xs font-bold rounded">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{item.readingTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
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
                    <div className="text-2xl font-bold text-purple-600">
                      {item.metrics.roi}
                    </div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {item.metrics.savings}
                    </div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>

                <Link
                  href={item.url}
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  Read {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Join the Fortune 500 companies achieving 1,200% ROI through proven AI implementation strategies. 
              Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Explore All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateBreakthroughShowcase;