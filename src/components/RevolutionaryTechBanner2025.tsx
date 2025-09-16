import React from 'react';

const RevolutionaryTechBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ REVOLUTIONARY SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Tech Showcase 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover the most revolutionary technologies reshaping our world with infinite possibilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-4 border border-blue-400/30 text-center">
            <div className="text-3xl mb-2">🤖</div>
            <h3 className="text-lg font-bold mb-1">Autonomous AI</h3>
            <p className="text-blue-100 text-xs">Self-operating systems</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-4 border border-purple-400/30 text-center">
            <div className="text-3xl mb-2">⚛️</div>
            <h3 className="text-lg font-bold mb-1">Quantum Neural</h3>
            <p className="text-purple-100 text-xs">Infinite processing</p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-4 border border-emerald-400/30 text-center">
            <div className="text-3xl mb-2">🧬</div>
            <h3 className="text-lg font-bold mb-1">Neural Interface</h3>
            <p className="text-emerald-100 text-xs">Thought control</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-4 border border-orange-400/30 text-center">
            <div className="text-3xl mb-2">🌌</div>
            <h3 className="text-lg font-bold mb-1">Interdimensional</h3>
            <p className="text-orange-100 text-xs">Multi-dimensional</p>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="/pages/RevolutionaryTechShowcase2025" 
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
          >
            ⚡ Explore Revolutionary Tech →
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBanner2025;