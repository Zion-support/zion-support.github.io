import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2026: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const messages = [
    "🌟 NEW: Revolutionary Tech Insights 2026 - Discover groundbreaking technological insights!",
    "⚡ NEW: Advanced Tech Solutions 2026 - Cutting-edge solutions that push boundaries!",
    "🔮 NEW: Future Tech Vision 2026 - Envision the future of technology and humanity!"
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white py-4 px-6 rounded-lg shadow-lg mb-8 animate-pulse">
        <div className="container mx-auto flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center space-x-4">
            <div className="text-2xl">🚀</div>
            <div className="text-lg font-semibold">
              {messages[currentMessage]}
            </div>
          </div>
          <div className="flex space-x-2">
            <a 
              href="/pages/RevolutionaryTechInsights2026"
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-300 font-semibold text-sm hover:scale-105"
            >
              Explore Insights
            </a>
            <a 
              href="/pages/AdvancedTechSolutions2026"
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-300 font-semibold text-sm hover:scale-105"
            >
              View Solutions
            </a>
            <a 
              href="/pages/FutureTechVision2026"
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-300 font-semibold text-sm hover:scale-105"
            >
              See Vision
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;