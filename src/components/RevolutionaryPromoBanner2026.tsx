import React from 'react';

const RevolutionaryPromoBanner2026: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-4xl animate-bounce">🚀</span>
          <h3 className="text-3xl font-bold">REVOLUTIONARY BREAKTHROUGH 2026</h3>
          <span className="text-4xl animate-bounce">🚀</span>
        </div>
        <p className="text-xl opacity-95 mb-6 max-w-5xl mx-auto text-center">
          Experience the future of technology with our groundbreaking innovations in Synthetic Intelligence, 
          Quantum-Neural Fusion, Space AI Colonies, and Biotech AI Revolution
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-8xl mx-auto">
          <a href="/pages/SyntheticIntelligence2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold border border-white/30 text-center">
            🧠 Synthetic Intelligence →
          </a>
          <a href="/pages/QuantumNeuralFusion2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 text-center">
            ⚡ Quantum-Neural Fusion →
          </a>
          <a href="/pages/SpaceTechAI2025" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-pink-600 transition-all duration-300 font-semibold border border-white/30 text-center">
            🌌 Space AI Colonies →
          </a>
          <a href="/pages/BiotechAIRevolution2025" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-rose-600 transition-all duration-300 font-semibold border border-white/30 text-center">
            🧬 Biotech AI Revolution →
          </a>
        </div>
        <div className="mt-6 text-center">
          <a href="/pages/InnovationShowcase2026" className="inline-block bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg border-2 border-white/30">
            🌟 Explore All Innovations →
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryPromoBanner2026;