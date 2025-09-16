import React from 'react';

const RevolutionaryAdBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-3xl animate-bounce">🚀</span>
          <h3 className="text-2xl font-bold">REVOLUTIONARY NEW CONTENT 2025</h3>
          <span className="text-3xl animate-bounce">🚀</span>
        </div>
        <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
          Discover our groundbreaking new content featuring Next-Gen AI Solutions, Quantum Computing Revolution, 
          and Neural Interface Technology that's reshaping the future of technology
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <a href="/pages/NextGenAISolutions2025" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🤖 Next-Gen AI Solutions →
          </a>
          <a href="/pages/QuantumComputingRevolution2025" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            ⚡ Quantum Revolution →
          </a>
          <a href="/pages/NeuralInterfaceRevolution2025" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🧬 Neural Interfaces →
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner;