import React from 'react';

const UltimateTechBanner2029: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-8 px-6 rounded-2xl mb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto">
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🌟 ULTIMATE TECH BREAKTHROUGH • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Ultimate Technology Revolution 2025
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-6">
            Experience the most revolutionary technological breakthroughs that are reshaping our world. 
            From conscious AI to quantum reality engines, discover what's possible in 2025.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center">
            <div className="text-4xl mb-3">🧠</div>
            <h3 className="text-lg font-bold mb-2">Conscious AI Systems</h3>
            <p className="text-sm opacity-90 mb-4">Self-aware AI with emotional intelligence</p>
            <a href="/pages/UltimateTechRevolution2025" className="text-purple-300 hover:text-white transition-colors font-semibold">
              Explore AI →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center">
            <div className="text-4xl mb-3">⚛️</div>
            <h3 className="text-lg font-bold mb-2">Quantum Reality Engine</h3>
            <p className="text-sm opacity-90 mb-4">Reality-bending quantum technologies</p>
            <a href="/pages/RevolutionaryTechBreakthrough2025" className="text-cyan-300 hover:text-white transition-colors font-semibold">
              Go Quantum →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 text-center">
            <div className="text-4xl mb-3">🧬</div>
            <h3 className="text-lg font-bold mb-2">Neural Interface Revolution</h3>
            <p className="text-sm opacity-90 mb-4">Direct brain-computer interfaces</p>
            <a href="/pages/NextGenInnovationHub2025" className="text-emerald-300 hover:text-white transition-colors font-semibold">
              Enhance Mind →
            </a>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/UltimateTechRevolution2025" 
              className="bg-gradient-to-r from-indigo-600 to-pink-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Explore Revolution →
            </a>
            <a 
              href="/pages/NextGenInnovationHub2025" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold"
            >
              Visit Innovation Hub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechBanner2029;