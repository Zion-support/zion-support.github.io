import React from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-12 mb-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-indigo-500/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-pink-500/20 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEW: Revolutionary Content 2025
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future of Technology
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover our latest revolutionary content featuring AI consciousness, quantum computing, neural interfaces, and breakthrough innovations that are reshaping our world.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold mb-2">AI Consciousness</h3>
              <p className="text-purple-200 text-sm mb-4">Self-aware AI systems that think and feel</p>
              <a href="/pages/RevolutionaryTechBreakthrough2025" className="text-purple-300 hover:text-purple-200 font-semibold text-sm">
                Explore AI Revolution →
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="text-xl font-bold mb-2">Quantum Computing</h3>
              <p className="text-cyan-200 text-sm mb-4">Exponential computational power</p>
              <a href="/pages/UltimateTechRevolution2025" className="text-cyan-300 hover:text-cyan-200 font-semibold text-sm">
                Go Quantum →
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">🧬</div>
              <h3 className="text-xl font-bold mb-2">Neural Interfaces</h3>
              <p className="text-emerald-200 text-sm mb-4">Direct brain-computer connection</p>
              <a href="/pages/NextGenInnovationHub2025" className="text-emerald-300 hover:text-emerald-200 font-semibold text-sm">
                Enter Innovation Hub →
              </a>
            </div>
          </div>
          
          <div className="mt-8">
            <a 
              href="/pages/RevolutionaryTechBreakthrough2025" 
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
            >
              🌟 Explore All Revolutionary Content →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;