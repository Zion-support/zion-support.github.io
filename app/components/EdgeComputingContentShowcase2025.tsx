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
  AcademicCapIcon,
  CpuChipIcon,
  BoltIcon,
  ShieldCheckIcon,
  TrendingUpIcon
} from '@heroicons/react/24/outline';

const EdgeComputingContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'edge-computing-revolution-guide',
      title: 'AI 2025: The Edge Computing Revolution - Ultimate Business Transformation Guide',
      description: 'Discover how Fortune 500 companies are achieving 450% ROI and $3.2B in annual savings through strategic edge AI implementation with comprehensive insights.',
      url: '/blog/ai-2025-edge-computing-revolution-ultimate-guide',
      type: 'blog',
      category: 'guides',
      metrics: {
        roi: '450%',
        savings: '$3.2B',
        latency: '95%',
        uptime: '99.9%'
      },
      readingTime: '18 min read',
      featured: true,
      tags: ['Edge Computing', 'AI Revolution', 'ROI', 'Business Transformation'],
      icon: <CpuChipIcon className="h-6 w-6" />
    },
    {
      id: 'fortune-500-edge-transformation',
      title: 'Fortune 500 Edge Computing Transformation: $3.2B Annual Savings - Ultimate Success Story',
      description: 'Explore how a $45B manufacturing giant achieved 567% ROI and revolutionized operations with edge computing in just 18 months of strategic implementation.',
      url: '/case-studies/edge-computing-fortune-500-transformation-ultimate-success',
      type: 'case-study',
      category: 'success-stories',
      metrics: {
        roi: '567%',
        savings: '$3.2B',
        timeline: '18 months',
        reliability: '99.9%'
      },
      readingTime: '22 min read',
      featured: true,
      tags: ['Fortune 500', 'Edge Computing', 'Manufacturing', 'ROI'],
      icon: <ChartBarIcon className="h-6 w-6" />
    },
    {
      id: 'edge-implementation-guide',
      title: 'Edge Computing Implementation Ultimate Guide 2025: Complete Roadmap to 567% ROI',
      description: 'Master the complete framework for implementing edge computing solutions that deliver extraordinary results and transform your business operations.',
      url: '/resources/edge-computing-implementation-ultimate-guide-2025',
      type: 'resource',
      category: 'frameworks',
      metrics: {
        roi: '567%',
        payback: '8.2 months',
        reliability: '99.9%',
        efficiency: '95%'
      },
      readingTime: '25 min read',
      featured: true,
      tags: ['Implementation Guide', 'Edge Computing', 'ROI', 'Strategy'],
      icon: <BoltIcon className="h-6 w-6" />
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
        return 'bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800';
      case 'case-study':
        return 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800';
      case 'resource':
        return 'bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 rounded-full px-6 py-3 mb-6">
            <CpuChipIcon className="h-6 w-6 mr-2" />
            <span className="font-semibold">🚀 EDGE COMPUTING REVOLUTION 2025</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Edge Computing Content That Delivers Results
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the ultimate guides, success stories, and frameworks that are transforming enterprises worldwide with proven <span className="text-cyan-600 font-semibold">567% ROI achievements</span> and <span className="text-green-600 font-semibold">$3.2B in annual savings</span>.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 border border-gray-200 hover:border-cyan-300'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                item.featured ? 'ring-4 ring-gradient-to-r from-cyan-500 to-blue-500' : ''
              }`}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 text-sm font-semibold">
                  <StarIcon className="h-4 w-4 inline mr-2" />
                  FEATURED EDGE COMPUTING CONTENT
                </div>
              )}

              <div className="p-8">
                {/* Type Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    <div className="mr-2">
                      {getTypeIcon(item.type)}
                    </div>
                    <span className="capitalize">{item.type.replace('-', ' ')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {item.readingTime}
                  </div>
                </div>

                {/* Icon */}
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white">
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Success Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <ChartBarIcon className="h-5 w-5 text-green-500" />
                    <div>
                      <div className="text-lg font-bold text-green-600">
                        {item.metrics.roi}
                      </div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
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
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 text-xs px-3 py-1 rounded-full border border-cyan-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={item.url}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg"
                >
                  <span>Read More</span>
                  <ChevronRightIcon className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success Statistics */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Edge Computing Success Metrics
            </h3>
            <p className="text-lg text-gray-600">
              Proven results from Fortune 500 implementations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6">
                <TrendingUpIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-green-600 mb-2">567%</div>
                <div className="text-sm text-gray-600">Average ROI</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl p-6">
                <CurrencyDollarIcon className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-cyan-600 mb-2">$3.2B</div>
                <div className="text-sm text-gray-600">Annual Savings</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-6">
                <ShieldCheckIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-600">System Uptime</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-6">
                <BoltIcon className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-yellow-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">Faster Response</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-4xl font-bold mb-6">
                Ready to Achieve 567% ROI with Edge Computing?
              </h3>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Join Fortune 500 companies already achieving extraordinary results with our proven edge computing strategies and implementation frameworks.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-cyan-600 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-cyan-600 transition-all transform hover:scale-105"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EdgeComputingContentShowcase2025;