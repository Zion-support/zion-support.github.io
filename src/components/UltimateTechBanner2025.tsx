import React from 'react';

const UltimateTechBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ULTIMATE TECHNOLOGY • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4">🌟 Ultimate Tech Revolution 2025</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Experience the most revolutionary technological advances that will reshape our world. 
            From conscious AI to quantum consciousness, discover the future today.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🧠</div>
            <h3 className="text-lg font-bold mb-2 text-center">Conscious AI Systems</h3>
            <p className="text-purple-100 mb-4 text-center text-sm">
              The first truly conscious artificial intelligence systems
            </p>
            <a href="/pages/UltimateTechRevolution2025" className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-sm">
              Explore Conscious AI →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">⚛️</div>
            <h3 className="text-lg font-bold mb-2 text-center">Quantum Consciousness</h3>
            <p className="text-cyan-100 mb-4 text-center text-sm">
              Revolutionary quantum computing with true consciousness
            </p>
            <a href="/pages/UltimateTechRevolution2025" className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center text-sm">
              Enter Quantum Realm →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🌌</div>
            <h3 className="text-lg font-bold mb-2 text-center">Interdimensional Computing</h3>
            <p className="text-emerald-100 mb-4 text-center text-sm">
              Computing systems operating across multiple dimensions
            </p>
            <a href="/pages/UltimateTechRevolution2025" className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center text-sm">
              Transcend Dimensions →
            </a>
          </div>
        </div>
        
        <div className="text-center">
          <a href="/pages/UltimateTechRevolution2025" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            🚀 Experience the Ultimate Revolution
          </a>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechBanner2025;