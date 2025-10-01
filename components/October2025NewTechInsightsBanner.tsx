import React from 'react';
import Link from 'next/link';

export default function October2025NewTechInsightsBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-indigo-950 to-emerald-950 border-y border-purple-400/20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-emerald-500/20 rounded-full border border-purple-400/30 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            <span className="text-purple-300 font-semibold text-sm">🚀 JUST PUBLISHED - OCTOBER 2025 NEW INSIGHTS</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-emerald-400 bg-clip-text text-transparent">
            Latest Enterprise AI & Data Intelligence Breakthroughs
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Discover cutting-edge insights on cognitive automation, neural search, and data mesh architectures 
            that are transforming Fortune 500 operations in October 2025
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Article 1: Cognitive Automation */}
          <Link href="/blog/ai-2025-october-cognitive-automation-orchestration" className="group">
            <div className="h-full bg-gradient-to-br from-purple-900/50 to-purple-800/30 backdrop-blur-sm rounded-xl border border-purple-400/30 p-6 hover:border-purple-400/60 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-400/40 mb-3">
                  Cognitive Automation
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  Cognitive Automation Orchestration 2025
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Discover how enterprises are automating 92% of workflows with AI-powered cognitive systems, 
                  reducing costs by 78% and delivering $45M+ annual value.
                </p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-purple-300 font-semibold">22 min read</span>
                <span className="text-white/50 group-hover:text-purple-300 transition-colors">
                  Read More →
                </span>
              </div>
              <div className="mt-4 pt-4 border-t border-purple-400/20">
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-purple-500/10 text-purple-300 rounded">78% Cost Reduction</span>
                  <span className="text-xs px-2 py-1 bg-pink-500/10 text-pink-300 rounded">92% Automation</span>
                  <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-300 rounded">$45M+ Value</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Article 2: Neural Search */}
          <Link href="/blog/ai-2025-october-neural-search-revolution" className="group">
            <div className="h-full bg-gradient-to-br from-indigo-900/50 to-indigo-800/30 backdrop-blur-sm rounded-xl border border-indigo-400/30 p-6 hover:border-indigo-400/60 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-indigo-500/50">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full border border-indigo-400/40 mb-3">
                  Neural Search
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  Neural Search Revolution 2025
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Learn how neural search systems achieve 96% accuracy across 100M+ daily queries, delivering 
                  instant semantic insights across petabyte-scale data.
                </p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-indigo-300 font-semibold">20 min read</span>
                <span className="text-white/50 group-hover:text-indigo-300 transition-colors">
                  Read More →
                </span>
              </div>
              <div className="mt-4 pt-4 border-t border-indigo-400/20">
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-indigo-500/10 text-indigo-300 rounded">96% Accuracy</span>
                  <span className="text-xs px-2 py-1 bg-purple-500/10 text-purple-300 rounded">100M+ Queries</span>
                  <span className="text-xs px-2 py-1 bg-pink-500/10 text-pink-300 rounded">$32M+ Value</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Article 3: Data Mesh */}
          <Link href="/blog/ai-2025-october-intelligent-data-mesh-architecture" className="group">
            <div className="h-full bg-gradient-to-br from-emerald-900/50 to-emerald-800/30 backdrop-blur-sm rounded-xl border border-emerald-400/30 p-6 hover:border-emerald-400/60 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/50">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full border border-emerald-400/40 mb-3">
                  Data Architecture
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  Intelligent Data Mesh Architecture 2025
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Explore how data mesh architectures deliver 10x faster insights with 94% data quality, 
                  transforming enterprise data management for $67M+ annual value.
                </p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-emerald-300 font-semibold">24 min read</span>
                <span className="text-white/50 group-hover:text-emerald-300 transition-colors">
                  Read More →
                </span>
              </div>
              <div className="mt-4 pt-4 border-t border-emerald-400/20">
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-emerald-500/10 text-emerald-300 rounded">10x Faster</span>
                  <span className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-300 rounded">94% Quality</span>
                  <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-300 rounded">$67M+ Value</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-500 hover:to-emerald-500 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <span>Explore All October 2025 Insights</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
    </div>
  );
}
