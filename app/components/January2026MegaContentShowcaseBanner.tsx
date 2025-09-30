import React from 'react';

export default function January2026MegaContentShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-indigo-900/50 border-b border-purple-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-6">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 January 2026 Mega Content Launch
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Revolutionary AI 2026 Content Now Live!
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover the most advanced AI systems delivering <span className="text-purple-400 font-bold">1000x performance</span>, 
            <span className="text-blue-400 font-bold"> 98% automation</span>, and 
            <span className="text-cyan-400 font-bold"> $2.3B in savings</span> for Fortune 500 companies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Featured Article */}
          <div className="md:col-span-2">
            <a href="/blog/ai-2026-mega-breakthrough-revolutionary-autonomous-systems" className="group">
              <div className="rounded-2xl overflow-hidden border border-purple-500/30 bg-gradient-to-r from-purple-600 to-blue-600 p-[1px]">
                <div className="bg-slate-900 rounded-2xl p-8 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl">🧠</div>
                    <div className="text-xs text-white/70 border border-purple-500/30 px-4 py-2 rounded-full bg-purple-500/10">
                      Featured • Jan 2026
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-purple-300 mb-4">
                    AI 2026: The Mega Breakthrough Revolution
                  </h3>
                  <p className="text-white/70 mb-6 text-lg">
                    Discover the most advanced autonomous AI systems that deliver 1000x performance improvements, 
                    98% automation rates, and quantum-enhanced decision making for enterprise transformation.
                  </p>
                  <div className="flex items-center text-purple-400 font-semibold">
                    <span>Read the Full Article</span>
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Case Study */}
          <div>
            <a href="/case-studies/fortune-500-ai-2026-mega-transformation-success" className="group">
              <div className="rounded-2xl overflow-hidden border border-green-500/30 bg-gradient-to-r from-green-600 to-emerald-600 p-[1px]">
                <div className="bg-slate-900 rounded-2xl p-6 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">🏆</div>
                    <div className="text-xs text-white/70 border border-green-500/30 px-3 py-1 rounded-full bg-green-500/10">
                      Success Story
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-green-300 mb-3">
                    Fortune 500: $2.3B Savings in 12 Months
                  </h3>
                  <p className="text-white/70 mb-4 text-sm">
                    How a Fortune 500 manufacturing giant achieved 450% ROI and 98% automation with our AI 2026 systems.
                  </p>
                  <div className="flex items-center text-green-400 font-semibold text-sm">
                    <span>View Case Study</span>
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Implementation Guide */}
        <div className="mb-12">
          <a href="/blog/ai-2026-implementation-playbook-complete-guide" className="group">
            <div className="rounded-2xl overflow-hidden border border-indigo-500/30 bg-gradient-to-r from-indigo-600 to-purple-600 p-[1px]">
              <div className="bg-slate-900 rounded-2xl p-8">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-4xl">📋</div>
                      <div className="text-xs text-white/70 border border-indigo-500/30 px-4 py-2 rounded-full bg-indigo-500/10">
                        Complete Guide • Jan 2026
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white group-hover:text-indigo-300 mb-4">
                      AI 2026 Implementation Playbook
                    </h3>
                    <p className="text-white/70 mb-6 text-lg">
                      The complete step-by-step guide to implementing revolutionary AI systems that deliver 1000x performance 
                      and 98% automation for enterprise transformation.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center text-indigo-400 font-semibold text-lg">
                      <span>Get Implementation Guide</span>
                      <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-2xl p-6 border border-purple-500/30 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">1000x</div>
            <div className="text-gray-300">Performance Improvement</div>
          </div>
          <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 rounded-2xl p-6 border border-blue-500/30 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
            <div className="text-gray-300">Automation Rate</div>
          </div>
          <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 rounded-2xl p-6 border border-green-500/30 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">$2.3B</div>
            <div className="text-gray-300">Average Savings</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-900/50 to-cyan-800/30 rounded-2xl p-6 border border-cyan-500/30 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">450%</div>
            <div className="text-gray-300">Average ROI</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-cyan-900/50 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Enterprise?</h3>
            <p className="text-gray-300 mb-6">
              Join Fortune 500 companies already experiencing the AI 2026 revolution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
              </a>
              <a 
                href="/case-studies" 
                className="px-8 py-4 border border-purple-500 text-purple-400 font-bold rounded-full hover:bg-purple-500/10 transition-all duration-300"
              >
                View All Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}