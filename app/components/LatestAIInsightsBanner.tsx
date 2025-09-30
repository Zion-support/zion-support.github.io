import React from 'react';
import Link from 'next/link';

export default function LatestAIInsightsBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                💡 Latest Insights
              </span>
              <span className="text-purple-200 text-sm">Expert Analysis</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Latest AI Insights: Expert Analysis & Market Trends
            </h2>
            <p className="text-xl text-purple-100 mb-6 leading-relaxed">
              Stay ahead with expert AI insights, market analysis, and industry trends. Get actionable intelligence to guide your AI strategy and implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/insights/ai-market-analysis-2025"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                View Insights
              </Link>
              <Link
                href="/newsletter"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
              >
                Subscribe for Updates
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">Insight Categories</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <span>Market Analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔮</span>
                <span>Trend Predictions</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💼</span>
                <span>Business Impact</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span>Technology Updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}