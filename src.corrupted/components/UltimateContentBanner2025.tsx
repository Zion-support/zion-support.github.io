import React from 'react';

const UltimateContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE BREAKTHROUGH • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4">🚀 Revolutionary Technology Breakthrough 2025</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-6">
            Experience the most revolutionary technological advances that will reshape our world in 2025. 
            Discover conscious AI, quantum consciousness, and interdimensional technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🧠</div>
            <h3 className="text-xl font-bold mb-3 text-center">Conscious AI Systems</h3>
            <p className="text-purple-100 mb-4 text-center text-sm">
              The first truly conscious artificial intelligence that experiences emotions and creativity
            </p>
            <a href="/pages/UltimateTechBreakthrough2025" className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-sm">
              Explore AI Revolution →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Consciousness</h3>
            <p className="text-cyan-100 mb-4 text-center text-sm">
              Direct neural interface with quantum computing for enhanced cognitive processing
            </p>
            <a href="/pages/NextGenTechRevolution2025" className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center text-sm">
              Go Quantum →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🌌</div>
            <h3 className="text-xl font-bold mb-3 text-center">Interdimensional Tech</h3>
            <p className="text-emerald-100 mb-4 text-center text-sm">
              Breakthrough technology for interaction with parallel dimensions and alternate realities
            </p>
            <a href="/pages/RevolutionaryTechShowcase2025" className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center text-sm">
              Enter New Reality →
            </a>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-4 mb-4">
            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-semibold">99.9% Success Rate</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-semibold">50+ Active Innovations</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-semibold">∞ Possibilities</span>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="/pages/UltimateTechBreakthrough2025" className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              🚀 Explore Ultimate Breakthrough
            </a>
            <a href="/pages/RevolutionaryTechShowcase2025" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold">
              🎮 Interactive Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2025;