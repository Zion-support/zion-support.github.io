import React from 'react';
import Link from 'next/link';

export default function AI20262030FuturePredictionsBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-16 w-24 h-24 bg-cyan-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-24 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-24 left-1/3 w-16 h-16 bg-indigo-500/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/4 w-28 h-28 bg-pink-500/20 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Future predictions badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-bold mb-8 animate-pulse">
            🔮 FUTURE PREDICTIONS: AI 2026-2030 BREAKTHROUGH
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Discover the Revolutionary
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              AI Future Predictions
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore the groundbreaking AI breakthroughs that will reshape our world from 2026 to 2030. 
            From <span className="text-cyan-400 font-bold">quantum consciousness</span> to 
            <span className="text-purple-400 font-bold"> neural interface revolution</span>.
          </p>
          
          {/* Timeline preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 p-6 rounded-xl border border-cyan-500/50 backdrop-blur-sm">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold text-white mb-2">2026: Neural Fusion</h3>
              <p className="text-gray-300 text-sm">95% accuracy brain-computer interfaces</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 p-6 rounded-xl border border-purple-500/50 backdrop-blur-sm">
              <div className="text-3xl mb-3">🌌</div>
              <h3 className="text-lg font-bold text-white mb-2">2027: Consciousness AI</h3>
              <p className="text-gray-300 text-sm">99.7% consciousness accuracy</p>
            </div>
            
            <div className="bg-gradient-to-r from-green-600/30 to-emerald-600/30 p-6 rounded-xl border border-green-500/50 backdrop-blur-sm">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-bold text-white mb-2">2028: Space Revolution</h3>
              <p className="text-gray-300 text-sm">AI-powered Mars exploration</p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-600/30 to-red-600/30 p-6 rounded-xl border border-orange-500/50 backdrop-blur-sm">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-white mb-2">2029: Singularity</h3>
              <p className="text-gray-300 text-sm">Technological singularity approach</p>
            </div>
          </div>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/ai-2026-2030-future-predictions-breakthrough"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              🔮 Explore Predictions
            </Link>
            <Link
              href="/case-studies/ai-2026-quantum-breakthrough-success"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
            >
              🌌 Quantum Breakthroughs
            </Link>
            <Link
              href="/resources/ai-2026-2030-implementation-roadmap"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              📋 Implementation Roadmap
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
              <span>95% Prediction Accuracy</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
              <span>50+ Research Partners</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-pink-400 rounded-full mr-2 animate-pulse"></div>
              <span>Future-Ready Technology</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-10 text-6xl opacity-20 animate-float">🔮</div>
      <div className="absolute bottom-20 left-10 text-5xl opacity-20 animate-float delay-1000">🌌</div>
      <div className="absolute top-1/2 right-20 text-4xl opacity-20 animate-float delay-2000">⚛️</div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}