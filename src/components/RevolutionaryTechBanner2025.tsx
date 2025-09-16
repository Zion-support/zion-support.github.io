import React from 'react';

const RevolutionaryTechBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white py-10 mb-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-8 right-1/3 w-2 h-2 bg-white/25 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white/20 rounded-full animate-bounce"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-sm font-bold mb-4 animate-pulse">
            🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Revolutionary Tech Showcase 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-6 max-w-4xl mx-auto">
            Experience the most advanced technology content featuring conscious AI, 
            quantum computing, and interdimensional technology
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
              <span className="text-2xl">🤖</span>
              <span className="font-semibold">Conscious AI</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
              <span className="text-2xl">⚡</span>
              <span className="font-semibold">Quantum Computing</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
              <span className="text-2xl">🧬</span>
              <span className="font-semibold">Neural Interfaces</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
              <span className="text-2xl">🌌</span>
              <span className="font-semibold">Interdimensional Tech</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
              <span className="text-2xl">🔮</span>
              <span className="font-semibold">Reality Control</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/pages/RevolutionaryTechShowcase2025" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              Explore Showcase →
            </a>
            <a 
              href="/pages/UltimateTechBreakthrough2025" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg"
            >
              View Breakthrough
            </a>
            <a 
              href="/pages/NextGenTechRevolution2025" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              Tech Revolution
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBanner2025;