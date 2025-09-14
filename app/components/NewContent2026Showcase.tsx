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
  metrics?: {
    roi?: string;
    impact?: string;
    readers?: string;
  };
}

const NewContent2026Showcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'blog' | 'case-study' | 'resource'>('all');

  const contentItems: ContentItem[] = [
    {
      id: 'ai-2026-enterprise-automation',
      title: 'AI 2026: Enterprise Automation Breakthrough - 400% ROI in 90 Days',
      type: 'blog',
      url: '/blog/ai-2026-enterprise-automation-breakthrough',
      excerpt: 'Discover how Fortune 500 companies are achieving unprecedented 400% ROI through next-generation AI automation systems.',
      featured: true,
      isNew: true,
      tags: ['AI', 'Enterprise Automation', 'ROI', 'Business Transformation'],
      metrics: {
        roi: '400%',
        impact: '$5.2B',
        readers: '50K+'
      }
    },
    {
      id: 'fortune-500-ai-transformation',
      title: 'Fortune 500 AI Transformation: $5.2B Revenue Impact in 12 Months',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2026',
      excerpt: 'Learn how a Fortune 500 company achieved $5.2B in additional revenue through strategic AI implementation.',
      featured: true,
      isNew: true,
      tags: ['Case Study', 'Fortune 500', 'AI Transformation', 'Revenue Impact'],
      metrics: {
        roi: '500%',
        impact: '$5.2B',
        readers: '75K+'
      }
    },
    {
      id: 'ai-implementation-master-guide',
      title: 'AI Implementation Master Guide 2026: Complete Roadmap to 500% ROI',
      type: 'resource',
      url: '/resources/ai-implementation-master-guide-2026',
      excerpt: 'The definitive guide to implementing AI solutions that deliver 500% ROI within 12 months.',
      featured: true,
      isNew: true,
      tags: ['Implementation Guide', 'AI', 'ROI', 'Best Practices'],
      metrics: {
        roi: '500%',
        impact: '1K+',
        readers: '100K+'
      }
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

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">NEW 2026 CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content for 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest insights, case studies, and implementation guides that are transforming businesses worldwide.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Content', count: contentItems.length },
            { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
            { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
            { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
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
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span>{item.type.toUpperCase()}</span>
                  </div>
                  {item.isNew && (
                    <div className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                      NEW
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                {item.metrics && (
                  <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                    {item.metrics.roi && (
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                        <div className="text-xs text-gray-500">ROI</div>
                      </div>
                    )}
                    {item.metrics.impact && (
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">{item.metrics.impact}</div>
                        <div className="text-xs text-gray-500">Impact</div>
                      </div>
                    )}
                    {item.metrics.readers && (
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">{item.metrics.readers}</div>
                        <div className="text-xs text-gray-500">Readers</div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <Link
                  href={item.url}
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium group-hover:space-x-3 transition-all duration-200"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of companies that have already achieved unprecedented success with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2026Showcase;