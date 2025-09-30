import React from 'react';
import Link from 'next/link';

export default function LatestContentShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              📚 Latest Content
            </span>
            <span className="text-gray-300 text-sm">January 2025</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Fresh AI Insights & Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with our latest articles, case studies, and implementation guides. Discover proven strategies and real-world success stories.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs font-semibold">
                New Article
              </span>
              <span className="text-gray-400 text-sm">15 min read</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              AI Trends 2025: Top 10 Predictions
            </h3>
            <p className="text-gray-300 mb-4">
              Discover the top AI trends shaping 2025. From autonomous agents to edge computing.
            </p>
            <Link
              href="/blog/ai-trends-2025-predictions"
              className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
            >
              Read Article →
            </Link>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs font-semibold">
                Success Story
              </span>
              <span className="text-gray-400 text-sm">FinTech</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              FinTech AI Risk Compliance
            </h3>
            <p className="text-gray-300 mb-4">
              See how a leading fintech achieved 70% risk reduction with automated governance.
            </p>
            <Link
              href="/case-studies/fintech-ai-risk-compliance-2025"
              className="text-green-400 font-semibold hover:text-green-300 transition-colors"
            >
              View Case Study →
            </Link>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs font-semibold">
                Featured Guide
              </span>
              <span className="text-gray-400 text-sm">20 min read</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              AI Governance Framework 2025
            </h3>
            <p className="text-gray-300 mb-4">
              Master AI governance with 70% risk reduction and comprehensive enterprise frameworks.
            </p>
            <Link
              href="/blog/ai-governance-framework-2025"
              className="text-purple-400 font-semibold hover:text-purple-300 transition-colors"
            >
              Read Guide →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            View All Content
          </Link>
        </div>
      </div>
    </section>
  );
}