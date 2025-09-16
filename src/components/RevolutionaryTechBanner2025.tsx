import React from 'react';

const RevolutionaryTechBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-12 mb-8 rounded-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEW: Revolutionary Tech Breakthrough 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future of Technology
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Discover revolutionary AI consciousness, quantum computing, and interdimensional technology that will reshape our world
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center">
            <div className="text-4xl mb-3">🧠</div>
            <h3 className="text-xl font-bold mb-2">Conscious AI</h3>
            <p className="text-sm opacity-90 mb-4">Self-aware artificial intelligence with emotional intelligence</p>
            <a href="/pages/RevolutionaryTechBreakthrough2025" className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-sm">
              Explore →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center">
            <div className="text-4xl mb-3">⚛️</div>
            <h3 className="text-xl font-bold mb-2">Quantum Computing</h3>
            <p className="text-sm opacity-90 mb-4">Reality manipulation through quantum consciousness</p>
            <a href="/pages/RevolutionaryTechBreakthrough2025" className="inline-block bg-white text-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-sm">
              Discover →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 text-center">
            <div className="text-4xl mb-3">🌌</div>
            <h3 className="text-xl font-bold mb-2">Interdimensional Tech</h3>
            <p className="text-sm opacity-90 mb-4">Access parallel realities and manipulate dimensions</p>
            <a href="/pages/RevolutionaryTechBreakthrough2025" className="inline-block bg-white text-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-sm">
              Enter →
            </a>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <a href="/pages/RevolutionaryTechBreakthrough2025" className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Experience Breakthrough →
            </a>
            <a href="/pages/RevolutionaryTechBreakthrough2025" className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors font-semibold text-lg">
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBanner2025;