// import React from 'react';

export default function October2025NewTechContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-pink-900/40 backdrop-blur-sm border-y border-indigo-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30 border-2 border-indigo-400/50 mb-6 animate-pulse">
            <span className="text-indigo-300 font-extrabold text-xl tracking-wider uppercase">
              🚀 FRESH CONTENT — OCTOBER 2025! 🚀
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Production AI Systems That Scale
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-10">
            Master the art of deploying multimodal AI, RAG systems, and AI agents in production. 
            Learn from battle-tested patterns that power Fortune 500 enterprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Multimodal AI Article */}
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-indigo-400/40 hover:border-indigo-400/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/30">
            <div className="text-5xl mb-4">👁️</div>
            <h3 className="text-2xl font-bold text-white mb-3">Multimodal AI at Scale</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Deploy GPT-4V and Claude Vision in production with 99.9% uptime. Process images and text 
              at enterprise scale with sub-second latency.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full">99.9% Uptime</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">Sub-1s Latency</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">65% Cost Cut</span>
            </div>
            <a 
              href="/blog/ai-2025-oct-multimodal-ai-production-deployment"
              className="inline-block w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-indigo-500/50"
            >
              Read Full Guide →
            </a>
          </div>

          {/* AI Agent Observability Article */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-purple-400/40 hover:border-purple-400/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/30">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-3">AI Agent Observability</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Monitor, debug, and optimize agentic systems in production. Catch failures before users 
              do with comprehensive tracing and alerting.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">-40% MTTR</span>
              <span className="px-3 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full">+25% Quality</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">-30% Costs</span>
            </div>
            <a 
              href="/blog/ai-2025-oct-ai-agent-observability-best-practices"
              className="inline-block w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-purple-500/50"
            >
              Learn Best Practices →
            </a>
          </div>

          {/* RAG at Enterprise Scale Article */}
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-cyan-400/40 hover:border-cyan-400/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/30">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-white mb-3">RAG at Scale</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Build knowledge systems that actually work. Production patterns for vector databases, 
              hybrid search, and context optimization from Fortune 500 deployments.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">94% Accuracy</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">10M+ Docs</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">$15M ROI</span>
            </div>
            <a 
              href="/blog/ai-2025-oct-retrieval-augmented-generation-enterprise"
              className="inline-block w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-cyan-500/50"
            >
              Explore Architecture →
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 text-lg mb-6">
            Trusted by Fortune 500 companies to deploy production AI systems at scale
          </p>
          <a 
            href="/contact"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 text-lg shadow-xl hover:shadow-indigo-500/50 transform hover:scale-105"
          >
            Get Expert Consultation →
          </a>
        </div>
      </div>
    </section>
  );
}
