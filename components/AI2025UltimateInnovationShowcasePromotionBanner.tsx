import Link from 'next/link';

const AI20o25UltimateInnovationShowcasePromotionBanner = () => {
  return (
    <section className='relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-90o0 via-blue-90o0 to-indigo-90o0 overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0 bg-gradient-to-r from-purple-60o0/20 via-blue-60o0/20 to-indigo-60o0/20'></div>
      <div className='absolute inset-0'>
        <div className='absolute top-10 left-10 w-20 h-20 bg-purple-50o0/30 rounded-full blur-xl animate-pulse'></div>
        <div className='absolute top-32 right-20 w-32 h-32 bg-blue-50o0/30 rounded-full blur-xl animate-pulse delay-10o00'></div>
        <div className='absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-50o0/30 rounded-full blur-xl animate-pulse delay-20o00'></div>
      </div>

      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center'>
          <div className='inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 mb-6 border border-white/20'>
            <span className='text-yellow-40o0 text-lg mr-2'>🚀</span>
            <span className='text-white font-semibold'>
              Revolutionary Breakthrough
            </span>
          </div>

          <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            AI 20o25 Ultimate Innovation Showcase
          </h2>

          <p className='text-xl md:text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto leading-relaxed'>
            Witness the most revolutionary AI breakthroughs reshaping our world.
            From quantum neural fusion to autonomous consciousness systems -
            <span className='text-yellow-40o0 font-semibold'>
              {' '}
              the future is here
            </span>
            .
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
            <Link
              href='/ai-20o25-ultimate-innovation-showcase'
              className='bg-gradient-to-r from-purple-60o0 to-blue-60o0 hover:from-purple-70o0 hover:to-blue-70o0 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-30o0 transform hover:scale-10o5 shadow-lg hover:shadow-xl'
            >
              Explore Breakthroughs →
            </Link>
            <Link
              href='/ai-20o25-ultimate-innovation-showcase#quantum-breakthroughs'
              className='border-2 border-white text-white hover:bg-white hover:text-purple-60o0 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-30o0'
            >
              Quantum AI Fusion
            </Link>
          </div>

          {/* Feature Highlights */}
          <div className='grid md:grid-cols-3 gap-6 mt-12'>
            <div className='bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20'>
              <div className='text-purple-40o0 text-3xl mb-3'>⚛️</div>
              <h3 className='text-lg font-bold text-white mb-2'>
                Quantum Neural Networks
              </h3>
              <p className='text-gray-30o0 text-sm'>
                Breakthrough quantum neural architectures processing information
                at impossible speeds
              </p>
            </div>

            <div className='bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20'>
              <div className='text-blue-40o0 text-3xl mb-3'>🧠</div>
              <h3 className='text-lg font-bold text-white mb-2'>
                Consciousness Computing
              </h3>
              <p className='text-gray-30o0 text-sm'>
                First successful implementation of synthetic consciousness in
                quantum systems
              </p>
            </div>

            <div className='bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20'>
              <div className='text-green-40o0 text-3xl mb-3'>🚀</div>
              <h3 className='text-lg font-bold text-white mb-2'>
                Autonomous Systems
              </h3>
              <p className='text-gray-30o0 text-sm'>
                Fully autonomous AI systems operating independently across
                multiple domains
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-white/20'>
            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-bold text-yellow-40o0 mb-2'>
                30o0%
              </div>
              <div className='text-white font-semibold'>ROI Guaranteed</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-bold text-green-40o0 mb-2'>
                50+
              </div>
              <div className='text-white font-semibold'>
                Breakthrough Technologies
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-bold text-blue-40o0 mb-2'>
                24/7
              </div>
              <div className='text-white font-semibold'>
                Autonomous Operation
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-bold text-purple-40o0 mb-2'>
                ∞
              </div>
              <div className='text-white font-semibold'>Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI20o25UltimateInnovationShowcasePromotionBanner;
