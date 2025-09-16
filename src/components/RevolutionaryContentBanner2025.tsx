import React from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-2xl p-8 mb-12 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-blue-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <span className="text-4xl animate-bounce">🚀</span>
          <h3 className="text-3xl font-bold">REVOLUTIONARY CONTENT 2025</h3>
          <span className="text-4xl animate-bounce">🚀</span>
        </div>
        <p className="text-2xl opacity-95 mb-8 max-w-5xl mx-auto">
          Experience the future of technology with our groundbreaking new content featuring 
          AI Consciousness, Quantum Supremacy, and Neural Interface breakthroughs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-8xl mx-auto">
          <a href="/pages/RevolutionaryTechShowcase2025" className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 text-lg">
            🧠 Revolutionary Tech Showcase →
          </a>
          <a href="/pages/UltimateInnovationHub2025" className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 text-lg">
            🌟 Ultimate Innovation Hub →
          </a>
          <a href="/pages/NextGenTechBreakthrough2025" className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 text-lg">
            🔮 Next-Gen Breakthrough →
          </a>
        </div>
        <div className="mt-8">
          <a href="/pages/RevolutionaryTechShowcase2025" className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-xl border-2 border-white/30">
            🌟 NEW: Revolutionary Tech Showcase 2025 →
          </a>
          <a href="/pages/UltimateInnovationHub2025" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-xl border-2 border-white/30 ml-6">
            🚀 NEW: Ultimate Innovation Hub 2025 →
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;