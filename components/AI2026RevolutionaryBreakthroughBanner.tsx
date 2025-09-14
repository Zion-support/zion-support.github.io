"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2026RevolutionaryBreakthroughBanner = () => {
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
      title: "AI 2026 Revolutionary Breakthrough Predictions",
      subtitle: "Quantum-Neural Fusion • 15,000% ROI • Consciousness Integration",
      link: "/blog/ai-2026-revolutionary-breakthrough-predictions",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200"
    },
    {
      title: "AI 2025 Ultimate Breakthrough Announcement",
      subtitle: "10,000% ROI • 99.9% Accuracy • Revolutionary Technology",
      link: "/blog/ai-2025-ultimate-breakthrough-announcement",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
      borderColor: "border-red-200"
    },
    {
      title: "Global Transformation Success Stories",
      subtitle: "Fortune 500 Companies • 10,000% ROI • Real Results",
      link: "/case-studies/ai-2025-global-transformation-breakthrough",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    }
  ];

  const currentSlideData = slides[currentSlide];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transform transition-all duration-500 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className={`bg-gradient-to-r ${currentSlideData.bgColor} border-b-2 ${currentSlideData.borderColor} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentSlideData.color} animate-pulse`}></div>
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentSlideData.color} animate-pulse`} style={{ animationDelay: '0.5s' }}></div>
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentSlideData.color} animate-pulse`} style={{ animationDelay: '1s' }}></div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {currentSlideData.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {currentSlideData.subtitle}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href={currentSlideData.link}
                className={`bg-gradient-to-r ${currentSlideData.color} text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
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
      
      {/* Slide Indicators */}
      <div className="flex justify-center space-x-2 py-2 bg-gray-100">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? `bg-gradient-to-r ${currentSlideData.color}` 
                : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AI2026RevolutionaryBreakthroughBanner;