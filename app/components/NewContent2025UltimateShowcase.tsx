'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Clock, TrendingUp, Users, DollarSign, CheckCircle, ExternalLink } from 'lucide-react';

const NewContent2025UltimateShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const contentItems = [
    {
      id: 'ultimate-automation-revolution',
      title: 'AI 2025: The Ultimate Automation Revolution - Complete Guide',
      type: 'blog',
      category: 'implementation',
      url: '/blog/ai-2025-ultimate-automation-revolution-complete-guide',
      description: 'Transform your business with our comprehensive AI implementation framework. Achieve 500%+ ROI within 18 months with proven methodologies.',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        efficiency: '78%',
        satisfaction: '98%'
      },
      readingTime: '18 min read',
      isNew: true,
      featured: true,
      tags: ['AI Implementation', 'ROI', 'Automation', 'Enterprise']
    },
    {
      id: 'ai-transformation-1000-roi',
      title: 'AI Transformation Success: $2.8B Company Achieves 1,000% ROI',
      type: 'case-study',
      category: 'success-story',
      url: '/case-studies/ai-transformation-1000-percent-roi-ultimate-success-story',
      description: 'Real-world success story of a Fortune 500 company that achieved unprecedented 1,000% ROI through comprehensive AI transformation.',
      metrics: {
        roi: '1,000%',
        savings: '$280M',
        revenue: '$1.2B',
        efficiency: '89%'
      },
      readingTime: '12 min read',
      isNew: true,
      featured: true,
      tags: ['Case Study', 'Fortune 500', 'ROI', 'Success Story']
    },
    {
      id: 'implementation-master-guide',
      title: 'AI 2025 Implementation Master Guide: Ultimate Success Framework',
      type: 'resource',
      category: 'framework',
      url: '/resources/ai-2025-implementation-master-guide-ultimate-success',
      description: 'The ultimate framework for AI implementation success. Based on analysis of 500+ successful enterprise transformations.',
      metrics: {
        successRate: '94%',
        averageRoi: '500%',
        implementationTime: '67% faster',
        projects: '500+'
      },
      readingTime: '25 min read',
      isNew: true,
      featured: true,
      tags: ['Framework', 'Implementation', 'Best Practices', 'Guide']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'implementation', label: 'Implementation', count: contentItems.filter(item => item.category === 'implementation').length },
    { id: 'success-story', label: 'Success Stories', count: contentItems.filter(item => item.category === 'success-story').length },
    { id: 'framework', label: 'Frameworks', count: contentItems.filter(item => item.category === 'framework').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeFilter);

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
        return 'bg-blue-500';
      case 'case-study':
        return 'bg-green-500';
      case 'resource':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            NEW 2025 CONTENT COLLECTION
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ultimate AI 2025 Content Revolution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI implementation guides, 
            success stories, and frameworks. Join 500+ enterprises achieving 500%+ ROI.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label}
              <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getTypeColor(item.type)}`}>
                      {item.type.toUpperCase()}
                    </span>
                  </div>
                  {item.isNew && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      NEW
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{item.readingTime}</span>
                  </div>
                  {item.featured && (
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>Featured</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Metrics */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {Object.entries(item.metrics).map(([key, value], index) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-purple-600 mb-1">
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 capitalize">
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
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={item.url}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all group"
                >
                  <span>Read {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Guide' : 'Article'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success Statistics */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Proven Results Across 500+ Enterprises
            </h3>
            <p className="text-lg opacity-90">
              Our content and frameworks have helped organizations achieve unprecedented success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-sm opacity-80">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">500%</div>
              <div className="text-sm opacity-80">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">$2.8B</div>
              <div className="text-sm opacity-80">Total Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">94%</div>
              <div className="text-sm opacity-80">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources"
              className="inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 border-2 border-purple-600 transition-all"
            >
              <TrendingUp className="w-5 h-5" />
              <span>Explore All Resources</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
            >
              <Users className="w-5 h-5" />
              <span>Get Personalized Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateShowcase;