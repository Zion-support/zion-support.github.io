'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronRightIcon, 
  StarIcon, 
  ChartBarIcon, 
  CurrencyDollarIcon, 
  ClockIcon,
  BookOpenIcon,
  DocumentTextIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const NewContent2025UltimateShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'enterprise-automation-mastery',
      title: 'AI 2025: Enterprise Automation Mastery - Ultimate Success Guide',
      description: 'Master enterprise automation with AI in 2025. Achieve 500%+ ROI, reduce costs by 60%, and transform your business operations with proven strategies.',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      type: 'blog',
      category: 'guides',
      metrics: {
        roi: '500%+',
        savings: '$2.8B',
        efficiency: '89%',
        satisfaction: '98%'
      },
      readingTime: '18 min read',
      featured: true,
      tags: ['AI Automation', 'Enterprise', 'ROI', 'Digital Transformation']
    },
    {
      id: 'fortune-100-transformation',
      title: 'Fortune 100 AI Transformation: $5.2B Company Achieves 1,200% ROI',
      description: 'Discover how a Fortune 100 manufacturing giant achieved $2.8B in annual savings through strategic AI implementation in just 24 months.',
      url: '/case-studies/fortune-100-ai-transformation-ultimate-success-story-2025',
      type: 'case-study',
      category: 'success-stories',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '24 months',
        efficiency: '89%'
      },
      readingTime: '12 min read',
      featured: true,
      tags: ['Fortune 100', 'AI Transformation', 'Manufacturing', 'ROI']
    },
    {
      id: 'implementation-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework',
      description: 'Complete roadmap to 1,000%+ ROI with proven strategies, 67% faster implementation, and 94% success rate across 1,000+ implementations.',
      url: '/resources/ai-2025-implementation-ultimate-success-framework',
      type: 'resource',
      category: 'frameworks',
      metrics: {
        roi: '1,000%+',
        success: '94%',
        speed: '67% faster',
        projects: '1,000+'
      },
      readingTime: '25 min read',
      featured: true,
      tags: ['AI Implementation', 'Framework', 'ROI', 'Success Strategy']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'guides', label: 'Guides', count: contentItems.filter(item => item.category === 'guides').length },
    { id: 'success-stories', label: 'Success Stories', count: contentItems.filter(item => item.category === 'success-stories').length },
    { id: 'frameworks', label: 'Frameworks', count: contentItems.filter(item => item.category === 'frameworks').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpenIcon className="h-5 w-5" />;
      case 'case-study':
        return <DocumentTextIcon className="h-5 w-5" />;
      case 'resource':
        return <AcademicCapIcon className="h-5 w-5" />;
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
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-4">
            <StarIcon className="h-5 w-5 mr-2" />
            <span className="font-semibold">NEW 2025 CONTENT COLLECTION</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content That Delivers Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the ultimate guides, success stories, and frameworks that are transforming enterprises worldwide with proven 500%+ ROI achievements.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-sm font-semibold">
                  <StarIcon className="h-4 w-4 inline mr-1" />
                  FEATURED
                </div>
              )}

              <div className="p-6">
                {/* Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="ml-2 capitalize">{item.type.replace('-', ' ')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {item.readingTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Success Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <ChartBarIcon className="h-5 w-5 text-green-500" />
                    <div>
                      <div className="text-lg font-bold text-green-600">
                        {item.metrics.roi}
                      </div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CurrencyDollarIcon className="h-5 w-5 text-blue-500" />
                    <div>
                      <div className="text-lg font-bold text-blue-600">
                        {item.metrics.savings}
                      </div>
                      <div className="text-xs text-gray-500">Savings</div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={item.url}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
                >
                  <span>Read More</span>
                  <ChevronRightIcon className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Achieve 500%+ ROI?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join 500+ Fortune 500 companies already achieving extraordinary results with our proven AI strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
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

export default NewContent2025UltimateShowcase;