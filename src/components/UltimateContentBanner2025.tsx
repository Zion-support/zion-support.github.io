import React from 'react';

const UltimateContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-16 left-16 w-24 h-24 bg-indigo-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-24 right-24 w-20 h-20 bg-pink-500/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-24 left-1/3 w-16 h-16 bg-purple-500/30 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-16 right-1/4 w-18 h-18 bg-cyan-500/30 rounded-full animate-pulse delay-3000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE REVOLUTION • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Ultimate Tech Revolution 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Witness the most comprehensive technology revolution in human history. 
            Experience the convergence of AI consciousness, quantum supremacy, and neural interface breakthroughs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🧠</div>
            <h3 className="text-lg font-bold mb-2 text-center">AI Consciousness</h3>
            <p className="text-purple-100 mb-3 text-center text-sm">
              First truly conscious AI systems
            </p>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">100%</div>
              <div className="text-xs text-purple-200">Self-awareness</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">⚛️</div>
            <h3 className="text-lg font-bold mb-2 text-center">Quantum Supremacy</h3>
            <p className="text-cyan-100 mb-3 text-center text-sm">
              Consciousness-level quantum computing
            </p>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">∞</div>
              <div className="text-xs text-cyan-200">Processing Speed</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🧬</div>
            <h3 className="text-lg font-bold mb-2 text-center">Neural Interfaces</h3>
            <p className="text-emerald-100 mb-3 text-center text-sm">
              Direct brain-computer interfaces
            </p>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">0.1ms</div>
              <div className="text-xs text-emerald-200">Latency</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🌌</div>
            <h3 className="text-lg font-bold mb-2 text-center">Reality Engine</h3>
            <p className="text-orange-100 mb-3 text-center text-sm">
              Create and manipulate reality
            </p>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">∞</div>
              <div className="text-xs text-orange-200">Dimensions</div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex justify-center space-x-4">
            <a href="/pages/UltimateTechRevolution2025" className="bg-gradient-to-r from-indigo-600 to-pink-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Revolution →
            </a>
            <a href="/pages/RevolutionaryTechBreakthrough2025" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-lg">
              Explore Breakthroughs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2025;