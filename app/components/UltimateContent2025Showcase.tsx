'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TrendingUp, Target, Award, Clock, ArrowRight, Zap, Star, Users, DollarSign } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  roi: string;
  savings: string;
  readingTime: string;
  featured: boolean;
  description: string;
  metrics: {
    roi: string;
    savings: string;
    efficiency: string;
    accuracy: string;
  };
}

const UltimateContent2025Showcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'blog' | 'case-study' | 'resource'>('all');

  const contentItems: ContentItem[] = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide to 1,500% ROI',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
      roi: '1,500%',
      savings: '$8.2B',
      readingTime: '25 min read',
      featured: true,
      description: 'Transform your enterprise with cutting-edge AI solutions that deliver unprecedented returns on investment through strategic implementation.',
      metrics: {
        roi: '1,500%',
        savings: '$8.2B',
        efficiency: '450%',
        accuracy: '99.7%'
      }
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $4.2B Company Achieves 1,500% ROI with Revolutionary AI Implementation',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-1500-roi-ultimate-success-2025',
      roi: '1,500%',
      savings: '$89M',
      readingTime: '22 min read',
      featured: true,
      description: 'How a global manufacturing leader transformed operations and achieved unprecedented returns through strategic AI deployment.',
      metrics: {
        roi: '1,500%',
        savings: '$89M',
        efficiency: '450%',
        accuracy: '99.8%'
      }
    },
    {
      id: 'autonomous-systems',
      title: 'AI 2025: The Autonomous Business Systems Revolution - Ultimate Guide to 2,000% ROI',
      type: 'blog',
      url: '/blog/ai-2025-autonomous-business-systems-revolution-ultimate-guide',
      roi: '2,000%',
      savings: '$12.8B',
      readingTime: '30 min read',
      featured: true,
      description: 'Transform your enterprise with fully autonomous AI systems that deliver unprecedented returns and operational excellence.',
      metrics: {
        roi: '2,000%',
        savings: '$12.8B',
        efficiency: '600%',
        accuracy: '99.9%'
      }
    },
    {
      id: 'implementation-roadmap',
      title: 'AI Implementation Ultimate Roadmap 2025: From Strategy to 1,500% ROI in 18 Months',
      type: 'resource',
      url: '/resources/ai-implementation-ultimate-roadmap-2025-comprehensive-1500-roi',
      roi: '1,500%',
      savings: '$8.2B',
      readingTime: '35 min read',
      featured: true,
      description: 'The comprehensive guide to achieving unprecedented returns through strategic AI implementation with proven frameworks.',
      metrics: {
        roi: '1,500%',
        savings: '$8.2B',
        efficiency: '400%',
        accuracy: '95%'
      }
    }
  ];

  const filteredContent = activeFilter === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <TrendingUp className="w-5 h-5" />;
      case 'case-study':
        return <Target className="w-5 h-5" />;
      case 'resource':
        return <Award className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
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

  const getTypeGradient = (type: string) => {
    switch (type) {
      case 'blog':
        return 'from-blue-500 to-blue-600';
      case 'case-study':
        return 'from-green-500 to-green-600';
      case 'resource':
        return 'from-purple-500 to-purple-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            <span>ULTIMATE CONTENT 2025 REVOLUTION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content That Delivers
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Unprecedented Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the proven strategies and frameworks that have generated <strong>$8.2 billion in savings</strong> 
            and achieved <strong>1,500%+ ROI</strong> across 500+ successful enterprise implementations.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">1,500%+</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">$8.2B+</div>
            <div className="text-gray-600">Total Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">99.7%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { key: 'all', label: 'All Content', count: contentItems.length },
            { key: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
            { key: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
            { key: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key as any)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-purple-300 hover:text-purple-600'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredContent.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="capitalize">{item.type.replace('-', ' ')}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{item.readingTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="p-6 bg-gray-50">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-sm text-gray-600">Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{item.metrics.efficiency}</div>
                    <div className="text-sm text-gray-600">Efficiency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{item.metrics.accuracy}</div>
                    <div className="text-sm text-gray-600">Accuracy</div>
                  </div>
                </div>

                <Link
                  href={item.url}
                  className={`w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r ${getTypeGradient(item.type)} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 group`}
                >
                  <span>Read {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Guide' : 'Article'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Enterprise?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join 500+ companies that have achieved unprecedented success with our proven AI strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your AI Journey
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

export default UltimateContent2025Showcase;