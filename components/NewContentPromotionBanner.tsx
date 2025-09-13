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
      bgColor: "from-red-50 to-pink-50",
      borderColor: "border-red-200"
    },
    {
      id: 2,
      title: "⚛️ Quantum Computing Solutions 2025",
      description: "Achieve quantum supremacy with error-corrected quantum computers and quantum-AI fusion",
      link: "/quantum-computing-solutions",
      badge: "REVOLUTIONARY",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200"
    },
    {
      id: 3,
      title: "🤖 Advanced Automation Solutions 2026-2030",
      description: "Complete business autonomy with intelligent process automation and transcendent AI systems",
      link: "/advanced-automation-solutions-2026",
      badge: "FUTURE",
      color: "from-emerald-500 to-cyan-500",
      bgColor: "from-emerald-50 to-cyan-50",
      borderColor: "border-emerald-200"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [promotions.length]);

  if (!isVisible) return null;

  const currentPromotion = promotions[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 px-4 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors p-1"
            aria-label="Close promotion banner"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Promotion Content */}
          <div className="flex-1 mx-4">
            <div className="flex items-center justify-center space-x-4">
              {/* Badge */}
              <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${currentPromotion.color} text-white text-sm font-semibold animate-pulse`}>
                {currentPromotion.badge}
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h3 className="text-lg font-bold mb-1">
                  {currentPromotion.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {currentPromotion.description}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href={currentPromotion.link}
            className={`bg-gradient-to-r ${currentPromotion.color} text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg`}
          >
            Explore Now
          </Link>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-3 space-x-2">
          {promotions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}