import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AI2025RevolutionaryContentPromotionBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);

  const promotionalContent = [
    {
      title: "🚀 AI 2025 Ultimate Breakthrough Revolution",
      description: "Experience 10,000% ROI with transcendent intelligence",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      badge: "BREAKTHROUGH",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "🏆 Global Transformation Success Story",
      description: "See how Fortune 500 achieved 10,000% ROI in 30 days",
      link: "/case-studies/ai-2025-global-transformation-breakthrough",
      badge: "SUCCESS",
      color: "from-green-500 to-blue-500"
    },
    {
      title: "🔮 AI 2025 Revolutionary Trends & Predictions",
      description: "Discover the future of AI that transforms reality",
      link: "/blog/ai-2025-revolutionary-trends-predictions",
      badge: "FUTURE",
      color: "from-purple-500 to-pink-500"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % promotionalContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const current = promotionalContent[currentContent];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-blue-500/10 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 text-black text-sm font-bold mb-3 animate-bounce">
              ⚡ {current.badge} ANNOUNCEMENT
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {current.title}
            </h2>
            <p className="text-lg text-gray-300 mb-4 max-w-2xl">
              {current.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link 
                href={current.link}
                className={`bg-gradient-to-r ${current.color} hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg`}
              >
                Explore Now
              </Link>
              <Link 
                href="/content-showcase"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold py-3 px-6 rounded-lg transition-all duration-300"
              >
                View All Content
              </Link>
            </div>
          </div>
          
          {/* Visual elements */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-6xl animate-spin">
                🚀
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold animate-pulse">
                NEW
              </div>
            </div>
          </div>
        </div>
        
        {/* Progress indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {promotionalContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentContent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentContent 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        aria-label="Close banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}