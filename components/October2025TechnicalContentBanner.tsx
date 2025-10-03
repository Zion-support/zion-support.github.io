// import React from 'react';

export default function October2025TechnicalContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950 border-y border-blue-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 mb-6 animate-pulse">
            <span className="text-2xl">🚀</span>
            <span className="text-blue-300 font-bold text-lg tracking-wider uppercase">
              NEW OCTOBER 2025 TECHNICAL GUIDES
            </span>
            <span className="text-2xl">⚡</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Master Enterprise AI Systems
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Deep-dive technical guides on building production-ready AI systems — from multi-agent orchestration 
            to vector database optimization. Battle-tested patterns from teams processing billions of AI queries daily.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Article 1: AI Agent Orchestration */}
          <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
              AI Agent Orchestration
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Build multi-agent systems that coordinate autonomous decision-making across your enterprise. 
              Learn hierarchical patterns, peer-to-peer collaboration, and event-driven architectures.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                14 min read
              </span>
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
                AI Systems
              </span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                Production Code
              </span>
            </div>
            <a 
              href="/blog/ai-2025-oct-ai-agent-orchestration-enterprise"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/50"
            >
              Read Guide
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Article 2: Production RAG */}
          <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">📚</div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
              Production RAG Systems
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Build retrieval-augmented generation systems that deliver 94% accuracy with zero hallucinations. 
              Master hybrid retrieval, reranking, and response validation at scale.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                16 min read
              </span>
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
                AI Engineering
              </span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                Enterprise Scale
              </span>
            </div>
            <a 
              href="/blog/ai-2025-oct-retrieval-augmented-generation-production"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-indigo-500/50"
            >
              Read Guide
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Article 3: Vector DB Optimization */}
          <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
              Vector Database Optimization
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Achieve sub-50ms query latency at millions of QPS. Learn HNSW tuning, quantization, 
              tiered storage, and sharding strategies for production vector databases.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                13 min read
              </span>
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
                AI Infrastructure
              </span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                Performance
              </span>
            </div>
            <a 
              href="/blog/ai-2025-oct-vector-database-optimization-guide"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/50"
            >
              Read Guide
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Production AI Systems?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team has deployed enterprise AI for Fortune 500 companies. Get expert guidance 
              on architecture, optimization, and scaling.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
              >
                Contact Our Team
                <span>→</span>
              </a>
              <a 
                href="/blog"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                View All Articles
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
