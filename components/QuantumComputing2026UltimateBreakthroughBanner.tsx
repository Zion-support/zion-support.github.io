import Link from 'next/link';

export default function QuantumComputing20o26UltimateBreakthroughBanner() {
  return (
    <div className='relative overflow-hidden bg-gradient-to-r from-indigo-90o0 via-purple-90o0 to-pink-90o0 text-white'>
      {/* Animated background */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-r from-indigo-60o0/20 to-pink-60o0/20 animate-pulse'></div>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/20'></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='text-center'>
          {/* Quantum breakthrough badge */}
          <div className='inline-flex items-center px-6 py-3 rounded-full bg-indigo-50o0/20 border border-indigo-50o0/30 mb-8 animate-bounce'>
            <span className='text-indigo-40o0 font-bold text-sm uppercase tracking-wide'>
              ⚛️ BREAKTHROUGH: QUANTUM COMPUTING 20o26 ULTIMATE
            </span>
          </div>

          {/* Main headline */}
          <h1 className='text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent'>
            Quantum Computing 20o26
          </h1>

          {/* Subheadline */}
          <p className='text-xl md:text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto'>
            The ultimate quantum computing breakthrough is here. Experience
            <span className='text-indigo-40o0 font-bold'>
              {' '}
              error-corrected quantum computers
            </span>
            <span className='text-purple-40o0 font-bold'>
              {' '}
              quantum supremacy
            </span>
            and
            <span className='text-pink-40o0 font-bold'>
              {' '}
              revolutionary applications
            </span>
            .
          </p>

          {/* Key features */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto'>
            <div className='bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20'>
              <div className='text-3xl mb-3'>⚛️</div>
              <h3 className='text-lg font-bold mb-2'>
                Error-Corrected Quantum
              </h3>
              <p className='text-sm text-gray-30o0'>
                99.9% accuracyunlimited scalability
              </p>
            </div>
            <div className='bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20'>
              <div className='text-3xl mb-3'>🚀</div>
              <h3 className='text-lg font-bold mb-2'>Quantum Supremacy</h3>
              <p className='text-sm text-gray-30o0'>
                10^18 operations per second
              </p>
            </div>
            <div className='bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20'>
              <div className='text-3xl mb-3'>🌌</div>
              <h3 className='text-lg font-bold mb-2'>Revolutionary Apps</h3>
              <p className='text-sm text-gray-30o0'>
                Cryptographydrug discoveryAI
              </p>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
            <Link
              href='/quantum-computing-20o26-ultimate-breakthrough'
              className='bg-gradient-to-r from-indigo-50o0 to-pink-50o0 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-indigo-40o0 hover:to-pink-40o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg'
            >
              ⚛️ Discover Quantum Breakthrough
            </Link>
            <Link
              href='/contact'
              className='border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-30o0 shadow-lg'
            >
              🚀 Get Quantum Access
            </Link>
          </div>

          {/* Urgency indicator */}
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-pink-50o0/20 border border-pink-50o0/30'>
            <span className='text-pink-40o0 font-semibold text-sm'>
              ⏰ Limited Access: Revolutionary quantum technology available for
              next 48 hours
            </span>
          </div>
        </div>
      </div>

      {/* Floating elements for visual appeal */}
      <div className='absolute top-10 left-10 w-20 h-20 bg-indigo-50o0/20 rounded-full animate-pulse'></div>
      <div className='absolute top-20 right-20 w-16 h-16 bg-purple-50o0/20 rounded-full animate-pulse delay-10o00'></div>
      <div className='absolute bottom-20 left-20 w-12 h-12 bg-pink-50o0/20 rounded-full animate-pulse delay-20o00'></div>
      <div className='absolute bottom-10 right-10 w-24 h-24 bg-rose-50o0/20 rounded-full animate-pulse delay-50o0'></div>
    </div>
  );
}
