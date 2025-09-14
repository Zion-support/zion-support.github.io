'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Star, TrendingUp, Users, DollarSign, Clock, ArrowRight, Filter, Zap } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi: string;
    savings: string;
    efficiency: string;
    satisfaction: string;
  };
  readingTime: string;
  featured: boolean;
  tags: string[];
  year: number;
}

const UltimateContentShowcase2026 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems: ContentItem[] = [
    {
      id: 'quantum-ai-revolution-2026',
      title: 'Quantum AI Revolution 2026: The Future of Enterprise Computing',
      type: 'blog',
      url: '/blog/ai-2025-quantum-computing-breakthrough',
      metrics: {
        roi: '1200%',
        savings: '$4.2B',
        efficiency: '500%',
        satisfaction: '99.9%'
      },
      readingTime: '30 min read',
      featured: true,
      tags: ['Quantum AI', 'Future Tech', 'Enterprise', 'Revolution'],
      year: 2026
    },
    {
      id: 'autonomous-enterprise-2026',
      title: 'Autonomous Enterprise 2026: Self-Managing AI Systems',
      type: 'case-study',
      url: '/case-studies/autonomous-enterprise-2026',
      metrics: {
        roi: '850%',
        savings: '$2.1B',
        efficiency: '400%',
        satisfaction: '99.5%'
      },
      readingTime: '28 min read',
      featured: true,
      tags: ['Autonomous', 'AI Systems', 'Self-Managing', 'Future'],
      year: 2026
    },
    {
      id: 'ai-2026-implementation-guide',
      title: 'AI 2026 Implementation Guide: Next-Gen Enterprise Strategy',
      type: 'resource',
      url: '/resources/ai-2026-implementation-guide',
      metrics: {
        roi: '950%',
        savings: '$3.8B',
        efficiency: '450%',
        satisfaction: '99.2%'
      },
      readingTime: '40 min read',
      featured: true,
      tags: ['Implementation', 'Strategy', 'Next-Gen', 'Guide'],
      year: 2026
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
      case 'blog':
        return <TrendingUp className="w-5 h-5" />;
      case 'case-study':
        return <Star className="w-5 h-5" />;
      case 'resource':
        return <Users className="w-5 h-5" />;
      default:
        return <TrendingUp className="w-5 h-5" />;
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
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-4">
            <Zap className="w-5 h-5" />
            <span>FUTURE CONTENT 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Future of AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore next-generation AI content that's shaping the future of enterprise computing and business transformation
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
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
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}>
                      {getTypeIcon(item.type)}
                      <span className="capitalize">{item.type.replace('-', ' ')}</span>
                    </div>
                    {item.featured && (
                      <div className="flex items-center space-x-1 text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-xs font-medium">FEATURED</span>
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readingTime}
                    </div>
                    <div className="text-xs text-purple-600 font-bold">
                      {item.year}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={item.url}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Explore Future</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Prepare for the AI Future
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Get ahead of the curve with our cutting-edge AI content and stay competitive in the rapidly evolving digital landscape
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Journey
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2026;