import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AI2025ContentPromotionBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotions = [
    {
      title: "🚀 AI 2025: Advanced Autonomous Systems",
      description: "Discover breakthrough autonomous systems with 2,500% average ROI",
      href: "/blog/ai-2025-advanced-autonomous-systems",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-100 text-red-800",
      bgColor: "from-red-50 to-pink-50"
    },
    {
      title: "🏆 Manufacturing Revolution: 8,500% ROI",
      description: "See how Fortune 500 companies achieved unprecedented results",
      href: "/case-studies/ai-2025-autonomous-manufacturing-revolution",
      badge: "SUCCESS STORY",
      badgeColor: "bg-green-100 text-green-800",
      bgColor: "from-green-50 to-blue-50"
    },
    {
      title: "📚 AI 2025 Content Showcase",
      description: "Explore our comprehensive collection of breakthrough AI content",
      href: "/ai-2025-content-showcase",
      badge: "NEW",
      badgeColor: "bg-blue-100 text-blue-800",
      bgColor: "from-blue-50 to-purple-50"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const currentPromotion = promotions[currentSlide];

  return (
    <div className="relative overflow-hidden">
      <div className={`bg-gradient-to-r ${currentPromotion.bgColor} p-4 transition-all duration-500`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${currentPromotion.badgeColor} animate-pulse`}>
                  {currentPromotion.badge}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {currentPromotion.title}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {currentPromotion.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href={currentPromotion.href}
                className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-sm"
              >
                Explore Now
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
      
      {/* Slide indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {promotions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-gray-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}