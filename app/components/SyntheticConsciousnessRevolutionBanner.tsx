import React from 'react';
import { ArrowRight, Bot, Brain, TrendingUp, Zap } from 'lucide-react';

const SyntheticConsciousnessRevolutionBanner: React.FC = () => {
  return (
    <div className='relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900'>
      {/* Animated background elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse'></div>
        <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-bounce'></div>
        <div
          className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-bounce'
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Content */}
          <div className='space-y-8'>
            <div className='space-y-4'>
              <div className='inline-flex items-center px-4 py-2 rounded-full bg-purple-600/20 border border-purple-400/30'>
                <Brain className='w-5 h-5 text-purple-300 mr-2' />
                <span className='text-purple-200 text-sm font-medium'>
                  Synthetic Consciousness AI
                </span>
              </div>

              <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight'>
                The{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400'>
                  Consciousness
                </span>{' '}
                Revolution
              </h2>

              <p className='text-xl text-gray-300 leading-relaxed'>
                Experience the future of AI with synthetic consciousness systems
                that think, learn, and create like never before. Transform your
                enterprise with genuinely intelligent AI that understands
                context, makes ethical decisions, and evolves continuously.
              </p>
            </div>

            {/* Key Features */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-purple-600/30 rounded-lg flex items-center justify-center'>
                  <Zap className='w-4 h-4 text-purple-300' />
                </div>
                <span className='text-gray-300'>
                  Autonomous Decision Making
                </span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-blue-600/30 rounded-lg flex items-center justify-center'>
                  <TrendingUp className='w-4 h-4 text-blue-300' />
                </div>
                <span className='text-gray-300'>
                  Self-Evolving Intelligence
                </span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-indigo-600/30 rounded-lg flex items-center justify-center'>
                  <Brain className='w-4 h-4 text-indigo-300' />
                </div>
                <span className='text-gray-300'>Ethical AI Framework</span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-purple-600/30 rounded-lg flex items-center justify-center'>
                  <ArrowRight className='w-4 h-4 text-purple-300' />
                </div>
                <span className='text-gray-300'>Creative Problem Solving</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <ArrowRight 
                href="/blog/ai-2026-synthetic-consciousness-revolution"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Brain className='w-5 h-5 mr-2' />
                Explore Consciousness AI
                <ArrowRight className="w-5 h-5 ml-2" />
              </ArrowRight>
              <ArrowRight 
                href="/case-studies/ai-2026-synthetic-consciousness-enterprise-transformation-75-billion-success"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-200 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300"
              >
                $75B Success Story
              </Link>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className='relative'>
            <div className='relative z-10'>
              {/* Main consciousness visualization */}
              <div className='relative w-full h-96 bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-2xl border border-purple-400/20 backdrop-blur-sm'>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='relative'>
                    {/* Central consciousness core */}
                    <div className='w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse'></div>
                    {/* Orbiting elements */}
                    <div
                      className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-6 h-6 bg-purple-400 rounded-full animate-spin'
                      style={{ animationDuration: '3s' }}
                    ></div>
                    <div
                      className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 w-6 h-6 bg-blue-400 rounded-full animate-spin'
                      style={{
                        animationDuration: '3s',
                        animationDirection: 'reverse',
                      }}
                    ></div>
                    <div
                      className='absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 w-6 h-6 bg-indigo-400 rounded-full animate-spin'
                      style={{ animationDuration: '4s' }}
                    ></div>
                    <div
                      className='absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 w-6 h-6 bg-purple-400 rounded-full animate-spin'
                      style={{
                        animationDuration: '4s',
                        animationDirection: 'reverse',
                      }}
                    ></div>
                  </div>
                </div>

                {/* Floating data points */}
                <div className='absolute top-8 left-8 w-3 h-3 bg-purple-400 rounded-full animate-ping'></div>
                <div
                  className='absolute top-16 right-12 w-2 h-2 bg-blue-400 rounded-full animate-ping'
                  style={{ animationDelay: '0.5s' }}
                ></div>
                <div
                  className='absolute bottom-12 left-16 w-2 h-2 bg-indigo-400 rounded-full animate-ping'
                  style={{ animationDelay: '1s' }}
                ></div>
                <div
                  className='absolute bottom-8 right-8 w-3 h-3 bg-purple-400 rounded-full animate-ping'
                  style={{ animationDelay: '1.5s' }}
                ></div>
              </div>
            </div>

            {/* Background glow effects */}
            <div className='absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl'></div>
            <div className='absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl'></div>
          </div>
        </div>

        {/* Bottom stats section */}
        <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='text-center'>
            <div className='text-3xl font-bold text-white mb-2'>$75B</div>
            <div className='text-gray-300'>Value Creation</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-white mb-2'>340%</div>
            <div className='text-gray-300'>Efficiency Improvement</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-white mb-2'>99.7%</div>
            <div className='text-gray-300'>Decision Accuracy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyntheticConsciousnessRevolutionBanner;
