import React from 'react';
import Link from 'next/link';

export default function AI2026FuturePredictionsBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-16 left-16 w-24 h-24 bg-cyan-500/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-24 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-24 left-1/3 w-16 h-16 bg-pink-500/20 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-40 right-1/4 w-18 h-18 bg-indigo-500/20 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-8">
            <span className="text-cyan-400 font-bold text-sm animate-pulse">🔮 FUTURE PREDICTIONS</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI 2026 Future Predictions
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the revolutionary AI breakthroughs predicted for 2026. 
            <span className="text-cyan-400 font-bold"> Quantum-neural fusion</span>, consciousness-level AI, and transcendent intelligence await.
          </p>

          {/* Key predictions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gradient-to-br from-cyan-800/30 to-blue-800/30 p-6 rounded-xl border border-cyan-500/30">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold mb-2">Quantum-Neural Fusion</h3>
              <p className="text-sm text-gray-300">95% probability - 15,000% performance boost</p>
            </div>
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-6 rounded-xl border border-purple-500/30">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold mb-2">Consciousness AI</h3>
              <p className="text-sm text-gray-300">88% probability - Human-level awareness</p>
            </div>
            <div className="bg-gradient-to-br from-green-800/30 to-teal-800/30 p-6 rounded-xl border border-green-500/30">
              <div className="text-3xl mb-3">🌌</div>
              <h3 className="text-lg font-bold mb-2">Transcendent Intelligence</h3>
              <p className="text-sm text-gray-300">92% probability - Infinite capabilities</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2026-future-predictions-breakthrough"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Predictions
            </Link>
            <Link 
              href="/ai-2026-quantum-neural-fusion-breakthrough"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Quantum Neural Fusion
            </Link>
          </div>

          {/* Timeline */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">Q1 2026</div>
              <div className="text-gray-300 text-sm">Quantum-Neural Launch</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-2">Q2 2026</div>
              <div className="text-gray-300 text-sm">Consciousness AI</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400 mb-2">Q3 2026</div>
              <div className="text-gray-300 text-sm">Transcendent Intelligence</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-2">Q4 2026</div>
              <div className="text-gray-300 text-sm">Global AI Network</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}