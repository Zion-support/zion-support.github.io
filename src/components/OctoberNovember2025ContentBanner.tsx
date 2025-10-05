import React from 'react';

export default function OctoberNovember2025ContentBanner() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest font-bold text-blue-100 mb-3">
            🚀 FRESH INSIGHTS · OCTOBER-NOVEMBER 2025
          </p>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Latest Enterprise AI Strategies
          </h2>
          <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
            Production-ready frameworks for AI supply chains, multi-agent systems, governance,
            and real-time inference optimization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {/* Article 1 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer border border-white/20">
            <div className="text-blue-300 text-sm font-semibold mb-3 uppercase tracking-wide">
              October 2025
            </div>
            <h3 className="text-2xl font-bold mb-3">
              AI Supply Chain Resilience 2.0
            </h3>
            <p className="text-blue-100 mb-4 text-sm leading-relaxed">
              Predictive disruption management, autonomous inventory optimization, and real-time supplier risk scoring
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-blue-200">22 min read</span>
              <div className="text-blue-300 font-semibold">→</div>
            </div>
          </div>

          {/* Article 2 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer border border-white/20">
            <div className="text-purple-300 text-sm font-semibold mb-3 uppercase tracking-wide">
              October 2025
            </div>
            <h3 className="text-2xl font-bold mb-3">
              Multi-Agent Systems Architecture
            </h3>
            <p className="text-purple-100 mb-4 text-sm leading-relaxed">
              Production patterns for orchestrating autonomous agents with safety, observability, and cost control
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-purple-200">28 min read</span>
              <div className="text-purple-300 font-semibold">→</div>
            </div>
          </div>

          {/* Article 3 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer border border-white/20">
            <div className="text-pink-300 text-sm font-semibold mb-3 uppercase tracking-wide">
              November 2025
            </div>
            <h3 className="text-2xl font-bold mb-3">
              AI Governance Framework
            </h3>
            <p className="text-pink-100 mb-4 text-sm leading-relaxed">
              Compliance automation, risk management, audit trails, and board-level reporting for autonomous AI
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-pink-200">32 min read</span>
              <div className="text-pink-300 font-semibold">→</div>
            </div>
          </div>

          {/* Article 4 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer border border-white/20">
            <div className="text-orange-300 text-sm font-semibold mb-3 uppercase tracking-wide">
              November 2025
            </div>
            <h3 className="text-2xl font-bold mb-3">
              Real-Time AI Inference
            </h3>
            <p className="text-orange-100 mb-4 text-sm leading-relaxed">
              Sub-50ms inference at scale: quantization, edge deployment, caching, and hardware acceleration
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-orange-200">26 min read</span>
              <div className="text-orange-300 font-semibold">→</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors cursor-pointer shadow-xl">
            Explore All Latest Insights →
          </div>
        </div>
      </div>
    </section>
  );
}
