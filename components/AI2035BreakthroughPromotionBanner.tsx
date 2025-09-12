import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AI2035BreakthroughPromotionBanner = () => {
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
      title: "AI 2035: Quantum Consciousness Revolution",
      subtitle: "INFINITE ROI ACHIEVED",
      description: "Revolutionary AI breakthrough that changed everything",
      cta: "Discover the Future",
      link: "/blog/ai-2035-quantum-consciousness",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "AI 2035: Matter Creation Technology",
      subtitle: "REVOLUTIONARY BREAKTHROUGH",
      description: "Create matter from pure energy with AI",
      cta: "Explore Technology",
      link: "/blog/ai-2035-matter-creation",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "AI 2035: Dimension Transcendence",
      subtitle: "INFINITE POSSIBILITIES",
      description: "Transcend physical dimensions with AI",
      cta: "Learn More",
      link: "/blog/ai-2035-dimension-transcendence",
      gradient: "from-indigo-600 to-purple-600"
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-400/30 rounded-full animate-bounce"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-pink-400/30 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-400/30 rounded-full animate-bounce delay-2000"></div>
          <div className="absolute bottom-10 right-1/3 w-14 h-14 bg-indigo-400/30 rounded-full animate-bounce delay-500"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold mb-4 animate-pulse">
            🚀 REVOLUTIONARY BREAKTHROUGH - AI 2035
          </div>

          {/* Main Content */}
          <div className="relative h-32 flex items-center justify-center">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-purple-200 mb-4">
                  {slide.description}
                </p>
                <div className="flex items-center justify-center gap-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold rounded-full">
                    {slide.subtitle}
                  </span>
                  <Link
                    to={slide.link}
                    className={`px-6 py-3 bg-gradient-to-r ${slide.gradient} text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg`}
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-purple-200">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              INFINITE ROI Achieved
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Revolutionary Technology
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
              Future-Ready Solutions
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/ai-2035-breakthrough-content"
              className="px-4 py-2 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              View All Content
            </Link>
            <Link
              to="/case-studies/ai-2035-enterprise-transformation"
              className="px-4 py-2 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              Case Studies
            </Link>
            <Link
              to="/resources/ai-2035-implementation-guide"
              className="px-4 py-2 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              Implementation Guide
            </Link>
          </div>
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        aria-label="Close banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default AI2035BreakthroughPromotionBanner;