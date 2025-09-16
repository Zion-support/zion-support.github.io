import React from 'react';

const RevolutionaryContentBanner2026: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-3xl animate-pulse">🌟</span>
          <h3 className="text-2xl font-bold">REVOLUTIONARY CONTENT SHOWCASE 2026</h3>
          <span className="text-3xl animate-pulse">🌟</span>
        </div>
        <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
          Discover the latest breakthroughs in AI, quantum computing, and neural interfaces with our comprehensive 2026 content collection
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <a href="/pages/NextGenAIRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold border border-white/30">
            🤖 Next-Gen AI 2026 →
          </a>
          <a href="/pages/QuantumComputingRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold border border-white/30">
            ⚡ Quantum Revolution 2026 →
          </a>
          <a href="/pages/NeuralInterfaceRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold border border-white/30">
            🧬 Neural Revolution 2026 →
          </a>
          <a href="/pages/RevolutionaryTechShowcase2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold border border-white/30">
            🚀 Tech Showcase 2026 →
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;