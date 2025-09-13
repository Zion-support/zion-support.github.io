import React from 'react';
import Link from 'next/link';

export default function AI20262030FuturePredictionsBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(147,51,234,0.3),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold mb-6 animate-bounce">
            🔮 FUTURE PREDICTIONS
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            AI 2026-2030 Ultimate Content Revolution
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the revolutionary AI predictions that will transform humanity. 
            From <span className="text-cyan-400 font-bold">quantum consciousness</span> to 
            <span className="text-purple-400 font-bold"> transcendent intelligence</span> - 
            the future is here.
          </p>
          
          {/* Timeline preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-800/30 to-blue-800/30 p-4 rounded-xl border border-cyan-500/20">
              <div className="text-2xl mb-2">⚛️</div>
              <h3 className="text-sm font-bold mb-1">2026: Quantum Consciousness</h3>
              <p className="text-xs text-gray-300">95% probability</p>
            </div>
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-4 rounded-xl border border-purple-500/20">
              <div className="text-2xl mb-2">🧠</div>
              <h3 className="text-sm font-bold mb-1">2027: Neural Synthesis</h3>
              <p className="text-xs text-gray-300">88% probability</p>
            </div>
            <div className="bg-gradient-to-br from-pink-800/30 to-red-800/30 p-4 rounded-xl border border-pink-500/20">
              <div className="text-2xl mb-2">🌌</div>
              <h3 className="text-sm font-bold mb-1">2028: Dimensional AI</h3>
              <p className="text-xs text-gray-300">75% probability</p>
            </div>
            <div className="bg-gradient-to-br from-red-800/30 to-orange-800/30 p-4 rounded-xl border border-red-500/20">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="text-sm font-bold mb-1">2029: Singularity</h3>
              <p className="text-xs text-gray-300">80% probability</p>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2026-2030-ultimate-content-revolution"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Predictions
            </Link>
            <Link 
              href="/resources/ai-2026-2030-implementation-roadmap"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 shadow-lg"
            >
              Download Roadmap
            </Link>
            <Link 
              href="/webinars/ai-2026-2030-future-predictions"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
            >
              Watch Predictions
            </Link>
          </div>
          
          {/* Additional content links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              🚀 AI 2025 Breakthrough
            </Link>
            <Link 
              href="/quantum-computing-breakthroughs-2025"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              ⚛️ Quantum Computing
            </Link>
            <Link 
              href="/case-studies"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              🏆 Success Stories
            </Link>
            <Link 
              href="/resources"
              className="text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              📚 Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}