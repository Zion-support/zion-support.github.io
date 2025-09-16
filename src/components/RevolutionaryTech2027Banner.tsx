import React from 'react';

const RevolutionaryTech2027Banner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-2xl p-8 mb-12 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-4xl animate-bounce">🚀</span>
          <h3 className="text-3xl font-bold">REVOLUTIONARY TECHNOLOGY 2027</h3>
          <span className="text-4xl animate-bounce">🚀</span>
        </div>
        <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
          Experience the most revolutionary technologies that are reshaping reality itself. 
          From quantum consciousness to interdimensional computing, discover the future that's already here.
        </p>
        <div className="flex justify-center space-x-4 flex-wrap gap-4">
          <a href="/pages/RevolutionaryTech2027" className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg border-2 border-white/30">
            🌟 Revolutionary Tech 2027 →
          </a>
          <a href="/pages/AdvancedConsciousnessComputing2027" className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg border-2 border-white/30">
            🧠 Consciousness Computing →
          </a>
          <a href="/pages/QuantumRealityEngine2027" className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg border-2 border-white/30">
            ⚡ Quantum Reality Engine →
          </a>
        </div>
        <div className="mt-6">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🌟 BRAND NEW • JANUARY 2027
          </div>
          <p className="text-lg opacity-90">
            The future of technology is here. Experience consciousness transfer, quantum reality manipulation, and interdimensional computing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTech2027Banner;