import React from "react";
import { Link } from "react-router-dom";

export default function October2025NewContentMegaLaunchOct1Banner() {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 border-t-4 border-b-4 border-cyan-400 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 JUST PUBLISHED: OCTOBER 1, 2025 - 3 REVOLUTIONARY AI BREAKTHROUGHS! 🚀
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              The Ultimate AI Innovation Trilogy
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-2">
            💎 <strong className="text-cyan-400">$11.7B Combined Enterprise Value</strong> 💎
          </p>
          <p className="text-lg text-slate-400">
            Autonomous Code Intelligence • Neural Search Revolution • Intelligent Automation Mesh
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <Link
            to="/blog/ai-2025-october-autonomous-code-intelligence-platform"
            className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20 transition-all group"
          >
            <div className="text-cyan-400 text-3xl mb-3">🧠💻</div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2 group-hover:text-cyan-200">
              Autonomous Code Intelligence Platform
            </h3>
            <p className="text-slate-400 text-sm mb-3">
              Self-evolving code systems revolutionizing software development
            </p>
            <div className="space-y-1 text-sm text-slate-300">
              <div>✅ <strong>$847M</strong> annual savings</div>
              <div>✅ <strong>89%</strong> faster development</div>
              <div>✅ <strong>97%</strong> fewer bugs</div>
              <div>✅ <strong>2,400%</strong> ROI</div>
            </div>
          </Link>

          <Link
            to="/blog/ai-2025-october-neural-search-revolution"
            className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/20 transition-all group"
          >
            <div className="text-purple-400 text-3xl mb-3">🔍🧠</div>
            <h3 className="text-xl font-bold text-purple-300 mb-2 group-hover:text-purple-200">
              Neural Search Revolution
            </h3>
            <p className="text-slate-400 text-sm mb-3">
              Next-gen semantic understanding beyond traditional search
            </p>
            <div className="space-y-1 text-sm text-slate-300">
              <div>✅ <strong>$2.4B</strong> revenue increase</div>
              <div>✅ <strong>94%</strong> search satisfaction</div>
              <div>✅ <strong>847%</strong> conversion boost</div>
              <div>✅ <strong>&lt;15ms</strong> query speed</div>
            </div>
          </Link>

          <Link
            to="/blog/ai-2025-october-intelligent-automation-mesh"
            className="bg-slate-800/50 border border-emerald-500/30 rounded-lg p-6 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/20 transition-all group"
          >
            <div className="text-emerald-400 text-3xl mb-3">🌐⚡</div>
            <h3 className="text-xl font-bold text-emerald-300 mb-2 group-hover:text-emerald-200">
              Intelligent Automation Mesh
            </h3>
            <p className="text-slate-400 text-sm mb-3">
              Distributed enterprise intelligence at global scale
            </p>
            <div className="space-y-1 text-sm text-slate-300">
              <div>✅ <strong>$8.4B</strong> operational savings</div>
              <div>✅ <strong>96%</strong> automation rate</div>
              <div>✅ <strong>99.999%</strong> uptime</div>
              <div>✅ <strong>3,200%</strong> ROI</div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <p className="text-slate-300 mb-4">
            🏢 <strong className="text-cyan-400">7,947+ Global Enterprises</strong> already transforming their operations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/blog/ai-2025-october-autonomous-code-intelligence-platform"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Explore All 3 Breakthroughs →
            </Link>
            <button className="bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
