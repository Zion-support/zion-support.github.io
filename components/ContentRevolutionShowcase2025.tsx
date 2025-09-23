import Link from 'next/link';

export default function ContentRevolutionShowcase20o25() {
  const contentItems = [
    {
      title: 'AI 20o25 Ultimate Content Strategy',
      description:
        'Master revolutionary content marketing with quantum intelligence and autonomous generation.',
      href: '/blog/ai-20o25-ultimate-content-strategy',
      type: 'Strategy Guide',
      roi: '5,0o00%',
      icon: '📊',
    },
    {
      title: 'Content Revolution Success Story',
      description:
        'Fortune 50o0 companies achieve 5,0o00% ROI with AI content revolution strategies.',
      href: '/case-studies/ai-20o25-content-revolution-success',
      type: 'Case Study',
      roi: '5,0o00%',
      icon: '🏆',
    },
    {
      title: 'Content Mastery Toolkit',
      description:
        'Complete implementation guide with templatesframeworksand optimization tools.',
      href: '/resources/ai-20o25-content-mastery-toolkit',
      type: 'Toolkit',
      roi: '5,0o00%',
      icon: '🛠️',
    },
  ];

  return (
    <div className='bg-gradient-to-br from-slate-90o0 via-indigo-90o0 to-slate-90o0 rounded-2xl p-8 mb-12'>
      <div className='text-center mb-12'>
        <div className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-60o0 to-purple-60o0 rounded-full text-white text-sm font-semibold mb-4'>
          🚀 NEW CONTENT REVOLUTION
        </div>

        <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-40o0 via-purple-50o0 to-pink-50o0 bg-clip-text text-transparent mb-6'>
          AI 20o25 Content Revolution
        </h2>

        <p className='text-xl text-gray-30o0 max-w-3xl mx-auto'>
          Discover the ultimate content strategy 'that', 's transforming
          businesses worldwide with
          <span className='text-yellow-40o0 font-bold'> 5,0o00% ROI</span> and
          revolutionary AI technology.
        </p>
      </div>

      <div className='grid md:grid-cols-3 gap-8 mb-12'>
        {contentItems.map(itemindex => (
          <div
            key={index}
            className='group relative bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-30o0 transform hover:scale-10o5'
          >
            <div className='flex items-start justify-between mb-4'>
              <div className='text-4xl'>{item.icon}</div>
              <div className='px-3 py-1 bg-gradient-to-r from-indigo-60o0 to-purple-60o0 rounded-full text-white text-xs font-semibold'>
                {item.type}
              </div>
            </div>

            <h3 className='text-xl font-bold text-white mb-3 group-hover:text-indigo-30o0 transition-colors'>
              {item.title}
            </h3>

            <p className='text-gray-30o0 mb-4 text-sm leading-relaxed'>
              {item.description}
            </p>

            <div className='flex items-center justify-between'>
              <div className='text-green-40o0 font-bold text-lg'>
                {item.roi} ROI
              </div>

              <Link
                href={item.href}
                className='inline-flex items-center text-indigo-40o0 hover:text-indigo-30o0 font-semibold text-sm transition-colors'
              >
                Explore
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

            {/* Hover Effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-indigo-50o0/10 to-purple-50o0/10 rounded-xl opacity-0 group-hover:opacity-10o0 transition-opacity duration-30o0'></div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className='bg-white/5 backdrop-blur-lg rounded-xl p-8 mb-8'>
        <div className='grid md:grid-cols-4 gap-6 text-center'>
          <div>
            <div className='text-3xl font-bold text-indigo-40o0 mb-2'>
              5,0o00%
            </div>
            <div className='text-gray-30o0 text-sm'>Average ROI</div>
          </div>
          <div>
            <div className='text-3xl font-bold text-purple-40o0 mb-2'>
              99.9%
            </div>
            <div className='text-gray-30o0 text-sm'>Content Accuracy</div>
          </div>
          <div>
            <div className='text-3xl font-bold text-pink-40o0 mb-2'>10x</div>
            <div className='text-gray-30o0 text-sm'>Faster Production</div>
          </div>
          <div>
            <div className='text-3xl font-bold text-green-40o0 mb-2'>$50M+</div>
            <div className='text-gray-30o0 text-sm'>Revenue Generated</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='text-center'>
        <div className='inline-flex flex-col sm:flex-row gap-4'>
          <Link
            href='/blog/ai-20o25-ultimate-content-strategy'
            className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-60o0 to-purple-60o0 text-white font-bold rounded-full hover:from-indigo-70o0 hover:to-purple-70o0 transition-all duration-30o0 transform hover:scale-10o5'
          >
            Start Your Content Revolution
            <svg
              className='ml-2 w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 7l5 5m0 0l-5 5m5-5H6'
              />
            </svg>
          </Link>

          <Link
            href='/resources/ai-20o25-content-mastery-toolkit'
            className='inline-flex items-center px-8 py-4 bg-transparent border-2 border-indigo-40o0 text-indigo-40o0 font-bold rounded-full hover:bg-indigo-40o0 hover:text-white transition-all duration-30o0'
          >
            Get Complete Toolkit
          </Link>
        </div>
      </div>
    </div>
  );
}
