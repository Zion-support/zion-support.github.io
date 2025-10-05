import React from 'react';
import { Link } from 'react-router-dom';

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className='bg-gradient-to-r from-purple-900/40 to-pink-900/40 border-y border-purple-500/20 py-16'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6'>
            <span className='text-purple-400 font-bold text-sm tracking-wider uppercase animate-pulse'>
              🚀 NEW CONTENT ALERT
            </span>
          </div>
          <h2 className='text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent'>
            Latest AI Content & Insights
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Stay ahead with our cutting-edge AI research, tutorials, and industry insights.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          {/* Left Side - Featured Content */}
          <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10'>
            <h3 className='text-3xl font-bold text-white mb-6'>
              Featured Content:
            </h3>
            <div className='space-y-4'>
              {[
                {
                  icon: '📚',
                  title: 'AI Implementation Guide 2025',
                  description: 'Complete roadmap for enterprise AI adoption',
                  readTime: '15 min read'
                },
                {
                  icon: '🎯',
                  title: 'ROI Optimization Strategies',
                  description: 'Maximize returns on your AI investments',
                  readTime: '12 min read'
                },
                {
                  icon: '🔧',
                  title: 'Technical Deep Dive: Neural Networks',
                  description: 'Advanced concepts for AI practitioners',
                  readTime: '20 min read'
                },
                {
                  icon: '📊',
                  title: 'Industry Case Studies',
                  description: 'Real-world AI success stories',
                  readTime: '10 min read'
                },
                {
                  icon: '🚀',
                  title: 'Future of AI Technology',
                  description: 'Trends and predictions for 2025',
                  readTime: '18 min read'
                }
              ].map((content, index) => (
                <div key={index} className='flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300'>
                  <div className='text-3xl'>{content.icon}</div>
                  <div className='flex-1'>
                    <h4 className='text-lg font-bold text-white mb-2'>
                      {content.title}
                    </h4>
                    <p className='text-gray-400 text-sm mb-2'>
                      {content.description}
                    </p>
                    <div className='flex items-center gap-4 text-xs text-gray-500'>
                      <span className='flex items-center gap-1'>
                        <span>⏱️</span>
                        {content.readTime}
                      </span>
                      <Link to='/blog' className='text-purple-400 hover:text-purple-300 flex items-center gap-1'>
                        <span>→</span>
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - Newsletter & CTA */}
          <div className='bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/30'>
            <div className='text-center mb-8'>
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-4'>
                <span className='text-purple-400 font-bold text-sm'>
                  📧 NEWSLETTER
                </span>
              </div>
              <h3 className='text-3xl font-bold text-white mb-4'>
                Stay Updated
              </h3>
              <p className='text-gray-300 mb-6'>
                Get the latest AI insights, tutorials, and industry news delivered to your inbox.
              </p>
            </div>

            <div className='space-y-4 mb-8'>
              <div className='flex items-center gap-3'>
                <span className='text-purple-400'>✓</span>
                <span className='text-gray-300'>
                  Weekly AI Research Updates
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-purple-400'>✓</span>
                <span className='text-gray-300'>Exclusive Technical Tutorials</span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-purple-400'>✓</span>
                <span className='text-gray-300'>
                  Industry Case Studies & Insights
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-purple-400'>✓</span>
                <span className='text-gray-300'>Early Access to New Content</span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-purple-400'>✓</span>
                <span className='text-gray-300'>
                  No spam, unsubscribe anytime
                </span>
              </div>
            </div>

            <div className='space-y-4'>
              <div className='flex gap-2'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500'
                />
                <button className='px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold rounded-lg transition-all duration-300'>
                  Subscribe
                </button>
              </div>
              <Link to='/blog'
                className='w-full border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 text-center block'
              >
                Browse All Content
              </Link>
            </div>

            <div className='text-center mt-6'>
              <p className='text-sm text-gray-400'>
                📚 500+ articles • 50+ tutorials • Updated weekly
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10'>
          <div className='text-center mb-6'>
            <h3 className='text-2xl font-bold text-white mb-2'>
              Trusted by AI Professionals
            </h3>
            <p className='text-gray-400'>
              Join 10,000+ AI practitioners who rely on our content
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {[
              {
                company: 'AI Research Lab',
                result: '95% content satisfaction',
                testimonial: "The technical depth and practical insights are unmatched in the industry"
              },
              {
                company: 'Enterprise AI Team',
                result: '40% faster implementation',
                testimonial: 'Your tutorials helped us implement AI solutions 40% faster than expected'
              },
              {
                company: 'AI Startup Founder',
                result: 'Raised $2M Series A',
                testimonial: 'The case studies and strategies helped us secure our Series A funding'
              }
            ].map((testimonial, index) => (
              <div key={index} className='text-center p-6 bg-white/5 rounded-xl border border-white/10'>
                <div className='text-yellow-400 text-2xl mb-2'>★★★★★</div>
                <p className='text-gray-300 mb-4 italic'>
                  "{testimonial.testimonial}"
                </p>
                <div className='text-purple-400 font-semibold'>
                  {testimonial.company}
                </div>
                <div className='text-purple-400 text-sm font-bold'>
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

export default ContentPromotionBanner;