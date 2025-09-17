import React from 'react';

const RevolutionaryAdBanner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-6 mb-8 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-2xl animate-bounce">🚀</span>
          <h3 className="text-xl font-bold">REVOLUTIONARY NEW CONTENT AVAILABLE</h3>
          <span className="text-2xl animate-bounce">🚀</span>
        </div>
        <p className="text-lg opacity-95 mb-4 max-w-4xl mx-auto">
          Discover our latest breakthrough technologies and innovative solutions that are reshaping the future of business and technology.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/pages/UltimateTechRevolution2027" className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🚀 Ultimate Tech 2027 →
          </a>
          <a href="/pages/InterdimensionalTechRevolution2030" className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🌌 Interdimensional 2030 →
          </a>
          <a href="/pages/OmniversalAIConsciousness2035" className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🌟 Omniversal AI 2035 →
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner;