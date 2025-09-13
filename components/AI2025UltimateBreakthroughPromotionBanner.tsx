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
    <div className="relative bg-gradient-to-r from-red-900 via-purple-900 to-blue-900 text-white py-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-purple-600/20 to-blue-600/20 animate-pulse"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <span className="text-2xl animate-bounce">🚀</span>
              <span className="font-bold text-lg">BREAKTHROUGH ANNOUNCEMENT</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/30"></div>
            <div className="text-sm md:text-base">
              <span className="text-yellow-400 font-bold">AI 2025 Ultimate Revolution</span> - 
              <span className="text-green-400 font-bold"> 10,000% ROI</span> Guaranteed
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
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold py-2 px-6 rounded-full text-sm transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Learn More
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white/30 hover:border-white/60 text-white font-bold py-2 px-6 rounded-full text-sm transition-all duration-300 hover:bg-white/10"
            >
              Get Access
            </Link>
          </div>
        </div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-2 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-3 right-1/3 w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-2 left-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}