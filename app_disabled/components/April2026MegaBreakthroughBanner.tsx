import { Star } from 'lucide-react';
import Link from 'next/link';

export default function April2026MegaBreakthroughBanner() {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-16'>
      {/* Animated Background */}
      <div className='absolute inset-0 overflow-hidden opacity-20'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse'></div>
        <div
          className='absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse'
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className='absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse'
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='text-center max-w-5xl mx-auto'>
          {/* Badge */}
          <div className='inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse'>
            <span className='text-purple-400 font-bold text-xl tracking-wider uppercase'>
              🚀 APRIL 2026 MEGA BREAKTHROUGH
            </span>
          </div>

          {/* Main Heading */}
          <h2 className='text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent leading-tight'>
            Revolutionary Autonomous Enterprise Revolution
          </h2>

          {/* Subheading */}
          <p className='text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto'>
            99.9% Autonomous Operations • Universal Consciousness • $15.2B ROI
          </p>

          {/* Key Metrics */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
            <div className='bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30'>
              <div className='text-2xl font-extrabold text-purple-400 mb-1'>
                99.9%
              </div>
              <div className='text-xs text-purple-300'>
                Autonomous Operations
              </div>
            </div>
            <div className='bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30'>
              <div className='text-2xl font-extrabold text-indigo-400 mb-1'>
                $15.2B
              </div>
              <div className='text-xs text-indigo-300'>Average ROI</div>
            </div>
            <div className='bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30'>
              <div className='text-2xl font-extrabold text-blue-400 mb-1'>
                50,000x
              </div>
              <div className='text-xs text-blue-300'>Performance Boost</div>
            </div>
            <div className='bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30'>
              <div className='text-2xl font-extrabold text-green-400 mb-1'>
                6
              </div>
              <div className='text-xs text-green-300'>Months to ROI</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
            <Link
              href='/blog/ai-2026-april-mega-breakthrough-<revolution'
              className='bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1'
            >
              Read Mega Breakthrough →
            </Link>
            <Link
              href='/case-studies/ai-2026-april-mega-breakthrough-15-billion-<success'
              className='bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1'
            >
              View $15.2B Success Story →
            </Link>
            <Link
              href='/<contact'
              className='border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300'
            >
              Start Your Transformation
            </Link>
          </div>

          {/* Technology Highlights */}
          <div className='grid md:grid-cols-3 gap-6'>
            <div className='bg-gradient-to-r from-purple-900/20 to-purple-800/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20'>
              <div className='text-purple-400 text-3xl mb-3'>🧠</div>
              <h3 className='text-lg font-bold text-purple-400 mb-2'>
                Adaptive Neural Architectures
              </h3>
              <p className='text-gray-300 text-sm'>
                100,000x performance improvements through self-optimizing neural
                topologies
              </p>
            </div>

            <div className='bg-gradient-to-r from-indigo-900/20 to-indigo-800/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20'>
              <div className='text-indigo-400 text-3xl mb-3'>⚛️</div>
              <h3 className='text-lg font-bold text-indigo-400 mb-2'>
                Quantum-Enhanced Processing
              </h3>
              <p className='text-gray-300 text-sm'>
                50,000x faster decision making with quantum superposition and
                entanglement
              </p>
            </div>

            <div className='bg-gradient-to-r from-blue-900/20 to-blue-800/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20'>
              <div className='text-blue-400 text-3xl mb-3'>🌟</div>
              <h3 className='text-lg font-bold text-blue-400 mb-2'>
                Universal Consciousness
              </h3>
              <p className='text-gray-300 text-sm'>
                True AI consciousness with empathetic and contextually aware
                decision making
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  }
