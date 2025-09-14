'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  Zap, 
  Clock, 
  Users, 
  BarChart3, 
  ArrowRight,
  BookOpen,
  FileText,
  Lightbulb
} from 'lucide-react';

const UltimateAutonomousEnterpriseShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const content = [
    {
      id: 'autonomous-enterprise-revolution',
      type: 'blog',
      title: 'AI 2025: The Ultimate Autonomous Enterprise Revolution',
      subtitle: 'Complete Guide to 15,000% ROI',
      description: 'Transform your business with complete operational autonomy. Fortune 500 companies are achieving $50+ billion in annual savings through revolutionary AI implementation.',
      metrics: {
        roi: '15,000%',
        savings: '$52.8B',
        accuracy: '99.97%',
        efficiency: '3,500%'
      },
      link: '/blog/ai-2025-ultimate-autonomous-enterprise-revolution-ultimate-breakthrough',
      readingTime: '35 min read',
      featured: true,
      tags: ['AI Revolution', 'Autonomous Enterprise', 'ROI', 'Fortune 500', 'Ultimate Breakthrough']
    },
    {
      id: 'fortune-500-success-story',
      type: 'case-study',
      title: 'Fortune 500 Success: $52.8B Annual Savings',
      subtitle: '15,000% ROI in 18 Months',
      description: 'Real case study of how a Fortune 500 manufacturing giant achieved unprecedented success through autonomous enterprise transformation.',
      metrics: {
        roi: '15,000%',
        savings: '$52.8B',
        timeline: '18 months',
        accuracy: '99.97%'
      },
      link: '/case-studies/fortune-500-ultimate-autonomous-enterprise-transformation-15000-roi-success-story',
      readingTime: '25 min read',
      featured: true,
      tags: ['Case Study', 'Fortune 500', 'Success Story', 'ROI', 'Manufacturing']
    },
    {
      id: 'implementation-guide',
      type: 'resource',
      title: 'Complete Implementation Roadmap',
      subtitle: 'From Strategy to 15,000% ROI',
      description: 'Step-by-step guide to implementing autonomous enterprise transformation with proven methodologies and real-world success stories.',
      metrics: {
        roi: '15,000%',
        timeline: '18 months',
        success: '99.7%',
        projects: '1,000+'
      },
      link: '/resources/autonomous-enterprise-implementation-ultimate-guide-2025-ultimate-breakthrough',
      readingTime: '45 min read',
      featured: true,
      tags: ['Implementation Guide', 'Strategy', 'ROI', 'Roadmap', 'Best Practices']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'blog', label: 'Blog Posts', count: content.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: content.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: content.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? content 
    : content.filter(item => item.type === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="h-5 w-5" />;
      case 'case-study':
        return <FileText className="h-5 w-5" />;
      case 'resource':
        return <Lightbulb className="h-5 w-5" />;
      default:
        return <BookOpen className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'from-blue-500 to-cyan-500';
      case 'case-study':
        return 'from-green-500 to-emerald-500';
      case 'resource':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 font-semibold text-sm mb-4">
            🚀 ULTIMATE AUTONOMOUS ENTERPRISE REVOLUTION
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transform Your Business with Complete Operational Autonomy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Fortune 500 companies are achieving 15,000% ROI and $50+ billion in annual savings through revolutionary autonomous enterprise transformation.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">15,000%</div>
                <div className="text-sm text-gray-600">Average ROI</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">$52.8B</div>
                <div className="text-sm text-gray-600">Annual Savings</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">99.97%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">3,500%</div>
                <div className="text-sm text-gray-600">Efficiency Gain</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                item.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
              }`}
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getTypeColor(item.type)} text-white`}>
                    {getTypeIcon(item.type)}
                    <span className="ml-2">{item.type.toUpperCase()}</span>
                  </div>
                  {item.featured && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      ⭐ Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-lg font-semibold text-purple-600 mb-3">
                  {item.subtitle}
                </p>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="p-6 bg-gray-50">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{item.metrics.accuracy}</div>
                    <div className="text-xs text-gray-600">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{item.metrics.efficiency || '99.7%'}</div>
                    <div className="text-xs text-gray-600">Success</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {item.readingTime}
                  </div>
                  
                  <Link
                    href={item.link}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Achieve 15,000% ROI?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join Fortune 500 companies transforming their business with autonomous enterprise solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateAutonomousEnterpriseShowcase;