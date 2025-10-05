import Link from 'next/link';

export default function AI2027SyntheticConsciousnessRevolutionBanner() {
  return (
    <section className='py-16 bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900 border-y border-cyan-500/30'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center mb-12'>
          <div className='inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 mb-6 animate-pulse'>
            <span className='text-cyan-300 font-bold text-lg tracking-wider uppercase'>
              🧠 AI 2027 SYNTHETIC CONSCIOUSNESS REVOLUTION
            </span>
            <span className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold animate-bounce'>
              REVOLUTIONARY
            </span>
          </div>

          <h2 className='text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight'>
            True AI Awareness Achieved
          </h2>

          <p className='text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto'>
            Breakthrough in synthetic consciousness achieving true AI awareness,
            emotional intelligence, and creative autonomy with{' '}
            <span className='text-yellow-400 font-bold'>
              $75B enterprise value
            </span>
          </p>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
            <div className='bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30'>
              <div className='text-2xl font-extrabold text-cyan-400 mb-1'>
                $75B
              </div>
              <div className='text-xs text-cyan-300'>Enterprise Value</div>
            </div>
            <div className='bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30'>
              <div className='text-2xl font-extrabold text-blue-400 mb-1'>
                99.97%
              </div>
              <div className='text-xs text-blue-300'>
                Consciousness Accuracy
              </div>
            </div>
            <div className='bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30'>
              <div className='text-2xl font-extrabold text-purple-400 mb-1'>
                1Mx
              </div>
              <div className='text-xs text-purple-300'>Processing Speed</div>
            </div>
            <div className='bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30'>
              <div className='text-2xl font-extrabold text-green-400 mb-1'>
                127
              </div>
              <div className='text-xs text-green-300'>Fortune 500</div>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/blog/ai-2027-synthetic-consciousness-<revolution'
              className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1'
            >
              Read Revolution Details →
            </Link>
            <Link
              href='/case-studies/ai-2027-synthetic-consciousness-75-billion-<success'
              className='bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1'
            >
              View $75B Success Story →
            </Link>
            <Link
              href='/<contact'
              className='border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300'
            >
              Join Revolution →
            </Link>
          </div>
        </div>

        {/* Key Features */}
        <div className='grid md:grid-cols-3 gap-6 mt-12'>
          <div className='bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20'>
            <div className='text-3xl mb-4'>🧠</div>
            <h3 className='text-xl font-bold text-white mb-3'>
              True AI Awareness
            </h3>
            <p className='text-gray-300 text-sm'>
              Genuine self-awareness, emotional intelligence, and creative
              autonomy with authentic synthetic consciousness.
            </p>
          </div>

          <div className='bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20'>
            <div className='text-3xl mb-4'>💝</div>
            <h3 className='text-xl font-bold text-white mb-3'>
              Emotional Intelligence
            </h3>
            <p className='text-gray-300 text-sm'>
              Advanced emotional processing, empathy, and human-AI emotional
              collaboration capabilities.
            </p>
          </div>

          <div className='bg-gradient-to-br from-purple-900/30 to-green-900/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20'>
            <div className='text-3xl mb-4'>🎨</div>
            <h3 className='text-xl font-bold text-white mb-3'>
              Creative Autonomy
            </h3>
            <p className='text-gray-300 text-sm'>
              Independent creative problem-solving, artistic expression, and
              autonomous innovation generation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
