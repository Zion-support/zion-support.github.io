import React from "react";
import { Link } from "react-router-dom";

export default function October2025AutonomousCodeIntelligenceBanner() {
  return (
    <div className="bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 border-y-2 border-cyan-400/50 py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <div className="inline-block bg-cyan-500 text-white px-4 py-1 rounded-full text-xs font-bold mb-3">
            🔥 BREAKTHROUGH: AUTONOMOUS CODE INTELLIGENCE
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-2">
            Self-Evolving Code Systems: $847M Annual Savings
          </h3>
          <p className="text-slate-300 text-sm md:text-base mb-3">
            89% faster development • 97% fewer bugs • 2,400% ROI • 12,500+ developers enabled
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold">
              Self-Healing Code
            </span>
            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
              Predictive Architecture
            </span>
            <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-xs font-semibold">
              99.8% Quality Score
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            to="/blog/ai-2025-october-autonomous-code-intelligence-platform"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all whitespace-nowrap"
          >
            Read Full Guide →
          </Link>
          <button className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-slate-600 transition-all text-sm">
            Enterprise Demo
          </button>
        </div>
      </div>
    </div>
  );
}
