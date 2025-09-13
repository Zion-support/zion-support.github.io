import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2036BreakthroughPromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const slides = [
    {
      title: "AI 2036 Breakthrough Showcase",
      subtitle: "Consciousness Transfer • Quantum Neural Fusion • Autonomous Evolution",
      cta: "Explore Breakthroughs",
      link: "/ai-2036-breakthrough-showcase",
      gradient: "from-purple-600 to-blue-600",
      bgGradient: "from-purple-500/10 to-blue-500/10"
    },
    {
      title: "Revolutionary AI Technologies",
      subtitle: "99.97% Consciousness Fidelity • 10^18 FLOPS • 25,000% ROI",
      cta: "Read Full Article",
      link: "/blog/ai-2036-revolutionary-breakthroughs",
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-500/10 to-indigo-500/10"
    },
    {
      title: "Future is Here",
      subtitle: "Experience the most advanced AI technologies ever created",
      cta: "Get Started",
      link: "/contact",
      gradient: "from-indigo-600 to-purple-600",
      bgGradient: "from-indigo-500/10 to-purple-500/10"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-4">
              {/* Animated Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-2xl">🚀</span>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500 to-blue-500 text-white animate-pulse">
                    NEW BREAKTHROUGH
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                    AI 2036
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-sm md:text-base text-purple-200 mb-3">
                  {slides[currentSlide].subtitle}
                </p>
                <div className="flex items-center space-x-4">
                  <Link
                    href={slides[currentSlide].link}
                    className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${slides[currentSlide].gradient} hover:opacity-90 text-white font-semibold text-sm rounded-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    {slides[currentSlide].cta}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/ai-2036-breakthrough-showcase"
                    className="text-purple-200 hover:text-white text-sm font-medium transition-colors duration-200"
                  >
                    View All Breakthroughs →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="hidden md:flex items-center space-x-2 ml-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
            aria-label="Close banner"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-100 ease-linear"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default AI2036BreakthroughPromotionBanner;