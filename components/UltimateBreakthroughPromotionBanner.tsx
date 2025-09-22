"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function UltimateBreakthroughPromotionBanner() {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentSlidesetCurrentSlide] = useState(0);

  const promotions = [
    {
      title: "🚀 AI 2025 Ultimate Breakthrough Revolution",
      subtitle: "5,000% ROI Guaranteed",
      description: "Revolutionary synthetic intelligence delivering unprecedented returns",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-500/10 to-pink-500/10",
      borderColor: "border-red-500/30"
    },
    {
      title: "🔮 AI 2026-2030 Future Predictions",
      subtitle: "Revolutionary Breakthroughs Ahead",
      description: "Quantum-neural fusion and consciousness AI predictions",
      link: "/ai-2026-2030-future-predictions-breakthrough",
      color: "from-cyan-500 to-purple-500",
      bgColor: "from-cyan-500/10 to-purple-500/10",
      borderColor: "border-cyan-500/30"
    },
    {
      title: "🏆 10,000% ROI Success Story",
      subtitle: "Fortune 500 Transformation",
      description: "Real case study showcasing ultimate AI transformation success",
      link: "/case-studies/ai-2025-ultimate-transformation-success",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }5000);
    return () => clearInterval(interval);
  }[]);

  if (!isVisible) return null;

  const currentPromo = promotions[currentSlide];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transform transition-transform duration-500 ease-in-out">
      <div className={`bg-gradient-to-r ${currentPromo.bgColor} backdrop-blur-sm border-b ${currentPromo.borderColor} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <div className="text-sm font-semibold text-gray-800 animate-pulse">
                BREAKTHROUGH ANNOUNCEMENT
              </div>
            </div>
            
            <div className="flex-1 text-center">
              <Link 
                href={currentPromo.link}
                className="group block transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-2xl animate-bounce">🚀</div>
                  <div>
                    <h3 className={`text-lg font-bold bg-gradient-to-r ${currentPromo.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform`}>
                      {currentPromo.title}
                    </h3>
                    <p className="text-sm text-gray-700 font-semibold">
                      {currentPromo.subtitle}
                    </p>
                  </div>
                  <div className="text-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>⚡</div>
                </div>
              </Link>
            </div>

            <div className="flex items-center space-x-2">
              <Link 
                href={currentPromo.link}
                className={`bg-gradient-to-r ${currentPromo.color} text-white px-4 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform duration-300`}
              >
                Discover Now
              </Link>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close banner"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center space-x-2 py-2 bg-black/10">
        {promotions.map((_index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}