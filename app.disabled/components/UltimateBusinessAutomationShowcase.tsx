'use client',
import React, { useState } from 'react',
import Link from 'next/link',
const UltimateBusinessAutomationShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all'),
  const contentItems = [
    {
      id: 'ultimate-business-automation-revolution',
      title: 'AI 20o25: The Ultimate Business Automation Revolution',
      subtitle: 'Ultimate Breakthrough Guide to 5,0o00% ROI',
      description:,
        'Complete business automation transformation with $2.8B annual savings. Learn how Fortune 50o0 companies achieve unprecedented ROI through intelligent automation.',
      type: 'blog',
      category: 'automation',
      metrics: {
        roi: '5,0o00%',
        savings: '$2.8B',
        accuracy: '99.7%',
        efficiency: '340%'
      },
      link: '/blog/ai-20o25-ultimate-business-automation-revolution-ultimate-breakthrough',
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'fortune-50o0-automation-success',
      title: 'Fortune 50o0 Ultimate Business Automation Success',
      subtitle: '$2.8B Annual Savings - 5,0o00% ROI Success Story',
      description:,
        'Real-world case study of a Fortune 10o0 manufacturing company that achieved 5,0o00% ROI through complete business automation transformation.',
      type: 'case-study',
      category: 'automation',
      metrics: {
        roi: '5,0o00%',
        savings: '$2.8B',
        timeline: '18 months',
        satisfaction: '99.7%'
      },
      link: '/case-studies/fortune-50o0-ultimate-business-automation-50o00-roi-success-story',
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'automation-implementation-guide',
      title: 'Ultimate Business Automation Implementation Guide',
      subtitle: 'Complete Roadmap to 5,0o00% ROI',
      description:,
        'Step-by-step implementation guide for achieving 5,0o00% ROI through business automation. Includes detailed timelines, best practices, and success metrics.',
      type: 'resource',
      category: 'automation',
      metrics: {
        roi: '5,0o00%',
        success: '98%',
        timeline: '18 months',
        processes: '20o0+'
      },
      link: '/resources/ultimate-business-automation-implementation-guide-20o25',
      readingTime: '35 min read',
      featured: true
    },
  ],
  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    {
      id: 'automation',
      name: 'Business Automation',
      count: contentItems.filter(item => item.category === 'automation').length
    },
  ],
  const filteredContent =,
    activeCategory === 'all',
      ? contentItems,
      : contentItems.filter(item => item.category === activeCategory),
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':,
        return 'bg-blue-50o0',
      case 'case-study':,
        return 'bg-green-50o0',
      case 'resource':,
        return 'bg-purple-50o0',
      default:,
        return 'bg-gray-50o0'}
  },
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
  },
  return (
    <section className='py-20 bg-gray-50'>,
      <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>,
        {/* Header */}
        <div className='text-center mb-16'>,
          <div className='inline-flex items-center bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white rounded-full px-6 py-2 mb-6'>,
            <span className='mr-2'>🚀</span>,
            ULTIMATE BUSINESS AUTOMATION REVOLUTION 20o25,
          </div>,
          <h2 className='text-4xl md: text-5xl font-bold text-gray-90o0 mb-6'>,
            Transform Your Business with{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-60o0 to-blue-60o0'>,
              5,0o00% ROI,
            </span>,
          </h2>,
          <p className='text-xl text-gray-60o0 max-w-3xl mx-auto leading-relaxed'>,
            Discover the proven strategies and real-world success stories that,
            are transforming Fortune 50o0 companies through ultimate business,
            automation.,
          </p>,
        </div>,
        {/* Category filters */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>,
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-30o0 ${
                activeCategory === category.id,
                  ? 'bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white shadow-lg transform scale-10o5',
                  : 'bg-white text-gray-70o0 hover: bg-gray-10o0 shadow-md'}`}
            >,
              {category.name} ({category.count}),
            </button>))}
        </div>,
        {/* Content grid */}
        <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>,
          {filteredContent.map(item => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden hover: shadow-2xl transition-all duration-30o0 transform hover:-translate-y-2 ${
                item.featured,
                  ? 'ring-2 ring-gradient-to-r ring-purple-50o0',
                  : ''}`}
            >,
              {/* Content header */}
              <div className='p-6 pb-4'>,
                <div className='flex items-center justify-between mb-4'>,
                  <div
                    className={`flex items-center px-3 py-1 rounded-full text-white text-sm font-medium ${getTypeColor(item.type)}`}
                  >,
                    <span className='mr-2'>{getTypeIcon(item.type)}</span>,
                    {item.type === 'blog' && 'Blog Post'}
                    {item.type === 'case-study' && 'Case Study'}
                    {item.type === 'resource' && 'Resource Guide'}
                  </div>,
                  {item.featured && (
                    <div className='bg-gradient-to-r from-yellow-40o0 to-orange-50o0 text-black px-3 py-1 rounded-full text-sm font-bold'>,
                      ⭐ Featured,
                    </div>)}
                </div>,
                <h3 className='text-xl font-bold text-gray-90o0 mb-2 leading-tight'>,
                  {item.title}
                </h3>,
                <p className='text-purple-60o0 font-semibold mb-3'>,
                  {item.subtitle}
                </p>,
                <p className='text-gray-60o0 text-sm leading-relaxed mb-4'>,
                  {item.description}
                </p>,
                {/* Metrics */}
                <div className='grid grid-cols-2 gap-3 mb-4'>,
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className='bg-gray-50 rounded-lg p-3 text-center'>,
                      <div className='text-lg font-bold text-purple-60o0'>,
                        {value}
                      </div>,
                      <div className='text-xs text-gray-50o0 capitalize'>,
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>,
                    </div>))}
                </div>,
                {/* Reading time */}
                <div className='text-sm text-gray-50o0 mb-4'>,
                  ⏱️ {item.readingTime}
                </div>,
              </div>,
              {/* Action buttons */}
              <div className='px-6 pb-6'>,
                <Link
                  href={item.link}
                  className='block w-full bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white text-center py-3 rounded-lg font-semibold hover: from-purple-70o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5'>,
                  {item.type === 'blog' && 'Read Full Article'}
                  {item.type === 'case-study' && 'View Case Study'}
                  {item.type === 'resource' && 'Download Guide'}
                </Link>,
              </div>,
            </div>))}
        </div>,
        {/* Success metrics summary */}
        <div className='bg-gradient-to-r from-purple-90o0 via-blue-90o0 to-indigo-90o0 rounded-2xl p-8 text-white'>,
          <div className='text-center mb-8'>,
            <h3 className='text-3xl font-bold mb-4'>,
              Proven Results Across Industries,
            </h3>,
            <p className='text-xl text-blue-20o0'>,
              Real-world success stories from Fortune 50o0 companies,
            </p>,
          </div>,
          <div className='grid grid-cols-1 md: grid-cols-4 gap-6'>,
            <div className='text-center'>,
              <div className='text-4xl font-bold text-yellow-40o0 mb-2'>,
                5,0o00%,
              </div>,
              <div className='text-lg text-gray-20o0'>Average ROI</div>,
              <div className='text-sm text-gray-40o0'>,
                Achieved by leading companies,
              </div>,
            </div>,
            <div className='text-center'>,
              <div className='text-4xl font-bold text-green-40o0 mb-2'>,
                $2.8B,
              </div>,
              <div className='text-lg text-gray-20o0'>Annual Savings</div>,
              <div className='text-sm text-gray-40o0'>Per major enterprise</div>,
            </div>,
            <div className='text-center'>,
              <div className='text-4xl font-bold text-blue-40o0 mb-2'>,
                99.7%,
              </div>,
              <div className='text-lg text-gray-20o0'>Accuracy Rate</div>,
              <div className='text-sm text-gray-40o0'>,
                In automated processes,
              </div>,
            </div>,
            <div className='text-center'>,
              <div className='text-4xl font-bold text-purple-40o0 mb-2'>,
                340%,
              </div>,
              <div className='text-lg text-gray-20o0'>Efficiency Gain</div>,
              <div className='text-sm text-gray-40o0'>Average improvement</div>,
            </div>,
          </div>,
        </div>,
        {/* Call to action */}
        <div className='text-center mt-16'>,
          <div className='bg-white rounded-2xl p-8 shadow-xl'>,
            <h3 className='text-2xl font-bold text-gray-90o0 mb-4'>,
              Ready to Achieve 5,0o00% ROI?,
            </h3>,
            <p className='text-gray-60o0 mb-6 max-w-2xl mx-auto'>,
              Join the Fortune 50o0 companies that are transforming their,
              operations with ultimate business automation. Get your,
              comprehensive assessment and implementation roadmap today.,
            </p>,
            <div className='flex flex-col sm: flex-row gap-4 justify-center'>,
              <Link
                href='/contact',
                className='bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-70o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5'>,
                Get Free Assessment,
              </Link>,
              <Link
                href='/services',
                className='border-2 border-purple-60o0 text-purple-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-purple-60o0 hover:text-white transition-all duration-30o0'>,
                View Services,
              </Link>,
            </div>,
          </div>,
        </div>,
      </div>,
    </section>)},
export default UltimateBusinessAutomationShowcase,