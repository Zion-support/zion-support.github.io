'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Users, Zap, Target, Award, BookOpen, FileText, BarChart3 } from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const contentPieces = [
    {
      id: 'enterprise-data-revolution',
      title: 'AI 2025: The Enterprise Data Revolution - Ultimate Guide',
      type: 'blog',
      category: 'AI Strategy',
      url: '/blog/ai-2025-enterprise-data-revolution-ultimate-guide',
      metrics: {
        roi: '600%',
        savings: '$2.5B',
        accuracy: '99.7%',
        speed: '89% faster'
      },
      description: 'Transform your data into a $2.5B competitive advantage with cutting-edge AI data strategies',
      featured: true,
      readingTime: '25 min read',
      tags: ['Data Intelligence', 'ROI', 'Enterprise', 'AI Strategy']
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $3.2B Company Achieves 750% ROI',
      type: 'case-study',
      category: 'Success Stories',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success',
      metrics: {
        roi: '750%',
        revenue: '$2.4B',
        savings: '$1.8B',
        efficiency: '156%'
      },
      description: 'How a global manufacturing leader transformed their operations with AI and achieved unprecedented results',
      featured: true,
      readingTime: '20 min read',
      tags: ['Fortune 500', 'Manufacturing', 'ROI', 'Transformation']
    },
    {
      id: 'implementation-master-guide',
      title: 'AI 2025 Implementation Ultimate Master Guide: From Strategy to 800% ROI',
      type: 'resource',
      category: 'Implementation',
      url: '/resources/ai-2025-implementation-ultimate-master-guide',
      metrics: {
        roi: '800%',
        success: '95%',
        timeline: '24 months',
        value: '$5B+'
      },
      description: 'The complete blueprint for enterprise AI implementation that delivers unprecedented results',
      featured: true,
      readingTime: '45 min read',
      tags: ['Implementation', 'Blueprint', 'ROI', 'Strategy']
    },
    {
      id: 'quantum-computing-breakthrough',
      title: 'AI 2025: The Quantum Computing Business Breakthrough - 1,200% ROI Revolution',
      type: 'blog',
      category: 'Emerging Tech',
      url: '/blog/ai-2025-quantum-computing-business-breakthrough',
      metrics: {
        roi: '1,200%',
        speed: '1,000x',
        accuracy: '99.97%',
        savings: '$2.8B'
      },
      description: 'How quantum computing is transforming business operations and delivering unprecedented results',
      featured: true,
      readingTime: '18 min read',
      tags: ['Quantum Computing', 'Breakthrough', 'ROI', 'Future Tech']
    },
    {
      id: 'autonomous-enterprise-transformation',
      title: 'AI 2025 Autonomous Enterprise Transformation: $1.8B Company Achieves 900% ROI',
      type: 'case-study',
      category: 'Success Stories',
      url: '/case-studies/ai-2025-autonomous-enterprise-transformation-success',
      metrics: {
        roi: '900%',
        revenue: '$612M',
        savings: '$301M',
        automation: '89%'
      },
      description: 'How a global technology company achieved complete autonomous operations and unprecedented business results',
      featured: true,
      readingTime: '22 min read',
      tags: ['Autonomous', 'Technology', 'ROI', 'Automation']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: contentPieces.length },
    { id: 'blog', label: 'Blog Posts', count: contentPieces.filter(c => c.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentPieces.filter(c => c.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentPieces.filter(c => c.type === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? contentPieces 
    : contentPieces.filter(content => content.type === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-5 h-5" />;
      case 'case-study':
        return <BarChart3 className="w-5 h-5" />;
      case 'resource':
        return <FileText className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">REVOLUTIONARY CONTENT 2025</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ultimate AI Content Collection
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the most comprehensive collection of AI implementation guides, success stories, and breakthrough insights that deliver 800%+ ROI
          </p>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900">800%+</div>
              <div className="text-sm text-gray-600">Average ROI</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900">2,500+</div>
              <div className="text-sm text-gray-600">Success Stories</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-8 h-8 text-purple-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900">$5B+</div>
              <div className="text-sm text-gray-600">Revenue Generated</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-8 h-8 text-yellow-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label}
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredContent.map((content, index) => (
            <div
              key={content.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden"
            >
              {/* Content Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(content.type)}`}>
                    {getTypeIcon(content.type)}
                    <span className="ml-2 capitalize">{content.type.replace('-', ' ')}</span>
                  </div>
                  {content.featured && (
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {content.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {content.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center">
                    <Target className="w-4 h-4 mr-1" />
                    {content.readingTime}
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded-full">
                    {content.category}
                  </span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="p-6 bg-gray-50">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{content.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {content.metrics.savings || content.metrics.revenue || content.metrics.value}
                    </div>
                    <div className="text-xs text-gray-600">
                      {content.metrics.savings ? 'Savings' : content.metrics.revenue ? 'Revenue' : 'Value'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {content.metrics.accuracy || content.metrics.success || content.metrics.automation}
                    </div>
                    <div className="text-xs text-gray-600">
                      {content.metrics.accuracy ? 'Accuracy' : content.metrics.success ? 'Success' : 'Automation'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">
                      {content.metrics.speed || content.metrics.efficiency || content.metrics.timeline}
                    </div>
                    <div className="text-xs text-gray-600">
                      {content.metrics.speed ? 'Faster' : content.metrics.efficiency ? 'Efficiency' : 'Timeline'}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-white text-gray-600 text-xs rounded-full border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={content.url}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform group-hover:scale-105"
                >
                  Read Full {content.type === 'case-study' ? 'Case Study' : content.type === 'resource' ? 'Guide' : 'Article'}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-xl text-purple-100 mb-6 max-w-2xl mx-auto">
              Join thousands of companies achieving 800%+ ROI with our proven AI implementation strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
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

export default UltimateContentShowcase2025;