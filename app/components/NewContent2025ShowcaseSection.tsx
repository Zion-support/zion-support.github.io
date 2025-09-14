'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, DollarSign, Clock, Users, Building2, BookOpen, FileText, Filter } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  roi: string;
  savings: string;
  readingTime: string;
  tags: string[];
  description: string;
  industry?: string;
  companySize?: string;
}

const NewContent2025ShowcaseSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const contentItems: ContentItem[] = [
    {
      id: 'advanced-analytics-revolution',
      title: 'AI 2025: The Advanced Analytics Revolution - Ultimate Guide to 750% ROI',
      type: 'blog',
      url: '/blog/ai-2025-advanced-analytics-revolution-ultimate-guide',
      roi: '750%',
      savings: '$8.2M annually',
      readingTime: '22 min read',
      tags: ['Advanced Analytics', 'AI', 'ROI', 'Predictive Intelligence'],
      description: 'Transform your enterprise with advanced analytics delivering 750% ROI through predictive intelligence and real-time insights.',
      industry: 'All Industries',
      companySize: 'Fortune 500'
    },
    {
      id: 'manufacturing-transformation-900-roi',
      title: 'AI 2025 Manufacturing Transformation: $3.2B Company Achieves 900% ROI in 20 Months',
      type: 'case-study',
      url: '/case-studies/ai-2025-manufacturing-transformation-900-roi-success',
      roi: '900%',
      savings: '$28.7M annually',
      readingTime: '18 min read',
      tags: ['Manufacturing', 'AI Transformation', 'ROI', 'Success Story'],
      description: 'Learn how a $3.2B manufacturing giant achieved 900% ROI through comprehensive AI transformation.',
      industry: 'Manufacturing',
      companySize: '$3.2B'
    },
    {
      id: 'implementation-master-roadmap',
      title: 'AI 2025 Implementation Master Roadmap: From Strategy to 1,000% ROI in 18 Months',
      type: 'resource',
      url: '/resources/ai-2025-implementation-master-roadmap-ultimate-guide',
      roi: '1,000%',
      savings: '$4.2M annually',
      readingTime: '35 min read',
      tags: ['Implementation Roadmap', 'AI Strategy', 'ROI', 'Master Guide'],
      description: 'Complete implementation framework for achieving 1,000% ROI through strategic AI transformation.',
      industry: 'All Industries',
      companySize: 'Enterprise'
    },
    {
      id: 'customer-experience-revolution',
      title: 'AI 2025: The Customer Experience Revolution - Ultimate Guide to 650% ROI',
      type: 'blog',
      url: '/blog/ai-2025-customer-experience-revolution-ultimate-guide',
      roi: '650%',
      savings: '$5.8M annually',
      readingTime: '20 min read',
      tags: ['Customer Experience', 'AI', 'ROI', 'Personalization'],
      description: 'Revolutionize customer experience with AI-powered personalization and intelligent automation.',
      industry: 'All Industries',
      companySize: 'Enterprise'
    },
    {
      id: 'financial-services-1200-roi',
      title: 'AI 2025 Financial Services Transformation: $1.8B Bank Achieves 1,200% ROI in 24 Months',
      type: 'case-study',
      url: '/case-studies/ai-2025-financial-services-transformation-1200-roi-success',
      roi: '1,200%',
      savings: '$23.8M annually',
      readingTime: '16 min read',
      tags: ['Financial Services', 'Banking', 'AI Transformation', 'ROI'],
      description: 'Discover how a $1.8B bank achieved 1,200% ROI through AI-powered digital transformation.',
      industry: 'Financial Services',
      companySize: '$1.8B'
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
      case 'blog': return <BookOpen className="h-5 w-5" />;
      case 'case-study': return <Building2 className="h-5 w-5" />;
      case 'resource': return <FileText className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-600 border-blue-200';
      case 'case-study': return 'bg-green-100 text-green-600 border-green-200';
      case 'resource': return 'bg-purple-100 text-purple-600 border-purple-200';
      default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog': return 'Blog Post';
      case 'case-study': return 'Case Study';
      case 'resource': return 'Resource';
      default: return 'Content';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <TrendingUp className="h-6 w-6 text-green-600" />
            <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">
              New Content 2025
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content That Delivers
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {' '}Extraordinary Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI insights, success stories, and implementation guides that are helping enterprises achieve 450% to 1,200% ROI.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">750%</p>
                <p className="text-sm text-gray-600">Average ROI</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">$200M+</p>
                <p className="text-sm text-gray-600">Total Savings</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-600">Success Stories</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Clock className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">18</p>
                <p className="text-sm text-gray-600">Months Avg</p>
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
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {filter.label}
              <span className="ml-2 px-2 py-0.5 bg-white bg-opacity-20 rounded-full text-xs">
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
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="text-sm font-medium">{getTypeLabel(item.type)}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">{item.roi}</p>
                    <p className="text-xs text-gray-500">ROI</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-blue-600" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{item.savings}</p>
                      <p className="text-xs text-gray-500">Annual Savings</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-purple-600" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{item.readingTime}</p>
                      <p className="text-xs text-gray-500">Reading Time</p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-xs font-medium text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={item.url}
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Read Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Enterprise with AI?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join 500+ companies that have achieved extraordinary results through our proven AI transformation frameworks and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                View All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025ShowcaseSection;