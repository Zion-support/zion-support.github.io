import React from 'react';

const ContentValueTestimonials: React.FC = () => {
  return (
    <div className='bg-gradient-to-r from-emerald-900/40 to-teal-900/40 border-y border-emerald-500/20 py-16'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-6'>
            <span className='text-emerald-400 font-bold text-sm tracking-wider uppercase animate-pulse'>
              💎 VALUE TESTIMONIALS
            </span>
          </div>
          <h2 className='text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent'>
            Real Results from Real Clients
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            See how our AI solutions have transformed businesses across industries with measurable results.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          {/* Left Side - Success Stories */}
          <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10'>
            <h3 className='text-3xl font-bold text-white mb-6'>
              Success Stories:
            </h3>
            <div className='space-y-6'>
              {[
                {
                  company: 'Fortune 500 Retailer',
                  industry: 'E-commerce',
                  challenge: 'Inventory management inefficiencies',
                  solution: 'AI-powered demand forecasting',
                  result: '40% reduction in stockouts, $15M saved annually',
                  timeframe: '6 months'
                },
                {
                  company: 'Healthcare Network',
                  industry: 'Healthcare',
                  challenge: 'Patient scheduling bottlenecks',
                  solution: 'Intelligent appointment optimization',
                  result: '60% faster scheduling, 25% patient satisfaction increase',
                  timeframe: '4 months'
                },
                {
                  company: 'Manufacturing Plant',
                  industry: 'Manufacturing',
                  challenge: 'Quality control inconsistencies',
                  solution: 'Computer vision quality inspection',
                  result: '95% defect detection accuracy, 30% cost reduction',
                  timeframe: '3 months'
                }
              ].map((story, index) => (
                <div key={index} className='p-6 bg-white/5 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-all duration-300'>
                  <div className='flex items-start justify-between mb-4'>
                    <div>
                      <h4 className='text-lg font-bold text-white mb-1'>
                        {story.company}
                      </h4>
                      <span className='text-sm text-emerald-400 bg-emerald-500/20 px-2 py-1 rounded'>
                        {story.industry}
                      </span>
                    </div>
                    <div className='text-right'>
                      <div className='text-sm text-gray-400'>Timeline</div>
                      <div className='text-emerald-400 font-bold'>{story.timeframe}</div>
                    </div>
                  </div>
                  
                  <div className='space-y-3'>
                    <div>
                      <div className='text-sm text-gray-400 mb-1'>Challenge:</div>
                      <div className='text-gray-300'>{story.challenge}</div>
                    </div>
                    <div>
                      <div className='text-sm text-gray-400 mb-1'>Solution:</div>
                      <div className='text-gray-300'>{story.solution}</div>
                    </div>
                    <div>
                      <div className='text-sm text-gray-400 mb-1'>Result:</div>
                      <div className='text-emerald-400 font-bold'>{story.result}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - Testimonials */}
          <div className='bg-gradient-to-br from-emerald-900/30 to-teal-900/30 rounded-2xl p-8 border border-emerald-500/30'>
            <div className='text-center mb-8'>
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-4'>
                <span className='text-emerald-400 font-bold text-sm'>
                  🗣️ TESTIMONIALS
                </span>
              </div>
              <h3 className='text-3xl font-bold text-white mb-4'>
                What Our Clients Say
              </h3>
              <p className='text-gray-300 mb-6'>
                Hear directly from the leaders who've transformed their businesses with our AI solutions.
              </p>
            </div>

            <div className='space-y-6'>
              {[
                {
                  name: 'Sarah Johnson',
                  title: 'CTO, TechCorp',
                  company: 'Fortune 500 Tech Company',
                  quote: "The AI implementation exceeded our expectations. We saw a 300% ROI within the first quarter and our operational efficiency has never been better.",
                  rating: 5
                },
                {
                  name: 'Michael Chen',
                  title: 'Operations Director',
                  company: 'Global Manufacturing',
                  quote: "Zion Tech Group's AI solutions revolutionized our production line. We reduced waste by 40% and increased output by 60% in just 6 months.",
                  rating: 5
                },
                {
                  name: 'Dr. Emily Rodriguez',
                  title: 'Chief Medical Officer',
                  company: 'Regional Healthcare System',
                  quote: "The AI-powered diagnostic tools have improved our accuracy by 35% and reduced patient wait times significantly. It's been a game-changer for our practice.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className='p-6 bg-white/5 rounded-xl border border-white/10'>
                  <div className='flex items-center gap-1 mb-3'>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className='text-yellow-400 text-lg'>★</span>
                    ))}
                  </div>
                  <blockquote className='text-gray-300 italic mb-4'>
                    "{testimonial.quote}"
                  </blockquote>
                  <div className='border-t border-white/10 pt-4'>
                    <div className='font-bold text-white'>{testimonial.name}</div>
                    <div className='text-sm text-emerald-400'>{testimonial.title}</div>
                    <div className='text-xs text-gray-400'>{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center'>
          <h3 className='text-2xl font-bold text-white mb-4'>
            Ready to Join Our Success Stories?
          </h3>
          <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
            Let us help you achieve similar results with our proven AI solutions. 
            Schedule a consultation to discuss your specific needs and goals.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a href='/contact?source=testimonials'
              className='bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1'
            >
              Start Your Success Story
            </a>
            <a href='/case-studies'
              className='border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300'
            >
              View More Case Studies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentValueTestimonials;