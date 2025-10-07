import { Star } from 'lucide-react';
export default function Ultimate2026ContentShowcase() {
  return (
    <section className='py-16 bg-gradient-to-br from-slate-900 via-purple-900/20 to-indigo-900/20'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center mb-12'>
          <div className='inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6'>
            🎯 ULTIMATE 2026 COLLECTION
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            The Future of AI is Here
          </h2>
          <p className='text-gray-300 text-xl max-w-4xl mx-auto'>
            Explore our comprehensive collection of cutting-edge AI
            breakthroughs, enterprise automation solutions, and real-world
            success stories that are transforming industries worldwide.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className='grid lg:grid-cols-2 gap-8 mb-12'>
          {/* Left Column - Latest Breakthroughs */}
          <div className='space-y-6'>
            <h3 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
              <span className='w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded'></span>
              Latest AI Breakthroughs
            </h3>

            <div className='space-y-4'>
              <div className='group rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-6 hover:border-cyan-400/40 transition-all duration-300'>
                <div className='flex items-start justify-between mb-3'>
                  <div className='flex-1'>
                    <div className='flex items-center gap-2 mb-2'>
                      <span className='bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-bold'>
                        MULTIMODAL
                      </span>
                      <span className='bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-bold'>
                        95% AUTOMATION
                      </span>
                    </div>
                    <h4 className='text-white font-bold text-lg mb-2'>
                      Multimodal Enterprise Automation
                    </h4>
                    <p className='text-gray-400 text-sm mb-3'>
                      AI systems that understand text, images, video, and audio
                      simultaneously, achieving unprecedented automation rates.
                    </p>
                  </div>
                  <a
                    href='/blog/ai-2026-multimodal-enterprise-<automation'
                    className='text-cyan-300 group-hover:text-cyan-200 transition-colors'
                  >
                    →
                  </a>
                </div>
              </div>

              <div className='group rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-6 hover:border-purple-400/40 transition-all duration-300'>
                <div className='flex items-start justify-between mb-3'>
                  <div className='flex-1'>
                    <div className='flex items-center gap-2 mb-2'>
                      <span className='bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-bold'>
                        QUANTUM
                      </span>
                      <span className='bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-bold'>
                        1000x SPEEDUP
                      </span>
                    </div>
                    <h4 className='text-white font-bold text-lg mb-2'>
                      Quantum-Enhanced Machine Learning
                    </h4>
                    <p className='text-gray-400 text-sm mb-3'>
                      Revolutionary quantum computing integration accelerating
                      ML by 1000x and solving NP-hard problems in real-time.
                    </p>
                  </div>
                  <a
                    href='/blog/ai-2026-quantum-enhanced-machine-<learning'
                    className='text-purple-300 group-hover:text-purple-200 transition-colors'
                  >
                    →
                  </a>
                </div>
              </div>

              <div className='group rounded-xl border border-green-500/20 bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-6 hover:border-green-400/40 transition-all duration-300'>
                <div className='flex items-start justify-between mb-3'>
                  <div className='flex-1'>
                    <div className='flex items-center gap-2 mb-2'>
                      <span className='bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-bold'>
                        AUTONOMOUS
                      </span>
                      <span className='bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-bold'>
                        99.9% UPTIME
                      </span>
                    </div>
                    <h4 className='text-white font-bold text-lg mb-2'>
                      Autonomous Business Operations
                    </h4>
                    <p className='text-gray-400 text-sm mb-3'>
                      AI systems running entire business operations with minimal
                      human intervention and self-optimizing performance.
                    </p>
                  </div>
                  <a
                    href='/blog/ai-2026-autonomous-business-<operations'
                    className='text-green-300 group-hover:text-green-200 transition-colors'
                  >
                    →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Success Stories & Services */}
          <div className='space-y-6'>
            <h3 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
              <span className='w-2 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded'></span>
              Success Stories & Services
            </h3>

            {/* Featured Case Study */}
            <div className='rounded-xl border border-yellow-500/20 bg-gradient-to-br from-yellow-900/20 to-orange-900/20 p-6 mb-6'>
              <div className='flex items-center gap-2 mb-3'>
                <span className='bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold'>
                  CASE STUDY
                </span>
                <span className='bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-bold'>
                  $50M SAVINGS
                </span>
              </div>
              <h4 className='text-white font-bold text-xl mb-3'>
                Enterprise AI Automation Success
              </h4>
              <p className='text-gray-300 text-sm mb-4'>
                Fortune 500 manufacturing company achieved $50M annual savings
                through comprehensive AI automation, reducing operational costs
                by 67% while improving quality metrics.
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                <span className='bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs'>
                  67% Cost Reduction
                </span>
                <span className='bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs'>
                  95% Quality Improvement
                </span>
                <span className='bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs'>
                  340% ROI
                </span>
              </div>
              <a
                href='/case-studies/ai-automation-enterprise-success-<story'
                className='inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 rounded-lg font-bold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300'
              >
                Read Full Story →
              </a>
            </div>

            {/* AI Automation Consulting Service */}
            <div className='rounded-xl border border-indigo-500/20 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 p-6'>
              <div className='flex items-center gap-2 mb-3'>
                <span className='bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-xs font-bold'>
                  SERVICE
                </span>
                <span className='bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-bold'>
                  CONSULTING
                </span>
              </div>
              <h4 className='text-white font-bold text-xl mb-3'>
                AI Automation Consulting
              </h4>
              <p className='text-gray-300 text-sm mb-4'>
                Transform your business operations with comprehensive AI
                automation consulting services. From strategy development to
                full implementation.
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                <span className='bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs'>
                  75% Cost Reduction
                </span>
                <span className='bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs'>
                  300% Productivity
                </span>
                <span className='bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs'>
                  6-12 Month ROI
                </span>
              </div>
              <a
                href='/services/ai-automation-<consulting'
                className='inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg font-bold hover:from-indigo-400 hover:to-purple-400 transition-all duration-300'
              >
                Explore Services →
              </a>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className='grid md:grid-cols-4 gap-6 mb-12'>
          <div className='text-center'>
            <div className='text-3xl md:text-4xl font-bold text-white mb-2'>
              500+
            </div>
            <div className='text-gray-300 text-sm'>
              Successful Implementations
            </div>
          </div>
          <div className='text-center'>
            <div className='text-3xl md:text-4xl font-bold text-white mb-2'>
              75%
            </div>
            <div className='text-gray-300 text-sm'>Average Cost Reduction</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl md:text-4xl font-bold text-white mb-2'>
              300%
            </div>
            <div className='text-gray-300 text-sm'>Productivity Increase</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl md:text-4xl font-bold text-white mb-2'>
              6-12
            </div>
            <div className='text-gray-300 text-sm'>Month ROI Timeline</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className='text-center'>
          <div className='inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-slate-800/50 to-purple-800/50 border border-white/10 rounded-xl p-8'>
            <div className='text-left'>
              <h3 className='text-2xl font-bold text-white mb-2'>
                Ready to Transform Your Operations?
              </h3>
              <p className='text-gray-300'>
                Join hundreds of organizations already achieving unprecedented
                results with AI automation.
              </p>
            </div>
            <div className='flex flex-col sm:flex-row gap-3'>
              <a
                href='/<contact'
                className='inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg font-bold hover:from-green-400 hover:to-emerald-400 transition-all duration-300'
              >
                Get Started Today →
              </a>
              <a
                href='/services/ai-automation-<consulting'
                className='inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-all duration-300'
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  }
