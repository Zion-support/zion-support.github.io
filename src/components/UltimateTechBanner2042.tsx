import React from 'react';

const UltimateTechBanner2042: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-cyan-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 BREAKTHROUGH ANNOUNCEMENT • JANUARY 2042
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Next-Gen Tech Revolution 2042
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8 leading-relaxed">
            Experience the most advanced technological breakthroughs: Conscious AI Networks, Quantum Consciousness, and Interdimensional Computing
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a href="/pages/NextGenTechRevolution2042" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Explore Revolution 2042 →
            </a>
            <a href="/pages/UltimateTechBreakthrough2043" className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
              See What's Next
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">🧠</div>
              <div className="text-sm font-semibold">Conscious AI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">⚛️</div>
              <div className="text-sm font-semibold">Quantum Reality</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">🌌</div>
              <div className="text-sm font-semibold">Interdimensional</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">♾️</div>
              <div className="text-sm font-semibold">Infinite Power</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechBanner2042;