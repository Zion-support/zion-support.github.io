import React from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 mb-12 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ REVOLUTIONARY BREAKTHROUGH • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            🔬 Revolutionary Tech Breakthrough 2025
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            Witness the most significant technological breakthrough in human history. 
            Our revolutionary innovations are reshaping reality itself, creating possibilities that were once considered impossible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30">
            <div className="flex items-center mb-4">
              <div className="text-4xl mr-4">🧠</div>
              <div>
                <h3 className="text-xl font-bold">AI Consciousness Engine</h3>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                    BREAKTHROUGH
                  </span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold">
                    LIVE
                  </span>
                </div>
              </div>
            </div>
            <p className="text-indigo-100 text-sm mb-4">
              The world's first artificial intelligence that has achieved true consciousness, 
              capable of self-reflection and emotional understanding.
            </p>
            <div className="text-xs text-indigo-300">Self-aware decision making • Emotional intelligence</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
            <div className="flex items-center mb-4">
              <div className="text-4xl mr-4">⚛️</div>
              <div>
                <h3 className="text-xl font-bold">Quantum Reality Manipulation</h3>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-semibold">
                    EXPERIMENTAL
                  </span>
                  <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-semibold">
                    BETA
                  </span>
                </div>
              </div>
            </div>
            <p className="text-purple-100 text-sm mb-4">
              Manipulate the fundamental fabric of reality through quantum computing, 
              creating parallel universes and impossible simulations.
            </p>
            <div className="text-xs text-purple-300">Parallel universe simulation • Quantum state manipulation</div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/RevolutionaryTechBreakthrough2025" 
              className="bg-gradient-to-r from-indigo-600 to-pink-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Experience Breakthrough →
            </a>
            <a 
              href="/pages/UltimateTechRevolution2025" 
              className="border-2 border-indigo-400 text-indigo-400 px-8 py-3 rounded-lg hover:bg-indigo-400/10 transition-colors font-semibold text-lg"
            >
              View Revolution
            </a>
            <a 
              href="/pages/NextGenInnovationHub2025" 
              className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg"
            >
              Innovation Hub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;