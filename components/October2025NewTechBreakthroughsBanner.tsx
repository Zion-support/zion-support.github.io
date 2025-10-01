import React from 'react';

export default function October2025NewTechBreakthroughsBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900/40 via-emerald-900/40 to-red-900/40 border border-purple-500/30 rounded-3xl p-8 mb-8">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,255,0.15),rgba(120,0,255,0))]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.1),rgba(16,185,129,0))]"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-4 py-1.5 bg-gradient-to-r from-purple-500 via-emerald-500 to-red-500 text-white text-sm font-bold rounded-full animate-pulse">
            🚀 3 NEW BREAKTHROUGH ARTICLES
          </span>
          <span className="text-purple-300 text-sm font-semibold">Published October 1, 2025</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-purple-400 via-emerald-400 to-red-400 bg-clip-text text-transparent">
            Enterprise AI Breakthroughs: Quantum, Security & Privacy
          </span>
        </h2>

        <p className="text-white/80 text-lg md:text-xl mb-6 max-w-3xl leading-relaxed">
          Explore three cutting-edge technologies transforming enterprise AI: quantum computing integration 
          unlocking $500M+ value, autonomous SOCs stopping 99.7% of threats, and federated learning enabling 
          privacy-preserving AI at scale. Real Fortune 500 case studies with implementation roadmaps.
        </p>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <a 
            href="/blog/ai-quantum-computing-integration-2025" 
            className="bg-white/5 backdrop-blur-sm border border-purple-400/30 rounded-xl p-5 hover:bg-white/10 hover:border-purple-400/50 transition-all group"
          >
            <div className="text-3xl mb-2">⚛️</div>
            <h3 className="text-lg font-bold text-purple-300 mb-2 group-hover:text-purple-200">
              Quantum AI Integration
            </h3>
            <p className="text-white/60 text-sm mb-3">
              1000x optimization speedups unlocking $500M+ value in drug discovery and finance
            </p>
            <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold">
              <span>Read Now</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>

          <a 
            href="/blog/ai-autonomous-security-operations-2025" 
            className="bg-white/5 backdrop-blur-sm border border-red-400/30 rounded-xl p-5 hover:bg-white/10 hover:border-red-400/50 transition-all group"
          >
            <div className="text-3xl mb-2">🛡️</div>
            <h3 className="text-lg font-bold text-red-300 mb-2 group-hover:text-red-200">
              Autonomous Security Operations
            </h3>
            <p className="text-white/60 text-sm mb-3">
              AI-powered SOCs detecting threats in 3 seconds with 99.7% prevention rate
            </p>
            <div className="flex items-center gap-2 text-red-400 text-sm font-semibold">
              <span>Read Now</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>

          <a 
            href="/blog/ai-federated-learning-enterprise-privacy-2025" 
            className="bg-white/5 backdrop-blur-sm border border-emerald-400/30 rounded-xl p-5 hover:bg-white/10 hover:border-emerald-400/50 transition-all group"
          >
            <div className="text-3xl mb-2">🔒</div>
            <h3 className="text-lg font-bold text-emerald-300 mb-2 group-hover:text-emerald-200">
              Federated Learning & Privacy
            </h3>
            <p className="text-white/60 text-sm mb-3">
              Train AI on distributed data with 98% accuracy while ensuring 100% privacy compliance
            </p>
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
              <span>Read Now</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>
        </div>

        {/* Key Metrics Bar */}
        <div className="flex flex-wrap gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-2xl">✓</span>
            <span className="text-white/70">Fortune 500 Case Studies</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-2xl">✓</span>
            <span className="text-white/70">32-Week Implementation Roadmaps</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-2xl">✓</span>
            <span className="text-white/70">$500M+ Combined Enterprise Value</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-2xl">✓</span>
            <span className="text-white/70">Production-Ready Technology Stacks</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
}
