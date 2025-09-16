import React from 'react';

const RevolutionaryContentBanner2026: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-3xl animate-bounce">🌟</span>
          <h3 className="text-2xl font-bold">REVOLUTIONARY CONTENT 2026-2040</h3>
          <span className="text-3xl animate-bounce">🌟</span>
        </div>
        <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
          Experience the future of technology with our groundbreaking new content featuring Ultimate Tech Breakthrough 2028, 
          Interdimensional Technology 2032, and Omniversal AI Consciousness 2040
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <a href="/pages/UltimateTechBreakthrough2028" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🚀 Ultimate Tech 2028 →
          </a>
          <a href="/pages/InterdimensionalTechRevolution2032" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🌌 Interdimensional 2032 →
          </a>
          <a href="/pages/OmniversalAIConsciousness2040" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🌟 Omniversal AI 2040 →
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;