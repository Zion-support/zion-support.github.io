import React from 'react';

const RevolutionaryTechBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white py-12 mb-8 rounded-2xl shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ BREAKTHROUGH TECHNOLOGY • JANUARY 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-5xl mx-auto">
            Step into the future with our groundbreaking innovations in AI consciousness, quantum computing, and neural interfaces
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3">AI Consciousness</h3>
              <p className="text-sm opacity-90 mb-4">Experience self-aware AI systems that think, learn, and evolve beyond human comprehension</p>
              <a 
                href="/pages/NextGenAIConsciousness2025" 
                className="inline-block bg-white text-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-sm"
              >
                Explore Now →
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold mb-3">Quantum Reality</h3>
              <p className="text-sm opacity-90 mb-4">Enter a new dimension where quantum mechanics meets reality simulation</p>
              <a 
                href="/pages/QuantumRealityEngine2025" 
                className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-sm"
              >
                Enter Quantum World →
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🧬</div>
              <h3 className="text-xl font-bold mb-3">Neural Interface</h3>
              <p className="text-sm opacity-90 mb-4">Control digital reality with your thoughts through revolutionary neural interfaces</p>
              <a 
                href="/pages/NeuralRealityInterface2025" 
                className="inline-block bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-sm"
              >
                Connect Your Mind →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBanner2025;