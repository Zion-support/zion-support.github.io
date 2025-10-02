import React from 'react';
import { Link } from 'react-router-dom';

const October2025InfrastructureIntelligenceBanner = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-purple-900/30 via-emerald-900/30 to-indigo-900/30 border-y border-purple-500/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-emerald-500/20 rounded-full border border-purple-400/40 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-300 font-semibold text-sm">🔥 JUST PUBLISHED - OCTOBER 1, 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Revolutionary Infrastructure & Observability Breakthroughs
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover how Fortune 500 companies are achieving 99.999% uptime, 94% cost reduction, and 
            96% faster incident detection with autonomous infrastructure and intelligent observability.
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Card 1: Autonomous Infrastructure */}
          <div className="group relative bg-gradient-to-br from-purple-900/40 to-indigo-900/40 rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="absolute top-4 right-4 px-3 py-1 bg-purple-500/30 text-purple-300 text-xs font-bold rounded-full border border-purple-400/40">
              NEW
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-500/20 rounded-lg border border-purple-400/30">
                <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <span className="text-purple-300 font-semibold text-sm">Autonomous Infrastructure</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
              Self-Healing Cloud Systems
            </h3>
            
            <p className="text-white/70 mb-6 leading-relaxed">
              Revolutionary autonomous orchestration achieving 99.999% uptime with zero-downtime deployments, 
              94% cost reduction, and predictive failure detection hours before incidents occur.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-purple-500/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">99.999%</div>
                <div className="text-xs text-white/60">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">94%</div>
                <div className="text-xs text-white/60">Cost Cut</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">Zero</div>
                <div className="text-xs text-white/60">Downtime</div>
              </div>
            </div>
            
            <Link 
              to="/blog/ai-2025-october-autonomous-infrastructure-orchestration" 
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group/link transition-colors"
            >
              Read Full Analysis
              <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Card 2: Intelligent Observability */}
          <div className="group relative bg-gradient-to-br from-emerald-900/40 to-teal-900/40 rounded-2xl p-8 border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20">
            <div className="absolute top-4 right-4 px-3 py-1 bg-emerald-500/30 text-emerald-300 text-xs font-bold rounded-full border border-emerald-400/40">
              NEW
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-emerald-500/20 rounded-lg border border-emerald-400/30">
                <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-emerald-300 font-semibold text-sm">Intelligent Observability</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-emerald-300 transition-colors">
              AI-Powered System Intelligence
            </h3>
            
            <p className="text-white/70 mb-6 leading-relaxed">
              Transform monitoring with AI-powered insights detecting incidents 96% faster, reducing alert 
              fatigue by 89%, and predicting issues with natural language querying capabilities.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-emerald-500/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">96%</div>
                <div className="text-xs text-white/60">Faster Detection</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">89%</div>
                <div className="text-xs text-white/60">Less Noise</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">&lt;30s</div>
                <div className="text-xs text-white/60">Root Cause</div>
              </div>
            </div>
            
            <Link 
              to="/blog/ai-2025-october-intelligent-observability-platform" 
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold group/link transition-colors"
            >
              Explore Platform
              <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="bg-gradient-to-r from-purple-900/20 via-emerald-900/20 to-cyan-900/20 rounded-xl p-6 border border-white/10 mb-8">
          <h3 className="text-lg font-bold text-white mb-4 text-center">
            🚀 Transform Your Enterprise Operations Today
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent mb-1">
                99.999%
              </div>
              <div className="text-sm text-white/70">System Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                94%
              </div>
              <div className="text-sm text-white/70">Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1">
                96%
              </div>
              <div className="text-sm text-white/70">Faster Detection</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                Zero
              </div>
              <div className="text-sm text-white/70">Downtime Deploys</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-white/80 mb-4">
            Join Fortune 500 companies transforming their infrastructure and observability
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-400 hover:to-emerald-400 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/50"
            >
              Schedule Consultation
            </Link>
            <Link 
              to="/resources" 
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/30 transition-all duration-300"
            >
              Download Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default October2025InfrastructureIntelligenceBanner;
