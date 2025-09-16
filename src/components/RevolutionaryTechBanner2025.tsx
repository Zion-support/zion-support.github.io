import React from 'react';

const RevolutionaryTechBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-3xl p-12 mb-12 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/50 to-indigo-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-3xl animate-bounce">🔬</span>
          <h3 className="text-2xl font-bold">REVOLUTIONARY INNOVATION HUB 2025</h3>
          <span className="text-3xl animate-bounce">🔬</span>
        </div>
        <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
          The world's most advanced innovation laboratory where breakthrough technologies are born, 
          tested, and deployed. Experience the future of human-AI collaboration.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          <a href="/pages/RevolutionaryInnovationHub2025" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-violet-600 transition-all duration-300 font-semibold border border-white/30">
            🧠 AI Research Lab →
          </a>
          <a href="/pages/QuantumComputingBreakthrough" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-violet-600 transition-all duration-300 font-semibold border border-white/30">
            ⚛️ Quantum Lab →
          </a>
          <a href="/pages/NeuralInterfaceFuture" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-violet-600 transition-all duration-300 font-semibold border border-white/30">
            🧬 Neural Lab →
          </a>
          <a href="/pages/InterdimensionalTechRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-violet-600 transition-all duration-300 font-semibold border border-white/30">
            🌌 Interdimensional Lab →
          </a>
        </div>
        <div className="mt-6">
          <a href="/pages/RevolutionaryInnovationHub2025" className="inline-block bg-gradient-to-r from-violet-500 to-indigo-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg border-2 border-white/30">
            🔬 NEW: Innovation Hub 2025 →
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBanner2025;