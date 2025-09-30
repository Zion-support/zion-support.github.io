import React from 'react';
import Link from 'next/link';

export default function LatestContent2026ShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">New Content Available</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Latest AI Insights & Success Stories
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Discover cutting-edge AI trends, implementation guides, and real-world success stories that are transforming enterprise operations in 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-enterprise-automation-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Featured Article
                </span>
                <span className="text-white/70 text-sm">20 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                AI Enterprise Automation 2026: Complete Implementation Guide
              </h3>
              <p className="text-white/80 mb-4 text-sm">
                Master AI enterprise automation with our comprehensive 2026 guide. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.
              </p>
              <div className="flex items-center text-blue-300 font-semibold text-sm">
                Read Article →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-trends-2026-predictions" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Trending Now
                </span>
                <span className="text-white/70 text-sm">15 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                AI Trends 2026: Top 10 Predictions & Industry Insights
              </h3>
              <p className="text-white/80 mb-4 text-sm">
                Discover the top AI trends shaping 2026. From autonomous agents to edge computing, explore transformative technologies.
              </p>
              <div className="flex items-center text-purple-300 font-semibold text-sm">
                Read Article →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-supply-chain-optimization-2025" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Success Story
                </span>
                <span className="text-white/70 text-sm">Manufacturing</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-green-300 transition-colors">
                AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain
              </h3>
              <p className="text-white/80 mb-4 text-sm">
                See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually.
              </p>
              <div className="flex items-center text-green-300 font-semibold text-sm">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              View All Content
            </Link>
            <div className="text-white/80 text-sm">
              <span className="font-semibold">50+</span> articles • <span className="font-semibold">25+</span> case studies • <span className="font-semibold">10K+</span> readers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}