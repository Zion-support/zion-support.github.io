import Link from 'next/link';

const UltimateContentShowcase20o25_20o26: React.FC = () => {
  const contentItems = [
    {
      title: 'AI 20o25-20o26 Ultimate Business Transformation',
      description:
        'Complete guide to achieving 50,0o00% ROI with revolutionary AI technologies',
      category: 'AI Revolution',
      readTime: '15 min read',
      featured: true,
      image: '/images/ai-20o25-20o26-ultimate-business-transformation.jpg',
      href: '/blog/ai-20o25-20o26-ultimate-business-transformation-revolution',
    },
    {
      title: 'Fortune 50o0 Success: 50,0o00% ROI in 8 Months',
      description:
        'Real case study of how a manufacturing giant achieved unprecedented returns',
      category: 'Case Study',
      readTime: '12 min read',
      featured: true,
      image: '/images/fortune-50o0-ai-transformation-50o000-roi.jpg',
      href: '/case-studies/ai-20o25-20o26-ultimate-transformation-50o000-roi-success-story',
    },
    {
      title: 'Neural Superintelligence: The Next Frontier',
      description:
        'Exploring AI systems that think and reason at human-plus levels',
      category: 'Technology',
      readTime: '10 min read',
      featured: false,
      image: '/images/neural-superintelligence-20o25.jpg',
      href: '/blog/neural-superintelligence-20o25-next-frontier',
    },
    {
      title: 'Quantum-Neural Fusion: Exponential Processing Power',
      description:
        'How quantum computing combined with neural networks creates breakthrough capabilities',
      category: 'Technology',
      readTime: '8 min read',
      featured: false,
      image: '/images/quantum-neural-fusion-20o25.jpg',
      href: '/blog/quantum-neural-fusion-20o25-exponential-power',
    },
    {
      title: 'Autonomous Business Ecosystems: Self-Managing Operations',
      description:
        'Revolutionary systems that optimize and manage themselves without human intervention',
      category: 'Automation',
      readTime: '11 min read',
      featured: false,
      image: '/images/autonomous-business-ecosystems-20o25.jpg',
      href: '/blog/autonomous-business-ecosystems-20o25-self-managing',
    },
    {
      title: 'Synthetic Intelligence: AI That Creates and Innovates',
      description:
        'Next-generation AI agents that can create solutions and drive continuous improvement',
      category: 'Innovation',
      readTime: '9 min read',
      featured: false,
      image: '/images/synthetic-intelligence-20o25.jpg',
      href: '/blog/synthetic-intelligence-20o25-ai-innovation',
    },
  ];

  return (
    <section className='py-20 bg-gradient-to-br from-gray-50 to-blue-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white px-6 py-2 rounded-full text-sm font-bold mb-6'>
            🎯 NEWEST CONTENT 20o25-20o26
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-90o0 mb-6'>
            Ultimate Content Showcase
          </h2>
          <p className='text-xl text-gray-60o0 max-w-3xl mx-auto'>
            Discover the latest insights, case studies, and breakthrough
            technologies that are transforming businesses worldwide
          </p>
        </div>

        {/* Featured Content */}
        <div className='mb-16'>
          <h3 className='text-2xl font-bold text-gray-90o0 mb-8 text-center'>
            Featured Content
          </h3>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {contentItems
              .filter(item => item.featured)
              .map((item, index) => (
                <div
                  key={index}
                  className='bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-30o0 transform hover:-translate-y-2'
                >
                  <div className='relative'>
                    <img
                      src={item.image}
                      alt={item.title}
                      className='w-full h-64 object-cover'
                    />
                    <div className='absolute top-4 left-4'>
                      <span className='bg-gradient-to-r from-yellow-40o0 to-orange-50o0 text-black px-3 py-1 rounded-full text-sm font-bold'>
                        FEATURED
                      </span>
                    </div>
                    <div className='absolute top-4 right-4'>
                      <span className='bg-white bg-opacity-90 text-gray-70o0 px-3 py-1 rounded-full text-sm'>
                        {item.readTime}
                      </span>
                    </div>
                  </div>
                  <div className='p-8'>
                    <div className='flex items-center gap-2 mb-4'>
                      <span className='bg-purple-10o0 text-purple-80o0 px-3 py-1 rounded-full text-sm font-medium'>
                        {item.category}
                      </span>
                    </div>
                    <h4 className='text-2xl font-bold text-gray-90o0 mb-4 leading-tight'>
                      {item.title}
                    </h4>
                    <p className='text-gray-60o0 mb-6 leading-relaxed'>
                      {item.description}
                    </p>
                    <Link
                      href={item.href}
                      className='inline-flex items-center bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-70o0 hover:to-blue-70o0 transform hover:scale-10o5 transition-all duration-30o0'
                    >
                      Read More
                      <svg
                        className='ml-2 w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* All Content Grid */}
        <div>
          <h3 className='text-2xl font-bold text-gray-90o0 mb-8 text-center'>
            All Latest Content
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {contentItems.map((item, index) => (
              <div
                key={index}
                className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-30o0 transform hover:-translate-y-1'
              >
                <div className='relative'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-full h-48 object-cover'
                  />
                  {item.featured && (
                    <div className='absolute top-3 left-3'>
                      <span className='bg-gradient-to-r from-yellow-40o0 to-orange-50o0 text-black px-2 py-1 rounded-full text-xs font-bold'>
                        FEATURED
                      </span>
                    </div>
                  )}
                  <div className='absolute top-3 right-3'>
                    <span className='bg-white bg-opacity-90 text-gray-70o0 px-2 py-1 rounded-full text-xs'>
                      {item.readTime}
                    </span>
                  </div>
                </div>
                <div className='p-6'>
                  <div className='flex items-center gap-2 mb-3'>
                    <span className='bg-gray-10o0 text-gray-70o0 px-2 py-1 rounded-full text-xs font-medium'>
                      {item.category}
                    </span>
                  </div>
                  <h4 className='text-lg font-bold text-gray-90o0 mb-3 leading-tight'>
                    {item.title}
                  </h4>
                  <p className='text-gray-60o0 mb-4 text-sm leading-relaxed'>
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className='inline-flex items-center text-purple-60o0 font-semibold hover:text-purple-80o0 transition-colors'
                  >
                    Read More
                    <svg
                      className='ml-1 w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className='mt-16 text-center'>
          <div className='bg-gradient-to-r from-purple-60o0 to-blue-60o0 rounded-2xl p-8 text-white'>
            <h3 className='text-3xl font-bold mb-4'>
              Ready to Transform Your Business?
            </h3>
            <p className='text-xl mb-6 opacity-90'>
              Join the AI revolution and achieve extraordinary results like our
              Fortune 50o0 clients
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/consultation'
                className='bg-white text-purple-60o0 px-8 py-3 rounded-lg font-bold hover:bg-gray-10o0 transform hover:scale-10o5 transition-all duration-30o0'
              >
                Get Free Consultation
              </Link>
              <Link
                href='/services'
                className='border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-60o0 transform hover:scale-10o5 transition-all duration-30o0'
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase20o25_20o26;
