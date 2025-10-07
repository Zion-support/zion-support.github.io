import React from 'react';
import { Link } from 'react-router-dom';

const PerformanceOptimizationBanner: React.FC = () => {
  return (
    <div className='bg-gradient-to-r from-amber-900/40 to-orange-900/40 border-y border-amber-500/20 py-16'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-6'>
            <span className='text-amber-400 font-bold text-sm tracking-wider uppercase animate-pulse'>
              ⚡ PERFORMANCE OPTIMIZATION
            </span>
          </div>
          <h2 className='text-5xl font-extrabold mb-6 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent'>
            Boost Your Application Performance
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Optimize your application's performance with our advanced AI-powered solutions and achieve lightning-fast speeds.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          {/* Left Side - Performance Features */}
          <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10'>
            <h3 className='text-3xl font-bold text-white mb-6'>
              Performance Features:
            </h3>
            <div className='space-y-4'>
              {[
                {
                  icon: '⚡',
                  title: 'Lightning Fast Loading',
                  description: 'Achieve sub-second page load times with our advanced optimization techniques',
                  improvement: '90% faster'
                },
                {
                  icon: '🎯',
                  title: 'Smart Caching',
                  description: 'Intelligent caching strategies that adapt to your application patterns',
                  improvement: '95% cache hit rate'
                },
                {
                  icon: '🔧',
                  title: 'Code Optimization',
                  description: 'Automated code analysis and optimization for maximum efficiency',
                  improvement: '60% smaller bundles'
                },
                {
                  icon: '📊',
                  title: 'Real-time Monitoring',
                  description: 'Continuous performance monitoring with instant alerts and insights',
                  improvement: '99.9% uptime'
                },
                {
                  icon: '🚀',
                  title: 'Auto-scaling',
                  description: 'Automatic resource scaling based on demand and performance metrics',
                  improvement: '300% capacity'
                }
              ].map((feature, index) => (
                <div key={index} className='flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-amber-500/50 transition-all duration-300'>
                  <div className='text-3xl'>{feature.icon}</div>
                  <div className='flex-1'>
                    <div className='flex items-center justify-between mb-2'>
                      <h4 className='text-lg font-bold text-white'>
                        {feature.title}
                      </h4>
                      <span className='text-amber-400 text-sm font-bold bg-amber-500/20 px-2 py-1 rounded'>
                        {feature.improvement}
                      </span>
                    </div>
                    <p className='text-gray-400 text-sm'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - CTA & Benefits */}
          <div className='bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-2xl p-8 border border-amber-500/30'>
            <div className='text-center mb-8'>
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-4'>
                <span className='text-amber-400 font-bold text-sm'>
                  🚀 GET STARTED
                </span>
              </div>
              <h3 className='text-3xl font-bold text-white mb-4'>
                Optimize Your Performance
              </h3>
              <p className='text-gray-300 mb-6'>
                Get a comprehensive performance audit and optimization plan for your application.
              </p>
            </div>

            <div className='space-y-4 mb-8'>
              <div className='flex items-center gap-3'>
                <span className='text-amber-400'>✓</span>
                <span className='text-gray-300'>
                  Free performance audit
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-amber-400'>✓</span>
                <span className='text-gray-300'>Custom optimization plan</span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-amber-400'>✓</span>
                <span className='text-gray-300'>
                  Implementation support
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-amber-400'>✓</span>
                <span className='text-gray-300'>Ongoing monitoring</span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-amber-400'>✓</span>
                <span className='text-gray-300'>
                  Performance guarantees
                </span>
              </div>
            </div>

            <div className='space-y-4'>
              <Link to='/contact?offer=performance-optimization'
                className='w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-amber-500/50 transform hover:-translate-y-1 text-center block'
              >
                Get Free Performance Audit
              </Link>
              <Link to='/performance-optimization-demo'
                className='w-full border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 text-center block'
              >
                Watch Demo
              </Link>
            </div>

            <div className='text-center mt-6'>
              <p className='text-sm text-gray-400'>
                ⚡ Free audit • No commitment • Results in 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10'>
          <div className='text-center mb-6'>
            <h3 className='text-2xl font-bold text-white mb-2'>
              Trusted by High-Performance Companies
            </h3>
            <p className='text-gray-400'>
              Join 500+ companies already achieving peak performance with our solutions
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {[
              {
                company: 'Tech Startup',
                result: '90% faster loading',
                testimonial: "Our app went from 5 seconds to 0.5 seconds load time. It's been a game-changer for user experience."
              },
              {
                company: 'E-commerce Platform',
                result: '300% capacity increase',
                testimonial: 'The auto-scaling and optimization features handled our Black Friday traffic without any issues.'
              },
              {
                company: 'SaaS Platform',
                result: '99.9% uptime achieved',
                testimonial: 'The performance monitoring and optimization tools have given us rock-solid reliability.'
              }
            ].map((testimonial, index) => (
              <div key={index} className='text-center p-6 bg-white/5 rounded-xl border border-white/10'>
                <div className='text-yellow-400 text-2xl mb-2'>★★★★★</div>
                <p className='text-gray-300 mb-4 italic'>
                  "{testimonial.testimonial}"
                </p>
                <div className='text-amber-400 font-semibold'>
                  {testimonial.company}
                </div>
                <div className='text-amber-400 text-sm font-bold'>
                  {testimonial.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>