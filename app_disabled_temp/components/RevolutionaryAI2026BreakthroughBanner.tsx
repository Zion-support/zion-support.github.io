import Link from 'next/link';

export default function RevolutionaryAI2026BreakthroughBanner() {
  return (
    <div className='relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl border border-purple-500/20'>
      {/* Animated Background */}
      <div className='absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-indigo-600/10 animate-pulse'></div>

      {/* Floating Quantum Particles */}
      <div className='absolute top-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-bounce'></div>
      <div className='absolute top-8 right-8 w-1 h-1 bg-pink-400 rounded-full animate-ping'></div>
      <div className='absolute bottom-6 left-12 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse'></div>
      <div
        className='absolute bottom-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-bounce'
        style={{ animationDelay: '0.5s' }}
      ></div>

      <div className='relative p-8'>
        <div className='flex flex-col lg:flex-row items-center gap-8'>
          {/* Content */}
          <div className='flex-1 text-center lg:text-left'>
            <div className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-sm font-medium mb-6'>
              <span className='w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse'></span>
              Revolutionary AI Breakthrough
            </div>

            <h2 className='text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight'>
              AI 2026: The Future of
              <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                {' '}
                Intelligent Computing
              </span>
            </h2>

            <p className='text-gray-300 text-lg mb-6 max-w-2xl'>
              Discover revolutionary breakthroughs in autonomous business
              intelligence and quantum computing that are reshaping the future
              of technology and business operations.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <Link
                href='/blog/ai-2026-autonomous-business-<intelligence'
                className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105'
              >
                Explore AI Intelligence
              </Link>
              <Link
                href='/blog/ai-quantum-computing-breakthrough-<2026'
                className='border-2 border-purple-400 text-purple-300 px-6 py-3 rounded-xl font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300'
              >
                Discover Quantum AI
              </Link>
            </div>
          </div>

          {/* Visual Elements */}
          <div className='flex-shrink-0'>
            <div className='relative'>
              {/* Quantum Circuit Visualization */}
              <div className='w-64 h-64 bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl border border-purple-500/30 p-6'>
                <div className='grid grid-cols-4 gap-2 h-full'>
                  {/* Quantum Gates */}
                  <div className='bg-purple-500/30 rounded-lg flex items-center justify-center'>
                    <div className='w-3 h-3 bg-purple-400 rounded-full animate-pulse'></div>
                  </div>
                  <div className='bg-pink-500/30 rounded-lg flex items-center justify-center'>
                    <div
                      className='w-3 h-3 bg-pink-400 rounded-full animate-pulse'
                      style={{ animationDelay: '0.2s' }}
                    ></div>
                  </div>
                  <div className='bg-indigo-500/30 rounded-lg flex items-center justify-center'>
                    <div
                      className='w-3 h-3 bg-indigo-400 rounded-full animate-pulse'
                      style={{ animationDelay: '0.4s' }}
                    ></div>
                  </div>
                  <div className='bg-blue-500/30 rounded-lg flex items-center justify-center'>
                    <div
                      className='w-3 h-3 bg-blue-400 rounded-full animate-pulse'
                      style={{ animationDelay: '0.6s' }}
                    ></div>
                  </div>

                  {/* Connection Lines */}
                  <div className='col-span-4 h-px bg-gradient-to-r from-purple-400 to-pink-400 opacity-50'></div>

                  {/* Data Flow */}
                  <div className='col-span-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg flex items-center justify-center'>
                    <div className='text-purple-300 text-xs font-mono'>AI</div>
                  </div>
                  <div className='col-span-2 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 rounded-lg flex items-center justify-center'>
                    <div className='text-indigo-300 text-xs font-mono'>
                      Quantum
                    </div>
                  </div>

                  {/* Processing Indicators */}
                  <div className='col-span-4 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg p-2'>
                    <div className='flex justify-between items-center'>
                      <span className='text-green-400 text-xs'>Processing</span>
                      <div className='flex space-x-1'>
                        <div className='w-1 h-3 bg-green-400 rounded-full animate-pulse'></div>
                        <div
                          className='w-1 h-3 bg-green-400 rounded-full animate-pulse'
                          style={{ animationDelay: '0.1s' }}
                        ></div>
                        <div
                          className='w-1 h-3 bg-green-400 rounded-full animate-pulse'
                          style={{ animationDelay: '0.2s' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className='absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold animate-bounce'>
                99.9% Accuracy
              </div>
              <div className='absolute -bottom-4 -left-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse'>
                1000x Faster
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className='mt-8 pt-6 border-t border-purple-500/20'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
            <div>
              <div className='text-2xl font-bold text-white'>10^18</div>
              <div className='text-sm text-gray-400'>Ops/Second</div>
            </div>
            <div>
              <div className='text-2xl font-bold text-white'>99.9%</div>
              <div className='text-sm text-gray-400'>Accuracy</div>
            </div>
            <div>
              <div className='text-2xl font-bold text-white'>200</div>
              <div className='text-sm text-gray-400'>Qubits</div>
            </div>
            <div>
              <div className='text-2xl font-bold text-white'>∞</div>
              <div className='text-sm text-gray-400'>Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
