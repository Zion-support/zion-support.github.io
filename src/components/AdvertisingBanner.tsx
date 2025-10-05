import React from 'react';
import { Link } from 'react-router-dom';

const AdvertisingBanner: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className='bg-gradient-to-r from-purple-900/40 to-blue-900/40 border-y border-purple-500/20 py-16'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-6'>
            <span className='text-purple-400 font-bold text-sm tracking-wider uppercase animate-pulse'>
              🚀 SPECIAL OFFER
            </span>
          </div>
          <h2 className='text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent'>
            Transform Your Business with AI
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Join thousands of companies already using our AI solutions to increase efficiency and drive growth.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          {/* Left Side - Features */}
          <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10'>
            <h3 className='text-3xl font-bold text-white mb-6'>
              Why Choose Our AI Solutions:
            </h3>
            <div className='space-y-4'>
              {[
                {
                  icon: '⚡',
                  title: 'Lightning Fast Implementation',
                  description: 'Get up and running in just 48 hours with our streamlined setup process'
                },
                {
                  icon: '🎯',
                  title: 'Proven Results',
                  description: 'Average 300% ROI increase within the first 6 months'
                },
                {
                  icon: '🛡️',
                  title: 'Enterprise Security',
                  description: 'Bank-level security with 99.9% uptime guarantee'
                },
                {
                  icon: '📊',
                  title: 'Real-time Analytics',
                  description: 'Comprehensive dashboards and insights for data-driven decisions'
                },
                {
                  icon: '🤖',
                  title: '24/7 AI Support',
                  description: 'Round-the-clock assistance from our expert AI team'
                }
              ].map((feature, index) => (
                <div key={index} className='flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300'>
                  <div className='text-3xl'>{feature.icon}</div>
                  <div>
                    <h4 className='text-lg font-bold text-white mb-2'>
                      {feature.title}
                    </h4>
                    <p className='text-gray-400 text-sm'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - CTA */}
          <div className='bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-500/30'>
            <div className='text-center mb-8'>
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-4'>
                <span className='text-purple-400 font-bold text-sm'>
                  🎉 LIMITED TIME
                </span>
              </div>
              <h3 className='text-3xl font-bold text-white mb-4'>
                Get Started Today
              </h3>
              <p className='text-gray-300 mb-6'>
                Don't miss out on this exclusive opportunity to revolutionize your business with AI.
              </p>
            </div>

            <div className='space-y-4 mb-8'>
              <div className='flex items-center gap-3'>
                <span className='text-purple-400'>✓</span>
                <span className='text-gray-300'>
                  Free consultation and strategy session
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-purple-400'>✓</span>
                <span className='text-gray-300'>Custom AI solution design</span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-purple-400'>✓</span>
                <span className='text-gray-300'>
                  Implementation and training included
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-purple-400'>✓</span>
                <span className='text-gray-300'>30-day money-back guarantee</span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-purple-400'>✓</span>
                <span className='text-gray-300'>
                  Ongoing support and optimization
                </span>
              </div>
            </div>

            <div className='space-y-4'>
              <Link to='/contact?offer=ai-transformation'
                className='w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1 text-center block'
              >
                Start Your AI Journey
              </Link>
              <Link to='/schedule-demo'
                className='w-full border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 text-center block'
              >
                Schedule Free Demo
              </Link>
            </div>

            <div className='text-center mt-6'>
              <p className='text-sm text-gray-400'>
                ⏰ Limited spots available • Book your consultation today
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10'>
          <div className='text-center mb-6'>
            <h3 className='text-2xl font-bold text-white mb-2'>
              Trusted by Industry Leaders
            </h3>
            <p className='text-gray-400'>
              Join 1,000+ companies already transforming with our AI solutions
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {[
              {
                company: 'Tech Startup',
                result: '500% growth',
                testimonial: "AI implementation increased our efficiency by 500% in just 3 months"
              },
              {
                company: 'Manufacturing Giant',
                result: '$2M saved',
                testimonial: 'Automated processes saved us $2M annually while improving quality'
              },
              {
                company: 'Healthcare System',
                result: '99.9% uptime',
                testimonial: 'Reliable AI systems with 99.9% uptime improved patient care significantly'
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
=======
    <div className="advertising-banner">
      <div className="banner-content">
        <h3>Latest AI Insights</h3>
        <p>
          Discover the latest trends in AI and enterprise solutions.
        </p>
        <Link to='/blog/ai-2025-oct-01-vector-database-optimization-enterprise'>
          Read More
        </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-99e9
      </div>
    </div>
  );
};

export default AdvertisingBanner;