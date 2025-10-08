import Link from 'next/link';




/**
 * Content Intelligence Revolution Banner
 * Promotes the latest autonomous content intelligence blog post and case study
 * Published: October 1, 2025
 */
export default function ContentIntelligenceBanner() {
  return (
    <section className='bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-16 px-4 relative overflow-hidden'>
      {/* Animated background pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse' />
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000' />
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Top Badge */}
        <div className='text-center mb-8'>
          <div className='inline-flex items-center gap-3 bg-yellow-400 text-emerald-900 px-6 py-3 rounded-full font-bold text-sm mb-4 animate-bounce shadow-2xl'>
            <Zap className='w-5 h-5' />
            <span>
              🚀 JUST PUBLISHED: OCTOBER 1, 2025 - CONTENT INTELLIGENCE
              BREAKTHROUGH!
            </span>
            <Zap className='w-5 h-5' />
          </div>
        </div>

        {/* Main Heading */}
        <div className='text-center mb-12'>
          <h2 className='text-5xl md:text-6xl font-extrabold mb-6 leading-tight'>
            Autonomous Content Intelligence
            <br />
            <span className='text-yellow-300'>Revolution</span>
          </h2>
          <p className='text-3xl font-bold text-yellow-300 mb-4'>
            $127M Proven Value • 99.8% Accuracy • 47,000+ Automated Workflows
          </p>
          <p className='text-xl max-w-4xl mx-auto leading-relaxed'>
            Transform your enterprise content operations with AI-powered
            autonomous systems. Fortune 100 proven success across 84 countries
            with breakthrough results.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className='grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12'>
          <div className='bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all'>
            <div className='text-3xl font-bold text-yellow-300 mb-2'>$127M</div>
            <div className='text-sm font-semibold'>Annual Value</div>
          </div>
          <div className='bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all'>
            <div className='text-3xl font-bold text-yellow-300 mb-2'>99.8%</div>
            <div className='text-sm font-semibold'>Classification Accuracy</div>
          </div>
          <div className='bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all'>
            <div className='text-3xl font-bold text-yellow-300 mb-2'>
              47,000+
            </div>
            <div className='text-sm font-semibold'>Automated Workflows</div>
          </div>
          <div className='bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all'>
            <div className='text-3xl font-bold text-yellow-300 mb-2'>95%</div>
            <div className='text-sm font-semibold'>Cycle Time Reduction</div>
          </div>
          <div className='bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all'>
            <div className='text-3xl font-bold text-yellow-300 mb-2'>127</div>
            <div className='text-sm font-semibold'>Languages Supported</div>
          </div>
          <div className='bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all'>
            <div className='text-3xl font-bold text-yellow-300 mb-2'>340%</div>
            <div className='text-sm font-semibold'>Productivity Gain</div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className='grid md:grid-cols-3 gap-6 mb-12'>
          <div className='bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20'>
            <BookOpen className='w-12 h-12 text-yellow-300 mb-4' />
            <h3 className='text-xl font-bold mb-3'>Intelligent Processing</h3>
            <ul className='space-y-2 text-sm'>
              <li className='flex items-start gap-2'>
                <CheckCircle className='w-4 h-4 text-yellow-300 mt-0.5 flex-shrink-0' />
                <span>1,000+ documents/second processing</span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle className='w-4 h-4 text-yellow-300 mt-0.5 flex-shrink-0' />
                <span>Advanced NLP & computer vision</span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle className='w-4 h-4 text-yellow-300 mt-0.5 flex-shrink-0' />
                <span>Real-time quality assessment</span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle className='w-4 h-4 text-yellow-300 mt-0.5 flex-shrink-0' />
                <span>Sub-100ms response time</span>
              </li>
            </ul>
          </div>

          <div className='bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20'>
            <TrendingUp className='w-12 h-12 text-yellow-300 mb-4' />
            <h3 className='text-xl font-bold mb-3'>Autonomous Operations</h3>
            <ul className='space-y-2 text-sm'>
              <li className='flex items-start gap-2'>
                <CheckCircle className='w-4 h-4 text-yellow-300 mt-0.5 flex-shrink-0' />
                <span>Self-learning workflow optimization</span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle className='w-4 h-4 text-yellow-300 mt-0.5 flex-shrink-0' />
                <span>24/7 unattended processing</span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle className='w-4 h-4 text-yellow-300 mt-0.5 flex-shrink-0' />
                <span>Automatic compliance checking</span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle className='w-4 h-4 text-yellow-300 mt-0.5 flex-shrink-0' />
                <span>Intelligent content distribution</span>
              </li>
            </ul>
          </div>

          <div className='bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20'>
            <Globe className='w-12 h-12 text-yellow-300 mb-4' />
            <h3 className='text-xl font-bold mb-3'>Enterprise Scale</h3>
            <ul className='space-y-2 text-sm'>
              <li className='flex items-start gap-2'>
                <CheckCircle className='w-4 h-4 text-yellow-300 mt-0.5 flex-shrink-0' />
                <span>247,000 employees supported</span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle className='w-4 h-4 text-yellow-300 mt-0.5 flex-shrink-0' />
                <span>84 countries deployment</span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle className='w-4 h-4 text-yellow-300 mt-0.5 flex-shrink-0' />
                <span>99.99% uptime guarantee</span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle className='w-4 h-4 text-yellow-300 mt-0.5 flex-shrink-0' />
                <span>Enterprise-grade security</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <ArrowRight
            href="/blog/ai-2025-oct-01-autonomous-content-intelligence-revolution"
            className="group bg-yellow-400 text-emerald-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all shadow-2xl hover:shadow-yellow-400/50 hover:scale-105 flex items-center gap-2"
          >
            <BookOpen className='w-6 h-6' />
            <span>📖 Read Complete Guide (18 min)</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </ArrowRight>
          
          <ArrowRight
            href="/case-studies/ai-2025-oct-01-content-intelligence-127-million-success"
            className="group bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:shadow-white/50 hover:scale-105 flex items-center gap-2"
          >
            <Award />
            <span>💎 View $127M Success Story</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </ArrowRight>
        </div>

        {/* Additional CTA */}
        <div className="text-center">
          <ArrowRight
            href="/contact"
            className="inline-flex items-center gap-2 border-3 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-emerald-600 transition-all shadow-2xl hover:scale-105"
          >
            <Zap className='w-6 h-6' />
            <span>🚀 Transform Your Content Operations Today</span>
          </Link>
        </div>

        {/* Social Proof */}
        <div className='mt-12 text-center'>
          <p className='text-sm font-semibold mb-4 text-yellow-300'>
            TRUSTED BY FORTUNE 100 LEADERS
          </p>
          <div className='flex flex-wrap justify-center gap-6 items-center opacity-80'>
            <div className='text-xs'>✅ Manufacturing</div>
            <div className='text-xs'>✅ Financial Services</div>
            <div className='text-xs'>✅ Healthcare</div>
            <div className='text-xs'>✅ Retail</div>
            <div className='text-xs'>✅ Technology</div>
            <div className='text-xs'>✅ Energy</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Compact Content Intelligence Showcase Banner
 * For use in content hub and other pages
 */
export function ContentIntelligenceShowcaseBanner() {
  return (
    <div className='bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-2xl mb-8 border-4 border-yellow-400 shadow-2xl'>
      <div className='text-center'>
        <div className='inline-block bg-yellow-400 text-emerald-900 px-6 py-3 rounded-full text-sm font-bold mb-4 animate-pulse'>
          🔥 NEW: OCTOBER 1, 2025 - CONTENT INTELLIGENCE BREAKTHROUGH!
        </div>
        <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>
          Autonomous Content Intelligence Revolution
        </h2>
        <p className='text-2xl font-bold text-yellow-300 mb-4'>
          $127M Proven Value • 99.8% Accuracy • 47,000+ Workflows
        </p>
        <p className='text-xl mb-6 max-w-4xl mx-auto'>
          Transform enterprise content operations with AI-powered autonomous
          systems. Fortune 100 proven success across 84 countries worldwide.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <ArrowRight
            href="/blog/ai-2025-oct-01-autonomous-content-intelligence-revolution"
            className="bg-yellow-400 text-emerald-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transition-colors shadow-2xl"
          >
            📖 Read Revolutionary Guide →
          </Link>
          <Link
            href='/case-studies/ai-2025-oct-01-content-intelligence-127-million-success'
            className='bg-white text-emerald-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-2xl'
          >
            💎 View $127M Success Story →
          </Link>
          <Link
            href='/contact'
            className='border-3 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-emerald-600 transition-colors shadow-2xl'
          >
            🚀 Get Started Today →
          </Link>
        </div>
      </div>
    </div>
  );
}
