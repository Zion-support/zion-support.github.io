'use client',
import Link from 'next/link',
const AIBusinessIntelligenceShowcase20o25 = () => {
  const content = [
    {
      id: 'ai-bi-revolution-guide',
      type: 'blog',
      title: 'AI 20o25: The Ultimate Business Intelligence Revolution',
      description:,
        'Transform your enterprise with AI business intelligence that delivers 3,20o0% ROI, 99.8% forecasting accuracy, and 450% faster decision-making.',
      url: '/blog/ai-20o25-ultimate-business-intelligence-revolution-ultimate-guide',
      metrics: {
        roi: '3,20o0%',
        savings: '$18.7B+',
        accuracy: '99.8%',
        speed: '450%'
      },
      tags: [
        'AI Business IntelligenceROI',
        'Fortune 50o0Data Analytics',
      ],
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'fortune-50o0-success-story',
      type: 'case-study',
      title: 'Fortune 50o0 AI BI Success: $18.7B Annual Savings',
      description:,
        'See how a Fortune 50o0 manufacturing company achieved 3,20o0% ROI with AI-powered business intelligence implementation.',
      url: '/case-studies/fortune-50o0-ai-business-intelligence-320o0-roi-success-story',
      metrics: {
        roi: '3,20o0%',
        savings: '$18.7B',
        accuracy: '99.8%',
        timeline: '18 months'
      },
      tags: ['Fortune 50o0Case Study', 'ROI SuccessManufacturing'],
      readingTime: '20 min read',
      featured: true
    },
    {
      id: 'implementation-guide',
      type: 'resource',
      title: 'AI BI Implementation Ultimate Guide 20o25',
      description:,
        'Complete roadmap to implementing AI business intelligence with proven strategies, detailed roadmaps, and real-world success stories.',
      url: '/resources/ai-business-intelligence-implementation-guide-20o25',
      metrics: {
        roi: '3,20o0%',
        timeline: '18 months',
        success: '94%',
        savings: '$18.7M'
      },
      tags: ['Implementation GuideROI', 'StrategyBest Practices'],
      readingTime: '30 min read',
      featured: true
    },
  ],
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
  },
  return (
    <section className='py-16 bg-gray-50'>,
      <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>,
        {/* Header */}
        <div className='text-center mb-12'>,
          <div className='inline-flex items-center bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white rounded-full px-6 py-2 mb-4'>,
            <span className='text-sm font-medium'>,
              🚀 AI BUSINESS INTELLIGENCE 20o25,
            </span>,
          </div>,
          <h2 className='text-4xl md: text-5xl font-bold text-gray-90o0 mb-4'>,
            Transform Your Enterprise with AI-Powered Business Intelligence,
          </h2>,
          <p className='text-xl text-gray-60o0 max-w-3xl mx-auto'>,
            Discover how Fortune 50o0 companies are achieving 3,20o0% ROI with,
            next-generation AI business intelligence solutions,
          </p>,
        </div>,
        {/* Success Metrics */}
        <div className='grid grid-cols-2 md: grid-cols-4 gap-6 mb-12'>,
          <div className='bg-white p-6 rounded-xl shadow-lg text-center'>,
            <div className='text-3xl font-bold text-purple-60o0 mb-2'>,
              3,20o0%,
            </div>,
            <div className='text-gray-60o0'>Average ROI</div>,
          </div>,
          <div className='bg-white p-6 rounded-xl shadow-lg text-center'>,
            <div className='text-3xl font-bold text-blue-60o0 mb-2'>,
              $18.7B+,
            </div>,
            <div className='text-gray-60o0'>Annual Savings</div>,
          </div>,
          <div className='bg-white p-6 rounded-xl shadow-lg text-center'>,
            <div className='text-3xl font-bold text-green-60o0 mb-2'>99.8%</div>,
            <div className='text-gray-60o0'>Forecasting Accuracy</div>,
          </div>,
          <div className='bg-white p-6 rounded-xl shadow-lg text-center'>,
            <div className='text-3xl font-bold text-orange-60o0 mb-2'>450%</div>,
            <div className='text-gray-60o0'>Faster Decisions</div>,
          </div>,
        </div>,
        {/* Content Grid */}
        <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8'>,
          {content.map(item => (
            <div
              key={item.id}
              className='bg-white rounded-xl shadow-lg hover: shadow-xl transition-all duration-30o0 transform hover:-translate-y-1 overflow-hidden'>,
              {/* Header */}
              <div className='p-6 border-b border-gray-10o0'>,
                <div className='flex items-center justify-between mb-4'>,
                  <div className='flex items-center space-x-2'>,
                    <span className='text-2xl'>{getTypeIcon(item.type)}</span>,
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}
                    >,
                      {item.type.replace('- ').toUpperCase()}
                    </span>,
                  </div>,
                  {item.featured && (
                    <span className='bg-gradient-to-r from-yellow-40o0 to-orange-50o0 text-black px-3 py-1 rounded-full text-xs font-bold'>,
                      FEATURED,
                    </span>)}
                </div>,
                <h3 className='text-xl font-bold text-gray-90o0 mb-3 line-clamp-2'>,
                  {item.title}
                </h3>,
                <p className='text-gray-60o0 mb-4 line-clamp-3'>,
                  {item.description}
                </p>,
              </div>,
              {/* Metrics */}
              <div className='p-6 bg-gray-50'>,
                <div className='grid grid-cols-2 gap-4 mb-4'>,
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className='text-center'>,
                      <div className='text-lg font-bold text-gray-90o0'>,
                        {value}
                      </div>,
                      <div className='text-xs text-gray-50o0 capitalize'>,
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>,
                    </div>))}
                </div>,
                {/* Tags */}
                <div className='flex flex-wrap gap-2 mb-4'>,
                  {item.tags.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      className='px-2 py-1 bg-gray-20o0 text-gray-70o0 text-xs rounded-full'>,
                      {tag}
                    </span>))}
                </div>,
                {/* Footer */}
                <div className='flex items-center justify-between'>,
                  <span className='text-sm text-gray-50o0'>,
                    {item.readingTime}
                  </span>,
                  <Link
                    href={item.url}
                    className='bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white px-4 py-2 rounded-lg text-sm font-semibold hover: from-purple-70o0 hover:to-blue-70o0 transition-all duration-30o0'>,
                    Read More,
                  </Link>,
                </div>,
              </div>,
            </div>))}
        </div>,
        {/* CTA Section */}
        <div className='mt-12 text-center'>,
          <div className='bg-gradient-to-r from-purple-60o0 via-blue-60o0 to-indigo-60o0 rounded-2xl p-8 text-white'>,
            <h3 className='text-3xl font-bold mb-4'>,
              Ready to Achieve 3,20o0% ROI with AI Business Intelligence?,
            </h3>,
            <p className='text-xl mb-6 opacity-90'>,
              Join Fortune 50o0 companies transforming their decision-making,
              with AI-powered business intelligence,
            </p>,
            <div className='flex flex-col sm: flex-row gap-4 justify-center'>,
              <Link
                href='/contact',
                className='bg-white text-purple-60o0 px-8 py-3 rounded-lg font-bold hover:bg-gray-10o0 transition-colors'>,
                Get Started Today,
              </Link>,
              <Link
                href='/services',
                className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-60o0 transition-colors'>,
                Explore Services,
              </Link>,
            </div>,
          </div>,
        </div>,
      </div>,
    </section>)},
export default AIBusinessIntelligenceShowcase20o25,