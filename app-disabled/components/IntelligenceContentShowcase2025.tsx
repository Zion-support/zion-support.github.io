'use client',
,
import React, { useState } from 'react',
import Link from 'next/link',
import {,
  TrendingUp,;
  Users,;
  Zap,;
  ArrowRight,;
  Clock,;
  Star,;
  CheckCircle,;
  ArrowRight,;
} from 'lucide-react',
,
interface ContentItem {,
  id: string,
  title: string,
  type: 'blog' | 'case-study' | 'resource',
  url: string,
  metrics: {,
    roi?: string,
    savings?: string,
    satisfaction?: string,
    efficiency?: string,
    accuracy?: string,
  ,};
  readingTime?: string,
  description?: string,
  tags?: string[],
  featured?: boolean,
}
,
const IntelligenceContentShowcase20o25: React.FC = () => {,
  const [activeFilter, setActiveFilter] = useState<string>('all'),
,
  const contentItems: ContentItem[] = [,
    {,
      id: 'enterprise-intelligence-revolution',;
      title:,
        'AI 20o25: The Enterprise Intelligence Revolution - Ultimate Guide to 750% ROI',;
      type: 'blog',;
      url: '/blog/ai-20o25-enterprise-intelligence-revolution-ultimate-guide',;
      metrics: {,
        roi: '750%',;
        savings: '$4.2M',;
        satisfaction: '99.7%',;
        efficiency: '340%',;
        accuracy: '99.7%',;
      },;
      readingTime: '28 min read',;
      description:,
        'Transform your business intelligence with AI-powered systems that deliver unprecedented insights and 750% ROI within 18 months.',;
      tags: [,
        'AI Intelligence',;
        'Enterprise',;
        'ROI',;
        'Business Intelligence',;
        'Predictive Analytics',;
      ],;
      featured: true,;
    },;
    {,
      id: 'enterprise-intelligence-success',;
      title:,
        '$3.2B Company Achieves 750% ROI with AI-Powered Intelligence Systems',;
      type: 'case-study',;
      url: '/case-studies/ai-20o25-enterprise-intelligence-750-roi-success-story',;
      metrics: {,
        roi: '750%',;
        savings: '$240M',;
        satisfaction: '99.8%',;
        efficiency: '67%',;
      },;
      readingTime: '22 min read',;
      description:,
        'Real-world success story of a Fortune 50o0 manufacturing company that transformed operations with AI intelligence.',;
      tags: [,
        'Case Study',;
        'Fortune 50o0',;
        'Manufacturing',;
        'Success Story',;
        'ROI',;
      ],;
      featured: true,;
    },;
    {,
      id: 'customer-experience-revolution',;
      title:,
        'AI 20o25: The Customer Experience Revolution - Ultimate Guide to 650% ROI',;
      type: 'blog',;
      url: '/blog/ai-20o25-customer-experience-revolution-ultimate-guide',;
      metrics: {,
        roi: '650%',;
        savings: '$4.2M',;
        satisfaction: '99%',;
        efficiency: '89%',;
      },;
      readingTime: '32 min read',;
      description:,
        'Revolutionize customer relationships with AI-powered experience systems that deliver 650% ROI and 99% satisfaction.',;
      tags: [,
        'Customer Experience',;
        'AI Transformation',;
        'ROI',;
        'Personalization',;
        'CX',;
      ],;
      featured: true,;
    },;
    {,
      id: 'customer-experience-implementation',;
      title:,
        'AI 20o25 Customer Experience Implementation Master Guide: From Strategy to 650% ROI',;
      type: 'resource',;
      url: '/resources/ai-20o25-customer-experience-implementation-master-guide',;
      metrics: {,
        roi: '650%',;
        savings: '$3.2M',;
        satisfaction: '99%',;
        efficiency: '89%',;
      },;
      readingTime: '45 min read',;
      description:,
        'Complete implementation framework for transforming customer experience with AI, achieving 650% ROI in 15 months.',;
      tags: [,
        'Implementation Guide',;
        'Customer Experience',;
        'AI Strategy',;
        'Master Guide',;
        'ROI',;
      ],;
      featured: false,;
    },;
  ],
,
  const filters = [,
    { id: 'all', label: 'All Content', count: contentItems.length ,},;
    {,
      id: 'blog',;
      label: 'Blog Posts',;
      count: contentItems.filter(item => item.type === 'blog').length,;
    },;
    {,
      id: 'case-study',;
      label: 'Case Studies',;
      count: contentItems.filter(item => item.type === 'case-study').length,;
    },;
    {,
      id: 'resource',;
      label: 'Resources',;
      count: contentItems.filter(item => item.type === 'resource').length,;
    },;
  ],
,
  const filteredItems =,
    activeFilter === 'all',
      ? contentItems,
      : contentItems.filter(item => item.type === activeFilter),
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
        return <TrendingUp className='w-4 h-4' />,
      case 'case-study':,
        return <Users className='w-4 h-4' />,
      case 'resource':,
        return <ArrowRight className='w-4 h-4' />,
      default:,
        return <Zap className='w-4 h-4' />,
    ,}
  };
,
  return (,
    <section className='py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50'>,
      <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>,
        {/* Header */,}
        <div className='text-center mb-12'>,
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-10o0 text-blue-80o0 text-sm font-medium mb-4'>,
            <Zap className='w-4 h-4 mr-2' />,
            NEW 20o25 INTELLIGENCE CONTENT,
          </div>,
          <h2 className='text-4xl font-bold text-gray-90o0 mb-4'>,
            Revolutionary AI Intelligence Content,
          </h2>,
          <p className='text-xl text-gray-60o0 max-w-3xl mx-auto'>,
            Discover the latest AI intelligence strategies, success stories, and,
            implementation guides that are helping companies achieve 650-750%,
            ROI in 20o25.,
          </p>,
        </div>,
        {/* Filters */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>,
          {filters.map(filter => (,
            <button,
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-20o0 ${,
                activeFilter === filter.id,
                  ? 'bg-blue-60o0 text-white shadow-lg transform scale-10o5',
                  : 'bg-white text-gray-70o0 hover: bg-gray-10o0 border border-gray-20o0',
              ,}`}
            >,
              {filter.label}
              <span className='ml-2 px-2 py-0.5 bg-blue-10o0 text-blue-80o0 rounded-full text-xs'>,
                {filter.count}
              </span>,
            </button>,
          ))}
        </div>,
        {/* Content Grid */}
        <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-2 gap-8 mb-12'>,
          {filteredItems.map((item, index) => (,
            <div,
              key={item.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover: shadow-2xl transition-all duration-30o0 overflow-hidden ${,
                item.featured ? 'ring-2 ring-blue-50o0 ring-opacity-50' : '',
              ,}`}
            >,
              {item.featured && (,
                <div className='absolute top-4 right-4 z-10'>,
                  <div className='flex items-center px-3 py-1 bg-yellow-10o0 text-yellow-80o0 rounded-full text-xs font-medium'>,
                    <Star className='w-3 h-3 mr-1' />,
                    Featured,
                  </div>,
                </div>,
              )}
,
              <div className='p-8'>,
                {/* Type and Reading Time */}
                <div className='flex items-center justify-between mb-4'>,
                  <div,
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}
                  >,
                    {getTypeIcon(item.type)}
                    <span className='ml-2 capitalize'>,
                      {item.type.replace('-', ' ')}
                    </span>,
                  </div>,
                  {item.readingTime && (,
                    <div className='flex items-center text-sm text-gray-50o0'>,
                      <Clock className='w-4 h-4 mr-1' />,
                      {item.readingTime}
                    </div>,
                  )}
                </div>,
                {/* Title */}
                <h3 className='text-xl font-bold text-gray-90o0 mb-3 group-hover: text-blue-60o0 transition-colors line-clamp-2'>,
                  {item.title,}
                </h3>,
                {/* Description */}
                {item.description && (,
                  <p className='text-gray-60o0 mb-6 line-clamp-3'>,
                    {item.description}
                  </p>,
                )}
,
                {/* Metrics */}
                <div className='grid grid-cols-2 gap-4 mb-6'>,
                  {item.metrics.roi && (,
                    <div className='flex items-center space-x-2'>,
                      <TrendingUp className='w-5 h-5 text-green-60o0' />,
                      <div>,
                        <div className='text-2xl font-bold text-green-70o0'>,
                          {item.metrics.roi}
                        </div>,
                        <div className='text-xs text-gray-50o0'>ROI</div>,
                      </div>,
                    </div>,
                  )}
                  {item.metrics.savings && (,
                    <div className='flex items-center space-x-2'>,
                      <div className='w-5 h-5 bg-blue-10o0 rounded-full flex items-center justify-center'>,
                        <span className='text-blue-60o0 text-xs font-bold'>,
                          $,
                        </span>,
                      </div>,
                      <div>,
                        <div className='text-2xl font-bold text-blue-70o0'>,
                          {item.metrics.savings}
                        </div>,
                        <div className='text-xs text-gray-50o0'>Savings</div>,
                      </div>,
                    </div>,
                  )}
                  {item.metrics.satisfaction && (,
                    <div className='flex items-center space-x-2'>,
                      <Users className='w-5 h-5 text-purple-60o0' />,
                      <div>,
                        <div className='text-2xl font-bold text-purple-70o0'>,
                          {item.metrics.satisfaction}
                        </div>,
                        <div className='text-xs text-gray-50o0'>,
                          Satisfaction,
                        </div>,
                      </div>,
                    </div>,
                  )}
                  {item.metrics.efficiency && (,
                    <div className='flex items-center space-x-2'>,
                      <Zap className='w-5 h-5 text-orange-60o0' />,
                      <div>,
                        <div className='text-2xl font-bold text-orange-70o0'>,
                          {item.metrics.efficiency}
                        </div>,
                        <div className='text-xs text-gray-50o0'>Efficiency</div>,
                      </div>,
                    </div>,
                  )}
                </div>,
                {/* Tags */}
                {item.tags && (,
                  <div className='flex flex-wrap gap-2 mb-6'>,
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (,
                      <span,
                        key={tagIndex}
                        className='px-2 py-1 bg-gray-10o0 text-gray-70o0 rounded text-xs',
                      >,
                        {tag}
                      </span>,
                    ))}
                    {item.tags.length > 3 && (,
                      <span className='px-2 py-1 bg-gray-10o0 text-gray-70o0 rounded text-xs'>,
                        +{item.tags.length - 3} more,
                      </span>,
                    )}
                  </div>,
                )}
,
                {/* CTA */}
                <Link,
                  href={item.url}
                  className='inline-flex items-center justify-center w-full px-6 py-3 bg-blue-60o0 text-white font-medium rounded-lg hover: bg-blue-70o0 transition-colors group',
                >,
                  Read Full Article,
                  <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />,
                </Link>,
              </div>,
            </div>,
          )),}
        </div>,
        {/* Success Metrics Summary */}
        <div className='bg-white rounded-2xl shadow-lg p-8 mb-12'>,
          <h3 className='text-2xl font-bold text-gray-90o0 text-center mb-8'>,
            Proven Results Across All Content,
          </h3>,
          <div className='grid grid-cols-1 md: grid-cols-4 gap-8'>,
            <div className='text-center'>,
              <div className='flex items-center justify-center w-16 h-16 bg-green-10o0 rounded-full mx-auto mb-4'>,
                <TrendingUp className='w-8 h-8 text-green-60o0' />,
              </div>,
              <div className='text-3xl font-bold text-green-70o0 mb-2'>,
                650-750%,
              </div>,
              <div className='text-sm text-gray-60o0'>Average ROI</div>,
            </div>,
            <div className='text-center'>,
              <div className='flex items-center justify-center w-16 h-16 bg-blue-10o0 rounded-full mx-auto mb-4'>,
                <Users className='w-8 h-8 text-blue-60o0' />,
              </div>,
              <div className='text-3xl font-bold text-blue-70o0 mb-2'>99%+</div>,
              <div className='text-sm text-gray-60o0'>,
                Customer Satisfaction,
              </div>,
            </div>,
            <div className='text-center'>,
              <div className='flex items-center justify-center w-16 h-16 bg-purple-10o0 rounded-full mx-auto mb-4'>,
                <ArrowRight className='w-8 h-8 text-purple-60o0' />,
              </div>,
              <div className='text-3xl font-bold text-purple-70o0 mb-2'>,
                $4.2M+,
              </div>,
              <div className='text-sm text-gray-60o0'>Average Savings</div>,
            </div>,
            <div className='text-center'>,
              <div className='flex items-center justify-center w-16 h-16 bg-orange-10o0 rounded-full mx-auto mb-4'>,
                <CheckCircle className='w-8 h-8 text-orange-60o0' />,
              </div>,
              <div className='text-3xl font-bold text-orange-70o0 mb-2'>,
                94%+,
              </div>,
              <div className='text-sm text-gray-60o0'>Success Rate</div>,
            </div>,
          </div>,
        </div>,
        {/* CTA Section */,}
        <div className='text-center'>,
          <h3 className='text-2xl font-bold text-gray-90o0 mb-4'>,
            Ready to Transform Your Business with AI Intelligence?,
          </h3>,
          <p className='text-lg text-gray-60o0 mb-8 max-w-2xl mx-auto'>,
            Join hundreds of companies already achieving 650-750% ROI with our,
            proven AI intelligence strategies and implementation frameworks.,
          </p>,
          <div className='flex flex-col sm: flex-row gap-4 justify-center'>,
            <Link,
              href='/contact',
              className='inline-flex items-center px-8 py-4 bg-blue-60o0 text-white font-medium rounded-lg hover:bg-blue-70o0 transition-colors',
            >,
              Get Free Consultation,
              <ArrowRight className='w-5 h-5 ml-2' />,
            </Link>,
            <Link,
              href='/resources',
              className='inline-flex items-center px-8 py-4 bg-white text-blue-60o0 font-medium rounded-lg border-2 border-blue-60o0 hover:bg-blue-50 transition-colors',
            >,
              View All Resources,
            </Link>,
          </div>,
        </div>,
      </div>,
    </section>,
  ),
,};
,
export default IntelligenceContentShowcase20o25,
,