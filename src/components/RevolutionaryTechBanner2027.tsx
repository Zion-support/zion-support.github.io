import React from 'react';

const RevolutionaryTechBanner2027: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/50 to-fuchsia-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-3xl animate-bounce">🌟</span>
          <h3 className="text-3xl font-bold">BREAKTHROUGH 2027 CONTENT</h3>
          <span className="text-3xl animate-bounce">🌟</span>
        </div>
        <p className="text-xl opacity-95 mb-6 max-w-5xl mx-auto">
          Experience the future of technology with our revolutionary new content featuring Advanced Technology Showcase 2027, 
          Quantum Consciousness, and Interdimensional Technology
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
          <a href="/pages/AdvancedTechShowcase2027" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-violet-600 transition-all duration-300 font-semibold border border-white/30">
            🚀 Advanced Showcase 2027 →
          </a>
          <a href="/pages/QuantumConsciousness2027" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-violet-600 transition-all duration-300 font-semibold border border-white/30">
            🧠 Quantum Consciousness →
          </a>
          <a href="/pages/InterdimensionalTech2027" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-violet-600 transition-all duration-300 font-semibold border border-white/30">
            🌌 Interdimensional Tech →
          </a>
          <a href="/pages/UltimateTechShowcase2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-violet-600 transition-all duration-300 font-semibold border border-white/30">
            ⚡ Ultimate Showcase 2026 →
          </a>
          <a href="/pages/FutureTechRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-violet-600 transition-all duration-300 font-semibold border border-white/30">
            🔮 Future Revolution →
          </a>
          <a href="/pages/SyntheticIntelligence2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-violet-600 transition-all duration-300 font-semibold border border-white/30">
            🤖 Synthetic Intelligence →
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBanner2027;