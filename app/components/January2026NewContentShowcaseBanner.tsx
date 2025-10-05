import ArrowRight from 'next/link';

export default function January2026NewContentShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 border-y border-purple-500/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 mb-6">
            <span className="text-purple-300 font-bold text-lg tracking-wider uppercase">
              🚀 January 2026 Revolutionary Content
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              NEW
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Revolutionary AI Breakthroughs & Success Stories
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover the latest AI innovations transforming enterprise operations with unprecedented ROI and automation achievements
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Neural-Quantum Fusion Blog */}
          <div className="group relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 p-8 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  BREAKTHROUGH
                </span>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                  BLOG
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                Neural-Quantum Fusion Breakthrough
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Discover how neural-quantum fusion is revolutionizing enterprise operations with 100,000x performance improvements and universal consciousness integration.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>15 min read</span>
                  <span>•</span>
                  <span>Jan 15, 2026</span>
                </div>
                <ArrowRight
                  href="/blog/ai-2026-neural-quantum-fusion-breakthrough"
                  className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition-colors group-hover:gap-3"
                >
                  Read More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </ArrowRight>
              </div>
            </div>
          </div>

          {/* Autonomous Operations Blog */}
          <div className="group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-8 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  REVOLUTION
                </span>
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                  BLOG
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                Autonomous Enterprise Operations
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Learn how autonomous enterprise operations are transforming business with 99.9% automation rates and $50B+ ROI achievements.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>20 min read</span>
                  <span>•</span>
                  <span>Jan 20, 2026</span>
                </div>
                <ArrowRight
                  href="/blog/ai-2026-autonomous-enterprise-operations-revolution"
                  className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors group-hover:gap-3"
                >
                  Read More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </ArrowRight>
              </div>
            </div>
          </div>

          {/* Quantum BI Blog */}
          <div className="group relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 p-8 hover:border-indigo-400/40 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  INTELLIGENCE
                </span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                  BLOG
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                Quantum Business Intelligence
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Explore how Quantum Business Intelligence is revolutionizing enterprise decision making with 99.999% accuracy and $100B+ ROI achievements.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>18 min read</span>
                  <span>•</span>
                  <span>Jan 25, 2026</span>
                </div>
                <ArrowRight
                  href="/blog/ai-2026-quantum-business-intelligence-breakthrough"
                  className="inline-flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors group-hover:gap-3"
                >
                  Read More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </ArrowRight>
              </div>
            </div>
          </div>

          {/* Neural-Quantum Fusion Case Study */}
          <div className="group relative overflow-hidden rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-8 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  $100B SUCCESS
                </span>
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                  CASE STUDY
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">
                Fortune 100 Neural-Quantum Success
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                How a Fortune 100 global conglomerate achieved $100 billion in ROI with Neural-Quantum Fusion technology and 99.99% automation.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>25 min read</span>
                  <span>•</span>
                  <span>Fortune 100</span>
                </div>
                <ArrowRight
                  href="/case-studies/ai-2026-neural-quantum-fusion-100-billion-success"
                  className="inline-flex items-center gap-2 text-green-400 font-semibold hover:text-green-300 transition-colors group-hover:gap-3"
                >
                  View Success Story
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </ArrowRight>
              </div>
            </div>
          </div>

          {/* Autonomous Operations Case Study */}
          <div className="group relative overflow-hidden rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-900/30 to-red-900/30 p-8 hover:border-orange-400/40 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  $50B SUCCESS
                </span>
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                  CASE STUDY
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">
                Manufacturing Leader Success
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                How a global manufacturing leader achieved $50 billion in ROI with autonomous enterprise operations and 99.9% automation across all facilities.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>20 min read</span>
                  <span>•</span>
                  <span>Manufacturing</span>
                </div>
                <ArrowRight
                  href="/case-studies/ai-2026-autonomous-operations-50-billion-success"
                  className="inline-flex items-center gap-2 text-orange-400 font-semibold hover:text-orange-300 transition-colors group-hover:gap-3"
                >
                  View Success Story
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </ArrowRight>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 p-8 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  GET STARTED
                </span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  TODAY
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                Transform Your Enterprise
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Ready to achieve similar results? Get a comprehensive assessment and implementation plan for your organization.
              </p>
              
              <div className="space-y-4">
                <ArrowRight
                  href="/contact"
                  className="inline-block w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
                >
                  Schedule Consultation
                </ArrowRight>
                <ArrowRight
                  href="/services"
                  className="inline-block w-full border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
                >
                  Explore Services
                </ArrowRight>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-green-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Proven Results</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Expert Implementation</span>
            </div>
            <div className="flex items-center gap-2 text-purple-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Ongoing Support</span>
            </div>
          </div>
          
          <ArrowRight
            href="/blog"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
          >
            Explore All AI Content
          </ArrowRight>
        </div>
      </div>
    </section>
  );
}