import React from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-indigo-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 NEW REVOLUTIONARY CONTENT • 2025
          </div>
          <h2 className="text-4xl font-bold mb-4">🌟 Revolutionary AI & Quantum Content 2025</h2>
          <p className="text-xl opacity-95 max-w-4xl mx-auto">
            Experience the future with our groundbreaking new content featuring autonomous AI systems, 
            quantum computing breakthroughs, and consciousness-driven technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🧠</div>
            <h3 className="text-xl font-bold mb-3 text-center">Revolutionary AI Content</h3>
            <p className="text-purple-100 mb-4 text-center text-sm">
              Discover autonomous AI systems with genuine consciousness and self-awareness
            </p>
            <a href="/pages/RevolutionaryAIContent2025" className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore AI Revolution →
            </a>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Breakthroughs</h3>
            <p className="text-cyan-100 mb-4 text-center text-sm">
              Witness quantum supremacy and revolutionary error correction techniques
            </p>
            <a href="/pages/QuantumBreakthroughShowcase2025" className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Go Quantum →
            </a>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🌟</div>
            <h3 className="text-xl font-bold mb-3 text-center">Future Technology</h3>
            <p className="text-emerald-100 mb-4 text-center text-sm">
              Explore the convergence of AI, quantum computing, and neural interfaces
            </p>
            <a href="/pages/UltimateTechRevolution2026" className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              See the Future →
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <a href="/pages/RevolutionaryAIContent2025" className="inline-block bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg border-2 border-white/30">
            🌟 Explore All Revolutionary Content →
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;