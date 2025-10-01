import React from 'react';

export default function October2025CuttingEdgeAIContentBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900/40 via-rose-900/40 to-orange-900/40 border border-purple-500/30 rounded-3xl p-8 mb-8">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,255,0.1),rgba(120,0,255,0))]"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-4 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-full animate-pulse">
            🚀 JUST PUBLISHED
          </span>
          <span className="text-purple-300 text-sm font-semibold">October 1, 2025</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-purple-400 via-rose-400 to-orange-400 bg-clip-text text-transparent">
            Latest AI Breakthroughs for Enterprise
          </span>
        </h2>

        <p className="text-white/80 text-lg md:text-xl mb-6 max-w-3xl leading-relaxed">
          Discover how leading Fortune 500 companies are deploying cutting-edge AI systems—from 
          orchestrating 100K+ autonomous agents to multimodal AI achieving 96% accuracy. Three 
          groundbreaking articles packed with real-world implementation strategies.
        </p>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <a 
            href="/blog/ai-fleet-orchestration-enterprise-2025" 
            className="bg-white/5 backdrop-blur-sm border border-purple-400/30 rounded-xl p-5 hover:bg-white/10 hover:border-purple-400/50 transition-all group"
          >
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="text-lg font-bold text-purple-300 mb-2 group-hover:text-purple-200">
              AI Fleet Orchestration
            </h3>
            <p className="text-white/60 text-sm mb-3">
              Manage 100K+ autonomous agents with unified control planes
            </p>
            <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold">
              <span>Read Now</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>

          <a 
            href="/blog/ai-synthetic-data-generation-privacy-2025" 
            className="bg-white/5 backdrop-blur-sm border border-rose-400/30 rounded-xl p-5 hover:bg-white/10 hover:border-rose-400/50 transition-all group"
          >
            <div className="text-3xl mb-2">🔒</div>
            <h3 className="text-lg font-bold text-rose-300 mb-2 group-hover:text-rose-200">
              Synthetic Data & Privacy
            </h3>
            <p className="text-white/60 text-sm mb-3">
              Train AI with 99.8% accuracy while guaranteeing complete privacy
            </p>
            <div className="flex items-center gap-2 text-rose-400 text-sm font-semibold">
              <span>Read Now</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>

          <a 
            href="/blog/multimodal-ai-enterprise-applications-2025" 
            className="bg-white/5 backdrop-blur-sm border border-orange-400/30 rounded-xl p-5 hover:bg-white/10 hover:border-orange-400/50 transition-all group"
          >
            <div className="text-3xl mb-2">👁️</div>
            <h3 className="text-lg font-bold text-orange-300 mb-2 group-hover:text-orange-200">
              Multimodal AI Systems
            </h3>
            <p className="text-white/60 text-sm mb-3">
              Process vision, language & audio simultaneously for $200M+ ROI
            </p>
            <div className="flex items-center gap-2 text-orange-400 text-sm font-semibold">
              <span>Read Now</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>
        </div>

        {/* Key Metrics Bar */}
        <div className="flex flex-wrap gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-2xl">✓</span>
            <span className="text-white/70">Real Fortune 500 Case Studies</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-2xl">✓</span>
            <span className="text-white/70">Implementation Roadmaps</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-2xl">✓</span>
            <span className="text-white/70">$200M+ Combined ROI</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl"></div>
    </div>
  );
}
