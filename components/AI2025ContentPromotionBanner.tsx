import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AI2025ContentPromotionBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotionalContent = [
    {
      title: "🚀 AI 2025 Revolutionary Breakthroughs",
      description: "Discover the groundbreaking AI innovations that will reshape industries in 2025",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500",
      bgGradient: "from-red-50 to-pink-50",
      borderColor: "border-red-500"
    },
    {
      title: "🏆 2000% ROI Success Story",
      description: "How a Fortune 500 company achieved unprecedented transformation",
      href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
      badge: "CASE STUDY",
      badgeColor: "bg-green-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-500"
    },
    {
      title: "📚 AI 2025 Content Showcase",
      description: "Explore our comprehensive collection of AI breakthroughs and insights",
      href: "/ai-2025-content-showcase",
      badge: "NEW",
      badgeColor: "bg-blue-500",
      bgGradient: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-500"
    }
  ];

  useEffect(() => {
    // Show banner after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-rotate slides every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [promotionalContent.length]);

  if (!isVisible) return null;

  const currentContent = promotionalContent[currentSlide];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transform transition-transform duration-500 ease-in-out">
      <div className={`bg-gradient-to-r ${currentContent.bgGradient} border-b-4 ${currentContent.borderColor} shadow-lg`}>
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className={`${currentContent.badgeColor} text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse`}>
                  {currentContent.badge}
                </span>
                <span className="text-sm font-semibold text-gray-800">
                  {currentContent.title}
                </span>
              </div>
              <p className="text-sm text-gray-700 hidden md:block">
                {currentContent.description}
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              <Link 
                href={currentContent.href}
                className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
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
          
          {/* Slide indicators */}
          <div className="flex justify-center space-x-2 mt-2">
            {promotionalContent.map((_, index) => (
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
      </div>
    </div>
  );
}