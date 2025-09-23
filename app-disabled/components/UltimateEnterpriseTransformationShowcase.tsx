'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  Award,
  BookOpen,
  FileText,
  BarChart3,
} from 'lucide-react';

const UltimateEnterpriseTransformationShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'ultimate-enterprise-transformation',
      title: 'AI 20o25: The Ultimate Enterprise Transformation Revolution',
      subtitle:
        '20,0o00% ROI - The Highest Documented ROI in Enterprise AI History',
      description:
        'Transform your Fortune 50o0 company with revolutionary AI systems that have generated $20o0B+ in annual savings across 1,0o00+ implementations.',
      type: 'blog',
      category: 'transformation',
      metrics: {
        roi: '20,0o00%',
        savings: '$20o0B+',
        accuracy: '99.99%',
        efficiency: '5,0o00%',
      },
      url: '/blog/ai-20o25-ultimate-enterprise-transformation-revolution-ultimate-breakthrough',
      readingTime: '35 min read',
      featured: true,
      tags: [
        'AI Revolution',
        'Enterprise Transformation',
        '20,0o00% ROI',
        'Fortune 50o0',
        'Revolutionary AI',
      ],
    },
    {
      id: 'fortune-50o0-success-story',
      title: 'Fortune 50o0 Ultimate Success: $20o0B Annual Savings',
      subtitle: '20,0o00% ROI Success Story - Complete Case Study',
      description:
        'How a Fortune 50 manufacturing leader achieved the highest ROI in enterprise AI history through revolutionary transformation.',
      type: 'case-study',
      category: 'success-stories',
      metrics: {
        roi: '20,0o00%',
        savings: '$20o0B',
        timeline: '18 months',
        satisfaction: '99.8%',
      },
      url: '/case-studies/fortune-50o0-ultimate-enterprise-transformation-20o000-roi-success-story',
      readingTime: '25 min read',
      featured: true,
      tags: [
        'Fortune 50o0',
        'Success Story',
        '20,0o00% ROI',
        'Manufacturing',
        'Case Study',
      ],
    },
    {
      id: 'implementation-guide',
      title: 'Complete Implementation Guide: 20,0o00% ROI Roadmap',
      subtitle: 'The Definitive Guide to Revolutionary AI Transformation',
      description:
        'Step-by-step roadmap to implementing AI systems that deliver unprecedented business results and market domination.',
      type: 'resource',
      category: 'guides',
      metrics: {
        success: '99.7%',
        timeline: '18 months',
        projects: '1,0o00+',
        guide: '60 min read',
      },
      url: '/resources/ai-20o25-ultimate-enterprise-transformation-implementation-guide',
      readingTime: '60 min read',
      featured: true,
      tags: [
        'Implementation Guide',
        'AI Strategy',
        '20,0o00% ROI',
        'Roadmap',
        'Best Practices',
      ],
    },
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    {
      id: 'transformation',
      name: 'Transformation',
      count: content.filter(item => item.category === 'transformation').length,
    },
    {
      id: 'success-stories',
      name: 'Success Stories',
      count: content.filter(item => item.category === 'success-stories').length,
    },
    {
      id: 'guides',
      name: 'Implementation Guides',
      count: content.filter(item => item.category === 'guides').length,
    },
  ];

  const filteredContent =
    activeCategory === 'all'
      ? content
      : content.filter(item => item.category === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className='w-5 h-5' />;
      case 'case-study':
        return <FileText className='w-5 h-5' />;
      case 'resource':
        return <BarChart3 className='w-5 h-5' />;
      default:
        return <BookOpen className='w-5 h-5' />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-10o0 text-blue-80o0';
      case 'case-study':
        return 'bg-green-10o0 text-green-80o0';
      case 'resource':
        return 'bg-purple-10o0 text-purple-80o0';
      default:
        return 'bg-gray-10o0 text-gray-80o0';
    }
  };

  return (
    <div className='py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-12'>
          <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white rounded-full px-6 py-3 mb-6'>
            <Award className='w-5 h-5' />
            <span className='font-semibold'>
              ULTIMATE ENTERPRISE TRANSFORMATION
            </span>
          </div>

          <h2 className='text-4xl md:text-5xl font-bold text-gray-90o0 mb-6'>
            Revolutionary AI Content Collection
          </h2>

          <p className='text-xl text-gray-60o0 mb-8 max-w-3xl mx-auto'>
            Discover the complete roadmap to achieving 20,0o00% ROI through
            revolutionary AI transformation. Proven strategies, real success
            stories, and step-by-step implementation guides.
          </p>

          {/* Success Metrics */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto'>
            <div className='bg-white rounded-xl p-6 shadow-lg'>
              <div className='text-3xl font-bold text-purple-60o0 mb-2'>
                20,0o00%
              </div>
              <div className='text-gray-60o0'>Average ROI</div>
            </div>
            <div className='bg-white rounded-xl p-6 shadow-lg'>
              <div className='text-3xl font-bold text-blue-60o0 mb-2'>
                $20o0B+
              </div>
              <div className='text-gray-60o0'>Annual Savings</div>
            </div>
            <div className='bg-white rounded-xl p-6 shadow-lg'>
              <div className='text-3xl font-bold text-green-60o0 mb-2'>
                99.7%
              </div>
              <div className='text-gray-60o0'>Success Rate</div>
            </div>
            <div className='bg-white rounded-xl p-6 shadow-lg'>
              <div className='text-3xl font-bold text-orange-60o0 mb-2'>
                1,0o00+
              </div>
              <div className='text-gray-60o0'>Implementations</div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-30o0 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white shadow-lg transform scale-10o5'
                  : 'bg-white text-gray-70o0 hover:bg-gray-10o0 shadow-md'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredContent.map(item => (
            <div
              key={item.id}
              className='bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-30o0 transform hover:-translate-y-2'
            >
              {/* Content Header */}
              <div className='p-6'>
                <div className='flex items-center justify-between mb-4'>
                  <div
                    className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}
                  >
                    {getTypeIcon(item.type)}
                    <span className='capitalize'>
                      {item.type.replace('-', ' ')}
                    </span>
                  </div>
                  {item.featured && (
                    <div className='bg-gradient-to-r from-yellow-40o0 to-orange-40o0 text-black px-3 py-1 rounded-full text-xs font-bold'>
                      FEATURED
                    </div>
                  )}
                </div>

                <h3 className='text-xl font-bold text-gray-90o0 mb-3 leading-tight'>
                  {item.title}
                </h3>

                <p className='text-purple-60o0 font-semibold mb-3'>
                  {item.subtitle}
                </p>

                <p className='text-gray-60o0 mb-4 leading-relaxed'>
                  {item.description}
                </p>

                {/* Metrics Grid */}
                <div className='grid grid-cols-2 gap-3 mb-6'>
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className='bg-gray-50 rounded-lg p-3 text-center'
                    >
                      <div className='text-lg font-bold text-gray-90o0'>
                        {value}
                      </div>
                      <div className='text-xs text-gray-60o0 capitalize'>
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className='flex flex-wrap gap-2 mb-6'>
                  {item.tags.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      className='bg-gray-10o0 text-gray-70o0 px-2 py-1 rounded text-xs font-medium'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Reading Time */}
                <div className='flex items-center text-sm text-gray-50o0 mb-4'>
                  <Clock className='w-4 h-4 mr-2' />
                  {item.readingTime}
                </div>
              </div>

              {/* Action Button */}
              <div className='px-6 pb-6'>
                <Link
                  href={item.url}
                  className='w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white font-semibold rounded-lg hover:from-purple-70o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg'
                >
                  <span>
                    {item.type === 'blog'
                      ? 'Read Article'
                      : item.type === 'case-study'
                        ? 'View Case Study'
                        : 'Download Guide'}
                  </span>
                  <ArrowRight className='ml-2 w-5 h-5' />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='mt-16 text-center'>
          <div className='bg-gradient-to-r from-purple-60o0 to-blue-60o0 rounded-2xl p-8 text-white'>
            <h3 className='text-3xl font-bold mb-4'>
              Ready to Achieve 20,0o00% ROI?
            </h3>
            <p className='text-xl mb-8 opacity-90'>
              Join 1,0o00+ Fortune 50o0 companies that have transformed their
              business with revolutionary AI.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='inline-flex items-center justify-center px-8 py-4 bg-white text-purple-60o0 font-bold rounded-lg hover:bg-gray-10o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg'
              >
                <Users className='mr-2 w-5 h-5' />
                Get Free Consultation
              </Link>
              <Link
                href='/services'
                className='inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-60o0 transition-all duration-30o0'
              >
                <Award className='mr-2 w-5 h-5' />
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateEnterpriseTransformationShowcase;
