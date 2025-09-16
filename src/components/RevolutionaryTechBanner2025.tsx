import React, { useState, useEffect } from 'react';

const RevolutionaryTechBanner2025: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState(0);

  const bannerMessages = [
    "🚀 NEW: Revolutionary Tech Breakthrough 2025 - Experience AI Consciousness!",
    "⚡ BREAKTHROUGH: Quantum Reality Engine - Manipulate Reality Itself!",
    "🧬 REVOLUTIONARY: Neural Interface Technology - Control with Your Mind!",
    "🌟 BREAKTHROUGH: Consciousness Transfer - Achieve Digital Immortality!",
    "🌌 NEW: Interdimensional Computing - Access Parallel Universe Power!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % bannerMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [bannerMessages.length]);

  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white py-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-cyan-600/50 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Animated Message */}
          <div className="flex-1 text-center">
            <div className="text-lg font-bold animate-bounce">
              {bannerMessages[currentMessage]}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-4 ml-8">
            <a
              href="/pages/RevolutionaryTechBreakthrough2025"
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-sm whitespace-nowrap"
            >
              Explore Now →
            </a>
            <a
              href="/pages/RevolutionaryTechBreakthrough2025"
              className="bg-white text-purple-600 px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm whitespace-nowrap"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-2 left-4 text-2xl animate-bounce">🚀</div>
      <div className="absolute top-2 right-4 text-2xl animate-bounce delay-1000">⚡</div>
      <div className="absolute bottom-2 left-1/4 text-2xl animate-bounce delay-500">🧬</div>
      <div className="absolute bottom-2 right-1/4 text-2xl animate-bounce delay-1500">🌟</div>
    </div>
  );
};

export default RevolutionaryTechBanner2025;