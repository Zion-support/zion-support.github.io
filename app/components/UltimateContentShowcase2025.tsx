'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, TrendingUp, DollarSign, Clock, Users, CheckCircle, BookOpen, FileText, BarChart3 } from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const content = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough',
      description: 'Transform Fortune 500 companies with 1,200% ROI and $500M+ annual savings through strategic AI implementation.',
      type: 'blog',
      category: 'AI Strategy',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough',
      metrics: {
        roi: '1,200%',
        savings: '$500M+',
        accuracy: '99.97%',
        satisfaction: '98%'
      },
      badge: 'NEW',
      color: 'from-purple-600 to-blue-600',
      readingTime: '15 min read',
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $750M Annual Savings Success Story',
      description: 'How a global manufacturing leader achieved 1,500% ROI with quantum AI implementation in just 8 months.',
      type: 'case-study',
      category: 'Success Stories',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success',
      metrics: {
        roi: '1,500%',
        savings: '$750M',
        efficiency: '156%',
        uptime: '99.9%'
      },
      badge: 'CASE STUDY',
      color: 'from-blue-600 to-indigo-600',
      readingTime: '12 min read',
      featured: true
    },
    {
      id: 'implementation-guide',
      title: 'AI Implementation Ultimate Guide 2025: Complete Roadmap to 1,500% ROI',
      description: 'The definitive guide to enterprise AI transformation with proven methodology and best practices.',
      type: 'resource',
      category: 'Implementation',
      url: '/resources/ai-implementation-ultimate-guide-2025-complete-roadmap',
      metrics: {
        roi: '1,500%',
        payback: '2.4 months',
        success: '98%',
        savings: '$200M+'
      },
      badge: 'GUIDE',
      color: 'from-indigo-600 to-purple-600',
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'generative-ai-revolution',
      title: 'AI 2025: The Generative AI Enterprise Revolution - $2.3T Market Transformation',
      description: 'Discover how generative AI is transforming enterprise operations with 340% ROI and $180M savings.',
      type: 'blog',
      category: 'AI Technology',
      url: '/blog/ai-2025-generative-ai-enterprise-revolution',
      metrics: {
        roi: '340%',
        savings: '$180M',
        accuracy: '99.7%',
        satisfaction: '98%'
      },
      badge: 'FEATURED',
      color: 'from-green-600 to-teal-600',
      readingTime: '10 min read',
      featured: false
    },
    {
      id: 'mlops-breakthrough',
      title: 'AI 2025: MLOps Breakthrough - 99.9% Model Reliability with 67% Faster Deployment',
      description: 'Achieve 99.9% model reliability and 67% faster deployment with next-generation MLOps practices.',
      type: 'blog',
      category: 'AI Technology',
      url: '/blog/ai-2025-machine-learning-operations-mlops-breakthrough',
      metrics: {
        reliability: '99.9%',
        deployment: '67%',
        savings: '$2.1B',
        efficiency: '89%'
      },
      badge: 'TECHNICAL',
      color: 'from-orange-600 to-red-600',
      readingTime: '8 min read',
      featured: false
    },
    {
      id: 'retail-transformation',
      title: 'Retail AI Transformation 2025: $500M Company Achieves 280% ROI',
      description: 'How a major retail company achieved 280% ROI and $45M savings with AI-powered operations.',
      type: 'case-study',
      category: 'Success Stories',
      url: '/case-studies/retail-ai-transformation-2025-ultimate-success',
      metrics: {
        roi: '280%',
        savings: '$45M',
        satisfaction: '99.2%',
        efficiency: '78%'
      },
      badge: 'SUCCESS',
      color: 'from-pink-600 to-rose-600',
      readingTime: '14 min read',
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'blog', label: 'Blog Posts', count: content.filter(c => c.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: content.filter(c => c.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: content.filter(c => c.type === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? content 
    : content.filter(item => item.type === activeFilter);

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

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog':
        return 'Blog Post';
      case 'case-study':
        return 'Case Study';
      case 'resource':
        return 'Resource Guide';
      default:
        return 'Content';
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 mr-2" />
            <span className="font-semibold">ULTIMATE AI 2025 CONTENT SHOWCASE</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transform Your Business with AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover proven strategies, success stories, and implementation guides that have delivered 
            <span className="font-semibold text-purple-600"> 1,500% ROI</span> and 
            <span className="font-semibold text-purple-600"> $750M+ savings</span> for Fortune 500 companies.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">1,500%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">$750M+</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">2.4</div>
            <div className="text-gray-600">Months Payback</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeFilter === filter.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-purple-50'
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
              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
              
              <div className="p-6">
                {/* Type and Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {getTypeIcon(item.type)}
                    <span className="text-sm text-gray-600">{getTypeLabel(item.type)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {item.featured && (
                      <div className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                        FEATURED
                      </div>
                    )}
                    <div className={`text-xs font-semibold px-2 py-1 rounded ${
                      item.badge === 'NEW' ? 'bg-red-100 text-red-800' :
                      item.badge === 'CASE STUDY' ? 'bg-blue-100 text-blue-800' :
                      item.badge === 'GUIDE' ? 'bg-green-100 text-green-800' :
                      item.badge === 'FEATURED' ? 'bg-purple-100 text-purple-800' :
                      item.badge === 'TECHNICAL' ? 'bg-orange-100 text-orange-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {item.badge}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-purple-600">
                      {item.metrics.roi || item.metrics.reliability || item.metrics.deployment}
                    </div>
                    <div className="text-xs text-gray-600">
                      {item.metrics.roi ? 'ROI' : 
                       item.metrics.reliability ? 'Reliability' : 'Deployment'}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-600">
                      {item.metrics.savings || item.metrics.efficiency || item.metrics.payback}
                    </div>
                    <div className="text-xs text-gray-600">
                      {item.metrics.savings ? 'Savings' :
                       item.metrics.efficiency ? 'Efficiency' : 'Payback'}
                    </div>
                  </div>
                </div>

                {/* Reading Time */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  {item.readingTime}
                </div>

                {/* Action Button */}
                <Link
                  href={item.url}
                  className="w-full inline-flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors group"
                >
                  Read {getTypeLabel(item.type)}
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              Join hundreds of Fortune 500 companies achieving 1,500% ROI and $750M+ annual savings 
              with our proven AI implementation framework.
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
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;