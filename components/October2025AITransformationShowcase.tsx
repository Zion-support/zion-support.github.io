import React from 'react';

export default function October2025AITransformationShowcase() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900/60 via-purple-900/40 to-rose-900/40 border border-purple-500/20 rounded-3xl p-10 mb-8">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-rose-500/20 border border-purple-500/40 rounded-full mb-4">
            <span className="text-2xl">🎉</span>
            <span className="text-purple-300 font-bold text-sm">FRESH OFF THE PRESS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Enterprise AI Transformation 2025
            </span>
          </h2>

          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Three groundbreaking articles revealing how industry leaders are achieving unprecedented 
            results with autonomous agents, privacy-preserving AI, and multimodal systems.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-purple-400/20">
            <div className="text-3xl font-extrabold text-purple-400 mb-1">100K+</div>
            <div className="text-white/60 text-sm">Agents Managed</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-pink-400/20">
            <div className="text-3xl font-extrabold text-pink-400 mb-1">99.8%</div>
            <div className="text-white/60 text-sm">AI Accuracy</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-rose-400/20">
            <div className="text-3xl font-extrabold text-rose-400 mb-1">$200M+</div>
            <div className="text-white/60 text-sm">Annual ROI</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-orange-400/20">
            <div className="text-3xl font-extrabold text-orange-400 mb-1">94%</div>
            <div className="text-white/60 text-sm">Automation Rate</div>
          </div>
        </div>

        {/* Article Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <a 
            href="/blog/ai-fleet-orchestration-enterprise-2025"
            className="group bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all transform hover:scale-105"
          >
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
              AI Fleet Orchestration
            </h3>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              How enterprises manage 100,000+ autonomous AI agents with unified control planes, 
              achieving 94% automation and $120M annual savings.
            </p>
            <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
              <span>Explore Implementation</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </a>

          <a 
            href="/blog/ai-synthetic-data-generation-privacy-2025"
            className="group bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 border border-indigo-500/30 rounded-2xl p-6 hover:border-indigo-500/60 hover:shadow-lg hover:shadow-indigo-500/20 transition-all transform hover:scale-105"
          >
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
              Synthetic Data & Privacy
            </h3>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              Train world-class AI models with 99.8% accuracy using 100% synthetic data—eliminating 
              privacy risks while ensuring full regulatory compliance.
            </p>
            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
              <span>Discover Techniques</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </a>

          <a 
            href="/blog/multimodal-ai-enterprise-applications-2025"
            className="group bg-gradient-to-br from-rose-900/30 to-rose-800/20 border border-rose-500/30 rounded-2xl p-6 hover:border-rose-500/60 hover:shadow-lg hover:shadow-rose-500/20 transition-all transform hover:scale-105"
          >
            <div className="text-4xl mb-3">👁️</div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rose-300 transition-colors">
              Multimodal AI Systems
            </h3>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              Deploy AI that sees, hears, and understands across text, images, video, and audio—achieving 
              96% accuracy and $200M+ ROI for enterprise applications.
            </p>
            <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
              <span>Learn More</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </a>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a 
            href="/contact" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-bold rounded-xl hover:from-purple-600 hover:via-pink-600 hover:to-rose-600 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30"
          >
            <span>Transform Your Enterprise with AI</span>
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
