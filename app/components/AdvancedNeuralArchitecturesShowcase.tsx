'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Brain, Target, Zap, Clock, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

const AdvancedNeuralArchitecturesShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const content = [
    {
      id: 'neural-architectures',
      title: 'AI 2025: Advanced Neural Architectures - Enterprise Breakthrough',
      description: 'Discover how next-generation neural architectures are revolutionizing enterprise AI with 400% performance improvements and 99.7% accuracy rates.',
      url: '/blog/ai-2025-advanced-neural-architectures-enterprise-breakthrough',
      type: 'blog',
      category: 'blog',
      metrics: {
        performance: '400%',
        accuracy: '99.7%',
        roi: '340%'
      },
      badge: 'NEW',
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 Success: $3.2B Annual Savings with Neural Architectures',
      description: 'How a Fortune 500 technology company achieved 400% performance improvements and $3.2B annual savings using advanced neural architectures.',
      url: '/case-studies/ai-2025-advanced-neural-architectures-fortune-500-success-story',
      type: 'case-study',
      category: 'case-study',
      metrics: {
        savings: '$3.2B',
        performance: '400%',
        roi: '340%'
      },
      badge: 'SUCCESS STORY',
      readingTime: '15 min read',
      featured: true
    },
    {
      id: 'implementation-guide',
      title: 'Advanced Neural Architectures Implementation Guide',
      description: 'Complete roadmap for implementing advanced neural architectures delivering 400% performance improvements and 340% ROI in enterprise environments.',
      url: '/resources/ai-2025-advanced-neural-architectures-implementation-guide',
      type: 'resource',
      category: 'resource',
      metrics: {
        performance: '400%',
        roi: '340%',
        accuracy: '99.7%'
      },
      badge: 'GUIDE',
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'edge-computing',
      title: 'AI 2025: Edge Computing Revolution - Ultimate Guide',
      description: 'Discover how edge computing is revolutionizing AI deployment with 99.9% uptime, 67% cost reduction, and real-time processing capabilities.',
      url: '/blog/ai-2025-edge-computing-revolution-ultimate-guide',
      type: 'blog',
      category: 'blog',
      metrics: {
        uptime: '99.9%',
        costReduction: '67%',
        roi: '450%'
      },
      badge: 'REVOLUTION',
      readingTime: '20 min read',
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'blog', label: 'Blog Posts', count: content.filter(item => item.category === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: content.filter(item => item.category === 'case-study').length },
    { id: 'resource', label: 'Resources', count: content.filter(item => item.category === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? content 
    : content.filter(item => item.category === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <Brain className="w-5 h-5" />;
      case 'case-study':
        return <Target className="w-5 h-5" />;
      case 'resource':
        return <Zap className="w-5 h-5" />;
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

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'NEW':
        return 'bg-green-500 text-white';
      case 'SUCCESS STORY':
        return 'bg-blue-500 text-white';
      case 'GUIDE':
        return 'bg-purple-500 text-white';
      case 'REVOLUTION':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-4">
            <Brain className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">ADVANCED NEURAL ARCHITECTURES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge neural architectures and edge computing solutions delivering 400% performance improvements and 340% ROI.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">400%</div>
            <div className="text-gray-600">Performance Improvement</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">99.7%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">340%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">$3.2B</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className={`p-2 rounded-lg border ${getTypeColor(item.type)}`}>
                      {getTypeIcon(item.type)}
                    </div>
                    <span className="text-sm font-medium text-gray-600">
                      {item.type.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${getBadgeColor(item.badge)}`}>
                      {item.badge}
                    </span>
                    {item.featured && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                        FEATURED
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(item.metrics).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium text-gray-900">{value}</span>
                      <span className="text-xs text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{item.readingTime}</span>
                  </div>
                </div>

                <Link
                  href={item.url}
                  className="inline-flex items-center w-full justify-center px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with Advanced Neural Architectures?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join leading enterprises achieving 400% performance improvements and 340% ROI with our cutting-edge AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedNeuralArchitecturesShowcase;