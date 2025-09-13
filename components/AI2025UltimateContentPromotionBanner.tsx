import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);

  const featuredContent = [
    {
      title: "AI 2025 Ultimate Breakthrough Success",
      description: "5000% ROI Case Study - Revolutionary AI Implementation",
      link: "/case-studies/ai-2025-ultimate-breakthrough-success",
      badge: "BREAKTHROUGH",
      color: "from-red-500 to-pink-500",
      icon: "🚀"
    },
    {
      title: "AI 2026 Quantum-Neural Fusion",
      description: "15,000% ROI - Revolutionary Quantum Computing Breakthrough",
      link: "/blog/ai-2026-quantum-neural-fusion-breakthrough",
      badge: "REVOLUTIONARY",
      color: "from-purple-500 to-blue-500",
      icon: "⚛️"
    },
    {
      title: "AI 2035 Matter Creation",
      description: "Infinite ROI - Transcendent Consciousness Breakthrough",
      link: "/blog/ai-2035-matter-creation",
      badge: "TRANSCENDENT",
      color: "from-purple-500 to-pink-500",
      icon: "⚛️"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const current = featuredContent[currentContent];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl animate-pulse">🔥</span>
              <span className="font-bold text-lg">NEW BREAKTHROUGH CONTENT</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/30"></div>
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-sm opacity-90">Featured:</span>
              <span className="text-sm font-semibold">{current.icon} {current.title}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <span className="text-sm opacity-90">ROI Achieved:</span>
              <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs font-bold rounded">
                {currentContent === 0 ? "5000%" : currentContent === 1 ? "15,000%" : "∞"}
              </span>
            </div>
            <Link 
              href={current.link}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105"
            >
              Explore Now
            </Link>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Close banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Content */}
        <div className="md:hidden mt-3 pt-3 border-t border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-lg">{current.icon}</span>
                <span className="text-sm font-semibold">{current.title}</span>
              </div>
              <p className="text-xs opacity-90">{current.description}</p>
            </div>
            <div className="text-right">
              <div className="text-xs opacity-90 mb-1">ROI:</div>
              <div className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded">
                {currentContent === 0 ? "5000%" : currentContent === 1 ? "15,000%" : "∞"}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-8 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default AI2025UltimateContentPromotionBanner;