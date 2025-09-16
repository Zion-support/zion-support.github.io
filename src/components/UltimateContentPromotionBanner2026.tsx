import React, { useState, useEffect } from 'react';

const UltimateContentPromotionBanner2026: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    "🚀 Autonomous Business AI - 300% Efficiency Gains",
    "⚛️ Quantum ML Platform - 1000x Faster Processing", 
    "🧠 Conscious AI Systems - Genuine Self-Awareness",
    "🔗 Neural Interfaces - Human-AI Symbiosis",
    "⚡ Edge AI Revolution - Ultra-Low Latency"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <span className="text-lg">✨</span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-1">
              Revolutionary Content 2026 - Now Available!
            </h3>
            <p className="text-sm opacity-90 animate-pulse">
              {features[currentFeature]}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <a
            href="/pages/NewContentShowcase2026"
            className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 text-sm shadow-md"
          >
            Explore Now
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-gray-200 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-white bg-opacity-10 rounded-full animate-ping"></div>
        <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-white bg-opacity-10 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute top-1/2 -right-8 w-4 h-4 bg-white bg-opacity-10 rounded-full animate-ping animation-delay-2000"></div>
      </div>
    </div>
  );
};

export default UltimateContentPromotionBanner2026;