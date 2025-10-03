export default function October2025FreshAIInsightsBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-pink-900/40 border border-indigo-500/30 rounded-2xl p-6 mb-6">
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded-full border border-indigo-500/40">
              ⚡ NEW CONTENT
            </span>
            <span className="text-white/60 text-sm">October 2025</span>
          </div>
          <a 
            href="/blog" 
            className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-colors"
          >
            View All Posts →
          </a>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
          Fresh AI Insights from Industry Leaders
        </h3>

        <p className="text-white/70 mb-5 max-w-2xl">
          Explore proven strategies and real-world implementations from Fortune 500 companies achieving 
          unprecedented results with next-generation AI systems.
        </p>

        <div className="grid md:grid-cols-3 gap-3">
          <div className="bg-white/5 rounded-lg p-4 border border-indigo-400/20">
            <div className="text-2xl mb-2">🎯</div>
            <div className="text-sm font-semibold text-indigo-300 mb-1">Fleet Orchestration</div>
            <div className="text-xs text-white/60">100K+ agents, 94% automation</div>
          </div>

          <div className="bg-white/5 rounded-lg p-4 border border-purple-400/20">
            <div className="text-2xl mb-2">🔒</div>
            <div className="text-sm font-semibold text-purple-300 mb-1">Synthetic Data</div>
            <div className="text-xs text-white/60">99.8% accuracy, zero privacy risk</div>
          </div>

          <div className="bg-white/5 rounded-lg p-4 border border-pink-400/20">
            <div className="text-2xl mb-2">👁️</div>
            <div className="text-sm font-semibold text-pink-300 mb-1">Multimodal AI</div>
            <div className="text-xs text-white/60">96% accuracy, $200M+ ROI</div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-2xl"></div>
    </div>
  );
}
