'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronRightIcon, 
  ChartBarIcon, 
  CurrencyDollarIcon, 
  ClockIcon,
  StarIcon,
  BookOpenIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const UltimateContentShowcase2025 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentItems = [
    {
      id: 'ultimate-enterprise-transformation',
      title: 'AI 2025: The Ultimate Enterprise Transformation Revolution - Complete Guide',
      description: 'Discover how Fortune 500 companies are achieving 1,200% ROI with AI transformation. Complete implementation guide with real success stories and actionable strategies.',
      type: 'blog',
      category: 'transformation',
      url: '/blog/ai-2025-ultimate-enterprise-transformation-revolution-complete-guide',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '156%',
        satisfaction: '98%'
      },
      readingTime: '25 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'fortune-100-success',
      title: 'Fortune 100 AI Transformation: $5.2B Company Achieves 1,500% ROI in 24 Months',
      description: 'Real success story of a Fortune 100 company that achieved 1,500% ROI and $2.8 billion in annual savings within 24 months.',
      type: 'case-study',
      category: 'success-stories',
      url: '/case-studies/fortune-100-ai-transformation-ultimate-success-story-2025',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        timeline: '24 months',
        automation: '94%'
      },
      readingTime: '18 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'implementation-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework: Complete Guide to 1,500% ROI',
      description: 'The definitive guide to AI implementation success. Learn the proven framework that Fortune 500 companies use to achieve 1,500% ROI.',
      type: 'resource',
      category: 'implementation',
      url: '/resources/ai-2025-implementation-ultimate-success-framework-complete-guide',
      metrics: {
        roi: '1,500%',
        success: '94%',
        timeline: '24 months',
        projects: '500+'
      },
      readingTime: '30 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'enterprise-automation-revolution',
      title: 'AI 2025: The Enterprise Automation Revolution - 500% ROI',
      description: 'Comprehensive guide to enterprise automation with AI. Learn how to achieve 500% ROI and transform your business operations.',
      type: 'blog',
      category: 'automation',
      url: '/blog/ai-2025-enterprise-automation-revolution',
      metrics: {
        roi: '500%',
        savings: '$200M',
        efficiency: '340%',
        satisfaction: '99.8%'
      },
      readingTime: '35 min read',
      isNew: true,
      featured: false
    },
    {
      id: 'quantum-ai-business-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution - $100B Market Transformation',
      description: 'Explore the quantum AI revolution that\'s transforming business operations with 1,200% performance improvements and $100B market opportunities.',
      type: 'blog',
      category: 'quantum',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      metrics: {
        roi: '1,200%',
        market: '$100B',
        speed: '1,200%',
        accuracy: '99.97%'
      },
      readingTime: '20 min read',
      isNew: true,
      featured: false
    },
    {
      id: 'ai-transformation-500-roi-success',
      title: 'AI Transformation Success: $2B Company Achieves 500% ROI',
      description: 'Case study of a $2B company that achieved 500% ROI through comprehensive AI transformation in just 12 months.',
      type: 'case-study',
      category: 'success-stories',
      url: '/case-studies/ai-transformation-500-roi-success-story',
      metrics: {
        roi: '500%',
        savings: '$200M',
        timeline: '12 months',
        satisfaction: '99.8%'
      },
      readingTime: '15 min read',
      isNew: true,
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'transformation', name: 'Transformation', count: contentItems.filter(item => item.category === 'transformation').length },
    { id: 'success-stories', name: 'Success Stories', count: contentItems.filter(item => item.category === 'success-stories').length },
    { id: 'implementation', name: 'Implementation', count: contentItems.filter(item => item.category === 'implementation').length },
    { id: 'automation', name: 'Automation', count: contentItems.filter(item => item.category === 'automation').length },
    { id: 'quantum', name: 'Quantum AI', count: contentItems.filter(item => item.category === 'quantum').length }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpenIcon className="h-5 w-5" />;
      case 'case-study':
        return <DocumentTextIcon className="h-5 w-5" />;
      case 'resource':
        return <WrenchScrewdriverIcon className="h-5 w-5" />;
      default:
        return <BookOpenIcon className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'resource':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <StarIcon className="h-6 w-6 text-yellow-500" />
            <span className="text-sm font-medium text-yellow-600">ULTIMATE CONTENT COLLECTION 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content That Drives Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the proven strategies, frameworks, and success stories that Fortune 500 companies use to achieve extraordinary AI transformation results.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">1,500%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$2.8B</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">94%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {category.name} ({category.count})
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
              {item.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-sm font-medium">
                  ⭐ FEATURED CONTENT
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="capitalize">{item.type.replace('-', ' ')}</span>
                  </div>
                  {item.isNew && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <ChartBarIcon className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-semibold text-green-600">{item.metrics.roi} ROI</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CurrencyDollarIcon className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-semibold text-blue-600">{item.metrics.savings}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <ClockIcon className="h-4 w-4" />
                    <span>{item.readingTime}</span>
                  </div>
                  <Link
                    href={item.url}
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                  >
                    Read More
                    <ChevronRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get personalized consultation and discover how your organization can replicate these extraordinary AI transformation results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
                <ChevronRightIcon className="ml-2 h-4 w-4" />
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
    </section>
  );
};

export default UltimateContentShowcase2025;