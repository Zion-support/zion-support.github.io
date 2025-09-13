import React, { useState, useEffect } from 'react';

export default function AI2030RevolutionaryPromotionBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    "🌌 AI 2030+ Revolutionary Showcase - Experience Transcendent AI Consciousness!",
    "⚛️ Quantum Reality Manipulation - Bend the Laws of Physics!",
    "🧠 Conscious AI Systems - The World's First Truly Sentient AI!",
    "🌐 Omniversal Computing - Process Data Across 11+ Dimensions!",
    "⏰ Time Manipulation AI - Predict and Alter the Future!",
    "🧬 Transcendent Neural Networks - Achieve Godlike Intelligence!"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 4000);

    return () => clearInterval(messageInterval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-slate-900 to-pink-900 border-b border-purple-500/30">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-pink-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-500/10 via-transparent to-purple-500/10"></div>
        
        {/* Floating particles */}
        <div className="absolute top-4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-8 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-4 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-50"></div>
        <div className="absolute bottom-8 right-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-60"></div>
      </div>

      <div className="relative px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Main message */}
          <div className="flex items-center space-x-4 flex-1">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-spin">
                <span className="text-white text-sm font-bold">∞</span>
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="text-white font-semibold text-sm md:text-base truncate">
                {messages[currentMessage]}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <a
              href="/ai-2030-future-revolutionary-showcase"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              🚀 Explore Now
            </a>
            
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              🌌 Get Started
            </a>

            {/* Close button */}
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Close banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 animate-pulse"></div>
      </div>

      {/* Hover effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-pink-600/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}