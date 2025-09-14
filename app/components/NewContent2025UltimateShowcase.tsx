'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, StarIcon, ChartBarIcon, CurrencyDollarIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const NewContent2025UltimateShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      type: 'blog',
      category: 'ai-transformation',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
      description: 'Transform your business with cutting-edge AI solutions that deliver 1,200% ROI and $500M+ in annual savings.',
      metrics: {
        roi: '1,200%',
        savings: '$500M+',
        efficiency: '99.8%',
        success: '98%'
      },
      readingTime: '35 min read',
      featured: true,
      isNew: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings with 1,200% ROI',
      type: 'case-study',
      category: 'success-stories',
      url: '/case-studies/fortune-500-ai-transformation-1200-percent-roi-ultimate-success',
      description: 'Real-world success story of how a global manufacturing giant achieved breakthrough results through AI transformation.',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '18 months',
        efficiency: '156%'
      },
      readingTime: '18 min read',
      featured: true,
      isNew: true
    },
    {
      id: 'implementation-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework: Complete Roadmap to 1,000%+ ROI',
      type: 'resource',
      category: 'implementation',
      url: '/resources/ai-2025-implementation-ultimate-success-framework',
      description: 'The definitive guide to AI transformation success with proven methodologies from 500+ implementations.',
      metrics: {
        roi: '1,000%+',
        success: '94%',
        timeline: '18 months',
        projects: '500+'
      },
      readingTime: '30 min read',
      featured: true,
      isNew: true
    },
    {
      id: 'quantum-ai-revolution',
      title: 'AI 2025: The Quantum AI Business Revolution - $100B Market Transformation',
      type: 'blog',
      category: 'ai-transformation',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      description: 'Discover how quantum AI is revolutionizing business operations with 1,000x processing speed and 99.97% accuracy.',
      metrics: {
        roi: '400-600%',
        market: '$100B',
        speed: '1,000x',
        accuracy: '99.97%'
      },
      readingTime: '20 min read',
      featured: false,
      isNew: true
    },
    {
      id: 'autonomous-systems',
      title: 'AI 2025: Next-Generation Autonomous Systems Revolution',
      type: 'blog',
      category: 'ai-transformation',
      url: '/blog/ai-2026-next-generation-autonomous-systems-revolution',
      description: 'Learn how autonomous AI systems are delivering 99.9% uptime and 400% productivity gains.',
      metrics: {
        uptime: '99.9%',
        productivity: '400%',
        costReduction: '85%',
        roi: '1,200%'
      },
      readingTime: '25 min read',
      featured: false,
      isNew: true
    },
    {
      id: 'healthcare-transformation',
      title: 'Healthcare AI Transformation 2025: 450% ROI Success Story',
      type: 'case-study',
      category: 'success-stories',
      url: '/case-studies/ai-healthcare-transformation-2025-success-story',
      description: 'How a $2.1B health system achieved 450% ROI and $12M annual savings through AI transformation.',
      metrics: {
        roi: '450%',
        savings: '$12M',
        satisfaction: '94%',
        efficiency: '67%'
      },
      readingTime: '15 min read',
      featured: false,
      isNew: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'ai-transformation', name: 'AI Transformation', count: contentItems.filter(item => item.category === 'ai-transformation').length },
    { id: 'success-stories', name: 'Success Stories', count: contentItems.filter(item => item.category === 'success-stories').length },
    { id: 'implementation', name: 'Implementation', count: contentItems.filter(item => item.category === 'implementation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
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

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <StarIcon className="h-6 w-6 text-yellow-500" />
            <span className="text-sm font-medium text-yellow-600">NEW ULTIMATE CONTENT 2025</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover breakthrough strategies, real success stories, and proven frameworks that deliver 
            <span className="text-purple-600 font-semibold"> 1,200% ROI</span> and 
            <span className="text-purple-600 font-semibold"> $500M+ savings</span> for enterprise companies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{getTypeIcon(item.type)}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(item.type)}`}>
                      {item.type.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {item.isNew && (
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
                        NEW
                      </span>
                    )}
                    {item.featured && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
                        FEATURED
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <ChartBarIcon className="h-4 w-4 text-green-500" />
                    <div>
                      <div className="text-xs text-gray-500">ROI</div>
                      <div className="text-sm font-semibold text-green-600">{item.metrics.roi}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CurrencyDollarIcon className="h-4 w-4 text-blue-500" />
                    <div>
                      <div className="text-xs text-gray-500">Savings</div>
                      <div className="text-sm font-semibold text-blue-600">{item.metrics.savings}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <ClockIcon className="h-4 w-4" />
                    <span>{item.readingTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <UserGroupIcon className="h-4 w-4" />
                    <span>Enterprise</span>
                  </div>
                </div>

                <Link
                  href={item.url}
                  className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-800 transition-colors"
                >
                  Read {item.type.replace('-', ' ')}
                  <ChevronRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join 500+ companies that have achieved breakthrough results with our proven AI methodologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/ai-2025-implementation-ultimate-success-framework"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Implementation Framework
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateShowcase;