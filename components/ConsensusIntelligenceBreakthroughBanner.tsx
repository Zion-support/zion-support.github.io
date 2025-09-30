import React from 'react';
import Link from 'next/link';

export default function ConsensusIntelligenceBreakthroughBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900 border-b border-purple-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Banner */}
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 mb-8">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-6">
              <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
                🚀 BREAKING: 2026 Consensus Intelligence Breakthrough
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Revolutionary AI Consensus Decision Making
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              The first AI system to achieve true consensus reasoning with 99.97% accuracy, 
              1000x faster decisions, and proven $5.2B ROI results.
            </p>
            
            {/* Key Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-extrabold text-purple-400 mb-1">99.97%</div>
                <div className="text-xs text-purple-300">Consensus Accuracy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-extrabold text-blue-400 mb-1">1000x</div>
                <div className="text-xs text-blue-300">Decision Speed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-extrabold text-green-400 mb-1">$5.2B</div>
                <div className="text-xs text-green-300">Proven ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-extrabold text-cyan-400 mb-1">0.3s</div>
                <div className="text-xs text-cyan-300">Consensus Time</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog/ai-2026-consensus-intelligence-breakthrough"
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Explore Breakthrough →
              </Link>
              <Link
                href="/case-studies/ai-2026-consensus-intelligence-mega-success"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                View $5.2B Success Story →
              </Link>
              <Link
                href="/contact"
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">Multi-Agent Consensus</h3>
              <p className="text-gray-300 text-sm mb-4">
                1000+ specialized AI agents collaborate in real-time to reach consensus 
                on complex decisions with unprecedented accuracy.
              </p>
              <div className="text-purple-400 text-sm font-semibold">Learn More →</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Lightning Speed</h3>
              <p className="text-gray-300 text-sm mb-4">
                Achieve consensus on complex enterprise decisions in just 0.3 seconds, 
                1000x faster than traditional processes.
              </p>
              <div className="text-blue-400 text-sm font-semibold">Learn More →</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300 text-sm mb-4">
                Fortune 100 companies achieving $5.2B ROI with 99.97% decision accuracy 
                and 98% error reduction.
              </p>
              <div className="text-green-400 text-sm font-semibold">Learn More →</div>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/30">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">Fortune 100</div>
                <div className="text-sm text-green-300">Verified Client</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">$5.2B</div>
                <div className="text-sm text-emerald-300">Measurable ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-400">0.8 Months</div>
                <div className="text-sm text-teal-300">Payback Period</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">99.97%</div>
                <div className="text-sm text-cyan-300">Decision Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}