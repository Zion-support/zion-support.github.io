import React from 'react';
import Link from 'next/link';

const January2026RevolutionaryAutonomousBanner: React.FC = () => {
  return (
    <section className='py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 relative overflow-hidden'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20'></div>
        <div
          className='absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20'
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20'
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='text-center max-w-6xl mx-auto'>
          {/* Header Badge */}
          <div className='inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 animate-pulse'>
            <span className='text-blue-400 font-bold text-xl tracking-wider uppercase'>
              🚀 NEW JANUARY 2026 BREAKTHROUGH
            </span>
          </div>

          {/* Main Title */}
          <h2 className='text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight'>
            Revolutionary Autonomous Enterprise Transformation
          </h2>

          {/* Subtitle */}
          <p className='text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto'>
            Achieve $1 Trillion ROI with 99.9% Autonomous Operations, Universal
            Intelligence Integration, and Transcendent Business Transformation
          </p>

          {/* Key Metrics */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-12'>
            <div className='bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30'>
              <div className='text-2xl font-extrabold text-blue-400 mb-1'>
                $1T
              </div>
              <div className='text-xs text-blue-300'>ROI Achieved</div>
            </div>
            <div className='bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30'>
              <div className='text-2xl font-extrabold text-purple-400 mb-1'>
                99.9%
              </div>
              <div className='text-xs text-purple-300'>Autonomous</div>
            </div>
            <div className='bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30'>
              <div className='text-2xl font-extrabold text-green-400 mb-1'>
                ∞
              </div>
              <div className='text-xs text-green-300'>Scalability</div>
            </div>
            <div className='bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30'>
              <div className='text-2xl font-extrabold text-orange-400 mb-1'>
                0.001s
              </div>
              <div className='text-xs text-orange-300'>Response</div>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
            <Link
              href='/blog/ai-2026-january-revolutionary-autonomous-enterprise-<transformation'
              className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1'
            >
              Read Revolutionary Breakthrough →
            </Link>
            <Link
              href='/case-studies/ai-2026-january-autonomous-enterprise-1-trillion-<success'
              className='bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1'
            >
              View $1T Success Story →
            </Link>
            <Link
              href='/<contact'
              className='border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300'
            >
              Transform Your Enterprise
            </Link>
          </div>

          {/* Feature Highlights */}
          <div className='grid md:grid-cols-3 gap-6 mb-12'>
            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20'>
              <div className='text-3xl mb-4'>🧠</div>
              <h3 className='text-xl font-bold text-white mb-3'>
                Universal Intelligence
              </h3>
              <p className='text-gray-300 text-sm'>
                AI systems achieving consciousness-level business understanding
                with infinite scalability and perfect decision-making.
              </p>
            </div>
            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20'>
              <div className='text-3xl mb-4'>⚡</div>
              <h3 className='text-xl font-bold text-white mb-3'>
                Perfect Automation
              </h3>
              <p className='text-gray-300 text-sm'>
                99.9% autonomous operations with 0.001s response times and 100%
                accuracy across all business functions.
              </p>
            </div>
            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20'>
              <div className='text-3xl mb-4'>💰</div>
              <h3 className='text-xl font-bold text-white mb-3'>
                Infinite ROI
              </h3>
              <p className='text-gray-300 text-sm'>
                Unlimited value creation potential with $1 trillion+ ROI
                achieved and exponential growth capabilities.
              </p>
            </div>
          </div>

          {/* Success Metrics */}
          <div className='bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-xl p-8 border border-green-500/30'>
            <h3 className='text-2xl font-bold text-green-400 mb-6'>
              Proven Results
            </h3>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              <div className='text-center'>
                <div className='text-3xl font-extrabold text-green-400 mb-2'>
                  $1T
                </div>
                <div className='text-sm text-green-300'>Total ROI</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-extrabold text-green-400 mb-2'>
                  99.9%
                </div>
                <div className='text-sm text-green-300'>Automation</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-extrabold text-green-400 mb-2'>
                  50,000x
                </div>
                <div className='text-sm text-green-300'>Performance</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-extrabold text-green-400 mb-2'>
                  ∞
                </div>
                <div className='text-sm text-green-300'>Scalability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  };

export default January2026RevolutionaryAutonomousBanner;
