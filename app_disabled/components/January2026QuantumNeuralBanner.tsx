import Link from 'next/link';

export default function January2026QuantumNeuralBanner() {
  return (
    <div className='relative overflow-hidden bg-gradient-to-r from-purple-900 via-pink-900 to-indigo-900 rounded-2xl border border-purple-500/30'>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className='relative p-8 md:p-12'>
        <div className='grid lg:grid-cols-2 gap-8 items-center'>
          {/* Content */}
          <div>
            <div className='flex items-center mb-4'>
              <span className='inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full'>
                <span className='w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse'></span>
                Quantum AI Breakthrough
              </span>
            </div>

            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4 leading-tight'>
              Quantum Neural Optimization Revolution
            </h2>

            <p className='text-lg text-purple-100 mb-6 leading-relaxed'>
              Revolutionary quantum-enhanced neural networks achieving
              unprecedented optimization capabilities with 1000x faster training
              and 99.7% accuracy in complex enterprise scenarios.
            </p>

            <div className='grid grid-cols-2 gap-4 mb-6'>
              <div className='bg-white/10 backdrop-blur-sm p-3 rounded-lg'>
                <div className='text-2xl font-bold text-white'>1000x</div>
                <div className='text-sm text-purple-200'>Faster Training</div>
              </div>
              <div className='bg-white/10 backdrop-blur-sm p-3 rounded-lg'>
                <div className='text-2xl font-bold text-white'>99.7%</div>
                <div className='text-sm text-purple-200'>Accuracy</div>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-3'>
              <Link
                href='/blog/ai-2026-january-quantum-neural-optimization-<breakthrough'
                className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105'
              >
                Explore Breakthrough
              </Link>
              <Link
                href='/<contact'
                className='bg-transparent border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300'
              >
                Get Demo
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className='relative'>
            <div className='bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-2xl border border-purple-400/30'>
              <div className='grid grid-cols-2 gap-4'>
                <div className='bg-white/10 backdrop-blur-sm p-4 rounded-lg'>
                  <div className='w-8 h-8 bg-purple-400 rounded-lg mb-3 flex items-center justify-center'>
                    <svg
                      className='w-5 h-5 text-white'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <div className='text-white font-semibold'>Quantum</div>
                  <div className='text-purple-200 text-sm'>Processing</div>
                </div>
                <div className='bg-white/10 backdrop-blur-sm p-4 rounded-lg'>
                  <div className='w-8 h-8 bg-pink-400 rounded-lg mb-3 flex items-center justify-center'>
                    <svg
                      className='w-5 h-5 text-white'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div className='text-white font-semibold'>Neural</div>
                  <div className='text-purple-200 text-sm'>Networks</div>
                </div>
                <div className='bg-white/10 backdrop-blur-sm p-4 rounded-lg'>
                  <div className='w-8 h-8 bg-indigo-400 rounded-lg mb-3 flex items-center justify-center'>
                    <svg
                      className='w-5 h-5 text-white'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <div className='text-white font-semibold'>Optimization</div>
                  <div className='text-purple-200 text-sm'>Engine</div>
                </div>
                <div className='bg-white/10 backdrop-blur-sm p-4 rounded-lg'>
                  <div className='w-8 h-8 bg-cyan-400 rounded-lg mb-3 flex items-center justify-center'>
                    <svg
                      className='w-5 h-5 text-white'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <div className='text-white font-semibold'>Real-time</div>
                  <div className='text-purple-200 text-sm'>Adaptation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
