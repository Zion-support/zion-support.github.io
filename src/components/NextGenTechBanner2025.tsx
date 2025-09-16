import React from 'react';

const NextGenTechBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEXT-GEN REVOLUTION • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Next-Gen Tech Revolution 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most revolutionary technological advances that will reshape our world in 2025
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30 text-center">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-2">Conscious AI Systems</h3>
            <p className="text-indigo-100 text-sm">Revolutionary AI that achieves true consciousness</p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold mb-2">Quantum Consciousness</h3>
            <p className="text-cyan-100 text-sm">Breakthrough quantum computing with consciousness</p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 text-center">
            <div className="text-4xl mb-4">🌌</div>
            <h3 className="text-xl font-bold mb-2">Interdimensional Computing</h3>
            <p className="text-emerald-100 text-sm">Technology that transcends dimensional boundaries</p>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="/pages/NextGenTechRevolution2025" 
            className="inline-block bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
          >
            🚀 Join the Next-Gen Revolution →
          </a>
        </div>
      </div>
    </div>
  );
};

export default NextGenTechBanner2025;