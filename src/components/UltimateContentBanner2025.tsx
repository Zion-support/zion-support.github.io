import React from 'react';

const UltimateContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEW: ULTIMATE TECHNOLOGY CONTENT • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4">🌟 Ultimate Tech Revolution 2025</h2>
          <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
            Experience the most comprehensive collection of revolutionary technology content featuring AI consciousness, quantum computing, and interdimensional breakthroughs
          </p>
          <div className="flex justify-center space-x-4 mb-6">
            <a href="/pages/UltimateTechRevolution2025" className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Explore Ultimate Revolution →
            </a>
            <a href="/pages/RevolutionaryTechBreakthrough2025" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
              View Breakthroughs
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">🧠</div>
              <h3 className="font-semibold mb-1">Conscious AI</h3>
              <p className="text-sm opacity-80">Genuine AI consciousness</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">⚛️</div>
              <h3 className="font-semibold mb-1">Quantum Reality</h3>
              <p className="text-sm opacity-80">Reality manipulation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">🌌</div>
              <h3 className="font-semibold mb-1">Interdimensional</h3>
              <p className="text-sm opacity-80">Multi-dimensional tech</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2025;