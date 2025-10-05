import React from 'react';
import { Link } from 'react-router-dom';

const AICostOptimizationBanner: React.FC = () => {
  return (
    <div className='bg-gradient-to-r from-green-900/40 to-blue-900/40 border-y border-green-500/20 py-16'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6'>
            <span className='text-green-400 font-bold text-sm tracking-wider uppercase animate-pulse'>
              💰 COST OPTIMIZATION SPECIAL
            </span>
          </div>
          <h2 className='text-5xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent'>
            AI-Powered Cost Reduction
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Reduce operational costs by up to 60% with our advanced AI optimization solutions.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          {/* Left Side - Features */}
          <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10'>
            <h3 className='text-3xl font-bold text-white mb-6'>
              Cost Savings Features:
            </h3>
            <div className='space-y-4'>
              {[
                {
                  icon: '📊',
                  title: 'Automated Resource Optimization',
                  description: 'AI continuously optimizes resource allocation for maximum efficiency'
                },
                {
                  icon: '⚡',
                  title: 'Energy Consumption Reduction',
                  description: 'Smart algorithms reduce energy usage by up to 40%'
                },
                {
                  icon: '🤖',
                  title: 'Process Automation',
                  description: 'Eliminate manual processes and reduce labor costs by 70%'
                },
                {
                  icon: '📈',
                  title: 'Predictive Maintenance',
                  description: 'Prevent costly breakdowns with AI-powered predictive analytics'
                },
                {
                  icon: '💡',
                  title: 'Smart Scheduling',
                  description: 'Optimize schedules and reduce overtime costs by 50%'
                }
              ].map((feature, index) => (
                <div key={index} className='flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-green-500/50 transition-all duration-300'>
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
          
          {/* Right Side - Pricing & CTA */}
          <div className='bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-2xl p-8 border border-green-500/30'>
            <div className='text-center mb-8'>
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 mb-4'>
                <span className='text-green-400 font-bold text-sm'>
                  💰 SAVE MONEY
                </span>
              </div>
              <div className='text-6xl font-extrabold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2'>
                60% OFF
              </div>
              <div className='text-gray-400 text-lg mb-4'>
                First year implementation
              </div>
              <div className='text-2xl text-white font-bold'>
                $25,000/month{' '}
                <span className='text-lg text-gray-400 line-through'>
                  $62,500/month
                </span>
              </div>
            </div>

            <div className='space-y-4 mb-8'>
              <div className='flex items-center gap-3'>
                <span className='text-green-400'>✓</span>
                <span className='text-gray-300'>
                  Complete Cost Analysis Report
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-green-400'>✓</span>
                <span className='text-gray-300'>24/7 Cost Monitoring Dashboard</span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-green-400'>✓</span>
                <span className='text-gray-300'>
                  Automated Optimization Implementation
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-green-400'>✓</span>
                <span className='text-gray-300'>Dedicated Cost Optimization Expert</span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-green-400'>✓</span>
                <span className='text-gray-300'>
                  ROI Guarantee: 200%+ in 3 months
                </span>
              </div>
            </div>

            <div className='space-y-4'>
              <Link to='/contact?offer=cost-optimization'
                className='w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1 text-center block'
              >
                Start Saving Money Today
              </Link>
              <Link to='/schedule-demo'
                className='w-full border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 text-center block'
              >
                Schedule Free Cost Analysis
              </Link>
            </div>

            <div className='text-center mt-6'>
              <p className='text-sm text-gray-400'>
                ⏰ Limited time offer • Save up to $450,000 annually
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10'>
          <div className='text-center mb-6'>
            <h3 className='text-2xl font-bold text-white mb-2'>
              Proven Cost Savings Results
            </h3>
            <p className='text-gray-400'>
              Join 300+ companies already saving millions with our AI solutions
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {[
              {
                company: 'Manufacturing Giant',
                result: '$2.5M annual savings',
                testimonial: "AI optimization reduced our operational costs by 45% in just 6 months"
              },
              {
                company: 'Retail Chain',
                result: '60% energy reduction',
                testimonial: 'Smart scheduling and resource optimization cut our energy bills in half'
              },
              {
                company: 'Healthcare System',
                result: '$1.8M cost reduction',
                testimonial: 'Predictive maintenance and automation saved us millions in equipment costs'
              }
            ].map((testimonial, index) => (
              <div key={index} className='text-center p-6 bg-white/5 rounded-xl border border-white/10'>
                <div className='text-yellow-400 text-2xl mb-2'>★★★★★</div>
                <p className='text-gray-300 mb-4 italic'>
                  "{testimonial.testimonial}"
                </p>
                <div className='text-green-400 font-semibold'>
                  {testimonial.company}
                </div>
                <div className='text-green-400 text-sm font-bold'>
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

export default AICostOptimizationBanner;