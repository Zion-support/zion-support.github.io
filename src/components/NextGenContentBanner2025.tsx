import React from 'react';

const NextGenContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-12 mb-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-6 left-6 w-3 h-3 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute top-12 right-12 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-6 left-1/3 w-2 h-2 bg-white/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-12 right-1/4 w-3 h-3 bg-white/25 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/35 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/45 rounded-full animate-bounce"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center px-8 py-4 bg-white/20 rounded-full text-lg font-bold mb-6 animate-pulse">
            🚀 NEW: Next-Gen Technology 2025
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-2xl md:text-3xl opacity-90 mb-8 max-w-5xl mx-auto">
            Experience the most advanced technologies that will reshape our world: AI Consciousness, Quantum Computing, and Neural Interfaces
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center space-x-3 bg-white/20 px-6 py-3 rounded-full">
              <span className="text-3xl">🧠</span>
              <span className="font-semibold text-lg">AI Consciousness</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/20 px-6 py-3 rounded-full">
              <span className="text-3xl">⚡</span>
              <span className="font-semibold text-lg">Quantum Computing</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/20 px-6 py-3 rounded-full">
              <span className="text-3xl">🧬</span>
              <span className="font-semibold text-lg">Neural Interfaces</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/20 px-6 py-3 rounded-full">
              <span className="text-3xl">🌐</span>
              <span className="font-semibold text-lg">Edge Computing</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="/pages/NextGenTechRevolution2025" 
              className="bg-white text-indigo-600 px-10 py-5 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl hover:scale-105 border-2 border-yellow-400"
            >
              🌟 Explore Next-Gen Tech →
            </a>
            <a 
              href="/pages/AdvancedAIConsciousness2025" 
              className="bg-white text-purple-600 px-10 py-5 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl hover:scale-105 border-2 border-yellow-400"
            >
              🧠 AI Consciousness →
            </a>
            <a 
              href="/pages/QuantumComputingBreakthrough2025" 
              className="bg-white text-pink-600 px-10 py-5 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl hover:scale-105 border-2 border-yellow-400"
            >
              ⚡ Quantum Computing →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenContentBanner2025;