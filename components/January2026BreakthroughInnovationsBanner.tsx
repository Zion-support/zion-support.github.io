import React from 'react';
import { Link } from 'react-router-dom';

export default function January2026BreakthroughInnovationsBanner() {
  return (
    <section className="py-8 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 border-t border-b border-blue-500/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900/90 via-blue-900/90 to-slate-900/90 backdrop-blur-lg border border-blue-500/30">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-400/50 mb-6">
                  <span className="text-blue-300 font-bold text-sm tracking-wider uppercase animate-pulse">
                    🚀 NEW: January 2026 AI Breakthrough
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                  Revolutionary AI Breakthrough Innovations
                </h2>
                
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto lg:mx-0">
                  Discover the latest AI breakthrough innovations achieving <span className="text-blue-400 font-bold">500,000x performance improvements</span>, 
                  <span className="text-purple-400 font-bold"> 99.999% autonomous operations</span>, and 
                  <span className="text-green-400 font-bold"> $50B+ ROI potential</span> in enterprise transformation.
                </p>
                
                {/* Key Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
                    <div className="text-2xl font-extrabold text-blue-400 mb-1">500,000x</div>
                    <div className="text-xs text-blue-300">Performance Boost</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
                    <div className="text-2xl font-extrabold text-purple-400 mb-1">99.999%</div>
                    <div className="text-xs text-purple-300">Autonomous Operations</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
                    <div className="text-2xl font-extrabold text-green-400 mb-1">$50B+</div>
                    <div className="text-xs text-green-300">ROI Potential</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/blog/ai-2026-january-breakthrough-innovations"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
                  >
                    Explore Breakthroughs →
                  </Link>
                  <Link to="/contact"
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
                  >
                    Get Implementation Guide
                  </Link>
                </div>
              </div>
              
              {/* Visual Elements */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-500/30 flex items-center justify-center backdrop-blur-lg">
                    <div className="text-8xl animate-bounce">🚀</div>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                    <span className="text-3xl">🔮</span>
                  </div>
                  <div className="absolute top-1/2 -left-8 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '2s' }}>
                    <span className="text-xl">🤖</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}