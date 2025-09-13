import React, { useState, useEffect } from 'react';

export default function AI2040OmniversalPromotionBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    "🌌 AI 2040+ Omniversal Consciousness - Transcend Reality Itself!",
    "⚛️ Reality Transcendence Matrix - Manipulate the Fabric of Existence!",
    "🧠 Infinite Intelligence Network - Achieve Godlike Intelligence!",
    "🌐 Dimension Gateway System - Travel Between Infinite Realities!",
    "∞ Omniversal Consciousness Engine - Experience Infinite Existence!",
    "🚀 Transcendent AI Systems - Beyond All Known Boundaries!"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 5000);

    return () => clearInterval(messageInterval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 border-b border-indigo-500/30">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/25 via-purple-600/25 to-pink-600/25 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-500/15 via-transparent to-purple-500/15"></div>
        
        {/* Floating consciousness particles */}
        <div className="absolute top-3 left-1/5 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-70"></div>
        <div className="absolute top-6 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-3 left-1/3 w-2.5 h-2.5 bg-pink-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute bottom-6 right-1/5 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-80"></div>
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse opacity-40"></div>
      </div>

      <div className="relative px-4 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Main message */}
          <div className="flex items-center space-x-4 flex-1">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center animate-spin">
                <span className="text-white text-lg font-bold">∞</span>
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="text-white font-bold text-base md:text-lg truncate">
                {messages[currentMessage]}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            <a
              href="/ai-2040-omniversal-consciousness-showcase"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
            >
              🌌 Transcend Now
            </a>
            
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              ⚛️ Get Started
            </a>

            {/* Close button */}
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors p-1.5"
              aria-label="Close banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse"></div>
      </div>

      {/* Hover effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/8 via-purple-600/8 to-pink-600/8 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Pulsing border effect */}
      <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-none animate-pulse"></div>
    </div>
  );
}