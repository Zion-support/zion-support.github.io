'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, DollarSign, Users, Clock, BookOpen, FileText, Briefcase } from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const contentPieces = [
    {
      id: 'ai-2025-enterprise-automation-mastery',
      title: 'AI 2025: Enterprise Automation Mastery - Ultimate Success Guide',
      type: 'blog',
      category: 'AI Automation',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      description: 'Master enterprise AI automation with our comprehensive guide. Achieve 500%+ ROI, $2.8B+ savings, and 78% efficiency gains in 18 months.',
      metrics: {
        roi: '500%+',
        savings: '$2.8B+',
        efficiency: '78%',
        satisfaction: '98%'
      },
      readingTime: '18 min read',
      featured: true,
      isNew: true
    },
    {
      id: 'fortune-100-ai-transformation',
      title: 'Fortune 100 AI Transformation: $5.2B Company Achieves 1,200% ROI',
      type: 'case-study',
      category: 'Success Stories',
      url: '/case-studies/ai-transformation-fortune-100-ultimate-success-story',
      description: 'Discover how a Fortune 100 manufacturing company achieved 1,200% ROI and $2.8B in savings through comprehensive AI transformation.',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '24 months',
        satisfaction: '98%'
      },
      readingTime: '12 min read',
      featured: true,
      isNew: true
    },
    {
      id: 'ai-implementation-framework',
      title: 'AI Implementation Ultimate Success Framework 2025: Complete Roadmap to 1,000%+ ROI',
      type: 'resource',
      category: 'Implementation',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      description: 'Master AI implementation with our proven framework. Achieve 1,000%+ ROI, 94% success rate, and $2.8B+ savings across 1,000+ projects.',
      metrics: {
        roi: '1,000%+',
        success: '94%',
        timeline: '18 months',
        projects: '1,000+'
      },
      readingTime: '25 min read',
      featured: true,
      isNew: true
    },
    {
      id: 'ai-2025-autonomous-enterprise-systems',
      title: 'AI 2025: The Autonomous Enterprise Systems Revolution - 3,000% ROI Through Self-Managing AI',
      type: 'blog',
      category: 'AI Automation',
      url: '/blog/ai-2025-autonomous-enterprise-systems-revolution',
      description: 'Discover how autonomous AI systems are revolutionizing enterprise operations with 3,000% ROI and $25.6M in savings.',
      metrics: {
        roi: '3,000%',
        savings: '$25.6M',
        efficiency: '800%',
        autonomy: '95%'
      },
      readingTime: '28 min read',
      featured: true,
      isNew: true
    },
    {
      id: 'retail-ai-transformation',
      title: 'Retail AI Transformation 2025: $500M Company Achieves 280% ROI with AI-Powered Operations',
      type: 'case-study',
      category: 'Success Stories',
      url: '/case-studies/retail-ai-transformation-2025-ultimate-success',
      description: 'Learn how a $500M retail company achieved 280% ROI and $45M in savings through AI-powered operations transformation.',
      metrics: {
        roi: '280%',
        savings: '$45M',
        satisfaction: '99.2%',
        efficiency: '78%'
      },
      readingTime: '15 min read',
      featured: true,
      isNew: true
    },
    {
      id: 'ai-implementation-master-guide',
      title: 'AI 2025 Implementation Master Guide: From Strategy to 500% ROI in 12 Months',
      type: 'resource',
      category: 'Implementation',
      url: '/resources/ai-2025-implementation-master-guide',
      description: 'Complete implementation guide for achieving 500% ROI in 12 months with proven strategies and frameworks.',
      metrics: {
        roi: '500%',
        timeline: '12 months',
        success_rate: '94%',
        savings: '$2.8B'
      },
      readingTime: '20 min read',
      featured: true,
      isNew: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: contentPieces.length },
    { id: 'blog', label: 'Blog Posts', count: contentPieces.filter(p => p.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentPieces.filter(p => p.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentPieces.filter(p => p.type === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? contentPieces 
    : contentPieces.filter(piece => piece.type === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-4 h-4" />;
      case 'case-study':
        return <Briefcase className="w-4 h-4" />;
      case 'resource':
        return <FileText className="w-4 h-4" />;
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ultimate AI Success Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive collection of AI success stories, implementation guides, and proven frameworks that have delivered 500%+ ROI across 1,000+ enterprise implementations.
          </p>
        </div>

        {/* Success metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">1,000+</div>
            <div className="text-gray-600">Successful Implementations</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500%+</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">$2.8B+</div>
            <div className="text-gray-600">Total Savings</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((piece) => (
            <div
              key={piece.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              {/* Content header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(piece.type)}`}>
                    {getTypeIcon(piece.type)}
                    <span className="ml-1 capitalize">{piece.type.replace('-', ' ')}</span>
                  </div>
                  {piece.isNew && (
                    <div className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                      NEW
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {piece.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {piece.description}
                </p>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  {piece.readingTime}
                </div>

                {/* Metrics grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="flex items-center mb-1">
                      <DollarSign className="w-4 h-4 text-green-600 mr-1" />
                      <span className="text-xs font-medium text-green-800">ROI</span>
                    </div>
                    <div className="text-lg font-bold text-green-600">
                      {piece.metrics.roi}
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="flex items-center mb-1">
                      <TrendingUp className="w-4 h-4 text-blue-600 mr-1" />
                      <span className="text-xs font-medium text-blue-800">SAVINGS</span>
                    </div>
                    <div className="text-lg font-bold text-blue-600">
                      {piece.metrics.savings}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={piece.url}
                  className="inline-flex items-center w-full justify-center bg-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors group"
                >
                  Read Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve 500%+ ROI with AI?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Join 1,000+ enterprises that have transformed their operations with our proven AI frameworks and strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
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

export default UltimateContentShowcase2025;