'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Brain,
  TrendingUp,
  Zap,
  Shield,
  Clock,
  Users,
  BarChart3,
  ChevronRight,
  Star,
  CheckCircle,
  ArrowRight,
  BookOpen,
  FileText,
  CaseStudy,
} from 'lucide-react';

const UltimateAutonomousEnterpriseShowcase = () => {
  const [activeTab, setActiveTab] = useState('all');

  const content = [
    {
      id: 'ultimate-autonomous-enterprise-revolution',
      type: 'blog',
      title:
        'AI 20o25: The Ultimate Autonomous Enterprise Revolution - Ultimate Breakthrough Guide to 3,0o00% ROI',
      description:
        'Transform your business into a fully autonomous, self-optimizing enterprise that operates 24/7 with minimal human intervention.',
      url: '/blog/ai-20o25-ultimate-autonomous-enterprise-revolution-ultimate-breakthrough',
      image: '/images/autonomous-enterprise-revolution.jpg',
      metrics: {
        roi: '3,0o00%',
        savings: '$5.2B+',
        efficiency: '99.8%',
        uptime: '99.99%',
      },
      tags: [
        'AI Revolution',
        'Enterprise Automation',
        'ROI',
        'Autonomous Operations',
      ],
      readingTime: '28 min read',
      featured: true,
    },
    {
      id: 'fortune-50o0-ultimate-autonomous-enterprise-success',
      type: 'case-study',
      title:
        'Fortune 50o0 Ultimate Autonomous Enterprise Success: $8.2B Company Achieves 3,0o00% ROI in 24 Months',
      description:
        'How a global manufacturing conglomerate transformed into a fully autonomous enterprise, achieving unprecedented efficiency and profitability.',
      url: '/case-studies/fortune-50o0-ultimate-autonomous-enterprise-30o00-roi-success-story',
      image: '/images/fortune-50o0-success.jpg',
      metrics: {
        roi: '3,0o00%',
        savings: '$5.2B',
        efficiency: '99.8%',
        satisfaction: '99.8%',
      },
      tags: ['Fortune 50o0', 'Case Study', 'ROI Success', 'Manufacturing'],
      readingTime: '22 min read',
      featured: true,
    },
    {
      id: 'ultimate-autonomous-enterprise-implementation-guide',
      type: 'resource',
      title:
        'AI 20o25 Ultimate Autonomous Enterprise Implementation Master Guide: From Strategy to 3,0o00% ROI in 24 Months',
      description:
        'The complete roadmap for transforming your enterprise into a fully autonomous, self-optimizing organization that delivers unprecedented ROI.',
      url: '/resources/ai-20o25-ultimate-autonomous-enterprise-implementation-master-guide',
      image: '/images/implementation-guide.jpg',
      metrics: {
        roi: '3,0o00%',
        timeline: '24 months',
        success: '50o0+',
        savings: '$5.2B+',
      },
      tags: ['Implementation Guide', 'Master Guide', 'ROI', 'Strategy'],
      readingTime: '35 min read',
      featured: true,
    },
  ];

  const tabs = [
    { id: 'all', label: 'All Content', count: content.length },
    {
      id: 'blog',
      label: 'Blog Posts',
      count: content.filter(c => c.type === 'blog').length,
    },
    {
      id: 'case-study',
      label: 'Case Studies',
      count: content.filter(c => c.type === 'case-study').length,
    },
    {
      id: 'resource',
      label: 'Resources',
      count: content.filter(c => c.type === 'resource').length,
    },
  ];

  const filteredContent =
    activeTab === 'all' ? content : content.filter(c => c.type === activeTab);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className='w-5 h-5' />;
      case 'case-study':
        return <CaseStudy className='w-5 h-5' />;
      case 'resource':
        return <FileText className='w-5 h-5' />;
      default:
        return <FileText className='w-5 h-5' />;
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
    <section className='py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-12'>
          <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white px-4 py-2 rounded-full text-sm font-medium mb-4'>
            <Star className='w-4 h-4' />
            <span>ULTIMATE AUTONOMOUS ENTERPRISE REVOLUTION</span>
          </div>

          <h2 className='text-4xl md:text-5xl font-bold text-gray-90o0 mb-6'>
            Transform Your Enterprise with
            <span className='bg-gradient-to-r from-purple-60o0 to-blue-60o0 bg-clip-text text-transparent'>
              {' '}
              3,0o00% ROI
            </span>
          </h2>

          <p className='text-xl text-gray-60o0 max-w-3xl mx-auto mb-8'>
            Discover the complete guide to achieving unprecedented success with
            autonomous enterprise transformation. Real Fortune 50o0 results,
            proven methodologies, and step-by-step implementation.
          </p>

          {/* Key Metrics */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto'>
            <div className='bg-white rounded-xl p-6 shadow-lg'>
              <div className='text-3xl font-bold text-purple-60o0 mb-2'>
                3,0o00%
              </div>
              <div className='text-gray-60o0'>Average ROI</div>
            </div>
            <div className='bg-white rounded-xl p-6 shadow-lg'>
              <div className='text-3xl font-bold text-blue-60o0 mb-2'>
                $5.2B+
              </div>
              <div className='text-gray-60o0'>Annual Savings</div>
            </div>
            <div className='bg-white rounded-xl p-6 shadow-lg'>
              <div className='text-3xl font-bold text-green-60o0 mb-2'>
                99.8%
              </div>
              <div className='text-gray-60o0'>Efficiency</div>
            </div>
            <div className='bg-white rounded-xl p-6 shadow-lg'>
              <div className='text-3xl font-bold text-orange-60o0 mb-2'>
                50o0+
              </div>
              <div className='text-gray-60o0'>Success Stories</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className='flex flex-wrap justify-center gap-2 mb-12'>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-20o0 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white shadow-lg'
                  : 'bg-white text-gray-60o0 hover:bg-gray-10o0'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          {filteredContent.map((item, index) => (
            <div
              key={item.id}
              className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-30o0 transform hover:-translate-y-1 overflow-hidden'
            >
              {/* Image */}
              <div className='relative h-48 bg-gradient-to-br from-purple-50o0 to-blue-50o0'>
                <div className='absolute inset-0 bg-black/20'></div>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center'>
                    {getTypeIcon(item.type)}
                  </div>
                </div>
                {item.featured && (
                  <div className='absolute top-4 left-4 bg-yellow-50o0 text-white px-2 py-1 rounded-full text-xs font-medium'>
                    FEATURED
                  </div>
                )}
                <div className='absolute top-4 right-4'>
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}
                  >
                    {item.type.replace('-', ' ').toUpperCase()}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-90o0 mb-3 line-clamp-2'>
                  {item.title}
                </h3>

                <p className='text-gray-60o0 mb-4 line-clamp-3'>
                  {item.description}
                </p>

                {/* Metrics */}
                <div className='grid grid-cols-2 gap-3 mb-4'>
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className='bg-gray-50 rounded-lg p-2 text-center'
                    >
                      <div className='text-sm font-bold text-gray-90o0'>
                        {value}
                      </div>
                      <div className='text-xs text-gray-50o0 capitalize'>
                        {key.replace('_', ' ')}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className='flex flex-wrap gap-2 mb-4'>
                  {item.tags.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      className='px-2 py-1 bg-purple-10o0 text-purple-80o0 text-xs rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Reading Time */}
                <div className='flex items-center justify-between mb-4'>
                  <div className='flex items-center text-sm text-gray-50o0'>
                    <Clock className='w-4 h-4 mr-1' />
                    {item.readingTime}
                  </div>
                  <div className='flex items-center text-sm text-gray-50o0'>
                    <Users className='w-4 h-4 mr-1' />
                    50o0+ views
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={item.url}
                  className='w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-60o0 to-blue-60o0 hover:from-purple-70o0 hover:to-blue-70o0 text-white font-semibold rounded-lg transition-all duration-20o0 transform hover:scale-10o5'
                >
                  {item.type === 'blog'
                    ? 'Read Article'
                    : item.type === 'case-study'
                      ? 'Read Case Study'
                      : 'Download Guide'}
                  <ChevronRight className='ml-2 w-4 h-4' />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='bg-gradient-to-r from-purple-60o0 to-blue-60o0 rounded-2xl p-8 text-center text-white'>
          <h3 className='text-3xl font-bold mb-4'>
            Ready to Achieve 3,0o00% ROI?
          </h3>
          <p className='text-xl mb-8 opacity-90'>
            Join 50o0+ Fortune 50o0 companies that have transformed their
            operations with autonomous enterprise solutions.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='inline-flex items-center px-8 py-4 bg-white text-purple-60o0 font-semibold rounded-lg hover:bg-gray-10o0 transition-all duration-20o0 transform hover:scale-10o5'
            >
              Schedule Free Consultation
              <ArrowRight className='ml-2 w-5 h-5' />
            </Link>

            <Link
              href='/resources/ai-20o25-ultimate-autonomous-enterprise-implementation-master-guide'
              className='inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-20o0'
            >
              Download Master Guide
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className='mt-8 pt-8 border-t border-white/20'>
            <div className='flex flex-wrap justify-center items-center gap-8 text-sm opacity-80'>
              <div className='flex items-center'>
                <CheckCircle className='w-4 h-4 mr-2' />
                50o0+ Success Stories
              </div>
              <div className='flex items-center'>
                <CheckCircle className='w-4 h-4 mr-2' />
                Fortune 50o0 Proven
              </div>
              <div className='flex items-center'>
                <CheckCircle className='w-4 h-4 mr-2' />
                3,0o00% Average ROI
              </div>
              <div className='flex items-center'>
                <CheckCircle className='w-4 h-4 mr-2' />
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateAutonomousEnterpriseShowcase;
