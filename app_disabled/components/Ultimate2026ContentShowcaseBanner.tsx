import Link from 'next/link';

export default function Ultimate2026ContentShowcaseBanner() {
  return (
    <section className='py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black border-b border-white/10'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center mb-16'>
          <div className='flex items-center justify-center gap-3 mb-6'>
            <span className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold animate-pulse'>
              ⚡ ULTIMATE 2026 SHOWCASE
            </span>
            <span className='bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold'>
              REVOLUTIONARY BREAKTHROUGHS
            </span>
          </div>
          <h2 className='text-5xl md:text-7xl font-bold text-white mb-8 leading-tight'>
            Ultimate AI Content
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500'>
              {' '}
              Showcase 2026
            </span>
          </h2>
          <p className='text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed'>
            The most comprehensive collection of revolutionary AI breakthroughs,
            transformation guides, and mega success stories that are reshaping
            the future of enterprise operations.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className='grid lg:grid-cols-2 gap-8 mb-16'>
          {/* Left Column - Blog Content */}
          <div className='space-y-6'>
            <div className='text-center mb-8'>
              <h3 className='text-3xl font-bold text-white mb-4'>
                🚀 Revolutionary AI Breakthroughs
              </h3>
              <p className='text-gray-300'>
                Latest AI technologies transforming enterprise operations
              </p>
            </div>

            <Link
              href='/blog/ai-future-enterprise-<2026'
              className='group block rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-900/40 to-indigo-900/40 p-8 hover:border-purple-400/60 transition-all duration-300 hover:scale-105'
            >
              <div className='flex items-center gap-3 mb-4'>
                <span className='bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold'>
                  ENTERPRISE BLUEPRINT
                </span>
                <span className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold'>
                  $2.8B ROI
                </span>
              </div>
              <h4 className='text-white font-bold text-2xl mb-4'>
                AI Future Enterprise 2026
              </h4>
              <p className='text-gray-300 text-lg mb-6 leading-relaxed'>
                Complete transformation blueprint for building the autonomous
                enterprise. From quantum computing to consciousness-level AI,
                achieve 99.9% automation and unprecedented efficiency.
              </p>
              <div className='flex items-center justify-between'>
                <span className='text-purple-300 text-lg font-semibold group-hover:text-purple-200'>
                  Read Complete Blueprint →
                </span>
                <span className='text-yellow-400 text-sm'>45 min read</span>
              </div>
            </Link>

            <Link
              href='/blog/ai-2026-next-generation-automation-<revolution'
              className='group block rounded-xl border border-green-500/30 bg-gradient-to-br from-green-900/40 to-emerald-900/40 p-8 hover:border-green-400/60 transition-all duration-300 hover:scale-105'
            >
              <div className='flex items-center gap-3 mb-4'>
                <span className='bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold'>
                  99% AUTOMATION
                </span>
                <span className='bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold'>
                  REVOLUTIONARY
                </span>
              </div>
              <h4 className='text-white font-bold text-2xl mb-4'>
                Next-Generation Automation Revolution
              </h4>
              <p className='text-gray-300 text-lg mb-6 leading-relaxed'>
                Achieve 99% enterprise automation with revolutionary AI
                technologies. Self-healing systems, cognitive automation, and
                massive cost savings of up to 85%.
              </p>
              <div className='flex items-center justify-between'>
                <span className='text-green-300 text-lg font-semibold group-hover:text-green-200'>
                  Discover Automation Revolution →
                </span>
                <span className='text-cyan-400 text-sm'>28 min read</span>
              </div>
            </Link>

            <Link
              href='/blog/ai-2027-quantum-consciousness-fusion-<breakthrough'
              className='group block rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-8 hover:border-purple-400/60 transition-all duration-300 hover:scale-105'
            >
              <div className='flex items-center gap-3 mb-4'>
                <span className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold'>
                  QUANTUM AI
                </span>
                <span className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold'>
                  100,000x
                </span>
              </div>
              <h4 className='text-white font-bold text-2xl mb-4'>
                Quantum Consciousness Fusion
              </h4>
              <p className='text-gray-300 text-lg mb-6 leading-relaxed'>
                Revolutionary quantum-enhanced neural architectures achieving
                consciousness-level reasoning with unprecedented 100,000x
                performance improvements.
              </p>
              <div className='flex items-center justify-between'>
                <span className='text-purple-300 text-lg font-semibold group-hover:text-purple-200'>
                  Explore Quantum AI →
                </span>
                <span className='text-yellow-400 text-sm'>38 min read</span>
              </div>
            </Link>
          </div>

          {/* Right Column - Case Studies */}
          <div className='space-y-6'>
            <div className='text-center mb-8'>
              <h3 className='text-3xl font-bold text-white mb-4'>
                🏆 Mega Success Stories
              </h3>
              <p className='text-gray-300'>
                Real-world AI transformation results
              </p>
            </div>

            <Link
              href='/case-studies/ai-revolutionary-transformation-<2026'
              className='group block rounded-xl border border-orange-500/30 bg-gradient-to-br from-orange-900/40 to-red-900/40 p-8 hover:border-orange-400/60 transition-all duration-300 hover:scale-105'
            >
              <div className='flex items-center gap-3 mb-4'>
                <span className='bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold'>
                  $100M ROI
                </span>
                <span className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold'>
                  MEGA SUCCESS
                </span>
              </div>
              <h4 className='text-white font-bold text-2xl mb-4'>
                Revolutionary Transformation Success
              </h4>
              <p className='text-gray-300 text-lg mb-6 leading-relaxed'>
                Fortune 500 manufacturing company achieved $100M ROI through AI
                transformation. 99.5% automation, 99.9% uptime, and 1000x
                performance improvement.
              </p>
              <div className='flex items-center justify-between'>
                <span className='text-orange-300 text-lg font-semibold group-hover:text-orange-200'>
                  View Success Story →
                </span>
                <span className='text-yellow-400 text-sm'>35 min read</span>
              </div>
            </Link>

            <Link
              href='/case-studies/ai-2026-neural-optimization-mega-<success'
              className='group block rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 p-8 hover:border-blue-400/60 transition-all duration-300 hover:scale-105'
            >
              <div className='flex items-center gap-3 mb-4'>
                <span className='bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold'>
                  $200M ROI
                </span>
                <span className='bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold'>
                  NEURAL AI
                </span>
              </div>
              <h4 className='text-white font-bold text-2xl mb-4'>
                Neural Optimization Mega Success
              </h4>
              <p className='text-gray-300 text-lg mb-6 leading-relaxed'>
                Global financial services firm achieved $200M ROI with neural
                optimization. 99.5% AI-driven decisions, 1000x faster trading,
                and perfect accuracy.
              </p>
              <div className='flex items-center justify-between'>
                <span className='text-blue-300 text-lg font-semibold group-hover:text-blue-200'>
                  Read Neural Success →
                </span>
                <span className='text-cyan-400 text-sm'>42 min read</span>
              </div>
            </Link>

            <Link
              href='/case-studies/ai-2027-consciousness-fusion-mega-<success'
              className='group block rounded-xl border border-green-500/30 bg-gradient-to-br from-green-900/40 to-emerald-900/40 p-8 hover:border-green-400/60 transition-all duration-300 hover:scale-105'
            >
              <div className='flex items-center gap-3 mb-4'>
                <span className='bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold'>
                  $2.5B ROI
                </span>
                <span className='bg-gradient-to-r from-purple-400 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold'>
                  CONSCIOUSNESS
                </span>
              </div>
              <h4 className='text-white font-bold text-2xl mb-4'>
                Consciousness Fusion Mega Success
              </h4>
              <p className='text-gray-300 text-lg mb-6 leading-relaxed'>
                How a Fortune 500 company achieved $2.5B ROI through
                revolutionary AI consciousness fusion breakthrough with 100,000x
                performance improvement.
              </p>
              <div className='flex items-center justify-between'>
                <span className='text-green-300 text-lg font-semibold group-hover:text-green-200'>
                  Read Consciousness Success →
                </span>
                <span className='text-green-400 text-sm'>40 min read</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className='text-center'>
          <div className='bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-2xl p-12 border border-white/10'>
            <h3 className='text-4xl font-bold text-white mb-6'>
              Ready to Transform Your Enterprise?
            </h3>
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
              Join hundreds of Fortune 500 companies that have achieved
              revolutionary success through AI transformation. Start your
              journey toward complete business autonomy today.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/<contact'
                className='inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-5 rounded-lg font-semibold text-xl hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl'
              >
                🚀 Start Your Transformation
              </Link>
              <Link
                href='/<blog'
                className='inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-5 rounded-lg font-semibold text-xl hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl'
              >
                📚 Explore All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
