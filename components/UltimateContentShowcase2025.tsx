'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Star, TrendingUp, Users, DollarSign, Clock, ArrowRight, Filter } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  description: string;
  metrics: {
    roi: string;
    savings: string;
    accuracy?: string;
    efficiency?: string;
  };
  featured: boolean;
  readingTime: string;
  tags: string[];
}

const UltimateContentShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems: ContentItem[] = [
    {
      id: 'ultimate-automation-revolution',
      title: 'AI 2025: The Ultimate Automation Revolution',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-automation-revolution-enterprise-breakthrough',
      description: 'Transform Fortune 500 companies with 1,500% ROI through revolutionary AI automation',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        accuracy: '99.7%',
        efficiency: '400%'
      },
      featured: true,
      readingTime: '28 min read',
      tags: ['AI Automation', 'Enterprise', 'ROI', 'Fortune 500']
    },
    {
      id: 'fortune-500-2500-roi-success',
      title: 'Fortune 500 AI Transformation: 2,500% ROI Success',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2500-roi-success-story',
      description: '$2.8B annual savings with 2,500% ROI in just 10 months',
      metrics: {
        roi: '2,500%',
        savings: '$2.8B',
        accuracy: '98.7%',
        efficiency: '10 months'
      },
      featured: true,
      readingTime: '22 min read',
      tags: ['Case Study', 'Fortune 500', 'ROI', 'Success Story']
    },
    {
      id: 'ultimate-implementation-roadmap',
      title: 'AI 2025 Implementation Ultimate Roadmap',
      type: 'resource',
      url: '/resources/ai-2025-implementation-ultimate-roadmap-comprehensive-guide',
      description: 'Complete guide to 2,000% ROI with proven 98% success rate',
      metrics: {
        roi: '2,000%',
        savings: '98%',
        accuracy: '18 months',
        efficiency: '500+'
      },
      featured: true,
      readingTime: '35 min read',
      tags: ['Implementation Guide', 'ROI', 'Best Practices', 'Roadmap']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeCategory);

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
      case 'blog': return 'from-blue-500 to-cyan-500';
      case 'case-study': return 'from-green-500 to-emerald-500';
      case 'resource': return 'from-purple-500 to-violet-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">ULTIMATE AI CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the most successful AI implementations delivering 1,500% - 2,500% ROI. 
            Proven strategies from Fortune 500 companies achieving unprecedented success.
          </p>
        </div>

        {/* Success metrics overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-8 h-8 text-green-500" />
              <span className="text-sm font-medium text-gray-600">Average ROI</span>
            </div>
            <div className="text-3xl font-bold text-green-600">2,000%</div>
            <div className="text-sm text-gray-500">Within 18 months</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <DollarSign className="w-8 h-8 text-yellow-500" />
              <span className="text-sm font-medium text-gray-600">Total Savings</span>
            </div>
            <div className="text-3xl font-bold text-yellow-600">$8.4B</div>
            <div className="text-sm text-gray-500">Across all implementations</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-8 h-8 text-blue-500" />
              <span className="text-sm font-medium text-gray-600">Success Rate</span>
            </div>
            <div className="text-3xl font-bold text-blue-600">98%</div>
            <div className="text-sm text-gray-500">Implementation success</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <Star className="w-8 h-8 text-purple-500" />
              <span className="text-sm font-medium text-gray-600">Fortune 500</span>
            </div>
            <div className="text-3xl font-bold text-purple-600">500+</div>
            <div className="text-sm text-gray-500">Successful projects</div>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Content header */}
              <div className={`bg-gradient-to-r ${getTypeColor(content.type)} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{getTypeIcon(content.type)}</span>
                    <span className="text-sm font-medium uppercase tracking-wide">
                      {content.type.replace('-', ' ')}
                    </span>
                  </div>
                  {content.featured && (
                    <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">
                  {content.title}
                </h3>
                <p className="text-sm opacity-90">
                  {content.description}
                </p>
              </div>

              {/* Content body */}
              <div className="p-6">
                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs font-medium text-gray-500 mb-1">ROI</div>
                    <div className="text-lg font-bold text-green-600">
                      {content.metrics.roi}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs font-medium text-gray-500 mb-1">Savings</div>
                    <div className="text-lg font-bold text-blue-600">
                      {content.metrics.savings}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs font-medium text-gray-500 mb-1">Accuracy</div>
                    <div className="text-lg font-bold text-purple-600">
                      {content.metrics.accuracy || content.metrics.efficiency}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs font-medium text-gray-500 mb-1">Efficiency</div>
                    <div className="text-lg font-bold text-orange-600">
                      {content.metrics.efficiency || content.metrics.accuracy}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {content.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Reading time and CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    {content.readingTime}
                  </div>
                  <Link
                    href={content.url}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Achieve Similar Results?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join 500+ Fortune 500 companies achieving unprecedented success with AI transformation. 
            Get your free consultation and start your journey to 2,000% ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              <Users className="w-5 h-5" />
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors"
            >
              <Star className="w-5 h-5" />
              View All Resources
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;