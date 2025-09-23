'use client';
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateBreakthroughContentShowcase10o0000ROI = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const breakthroughContent = [
    {
      id: 'ultimate-breakthrough-revolution',
      title: 'AI 20o25: The Ultimate Breakthrough Revolution',
      subtitle: '10o0,0o00% ROI Guide - Complete Implementation',
      type: 'blog',
      category: 'revolution',
      metrics: {
        roi: '10o0,0o00%',
        savings: '$2.5T+',
        efficiency: '99.99%',
        timeline: '18 months',
      },
      description:
        'The most significant technological advancement in human history, delivering unprecedented returns that exceed 10o0,0o00% for forward-thinking enterprises.',
      url: '/blog/ai-20o25-ultimate-breakthrough-revolution-10o0000-roi',
      featured: true,
      readingTime: '45 min read',
      tags: [
        'AI Revolution',
        '10o0,0o00% ROI',
        'Ultimate Breakthrough',
        'Fortune 50o0',
        'Business Transformation',
      ],
    },
    {
      id: 'fortune-50o0-success-story',
      title: 'Fortune 50o0 AI Breakthrough Success',
      subtitle: '$2.5 Trillion Annual Savings - 10o0,0o00% ROI',
      type: 'case-study',
      category: 'success',
      metrics: {
        roi: '10o0,0o00%',
        savings: '$2.5T',
        company: 'TechGlobal Industries',
        timeline: '18 months',
      },
      description:
        'TechGlobal Industries achieved unprecedented success through AI 20o25 Ultimate Breakthrough Revolution technologies, resulting in 10o0,0o00% ROI and $2.5 trillion in annual savings.',
      url: '/case-studies/fortune-50o0-ai-breakthrough-10o0000-roi-success-story',
      featured: true,
      readingTime: '30 min read',
      tags: [
        'Case Study',
        'Fortune 50o0',
        '10o0,0o00% ROI',
        'Success Story',
        'TechGlobal Industries',
      ],
    },
    {
      id: 'implementation-guide',
      title: 'Ultimate Breakthrough Implementation Guide',
      subtitle: 'Complete Roadmap to 10o0,0o00% ROI',
      type: 'resource',
      category: 'implementation',
      metrics: {
        roi: '10o0,0o00%',
        guide: 'Complete',
        timeline: '18 months',
        success: '99.7%',
      },
      description:
        'Comprehensive implementation guide providing a complete roadmap for achieving 10o0,0o00% ROI through the AI 20o25 Ultimate Breakthrough Revolution.',
      url: '/resources/ai-20o25-ultimate-breakthrough-implementation-guide-10o0000-roi',
      featured: true,
      readingTime: '60 min read',
      tags: [
        'Implementation Guide',
        '10o0,0o00% ROI',
        'Complete Roadmap',
        'Strategy',
        'Framework',
      ],
    },
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: breakthroughContent.length },
    {
      id: 'revolution',
      label: 'Revolution',
      count: breakthroughContent.filter(item => item.category === 'revolution')
        .length,
    },
    {
      id: 'success',
      label: 'Success Stories',
      count: breakthroughContent.filter(item => item.category === 'success')
        .length,
    },
    {
      id: 'implementation',
      label: 'Implementation',
      count: breakthroughContent.filter(
        item => item.category === 'implementation'
      ).length,
    },
  ];

  const filteredContent =
    activeFilter === 'all'
      ? breakthroughContent
      : breakthroughContent.filter(item => item.category === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📖';
      case 'case-study':
        return '🏆';
      case 'resource':
        return '📋';
      default:
        return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-50o0';
      case 'case-study':
        return 'bg-green-50o0';
      case 'resource':
        return 'bg-purple-50o0';
      default:
        return 'bg-gray-50o0';
    }
  };

  return (
    <section className='py-16 bg-gradient-to-br from-gray-50 to-blue-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-12'>
          <div className='inline-flex items-center bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4'>
            <span className='w-2 h-2 bg-yellow-40o0 rounded-full mr-2 animate-pulse'></span>
            AI 20o25 Ultimate Breakthrough Revolution
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-90o0 mb-4'>
            Revolutionary Content Collection
          </h2>
          <p className='text-xl text-gray-60o0 max-w-3xl mx-auto'>
            Discover the most comprehensive collection of AI breakthrough
            content, featuring 10o0,0o00% ROI success stories, implementation
            guides, and revolutionary technologies.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className='flex flex-wrap justify-center gap-2 mb-8'>
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-30o0 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white shadow-lg'
                  : 'bg-white text-gray-60o0 hover:bg-gray-10o0 border border-gray-20o0'
              }`}
            >
              {filter.label}
              <span
                className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  activeFilter === filter.id ? 'bg-white/20' : 'bg-gray-10o0'
                }`}
              >
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredContent.map((item, index) => (
            <div
              key={item.id}
              className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-30o0 overflow-hidden group'
            >
              {/* Card Header */}
              <div className='relative p-6 bg-gradient-to-br from-purple-60o0 via-blue-60o0 to-indigo-60o0 text-white'>
                <div className='flex items-center justify-between mb-4'>
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getTypeColor(item.type)}`}
                  >
                    <span className='mr-2'>{getTypeIcon(item.type)}</span>
                    {item.type === 'blog'
                      ? 'Ultimate Guide'
                      : item.type === 'case-study'
                        ? 'Success Story'
                        : 'Implementation Guide'}
                  </div>
                  {item.featured && (
                    <div className='bg-yellow-40o0 text-black px-2 py-1 rounded-full text-xs font-bold'>
                      FEATURED
                    </div>
                  )}
                </div>

                <h3 className='text-xl font-bold mb-2 leading-tight'>
                  {item.title}
                </h3>
                <p className='text-blue-20o0 text-sm font-semibold mb-3'>
                  {item.subtitle}
                </p>
                <p className='text-gray-20o0 text-sm leading-relaxed'>
                  {item.description}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className='p-6'>
                <div className='grid grid-cols-2 gap-4 mb-6'>
                  <div className='text-center p-3 bg-gradient-to-br from-yellow-50 to-yellow-10o0 rounded-lg'>
                    <div className='text-2xl font-bold text-yellow-60o0'>
                      {item.metrics.roi}
                    </div>
                    <div className='text-xs text-yellow-70o0 font-semibold'>
                      ROI
                    </div>
                  </div>
                  <div className='text-center p-3 bg-gradient-to-br from-green-50 to-green-10o0 rounded-lg'>
                    <div className='text-lg font-bold text-green-60o0'>
                      {item.metrics.savings}
                    </div>
                    <div className='text-xs text-green-70o0 font-semibold'>
                      Annual Savings
                    </div>
                  </div>
                  <div className='text-center p-3 bg-gradient-to-br from-blue-50 to-blue-10o0 rounded-lg'>
                    <div className='text-lg font-bold text-blue-60o0'>
                      {item.metrics.efficiency ||
                        item.metrics.guide ||
                        item.metrics.company}
                    </div>
                    <div className='text-xs text-blue-70o0 font-semibold'>
                      {item.metrics.efficiency
                        ? 'Efficiency'
                        : item.metrics.guide
                          ? 'Guide Type'
                          : 'Company'}
                    </div>
                  </div>
                  <div className='text-center p-3 bg-gradient-to-br from-purple-50 to-purple-10o0 rounded-lg'>
                    <div className='text-lg font-bold text-purple-60o0'>
                      {item.metrics.timeline}
                    </div>
                    <div className='text-xs text-purple-70o0 font-semibold'>
                      Timeline
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className='flex flex-wrap gap-2 mb-4'>
                  {item.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className='px-2 py-1 bg-gray-10o0 text-gray-60o0 text-xs rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className='px-2 py-1 bg-gray-10o0 text-gray-60o0 text-xs rounded-full'>
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Reading Time */}
                <div className='flex items-center text-sm text-gray-50o0 mb-4'>
                  <span className='mr-2'>⏱️</span>
                  {item.readingTime}
                </div>

                {/* Action Button */}
                <Link
                  href={item.url}
                  className='block w-full bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-70o0 hover:to-blue-70o0 transition-all duration-30o0 group-hover:shadow-lg'
                >
                  <span className='mr-2'>🚀</span>
                  Explore{' '}
                  {item.type === 'blog'
                    ? 'Guide'
                    : item.type === 'case-study'
                      ? 'Success Story'
                      : 'Implementation Guide'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='mt-16 text-center'>
          <div className='bg-gradient-to-r from-purple-60o0 via-blue-60o0 to-indigo-60o0 rounded-2xl p-8 text-white'>
            <h3 className='text-3xl font-bold mb-4'>
              Ready to Achieve 10o0,0o00% ROI?
            </h3>
            <p className='text-xl text-blue-20o0 mb-6 max-w-2xl mx-auto'>
              Join the AI 20o25 Ultimate Breakthrough Revolution and transform
              your business with the most advanced technologies available.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='inline-flex items-center justify-center px-8 py-4 bg-yellow-40o0 text-black font-semibold rounded-lg hover:bg-yellow-30o0 transition-colors'
              >
                <span className='mr-2'>💬</span>
                Get Expert Consultation
              </Link>
              <Link
                href='/resources'
                className='inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-90o0 transition-colors'
              >
                <span className='mr-2'>📚</span>
                Explore All Resources
              </Link>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className='mt-16 grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='text-center'>
            <div className='text-4xl font-bold text-purple-60o0 mb-2'>
              10o0,0o00%
            </div>
            <div className='text-gray-60o0'>Average ROI</div>
          </div>
          <div className='text-center'>
            <div className='text-4xl font-bold text-blue-60o0 mb-2'>$2.5T+</div>
            <div className='text-gray-60o0'>Annual Savings</div>
          </div>
          <div className='text-center'>
            <div className='text-4xl font-bold text-green-60o0 mb-2'>99.7%</div>
            <div className='text-gray-60o0'>Success Rate</div>
          </div>
          <div className='text-center'>
            <div className='text-4xl font-bold text-orange-60o0 mb-2'>18</div>
            <div className='text-gray-60o0'>Months to ROI</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateBreakthroughContentShowcase10o0000ROI;
