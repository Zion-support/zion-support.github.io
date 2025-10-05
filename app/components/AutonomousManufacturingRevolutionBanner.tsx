import React from 'react';
import { ArrowRight, TrendingUp, Zap } from 'lucide-react';

import Link from 'next/link';

const AutonomousManufacturingRevolutionBanner: React.FC = () => {
  return (
    <div className='relative overflow-hidden bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900'>
      {/* Animated background elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-600/20 to-red-600/20 animate-pulse'></div>
        <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-bounce'></div>
        <div
          className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-bounce'
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Content */}
          <div className='space-y-8'>
            <div className='space-y-4'>
              <div className='inline-flex items-center px-4 py-2 rounded-full bg-orange-600/20 border border-orange-400/30'>
                <Factory className='w-5 h-5 text-orange-300 mr-2' />
                <span className='text-orange-200 text-sm font-medium'>
                  Autonomous Manufacturing
                </span>
              </div>

              <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight'>
                The{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400'>
                  Manufacturing
                </span>{' '}
                Revolution
              </h2>

              <p className='text-xl text-gray-300 leading-relaxed'>
                Transform your manufacturing operations with autonomous AI
                systems that manage production, optimize quality, and coordinate
                global supply chains. Experience unprecedented efficiency with
                self-managing manufacturing ecosystems.
              </p>
            </div>

            {/* Key Features */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-orange-600/30 rounded-lg flex items-center justify-center'>
                  <Cogs className='w-4 h-4 text-orange-300' />
                </div>
                <span className='text-gray-300'>Self-Managing Production</span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-red-600/30 rounded-lg flex items-center justify-center'>
                  <TrendingUp className='w-4 h-4 text-red-300' />
                </div>
                <span className='text-gray-300'>Predictive Maintenance</span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-yellow-600/30 rounded-lg flex items-center justify-center'>
                  <Factory className='w-4 h-4 text-yellow-300' />
                </div>
                <span className='text-gray-300'>
                  Autonomous Quality Control
                </span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-orange-600/30 rounded-lg flex items-center justify-center'>
                  <Zap className='w-4 h-4 text-orange-300' />
                </div>
                <span className='text-gray-300'>Supply Chain Optimization</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <Link
                href='/blog/ai-2026-autonomous-enterprise-operations'
                className='inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105'
              >
                <Factory className='w-5 h-5 mr-2' />
                Explore Autonomous Operations
                <ArrowRight className='w-5 h-5 ml-2' />
              </Link>
              <Link
                href='/case-studies/ai-2026-autonomous-manufacturing-revolution-127-billion-success'
                className='inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-orange-400 text-orange-200 font-semibold rounded-lg hover:bg-orange-400/10 transition-all duration-300'
              >
                $127B Success Story
              </Link>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className='relative'>
            <div className='relative z-10'>
              {/* Main manufacturing visualization */}
              <div className='relative w-full h-96 bg-gradient-to-br from-orange-800/20 to-red-800/20 rounded-2xl border border-orange-400/20 backdrop-blur-sm'>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='relative'>
                    {/* Central manufacturing hub */}
                    <div className='w-32 h-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg animate-pulse'></div>
                    {/* Manufacturing elements */}
                    <div
                      className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-8 h-8 bg-orange-400 rounded animate-spin'
                      style={{ animationDuration: '2s' }}
                    ></div>
                    <div
                      className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 w-8 h-8 bg-red-400 rounded animate-spin'
                      style={{
                        animationDuration: '2s',
                        animationDirection: 'reverse',
                      }}
                    ></div>
                    <div
                      className='absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 w-8 h-8 bg-yellow-400 rounded animate-spin'
                      style={{ animationDuration: '3s' }}
                    ></div>
                    <div
                      className='absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 w-8 h-8 bg-orange-400 rounded animate-spin'
                      style={{
                        animationDuration: '3s',
                        animationDirection: 'reverse',
                      }}
                    ></div>
                  </div>
                </div>

                {/* Manufacturing data points */}
                <div className='absolute top-8 left-8 w-3 h-3 bg-orange-400 rounded-full animate-ping'></div>
                <div
                  className='absolute top-16 right-12 w-2 h-2 bg-red-400 rounded-full animate-ping'
                  style={{ animationDelay: '0.5s' }}
                ></div>
                <div
                  className='absolute bottom-12 left-16 w-2 h-2 bg-yellow-400 rounded-full animate-ping'
                  style={{ animationDelay: '1s' }}
                ></div>
                <div
                  className='absolute bottom-8 right-8 w-3 h-3 bg-orange-400 rounded-full animate-ping'
                  style={{ animationDelay: '1.5s' }}
                ></div>
              </div>
            </div>

            {/* Background glow effects */}
            <div className='absolute -top-10 -right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl'></div>
            <div className='absolute -bottom-10 -left-10 w-32 h-32 bg-red-500/20 rounded-full blur-3xl'></div>
          </div>
        </div>

        {/* Bottom stats section */}
        <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='text-center'>
            <div className='text-3xl font-bold text-white mb-2'>$127B</div>
            <div className='text-gray-300'>Value Creation</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-white mb-2'>567%</div>
            <div className='text-gray-300'>Efficiency Improvement</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-white mb-2'>98.7%</div>
            <div className='text-gray-300'>Equipment Uptime</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutonomousManufacturingRevolutionBanner;
