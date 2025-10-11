// import Link from 'next/link';

export default function FeaturedOctober2026Content() {
  return (
    <section className='py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold mb-6'>
            <Sparkles className='w-4 h-4 mr-2' />
            FEATURED OCTOBER 2026 CONTENT
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Revolutionary AI Innovations Just Released
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Deep-dive technical guides and proven success stories from
            enterprise AI deployments
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className='grid lg:grid-cols-2 gap-8 mb-12'>
          {/* Featured Blog Post 1 */}
          <div className='bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500'>
            <div className='bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center'>
                  <Shield className='w-10 h-10' />
                </div>
                <div>
                  <span className='bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold'>
                    NEW TECHNICAL GUIDE
                  </span>
                  <p className='text-sm text-purple-100 mt-1'>
                    24 min read • Privacy AI
                  </p>
                </div>
              </div>
              <h3 className='text-2xl font-bold mb-3'>
                AI Federated Learning & Privacy-Preserving Intelligence 2026
              </h3>
              <p className='text-purple-100'>
                Master enterprise-grade privacy-preserving AI. Train models
                across distributed data while maintaining 100% data privacy and
                GDPR compliance.
              </p>
            </div>

            <div className='p-8'>
              <div className='grid grid-cols-3 gap-4 mb-6'>
                <div className='text-center p-4 bg-purple-50 rounded-xl'>
                  <div className='text-2xl font-bold text-purple-600'>
                    99.9%
                  </div>
                  <div className='text-xs text-gray-600'>Model Accuracy</div>
                </div>
                <div className='text-center p-4 bg-blue-50 rounded-xl'>
                  <div className='text-2xl font-bold text-blue-600'>100%</div>
                  <div className='text-xs text-gray-600'>Data Privacy</div>
                </div>
                <div className='text-center p-4 bg-green-50 rounded-xl'>
                  <div className='text-2xl font-bold text-green-600'>$8M+</div>
                  <div className='text-xs text-gray-600'>Annual Savings</div>
                </div>
              </div>

              <div className='mb-6'>
                <h4 className='font-semibold text-gray-900 mb-3'>
                  What You'll Learn:
                </h4>
                <ul className='space-y-2'>
                  <li className='flex items-start gap-2 text-gray-700'>
                    <span className='text-purple-600 mt-1'>✓</span>
                    <span>
                      Distributed training frameworks and differential privacy
                    </span>
                  </li>
                  <li className='flex items-start gap-2 text-gray-700'>
                    <span className='text-purple-600 mt-1'>✓</span>
                    <span>
                      Secure aggregation protocols and encrypted model updates
                    </span>
                  </li>
                  <li className='flex items-start gap-2 text-gray-700'>
                    <span className='text-purple-600 mt-1'>✓</span>
                    <span>
                      HIPAA-compliant healthcare AI and banking fraud detection
                    </span>
                  </li>
                  <li className='flex items-start gap-2 text-gray-700'>
                    <span className='text-purple-600 mt-1'>✓</span>
                    <span>Production deployment with 99.9% uptime</span>
                  </li>
                </ul>
              </div>

              <Link
                href='/blog/ai-federated-learning-privacy-<2026'
                className='block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group-hover:scale-105'
              >
                Read Complete Guide →
              </Link>
            </div>
          </div>

          {/* Featured Blog Post 2 */}
          <div className='bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500'>
            <div className='bg-gradient-to-r from-blue-600 to-cyan-600 p-8 text-white'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center'>
                  <Bot className='w-10 h-10' />
                </div>
                <div>
                  <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold'>
                    NEW TECHNICAL GUIDE
                  </span>
                  <p className='text-sm text-blue-100 mt-1'>
                    26 min read • Robotics AI
                  </p>
                </div>
              </div>
              <h3 className='text-2xl font-bold mb-3'>
                AI Reinforcement Learning for Robotics & Autonomous Systems 2026
              </h3>
              <p className='text-blue-100'>
                Deploy intelligent robots that learn from experience. Achieve
                98% task success rates with deep RL and sim-to-real transfer
                learning.
              </p>
            </div>

            <div className='p-8'>
              <div className='grid grid-cols-3 gap-4 mb-6'>
                <div className='text-center p-4 bg-blue-50 rounded-xl'>
                  <div className='text-2xl font-bold text-blue-600'>98%</div>
                  <div className='text-xs text-gray-600'>Success Rate</div>
                </div>
                <div className='text-center p-4 bg-cyan-50 rounded-xl'>
                  <div className='text-2xl font-bold text-cyan-600'>90%</div>
                  <div className='text-xs text-gray-600'>Faster Training</div>
                </div>
                <div className='text-center p-4 bg-green-50 rounded-xl'>
                  <div className='text-2xl font-bold text-green-600'>$15M+</div>
                  <div className='text-xs text-gray-600'>Annual Savings</div>
                </div>
              </div>

              <div className='mb-6'>
                <h4 className='font-semibold text-gray-900 mb-3'>
                  What You'll Learn:
                </h4>
                <ul className='space-y-2'>
                  <li className='flex items-start gap-2 text-gray-700'>
                    <span className='text-blue-600 mt-1'>✓</span>
                    <span>
                      Deep RL actor-critic frameworks for continuous control
                    </span>
                  </li>
                  <li className='flex items-start gap-2 text-gray-700'>
                    <span className='text-blue-600 mt-1'>✓</span>
                    <span>Sim-to-real transfer with domain randomization</span>
                  </li>
                  <li className='flex items-start gap-2 text-gray-700'>
                    <span className='text-blue-600 mt-1'>✓</span>
                    <span>Multi-agent coordination for warehouse robotics</span>
                  </li>
                  <li className='flex items-start gap-2 text-gray-700'>
                    <span className='text-blue-600 mt-1'>✓</span>
                    <span>Safety-critical RL for autonomous vehicles</span>
                  </li>
                </ul>
              </div>

              <Link
                href='/blog/ai-reinforcement-learning-robotics-<2026'
                className='block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 group-hover:scale-105'
              >
                Read Complete Guide →
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Case Study */}
        <div className='bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl shadow-2xl overflow-hidden'>
          <div className='grid lg:grid-cols-2 gap-0'>
            <div className='p-12 text-white'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center'>
                  <ShoppingBag className='w-8 h-8' />
                </div>
                <span className='bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold'>
                  FEATURED CASE STUDY
                </span>
              </div>

              <h3 className='text-3xl font-bold mb-4'>
                AI Retail Personalization: $25M Revenue Increase
              </h3>

              <p className='text-lg text-green-100 mb-6'>
                GlobalRetail Corp achieved $25M additional revenue and 45%
                conversion rate improvement through AI-powered personalization
                and real-time recommendation systems.
              </p>

              <div className='space-y-4 mb-8'>
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center'>
                    <span className='text-2xl'>💰</span>
                  </div>
                  <div>
                    <div className='text-2xl font-bold'>
                      $25M Revenue Increase
                    </div>
                    <div className='text-green-100'>
                      5% total revenue growth
                    </div>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center'>
                    <span className='text-2xl'>📈</span>
                  </div>
                  <div>
                    <div className='text-2xl font-bold'>
                      45% Conversion Improvement
                    </div>
                    <div className='text-green-100'>From 2.3% to 3.3%</div>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center'>
                    <span className='text-2xl'>🎯</span>
                  </div>
                  <div>
                    <div className='text-2xl font-bold'>180% ROI</div>
                    <div className='text-green-100'>Achieved in 8 months</div>
                  </div>
                </div>
              </div>

              <Link
                href='/case-studies/ai-retail-personalization-transformation-<2026'
                className='inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-green-50 transition-colors'
              >
                Read Full Case Study →
              </Link>
            </div>

            <div className='bg-gradient-to-br from-green-700 to-emerald-700 p-12'>
              <h4 className='text-xl font-bold text-white mb-6'>
                Implementation Highlights
              </h4>
              <div className='space-y-4'>
                <div className='bg-white/10 backdrop-blur-sm rounded-xl p-4'>
                  <div className='text-yellow-300 font-semibold mb-2'>
                    Deep Learning Recommendations
                  </div>
                  <div className='text-green-100 text-sm'>
                    Neural collaborative filtering with 99.9% accuracy
                  </div>
                </div>
                <div className='bg-white/10 backdrop-blur-sm rounded-xl p-4'>
                  <div className='text-yellow-300 font-semibold mb-2'>
                    Dynamic Pricing Engine
                  </div>
                  <div className='text-green-100 text-sm'>
                    Real-time price optimization with demand forecasting
                  </div>
                </div>
                <div className='bg-white/10 backdrop-blur-sm rounded-xl p-4'>
                  <div className='text-yellow-300 font-semibold mb-2'>
                    Cart Abandonment Prevention
                  </div>
                  <div className='text-green-100 text-sm'>
                    35% reduction through AI-powered interventions
                  </div>
                </div>
                <div className='bg-white/10 backdrop-blur-sm rounded-xl p-4'>
                  <div className='text-yellow-300 font-semibold mb-2'>
                    Omnichannel Experience
                  </div>
                  <div className='text-green-100 text-sm'>
                    Unified personalization across web, mobile, email
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className='mt-12 text-center'>
          <p className='text-gray-600 mb-6'>
            Want to achieve similar results? Our AI experts can help you
            implement these strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
            >
              Get Free AI Assessment
            </Link>
            <Link
              href='/<blog'
              className='inline-flex items-center justify-center border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300'
            >
              Explore All Content
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
