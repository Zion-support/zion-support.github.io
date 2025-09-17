import React from 'react';

const RevolutionaryContentBanner2025 = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-8 mb-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-32 -translate-y-32 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-4 animate-bounce">
              🚀 NEW: Revolutionary Content 2025
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-2">
              Experience the Future of Technology
            </h2>
            <p className="text-lg opacity-90 max-w-2xl">
              Discover groundbreaking innovations in AI, quantum computing, and neural interfaces that are reshaping our world
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/pages/RevolutionaryTechShowcase2025" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold text-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              🌟 Explore Revolutionary Tech →
            </a>
            <a 
              href="/pages/AISolutionsComprehensive2025" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-center"
            >
              🤖 AI Solutions →
            </a>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl mb-2">🧠</div>
            <h3 className="font-semibold mb-1">AI Consciousness</h3>
            <p className="text-sm opacity-80">Self-aware AI systems</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">⚛️</div>
            <h3 className="font-semibold mb-1">Quantum Computing</h3>
            <p className="text-sm opacity-80">Exponential processing power</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🧬</div>
            <h3 className="font-semibold mb-1">Neural Interfaces</h3>
            <p className="text-sm opacity-80">Mind-machine connection</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;