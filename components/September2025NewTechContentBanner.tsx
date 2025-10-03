export default function September2025NewTechContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 border-y border-blue-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6 animate-pulse">
            <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
              🚀 NEW: September 30, 2025 - Production AI Insights
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Master Production AI Systems
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Three essential guides for enterprise AI success: Agentic orchestration, LLM observability, 
            and vector database performance optimization—all from real-world production systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-6xl mb-6">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-4">Agentic Orchestration Patterns</h3>
            <p className="text-gray-300 mb-6">
              Enterprise-grade multi-agent systems with proven patterns achieving 94% task completion rates. 
              Learn hierarchical, P2P, and event-driven orchestration from Fortune 500 implementations.
            </p>
            <ul className="space-y-2 mb-6 text-gray-300 text-sm">
              <li>✓ 3 core orchestration patterns</li>
              <li>✓ Real-world financial services case</li>
              <li>✓ $127M fraud prevention results</li>
              <li>✓ Production-ready code examples</li>
            </ul>
            <a 
              href="/blog/ai-2025-sept-30-agentic-orchestration-patterns"
              className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Read Guide →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-6xl mb-6">📊</div>
            <h3 className="text-2xl font-bold text-white mb-4">Production LLM Observability</h3>
            <p className="text-gray-300 mb-6">
              Comprehensive monitoring framework for LLMs in production. Battle-tested patterns from 
              enterprises processing 2B+ daily requests with complete code implementations.
            </p>
            <ul className="space-y-2 mb-6 text-gray-300 text-sm">
              <li>✓ 4 pillars of LLM observability</li>
              <li>✓ Performance, quality, cost, security</li>
              <li>✓ 47% reduction in escalations</li>
              <li>✓ $2.3M annual savings achieved</li>
            </ul>
            <a 
              href="/blog/ai-2025-sept-30-production-llm-observability"
              className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
            >
              Read Framework →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-6xl mb-6">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-4">Vector Database Performance</h3>
            <p className="text-gray-300 mb-6">
              Complete optimization guide for achieving sub-100ms queries at billion-vector scale. 
              Proven techniques from Fortune 500 e-commerce implementation.
            </p>
            <ul className="space-y-2 mb-6 text-gray-300 text-sm">
              <li>✓ Sub-100ms at 500M vectors</li>
              <li>✓ Index tuning & embedding optimization</li>
              <li>✓ 12.8x latency improvement</li>
              <li>✓ 62% cost reduction</li>
            </ul>
            <a 
              href="/blog/ai-2025-sept-30-vector-database-performance-guide"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              Master Optimization →
            </a>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-wrap gap-4 justify-center mb-8">
            <span className="bg-blue-500/20 px-4 py-2 rounded-full text-blue-300 text-sm font-semibold">
              🎯 94% Task Completion
            </span>
            <span className="bg-indigo-500/20 px-4 py-2 rounded-full text-indigo-300 text-sm font-semibold">
              📊 2B+ Daily Requests
            </span>
            <span className="bg-purple-500/20 px-4 py-2 rounded-full text-purple-300 text-sm font-semibold">
              ⚡ Sub-100ms Queries
            </span>
            <span className="bg-pink-500/20 px-4 py-2 rounded-full text-pink-300 text-sm font-semibold">
              💰 $2.3M Annual Savings
            </span>
          </div>
          <a 
            href="/contact"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
          >
            Get Expert Consultation →
          </a>
        </div>
      </div>
    </section>
  );
}
