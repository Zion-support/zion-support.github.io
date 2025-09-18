import React from 'react';

const NextGenContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-8 mb-8 rounded-2xl shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 NEW: Next-Gen Technology 2025
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the Future of Technology
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-6 max-w-4xl mx-auto">
            Discover revolutionary AI consciousness, quantum reality engines, and neural interfaces that will reshape our world
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/pages/NextGenAIConsciousness2025" 
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-all duration-300 font-semibold text-center hover:scale-105 transform"
            >
              🧠 AI Consciousness →
            </a>
            <a 
              href="/pages/QuantumRealityEngine2025" 
              className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold text-center hover:scale-105 transform"
            >
              ⚛️ Quantum Reality →
            </a>
            <a 
              href="/pages/NeuralRealityInterface2025" 
              className="bg-white text-pink-600 px-6 py-3 rounded-lg hover:bg-pink-50 transition-all duration-300 font-semibold text-center hover:scale-105 transform"
            >
              🧬 Neural Interface →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenContentBanner2025;