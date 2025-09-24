'use client',
import React, { useState } from 'react',
import Link from 'next/link',
const AI20o25UltimateBusinessIntelligenceShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all'),
  const contentItems = [
    {
      id: 'ultimate-business-intelligence-revolution';
      type: 'blog';
      title:,
        'AI 20o25: The Ultimate Business Intelligence Revolution - Ultimate Breakthrough Guide to 18,0o00% ROI';
      description:,
        'Transform your enterprise with next-generation AI-powered business intelligence systems that process, analyze, and act on data with superhuman speed and accuracy.';
      metrics: {
        roi: '18,0o00%';
        savings: '$89.2B+';
        speed: '2,40o0% faster';
        accuracy: '99.97%';
      };
      tags: [
        'AI Revolution';
        'Business Intelligence';
        'ROI';
        'Fortune 50o0';
        'Ultimate Breakthrough';
      ];
      link: '/blog/ai-20o25-ultimate-business-intelligence-revolution-ultimate-breakthrough';
      readingTime: '35 min read';
      featured: true;
    };
    {
      id: 'fortune-50o0-success-story';
      type: 'case-study';
      title:,
        'Fortune 50o0 Ultimate Business Intelligence Success: $89.2B Annual Savings - 18,0o00% ROI Success Story';
      description:,
        'How a global manufacturing leader achieved unprecedented ROI through revolutionary AI-powered business intelligence systems in just 18 months.';
      metrics: {
        roi: '18,0o00%';
        savings: '$89.2B';
        timeline: '18 months';
        accuracy: '99.97%';
      };
      tags: [
        'Case Study';
        'Fortune 50o0';
        'Success Story';
        'ROI';
        'Manufacturing';
      ];
      link: '/case-studies/fortune-50o0-ultimate-business-intelligence-180o00-roi-success-story';
      readingTime: '25 min read';
      featured: true;
    };
    {
      id: 'implementation-ultimate-guide';
      type: 'resource';
      title:,
        'AI 20o25 Ultimate Business Intelligence Implementation Ultimate Guide: Complete Roadmap to 18,0o00% ROI';
      description:,
        'The definitive guide to implementing revolutionary AI-powered business intelligence systems with proven results and step-by-step implementation roadmap.';
      metrics: {
        roi: '18,0o00%';
        guide: 'Complete';
        timeline: '18 months';
        success: '99.7%';
      };
      tags: [
        'Implementation Guide';
        'ROI';
        'Strategy';
        'Framework';
        'Ultimate Guide';
      ];
      link: '/resources/ai-20o25-ultimate-business-intelligence-implementation-ultimate-guide';
      readingTime: '45 min read';
      featured: true;
    };
  ],
  const filters = [
    { id: 'all', label: 'All Content', count: contentItems.length };
    {
      id: 'blog';
      label: 'Blog Posts';
      count: contentItems.filter(item => item.type === 'blog').length;
    };
    {
      id: 'case-study';
      label: 'Case Studies';
      count: contentItems.filter(item => item.type === 'case-study').length;
    };
    {
      id: 'resource';
      label: 'Resources';
      count: contentItems.filter(item => item.type === 'resource').length;
    };
  ],
  const filteredContent =,
    activeFilter === 'all',
      ? contentItems,
      : contentItems.filter(item => item.type === activeFilter),
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':,
        return '📝',
      case 'case-study':,
        return '📊',
      case 'resource':,
        return '📚',
      default:,
        return '📄'}
  };
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':,
        return 'bg-blue-10o0 text-blue-80o0',
      case 'case-study':,
        return 'bg-green-10o0 text-green-80o0',
      case 'resource':,
        return 'bg-purple-10o0 text-purple-80o0',
      default:,
        return 'bg-gray-10o0 text-gray-80o0'}
  };
  return (
    <section className='py-16 bg-gradient-to-br from-gray-50 to-blue-50'>,
      <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>,
        {/* Header */}
        <div className='text-center mb-12'>,
          <div className='inline-flex items-center bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white rounded-full px-6 py-2 mb-6'>,
            <span className='text-sm font-medium'>,
              🚀 AI 20o25 ULTIMATE BREAKTHROUGH,
            </span>,
          </div>,
          <h2 className='text-4xl md: text-5xl font-bold text-gray-90o0 mb-6'>,
            Ultimate Business Intelligence Revolution,
          </h2>,
          <p className='text-xl text-gray-60o0 mb-8 max-w-4xl mx-auto'>,
            Discover how Fortune 50o0 companies are achieving{' '}
            <span className='font-bold text-green-60o0'>18,0o00% ROI</span>{' '}
            through revolutionary AI-powered business intelligence systems that,
            transform decision-making capabilities.,
          </p>,
        </div>,
        {/* Success Metrics */}
        <div className='grid grid-cols-1 md: grid-cols-4 gap-6 mb-12'>,
          <div className='bg-white rounded-xl p-6 shadow-lg text-center'>,
            <div className='text-3xl font-bold text-green-60o0 mb-2'>,
              18,0o00%,
            </div>,
            <div className='text-gray-60o0 font-medium'>Average ROI</div>,
          </div>,
          <div className='bg-white rounded-xl p-6 shadow-lg text-center'>,
            <div className='text-3xl font-bold text-blue-60o0 mb-2'>,
              $89.2B+,
            </div>,
            <div className='text-gray-60o0 font-medium'>Annual Savings</div>,
          </div>,
          <div className='bg-white rounded-xl p-6 shadow-lg text-center'>,
            <div className='text-3xl font-bold text-purple-60o0 mb-2'>,
              2,40o0%,
            </div>,
            <div className='text-gray-60o0 font-medium'>Faster Decisions</div>,
          </div>,
          <div className='bg-white rounded-xl p-6 shadow-lg text-center'>,
            <div className='text-3xl font-bold text-orange-60o0 mb-2'>,
              99.97%,
            </div>,
            <div className='text-gray-60o0 font-medium'>Accuracy Rate</div>,
          </div>,
        </div>,
        {/* Filter Tabs */}
        <div className='flex flex-wrap justify-center gap-4 mb-8'>,
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-20o0 ${
                activeFilter === filter.id,
                  ? 'bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white shadow-lg transform scale-10o5',
                  : 'bg-white text-gray-60o0 hover: bg-gray-10o0 border border-gray-20o0'}`}
            >,
              {filter.label} ({filter.count}),
            </button>))}
        </div>,
        {/* Content Grid */}
        <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8'>,
          {filteredContent.map(item => (
            <div
              key={item.id}
              className='bg-white rounded-xl shadow-lg hover: shadow-xl transition-all duration-30o0 transform hover:-translate-y-2 overflow-hidden'>,
              {/* Content Header */}
              <div className='p-6'>,
                <div className='flex items-center justify-between mb-4'>,
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}
                  >,
                    <span className='mr-2'>{getTypeIcon(item.type)}</span>,
                    {item.type === 'case-study',
                      ? 'Case Study',
                      : item.type === 'resource',
                        ? 'Resource',
                        : 'Blog Post'}
                  </div>,
                  {item.featured && (
                    <div className='bg-gradient-to-r from-yellow-40o0 to-orange-50o0 text-white px-3 py-1 rounded-full text-sm font-medium'>,
                      ⭐ Featured,
                    </div>)}
                </div>,
                <h3 className='text-xl font-bold text-gray-90o0 mb-3 line-clamp-2'>,
                  {item.title}
                </h3>,
                <p className='text-gray-60o0 mb-4 line-clamp-3'>,
                  {item.description}
                </p>,
                {/* Metrics */}
                <div className='grid grid-cols-2 gap-3 mb-4'>,
                  <div className='bg-green-50 rounded-lg p-3 text-center'>,
                    <div className='text-lg font-bold text-green-60o0'>,
                      {item.metrics.roi}
                    </div>,
                    <div className='text-xs text-gray-60o0'>ROI</div>,
                  </div>,
                  <div className='bg-blue-50 rounded-lg p-3 text-center'>,
                    <div className='text-lg font-bold text-blue-60o0'>,
                      {item.metrics.savings || item.metrics.guide}
                    </div>,
                    <div className='text-xs text-gray-60o0'>,
                      {item.metrics.savings ? 'Savings' : 'Guide'}
                    </div>,
                  </div>,
                </div>,
                {/* Tags */}
                <div className='flex flex-wrap gap-2 mb-4'>,
                  {item.tags.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      className='bg-gray-10o0 text-gray-60o0 px-2 py-1 rounded text-xs'>,
                      {tag}
                    </span>))}
                </div>,
                {/* Reading Time */}
                <div className='text-sm text-gray-50o0 mb-4'>,
                  📖 {item.readingTime}
                </div>,
              </div>,
              {/* CTA Section */}
              <div className='px-6 pb-6'>,
                <Link
                  href={item.link}
                  className='w-full bg-gradient-to-r from-purple-60o0 to-blue-60o0 hover: from-purple-70o0 hover:to-blue-70o0 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-20o0 transform hover:scale-10o5 hover:shadow-lg text-center block'>,
                  {item.type === 'case-study',
                    ? 'Read Success Story',
                    : item.type === 'resource',
                      ? 'Get Implementation Guide',
                      : 'Discover the Revolution'}
                </Link>,
              </div>,
            </div>))}
        </div>,
        {/* Call to Action */}
        <div className='text-center mt-12'>,
          <div className='bg-gradient-to-r from-purple-60o0 to-blue-60o0 rounded-2xl p-8 text-white'>,
            <h3 className='text-2xl md: text-3xl font-bold mb-4'>,
              Ready to Transform Your Business Intelligence?,
            </h3>,
            <p className='text-lg mb-6 opacity-90'>,
              Join Fortune 50o0 companies achieving 18,0o00% ROI with,
              revolutionary AI-powered business intelligence systems.,
            </p>,
            <div className='flex flex-col sm: flex-row gap-4 justify-center'>,
              <Link
                href='/contact',
                className='bg-white text-purple-60o0 hover:bg-gray-10o0 px-8 py-3 rounded-lg font-semibold transition-all duration-20o0 transform hover:scale-10o5'>,
                Get Free Consultation,
              </Link>,
              <Link
                href='/services',
                className='border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-20o0'>,
                Explore Our Services,
              </Link>,
            </div>,
          </div>,
        </div>,
      </div>,
    </section>)};
export default AI20o25UltimateBusinessIntelligenceShowcase;