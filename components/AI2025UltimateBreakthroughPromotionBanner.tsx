import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateBreakthroughPromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "🚀 AI 2025 Ultimate Breakthrough Revolution",
      subtitle: "Experience 10,000% ROI with Revolutionary AI Technology",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      bgColor: "from-purple-600 to-blue-600"
    },
    {
      title: "🏆 Global Transformation Success Story",
      subtitle: "Discover How Fortune 500 Achieved 10,000% ROI",
      link: "/case-studies/ai-2025-global-transformation-breakthrough",
      bgColor: "from-green-600 to-blue-600"
    },
    {
      title: "🔮 Revolutionary AI Trends & Predictions",
      subtitle: "Stay Ahead with 2025 AI Predictions & Insights",
      link: "/blog/ai-2025-revolutionary-trends-predictions",
      bgColor: "from-cyan-600 to-purple-600"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      <div className={`bg-gradient-to-r ${slides[currentSlide].bgColor} text-white py-4 px-4 animate-pulse`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              {slides[currentSlide].title}
            </h2>
            <p className="text-sm md:text-base text-gray-200">
              {slides[currentSlide].subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={slides[currentSlide].link}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full text-sm transition-colors whitespace-nowrap"
            >
              Explore Now
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-2 px-6 rounded-full text-sm transition-colors whitespace-nowrap"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-2 right-4 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AI2025UltimateBreakthroughPromotionBanner;