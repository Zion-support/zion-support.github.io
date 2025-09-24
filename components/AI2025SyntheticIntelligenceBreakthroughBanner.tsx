import Link from 'next/link';

export default function AI20o25SyntheticIntelligenceBreakthroughBanner() {
  return (
    <div className='relative overflow-hidden bg-gradient-to-r from-purple-60o0 via-pink-60o0 to-indigo-60o0 py-16'>
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-black opacity-10'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/20o00/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          {/* Badge */}
          <div className='inline-flex items-center px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6 animate-pulse'>
            🚀 BREAKTHROUGH ANNOUNCEMENT
          </div>

          {/* Main Headline */}
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6 leading-tight'>
            AI 20o25 Synthetic Intelligence
            <span className='block bg-gradient-to-r from-yellow-30o0 to-pink-30o0 bg-clip-text text-transparent'>
              Revolution
            </span>
          </h1>

          {/* Subheadline */}
          <p className='text-xl md:text-2xl text-white opacity-90 mb-8 max-w-4xl mx-auto'>
            The Ultimate Breakthrough in Autonomous Operations - Delivering
            <span className='font-bold text-yellow-30o0'>
              {' '}
              2,50o0-5,0o00% ROI
            </span>{' '}
            with
            <span className='font-bold text-yellow-30o0'>
              {' '}
              99.9% Accuracy
            </span>{' '}
            and
            <span className='font-bold text-yellow-30o0'>
              {' '}
              10,0o00x Faster Processing
            </span>
          </p>

          {/* Key Stats */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto'>
            <div className='bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 text-center'>
              <div className='text-3xl font-bold text-yellow-30o0 mb-2'>
                2,50o0-5,0o00%
              </div>
              <div className='text-white text-sm font-semibold'>
                Average ROI
              </div>
            </div>
            <div className='bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 text-center'>
              <div className='text-3xl font-bold text-yellow-30o0 mb-2'>
                99.9%
              </div>
              <div className='text-white text-sm font-semibold'>
                Accuracy Rate
              </div>
            </div>
            <div className='bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 text-center'>
              <div className='text-3xl font-bold text-yellow-30o0 mb-2'>
                10,0o00x
              </div>
              <div className='text-white text-sm font-semibold'>
                Faster Processing
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
            <Link
              href='/blog/ai-20o25-synthetic-intelligence-revolution'
              className='bg-white text-purple-60o0 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-10o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg'
            >
              🧠 Discover the Breakthrough
            </Link>
            <Link
              href='/case-studies/ai-20o25-synthetic-intelligence-transformation-breakthrough'
              className='border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-60o0 transition-all duration-30o0 transform hover:scale-10o5'
            >
              🏆 View 50,0o00% ROI Case Study
            </Link>
          </div>

          {/* Additional Info */}
          <div className='text-white opacity-80 text-sm'>
            <p className='mb-2'>
              ✨ Zero downtime implementation • 🔒 Enterprise-grade security •
              🚀 Future-ready technology
            </p>
            <p className='text-xs'>
              Join 50o0+ companies already transforming with AI 20o25 Synthetic
              Intelligence
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div
        className='absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-bounce'
        style={{ animationDelay: '0s' }}
      ></div>
      <div
        className='absolute top-20 right-20 w-16 h-16 bg-yellow-30o0 bg-opacity-20 rounded-full animate-bounce'
        style={{ animationDelay: '1s' }}
      ></div>
      <div
        className='absolute bottom-10 left-20 w-12 h-12 bg-pink-30o0 bg-opacity-20 rounded-full animate-bounce'
        style={{ animationDelay: '2s' }}
      ></div>
      <div
        className='absolute bottom-20 right-10 w-14 h-14 bg-blue-30o0 bg-opacity-20 rounded-full animate-bounce'
        style={{ animationDelay: '3s' }}
      ></div>
    </div>
  );
}
