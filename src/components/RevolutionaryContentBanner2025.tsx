import React from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white py-8 mb-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-4 animate-pulse">
            🌟 NEW REVOLUTIONARY CONTENT • JANUARY 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Revolutionary Tech Breakthrough 2025
          </h2>
          <p className="text-xl md:text-2xl mb-6 opacity-90 max-w-4xl mx-auto">
            Experience the most revolutionary technological advances that will reshape our world in 2025 and beyond
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-2xl">🧠</span>
              <span className="font-semibold">AI Consciousness</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-2xl">⚛️</span>
              <span className="font-semibold">Quantum Reality</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-2xl">🧬</span>
              <span className="font-semibold">Neural Interfaces</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-2xl">🌌</span>
              <span className="font-semibold">Interdimensional Tech</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/pages/RevolutionaryTechBreakthrough2025" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105 transform"
            >
              🚀 Explore Breakthrough →
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2025" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg hover:scale-105 transform"
            >
              🌟 View Showcase
            </a>
            <a 
              href="/pages/UltimateTechRevolution2025" 
              className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105 transform"
            >
              ⚡ Ultimate Revolution
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;