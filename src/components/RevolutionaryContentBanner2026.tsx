import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2026: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotionalMessages = [
    "🌟 NEW: Revolutionary Tech Showcase 2026 - Experience AI Consciousness & Quantum Reality",
    "🚀 BREAKTHROUGH: Interactive Content Showcase - Explore Future Technologies",
    "⚡ ULTIMATE: Neural Interface Evolution - Direct Brain-Computer Communication",
    "🧠 REVOLUTIONARY: Synthetic Intelligence Core - Autonomous AI Agents",
    "🚀 INTERDIMENSIONAL: Space Technology 2026 - Beyond Our Dimension"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % promotionalMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [promotionalMessages.length]);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-6 mb-8">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Main Message */}
          <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold animate-fade-in">
                {promotionalMessages[currentMessage]}
              </h3>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/pages/RevolutionaryTechShowcase2026"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Now →
            </a>
            <a
              href="/pages/InteractiveContentShowcase2026"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold text-lg"
            >
              Interactive Demo
            </a>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white p-2 transition-colors duration-300"
              title="Close banner"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="w-full bg-white/20 rounded-full h-1">
            <div 
              className="bg-gradient-to-r from-cyan-400 to-purple-400 h-1 rounded-full transition-all duration-300"
              style={{ 
                width: `${((currentMessage + 1) / promotionalMessages.length) * 100}%` 
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 left-4 text-4xl animate-bounce" style={{ animationDelay: '0s' }}>🚀</div>
      <div className="absolute top-4 right-4 text-4xl animate-bounce" style={{ animationDelay: '1s' }}>⚡</div>
      <div className="absolute bottom-4 left-1/4 text-3xl animate-bounce" style={{ animationDelay: '2s' }}>🧠</div>
      <div className="absolute bottom-4 right-1/4 text-3xl animate-bounce" style={{ animationDelay: '3s' }}>🧬</div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;