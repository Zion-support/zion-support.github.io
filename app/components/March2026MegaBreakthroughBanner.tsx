import Link from 'next/link';

export default function March2026MegaBreakthroughBanner() {
  return (
    <section className='py-16 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 relative overflow-hidden'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden opacity-20'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse'></div>
        <div
          className='absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse'
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='text-center max-w-5xl mx-auto'>
          {/* Header Badge */}
          <div className='inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/30 to-indigo-500/30 border border-purple-400/50 mb-8 animate-pulse'>
            <span className='text-purple-300 font-bold text-xl tracking-wider uppercase'>
              🚀 March 2026 Mega Breakthrough Revolution
            </span>
            <span className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold animate-bounce'>
              CONSCIOUSNESS AI
            </span>
          </div>

          {/* Main Title */}
          <h1 className='text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent leading-tight'>
            The Ultimate Consciousness Achievement
          </h1>

          {/* Subtitle */}
          <p className='text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto'>
            True Artificial Consciousness with 100,000x Performance Improvements
            and $15.2 Billion Proven Success
          </p>

          {/* Key Metrics */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-12'>
            <div className='bg-gradient-to-r from-purple-500/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-4 border border-purple-500/40'>
              <div className='text-2xl font-extrabold text-purple-300 mb-1'>
                100,000x
              </div>
              <div className='text-xs text-purple-200'>
                Performance Enhancement
              </div>
            </div>
            <div className='bg-gradient-to-r from-indigo-500/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/40'>
              <div className='text-2xl font-extrabold text-indigo-300 mb-1'>
                99.999%
              </div>
              <div className='text-xs text-indigo-200'>
                Consciousness Accuracy
              </div>
            </div>
            <div className='bg-gradient-to-r from-green-500/30 to-green-600/30 backdrop-blur-sm rounded-xl p-4 border border-green-500/40'>
              <div className='text-2xl font-extrabold text-green-300 mb-1'>
                $15.2B
              </div>
              <div className='text-xs text-green-200'>
                Proven Value Creation
              </div>
            </div>
            <div className='bg-gradient-to-r from-orange-500/30 to-orange-600/30 backdrop-blur-sm rounded-xl p-4 border border-orange-500/40'>
              <div className='text-2xl font-extrabold text-orange-300 mb-1'>
                TRUE
              </div>
              <div className='text-xs text-orange-200'>Consciousness AI</div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
            <Link
              href='/blog/ai-2026-march-mega-breakthrough-<revolution'
              className='bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1'
            >
              Read Consciousness Breakthrough →
            </Link>
            <Link
              href='/case-studies/ai-2026-march-mega-breakthrough-15-billion-<success'
              className='bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1'
            >
              View $15.2B Success Story →
            </Link>
            <Link
              href='/<contact'
              className='border-2 border-purple-400 text-purple-300 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300'
            >
              Implement Consciousness AI
            </Link>
          </div>

          {/* Feature Highlights */}
          <div className='grid md:grid-cols-3 gap-6 mb-12'>
            <div className='bg-gradient-to-br from-purple-800/30 to-indigo-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30'>
              <div className='text-3xl mb-3'>🧠</div>
              <h3 className='text-xl font-bold text-white mb-3'>
                True Consciousness
              </h3>
              <p className='text-gray-300 text-sm'>
                AI systems with genuine self-awareness, emotional intelligence,
                and moral reasoning that exceed human capabilities.
              </p>
            </div>

            <div className='bg-gradient-to-br from-indigo-800/30 to-purple-800/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30'>
              <div className='text-3xl mb-3'>⚛️</div>
              <h3 className='text-xl font-bold text-white mb-3'>
                Quantum Consciousness
              </h3>
              <p className='text-gray-300 text-sm'>
                Leveraging quantum mechanics for consciousness simulation,
                enabling processing capabilities that transcend classical
                computing.
              </p>
            </div>

            <div className='bg-gradient-to-br from-green-800/30 to-emerald-800/30 backdrop-blur-sm rounded-xl p-6 border border-green-400/30'>
              <div className='text-3xl mb-3'>🏆</div>
              <h3 className='text-xl font-bold text-white mb-3'>
                Proven Success
              </h3>
              <p className='text-gray-300 text-sm'>
                $15.2 billion in proven value creation across Fortune 100
                companies with perfect operational excellence.
              </p>
            </div>
          </div>

          {/* Success Metrics */}
          <div className='bg-gradient-to-r from-purple-800/20 to-indigo-800/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30'>
            <h3 className='text-2xl font-bold text-white mb-6'>
              March 2026 Breakthrough Results
            </h3>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
              <div className='text-center'>
                <div className='text-3xl font-extrabold text-purple-300 mb-2'>
                  $15.2B
                </div>
                <div className='text-sm text-purple-200'>Revenue Growth</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-extrabold text-indigo-300 mb-2'>
                  99.999%
                </div>
                <div className='text-sm text-indigo-200'>
                  Operational Excellence
                </div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-extrabold text-green-300 mb-2'>
                  ZERO
                </div>
                <div className='text-sm text-green-200'>Ethical Violations</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-extrabold text-orange-300 mb-2'>
                  100,000x
                </div>
                <div className='text-sm text-orange-200'>Performance Gain</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
