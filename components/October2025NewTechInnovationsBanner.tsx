import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025NewTechInnovationsBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 py-20 border-y border-purple-500/20">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-orange-500/10 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/40 mb-6 backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            <span className="text-purple-300 font-bold text-sm tracking-wider uppercase">
              🚀 JUST PUBLISHED: October 2025 • 3 Revolutionary AI Breakthroughs
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
            Latest Enterprise AI Innovations
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover the cutting-edge AI technologies delivering $831M+ combined value: 
            Adaptive orchestration, sovereign privacy-first systems, and 98% model compression.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Adaptive Enterprise Orchestration */}
          <div className="group bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:transform hover:scale-105">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 mb-4">
                <span className="text-cyan-400 text-sm font-bold">🎯 ORCHESTRATION</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                Adaptive Enterprise Orchestration
              </h3>
              <p className="text-gray-300 mb-6">
                AI-powered business process automation delivering 94% efficiency gains 
                and $127M annual cost reduction with real-time adaptive workflows.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-cyan-500/10 rounded-lg p-3">
                <div className="text-2xl font-bold text-cyan-400">94%</div>
                <div className="text-cyan-300 text-xs">Efficiency Gain</div>
              </div>
              <div className="bg-blue-500/10 rounded-lg p-3">
                <div className="text-2xl font-bold text-blue-400">$127M</div>
                <div className="text-blue-300 text-xs">Annual Savings</div>
              </div>
            </div>
            
            <Link 
              to="/blog/ai-october-2025-adaptive-enterprise-orchestration" 
              className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group"
            >
              Read Full Article
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Card 2: Sovereign AI Privacy */}
          <div className="group bg-gradient-to-br from-emerald-900/30 to-teal-900/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 hover:transform hover:scale-105">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 mb-4">
                <span className="text-emerald-400 text-sm font-bold">🔐 PRIVACY-FIRST</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                Sovereign AI Privacy Revolution
              </h3>
              <p className="text-gray-300 mb-6">
                Deploy enterprise AI with 100% data sovereignty, 99.99% privacy protection, 
                and $283M risk mitigation while ensuring full regulatory compliance.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-emerald-500/10 rounded-lg p-3">
                <div className="text-2xl font-bold text-emerald-400">100%</div>
                <div className="text-emerald-300 text-xs">Data Sovereignty</div>
              </div>
              <div className="bg-teal-500/10 rounded-lg p-3">
                <div className="text-2xl font-bold text-teal-400">$283M</div>
                <div className="text-teal-300 text-xs">Risk Mitigation</div>
              </div>
            </div>
            
            <Link 
              to="/blog/ai-october-2025-sovereign-ai-privacy-revolution" 
              className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors group"
            >
              Read Full Article
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Card 3: Neural Network Compression */}
          <div className="group bg-gradient-to-br from-orange-900/30 to-amber-900/30 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 hover:transform hover:scale-105">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 mb-4">
                <span className="text-orange-400 text-sm font-bold">⚡ OPTIMIZATION</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                Neural Network Compression
              </h3>
              <p className="text-gray-300 mb-6">
                Achieve 98% smaller models, 47x faster inference, and $421M infrastructure 
                savings with zero accuracy loss for enterprise-scale deployment.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-orange-500/10 rounded-lg p-3">
                <div className="text-2xl font-bold text-orange-400">98%</div>
                <div className="text-orange-300 text-xs">Size Reduction</div>
              </div>
              <div className="bg-amber-500/10 rounded-lg p-3">
                <div className="text-2xl font-bold text-amber-400">$421M</div>
                <div className="text-amber-300 text-xs">Annual Savings</div>
              </div>
            </div>
            
            <Link 
              to="/blog/ai-october-2025-neural-network-compression-efficiency" 
              className="inline-flex items-center gap-2 text-orange-400 font-semibold hover:text-orange-300 transition-colors group"
            >
              Read Full Article
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Combined Value Proposition */}
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 text-center">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div>
              <div className="text-4xl font-extrabold text-purple-400 mb-2">$831M+</div>
              <div className="text-purple-300">Combined Annual Value</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-pink-400 mb-2">94%</div>
              <div className="text-pink-300">Average Efficiency Gain</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-fuchsia-400 mb-2">99.9%+</div>
              <div className="text-fuchsia-300">Accuracy & Reliability</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-rose-400 mb-2">3 Weeks</div>
              <div className="text-rose-300">Deployment Timeline</div>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule Expert Consultation
            </Link>
            <Link 
              to="/blog" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-lg text-lg border border-white/30 transition-all duration-300"
            >
              Explore All Insights
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
