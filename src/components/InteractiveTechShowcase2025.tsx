import React from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-12 mb-8 rounded-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2025
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-6">
            Experience our cutting-edge technologies with interactive demos, real-time processing, and immersive features
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🤖</div>
            <h3 className="text-xl font-bold mb-3 text-center">AI Consciousness Demo</h3>
            <p className="text-blue-100 mb-4 text-center text-sm">
              Interact with our conscious AI system in real-time
            </p>
            <div className="bg-white/10 rounded-lg p-3 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs">Consciousness Level</span>
                <span className="text-xs font-bold">87%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full w-4/5 animate-pulse"></div>
              </div>
            </div>
            <a 
              href="/pages/RevolutionaryTechShowcase2025" 
              className="block w-full bg-white text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center text-sm"
            >
              Try AI Demo →
            </a>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">⚛️</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Processing</h3>
            <p className="text-cyan-100 mb-4 text-center text-sm">
              Experience quantum computing across multiple realities
            </p>
            <div className="bg-white/10 rounded-lg p-3 mb-4">
              <div className="flex justify-center space-x-1 mb-2">
                {Array.from({length: 6}).map((_, i) => (
                  <div key={i} className="w-2 h-4 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                ))}
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-cyan-400">10^18</div>
                <div className="text-xs opacity-80">Quantum Operations</div>
              </div>
            </div>
            <a 
              href="/pages/NextGenTechRevolution2025" 
              className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center text-sm"
            >
              Enter Quantum →
            </a>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🌌</div>
            <h3 className="text-xl font-bold mb-3 text-center">Dimensional Interface</h3>
            <p className="text-emerald-100 mb-4 text-center text-sm">
              Explore interdimensional technology and reality manipulation
            </p>
            <div className="bg-white/10 rounded-lg p-3 mb-4">
              <div className="grid grid-cols-3 gap-1">
                {Array.from({length: 9}).map((_, i) => (
                  <div key={i} className="aspect-square bg-gradient-to-br from-emerald-400 to-teal-400 rounded opacity-60 hover:opacity-100 transition-opacity cursor-pointer animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                ))}
              </div>
              <div className="text-center mt-2">
                <div className="text-sm font-bold text-emerald-400">∞</div>
                <div className="text-xs opacity-80">Dimensions</div>
              </div>
            </div>
            <a 
              href="/pages/UltimateTechBreakthrough2025" 
              className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center text-sm"
            >
              Enter Dimensions →
            </a>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="/pages/RevolutionaryTechShowcase2025" 
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
          >
            🚀 Explore Full Interactive Showcase →
          </a>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;