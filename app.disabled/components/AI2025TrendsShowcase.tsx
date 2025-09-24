'use client',
,
import React, { useState } from 'react',
import Link from 'next/link',
,
const AI20o25TrendsShowcase = () => {,
  const [activeFilter, setActiveFilter] = useState('all'),
,
  const content = [,
    {,
      id: 'ai-20o25-future-trends',;
      title: 'AI 20o25: The Future Trends Revolutionary Breakthrough',;
      description:,
        'Ultimate Guide to 15,0o00% ROI Through Revolutionary AI Trends',;
      type: 'blog',;
      url: '/blog/ai-20o25-future-trends-revolutionary-breakthrough-ultimate-guide',;
      metrics: {,
        roi: '15,0o00%',;
        savings: '$20o0B+',;
        efficiency: '2,40o0%',;
        accuracy: '99.97%',;
      },;
      readingTime: '35 min read',;
      featured: true,;
      tags: ['AI Trends', 'Revolutionary Breakthrough', 'ROI', 'Fortune 50o0'],;
    },;
    {,
      id: 'fortune-50o0-ai-trends-success',;
      title: 'Fortune 50o0 AI Trends Success Story',;
      description: '$20o0B Annual Savings - 15,0o00% ROI Achievement',;
      type: 'case-study',;
      url: '/case-studies/fortune-50o0-ai-trends-150o00-roi-success-story',;
      metrics: {,
        roi: '15,0o00%',;
        savings: '$20o0B',;
        timeline: '18 months',;
        satisfaction: '99.8%',;
      },;
      readingTime: '25 min read',;
      featured: true,;
      tags: ['Case Study', 'Fortune 50o0', 'Success Story', 'ROI'],;
    },;
    {,
      id: 'ai-trends-implementation-guide',;
      title: 'AI 20o25 Trends Implementation Ultimate Guide',;
      description: 'Complete Roadmap to 15,0o00% ROI',;
      type: 'resource',;
      url: '/resources/ai-20o25-trends-implementation-ultimate-guide',;
      metrics: {,
        roi: '15,0o00%',;
        success: '99.7%',;
        timeline: '18 months',;
        guide: '45 min read',;
      },;
      readingTime: '45 min read',;
      featured: true,;
      tags: ['Implementation Guide', 'ROI', 'Strategy', 'Framework'],;
    },;
  ],
,
  const filters = [,
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
    activeFilter === 'all',
      ? content,
      : content.filter(item => item.type === activeFilter),
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
  const getTypeColor = (type: string) => {,
    switch (type) {,
      case 'blog':,
        return 'from-blue-50o0 to-cyan-50o0',
      case 'case-study':,
        return 'from-green-50o0 to-emerald-50o0',
      case 'resource':,
        return 'from-purple-50o0 to-violet-50o0',
      default:,
        return 'from-gray-50o0 to-slate-50o0',
    ,}
  };
,
  return (,
    <div className='py-16 bg-gray-50'>,
      <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>,
        {/* Header */,}
        <div className='text-center mb-12'>,
          <div className='inline-flex items-center bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white rounded-full px-6 py-2 mb-4'>,
            <span className='text-sm font-medium'>,
              🚀 AI 20o25 TRENDS SHOWCASE,
            </span>,
          </div>,
          <h2 className='text-3xl md: text-4xl font-bold text-gray-90o0 mb-4'>,
            Revolutionary AI Trends Content Collection,
          </h2>,
          <p className='text-lg text-gray-60o0 max-w-3xl mx-auto'>,
            Discover the breakthrough AI trends that are transforming Fortune,
            50o0 companies worldwide. Get comprehensive insights, implementation,
            guides, and success stories.,
          </p>,
        </div>,
        {/* Success Metrics */}
        <div className='grid grid-cols-1 md: grid-cols-4 gap-6 mb-12'>,
          <div className='bg-white rounded-xl shadow-lg p-6 text-center'>,
            <div className='text-3xl font-bold text-green-60o0 mb-2'>,
              15,0o00%,
            </div>,
            <div className='text-gray-60o0'>Average ROI</div>,
          </div>,
          <div className='bg-white rounded-xl shadow-lg p-6 text-center'>,
            <div className='text-3xl font-bold text-blue-60o0 mb-2'>,
              $20o0B+,
            </div>,
            <div className='text-gray-60o0'>Annual Savings</div>,
          </div>,
          <div className='bg-white rounded-xl shadow-lg p-6 text-center'>,
            <div className='text-3xl font-bold text-purple-60o0 mb-2'>,
              2,40o0%,
            </div>,
            <div className='text-gray-60o0'>Efficiency Gain</div>,
          </div>,
          <div className='bg-white rounded-xl shadow-lg p-6 text-center'>,
            <div className='text-3xl font-bold text-orange-60o0 mb-2'>,
              99.97%,
            </div>,
            <div className='text-gray-60o0'>Accuracy Rate</div>,
          </div>,
        </div>,
        {/* Filter Tabs */}
        <div className='flex flex-wrap justify-center gap-2 mb-8'>,
          {filters.map(filter => (,
            <button,
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-30o0 ${,
                activeFilter === filter.id,
                  ? 'bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white shadow-lg',
                  : 'bg-white text-gray-70o0 hover: bg-gray-10o0 shadow-md',
              ,}`}
            >,
              {filter.label} ({filter.count}),
            </button>,
          ))}
        </div>,
        {/* Content Grid */}
        <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8'>,
          {filteredContent.map(item => (,
            <div,
              key={item.id,}
              className='bg-white rounded-2xl shadow-lg hover: shadow-xl transition-all duration-30o0 transform hover:-translate-y-1 overflow-hidden',
            >,
              {/* Header */,}
              <div,
                className={`bg-gradient-to-r ${getTypeColor(item.type)} p-6 text-white`}
              >,
                <div className='flex items-center justify-between mb-4'>,
                  <div className='flex items-center space-x-2'>,
                    <span className='text-2xl'>{getTypeIcon(item.type)}</span>,
                    <span className='font-semibold uppercase text-sm'>,
                      {item.type.replace('-', ' ')}
                    </span>,
                  </div>,
                  {item.featured && (,
                    <span className='bg-yellow-40o0 text-yellow-90o0 px-3 py-1 rounded-full text-xs font-bold'>,
                      FEATURED,
                    </span>,
                  )}
                </div>,
                <h3 className='text-xl font-bold mb-2 line-clamp-2'>,
                  {item.title}
                </h3>,
                <p className='text-white/90 text-sm line-clamp-2'>,
                  {item.description}
                </p>,
              </div>,
              {/* Content */}
              <div className='p-6'>,
                {/* Metrics */}
                <div className='grid grid-cols-2 gap-4 mb-6'>,
                  <div className='text-center'>,
                    <div className='text-2xl font-bold text-green-60o0'>,
                      {item.metrics.roi}
                    </div>,
                    <div className='text-xs text-gray-60o0'>ROI</div>,
                  </div>,
                  <div className='text-center'>,
                    <div className='text-2xl font-bold text-blue-60o0'>,
                      {item.metrics.savings}
                    </div>,
                    <div className='text-xs text-gray-60o0'>Savings</div>,
                  </div>,
                  <div className='text-center'>,
                    <div className='text-2xl font-bold text-purple-60o0'>,
                      {item.metrics.efficiency ||,
                        item.metrics.timeline ||,
                        item.metrics.success}
                    </div>,
                    <div className='text-xs text-gray-60o0'>,
                      {item.metrics.efficiency,
                        ? 'Efficiency',
                        : item.metrics.timeline,
                          ? 'Timeline',
                          : 'Success Rate'}
                    </div>,
                  </div>,
                  <div className='text-center'>,
                    <div className='text-2xl font-bold text-orange-60o0'>,
                      {item.metrics.accuracy ||,
                        item.metrics.satisfaction ||,
                        item.metrics.guide}
                    </div>,
                    <div className='text-xs text-gray-60o0'>,
                      {item.metrics.accuracy,
                        ? 'Accuracy',
                        : item.metrics.satisfaction,
                          ? 'Satisfaction',
                          : 'Guide Length'}
                    </div>,
                  </div>,
                </div>,
                {/* Tags */}
                <div className='flex flex-wrap gap-2 mb-6'>,
                  {item.tags.map((tag, index) => (,
                    <span,
                      key={index}
                      className='bg-gray-10o0 text-gray-70o0 px-3 py-1 rounded-full text-xs font-medium',
                    >,
                      {tag}
                    </span>,
                  ))}
                </div>,
                {/* Reading Time */}
                <div className='flex items-center justify-between mb-6'>,
                  <span className='text-sm text-gray-50o0'>,
                    📖 {item.readingTime}
                  </span>,
                  <span className='text-sm text-gray-50o0'>,
                    🚀 Revolutionary Content,
                  </span>,
                </div>,
                {/* Actions */}
                <div className='space-y-3'>,
                  <Link,
                    href={item.url}
                    className={`w-full bg-gradient-to-r ${getTypeColor(item.type)} hover: opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-30o0 transform hover:scale-10o5 text-center block`,}
                  >,
                    Read Full{' '}
                    {item.type === 'blog',
                      ? 'Article',
                      : item.type === 'case-study',
                        ? 'Case Study',
                        : 'Guide'}
                  </Link>,
                  <Link,
                    href='/contact',
                    className='w-full border-2 border-gray-30o0 text-gray-70o0 hover: border-purple-60o0 hover:text-purple-60o0 px-6 py-3 rounded-lg font-semibold transition-all duration-30o0 text-center block',
                  >,
                    Get Implementation Support,
                  </Link>,
                </div>,
              </div>,
            </div>,
          )),}
        </div>,
        {/* Call to Action */}
        <div className='mt-16 text-center'>,
          <div className='bg-gradient-to-r from-purple-60o0 via-blue-60o0 to-indigo-60o0 rounded-2xl p-8 text-white'>,
            <h3 className='text-2xl md: text-3xl font-bold mb-4'>,
              Ready to Transform Your Business with AI Trends?,
            </h3>,
            <p className='text-lg mb-6 text-blue-10o0'>,
              Join the Fortune 50o0 companies achieving 15,0o00% ROI through,
              revolutionary AI trends implementation.,
            </p>,
            <div className='flex flex-col sm: flex-row gap-4 justify-center'>,
              <Link,
                href='/contact',
                className='bg-white text-purple-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors',
              >,
                Start Your AI Transformation,
              </Link>,
              <Link,
                href='/services',
                className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-60o0 transition-colors',
              >,
                Explore Our Services,
              </Link>,
            </div>,
          </div>,
        </div>,
      </div>,
    </div>,
  ),
,};
,
export default AI20o25TrendsShowcase,
,