import React from 'react';
import Link from 'next/link';

export default function AITrends2025Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                🔮 Trend Analysis
              </span>
              <span className="text-rose-200 text-sm">2025 Predictions</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              AI Trends 2025: Top 10 Predictions & Industry Insights
            </h2>
            <p className="text-xl text-rose-100 mb-6 leading-relaxed">
              Discover the top AI trends shaping 2025. From autonomous agents to edge computing, explore transformative technologies that will define the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-trends-2025-predictions"
                className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Predictions
              </Link>
              <Link
                href="/services/ai-trend-analysis"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition-colors text-center"
              >
                Get Trend Analysis
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">Top Trends</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🤖</span>
                <span>Autonomous AI Agents</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span>Edge Computing AI</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🧠</span>
                <span>Multimodal AI</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🛡️</span>
                <span>AI Governance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}