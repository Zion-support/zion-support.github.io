import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateBreakthroughPromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "🚀 AI 2025 Ultimate Breakthrough Revolution",
      subtitle: "Experience 5,000% ROI with Revolutionary AI Technologies",
      cta: "Discover Breakthrough",
      href: "/ai-2025-ultimate-breakthrough-revolution",
      bg: "from-red-500 to-pink-500",
      text: "text-white"
    },
    {
      title: "🏆 Ultimate Success Stories",
      subtitle: "Fortune 500 Companies Achieving 5,000% ROI",
      cta: "View Case Study",
      href: "/case-studies/ai-2025-ultimate-breakthrough-success",
      bg: "from-green-500 to-emerald-500",
      text: "text-white"
    },
    {
      title: "🔮 Ultimate Trends & Predictions",
      subtitle: "12 Revolutionary AI Trends for 2025",
      cta: "Read Predictions",
      href: "/blog/ai-2025-ultimate-trends-predictions",
      bg: "from-purple-500 to-indigo-500",
      text: "text-white"
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black border-b border-gray-700">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-purple-600/10"></div>
      <div className="relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Left side - Main content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center animate-spin">
                    <span className="text-2xl">🚀</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    {slides[currentSlide].subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - CTA and indicators */}
            <div className="flex items-center space-x-4">
              {/* Slide indicators */}
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-white scale-125' 
                        : 'bg-gray-500 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href={slides[currentSlide].href}
                className={`bg-gradient-to-r ${slides[currentSlide].bg} hover:opacity-90 ${slides[currentSlide].text} font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg text-sm md:text-base transition-all duration-300 transform hover:scale-105 whitespace-nowrap`}
              >
                {slides[currentSlide].cta}
              </Link>

              {/* Close button */}
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors duration-200 p-1"
                aria-label="Close banner"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-5000 ease-linear"
             style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}>
        </div>
      </div>
    </div>
  );
};

export default AI2025UltimateBreakthroughPromotionBanner;