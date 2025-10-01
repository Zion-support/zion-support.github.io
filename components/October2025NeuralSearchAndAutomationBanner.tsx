import React from "react";
import { Link } from "react-router-dom";

export default function October2025NeuralSearchAndAutomationBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-emerald-900 to-teal-900 py-8 px-6 border-y-4 border-purple-500/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-block bg-gradient-to-r from-purple-500 to-emerald-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-3">
            💎 DUAL BREAKTHROUGH: SEARCH + AUTOMATION REVOLUTION 💎
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-emerald-400 bg-clip-text text-transparent">
              $10.8B Combined Enterprise Value Creation
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900/60 border border-purple-500/40 rounded-xl p-6 hover:border-purple-400 transition-all">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🔍✨</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-purple-300 mb-3">
                  Neural Search Revolution
                </h3>
                <p className="text-slate-300 mb-4">
                  Next-generation semantic understanding with 98.7% intent accuracy and &lt;15ms response time
                </p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-purple-500/10 rounded p-2 text-center">
                    <div className="text-xl font-bold text-purple-300">$2.4B</div>
                    <div className="text-xs text-slate-400">Revenue Boost</div>
                  </div>
                  <div className="bg-pink-500/10 rounded p-2 text-center">
                    <div className="text-xl font-bold text-pink-300">94%</div>
                    <div className="text-xs text-slate-400">Satisfaction</div>
                  </div>
                  <div className="bg-purple-500/10 rounded p-2 text-center">
                    <div className="text-xl font-bold text-purple-300">847%</div>
                    <div className="text-xs text-slate-400">Conversion</div>
                  </div>
                  <div className="bg-pink-500/10 rounded p-2 text-center">
                    <div className="text-xl font-bold text-pink-300">127</div>
                    <div className="text-xs text-slate-400">Languages</div>
                  </div>
                </div>
                <Link
                  to="/blog/ai-2025-october-neural-search-revolution"
                  className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-5 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all text-sm"
                >
                  Explore Neural Search →
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-emerald-500/40 rounded-xl p-6 hover:border-emerald-400 transition-all">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🌐⚡</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-emerald-300 mb-3">
                  Intelligent Automation Mesh
                </h3>
                <p className="text-slate-300 mb-4">
                  Distributed AI-powered automation at global scale with 99.999% uptime and 96% process automation
                </p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-emerald-500/10 rounded p-2 text-center">
                    <div className="text-xl font-bold text-emerald-300">$8.4B</div>
                    <div className="text-xs text-slate-400">Annual Savings</div>
                  </div>
                  <div className="bg-teal-500/10 rounded p-2 text-center">
                    <div className="text-xl font-bold text-teal-300">96%</div>
                    <div className="text-xs text-slate-400">Automation</div>
                  </div>
                  <div className="bg-emerald-500/10 rounded p-2 text-center">
                    <div className="text-xl font-bold text-emerald-300">99.999%</div>
                    <div className="text-xs text-slate-400">Uptime</div>
                  </div>
                  <div className="bg-teal-500/10 rounded p-2 text-center">
                    <div className="text-xl font-bold text-teal-300">450+</div>
                    <div className="text-xs text-slate-400">Facilities</div>
                  </div>
                </div>
                <Link
                  to="/blog/ai-2025-october-intelligent-automation-mesh"
                  className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-5 py-2 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all text-sm"
                >
                  Discover Automation Mesh →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-slate-300 text-sm">
            🏆 Trusted by <strong className="text-emerald-400">4,247+ enterprises</strong> worldwide for mission-critical AI transformation
          </p>
        </div>
      </div>
    </div>
  );
}
