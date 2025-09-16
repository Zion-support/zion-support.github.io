import React from 'react';

const RevolutionaryTechBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-3xl p-12 mb-12 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-indigo-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-3xl animate-bounce">🚀</span>
          <h3 className="text-2xl font-bold">REVOLUTIONARY TECH BREAKTHROUGH 2025</h3>
          <span className="text-3xl animate-bounce">🚀</span>
        </div>
        <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
          Experience the most advanced technological innovations that are reshaping our world. 
          From AI consciousness to quantum supremacy, discover the future today.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          <a href="/pages/RevolutionaryTechBreakthrough2025" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🧠 AI Consciousness →
          </a>
          <a href="/pages/RevolutionaryTechBreakthrough2025" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            ⚡ Quantum Supremacy →
          </a>
          <a href="/pages/RevolutionaryTechBreakthrough2025" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🧬 Neural Interfaces →
          </a>
          <a href="/pages/RevolutionaryTechBreakthrough2025" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🤖 Synthetic Intelligence →
          </a>
        </div>
        <div className="mt-6">
          <a href="/pages/RevolutionaryTechBreakthrough2025" className="inline-block bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg border-2 border-white/30">
            🌟 NEW: Revolutionary Tech Breakthrough 2025 →
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBanner2025;