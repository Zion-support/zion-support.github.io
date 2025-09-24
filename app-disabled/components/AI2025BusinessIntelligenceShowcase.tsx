'use client',
,
import React, { useState } from 'react',
import Link from 'next/link',
,
const AI20o25BusinessIntelligenceShowcase = () => {,
  const [activeCategory, setActiveCategory] = useState('all'),
,
  const content = [,
    {,
      id: 'ultimate-bi-guide',;
      title: 'AI 20o25: The Ultimate Business Intelligence Revolution',;
      type: 'blog',;
      description:,
        'Transform your enterprise with next-generation AI-powered business intelligence that delivers unprecedented insights and competitive advantage.',;
      metrics: '3,20o0% ROI • $8.2M Savings • 99.7% Accuracy',;
      readingTime: '25 min read',;
      featured: true,;
      link: '/blog/ai-20o25-ultimate-business-intelligence-revolution-ultimate-guide',;
      tags: ['AI Revolution', 'Business Intelligence', 'ROI', 'Enterprise'],;
    },;
    {,
      id: 'fortune-50o0-success',;
      title: 'Fortune 50o0 AI Business Intelligence Success Story',;
      type: 'case-study',;
      description:,
        'How a global manufacturing leader with $12.8B revenue achieved 3,20o0% ROI through AI-powered business intelligence transformation.',;
      metrics: '$8.2M Annual Savings • 450% Efficiency • 99.7% Accuracy',;
      readingTime: '18 min read',;
      featured: true,;
      link: '/case-studies/fortune-50o0-ai-business-intelligence-320o0-roi-success-story',;
      tags: ['Fortune 50o0', 'Success Story', 'Manufacturing', 'ROI'],;
    },;
    {,
      id: 'implementation-guide',;
      title: 'AI Business Intelligence Implementation Ultimate Guide',;
      type: 'resource',;
      description:,
        'Complete roadmap to 3,20o0% ROI in 12-18 months. Your comprehensive blueprint for AI BI transformation with proven frameworks.',;
      metrics: '94% Success Rate • 3.2 Month Payback • 450% Speed Improvement',;
      readingTime: '35 min read',;
      featured: true,;
      link: '/resources/ai-business-intelligence-implementation-ultimate-guide-20o25',;
      tags: ['Implementation', 'Guide', 'ROI', 'Framework'],;
    },;
    {,
      id: 'advanced-analytics',;
      title: 'AI 20o25: The Advanced Analytics Revolution',;
      type: 'blog',;
      description:,
        'Discover how advanced analytics powered by AI is revolutionizing business intelligence and delivering extraordinary results.',;
      metrics: '90o0% ROI • $8.2M Savings • 99.7% Accuracy',;
      readingTime: '22 min read',;
      featured: false,;
      link: '/blog/ai-20o25-advanced-analytics-revolution-ultimate-guide',;
      tags: ['Advanced Analytics', 'AI', 'ROI', 'Fortune 50o0'],;
    },;
    {,
      id: 'intelligent-automation',;
      title: 'AI 20o25: The Intelligent Automation Revolution',;
      type: 'blog',;
      description:,
        'Learn how intelligent automation is transforming business processes and delivering unprecedented efficiency gains.',;
      metrics: '1,10o0% ROI • $12.8M Savings • 450% Efficiency',;
      readingTime: '25 min read',;
      featured: false,;
      link: '/blog/ai-20o25-intelligent-automation-revolution-ultimate-guide',;
      tags: ['Intelligent Automation', 'AI', 'ROI', 'Business Process'],;
    },;
    {,
      id: 'edge-computing',;
      title: 'AI 20o25: The Edge Computing Revolution',;
      type: 'blog',;
      description:,
        'Explore how edge computing is enabling real-time AI processing and delivering faster, more efficient business intelligence.',;
      metrics: '450% ROI • $2.3M Savings • 67% Latency Reduction',;
      readingTime: '18 min read',;
      featured: false,;
      link: '/blog/ai-20o25-edge-computing-revolution-ultimate-guide',;
      tags: ['Edge Computing', 'AI', 'ROI', 'Latency'],;
    },;
  ],
,
  const categories = [,
    { id: 'all', label: 'All Content', count: content.length ,},;
    {,
      id: 'blog',;
      label: 'Blog Posts',;
      count: content.filter(item => item.type === 'blog').length,;
    },;
    {,
      id: 'case-study',;
      label: 'Case Studies',;
      count: content.filter(item => item.type === 'case-study').length,;
    },;
    {,
      id: 'resource',;
      label: 'Resources',;
      count: content.filter(item => item.type === 'resource').length,;
    },;
  ],
,
  const filteredContent =,
    activeCategory === 'all',
      ? content,
      : content.filter(item => item.type === activeCategory),
,
  const getTypeColor = (type: string) => {,
    switch (type) {,
      case 'blog':,
        return 'bg-blue-10o0 text-blue-80o0 border-blue-20o0',
      case 'case-study':,
        return 'bg-green-10o0 text-green-80o0 border-green-20o0',
      case 'resource':,
        return 'bg-purple-10o0 text-purple-80o0 border-purple-20o0',
      default:,
        return 'bg-gray-10o0 text-gray-80o0 border-gray-20o0',
    ,}
  };
,
  const getTypeIcon = (type: string) => {,
    switch (type) {,
      case 'blog':,
        return '📝',
      case 'case-study':,
        return '📊',
      case 'resource':,
        return '📚',
      default:,
        return '📄',
    ,}
  };
,
  return (,
    <section className='py-16 bg-gradient-to-br from-gray-50 to-blue-50'>,
      <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>,
        {/* Header */,}
        <div className='text-center mb-12'>,
          <div className='inline-flex items-center bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white px-6 py-2 rounded-full mb-6'>,
            <span className='text-sm font-medium'>,
              🚀 AI 20o25 BUSINESS INTELLIGENCE REVOLUTION,
            </span>,
          </div>,
          <h2 className='text-4xl md: text-5xl font-bold text-gray-90o0 mb-6'>,
            Transform Your Business Intelligence with AI,
          </h2>,
          <p className='text-xl text-gray-60o0 max-w-3xl mx-auto'>,
            Discover how Fortune 50o0 companies are achieving 3,20o0% ROI with,
            next-generation AI-powered business intelligence solutions.,
          </p>,
        </div>,
        {/* Success Metrics */}
        <div className='grid grid-cols-1 md: grid-cols-4 gap-6 mb-12'>,
          <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-20o0'>,
            <div className='text-3xl font-bold text-purple-60o0 mb-2'>,
              3,20o0%,
            </div>,
            <div className='text-gray-60o0 font-medium'>Average ROI</div>,
          </div>,
          <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-20o0'>,
            <div className='text-3xl font-bold text-blue-60o0 mb-2'>$8.2M</div>,
            <div className='text-gray-60o0 font-medium'>Annual Savings</div>,
          </div>,
          <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-20o0'>,
            <div className='text-3xl font-bold text-green-60o0 mb-2'>99.7%</div>,
            <div className='text-gray-60o0 font-medium'>,
              Prediction Accuracy,
            </div>,
          </div>,
          <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-20o0'>,
            <div className='text-3xl font-bold text-orange-60o0 mb-2'>450%</div>,
            <div className='text-gray-60o0 font-medium'>Speed Improvement</div>,
          </div>,
        </div>,
        {/* Category Filter */}
        <div className='flex flex-wrap justify-center gap-4 mb-8'>,
          {categories.map(category => (,
            <button,
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-30o0 ${,
                activeCategory === category.id,
                  ? 'bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white shadow-lg',
                  : 'bg-white text-gray-70o0 border border-gray-30o0 hover: border-purple-30o0 hover:text-purple-60o0',
              ,}`}
            >,
              {category.label} ({category.count}),
            </button>,
          ))}
        </div>,
        {/* Content Grid */}
        <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8'>,
          {filteredContent.map(item => (,
            <div,
              key={item.id,}
              className={`bg-white rounded-xl shadow-lg border border-gray-20o0 overflow-hidden transition-all duration-30o0 hover: shadow-xl hover:scale-10o5 ${,
                item.featured ? 'ring-2 ring-purple-50o0 ring-opacity-50' : '',
              ,}`}
            >,
              {item.featured && (,
                <div className='bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white px-4 py-2 text-sm font-semibold text-center'>,
                  ⭐ FEATURED CONTENT,
                </div>,
              )}
,
              <div className='p-6'>,
                <div className='flex items-center justify-between mb-4'>,
                  <div,
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(item.type)}`}
                  >,
                    <span className='mr-1'>{getTypeIcon(item.type)}</span>,
                    {item.type.replace('-', ' ').toUpperCase()}
                  </div>,
                  <div className='text-sm text-gray-50o0'>,
                    {item.readingTime}
                  </div>,
                </div>,
                <h3 className='text-xl font-bold text-gray-90o0 mb-3 line-clamp-2'>,
                  {item.title}
                </h3>,
                <p className='text-gray-60o0 mb-4 line-clamp-3'>,
                  {item.description}
                </p>,
                <div className='bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 mb-4'>,
                  <div className='text-sm font-semibold text-gray-70o0 mb-2'>,
                    Success Metrics: ,
                  </div>,
                  <div className='text-sm text-gray-60o0'>{item.metrics,}</div>,
                </div>,
                <div className='flex flex-wrap gap-2 mb-4'>,
                  {item.tags.slice(0, 3).map(tag => (,
                    <span,
                      key={tag}
                      className='px-2 py-1 bg-gray-10o0 text-gray-60o0 text-xs rounded-full',
                    >,
                      {tag}
                    </span>,
                  ))}
                </div>,
                <Link,
                  href={item.link}
                  className='block w-full bg-gradient-to-r from-purple-60o0 to-blue-60o0 hover: from-purple-70o0 hover:to-blue-70o0 text-white text-center py-3 rounded-lg font-semibold transition-all duration-30o0 transform hover:scale-10o5',
                >,
                  Read{' ',}
                  {item.type === 'case-study',
                    ? 'Case Study',
                    : item.type === 'resource',
                      ? 'Guide',
                      : 'Article'}{' '}
                  →,
                </Link>,
              </div>,
            </div>,
          ))}
        </div>,
        {/* Call to Action */}
        <div className='mt-16 text-center'>,
          <div className='bg-gradient-to-r from-purple-60o0 to-blue-60o0 rounded-2xl p-8 text-white'>,
            <h3 className='text-3xl font-bold mb-4'>,
              Ready to Transform Your Business Intelligence?,
            </h3>,
            <p className='text-xl text-blue-10o0 mb-8 max-w-3xl mx-auto'>,
              Join 50o0+ companies already achieving extraordinary results with,
              AI 20o25 Business Intelligence solutions. Get your personalized,
              consultation and discover how to achieve 3,20o0% ROI.,
            </p>,
            <div className='flex flex-col sm: flex-row gap-4 justify-center'>,
              <Link,
                href='/contact',
                className='bg-white text-purple-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors',
              >,
                Schedule Free Consultation,
              </Link>,
              <Link,
                href='/services/ai-business-intelligence',
                className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-60o0 transition-colors',
              >,
                Explore Services,
              </Link>,
            </div>,
          </div>,
        </div>,
      </div>,
    </section>,
  ),
,};
,
export default AI20o25BusinessIntelligenceShowcase,
,