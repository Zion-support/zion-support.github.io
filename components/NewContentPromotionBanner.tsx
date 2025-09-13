import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NewContentPromotionBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotions = [
    {
      title: "🚀 AI 2025 Ultimate Breakthrough Revolution",
      description: "Experience the most revolutionary AI breakthrough in human history with 10,000% ROI",
      href: "/ai-2025-ultimate-breakthrough-revolution",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50",
      borderColor: "border-red-200"
    },
    {
      title: "⚛️ Quantum Computing Breakthroughs 2030",
      description: "Revolutionary quantum technologies that will reshape reality itself",
      href: "/quantum-computing-breakthroughs-2030",
      gradient: "from-cyan-500 to-purple-500",
      bgGradient: "from-cyan-50 to-purple-50",
      borderColor: "border-cyan-200"
    },
    {
      title: "🤖 AI 2026 Advanced Automation Mastery",
      description: "Master the future of automation with 5,000% ROI and autonomous operations",
      href: "/ai-2026-advanced-automation-mastery",
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50",
      borderColor: "border-blue-200"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [promotions.length]);

  if (!isVisible) return null;

  const currentPromotion = promotions[currentSlide];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black py-4">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left side - Promotion content */}
          <div className="flex-1">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex-1">
                <Link 
                  href={currentPromotion.href}
                  className="group block"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-semibold text-white group-hover:text-yellow-300 transition-colors">
                      NEW CONTENT:
                    </span>
                    <span className="text-lg font-bold text-white group-hover:text-yellow-300 transition-colors">
                      {currentPromotion.title}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors mt-1">
                    {currentPromotion.description}
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - CTA buttons */}
          <div className="flex items-center space-x-3">
            <Link 
              href={currentPromotion.href}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-sm rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Explore Now
            </Link>
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

        {/* Slide indicators */}
        <div className="flex justify-center mt-3 space-x-2">
          {promotions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-yellow-400 w-6' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-2 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute top-4 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-2 left-1/4 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}