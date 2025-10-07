import Link from 'next/link';

export default function October2025FreshContentBanner() {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 py-20'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden opacity-30'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse'></div>
        <div
          className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse'
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className='absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse'
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='max-w-6xl mx-auto'>
          {/* Header Badge */}
          <div className='text-center mb-8'>
            <div className='inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 animate-pulse'>
              <span className='text-blue-400 font-bold text-xl tracking-wider uppercase'>
                🎉 NEW: October 2025 Enterprise AI Content
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight'>
              Latest AI Breakthroughs & Implementation Guides
            </h2>

            <p className='text-xl text-gray-300 mb-8 font-semibold max-w-3xl mx-auto'>
              Discover the cutting-edge AI technologies and proven strategies
              transforming enterprises in October 2025. From multi-agent
              collaboration to real-time operations—we've got you covered.
            </p>
          </div>

          {/* Content Grid */}
          <div className='grid md:grid-cols-3 gap-6 mb-12'>
            {/* Multi-Agent Systems */}
            <div className='bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105'>
              <div className='flex items-center gap-2 mb-4'>
                <span className='bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold'>
                  NEW
                </span>
                <span className='bg-gradient-to-r from-green-400 to-emerald-500 text-black px-3 py-1 rounded-full text-xs font-bold'>
                  OCTOBER 2025
                </span>
              </div>
              <div className='text-4xl mb-4'>🤝</div>
              <h3 className='text-white font-bold text-xl mb-3'>
                Multi-Agent AI Collaboration
              </h3>
              <p className='text-gray-400 text-sm mb-4'>
                Discover how collaborative AI agents achieve 10x productivity
                gains through intelligent orchestration and specialized role
                delegation.
              </p>
              <div className='grid grid-cols-2 gap-3 mb-4'>
                <div className='bg-blue-500/10 rounded-lg p-2'>
                  <div className='text-xl font-bold text-blue-400'>10x</div>
                  <div className='text-xs text-blue-300'>Productivity</div>
                </div>
                <div className='bg-cyan-500/10 rounded-lg p-2'>
                  <div className='text-xl font-bold text-cyan-400'>85%</div>
                  <div className='text-xs text-cyan-300'>Cost Reduction</div>
                </div>
              </div>
              <Link
                href='/blog/ai-2025-october-multi-agent-collaboration-<systems'
                className='text-blue-300 text-sm font-semibold hover:text-blue-200 inline-flex items-center gap-2'
              >
                Read Full Guide →
              </Link>
            </div>

            {/* Cost Optimization */}
            <div className='bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105'>
              <div className='flex items-center gap-2 mb-4'>
                <span className='bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold'>
                  NEW
                </span>
                <span className='bg-gradient-to-r from-orange-400 to-red-500 text-black px-3 py-1 rounded-full text-xs font-bold'>
                  FINOPS
                </span>
              </div>
              <div className='text-4xl mb-4'>💰</div>
              <h3 className='text-white font-bold text-xl mb-3'>
                Enterprise Cost Optimization
              </h3>
              <p className='text-gray-400 text-sm mb-4'>
                Master AI cost management with proven FinOps strategies that
                reduce spending by 70% while accelerating innovation and
                performance.
              </p>
              <div className='grid grid-cols-2 gap-3 mb-4'>
                <div className='bg-green-500/10 rounded-lg p-2'>
                  <div className='text-xl font-bold text-green-400'>70%</div>
                  <div className='text-xs text-green-300'>Cost Reduction</div>
                </div>
                <div className='bg-emerald-500/10 rounded-lg p-2'>
                  <div className='text-xl font-bold text-emerald-400'>$5M</div>
                  <div className='text-xs text-emerald-300'>Avg Savings</div>
                </div>
              </div>
              <Link
                href='/blog/ai-2025-october-enterprise-cost-<optimization'
                className='text-green-300 text-sm font-semibold hover:text-green-200 inline-flex items-center gap-2'
              >
                Read Full Guide →
              </Link>
            </div>

            {/* Real-Time Operations */}
            <div className='bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105'>
              <div className='flex items-center gap-2 mb-4'>
                <span className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold'>
                  NEW
                </span>
                <span className='bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-3 py-1 rounded-full text-xs font-bold'>
                  AIOPS
                </span>
              </div>
              <div className='text-4xl mb-4'>📊</div>
              <h3 className='text-white font-bold text-xl mb-3'>
                Real-Time AI Operations
              </h3>
              <p className='text-gray-400 text-sm mb-4'>
                Transform operations with microsecond monitoring, predictive
                alerting, and 95% autonomous remediation for enterprise AI
                systems.
              </p>
              <div className='grid grid-cols-2 gap-3 mb-4'>
                <div className='bg-purple-500/10 rounded-lg p-2'>
                  <div className='text-xl font-bold text-purple-400'>
                    &lt;10ms
                  </div>
                  <div className='text-xs text-purple-300'>Detection</div>
                </div>
                <div className='bg-pink-500/10 rounded-lg p-2'>
                  <div className='text-xl font-bold text-pink-400'>95%</div>
                  <div className='text-xs text-pink-300'>Auto-Resolve</div>
                </div>
              </div>
              <Link
                href='/blog/ai-2025-october-real-time-<operations'
                className='text-purple-300 text-sm font-semibold hover:text-purple-200 inline-flex items-center gap-2'
              >
                Read Full Guide →
              </Link>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className='text-center'>
            <div className='inline-flex flex-col sm:flex-row gap-4'>
              <Link
                href='/<contact'
                className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1'
              >
                Get Started Today
              </Link>
              <Link
                href='/<blog'
                className='border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300'
              >
                Explore All Content
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className='mt-12 bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20'>
            <h4 className='text-white font-bold text-lg mb-4 text-center'>
              Related Topics & Services
            </h4>
            <div className='flex flex-wrap justify-center gap-3'>
              <Link
                href='/services/ai-agents-enterprise-automation-<2025'
                className='text-blue-300 text-sm hover:text-blue-200 transition-colors px-4 py-2 bg-blue-500/10 rounded-lg'
              >
                AI Agent Services
              </Link>
              <Link
                href='/services/ai-finops-<consulting'
                className='text-green-300 text-sm hover:text-green-200 transition-colors px-4 py-2 bg-green-500/10 rounded-lg'
              >
                FinOps Consulting
              </Link>
              <Link
                href='/services/ai-observability-monitoring-<2025'
                className='text-purple-300 text-sm hover:text-purple-200 transition-colors px-4 py-2 bg-purple-500/10 rounded-lg'
              >
                AI Observability
              </Link>
              <Link
                href='/blog/ai-2025-october-multi-agent-collaboration-<systems'
                className='text-cyan-300 text-sm hover:text-cyan-200 transition-colors px-4 py-2 bg-cyan-500/10 rounded-lg'
              >
                Multi-Agent Guide
              </Link>
              <Link
                href='/blog/ai-2025-october-enterprise-cost-<optimization'
                className='text-emerald-300 text-sm hover:text-emerald-200 transition-colors px-4 py-2 bg-emerald-500/10 rounded-lg'
              >
                Cost Optimization
              </Link>
              <Link
                href='/blog/ai-2025-october-real-time-<operations'
                className='text-pink-300 text-sm hover:text-pink-200 transition-colors px-4 py-2 bg-pink-500/10 rounded-lg'
              >
                Real-Time Ops
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
