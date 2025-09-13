import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NewContentPromotionBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotions = [
    {
      id: 1,
      title: "🚀 AI 2025 Ultimate Breakthrough Revolution",
      description: "Experience the most revolutionary AI breakthrough in history with 2,500-5,000% ROI",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      badge: "BREAKTHROUGH",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50"
    },
    {
      id: 2,
      title: "⚛️ Quantum Computing Solutions 2025",
      description: "Revolutionary quantum computing delivering breakthrough performance and quantum supremacy",
      link: "/quantum-computing-solutions",
      badge: "REVOLUTIONARY",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50"
    },
    {
      id: 3,
      title: "🤖 Advanced Automation Solutions 2026-2030",
      description: "100% autonomous operations with 5,000%+ ROI across all business processes",
      link: "/advanced-automation-solutions-2026",
      badge: "FUTURE",
      color: "from-emerald-500 to-cyan-500",
      bgColor: "from-emerald-50 to-cyan-50"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentPromotion = promotions[currentSlide];

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side - Promotion content */}
        <div className="flex-1 flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl animate-bounce">🔥</span>
            <span className="text-sm font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
              NEW CONTENT
            </span>
          </div>
          
          <div className="flex-1 min-w-0">
            <Link 
              href={currentPromotion.link}
              className="group block hover:opacity-90 transition-opacity duration-300"
            >
              <div className="flex items-center space-x-3">
                <div className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${currentPromotion.color} text-white animate-pulse`}>
                  {currentPromotion.badge}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm md:text-base font-bold truncate group-hover:text-yellow-300 transition-colors">
                    {currentPromotion.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300 truncate">
                    {currentPromotion.description}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Right side - CTA and controls */}
        <div className="flex items-center space-x-4">
          {/* Slide indicators */}
          <div className="flex space-x-1">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href={currentPromotion.link}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 rounded-lg text-sm font-bold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
          >
            Explore Now
          </Link>

          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors duration-300 p-1"
            aria-label="Close banner"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-5000 ease-linear"
           style={{ width: `${((currentSlide + 1) / promotions.length) * 100}%` }} />
    </div>
  );
}