'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughPromotionBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotions = [
    {
      title: "🚀 AI 2025 Ultimate Breakthrough Revolution",
      subtitle: "2,500-5,000% ROI • 99.9% Accuracy • 10,000x Faster",
      cta: "Explore the Revolution",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      bgColor: "from-purple-600 to-blue-600",
      textColor: "text-white"
    },
    {
      title: "🏆 10,000% ROI Success Story",
      subtitle: "Fortune 500 Company Achieves Unprecedented Results",
      cta: "View Case Study",
      link: "/case-studies/ai-2025-global-transformation-breakthrough",
      bgColor: "from-green-600 to-blue-600",
      textColor: "text-white"
    },
    {
      title: "🧮 AI 2025 ROI Calculator",
      subtitle: "Calculate Your Potential Return on Investment",
      cta: "Calculate ROI",
      link: "/tools/ai-2025-roi-calculator",
      bgColor: "from-blue-600 to-purple-600",
      textColor: "text-white"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [promotions.length]);

  if (!isVisible) return null;

  const currentPromotion = promotions[currentSlide];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transform transition-all duration-500 ease-in-out">
      <div className={`bg-gradient-to-r ${currentPromotion.bgColor} ${currentPromotion.textColor} py-3 px-4 shadow-lg`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-1">{currentPromotion.title}</h3>
              <p className="text-sm opacity-90">{currentPromotion.subtitle}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              href={currentPromotion.link}
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              {currentPromotion.cta}
            </Link>
            
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div 
            className="h-full bg-white transition-all duration-5000 ease-linear"
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
}