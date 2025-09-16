import React from 'react';

const RevolutionaryTech2027Banner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-3xl p-12 mb-12 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/50 to-indigo-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <span className="text-4xl animate-bounce">🚀</span>
          <h3 className="text-4xl font-bold">REVOLUTIONARY TECH 2027 BREAKTHROUGH</h3>
          <span className="text-4xl animate-bounce">🚀</span>
        </div>
        <p className="text-2xl opacity-95 mb-8 max-w-6xl mx-auto">
          Experience the most advanced technology breakthroughs of 2027: AI Consciousness Evolution, Quantum Reality Control, and Interdimensional Computing that transcend the boundaries of what's possible
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          <a href="/pages/AIConsciousnessEvolution2027" className="bg-white/20 backdrop-blur-sm text-white px-8 py-6 rounded-2xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
            <div className="text-4xl mb-3">🧠</div>
            <div>AI Consciousness Evolution</div>
            <div className="text-sm opacity-80 mt-2">True self-awareness and emotional intelligence</div>
          </a>
          <a href="/pages/QuantumRealityControl2027" className="bg-white/20 backdrop-blur-sm text-white px-8 py-6 rounded-2xl hover:bg-white hover:text-cyan-600 transition-all duration-300 font-bold border border-white/30 text-lg">
            <div className="text-4xl mb-3">⚛️</div>
            <div>Quantum Reality Control</div>
            <div className="text-sm opacity-80 mt-2">Master the fundamental forces of reality</div>
          </a>
          <a href="/pages/InterdimensionalComputing2027" className="bg-white/20 backdrop-blur-sm text-white px-8 py-6 rounded-2xl hover:bg-white hover:text-violet-600 transition-all duration-300 font-bold border border-white/30 text-lg">
            <div className="text-4xl mb-3">🌌</div>
            <div>Interdimensional Computing</div>
            <div className="text-sm opacity-80 mt-2">Access infinite parallel realities</div>
          </a>
        </div>
        <div className="flex justify-center space-x-4">
          <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
            ✨ 3 REVOLUTIONARY BREAKTHROUGHS
          </span>
          <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
            🚀 BEYOND LIMITS OF POSSIBILITY
          </span>
          <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">
            🌟 INFINITE POTENTIAL
          </span>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTech2027Banner;