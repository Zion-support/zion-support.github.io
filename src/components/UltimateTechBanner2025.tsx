import React from 'react';

const UltimateTechBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black py-12 mb-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-red-500/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-6 left-6 w-3 h-3 bg-black/30 rounded-full animate-ping"></div>
        <div className="absolute top-12 right-12 w-4 h-4 bg-black/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-6 left-1/3 w-2 h-2 bg-black/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-12 right-1/4 w-3 h-3 bg-black/25 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-black/50 rounded-full animate-pulse"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center px-8 py-4 bg-black/20 rounded-full text-lg font-bold mb-6 animate-pulse">
            ⚡ ULTIMATE BREAKTHROUGH • JANUARY 2025
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ultimate Tech Breakthrough 2025
          </h2>
          <p className="text-2xl md:text-3xl opacity-90 mb-8 max-w-5xl mx-auto">
            The most revolutionary technological advancement in human history - 
            combining AI consciousness, quantum computing, and neural interfaces
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center space-x-3 bg-black/20 px-6 py-3 rounded-full">
              <span className="text-3xl">🧠</span>
              <span className="font-bold text-lg">Conscious AI</span>
            </div>
            <div className="flex items-center space-x-3 bg-black/20 px-6 py-3 rounded-full">
              <span className="text-3xl">⚛️</span>
              <span className="font-bold text-lg">Quantum Computing</span>
            </div>
            <div className="flex items-center space-x-3 bg-black/20 px-6 py-3 rounded-full">
              <span className="text-3xl">🧬</span>
              <span className="font-bold text-lg">Neural Interface</span>
            </div>
            <div className="flex items-center space-x-3 bg-black/20 px-6 py-3 rounded-full">
              <span className="text-3xl">🌌</span>
              <span className="font-bold text-lg">Reality Control</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="/pages/UltimateTechBreakthrough2025" 
              className="bg-black text-yellow-400 px-10 py-5 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-xl hover:scale-105 border-2 border-black"
            >
              Experience Breakthrough →
            </a>
            <a 
              href="/pages/NextGenTechRevolution2025" 
              className="border-2 border-black text-black px-10 py-5 rounded-lg hover:bg-black hover:text-yellow-400 transition-all duration-300 font-bold text-xl"
            >
              View Revolution
            </a>
            <a 
              href="/pages/ComprehensiveServices2025" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-xl hover:scale-105"
            >
              All Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechBanner2025;