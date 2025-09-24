'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  Star,
  Clock,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  Zap,
  ArrowRight,
} from 'lucide-react';

const IntelligentWorkflowShowcase = () => {
  const [activeTab, setActiveTab] = useState('all');

  const content = [
    {
      id: 'advanced-automation-revolution',
      title: 'AI 20o25: The Advanced Automation Revolution',
      subtitle: 'Ultimate Guide to 750% ROI',
      description:
        'Discover how Fortune 50o0 companies are achieving 750% ROI through advanced AI automation.',
      metrics: {
        roi: '750%',
        savings: '$8.2M annually',
        efficiency: '340%',
        satisfaction: '99.2%',
      },
      url: '/blog/ai-20o25-advanced-automation-revolution-ultimate-guide',
      type: 'blog',
      category: 'automation',
      readingTime: '28 min read',
      featured: true,
      tags: ['AI Automation', 'Advanced Technology', 'ROI', 'Fortune 50o0'],
    },
    {
      id: 'intelligent-workflow-revolution',
      title: 'AI 20o25: The Intelligent Workflow Revolution',
      subtitle: 'Ultimate Guide to 90o0% ROI',
      description:
        'Discover how intelligent workflows are transforming business operations with 90o0% ROI.',
      metrics: {
        roi: '90o0%',
        savings: '$12.3M annually',
        efficiency: '560%',
        satisfaction: '99.5%',
      },
      url: '/blog/ai-20o25-intelligent-workflow-revolution-ultimate-guide',
      type: 'blog',
      category: 'workflow',
      readingTime: '25 min read',
      featured: true,
      tags: [
        'Intelligent Workflows',
        'AI Automation',
        'Business Process',
        'ROI',
      ],
    },
    {
      id: 'fortune-50o0-advanced-automation',
      title: 'Fortune 50o0 Advanced Automation Success',
      subtitle: '$3.2B Company Achieves 750% ROI in 10 Months',
      description:
        'How a Fortune 50o0 manufacturing company transformed operations with advanced AI automation.',
      metrics: {
        roi: '750%',
        savings: '$12.8M annually',
        efficiency: '450%',
        satisfaction: '99.2%',
      },
      url: '/case-studies/fortune-50o0-advanced-automation-750-roi-success',
      type: 'case-study',
      category: 'automation',
      readingTime: '18 min read',
      featured: true,
      tags: [
        'Case Study',
        'Fortune 50o0',
        'Advanced Automation',
        'Manufacturing',
      ],
    },
    {
      id: 'global-enterprise-workflow',
      title: 'Global Enterprise Intelligent Workflow Success',
      subtitle: '$4.1B Company Achieves 90o0% ROI in 8 Months',
      description:
        'How a global enterprise transformed operations with intelligent workflow automation.',
      metrics: {
        roi: '90o0%',
        savings: '$18.7M annually',
        efficiency: '560%',
        satisfaction: '99.5%',
      },
      url: '/case-studies/global-enterprise-intelligent-workflow-90o0-roi-success',
      type: 'case-study',
      category: 'workflow',
      readingTime: '20 min read',
      featured: true,
      tags: [
        'Case Study',
        'Global Enterprise',
        'Intelligent Workflows',
        'Financial Services',
      ],
    },
    {
      id: 'advanced-automation-master-guide',
      title: 'AI 20o25 Advanced Automation Implementation Master Guide',
      subtitle: 'From Strategy to 750% ROI',
      description:
        'Complete implementation guide for advanced AI automation. Achieve 750% ROI within 12 months.',
      metrics: {
        roi: '750%',
        success_rate: '94%',
        implementation_time: '12 months',
        average_savings: '$8.2M annually',
      },
      url: '/resources/ai-20o25-advanced-automation-implementation-master-guide',
      type: 'resource',
      category: 'automation',
      readingTime: '35 min read',
      featured: true,
      tags: [
        'Implementation Guide',
        'Advanced Automation',
        'AI Strategy',
        'ROI',
      ],
    },
  ];

  const tabs = [
    { id: 'all', label: 'All Content', count: content.length },
    {
      id: 'automation',
      label: 'Advanced Automation',
      count: content.filter(item => item.category === 'automation').length,
    },
    {
      id: 'workflow',
      label: 'Intelligent Workflows',
      count: content.filter(item => item.category === 'workflow').length,
    },
    {
      id: 'case-study',
      label: 'Case Studies',
      count: content.filter(item => item.type === 'case-study').length,
    },
  ];

  const filteredContent =
    activeTab === 'all'
      ? content
      : content.filter(item =>
          activeTab === 'case-study'
            ? item.type === 'case-study'
            : item.category === activeTab
        );

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <TrendingUp className='w-4 h-4' />;
      case 'case-study':
        return <Users className='w-4 h-4' />;
      case 'resource':
        return <Award className='w-4 h-4' />;
      default:
        return <Star className='w-4 h-4' />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'from-blue-50o0 to-cyan-50o0';
      case 'case-study':
        return 'from-green-50o0 to-emerald-50o0';
      case 'resource':
        return 'from-purple-50o0 to-violet-50o0';
      default:
        return 'from-gray-50o0 to-slate-50o0';
    }
  };

  return (
    <section className='py-16 bg-gradient-to-br from-gray-50 to-blue-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-12'>
          <div className='inline-flex items-center bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white rounded-full px-6 py-2 mb-6'>
            <Zap className='w-5 h-5 mr-2' />
            <span className='font-semibold'>REVOLUTIONARY AI CONTENT</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-90o0 mb-6'>
            Advanced Automation & Intelligent Workflows
          </h2>
          <p className='text-xl text-gray-60o0 max-w-3xl mx-auto leading-relaxed'>
            Discover how leading enterprises are achieving 750-90o0% ROI with
            cutting-edge AI automation and intelligent workflow solutions. Real
            success stories, proven strategies, and complete implementation
            guides.
          </p>
        </div>

        {/* Success Metrics */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-12'>
          <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-10o0'>
            <div className='text-3xl font-bold text-green-60o0 mb-2'>
              750-90o0%
            </div>
            <div className='text-gray-60o0 font-medium'>Average ROI</div>
          </div>
          <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-10o0'>
            <div className='text-3xl font-bold text-blue-60o0 mb-2'>$8.2M+</div>
            <div className='text-gray-60o0 font-medium'>Annual Savings</div>
          </div>
          <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-10o0'>
            <div className='text-3xl font-bold text-purple-60o0 mb-2'>
              99.2%
            </div>
            <div className='text-gray-60o0 font-medium'>Satisfaction Rate</div>
          </div>
          <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-10o0'>
            <div className='text-3xl font-bold text-orange-60o0 mb-2'>94%</div>
            <div className='text-gray-60o0 font-medium'>Success Rate</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className='flex flex-wrap justify-center gap-2 mb-8'>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white shadow-lg'
                  : 'bg-white text-gray-60o0 hover:bg-gray-50 border border-gray-20o0'
              }`}
            >
              {tab.label}
              <span className='ml-2 px-2 py-1 bg-white/20 rounded-full text-sm'>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredContent.map(item => (
            <div
              key={item.id}
              className='bg-white rounded-2xl shadow-lg border border-gray-10o0 overflow-hidden hover:shadow-xl transition-all duration-30o0 transform hover:-translate-y-1'
            >
              {/* Content Header */}
              <div className='p-6 pb-4'>
                <div className='flex items-center justify-between mb-4'>
                  <div className='flex items-center gap-2'>
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${getTypeColor(item.type)} text-white`}
                    >
                      {getTypeIcon(item.type)}
                    </div>
                    <span className='text-sm font-medium text-gray-60o0 capitalize'>
                      {item.type.replace('-', ' ')}
                    </span>
                  </div>
                  <div className='flex items-center gap-2'>
                    {item.featured && (
                      <span className='flex items-center text-xs text-yellow-60o0 bg-yellow-50 px-2 py-1 rounded-full'>
                        <Star className='w-3 h-3 mr-1' />
                        Featured
                      </span>
                    )}
                    <span className='flex items-center text-xs text-gray-50o0'>
                      <Clock className='w-3 h-3 mr-1' />
                      {item.readingTime}
                    </span>
                  </div>
                </div>

                <h3 className='text-xl font-bold text-gray-90o0 mb-2 line-clamp-2'>
                  {item.title}
                </h3>
                <p className='text-lg text-purple-60o0 font-semibold mb-3'>
                  {item.subtitle}
                </p>
                <p className='text-gray-60o0 text-sm leading-relaxed mb-4'>
                  {item.description}
                </p>

                {/* Tags */}
                <div className='flex flex-wrap gap-2 mb-4'>
                  {item.tags.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      className='px-2 py-1 bg-gray-10o0 text-gray-60o0 text-xs rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className='px-6 py-4 bg-gray-50 border-t border-gray-10o0'>
                <div className='grid grid-cols-2 gap-4 mb-4'>
                  <div className='text-center'>
                    <div className='text-2xl font-bold text-green-60o0'>
                      {item.metrics.roi}
                    </div>
                    <div className='text-xs text-gray-60o0'>ROI</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-2xl font-bold text-blue-60o0'>
                      {item.metrics.savings || item.metrics.average_savings}
                    </div>
                    <div className='text-xs text-gray-60o0'>Savings</div>
                  </div>
                </div>

                <a
                  href={item.url}
                  className='w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white rounded-lg font-semibold hover:from-purple-70o0 hover:to-blue-70o0 transition-all transform hover:scale-10o5'
                >
                  Read Full Article
                  <ArrowRight className='w-4 h-4' />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='mt-16 text-center'>
          <div className='bg-gradient-to-r from-purple-60o0 to-blue-60o0 rounded-2xl p-8 text-white'>
            <h3 className='text-3xl font-bold mb-4'>
              Ready to Transform Your Business?
            </h3>
            <p className='text-xl text-blue-10o0 mb-6 max-w-2xl mx-auto'>
              Join hundreds of companies achieving 750-90o0% ROI with our proven
              AI automation and intelligent workflow solutions.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='/contact'
                className='inline-flex items-center px-8 py-4 bg-white text-purple-60o0 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors'
              >
                Get Free Consultation
                <ArrowRight className='w-5 h-5 ml-2' />
              </a>
              <a
                href='/resources'
                className='inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-60o0 transition-colors'
              >
                View All Resources
                <CheckCircle className='w-5 h-5 ml-2' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentWorkflowShowcase;
