'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Users, Award, Clock, BookOpen, BarChart3 } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  excerpt: string;
  featured: boolean;
  isNew: boolean;
  tags: string[];
  readTime: string;
  metrics: {
    roi: string;
    impact: string;
    readers: string;
    rating: number;
  };
  publishedDate: string;
}

const NewContent2026Showcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'blog' | 'case-study' | 'resource'>('all');

  const contentItems: ContentItem[] = [
    {
      id: 'ai-2026-enterprise-automation',
      title: 'AI 2026: Enterprise Automation Breakthrough - 400% ROI in 90 Days',
      type: 'blog',
      url: '/blog/ai-2026-enterprise-automation-breakthrough',
      excerpt: 'Discover how Fortune 500 companies are achieving unprecedented 400% ROI through next-generation AI automation systems. Real case studies, implementation strategies, and proven frameworks.',
      featured: true,
      isNew: true,
      tags: ['AI', 'Enterprise Automation', 'ROI', 'Business Transformation', '2026'],
      readTime: '12 min read',
      metrics: {
        roi: '400%',
        impact: '$5.2B',
        readers: '50K+',
        rating: 4.9
      },
      publishedDate: '2025-01-17'
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $5.2B Revenue Impact in 12 Months',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2026',
      excerpt: 'How a Fortune 500 manufacturing company achieved $5.2B in additional revenue through comprehensive AI transformation. Detailed implementation roadmap and lessons learned.',
      featured: true,
      isNew: true,
      tags: ['Case Study', 'Fortune 500', 'AI Transformation', 'Revenue Growth', 'Enterprise'],
      readTime: '15 min read',
      metrics: {
        roi: '512%',
        impact: '$5.2B',
        readers: '25K+',
        rating: 4.8
      },
      publishedDate: '2025-01-17'
    },
    {
      id: 'ai-implementation-guide',
      title: 'AI Implementation Master Guide 2026: Complete Roadmap to 500% ROI',
      type: 'resource',
      url: '/resources/ai-implementation-master-guide-2026',
      excerpt: 'The definitive guide to implementing AI in your organization. Step-by-step roadmap, proven strategies, and real-world examples to achieve 500% ROI within 12 months.',
      featured: true,
      isNew: true,
      tags: ['Implementation Guide', 'AI', 'ROI', 'Best Practices', '2026'],
      readTime: '25 min read',
      metrics: {
        roi: '500%',
        impact: '1K+',
        readers: '100K+',
        rating: 4.9
      },
      publishedDate: '2025-01-17'
    }
  ];

  const filteredContent = activeTab === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeTab);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-5 h-5" />;
      case 'case-study':
        return <BarChart3 className="w-5 h-5" />;
      case 'resource':
        return <Award className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'resource':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const tabs = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            <span>NEW 2026 CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest AI Insights & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover proven strategies, real-world case studies, and implementation guides that are helping organizations achieve 400-500% ROI with AI.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>
                      {getTypeIcon(item.type)}
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}>
                        {item.type.replace('-', ' ').toUpperCase()}
                      </span>
                      {item.isNew && (
                        <span className="ml-2 px-2 py-1 bg-green-500 text-white rounded text-xs font-medium">
                          NEW
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-600">{item.metrics.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium text-gray-600">ROI</span>
                    </div>
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Award className="w-4 h-4 text-purple-500" />
                      <span className="text-sm font-medium text-gray-600">Impact</span>
                    </div>
                    <div className="text-lg font-bold text-purple-600">{item.metrics.impact}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-medium text-gray-600">Readers</span>
                    </div>
                    <div className="text-lg font-bold text-blue-600">{item.metrics.readers}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{item.readTime}</span>
                  </div>
                  <Link
                    href={item.url}
                    className="inline-flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve 400-500% ROI with AI?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get personalized guidance and implementation support from our AI experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Expert Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2026Showcase;