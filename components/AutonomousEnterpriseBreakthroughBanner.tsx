import React from 'react';
import Link from 'next/link';

export default function AutonomousEnterpriseBreakthroughBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-cyan-900 to-slate-900 border-b border-indigo-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Banner */}
          <div className="bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/30 mb-8">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 mb-6">
              <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">
                🤖 BREAKING: 2026 Autonomous Enterprise Revolution
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Fully Autonomous Enterprise Operations
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              The first enterprise system to achieve 99.9% operational autonomy, requiring only 0.1% human intervention 
              while delivering proven $8.7B ROI results.
            </p>
            
            {/* Key Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-extrabold text-indigo-400 mb-1">99.9%</div>
                <div className="text-xs text-indigo-300">Operational Autonomy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-extrabold text-cyan-400 mb-1">$8.7B</div>
                <div className="text-xs text-cyan-300">Proven ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-extrabold text-blue-400 mb-1">24/7</div>
                <div className="text-xs text-blue-300">Continuous Operations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-extrabold text-green-400 mb-1">0.1%</div>
                <div className="text-xs text-green-300">Human Intervention</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog/ai-2026-autonomous-enterprise-operations-breakthrough"
                className="bg-gradient-to-r from-indigo-500 to-cyan-600 hover:from-indigo-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
              >
                Explore Technology →
              </Link>
              <Link
                href="/case-studies/ai-2026-autonomous-enterprise-mega-success"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
              >
                View $8.7B Success Story →
              </Link>
              <Link
                href="/contact"
                className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-3">Self-Managing Systems</h3>
              <p className="text-gray-300 text-sm mb-4">
                Autonomous AI systems that manage all enterprise operations, from resource allocation 
                to strategic decision-making, with minimal human oversight.
              </p>
              <div className="text-indigo-400 text-sm font-semibold">Learn More →</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Continuous Optimization</h3>
              <p className="text-gray-300 text-sm mb-4">
                Real-time optimization of all business processes, automatically adapting to changing 
                conditions and market dynamics without human intervention.
              </p>
              <div className="text-cyan-400 text-sm font-semibold">Learn More →</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Strategic Autonomy</h3>
              <p className="text-gray-300 text-sm mb-4">
                AI systems capable of making high-level strategic decisions, entering new markets, 
                and adapting business models autonomously based on data analysis.
              </p>
              <div className="text-blue-400 text-sm font-semibold">Learn More →</div>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/30">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-400">Fortune 50</div>
                <div className="text-sm text-indigo-300">Verified Client</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">$8.7B</div>
                <div className="text-sm text-cyan-300">Measurable ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">0.5 Months</div>
                <div className="text-sm text-blue-300">Payback Period</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">99.9%</div>
                <div className="text-sm text-green-300">Operational Autonomy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}