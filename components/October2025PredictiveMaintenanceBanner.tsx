import React from "react";

export default function October2025PredictiveMaintenanceBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900/30 via-gray-900/30 to-zinc-900/30 backdrop-blur-sm border-b border-slate-500/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-slate-500/20 to-gray-500/20 border border-slate-500/30 mb-6 animate-pulse">
              <span className="text-slate-300 font-bold text-lg tracking-wider uppercase">
                🏭 BREAKING: OCTOBER 1, 2025 — PREDICTIVE MAINTENANCE REVOLUTION
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-slate-300 via-gray-300 to-zinc-300 bg-clip-text text-transparent">
              Predictive Maintenance AI: 94% Downtime Reduction Saves $2.3B
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Revolutionary AI-powered predictive maintenance achieves 94% unplanned downtime reduction, 87% maintenance
              cost savings, and $2.3B annual value creation for global manufacturing. Predict equipment failures weeks
              in advance with 99.2% accuracy using IoT sensor fusion and advanced machine learning.
            </p>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-br from-slate-500/20 to-slate-600/20 backdrop-blur-sm rounded-xl p-4 border border-slate-500/30 text-center">
                <div className="text-3xl font-extrabold text-slate-300 mb-1">94%</div>
                <div className="text-sm text-slate-400">Downtime Reduction</div>
              </div>
              <div className="bg-gradient-to-br from-gray-500/20 to-gray-600/20 backdrop-blur-sm rounded-xl p-4 border border-gray-500/30 text-center">
                <div className="text-3xl font-extrabold text-gray-300 mb-1">99.2%</div>
                <div className="text-sm text-gray-400">Prediction Accuracy</div>
              </div>
              <div className="bg-gradient-to-br from-zinc-500/20 to-zinc-600/20 backdrop-blur-sm rounded-xl p-4 border border-zinc-500/30 text-center">
                <div className="text-3xl font-extrabold text-zinc-300 mb-1">$2.3B</div>
                <div className="text-sm text-zinc-400">Annual Value</div>
              </div>
              <div className="bg-gradient-to-br from-stone-500/20 to-stone-600/20 backdrop-blur-sm rounded-xl p-4 border border-stone-500/30 text-center">
                <div className="text-3xl font-extrabold text-stone-300 mb-1">2-4 wk</div>
                <div className="text-sm text-stone-400">Advance Warning</div>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Revolutionary Manufacturing Intelligence</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📡</span>
                  <div>
                    <h4 className="text-lg font-bold text-slate-300">Advanced Sensor Intelligence</h4>
                    <p className="text-gray-400 text-sm">10,000+ sensors analyzing vibration, temperature, acoustic data</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🤖</span>
                  <div>
                    <h4 className="text-lg font-bold text-gray-300">ML Prediction Engine</h4>
                    <p className="text-gray-400 text-sm">Ensemble models forecast failures 2-4 weeks in advance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <h4 className="text-lg font-bold text-zinc-300">Anomaly Detection</h4>
                    <p className="text-gray-400 text-sm">Real-time identification of equipment degradation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📋</span>
                  <div>
                    <h4 className="text-lg font-bold text-stone-300">Intelligent Work Orders</h4>
                    <p className="text-gray-400 text-sm">Automated scheduling and parts procurement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fortune 100 Case Study */}
            <div className="bg-gradient-to-r from-slate-500/10 to-gray-500/10 rounded-xl p-6 mb-8 border border-slate-500/20">
              <h3 className="text-2xl font-bold text-white mb-3">
                🏢 Fortune 100 Manufacturing: $2.3B Value Creation
              </h3>
              <p className="text-gray-300 mb-4">
                Global automotive manufacturer with 47 plants achieves unprecedented operational excellence:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-300 mb-1">94%</div>
                  <div className="text-sm text-gray-400">Unplanned downtime eliminated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-300 mb-1">0.8 days</div>
                  <div className="text-sm text-gray-400">MTTR (down from 7.2 days)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-zinc-300 mb-1">43%</div>
                  <div className="text-sm text-gray-400">Equipment lifespan extension</div>
                </div>
              </div>
            </div>

            {/* Call-to-Actions */}
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/blog/ai-2025-october-predictive-maintenance-revolution"
                className="bg-gradient-to-r from-slate-600 to-gray-700 hover:from-slate-500 hover:to-gray-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-slate-500/50 transform hover:-translate-y-1"
              >
                Read Manufacturing Guide →
              </a>
              <a
                href="/contact"
                className="bg-gradient-to-r from-gray-600 to-zinc-700 hover:from-gray-500 hover:to-zinc-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-gray-500/50 transform hover:-translate-y-1"
              >
                Schedule Free Assessment →
              </a>
              <a
                href="/services/predictive-maintenance"
                className="border-2 border-slate-500 text-slate-300 hover:bg-slate-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
              >
                Explore Predictive Maintenance
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
