import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025NewAIBreakthroughsBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 py-24">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-emerald-500/10 via-blue-500/10 to-violet-500/10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Top Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-2 border-cyan-400/50 backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-300 font-bold text-lg tracking-wider uppercase">
              🚀 Just Published • October 2025 Breakthroughs
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-6xl md:text-8xl font-black text-center mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
          Revolutionary AI Innovations
        </h2>
        
        <p className="text-2xl md:text-3xl text-center text-gray-300 mb-16 max-w-5xl mx-auto font-light">
          Discover the latest breakthroughs in AI orchestration, neural reasoning, and enterprise platforms 
          that are transforming how organizations deploy and scale intelligence
        </p>

        {/* Content Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Card 1 */}
          <Link 
            to="/blog/ai-2025-october-agentic-orchestration-platform"
            className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-bold mb-4">
                🎯 Multi-Agent Systems
              </span>
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                Agentic Orchestration Platform
              </h3>
              <p className="text-gray-400 text-lg mb-6">
                Coordinate 10,000+ AI agents with 99.99% reliability. Transform enterprise operations 
                with intelligent orchestration delivering $220M in value.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="text-cyan-400 font-bold">10,000+ Agents</span>
              <span className="text-blue-400 font-bold">3ms Latency</span>
              <span className="text-indigo-400 font-bold">$220M Value</span>
            </div>
          </Link>

          {/* Card 2 */}
          <Link 
            to="/blog/ai-2025-october-neural-reasoning-engines"
            className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-bold mb-4">
                🧠 Neural AI
              </span>
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                Neural Reasoning Engines
              </h3>
              <p className="text-gray-400 text-lg mb-6">
                Beyond traditional AI with hybrid neural-symbolic systems. 98.5% reasoning accuracy 
                and 1000x faster planning for complex problem-solving.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="text-purple-400 font-bold">98.5% Accuracy</span>
              <span className="text-pink-400 font-bold">1000x Speed</span>
              <span className="text-fuchsia-400 font-bold">$340M Value</span>
            </div>
          </Link>

          {/* Card 3 */}
          <Link 
            to="/blog/ai-2025-october-enterprise-ai-fabric"
            className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-bold mb-4">
                🏗️ Enterprise Platform
              </span>
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                Enterprise AI Fabric
              </h3>
              <p className="text-gray-400 text-lg mb-6">
                Unified intelligence platform with 100+ models, 99.999% uptime, processing 10PB+ data. 
                Creating $500M in enterprise value.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="text-emerald-400 font-bold">100+ Models</span>
              <span className="text-teal-400 font-bold">99.999% Uptime</span>
              <span className="text-blue-400 font-bold">$500M Value</span>
            </div>
          </Link>
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 mb-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black text-cyan-400 mb-2">$1.06B</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Combined Value</div>
            </div>
            <div>
              <div className="text-5xl font-black text-purple-400 mb-2">98.5%</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Average Accuracy</div>
            </div>
            <div>
              
              <div className="text-gray-400 text-sm uppercase tracking-wider">Performance Gain</div>
            </div>
            <div>
              <div className="text-5xl font-black text-emerald-400 mb-2">24/7</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Autonomous Ops</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-12 py-5 rounded-full text-xl font-bold hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-2xl hover:shadow-purple-500/50"
          >
            <span>Explore All Breakthroughs</span>
            <span className="text-2xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
