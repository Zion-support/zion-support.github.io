import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughPromotionBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotionalContent = [
    {
      title: "🚀 AI 2025 Ultimate Breakthrough Revolution",
      subtitle: "Experience 2,500-5,000% ROI with Revolutionary AI Technologies",
      cta: "Explore Breakthrough",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      bgGradient: "from-red-500 to-pink-500",
      textColor: "text-white"
    },
    {
      title: "⚛️ Quantum Computing Solutions",
      subtitle: "10,000x Faster Processing with Quantum-Powered AI",
      cta: "Discover Quantum AI",
      link: "/quantum-computing-solutions",
      bgGradient: "from-purple-500 to-indigo-500",
      textColor: "text-white"
    },
    {
      title: "🧠 Neural Interface Technology",
      subtitle: "Direct Brain-Computer Interface for Enhanced Cognition",
      cta: "Learn More",
      link: "/neural-interface-solutions",
      bgGradient: "from-cyan-500 to-teal-500",
      textColor: "text-white"
    },
    {
      title: "🤖 Autonomous Operations",
      subtitle: "Self-Optimizing Business Systems with 99.9% Accuracy",
      cta: "Start Automation",
      link: "/automation-solutions",
      bgGradient: "from-orange-500 to-red-500",
      textColor: "text-white"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black border-b border-gray-700">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Main content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-4">
                {/* Animated icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full flex items-center justify-center animate-spin">
                    <span className="text-2xl">🚀</span>
                  </div>
                </div>
                
                {/* Text content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-white truncate">
                    {promotionalContent[currentSlide].title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 truncate">
                    {promotionalContent[currentSlide].subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex-shrink-0 ml-4">
              <Link
                href={promotionalContent[currentSlide].link}
                className={`inline-flex items-center px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 bg-gradient-to-r ${promotionalContent[currentSlide].bgGradient} ${promotionalContent[currentSlide].textColor} hover:shadow-lg`}
              >
                {promotionalContent[currentSlide].cta}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsVisible(false)}
              className="flex-shrink-0 ml-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
        <div 
          className="h-full bg-gradient-to-r from-yellow-400 to-red-500 transition-all duration-5000 ease-linear"
          style={{ width: '100%' }}
        />
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-2 right-4 flex space-x-1">
        {promotionalContent.map((_, index) => (
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
  );
}