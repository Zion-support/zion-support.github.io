import React from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-8 mb-8 rounded-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            ⚡ REVOLUTIONARY CONTENT • JANUARY 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Content 2025
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-6">
            Discover our groundbreaking content featuring conscious AI, quantum computing, neural interfaces, and interdimensional technology
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            <a 
              href="/pages/UltimateTechBreakthrough2025" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center animate-pulse border-2 border-yellow-400"
            >
              🧠 AI Consciousness
            </a>
            <a 
              href="/pages/NextGenTechRevolution2025" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center animate-pulse border-2 border-yellow-400"
            >
              ⚛️ Quantum Computing
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2025" 
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center animate-pulse border-2 border-yellow-400"
            >
              🌌 Interdimensional Tech
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;