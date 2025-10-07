import React from 'react';
import { ArrowRight, Brain, Rocket, TrendingUp, Zap } from 'lucide-react';

import Link from 'next/link';

const February2026NewContentMegaBanner: React.FC = () => {
  return (
    <div className='relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white'>
      {/* Dynamic Background */}
      <div className='absolute inset-0'>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.08%22%3E%3Cpath%20d%3D%22M30%2030c0-16.569-13.431-30-30-30v30h30z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse'></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='text-center'>
          {/* Mega Badge */}
          <div className='inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-sm font-bold mb-8 shadow-2xl animate-pulse'>
            <Star className='w-5 h-5 mr-2' />
            🌟 FEBRUARY 2026 MEGA BREAKTHROUGH CONTENT 🌟
          </div>

          {/* Main Headline */}
          <h1 className='text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent leading-tight'>
            Revolutionary Edge Computing
            <span className='block text-4xl md:text-6xl mt-4'>
              & Autonomous Infrastructure
            </span>
            <span className='block text-3xl md:text-5xl mt-2 text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text'>
              February 2026 Breakthrough
            </span>
          </h1>

          {/* Subheadline */}
          <p className='text-xl md:text-2xl text-blue-100 mb-12 max-w-5xl mx-auto leading-relaxed'>
            Discover the latest revolutionary breakthroughs in edge computing
            and autonomous infrastructure. Transform your enterprise with $12B+
            value creation, 99.9% uptime, and quantum-enhanced processing.
          </p>

          {/* Content Showcase Grid */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto'>
            {/* Edge Computing Content */}
            <div className='bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105'>
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4'>
                  <Cpu className='w-6 h-6 text-white' />
                </div>
                <div>
                  <h2 className='text-2xl font-bold text-white'>
                    Revolutionary Edge Computing
                  </h2>
                  <p className='text-blue-200 text-sm'>
                    February 2026 Breakthrough
                  </p>
                </div>
              </div>

              <p className='text-gray-300 mb-6 leading-relaxed'>
                Quantum-enhanced processing with 1000x performance improvement,
                sub-millisecond latency, and autonomous infrastructure
                management delivering unprecedented enterprise value.
              </p>

              <div className='grid grid-cols-2 gap-4 mb-6'>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-green-400'>$12B+</div>
                  <div className='text-xs text-blue-200'>Value Creation</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-blue-400'>1000x</div>
                  <div className='text-xs text-blue-200'>Performance Gain</div>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-3'>
                <Link
                  href='/blog/ai-2026-february-revolutionary-edge-computing-breakthrough'
                  className='flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 text-sm'
                >
                  Read Article
                  <ArrowRight className='w-4 h-4 ml-2' />
                </Link>
                <Link
                  href='/case-studies/ai-2026-february-global-tech-edge-computing-transformation-12-billion-success'
                  className='flex-1 inline-flex items-center justify-center px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 transition-all duration-300 text-sm'
                >
                  Success Story
                </Link>
              </div>
            </div>

            {/* Autonomous Infrastructure Content */}
            <div className='bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105'>
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4'>
                  <Brain className='w-6 h-6 text-white' />
                </div>
                <div>
                  <h2 className='text-2xl font-bold text-white'>
                    Autonomous Infrastructure
                  </h2>
                  <p className='text-purple-200 text-sm'>
                    Self-Managing Systems
                  </p>
                </div>
              </div>

              <p className='text-gray-300 mb-6 leading-relaxed'>
                Fully autonomous infrastructure that manages, heals, and
                optimizes itself. Achieve 99.9% uptime, 85% cost reduction, and
                predictive maintenance with 99.7% accuracy.
              </p>

              <div className='grid grid-cols-2 gap-4 mb-6'>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-green-400'>99.9%</div>
                  <div className='text-xs text-purple-200'>System Uptime</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-purple-400'>85%</div>
                  <div className='text-xs text-purple-200'>Cost Reduction</div>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-3'>
                <Link
                  href='/blog/ai-2026-february-autonomous-infrastructure-revolution'
                  className='flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 text-sm'
                >
                  Read Article
                  <ArrowRight className='w-4 h-4 ml-2' />
                </Link>
                <Link
                  href='/services/ai-2026-february-revolutionary-edge-computing-consulting'
                  className='flex-1 inline-flex items-center justify-center px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 transition-all duration-300 text-sm'
                >
                  Consulting
                </Link>
              </div>
            </div>
          </div>

          {/* Key Features Overview */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto'>
            <div className='bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30'>
              <Shield className='w-8 h-8 text-green-400 mx-auto mb-3' />
              <h3 className='text-lg font-semibold mb-2 text-white'>
                Self-Healing Systems
              </h3>
              <p className='text-gray-300 text-sm'>
                Automatically detect and repair failures with 99.9% uptime and
                zero-downtime maintenance
              </p>
            </div>

            <div className='bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30'>
              <TrendingUp className='w-8 h-8 text-yellow-400 mx-auto mb-3' />
              <h3 className='text-lg font-semibold mb-2 text-white'>
                Predictive Analytics
              </h3>
              <p className='text-gray-300 text-sm'>
                99.7% accuracy in predicting equipment failures and optimizing
                performance in real-time
              </p>
            </div>

            <div className='bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/30'>
              <Zap className='w-8 h-8 text-red-400 mx-auto mb-3' />
              <h3 className='text-lg font-semibold mb-2 text-white'>
                Quantum Processing
              </h3>
              <p className='text-gray-300 text-sm'>
                1000x faster processing with sub-millisecond latency for
                real-time operations
              </p>
            </div>
          </div>

          {/* Main CTA */}
          <div className='bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20 mb-12'>
            <div className='flex items-center justify-center mb-4'>
              <Rocket className='w-8 h-8 text-yellow-400 mr-3' />
              <h2 className='text-2xl md:text-3xl font-bold text-white'>
                Ready to Transform Your Enterprise?
              </h2>
            </div>
            <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
              Join Fortune 500 companies achieving unprecedented success with
              our revolutionary edge computing and autonomous infrastructure
              solutions
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Link
                href='/services/ai-2026-february-revolutionary-edge-computing-consulting'
                className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
              >
                Get Consulting Services
                <ArrowRight className='w-5 h-5 ml-2' />
              </Link>

              <Link
                href='/contact'
                className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300'
              >
                Schedule Consultation
              </Link>
            </div>
          </div>

          {/* Success Metrics */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto'>
            <div className='text-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10'>
              <div className='text-3xl md:text-4xl font-bold text-green-400 mb-1'>
                $12B+
              </div>
              <div className='text-sm text-gray-300'>Value Creation</div>
            </div>
            <div className='text-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10'>
              <div className='text-3xl md:text-4xl font-bold text-blue-400 mb-1'>
                99.9%
              </div>
              <div className='text-sm text-gray-300'>System Uptime</div>
            </div>
            <div className='text-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10'>
              <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-1'>
                85%
              </div>
              <div className='text-sm text-gray-300'>Cost Reduction</div>
            </div>
            <div className='text-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10'>
              <div className='text-3xl md:text-4xl font-bold text-yellow-400 mb-1'>
                1000x
              </div>
              <div className='text-sm text-gray-300'>Performance Gain</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className='absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse'></div>
      <div className='absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000'></div>
      <div className='absolute top-1/2 left-1/4 w-24 h-24 bg-green-500/10 rounded-full blur-2xl animate-pulse delay-500'></div>
      <div className='absolute top-1/3 right-1/3 w-28 h-28 bg-yellow-500/10 rounded-full blur-2xl animate-pulse delay-1500'></div>
      <div className='absolute bottom-1/3 left-1/2 w-20 h-20 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-750'></div>
    </div>
  );
};

export default February2026NewContentMegaBanner;
