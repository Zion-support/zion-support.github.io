import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025NewCuttingEdgeAIContentBanner() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-950 via-violet-950/30 to-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Announcement Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border-2 border-violet-400/50 backdrop-blur-sm animate-pulse">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
            </span>
            <span className="text-violet-300 font-bold text-lg tracking-wider uppercase">
              🚀 JUST PUBLISHED: October 1, 2025 - Revolutionary AI Breakthroughs
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent leading-tight">
            3 Cutting-Edge AI Innovations
          </h2>
          <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the latest enterprise AI breakthroughs delivering billions in value: 
            Cognitive Mesh Intelligence, Hyper-Converged Infrastructure, and Neural Data Fabric.
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Cognitive Mesh */}
          <Link to="/blog/ai-2025-october-cognitive-mesh-intelligence-platform" 
                className="group bg-gradient-to-br from-violet-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-8 border border-violet-500/30 hover:border-violet-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20">
            <div className="text-5xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-violet-300 group-hover:text-violet-200">
              Cognitive Mesh Intelligence Platform
            </h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Distributed AI reasoning at scale with 2,500+ connected agents, 99.7% decision accuracy, 
              and $847M in value creation.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-violet-500/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-violet-400">$847M</div>
                <div className="text-xs text-violet-300">Value Created</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-purple-400">99.7%</div>
                <div className="text-xs text-purple-300">Accuracy</div>
              </div>
            </div>
            <div className="text-violet-400 group-hover:text-violet-300 font-semibold flex items-center gap-2">
              Read Full Analysis 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

          {/* Hyper-Converged Infrastructure */}
          <Link to="/blog/ai-2025-october-hyper-converged-ai-infrastructure" 
                className="group bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-300 group-hover:text-cyan-200">
              Hyper-Converged AI Infrastructure
            </h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Next-gen ML compute platform delivering 10x performance, 67% cost reduction, 
              and sub-millisecond inference across $1.2B deployments.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-cyan-500/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-cyan-400">$1.2B</div>
                <div className="text-xs text-cyan-300">Production Value</div>
              </div>
              <div className="bg-blue-500/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-blue-400">10x</div>
                <div className="text-xs text-blue-300">Performance</div>
              </div>
            </div>
            <div className="text-cyan-400 group-hover:text-cyan-300 font-semibold flex items-center gap-2">
              Read Full Analysis 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

          {/* Neural Data Fabric */}
          <Link to="/blog/ai-2025-october-neural-data-fabric-revolution" 
                className="group bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
            <div className="text-5xl mb-4">🔮</div>
            <h3 className="text-2xl font-bold mb-4 text-emerald-300 group-hover:text-emerald-200">
              Neural Data Fabric Revolution
            </h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              AI-powered intelligent data platform with 98% automation, 99.6% data quality, 
              and $690M in enterprise value.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-emerald-500/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-emerald-400">$690M</div>
                <div className="text-xs text-emerald-300">Value Delivered</div>
              </div>
              <div className="bg-teal-500/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-teal-400">98%</div>
                <div className="text-xs text-teal-300">Automation</div>
              </div>
            </div>
            <div className="text-emerald-400 group-hover:text-emerald-300 font-semibold flex items-center gap-2">
              Read Full Analysis 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        </div>

        {/* Total Impact Stats */}
        <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-10 border border-violet-500/30 mb-8">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            Combined Enterprise Impact
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl font-extrabold text-violet-400 mb-2">$2.7B+</div>
              <div className="text-gray-300">Total Value Created</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-purple-400 mb-2">98%</div>
              <div className="text-gray-300">Avg Automation Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-fuchsia-400 mb-2">99.7%</div>
              <div className="text-gray-300">Accuracy Across Systems</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-pink-400 mb-2">1,600%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-xl text-gray-300 mb-6">
            Transform your enterprise with proven AI solutions delivering billions in measurable value.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/blog" className="px-10 py-5 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl font-bold text-white text-lg hover:from-violet-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-violet-500/50">
              Explore All Innovations
            </Link>
            <Link to="/contact" className="px-10 py-5 bg-slate-800/80 backdrop-blur-sm rounded-xl font-bold text-violet-400 text-lg border-2 border-violet-500/30 hover:bg-slate-700 hover:border-violet-400/60 transition-all">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
