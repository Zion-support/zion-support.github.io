'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Clock, CheckCircle, Star, Zap, Target } from 'lucide-react';

interface ContentShowcaseItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  excerpt: string;
  metrics: {
    roi?: string;
    savings?: string;
    satisfaction?: string;
    time?: string;
    projects?: string;
  };
  isNew?: boolean;
  featured?: boolean;
  category: string;
}

const UltimateContentShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const contentItems: ContentShowcaseItem[] = [
    {
      id: 'ai-enterprise-automation-revolution',
      title: 'AI 2025: The Enterprise Automation Revolution - 500% ROI',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-revolution',
      excerpt: 'Discover how leading enterprises are achieving 500% ROI, reducing costs by 60%, and transforming operations with AI automation.',
      metrics: {
        roi: '500%',
        savings: '$200M',
        satisfaction: '99.8%',
        time: '12 months',
        projects: '500+'
      },
      isNew: true,
      featured: true,
      category: 'ai-automation'
    },
    {
      id: 'ai-transformation-500-roi-success',
      title: 'AI Transformation Success: $2B Company Achieves 500% ROI',
      type: 'case-study',
      url: '/case-studies/ai-transformation-500-roi-success-story',
      excerpt: 'Real case study: How a Fortune 500 company achieved 500% ROI, $200M annual savings, and 400% productivity gains in 12 months.',
      metrics: {
        roi: '500%',
        savings: '$200M',
        satisfaction: '99.8%',
        time: '12 months',
        projects: '1'
      },
      isNew: true,
      featured: true,
      category: 'case-studies'
    },
    {
      id: 'ai-automation-implementation-guide',
      title: 'AI Automation Implementation Guide 2025: From Strategy to 500% ROI',
      type: 'resource',
      url: '/resources/ai-automation-implementation-guide-2025',
      excerpt: 'Complete step-by-step guide to implementing AI automation. Achieve 500% ROI, reduce costs by 60%, and transform your business.',
      metrics: {
        roi: '500%',
        savings: '60%',
        satisfaction: '98%',
        time: '6-12 months',
        projects: '500+'
      },
      isNew: true,
      featured: true,
      category: 'resources'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'ai-automation', label: 'AI Automation', count: contentItems.filter(item => item.category === 'ai-automation').length },
    { id: 'case-studies', label: 'Case Studies', count: contentItems.filter(item => item.category === 'case-studies').length },
    { id: 'resources', label: 'Resources', count: contentItems.filter(item => item.category === 'resources').length }
  ];

  const filteredItems = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

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

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog':
        return 'Blog Post';
      case 'case-study':
        return 'Case Study';
      case 'resource':
        return 'Resource Guide';
      default:
        return 'Content';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai-automation':
        return 'from-purple-500 to-purple-700';
      case 'case-studies':
        return 'from-blue-500 to-blue-700';
      case 'resources':
        return 'from-green-500 to-green-700';
      default:
        return 'from-gray-500 to-gray-700';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="h-4 w-4" />
            <span>ULTIMATE CONTENT SHOWCASE 2025</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content That Delivers Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest content featuring real success stories, proven strategies, and actionable guides that help companies achieve 500% ROI with AI automation.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-700 border border-gray-200'
              }`}
            >
              {category.label}
              <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                hoveredItem === item.id ? 'transform scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Featured badge */}
              {item.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    ⭐ FEATURED
                  </span>
                </div>
              )}

              {/* New badge */}
              {item.isNew && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                    NEW
                  </span>
                </div>
              )}

              {/* Content type indicator */}
              <div className={`absolute top-4 ${item.featured ? 'left-20' : 'left-4'} z-10`}>
                <div className={`bg-gradient-to-r ${getCategoryColor(item.category)} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg`}>
                  {getTypeIcon(item.type)} {getTypeLabel(item.type)}
                </div>
              </div>

              {/* Image placeholder with gradient */}
              <div className={`h-48 bg-gradient-to-br ${getCategoryColor(item.category)} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold leading-tight line-clamp-2">
                    {item.title}
                  </h3>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {item.excerpt}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {item.metrics.roi && (
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{item.metrics.roi}</div>
                      <div className="text-xs text-gray-600">ROI</div>
                    </div>
                  )}
                  {item.metrics.savings && (
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{item.metrics.savings}</div>
                      <div className="text-xs text-gray-600">Savings</div>
                    </div>
                  )}
                  {item.metrics.satisfaction && (
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">{item.metrics.satisfaction}</div>
                      <div className="text-xs text-gray-600">Satisfaction</div>
                    </div>
                  )}
                  {item.metrics.time && (
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">{item.metrics.time}</div>
                      <div className="text-xs text-gray-600">Timeline</div>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href={item.url}
                  className="group/btn w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Read Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-purple-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6`}>
                <div className="text-white">
                  <h4 className="text-lg font-bold mb-2">Key Benefits</h4>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Proven ROI methodology</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4" />
                      <span>Real-world case studies</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Target className="h-4 w-4" />
                      <span>Actionable strategies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Achieve 500% ROI with AI Automation?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of companies that have transformed their operations and achieved unprecedented results with our proven AI automation strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/content"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="mr-2 h-5 w-5" />
                Explore All Content
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                <Users className="mr-2 h-5 w-5" />
                Get Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;