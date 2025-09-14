'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, StarIcon, ChartBarIcon, CurrencyDollarIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi?: string;
    savings?: string;
    efficiency?: string;
    satisfaction?: string;
  };
  readingTime?: string;
  featured?: boolean;
  description?: string;
}

const RevolutionaryContentShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentItems: ContentItem[] = [
    {
      id: 'ultimate-enterprise-transformation',
      title: 'AI 2025: The Ultimate Enterprise Transformation Revolution - Complete Success Guide',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-enterprise-transformation-revolution',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '89%',
        satisfaction: '98%'
      },
      readingTime: '25 min read',
      featured: true,
      description: 'Discover how Fortune 500 companies are achieving 1,200% ROI with revolutionary AI transformation strategies.'
    },
    {
      id: 'fortune-100-success',
      title: 'Fortune 100 AI Transformation: $5.2B Company Achieves 1,200% ROI in 24 Months',
      type: 'case-study',
      url: '/case-studies/fortune-100-ai-transformation-ultimate-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '95%',
        satisfaction: '99.8%'
      },
      readingTime: '15 min read',
      featured: true,
      description: 'Real-world case study of a Fortune 100 manufacturing giant achieving unprecedented AI transformation success.'
    },
    {
      id: 'ultimate-success-framework',
      title: 'AI Transformation Ultimate Success Framework 2025: Complete Roadmap to 1,000%+ ROI',
      type: 'resource',
      url: '/resources/ai-transformation-ultimate-success-framework-2025',
      metrics: {
        roi: '1,000%+',
        savings: '$2.8B+',
        efficiency: '89%',
        satisfaction: '98%'
      },
      readingTime: '30 min read',
      featured: true,
      description: 'The most comprehensive AI transformation framework available, based on 500+ successful implementations.'
    },
    {
      id: 'ai-2025-enterprise-automation',
      title: 'AI 2025: The Enterprise Automation Revolution - 500% ROI',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-revolution',
      metrics: {
        roi: '500%',
        savings: '$200M',
        efficiency: '78%',
        satisfaction: '99.8%'
      },
      readingTime: '35 min read',
      description: 'Complete guide to enterprise automation transformation with proven ROI strategies.'
    },
    {
      id: 'quantum-ai-business-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution - $100B Market Transformation',
      type: 'blog',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      metrics: {
        roi: '400-600%',
        savings: '$100B',
        efficiency: '1,200%',
        satisfaction: '99.97%'
      },
      readingTime: '20 min read',
      description: 'Explore the quantum computing revolution transforming business operations across industries.'
    },
    {
      id: 'ai-transformation-500-roi',
      title: 'AI Transformation Success: $2B Company Achieves 500% ROI',
      type: 'case-study',
      url: '/case-studies/ai-transformation-500-roi-success-story',
      metrics: {
        roi: '500%',
        savings: '$200M',
        efficiency: '99.8%',
        satisfaction: '99.8%'
      },
      readingTime: '12 min read',
      description: 'Detailed case study of a $2B company achieving 500% ROI through strategic AI implementation.'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === selectedCategory);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study': return 'bg-green-100 text-green-800 border-green-200';
      case 'resource': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog': return 'Blog Post';
      case 'case-study': return 'Case Study';
      case 'resource': return 'Resource Guide';
      default: return 'Content';
    }
  };

  const getMetricIcon = (key: string) => {
    switch (key) {
      case 'roi': return <ChartBarIcon className="w-4 h-4 text-green-500" />;
      case 'savings': return <CurrencyDollarIcon className="w-4 h-4 text-yellow-500" />;
      case 'efficiency': return <ChartBarIcon className="w-4 h-4 text-blue-500" />;
      case 'satisfaction': return <StarIcon className="w-4 h-4 text-purple-500" />;
      default: return <ChartBarIcon className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-4">
            <StarIcon className="w-5 h-5 mr-2" />
            <span className="font-medium">🚀 REVOLUTIONARY AI CONTENT 2025</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ultimate AI Transformation Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI transformation strategies, case studies, and frameworks achieving <span className="font-bold text-purple-600">1,200% ROI</span> and <span className="font-bold text-purple-600">$2.8B+ savings</span>
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {item.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-t-xl">
                  <div className="flex items-center">
                    <StarIcon className="w-5 h-5 mr-2" />
                    <span className="font-medium">Featured Content</span>
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(item.type)}`}>
                    {getTypeLabel(item.type)}
                  </span>
                  {item.readingTime && (
                    <span className="text-gray-500 text-sm flex items-center">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {item.readingTime}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                )}

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        {getMetricIcon(key)}
                        <div>
                          <div className="text-lg font-bold text-gray-900">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href={item.url}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Read {getTypeLabel(item.type)}
                  <ChevronRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics Summary */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Proven Success Metrics</h3>
            <p className="text-xl text-purple-100">
              Based on 500+ successful AI transformations across Fortune 500 companies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">1,200%</div>
              <div className="text-purple-100">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-300 mb-2">$2.8B+</div>
              <div className="text-purple-100">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">89%</div>
              <div className="text-purple-100">Efficiency Gains</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">98%</div>
              <div className="text-purple-100">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your AI Transformation Journey?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Get personalized AI transformation consultation and access to our complete framework
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-transformation-consultation"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Get Free AI Consultation
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
            
            <Link
              href="/ai-transformation-framework"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              Download Framework
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContentShowcase2025;