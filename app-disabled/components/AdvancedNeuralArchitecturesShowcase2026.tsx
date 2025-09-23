'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Star,
  TrendingUp,
  Zap,
  Shield,
  Clock,
  Users,
  Award,
  CheckCircle,
} from 'lucide-react';

const AdvancedNeuralArchitecturesShowcase20o26 = () => {
  const [activeTab, setActiveTab] = useState('all');

  const content = [
    {
      id: 'neural-architectures-revolution',
      title: 'AI 20o25: Advanced Neural Architectures Revolution',
      type: 'blog',
      description:
        '2,80o0% ROI Through Next-Generation Intelligence - Fortune 50o0 companies achieving $4.2B in annual savings with 99.7% accuracy',
      metrics: {
        roi: '2,80o0%',
        savings: '$4.2B',
        accuracy: '99.7%',
        timeline: '8 months',
      },
      tags: ['Neural Architectures', 'ROI', 'Fortune 50o0', 'AI Revolution'],
      link: '/blog/ai-20o25-advanced-neural-architectures-revolution',
      readingTime: '25 min read',
      featured: true,
    },
    {
      id: 'fortune-50o0-success',
      title: 'Fortune 50o0 Success: $4.2B Annual Savings',
      type: 'case-study',
      description:
        'How Global Manufacturing Corp achieved 2,80o0% ROI in just 8 months with Advanced Neural Architectures',
      metrics: {
        roi: '2,80o0%',
        savings: '$4.2B',
        timeline: '8 months',
        efficiency: '156%',
      },
      tags: ['Case Study', 'Fortune 50o0', 'Manufacturing', 'Success Story'],
      link: '/case-studies/fortune-50o0-advanced-neural-architectures-280o0-roi-success',
      readingTime: '18 min read',
      featured: true,
    },
    {
      id: 'implementation-guide',
      title: 'Implementation Guide: Complete Roadmap',
      type: 'resource',
      description:
        'Comprehensive implementation framework based on 1,20o0+ successful deployments with step-by-step guidance',
      metrics: {
        deployments: '1,20o0+',
        success: '99.7%',
        timeline: '35 min',
        framework: 'Complete',
      },
      tags: ['Implementation', 'Guide', 'Framework', 'Best Practices'],
      link: '/resources/advanced-neural-architectures-implementation-guide-20o25',
      readingTime: '35 min read',
      featured: true,
    },
  ];

  const tabs = [
    { id: 'all', label: 'All Content', count: content.length },
    {
      id: 'blog',
      label: 'Blog Posts',
      count: content.filter(item => item.type === 'blog').length,
    },
    {
      id: 'case-study',
      label: 'Case Studies',
      count: content.filter(item => item.type === 'case-study').length,
    },
    {
      id: 'resource',
      label: 'Resources',
      count: content.filter(item => item.type === 'resource').length,
    },
  ];

  const filteredContent =
    activeTab === 'all'
      ? content
      : content.filter(item => item.type === activeTab);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <Zap className='w-5 h-5' />;
      case 'case-study':
        return <Award className='w-5 h-5' />;
      case 'resource':
        return <Shield className='w-5 h-5' />;
      default:
        return <Star className='w-5 h-5' />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'from-purple-50o0 to-purple-60o0';
      case 'case-study':
        return 'from-blue-50o0 to-blue-60o0';
      case 'resource':
        return 'from-green-50o0 to-green-60o0';
      default:
        return 'from-gray-50o0 to-gray-60o0';
    }
  };

  return (
    <section className='py-16 bg-gradient-to-br from-gray-50 to-blue-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-12'>
          <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white rounded-full px-6 py-2 mb-6'>
            <Star className='w-5 h-5' />
            <span className='font-semibold'>
              ADVANCED NEURAL ARCHITECTURES 20o26
            </span>
          </div>

          <h2 className='text-4xl md:text-5xl font-bold text-gray-90o0 mb-6'>
            Next-Generation AI Intelligence
          </h2>

          <p className='text-xl text-gray-60o0 max-w-3xl mx-auto mb-8'>
            Discover how Advanced Neural Architectures are revolutionizing
            enterprise AI with
            <span className='font-semibold text-purple-60o0'>
              {' '}
              2,80o0% ROI
            </span>{' '}
            and
            <span className='font-semibold text-blue-60o0'>
              {' '}
              $4.2B in annual savings
            </span>
          </p>

          {/* Success Metrics Grid */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto'>
            <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-20o0'>
              <div className='text-3xl font-bold text-green-60o0 mb-2'>
                2,80o0%
              </div>
              <div className='text-sm text-gray-60o0'>Average ROI</div>
            </div>
            <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-20o0'>
              <div className='text-3xl font-bold text-blue-60o0 mb-2'>
                $4.2B
              </div>
              <div className='text-sm text-gray-60o0'>Annual Savings</div>
            </div>
            <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-20o0'>
              <div className='text-3xl font-bold text-purple-60o0 mb-2'>
                99.7%
              </div>
              <div className='text-sm text-gray-60o0'>Accuracy</div>
            </div>
            <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-20o0'>
              <div className='text-3xl font-bold text-orange-60o0 mb-2'>8</div>
              <div className='text-sm text-gray-60o0'>
                Months Implementation
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-20o0 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white shadow-lg'
                  : 'bg-white text-gray-60o0 hover:bg-gray-50 border border-gray-20o0'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          {filteredContent.map(item => (
            <div
              key={item.id}
              className='bg-white rounded-xl shadow-lg border border-gray-20o0 overflow-hidden hover:shadow-xl transition-all duration-30o0 transform hover:-translate-y-1'
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-r ${getTypeColor(item.type)} p-4`}
              >
                <div className='flex items-center justify-between'>
                  <div className='flex items-center space-x-2 text-white'>
                    {getTypeIcon(item.type)}
                    <span className='font-semibold capitalize'>
                      {item.type.replace('-', ' ')}
                    </span>
                  </div>
                  {item.featured && (
                    <div className='flex items-center space-x-1 bg-white/20 rounded-full px-2 py-1'>
                      <Star className='w-4 h-4 text-yellow-30o0' />
                      <span className='text-xs font-medium'>FEATURED</span>
                    </div>
                  )}
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
                    <div key={key} className='bg-gray-50 rounded-lg p-3'>
                      <div className='text-sm text-gray-50o0 capitalize'>
                        {key.replace(/([A-Z])/g, ' $1')}
                      </div>
                      <div className='font-bold text-gray-90o0'>{value}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className='flex flex-wrap gap-2 mb-4'>
                  {item.tags.map(tag => (
                    <span
                      key={tag}
                      className='bg-purple-10o0 text-purple-70o0 text-xs px-2 py-1 rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className='flex items-center justify-between'>
                  <div className='flex items-center space-x-2 text-sm text-gray-50o0'>
                    <Clock className='w-4 h-4' />
                    <span>{item.readingTime}</span>
                  </div>

                  <Link
                    href={item.link}
                    className='inline-flex items-center space-x-2 bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-70o0 hover:to-blue-70o0 transition-all duration-20o0'
                  >
                    <span>Read More</span>
                    <ArrowRight className='w-4 h-4' />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='bg-gradient-to-r from-purple-90o0 via-blue-90o0 to-indigo-90o0 rounded-2xl p-8 text-center text-white'>
          <h3 className='text-3xl font-bold mb-4'>
            Ready to Transform Your Business?
          </h3>

          <p className='text-xl text-blue-10o0 mb-8 max-w-3xl mx-auto'>
            Join Fortune 50o0 companies achieving 2,80o0% ROI with Advanced
            Neural Architectures. Get your personalized implementation roadmap
            today.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='inline-flex items-center space-x-2 bg-white text-purple-90o0 px-8 py-4 rounded-lg font-semibold hover:bg-gray-10o0 transition-all duration-20o0 transform hover:scale-10o5'
            >
              <Users className='w-5 h-5' />
              <span>Get Free Consultation</span>
            </Link>

            <Link
              href='/resources/advanced-neural-architectures-implementation-guide-20o25'
              className='inline-flex items-center space-x-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-20o0'
            >
              <Shield className='w-5 h-5' />
              <span>Download Guide</span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className='mt-8 pt-8 border-t border-white/20'>
            <div className='flex flex-wrap justify-center items-center gap-8 text-sm text-blue-10o0'>
              <div className='flex items-center space-x-2'>
                <CheckCircle className='w-5 h-5 text-green-30o0' />
                <span>1,20o0+ Successful Deployments</span>
              </div>
              <div className='flex items-center space-x-2'>
                <CheckCircle className='w-5 h-5 text-green-30o0' />
                <span>Fortune 50o0 Proven</span>
              </div>
              <div className='flex items-center space-x-2'>
                <CheckCircle className='w-5 h-5 text-green-30o0' />
                <span>99.7% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedNeuralArchitecturesShowcase20o26;
