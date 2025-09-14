'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, DollarSign, Users, Zap, Clock, BookOpen, FileText, BarChart3 } from 'lucide-react';

const NewContent2025UltimateShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const contentItems = [
    {
      id: 'ultimate-automation-revolution',
      title: 'AI 2025: The Ultimate Automation Revolution - Enterprise Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-automation-revolution-enterprise-breakthrough',
      metrics: {
        roi: '1,500%',
        savings: '$3.2B',
        efficiency: '340%',
        accuracy: '99.8%'
      },
      readingTime: '25 min read',
      featured: true,
      description: 'Transform your business with the most comprehensive AI automation guide. Achieve 1,500% ROI and $3.2B in annual savings.',
      tags: ['AI Automation', 'Enterprise Breakthrough', 'ROI', 'Business Transformation']
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 AI Automation Transformation: $3.2B Annual Savings - Ultimate Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-automation-transformation-ultimate-success-story',
      metrics: {
        roi: '1,500%',
        savings: '$3.2B',
        efficiency: '340%',
        accuracy: '99.8%'
      },
      readingTime: '20 min read',
      featured: true,
      description: 'Discover how a Fortune 500 manufacturing giant achieved unprecedented results through AI automation transformation.',
      tags: ['Fortune 500', 'AI Automation', 'Case Study', 'Success Story']
    },
    {
      id: 'quantum-computing-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution - Ultimate Breakthrough',
      type: 'blog',
      url: '/blog/ai-2025-quantum-computing-business-revolution-ultimate-breakthrough',
      metrics: {
        roi: '1,200%',
        market: '$100B',
        accuracy: '99.97%',
        speed: '1,000x faster'
      },
      readingTime: '18 min read',
      featured: true,
      description: 'Explore the quantum computing revolution that\'s transforming industries with 1,200% ROI and $100B market opportunity.',
      tags: ['Quantum Computing', 'AI', 'Business Revolution', 'Enterprise Transformation']
    },
    {
      id: 'implementation-framework',
      title: 'AI Automation Implementation Ultimate Framework 2025',
      type: 'resource',
      url: '/resources/ai-automation-implementation-ultimate-framework-2025',
      metrics: {
        roi: '1,500%',
        successRate: '94%',
        implementationTime: '18 months',
        projects: '500+ Success Stories'
      },
      readingTime: '15 min read',
      featured: true,
      description: 'Complete roadmap to 1,500% ROI and $3.2B annual savings with our proven implementation framework.',
      tags: ['AI Implementation', 'Framework', 'ROI', 'Success Strategy']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-4 h-4" />;
      case 'case-study':
        return <BarChart3 className="w-4 h-4" />;
      case 'resource':
        return <FileText className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">NEW 2025 ULTIMATE CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI automation guides, case studies, and frameworks. 
            Achieve unprecedented ROI and transform your business with proven strategies.
          </p>
        </div>

        {/* Success Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-green-600 mb-1">1,500%</div>
            <div className="text-sm text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="flex items-center justify-center mb-2">
              <DollarSign className="w-6 h-6 text-yellow-500" />
            </div>
            <div className="text-2xl font-bold text-yellow-600 mb-1">$3.2B+</div>
            <div className="text-sm text-gray-600">Total Savings</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="flex items-center justify-center mb-2">
              <Zap className="w-6 h-6 text-blue-500" />
            </div>
            <div className="text-2xl font-bold text-blue-600 mb-1">340%</div>
            <div className="text-sm text-gray-600">Efficiency Gain</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-6 h-6 text-purple-500" />
            </div>
            <div className="text-2xl font-bold text-purple-600 mb-1">500+</div>
            <div className="text-sm text-gray-600">Success Stories</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className={`${getTypeColor(item.type)} text-white p-2 rounded-lg`}>
                      {getTypeIcon(item.type)}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-600">{item.type.replace('-', ' ')}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span className="text-sm text-gray-500">{item.readingTime}</span>
                      </div>
                    </div>
                  </div>
                  {item.featured && (
                    <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">
                      FEATURED
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(item.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xs text-gray-500 uppercase tracking-wide">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      <div className="text-sm font-semibold text-gray-900">{value}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={item.url}
                  className="inline-flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join 500+ companies that have achieved 1,500% ROI through our proven AI automation strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
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

export default NewContent2025UltimateShowcase;