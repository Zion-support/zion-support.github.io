'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, DollarSign, Users, Zap, Clock, Star, ExternalLink } from 'lucide-react';

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
  description: string;
  readingTime: string;
  featured: boolean;
  tags: string[];
}

const AutonomousEnterpriseShowcase2025: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const contentItems: ContentItem[] = [
    {
      id: 'autonomous-enterprise-systems',
      title: 'AI 2025: The Autonomous Enterprise Systems Revolution - 600% ROI Breakthrough',
      type: 'blog',
      url: '/blog/ai-2025-autonomous-enterprise-systems-revolution',
      metrics: {
        roi: '600%',
        savings: '$2.8B',
        efficiency: '99.7%',
        satisfaction: '98%'
      },
      description: 'Discover how Fortune 500 companies are achieving 600% ROI with autonomous AI systems that run entire business operations without human intervention.',
      readingTime: '18 min read',
      featured: true,
      tags: ['Autonomous AI', 'Enterprise Systems', 'ROI', 'Fortune 500']
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 Autonomous Transformation: $3.2B Annual Savings with 700% ROI',
      type: 'case-study',
      url: '/case-studies/fortune-500-autonomous-transformation-2025',
      metrics: {
        roi: '700%',
        savings: '$3.2B',
        efficiency: '89%',
        satisfaction: '99.4%'
      },
      description: 'How a Fortune 100 company achieved $3.2B in annual savings and 700% ROI through comprehensive autonomous AI system implementation.',
      readingTime: '22 min read',
      featured: true,
      tags: ['Fortune 500', 'Case Study', 'ROI', 'Cost Savings']
    },
    {
      id: 'autonomous-implementation-guide',
      title: 'Autonomous Enterprise Implementation Master Guide 2025: From Strategy to 700% ROI',
      type: 'resource',
      url: '/resources/autonomous-enterprise-implementation-master-guide-2025',
      metrics: {
        roi: '700%',
        savings: '$3B+',
        efficiency: '98%',
        satisfaction: '98%'
      },
      description: 'The complete guide to implementing autonomous AI systems in Fortune 500 companies, with proven strategies for achieving 700% ROI.',
      readingTime: '35 min read',
      featured: true,
      tags: ['Implementation Guide', 'Strategy', 'ROI', 'Enterprise']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  const filteredItems = activeFilter === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeFilter);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study': return 'bg-green-100 text-green-800 border-green-200';
      case 'resource': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  const getMetricIcon = (metric: string) => {
    switch (metric) {
      case 'roi': return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'savings': return <DollarSign className="w-4 h-4 text-green-500" />;
      case 'efficiency': return <Zap className="w-4 h-4 text-blue-500" />;
      case 'satisfaction': return <Users className="w-4 h-4 text-purple-500" />;
      default: return <Star className="w-4 h-4 text-yellow-500" />;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            🚀 AUTONOMOUS ENTERPRISE REVOLUTION 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transform Your Enterprise with
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Autonomous AI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Fortune 500 companies are achieving 600-700% ROI with autonomous AI systems that run entire business operations without human intervention.
          </p>
        </div>

        {/* Success Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">700%</div>
            <div className="text-gray-600 font-medium">Average ROI</div>
            <div className="text-sm text-gray-500 mt-1">Fortune 500 Companies</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">$3.2B</div>
            <div className="text-gray-600 font-medium">Average Savings</div>
            <div className="text-sm text-gray-500 mt-1">Per Enterprise Annually</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">99.7%</div>
            <div className="text-gray-600 font-medium">Efficiency</div>
            <div className="text-sm text-gray-500 mt-1">Operational Excellence</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-600 font-medium">Success Rate</div>
            <div className="text-sm text-gray-500 mt-1">Implementation Success</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                item.featured ? 'ring-2 ring-purple-200' : ''
              }`}
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)} {item.type.toUpperCase()}
                  </div>
                  {item.featured && (
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-xs font-medium">Featured</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

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

                {/* Reading Time */}
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{item.readingTime}</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="p-6 bg-gray-50">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      {getMetricIcon('roi')}
                      <span className="text-xs font-medium text-gray-600 ml-1">ROI</span>
                    </div>
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      {getMetricIcon('savings')}
                      <span className="text-xs font-medium text-gray-600 ml-1">Savings</span>
                    </div>
                    <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      {getMetricIcon('efficiency')}
                      <span className="text-xs font-medium text-gray-600 ml-1">Efficiency</span>
                    </div>
                    <div className="text-lg font-bold text-purple-600">{item.metrics.efficiency}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      {getMetricIcon('satisfaction')}
                      <span className="text-xs font-medium text-gray-600 ml-1">Satisfaction</span>
                    </div>
                    <div className="text-lg font-bold text-orange-600">{item.metrics.satisfaction}</div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={item.url}
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Read {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Achieve 700% ROI with Autonomous AI?
          </h3>
          <p className="text-xl text-purple-100 mb-6 max-w-2xl mx-auto">
            Join Fortune 500 companies already transforming their operations with autonomous AI systems. Get your custom implementation roadmap today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get Implementation Consultation
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/resources/autonomous-enterprise-implementation-master-guide-2025"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-200"
            >
              Download Master Guide
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomousEnterpriseShowcase2025;