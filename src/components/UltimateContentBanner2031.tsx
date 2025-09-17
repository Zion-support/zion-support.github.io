import React, { useState, useEffect } from 'react';

const UltimateContentBanner2031: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const messages = [
    "🌟 NEW: Ultimate Tech Breakthrough 2031 - Experience Conscious AI & Quantum Computing",
    "🚀 REVOLUTIONARY: Interactive Tech Showcase 2031 - Multi-Dimensional Technology Demo",
    "🔮 ULTIMATE: Content Showcase 2031 - Neural Interface Content Creation",
    "⚡ BREAKTHROUGH: Interdimensional Computing - Access Infinite Processing Power"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [messages.length]);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-4 px-4 mb-8 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold">LIVE</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/30"></div>
          <div className="text-sm font-medium">
            {messages[currentMessage]}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="/pages/UltimateTechBreakthrough2031" 
              className="text-sm font-semibold hover:text-purple-300 transition-colors duration-300"
            >
              Tech Breakthrough →
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2031" 
              className="text-sm font-semibold hover:text-purple-300 transition-colors duration-300"
            >
              Tech Showcase →
            </a>
            <a 
              href="/pages/UltimateContentShowcase2031" 
              className="text-sm font-semibold hover:text-purple-300 transition-colors duration-300"
            >
              Content Showcase →
            </a>
          </div>
          
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/70 hover:text-white transition-colors duration-300"
            aria-label="Close banner"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile responsive message */}
      <div className="md:hidden mt-2 text-center">
        <div className="text-sm font-medium">
          {messages[currentMessage]}
        </div>
        <div className="flex justify-center space-x-4 mt-2">
          <a 
            href="/pages/UltimateTechBreakthrough2031" 
            className="text-xs font-semibold hover:text-purple-300 transition-colors duration-300"
          >
            Tech →
          </a>
          <a 
            href="/pages/RevolutionaryTechShowcase2031" 
            className="text-xs font-semibold hover:text-purple-300 transition-colors duration-300"
          >
            Showcase →
          </a>
          <a 
            href="/pages/UltimateContentShowcase2031" 
            className="text-xs font-semibold hover:text-purple-300 transition-colors duration-300"
          >
            Content →
          </a>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2031;