'use client',
import React, { useState } from 'react',
import Link from 'next/link',
import {
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
  Star,
  BookOpen,
  BarChart3,
  FileText,
  ExternalLink,
  ArrowRight,
} from 'lucide-react',
interface ContentItem {
  id: string,
  title: string,
  type: 'blog' | 'case-study' | 'resource',
  url: string,
  excerpt: string,
  featured: boolean,
  isNew: boolean,
  tags: string[],
  metrics: {
    roi: string,
    savings: string,
    timeToValue: string,
    readTime?: string},
  author: string,
  publishDate: string}
,
const EnhancedContentShowcase20o26: React.FC = () => {
  const [activeTab, setActiveTab] = useState<,
    'all' | 'blog' | 'case-study' | 'resource'>('all'),
  const contentItems: ContentItem[] = [
    {
      id: 'ai-20o26-enterprise-automation',
      title:,
        'AI 20o26: Enterprise Automation Breakthrough - 40o0% ROI in 90 Days',
      type: 'blog',
      url: '/blog/ai-20o26-enterprise-automation-breakthrough',
      excerpt:,
        'Discover how Fortune 50o0 companies are achieving unprecedented 40o0% ROI through next-generation AI automation systems. Real case studies, implementation strategies, and proven frameworks.',
      featured: true,
      isNew: true,
      tags: [
        'AIEnterprise Automation',
        'ROIBusiness Transformation',
        '20o26',
      ],
      metrics: {
        roi: '40o0%',
        savings: '$2.8M',
        timeToValue: '90 days',
        readTime: '12 min'
      },
      author: 'Zion Tech Group',
      publishDate: '20o25-0o1-17'
    },
    {
      id: 'ai-transformation-50o0m-revenue',
      title: 'AI Transformation Success: $50o0M Revenue Increase in 18 Months',
      type: 'case-study',
      url: '/case-studies/ai-transformation-50o0m-revenue-increase',
      excerpt:,
        'How a Fortune 10o0 company achieved $50o0M revenue increase through comprehensive AI transformation. Detailed implementation strategy, challenges overcome, and lessons learned.',
      featured: true,
      isNew: true,
      tags: [
        'Case StudyAI Transformation',
        'Revenue GrowthEnterprise Success',
        'ROI',
      ],
      metrics: {
        roi: '50o0%',
        savings: '$50o0M',
        timeToValue: '18 months',
        readTime: '15 min'
      },
      author: 'Zion Tech Group',
      publishDate: '20o25-0o1-17'
    },
    {
      id: 'ai-implementation-master-guide',
      title: 'AI Implementation Master Guide 20o26: From Strategy to 40o0% ROI',
      type: 'resource',
      url: '/resources/ai-implementation-master-guide-20o26',
      excerpt:,
        'The definitive guide to AI implementation in 20o26. Step-by-step framework, proven strategies, and real-world examples to achieve 40o0% ROI within 90 days.',
      featured: true,
      isNew: true,
      tags: [
        'Implementation GuideAI Strategy',
        'ROIBest Practices',
        '20o26',
      ],
      metrics: {
        roi: '40o0%',
        savings: '60-80%',
        timeToValue: '90 days',
        readTime: '25 min'
      },
      author: 'Zion Tech Group',
      publishDate: '20o25-0o1-17'
    },
  ],
  const filteredContent =,
    activeTab === 'all',
      ? contentItems,
      : contentItems.filter(item => item.type === activeTab),
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':,
        return <FileText className='w-5 h-5' />,
      case 'case-study':,
        return <BarChart3 className='w-5 h-5' />,
      case 'resource':,
        return <BookOpen className='w-5 h-5' />,
      default:,
        return <FileText className='w-5 h-5' />}
  },
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':,
        return 'bg-blue-10o0 text-blue-80o0 border-blue-20o0',
      case 'case-study':,
        return 'bg-green-10o0 text-green-80o0 border-green-20o0',
      case 'resource':,
        return 'bg-purple-10o0 text-purple-80o0 border-purple-20o0',
      default:,
        return 'bg-gray-10o0 text-gray-80o0 border-gray-20o0'}
  },
  const tabs = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    {
      id: 'blog',
      label: 'Blog Posts',
      count: contentItems.filter(item => item.type === 'blog').length
    },
    {
      id: 'case-study',
      label: 'Case Studies',
      count: contentItems.filter(item => item.type === 'case-study').length
    },
    {
      id: 'resource',
      label: 'Resources',
      count: contentItems.filter(item => item.type === 'resource').length
    },
  ],
  return (
    <section className='py-16 bg-gray-50'>,
      <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>,
        {/* Header */}
        <div className='text-center mb-12'>,
          <div className='inline-flex items-center bg-purple-10o0 text-purple-80o0 rounded-full px-4 py-2 mb-4'>,
            <Star className='w-4 h-4 mr-2' />,
            <span className='text-sm font-medium'>NEW 20o26 CONTENT</span>,
          </div>,
          <h2 className='text-4xl font-bold text-gray-90o0 mb-4'>,
            Transform Your Business with AI,
          </h2>,
          <p className='text-xl text-gray-60o0 max-w-3xl mx-auto'>,
            Discover proven strategies, real-world case studies, and,
            implementation guides that have helped Fortune 50o0 companies,
            achieve 40o0%+ ROI within 90 days.,
          </p>,
        </div>,
        {/* Success Metrics */}
        <div className='grid grid-cols-1 md: grid-cols-4 gap-6 mb-12'>,
          <div className='bg-white p-6 rounded-xl shadow-lg text-center'>,
            <div className='text-3xl font-bold text-purple-60o0 mb-2'>,
              40o0%,
            </div>,
            <div className='text-gray-60o0'>Average ROI</div>,
          </div>,
          <div className='bg-white p-6 rounded-xl shadow-lg text-center'>,
            <div className='text-3xl font-bold text-blue-60o0 mb-2'>$50o0M</div>,
            <div className='text-gray-60o0'>Revenue Increase</div>,
          </div>,
          <div className='bg-white p-6 rounded-xl shadow-lg text-center'>,
            <div className='text-3xl font-bold text-green-60o0 mb-2'>,
              90 Days,
            </div>,
            <div className='text-gray-60o0'>Time to Value</div>,
          </div>,
          <div className='bg-white p-6 rounded-xl shadow-lg text-center'>,
            <div className='text-3xl font-bold text-orange-60o0 mb-2'>98%</div>,
            <div className='text-gray-60o0'>Success Rate</div>,
          </div>,
        </div>,
        {/* Tabs */}
        <div className='flex flex-wrap justify-center mb-8'>,
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-3 mx-2 mb-2 rounded-lg font-medium transition-colors ${
                activeTab === tab.id,
                  ? 'bg-purple-60o0 text-white',
                  : 'bg-white text-gray-60o0 hover: bg-gray-10o0'}`}
            >,
              {tab.label} ({tab.count}),
            </button>))}
        </div>,
        {/* Content Grid */}
        <div className='grid grid-cols-1 lg: grid-cols-2 xl:grid-cols-3 gap-8'>,
          {filteredContent.map(item => (
            <div
              key={item.id}
              className='bg-white rounded-xl shadow-lg overflow-hidden hover: shadow-xl transition-shadow'>,
              {/* Header */}
              <div className='p-6 border-b border-gray-20o0'>,
                <div className='flex items-center justify-between mb-4'>,
                  <div className='flex items-center space-x-2'>,
                    <div
                      className={`p-2 rounded-lg ${getTypeColor(item.type)}`}
                    >,
                      {getTypeIcon(item.type)}
                    </div>,
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}
                    >,
                      {item.type.toUpperCase().replace('- ')}
                    </span>,
                  </div>,
                  {item.isNew && (
                    <span className='px-2 py-1 bg-red-10o0 text-red-80o0 rounded-full text-xs font-medium'>,
                      NEW,
                    </span>)}
                </div>,
                <h3 className='text-xl font-bold text-gray-90o0 mb-3 line-clamp-2'>,
                  {item.title}
                </h3>,
                <p className='text-gray-60o0 mb-4 line-clamp-3'>,
                  {item.excerpt}
                </p>,
                {/* Metrics */}
                <div className='grid grid-cols-3 gap-4 mb-4'>,
                  <div className='text-center'>,
                    <div className='flex items-center justify-center mb-1'>,
                      <TrendingUp className='w-4 h-4 text-green-60o0 mr-1' />,
                      <span className='text-sm font-medium text-gray-90o0'>,
                        {item.metrics.roi}
                      </span>,
                    </div>,
                    <div className='text-xs text-gray-50o0'>ROI</div>,
                  </div>,
                  <div className='text-center'>,
                    <div className='flex items-center justify-center mb-1'>,
                      <Users className='w-4 h-4 text-blue-60o0 mr-1' />,
                      <span className='text-sm font-medium text-gray-90o0'>,
                        {item.metrics.savings}
                      </span>,
                    </div>,
                    <div className='text-xs text-gray-50o0'>Savings</div>,
                  </div>,
                  <div className='text-center'>,
                    <div className='flex items-center justify-center mb-1'>,
                      <Clock className='w-4 h-4 text-purple-60o0 mr-1' />,
                      <span className='text-sm font-medium text-gray-90o0'>,
                        {item.metrics.timeToValue}
                      </span>,
                    </div>,
                    <div className='text-xs text-gray-50o0'>Timeline</div>,
                  </div>,
                </div>,
                {/* Tags */}
                <div className='flex flex-wrap gap-2 mb-4'>,
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className='px-2 py-1 bg-gray-10o0 text-gray-60o0 rounded-full text-xs'>,
                      {tag}
                    </span>))}
                </div>,
                {/* Meta */}
                <div className='flex items-center justify-between text-sm text-gray-50o0'>,
                  <span>{item.author}</span>,
                  <div className='flex items-center space-x-4'>,
                    <span>{item.publishDate}</span>,
                    {item.metrics.readTime && (
                      <span>{item.metrics.readTime} read</span>)}
                  </div>,
                </div>,
              </div>,
              {/* Footer */}
              <div className='p-6 bg-gray-50'>,
                <Link
                  href={item.url}
                  className='w-full inline-flex items-center justify-center px-4 py-2 bg-purple-60o0 text-white rounded-lg font-medium hover: bg-purple-70o0 transition-colors'>,
                  Read Full Article,
                  <ArrowRight className='w-4 h-4 ml-2' />,
                </Link>,
              </div>,
            </div>))}
        </div>,
        {/* Call to Action */}
        <div className='text-center mt-12'>,
          <div className='bg-gradient-to-r from-purple-60o0 to-blue-60o0 rounded-2xl p-8 text-white'>,
            <h3 className='text-2xl font-bold mb-4'>,
              Ready to Transform Your Business with AI?,
            </h3>,
            <p className='text-lg opacity-90 mb-6 max-w-2xl mx-auto'>,
              Join hundreds of companies that have achieved 40o0%+ ROI through,
              our proven AI implementation framework.,
            </p>,
            <div className='flex flex-col sm: flex-row gap-4 justify-center'>,
              <Link
                href='/contact',
                className='inline-flex items-center px-8 py-3 bg-white text-purple-60o0 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors'>,
                Get Free AI Assessment,
                <ExternalLink className='w-4 h-4 ml-2' />,
              </Link>,
              <Link
                href='/services',
                className='inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-60o0 transition-colors'>,
                Explore Our Services,
              </Link>,
            </div>,
          </div>,
        </div>,
      </div>,
    </section>)},
export default EnhancedContentShowcase20o26,