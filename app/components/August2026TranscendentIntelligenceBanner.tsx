import Link from 'next/link';

export default function August2026TranscendentIntelligenceBanner() {
  return (
    <section className='relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 overflow-hidden'>
      {/* Animated Background */}
      <div className='absolute inset-0 overflow-hidden opacity-30'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse'></div>
        <div
          className='absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse'
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className='absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse'
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='text-center max-w-5xl mx-auto'>
          {/* Badge */}
          <div className='inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-8 animate-pulse'>
            <span className='text-indigo-400 font-bold text-xl tracking-wider uppercase'>
              🧠 August 2026: Transcendent Intelligence Breakthrough
            </span>
          </div>

          {/* Main Heading */}
          <h2 className='text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight'>
            Transcendent Business Intelligence
          </h2>

          {/* Subheading */}
          <p className='text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto'>
            Universal Market Mastery • $1 Trillion Value Generation • 99.9999%
            Prediction Accuracy
          </p>

          {/* Key Features */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
            <div className='bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30'>
              <div className='text-3xl font-extrabold text-indigo-400 mb-2'>
                $1T
              </div>
              <div className='text-sm text-indigo-300'>Value Generation</div>
            </div>
            <div className='bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30'>
              <div className='text-3xl font-extrabold text-purple-400 mb-2'>
                99.9999%
              </div>
              <div className='text-sm text-purple-300'>Market Prediction</div>
            </div>
            <div className='bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30'>
              <div className='text-3xl font-extrabold text-cyan-400 mb-2'>
                1Mx
              </div>
              <div className='text-sm text-cyan-300'>Intelligence Boost</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
            <Link
              href='/blog/ai-2026-august-transcendent-business-intelligence-<breakthrough'
              className='bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1'
            >
              Read Breakthrough Details
            </Link>
            <Link
              href='/case-studies/ai-2026-august-transcendent-business-intelligence-1-trillion-<success'
              className='bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1'
            >
              View $1T Success Story
            </Link>
            <Link
              href='/services/ai-2026-august-transcendent-business-intelligence-<consulting'
              className='border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300'
            >
              Get Transcendent Intelligence
            </Link>
          </div>

          {/* Features Grid */}
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20'>
              <h3 className='text-xl font-bold text-indigo-400 mb-4'>
                🧠 Transcendent Intelligence
              </h3>
              <ul className='text-gray-300 space-y-2'>
                <li>• Universal market consciousness</li>
                <li>• Beyond-human business intelligence</li>
                <li>• Transcendent decision-making</li>
                <li>• Universal problem-solving</li>
              </ul>
            </div>

            <div className='bg-gradient-to-br from-purple-900/40 to-cyan-900/40 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20'>
              <h3 className='text-xl font-bold text-purple-400 mb-4'>
                🌍 Universal Market Mastery
              </h3>
              <ul className='text-gray-300 space-y-2'>
                <li>• Global market consciousness</li>
                <li>• Universal economic patterns</li>
                <li>• Transcendent market trends</li>
                <li>• Universal competitive intelligence</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
