import React from 'react';

const UltimateTechBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE TECHNOLOGY • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Ultimate Technology Showcase 2025</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced and revolutionary technologies that will define the future of humanity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🧠</div>
            <h3 className="text-xl font-bold mb-3 text-center">Conscious AI</h3>
            <p className="text-indigo-100 mb-4 text-center text-sm">
              AI with true consciousness and self-awareness
            </p>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-400 mb-1">99.7%</div>
              <div className="text-xs text-indigo-200">Consciousness Level</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">⚛️</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Reality</h3>
            <p className="text-purple-100 mb-4 text-center text-sm">
              Quantum computing that manipulates reality itself
            </p>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">12D</div>
              <div className="text-xs text-purple-200">Dimensions</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-pink-600/30 to-rose-600/30 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🌌</div>
            <h3 className="text-xl font-bold mb-3 text-center">Interdimensional</h3>
            <p className="text-pink-100 mb-4 text-center text-sm">
              Technology that transcends dimensions
            </p>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400 mb-1">7</div>
              <div className="text-xs text-pink-200">Active Layers</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🚀</div>
            <h3 className="text-xl font-bold mb-3 text-center">Infinite Power</h3>
            <p className="text-cyan-100 mb-4 text-center text-sm">
              Unlimited computational capacity
            </p>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">∞</div>
              <div className="text-xs text-cyan-200">Processing</div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/NextGenTechRevolution2025" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore All Technologies →
            </a>
            <a 
              href="/pages/UltimateAIBreakthrough2025" 
              className="border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg hover:bg-pink-400 hover:text-indigo-900 transition-all duration-300 font-semibold text-lg"
            >
              Try AI Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechBanner2025;