import React from 'react';
import Link from 'next/link';

export default function AIAnalyticsBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                📊 Analytics Focus
              </span>
              <span className="text-indigo-200 text-sm">Data Intelligence</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              AI Analytics Implementation: Transform Data into Insights
            </h2>
            <p className="text-xl text-indigo-100 mb-6 leading-relaxed">
              Transform data into actionable insights with predictive modeling and real-time dashboards. Achieve data-driven decision making with AI-powered analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-analytics-implementation-2025"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Implementation Guide
              </Link>
              <Link
                href="/services/ai-data-analytics"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-center"
              >
                Implement AI Analytics
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">Analytics Capabilities</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔮</span>
                <span>Predictive Analytics</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <span>Real-time Dashboards</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔗</span>
                <span>Data Integration</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <span>Actionable Insights</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}