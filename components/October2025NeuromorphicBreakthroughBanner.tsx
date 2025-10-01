import React from "react";

export default function October2025NeuromorphicBreakthroughBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-900/30 via-teal-900/30 to-cyan-900/30 backdrop-blur-sm border-b border-emerald-500/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-6 animate-pulse">
              <span className="text-emerald-400 font-bold text-lg tracking-wider uppercase">
                🧠 JUST PUBLISHED: OCTOBER 1, 2025 — NEUROMORPHIC COMPUTING REVOLUTION
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Neuromorphic Edge Computing: 1000x Energy Efficiency Breakthrough
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how brain-inspired AI processing is revolutionizing edge computing with sub-microsecond latency,
              1000x energy efficiency, and continuous on-device learning. Fortune 500 enterprises are already achieving
              $2.3B in cost savings and 99.97% accuracy.
            </p>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/30 text-center">
                <div className="text-3xl font-extrabold text-emerald-400 mb-1">1000x</div>
                <div className="text-sm text-emerald-300">Energy Efficiency</div>
              </div>
              <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-4 border border-teal-500/30 text-center">
                <div className="text-3xl font-extrabold text-teal-400 mb-1">&lt;1μs</div>
                <div className="text-sm text-teal-300">Inference Latency</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30 text-center">
                <div className="text-3xl font-extrabold text-cyan-400 mb-1">99.97%</div>
                <div className="text-sm text-cyan-300">Accuracy Rate</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30 text-center">
                <div className="text-3xl font-extrabold text-blue-400 mb-1">$2.3B</div>
                <div className="text-sm text-blue-300">Enterprise Savings</div>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Revolutionary Capabilities</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h4 className="text-lg font-bold text-emerald-400">Spiking Neural Networks</h4>
                    <p className="text-gray-400 text-sm">Event-driven processing that only activates when needed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔋</span>
                  <div>
                    <h4 className="text-lg font-bold text-teal-400">Ultra-Low Power</h4>
                    <p className="text-gray-400 text-sm">92% reduction in energy costs, 45-day battery life</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <h4 className="text-lg font-bold text-cyan-400">Real-Time Learning</h4>
                    <p className="text-gray-400 text-sm">Continuous on-device adaptation without cloud connectivity</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏭</span>
                  <div>
                    <h4 className="text-lg font-bold text-blue-400">Production-Proven</h4>
                    <p className="text-gray-400 text-sm">Fortune 100 deployments with 500+ inspection points</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="/blog/ai-2025-october-neuromorphic-edge-computing-breakthrough"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
              >
                Read Full Technical Guide →
              </a>
              <a 
                href="/contact"
                className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-teal-500/50 transform hover:-translate-y-1"
              >
                Request Neuromorphic Assessment
              </a>
              <a 
                href="/blog"
                className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Explore More Innovations
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
