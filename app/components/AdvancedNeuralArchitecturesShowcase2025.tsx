'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Brain, Target, TrendingUp, Zap, ArrowRight, Clock, Users, DollarSign } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    performance_improvement?: string;
    roi?: string;
    accuracy?: string;
    annual_savings?: string;
    cost_reduction?: string;
    efficiency?: string;
  };
  reading_time: string;
  featured?: boolean;
  tags: string[];
}

const AdvancedNeuralArchitecturesShowcase2025: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'blog' | 'case-study' | 'resource'>('all');

  const contentItems: ContentItem[] = [
    {
      id: 'neural-architectures-guide',
      title: 'AI 2025: Advanced Neural Architectures - Enterprise Breakthrough Guide',
      description: 'Discover how next-generation neural architectures are revolutionizing enterprise operations with 400% performance improvements and 99.7% accuracy rates.',
      type: 'blog',
      url: '/blog/ai-2025-advanced-neural-architectures-enterprise-breakthrough',
      metrics: {
        performance_improvement: '400%',
        accuracy: '99.7%',
        roi: '340%',
        cost_reduction: '67%'
      },
      reading_time: '15 min read',
      featured: true,
      tags: ['Neural Architectures', 'Enterprise AI', 'Performance', '2025']
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 Neural Architecture Success: $2.8B Annual Savings',
      description: 'How a Fortune 500 technology company achieved unprecedented results using advanced neural architectures, saving $2.8B annually while improving performance by 400%.',
      type: 'case-study',
      url: '/case-studies/ai-2025-advanced-neural-architectures-fortune-500-success-story',
      metrics: {
        annual_savings: '$2.8B',
        performance_improvement: '400%',
        roi: '340%',
        accuracy: '99.7%'
      },
      reading_time: '12 min read',
      featured: true,
      tags: ['Fortune 500', 'Success Story', 'ROI', 'Performance']
    },
    {
      id: 'implementation-guide',
      title: 'Advanced Neural Architectures Implementation Guide: Complete Roadmap',
      description: 'Comprehensive implementation guide for advanced neural architectures in enterprise environments, featuring proven strategies for achieving 400% performance improvements.',
      type: 'resource',
      url: '/resources/ai-2025-advanced-neural-architectures-implementation-guide',
      metrics: {
        performance_gains: '400%',
        roi: '340%',
        accuracy: '99.7%',
        implementation_time: '18 months'
      },
      reading_time: '25 min read',
      featured: true,
      tags: ['Implementation', 'Guide', 'ROI', 'Strategy']
    }
  ];

  const filteredItems = contentItems.filter(item => 
    activeFilter === 'all' || item.type === activeFilter
  );

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <Brain className="w-5 h-5" />;
      case 'case-study':
        return <Target className="w-5 h-5" />;
      case 'resource':
        return <TrendingUp className="w-5 h-5" />;
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-4">
            <Brain className="w-5 h-5 mr-2" />
            <span className="font-semibold">Advanced Neural Architectures 2025</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Technology Breakthrough
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how next-generation neural architectures are transforming enterprise operations 
            with unprecedented performance improvements and business value.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">400%</div>
            <div className="text-gray-600">Performance Improvement</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">99.7%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">340%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">$2.8B</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm">
            {[
              { key: 'all', label: 'All Content', count: contentItems.length },
              { key: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
              { key: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
              { key: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key as any)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeFilter === filter.key
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${getTypeGradient(item.type)} p-4 text-white`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getTypeIcon(item.type)}
                    <span className="text-sm font-medium">
                      {item.type.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  {item.featured && (
                    <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                      FEATURED
                    </span>
                  )}
                </div>
                <div className="flex items-center text-sm opacity-90">
                  <Clock className="w-4 h-4 mr-1" />
                  {item.reading_time}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(item.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">
                        {key.replace('_', ' ')}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 text-xs rounded-full border ${getTypeColor(item.type)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={item.url}
                  className={`inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r ${getTypeGradient(item.type)} text-white rounded-lg font-semibold hover:opacity-90 transition-opacity`}
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Ready to Transform Your Enterprise?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Consultation</h4>
              <p className="text-gray-600 mb-4">
                Get personalized guidance from our AI specialists on implementing advanced neural architectures.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">ROI Calculator</h4>
              <p className="text-gray-600 mb-4">
                Calculate your potential ROI and savings with our advanced neural architecture implementation.
              </p>
              <Link
                href="/tools/roi-calculator"
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-800"
              >
                Calculate ROI
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Implementation Services</h4>
              <p className="text-gray-600 mb-4">
                Full-service implementation support to ensure your neural architecture success.
              </p>
              <Link
                href="/services/ai-implementation"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
              >
                View Services
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedNeuralArchitecturesShowcase2025;