import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughPromotionBanner() {
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
      title: "🚀 AI 2025 Ultimate Breakthrough Revolution",
      subtitle: "2000%+ ROI • 99.7% Success Rate • Revolutionary Technologies",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      bgColor: "from-red-500 to-pink-500",
      textColor: "text-white"
    },
    {
      title: "🔮 AI 2026-2030 Future Predictions",
      subtitle: "95% Prediction Accuracy • ∞ ROI Potential • Singularity 2030",
      link: "/ai-2026-2030-future-predictions-showcase",
      bgColor: "from-purple-500 to-pink-500",
      textColor: "text-white"
    },
    {
      title: "⚛️ Advanced Quantum Computing Solutions",
      subtitle: "15,000% ROI • 99.9% Accuracy • 1000x Speed Improvement",
      link: "/quantum-computing-solutions-advanced",
      bgColor: "from-indigo-500 to-purple-500",
      textColor: "text-white"
    }
  ];
  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      {/* Main Banner */}
      <div className={`bg-gradient-to-r ${slides[currentSlide].bgColor} text-white py-4 px-4 relative`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold mb-1">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-sm md:text-base opacity-90">
                  {slides[currentSlide].subtitle}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 ml-6">
            <Link 
              href={slides[currentSlide].link}
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/30"
            >
              Explore Now
            </Link>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white transition-colors"
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
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/5 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      {/* Secondary Promotional Strip */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>500+ Enterprise Clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span>$2.5B+ Value Generated</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              <span>99.7% Success Rate</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution" 
              className="hover:text-blue-300 transition-colors"
            >
              AI 2025 Revolution
            </Link>
            <Link 
              href="/ai-2026-2030-future-predictions-showcase" 
              className="hover:text-blue-300 transition-colors"
            >
              Future Predictions
            </Link>
            <Link 
              href="/quantum-computing-solutions-advanced" 
              className="hover:text-blue-300 transition-colors"
            >
              Quantum Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
