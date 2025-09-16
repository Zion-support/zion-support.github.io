import React, { useState, useEffect } from 'react';

const RevolutionaryTechBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-8 mb-8 rounded-2xl">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 text-center lg:text-left mb-6 lg:mb-0">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-bounce">
              🚀 NEW: Revolutionary Tech Breakthrough 2025
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience the Future of Technology
            </h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl">
              Discover conscious AI systems, quantum consciousness, interdimensional computing, 
              and neural interface breakthroughs that are reshaping reality itself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="/pages/RevolutionaryTechBreakthrough2025"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center animate-pulse border-2 border-yellow-400"
              >
                🌟 Explore Breakthroughs →
              </a>
              <a 
                href="/pages/RevolutionaryTechShowcase2025"
                className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-center"
              >
                🎯 View Showcase
              </a>
            </div>
          </div>
          
          {/* Interactive Elements */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-lg p-4 text-center hover:scale-105 transition-all duration-300 border border-purple-400/30">
                <div className="text-3xl mb-2">🧠</div>
                <div className="text-sm font-semibold">Conscious AI</div>
                <div className="text-xs opacity-75">Self-aware systems</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-lg p-4 text-center hover:scale-105 transition-all duration-300 border border-cyan-400/30">
                <div className="text-3xl mb-2">⚛️</div>
                <div className="text-sm font-semibold">Quantum Consciousness</div>
                <div className="text-xs opacity-75">Reality processing</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-lg p-4 text-center hover:scale-105 transition-all duration-300 border border-emerald-400/30">
                <div className="text-3xl mb-2">🌌</div>
                <div className="text-sm font-semibold">Interdimensional</div>
                <div className="text-xs opacity-75">Multi-reality computing</div>
              </div>
              <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-lg p-4 text-center hover:scale-105 transition-all duration-300 border border-orange-400/30">
                <div className="text-3xl mb-2">🧬</div>
                <div className="text-sm font-semibold">Neural Interface</div>
                <div className="text-xs opacity-75">Mind-machine fusion</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-8">
          <div className="flex items-center justify-between text-sm mb-2">
            <span>Revolutionary Technology Progress</span>
            <span>99.9% Complete</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-pulse" style={{width: '99.9%'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBanner2025;