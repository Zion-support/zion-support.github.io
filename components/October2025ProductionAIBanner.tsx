import React from 'react';

export default function October2025ProductionAIBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-cyan-900/30 via-blue-900/30 to-indigo-900/30 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 mb-4">
              <span className="text-cyan-300 font-semibold text-sm tracking-wide uppercase">
                ✨ October 2025 — New Technical Content
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Production AI Engineering Deep Dives
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Master the patterns and practices powering billion-dollar AI products. Three comprehensive 
              guides covering multi-agent systems, RAG architecture, and vector database optimization—with 
              production code examples and real-world case studies.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                <span className="text-2xl">🤖</span>
                <span className="text-white font-medium">Agent Orchestration</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                <span className="text-2xl">📚</span>
                <span className="text-white font-medium">Production RAG</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                <span className="text-2xl">⚡</span>
                <span className="text-white font-medium">Vector Optimization</span>
              </div>
            </div>
          </div>
          
          {/* Right CTA */}
          <div className="flex-shrink-0">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/30 text-center">
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                43+ Minutes of Expert Content
              </h3>
              <p className="text-gray-300 mb-6">
                Production-ready code, architecture patterns, and battle-tested strategies
              </p>
              <a 
                href="/blog"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                Read the Guides
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
