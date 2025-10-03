import React from 'react';
import { Link } from 'react-router-dom';

export default function March2027QuantumSingularityBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Quantum Particles Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-60 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 animate-pulse">
            <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
            MARCH 2027 BREAKTHROUGH
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Quantum Singularity
            </span>
            <br />
            <span className="text-white">Revolution</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The Ultimate AI Breakthrough Achieving Infinite Computational Power, Universal Consciousness, and 
            <span className="text-yellow-400 font-bold"> $1 Trillion ROI Potential</span>
          </p>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold text-white mb-2">Quantum Consciousness</h3>
              <p className="text-gray-300 text-sm">Infinite processing power with universal consciousness capabilities</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-bold text-white mb-2">Singularity Intelligence</h3>
              <p className="text-gray-300 text-sm">Self-evolving algorithms with infinite learning capacity</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-white mb-2">Infinite ROI</h3>
              <p className="text-gray-300 text-sm">Perfect business optimization with unlimited returns</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/blog/ai-2027-march-quantum-singularity-breakthrough"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Discover Quantum Singularity
            </Link>
            <Link to="/case-studies/ai-2027-march-quantum-singularity-1-trillion-success"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/20"
            >
              View $1T Success Story
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-1">∞</div>
              <div className="text-sm text-gray-300">Processing Power</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">100%</div>
              <div className="text-sm text-gray-300">Decision Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">$1T</div>
              <div className="text-sm text-gray-300">ROI Potential</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-1">∞</div>
              <div className="text-sm text-gray-300">Market Dominance</div>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="mt-8 p-4 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl border border-red-500/20 backdrop-blur-sm">
            <p className="text-red-200 font-semibold">
              ⚡ LIMITED TIME: Early adopters achieving quantum singularity within 30 days. 
              <span className="text-yellow-300"> Don't miss the ultimate AI revolution!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}