import React from 'react';
import Link from 'next/link';

export default function AIContentShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              📚 AI Content Hub
            </span>
            <span className="text-cyan-200 text-sm">Comprehensive Library</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            AI Content Showcase: Your Complete Learning Hub
          </h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            Access our comprehensive library of AI content. From beginner guides to advanced implementation strategies, find everything you need to master AI.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs font-semibold">
                📖 Guides
              </span>
              <span className="text-cyan-200 text-sm">Step-by-step</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Implementation Guides
            </h3>
            <p className="text-cyan-100 mb-4">
              Comprehensive guides covering AI strategy, implementation, and optimization for every business size.
            </p>
            <Link
              href="/guides"
              className="text-blue-300 font-semibold hover:text-blue-200 transition-colors"
            >
              Browse Guides →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs font-semibold">
                📊 Case Studies
              </span>
              <span className="text-cyan-200 text-sm">Real Results</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Success Stories
            </h3>
            <p className="text-cyan-100 mb-4">
              Learn from real-world implementations and discover how companies achieved measurable results with AI.
            </p>
            <Link
              href="/case-studies"
              className="text-green-300 font-semibold hover:text-green-200 transition-colors"
            >
              View Case Studies →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs font-semibold">
                🔮 Insights
              </span>
              <span className="text-cyan-200 text-sm">Expert Analysis</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Market Insights
            </h3>
            <p className="text-cyan-100 mb-4">
              Stay ahead with expert analysis, market trends, and predictions from industry leaders and practitioners.
            </p>
            <Link
              href="/insights"
              className="text-purple-300 font-semibold hover:text-purple-200 transition-colors"
            >
              Read Insights →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/content-hub"
            className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Explore Content Hub
          </Link>
        </div>
      </div>
    </section>
  );
}