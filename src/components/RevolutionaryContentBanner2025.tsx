import React from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4">🌟 Ultimate Tech Showcase 2025</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover the most comprehensive collection of cutting-edge technologies and innovations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-3 text-center">🤖</div>
            <h3 className="text-lg font-bold mb-2 text-center">AI Solutions</h3>
            <p className="text-blue-100 mb-4 text-center text-xs">
              25+ Advanced AI Solutions
            </p>
            <div className="text-center">
              <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">LIVE</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-3 text-center">⚡</div>
            <h3 className="text-lg font-bold mb-2 text-center">Quantum Tech</h3>
            <p className="text-purple-100 mb-4 text-center text-xs">
              15+ Quantum Applications
            </p>
            <div className="text-center">
              <span className="px-2 py-1 bg-purple-500 text-white text-xs rounded-full">BETA</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-green-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-3 text-center">🧬</div>
            <h3 className="text-lg font-bold mb-2 text-center">Neural Interfaces</h3>
            <p className="text-green-100 mb-4 text-center text-xs">
              10+ Neural Interfaces
            </p>
            <div className="text-center">
              <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">NEW</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-3 text-center">✨</div>
            <h3 className="text-lg font-bold mb-2 text-center">Holographic Reality</h3>
            <p className="text-orange-100 mb-4 text-center text-xs">
              Photorealistic Holograms
            </p>
            <div className="text-center">
              <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full">BETA</span>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <a href="/pages/UltimateTechShowcase2025" className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            Explore All Technologies →
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;