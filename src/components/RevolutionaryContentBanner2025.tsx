import React from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ REVOLUTIONARY SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Revolutionary Tech Showcase 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most revolutionary technology innovations that will define the future
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-3 text-center">🤖</div>
            <h3 className="text-lg font-bold mb-2 text-center">Autonomous AI</h3>
            <p className="text-cyan-100 text-center text-xs mb-3">
              Self-operating AI agents with consciousness
            </p>
            <a href="/pages/RevolutionaryTechShowcase2025" className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center text-xs">
              Interact →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-3 text-center">⚛️</div>
            <h3 className="text-lg font-bold mb-2 text-center">Quantum Computing</h3>
            <p className="text-blue-100 text-center text-xs mb-3">
              Revolutionary quantum computing solutions
            </p>
            <a href="/pages/RevolutionaryTechShowcase2025" className="block w-full bg-white text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center text-xs">
              Try Quantum →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-lg p-4 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-3 text-center">🧬</div>
            <h3 className="text-lg font-bold mb-2 text-center">Neural Interfaces</h3>
            <p className="text-indigo-100 text-center text-xs mb-3">
              Direct brain-computer interfaces
            </p>
            <a href="/pages/RevolutionaryTechShowcase2025" className="block w-full bg-white text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center text-xs">
              Connect →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-lg p-4 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-3 text-center">🌐</div>
            <h3 className="text-lg font-bold mb-2 text-center">Metaverse</h3>
            <p className="text-purple-100 text-center text-xs mb-3">
              Immersive virtual worlds
            </p>
            <a href="/pages/RevolutionaryTechShowcase2025" className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-xs">
              Enter →
            </a>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <a href="/pages/RevolutionaryTechShowcase2025" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Explore Showcase
            </a>
            <a href="/pages/NextGenTechRevolution2025" className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400/10 transition-colors font-semibold">
              View All Tech
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;