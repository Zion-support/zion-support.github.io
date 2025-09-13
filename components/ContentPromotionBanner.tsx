import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ContentPromotionBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotions = [
    {
      id: 1,
      title: "🚀 AI 2025 Ultimate Breakthrough Revolution",
      description: "10,000% ROI with autonomous operations and quantum computing integration",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      badge: "BREAKTHROUGH",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
      borderColor: "border-red-200"
    },
    {
      id: 2,
      title: "🔮 AI 2026-2030 Future Predictions",
      description: "Revolutionary predictions: quantum-neural fusion, consciousness AI, infinite ROI",
      link: "/ai-2026-2030-future-predictions",
      badge: "REVOLUTIONARY",
      color: "from-cyan-500 to-purple-500",
      bgColor: "from-cyan-50 to-purple-50",
      borderColor: "border-cyan-200"
    },
    {
      id: 3,
      title: "⚛️ Quantum Computing Breakthroughs 2025",
      description: "25,000% ROI with quantum supremacy and error-corrected quantum computers",
      link: "/quantum-computing-breakthroughs-2025",
      badge: "QUANTUM",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200"
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
    <div className="relative bg-gradient-to-r from-gray-900 to-black py-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors p-1"
            aria-label="Close banner"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Promotion content */}
          <div className="flex-1 mx-4">
            <div className="text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-sm font-bold mb-2 animate-pulse">
                🎉 NEW CONTENT AVAILABLE
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                {currentPromotion.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300 mb-3">
                {currentPromotion.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Link
                  href={currentPromotion.link}
                  className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${currentPromotion.color} text-white rounded-lg font-semibold text-sm hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
                >
                  Explore Now
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <span className={`inline-flex items-center px-3 py-2 bg-gradient-to-r ${currentPromotion.bgColor} ${currentPromotion.borderColor} border rounded-lg text-sm font-semibold text-gray-800`}>
                  {currentPromotion.badge}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex space-x-2">
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
    </div>
  );
}