'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Clock, Shield, Zap, Users, Award, ArrowRight } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi?: string;
    savings?: string;
    uptime?: string;
    efficiency?: string;
    accuracy?: string;
    projects?: string;
  };
  readingTime: string;
  featured: boolean;
  tags: string[];
}

const AutonomousEnterpriseContentShowcase2025: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const contentItems: ContentItem[] = [
    {
      id: 'autonomous-enterprise-revolution',
      title: 'AI 2025: The Autonomous Enterprise Revolution - Ultimate Breakthrough Guide',
      description: 'Discover how autonomous AI systems are revolutionizing enterprise operations with 500% ROI, 99.9% uptime, and $2.8B in annual savings.',
      type: 'blog',
      url: '/blog/ai-2025-autonomous-enterprise-revolution-ultimate-breakthrough',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        uptime: '99.9%',
        efficiency: '78%',
        accuracy: '99.7%'
      },
      readingTime: '18 min read',
      featured: true,
      tags: ['AI', 'Autonomous Systems', 'Enterprise', 'ROI', 'Digital Transformation']
    },
    {
      id: 'fortune-500-autonomous-transformation',
      title: 'Fortune 500 Autonomous Transformation: $2.8B Annual Savings with 500% ROI Success Story',
      description: 'How a Fortune 500 manufacturing company achieved 500% ROI and $2.8B in annual savings through comprehensive autonomous AI transformation.',
      type: 'case-study',
      url: '/case-studies/fortune-500-autonomous-transformation-500-percent-roi-success',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        uptime: '99.9%',
        efficiency: '78%',
        projects: '200+ Facilities'
      },
      readingTime: '12 min read',
      featured: true,
      tags: ['Case Study', 'Fortune 500', 'Autonomous AI', 'ROI', 'Manufacturing']
    },
    {
      id: 'autonomous-enterprise-implementation-guide',
      title: 'AI 2025 Autonomous Enterprise Implementation Master Guide: Complete Roadmap to 500% ROI',
      description: 'Complete implementation guide for autonomous enterprise transformation. Step-by-step roadmap to achieve 500% ROI and $2.8B savings.',
      type: 'resource',
      url: '/resources/ai-2025-autonomous-enterprise-implementation-master-guide',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        uptime: '99.9%',
        efficiency: '78%',
        projects: '500+ Success Stories'
      },
      readingTime: '25 min read',
      featured: true,
      tags: ['Implementation Guide', 'Autonomous AI', 'Enterprise', 'ROI', 'Strategy']
    }
  ];

  const typeFilters = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = selectedType === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === selectedType);

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
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'resource':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getMetricIcon = (metric: string) => {
    switch (metric) {
      case 'roi':
        return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'savings':
        return <Award className="w-4 h-4 text-yellow-600" />;
      case 'uptime':
        return <Shield className="w-4 h-4 text-blue-600" />;
      case 'efficiency':
        return <Zap className="w-4 h-4 text-purple-600" />;
      case 'accuracy':
        return <ArrowRight className="w-4 h-4 text-indigo-600" />;
      case 'projects':
        return <Users className="w-4 h-4 text-orange-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <Zap className="w-5 h-5 mr-2" />
            <span className="font-semibold">AUTONOMOUS ENTERPRISE 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the complete guide to autonomous enterprise transformation with proven strategies, 
            real success stories, and step-by-step implementation roadmaps.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">500%</div>
            <div className="text-gray-600 font-medium">Average ROI</div>
            <div className="text-sm text-gray-500 mt-1">Across 500+ implementations</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">$2.8B</div>
            <div className="text-gray-600 font-medium">Annual Savings</div>
            <div className="text-sm text-gray-500 mt-1">Fortune 500 companies</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-gray-600 font-medium">System Uptime</div>
            <div className="text-sm text-gray-500 mt-1">Reliability guarantee</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">78%</div>
            <div className="text-gray-600 font-medium">Efficiency Gain</div>
            <div className="text-sm text-gray-500 mt-1">Operational improvement</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {typeFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedType(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedType === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {filter.label}
              <span className="ml-2 bg-white/20 text-xs px-2 py-1 rounded-full">
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(item.type)}`}>
                      {item.type.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  {item.featured && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold">
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
                    <div key={key} className="flex items-center space-x-2">
                      {getMetricIcon(key)}
                      <div>
                        <div className="text-sm font-bold text-gray-900">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Reading Time */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{item.readingTime}</span>
                  </div>
                  <div className="text-purple-600 font-semibold">
                    {item.metrics.roi} ROI
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={item.url}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    hoveredItem === item.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>
                    Read {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Guide' : 'Article'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Enterprise?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join 500+ companies that have achieved 500% ROI with autonomous AI systems. 
              Get your comprehensive implementation roadmap today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get Implementation Guide</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/ai-transformation-hub"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
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

export default AutonomousEnterpriseContentShowcase2025;