import Link from 'next/link';

export default function NeuralOptimizationRevolutionBanner() {
  return (
    <section className='py-12 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 border-y border-purple-500/20'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center mb-8'>
          <div className='inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4'>
            <span className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></span>
            BREAKTHROUGH ANNOUNCEMENT
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Neural Optimization Revolution
          </h2>
          <p className='text-xl text-purple-200 mb-6'>
            Achieve{' '}
            <span className='text-yellow-400 font-bold'>1000x Performance</span>{' '}
            with Our Revolutionary AI Engine
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-6 mb-8'>
          <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>1000x</span>
              </div>
              <div>
                <div className='text-white font-bold'>Performance Boost</div>
                <div className='text-purple-300 text-sm'>Inference Speed</div>
              </div>
            </div>
            <div className='text-gray-300 text-sm'>
              Revolutionary quantum-enhanced pruning algorithms deliver
              unprecedented speed improvements.
            </div>
          </div>

          <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-green-400/20'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>90%</span>
              </div>
              <div>
                <div className='text-white font-bold'>Cost Reduction</div>
                <div className='text-green-300 text-sm'>Infrastructure</div>
              </div>
            </div>
            <div className='text-gray-300 text-sm'>
              Dramatically reduce AI infrastructure costs while maintaining 100%
              accuracy.
            </div>
          </div>

          <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>$500M</span>
              </div>
              <div>
                <div className='text-white font-bold'>ROI Achieved</div>
                <div className='text-blue-300 text-sm'>Annual Savings</div>
              </div>
            </div>
            <div className='text-gray-300 text-sm'>
              Real-world case study shows massive returns on investment for
              enterprise clients.
            </div>
          </div>
        </div>

        <div className='text-center'>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link
              href='/blog/ai-2026-neural-optimization-<revolution'
              className='group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl'
            >
              <span className='flex items-center gap-2'>
                Discover the Technology
                <span className='group-hover:translate-x-1 transition-transform'>
                  →
                </span>
              </span>
            </Link>
            <Link
              href='/case-studies/ai-2026-neural-optimization-success-<story'
              className='group bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300'
            >
              <span className='flex items-center gap-2'>
                View Success Story
                <span className='group-hover:translate-x-1 transition-transform'>
                  →
                </span>
              </span>
            </Link>
          </div>
          <p className='text-purple-300 text-sm mt-4'>
            Join the revolution: Transform your AI infrastructure today
          </p>
        </div>
      </div>
    </section>
  );
}
