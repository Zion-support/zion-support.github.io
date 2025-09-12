import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltraContentPromotionBanner2026 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "🚀 NEW: AI Implementation Master Guide 2026",
      subtitle: "Complete toolkit with 50+ templates, frameworks, and proven strategies",
      cta: "Download Free Toolkit",
      href: "/resources/ai-implementation-master-guide-2026",
      bg: "from-purple-600 via-blue-600 to-indigo-600"
    },
    {
      title: "📚 NEW: Enterprise AI Masterclass Series",
      subtitle: "7-Phase framework for successful AI transformation with real-world case studies",
      cta: "Start Learning",
      href: "/blog/ai-2025-enterprise-implementation-masterclass",
      bg: "from-green-600 via-teal-600 to-cyan-600"
    },
    {
      title: "🏆 NEW: $2.8B Retail Transformation Case Study",
      subtitle: "Discover how a global retail giant achieved unprecedented growth with AI",
      cta: "Read Case Study",
      href: "/case-studies/ai-transformation-global-retail-giant-2026",
      bg: "from-orange-600 via-red-600 to-pink-600"
    }
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transform transition-all duration-500 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className={`bg-gradient-to-r ${slides[currentSlide].bg} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-sm sm:text-base font-bold truncate">
                    {slides[currentSlide].title}
                  </h2>
                  <p className="text-xs sm:text-sm opacity-90 truncate">
                    {slides[currentSlide].subtitle}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3 ml-4">
              <Link
                href={slides[currentSlide].href}
                className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                {slides[currentSlide].cta}
              </Link>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white hover:text-gray-200 transition-colors p-1"
                aria-label="Close banner"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltraContentPromotionBanner2026;