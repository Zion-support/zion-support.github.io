import React from 'react';

export default function October2025FreshContentHighlightBanner() {
  return (
    <section className="py-12 bg-gradient-to-br from-indigo-900/30 via-blue-900/30 to-cyan-900/30 backdrop-blur-sm border-b border-indigo-500/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 mb-4">
              <span className="text-indigo-400 font-bold text-sm tracking-wider uppercase">
                🔥 Fresh Content Alert - October 1, 2025
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Latest AI Breakthroughs & Success Stories
            </h2>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-blue-900/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30 text-center">
              <div className="text-3xl font-extrabold text-blue-400 mb-1">87%</div>
              <div className="text-xs text-blue-300">Cost Reduction</div>
            </div>
            <div className="bg-purple-900/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30 text-center">
              <div className="text-3xl font-extrabold text-purple-400 mb-1">$43B</div>
              <div className="text-xs text-purple-300">Value Created</div>
            </div>
            <div className="bg-green-900/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30 text-center">
              <div className="text-3xl font-extrabold text-green-400 mb-1">12.5x</div>
              <div className="text-xs text-green-300">ROI Achieved</div>
            </div>
            <div className="bg-cyan-900/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30 text-center">
              <div className="text-3xl font-extrabold text-cyan-400 mb-1">4.2x</div>
              <div className="text-xs text-cyan-300">Productivity Gain</div>
            </div>
          </div>

          {/* Content Links */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Agentic AI Systems</h3>
                <p className="text-sm text-gray-400 mb-3">
                  Autonomous decision-making & self-healing infrastructure
                </p>
                <a 
                  href="/blog/ai-october-2025-next-gen-agentic-ai-systems"
                  className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors"
                >
                  Read Now →
                </a>
              </div>

              <div className="text-center">
                <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-3xl">⚙️</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Platform Engineering</h3>
                <p className="text-sm text-gray-400 mb-3">
                  Self-optimizing systems & intelligent automation
                </p>
                <a 
                  href="/blog/ai-october-2025-intelligent-automation-platform-engineering"
                  className="text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors"
                >
                  Learn More →
                </a>
              </div>

              <div className="text-center">
                <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">$43B Success Story</h3>
                <p className="text-sm text-gray-400 mb-3">
                  Manufacturing transformation case study
                </p>
                <a 
                  href="/case-studies/manufacturing-ai-transformation-oct-2025"
                  className="text-green-400 hover:text-green-300 font-semibold text-sm transition-colors"
                >
                  View Case Study →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
