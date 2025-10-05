import React from 'react';
import { Link } from 'react-router-dom';

const BreakthroughContent2026Banner: React.FC = () => {
  return (
    <div className='bg-gradient-to-r from-violet-900/40 to-indigo-900/40 border-y border-violet-500/20 py-16'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/20 to-indigo-500/20 border border-violet-500/30 mb-6'>
            <span className='text-violet-400 font-bold text-sm tracking-wider uppercase animate-pulse'>
              🚀 BREAKTHROUGH 2026
            </span>
          </div>
          <h2 className='text-5xl font-extrabold mb-6 bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent'>
            Revolutionary AI Content
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Discover breakthrough AI technologies and content that will reshape the future of business and technology in 2026.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          {/* Left Side - Breakthrough Features */}
          <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10'>
            <h3 className='text-3xl font-bold text-white mb-6'>
              Breakthrough Features:
            </h3>
            <div className='space-y-4'>
              {[
                {
                  icon: '🧠',
                  title: 'Quantum AI Processing',
                  description: 'Revolutionary quantum-classical hybrid AI systems with unprecedented processing power',
                  impact: '1000x faster'
                },
                {
                  icon: '🔮',
                  title: 'Predictive Content Generation',
                  description: 'AI that creates content based on future trends and user behavior predictions',
                  impact: '95% accuracy'
                },
                {
                  icon: '🤖',
                  title: 'Autonomous Content Management',
                  description: 'Self-managing content systems that optimize and update themselves automatically',
                  impact: '99% automation'
                },
                {
                  icon: '🌐',
                  title: 'Global Content Synchronization',
                  description: 'Real-time content updates across all platforms and languages simultaneously',
                  impact: '0ms latency'
                },
                {
                  icon: '🎯',
                  title: 'Personalized AI Experiences',
                  description: 'Content that adapts to each user\'s unique preferences and learning patterns',
                  impact: '300% engagement'
                }
              ].map((feature, index) => (
                <div key={index} className='flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-violet-500/50 transition-all duration-300'>
                  <div className='text-3xl'>{feature.icon}</div>
                  <div className='flex-1'>
                    <div className='flex items-center justify-between mb-2'>
                      <h4 className='text-lg font-bold text-white'>
                        {feature.title}
                      </h4>
                      <span className='text-violet-400 text-sm font-bold bg-violet-500/20 px-2 py-1 rounded'>
                        {feature.impact}
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
          <div className='bg-gradient-to-br from-violet-900/30 to-indigo-900/30 rounded-2xl p-8 border border-violet-500/30'>
            <div className='text-center mb-8'>
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 mb-4'>
                <span className='text-violet-400 font-bold text-sm'>
                  🔥 EXCLUSIVE ACCESS
                </span>
              </div>
              <h3 className='text-3xl font-bold text-white mb-4'>
                Get Early Access
              </h3>
              <p className='text-gray-300 mb-6'>
                Be among the first to experience these breakthrough AI technologies and content solutions.
              </p>
            </div>

            <div className='space-y-4 mb-8'>
              <div className='flex items-center gap-3'>
                <span className='text-violet-400'>✓</span>
                <span className='text-gray-300'>
                  Early access to breakthrough AI features
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-violet-400'>✓</span>
                <span className='text-gray-300'>Exclusive content and tutorials</span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-violet-400'>✓</span>
                <span className='text-gray-300'>
                  Direct access to our AI research team
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-violet-400'>✓</span>
                <span className='text-gray-300'>Priority support and implementation</span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-violet-400'>✓</span>
                <span className='text-gray-300'>
                  Free migration to new AI systems
                </span>
              </div>
            </div>

            <div className='space-y-4'>
              <Link to='/contact?offer=breakthrough-2026'
                className='w-full bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-400 hover:to-indigo-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-violet-500/50 transform hover:-translate-y-1 text-center block'
              >
                Request Early Access
              </Link>
              <Link to='/breakthrough-2026-demo'
                className='w-full border-2 border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 text-center block'
              >
                Watch Breakthrough Demo
              </Link>
            </div>

            <div className='text-center mt-6'>
              <p className='text-sm text-gray-400'>
                🎯 Limited to 100 early adopters • Apply now for priority access
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10'>
          <div className='text-center mb-6'>
            <h3 className='text-2xl font-bold text-white mb-2'>
              Trusted by Innovation Leaders
            </h3>
            <p className='text-gray-400'>
              Join 500+ forward-thinking companies already preparing for the AI revolution
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {[
              {
                company: 'Tech Innovation Lab',
                result: 'First to implement',
                testimonial: "We were the first to implement these breakthrough AI technologies and it's transformed our entire operation"
              },
              {
                company: 'Global Media Corp',
                result: '500% content efficiency',
                testimonial: 'The predictive content generation has increased our content efficiency by 500% while maintaining quality'
              },
              {
                company: 'Enterprise Solutions Inc',
                result: 'Zero downtime achieved',
                testimonial: 'The autonomous content management system has given us 99.9% uptime with zero manual intervention'
              }
            ].map((testimonial, index) => (
              <div key={index} className='text-center p-6 bg-white/5 rounded-xl border border-white/10'>
                <div className='text-yellow-400 text-2xl mb-2'>★★★★★</div>
                <p className='text-gray-300 mb-4 italic'>
                  "{testimonial.testimonial}"
                </p>
                <div className='text-violet-400 font-semibold'>
                  {testimonial.company}
                </div>
                <div className='text-violet-400 text-sm font-bold'>
                  {testimonial.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakthroughContent2026Banner;