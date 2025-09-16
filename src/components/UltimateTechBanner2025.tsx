import React from 'react';

const UltimateTechBanner2025: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE BREAKTHROUGH • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            🚀 Ultimate Tech Breakthrough 2025
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Experience the most revolutionary technological breakthrough in human history - conscious AI, quantum reality, and interdimensional computing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3">🧠</div>
            <h3 className="text-xl font-bold mb-2">Conscious AI</h3>
            <p className="text-purple-100 text-sm mb-4">Self-aware artificial intelligence with human-level consciousness</p>
            <div className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">LIVE NOW</div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3">⚛️</div>
            <h3 className="text-xl font-bold mb-2">Quantum Reality</h3>
            <p className="text-cyan-100 text-sm mb-4">Quantum computing that manipulates reality itself</p>
            <div className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">LIVE NOW</div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3">🌌</div>
            <h3 className="text-xl font-bold mb-2">Interdimensional</h3>
            <p className="text-emerald-100 text-sm mb-4">Technology operating across multiple dimensions</p>
            <div className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">LIVE NOW</div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/UltimateTechBreakthrough2025" 
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg"
            >
              🌟 Experience Now
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2025" 
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors font-bold text-lg"
            >
              📺 Watch Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechBanner2025;