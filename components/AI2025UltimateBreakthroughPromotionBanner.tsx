'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughPromotionBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "🚀 AI 2025 Ultimate Breakthrough",
      subtitle: "10,000% ROI • 99.9% Accuracy • Revolutionary Technology",
      cta: "Discover More",
      href: "/blog/ai-2025-ultimate-breakthrough-announcement",
      bgColor: "from-red-500 to-purple-600"
    },
    {
      title: "🏆 Global Transformation Success",
      subtitle: "Fortune 500 Case Study • $2.5B Savings • 6 Months",
      cta: "View Case Study",
      href: "/case-studies/ai-2025-global-transformation-breakthrough",
      bgColor: "from-green-500 to-blue-600"
    },
    {
      title: "🧮 Calculate Your ROI",
      subtitle: "Interactive Calculator • Instant Results • Free Tool",
      cta: "Try Calculator",
      href: "/tools/ai-2025-roi-calculator",
      bgColor: "from-blue-500 to-indigo-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  if (!isVisible) return null;

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative overflow-hidden">
      {/* Main Banner */}
      <div className={`bg-gradient-to-r ${currentSlideData.bgColor} text-white py-4 px-4 relative`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold mb-1">
                  {currentSlideData.title}
                </h3>
                <p className="text-sm md:text-base opacity-90">
                  {currentSlideData.subtitle}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              href={currentSlideData.href}
              className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
            >
              {currentSlideData.cta}
            </Link>
            
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-gray-200 transition-colors duration-200 p-1"
              aria-label="Close banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-gradient-to-r from-red-500 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
          <Link href="/blog/ai-2025-ultimate-breakthrough-announcement" className="flex items-center space-x-2">
            <span className="text-2xl">🚀</span>
            <div className="text-sm font-semibold">
              <div>AI 2025</div>
              <div>Breakthrough</div>
            </div>
          </Link>
        </div>
      </div>

      {/* Sticky Top Banner */}
      <div className="sticky top-0 z-40 bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-2 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-4">
          <span className="font-bold text-sm md:text-base">
            🔥 NEW: AI 2025 Ultimate Breakthrough - 10,000% ROI Achieved!
          </span>
          <Link
            href="/blog/ai-2025-ultimate-breakthrough-announcement"
            className="bg-black text-yellow-400 px-4 py-1 rounded-full text-xs font-bold hover:bg-gray-800 transition-colors duration-200"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  );
}